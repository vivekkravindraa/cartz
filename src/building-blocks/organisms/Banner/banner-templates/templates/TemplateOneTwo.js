import React from 'react';

const TemplateOneTwo = props => {
  const { spaceAroundItems = '0px' } = props;

  return (
    <div className='row no-gutters'>
      <div className='col-md-6 col-sm-6'>
        <div className='banner-item' style={{ padding: spaceAroundItems }}>
          {props.children[0]}
        </div>
      </div>
      <div className='col-md-6 col-sm-6'>
        <div className='row no-gutters'>
          <div className='col-sm-12 col-6'>
            <div className='banner-item' style={{ padding: spaceAroundItems }}>
              {props.children[1]}
            </div>
          </div>
          <div className='col-sm-12 col-6'>
            <div className='banner-item' style={{ padding: spaceAroundItems }}>
              {props.children[2]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateOneTwo;
