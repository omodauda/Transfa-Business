import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export default function UploadSvg(props: SvgProps) {
  return (
    <Svg
      // xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={34}
      fill="none"
      {...props}
    >
      <Path
        stroke="#523DA2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.592 24.593c-3.246 0-5.878-2.214-5.878-5.46a5.878 5.878 0 0 1 6.531-5.842v-.036h.08c-.053-.428-.08-.864-.08-1.306 0-5.77 4.678-10.449 10.449-10.449 3.908 0 7.315 2.145 9.107 5.322a9.143 9.143 0 0 1 10.485 9.045c0 4.157-2.774 7.326-6.572 8.37M19.712 32.5v-15m0 0-5.998 6.186m5.998-6.186 6.002 6.186"
      />
    </Svg>
  )
}
