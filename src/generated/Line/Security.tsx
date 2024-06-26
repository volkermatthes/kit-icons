import * as React from "react";
import { SVGProps } from "react";
const SvgSecurity = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.969 11.75a2 2 0 1 0-1.938 0c-.02.08-.031.164-.031.25v3a1 1 0 1 0 2 0v-3c0-.086-.01-.17-.031-.25Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.775 3.026a1 1 0 0 1 .45 0l.008.001.02.005.073.017a40.685 40.685 0 0 1 1.18.297c.715.19 1.63.45 2.345.718.761.285 1.675.722 2.38 1.075a49.182 49.182 0 0 1 1.15.597l.071.038.02.01.006.004c.321.175.522.513.522.879V12c0 3.55-2.018 5.82-3.927 7.153a13.198 13.198 0 0 1-3.722 1.788l-.072.02-.021.005-.007.002-.004.001a1.005 1.005 0 0 1-.494 0h-.004l-.007-.003-.021-.005a6.665 6.665 0 0 1-.324-.096 13.2 13.2 0 0 1-3.47-1.711C6.018 17.82 4 15.55 4 12V6.667a1 1 0 0 1 .521-.878l.008-.004.019-.01.071-.04a40.613 40.613 0 0 1 1.15-.596c.705-.353 1.619-.79 2.38-1.075.715-.268 1.63-.529 2.344-.718a49.313 49.313 0 0 1 1.18-.297l.075-.017.02-.005.007-.001ZM18 7.268a47.51 47.51 0 0 0-.667-.342c-.692-.347-1.528-.744-2.184-.99-.616-.23-1.451-.47-2.154-.656a47.564 47.564 0 0 0-.873-.223L12 5.027l-.122.03c-.22.054-.526.13-.873.223-.703.186-1.538.425-2.154.656-.656.246-1.492.643-2.184.99A47.4 47.4 0 0 0 6 7.268V12c0 2.671 1.482 4.403 3.073 5.514A11.202 11.202 0 0 0 12 18.957a11.203 11.203 0 0 0 2.927-1.444C16.518 16.402 18 14.67 18 12V7.268Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgSecurity;
