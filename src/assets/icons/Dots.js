export default function Dots({ isDark, className }) {
  if (isDark) {
    return (
      <div className={'cursor-pointer ' + className}>
        {isDark ? (
          <svg
            width="21"
            height="5"
            viewBox="0 0 21 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 2.27778C0 3.53576 1.0198 4.55555 2.27778 4.55555C3.53576 4.55555 4.55556 3.53576 4.55556 2.27778C4.55556 1.0198 3.53576 0 2.27778 0C1.0198 0 0 1.0198 0 2.27778Z"
              fill="#283A5A"
            />
            <path
              d="M10.25 4.55555C8.99202 4.55555 7.97222 3.53576 7.97222 2.27778C7.97222 1.0198 8.99202 0 10.25 0C11.508 0 12.5278 1.0198 12.5278 2.27778C12.5278 3.53576 11.508 4.55555 10.25 4.55555Z"
              fill="#283A5A"
            />
            <path
              d="M18.2222 4.55555C16.9642 4.55555 15.9444 3.53576 15.9444 2.27778C15.9444 1.0198 16.9642 0 18.2222 0C19.4802 0 20.5 1.0198 20.5 2.27778C20.5 3.53576 19.4802 4.55555 18.2222 4.55555Z"
              fill="#283A5A"
            />
          </svg>
        ) : (
          <svg
            width="21"
            height="5"
            viewBox="0 0 21 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 2.27778C0 3.53576 1.0198 4.55555 2.27778 4.55555C3.53576 4.55555 4.55556 3.53576 4.55556 2.27778C4.55556 1.0198 3.53576 0 2.27778 0C1.0198 0 0 1.0198 0 2.27778Z"
              fill="white"
            />
            <path
              d="M10.25 4.55555C8.99202 4.55555 7.97222 3.53576 7.97222 2.27778C7.97222 1.0198 8.99202 0 10.25 0C11.508 0 12.5278 1.0198 12.5278 2.27778C12.5278 3.53576 11.508 4.55555 10.25 4.55555Z"
              fill="white"
            />
            <path
              d="M18.2222 4.55555C16.9642 4.55555 15.9444 3.53576 15.9444 2.27778C15.9444 1.0198 16.9642 0 18.2222 0C19.4802 0 20.5 1.0198 20.5 2.27778C20.5 3.53576 19.4802 4.55555 18.2222 4.55555Z"
              fill="white"
            />
          </svg>
        )}
      </div>
    )
  }
}
