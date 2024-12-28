import { Button } from "@mui/material";

function ArticlesOrder({ setSortOrder }) {
  return (
    <>
      <Button
        className="order-btn"
        variant="contained"
        onClick={() => setSortOrder("asc")}
      >
        Ascending
      </Button>
      <Button
        className="order-btn"
        variant="contained"
        onClick={() => setSortOrder("desc")}
      >
        Descending
      </Button>
    </>
  );
}

export default ArticlesOrder;
