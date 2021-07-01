import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Loader from "./../../../UI/organisms/Loader";
import Button from "../../../UI/atoms/Button";
import dateFormat from "dateformat";

const GET_ALL_APPOINTMENTS = gql`
  query GetAppointments {
    getAppointments {
      id
      patient {
        userData {
          name
        }
      }
      request
      status
    }
  }
`;

const GET_USER_APPOINTMENTS = gql`
  query GetUser($user: String!) {
    getUser(user: $user) {
      id
      userData {
        name
      }
      medicalRecord {
        appointments {
          id
          request
          status
        }
      }
    }
  }
`;

export default function Appointments() {
  const { filter } = useParams();
  let path = useHistory();
  const query =
    filter === "global" ? GET_ALL_APPOINTMENTS : GET_USER_APPOINTMENTS;
  const { loading, data } = useQuery(query, {
    variables: { user: filter },
  });

  const formatDate = (date) => {
    const unformatedDate = Date.parse(date);
    const formatedDate = dateFormat(unformatedDate, "dd-mm-yyyy");
    return formatedDate;
  };

  const [searchFilter, setsearchFilter] = useState("");
  const [handleSearch, sethandleSearch] = useState([]);

  useEffect(() => {
    if (data) {
      if (filter === "global") {
        sethandleSearch(
          Object.values(data.getAppointments).filter((appointment) => {
            if (searchFilter === "") {
              return appointment;
            } else {
              const lowerData = {
                name: appointment.patient.userData.name.toLowerCase(),
                request: formatDate(appointment.request),
                status: appointment.status.toLowerCase(),
              };
              return (
                lowerData.name.includes(searchFilter.toLowerCase()) ||
                lowerData.request.includes(searchFilter) ||
                lowerData.status.includes(searchFilter.toLowerCase())
              );
            }
          })
        );
      } else {
        sethandleSearch(
          Object.values(data.getUser.medicalRecord.appointments).filter(
            (test) => {
              if (searchFilter === "") {
                return test;
              } else {
                const lowerData = {
                  status: test.status.toLowerCase(),
                  type: test.type.toLowerCase(),
                };
                return (
                  lowerData.request.includes(searchFilter) ||
                  lowerData.status.includes(searchFilter.toLowerCase())
                );
              }
            }
          )
        );
      }
    }
  }, [data, searchFilter, filter]);

  if (loading) return <Loader />;

  return (
    <div className="w-full">
      <div className="pb-4">
        <input
          className="shadow-sm rounded-xl text-center w-full md:w-2/3 lg:w-1/3 py-2"
          placeholder="filter data"
          value={searchFilter}
          onChange={(e) => {
            setsearchFilter(e.target.value);
          }}
        />
      </div>
      {filter === "global" ? (
        <div className="flex flex-col w-full">
          <div className="bg-gradient-to-r from-fresh-god-magic-blue via-fresh-god-50 to-fresh-god-cool-rose border black py-2 text-lg md:text-xl font-medium rounded-t-full">
            <h1>Appointments</h1>
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
                        Request date
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Patient
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
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
                    {handleSearch && Object.keys(handleSearch).length !== 0 ? (
                      handleSearch.map((appointment, key) => (
                        <tr key={appointment.id}>
                          <td className="hidden md:table-cell">{key + 1}</td>
                          <td className="hidden md:table-cell">
                            {formatDate(appointment.request)}
                          </td>
                          <td className="">
                            {appointment.patient.userData.name}
                          </td>
                          <td className="">{appointment.status}</td>
                          <td className="py-2">
                            <Button
                              text="more"
                              method={() => {
                                path.push(
                                  `/Dashboard-Appointment/${appointment.id}`
                                );
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
      ) : (
        <div className="flex flex-col w-full">
          <div className="bg-gradient-to-r from-fresh-god-magic-blue via-fresh-god-50 to-fresh-god-cool-rose border black py-2 text-lg md:text-xl font-medium rounded-t-full">
            <h1>{data && data.getUser.userData.name}</h1>
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
                        className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Request date
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
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
                    {Object.keys(handleSearch).length !== 0 ? (
                      handleSearch.map((appointment, key) => (
                        <tr key={appointment.id}>
                          <td className="hidden md:table-cell">{key + 1}</td>
                          <td className="">
                            {formatDate(appointment.request)}
                          </td>
                          <td className="">{appointment.status}</td>
                          <td className="py-2">
                            <Button
                              text="more"
                              method={() => {
                                path.push(
                                  `/Dashboard-Appointment/${appointment.id}`
                                );
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
