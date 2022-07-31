import React from "react";

const Skill = ({ skill }) => {
  return (
    <div className="skill">
      <p className="skill__name">{skill.name}</p>
      <p className="skill__icon">{skill.icon}</p>
    </div>
  );
};

export default Skill;
