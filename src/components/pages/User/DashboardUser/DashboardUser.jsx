import React from 'react'

export default function DashboardUser() {
    return (
        <div className="h-auto">
            <h2 className="mb-6 text-2xl font-semibold text-gray-700">
                WELCOME
            </h2>
            <p className="mb-6 text-2xl font-semibold text-gray-700">
                Take care and be good!
            </p>
            <br />
            <h2 className="mb-6 text-2xl font-semibold text-gray-700">
                SURVEYS
            </h2>
            <h3 className="mb-6 text-2xl font-semibold text-gray-900">
                Choise one type of survey
            </h3>

            <div className="container mx-auto px-6 my-1 flex flex-wrap -m-4">
                <div className="p-2 md:w-80 ">
                    <div className="flex items-center p-4 bg-green-200 rounded-lg shadow-xs cursor-pointer hover:bg-green-500 hover:text-gray-100">
                        <div>
                        <p className=" text-sm font-medium ml-2 ">
                            Obligatory
                        </p>
                        </div>
                    </div>
                </div>
                <div className="p-2 md:w-80 ">
                    <div className="flex items-center p-4 bg-yellow-200 rounded-lg shadow-xs cursor-pointer hover:bg-yellow-500 hover:text-gray-100">
                        <div>
                        <p className=" text-sm font-medium text-uppercase ml-2 ">
                            Voluntary
                        </p>
                        
                        </div>
                    </div>
                </div>
                <div className="p-2 md:w-80 ">
                    <div className="flex items-center p-4 bg-indigo-200 rounded-lg shadow-xs cursor-pointer hover:bg-indigo-500 hover:text-gray-100">
                        <div>
                        <p className=" text-sm font-medium ml-2 ">
                            Random
                        </p>
                        
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <h3>COVID-19 Tests Orders</h3>
            <div className="h-auto">
                <div className="p-2 md:w-100 ">
                    <a href="#" className="flex items-center p-4 bg-blue-200 rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100">
                        <div>
                        <p className=" text-sm font-medium ml-2 ">
                            Tests Covid
                        </p>
                        
                        </div>
                    </a>
                </div>
            </div>
            <br />
            <br />
            <h3>Appointments Orders</h3>
            <div className="p-2 md:w-100 ">
                <div className="flex items-center p-4 bg-yellow-200 rounded-lg shadow-xs cursor-pointer hover:bg-yellow-500 hover:text-gray-100">
                    <div>
                    <p className=" text-sm font-medium ml-2">
                        Take an appointment
                    </p>
                    
                    </div>
                </div>
            </div>
            <br />
            <br />
            <h3>Appointments Orders</h3>
            <div className="p-2 md:w-100 ">
                <div className="flex items-center p-4 bg-red-200 rounded-lg shadow-xs cursor-pointer hover:bg-red-500 hover:text-gray-100">
                    <div>
                    <p className=" text-sm font-medium ml-2">
                        Print recipes
                    </p>
                    
                    </div>
                </div>
            </div>
            

        </div>
    )
}
