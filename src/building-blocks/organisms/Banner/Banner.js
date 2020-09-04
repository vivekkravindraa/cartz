import React, { useState } from 'react';
import './Banner.scss';
import Header from '../../molecules/Header/Header';
import Banners from './banner-templates';
import { itemsRenderer } from '../../renderers/itemRenderer';

const Banner = props => {
  const [activeItem, updateActiveItem] = useState(0);
  const { type, header = null, spaceAroundItems, style } = props;
  let { items } = props;

  if (!items && header) {
    const { buttons = [] } = header;
    items = buttons.map(button => button.items);
  }

  let itemsToRender = items;

  if (items[activeItem] instanceof Array) {
    itemsToRender = items[activeItem];
  }

  const BannerTemplate = Banners[type];

  const onHeaderAction = event => {
    const { id } = event.target;
    if (id) {
      updateActiveItem(id);
    }
  };

  return (
    <section className='container banner' style={style}>
      {header && <Header {...header} onAction={onHeaderAction}></Header>}
      <BannerTemplate spaceAroundItems={spaceAroundItems}>{itemsRenderer(itemsToRender)}</BannerTemplate>
    </section>
  );
};

export default Banner;
