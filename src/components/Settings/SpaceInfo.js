import React from "react";
function SpaceInfo(props){
    return(
        <div className=" flex items-start flex-row bg-white rounded shadow-lg p-10 m-2">
          <div
            className="h-36 w-48 rounded-full mr-6"
            style={{
              backgroundImage: 'url(' + props.logo + ')',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          <div className="h-36 max-w-md">
            <div className="text-4xl text-dark font-bold">{props.name}</div>
            <div className=" flex flex-row text-xl font-bold m-2">
            <div >From:</div>
            <div className=" ml-4">
              {props.dateFrom.toDateString()}
            </div>
          </div>
          <div className=" flex flex-row text-xl font-bold m-2">
            <div >To:</div>
            <div className=" ml-10">
              {props.dateTo.toDateString()}
            </div>
          </div>
          </div>

          <div className=" flex flex-col m-1">
            
            <div className="text-xl font-bold"> Position</div>
          </div>{' '}
        </div>
    )
}