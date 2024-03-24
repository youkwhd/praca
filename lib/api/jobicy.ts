const PROTOCOL = "https://"
const JOBICY_BASE_API_URL = `${PROTOCOL}jobicy.com/api/v2`;

export const getRemoteJobs = async (): Promise<any> => {
    const response: Response = await fetch(`${JOBICY_BASE_API_URL}/remote-jobs`);
    return await response.json();
}

export default { getRemoteJobs};
