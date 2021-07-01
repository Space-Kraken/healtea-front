import React from "react";
import { ResponsivePie } from "@nivo/pie";
import Button from "./../../../UI/atoms/Button";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { gql, useQuery } from "@apollo/client";
import Loader from "./../../../UI/organisms/Loader";

const GET_STATISTICS = gql`
  query GetStatistics {
    getStatistics {
      infections {
        healty
        infected
        uknow
      }
    }
  }
`;

export default function Summary() {
  const { loading, error, data: query } = useQuery(GET_STATISTICS);
  let history = useHistory();

  if (loading) return <Loader />;

  const statistics = {
    infectionTrancking: [
      {
        id: "infected",
        label: "infected",
        value: query.getStatistics.infections.infected,
      },
      {
        id: "unknow",
        label: "Unknow",
        value: query.getStatistics.infections.uknow,
      },
      {
        id: "healthy",
        label: "healthy",
        value: query.getStatistics.infections.healty,
      },
    ],
    data: [
      {
        id: "infected",
        label: "infected",
        value: query.getStatistics.infections.infected,
      },
      {
        id: "unknow",
        label: "Unknow",
        value: query.getStatistics.infections.uknow,
      },
      {
        id: "healthy",
        label: "healthy",
        value: query.getStatistics.infections.healty,
      },
    ],
  };

  return (
    <div className="flex justify-center flex-wrap h-full w-full">
      <motion.div
        animate={{ scale: [0.5, 1] }}
        transition={{ duration: 0.5 }}
        className="mb-2 md:mx-2 h-auto w-full xl:w-3/5 rounded-xl overflow-hidden border-2 border-gray-300 shadow-lg"
      >
        <div className="h-4/5">
          <div className="h-full">
            <ResponsivePie
              data={statistics.infectionTrancking}
              margin={{ top: 15, right: 15, bottom: 15, left: 15 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              colors={{ scheme: "pastel1" }}
              borderWidth={1}
              borderColor={{ theme: "grid.line.stroke" }}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333333"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: "color" }}
              enableArcLinkLabels={false}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
              defs={[
                {
                  id: "lines",
                  type: "patternLines",
                  background: "inherit",
                  color: "rgba(255, 255, 255, 0.3)",
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
                {
                  id: "dots",
                  type: "patternDots",
                  background: "inherit",
                  color: "rgba(255, 255, 255, 0.3)",
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
              ]}
              fill={[
                {
                  match: {
                    id: "infected",
                  },
                  id: "lines",
                },
                {
                  match: {
                    id: "unknow",
                  },
                  id: "dots",
                },
              ]}
              legends={[
                {
                  anchor: "top-left",
                  direction: "column",
                  justify: false,
                  translateX: 0,
                  translateY: 0,
                  itemWidth: 100,
                  itemHeight: 20,
                  itemsSpacing: 0,
                  symbolSize: 20,
                  itemDirection: "left-to-right",
                },
              ]}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center content-center rounded-tl-main border-t-2 border-gray-300 px-4 py-2">
          <div className="font-bold text-xl mb-2">Infection tracking</div>
          <div className="hidden md:block w-full">
            <p className="text-gray-700 text-base">
              Cases detected within the institute's community
            </p>
          </div>
          <div className="mt-0 sm:mt-2">
            <Button
              text="See Medical records"
              method={() => {
                history.push("/Dashboard-Medical-records");
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
