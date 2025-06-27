import React from "react";

const Button = ({ label, textColor, bgColor, border, textDecor, padding }) => {
  return (
    <div>
      <button
        style={{
          color: `${textColor}`,
          backgroundColor: `${bgColor}`,
          textDecorationColor: `1px solid ${textDecor}`,
          borderRadius: `${border}`,
          padding: `${padding}`,
        }}
        className="text-[14px] font-bold"
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
