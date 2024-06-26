import * as React from "react";
import { SVGProps } from "react";
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.825 16.065a1 1 0 0 1-1.39.26l-.017-.012-.043-.03a22.24 22.24 0 0 1-2.027-1.525c-.456-.392-.983-.92-1.382-1.334a41.343 41.343 0 0 1-.651-.691l-.04-.045-.011-.011a.995.995 0 0 1-.129-1.18.995.995 0 0 1 .131-.177l.009-.009.04-.044.147-.16c.126-.134.301-.321.504-.531.4-.415.926-.943 1.382-1.335.403-.346.931-.741 1.343-1.04a41.172 41.172 0 0 1 .684-.485l.043-.03.016-.01a1 1 0 0 1 1.132 1.649l-.013.008-.04.027a29.387 29.387 0 0 0-.648.46c-.404.293-.876.648-1.213.938-.086.074-.177.156-.27.242H18a1 1 0 1 1 0 2H8.381c.094.086.185.167.27.242.338.29.81.644 1.214.937a39.56 39.56 0 0 0 .649.46l.039.027.012.009a1 1 0 0 1 .26 1.39Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgArrowLeft;
