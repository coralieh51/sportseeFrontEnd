import propTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

/**
 * Renders radar chart of user's progress in each kind of skills
 * @Component
 * @param {Object} performanceType
 * @param {Array} performanceValues
 */
function RadarGraphic({performanceType, performanceValues}) {

    const kindsArray = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"]
    return (
        <div className="graphicWrapper radargraphic">
            <ResponsiveContainer width={258}>
                <RadarChart cx="50%" cy="50%" outerRadius="55%" innerRadius="10%" data={performanceValues} axisLine={false}>
                    <PolarGrid/>
                    <PolarAngleAxis dataKey={performanceType.kind} tickLine={false} tickFormatter={(label, index) => kindsArray[index]} stroke="#FFF" tickSize={12} axisLine={false}/>
                    <Radar dataKey="value" stroke="#E60000" fill="#E60000" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
            
      </div>
    );
  }

  export default RadarGraphic;
  
  RadarGraphic.propTypes = {
    performanceType : propTypes.object,
    performanceValues : propTypes.array
} 