import React from "react";
import dashboards from '../images/dashbord-4.png'

export default function ServicesSection() {
  return (
    <div className=" w-10/12 grid grid-cols-2 mx-auto py-10">
      <div>
        <img src={dashboards} alt="" />
      </div>
      

      <div className="bg-white p-6 rounded-lg  max-w-lg mx-auto">
        <h4 className="text-orange-600 font-bold uppercase text-lg">
          Performance Metrics
        </h4>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          Grow Up Your Business With In{" "}
          <span className="text-orange-500">5 Minutes</span>
        </h2>
        <p className="text-gray-600 mt-4">
          The passage experienced a surge in popularity during the 1960s when
          Letraset used it on their dry-transfer sheets, and again during the
          90s as desktop publishers bundled the text with their software.
        </p>
        <div className="flex justify-between items-center mt-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">200K</h3>
            <p className="text-gray-600 text-sm">
              Active user from the community
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              90%{" "}
              <span className="text-sm font-medium text-gray-500">
                (Positive Rating)
              </span>
            </h3>
            <div className="text-orange-500 mt-1">{"★".repeat(5)}</div>
          </div>
        </div>
        <ul className="mt-6 space-y-2 text-gray-700">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            Get Overview at a glance.
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            Deposite funds easily, security.
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            First Working Process.
          </li>
        </ul>
      </div>
    </div>
  );
}
