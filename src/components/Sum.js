import React from 'react';

const Sum = (props) => {
  return (
    <p>
      {`Sum of ${props.a} and ${props.b} is ${props.a + props.b}`}
    </p>)
};

export default Sum;
