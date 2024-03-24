import Link from "next/link";

export default () => {
    return (
        <header className="flex items-center justify-between">
            <div>
                Praca
            </div>
            <div>
                {/*
                <SearchBar>
                </SearchBar>
                */}
            </div>
            <div>
                <ul>
                    <li>
                        <Link href="/data">
                            Data
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
