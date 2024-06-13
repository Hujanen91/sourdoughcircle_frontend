import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import CategoryFilter from "../../components/CategoryFilter";
import Post from "./Post";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/images/search.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import PropTypes from 'prop-types';

function PostsPage({ message = "" }) {
  const [filter, setFilter] = useState("");
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

  PostsPage.propTypes = {
    message: PropTypes.string,
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const params = new URLSearchParams();
        if (filter) params.append('category', filter);
        if (query) params.append('search', query);

        let endpoint = "/posts/?";
        if (pathname === "/feed") {
          endpoint = "/followed-posts/?";
        } else if (pathname === "/liked") {
          endpoint = "/liked-posts/?";
        }

        const { data } = await axiosReq.get(`${endpoint}${params.toString()}`);
            setPosts({ ...data, results: data.results });
            setHasLoaded(true);
      } catch (err) {
        //console.error(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);

  return (
    <Row className="h-100">
      <h1 className={`col-12 col-lg-8 d-flex justify-content-center ${styles.Title}`}>The SourdoughCircle</h1>
      {pathname === "/feed" && (
        <h2 className={`col-12 col-lg-8 d-flex justify-content-center ${styles.FeedLiked}`}>
          Your followed users posts:
        </h2>
      )}
      {pathname === "/liked" && (
        <h2 className={`col-12 col-lg-8 d-flex justify-content-center ${styles.FeedLiked}`}>
          Your liked posts:
        </h2>
      )}
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        
          
         {pathname !== "/feed" && pathname !== "/liked" && (
          <>
            <i className={`fas fa-search ${styles.SearchIcon}`} />
            <Form
              className={styles.SearchBar}
              onSubmit={(event) => event.preventDefault()}
            >
              <Form.Control
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="text"
                className="mr-sm-2"
                placeholder="Search posts"
              />
            </Form>
          </>
        )}
        {pathname !== "/liked" && pathname !== "/feed" && <CategoryFilter mobile setFilter={setFilter} />}

        {hasLoaded ? (
          <>
            {posts.results.length ? (
              <InfiniteScroll
                dataLength={posts.results.length}
                loader={<Asset spinner />}
                hasMore={!!posts.next}
                next={() => fetchMoreData(posts, setPosts)}
              >
                {posts.results.map((post) => (
                  <Post key={post.id} {...post} setPosts={setPosts} />
                ))}
              </InfiniteScroll>
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default PostsPage;