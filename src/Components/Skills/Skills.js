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
  Disclaimer,
  DText,
} from "./SkillsStyles";
import Marquee from "react-easy-marquee";

export default function Skills() {
  const icons = skills.map((skill, id) => {
    if (skill.icon && skill.isMain) {
      return (
        <MainSkills key={id}>
          <h2> {skill.name} </h2>
          <Icon>{skill.icon}</Icon>
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

        <StaticList>
          <Summary>Static List</Summary>
          <Disclaimer>Disclaimer: </Disclaimer>
          <DText>
            Most of the Skills listed below are not my primary skills.They
            mostly represent exposure and/or mild to slight usage. My primary
            skills are the ones listed above..... sorry if it got your hopes
            up... I'm willing to learn if you're willing to teach though.
          </DText>
          <SummarySkills>{list}</SummarySkills>
        </StaticList>

        <Marquee duration={11000} pauseOnHover={true}>
          {marquee1}
        </Marquee>
        <Marquee useOnHover={true} duration={30000}>
          {marquee2}
        </Marquee>
      </Wrapper>
    </Container>
  );
}
