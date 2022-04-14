import React from 'react'
export default function Tags({
  handleChange,
  tags,
}) {
  return (
    <>
        <div className="flex flex-col w-1/2 mt-4">
          <label>Tags</label>
          <p className="font-light text-xs">Provide values separated by commas.</p>
          <input
            type="text"
            className="border-2 border-dark p-2 rounded-md"
            name="tags"
            value={tags}
            onChange={handleChange}
          />
        </div>

        
        
        
    </>
  )
}
