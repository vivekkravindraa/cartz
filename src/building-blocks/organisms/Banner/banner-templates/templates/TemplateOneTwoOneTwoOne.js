import React from 'react';

const TemplateOneTwoOneTwoOne = props => {
  const { spaceAroundItems = '0px' } = props;

  return (
    <div className='row no-gutters'>
      <div className='col-md-3 col-sm-3'>
        <div className='banner-item' style={{ padding: spaceAroundItems }}>
          {props.children[0]}
        </div>
      </div>
      <div className='col-md-6 col-sm-6'>
        <div className='row no-gutters'>
          <div className='col-md-3 col-sm-3 col-12'>
            <div className='row no-gutters'>
              <div className='col-md-12 col-sm-12 col-6'>
                <div className='banner-item' style={{ padding: spaceAroundItems }}>
                  {props.children[1]}
                </div>
              </div>
              <div className='col-md-12 col-sm-12 col-6'>
                <div className='banner-item' style={{ padding: spaceAroundItems }}>
                  {props.children[2]}
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-sm-6 col-12'>
            <div className='banner-item' style={{ padding: spaceAroundItems }}>
              {props.children[3]}
            </div>
          </div>
          <div className='col-md-3 col-sm-3 col-12'>
            <div className='row no-gutters'>
              <div className='col-md-12 col-sm-12 col-6'>
                <div className='banner-item' style={{ padding: spaceAroundItems }}>
                  {props.children[4]}
                </div>
              </div>
              <div className='col-md-12 col-sm-12 col-6'>
                <div className='banner-item' style={{ padding: spaceAroundItems }}>
                  {props.children[5]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-md-3 col-sm-3'>
        <div className='banner-item' style={{ padding: spaceAroundItems }}>
          {props.children[6]}
        </div>
      </div>
    </div>
  );
};

export default TemplateOneTwoOneTwoOne;
