import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../Components/LocationSearchPanel";
import VehiclePanel from "../Components/VehiclePanel";
import ConfirmRide from "../Components/ConfirmRide";
import LookingForDriver from "../Components/LookingForDriver";
import WaitingForDriver from "../Components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelopen, setPanelopen] = useState(false);

  const panelref = useRef(null);
  const panelcloseref = useRef(null);
  const [vehiclepanel, setVehiclepanel] = useState(false);
  const [confirmride, setConfirmride] = useState(false);

  const [vehiclefound, setVehiclefound] = useState(false);

  const confirmridepanelref = useRef(null);

  useGSAP(
    function () {
      if (panelopen) {
        gsap.to(panelref.current, {
          height: "70%",
          ease: "power1.inOut",
        });
        gsap.to(panelcloseref.current, {
          opacity: 1,
          ease: "power1.inOut",
        });
      } else {
        gsap.to(panelref.current, {
          height: "0",
          ease: "power1.inOut",
        });
        gsap.to(panelcloseref.current, {
          opacity: 0,
          ease: "power1.inOut",
        });
      }
    },
    [panelopen]
  );

  const vehiclepanelref = useRef(null);

  useGSAP(
    function () {
      if (vehiclepanel) {
        gsap.to(vehiclepanelref.current, {
          transform: "translateY(0)",
          ease: "power1.inOut",
        });
      } else {
        gsap.to(vehiclepanelref.current, {
          transform: "translateY(100%)",
          ease: "power1.inOut",
        });
      }
    },
    [vehiclepanel]
  );

  useGSAP(
    function () {
      if (confirmride) {
        gsap.to(confirmridepanelref.current, {
          transform: "translateY(0)",
          ease: "power1.inOut",
        });
      }

      else {
        gsap.to(confirmridepanelref.current, {
          transform: "translateY(100%)",
          ease: "power1.inOut",
        });
      }
    },
    [confirmride]
  );

  useGSAP(
    function () {
      if (vehiclefound) {
        gsap.to(waitingfordriverpanelref.current, {
          transform: "translateY(0)",
          ease: "power1.inOut",
        });
      }
    },
    [vehiclefound]
  );

  const waitingfordriverpanelref = useRef(null);


  const [waitingfordriver, setWaitingfordriver] = useState(false);
  const waitingfordriverref = useRef(null);

  useGSAP(
    function () {
      if (waitingfordriver) {
        gsap.to(waitingfordriverref.current, {
          transform: "translateY(0)",
          ease: "power1.inOut",
        });
      }
      else {
        gsap.to(waitingfordriverref.current, {
          transform: "translateY(100%)",
          ease: "power1.inOut",
        });
      }
    },
    [waitingfordriver]
  );

 





  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen rounded-md overflow-hidden">
      <div className="relative h-[667px] w-[375px] border-2 border-black rounded-xl overflow-hidden">
        <div className="w-full h-full relative">
          <img
            className="w-16 absolute left-5 top-5"
            src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
            alt=""
          />

          <div className="w-full h-full">
            {/* image for temp */}
            <img
              className="w-full h-full object-cover"
              src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
              alt=""
            />
          </div>

          <div className=" absolute top-0 w-full h-full flex flex-col justify-end">
            <div className="h-[30%] p-5 bg-white relative">
              <h5
                ref={panelcloseref}
                className="absolute right-5 top-5 font-bold text-2xl"
              >
                <i onClick={() => setPanelopen(false)} className="ri-arrow-down-wide-fill"></i>
              </h5>

              <h4 className="text-3xl font-semibold">Find a Trip</h4>
              <form className="relative" onSubmit={submitHandler}>
                <div className="line absolute left-0 top-7 left-4 w-1 h-14 w-1 bg-gray-600 rounded-full "></div>
                <input
                  onClick={() => setPanelopen(true)}
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="bg-[#eee] px-12 py-2 tex-base rounded-lg mb-3 mt-3 w-full  rounded-md"
                  type="text"
                  placeholder="Add a pickup location"
                />
                <input
                  onClick={() => setPanelopen(true)}
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="bg-[#eee] px-12 py-2 tex-base rounded-lg rounded-md w-full"
                  type="text"
                  placeholder="Enter your destination"
                />
              </form>
            </div>

            <div ref={panelref} className="bg-white h-0 ">
              <LocationSearchPanel
                setPanelopen={setPanelopen}
                setVehiclepanel={setVehiclepanel}
              />
            </div>
          </div>

          <div
            ref={vehiclepanelref}
            className="absolute bg-white z-10 translate-y-full bottom-0 p-3"
          >

            <VehiclePanel setConfirmride={setConfirmride} setVehiclepanel={setVehiclepanel}/>
            
          </div>

          <div ref={confirmridepanelref} className="absolute bg-white z-10 translate-y-full bottom-0 p-3 w-full">
            <ConfirmRide setConfirmride={setConfirmride} setVehiclefound={setVehiclefound} />
          </div>

          <div ref={waitingfordriverpanelref} className="absolute bg-white z-10 translate-y-full bottom-0 p-3 w-full">
            <LookingForDriver setVehiclefound={setVehiclefound} setConfirmride={setConfirmride} />
          </div>

          <div ref={waitingfordriverref} className="absolute bg-white z-10 translate-y-full bottom-0 p-3 w-full">
            <WaitingForDriver  setVehiclefound={setVehiclefound} />
          </div>




        </div>
      </div>
    </div>
  )
}

export default Home;
