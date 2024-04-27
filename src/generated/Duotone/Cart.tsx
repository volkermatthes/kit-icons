import * as React from "react";
import { SVGProps } from "react";
const SvgCart = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity={0.15}
      d="M7.477 8.377c-.25-1.202.63-2.34 1.857-2.364 1.303-.024 2.91-.023 4.166.077 1.404.112 3.376.375 4.87.59a1.975 1.975 0 0 1 1.634 2.417l-1.033 4.364A2 2 0 0 1 17.026 15H10.482a2 2 0 0 1-1.957-1.592L7.477 8.377Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 4a1 1 0 0 1 1-1h2c.432 0 1.195.008 1.847.621.376.353.647.843.85 1.469.197-.046.404-.072.618-.076 1.31-.025 2.958-.025 4.265.079 1.438.115 3.438.382 4.932.597 1.742.25 2.866 1.943 2.465 3.638l-1.032 4.363A3 3 0 0 1 17.025 16h-6.542a3 3 0 0 1-2.937-2.388L6.498 8.581a2.975 2.975 0 0 1 .448-2.282c-.18-.861-.383-1.14-.468-1.22l-.002-.002C6.437 5.04 6.394 5 6 5H4a1 1 0 0 1-1-1Zm10.42 3.087c-1.203-.096-2.77-.098-4.067-.074a.948.948 0 0 0-.897 1.16l1.048 5.031a1 1 0 0 0 .979.796h6.543a1 1 0 0 0 .972-.77l1.033-4.363a.975.975 0 0 0-.804-1.197c-1.492-.215-3.437-.474-4.807-.583Z"
      fill={props.color || "#000"}
    />
    <path
      d="M11 17a2 2 0 1 0 .001 4.001A2 2 0 0 0 11 17ZM17 17a2 2 0 1 0 .001 4.001A2 2 0 0 0 17 17Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgCart;