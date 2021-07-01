import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Loader from "../../../UI/organisms/Loader";
import dateFormat from "dateformat";
import Button from "../../../UI/atoms/Button";

const GET_ALL_SURVEYS = gql`
  query GetSurveys {
    getSurveys {
      id
      patient {
        userData {
          name
        }
      }
      date
      modality {
        desc
      }
      completed
    }
  }
`;

const GET_USER_SURVEYS = gql`
  query GetUser($user: String!) {
    getUser(user: $user) {
      id
      medicalRecord {
        surveys {
          id
          date
          modality {
            desc
          }
        }
      }
    }
  }
`;

export default function Surveys() {
  let path = useHistory();
  const { filter } = useParams();

  const query = filter === "global" ? GET_ALL_SURVEYS : GET_USER_SURVEYS;

  const { loading, data } = useQuery(query, {
    variables: { user: filter },
  });

  const formatDate = (date) => {
    const unformatedDate = Date.parse(date);
    const formatedDate = dateFormat(unformatedDate, "dd-mm-yyyy");
    return formatedDate;
  };

  if (loading) <Loader />;

  return (
    <div className="w-full">
      {filter === "global" ? (
        <div className="flex flex-col w-full">
          <div className="bg-gradient-to-r from-fresh-god-magic-blue via-fresh-god-50 to-fresh-god-cool-rose border black py-2 text-lg md:text-xl font-medium rounded-t-full">
            <h1>Surveys</h1>
          </div>
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-b-lg">
                <table className="table-auto min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="hidden md:table-cell px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Patient
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Modality
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Completed
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
                    {data &&
                      data.getSurveys.map((survey, key) => (
                        <tr key={survey.id}>
                          <td className="hidden md:table-cell">{key + 1}</td>
                          <td className="hidden md:table-cell">
                            {survey.patient.userData.name}
                          </td>
                          <td className="">{formatDate(survey.date)}</td>
                          <td className="">{survey.modality.desc}</td>
                          <td className="">{survey.modality.completed}</td>
                          <td className="py-2">
                            <Button
                              text="more"
                              method={() => {
                                path.push(`/Dashboard-Recipe/${survey.id}`);
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
      ) : (
        <div className="flex flex-col w-full">
          <div className="bg-gradient-to-r from-fresh-god-magic-blue via-fresh-god-50 to-fresh-god-cool-rose border black py-2 text-lg md:text-xl font-medium rounded-t-full">
            <h1>Surveys</h1>
          </div>
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-b-lg">
                <table className="table-auto min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="hidden md:table-cell px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Patient
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Modality
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Completed
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
                    {Object.keys(data.getUser.medicalRecord.surveys).length !==
                    0 ? (
                      data &&
                      data.getUser.medicalRecord.surveys.map((survey, key) => (
                        <tr key={survey.id}>
                          <td className="hidden md:table-cell">{key + 1}</td>
                          <td className="hidden md:table-cell">
                            {survey.patient.userData.name}
                          </td>
                          <td className="">{formatDate(survey.date)}</td>
                          <td className="">{survey.modality.desc}</td>
                          <td className="">{survey.modality.completed}</td>
                          <td className="py-2">
                            <Button
                              text="more"
                              method={() => {
                                path.push(`/Dashboard-Recipe/${survey.id}`);
                              }}
                            />
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="hidden md:table-cell">
                          Nothing to show yet
                        </td>
                        <td
                          colSpan="4"
                          className="table-cell sm:lg:hidden md:hidden lg:hidden"
                        >
                          Nothing to show yet
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
