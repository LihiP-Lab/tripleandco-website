import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { DeliverableIcon } from "./deliverable-icon";
import { agents } from "./agents-data";

function getSvg(container: HTMLElement): SVGElement {
  const svg = container.querySelector("svg");
  if (!svg) throw new Error("expected an <svg> to be rendered");
  return svg;
}

describe("DeliverableIcon", () => {
  it("renders an svg for a mapped emoji", () => {
    const { container } = render(<DeliverableIcon emoji={"\uD83C\uDFAF"} />);
    expect(getSvg(container)).toBeInTheDocument();
  });

  it("forwards className to the rendered icon", () => {
    const { container } = render(
      <DeliverableIcon emoji={"\uD83C\uDFAF"} className="size-6 text-cyan-400" />
    );
    const svg = getSvg(container);
    expect(svg).toHaveClass("size-6");
    expect(svg).toHaveClass("text-cyan-400");
  });

  it("marks the icon as decorative via aria-hidden", () => {
    const { container } = render(<DeliverableIcon emoji={"\uD83C\uDFAF"} />);
    expect(getSvg(container)).toHaveAttribute("aria-hidden", "true");
  });

  it("falls back to a Sparkles icon for an unknown emoji", () => {
    const { container: known } = render(
      <DeliverableIcon emoji={"\uD83C\uDFAF"} />
    );
    const { container: unknown } = render(
      <DeliverableIcon emoji="not-an-emoji" />
    );
    // The fallback should render *an* icon...
    expect(getSvg(unknown)).toBeInTheDocument();
    // ...that is distinct from a mapped icon.
    expect(getSvg(unknown).innerHTML).not.toBe(getSvg(known).innerHTML);
  });

  it("renders a non-empty icon for every deliverable emoji in agents-data", () => {
    const emojis = agents.flatMap((a) => a.deliverables.map((d) => d.icon));
    for (const emoji of emojis) {
      const { container } = render(<DeliverableIcon emoji={emoji} />);
      expect(getSvg(container).innerHTML.length).toBeGreaterThan(0);
    }
  });
});
