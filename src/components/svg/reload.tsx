import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export default function ReloadSvg(props: SvgProps) {
  return (
    <Svg
      width={22}
      height={22}
      fill="none"
      // xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M19.822 14a9.604 9.604 0 0 1-9.122 6.6A9.6 9.6 0 1 1 18.33 5.17m.687 1.029a9.62 9.62 0 0 0-.687-1.029m0 0L16.1 7.4h4.8V2.6L18.33 5.17ZM18.5 7 20 5"
        stroke="#655BE0"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
