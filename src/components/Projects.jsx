import React from "react";
import TabCard from "./TabCard";

function ProjectsTab() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-10 text-black bg-white px-28">
      <h1 className="w-1/2 text-3xl font-medium text-center text-black">
        Projects
      </h1>
      <h4>Below are some of our services:</h4>

      {/* Tabs */}
      <ul className="flex flex-row justify-between w-2/3 p-2 my-4">
        <li className="p-2 font-medium">
          <input type="radio" name="" id="" className="p-2 mr-2" />
          Consultancy Services
        </li>
        <li className="p-2 font-medium">
          <input type="radio" name="" id="" className="p-2 mr-2" />
          Water Development
        </li>
        <li className="p-2 font-medium">
          <input type="radio" name="" id="" className="p-2 mr-2" />
          Surveying Works
        </li>
        <li className="p-2 font-medium">
          <input type="radio" name="" id="" className="p-2 mr-2" />
          Civil Works
        </li>
      </ul>

      <div className="flex flex-row items-center justify-center w-full h-full gap-4 p-4 ">
        <div className="flex flex-col items-center w-full h-full p-10 bg-white rounded-lg justify-evenly">
          <div className="w-full h-full rounded-lg bg-neutral-300"> </div>
          <div className="flex flex-col w-full py-5 h-2/3">
            <h1 className="font-bold">Solar energy.</h1>
            <h1>
              Solar water pumping project carried out at Rhino camp in Arua
              District.
            </h1>
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col items-center w-full h-full p-10 bg-white rounded-lg justify-evenly">
          <div className="w-full h-full rounded-lg bg-neutral-300"> </div>
          <div className="flex flex-col w-full py-5 h-2/3">
            <h1 className="font-bold">Boreholes and clean water.</h1>
            <h1>
              Project Beneficiaries accessing clean water at Bidibidi Refuge
              Settlement camp - Yumbe District.
            </h1>
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col items-center w-full h-full p-10 bg-white rounded-lg justify-evenly">
          <div className="w-full h-full rounded-lg bg-neutral-300"> </div>
          <div className="flex flex-col w-full py-5 h-2/3">
            <h1 className="font-bold">Building and infrastructure.</h1>
            <h1>Construction of schools.</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsTab;
