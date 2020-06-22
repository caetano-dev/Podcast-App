import React from "react";
import {
  Legend,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { AppContext } from "../../Reactor/Context/AppContext";

const SlangChart = ({ height, width }) => {
  return (
    <AppContext.Consumer>
      {(context) => {
        return (
          <LineChart
            height={height}
            width={width}
            data={context.state.collectiveData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 5 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        );
      }}
    </AppContext.Consumer>
  );
};
export default SlangChart;
