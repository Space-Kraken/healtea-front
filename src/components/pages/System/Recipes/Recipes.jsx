import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Loader from "../../../UI/organisms/Loader";
import dateFormat from "dateformat";
import Button from "../../../UI/atoms/Button";

const GET_ALL_RECIPES = gql`
  query GetAllRecipes {
    getAllrecipes {
      id
      patient {
        userData {
          name
        }
      }
      doctor {
        userData {
          name
        }
      }
      date
    }
  }
`;

const GET_USER_RECIPES = gql`
  query GetUser($user: String!) {
    getUser(user: $user) {
      id
      medicalRecord {
        recipes {
          id
          patient {
            userData {
              name
            }
          }
          doctor {
            userData {
              name
            }
          }
          date
        }
      }
    }
  }
`;

export default function Recipes() {
  let path = useHistory();
  const { filter } = useParams();

  const query = filter === "global" ? GET_ALL_RECIPES : GET_USER_RECIPES;

  const { loading, data } = useQuery(query, {
    variables: { user: filter },
  });

  const formatDate = (date) => {
    const unformatedDate = Date.parse(date);
    const formatedDate = dateFormat(unformatedDate, "dd-mm-yyyy");
    return formatedDate;
  };

  if (loading) return <Loader />;

  return (
    <div className="w-full">
      {filter === "global" ? (
        <div className="flex flex-col w-full">
          <div className="bg-gradient-to-r from-fresh-god-magic-blue via-fresh-god-50 to-fresh-god-cool-rose border black py-2 text-lg md:text-xl font-medium rounded-t-full">
            <h1>Recipes</h1>
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
                        Doctor
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
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {console.log(data)}
                    {data && Object.keys(data.getAllrecipes).length !== 0 ? (
                      data.getAllrecipes.map((recipe, key) => (
                        <tr key={recipe.id}>
                          <td className="hidden md:table-cell">{key + 1}</td>
                          <td className="hidden md:table-cell">
                            {recipe.patient.userData.name}
                          </td>
                          <td className="">{recipe.doctor.userData.name}</td>
                          <td className="">{formatDate(recipe.date)}</td>
                          <td className="py-2">
                            <Button
                              text="more"
                              method={() => {
                                path.push(`/Dashboard-Recipe/${recipe.id}`);
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
            <h1>Recipes</h1>
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
                        Doctor
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
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {console.log(data.getUser.medicalRecord.recipes)}
                    {data &&
                    Object.keys(data.getUser.medicalRecord.recipes).length !==
                      0 ? (
                      data.getUser.medicalRecord.recipes.map((recipe, key) => (
                        <tr key={recipe.id}>
                          <td className="hidden md:table-cell">{key + 1}</td>
                          <td className="hidden md:table-cell">
                            {recipe.patient.userData.name}
                          </td>
                          <td className="">{recipe.doctor.userData.name}</td>
                          <td className="">{formatDate(recipe.date)}</td>
                          <td className="py-2">
                            <Button
                              text="more"
                              method={() => {
                                path.push(`/Dashboard-Recipe/${recipe.id}`);
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
