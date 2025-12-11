import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import '../../style/components/header/header.scss';

import backIcon from '../../assets/icons/Back.svg'
import closeIcon from '../../assets/icons/Close.svg'

interface HeaderProps{
  back?: boolean | ReactNode;
  close?: boolean | ReactNode;
  center?: string;
}

export const Header = ({back, center, close}: HeaderProps) =>{
  const navigate = useNavigate();

  // 뒤로가기 
  const Back = () => {
    if(back === true){
      return(
        <button type="button" onClick={() => navigate(-1)} aria-label="뒤로가기">
          <img src={backIcon} alt="뒤로가기" />
        </button>
      );
    }
    return back;
  };

  // 닫기
  const Close = () => {
    if(close === true){
      return(
        <button type="button" onClick={() => navigate('/')} aria-label="닫기">
          <img src={closeIcon} alt="닫기" />
        </button>
      );
    }
    return close;
  }

  // 중앙 텍스트
  const Center = () => {
    if(center){
      return <span>{center}</span>
    }
    return center;
  }


  return (
    <header className="header">
      <div className="header__back">{Back()}</div>

      <div className="header__center">{Center()}</div>

      <div className="header__close">{Close()}</div>
        
    </header>
  );
};

export default Header;