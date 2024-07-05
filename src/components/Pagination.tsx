import React from "react";
import { nextPage, setPage, prevPage, useAppDispatch, selectTotal, selectPerPage } from "../store";
import { useSelector } from "react-redux";

type PaginationProps = {
    baseUrl: string;
    start: number | string;
    perPage: number | string;
    total: number;
}
type PaginationState = {}
export function Pagination(props: PaginationProps, state: PaginationState) {
    const dispatch = useAppDispatch()
    let items = []
    const [total, per] = [useSelector(selectTotal), useSelector(selectPerPage)]
    const pages = Math.floor(total / per)
    for (let i = 0; i <= pages; i++) {
        items.push(i);
    }
    return (
        <nav aria-label="Page Pagination" className="mx-auto mt-5">
            <ul className="pagination justify-content-center">
                <li key="prev" className="page-item">
                    <button className="page-link" onClick={() => dispatch(prevPage(1))}>Previous</button>
                </li>
                {items.map(index => {
                    return (
                        <li key={index} className="page-item">
                            <button className="page-link" onClick={() => dispatch(setPage(index+1))}>{index + 1}</button>
                        </li>
                    )
                })}
                <li key="next" className="page-item">
                    <button className="page-link" onClick={() => dispatch(nextPage(2))}>Next</button>
                </li>
            </ul>
        </nav>
    )
}
