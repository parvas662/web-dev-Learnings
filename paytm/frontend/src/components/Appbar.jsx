
export function Appbar({ label }) {
    return <div className="shadow h-14  flex justify-between px-4">
        <div className="flex flex-col justify-center h-full ml-4 text-bold">
            {label}
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full ml-4" >
                Hello,
            </div>
            <div className="rounded-full h-10 w-10 bg-slate-200 flex justify-center mt-2 ml-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl" >
                    U
                </div>
            </div>
        </div>
    </div>

}