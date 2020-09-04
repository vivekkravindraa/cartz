import React from 'react';

import Label from '../../../building-blocks/atoms/Label/Label';
import TemplateOneOneOne from '../../../building-blocks/organisms/Banner/banner-templates/templates/TemplateOneOneOneOne';
import TemplateOneOneOneOne from '../../../building-blocks/organisms/Banner/banner-templates/templates/TemplateOneOneOneOne';

export default function DailyEssentials({ bannerItems }) {
    return (
        <React.Fragment>
            <TemplateOneOneOne styles={{
                'display': 'grid',
                'gridTemplateColumns': 'auto auto auto',
                'placeItems': 'center',
                'columnGap': '10px'
            }}>
                <div>
                    <TemplateOneOneOneOne styles={{
                        'display': 'grid',
                        'gridTemplateColumns': 'auto auto',
                        'columnGap': '10px',
                        'rowGap': '10px',
                        'padding': '10px'
                    }}>
                        {bannerItems.slice(0,4).map((bannerItem, index) => {
                            return <div key={index} style={{
                                    'display': 'flex',
                                    'flexDirection': 'column',
                                    'justifyContent': 'center',
                                    'background': '#ffffff',
                                    'padding': '20px',
                                    'height': '80px',
                                    'width': '80px'
                                }}>
                                    <img src={bannerItem.imageSource} alt="noImage" height="65" />
                                    <Label label={bannerItem.label} styles={{
                                        'textAlign': 'center',
                                        'whiteSpace': 'nowrap',
                                        'fontWeight': 'bold',
                                        'fontSize': '10px'
                                    }}></Label>
                            </div>
                        })}
                    </TemplateOneOneOneOne>
                    <Label label={"DAILY ESSENTIAL"} styles={{
                        'textAlign': 'center',
                        'whiteSpace': 'nowrap',
                        'fontWeight': 'bold',
                        'fontSize': '15px',
                        'padding': '10px 0'
                    }} />
                </div>
                <div>
                    <TemplateOneOneOneOne styles={{
                        'display': 'grid',
                        'gridTemplateColumns': 'auto auto',
                        'columnGap': '10px',
                        'rowGap': '10px',
                        'padding': '10px'
                    }}>
                        {bannerItems.slice(4,8).map((bannerItem, index) => {
                            return <div key={index} style={{
                                    'display': 'flex',
                                    'flexDirection': 'column',
                                    'justifyContent': 'center',
                                    'background': '#ffffff',
                                    'padding': '20px',
                                    'height': '80px',
                                    'width': '80px'
                                }}>
                                <img src={bannerItem.imageSource} alt="noImage" height="65" />
                                <Label label={bannerItem.label} styles={{
                                    'textAlign': 'center',
                                    'whiteSpace': 'nowrap',
                                    'fontWeight': 'bold',
                                    'fontSize': '10px'
                                }}></Label>
                            </div>
                        })}
                    </TemplateOneOneOneOne>
                    <Label label={"GROCERY & STAPLES"} styles={{
                        'textAlign': 'center',
                        'whiteSpace': 'nowrap',
                        'fontWeight': 'bold',
                        'fontSize': '15px',
                        'padding': '10px 0'
                    }} />
                </div>
                <div>
                    <TemplateOneOneOneOne styles={{
                        'display': 'grid',
                        'gridTemplateColumns': 'auto auto',
                        'columnGap': '10px',
                        'rowGap': '10px',
                        'padding': '10px'
                    }}>
                        {bannerItems.slice(8, 12).map((bannerItem, index) => {
                            return <div key={index} style={{
                                    'display': 'flex',
                                    'flexDirection': 'column',
                                    'justifyContent': 'center',
                                    'background': '#ffffff',
                                    'padding': '20px',
                                    'height': '80px',
                                    'width': '80px'
                                }}>
                                <img src={bannerItem.imageSource} alt="noImage" height="65" />
                                <Label label={bannerItem.label}
                                    styles={{
                                        'textAlign': 'center',
                                        'whiteSpace': 'nowrap',
                                        'fontWeight': 'bold',
                                        'fontSize': '10px'
                                    }}
                                ></Label>
                            </div>
                        })}
                    </TemplateOneOneOneOne>
                    <Label label={"PERSONAL CARE"} styles={{
                        'textAlign': 'center',
                        'whiteSpace': 'nowrap',
                        'fontWeight': 'bold',
                        'fontSize': '15px',
                        'padding': '10px 0'
                    }} />
                </div>
            </TemplateOneOneOne>
        </React.Fragment>
    )
}
