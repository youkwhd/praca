const PROTOCOL = "https://"
const JOBICY_BASE_API_URL = `${PROTOCOL}jobicy.com/api/v2`;

export type Industry =
    "business"
    | "copywriting"
    | "supporting"
    | "data-science"
    | "design-multimedia"
    | "admin"
    | "accounting-finance"
    | "hr"
    | "marketing"
    | "management"
    | "dev"
    | "seller"
    | "seo"
    | "smm"
    | "engineering"
    | "technical-support"
    | "web-app-design";

export const getRemoteJobs = async (industry?: Industry, count?: number, geo?: string, tag?: string): Promise<any> => {
    const url = new URL(`${JOBICY_BASE_API_URL}/remote-jobs`);
    const urlQueries = new URLSearchParams();

    if (industry) urlQueries.append("industry", industry);
    if (count) urlQueries.append("count", count.toString());
    if (geo) urlQueries.append("geo", geo);
    if (tag) urlQueries.append("tag", tag);

    const response: Response = await fetch(`${url.toString()}?${urlQueries.toString()}`);
    return await response.json();
}

export const convertJobTypeToReadable = (jobType: string) => {
    return jobType
            .split("-")
            .map((type: string) => `${type[0].toUpperCase()}${type.slice(1)}`)
            .join(" ")
}

export default { getRemoteJobs, convertJobTypeToReadable };
