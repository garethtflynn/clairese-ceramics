import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

<<<<<<< HEAD
import Home from './pages/Home'
import Login from './pages/Login';
import Signup from './pages/Signup';
import { StoreProvider } from './utils/GlobalState';

// //components
import Navbar from './components/Navbar/index';
import Banner from './components/Banner/index';
import Footer from './components/Footer/index';
=======
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import { StoreProvider } from "./utils/GlobalState";

// //components
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
>>>>>>> main

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Banner />
          <Navbar />
          <StoreProvider>
            <Routes>
<<<<<<< HEAD
              <Route 
                path="/Home" 
                element={<Home />} 
              />
              <Route 
                path="/Login" 
                element={<Login />} 
              />
              <Route 
                path="/Signup" 
                element={<Signup />} 
              />
=======
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Products" element={<Products />} />
>>>>>>> main
            </Routes>
          </StoreProvider>
        </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
