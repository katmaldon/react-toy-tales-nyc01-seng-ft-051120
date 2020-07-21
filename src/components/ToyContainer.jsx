import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = props => {
  const renderToys = () => {
    return props.toyArray.map(toy => <ToyCard
      key={toy.id}
      {...toy}
      deleteHandler= {props.deleteHandler}
      handleLike= {props.handleLike}
    /> )
  }


  return(
    <div id="toy-collection">
      {renderToys()}
    </div>
  );
}

export default ToyContainer;
