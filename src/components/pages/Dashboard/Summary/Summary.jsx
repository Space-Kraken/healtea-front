import React from "react";
import { ResponsivePie } from "@nivo/pie";

export default function Summary() {
  const data = [
    {
      id: "indected",
      label: "infected",
      value: 80,
      color: "hsl(272, 70%, 50%)",
    },
    {
      id: "healthy",
      label: "healthy",
      value: 10,
      color: "hsl(229, 70%, 50%)",
    },
  ];

  return (
    <div className="flex justify-center h-full w-full">
      <div className="h-96 w-auto rounded overflow-hidden shadow-main">
        <div className="h-4/6">
          <ResponsivePie
            data={data}
            margin={{ top: 25, right: 10, bottom: 25, left: 10 }}
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
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            fill={[
              {
                match: {
                  id: "indected",
                },
                id: "lines",
              },
              {
                match: {
                  id: "healthy",
                },
                id: "dots",
              },
            ]}
          />
        </div>
        <div className="border-t-2 border-gray-300 px-8 py-6">
          <div className="font-bold text-xl mb-2">Infection tracking</div>
          <p className="text-gray-700 text-base">
            Cases detected within the institute's community
          </p>
        </div>
      </div>
    </div>
  );
}
