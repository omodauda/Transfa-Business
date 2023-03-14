import * as React from "react"
import Svg, { G, Circle, Path, Defs, SvgProps } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function BackButtonSvg(props: SvgProps) {
  return (
  <Svg
    width={48}
    height={48}
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#a)">
      <Circle cx={24} cy={23} r={16} fill="#FAFAFA" />
      <Circle cx={24} cy={23} r={15.5} stroke="#E3E3E3" />
    </G>
    <Path
      d="m27 29-6-6 6-6"
      stroke="gray"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs />
  </Svg>
)
}

export default BackButtonSvg
