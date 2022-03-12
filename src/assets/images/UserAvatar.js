export default function UserAvatar({ link, sizing, className }) {
  return (
    <div
      className={
        ` rounded-full border-2 border-white shadow-md ` +
        (sizing ? '' : 'h-12 w-12') +
        ' ' +
        className
      }
      style={{
        backgroundImage: 'url(' + link + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    ></div>
  )
}
