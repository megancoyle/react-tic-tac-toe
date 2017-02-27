import React from 'react';

class Square extends React.Component {
  function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
  }
}

export default Square;
