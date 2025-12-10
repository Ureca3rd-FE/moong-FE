import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";

const Login = () => {
    const navigate = useNavigate();
  
    return (
      <Button type = "large">로그인</Button>
    )
  };
  
  export default Login;
  