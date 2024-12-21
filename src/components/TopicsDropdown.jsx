import { useState, useEffect } from "react";
import { getTopics } from "../utils/api";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import Error from "./Error";

function TopicsDropdown() {
  const [topics, setTopics] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [hasError, setHasError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  function fetchTopics() {
    setIsLoading("Topics are loading...");
    getTopics()
      .then((topicsData) => {
        setTopics(topicsData);
        setIsLoading(null);
      })
      .catch(() => {
        setHasError("Topics unavailable");
        setIsLoading(null);
      });
  }

  useEffect(() => {
    fetchTopics();
  }, []);

  return (
    <div className="topics-dropdown">
      <Link
        to={"/"}
        className="dropdown-btn, links-text"
        onClick={() => setDropdownVisible(!dropdownVisible)}
      >
        Topics
      </Link>
      {dropdownVisible && (
        <div className="dropdown-content">
          {isLoading ? (
            <Loading message={isLoading} />
          ) : hasError ? (
            <div>
              <Error message={hasError} />
              <button onClick={fetchTopics}>Retry</button>
            </div>
          ) : (
            topics.map((topic) => (
              <Link
                key={topic.slug}
                className="dropdown-item"
                to={`/?topic=${topic.slug}`} //
                onClick={() => setDropdownVisible(false)} //
              >
                {topic.slug}
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default TopicsDropdown;
