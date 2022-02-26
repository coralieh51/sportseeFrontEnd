import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts";
import propTypes from "prop-types";

/**
 * Renders the bar chart composed with weight and calories bars by day on X axis & by burned calories on Y axis
 * @Component
 * @param {Array} session daily count of user's burned calories and weight
 */
function BarGraphic({ session }) {

  const renderGreyLabels = (value) => {
    return <span style={{ color: "#9B9EAC" }}>{value}</span>;
  };

  /**
   * Renders Custom tooltip on mouse over bars
   * @param {Array} payload 
   * @param {Boolean} active Checks tooltip display
   * @returns {HTMLElement} Custom Tooltip
   */
  const CustomToolTip = ({active, payload}) => {
    if (active && payload && payload.length) {
        return (
    <div className="custom-tooltip">
      <p className="label"> {`${payload[0].value} kg`} </p>
      <p className="label"> {`${payload[1].value} kCal`} </p>
    </div>
  );
    } return null;

};
  return (
    <div className="graphicWrapper bargraphic">
    <h1 className="graphicTitle">Activité quotidienne</h1>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        barGap={8}
        barSize={7}
        width={500}
        height={300}
        data={session}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid stroke="#DEDEDE" strokeDasharray="3 3" vertical={false} />
        <XAxis
          tickMargin={16}
          axisLine={{stroke : "#DEDEDE", strokeWidth : 2}}
          fill="red"
          dataKey="day"
          tickLine={false}
          tick={{ fill: "#9B9EAC" }}
          tickFormatter={(label) => label.slice(8, 10)}
        />
        <YAxis
          axisLine={false}
          orientation="right"
          tickLine={false}
          tickMargin={44}
          tick={{ fill: "#9B9EAC" }}    />
        <Tooltip cursor={{fill : "rgba(196, 196, 196, 0.5)"}} content={<CustomToolTip/>}/>
        <Legend
        width="50%"
          wrapperStyle={{paddingBottom : "47px"}}
          align="right"
          verticalAlign="top"
          iconType="circle"
          iconSize="8"
          formatter={renderGreyLabels}
        />
        <Bar
          radius={[3, 3, 0, 0]}
          dataKey="kilogram"
          name="Poids (kg)"
          fill="#282d30"
        />
        <Bar
          radius={[3, 3, 0, 0]}
          dataKey="calories"
          name="Calories brûlées (kCal)"
          fill="#E60000"
        />
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
}

export default BarGraphic;


BarGraphic.propTypes = {
  session : propTypes.array
} 