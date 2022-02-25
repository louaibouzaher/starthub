import React from 'react'
import { connect } from 'react-redux'
import { toggleSection } from '../store/SectionIndexer/sectionIndexer.actions'
import { sections } from '../store/SectionIndexer/sectionIndexer.reducer'

const SectionIndexer = ({ toggleSection, sectionIndexer }) => {
  return (
    <div className=" m-4 h-14 bg-gray-100 shadow-md font-inter flex flex-row justify-center items-center">
      {sections.map((s) => {
        return (
          <div
            onClick={() => toggleSection()}
            key={s.id}
            className={
              'text-center text-dark p-2 m-2 font-bold rounded-lg cursor-pointer flex justify-center items-center ' +
              (sectionIndexer.id !== s.id ? 'opacity-30 bg-gray-200' : 'opacity-100')
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
const mapStateToProps = (state) => {
  return {
    sectionIndexer: state.sectionIndexer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSection: () => dispatch(toggleSection()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionIndexer)
