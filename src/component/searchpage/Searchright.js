"use client";
import React, { useState } from "react";
import SearchPagination from "./SearchPagination";
import ListPaginateView from "./ListView/ListPaginateView";

function Searchright() {
  const [viewPost, setViewPost] = useState("Grid")
  
  return (
    <div className="blg-right-part">
      <div>
        {
          viewPost === "Grid" ? 
          <SearchPagination itemsPerPage={9} viewPost={viewPost} setViewPost={setViewPost} className="blg_prdct_items"/>
          : <ListPaginateView  viewPost={viewPost} setViewPost={setViewPost}/>
        }
      </div>
    </div>
  );
}

export default Searchright;
