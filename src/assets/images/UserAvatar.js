export default function UserAvatar({ link, size }) {
  return (
    <div
      className={`h-16 w-16 rounded-full border-2 border-white shadow-md `}
      style={{
        backgroundImage: 'url(' + link + ')',
        backgroundSize: 'cover',
      }}
    ></div>
  )
}
