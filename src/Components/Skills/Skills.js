import skills from "./SkillsData";
import {
  Container,
  Header,
  DevSkill,
  Wrapper,
  IconsList,
  IconsListWrapper,
  Icon,
  StaticList,
  Summary,
  SummarySkills,
  Skill,
} from "./SkillsStyles";
import Marquee from "react-easy-marquee";

export default function Skills() {
  const icons = skills.map((skill, id) => {
    if (skill.icon) return <Icon key={id}>{skill.icon}</Icon>;
    else return null;
  });

  const marquee1 = skills.map(({ name, mark, icon }, id) => {
    if (mark === 1)
      return (
        <DevSkill key={id}>
          {" "}
          {icon} {name} {icon}{" "}
        </DevSkill>
      );
    else return null;
  });

  const marquee2 = skills.map(({ name, mark, icon }, id) => {
    if (mark === 2)
      return (
        <DevSkill key={id}>
          {" "}
          {icon} {name} {icon}{" "}
        </DevSkill>
      );
    else return null;
  });

  const list = skills.map(({ icon, name }, id) => {
    return (
      <Skill key={id}>
        {icon} {name}{" "}
      </Skill>
    );
  });

  return (
    <Container id="skills">
      <Wrapper
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <Header>
          <i className="header-icon fas fa-tasks"></i> Skills
        </Header>

        <IconsListWrapper>
          <IconsList>{icons}</IconsList>
        </IconsListWrapper>

        <Marquee duration={11000} pauseOnHover={true}>
          {marquee1}
        </Marquee>
        <Marquee pauseOnHover={true} duration={27000}>
          {marquee2}
        </Marquee>

        <StaticList>
          <Summary>Static List</Summary>
          <SummarySkills>{list}</SummarySkills>
        </StaticList>
      </Wrapper>
    </Container>
  );
}
