export const defaultProductStyles = {
    productItem: {
        'display': 'flex',
        'flexDirection': 'column',
        'background': '#ffffff',
        'padding': '25px 10px 10px 10px',
        'position': 'relative',
        'minWidth': '120px',
        'boxShadow': '1px 1px 1px 1px #00000029',
        'borderRadius': '4px'
    },
    productImage: {
        'display': 'block',
        'marginLeft': 'auto',
        'marginRight': 'auto',
        'height': '80px'
    },
    productName: {
        'display': 'flex',
        'justifyContent': 'flex-start',
        'alignItems': 'center'
    },
    productNameText: {
        'textAlign': 'left',
        'fontWeight': '500',
        'fontSize': '12px',
        'fontFamily': 'Roboto, sans-serif',
        'letterSpacing': '0px',
        'color': '#00243E',
        'opacity': '1',
        'margin': '5px 0',
        'height': '28px'
    },
    productPriceAndCart: {
        'display': 'flex',
        'justifyContent': 'space-between',
        'alignItems': 'center',
        'paddingTop': '10px'
    },
    productPrice: {
        'display': 'flex',
        'justifyContent': 'flex-start',
        'alignItems': 'center'
    },
    productPriceText: {
        'textAlign': 'left',
        'fontWeight': '600',
        'fontSize': '20px',
        'fontFamily': 'Roboto, sans-serif',
        'letterSpacing': '0px',
        'color': '#00243E',
        'opacity': '1',
        'margin': '10px 0'
    },
    productSavingPrice: {
        'display': 'flex',
        'justifyContent': 'flex-start',
        'position': 'absolute',
        'top': '5px',
        'left': '5px',
        'background': '#FE0162',
        'padding': '2px 10px 2px 2px',
        'clipPath': 'polygon(0 0, 100% 0%, 90% 100%, 0% 100%)'
    },
    productSavingPriceText: {
        'textAlign': 'left',
        'fontWeight': '600',
        'fontSize': '10px',
        'fontFamily': 'Roboto, sans-serif',
        'letterSpacing': '0px',
        'color': '#FFFFFF',
        'opacity': '1',
        'margin': '0'
    },
    productAbsoluteImages: {
        'display': 'flex',
        'flexDirection': 'column',
        'position': 'absolute',
        'top': '5px',
        'right': '5px'
    },
    productAddToCart: {
        'display': 'flex',
        'justifyContent': 'flex-end',
        'alignItems': 'center'
    },
    addToCart: {
        'outline': 'none',
        'background': '#ffffff',
        'border': '1px solid #4EAD3C',
        'borderRadius': '10px',
        'textAlign': 'left',
        'fontWeight': '600',
        'fontSize': '10px',
        'fontFamily': 'Roboto, sans-serif',
        'letterSpacing': '0px',
        'color': '#4EAD3C',
        'textTransform': 'capitalize',
        'opacity': '1',
        'padding': '6px 6px'
    }
};

export const customProductStyles = {
    productItem: {
        'display': 'flex',
        'flexDirection': 'column',
        'position': 'relative',
        'minWidth': '175px'
    },
    productImage: {
        'height': '250px'
    },
    brandNameText: {
        'textAlign': 'left',
        'fontWeight': '600',
        'fontSize': '12px',
        'fontFamily': 'Roboto, sans-serif',
        'letterSpacing': '0px',
        'color': '#00243E',
        'textTransform': 'uppercase',
        'margin': '0 0 5px 0',
        'opacity': '1'
    },
    productName: {
        'display': 'flex',
        'justifyContent': 'flex-start',
        'alignItems': 'center'
    },
    productNameText: {
        'textAlign': 'left',
        'fontWeight': '500',
        'fontSize': '10px',
        'fontFamily': 'Roboto, sans-serif',
        'letterSpacing': '0px',
        'color': '#9F9F9F',
        'opacity': '1',
        'margin': '0 0 5px 0',
        'height': '24px'
    },
    productPriceAndCart: {
        'display': 'flex',
        'alignItems': 'center'
    },
    productPrice: {
        'display': 'flex',
        'justifyContent': 'flex-start',
        'alignItems': 'center',
    },
    productPriceText: {
        'textAlign': 'left',
        'fontWeight': '600',
        'fontSize': '14px',
        'fontFamily': 'Roboto, sans-serif',
        'letterSpacing': '0px',
        'color': '#00243E',
        'opacity': '1',
        'margin': '0 10px 5px 0'
    },
    productMarketPriceText: {
        'textAlign': 'left',
        'fontWeight': '600',
        'fontSize': '14px',
        'fontFamily': 'Roboto, sans-serif',
        'letterSpacing': '0px',
        'color': '#00243E',
        'opacity': '0.34',
        'margin': '0 0 5px 0',
        'textDecoration': 'line-through'
    },
    productSavingPrice: {
        'display': 'flex',
        'justifyContent': 'flex-start',
        'position': 'absolute',
        'top': '5px',
        'left': '5px',
        'background': '#FE0162',
        'padding': '2px 10px 2px 2px',
        'clipPath': 'polygon(0 0, 100% 0%, 90% 100%, 0% 100%)'
    },
    productSavingPriceText: {
        'textAlign': 'left',
        'fontWeight': '600',
        'fontSize': '10px',
        'fontFamily': 'Roboto, sans-serif',
        'letterSpacing': '0px',
        'color': '#FFFFFF',
        'opacity': '1',
        'margin': '0'
    },
    productOfferTag: {
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'width': '50%',
        'background': '#ECE3FD 0% 0% no-repeat padding-box',
        'borderRadius': '5px',
        'padding': '4px',
        'opacity': '1'
    },
    productOfferTagText: {
        'textAlign': 'left',
        'fontWeight': '500',
        'fontSize': '10px',
        'fontFamily': 'Roboto, sans-serif',
        'letterSpacing': '0px',
        'color': '#8561C9',
        'textTransform': 'uppercase',
        'opacity': '1',
        'margin': '0'
    },
    productAbsoluteImages: {
        'display': 'none'
    },
    addToCart: {
        'display': 'none'
    }
};

export const productListStyles = {
    productItem: {
        'display': 'flex',
        'flexDirection': 'column',
        'background': '#ffffff',
        'padding': '25px 10px 10px 10px',
        'position': 'relative',
        'minWidth': '120px',
        'border': '1px solid #e0e0e0',
        'borderRadius': '2px'
    },
    productImage: {
        'display': 'block',
        'marginLeft': 'auto',
        'marginRight': 'auto',
        'height': '80px',
    },
    brandNameText: {
        'textAlign': 'left',
        'fontWeight': '600',
        'fontSize': '14px',
        'fontFamily': 'Roboto, sans-serif',
        'letterSpacing': '0px',
        'color': '#00243E',
        'opacity': '1',
        'margin': '5px 0',
        'height': '28px'
    },
    productName: {
        'display': 'flex',
        'justifyContent': 'flex-start',
        'alignItems': 'center'
    },
    productNameText: {
        'textAlign': 'left',
        'fontWeight': '500',
        'fontSize': '12px',
        'fontFamily': 'Roboto, sans-serif',
        'letterSpacing': '0px',
        'color': '#00243E',
        'opacity': '1',
        'margin': '5px 0',
        'height': '28px'
    },
    productPriceAndCart: {
        'display': 'flex',
        'justifyContent': 'flex-start',
        'alignItems': 'center'
    },
    productPrice: {
        'display': 'flex',
        'justifyContent': 'flex-start',
        'alignItems': 'center'
    },
    productPriceText: {
        'textAlign': 'left',
        'fontWeight': '600',
        'fontSize': '24px',
        'fontFamily': 'Roboto, sans-serif',
        'letterSpacing': '0px',
        'color': '#00243E',
        'opacity': '1',
        'margin': '10px 10px 10px 0'
    },
    productMarketPriceText: {
        'textAlign': 'left',
        'fontWeight': '600',
        'fontSize': '14px',
        'fontFamily': 'Roboto, sans-serif',
        'letterSpacing': '0px',
        'color': '#e0e0e0',
        'opacity': '0.41',
        'margin': '10px 10px 10px 0',
        'textDecoration': 'line-through'
    },
    productSavingPrice: {
        'display': 'flex',
        'justifyContent': 'flex-start',
        'position': 'absolute',
        'top': '5px',
        'left': '5px',
        'background': '#FE0162',
        'padding': '2px 10px 2px 2px',
        'clipPath': 'polygon(0 0, 100% 0%, 90% 100%, 0% 100%)'
    },
    productSavingPriceText: {
        'textAlign': 'left',
        'fontWeight': '600',
        'fontSize': '10px',
        'fontFamily': 'Roboto, sans-serif',
        'letterSpacing': '0px',
        'color': '#FFFFFF',
        'opacity': '1',
        'margin': '0'
    },
    productTagText: {
        'display': 'none'
    },
    productAbsoluteImages: {
        'display': 'flex',
        'flexDirection': 'column',
        'position': 'absolute',
        'top': '5px',
        'right': '5px'
    },
    productAddToCart: {
        'display': 'flex',
        'justifyContent': 'flex-end',
        'alignItems': 'center'
    },
    addToCart: {
        'outline': 'none',
        'background': '#ffffff',
        'border': '1px solid #4EAD3C',
        'borderRadius': '20px',
        'textAlign': 'left',
        'fontWeight': '600',
        'fontSize': '12px',
        'fontFamily': 'Roboto, sans-serif',
        'letterSpacing': '0px',
        'color': '#4EAD3C',
        'textTransform': 'capitalize',
        'opacity': '1',
        'padding': '6px 15px'
    }
};

export const productDescriptionStyles =  {
    productItem: {
        'display': 'flex',
        'flexDirection': 'column',
        'background': '#ffffff',
        'padding': '25px 10px 10px 10px',
        'position': 'relative',
        'minWidth': '175px',
        'border': '1px solid #e0e0e0',
        'borderRadius': '4px'
    },
    productImage: {
        'display': 'block',
        'marginLeft': 'auto',
        'marginRight': 'auto',
        'height': '120px'
    },
    productName: {
        'display': 'flex',
        'justifyContent': 'flex-start',
        'alignItems': 'center'
    },
    productNameText: {
        'textAlign': 'left',
        'fontWeight': '500',
        'fontSize': '12px',
        'fontFamily': 'Roboto, sans-serif',
        'letterSpacing': '0px',
        'color': '#00243E',
        'opacity': '1',
        'margin': '5px 0',
        'height': '28px'
    },
    productPriceAndCart: {
        'display': 'flex',
        'justifyContent': 'space-between',
        'alignItems': 'center'
    },
    productPrice: {
        'display': 'flex',
        'justifyContent': 'flex-start',
        'alignItems': 'center'
    },
    productPriceText: {
        'textAlign': 'left',
        'fontWeight': '600',
        'fontSize': '24px',
        'fontFamily': 'Roboto, sans-serif',
        'letterSpacing': '0px',
        'color': '#00243E',
        'opacity': '1',
        'margin': '10px 0'
    },
    productSavingPrice: {
        'display': 'flex',
        'justifyContent': 'flex-start',
        'position': 'absolute',
        'top': '5px',
        'left': '5px',
        'background': '#FE0162',
        'padding': '2px 10px 2px 2px',
        'clipPath': 'polygon(0 0, 100% 0%, 90% 100%, 0% 100%)'
    },
    productSavingPriceText: {
        'textAlign': 'left',
        'fontWeight': '600',
        'fontSize': '10px',
        'fontFamily': 'Roboto, sans-serif',
        'letterSpacing': '0px',
        'color': '#FFFFFF',
        'opacity': '1',
        'margin': '0'
    },
    productAbsoluteImages: {
        'display': 'flex',
        'flexDirection': 'column',
        'position': 'absolute',
        'top': '5px',
        'right': '5px'
    },
    productAddToCart: {
        'display': 'flex',
        'justifyContent': 'flex-end',
        'alignItems': 'center'
    },
    addToCart: {
        'outline': 'none',
        'background': '#ffffff',
        'border': '1px solid #4EAD3C',
        'borderRadius': '20px',
        'textAlign': 'left',
        'fontWeight': '600',
        'fontSize': '12px',
        'fontFamily': 'Roboto, sans-serif',
        'letterSpacing': '0px',
        'color': '#4EAD3C',
        'textTransform': 'capitalize',
        'opacity': '1',
        'padding': '6px 15px'
    }
};

export const absoluteTopImageProductStyles = {
    productItem: {
        'display': 'flex',
        'flexDirection': 'column',
        'padding': '25px 10px 10px 10px',
        'position': 'relative',
        'minWidth': '120px',
        'marginTop': '50px',
        'backgroundColor': '#f4f7fc'
    },
    productImage: {
        'position': 'absolute',
        'top': '-50px',
        'left': '50%',
        'marginLeft': '-30px',
        'height': '80px'
    },
    productName: {
        'display': 'flex',
        'justifyContent': 'flex-start',
        'alignItems': 'center'
    },
    productNameText: {
        'textAlign': 'left',
        'fontWeight': '500',
        'fontSize': '12px',
        'fontFamily': 'Roboto, sans-serif',
        'letterSpacing': '0px',
        'color': '#00243E',
        'opacity': '1',
        'margin': '5px 0',
        'height': '28px'
    },
    productPriceAndCart: {
        'display': 'flex',
        'justifyContent': 'space-between',
        'alignItems': 'center',
        'paddingTop': '10px'
    },
    productPrice: {
        'display': 'flex',
        'justifyContent': 'flex-start',
        'alignItems': 'center'
    },
    productPriceText: {
        'textAlign': 'left',
        'fontWeight': '600',
        'fontSize': '20px',
        'fontFamily': 'Roboto, sans-serif',
        'letterSpacing': '0px',
        'color': '#00243E',
        'opacity': '1',
        'margin': '10px 0'
    },
    productAddToCart: {
        'display': 'none'
    },
    productSavingPrice: {
        'display': 'none'
    },
    productAbsoluteImages: {
        'display': 'none'
    },
    productDetails: {
        'display': 'flex'
    }
};

export const absoluteLeftImageProductStyles = {
    productItem: {
        'display': 'flex',
        'flexDirection': 'column',
        'background': '#ffffff',
        'padding': '25px 10px 10px 10px',
        'minWidth': '120px',
        'position': 'relative',
        'zIndex': '1'
    },
    productImage: {
        'background': '#f4f7fc',
        'height': '160px',
        'padding': '0 25px',
        'position': 'relative',
        'zIndex': '-1'
    },
    productName: {
        'display': 'flex',
        'justifyContent': 'flex-start',
        'alignItems': 'center'
    },
    productNameText: {
        'textAlign': 'left',
        'fontWeight': '500',
        'fontSize': '10px',
        'fontFamily': 'Roboto, sans-serif',
        'letterSpacing': '0px',
        'color': '#00243E',
        'opacity': '1',
        'margin': '0',
    },
    productPriceAndCart: {
        'display': 'flex'
    },
    productPrice: {
        'display': 'flex'
    },
    productPriceText: {
        'textAlign': 'left',
        'fontWeight': '600',
        'fontSize': '14px',
        'fontFamily': 'Roboto, sans-serif',
        'letterSpacing': '0px',
        'color': '#00243E',
        'opacity': '1',
        'margin': '0'
    },
    brandNameText: {
        'display': 'none'
    },
    productSavingPrice: {
        'display': 'none'
    },
    productSavingPriceText: {
        'display': 'none'
    },
    productAbsoluteImages: {
        'display': 'none'
    },
    productAddToCart: {
        'display': 'none'
    }
};

export const orderAgainProductStyles = {
    productItem: {
        'display': 'flex',
        'flexDirection': 'column',
        'background': '#ffffff',
        'padding': '25px 10px 10px 10px',
        'position': 'relative',
        'minWidth': '120px',
        'boxShadow': '1px 1px 1px 1px #00000029',
        'borderRadius': '4px'
    },
    productImage: {
        'display': 'block',
        'marginLeft': 'auto',
        'marginRight': 'auto',
        'height': '80px'
    },
    productName: {
        'display': 'flex',
        'justifyContent': 'flex-start',
        'alignItems': 'center'
    },
    productNameText: {
        'textAlign': 'left',
        'fontWeight': '500',
        'fontSize': '12px',
        'fontFamily': 'Roboto, sans-serif',
        'letterSpacing': '0px',
        'color': '#00243E',
        'opacity': '1',
        'margin': '5px 0',
        'height': '28px'
    },
    productPriceAndCart: {
        'display': 'flex',
        'justifyContent': 'space-between',
        'alignItems': 'center',
        'paddingTop': '10px'
    },
    productPrice: {
        'display': 'flex',
        'justifyContent': 'flex-start',
        'alignItems': 'center'
    },
    productPriceText: {
        'textAlign': 'left',
        'fontWeight': '600',
        'fontSize': '20px',
        'fontFamily': 'Roboto, sans-serif',
        'letterSpacing': '0px',
        'color': '#00243E',
        'opacity': '1',
        'margin': '10px 0'
    },
    productSavingPrice: {
        'display': 'flex',
        'justifyContent': 'flex-start',
        'position': 'absolute',
        'top': '5px',
        'left': '5px',
        'background': '#FE0162',
        'padding': '2px 10px 2px 2px',
        'clipPath': 'polygon(0 0, 100% 0%, 90% 100%, 0% 100%)'
    },
    productSavingPriceText: {
        'textAlign': 'left',
        'fontWeight': '600',
        'fontSize': '10px',
        'fontFamily': 'Roboto, sans-serif',
        'letterSpacing': '0px',
        'color': '#FFFFFF',
        'opacity': '1',
        'margin': '0'
    },
    productAbsoluteImages: {
        'display': 'flex',
        'flexDirection': 'column',
        'position': 'absolute',
        'top': '5px',
        'right': '5px'
    },
    productAddToCart: {
        'display': 'flex',
        'justifyContent': 'flex-end',
        'alignItems': 'center'
    },
    addToCart: {
        'display': 'none',
        'outline': 'none',
        'background': '#ffffff',
        'border': '1px solid #4EAD3C',
        'borderRadius': '10px',
        'textAlign': 'left',
        'fontWeight': '600',
        'fontSize': '10px',
        'fontFamily': 'Roboto, sans-serif',
        'letterSpacing': '0px',
        'color': '#4EAD3C',
        'textTransform': 'capitalize',
        'opacity': '1',
        'padding': '6px 6px'
    }
};
