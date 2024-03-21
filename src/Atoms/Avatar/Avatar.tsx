import React from "react";
import "./Avatar.css";

interface AvatarProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  iconBgColor?: string;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ icon, iconBgColor = "#fff", className = "", ...props }) => {
  return (
    <button className={`icon-button ${className}`} {...props}>
      <span className="icon" style={{ backgroundColor: iconBgColor }}>
        {icon}
      </span>
    </button>
  );
};

export default Avatar;
