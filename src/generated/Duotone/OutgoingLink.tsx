import * as React from "react";
import { SVGProps } from "react";
const SvgOutgoingLink = (
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
      d="M5 9a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9Z"
      fill={props.color || "#000"}
    />
    <path
      d="M14.8 3.387a.95.95 0 1 0 .35 1.869l.013-.003.044-.008a28.624 28.624 0 0 1 .746-.127 19.376 19.376 0 0 1 1.445-.185 9.81 9.81 0 0 1 .344-.02l-6.464 6.465a.95.95 0 1 0 1.344 1.344l6.464-6.464c-.005.12-.011.236-.02.344-.031.422-.11.977-.184 1.445a38.713 38.713 0 0 1-.127.746l-.008.044-.003.014a.95.95 0 1 0 1.869.348l.003-.017.01-.05.031-.18c.027-.151.063-.364.102-.606.076-.477.165-1.097.203-1.6.043-.57.042-1.28.032-1.826a38.944 38.944 0 0 0-.019-.696l-.008-.206-.002-.057v-.012a.942.942 0 0 0-.279-.636.946.946 0 0 0-.632-.277h-.015l-.056-.003a31.237 31.237 0 0 0-.903-.027c-.546-.01-1.255-.011-1.825.032-.504.038-1.124.127-1.601.203a39.175 39.175 0 0 0-.786.134l-.05.009-.018.003Z"
      fill={props.color || "#000"}
    />
    <path
      d="M6 9a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H9a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5v-1a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgOutgoingLink;
