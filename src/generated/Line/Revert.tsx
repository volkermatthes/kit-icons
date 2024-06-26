import * as React from "react";
import { SVGProps } from "react";
const SvgRevert = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M13.686 4.493a1.41 1.41 0 0 0-1.133-.525c-.394.01-.685.209-.817.303-.142.103-.302.242-.453.372l-.024.022a.784.784 0 0 0-.025.022l-6.54 6.063a2.156 2.156 0 0 1-.004.004c-.085.073-.19.164-.276.253a1.428 1.428 0 0 0-.332.518 1.42 1.42 0 0 0 0 .95c.087.247.233.416.332.518a4.482 4.482 0 0 0 .283.26l6.541 5.99a.878.878 0 0 0 .02.018l.026.022c.15.13.31.27.452.371.132.095.423.294.817.304a1.41 1.41 0 0 0 1.133-.525c.245-.303.284-.65.299-.812.015-.175.015-.387.015-.588v-2.387c.855.15 1.755.405 2.404.72a8.394 8.394 0 0 1 2.823 2.228A1 1 0 0 0 21 17.96v-.51a9.095 9.095 0 0 0-2.274-6.018C17.537 10.088 15.706 9.15 14 8.698V5.893c0-.201 0-.413-.015-.588-.015-.162-.054-.509-.299-.812ZM12 6.704 6.29 12l5.71 5.23v-2.715a1 1 0 0 1 1.068-.998c1.28.088 2.991.46 4.208 1.05.497.241.972.521 1.422.836a7.066 7.066 0 0 0-1.471-2.645c-1.006-1.138-2.802-1.99-4.401-2.272A1 1 0 0 1 12 9.5V6.704Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgRevert;
