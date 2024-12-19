import { useState, useEffect } from "react";
import { getTopics } from "../api";
import { useSearchParams } from "react-router-dom";
import Loading from "./Loading";
import Error from "./Error";

function TopicsDropdown() {
  const [topics, setTopics] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [hasError, setHasError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  function fetchTopics() {
    setIsLoading("Topics are loading...");
    getTopics()
      .then((topicsData) => {
        setTopics(topicsData);
        setIsLoading(null);
      })
      .catch((err) => {
        setHasError("Topics unavailable");
        setIsLoading(null);
      });
  }

  useEffect(() => {
    fetchTopics();
  }, []);

  const handleTopicClick = (slug) => {
    setSearchParams({ topic: slug });
    setDropdownVisible(false);
  };

  return (
    <div className="topics-dropdown">
      <button
        className="dropdown-btn"
        onClick={() => setDropdownVisible(!dropdownVisible)}
      >
        Topics
      </button>
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
              <button
                key={topic.slug}
                className="dropdown-item"
                onClick={() => handleTopicClick(topic.slug)}
              >
                {topic.slug}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default TopicsDropdown;
