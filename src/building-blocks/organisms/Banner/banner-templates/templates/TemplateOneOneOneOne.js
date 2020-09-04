import React from 'react';

const TemplateOneOneOneOne = props => {
  const styles = props.styles;
  return (
    <div className='row no-gutters' style={styles}>
      {props.children[0]}
      {props.children[1]}
      {props.children[2]}
      {props.children[3]}
    </div>
  );
};

export default TemplateOneOneOneOne;