import { useNavigate } from "react-router-dom";
import { motion, useAnimationControls } from 'framer-motion';
import Button from "../components/common/Button";
import snowman_v from "../assets/images/snowman_face_v.svg";
import branch from "../assets/images/branch.svg";
import carrot from "../assets/images/carrot.svg";
import rock from "../assets/images/rock.svg";
import scarf from "../assets/images/scarf.svg";
import snowball from "../assets/images/snowball.svg";
import '../style/pages/Onboard/onboard.scss';
import { useEffect } from "react";

const Onboard = () => {
  const navigate = useNavigate();
  const controls = useAnimationControls();

  const materials = [
    {src : snowball, alt : "눈"},
    {src : rock, alt : "돌"},
    {src : branch, alt : "나뭇가지"},
    {src : scarf, alt : "당근"},
    {src : carrot, alt : "목도리"},
  ]

  // useEffect(() => {
  //   const startAnimation = async() => {
  //     while(true) {
  //       await controls.start({
  //         x : [0, -560],
  //         transition : {
  //           duration : 10,
  //           ease : "linear"
  //         }
  //       });
  //       controls.set({x : 0});
  //     }
  //   };
  //   startAnimation();
  // }, [controls])

  return (
    <div className="onboard">
      <div className="onboard__container">
        <div className="onboard__snowman">
          <img src={snowman_v} alt="눈사람" className="onboard__image" />
        </div>

        <div className="onboard__materials-wrapper">
        <motion.div 
            className="onboard__materials"
            animate={{ x: [0, -565] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }}>
            {materials.map((material, index) => (
              <img
                key={`set1-${index}`}
                src={material.src}
                alt={material.alt}
                className="onboard__material"
              />
            ))}
            {materials.map((material, index) => (
              <img
                key={`set2-${index}`}
                src={material.src}
                alt={material.alt}
                className="onboard__material"
              />
            ))}
          </motion.div>
        </div>

        <div className="onboard__button">
          <Button type="large" onClick={() => navigate('/Login')}>
            로그인
          </Button>
        </div>

        <div className="onboard__signup">
          <span className="onboard__text">아직 회원이 아니라면? </span>
          <span 
            className="onboard__link" 
            onClick={() => navigate('/Signup')}
          >
            회원가입하기
          </span>
        </div>
      </div>
    </div>
  );
};

export default Onboard;