import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import snowman_v from "../assets/images/snowman_face_v.svg";
import branch from "../assets/images/branch.svg";
import carrot from "../assets/images/carrot.svg";
import rock from "../assets/images/rock.svg";
import scarf from "../assets/images/scarf.svg";
import snowball from "../assets/images/snowball.svg";

const Onboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <img src = {snowman_v} alt = "온보딩"/>
      <Button type = "large" onClick={() => navigate('/Login')}>로그인</Button>
    </div>
  )
};

export default Onboard;
