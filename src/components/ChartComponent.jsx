import Chart from "react-apexcharts";

const ChartComponent = ({ details, type }) => {
  return (
    <div>
      <Chart
        options={details.options}
        series={details.series}
        type={type}
        width={300}
        height={200}
      />
    </div>
  );
};

export default ChartComponent;
