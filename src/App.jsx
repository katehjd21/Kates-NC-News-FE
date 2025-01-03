import "./styling/App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import FetchArticles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import Error from "./components/Error";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<FetchArticles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route
          path="*"
          element={
            <Error
              message={"Oops! We couldn’t find the page you were looking for."}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
