import * as React from "react";
import { SVGProps } from "react";
const SvgCloud = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M3 14.809c0 1.111.438 1.985 1.216 2.772.78.785 1.683 1.227 2.784 1.227 0 0 3.046.192 5 .192 1.954 0 5-.192 5-.192.81.001 2.13-.093 2.753-.616a3.52 3.52 0 0 0 .8-4.401 3.47 3.47 0 0 0-1.788-1.55 2.818 2.818 0 0 0-.631-2.88 2.744 2.744 0 0 0-2.837-.705 4.886 4.886 0 0 0-2.173-2.945 4.807 4.807 0 0 0-3.592-.589 4.846 4.846 0 0 0-2.984 2.1 4.927 4.927 0 0 0-.695 3.605c-.83.276-1.553.81-2.065 1.525A4.22 4.22 0 0 0 3 14.809Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 15.21c0 .664.22 1.186.792 1.78.555.576 1.058.786 1.635.79.048.001.107.002.175.007.353.022 3.422.213 5.398.213 1.975 0 5.04-.19 5.397-.213a2.98 2.98 0 0 1 .188-.006 7.29 7.29 0 0 0 1.239-.099c.196-.036.344-.077.443-.115a.771.771 0 0 0 .07-.03c.32-.288.549-.694.63-1.156a2.123 2.123 0 0 0-.22-1.38 1.942 1.942 0 0 0-.567-.648c-1.008-.728-1.534-1.927-1.49-3.088a1.309 1.309 0 0 0-.028-.322 1.233 1.233 0 0 0-.304-.588 1.051 1.051 0 0 0-.504-.302.97.97 0 0 0-.203-.03c-1.136-.044-2.525-.649-3.163-2.02a3.52 3.52 0 0 0-1.306-1.499 3.216 3.216 0 0 0-2.464-.418 3.39 3.39 0 0 0-2.082 1.516 3.749 3.749 0 0 0-.564 2.125c.047 1.283-.658 2.43-1.694 3.024-.332.19-.628.46-.861.794A2.917 2.917 0 0 0 4 15.21Zm-2 0c0 1.27.486 2.27 1.352 3.168.857.89 1.85 1.394 3.06 1.403.022 0 .042 0 .063.002C6.818 19.804 9.95 20 12 20c2.049 0 5.178-.195 5.524-.217a.974.974 0 0 1 .064-.002c.903-.002 2.343-.114 3.026-.705a4.025 4.025 0 0 0 1.323-2.347c.162-.92.01-1.868-.433-2.682a3.943 3.943 0 0 0-1.154-1.316 1.663 1.663 0 0 1-.662-1.39 3.318 3.318 0 0 0-.07-.815 3.232 3.232 0 0 0-.803-1.541 3.05 3.05 0 0 0-1.465-.87 2.97 2.97 0 0 0-.621-.09c-.584-.023-1.181-.336-1.427-.865a5.52 5.52 0 0 0-2.053-2.348 5.215 5.215 0 0 0-3.99-.673 5.39 5.39 0 0 0-3.317 2.4A5.749 5.749 0 0 0 5.074 9.8c.018.496-.26.969-.691 1.216a4.676 4.676 0 0 0-1.508 1.386c-.569.817-.875 1.8-.875 2.808Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgCloud;