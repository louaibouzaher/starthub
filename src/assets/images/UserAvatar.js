export default function UserAvatar({ link, size }) {
  console.log(`h-${size} w-${size} rounded-full border-2 border-white shadow-md `)
  return (
    <div
      className={`h-${size} w-${size} rounded-full border-2 border-white shadow-md `}
      style={{
        backgroundImage: 'url(' + link + ')',
        backgroundSize: 'cover',
      }}
    ></div>
  )
}
