export default function data() {
  return {
    columns: [
      { Header: "Active Power", width: "15%", accessor: "Active Power" },
      { Header: "Apparent Power", width: "15%", accessor: "Apparent Power" },
      { Header: "Demand", accessor: "Demand" },
      { Header: "Energy", accessor: "Energy" },
      { Header: "IAvg", accessor: "Iavg" },
      { Header: "PF", accessor: "PF" },
      { Header: "Reactive Power", width: "15%", accessor: "Reactive Power" },
      { Header: "VB", accessor: "VB" },
      { Header: "VR", accessor: "VR" },
      { Header: "VY", accessor: "VY" },
      { Header: "IB", accessor: "IB" },
      { Header: "IR", accessor: "IR" },
      { Header: "IY", accessor: "IY" },
      { Header: "TimeStamp", accessor: "ts" },
    ],
    rows: sessionStorage.getItem("data")
      ? JSON.parse(sessionStorage.getItem("data"))
      : ["No data Available"],
  };
}
