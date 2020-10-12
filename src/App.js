import React from 'react';
import logo from './logo.svg';
import './App.css';



import Header from './Header/Header.js';
//import Footer from './Footer/Footer.js';
import Home from './Home/Home.js';
import Products_List from './Products_List/Products_List.js';
import Product from './Product/Product.js';


import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (


    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/shopmanager.com" component={Home}></Route>
        <Route path="/products_list" component={Products_List}></Route>
        <Route path="/product" component={Product}></Route>
        {/*
        <Route component={Error}/>
        */}
      </Switch>
      {/* <Footer></Footer> */}

      {/* exact нужен для того, чтобы загружалась при пасе в один корень P.S. Загружает при npm start*/}

    </BrowserRouter>






    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
