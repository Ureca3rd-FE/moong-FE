import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header";
import { useState } from "react";
import WritingGold from '../assets/images/writing_gold.svg?react';
import WritingGreen from '../assets/images/writing_green.svg?react';
import WritingNavy from '../assets/images/writing_navy.svg?react';
import WritingRed from '../assets/images/writing_red.svg?react';
import WritingSilver from '../assets/images/writing_silver.svg?react';


import RedOpen from '../assets/images/letter_red_open.svg';
import RedClose from '../assets/images/letter_red_close.svg';
import GoldOpen from '../assets/images/letter_gold_open.svg';
import GoldClose from '../assets/images/letter_gold_close.svg';
import GreenOpen from'../assets/images/letter_green_open.svg';
import GreenClose from '../assets/images/letter_green_close.svg';
import SilverOpen from '../assets/images/letter_silver_open.svg';
import SilverClose from '../assets/images/letter_silver_close.svg';
import NavyOpen from '../assets/images/letter_navy_open.svg';
import NavyClose from '../assets/images/letter_navy_close.svg';
import  Button from "../components/common/Button";

import '../style/selectTheme.scss'

interface Theme{
    id: number;
    component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    iconOpen: string;
    iconClose: string;
}

const THEMES: Theme[] = [
    {id: 1, component: WritingRed, iconOpen: RedOpen, iconClose: RedClose},
    {id: 2, component: WritingGold, iconOpen: GoldOpen, iconClose: GoldClose},
    {id: 3, component: WritingGreen, iconOpen: GreenOpen, iconClose: GreenClose},
    {id: 4, component: WritingSilver, iconOpen: SilverOpen, iconClose: SilverClose},
    {id: 5, component: WritingNavy, iconOpen: NavyOpen, iconClose: NavyClose},
];

const SelectTheme = () => {
    const navigate = useNavigate();
    const [selectedId, setSelectedId] = useState<number>(1);
    const currentTheme = THEMES.find(t => t.id === selectedId) || THEMES[0];
    const CurrentImage = currentTheme.component;

    return (
        <div className="selectTheme">
            <Header
            text="테마 선택"
            back={true}
            />

            <div className="selectTheme__content">

                <div className="selectTheme__grid">
                    {THEMES.map((theme) => {
                        const isSelected = theme.id === selectedId;

                        return(
                            <button
                            key={theme.id}
                            type="button"
                            className={`selectTheme__item ${isSelected ? 'selectTheme__item--selected' : ''}`}
                            onClick={() => setSelectedId(theme.id)}
                            >
                                <img
                                    src={isSelected ? theme.iconOpen : theme.iconClose}
                                    className="theme-icon"
                                />
                            </button>
                        );
                    })}
                </div>

                <div className="selectTheme__preview">
                    <div className="selectLetter">
                        <CurrentImage width="100%" height="100%" />
                    </div>
                </div>
                <div className="selectTheme__button">
                    <Button type="large" onClick={() => navigate('/inputmessage')}>전송하기</Button>
                </div>
            </div>
        </div>
    );
};

export default SelectTheme;