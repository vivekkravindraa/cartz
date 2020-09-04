import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import HomeComponent from './components/home-component/HomeComponent';
import MobileComponent from './components/mobile-component/MobileComponent';
import EssentialComponent from './components/essential-component/EssentialComponent';
import FashionComponent from './components/fashion-component/FashionComponent';
import ElectronicComponent from './components/electronic-component/ElectronicComponent';
import HomeDecorComponent from './components/home-decor-component/HomeDecorComponent';
import ProductList from './components/product-component/ProductList/ProductList';
import ProductDescription from './components/product-component/ProductDescription/ProductDescription';
import ProductInformation from './components/product-component/ProductInformation/ProductInformation';
import UserComponent from './components/user-component/UserComponent';
import ChangePassword from './components/user-component/ChangePassword/ChangePassword';
import MyOrders from './components/user-component/MyOrders/MyOrders';
import Account from './components/user-component/Account/Account';
import Wallet from './components/user-component/Wallet/Wallet';
import Notifications from './components/user-component/Notifications/Notifications';
import Payments from './components/user-component/Payments/Payments';
import OrderSuccess from './components/user-component/OrderSuccess/OrderSuccess';

import './App.css';

export const customHistory = createBrowserHistory();

function App() {
  return (
    <Router history={customHistory}>
      <Switch>
        <Route path="/order-success" component={OrderSuccess} />
        <Route path="/payments" component={Payments} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/wallet" component={Wallet} />
        <Route path="/account" component={Account} />
        <Route path="/my-orders" component={MyOrders} />
        <Route path="/change-password" component={ChangePassword} />
        <Route path="/profile" component={UserComponent} />
        <Route path="/product-information" component={ProductInformation} />
        <Route path="/product-description" component={ProductDescription} />
        <Route path="/product-list" component={ProductList} />
        <Route path="/home-decor" component={HomeDecorComponent} />
        <Route path="/mobile" component={MobileComponent} />
        <Route path="/electronic" component={ElectronicComponent} />
        <Route path="/fashion" component={FashionComponent} />
        <Route path="/essential" component={EssentialComponent} />
        <Route path="/" component={HomeComponent} />
      </Switch>
    </Router>
  );
};

export default App;
