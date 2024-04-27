import * as React from "react";
import { SVGProps } from "react";
const SvgMonitor = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M12 3c-1.027 0-2.331.04-3.37.078a182.804 182.804 0 0 0-1.694.072l-.117.006c-1.071.002-2.122.16-2.867.878C3.194 4.766 3 5.837 3 7v6.6c0 1.163.194 2.234.952 2.966.75.723 1.812.878 2.892.878H11v1.512a11.998 11.998 0 0 1-1.304-.187 10.07 10.07 0 0 1-.875-.216l-.007-.002a1 1 0 0 0-.63 1.898l.004.001.006.002.02.006a5.17 5.17 0 0 0 .289.085c.191.052.463.12.8.188.674.134 1.616.269 2.697.269a14.916 14.916 0 0 0 3.917-.543l.02-.006.006-.002h.002l.002-.001a1 1 0 1 0-.588-1.912l-.009.003-.044.012-.19.052a13.537 13.537 0 0 1-2.116.354v-1.513h4.156c1.08 0 2.142-.155 2.892-.878.758-.732.952-1.803.952-2.966V7c0-1.163-.194-2.234-.952-2.966-.744-.718-1.795-.876-2.867-.878l-.117-.006a148.003 148.003 0 0 0-1.693-.072A97.975 97.975 0 0 0 12 3Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgMonitor;