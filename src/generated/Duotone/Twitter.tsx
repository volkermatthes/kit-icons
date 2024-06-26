import * as React from "react";
import { SVGProps } from "react";
const SvgTwitter = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M21 5.007s-.63 1.852-1.8 2.998c1.44 8.82-8.46 15.258-16.2 10.231 1.98.088 3.96-.53 5.4-1.764C3.9 15.15 1.65 9.946 3.9 5.89 5.88 8.182 8.94 9.505 12 9.417c-.81-3.705 3.6-5.821 6.3-3.352.99 0 2.7-1.058 2.7-1.058Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.289 6.316c-.97.496-1.612 1.517-1.312 2.887a1 1 0 0 1-.948 1.213 11.514 11.514 0 0 1-7.78-2.77c-.915 3.223.982 6.852 4.433 7.867a1 1 0 0 1 .369 1.718 8.184 8.184 0 0 1-2.558 1.474c6.331 1.628 12.839-3.688 11.72-10.538a1 1 0 0 1 .287-.876c.084-.082.166-.17.245-.263a2.839 2.839 0 0 1-.445.037 1 1 0 0 1-.675-.262c-1.02-.933-2.342-.994-3.336-.487ZM21 5.006l.947.323v.002l-.002.002-.002.007-.008.022a9.002 9.002 0 0 1-.125.327c-.085.21-.211.503-.377.835-.267.533-.658 1.21-1.176 1.813 1.146 9.45-9.505 16.126-17.802 10.738a1 1 0 0 1 .59-1.838 7.18 7.18 0 0 0 3.226-.597C2.45 14.43.784 9.446 3.025 5.404a1 1 0 0 1 1.632-.169c1.55 1.795 3.85 2.938 6.247 3.15.056-1.753 1.083-3.14 2.475-3.85a4.916 4.916 0 0 1 5.223.481 3.32 3.32 0 0 0 .223-.065c.246-.082.51-.195.764-.317a11.012 11.012 0 0 0 .873-.47l.01-.007h.002a1 1 0 0 1 1.473 1.172L21 5.007Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgTwitter;
