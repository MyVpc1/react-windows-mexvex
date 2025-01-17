import React from "react"

const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={58} height={58} {...props}>
    <path
      fill="var(--PrimaryColor)"
      d="M7 6h15a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM25.042 21.958V7a1 1 0 0 1 1-1H41a1 1 0 0 1 1 1v14.958a1 1 0 0 1-1 1H26.042a1 1 0 0 1-1-1zM7 25h15a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V26a1 1 0 0 1 1-1zM25 41V26a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H26a1 1 0 0 1-1-1z"
    />
  </svg>
)

export default SvgComponent