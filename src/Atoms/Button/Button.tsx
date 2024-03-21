import React from "react";
import "./Button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, className = "", ...props }) => {
  return (
    <button className={`button ${className}`} {...props}>
      {text && <span className="text">{text}</span>}
    </button>
  );
};

export default Button;
