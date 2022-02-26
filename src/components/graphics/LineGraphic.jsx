import propTypes from "prop-types";
import { LineChart, Rectangle, XAxis, Line, Tooltip, ResponsiveContainer } from "recharts";

/**
 * Renders average session duration line chart by day in a week
 * @Component
 * @param {array} session 
 */
function LineGraphic({ session }) {

  const CustomToolTip = ({payload, active}) => {
    if(active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value} min` }</p>
        </div>
      );
    } return null;
  }

  /**
   * Renders custom filling rectangle on the line chart while mouse over
   * @Component
   * @param {Array} props Use of points and width props to calculate posistion of rectangle edges
   */
  const CustomCursor = (props) => {
    const {points, width} = props;
    const {x} = points[0];
    return (
      <Rectangle x={x} width={width+30} height={290} fill={"rgba(0,0,0,0.1)"}/>
    )
  }

  const days = ["L","M","M","J","V","S","D"]
  return (
    <div className="graphicWrapper linechart">
      <h1 className="graphicTitle">Durée moyenne des sessions</h1>
      <ResponsiveContainer width={258}>
        <LineChart data={session} fill="#E60000" margin={{ top: 100, right: 20, left: 10, bottom: 30 }}>
        <XAxis
          axisLine={false}
          dataKey="day"
          tickFormatter={(label, index) => days[index]}
          tickLine={false}
          tickMargin={25}
          tick={{ fill: "rgba(255,255,255,0.5)" }}
        />
        <Tooltip cursor={<CustomCursor/>} content={<CustomToolTip/>}/>
          <Line
            dot={false}
            activeDot={{ stroke : "rgba(255, 255, 255, 0.3)", strokeWidth: 10 }}
            type="natural"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.5)"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineGraphic;

LineGraphic.propTypes = {
  session : propTypes.array
} 