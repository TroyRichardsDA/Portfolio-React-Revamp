import {
  SiTailwindcss,
  SiStyledcomponents,
  SiTypescript,
  SiSass,
} from "react-icons/si";
import { DiGulp } from "react-icons/di";
import {
  Container,
  Header,
  DevSkills,
  DevSkill,
  Wrapper,
} from "./SkillsStyles";

export default function Skills() {
  return (
    <Container id="skills">
      <Wrapper>
        <Header className="skills-header">
          <i class="header-icon fas fa-tasks"></i>Skills
        </Header>
        <DevSkills>
          <DevSkill>
            <i className="fab fa-html5"></i> HTML{" "}
            <i className="fab fa-html5"></i>
          </DevSkill>
          <DevSkill>
            <i className="fab fa-css3"></i> CSS <i className="fab fa-css3"></i>
          </DevSkill>
          <DevSkill>
            <i className="fab fa-js"></i> JavaScript{" "}
            <i className="fab fa-js"></i>
          </DevSkill>
          <DevSkill>
            <i className="fab fa-react"></i> React{" "}
            <i className="fab fa-react"></i>{" "}
          </DevSkill>
          <DevSkill>
            <SiTailwindcss /> Tailwind <SiTailwindcss />{" "}
          </DevSkill>
          <DevSkill>
            <SiStyledcomponents /> Styled Components <SiStyledcomponents />{" "}
          </DevSkill>
          <DevSkill>
            <SiTypescript /> TypeScript <SiTypescript />{" "}
          </DevSkill>
          <DevSkill>
            <SiSass /> Sass w/ Gulp <DiGulp />{" "}
          </DevSkill>
          <DevSkill>
            <i className="fab fa-git-alt"></i> Git{" "}
            <i className="fab fa-git-alt"></i>
          </DevSkill>
          <DevSkill>
            <i className="fab fa-chrome"></i> Chrome DevTools{" "}
            <i className="fas fa-tools"></i>
          </DevSkill>
        </DevSkills>
      </Wrapper>
    </Container>
  );
}
