import React from 'react'

function Pagination() {
    return (
        <ul className="pagination home-product--pagination">
            <li className="pagination-item">
                <a href="/" className="pagination-item-link">
                    <i className="pagination-item-icon fas fa-chevron-left"></i>
                </a>
            </li>
            <li className="pagination-item pagination-item--active">
                <a href="/" className="pagination-item-link ">1</a>
            </li>
            <li className="pagination-item">
                <a href="/" className="pagination-item-link">2</a>
            </li>
            <li className="pagination-item">
                <a href="/" className="pagination-item-link">3</a>
            </li>
            <li className="pagination-item">
                <a href="/" className="pagination-item-link">4</a>
            </li>
            <li className="pagination-item">
                <a href="/" className="pagination-item-link">5</a>
            </li>
            <li className="pagination-item">
                <a href="/" className="pagination-item-link">...</a>
            </li>
            <li className="pagination-item">
                <a href="/" className="pagination-item-link">21</a>
            </li>
            <li className="pagination-item">
                <a href="/" className="pagination-item-link">22</a>
            </li>
            <li className="pagination-item">
                <a href="/" className="pagination-item-link">
                    <i className="pagination-item-icon fas fa-chevron-right"></i>
                </a>
            </li>
        </ul>
    )
}

export default Pagination
