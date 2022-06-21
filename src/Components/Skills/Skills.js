import skills from "./SkillsData";
import {
  Container,
  Header,
  MarqueeSkill,
  Wrapper,
  IconsList,
  IconsListWrapper,
  Icon,
  StaticList,
  Summary,
  SummarySkills,
  Skill,
  MainSkills,
} from "./SkillsStyles";
import Marquee from "react-easy-marquee";

export default function Skills() {
  const icons = skills.map((skill, id) => {
    if (skill.icon && skill.isMain) {
      return (
        <MainSkills key={id}>
          <Icon>{skill.icon}</Icon>
          <span className="skill-name"> {skill.name} </span>
        </MainSkills>
      );
    } else return null;
  });

  const marquee1 = skills.map(({ name, mark, icon }, id) => {
    if (mark === 1)
      return (
        <MarqueeSkill key={id}>
          {" "}
          {icon} {name} {icon}{" "}
        </MarqueeSkill>
      );
    else return null;
  });

  const marquee2 = skills.map(({ name, mark, icon }, id) => {
    if (mark === 2)
      return (
        <MarqueeSkill key={id}>
          {" "}
          {icon} {name} {icon}{" "}
        </MarqueeSkill>
      );
    else return null;
  });

  const list = skills.map(({ icon, name, isMain }, id) => {
    return (
      <Skill key={id}>
        <span className={isMain && "main"}>
          {icon} {name}
        </span>
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
        <Header className="section__title">
          Wild <span className="important-text">S</span>kills List Appeared!
        </Header>

        <IconsListWrapper>
          <IconsList>{icons}</IconsList>
        </IconsListWrapper>

        <StaticList>
          <Summary>Static List</Summary>
          <SummarySkills>{list}</SummarySkills>
        </StaticList>

        <Marquee duration={11000} pauseOnHover={true}>
          {marquee1}
        </Marquee>
        <Marquee pauseOnHover={true} duration={30000}>
          {marquee2}
        </Marquee>
      </Wrapper>
    </Container>
  );
}
