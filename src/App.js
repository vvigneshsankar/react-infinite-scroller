import React, { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import NewsFeedPost from "./components/NewsFeedPost/index";
import SideBar from "./components/SideBar/index";
import NewsFeedCards from "./components/NewsFeedCards/index";
import SkeletonLoader from "./components/Skeleton/index";
import UserProfile from "./components/UserProfile";
import Header from "./components/Header";
import "./App.scss";

function App() {
  const [feed, setFeed] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const loadMoreRef = useRef(null);
  const [endOfFeed, setEndOfFeed] = useState(false);

  const fetchUserCards = async (pageNo) => {
    setLoading(true);
    let response = await axios.get(
      `https://api.unsplash.com/photos?page=${pageNo}&&client_id=4b93d1ba487be4e97a48a5872cfa8809e43a1c00a958f3d2da777e25f5aab6a2`
    );
    if (response.data?.length === 0) {
      setEndOfFeed(true);
    }
    setLoading(false);
    setFeed((prev) => [...prev, ...response.data]);
  };

  useEffect(() => {
    if (endOfFeed) {
      setTimeout(() => {
        setEndOfFeed(false);
      }, 3000);
    }
  }, [endOfFeed]);

  useEffect(() => {
    fetchUserCards(pageNumber);
  }, [pageNumber]);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPageNumber((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
  }, [handleObserver]);

  return (
    <>
      <Header />
      <div className="container">
        <UserProfile />
          <main>
            <NewsFeedPost />
            <NewsFeedCards feed={feed} />
            <div ref={loadMoreRef} />
            {loading && <SkeletonLoader />}
          </main>
        <SideBar />
        {endOfFeed && <div className="toast">End of feed!</div>}
      </div>
    </>
  );
}

export default App;
