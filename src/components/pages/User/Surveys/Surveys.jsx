import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

const ADD_SURVEY = gql`
  mutation FinishSurvey($survey: String!, $answers: String!, $other: String!) {
    finishSurvey(survey: $survey, answers: $answers, other: $other) {
      id
    }
  }
`;

export default function Surveys() {
  const Path = useHistory();
  const { id } = useParams();
  const [optionSelected, setOptionSelected] = useState({
    ask1: "",
    ask2: "",
    ask3: "",
    ask4: "",
    ask5: "",
    ask6: "",
    ask7: "",
    ask8: "",
    ask9: "",
    ask10: "",
    ask11: "",
    ask12: "",
    ask13: "",
  });
  const [otherSymptoms, setotherSymptoms] = useState("");

  const [finishSurvey] = useMutation(ADD_SURVEY, {
    onCompleted: (data) => {
      Path.goBack();
    },
  });

  const handleChoice = (event) => {
    setOptionSelected((optionSelected) => ({
      ...optionSelected,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    const answers = `${
      optionSelected.ask1 +
      optionSelected.ask2 +
      optionSelected.ask3 +
      optionSelected.ask4 +
      optionSelected.ask5 +
      optionSelected.ask6 +
      optionSelected.ask7 +
      optionSelected.ask8 +
      optionSelected.ask9 +
      optionSelected.ask10 +
      optionSelected.ask11 +
      optionSelected.ask12 +
      optionSelected.ask13
    }`;
    console.log(answers);
    console.log(otherSymptoms);
    finishSurvey({
      variables: {
        survey: id,
        answers,
        other: otherSymptoms,
      },
    });
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="bg-white px-2 py-2 rounded-xl shadow-lg">
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold text-gray-700 py-2">SURVEYS</h1>
          <p className="text-medium font-semibold text-gray-700 pb-2">
            If you have one of the next symptoms you will must be absent or
            immediate withdrawal from the institution will be justified.
          </p>
          <hr />
        </div>
        <table className="table-fixed">
          <thead>
            <tr>
              <th>Ask</th>
              <th colSpan="2">Answer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="">
                <div className="flex flex-row justify-center items-center ">
                  <span className="py-2 px-2 text-lg font-medium">1</span>
                  <span className="text-center text-base px-2 py-2  w-full">
                    Do you have a fever, chills like the flu, or a fever with a
                    temperature taken by mouth of 38.1 ° C (100.6 ° F) or more?
                  </span>
                </div>
              </td>
              <td colSpan="2" className="border-l content-center">
                <div
                  onChange={(e) => {
                    handleChoice(e);
                  }}
                  className="flex flex-row justify-evenly items-center"
                >
                  <label className="inline-flex items-center">
                    <input
                      value="1"
                      name="ask1"
                      checked={optionSelected.ask1 === "1"}
                      type="radio"
                      className="form-radio"
                    />
                    <span className="ml-2">Si</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      value="0"
                      name="ask1"
                      checked={optionSelected.ask1 === "0"}
                      type="radio"
                      className="form-radio"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </td>
            </tr>

            <tr className="bg-blue-200">
              <td className="">
                <div className="flex flex-row justify-center items-center ">
                  <span className="py-2 px-2 text-lg font-medium">2</span>
                  <span className="text-center text-base px-2 py-2  w-full">
                    Have you had a sudden loss of smell without congestion nasal
                    (stuffy nose), with or without loss of taste?
                  </span>
                </div>
              </td>
              <td colSpan="2" className="border-l content-center">
                <div
                  onChange={(e) => {
                    handleChoice(e);
                  }}
                  className="flex flex-row justify-evenly items-center"
                >
                  <label className="inline-flex items-center">
                    <input
                      value="1"
                      name="ask2"
                      checked={optionSelected.ask2 === "1"}
                      type="radio"
                      className="form-radio"
                    />
                    <span className="ml-2">Si</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      value="0"
                      name="ask2"
                      checked={optionSelected.ask2 === "0"}
                      type="radio"
                      className="form-radio"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </td>
            </tr>

            <tr>
              <td className="">
                <div className="flex flex-row justify-center items-center ">
                  <span className="py-2 px-2 text-lg font-medium">3</span>
                  <span className="text-center text-base px-2 py-2  w-full">
                    Have you developed a cough or has your chronic cough gotten
                    worse recently?
                  </span>
                </div>
              </td>
              <td colSpan="2" className="border-l content-center">
                <div
                  onChange={(e) => {
                    handleChoice(e);
                  }}
                  className="flex flex-row justify-evenly items-center"
                >
                  <label className="inline-flex items-center">
                    <input
                      value="1"
                      name="ask3"
                      checked={optionSelected.ask3 === "1"}
                      type="radio"
                      className="form-radio"
                    />
                    <span className="ml-2">Si</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      value="0"
                      name="ask3"
                      checked={optionSelected.ask3 === "0"}
                      type="radio"
                      className="form-radio"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </td>
            </tr>

            <tr className="bg-blue-200">
              <td className="text-center">
                <div className="flex flex-row justify-center items-center ">
                  <span className="py-2 px-2 text-lg font-medium">4</span>
                  <span className="text-center text-base px-2 py-2  w-full">
                    Are you having trouble breathing or shortness of breath?
                  </span>
                </div>
              </td>
              <td colSpan="2" className="border-l content-center">
                <div
                  onChange={(e) => {
                    handleChoice(e);
                  }}
                  className="flex flex-row justify-evenly items-center"
                >
                  <label className="inline-flex items-center">
                    <input
                      value="1"
                      name="ask4"
                      checked={optionSelected.ask4 === "1"}
                      type="radio"
                      className="form-radio"
                    />
                    <span className="ml-2">Si</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      value="0"
                      name="ask4"
                      checked={optionSelected.ask4 === "0"}
                      type="radio"
                      className="form-radio"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </td>
            </tr>

            <tr>
              <td className="text-center">
                <div className="flex flex-row justify-center items-center ">
                  <span className="py-2 px-2 text-lg font-medium">5</span>
                  <span className="text-center text-base px-2 py-2  w-full">
                    Do you have a sore throat?
                  </span>
                </div>
              </td>
              <td colSpan="2" className="border-l content-center">
                <div
                  onChange={(e) => {
                    handleChoice(e);
                  }}
                  className="flex flex-row justify-evenly items-center"
                >
                  <label className="inline-flex items-center">
                    <input
                      value="1"
                      name="ask5"
                      checked={optionSelected.ask5 === "1"}
                      type="radio"
                      className="form-radio"
                    />
                    <span className="ml-2">Si</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      value="0"
                      name="ask5"
                      checked={optionSelected.ask5 === "0"}
                      type="radio"
                      className="form-radio"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </td>
            </tr>

            <tr className="bg-blue-200">
              <td className="text-center">
                <div className="flex flex-row justify-center items-center ">
                  <span className="py-2 px-2 text-lg font-medium">6</span>
                  <span className="text-center text-base px-2 py-2  w-full">
                    Do you have a runny or stuffy nose of unknown cause?
                  </span>
                </div>
              </td>
              <td colSpan="2" className="border-l content-center">
                <div
                  onChange={(e) => {
                    handleChoice(e);
                  }}
                  className="flex flex-row justify-evenly items-center"
                >
                  <label className="inline-flex items-center">
                    <input
                      value="1"
                      name="ask6"
                      checked={optionSelected.ask6 === "1"}
                      type="radio"
                      className="form-radio"
                    />
                    <span className="ml-2">Si</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      value="0"
                      name="ask6"
                      checked={optionSelected.ask6 === "0"}
                      type="radio"
                      className="form-radio"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <div className="flex flex-row justify-center items-center ">
                  <span className="py-2 px-2 text-lg font-medium">7</span>
                  <span className="text-center text-base px-2 py-2  w-full">
                    Stomachache
                  </span>
                </div>
              </td>
              <td colSpan="2" className="border-l content-center">
                <div
                  onChange={(e) => {
                    handleChoice(e);
                  }}
                  className="flex flex-row justify-evenly items-center"
                >
                  <label className="inline-flex items-center">
                    <input
                      value="1"
                      name="ask7"
                      checked={optionSelected.ask7 === "1"}
                      type="radio"
                      className="form-radio"
                    />
                    <span className="ml-2">Si</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      value="0"
                      name="ask7"
                      checked={optionSelected.ask7 === "0"}
                      type="radio"
                      className="form-radio"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </td>
            </tr>

            <tr className="bg-blue-200">
              <td className="text-center">
                <div className="flex flex-row justify-center items-center ">
                  <span className="py-2 px-2 text-lg font-medium">8</span>
                  <span className="text-center text-base px-2 py-2  w-full">
                    Nausea or vomiting
                  </span>
                </div>
              </td>
              <td colSpan="2" className="border-l content-center">
                <div
                  onChange={(e) => {
                    handleChoice(e);
                  }}
                  className="flex flex-row justify-evenly items-center"
                >
                  <label className="inline-flex items-center">
                    <input
                      value="1"
                      name="ask8"
                      checked={optionSelected.ask8 === "1"}
                      type="radio"
                      className="form-radio"
                    />
                    <span className="ml-2">Si</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      value="0"
                      name="ask8"
                      checked={optionSelected.ask8 === "0"}
                      type="radio"
                      className="form-radio"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </td>
            </tr>

            <tr>
              <td className="text-center">
                <div className="flex flex-row justify-center items-center ">
                  <span className="py-2 px-2 text-lg font-medium">9</span>
                  <span className="text-center text-base px-2 py-2  w-full">
                    Diarrhea
                  </span>
                </div>
              </td>
              <td colSpan="2" className="border-l content-center">
                <div
                  onChange={(e) => {
                    handleChoice(e);
                  }}
                  className="flex flex-row justify-evenly items-center"
                >
                  <label className="inline-flex items-center">
                    <input
                      value="1"
                      name="ask9"
                      checked={optionSelected.ask9 === "1"}
                      type="radio"
                      className="form-radio"
                    />
                    <span className="ml-2">Si</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      value="0"
                      name="ask9"
                      checked={optionSelected.ask9 === "0"}
                      type="radio"
                      className="form-radio"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </td>
            </tr>

            <tr className="bg-blue-200">
              <td className="text-center">
                <div className="flex flex-row justify-center items-center ">
                  <span className="py-2 px-2 text-lg font-medium">10</span>
                  <span className="text-center text-base px-2 py-2  w-full">
                    Unusually severe fatigue for no obvious reason
                  </span>
                </div>
              </td>
              <td colSpan="2" className="border-l content-center">
                <div
                  onChange={(e) => {
                    handleChoice(e);
                  }}
                  className="flex flex-row justify-evenly items-center"
                >
                  <label className="inline-flex items-center">
                    <input
                      value="1"
                      name="ask10"
                      checked={optionSelected.ask10 === "1"}
                      type="radio"
                      className="form-radio"
                    />
                    <span className="ml-2">Si</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      value="0"
                      name="ask10"
                      checked={optionSelected.ask10 === "0"}
                      type="radio"
                      className="form-radio"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </td>
            </tr>

            <tr>
              <td className="text-center">
                <div className="flex flex-row justify-center items-center ">
                  <span className="py-2 px-2 text-lg font-medium">11</span>
                  <span className="text-center text-base px-2 py-2  w-full">
                    Significant loss of appetite
                  </span>
                </div>
              </td>
              <td colSpan="2" className="border-l content-center">
                <div
                  onChange={(e) => {
                    handleChoice(e);
                  }}
                  className="flex flex-row justify-evenly items-center"
                >
                  <label className="inline-flex items-center">
                    <input
                      value="1"
                      name="ask11"
                      checked={optionSelected.ask11 === "1"}
                      type="radio"
                      className="form-radio"
                    />
                    <span className="ml-2">Si</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      value="0"
                      name="ask11"
                      checked={optionSelected.ask11 === "0"}
                      type="radio"
                      className="form-radio"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </td>
            </tr>

            <tr className="bg-blue-200">
              <td className="text-center">
                <div className="flex flex-row justify-center items-center ">
                  <span className="py-2 px-2 text-lg font-medium">12</span>
                  <span className="text-center text-base px-2 py-2  w-full">
                    Unusual generalized muscle aches or for no obvious reason
                    (not related to physical exertion)
                  </span>
                </div>
              </td>
              <td colSpan="2" className="border-l content-center">
                <div
                  onChange={(e) => {
                    handleChoice(e);
                  }}
                  className="flex flex-row justify-evenly items-center"
                >
                  <label className="inline-flex items-center">
                    <input
                      value="1"
                      name="ask12"
                      checked={optionSelected.ask12 === "1"}
                      type="radio"
                      className="form-radio"
                    />
                    <span className="ml-2">Si</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      value="0"
                      name="ask12"
                      checked={optionSelected.ask12 === "0"}
                      type="radio"
                      className="form-radio"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </td>
            </tr>

            <tr>
              <td className="text-center">
                <div className="flex flex-row justify-center items-center ">
                  <span className="py-2 px-2 text-lg font-medium">13</span>
                  <span className="text-center text-base px-2 py-2  w-full">
                    Unusual headache
                  </span>
                </div>
              </td>
              <td colSpan="2" className="border-l content-center">
                <div
                  onChange={(e) => {
                    handleChoice(e);
                  }}
                  className="flex flex-row justify-evenly items-center"
                >
                  <label className="inline-flex items-center">
                    <input
                      value="1"
                      name="ask13"
                      checked={optionSelected.ask13 === "1"}
                      type="radio"
                      className="form-radio"
                    />
                    <span className="ml-2">Si</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      value="0"
                      name="ask13"
                      checked={optionSelected.ask13 === "0"}
                      type="radio"
                      className="form-radio"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </td>
            </tr>

            <tr>
              <td className="text-center">
                <div className="flex flex-row justify-center items-center ">
                  <span className="py-2 px-2 text-lg font-medium">Others</span>
                  <span className="text-center text-base px-2 py-2  w-full">
                    Describe if you have other symptoms:
                  </span>
                </div>
              </td>
              <td colSpan="2">
                <textarea
                  className="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                  id="message"
                  type="text"
                  placeholder="Describe your symptoms"
                  value={otherSymptoms}
                  onChange={(e) => {
                    setotherSymptoms(e.target.value);
                  }}
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex flex-row justify-center">
          <div className="px-2 py-2">
            <div>
              <button
                onClick={() => {
                  handleSubmit();
                }}
                className="font-semibold bg-green-200 px-2 py-2 rounded-lg"
              >
                Send
              </button>
            </div>
          </div>
          <div className="px-2 py-2">
            <div>
              <button className="font-semibold bg-red-200 px-2 py-2 rounded-lg">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
