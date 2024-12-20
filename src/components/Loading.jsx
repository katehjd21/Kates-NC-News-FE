import CircularProgress from "@mui/material/CircularProgress";

function Loading({ message }) {
  return (
    <>
      <CircularProgress />
      <p>{message}</p>
    </>
  );
}

export default Loading;
