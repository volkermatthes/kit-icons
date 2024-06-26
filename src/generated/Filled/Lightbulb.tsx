import * as React from "react";
import { SVGProps } from "react";
const SvgLightbulb = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.905 16.303a8.059 8.059 0 1 1 10.19 0l-.4 1.115c-.093.26-.247.56-.471.82-.214.25-.59.57-1.13.622A1 1 0 0 1 14.01 18H13v-4a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2v4H9.99a1 1 0 0 1-1.084.86c-.54-.051-.916-.372-1.13-.621a2.657 2.657 0 0 1-.471-.821l-.4-1.115ZM10.386 20.077a1 1 0 0 0-.772 1.845l.003.002.004.001.014.006.047.02a10.49 10.49 0 0 0 .717.254c.416.13 1.038.295 1.601.295s1.185-.166 1.6-.296a10.474 10.474 0 0 0 .718-.254l.047-.019.014-.006.004-.001.003-.002a1 1 0 0 0-.772-1.845l-.006.003-.032.013a7.89 7.89 0 0 1-.573.203c-.383.12-.761.204-1.003.204-.242 0-.62-.084-1.003-.204a8.457 8.457 0 0 1-.573-.203l-.032-.013-.006-.003Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgLightbulb;
