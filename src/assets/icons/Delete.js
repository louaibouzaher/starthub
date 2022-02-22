export default function Delete({ className, color }) {
  return (
    <div className={className}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 10L14 17"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 10L10 17"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6 6V5C5.44772 5 5 5.44772 5 6H6ZM18 6H19C19 5.44772 18.5523 5 18 5V6ZM6 7H18V5H6V7ZM17 6V20H19V6H17ZM17 20H7V22H17V20ZM7 20V6H5V20H7ZM7 20H7H5C5 21.1046 5.89543 22 7 22V20ZM17 20V22C18.1046 22 19 21.1046 19 20H17Z"
          fill={color}
        />
        <path
          d="M4 6H20"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16 6V7C16.5523 7 17 6.55228 17 6H16ZM8 6H7C7 6.55228 7.44772 7 8 7V6ZM9 4H15V2H9V4ZM15 4V6H17V4H15ZM16 5H8V7H16V5ZM9 6V4H7V6H9ZM15 4H17C17 2.89543 16.1046 2 15 2V4ZM9 2C7.89543 2 7 2.89543 7 4H9V4V2Z"
          fill={color}
        />
      </svg>
    </div>
  )
}
