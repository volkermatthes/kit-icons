import * as React from "react";
import { SVGProps } from "react";
const SvgCommentFilled = (
  props: SVGProps<SVGSVGElement>
): React.ReactElement => (
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
      d="M4 13.254c0 1.517.921 2.839 2.221 3.06.892.151 1.793.268 2.702.35V20l3.433-2.9a.879.879 0 0 1 .639-.314 34.421 34.421 0 0 0 4.783-.472c1.3-.221 2.222-1.542 2.222-3.061V7.547c0-1.519-.921-2.84-2.221-3.06A34.47 34.47 0 0 0 12 4c-1.963 0-3.893.166-5.779.486C4.921 4.707 4 6.03 4 7.547v5.707Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.841 18H12c1.36 0 3.022-.091 4.475-.195C19.062 17.62 21 15.447 21 12.89V8.11c0-2.557-1.938-4.73-4.525-4.915C15.022 3.091 13.36 3 12 3c-1.36 0-3.022.091-4.475.195C4.938 3.38 3 5.553 3 8.11v4.78c0 2.354 1.643 4.383 3.923 4.834V20a1 1 0 0 0 1.645.764L11.842 18ZM12 5c-1.287 0-2.893.087-4.332.19C6.163 5.297 5 6.566 5 8.11v4.78c0 1.544 1.163 2.813 2.668 2.92.408.03.83.057 1.255.082v1.954l2.167-1.858c.316.008.621.012.91.012 1.287 0 2.893-.087 4.332-.19C17.837 15.703 19 14.434 19 12.89V8.11c0-1.544-1.163-2.813-2.668-2.92C14.893 5.087 13.287 5 12 5Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgCommentFilled;