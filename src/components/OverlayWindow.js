import { Button } from './Button'

export default function OverlayWindow({ children, isOpen, setIsOpen }) {
  return (
    <div
      className={
        'bg-black bg-opacity-40 z-50 w-full h-screen flex justify-center items-center ' +
        (isOpen ? 'fixed' : 'hidden')
      }
    >
      <div
        className="relative bg-white rounded-xl shadow-xl w-1/2 p-6 pb-24"
        style={{
          minHeight: 200,
        }}
      >
        {children}

        <div className="absolute mt-10 right-8 bottom-8">
          <Button
            label="Cancel"
            btnStyle="border-2 border-dark mx-2"
            onClick={() => setIsOpen(false)}
          />
          <Button
            label="Share"
            btnStyle="bg-purple text-white border-2 border-purple mx-2"
            onClick={() => setIsOpen(false)}
          />
        </div>
      </div>
    </div>
  )
}
