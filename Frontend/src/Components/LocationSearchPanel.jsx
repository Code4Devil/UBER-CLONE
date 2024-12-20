import React from 'react'

const LocationSearchPanel = (props) => {


  const sampleLocations = [
    {
      id: 1,
      address: "24 B, Near Kapoors Cafe, Sheryians Coding School, Bhopal"
    },
    {
      id: 2, 
      address: "DB City Mall, MP Nagar Zone 1, Bhopal"
    },
    {
      id: 3,
      address: "Bhopal Railway Station, Bhopal Junction, Bhopal"
    },
    {
      id: 4,
      address: "New Market, TT Nagar, Bhopal"
    },
    {
      id: 5,
      address: "Van Vihar National Park, Shymala Hills, Bhopal"
    }
  ];

  return (
    <div className='p-5'>

      {sampleLocations.map((item,index) => (
        <div onClick={() =>{
           props.setVehiclepanel(true) ,
           props.setPanelopen(false)
          }} key={index}  className='flex items-center gap-4 mb-4 text-base font-medium border-2 border-white active:border-black active:border-2 rounded-xl p-2  '>
          <h2 className='bg-[#eee] px-3 py-3 rounded-full flex justify-center items-center' ><i className="ri-map-pin-fill"></i></h2>
          <h4>{item.address}</h4>
        </div>
      ))}


      

      
    </div>
  )
}

export default LocationSearchPanel