﻿import React from 'react';

const TemplateOneOne = props => {
  const styles = props.styles;
  const { spaceAroundItems = '0px' } = props;
  return (
    <div className='row no-gutters' style={styles}>
      <div className='col-md-6 col-sm-6'>
        <div className='banner-item' style={{ padding: spaceAroundItems }}>
          {props.children[0]}
        </div>
      </div>
      <div className='col-md-6 col-sm-6'>
        <div className='banner-item' style={{ padding: spaceAroundItems }}>
          {props.children[1]}
        </div>
      </div>
    </div>
  );
};

export default TemplateOneOne;
