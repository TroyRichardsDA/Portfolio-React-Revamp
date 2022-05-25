import {
  SiTailwindcss,
  SiStyledcomponents,
  SiTypescript,
  SiSass,
} from "react-icons/si";
import { DiGulp } from "react-icons/di";
import { Container, Header, DevSkill, Wrapper } from "./SkillsStyles";
import Marquee from "react-easy-marquee";

export default function Skills() {
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

        <Marquee duration={11000} pauseOnHover={true}>
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
        </Marquee>
        <Marquee pauseOnHover={true} duration={12000}>
          <DevSkill>
            <SiTailwindcss /> Tailwind <SiTailwindcss />{" "}
          </DevSkill>
          <DevSkill>
            <SiStyledcomponents /> Styled Components <SiStyledcomponents />{" "}
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
        </Marquee>
      </Wrapper>
    </Container>
  );
}
