import * as React from "react";
import { SVGProps } from "react";
const SvgEyeOff = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity={0.15} fill={props.color || "#000"}>
      <path d="M7.658 6.282a11.491 11.491 0 0 0-2.29 1.911 14.66 14.66 0 0 0-1.612 2.07c-.27.418-.466.764-.58.992a1.667 1.667 0 0 0 0 1.49c.114.229.31.574.58.993.454.702.99 1.406 1.611 2.069C7.173 17.732 9.392 19 12 19c2.267 0 4.24-.958 5.903-2.473l-3.98-3.979a2 2 0 1 1-2.471-2.472L7.658 6.282ZM19.275 15.071c.357-.438.68-.886.969-1.333.27-.42.466-.764.58-.993a1.666 1.666 0 0 0 0-1.49c-.114-.229-.31-.574-.58-.993a14.662 14.662 0 0 0-1.611-2.069C16.827 6.268 14.608 5 12 5c-.847 0-1.652.134-2.416.38l9.691 9.691Z" />
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.707 3.293a1 1 0 0 0-1.414 1.414l2.076 2.077c-.251.231-.495.474-.731.725a15.66 15.66 0 0 0-1.722 2.21c-.285.442-.5.82-.634 1.088a2.667 2.667 0 0 0 0 2.386c.134.268.35.646.634 1.087.483.748 1.056 1.5 1.722 2.21C6.57 18.553 9.038 20 12 20c1.885 0 3.569-.586 5.043-1.543l2.25 2.25a1 1 0 0 0 1.414-1.414l-16-16Zm10.882 13.71-2.296-2.295a3 3 0 0 1-4.001-4.001L6.785 8.199c-.235.213-.464.44-.688.678a13.66 13.66 0 0 0-1.5 1.928c-.257.397-.433.71-.527.897a.667.667 0 0 0 0 .596c.094.188.27.5.526.897.424.657.925 1.313 1.501 1.928C7.775 16.913 9.747 18 12 18c1.29 0 2.486-.356 3.59-.996Z"
      fill={props.color || "#000"}
    />
    <path
      d="m13.816 9.612.572.572a3.017 3.017 0 0 0-.572-.572Z"
      fill={props.color || "#000"}
    />
    <path
      d="M19.404 13.195c-.253.391-.533.783-.84 1.165l1.422 1.422a15.93 15.93 0 0 0 1.098-1.502c.285-.441.5-.819.634-1.087a2.667 2.667 0 0 0 0-2.386c-.134-.268-.35-.646-.634-1.087a15.668 15.668 0 0 0-1.722-2.21C17.43 5.447 14.962 4 12 4c-1.14 0-2.208.215-3.2.596l1.594 1.594A6.825 6.825 0 0 1 12 6c2.253 0 4.225 1.088 5.903 2.877.576.615 1.077 1.271 1.5 1.928.257.397.433.71.527.897a.666.666 0 0 1 0 .596c-.094.188-.27.5-.526.897Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgEyeOff;