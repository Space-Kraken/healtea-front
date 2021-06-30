import React, { useState, Fragment, useEffect, forwardRef } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useQuery, useMutation, from } from "@apollo/client";
import Loader from "./../../../UI/organisms/Loader";
import { useCookies } from "react-cookie";
import { IoSettings } from "react-icons/io5";
import { HiOutlineSave, HiOutlineX } from "react-icons/hi";
import { MdArrowDropDown } from "react-icons/md";
import { IconContext } from "react-icons";
import { Listbox, Transition } from "@headlessui/react";
import {
  GET_USER,
  GET_ROLES,
  UPDATE_USER,
  UPDATE_PRIVATE,
  UPDATE_ADDRESS,
} from "./Querys";
import { useToasts } from "react-toast-notifications";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function User() {
  let { id } = useParams();
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { user: id },
  });
  const { data: roles } = useQuery(GET_ROLES);

  const [updateUser] = useMutation(UPDATE_USER, {
    refetchQueries: [{ query: GET_USER, variables: { user: id } }],
  });

  const [updatePrivate] = useMutation(UPDATE_PRIVATE, {
    refetchQueries: [{ query: GET_USER, variables: { user: id } }],
  });

  const [updateAddress] = useMutation(UPDATE_ADDRESS, {
    refetchQueries: [{ query: GET_USER, variables: { user: id } }],
  });

  const [section, setsection] = useState("info");
  const [cookies] = useCookies(["image"]);

  const { addToast } = useToasts();
  const [isEditable, setEditable] = useState({
    profile: false,
    private: false,
    address: false,
  });
  const status = [
    { id: 1, value: true, status: "Active" },
    { id: 1, value: false, status: "Inactive" },
  ];

  const gender = [
    { id: "F", value: "Female" },
    { id: "M", value: "Male" },
    { id: "NA", value: "Uknow" },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [rolSelected, setrolSelected] = useState();
  const [genderSelected, setGenderSelected] = useState();
  const [selectedStatus, setStatus] = useState();

  const [form, setform] = useState({
    password: "password",
  });

  const [startDate, setStartDate] = useState();

  useEffect(() => {
    if (data) {
      setrolSelected(data.getUser.role);

      setStatus({ status: data.getUser.active ? "Active" : "Disabled" });

      setGenderSelected(data.getUser.userData.gender);

      setStartDate(
        data.getUser.userData.age === "NA"
          ? new Date("6/1/1990")
          : new Date(data.getUser.userData.age)
      );

      setform((form) => ({
        ...form,
        email: data.getUser.email,
        role: data.getUser.role.rolType,
        active: data.getUser.active,
        name: data.getUser.userData.name,
        age: data.getUser.userData.age,
        gender: data.getUser.userData.gender,
        tel: data.getUser.userData.tel,
        state: data.getUser.userData.address.state,
        city: data.getUser.userData.address.city,
        street: data.getUser.userData.address.street,
        postalCode: data.getUser.userData.address.postalCode,
      }));
    }
  }, [data]);

  const profileEdit = (type) => {
    switch (type) {
      case "save":
        addToast("Saving...", {
          appearance: "success",
          autoDismiss: true,
        });
        updateUser({
          variables: {
            id,
            email: form.email,
            password: form.password,
            role: rolSelected.id,
            active: selectedStatus.value,
          },
        });
        break;
      case "edit":
        addToast("Editing is enabled", {
          appearance: "info",
          autoDismiss: true,
        });
        break;
      case "cancel":
        addToast("Operation aborted", {
          appearance: "warning",
          autoDismiss: true,
        });
        setform((form) => ({
          ...form,
          email: data.getUser.email,
          role: data.getUser.role.rolType,
          active: data.getUser.active,
        }));
        break;
      default:
        return;
    }
    setEditable((isEditable) => ({
      ...isEditable,
      profile: !isEditable.profile,
    }));
  };
  const privateEdit = (type) => {
    switch (type) {
      case "save":
        addToast("Saving...", {
          appearance: "success",
          autoDismiss: true,
        });
        updatePrivate({
          variables: {
            user: id,
            name: form.name,
            age: `${
              startDate.getMonth() + 1
            }/${startDate.getDate()}/${startDate.getFullYear()}`,
            gender: genderSelected.id,
            tel: form.tel,
          },
        });
        break;
      case "edit":
        addToast("Editing is enabled", {
          appearance: "info",
          autoDismiss: true,
        });
        break;
      case "cancel":
        addToast("Operation aborted", {
          appearance: "warning",
          autoDismiss: true,
        });
        setform((form) => ({
          ...form,
          name: data.getUser.userData.name,
          age: data.getUser.userData.age,
          gender: data.getUser.userData.gender,
          tel: data.getUser.userData.tel,
        }));
        break;
      default:
        return;
    }
    setEditable((isEditable) => ({
      ...isEditable,
      private: !isEditable.private,
    }));
  };
  const addressEdit = (type) => {
    switch (type) {
      case "save":
        addToast("Saving...", {
          appearance: "success",
          autoDismiss: true,
        });
        updateAddress({
          variables: {
            user: id,
            state: form.state,
            city: form.city,
            street: form.street,
            postalCode: form.postalCode,
          },
        });
        break;
      case "edit":
        addToast("Editing is enabled", {
          appearance: "info",
          autoDismiss: true,
        });
        break;
      case "cancel":
        addToast("Operation aborted", {
          appearance: "warning",
          autoDismiss: true,
        });
        setform((form) => ({
          ...form,
          state: data.getUser.userData.address.state,
          city: data.getUser.userData.address.city,
          street: data.getUser.userData.address.street,
          postalCode: data.getUser.userData.address.postalCode,
        }));
        break;
      default:
        return;
    }
    setEditable((isEditable) => ({
      ...isEditable,
      address: !isEditable.address,
    }));
  };

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
                alt="user profile"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center md:flex-row w-full">
            <div className="w-full h-full mb-2 md:w-auto md:text-base text-xs md:m-4 border border-gray-200 shadow-lg bg-white p-4 rounded-tl-3xl rounded-br-3xl">
              <div className="mb-2 flex justify-between items-center">
                <div className="">Profile data</div>
                <div className="flex items-center">
                  <motion.div
                    className="flex justify-center"
                    whileHover={isEditable.profile ? "" : { rotate: -90 }}
                    onClick={() => {
                      profileEdit(isEditable.profile ? "save" : "edit");
                    }}
                  >
                    <IconContext.Provider value={{ size: "1.5rem" }}>
                      {isEditable.profile ? <HiOutlineSave /> : <IoSettings />}
                    </IconContext.Provider>
                  </motion.div>
                  {isEditable.profile ? (
                    <motion.div
                      className="ml-2"
                      whileHover={{ rotate: 90 }}
                      onClick={() => {
                        profileEdit("cancel");
                      }}
                    >
                      <IconContext.Provider value={{ size: "1.5rem" }}>
                        <HiOutlineX />
                      </IconContext.Provider>
                    </motion.div>
                  ) : null}
                </div>
              </div>
              <hr />
              <div className="mt-2 flex flex-row justify-center">
                <div className="flex justify-center flex-wrap content-center px-2 py-2 w-2/3 border-l border-t border-b rounded-l-lg">
                  Email
                </div>
                <input
                  className={`w-auto px-2 py-4 md:px-2 md:py-2 rounded-r-lg text-center ${
                    isEditable.profile ? "bg-blue-200" : "bg-gray-200"
                  }`}
                  value={form.email}
                  onChange={(e) => {
                    setform((form) => ({ ...form, email: e.target.value }));
                  }}
                  disabled={!isEditable.profile}
                />
              </div>
              <div className="mt-2 flex flex-row justify-center flex-nowrap">
                <div className="flex justify-center flex-wrap content-center px-2 py-2 w-2/3 border-l border-t border-b rounded-l-lg">
                  Password
                </div>
                <input
                  className={`w-auto px-2 py-4 md:px-2 md:py-2 rounded-r-lg text-center ${
                    isEditable.profile ? "bg-blue-200" : "bg-gray-200"
                  }`}
                  value={
                    !isEditable.profile
                      ? form.password.replaceAll(form.password, "********")
                      : form.password
                  }
                  onChange={(e) => {
                    setform((form) => ({ ...form, password: e.target.value }));
                  }}
                  disabled={!isEditable.profile}
                />
              </div>
              <div className="mt-2 flex flex-row flex-nowrap justify-center">
                <div className="px-2 py-2 w-2/3 border-l border-t border-b rounded-l-lg">
                  Role
                </div>
                <div
                  className={`flex items-center rounded-r-lg w-full justify-center ${
                    isEditable.profile ? "bg-blue-200" : "bg-gray-200"
                  }`}
                >
                  {isEditable.profile ? (
                    <Listbox value={rolSelected} onChange={setrolSelected}>
                      {({ open }) => (
                        <>
                          <div className="relative">
                            <Listbox.Button className="relative w-full  rounded-r-lg pl-2 pr-7 py-2 text-left cursor-pointer focus:outline-none sm:text-sm">
                              <span className="flex items-center">
                                {rolSelected.rolType}
                              </span>
                              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
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
                                className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                                static
                              >
                                {roles.getRoles.map((rol) => (
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
                  ) : (
                    <div className="px-2 py-4 md:px-2 md:py-2 rounded-r-lg text-center">
                      {form.role}
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-2 flex flex-row flex-nowrap justify-center">
                <div className="px-2 py-2 w-2/3 border-l border-t border-b rounded-l-lg">
                  Status
                </div>
                <div
                  className={`flex items-center rounded-r-lg w-full justify-center ${
                    isEditable.profile ? "bg-blue-200" : "bg-gray-200"
                  }`}
                >
                  {isEditable.profile ? (
                    <Listbox value={selectedStatus} onChange={setStatus}>
                      {({ open }) => (
                        <>
                          <div className="relative">
                            <Listbox.Button className="relative w-full  rounded-r-lg pl-2 pr-7 py-2 text-left cursor-pointer focus:outline-none sm:text-sm">
                              <span className="flex items-center">
                                {selectedStatus.status}
                              </span>
                              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
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
                                className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                                static
                              >
                                {status.map((type) => (
                                  <Listbox.Option
                                    className={({ active }) =>
                                      classNames(
                                        active
                                          ? "text-white bg-indigo-600"
                                          : "text-gray-900",
                                        "cursor-default select-none relative py-2 pl-3 pr-9"
                                      )
                                    }
                                    key={type.id}
                                    value={type}
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <div className="flex items-center">
                                          <span>{type.status}</span>
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
                  ) : (
                    <div
                      className={`w-full ${
                        data.getUser.active ? "bg-green-300" : "bg-red-400"
                      } px-2 py-2 rounded-r-lg`}
                    >
                      {data.getUser.active ? "Active" : "Inactive"}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full h-full my-2 md:w-auto md:text-base md:m-4 text-xs border border-gray-200 shadow-lg bg-white p-4 rounded-tl-3xl rounded-br-3xl">
              <div className="mb-2 flex justify-between items-center">
                <div className="">Private data</div>
                <div className="flex items-center">
                  <motion.div
                    className="flex justify-center"
                    whileHover={isEditable.private ? "" : { rotate: -90 }}
                    onClick={() => {
                      privateEdit(isEditable.private ? "save" : "edit");
                    }}
                  >
                    <IconContext.Provider value={{ size: "1.5rem" }}>
                      {isEditable.private ? <HiOutlineSave /> : <IoSettings />}
                    </IconContext.Provider>
                  </motion.div>
                  {isEditable.private ? (
                    <motion.div
                      className="ml-2"
                      whileHover={{ rotate: 90 }}
                      onClick={() => {
                        privateEdit("cancel");
                      }}
                    >
                      <IconContext.Provider value={{ size: "1.5rem" }}>
                        <HiOutlineX />
                      </IconContext.Provider>
                    </motion.div>
                  ) : null}
                </div>
              </div>
              <hr />
              <div className="mt-2 flex flex-row flex-nowrap">
                <div className="px-2 py-2 border-l border-t border-b rounded-l-lg">
                  Name
                </div>
                <input
                  className={`w-full px-2 py-4 md:px-2 md:py-2 rounded-r-lg text-center ${
                    isEditable.private ? "bg-blue-200" : "bg-gray-200"
                  }`}
                  value={form.name}
                  onChange={(e) => {
                    setform((form) => ({ ...form, name: e.target.value }));
                  }}
                  disabled={!isEditable.private}
                />
              </div>
              <div className="mt-2 flex flex-row items-center flex-nowrap">
                <div className="px-2 py-2 w-2/3 border-l border-t border-b rounded-l-lg">
                  Birthday
                </div>
                <div
                  className={`flex items-center rounded-r-lg ${
                    isEditable.private ? "bg-blue-200" : "bg-gray-200"
                  }`}
                >
                  <DatePicker
                    selected={startDate}
                    dateFormat="dd/MM/yyyy"
                    className="h-8"
                    onChange={(date) => setStartDate(date)}
                    disabled={!isEditable.private}
                  />
                </div>
              </div>
              <div className="my-2 flex flex-row flex-nowrap">
                <div className="px-2 py-2 w-2/3 border-l border-t border-b rounded-l-lg">
                  Gender
                </div>
                <div
                  className={`flex items-center rounded-r-lg w-full justify-center ${
                    isEditable.private ? "bg-blue-200" : "bg-gray-200"
                  }`}
                >
                  {isEditable.private ? (
                    <Listbox
                      value={genderSelected}
                      onChange={setGenderSelected}
                    >
                      {({ open }) => (
                        <>
                          <div className="relative">
                            <Listbox.Button className="relative w-full  rounded-r-lg pl-2 pr-7 py-2 text-left cursor-pointer focus:outline-none sm:text-sm">
                              <span className="flex items-center">
                                {genderSelected.id === "F"
                                  ? "Female"
                                  : genderSelected.id === "M"
                                  ? "Male"
                                  : "Uknow"}
                              </span>
                              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
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
                                className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                                static
                              >
                                {gender.map((gender) => (
                                  <Listbox.Option
                                    className={({ active }) =>
                                      classNames(
                                        active
                                          ? "text-white bg-indigo-600"
                                          : "text-gray-900",
                                        "cursor-default select-none relative py-2 pl-3 pr-9"
                                      )
                                    }
                                    key={gender.id}
                                    value={gender}
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <div className="flex items-center">
                                          <span>{gender.value}</span>
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
                  ) : (
                    <input
                      className={`w-auto px-2 py-4 md:px-2 md:py-2 rounded-r-lg text-center ${
                        isEditable.private ? "bg-blue-200" : "bg-gray-200"
                      }`}
                      value={
                        data.getUser.userData.gender === "F" ? "Female" : "Male"
                      }
                      disabled={true}
                    />
                  )}
                </div>
              </div>
              <div className="my-2 flex flex-row flex-nowrap">
                <div className="px-2 py-2 w-2/3 border-l border-t border-b rounded-l-lg">
                  Tel
                </div>
                <input
                  className={`w-auto px-2 py-4 md:px-2 md:py-2 rounded-r-lg text-center ${
                    isEditable.private ? "bg-blue-200" : "bg-gray-200"
                  }`}
                  value={form.tel}
                  onChange={(e) => {
                    setform((form) => ({ ...form, tel: e.target.value }));
                  }}
                />
              </div>
            </div>
            <div className="w-full h-full my-2 md:w-auto md:text-base md:m-4 text-xs border border-gray-200 shadow-lg bg-white p-4 rounded-tl-3xl rounded-br-3xl">
              <div className="mb-2 flex justify-between items-center">
                <div className="">Address data</div>
                <div className="flex items-center">
                  <motion.div
                    className="flex justify-center"
                    whileHover={isEditable.address ? "" : { rotate: -90 }}
                    onClick={() => {
                      addressEdit(isEditable.address ? "save" : "edit");
                    }}
                  >
                    <IconContext.Provider value={{ size: "1.5rem" }}>
                      {isEditable.address ? <HiOutlineSave /> : <IoSettings />}
                    </IconContext.Provider>
                  </motion.div>
                  {isEditable.address ? (
                    <motion.div
                      className="ml-2"
                      whileHover={{ rotate: 90 }}
                      onClick={() => {
                        addressEdit("cancel");
                      }}
                    >
                      <IconContext.Provider value={{ size: "1.5rem" }}>
                        <HiOutlineX />
                      </IconContext.Provider>
                    </motion.div>
                  ) : null}
                </div>
              </div>
              <hr />
              <div className="mt-2 flex flex-row flex-nowrap">
                <div className="px-2 py-2 w-2/3 border-l border-t border-b rounded-l-lg">
                  State
                </div>
                <input
                  className={`w-auto px-2 py-4 md:px-2 md:py-2 rounded-r-lg text-center ${
                    isEditable.address ? "bg-blue-200" : "bg-gray-200"
                  }`}
                  value={form.state}
                  onChange={(event) => {
                    setform((form) => ({ ...form, state: event.target.value }));
                  }}
                />
              </div>
              <div className="mt-2 flex flex-row flex-nowrap">
                <div className="px-2 py-2 w-2/3 border-l border-t border-b rounded-l-lg">
                  City
                </div>
                <input
                  className={`w-auto px-2 py-4 md:px-2 md:py-2 rounded-r-lg text-center ${
                    isEditable.address ? "bg-blue-200" : "bg-gray-200"
                  }`}
                  value={form.city}
                  onChange={(event) => {
                    setform((form) => ({ ...form, city: event.target.value }));
                  }}
                />
              </div>
              <div className="my-2 flex flex-row flex-nowrap">
                <div className="px-2 py-2 border-l border-t border-b rounded-l-lg">
                  Street
                </div>
                <input
                  className={`w-full px-2 py-4 md:px-2 md:py-2 rounded-r-lg text-center ${
                    isEditable.address ? "bg-blue-200" : "bg-gray-200"
                  }`}
                  value={form.street}
                  onChange={(event) => {
                    setform((form) => ({
                      ...form,
                      street: event.target.value,
                    }));
                  }}
                />
              </div>
              <div className="my-2 flex flex-row flex-nowrap">
                <div className="px-2 py-2 border-l w-auto border-t border-b rounded-l-lg">
                  Postal Code
                </div>
                <input
                  className={`w-auto px-2 py-4 md:px-2 md:py-2 rounded-r-lg text-center ${
                    isEditable.address ? "bg-blue-200" : "bg-gray-200"
                  }`}
                  value={form.postalCode}
                  onChange={(event) => {
                    setform((form) => ({
                      ...form,
                      postalCode: event.target.value,
                    }));
                  }}
                />
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
