import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Loader from "../../../UI/organisms/Loader";
import dateFormat from "dateformat";

const GET_APPOINTMENT = gql`
  query GetAppointment($id: String!) {
    getAppointment(id: $id) {
      id
      request
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
      status
      modality
      place
      files {
        type
        path
      }
    }
  }
`;

export default function Appointment() {
  let { id } = useParams();
  const { data, loading } = useQuery(GET_APPOINTMENT, {
    variables: { id },
  });

  const formatDate = (date) => {
    const unformatedDate = Date.parse(date);
    const formatedDate = dateFormat(unformatedDate, "dd-mm-yyyy");
    return formatedDate;
  };

  if (loading) return <Loader />;

  return (
    <div className="w-full flex justify-center">
      {console.log(data)}
      <div className="flex flex-col bg-white p-4 rounded-xl shadow-md w-2/4">
        <div className="mb-4">
          <h1 className="mb-2">Folio - {data.getAppointment.id}</h1>
          <hr />
        </div>
        <div className="mb-4">
          <div className="flex flex-row justify-center items-center">
            <div className="bg-gray-200 p-2 rounded-l-xl border border-gray-200 w-1/3">
              Patient
            </div>
            <div className="p-2 rounded-r-xl border border-gray-200 w-2/3">
              {data.getAppointment.patient.userData.name}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex flex-row justify-center items-center">
            <div className="bg-gray-200 p-2 rounded-l-xl border border-gray-200 w-1/3">
              Request
            </div>
            <div className="p-2 rounded-r-xl border border-gray-200 w-2/3">
              {formatDate(data.getAppointment.request)}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex flex-row justify-center items-center">
            <div className="bg-gray-200 p-2 rounded-l-xl border border-gray-200 w-1/3">
              Doctor
            </div>
            <div
              className={`p-2 rounded-r-xl border border-gray-200 w-2/3 ${
                data.getAppointment.doctor ? "bg-white" : "bg-red-200"
              }`}
            >
              {data.getAppointment.doctor
                ? data.getAppointment.doctor.userData.name
                : "Pendient"}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex flex-row justify-center items-center">
            <div className="bg-gray-200 p-2 rounded-l-xl border border-gray-200 w-1/3">
              Date
            </div>
            <div
              className={`p-2 rounded-r-xl border border-gray-200 w-2/3 ${
                data.getAppointment.date ? "bg-white" : "bg-red-200"
              }`}
            >
              {data.getAppointment.date ? data.getAppointment.date : "Pendient"}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex flex-row justify-center items-center">
            <div className="bg-gray-200 p-2 rounded-l-xl border border-gray-200 w-1/3">
              Status
            </div>
            <div
              className={`p-2 rounded-r-xl border border-gray-200 w-2/3 ${
                data.getAppointment.status ? "bg-white" : "bg-red-200"
              }`}
            >
              {data.getAppointment.status}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex flex-row justify-center items-center">
            <div className="bg-gray-200 p-2 rounded-l-xl border border-gray-200 w-1/3">
              Modality
            </div>
            <div
              className={`p-2 rounded-r-xl border border-gray-200 w-2/3 ${
                data.getAppointment.modality ? "bg-white" : "bg-red-200"
              }`}
            >
              {data.getAppointment.modality
                ? data.getAppointment.modality
                : "Pendient"}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex flex-row justify-center items-center">
            <div className="bg-gray-200 p-2 rounded-l-xl border border-gray-200 w-1/3">
              Place
            </div>
            <div
              className={`p-2 rounded-r-xl border border-gray-200 w-2/3 ${
                data.getAppointment.modality ? "bg-white" : "bg-red-200"
              }`}
            >
              {data.getAppointment.modality
                ? data.getAppointment.modality
                : "Pendient"}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex flex-col w-full justify-center items-center">
            <div className="bg-gray-200 p-2 w-full rounded-t-xl border border-gray-200">
              Files
            </div>
            <div
              className={`p-2 rounded-b-xl border border-gray-200 w-full ${
                Object.keys(data.getAppointment.files).length
                  ? "bg-white"
                  : "bg-red-200"
              }`}
            >
              {Object.keys(data.getAppointment.files).length
                ? data.getAppointment.files.map((file) => (
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
    </div>
  );
}
