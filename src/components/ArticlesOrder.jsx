function ArticlesOrder({ setSortOrder }) {
  return (
    <>
      <button className="order-btn" onClick={() => setSortOrder("asc")}>
        Ascending
      </button>
      <button className="order-btn" onClick={() => setSortOrder("desc")}>
        Descending
      </button>
    </>
  );
}

export default ArticlesOrder;
