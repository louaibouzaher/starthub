import React from 'react'
import { connect } from 'react-redux'
import { setSection } from '../store/SectionIndexer/sectionIndexer.actions'

const SectionIndexer = ({ sectionIndexer, setSection }) => {
  return (
    <div className=" m-4 h-14 bg-gray-100 shadow-md flex flex-row justify-center items-center">
      {sectionIndexer?.sections.map((s) => {
        return (
          <div
            onClick={() => setSection(s.id)}
            key={s.id}
            className={
              'text-center text-dark p-2 m-2 font-bold rounded-lg cursor-pointer flex justify-center items-center ' +
              (sectionIndexer.selectedSection !== s.id
                ? 'opacity-30 bg-gray-200'
                : 'opacity-100')
            }
            style={{
              width: '' + 100 / sectionIndexer.sections.length + '%',
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
    setSection: (id) => dispatch(setSection(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionIndexer)
