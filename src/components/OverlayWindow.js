import React, { useEffect } from 'react'
import { connect } from 'react-redux'

function OverlayWindow({ children, toggleOverlay, overlayWindow }) {
  return (
    <div
      className={
        'bg-black bg-opacity-40 z-50 w-full h-screen flex justify-center items-center ' +
        (overlayWindow.isOpen ? 'fixed' : 'hidden')
      }
    >
      <div
        className="relative bg-white rounded-xl shadow-xl w-1/2 p-8 pb-24"
        style={{
          minHeight: 200,
        }}
      >
        <div onClick={() => toggleOverlay()}>Temporary Close</div> {children}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    overlayWindow: state.overlayWindow,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleOverlay: () => dispatch(toggleOverlay()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OverlayWindow)
