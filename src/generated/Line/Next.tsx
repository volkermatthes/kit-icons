import * as React from "react";
import { SVGProps } from "react";
const SvgNext = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 20a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v14a1 1 0 0 1-1 1Zm-12.998-.08a2 2 0 0 1-1.565-.753c-.302-.379-.375-.834-.406-1.172A15.428 15.428 0 0 1 4 16.715v-9.43c0-.495 0-.933.031-1.28.031-.338.104-.793.406-1.172a2 2 0 0 1 1.565-.752c.485 0 .886.228 1.17.415.29.192.631.466 1.017.775l5.902 4.722c.243.193.473.377.65.547.191.182.406.424.531.758a2 2 0 0 1 0 1.404c-.125.334-.34.576-.53.758a10.317 10.317 0 0 1-.679.57L8.189 18.73c-.386.31-.728.583-1.018.775-.283.187-.684.415-1.169.415Zm.066-2.085c.205-.135.475-.35.907-.695l5.839-4.671c.28-.225.44-.354.546-.455l.014-.014-.014-.014a9.436 9.436 0 0 0-.546-.455l-5.84-4.67c-.43-.346-.701-.56-.906-.696a2.202 2.202 0 0 0-.04-.026l-.005.047C6.001 6.431 6 6.776 6 7.33v9.342c0 .553.001.898.023 1.143l.005.047a2.15 2.15 0 0 0 .04-.026Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgNext;