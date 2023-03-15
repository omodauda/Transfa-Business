import * as React from "react"
import Svg, { SvgProps, Path, Mask, G } from "react-native-svg"

function WelcomeSvg (props: SvgProps) {
  return (
  <Svg
    width={125}
    height={102}
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m74.416 29.926-5.91 11.82L31.09 19.974c-.532-.955-.491-2.415-.023-4.06.47-1.652 1.367-3.469 2.508-5.1 1.142-1.632 2.524-3.072 3.964-3.977 1.435-.902 2.915-1.263 4.269-.77l32.608 23.86Z"
      fill="#F8EFFB"
      stroke="#7C64C9"
      strokeWidth={0.185}
    />
    <Path
      d="M114.676 68.22 75.309 80.18l-3.583-51.394 39.458-10.66 3.492 50.096ZM94.167 13.382h.002l16.749 4.624L71.63 28.62l-27.497-8.39 37.434-9.672 12.6 2.825ZM43.893 20.35l27.646 8.433 3.582 51.38-21.217-7.883-5.961-2.217-2.761-33.888-1.289-15.825Z"
      fill="#F8EFFB"
      stroke="#7C64C9"
      strokeWidth={0.185}
    />
    <Mask id="a" fill="#fff">
      <Path d="M55.194 23.981a.072.072 0 0 0 .014-.002l39-10.607c.04-.011.064-.056.053-.1-.01-.043-.052-.07-.091-.06l-39 10.608c-.04.011-.065.056-.054.1.01.038.043.064.078.061Z" />
    </Mask>
    <Path
      d="M55.194 23.981a.072.072 0 0 0 .014-.002l39-10.607c.04-.011.064-.056.053-.1-.01-.043-.052-.07-.091-.06l-39 10.608c-.04.011-.065.056-.054.1.01.038.043.064.078.061Z"
      fill="#F8EFFB"
    />
    <Path
      d="m55.208 23.98-.049-.179.049.178Zm39-10.608.048.178-.048-.178Zm.053-.1.18-.043-.18.043Zm-.091-.06-.048-.178h-.001l.049.179Zm-39 10.608-.049-.178.049.178Zm-.054.1-.18.042.18-.043Zm.091.245a.26.26 0 0 0 .05-.008l-.098-.356a.113.113 0 0 1 .023-.004l.025.369Zm.05-.008L94.255 13.55l-.097-.357-39 10.608.097.356Zm39-10.607a.266.266 0 0 0 .184-.32l-.36.085a.103.103 0 0 1 .077-.121l.099.356Zm.184-.32a.261.261 0 0 0-.319-.196l.095.357a.108.108 0 0 1-.135-.076l.359-.086Zm-.32-.196-39 10.608.097.356 39-10.607-.097-.357Zm-39 10.608a.267.267 0 0 0-.185.32l.36-.085c.009.04-.01.102-.077.121l-.098-.356Zm-.185.32a.262.262 0 0 0 .271.204l-.026-.369a.107.107 0 0 1 .114.08l-.359.086Z"
      fill="#7C64C9"
      mask="url(#a)"
    />
    <Mask id="b" fill="#fff">
      <Path d="M71.432 28.925a.076.076 0 0 0 .067-.06c.01-.043-.013-.088-.053-.1L43.96 20.396c-.04-.013-.082.013-.093.057-.01.043.013.088.054.1l27.484 8.37a.067.067 0 0 0 .026.002Z" />
    </Mask>
    <Path
      d="M71.432 28.925a.076.076 0 0 0 .067-.06c.01-.043-.013-.088-.053-.1L43.96 20.396c-.04-.013-.082.013-.093.057-.01.043.013.088.054.1l27.484 8.37a.067.067 0 0 0 .026.002Z"
      fill="#F8EFFB"
    />
    <Path
      d="m71.499 28.866-.18-.045.18.045Zm-.053-.101-.054.176.053-.176ZM43.96 20.396l-.056.176h.002l.054-.176Zm-.093.057-.179-.045.18.045Zm.054.1.053-.176-.053.177Zm27.484 8.37.057-.177h-.003l-.054.176Zm.039.186a.26.26 0 0 0 .233-.199l-.358-.089a.109.109 0 0 1 .099-.08l.026.368Zm.233-.199a.268.268 0 0 0-.179-.322l-.107.353a.101.101 0 0 1-.072-.12l.358.09Zm-.179-.322-27.484-8.369-.108.354 27.485 8.368.107-.353ZM44.017 20.22a.258.258 0 0 0-.328.188l.359.09a.111.111 0 0 1-.143.074l.112-.352Zm-.328.188a.268.268 0 0 0 .18.322l.106-.353c.064.02.083.08.073.12l-.359-.089Zm.179.322L71.353 29.1l.107-.353-27.485-8.369-.107.353Zm27.482 8.368a.252.252 0 0 0 .095.011l-.026-.368c.01 0 .026 0 .044.005l-.113.352Z"
      fill="#7C64C9"
      mask="url(#b)"
    />
    <Path
      d="M95.905 13.905 57.664 24.53l-.073.02.005.076.777 11.138-3.996-1.703-1.027-10.673 38.113-10.562 4.442 1.08Z"
      fill="#fff"
      stroke="#7C64C9"
      strokeWidth={0.185}
      style={{
        mixBlendMode: "soft-light",
      }}
    />
    <Path
      d="m54.817 63.14.016-.091-.065.17.049-.08Zm0 0 .016-.091h.002l.006.001.023.004.09.016.342.058a98.678 98.678 0 0 0 5.014.705c1.396.154 2.814.266 3.935.256.56-.005 1.043-.04 1.408-.115.183-.037.334-.084.45-.14a.533.533 0 0 0 .23-.18c.035-.058.045-.127.02-.217a.971.971 0 0 0-.178-.325c-.192-.248-.515-.538-.934-.854-.836-.63-2.03-1.348-3.256-2.025a84.734 84.734 0 0 0-3.42-1.779 96.856 96.856 0 0 0-1.469-.709l-.085-.04-.022-.01-.005-.002-.002-.001.039-.084-.04.084.043-.176 11.412.41c-.883-1.16-2.258-2.283-3.837-3.352-1.646-1.115-3.505-2.166-5.24-3.134l-.397-.221c-1.58-.882-3.035-1.693-4.091-2.416-.572-.392-1.032-.761-1.333-1.106-.298-.342-.459-.68-.38-1.004.145-.59.627-1.028 1.234-1.399.468-.286 1.026-.54 1.587-.796.166-.076.333-.152.497-.229.725-.339 1.414-.697 1.908-1.154.49-.454.784-1 .73-1.72-.053-.716-.755-1.646-2.859-2.405-2.085-.752-5.516-1.325-10.954-1.357l2.642 32.43 5.945 2.21a42.26 42.26 0 0 0 2.03-.074c.273-.019.504-.041.685-.067.185-.027.307-.056.368-.085l.04.084-.04-.084c.043-.02.062-.044.07-.07a.236.236 0 0 0-.008-.136c-.038-.129-.143-.302-.308-.51-.327-.41-.858-.92-1.424-1.419a40.27 40.27 0 0 0-2.172-1.773 43.105 43.105 0 0 0-.157-.12l-.042-.032-.01-.008-.003-.002h-.001l.055-.074m1.846-4.763-.048.078v.001l.005.003.018.01.069.044.259.163c.223.14.54.344.916.59.752.493 1.74 1.16 2.686 1.86.947.699 1.846 1.426 2.422 2.04.29.307.49.578.58.797a.518.518 0 0 1 .046.268.259.259 0 0 1-.111.174c-.15.11-.393.182-.72.214a6.472 6.472 0 0 1-1.157-.017c-.877-.078-1.923-.276-2.929-.505a52.462 52.462 0 0 1-3.771-1.02l-.062-.019-.016-.005H53v-.001l-.029.088m0 0 .028-.088-.083.162.055-.074Z"
      fill="#33201B"
      stroke="#7C64C9"
      strokeWidth={0.185}
    />
    <Path
      d="m38.131 40.343.004-.002c4.372-1.404 10.67-1.846 18.605-1.517 2.845.118 3.278 4.198.524 4.892-.037.01-.074.018-.112.027-.935.215-1.767.235-2.547.209-.25-.009-.496-.022-.739-.035-.51-.028-1.007-.055-1.495-.034-.726.032-1.446.17-2.203.566-.757.397-1.544 1.05-2.412 2.105-2.272 2.764-5.01 3.646-7.348 3.505-2.346-.142-4.277-1.31-4.952-2.636-.451-.888-.55-2.454-.145-3.908.405-1.452 1.304-2.762 2.82-3.172Z"
      fill="#F8EFFB"
      stroke="#7C64C9"
      strokeWidth={0.185}
    />
    <Path
      d="m46.003 62.67-.001.002m0-.002v.002m0-.002-.001-.001v.003m.002-.002-.045.08m.044-.078-.044.078m.044-.078a.151.151 0 0 1-.008.098c.167.09.85.461 1.847.983l-1.883-1.003m.044-.078-.044.078m-.045.081a97.335 97.335 0 0 1 6.114 3.822c1.45.995 2.857 2.046 3.837 2.975.49.465.87.896 1.095 1.27.228.379.283.674.179.887-.053.107-.152.187-.309.235-.159.05-.371.064-.635.044-.527-.04-1.235-.22-2.075-.515-1.679-.587-3.865-1.62-6.148-2.856-4.57-2.475-9.51-5.755-11.547-7.9-3.11-3.271-4.533-5.97-5.003-8.39-.47-2.422.012-4.58.738-6.779.6-1.817 1.933-3.18 3.504-4.146 1.56-.96 3.35-1.527 4.866-1.759l.058.029.247.12a386.737 386.737 0 0 1 4.262 2.124c2.749 1.391 6.404 3.28 10.028 5.27 3.624 1.991 7.215 4.082 9.836 5.877 1.31.898 2.375 1.72 3.08 2.417.352.348.611.662.766.935.156.274.199.493.147.66-.11.36-.443.577-.988.664-.546.087-1.28.039-2.143-.113-1.724-.304-3.934-1.016-6.117-1.831a108.92 108.92 0 0 1-5.94-2.446 125.079 125.079 0 0 1-2.475-1.133l-.142-.067-.036-.017-.009-.005h-.002v-.001l-.004.005-.037.077.04-.082-.085.164.045-.08-.045.08.003.001.009.005.035.02.137.076.518.293c.446.253 1.081.617 1.841 1.061 1.52.889 3.535 2.097 5.518 3.379 1.983 1.281 3.93 2.633 5.316 3.809.693.588 1.242 1.129 1.584 1.591.171.232.287.44.346.62.058.18.057.328.004.445-.129.288-.482.436-1.073.431-.584-.004-1.358-.157-2.261-.42-1.804-.524-4.094-1.478-6.337-2.51a146.785 146.785 0 0 1-6.04-2.973c-.772-.4-1.41-.737-1.851-.97l-.052-.027a73.572 73.572 0 0 0-.613-.32.289.289 0 0 0-.017-.008s-.014-.006-.029-.008c-.006 0-.022 0-.033.002a.157.157 0 0 0-.07.071.162.162 0 0 0 .011.067l.013.016a.136.136 0 0 0 .019.017c.045.032.242.15.553.337l.232.139c.447.268 1.063.64 1.787 1.086 1.448.894 3.328 2.088 5.16 3.366 1.831 1.28 3.61 2.64 4.86 3.865.625.612 1.113 1.188 1.41 1.698.298.515.39.943.263 1.277-.093.243-.381.373-.896.369-.506-.005-1.187-.141-1.986-.375-1.596-.468-3.638-1.317-5.646-2.24a129.391 129.391 0 0 1-5.425-2.665 145.7 145.7 0 0 1-2.178-1.154l-.107-.058-.02-.011-.003-.002h-.001l-.008-.003c-.116.042-.083.163-.081.165l.006.003Zm2.1-5.79c-.002-.001-.003-.002 0 0Z"
      fill="#F8EFFB"
      stroke="#7C64C9"
      strokeWidth={0.185}
    />
    <Path
      d="M4.374 43.279h-.001c-1.158-.982-1.622-2.714-1.555-4.738.067-2.021.664-4.312 1.602-6.382.938-2.07 2.214-3.912 3.633-5.038 1.418-1.126 2.964-1.53 4.465-.768l35 17.96-6 13.935-.023-.008-.306-.122-1.166-.462a7536.896 7536.896 0 0 1-16.835-6.697c-4.62-1.846-9.26-3.708-12.778-5.14a427.013 427.013 0 0 1-4.296-1.767 69.215 69.215 0 0 1-1.25-.537 12.006 12.006 0 0 1-.453-.214.547.547 0 0 1-.029-.016l-.008-.006Z"
      fill="#F8EFFB"
      stroke="#7C64C9"
      strokeWidth={0.185}
    />
    <Path
      d="m99.84 72.726-21.525 6.476-3.098-16.971.142-.452 5.773-.402 18.707 11.35Z"
      fill="#33201B"
      stroke="#7C64C9"
      strokeWidth={0.185}
    />
    <Path
      d="M89.314 101.887 74.425 62.123l.145-.37 46.414 37.438-.18.405-31.49 2.291Z"
      fill="#7C64C9"
      stroke="#7C64C9"
      strokeWidth={0.185}
    />
    <Path
      d="M89.584 101.334 74.662 61.689l29.774-1.13 16.525 38.522-31.377 2.253Z"
      fill="#655BE0"
      stroke="#7C64C9"
      strokeWidth={0.185}
    />
    <Path
      d="m79.04 64.425 23.425-1.572 13.658 32.156-25.133 1.615-11.95-32.199Z"
      fill="#fff"
      stroke="#7C64C9"
      strokeWidth={0.185}
    />
    <Path
      d="m83.887 65.433-1.9-4.608 17.677-.746 2.197 4.496-17.974.858Z"
      fill="#000"
      stroke="#7C64C9"
      strokeWidth={0.185}
    />
    <Path
      d="m101.167 68.156-18.384.78-.01-.23 18.384-.78.01.23ZM83.94 71.522l-.01-.23 20.346-.869.01.23-20.346.869ZM105.444 73.238l-20.346.87-.01-.23 20.346-.87.01.23ZM86.255 76.693l-.01-.23 20.347-.869.01.23-20.347.869ZM107.76 78.41l-20.346.868-.01-.23 20.346-.869.01.23ZM88.57 81.864l-.009-.23 20.346-.87.01.23-20.346.87Z"
      fill="#848484"
      stroke="#7C64C9"
      strokeWidth={0.185}
    />
    <Mask
      id="c"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={94}
      y={84}
      width={14}
      height={8}
    >
      <Path
        d="M94.527 91.354s.646-4.523 1.016-4.8c.369-.277 1.107-2.307 1.753-1.846.646.462 1.2 3.6 1.2 4.338 0 .739.093 2.031.554 2.031.462 0 2.838-4.592 3-4.338.161.254.692 2.815 1.015 2.838.323.023 2.123-1.061 2.4-.969.277.092 1.892.462 1.892.462"
        stroke="#7C64C9"
        strokeWidth={0.923}
      />
    </Mask>
    <G mask="url(#c)">
      <Path
        d="m100.451 89.028.079.042-.079-.042Zm0 0-.002.003c-.219.421-.432.828-.635 1.18-.204.356-.396.65-.573.847m1.21-2.03-1.21 2.03m-.912-2.131c.089.772.156 1.322.246 1.695a1.5 1.5 0 0 0 .15.413c.056.09.115.138.18.159l-.576-2.267Zm0 0v-.005m0 .005v-.005m.912 2.136c-.108.122-.2.147-.263.147a.24.24 0 0 1-.072-.011l.335-.136Zm-.912-2.136c-.082-.713-.18-1.564-.336-2.283m.336 2.283-.336-2.283m0 0a5.356 5.356 0 0 0-.285-.958m.285.958-.285-.958m0 0c-.113-.263-.254-.478-.435-.586l.435.586Zm5.174 3.684c.032.063.074.12.133.156l-5.742-4.426c-.15-.09-.312-.09-.491-.018-.511.205-.888.706-1.168 1.318-.28.615-.471 1.36-.601 2.076a19.321 19.321 0 0 0-.279 2.714l-.23-.002c.008-.354.055-1.597.311-2.9.145-.74.357-1.494.664-2.116.308-.623.706-1.099 1.217-1.303.259-.104.49-.09.695.033.178.106.331.298.463.562.132.264.238.593.327.963.177.741.28 1.634.377 2.478v.002c.042.367.091.798.148 1.169.03.186.06.357.093.499.032.138.068.258.112.332l.062.105.085-.088.011-.013c.174-.194.367-.497.565-.844.2-.349.409-.749.613-1.14.397-.76.72-1.367 1.008-1.776.144-.205.275-.356.398-.451.122-.095.229-.13.328-.12.127.011.218.091.285.196.068.106.104.224.123.288.167.557.242 1.054.303 1.459v.004c.035.233.068.448.111.617.022.085.047.162.079.226Z"
        fill="#282828"
        stroke="#7C64C9"
        strokeWidth={0.185}
      />
    </G>
    <Path
      d="m123.991 54.442-9.896 27.097-2.67-.975 9.896-27.097a1.42 1.42 0 1 1 2.67.975Z"
      fill="#025BB3"
      stroke="#7C64C9"
      strokeWidth={0.185}
    />
    <Path
      d="m123.967 55.688-3.058 8.375-3.341-1.22 3.058-8.375 3.341 1.22Z"
      fill="#0076EB"
      stroke="#7C64C9"
      strokeWidth={0.185}
    />
    <Path
      d="M123.303 60.861c.621-1.432.936-2.441 1.071-3.154.133-.71.089-1.137-.026-1.394-.12-.27-.32-.352-.47-.403l.079-.216c.176.06.444.171.601.526.165.37.174.938.002 1.73-.172.79-.518 1.786-1.046 3.003-.695 1.604-1.386 2.615-2 3.51l-.003.006c-.472.69-.886 1.295-1.18 2.024-.288.714-.461 1.544-.472 2.692h-.23c.011-1.192.197-2.055.493-2.786.304-.751.725-1.367 1.202-2.065.605-.883 1.293-1.888 1.979-3.473Z"
      fill="#025BB3"
      stroke="#7C64C9"
      strokeWidth={0.185}
    />
    <Path
      d="m113.766 82.017-1.877 2.516-.709-.26a4490.218 4490.218 0 0 1 .21-3.523l2.61.953-.234.314Z"
      fill="#000"
      stroke="#7C64C9"
      strokeWidth={0.185}
    />
    <Path
      d="m111.196 85.352-.007-.003a.177.177 0 0 1-.109-.214.713.713 0 0 0 .069-.144c.024-.064.049-.143.074-.229l.041-.136c.041-.14.085-.29.134-.433.067-.194.14-.363.219-.47a.29.29 0 0 1 .106-.098.095.095 0 0 1 .086.003l.007.003a.178.178 0 0 1 .11.215.62.62 0 0 0-.069.143 4.05 4.05 0 0 0-.075.229l-.04.136c-.041.14-.086.29-.135.433a1.85 1.85 0 0 1-.219.47.283.283 0 0 1-.106.098.096.096 0 0 1-.086-.003Z"
      fill="#000"
      stroke="#7C64C9"
      strokeWidth={0.185}
    />
  </Svg>
)
}

export default WelcomeSvg