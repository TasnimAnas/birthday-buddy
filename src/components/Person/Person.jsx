import "./Person.css";
const Person = ({ name, age, image }) => {
  return (
    <div className="Person">
      <div className="personImage">
        <img src={image} />
      </div>
      <div className="NameAndAge">
        <p className="PersonName">{name}</p>
        <p className="PersonYear">{age} years</p>
      </div>
    </div>
  );
};
export default Person;
