import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function ArticlesSortBy({ setSortBy, currentSortBy = "created_at" }) {
  function handleChange(e) {
    setSortBy(e.target.value);
  }

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl>
        <InputLabel id="demo-simple-select-label"> Sort By:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className="sort-by-select-box"
          value={currentSortBy}
          label="Sort By"
          onChange={handleChange}
        >
          <MenuItem value={"created_at"}>Date</MenuItem>
          <MenuItem value={"comment_count"}>Comment Count</MenuItem>
          <MenuItem value={"votes"}>Votes</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default ArticlesSortBy;
