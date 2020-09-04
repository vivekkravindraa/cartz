import React from 'react';

const TemplateOneTwoTwo = props => {
  const { spaceAroundItems = '0px' } = props;

  return (
    <div className='row no-gutters'>
      <div className='col-md-3 col-sm-3'>
        <div className='row no-gutters'>
          <div className='col-md-12 col-sm-12 col-6'>
            <div className='banner-item' style={{ padding: spaceAroundItems }}>
              {props.children[0]}
            </div>
          </div>
          <div className='col-md-12 col-sm-12 col-6'>
            <div className='banner-item' style={{ padding: spaceAroundItems }}>
              {props.children[1]}
            </div>
          </div>
        </div>
      </div>
      <div className='col-md-6 col-sm-6'>
        <div className='banner-item' style={{ padding: spaceAroundItems }}>
          {props.children[2]}
        </div>
      </div>
      <div className='col-md-3 col-sm-3'>
        <div className='row no-gutters'>
          <div className='col-md-12 col-sm-12 col-6'>
            <div className='banner-item' style={{ padding: spaceAroundItems }}>
              {props.children[3]}
            </div>
          </div>
          <div className='col-md-12 col-sm-12 col-6'>
            <div className='banner-item' style={{ padding: spaceAroundItems }}>
              {props.children[4]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateOneTwoTwo;
