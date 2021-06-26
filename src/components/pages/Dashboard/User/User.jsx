import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { gql, useQuery } from "@apollo/client";
import Loader from "./../../../UI/organisms/Loader";
import { useCookies } from "react-cookie";
import { IoSettings } from "react-icons/io5";
import { IconContext } from "react-icons";

const GET_USER = gql`
  query GetUser($user: String!) {
    getUser(user: $user) {
      id
      email
      role {
        rolType
      }
      active
      medicalRecord {
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
      userData {
        name
        age
        gender
        address {
          state
          city
          street
          postalCode
        }
        tel
      }
    }
  }
`;

export default function User() {
  let { id } = useParams();
  const [section, setsection] = useState("info");
  const [cookies] = useCookies(["image"]);
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { user: id },
  });

  if (loading) return <Loader />;

  return (
    <div className="w-full">
      <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 0.8 }}>
        <div className="flex flex-row w-auto justify-center">
          <div
            className={`py-1 border-t border-l border-b border-r-0 border-gray-500 px-2 rounded-tl-lg rounded-r-none ${
              section === "info"
                ? "bg-gradient-to-tl from-blue-400 via-blue-200 to-purple-300 font-medium"
                : "bg-white"
            }`}
            onClick={() => {
              setsection("info");
            }}
          >
            User Data
          </div>
          <div
            className={`py-1 border border-t border-r border-b border-gray-500 px-2 rounded-br-lg rounded-l-none ${
              section === "medicalRecord"
                ? "bg-gradient-to-tl from-blue-400 via-blue-200 to-purple-300 font-medium"
                : "bg-white"
            }`}
            onClick={() => {
              setsection("medicalRecord");
            }}
          >
            Medical Record
          </div>
        </div>
      </motion.div>
      {section === "info" ? (
        <div className="flex justify-center flex-col pt-3">
          <div className="mb-2">
            <div className="flex justify-center w-32 m-auto py-2">
              <img
                className="object-scale-down rounded-full"
                src={cookies.image}
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col justify-center md:flex-row w-full">
            <div className="w-full h-full mb-2 md:w-auto md:text-base text-xs md:m-4 border border-gray-200 shadow-lg bg-white p-4 rounded-tl-3xl rounded-br-3xl">
              <h1 className="mb-2">Profile data</h1>
              <hr />
              <div className="mt-2 flex flex-row justify-center">
                <div className="flex justify-center flex-wrap content-center px-2 py-2 w-2/3 border-l border-t border-b rounded-l-lg">
                  User email
                </div>
                <div className="bg-gray-200 w-auto px-2 py-4 md:px-2 md:py-2 rounded-r-lg">
                  {data.getUser.email}
                </div>
              </div>
              <div className="mt-2 flex flex-row justify-center flex-nowrap">
                <div className="px-2 py-2 w-2/3 border-l border-t border-b rounded-l-lg">
                  User password
                </div>
                <div
                  className="bg-gray-200 w-1/3 px-2 py-2 md:py-2 md:px-2 rounded-r-lg"
                  onClick={() => {
                    alert("test");
                  }}
                >
                  <motion.div
                    className="flex justify-center"
                    whileHover={{ rotate: -90 }}
                    whileTap={{ scale: [0.9, 1.2] }}
                  >
                    <IconContext.Provider value={{ size: "1.5rem" }}>
                      <IoSettings />
                    </IconContext.Provider>
                  </motion.div>
                </div>
              </div>
              <div className="mt-2 flex flex-row flex-nowrap justify-center">
                <div className="px-2 py-2 w-2/3 border-l border-t border-b rounded-l-lg">
                  Role
                </div>
                <div className="bg-gray-200 w-1/3 px-2 py-2 rounded-r-lg">
                  {data.getUser.role.rolType}
                </div>
              </div>
              <div className="mt-2 flex flex-row flex-nowrap justify-center">
                <div className="px-2 py-2 w-2/3 border-l border-t border-b rounded-l-lg">
                  Status
                </div>
                <div
                  className={`w-1/3 ${
                    data.getUser.active ? "bg-green-300" : "bg-red-400"
                  } px-2 py-2 rounded-r-lg`}
                >
                  {data.getUser.active ? "Active" : ""}
                </div>
              </div>
            </div>
            <div className="w-full h-full my-2 md:w-auto md:text-base md:m-4 text-xs border border-gray-200 shadow-lg bg-white p-4 rounded-tl-3xl rounded-br-3xl">
              <h1 className="mb-2">Private data</h1>
              <hr />
              <div className="mt-2 flex flex-row flex-nowrap">
                <div className="px-2 py-2 border-l border-t border-b rounded-l-lg">
                  Name
                </div>
                <div className="bg-gray-200 px-2 py-4 md:px-2 md:py-2 rounded-r-lg">
                  {data.getUser.userData.name}
                </div>
              </div>
              <div className="mt-2 flex flex-row flex-nowrap">
                <div className="px-2 py-2 w-2/3 border-l border-t border-b rounded-l-lg">
                  Age
                </div>
                <div className="bg-gray-200 w-1/3 px-2 py-4 md:px-2 md:py-2 rounded-r-lg">
                  {data.getUser.userData.age}
                </div>
              </div>
              <div className="my-2 flex flex-row flex-nowrap">
                <div className="px-2 py-2 w-2/3 border-l border-t border-b rounded-l-lg">
                  Gender
                </div>
                <div className="bg-gray-200 px-2 py-2 w-1/3 rounded-r-lg">
                  {data.getUser.userData.gender === "F" ? "Female" : "Male"}
                </div>
              </div>
              <div className="my-2 flex flex-row flex-nowrap">
                <div className="px-2 py-2 w-2/3 border-l border-t border-b rounded-l-lg">
                  Tel
                </div>
                <div className="bg-gray-200 px-2 py-2 rounded-r-lg">
                  {data.getUser.userData.tel}
                </div>
              </div>
            </div>
            <div className="w-full h-full my-2 md:w-auto md:text-base md:m-4 text-xs border border-gray-200 shadow-lg bg-white p-4 rounded-tl-3xl rounded-br-3xl">
              <h1 className="mb-2">Address data</h1>
              <hr />
              <div className="mt-2 flex flex-row flex-nowrap">
                <div className="px-2 py-2 w-2/3 border-l border-t border-b rounded-l-lg">
                  State
                </div>
                <div className="bg-gray-200 w-1/3 px-2 py-4 md:px-2 md:py-2 rounded-r-lg">
                  {data.getUser.userData.address.state}
                </div>
              </div>
              <div className="mt-2 flex flex-row flex-nowrap">
                <div className="px-2 py-2 w-2/3 border-l border-t border-b rounded-l-lg">
                  City
                </div>
                <div className="bg-gray-200 px-2 py-4 md:px-2 md:py-2 rounded-r-lg">
                  {data.getUser.userData.address.city}
                </div>
              </div>
              <div className="my-2 flex flex-row flex-nowrap">
                <div className="px-2 py-2 border-l border-t border-b rounded-l-lg">
                  Street
                </div>
                <div className="bg-gray-200 px-2 py-2 rounded-r-lg">
                  {data.getUser.userData.address.street}
                </div>
              </div>
              <div className="my-2 flex flex-row flex-nowrap">
                <div className="px-2 py-2 border-l w-2/3 border-t border-b rounded-l-lg">
                  Postal Code
                </div>
                <div className="bg-gray-200 w-1/3 px-2 py-2 rounded-r-lg">
                  {data.getUser.userData.address.postalCode}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {section === "medicalRecord" ? (
        <div className="pt-3">
          <h1>Medical Records</h1>
        </div>
      ) : null}
    </div>
  );
}
