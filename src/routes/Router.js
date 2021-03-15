import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AdressScreen } from '../screens/AdressScreen';
import { CartScreen } from '../screens/CartScreen';
import { ErrorScreen } from '../screens/ErrorScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { OrderScreen } from '../screens/OrderScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { ProfileEditScreen } from '../screens/ProfileEditScreen';
import { ProfileEditAdressScreen } from '../screens/ProfileEditAdressScreen';
import { RestaurantsScreen } from '../screens/RestaurantsScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { SignUpScreen } from '../screens/SignUpScreen';
import { SplashScreen } from '../screens/SplashScreen';

export const Router = () => {
  return <div>
    <BrowserRouter>
      <Switch>
        <Route exact path='/splash'>
          <SplashScreen />
        </Route>
        <Route exact path='/cadastro'>
          <SignUpScreen />
        </Route>
        <Route exact path='/busca'>
          <SearchScreen />
        </Route>
        <Route exact path='/restaurantes/:id'>
          <RestaurantsScreen />
        </Route>
        <Route exact path='/perfil'>
          <ProfileScreen />
        </Route>
        <Route exact path='/perfil/editar'>
          <ProfileEditScreen />
        </Route>
        <Route exact path='/perfil/editar/endereco'>
          <ProfileEditAdressScreen />
        </Route>
        <Route exact path='/pedido'>
          <OrderScreen />
        </Route>
        <Route exact path='/login'>
          <LoginScreen />
        </Route>
        <Route exact path='/carrinho'>
          <CartScreen />
        </Route>
        <Route exact path='/endereco'>
          <AdressScreen />
        </Route>
        <Route exact path='/'>
          <HomeScreen />
        </Route>
        <Route>
          <ErrorScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
}