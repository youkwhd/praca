import Image from "next/image";
import { getRemoteJobs, parseJobType, parseJobGeo } from "@/api/jobicy";

export default async () => {
    const jobResult = await getRemoteJobs("web-app-design");

    return (
        <main className="grid grid-cols-mmax-340 gap-4">
            {jobResult.jobs.map((job: any) => {
                return (
                    <div key={job.id} className="p-3 bg-praca-grey flex align-center rounded-md border border-praca-grey"
                                      // style={{ width: 450 }}
                                      >
                        <div>
                            <div className="m-1.5 flex align-center justify-center">
                                <img className="rounded"
                                    src={job.companyLogo}
                                    alt="Company Logo"
                                    width={40}
                                    height={40} />
                            </div>
                        </div>
                        <div className="mx-2">
                            <div>
                                <p className="font-semibold">{job.jobTitle}</p>
                                <p className="text-sm">{job.companyName}</p>
                            </div>
                            <div>
                                <p className="text-xs">{parseJobType(job.jobType[0])}</p>
                                {/*
                                <ul>
                                    {parseJobGeo(job.jobGeo).map((geo: string) => {
                                        return (
                                            <li key={geo} className="text-xs">{geo}</li>
                                        );
                                    })}
                                </ul>
                                */}
                                <p className="text-xs">{job.pubDate}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </main>
    );
}
