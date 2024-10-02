import React from 'react'
import ListPaginate from './ListPaginate'

function ListPaginateView({ viewPost, setViewPost}) {
  return (
    <div>
        <ListPaginate itemsPerPage={6}   viewPost={viewPost} setViewPost={setViewPost}/>
    </div>
  )
}

export default ListPaginateView
