import React from "react";
import { Chart, Axis, Tooltip, Legend, LineAdvance } from "bizcharts";
import moment from "moment";
import chartData from "./testdata";
import { AxisLabelCfg } from "bizcharts/lib/plots/core/dependents";

export default class Doubleaxes extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  formatChartData = (chartData: any[]) => {
    const now = moment();
    const dateString = now.format("YYYY/MM/DD");
    return chartData.map((item) => {
      const xTime = moment(item.x);
      const timeString = xTime.format("HH:mm:ss");
      item.x = `${dateString} ${timeString}`;
      return item;
    });
  };

  render() {
    const firstLegend = "Yeni versiyon işlem kullanıcı sayısı";
    const secondLegend = "Eski versiyon işlem kullanıcı sayısı";

    const max = +moment().add(1, "day").startOf("day");

    const formatedChartData = this.formatChartData(chartData);
    const label: AxisLabelCfg | null | boolean = {
      offset: 15,
      autoHide: false,
      autoRotate: false,
      // formatter: (text: string, dim: Date) => {
      //   console.log(text, dim);
      //   if (+dim.id === max) {
      //     return "24:00";
      //   }
      //   return text;
      // },
      // title: {
      //   textAlign: "center",
      //   fill: "#fff",
      //   fontSize: 14,
      //   fontWeight: "bold",
      //   textBaseline: "top",
      // },
    };
    const cols = {
      x: {
        type: "time",
        mask: "HH:mm",
        max,
      },
      y: {
        tickCount: 4,
        nice: true,
        min: 0,
      },
    };

    return (
      <div>
        <div className="chart-legend">
          <ul>
            <li>
              <div className="rect first" />
              <span className="name puhui-family">{firstLegend}</span>
            </li>
            <li>
              <div className="rect second" />
              <span className="name puhui-family">{secondLegend}</span>
            </li>
          </ul>
        </div>
        <Chart height={320} data={formatedChartData} scale={cols} autoFit>
          <Axis name="x" label={label} grid={null} line={null} />
          <Axis name="y" label={label} grid={null} />
          <Legend /> {/** visible={false} */}
          <Tooltip shared /> {/** visible={false} */}
          <LineAdvance
            position="x*y"
            shape="smooth"
            area
            color={["versionName", ["#79D1ED", "#FFA66B", "rgba(0, 0, 0, 0)"]]}
          />
        </Chart>
      </div>
    );
  }
}
