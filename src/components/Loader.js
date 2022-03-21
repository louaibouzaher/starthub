import ReactLoading from 'react-loading'
import React from 'react'
import tailwindConfig from '../../tailwind.config'
function Loader() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <ReactLoading
        type={'spin'}
        color={tailwindConfig.theme.extend.colors.purple}
        height={100}
        width={100}
      />
    </div>
  )
}

export default Loader
