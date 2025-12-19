declare const Button: ({ type, children, onClick, }: {
    type?: "small" | "blue" | "large" | "disabled";
    children: React.ReactNode;
    onClick?: () => void;
}) => import("react/jsx-runtime").JSX.Element;
export default Button;
