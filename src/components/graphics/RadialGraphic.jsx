import propTypes from 'prop-types';
import { RadialBarChart, RadialBar, ResponsiveContainer, Legend, PolarAngleAxis } from 'recharts';

/**
 * Renders user progress into a radial chart
 * @Component
 * @param {Number} score user daily objective progress
 */
function RadialGraphic({ score }) {
  const data = [
    {value : score, fill : '#E60000'}
  ];

 /**
 * Renders custom radial chart legend
 * @param {Array} payload
 * @returns {HTMLElement} Custom legend
 */
  const CustomLegend = ({payload}) => {
    return(
    <div className='radialchart-legend'><span>{`${payload[0].payload.value*100}%`}</span><p>de votre objectif</p></div>
    )
  }

  return (
    <div className="graphicWrapper radialgraphic">
      <h1 className="graphicTitle">Score</h1>
      <ResponsiveContainer width={258}>
      <RadialBarChart cx="50%" cy="50%" innerRadius={80} outerRadius={120} barSize={10} data={data} startAngle={90} endAngle={450}>
				<RadialBar minAngle={15} dataKey="value" emptykey="empty" cornerRadius={5}/>
        <PolarAngleAxis domain={[0, 1]}  type="number" tick={false} />
        <Legend content={<CustomLegend/>} width={120} height={140} layout="vertical" verticalAlign="middle"/>
			</RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
export default RadialGraphic;

RadialGraphic.propTypes = {
  score : propTypes.number
}; 