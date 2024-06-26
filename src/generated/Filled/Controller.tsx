import * as React from "react";
import { SVGProps } from "react";
const SvgController = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M15.102 3.774c1.092-.039 2.223.106 3.433.881 1.016.651 1.764 1.31 2.334 2.389.339.641.513 1.346.63 2.179.113.814.18 1.826.263 3.103l.229 3.483C22.134 17.987 20.536 20 18.316 20c-1.126 0-2.168-.544-2.855-1.441l-.273-.348-.198-.253a46.66 46.66 0 0 1-.254-.326 5.351 5.351 0 0 0-.16-.182 1.67 1.67 0 0 0-.825-.423 3.59 3.59 0 0 0-.721-.049l-.333.008c-.219.007-.48.014-.697.014-.217 0-.478-.007-.697-.014l-.333-.008a3.59 3.59 0 0 0-.722.049 1.67 1.67 0 0 0-.824.422l-.044.048a5.427 5.427 0 0 0-.116.135l-.253.324-.205.262-.267.34C7.852 19.457 6.81 20 5.684 20c-2.22 0-3.818-2.013-3.675-4.19l.229-3.484c.084-1.277.15-2.289.264-3.103.116-.833.29-1.538.629-2.18.57-1.078 1.318-1.737 2.334-2.388 1.21-.775 2.34-.92 3.433-.88.442.015.894.062 1.323.106l.23.024C10.96 3.956 11.465 4 12 4c.535 0 1.038-.044 1.55-.095l.229-.024c.43-.044.881-.091 1.323-.107ZM8.32 8a1 1 0 0 1 1 1v1h.84a1 1 0 1 1 0 2h-.84v1a1 1 0 1 1-2 0v-1h-.84a1 1 0 1 1 0-2h.84V9a1 1 0 0 1 1-1Zm8.198 2a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1Zm-2.76 2a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgController;
