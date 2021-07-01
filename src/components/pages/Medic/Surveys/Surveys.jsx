import React from 'react'
import { useParams } from "react-router-dom";

import { gql, useQuery } from "@apollo/client";
import Loader from '../../../UI/organisms/Loader';
import { useHistory } from "react-router-dom";

const GET_SURVEYS = gql`
    query GetSurveys{
        getSurveys{
            id
            patient{
              userData{
                name
              }
            }
            modality{
              desc
            }
        }
    }
`

export default function Surveys() {
    let {id}=useParams()

    const {data, loading} = useQuery(GET_SURVEYS)
    let path=useHistory()
    if(loading) return < Loader />

    return (
        <div className="h-auto">
            <h1 className="mb-6 text-2xl font-semibold text-gray-700">Request a type of survey</h1>
            <div className="container mx-auto px-6 flex flex-wrap">
                <div class="p-2 md:w-80 ">
                    <div class="flex items-center p-4 bg-indigo-200 rounded-lg shadow-xs cursor-pointer hover:bg-indigo-500 hover:text-gray-100">
                        <div>
                        <button class=" text-sm font-semibold ml-2 ">
                           Voluntary
                        </button>
                        </div>
                    </div>
                </div>
                <div class="p-2 md:w-80 ">
                    <div class="flex items-center p-4 bg-pink-200 rounded-lg shadow-xs cursor-pointer hover:bg-pink-500 hover:text-gray-100">
                        <div>
                        <button class="text-sm font-semibold ml-2 ">
                            Obligatory
                        </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="flex flex-col">
                {data.getSurveys.map((survey, key)=>(
                    <div class="flex flex-col mb-2 p-8 bg-white shadow-md hover:shodow-lg rounded-2xl">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                        <div class="flex flex-col ml-3">
                            <table className="table-fixed">
                                <thead>
                                    <tr>
                                    <th className="w-48 ...">ID Survey</th>
                                    <th className="w-48 ...">Patient</th>
                                    <th className="w-48 ...">Modality</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    <tr className="">
                                    <td className=" text-sm">
                                        {key + 1}
                                    </td>
                                    <td className=" text-sm">
                                        {survey.patient.userData.name}
                                    </td>
                                    <td className=" text-sm">
                                        {survey.modality.desc}
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                                <div className="content-center m-4">
                                    <button class="bg-green-300 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2  text-white rounded-full">
                                        Survey answers
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
                </div>
            </div>
        </div>
    )
}
