/**
 * Triple & Co. brand icon system.
 *
 * Every icon follows the same contract so iconography reads as one family:
 * - 24x24 viewBox, geometry kept on a 1.5px grid
 * - 1.75 stroke, round caps and joins, no fills on strokes
 * - one small filled square per icon (the "node"), echoing the
 *   three-square logo mark; it always renders in currentColor
 * - color comes from the parent via currentColor; never hardcode a hex
 *
 * Add new icons here rather than inlining one-off SVGs in pages.
 */

export type BrandIconName =
  | "leadership"
  | "revenue"
  | "growth"
  | "brand"
  | "roadmap"
  | "social"
  | "crm"
  | "pipeline"
  | "events"
  | "team";

function Node({ x, y }: { x: number; y: number }) {
  return <rect x={x} y={y} width="3" height="3" rx="0.75" fill="currentColor" stroke="none" />;
}

const ICONS: Record<BrandIconName, React.ReactNode> = {
  /* Person at the head of the table, node = the seat they own */
  leadership: (
    <>
      <circle cx="10.5" cy="8" r="3.5" />
      <path d="M4 20.5a6.5 6.5 0 0 1 13 0" />
      <Node x={17.25} y={4.25} />
    </>
  ),
  /* Trend line climbing to the node = the number that gets hit */
  revenue: (
    <>
      <path d="M3.5 17.5l4.5-4.5 3.5 3.5L19 9" />
      <path d="M14.5 8.5H19v4.5" />
      <Node x={3.5} y={3.5} />
    </>
  ),
  /* Compounding loop with the node at the center of the system */
  growth: (
    <>
      <path d="M20 12a8 8 0 1 1-3-6.25" />
      <path d="M20 3.5V7h-3.5" />
      <Node x={10.5} y={10.5} />
    </>
  ),
  /* Spark of the story, node anchoring it to the ground */
  brand: (
    <>
      <path d="M11.5 3c.55 3.7 2.3 5.45 6 6-3.7.55-5.45 2.3-6 6-.55-3.7-2.3-5.45-6-6 3.7-.55 5.45-2.3 6-6z" />
      <Node x={16} y={16.75} />
    </>
  ),
  /* Flag planted on the route, node = the milestone shipped */
  roadmap: (
    <>
      <path d="M6 21V4" />
      <path d="M6 4.5h10.5L14 8l2.5 3.5H6" />
      <Node x={16.75} y={17} />
    </>
  ),
  /* Conversation bubble, node = the post that starts it */
  social: (
    <>
      <path d="M12 3.5a8.5 8.5 0 0 1 0 17H4l1.7-3.4A8.5 8.5 0 0 1 12 3.5z" />
      <Node x={10.5} y={10.25} />
    </>
  ),
  /* Hub and spokes, node = the single source of truth */
  crm: (
    <>
      <circle cx="5" cy="5" r="2" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="12" cy="19.5" r="2" />
      <path d="M6.4 6.4l4.2 4.2M17.6 6.4l-4.2 4.2M12 13.75v3.75" />
      <Node x={10.5} y={10.5} />
    </>
  ),
  /* Funnel, node = the qualified deal that comes out */
  pipeline: (
    <>
      <path d="M3.5 4h17l-6.5 7.5v5L10 19v-7.5L3.5 4z" />
      <Node x={16.75} y={16.75} />
    </>
  ),
  /* Event badge on a lanyard, node = the scan that becomes pipeline */
  events: (
    <>
      <rect x="4.5" y="7" width="15" height="13" rx="2" />
      <path d="M9 7l3-4 3 4" />
      <path d="M8.5 12h7M8.5 15.5h3.5" />
      <Node x={13.75} y={14} />
    </>
  ),
  /* Two people, node = the playbook that stays when we leave */
  team: (
    <>
      <circle cx="9" cy="8" r="3.25" />
      <path d="M3 20.5a6 6 0 0 1 12 0" />
      <path d="M15.5 5.25a3.25 3.25 0 0 1 0 6M17.5 14.9a6 6 0 0 1 3.5 5.6" />
      <Node x={17.5} y={3.5} />
    </>
  ),
};

export function BrandIcon({
  name,
  className = "w-6 h-6",
}: {
  name: BrandIconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}
