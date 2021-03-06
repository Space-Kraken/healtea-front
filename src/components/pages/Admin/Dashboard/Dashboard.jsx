import React, { useState } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import UsersList from "./../../../../assets/images/Dashboard/usersList.png";
import addUSer from "./../../../../assets/images/Dashboard/addUser.png";
import Records from "./../../../../assets/images/Dashboard/records.png";
import Roles from "./../../../../assets/images/Dashboard/roles.png";
import Appointments from "./../../../../assets/images/MedicalRecords/Appointments.png";
import Recipes from "./../../../../assets/images/MedicalRecords/Recipes.png";
import Surveys from "./../../../../assets/images/MedicalRecords/Surveys.png";
import Tests from "./../../../../assets/images/MedicalRecords/Test.png";
import Modal from "react-modal";
import AddUser from "./../AddUser";
import AddRole from "./../AddRole";
import "./Dashboard.css";

export default function Dashboard() {
  const [addUserIsOpen, setAddUserIsOpen] = useState(false);
  const [addRoleIsOpen, setAddRoleIsOpen] = useState(false);
  let path = useHistory();

  const closeModal = (target) => {
    switch (target) {
      case "user":
        setAddUserIsOpen(false);
        break;
      case "role":
        setAddRoleIsOpen(false);
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full flex flex-col justify-center mb-8">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col m-2 shadow-lg bg-white w-auto lg:w-1/3 rounded-br-main rounded-tl-main border">
          <motion.div className="m-auto" animate={{ scale: [0.5, 1] }}>
            <img src={UsersList} alt="users list" />
          </motion.div>
          <div className="py-2">
            <button
              onClick={() => {
                path.push("/Dashboard-Users");
              }}
              className="fadeIn bg-blue-200 w-1/3 m-auto rounded-lg shadow-md font-medium py-2 focus:outline-none hover:bg-blue-300"
            >
              See Users
            </button>
          </div>
        </div>
        <div className="flex flex-col m-2 shadow-lg justify-center bg-white w-auto lg:w-1/3 rounded-br-main rounded-tl-main border">
          <motion.div className="m-auto pt-2" animate={{ scale: [0.5, 1] }}>
            <img src={addUSer} alt="users list" />
          </motion.div>
          <div className="py-2">
            <button
              onClick={() => {
                setAddUserIsOpen(true);
              }}
              className="bg-blue-200 w-1/3 m-auto rounded-lg shadow-md font-medium py-2 focus:outline-none hover:bg-blue-300"
            >
              Add Users
            </button>
          </div>
        </div>
        <Modal
          isOpen={addUserIsOpen}
          onRequestClose={closeModal}
          closeTimeoutMS={800}
          style={{
            content: {
              borderRadius: "25px 0px 25px 0px",
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
            },
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(90, 90, 90, 0.75)",
            },
          }}
        >
          <AddUser close={closeModal} />
        </Modal>
        <div className="flex flex-col m-2 shadow-lg justify-center bg-white w-auto lg:w-1/3 rounded-br-main rounded-tl-main border">
          <motion.div animate={{ scale: [0.5, 1] }} className="m-auto pt-2">
            <img src={Records} alt="users list" />
          </motion.div>
          <div className="py-2">
            <button
              onClick={() => {
                path.push("/Dashboard-Medical-records");
              }}
              className="bg-blue-200 w-1/3 m-auto rounded-lg shadow-md font-medium py-2 focus:outline-none hover:bg-blue-300"
            >
              See Records
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col m-2 shadow-lg bg-white w-auto lg:w-1/3 rounded-br-main rounded-tl-main border">
          <motion.div className="m-auto" animate={{ scale: [0.5, 1] }}>
            <img className="rounded-tl-main" src={Roles} alt="users list" />
          </motion.div>
          <div className="py-2">
            <button
              onClick={() => {
                setAddRoleIsOpen(true);
              }}
              className="fadeIn bg-blue-200 w-1/3 m-auto rounded-lg shadow-md font-medium py-2 focus:outline-none hover:bg-blue-300"
            >
              Add Role
            </button>
          </div>
        </div>
        <div className="flex flex-col m-2 shadow-lg bg-white w-auto lg:w-1/3 rounded-br-main rounded-tl-main border">
          <motion.div className="m-auto" animate={{ scale: [0.5, 1] }}>
            <img className="p-12" src={Appointments} alt="users list" />
          </motion.div>
          <div className="py-2">
            <button
              onClick={() => {
                path.push("/Dashboard-Appointments/global");
              }}
              className="fadeIn bg-blue-200 w-1/3 m-auto rounded-lg shadow-md font-medium py-2 focus:outline-none hover:bg-blue-300"
            >
              See Appointments
            </button>
          </div>
        </div>
        <div className="flex flex-col m-2 shadow-lg bg-white w-auto lg:w-1/3 rounded-br-main rounded-tl-main border">
          <motion.div className="m-auto" animate={{ scale: [0.5, 1] }}>
            <img className="p-12" src={Recipes} alt="users list" />
          </motion.div>
          <div className="py-2">
            <button
              onClick={() => {
                path.push("/Dashboard-Recipes/global");
              }}
              className="fadeIn bg-blue-200 w-1/3 m-auto rounded-lg shadow-md font-medium py-2 focus:outline-none hover:bg-blue-300"
            >
              See Recipes
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col m-2 shadow-lg bg-white w-auto lg:w-1/3 rounded-br-main rounded-tl-main border">
          <motion.div className="m-auto" animate={{ scale: [0.5, 1] }}>
            <img className="p-12" src={Surveys} alt="users list" />
          </motion.div>
          <div className="py-2">
            <button
              onClick={() => {
                path.push("/Dashboard-Surveys/global");
              }}
              className="fadeIn bg-blue-200 w-1/3 m-auto rounded-lg shadow-md font-medium py-2 focus:outline-none hover:bg-blue-300"
            >
              See Surveys
            </button>
          </div>
        </div>
        <div className="flex flex-col m-2 shadow-lg bg-white w-auto lg:w-1/3 rounded-br-main rounded-tl-main border">
          <motion.div className="m-auto" animate={{ scale: [0.5, 1] }}>
            <img className="p-12" src={Tests} alt="users list" />
          </motion.div>
          <div className="py-2">
            <button
              onClick={() => {
                path.push("/Dashboard-Tests/global");
              }}
              className="fadeIn bg-blue-200 w-1/3 m-auto rounded-lg shadow-md font-medium py-2 focus:outline-none hover:bg-blue-300"
            >
              See Tests
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={addRoleIsOpen}
        onRequestClose={closeModal}
        closeTimeoutMS={800}
        style={{
          content: {
            borderRadius: "25px 0px 25px 0px",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(90, 90, 90, 0.75)",
          },
        }}
      >
        <AddRole close={closeModal} />
      </Modal>
    </div>
  );
}
