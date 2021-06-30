import React, { Fragment } from "react";
import { GET_ROLES } from "./../User/Querys";
import { useQuery } from "@apollo/client";
import { HiOutlineSave, HiOutlineX } from "react-icons/hi";
import { MdArrowDropDown } from "react-icons/md";
import { IconContext } from "react-icons";
import Loader from "../../../UI/organisms/Loader";
import { Listbox, Transition } from "@headlessui/react";

export default function AddRole({ close }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const { data, loading } = useQuery(GET_ROLES);

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col w-full justify-center">
      <h1 className="self-center">Roles</h1>
      <hr />
      <div className="w-auto">
        <div className="flex flex-col justify-center items-center my-2">
          Actual Roles
          <table className="table-auto min-w-full text-center divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Number
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Roles
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                {console.log(data)}
                <td className="self-center">
                  <div className="">{data.getRoles.length}</div>
                </td>
                <td className="self-center">
                  <div className="flex w-full justify-center rounded-md bg-pink-200 my-2 py-2 px-2">
                    <Listbox>
                      {({ open }) => (
                        <>
                          <div className="relative">
                            <Listbox.Button className="w-full  rounded-r-lg pl-2 pr-7 text-left cursor-pointer focus:outline-none sm:text-sm">
                              <span className="flex items">
                                See roles{" "}
                                <MdArrowDropDown
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>
                            <Transition
                              show={open}
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Listbox.Options
                                className="float-left z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                                static
                              >
                                {data.getRoles.map((rol) => (
                                  <Listbox.Option
                                    className={({ active }) =>
                                      classNames(
                                        active
                                          ? "text-white bg-indigo-600"
                                          : "text-gray-900",
                                        "cursor-default select-none relative py-2 pl-3 pr-9"
                                      )
                                    }
                                    key={rol.id}
                                    value={rol}
                                    disabled
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <div className="flex items-center">
                                          <span>{rol.rolType}</span>
                                        </div>
                                      </>
                                    )}
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </>
                      )}
                    </Listbox>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <div className="flex flex-row justify-center items-center my-2">
          New Role
        </div>
        <div className="flex flex-row pt-2 justify-around items-center my-2">
          <div
            className="flex w-1/3 justify-center border rounded-lg border-gray-400 bg-green-300 px-2 py-2"
            onClick={() => {}}
          >
            <IconContext.Provider value={{ size: "1.5rem" }}>
              <HiOutlineSave />
            </IconContext.Provider>
          </div>
          <div
            className="flex w-1/3 justify-center border rounded-lg border-gray-400 bg-red-300 px-2 py-2"
            onClick={() => {
              close("role");
            }}
          >
            <IconContext.Provider value={{ size: "1.5rem" }}>
              <HiOutlineX />
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}
