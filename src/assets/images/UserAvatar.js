export default function UserAvatar({ link, sizing, className }) {
  return (
    <div
      className={
        ` rounded-full border-2 border-white shadow-md ` +
        (sizing ? '' : 'h-16 w-16') +
        ' ' +
        className
      }
      style={{
        backgroundImage: 'url(' + link + ')',
        backgroundSize: 'cover',
      }}
    ></div>
  )
}
