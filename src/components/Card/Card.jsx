import { useState } from "react";
import data from "../../data";
import Person from "../Person/Person";
import "./Card.css";
const Card = () => {
  const [birthdays, setBirthdays] = useState(data);
  const renderBirthdays = () => {
    return birthdays.map((e) => <Person {...e} key={e.id} />);
  };

  const clearBirthdays = () => {
    setBirthdays([]);
  };

  return (
    <div className="birthdayCard">
      <h3>{birthdays.length} birthdays today</h3>
      {renderBirthdays()}
      <button className="btn" onClick={clearBirthdays}>
        Clear All
      </button>
    </div>
  );
};
export default Card;
