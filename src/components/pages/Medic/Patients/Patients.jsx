import React from 'react'
import { gql, useQuery } from "@apollo/client";
import Loader from '../../../UI/organisms/Loader';
import { useHistory } from "react-router-dom";


const GET_USERS = gql`
    query GetAllUsers{
        getAllUsers{
            id
            userData{
              name
            }
        }
    }
`

export default function Patients() {
    const {data, loading} = useQuery(GET_USERS)
    let path=useHistory()
    if(loading) return < Loader />
    return (
        <div className="h-auto">
            <h2 className="mb-6 text-2xl font-semibold text-gray-700">
                PATIENTS
            </h2>

            <div className="fadeInDown divide-y-4 divide-gray-300">
                <div>
                    <div className="container px-6 mx-auto grid">
                        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">
                            {data.getAllUsers.map((user)=>(
                                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs">
                                    <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="mb-2 text-base font-semibold text-gray-600">
                                            {user.userData.name}
                                        </p>
                                        <div className="content-center">
                                            <button onClick={()=>{path.push(`/Surveys/${user.id}`)}} className="inline-flex bg-pink-600 text-white rounded-full h-6 px-3 justify-center items-center m-1">
                                            Surveys</button>
                                            <button onClick={()=>{path.push(`/Appointments/${user.id}`)}} className="inline-flex bg-purple-600 text-white rounded-full h-6 px-3 justify-center items-center m-1">
                                            Appointments</button>
                                            <button onClick={()=>{path.push(`/Tests/${user.id}`)}} className="inline-flex bg-indigo-600 text-white rounded-full h-6 px-3 justify-center items-center m-1">
                                            Tests</button>
                                        </div>
                                    </div>
                                </div>  
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
