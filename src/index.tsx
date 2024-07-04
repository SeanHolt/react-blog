import reportWebVitals from './reportWebVitals';
import React, { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigation,
  useParams
} from 'react-router-dom';
import * as ReactDOMClient from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store'
import { Nav, BlogPosts, Authors, Login, Blog, Footer } from './components'
import BlogService from './services/BlogService';

const router = createBrowserRouter([
  {
    path: '/',
    Component() {
      let navigation = useNavigation()
      return (
      <>
        { navigation.state !== "idle" ? (<div className="is-loading">Loading...</div>) : 
          <div className="container">
            <Nav />
            <Outlet />
            <Footer />
          </div>
        }
        
      </>
      )
    },
    children: [
      {
        index: true,
        element: <BlogPosts />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "author/:id",
        Component() {
          let params = useParams()
          return (<><BlogPosts author={params.id} /></>)
        }
      },
      {
        path: "authors/page?/:page?",
        Component() {
          return <Authors />
        }
      },
      {
        path: "blog/:id",
        Component() {
          return (
            <>
              <Blog />
            </>
          )
        }
      },
    ]
  },
]);
const rootElement = document.getElementById("root") as HTMLElement
ReactDOMClient.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider
        router={router}
      />
    </Provider>
  </React.StrictMode>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
