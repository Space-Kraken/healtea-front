import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import Loader from "../../../UI/organisms/Loader";
import Button from "../../../UI/atoms/Button";

const GET_USERS = gql`
  query GetUsers {
    getAllUsers {
      id
      email
      userData {
        name
      }
      role {
        rolType
      }
      active
    }
  }
`;

export default function Users() {
  const { data, loading } = useQuery(GET_USERS);
  let history = useHistory();
  const [searchFilter, setsearchFilter] = useState("");
  const [handleSearch, sethandleSearch] = useState([]);

  useEffect(() => {
    if (data) {
      sethandleSearch(
        Object.values(data.getAllUsers).filter((user) => {
          if (searchFilter === "") {
            return user;
          } else {
            const lowerName = user.userData.name.toLowerCase();
            const lowerEmail = user.email.toLowerCase();
            const lowerRole = user.role.rolType.toLowerCase();
            const active = user.active ? "active" : "disabled";
            const lowerFilter = searchFilter.toLowerCase();
            return (
              lowerName.includes(searchFilter.toLowerCase(lowerFilter)) ||
              lowerEmail.includes(lowerFilter) ||
              lowerRole.includes(lowerFilter) ||
              active.includes(lowerFilter)
            );
          }
        })
      );
    }
  }, [data, searchFilter]);

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
      <div className="bg-gradient-to-r from-fresh-god-magic-blue via-fresh-god-50 to-fresh-god-cool-rose border black py-2 text-lg md:text-xl font-medium rounded-t-full">
        <h1>Users</h1>
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
                    Name
                  </th>
                  <th
                    scope="col"
                    className="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="hidden md:table-cell px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
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
                  handleSearch.map((user) => (
                    <tr key={user.id}>
                      <td className="">{user.userData.name}</td>
                      <td className="hidden md:table-cell">{user.email}</td>
                      <td className="hidden md:table-cell">
                        {user.role.rolType}
                      </td>
                      <td className="">
                        {user.active ? "Active" : "Disabled"}
                      </td>
                      <td className="py-2">
                        <Button
                          text="more"
                          method={() => {
                            history.push(`/Dashboard-User/${user.id}`);
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
    </div>
  );
}
