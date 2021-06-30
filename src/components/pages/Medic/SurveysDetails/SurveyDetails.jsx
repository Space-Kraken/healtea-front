import React from 'react'
import { useParams } from "react-router-dom";

import { gql, useQuery } from "@apollo/client";
import Loader from '../../../UI/organisms/Loader';
import { useHistory } from "react-router-dom";

export default function SurveyDetails() {
    let path=useHistory()
    return (
        <div>
            <h1>Survey Details</h1>
            <div className="h-auto">
            <h2 className="mb-6 text-2xl font-semibold text-gray-700">
                Survey Details
            </h2>
                <table className="table-fixed">
                <thead>
                    <tr>
                    <th className="w-48 ... border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Questions</th>
                    <th className="w-48 ... border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Answers</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-blue-200">
                    <td className="border-b border-gray-200 bg-white text-sm">
                        1
                    </td>
                    <td className="border-b border-gray-200 bg-white text-sm">
                        2
                    </td>
                    
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    )
}
