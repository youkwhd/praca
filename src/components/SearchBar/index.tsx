import { TbSearch } from "react-icons/tb";

export default () => {
    return (
        <div className="flex align-center justify-center border border-praca-grey rounded-md p-2 text-sm">
            <TbSearch className="my-auto mr-1"/>
            <input className="outline-none" type="text" placeholder="Search jobs" />
        </div>
    );
}
