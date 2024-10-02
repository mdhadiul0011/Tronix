"use client";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import SearchProduct from "./SearchProduct";
import { FaList } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6,
  7, 8, 9, 10, 11, 12, 13,
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, i) => (
          <div key={i}>
            <div>
              <SearchProduct />
            </div>
          </div>
        ))}
    </>
  );
}

function SearchPagination({ itemsPerPage, viewPost, setViewPost }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div>
      <div className="count_product">
        <div className="prdct_number">
          <p>
            Viewing {itemOffset + itemsPerPage} of {items.length} Product
          </p>
        </div>
        <div className="list_grid_part">
          <div
            className={`list ${viewPost === "List" ? "activeList" : "list"}`}
            onClick={() => setViewPost("List")}
          >
            <FaList />
          </div>
          <div
            className={`grid ${viewPost != "List" ? "activeList" : "grid"}`}
            onClick={() => setViewPost("Grid")}
          >
            <IoGridSharp />
          </div>
          <div>
            <div className="brnds_name">
              <span>Short by:</span>
              <select>
                <option>Newest Items</option>
                <option>Computer & Laptop</option>
                <option>Mobile</option>
                <option>TV</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="blg_prdct_items">
        <Items currentItems={currentItems} />
      </div>
      <ReactPaginate
        breakLabel="..."
        breakLinkClassName="page-link"
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
}

export default SearchPagination;
