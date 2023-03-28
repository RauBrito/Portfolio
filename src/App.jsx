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
  const [pause, setPause] = useState(false);
  const [paths, setPaths] = useState([randomLine(), randomLine()]);
  const progress = useMotionValue(0);
  const path = useTransform(progress, [0, 1], paths, {
    mixer: (a, b) => {
      return interpolate(a, b, { maxSegmentLength: 1 });
    },
  });
  useEffect(() => {
    progress.set(0);
    let a = animate(progress, 1, {
      duration: pause ? 0.5 : 1.7,
      onComplete: () => {
        !pause &&
          setPaths((prev) => {
            progress.set(0);
            return [prev[1], randomLine()];
          });
      },
    });
    return () => {
      a.stop();
    };
  }, [paths]);

  const [paths2, setPaths2] = useState([randomLine(), randomLine()]);
  const progress2 = useMotionValue(0);
  const path2 = useTransform(progress2, [0, 1], paths2, {
    mixer: (a, b) => {
      return interpolate(a, b, { maxSegmentLength: 5 });
    },
  });
  useEffect(() => {
    progress2.set(0);
    let a = animate(progress2, 1, {
      duration: pause ? 0.5 : 3.1,
      onComplete: () => {
        !pause &&
          setPaths2((prev) => {
            progress2.set(0);
            return [prev[1], randomLine()];
          });
      },
    });
    return () => {
      a.stop();
    };
  }, [paths2]);

  const [paths3, setPaths3] = useState([randomLine(), randomLine()]);
  const progress3 = useMotionValue(0);
  const path3 = useTransform(progress3, [0, 1], paths3, {
    mixer: (a, b) => {
      return interpolate(a, b, { maxSegmentLength: 5 });
    },
  });
  useEffect(() => {
    progress3.set(0);
    let a = animate(progress3, 1, {
      duration: pause ? 0.5 : 2.7,
      onComplete: () => {
        !pause &&
          setPaths3((prev) => {
            progress3.set(0);
            return [prev[1], randomLine()];
          });
      },
    });
    return () => {
      a.stop();
    };
  }, [paths3]);

  const advance = () => {
    // if (pause) {
    //   setPaths([path.current, randomLine()]);
    //   setPause(false);
    // } else {
    //   setPaths([path.current, box]);
    //   setPause(true);
    // }
  };

  const enter = () => {
    setPause(true);
    setPaths([path.current, box]);
    setPaths2([path2.current, box]);
    setPaths3([path2.current, box]);
  };
  const leave = () => {
    setPause(false);
    setPaths([path.current, randomLine()]);
    setPaths2([path2.current, randomLine()]);
    setPaths3([path2.current, randomLine()]);
  };

  return (
    <div className="root">
      <motion.div
        className="box"
        onClick={advance}
        onMouseEnter={enter}
        onMouseLeave={leave}
      >
        <svg width="300" height="300" fill="white">
          <motion.path
            d={path}
            stroke="#fff"
            fill="none"
            strokeLinejoin={"round"}
            strokeWidth={1}
          />
          <motion.path
            d={path2}
            stroke="#fff"
            fill="none"
            strokeLinejoin={"round"}
          />
          <motion.path
            d={path3}
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
