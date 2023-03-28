import { useState, useEffect } from "react";
import "./app.sass";
import {
  gamepad,
  user,
  home,
  box,
  arrGamepad,
  arrBox,
  arrUser,
  arrHome,
} from "./icons/Paths";

import {
  useSpring,
  motion,
  motionValue,
  useMotionValue,
  useTransform,
  useTime,
  useMotionValueEvent,
  useAnimate,
  animate,
} from "framer-motion";

import { interpolate, splitPathString, interpolateAll } from "flubber";
// const paths = [arrGamepad, arrBox, arrHome, arrUser];
const paths = [gamepad, box, home, user];

const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
const randomLine = () => {
  let p1 = `${rand(0, 100)} ${rand(0, 150)}`;
  let p2 = `${rand(100, 200)} ${rand(0, 150)}`;
  let p3 = `${rand(200, 300)} ${rand(0, 150)}`;
  let p4 = `${rand(200, 300)} ${rand(150, 300)}`;
  let p5 = `${rand(100, 200)} ${rand(150, 300)}`;
  let p6 = `${rand(0, 100)} ${rand(150, 300)}`;

  return `M ${p1} L ${p2} L ${p3} L ${p4} L ${p5} L ${p6} L ${p1} `;
};

function App() {
  const [paths, setPaths] = useState([randomLine(), randomLine()]);
  const progress = useMotionValue(0);
  const path = useTransform(progress, [0, 1], paths, {
    mixer: (a, b) => {
      return interpolate(a, b, { maxSegmentLength: 10 });
    },
  });

  useEffect(() => {
    progress.set(0);
  }, [paths]);

  const advance = () => {
    animate(progress, 1, {
      duration: 1.5,
      onComplete: () => {
        setPaths((prev) => [prev[1], randomLine()]);
      },
    });
  };

  return (
    <div className="root">
      <motion.div className="box" onClick={advance}>
        <svg width="300" height="300" fill="white">
          <motion.path
            d={path}
            stroke="#fff"
            fill="none"
            strokeLinejoin={"round"}
          />
        </svg>
      </motion.div>
    </div>
  );
}

export default App;
/**
  // const [paths, setPaths] = useState([randomLine(), randomLine()]);
  // const [pathIndex, setPathIndex] = useState(1);
  // const progress = useMotionValue(pathIndex-1);
  // const path = useTransform(progress, [0, 1], paths);

  // useEffect(() => {
  //   progress.set(0);
  //   advance()
  // }, [paths]);

  // const advance = () => {
  //   animate(progress, pathIndex, {
  //     duration: 0.8,
  //     onComplete: () => {
  //       setPaths((prev) => [prev[1], randomLine()]);
  //       setPathIndex(1);
  //       // advance()
  //     },
  //   });
  // };
 */
