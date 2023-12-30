import React, { useState } from 'react';
import Place from './Place';

const App = (props) => {
  const [visitedPlaceIDs, setVistitedPlaceID] = useState([]);
  const favoritePlace = props.data.favoritePlaceId;
  const places = props.data.places; 
  const listOfPlaces = places.map((place) => {
    return(
      <Place
        key={place.id}
        id={place.id}
        name={place.name}
        currentlyVisitedPlaces={visitedPlaceIDs}
        setPlaceAsVisited={setVistitedPlaceID}
      />
    )
  });
  let secretMessage;
  // if the last place 
  // clicked is australia 
  console.log("last clicked li")
  console.log(visitedPlaceIDs[visitedPlaceIDs.length - 1])
  if(visitedPlaceIDs[visitedPlaceIDs.length - 1] === favoritePlace){
    // add secretMessage div
    secretMessage = <img className="secret" src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F10xylIOSXWAMne%2F200.gif&f=1&nofb=1&ipt=0930ece6f11a0c9099545d6991d36ff62d4381c8cd9189397700632f6d896357&ipo=images'/> 
  }
  // if user selects all places 
  if(visitedPlaceIDs.length === props.data.length){
    // show secreter message
    secretMessage = <img className="secret" src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2Fa1c3df8d2e62745ad0a3e791246b5c5e%2Ftenor.gif%3Fitemid%3D12198769&f=1&nofb=1&ipt=51f3b34df9ee54422311f39a668dec8bbc748ec4f573ebea50a90a3995ef4d12&ipo=images'/> 
  }
  console.log("Places:")
  console.log(visitedPlaceIDs);
  return (
    <div id="wishlist-div">
      <div className="grid-container">
        <div className="small-12 text-center">
          <h3 className='app-header'>Wanderlust Wishlist</h3>
          <ul className='listOfPlaces'>
            {listOfPlaces}
          </ul>
          {secretMessage}
        </div>
      </div>
    </div>
  )
}

export default App;
