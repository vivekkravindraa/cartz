import React from 'react';

const TemplateOneOneOneOneOneOne = props => {
  const styles = props.styles;
  const { spaceAroundItems = '0px' } = props;
  return (
    <div className='row no-gutters' style={styles}>
      <div className='col-md-4 col-sm-4'>
        <div className='banner-item' style={{ padding: spaceAroundItems }}>
          {props.children[0]}
        </div>
      </div>
      <div className='col-md-4 col-sm-4'>
        <div className='banner-item' style={{ padding: spaceAroundItems }}>
          {props.children[1]}
        </div>
      </div>
      <div className='col-md-4 col-sm-4'>
        <div className='banner-item' style={{ padding: spaceAroundItems }}>
          {props.children[2]}
        </div>
      </div>
      <div className='col-md-4 col-sm-4'>
        <div className='banner-item' style={{ padding: spaceAroundItems }}>
          {props.children[3]}
        </div>
      </div>
      <div className='col-md-4 col-sm-4'>
        <div className='banner-item' style={{ padding: spaceAroundItems }}>
          {props.children[4]}
        </div>
      </div>
      <div className='col-md-4 col-sm-4'>
        <div className='banner-item' style={{ padding: spaceAroundItems }}>
          {props.children[5]}
        </div>
      </div>
    </div>
  );
};

export default TemplateOneOneOneOneOneOne;