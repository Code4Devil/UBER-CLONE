import React from 'react'
import { useState } from 'react'


const VehiclePanel = (props) => {
  return (
    <div className='w-full'>
        <i onClick={() => props.setVehiclepanel(false)} className="ri-arrow-down-wide-fill absolute right-5 top-5 font-bold text-2xl"></i>

            <h3 className="text-2xl font-semibold mb-5">Choose a vehicle</h3>

            <div onClick={() => {props.setConfirmride(true)
            props.setVehiclepanel(false)
              
            }
              
            } className="flex items-center gap-5 justify-between p-2 border-2 active:border-black rounded-xl mb-2">
              <img
                className="h-14 "
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png"
                alt=""
              />
              <div className="font-semibold text-sm">
                <h4>
                  Uber Go{" "}
                  <span>
                    <i className="ri-user-3-fill"></i>4
                  </span>
                </h4>
                <h5>2 Mins Away</h5>
                <p className="font-semibold text-xs text-gray-600">
                  Affordable, Compact Rides
                </p>
              </div>
              <h2 className="text-lg font-semibold">₹193.20</h2>
            </div>
            <div onClick={() => props.setConfirmride(true)} className="flex items-center gap-5 justify-between p-2 border-2 active:border-black rounded-xl mb-2">
              <img
                className="h-14"
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
                alt=""
              />
              <div className="font-semibold text-sm">
                <h4>
                  {" "}
                  Moto{" "}
                  <span>
                    <i className="ri-user-3-fill"></i>1
                  </span>
                </h4>
                <h5>2 Mins Away</h5>
                <p className="w-[80%] font-semibold text-xs text-gray-600">
                  Affordable, Motorcycle Rides
                </p>
              </div>
              <h2 className="text-lg font-semibold">₹65</h2>
            </div>
            <div onClick={() => props.setConfirmride(true)} className="flex items-center gap-5 justify-between p-2 border-2 active:border-black rounded-xl">
              <img
                className="h-14"
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
                alt=""
              />
              <div className="font-semibold text-sm">
                <h4>
                  {" "}
                  UberAuto{" "}
                  <span>
                    <i className="ri-user-3-fill"></i>3
                  </span>
                </h4>
                <h5>2 Mins Away</h5>
                <p className="w-[80%] font-semibold text-xs text-gray-600">
                  Affordable, Auto Rides
                </p>
              </div>
              <h2 className="text-lg font-semibold">₹118.68</h2>
            </div>
    </div>
  )
}

export default VehiclePanel