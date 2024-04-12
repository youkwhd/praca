import { TbSearch } from "react-icons/tb";

const ICON_SIZE: string = "1em";

export default () => {
    return (
        <div className="flex align-center border border-praca-grey rounded-md p-2 text-sm w-full">
            <TbSearch 
                style={{ width: ICON_SIZE, minWidth: ICON_SIZE, height: ICON_SIZE, minHeight: ICON_SIZE }}                
                className="my-auto mr-1"/>
            <input className="outline-none w-full" type="text" placeholder="Search jobs" />
        </div>
    );
}
