import { Line } from "react-chartjs-2";
import { withTheme } from "styled-components";

const data = {
  labels: ["January", "Febuary", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Real Stock Data",
      backgroundColor: "white",
      borderColor: "#ff5c5c",
      data: [1321, 1324, 1312, 1350, 1323, 1365, 1357],
      fill: false,
    },
    {
      label: "AI Predict Data",
      backgroundColor: "white",
      borderColor: "#FFC208",
      data: [1317, 1320, 1315, 1356, 1327, 1360, 1360],
      fill: false,
    },
  ],
};

export default function Chart() {
  return (
    <div>
      <Line width={800} height={500} data={data} />
    </div>
  );
}
