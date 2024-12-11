

export function Balance({value}){
    return  <div className=" ml-7 mt-7 flex" >
        <div className="font-bold text-lg ">
            Your Balance
        </div>
        <div className=" font-semibold ml-2 text-lg">
            Rs{value}
        </div>
    </div>
}