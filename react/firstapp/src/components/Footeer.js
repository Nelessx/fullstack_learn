import React from "react";

export default function Footeer() {
  const CompanyLinks = [
    {
      id1: 1,
      title: "Company profile",
    },
    {
      id1: 1,
      title: "Company profile",
    },
    {
      id1: 1,
      title: "Company profile",
    },
    {
      id1: 1,
      title: "Company profile",
    },
    {
      id1: 1,
      title: "Company profile",
    },
  ];

  const CommunityLinks = [
    {
      id1: 1,
      title: "Company profile",
    },
    {
      id1: 1,
      title: "Company profile",
    },
    {
      id1: 1,
      title: "Company profile",
    },
    {
      id1: 1,
      title: "Company profile",
    },
    {
      id1: 1,
      title: "Company profile",
    },
  ];

  const solutionLinks = [
    {
      id1: 1,
      title: "Company profile",
    },
    {
      id1: 1,
      title: "Company profile",
    },
    {
      id1: 1,
      title: "Company profile",
    },
    {
      id1: 1,
      title: "Company profile",
    },
    {
      id1: 1,
      title: "Company profile",
    },
  ];
  return (
    <div id="footer" className=" bg-[#011316] text-white mt-20 ">
      <div className="py-20 w-full px-4 md:w-10/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
      
        <div className="flex flex-col space-y-6">
          <div className=" flex items-center gap-2">
            <svg
            className=" text-orange-500"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 2048 2048"
            >
              <path
                fill="currentColor"
                d="M1522 127q82 0 155 31t127 86t85 127t32 155v994q0 83-31 155t-86 127t-127 85t-155 32H528q-83 0-155-31t-127-86t-86-126t-32-156V526q0-83 31-155t86-127t127-85t156-32zm125 1466q5 0 8-9t5-22t2-22t1-12q0-80-31-156t-82-138q11-38 16-78t6-81q0-106-34-208t-92-192t-137-165t-167-128q72 97 116 212t44 237q0 51-9 100t-27 98q-7-5-13-8t-14-8q-48-26-93-60t-90-68q-112-84-217-174T634 521q-5-4-8-10t-6-10t-7-8t-11-4q0 4 17 28t43 60t58 75t58 76t49 62t26 32q33 40 67 78t69 77q-63-35-121-77t-116-85q-81-60-159-123T439 560q17 28 36 53t39 50q64 80 130 158t135 154t143 145t156 133q-65 39-138 57t-148 19q-130 0-254-47t-229-123q57 92 137 170t176 136t201 89t217 33q72 0 141-15t133-49q38-20 75-34t81-14q63 0 102 30t70 83q2 5 5 5"
              />
            </svg>
            <p className=" text-xl font-medium">LOXY</p>
          </div>

          <div className=" flex display-center gap-2 items-center">
            <p>🕞</p>
            <p className=" opacity-50">Greater pleasures el esndures pains avoid welcomed avoided pariatu.</p>
          </div>

          <p className=" font-semibold text-xl">Subscribe to our Site :</p>
          <input placeholder="Enter email" type="text" />

          <p><span className=" opacity-70">© 2025 Loxcy - Created By </span><span className=" underline opacity-100"> Themesdesign</span></p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className=" text-xl font-semibold mb-4">Company:</p>
          {CommunityLinks.map((item, index) => (
            <p className=" mb-4 font-semibold opacity-60 cursor-pointer hover:opacity-100 hover:translate-x-1 duration-500">
              {item.title}
            </p>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className=" text-xl font-semibold mb-4">Community:</p>
          {CompanyLinks.map((item, index) => (
            <p className=" mb-4 font-semibold opacity-60 cursor-pointer hover:opacity-100 hover:translate-x-1 duration-500">
              {item.title}
            </p>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className=" text-xl font-semibold mb-4">Solution:</p>
          {solutionLinks.map((item, index) => (
            <p className=" mb-4 font-semibold opacity-60 cursor-pointer hover:opacity-100 hover:translate-x-1 duration-500">
              {item.title}
            </p>
          ))}
        </div>
        
      </div>
    </div>
  );
}
