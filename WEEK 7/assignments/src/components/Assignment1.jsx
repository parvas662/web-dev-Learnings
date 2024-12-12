
export function Assignment1() {
    return <div className="h-screen bg-slate-900 shadow  flex justify-center items-center overflow-hidden">
        <div className="h-96 w-80 bg-white rounded-lg shadow-md shadow-white ">
            <div className="flex flex-col ">
                <div>
                    <img className="w-96 h-40 rounded-t-lg " src="/images.jpeg" alt="" />
                </div>
                <div className="flex justify-center relative -top-16 " >
                    <img className=" rounded-full w-36 h-36 border-white border-2 " src="/potrait.jpeg" alt="" />
                </div>
                <div className="-mt-14 h-24 flex flex-col justify-center items-center">
                    <span>Vishu Sharma <span className="font-extralight opacity-50">20</span></span>
                    <span className="font-extralight opacity-50 ">London</span>
                </div>
                <hr className="bold" />
                <div className='flex items-center justify-around py-4 rounded-lg bg-white'>
                    <div className='flex flex-col items-center justify-center'>
                        <h2 className='font-bold'>80K</h2>
                        <p className='text-sm opacity-50'>Followers</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h2 className='font-bold'>803K</h2>
                        <p className='text-sm opacity-50'>Likes</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h2 className='font-bold'>1.4K</h2>
                        <p className='text-sm opacity-50'>Photos</p>
                    </div>
                </div>


            </div>
        </div>
    </div>
}