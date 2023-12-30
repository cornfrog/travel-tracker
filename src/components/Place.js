import React, { useState } from 'react';

const Place = (props) => {

  // when user clicks place li
  const visitedPlace = () => {
    // if the currentPlace array doesnt
    // already include the place the user clicks
    if(!props.currentlyVisitedPlaces.includes(props.id)){
      // create new array
      // push clicked place
      const newCurrentPlaces = props.currentlyVisitedPlaces.concat(props.id);
      // set new array as state array
      props.setPlaceAsVisited(newCurrentPlaces);
    }
    // if currentPlace array already includes 
    // the clicked place
    else{
      // get all places that are not the clicked place
      const filteredPlaces = props.currentlyVisitedPlaces.filter((placeID) => placeID !== props.id);
      // debugger;
      // set filteredPlaces to state array 
      props.setPlaceAsVisited(filteredPlaces);
    }
  }

  let placeClass = "place";
  if(props.currentlyVisitedPlaces.includes(props.id)){
    placeClass = "place done"; 
  }

  return(
    <li className={placeClass} onClick={visitedPlace} >{props.name}</li>
  )
} 

export default Place;
