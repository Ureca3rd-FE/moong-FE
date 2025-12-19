import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import Button from "../components/common/Button";
import snowman_v from "../assets/images/snowman_face_v.svg";
import branch from "../assets/images/branch.svg";
import carrot from "../assets/images/carrot.svg";
import rock from "../assets/images/rock.svg";
import scarf from "../assets/images/scarf.svg";
import snowball from "../assets/images/snowball.svg";
import '../style/pages/Onboard/onboard.scss';
const Onboard = () => {
    const navigate = useNavigate();
    const materials = [
        { src: snowball, alt: "눈" },
        { src: rock, alt: "돌" },
        { src: branch, alt: "나뭇가지" },
        { src: scarf, alt: "당근" },
        { src: carrot, alt: "목도리" },
    ];
    return (_jsx("div", { className: "onboard", children: _jsxs("div", { className: "onboard__container", children: [_jsx("div", { className: "onboard__snowman", children: _jsx("img", { src: snowman_v, alt: "\uB208\uC0AC\uB78C", className: "onboard__image" }) }), _jsx("div", { className: "onboard__materials-wrapper", children: _jsxs(motion.div, { className: "onboard__materials", animate: { x: [0, -565] }, transition: {
                            duration: 20,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "loop"
                        }, children: [materials.map((material, index) => (_jsx("img", { src: material.src, alt: material.alt, className: "onboard__material" }, `set1-${index}`))), materials.map((material, index) => (_jsx("img", { src: material.src, alt: material.alt, className: "onboard__material" }, `set2-${index}`)))] }) }), _jsx("div", { className: "onboard__button", children: _jsx(Button, { type: "large", onClick: () => navigate('/login'), children: "\uB85C\uADF8\uC778" }) }), _jsxs("div", { className: "onboard__signup", children: [_jsx("span", { className: "onboard__text", children: "\uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uB77C\uBA74? " }), _jsx("span", { className: "onboard__link", onClick: () => navigate('/signup'), children: "\uD68C\uC6D0\uAC00\uC785\uD558\uAE30" })] })] }) }));
};
export default Onboard;
