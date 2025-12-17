import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SnowmanLetter from "../assets/images/snowman_full_letter.svg";
import "../style/pages/Snowman/Snowman.scss";

const Snowman = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/message');
        },2000);
        return () => {
            clearTimeout(timer);
        };
    },[navigate]);

    return(
        <div className = "snowman">
            <img
            className = "snowman__image"
            src = {SnowmanLetter}
            alt = "눈사람생성"
            />
            <div className = "snowman__title">눈사람이 편지를 가져왔어요!</div>
        </div>
    );
};
export default Snowman;