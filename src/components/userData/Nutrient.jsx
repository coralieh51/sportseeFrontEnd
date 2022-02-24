function Nutrient({ name, value, icon, unit }) {
  function parsefloat(value) {
    const splitValue = value.split('');
    return splitValue.length > 3 ? splitValue.slice(0,1).concat(",").concat(splitValue.slice(1,4)).join("") : splitValue;
  }
  return (
    <div className="nutrient-card">
      <figure>
        <img src={icon} alt={name} />
        <figcaption>
          {parsefloat(value)} {unit}
          <br/><span>{name}</span>
        </figcaption>
      </figure>
    </div>
  );
}

export default Nutrient;
