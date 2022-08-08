import React from "react";

const Skill = ({ skill }) => {
  return (
    <div className="skill">
      <p className="skill__name">{skill.name}</p>
      <figure className="skill__img--container">
        <img className="skill__img" src={skill.img} alt={skill.name} />
      </figure>
    </div>
  );
};

export default Skill;
