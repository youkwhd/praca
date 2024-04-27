"use client";

import { useState, useRef, useEffect } from "react";
import { getRemoteJobs, parseJobType, parseJobGeo, INDUSTRIES } from "@/api/jobicy";
import kontinu from "kontinu";

const COMPANY_LOGO_SIZE: number = 40;

export default () => {
    const lastJobCardRef = useRef(null);
    const [currentIndustryIdx, setCurrentIndustryIdx] = useState(15);
    const [jobs, setJobs] = useState([]);

    const fetchMoreJobs = async () => {
        if (currentIndustryIdx >= INDUSTRIES.length)
            return;

        const __jobs = await getRemoteJobs(INDUSTRIES[currentIndustryIdx]);
        setJobs((prev) => [...prev, ...__jobs.jobs] as Array<never>);
        setCurrentIndustryIdx((prev: number) => prev + 1);
    };

    useEffect(() => {
        (async () => {
            await fetchMoreJobs();
        })();
    }, []);

    useEffect(() => {
        if (!lastJobCardRef.current)
            return;

        kontinu.observe(lastJobCardRef.current, () => {
            (async () => {
                await fetchMoreJobs();
            })();
        });
    }, [lastJobCardRef.current, jobs]);

    return (
        <main className="grid grid-cols-mmax-340 gap-4">
            {jobs.map((job: any, idx: number) => {
                // TODO: rename this variable
                const JOB_TITLE_SLICER = "...";
                const JOB_TITLE_MAX_LENGTH = 40 - JOB_TITLE_SLICER.length;

                let jobTitle = job.jobTitle;
                if (jobTitle.length > JOB_TITLE_MAX_LENGTH) jobTitle = jobTitle.slice(0, JOB_TITLE_MAX_LENGTH).trim().concat(JOB_TITLE_SLICER);

                // TODO: rename this variable
                const jobPubDate: Date = new Date(job.pubDate);

                let jobPubDateDay = `${jobPubDate.getDate()}th`;
                if (jobPubDate.getDate() === 1) jobPubDateDay = "1st";
                if (jobPubDate.getDate() === 2) jobPubDateDay = "2nd";

                // TODO: rename this variable
                const jobPubDateMonth = jobPubDate.toLocaleString("en-US", { month: "long" });

                return (
                    <div key={`${job.id}-${idx}`}
                        className="p-3 bg-praca-grey flex align-center rounded-md border border-praca-grey"
                        ref={idx === jobs.length - 1 ? lastJobCardRef : null}>
                        <div>
                            <div className="m-1.5 flex align-center justify-center">
                                <img className="rounded"
                                    style={{minWidth: COMPANY_LOGO_SIZE, minHeight: COMPANY_LOGO_SIZE}}
                                    src={job.companyLogo}
                                    alt=""
                                    width={COMPANY_LOGO_SIZE}
                                    height={COMPANY_LOGO_SIZE} />
                            </div>
                        </div>
                        <div className="mx-2">
                            <div>
                                <p className="font-semibold">{jobTitle}</p>
                                <p className="text-sm">{job.companyName}</p>
                            </div>
                            <div>
                                <p className="text-xs mt-0.5">
                                    {parseJobType(job.jobType[0])}
                                </p>
                                {/*
                                <ul>
                                    {parseJobGeo(job.jobGeo).map((geo: string) => {
                                        return (
                                            <li key={geo} className="text-xs">{geo}</li>
                                        );
                                    })}
                                </ul>
                                */}
                                <p className="text-xs">{`${jobPubDateMonth} ${jobPubDateDay}, ${jobPubDate.getFullYear()}`}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </main>
    );
}
