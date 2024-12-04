export function RevenueCard({ title, amount, orderCount }) {
    return <div>
        <div className="bg-slate-50 shadow-md px-5 pt-5 rounded-md">
            <div className="flex items-center gap-1 pb-5" >
                <div>{title}</div>
                <div >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg></div>
            </div>
            <div className=" pb-3 flex justify-between items-center">
                <div className="font-semibold text-3xl" >
                    ₹ {amount}
                </div>
                {orderCount >0 ? <div className="underline flex cursor-pointer text-blue-600">
                    <div>{orderCount} Order(s)</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div> : null}

            </div>
        </div>
    </div>
}
