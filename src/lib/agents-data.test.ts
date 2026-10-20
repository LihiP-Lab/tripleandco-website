import { describe, it, expect } from "vitest";
import {
  agents,
  CATEGORIES,
  type Agent,
  type Category,
} from "./agents-data";

const VALID_MODELS = ["Claude Sonnet", "Claude Opus", "Claude Haiku"];

describe("agents-data: CATEGORIES", () => {
  it("starts with the 'All' pseudo-category", () => {
    expect(CATEGORIES[0]).toBe("All");
  });

  it("contains no duplicates", () => {
    expect(new Set(CATEGORIES).size).toBe(CATEGORIES.length);
  });
});

describe("agents-data: agents collection", () => {
  it("exposes a non-empty list of agents", () => {
    expect(agents.length).toBeGreaterThan(0);
  });

  it("has a unique id for every agent", () => {
    const ids = agents.map((a) => a.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("uses lowercase, hyphen/alphanumeric-only ids", () => {
    for (const agent of agents) {
      expect(agent.id).toMatch(/^[a-z0-9-]+$/);
    }
  });
});

describe.each(agents)("agent: $id", (agent: Agent) => {
  it("has all required non-empty string fields", () => {
    const requiredStrings: (keyof Agent)[] = [
      "id",
      "name",
      "role",
      "shortRole",
      "description",
      "image",
      "hourlyRate",
      "monthlyRetainer",
    ];
    for (const key of requiredStrings) {
      expect(typeof agent[key]).toBe("string");
      expect((agent[key] as string).length).toBeGreaterThan(0);
    }
  });

  it("declares a supported Claude model", () => {
    expect(VALID_MODELS).toContain(agent.model);
  });

  it("points image at a local /images path", () => {
    expect(agent.image).toMatch(/^\/images\/.+\.(png|jpe?g|webp|svg)$/);
  });

  it("has exactly three fully-populated deliverables", () => {
    expect(agent.deliverables).toHaveLength(3);
    for (const d of agent.deliverables) {
      expect(d.icon.length).toBeGreaterThan(0);
      expect(d.title.length).toBeGreaterThan(0);
      expect(d.description.length).toBeGreaterThan(0);
    }
  });

  it("has a complete diagnostic with a $-prefixed price", () => {
    expect(agent.diagnostic.name.length).toBeGreaterThan(0);
    expect(agent.diagnostic.duration.length).toBeGreaterThan(0);
    expect(agent.diagnostic.price).toMatch(/^\$[\d,]+/);
  });

  it("references only known categories and at least one of them", () => {
    expect(agent.categories.length).toBeGreaterThan(0);
    for (const c of agent.categories) {
      expect(CATEGORIES).toContain(c as Category);
    }
  });

  it("formats hourlyRate and monthlyRetainer as $ amounts", () => {
    expect(agent.hourlyRate).toMatch(/^\$[\d,]+/);
    expect(agent.monthlyRetainer).toMatch(/^\$[\d,]+/);
  });
});
