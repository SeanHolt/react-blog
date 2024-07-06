import reportWebVitals from "./reportWebVitals";
import React, { useEffect } from "react";
import {
  createHashRouter,
  Outlet,
  RouterProvider,
  useNavigation,
  useParams,
} from "react-router-dom";
import * as ReactDOMClient from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Provider, useSelector } from "react-redux";
import { selectTotal, setTotal, store, useAppDispatch } from "./store";
import { Nav, BlogPosts, Authors, Login, Blog, Footer } from "./components";
import { BlogService } from "./services/BlogService";
import { About } from "./components/About";
import { Sitemap } from "./components/Sitemap";
import { Contact } from "./components/Contact";
import { FAQ } from "./components/FAQ";

const routes = [
  { path: "about", element: <About /> },
  { path: "sitemap", element: <Sitemap /> },
  { path: "contact", element: <Contact /> },
  { path: "faq", element: <FAQ /> },
  { path: "login", element: <Login /> },
  { path: "authors/page?/:page?", element: <Authors /> },
  { path: "blog/:id", element: <Blog /> },
];

const router = createHashRouter([
  {
    path: "/",
    Component() {
      const dispatch = useAppDispatch(),
        total = useSelector(selectTotal);
      useEffect(() => {
        if (total === 0) {
          BlogService.getAll(1000, 1).then((response) => {
            dispatch(setTotal(response.length));
          });
        }
      }, [dispatch, total]);
      let navigation = useNavigation();
      return (
        <>
          {navigation.state !== "idle" ? (
            <div className="is-loading">Loading...</div>
          ) : (
            <div className="container">
              <Nav />
              <Outlet />
              <Footer />
            </div>
          )}
        </>
      );
    },
    children: [
      {
        index: true,
        element: <BlogPosts />,
      },
      ...routes,
      {
        path: "author/:id",
        Component() {
          let params = useParams();
          return (
            <>
              <BlogPosts author={params.id} />
            </>
          );
        },
      },
    ],
  },
]);
const rootElement = document.getElementById("root") as HTMLElement;
ReactDOMClient.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
