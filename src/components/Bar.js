import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const data = [
  {
    country: "Polska",
    react: 133,
    reactColor: "hsl(269, 70%, 50%)",
    node: 41,
    nodeColor: "hsl(146, 70%, 50%)",
    sandwich: 140,
    sandwichColor: "hsl(112, 70%, 50%)",
    kebab: 92,
    kebabColor: "hsl(190, 70%, 50%)",
    fries: 177,
    friesColor: "hsl(107, 70%, 50%)",
    donut: 88,
    donutColor: "hsl(97, 70%, 50%)"
  },
  {
    country: "Hiszpania",
    react: 130,
    reactColor: "hsl(64, 70%, 50%)",
    node: 178,
    nodeColor: "hsl(40, 70%, 50%)",
    sandwich: 42,
    sandwichColor: "hsl(99, 70%, 50%)",
    kebab: 50,
    kebabColor: "hsl(275, 70%, 50%)",
    fries: 145,
    friesColor: "hsl(153, 70%, 50%)",
    donut: 152,
    donutColor: "hsl(227, 70%, 50%)"
  },
  {
    country: "Kazachstan",
    react: 88,
    reactColor: "hsl(155, 70%, 50%)",
    node: 121,
    nodeColor: "hsl(238, 70%, 50%)",
    sandwich: 69,
    sandwichColor: "hsl(127, 70%, 50%)",
    kebab: 42,
    kebabColor: "hsl(7, 70%, 50%)",
    fries: 7,
    friesColor: "hsl(195, 70%, 50%)",
    donut: 84,
    donutColor: "hsl(65, 70%, 50%)"
  },
  {
    country: "USA",
    react: 108,
    reactColor: "hsl(88, 70%, 50%)",
    node: 129,
    nodeColor: "hsl(348, 70%, 50%)",
    sandwich: 61,
    sandwichColor: "hsl(146, 70%, 50%)",
    kebab: 178,
    kebabColor: "hsl(334, 70%, 50%)",
    fries: 157,
    friesColor: "hsl(342, 70%, 50%)",
    donut: 80,
    donutColor: "hsl(18, 70%, 50%)"
  }
];

const Bar = () => {
  return (
    <div style={{ height: "50vh" }}>
      <ResponsiveBar
        data={data}
        keys={["react", "node", "sandwich", "kebab", "fries", "donut"]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: "red_grey" }}
        groupMode="grouped"
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#34fe22",
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        fill={[
          {
            match: {
              id: "fries"
            },
            id: "dots"
          },
          {
            match: {
              id: "sandwich"
            },
            id: "lines"
          }
        ]}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "country",
          legendPosition: "middle",
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "food",
          legendPosition: "middle",
          legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
};

export default Bar;
