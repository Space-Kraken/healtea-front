import React from 'react'
import { useParams } from "react-router-dom";

import { gql, useQuery } from "@apollo/client";
import Loader from '../../../UI/organisms/Loader';
import { useHistory } from "react-router-dom";


const GET_TESTS = gql`
    query GetAllTests{
        getAllTests{
            id
            requester{
              userData{
                name
              }
            }
            patient{
              userData{
                name
              }
            }
            type
            laboratory
        }
    }
`

export default function Tests() {
    let {id}=useParams()

    const {data, loading} = useQuery(GET_TESTS)
    let path=useHistory()
    if(loading) return < Loader />

    return (
        <div className="h-auto">
            <h2 className="mb-6 text-2xl font-semibold text-gray-700">
                TESTS
            </h2>
            <div className="container mx-auto px-6 flex flex-wrap">
                <div class="p-2 md:w-80 ">
                    <div class="flex items-center p-4 bg-red-200 rounded-lg shadow-xs cursor-pointer hover:bg-red-500 hover:text-gray-100">
                        <div>
                        <p class="text-sm font-semibold ml-2 ">
                            Blood fast test
                        </p>
                        </div>
                    </div>
                </div>
                <div class="p-2 md:w-80 ">
                    <div class="flex items-center p-4 bg-green-200 rounded-lg shadow-xs cursor-pointer hover:bg-green-500 hover:text-gray-100">
                        <div>
                        <p class="text-sm font-semibold ml-2 ">
                            Antigen test
                        </p>
                        </div>
                    </div>
                </div>
                <div class="p-2 md:w-80 ">
                    <div class="flex items-center p-4 bg-indigo-200 rounded-lg shadow-xs cursor-pointer hover:bg-indigo-500 hover:text-gray-100">
                        <div>
                        <p class=" text-sm font-semibold ml-2 ">
                            PCR Test
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            <table className="table-fixed">
            <thead>
                <tr>
                <th className="w-48 ... border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Requester</th>
                <th className="w-48 ... border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Patient</th>
                <th className="w-48 ... border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Test type</th>
                <th className="w-48 ... border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Laboratory</th>
                <th className="w-48 ... border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Action</th>
                </tr>
            </thead>
            <tbody>
            {data.getAllTests.map((test)=>(
                <tr className="bg-blue-200">
                <td className="border-b border-gray-200 bg-white text-sm">
                    {test.requester.userData.name}
                </td>
                <td className="border-b border-gray-200 bg-white text-sm">
                    {test.patient.userData.name}
                </td>
                <td className="border-b border-gray-200 bg-white text-sm">
                    {test.type}
                </td>
                <td className="border-b border-gray-200 bg-white text-sm">
                    {test.laboratory}
                </td>
                <td className="border-b border-gray-200 bg-white text-sm">
                    <button className="inline-flex bg-indigo-600 text-white rounded-full h-6 px-3 justify-center items-center m-1">
                    Edit
                    </button>
                </td>
                </tr>
            ))}
            </tbody>
            </table>
        </div>
    )
}
