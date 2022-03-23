import {
  SiTailwindcss,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
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
            <i className="fab fa-git-alt"></i> Git{" "}
            <i className="fab fa-git-alt"></i>
          </DevSkill>
          <DevSkill>
            <i className="fab fa-chrome"></i> Chrome DevTools{" "}
            <i className="fas fa-tools"></i>
          </DevSkill>
          <DevSkill>
            <i className="fab fa-codepen"></i> Codepen{" "}
            <i className="fab fa-codepen"></i>
          </DevSkill>
          <DevSkill>
            <i className="fas fa-code-branch"></i> Github Pages{" "}
            <i className="fas fa-code-branch"></i>
          </DevSkill>
          <DevSkill>
            <i className="far fa-image"></i> Adobe Photoshop{" "}
            <i className="fas fa-image"></i>
          </DevSkill>
          <DevSkill>
            <i className="fa-brands fa-figma"></i> Figma{" "}
            <i className="fa-brands fa-figma"></i>
          </DevSkill>
        </DevSkills>
      </Wrapper>
    </Container>
  );
}
