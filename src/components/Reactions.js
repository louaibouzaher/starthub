import React from 'react'
import Heart from '../assets/icons/Heart'
import Comment from '../assets/icons/Comment'
import Share from '../assets/icons/Share'
import Saved from '../assets/icons/Saved'
import { reactionsColors } from '../data/general'

export default function Reactions() {
  const reactions = [0, 0, 0, 0]

  return (
    <div className="flex flex-col">
      <div className="text-gray-400 text-xs font-light">{`Reactions are disabled for now.`}</div>
      <div className="flex">
        <Heart isClicked={reactions[0]} className="mx-1" />
        <div
          className="mr-2"
          style={{
            color: reactions[0] ? reactionsColors.like : reactionsColors.disabled,
          }}
        >
          Like
        </div>
        <Comment isCommented={reactions[1]} className="mx-1" />
        <div
          className=" mr-2"
          style={{
            color: reactions[1] ? reactionsColors.comment : reactionsColors.disabled,
          }}
        >
          Comment
        </div>
        <Share isClicked={reactions[2]} className="mx-1" />
        <div
          className=" mr-2"
          style={{
            color: reactions[2] ? reactionsColors.share : reactionsColors.disabled,
          }}
        >
          Share
        </div>
        <Saved isClicked={reactions[3]} className="mx-1" />
        <div
          className=" mr-2"
          style={{
            color: reactions[3] ? reactionsColors.save : reactionsColors.disabled,
          }}
        >
          Save
        </div>
      </div>
    </div>
  )
}
