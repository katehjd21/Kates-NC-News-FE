import CircularProgress from "@mui/material/CircularProgress";

function Loading({ message }) {
  return (
    <div>
      <CircularProgress />
      <p>{message}</p>
    </div>
  );
}

export default Loading;
