import type { ReactNode } from "react";
import '../../style/components/header/header.scss';
interface HeaderProps {
    back?: boolean | ReactNode;
    close?: boolean | ReactNode;
    text?: string;
}
export declare const Header: ({ back, text, close }: HeaderProps) => import("react/jsx-runtime").JSX.Element;
export default Header;
