import React from "react";
import { ReactComponent as ReactIcon } from "../svgs/react.svg";
import { ReactComponent as BoldNote } from "../svgs/bold-note.svg";
import { ReactComponent as CodeIcon } from "../svgs/code.svg";
import { ReactComponent as DownStep } from "../svgs/down-step-note.svg";
import { ReactComponent as MusicIcon } from "../svgs/music-reader.svg";
import { ReactComponent as PlayStation } from "../svgs/playstation.svg";
import { ReactComponent as Controller } from "../svgs/controller.svg";

const BackgroundIcons = () => {
  return (
    <div className="background-icons">
      <ReactIcon className="background-icons__icon icon--1" />
      <Controller className="background-icons__icon icon--0" />
      <BoldNote className="background-icons__icon icon--2" />
      <DownStep className="background-icons__icon icon--3" />
      <CodeIcon className="background-icons__icon icon--4" />
      <MusicIcon className="background-icons__icon icon--5" />
      <PlayStation className="background-icons__icon icon--6" />
      <DownStep className="background-icons__icon icon--7" />
      <Controller className="background-icons__icon icon--8" />
    </div>
  );
};

export default BackgroundIcons;
