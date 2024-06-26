import * as React from "react";
import { SVGProps } from "react";
const SvgNotification = (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 5.91c0 .221.026.432.076.63a6.489 6.489 0 0 0-.086.034c-1.056.43-2.227 1.25-2.526 2.728-.207 1.022-.256 1.814-.295 2.447v.009c-.033.525-.058.714-.11.878-.052.158-.149.35-.456.805-.21.311-.422.602-.624.88l-.009.011a20.63 20.63 0 0 0-.486.686c-.136.205-.29.454-.383.708-.075.203-.249.78.163 1.29.336.418.826.476 1.087.483l.127.015.495.058a94.122 94.122 0 0 0 3.036.29A2.72 2.72 0 0 0 9 18.09C9 19.74 10.387 21 12 21s3-1.26 3-2.91c0-.077-.003-.153-.01-.227a94.074 94.074 0 0 0 3.532-.348l.127-.016c.26-.007.75-.065 1.087-.482.412-.511.238-1.088.163-1.29a3.57 3.57 0 0 0-.383-.709c-.142-.213-.314-.45-.486-.686l-.009-.012a29.798 29.798 0 0 1-.624-.88c-.307-.455-.404-.646-.455-.804-.053-.164-.078-.353-.11-.878v-.008c-.04-.634-.089-1.426-.296-2.448-.3-1.477-1.47-2.297-2.526-2.728a6.722 6.722 0 0 0-.086-.034c.05-.197.076-.408.076-.63C15 4.26 13.613 3 12 3S9 4.26 9 5.91ZM12 5c-.596 0-1 .45-1 .91 0 .076.01.125.02.153.364-.045.699-.063.98-.063s.616.018.98.063A.506.506 0 0 0 13 5.91c0-.46-.404-.91-1-.91Zm.991 12.98c-.343.013-.677.02-.991.02-.314 0-.648-.007-.991-.02a.626.626 0 0 0-.009.11c0 .46.404.91 1 .91s1-.45 1-.91a.618.618 0 0 0-.009-.11Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgNotification;
