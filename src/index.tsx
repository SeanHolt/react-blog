import reportWebVitals from "./reportWebVitals";
import React, { useEffect, useState } from "react";
import {
  createHashRouter,
  Outlet,
  RouterProvider,
  useNavigate,
  useNavigation,
  useParams,
} from "react-router-dom";
import * as ReactDOMClient from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Provider, useSelector } from "react-redux";
import { selectTotal, setTotal, store, useAppDispatch } from "./store";
import {
  Nav,
  BlogPosts,
  Authors,
  Login,
  Blog,
  Footer,
  About,
  Sitemap,
  Contact,
  Comment,
  FAQ,
} from "./components";
import { Blog as BlogItem } from './types/blog'
import { BlogService } from "./services/BlogService";

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
        path: "create-blog",
        Component() {
          const navigate = useNavigate()
          const [title, setTitle] = useState<string>('')
          const [content, setContent] = useState<string>('')
          const onCreate = () => {
            const blog = BlogService.addBlog({title: title, content: content, profileId: 1} as BlogItem)
            setTitle('')
            setContent('')
            navigate("/blog/" + blog.id)
          }
          return (<>
          <p>Create Blog</p>
          <div className="mb-3">
            <label htmlFor="formTitle" className="form-label">Title</label>
            <input type="text" className="form-control" id="formTitle" placeholder="Title" onChange={(e) => { setTitle(e.target.value)}} value={title} />
          </div>
          <div className="mb-3">
            <label htmlFor="formContent" className="form-label">Content</label>
            <input type="text" className="form-control" id="formContent" placeholder="Content" onChange={(e) => { setContent(e.target.value)}} value={content} />
          </div>
          <div className="mb-3">
            <button onClick={onCreate}>Create</button>
          </div>
          </>)
        }
      },
      {
        path: "comment/:id",
        Component() {
          let params = useParams()
          return (<Comment id={params.id} />)
        }
      },
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
