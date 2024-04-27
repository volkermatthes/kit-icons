import * as React from "react";
import { SVGProps } from "react";
const SvgCommandLine = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M8.253 3.146A61.076 61.076 0 0 1 12 3c1.14 0 2.49.064 3.748.146l.04.002c.698.045 1.284.083 1.767.156.51.076.975.2 1.42.453A4.074 4.074 0 0 1 20.6 5.488c.225.464.317.946.36 1.47.041.5.041 1.106.041 1.834v6.416c0 .728 0 1.334-.041 1.834-.043.524-.135 1.006-.36 1.47a4.074 4.074 0 0 1-1.624 1.731c-.445.253-.91.377-1.42.453-.483.073-1.069.11-1.767.156l-.04.002A61.015 61.015 0 0 1 12 21c-1.14 0-2.49-.064-3.747-.146l-.041-.002c-.698-.045-1.284-.083-1.768-.156-.51-.076-.974-.2-1.42-.453a4.074 4.074 0 0 1-1.623-1.731c-.225-.464-.317-.946-.36-1.47C3 16.542 3 15.936 3 15.208V8.792c0-.728 0-1.334.041-1.834.043-.524.135-1.006.36-1.47a4.074 4.074 0 0 1 1.624-1.731c.445-.253.91-.377 1.42-.453.483-.073 1.069-.11 1.767-.156l.04-.002Zm.364 4.067a1 1 0 1 0-1.234 1.574l.006.004.018.015a16.43 16.43 0 0 1 .316.256c.2.165.423.358.576.509.118.115.26.27.398.429-.139.16-.28.314-.398.43-.153.15-.376.343-.576.508a20.568 20.568 0 0 1-.316.256l-.018.015-.006.004a1 1 0 0 0 1.234 1.574l.009-.007.022-.018A17.464 17.464 0 0 0 9 12.478c.208-.173.485-.409.702-.622.244-.24.52-.556.72-.794.104-.123.193-.232.257-.31l.076-.094.013-.016a1 1 0 0 0 0-1.284l-.013-.016a17.189 17.189 0 0 0-.333-.404 12.413 12.413 0 0 0-.72-.794c-.217-.213-.494-.45-.702-.622a21.387 21.387 0 0 0-.35-.284l-.023-.018-.01-.007ZM13 11a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgCommandLine;