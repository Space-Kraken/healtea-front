import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Loader from "../../../UI/organisms/Loader";
import dateFormat from "dateformat";

const GET_RECIPES = gql`
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
      treatment
      files {
        type
        path
      }
    }
  }
`;

export default function Recipe() {
  let { user } = useParams();
  const { data, loading } = useQuery(GET_RECIPES);
  const [filterData, setData] = useState("");

  const formatDate = (date) => {
    const unformatedDate = Date.parse(date);
    const formatedDate = dateFormat(unformatedDate, "dd-mm-yyyy");
    return formatedDate;
  };

  useEffect(() => {
    if (data) {
      setData(
        Object.values(data.getAllrecipes).filter((recipe) => {
          return recipe.id.includes(user);
        })
      );
    }
  }, [data, user, setData]);

  if (loading) return <Loader />;

  return (
    <div className="w-full flex justify-center">
      {filterData &&
        filterData.map((recipe) => (
          <div className="flex flex-col bg-white p-4 rounded-xl shadow-md w-2/4">
            <div className="mb-4">
              <h1 className="mb-2">Folio - {recipe.id} </h1>
              <hr />
            </div>
            <div className="mb-4">
              <div className="flex flex-row justify-center items-center">
                <div className="bg-gray-200 p-2 rounded-l-xl border border-gray-200 w-1/3">
                  Patient
                </div>
                <div className="p-2 rounded-r-xl border border-gray-200 w-2/3">
                  {filterData["0"].patient.userData.name}
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex flex-row justify-center items-center">
                <div className="bg-gray-200 p-2 rounded-l-xl border border-gray-200 w-1/3">
                  Doctor
                </div>
                <div className="p-2 rounded-r-xl border border-gray-200 w-2/3">
                  {filterData["0"].doctor.userData.name}
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex flex-row justify-center items-center">
                <div className="bg-gray-200 p-2 rounded-l-xl border border-gray-200 w-1/3">
                  Date
                </div>
                <div
                  className={`p-2 rounded-r-xl border border-gray-200 w-2/3 bg-white`}
                >
                  {formatDate(filterData["0"].date)}
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gray-200 p-2 rounded-t-xl border border-gray-200 w-full">
                  Treatment
                </div>
                <textarea
                  value={filterData["0"].treatment}
                  className={`p-2 rounded-b-xl border border-gray-200 w-full bg-white`}
                ></textarea>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex flex-col w-full justify-center items-center">
                <div className="bg-gray-200 p-2 w-full rounded-t-xl border border-gray-200">
                  Files
                </div>
                <div
                  className={`p-2 rounded-b-xl border border-gray-200 w-full ${
                    Object.keys(filterData["0"].files).length
                      ? "bg-white"
                      : "bg-red-200"
                  }`}
                >
                  {Object.keys(filterData["0"].files).length
                    ? filterData["0"].files.map((file) => (
                        <>
                          <a
                            href={file.path}
                            className="bg-blue-200 p-2 rounded-md m-4"
                          >
                            {file.type}
                          </a>
                        </>
                      ))
                    : "-"}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
