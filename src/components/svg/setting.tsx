import * as React from "react"
import Svg, {
  SvgProps,
  G,
  Circle,
  Path,
  Defs,
  ClipPath,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default function SettingSvg (props: SvgProps) {
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
    <G
      clipPath="url(#b)"
      stroke="gray"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M24 26a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <Path d="M28.933 26a1.1 1.1 0 0 0 .22 1.213l.04.04a1.334 1.334 0 1 1-1.887 1.887l-.04-.04a1.1 1.1 0 0 0-1.213-.22 1.1 1.1 0 0 0-.666 1.007V30a1.334 1.334 0 0 1-2.667 0v-.06a1.1 1.1 0 0 0-.72-1.007 1.1 1.1 0 0 0-1.213.22l-.04.04a1.333 1.333 0 1 1-1.887-1.886l.04-.04a1.1 1.1 0 0 0 .22-1.214 1.1 1.1 0 0 0-1.007-.666H18a1.333 1.333 0 1 1 0-2.667h.06a1.1 1.1 0 0 0 1.007-.72 1.1 1.1 0 0 0-.22-1.213l-.04-.04a1.332 1.332 0 0 1 .432-2.176 1.333 1.333 0 0 1 1.454.29l.04.04a1.1 1.1 0 0 0 1.213.22H22a1.1 1.1 0 0 0 .666-1.008V18a1.333 1.333 0 0 1 2.667 0v.06A1.1 1.1 0 0 0 26 19.067a1.1 1.1 0 0 0 1.213-.22l.04-.04a1.335 1.335 0 1 1 1.887 1.886l-.04.04a1.1 1.1 0 0 0-.22 1.214V22a1.1 1.1 0 0 0 1.007.667H30a1.333 1.333 0 1 1 0 2.666h-.06a1.1 1.1 0 0 0-1.007.667v0Z" />
    </G>
    <Defs>
      <ClipPath id="b">
        <Path fill="#fff" transform="translate(16 16)" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
}
