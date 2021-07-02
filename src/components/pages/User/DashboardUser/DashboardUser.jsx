import React from "react";
import { gql, useMutation } from "@apollo/client";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

const ADD_SURVEY = gql`
  mutation AddSurvey($patient: String!, $modality: String!) {
    addSurvey(patient: $patient, modality: $modality) {
      id
    }
  }
`;

export default function DashboardUser() {
  const path = useHistory();
  const [cookies, setCookie] = useCookies(["user"]);
  const [addSurvey] = useMutation(ADD_SURVEY, {
    onCompleted: (data) => {
      path.push(`/User-NewSurvey/${data.addSurvey.id}`);
    },
  });

  const newSurvey = () => {
    addSurvey({
      variables: { patient: cookies.user, modality: "Obligatory" },
    });
  };

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="flex flex-col">
        <div className="text-base md:text-2xl font-semibold text-gray-700">
          WELCOME
        </div>
        <p className="text-base md:text-2xl font-semibold text-gray-700">
          Take care and be good!
        </p>
      </div>
      <div className="w-4/6 bg-white py-2 px-2 my-4 rounded-md shadow-lg">
        <h3 className="text-base md:text-2xl my-4 font-semibold text-gray-900">
          Choise an action
        </h3>
        <h3>Surveys</h3>
        <div className="h-auto w-full">
          <div className="p-2 md:w-100 ">
            <div
              onClick={() => {
                newSurvey();
              }}
              className="flex justify-center items-center p-4 bg-blue-200 rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100"
            >
              <p className=" text-sm font-medium ml-2 ">Answer a new survey</p>
            </div>
          </div>
        </div>
        <h3>COVID-19 Tests Orders</h3>
        <div className="h-auto">
          <div className="p-2 md:w-100 ">
            <div className="flex items-center p-4 bg-blue-200 rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100">
              <p className=" text-sm font-medium ml-2 ">Tests Covid</p>
            </div>
          </div>
        </div>
        <h3>Appointments Orders</h3>
        <div className="p-2 md:w-100 ">
          <div className="flex items-center p-4 bg-yellow-200 rounded-lg shadow-xs cursor-pointer hover:bg-yellow-500 hover:text-gray-100">
            <div>
              <p className=" text-sm font-medium ml-2">Take an appointment</p>
            </div>
          </div>
        </div>
        <h3>Appointments Orders</h3>
        <div className="p-2 md:w-100 ">
          <div className="flex items-center p-4 bg-red-200 rounded-lg shadow-xs cursor-pointer hover:bg-red-500 hover:text-gray-100">
            <div>
              <p className=" text-sm font-medium ml-2">Print recipes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
