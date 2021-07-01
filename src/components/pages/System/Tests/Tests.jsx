import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Loader from "../../../UI/organisms/Loader";
import Button from "../../../UI/atoms/Button";

const GET_ALL_TESTS = gql`
  query GetAllTests {
    getAllTests {
      id
      requester {
        userData {
          name
        }
      }
      patient {
        userData {
          name
        }
      }
      status
      type
      resoult
      laboratory
      files {
        path
      }
    }
  }
`;

const GET_USER_TEST = gql`
  query GetUser($user: String!) {
    getUser(user: $user) {
      userData {
        name
      }
      medicalRecord {
        tests {
          id
          requester {
            userData {
              name
            }
          }
          status
          type
          resoult
          laboratory
          files {
            path
          }
        }
      }
    }
  }
`;

export default function Tests() {
  const { filter } = useParams();
  let history = useHistory();
  const query = filter === "global" ? GET_ALL_TESTS : GET_USER_TEST;

  const { loading, data } = useQuery(query, {
    variables: { user: filter },
  });

  const [searchFilter, setsearchFilter] = useState("");
  const [handleSearch, sethandleSearch] = useState([]);

  useEffect(() => {
    if (data) {
      if (filter === "global") {
        sethandleSearch(
          Object.values(data.getAllTests).filter((test) => {
            if (searchFilter === "") {
              return test;
            } else {
              const lowerData = {
                name: test.requester.userData.name.toLowerCase(),
                status: test.status.toLowerCase(),
                type: test.type.toLowerCase(),
                patient: test.patient.userData.name.toLowerCase(),
              };

              return (
                lowerData.name.includes(searchFilter.toLowerCase()) ||
                lowerData.status.includes(searchFilter.toLowerCase()) ||
                lowerData.type.includes(searchFilter.toLowerCase()) ||
                lowerData.patient.includes(searchFilter.toLocaleLowerCase())
              );
            }
          })
        );
      } else {
        sethandleSearch(
          Object.values(data.getUser.medicalRecord.tests).filter((test) => {
            if (searchFilter === "") {
              return test;
            } else {
              const lowerData = {
                status: test.status.toLowerCase(),
                type: test.type.toLowerCase(),
              };
              return (
                lowerData.status.includes(searchFilter.toLowerCase()) ||
                lowerData.type.includes(searchFilter.toLowerCase())
              );
            }
          })
        );
      }
    }
  }, [data, searchFilter, filter]);

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col w-full">
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
        <>
          <div className="bg-gradient-to-r from-fresh-god-magic-blue via-fresh-god-50 to-fresh-god-cool-rose border black py-2 text-lg md:text-xl font-medium rounded-t-full">
            <h1>Tests</h1>
          </div>
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-b-lg">
                <table className="table-auto min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Requester
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Patient
                      </th>
                      <th
                        scope="col"
                        className="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Type
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
                      handleSearch.map((test) => (
                        <tr key={test.id}>
                          <td className="">{test.requester.userData.name}</td>
                          <td className="">{test.patient.userData.name}</td>
                          <td className="hidden md:table-cell">
                            {test.status}
                          </td>
                          <td className="hidden md:table-cell">{test.type}</td>
                          <td className="py-2">
                            <Button
                              text="more"
                              method={() => {
                                history.push(`/Dashboard-Test/${test.id}`);
                              }}
                            />
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="hidden md:table-cell">
                          {searchFilter === ""
                            ? "Nothing to show yet"
                            : "User not found"}
                        </td>
                        <td
                          colSpan="4"
                          className="table-cell sm:lg:hidden md:hidden lg:hidden"
                        >
                          {searchFilter === ""
                            ? "Nothing to show yet"
                            : "User not found"}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-gradient-to-r from-fresh-god-magic-blue via-fresh-god-50 to-fresh-god-cool-rose border black py-2 text-lg md:text-xl font-medium rounded-t-full">
            <h1>{data.getUser.userData.name}</h1>
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
                        Requester
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Type
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
                      handleSearch.map((test) => (
                        <tr key={test.id}>
                          <td className="hidden md:table-cell">
                            {test.requester.userData.name}
                          </td>
                          <td className="">{test.status}</td>
                          <td className="">{test.type}</td>
                          <td className="py-2">
                            <Button
                              text="more"
                              method={() => {
                                history.push(`/Dashboard-Test/${test.id}`);
                              }}
                            />
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="hidden md:table-cell">
                          {searchFilter === ""
                            ? "Nothing to show yet"
                            : "User not found"}
                        </td>
                        <td
                          colSpan="4"
                          className="table-cell sm:lg:hidden md:hidden lg:hidden"
                        >
                          {searchFilter === ""
                            ? "Nothing to show yet"
                            : "User not found"}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
