function Pagination({ totalCount, setPage, page, limit }) {
  const pageCount = Math.ceil(totalCount / limit);

  return (
    <>
      <button
        onClick={() => setPage((currentPage) => currentPage - 1)}
        disabled={page === 1}
      >
        Previous Page
      </button>
      <button
        onClick={() => setPage((currentPage) => currentPage + 1)}
        disabled={page === pageCount}
      >
        Next Page
      </button>
    </>
  );
}

export default Pagination;
