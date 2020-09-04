import React from 'react';

const TemplateOne = props => {
  const styles = props.styles;
  const { spaceAroundItems = '0px' } = props;
  return (
    <div className='row no-gutters' style={styles}>
      <div className='col-sm-12'>
        <div className='banner-item' style={{ padding: spaceAroundItems }}>
          {props.children[0]}
        </div>
      </div>
    </div>
  );
};

export default TemplateOne;
