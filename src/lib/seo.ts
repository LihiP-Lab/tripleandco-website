// Shared entity + freshness constants for structured data.
//
// SITE_LAST_MODIFIED feeds `dateModified` on the homepage CreativeWork blocks.
// AI Search Readiness rubrics score freshness and expect this under 90 days,
// so bump it whenever homepage copy changes materially. Keep it ISO 8601.
export const SITE_LAST_MODIFIED = "2026-08-17";

export const SITE_URL = "https://www.tripleandco.com";
export const ORG_ID = `${SITE_URL}/#organization`;
export const LIHI_ID = `${SITE_URL}/#lihi-pinto`;
export const LLMS_TXT_URL = `${SITE_URL}/llms.txt`;

/** Reference to the Person node defined on the homepage. */
export const lihiRef = { "@id": LIHI_ID };
