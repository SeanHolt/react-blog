import React from "react";
import {
  nextPage,
  setPage,
  setPerPage,
  prevPage,
  useAppDispatch,
  selectTotal,
  selectPerPage,
  selectCurrentPage,
} from "../store";
import { useSelector } from "react-redux";

/*
type PaginationProps = {
    baseUrl: string;
    start: number | string;
    perPage: number | string;
    total: number;
}
*/
export function Pagination() {
  const dispatch = useAppDispatch();
  let items = [];
  const [total, per, current] = [
    useSelector(selectTotal),
    useSelector(selectPerPage),
    useSelector(selectCurrentPage),
  ];
  const updatePagination = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setPage(1));
    dispatch(setPerPage(e.target.value));
  };
  const pages = Math.ceil(total / per);
  for (let i = 0; i < pages; i++) {
    items.push(i);
  }
  return (
    <nav aria-label="Page Pagination" className="mt-5">
      <div className="d-flex justify-content-center">
        <ul className="pagination">
          {current > 1 ? (
            <li key="prev" className="page-item">
              <button
                className="page-link"
                onClick={() => dispatch(prevPage(1))}
              >
                Previous
              </button>
            </li>
          ) : (
            <span className="page-link">Previous</span>
          )}
          {items.map((index) => {
            return (
              <li key={index} className="page-item">
                {index + 1 !== current ? (
                  <button
                    className="page-link"
                    onClick={() => dispatch(setPage(index + 1))}
                  >
                    {index + 1}
                  </button>
                ) : (
                  <span className="page-link">{index + 1}</span>
                )}
              </li>
            );
          })}
          {current < Math.ceil(total / per) ? (
            <li key="next" className="page-item">
              <button
                className="page-link"
                onClick={() => dispatch(nextPage(2))}
              >
                Next
              </button>
            </li>
          ) : (
            <span className="page-link">Next</span>
          )}
        </ul>
        <form className="d-flex ps-3" role="search">
          {"Per Page "}
          <select onChange={updatePagination} value={per}>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={25}>25</option>
          </select>
        </form>
      </div>
    </nav>
  );
}
