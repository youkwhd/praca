import Image from "next/image";
import { getRemoteJobs } from "@/api/jobicy";

export default async () => {
    const jobResult = await getRemoteJobs();

    return (
        <>
            {jobResult.jobs.map((job: any) => {
                return (
                    <div key={job.id}>
                        <p>{job.jobTitle}</p>
                        <img src={job.companyLogo}
                            alt="Company Logo"
                            width={30}
                            height={30} />
                    </div>
                );
            })}
        </>
    );
}
