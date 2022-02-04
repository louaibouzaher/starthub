import React from 'react'

export const SectionIndexer = ({ sections, section, changeSection }) => {
  return (
    <div className=" m-4 h-14 bg-gray-100 shadow-md flex flex-row justify-center items-center">
      {sections.map((s) => {
        return (
          <div
            onClick={() => changeSection(s.id)}
            key={s.id}
            className={
              'text-center text-dark p-2 m-2 font-bold rounded-lg cursor-pointer flex justify-center items-center ' +
              (section === s.id ? 'opacity-30 bg-gray-200' : 'opacity-100')
            }
            style={{
              width: '' + 100 / sections.length + '%',
            }}
          >
            <s.Icon />
            {s.title}
          </div>
        )
      })}
    </div>
  )
}
