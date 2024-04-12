import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import { TbDatabase, TbBookmark } from "react-icons/tb";

const ICON_SIZE: string = "1em";

export default () => {
    return (
        <header className="border-b border-praca-grey">
            <div className="flex items-center justify-between max-w-screen-2xl mx-auto my-3.5 px-4">
                <div className="flex items-center justify-center mx-2">
                    <h1 className="font-extrabold text-lg">
                        <Link href="/">
                            Praca
                        </Link>
                    </h1>
                    <div className="flex items-center justify-center mx-7">
                        <SearchBar>
                        </SearchBar>
                    </div>
                </div>
                <div className="mx-2">
                    <ul className="flex flex-row *:ml-3 [&>li>a]:flex [&>li>a]:items-center [&>li>a]:justify-center [&>li>a>span]:mx-1">
                        <li>
                            <Link href="/saved">
                                <TbBookmark style={{ width: ICON_SIZE, minWidth: ICON_SIZE, height: ICON_SIZE, minHeight: ICON_SIZE }} />
                                <span>Saved Jobs</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://jobicy.com/jobs-rss-feed" target="_blank" rel="noopener noreferrer">
                                <TbDatabase style={{ width: ICON_SIZE, minWidth: ICON_SIZE, height: ICON_SIZE, minHeight: ICON_SIZE }} />
                                <span>Data</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
