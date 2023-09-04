"use client";
import React from "react";
import { CustomButtonProps } from "@/types";

const Button = ({
  title,
  containerStyles,
  handleClick,
  isDisabled,
  btnType
}: CustomButtonProps) => (

    <button
      disabled={isDisabled}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
    </button>

)

export default Button;
