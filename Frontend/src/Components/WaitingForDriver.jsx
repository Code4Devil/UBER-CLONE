import React from 'react'

const WaitingForDriver = (props) => {
    return (
        <div className='w-full'>
            <div className='flex justify-between'>
           
            <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>
            <i onClick={()=>{
                props.setWaitingfordriver(false)
            }} className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
            </div>



            <div className='flex items-center justify-between'>
            <img className='h-24' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png" alt="" />
            <div className='text-right'>
                <h2 className='text-lg font-semibold'>Sarthak</h2>
                <h4 className='text-sm text-gray-600 font-semibold'>MP04 C0001</h4>
                <p className='text-sm text-gray-600'>Maruti Suzuki Swift</p>
                
            </div>

            </div>
          

            <div className='flex gap-2 justify-between flex-col items-center'>
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Pickup</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Destination</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>197</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WaitingForDriver