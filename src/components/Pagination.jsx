import { Button } from "@mui/material";

function Pagination({ totalCount, setPage, page, limit }) {
  const pageCount = Math.ceil(totalCount / limit);

  return (
    <>
      <Button
        variant="contained"
        className="page-button"
        onClick={() => setPage((currentPage) => currentPage - 1)}
        disabled={page === 1}
      >
        Previous Page
      </Button>
      <Button
        variant="contained"
        className="page-button"
        onClick={() => setPage((currentPage) => currentPage + 1)}
        disabled={page === pageCount}
      >
        Next Page
      </Button>
    </>
  );
}

export default Pagination;
