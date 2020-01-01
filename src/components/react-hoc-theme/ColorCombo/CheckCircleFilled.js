import React from 'react'

export const CheckCircleFilled = ({ fill, color, size = '16px' }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 512 512"
    width={size}
    height={size}
  >
    <g>
      <path
        fill={fill || 'currentColor'}
        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm155.31 195.31l-184 184a16 16 0 0 1-22.62 0l-104-104a16 16 0 0 1 0-22.62l22.62-22.63a16 16 0 0 1 22.63 0L216 308.12l150.06-150.06a16 16 0 0 1 22.63 0l22.62 22.63a16 16 0 0 1 0 22.62z"
      />
      <path
        fill={color || '#fff'}
        d="M227.31 387.31a16 16 0 0 1-22.62 0l-104-104a16 16 0 0 1 0-22.62l22.62-22.63a16 16 0 0 1 22.63 0L216 308.12l150.06-150.06a16 16 0 0 1 22.63 0l22.62 22.63a16 16 0 0 1 0 22.62l-184 184z"
      />
    </g>
  </svg>
)
