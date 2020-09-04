import navigationHome from '../../assets/images/home-component-assets/navigationHome/navigationHome.svg';
import store from '../../assets/images/home-component-assets/store/store.svg';
import fashion from '../../assets/images/home-component-assets/fashion/fashion.png';
import electronic from '../../assets/images/home-component-assets/electronic/electronic.png';
import smartphone from '../../assets/images/home-component-assets/smartphone/smartphone.svg';
import fridge from '../../assets/images/home-component-assets/fridge/fridge.svg';
import jewellery from '../../assets/images/home-component-assets/jewellery/jewellery.png';

const navigationItems = [
    {
        "imageSource": navigationHome,
        "title": "HOME",
        "width": "",
        "path": "/"
    },
    {
        "imageSource": store,
        "title": "ESSENTIAL",
        "width": "",
        "path": "/essential"
    },
    {
        "imageSource": fashion,
        "title": "FASHION",
        "width": "24",
        "path": "/fashion"
    },
    {
        "imageSource": electronic,
        "title": "ELECTRONIC",
        "width": "24",
        "path": "/electronic"
    },
    {
        "imageSource": smartphone,
        "title": "MOBILE",
        "width": "",
        "path": "/mobile"
    },
    {
        "imageSource": fridge,
        "title": "FURNITURE",
        "width": "",
        "path": "/home-decor"
    },
    {
        "imageSource": jewellery,
        "title": "JEWELLERY",
        "width": "24",
        "path": "/jewellery"
    }
];

export { navigationItems };