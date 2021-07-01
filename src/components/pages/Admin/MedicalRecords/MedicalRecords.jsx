import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import Loader from "./../../../UI/organisms/Loader";
import Button from "./../../../UI/atoms/Button";

export const GET_MEDICALRECORDS = gql`
  query GetMedicalRecords {
    getMedicalRecords {
      id
      patient {
        id
        userData {
          name
        }
      }
      status
      appointments {
        id
      }
      surveys {
        id
      }
      recipes {
        id
      }
      tests {
        id
      }
    }
  }
`;

export default function MedicalRecords() {
  const { data, loading } = useQuery(GET_MEDICALRECORDS);
  const history = useHistory();
  if (loading) return <Loader />;

  return (
    <div className="flex flex-col w-full">
      <div className="bg-gradient-to-r from-fresh-god-magic-blue via-fresh-god-50 to-fresh-god-cool-rose border black py-2 text-lg md:text-xl font-medium rounded-t-full">
        <h1>Medical Records</h1>
      </div>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="table-auto min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Patient
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="hidden md:table-cell px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Appointments
                  </th>
                  <th
                    scope="col"
                    className="hidden md:table-cell px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Surveys
                  </th>
                  <th
                    scope="col"
                    className="hidden md:table-cell px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Recipes
                  </th>
                  <th
                    scope="col"
                    className="hidden md:table-cell px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Tests
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {console.log(data)}
                {data.getMedicalRecords.map((medicalRecord) => (
                  <tr key={medicalRecord.id}>
                    <td className="">{medicalRecord.patient.userData.name}</td>
                    <td className="">{medicalRecord.status}</td>
                    <td className="hidden md:table-cell">
                      {medicalRecord.appointments.length}
                    </td>
                    <td className="hidden md:table-cell">
                      {medicalRecord.surveys.length}
                    </td>
                    <td className="hidden md:table-cell">
                      {medicalRecord.recipes.length}
                    </td>
                    <td className="hidden md:table-cell">
                      {medicalRecord.tests.length}
                    </td>
                    <td className="py-2">
                      <Button
                        text="more"
                        method={() => {
                          history.push(
                            `/Dashboard-User/${medicalRecord.patient.id}`
                          );
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
