import React from 'react'

export default function Surveys() {
    return (
    <div>
        <h1 className="text-3xl font-semibold text-gray-700">
            SURVEYS
        </h1>
        <p className="text-medium font-semibold text-gray-700">
            If you have one of the next symptoms you will must be absent or immediate withdrawal from the institution will be justified.
        </p>
        <table class="table-fixed">
            <thead>
                <tr>
                <th class="w-1/2 ...">Ask</th>
                <th class="w-1/2 ...">Answer</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="text-left">1. Do you have a fever, chills like the flu, or a fever
                        with a temperature taken by mouth of 38.1 ° C (100.6 ° F)
                        or more?
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <button className="px-2 inline-flex text-xs leading-5 font-semibold bg-green-100 text-black">
                            Yes
                        </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <button className="px-2 inline-flex text-xs leading-5 font-semibold bg-red-100 text-black">
                            No
                        </button>
                    </td>
                </tr>

                <tr class="bg-blue-200">
                    <td className="text-left">2. Have you had a sudden loss of smell without congestion
                        nasal (stuffy nose), with or without loss of taste?
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <button className="px-2 inline-flex text-xs leading-5 font-semibold bg-green-100 text-black">
                            Yes
                        </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <button className="px-2 inline-flex text-xs leading-5 font-semibold bg-red-100 text-black">
                            No
                        </button>
                    </td>
                </tr>

                <tr>
                    <td className="text-left">3. Have you developed a cough or has your chronic cough gotten worse recently?
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <button className="px-2 inline-flex text-xs leading-5 font-semibold bg-green-100 text-black">
                            Yes
                        </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <button className="px-2 inline-flex text-xs leading-5 font-semibold bg-red-100 text-black">
                            No
                        </button>
                    </td>
                </tr>
                
                <tr class="bg-blue-200">
                    <td className="text-left">4. Are you having trouble breathing or shortness of breath?
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <button className="px-2 inline-flex text-xs leading-5 font-semibold bg-green-100 text-black">
                            Yes
                        </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <button className="px-2 inline-flex text-xs leading-5 font-semibold bg-red-100 text-black">
                            No
                        </button>
                    </td>
                </tr>

                <tr>
                    <td className="text-left">5. Do you have a sore throat?
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <button className="px-2 inline-flex text-xs leading-5 font-semibold bg-green-100 text-black">
                            Yes
                        </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <button className="px-2 inline-flex text-xs leading-5 font-semibold bg-red-100 text-black">
                            No
                        </button>
                    </td>
                </tr>

                <tr class="bg-blue-200">
                    <td className="text-left">6. Do you have a runny or stuffy nose of unknown cause?
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <button className="px-2 inline-flex text-xs leading-5 font-semibold bg-green-100 text-black">
                            Yes
                        </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <button className="px-2 inline-flex text-xs leading-5 font-semibold bg-red-100 text-black">
                            No
                        </button>
                    </td>
                </tr>

                <tr>
                    <td className="text-left">7. Stomachache
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <button className="px-2 inline-flex text-xs leading-5 font-semibold bg-green-100 text-black">
                            Yes
                        </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <button className="px-2 inline-flex text-xs leading-5 font-semibold bg-red-100 text-black">
                            No
                        </button>
                    </td>
                </tr>
                
                <tr class="bg-blue-200">
                    <td className="text-left">8. Nausea or vomiting
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <button className="px-2 inline-flex text-xs leading-5 font-semibold bg-green-100 text-black">
                            Yes
                        </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <button className="px-2 inline-flex text-xs leading-5 font-semibold bg-red-100 text-black">
                            No
                        </button>
                    </td>
                </tr>

                <tr>
                    <td className="text-left">9. Diarrhea
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <button className="px-2 inline-flex text-xs leading-5 font-semibold bg-green-100 text-black">
                            Yes
                        </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <button className="px-2 inline-flex text-xs leading-5 font-semibold bg-red-100 text-black">
                            No
                        </button>
                    </td>
                </tr>

                <tr class="bg-blue-200">
                    <td className="text-left">10. Unusually severe fatigue for no obvious reason
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <button className="px-2 inline-flex text-xs leading-5 font-semibold bg-green-100 text-black">
                            Yes
                        </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <button className="px-2 inline-flex text-xs leading-5 font-semibold bg-red-100 text-black">
                            No
                        </button>
                    </td>
                </tr>

                <tr>
                    <td className="text-left">11. Significant loss of appetite
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <button className="px-2 inline-flex text-xs leading-5 font-semibold bg-green-100 text-black">
                            Yes
                        </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <button className="px-2 inline-flex text-xs leading-5 font-semibold bg-red-100 text-black">
                            No
                        </button>
                    </td>
                </tr>
                
                <tr class="bg-blue-200">
                    <td className="text-left">12. Unusual generalized muscle aches or for no obvious reason (not related to physical exertion)
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <button className="px-2 inline-flex text-xs leading-5 font-semibold bg-green-100 text-black">
                            Yes
                        </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <button className="px-2 inline-flex text-xs leading-5 font-semibold bg-red-100 text-black">
                            No
                        </button>
                    </td>
                </tr>

                <tr>
                    <td className="text-left">13. Unusual headache
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <button className="px-2 inline-flex text-xs leading-5 font-semibold bg-green-100 text-black">
                            Yes
                        </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <button className="px-2 inline-flex text-xs leading-5 font-semibold bg-red-100 text-black">
                            No
                        </button>
                    </td>
                </tr>

                <tr>
                    <td className="text-left">
                        Describe if you have other symptoms:
                    </td>
                    <td>
                        <textarea class="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                            id="message" type="text" placeholder="Describe your symptoms">
                        </textarea>
                    </td>
                </tr>
            </tbody>
            
        </table>
        <div className="container mx-auto px-6 flex">
            <div class="p-2 md:w-80 ">
                <div class="flex items-center p-4 bg-green-200 rounded-lg shadow-xs cursor-pointer hover:bg-green-500 hover:text-gray-100">
                    <div>
                    <button class=" text-sm font-semibold ml-2 ">
                        Send
                    </button>
                    </div>
                </div>
            </div>
            <div class="p-2 md:w-80 ">
                <div class="flex items-center p-4 bg-red-200 rounded-lg shadow-xs cursor-pointer hover:bg-red-500 hover:text-gray-100">
                    <div>
                    <button class="text-sm font-semibold ml-2 ">
                        Cancel
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
