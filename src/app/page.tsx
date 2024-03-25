import Image from "next/image";
import { getRemoteJobs, parseJobType, parseJobGeo } from "@/api/jobicy";

export default async () => {
    const jobResult = await getRemoteJobs("web-app-design");

    return (
        <main>
            {jobResult.jobs.map((job: any) => {
                return (
                    <div key={job.id} className="my-5">
                        <p>{job.jobTitle}</p>
                        <p>{job.companyName}</p>
                        <img src={job.companyLogo}
                            alt="Company Logo"
                            width={30}
                            height={30} />
                        <p>{parseJobType(job.jobType[0])}</p>
                        <ul>
                            {parseJobGeo(job.jobGeo).map((geo: string) => {
                                return (
                                    <li>{geo}</li>
                                );
                            })}
                        </ul>
                        <p>{job.pubDate}</p>
                    </div>
                );
            })}
        </main>
    );
}
