import React from "react";
import { Images } from "./../../../assets/images/home/";

//TODO: Agregar informacion sobre el covid

export default function Home() {
  return (
    <div className="h-auto">
      <div className="fadeIn lg:max-w-full lg:flex shadow-xl rounded">
        <img
          className="rounded-t-xl h-48 w-full sm:w-auto lg:h-auto text-center border-none border-transparent md:border-r md:border-gray-300"
          title="Mountain"
          alt="Mountain"
          src={Images.coronavirus}
        ></img>
        <div className="bg-white p-4 flex flex-col justify-around leading-normal">
          <div className="mb-2 md:mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              <svg
                className="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Secure informacion
            </p>
            <h1 className="text-gray-900 font-bold text-base md:text-xl mb-2">
              ¿What is the coronavirus?
            </h1>
            <p className="pb-2 text-xs md:text-base">
              Coronavirus are a family of viruses that cause illness - from the
              common cold to more serious respiratory illnesses - and circulate
              between humans and animals.
            </p>
            <p className="text-xs md:text-base">
              In this case, it is <b>SARS-COV2</b>. It appeared in China last
              December and causes a disease called <b>COVID-19</b>, which spread
              throughout the world and was declareda global pandemic by the{" "}
              <em>World Health Organization</em>.
            </p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-gray-900 leading-none">
                <i>Heal Tea</i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="fadeInDown divide-y-4 divide-gray-300">
        <div className="m-2">
          <h1 className="text-gray-900 font-bold text-base md:text-xl mb-2 ">
            ¿When should I go to receive medical attention?
          </h1>
          <p>
            A person should suspect COVID-19 when they have at least two of the
            following symptoms:
          </p>
        </div>
        <div className="container w-full m-auto flex flex-wrap flex-col md:flex-row items-center justify-center">
          <div className="w-auto p-3">
            <div className="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 border shadow-lg">
              <img
                className="block h-auto flex-none bg-auto"
                src={Images.symptom}
                alt="symptom"
              />
              <div className="bg-white w-full rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-center leading-normal">
                <div className="text-black font-bold text-xl mb-2 leading-tight">
                  Coughing / Sneezing
                </div>
              </div>
            </div>
          </div>
          <div className="w-auto p-3">
            <div className="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 border shadow-lg">
              <img
                className="block h-auto flex-none bg-auto"
                src={Images.symptom2}
                alt="symptom"
              />
              <div className="bg-white w-full rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-center leading-normal">
                <div className="text-black font-bold text-xl mb-2 leading-tight">
                  Fever/Temperature
                </div>
              </div>
            </div>
          </div>
          <div className="w-auto p-3">
            <div className="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 border shadow-lg">
              <img
                className="block h-auto flex-none bg-cover"
                src={Images.symptom3}
                alt="symptom"
              />
              <div className="bg-white w-full rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-center leading-normal">
                <div className="text-black font-bold text-xl mb-2 leading-tight">
                  Headache
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="fadeInDown divide-y-4 divide-gray-300">
        <div className="m-2">
          <h1 className="text-gray-900 font-bold text-base md:text-xl mb-2 ">
            And that is accompanied by any of the following:
          </h1>
        </div>
        <div className="container w-full m-auto flex flex-wrap flex-col md:flex-row items-center justify-center">
          <div className="w-auto p-3">
            <div className="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 border shadow-lg">
              <img
                className="block h-auto flex-none bg-cover"
                src={Images.symptom4}
                alt="symptom"
              />
              <div className="bg-white w-full rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-center leading-normal">
                <div className="text-black font-bold text-xl leading-tight">
                  Difficulty breathing <br />
                  (more severe cases)
                </div>
              </div>
            </div>
          </div>
          <div className="w-auto p-3">
            <div className="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 border shadow-lg">
              <img
                className="block h-auto  flex-none bg-auto"
                src={Images.symptom5}
                alt="symptom"
              />
              <div className="bg-white w-full rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-center leading-normal">
                <div className="text-black font-bold text-xl leading-tight">
                  Throat pain
                </div>
              </div>
            </div>
          </div>
          <div className="w-auto p-3">
            <div className="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 border shadow-lg">
              <img
                className="block h-auto flex-none bg-cover"
                src={Images.symptom6}
                alt="symptom"
              />
              <div className="bg-white w-full rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-center leading-normal">
                <div className="text-black font-bold text-xl leading-tight">
                  Runny nose
                </div>
              </div>
            </div>
          </div>
          <div className="w-auto p-3">
            <div className="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 border shadow-lg">
              <img
                className="block h-auto flex-none bg-cover"
                src={Images.symptom7}
                alt="symptom"
              />
              <div className="bg-white w-full rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-center leading-normal">
                <div className="text-black font-bold text-xl leading-tight">
                  Red eyes
                </div>
              </div>
            </div>
          </div>
          <div className="w-auto p-3">
            <div className="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 border shadow-lg">
              <img
                className="block h-auto flex-none bg-cover"
                src={Images.symptom8}
                alt="symptom"
              />
              <div className="bg-white w-full rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-center leading-normal">
                <div className="text-black font-bold text-xl">
                  Muscle or joint pain
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
