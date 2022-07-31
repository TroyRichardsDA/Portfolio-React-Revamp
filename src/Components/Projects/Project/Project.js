import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Project(props) {
  const { title, liveSite, sourceCode, desc, devWith, img, x, y } = props;

  return (
    <motion.div
      initial={{ x, y, opacity: 0 }}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
    >
      <div className="project__img--container">
        <img className="project__img" src={img} alt={title} />

        <div className="project__img--cover">
          <div className="project__text">
            <h3 className="project__text--title">{title}</h3>
            <p className="project__text--tech">{devWith}</p>
            <div className="project__desc">
              <p>{desc}</p>
              <div className="project__links">
                <p className="project__link" href={liveSite} target="_blank">
                  <AiOutlineLink />
                </p>
                <p className="project__link" href={sourceCode} target="_blank">
                  <AiOutlineGithub />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
