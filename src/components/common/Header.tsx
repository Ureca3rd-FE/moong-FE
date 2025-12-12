import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import '../../style/components/header/header.scss';

import Back from '../../assets/icons/Back.svg?react';
import Close from '../../assets/icons/Close.svg?react';

interface HeaderProps{
  back?: boolean | ReactNode;
  close?: boolean | ReactNode;
  text?: string;
}

export const Header = ({back, text, close}: HeaderProps) =>{
  const navigate = useNavigate();

  return(
    <header className="header">
      <div className="header__back">
        {back &&
          <button type="button" onClick={() => navigate(-1)} aria-label="뒤로가기">
            <Back/>
          </button>}
      </div>

      <div className="header__center">
        <span>{text}</span>
      </div>

      <div className="header__close">
        {close &&
          <button type="button" onClick={() => navigate('/')} aria-label="닫기">
            <Close/>
          </button>}
      </div>
    </header>
  )
};

export default Header;