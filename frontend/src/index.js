import homeScreen from './screens/homeScreen.js';
import productScreen from './screens/productScreen.js';
import { hideLoading, parseRequesturl, showLoading } from './utils.js';
import ErrorScreen from './screens/Error404Screen.js';
import cartScreen from './screens/CartScreen.js';
import SigninScreen from './screens/SigninScreen.js';
import Header from './component/Header';
import RegisterScreen from './screens/RegisterScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';
import ShippingScreen from './screens/ShippingScreen.js';
import PaymentScreen from './screens/PaymentScreen.js';
import PlaceOrderScreen from './screens/PlaceOrderScreen.js';
import OrderScreen from './screens/OrderScreen.js';
import DashboardScreen from './screens/DashboardScreen.js';



const routes = {
  '/': homeScreen,
  '/product/:id': productScreen,
  '/order/:id': OrderScreen,
  '/cart/:id': cartScreen,
  '/cart': cartScreen,
  '/signin': SigninScreen,
  '/register':RegisterScreen,
  '/profile': ProfileScreen,
  '/shipping': ShippingScreen,
  '/payment': PaymentScreen,
  '/placeorder': PlaceOrderScreen,
  '/dashboard': DashboardScreen,
  
}
const router = async () => {
showLoading();
  const request = parseRequesturl();
  const requestUrl = (request.resource ? `/${request.resource}` : '/') + (request.id ? '/:id' : '') + (request.verb ? `/${request.verb}` : '');
  const screen = routes[requestUrl] ? routes[requestUrl] : ErrorScreen;
  const header = document.getElementById('header-container');
  header.innerHTML = await Header.render();
  await Header.after_render();
  const main = document.getElementById('main-container');
  main.innerHTML = await screen.render();
  if (screen.after_render()) {
    await screen.after_render();
  } 
 hideLoading();
};
window.addEventListener('load', router);
window.addEventListener('hashchange', router);
