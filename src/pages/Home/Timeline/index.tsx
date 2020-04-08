import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import { Post } from './Post';
import { Container } from './style';
import api from '../../../services/api';
import NewPost from './NewPost';

export default function Timeline() {

  const state = useSelector((state: IStore) => state);

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    if (total > 0 && total === posts.length || loading) {
      return;
    }

    setLoading(true);

    try {
      const res = await api.get('/posts/following/' + state.user.username + '?page=' + page);
      const data: [] = res.data;

      setPage(page + 1);
      setPosts([...posts, ...data]);
      setLoading(false);
      setTotal(res.headers['x-total-count']);

    } catch (err) { console.log(err) }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Container>
      <NewPost />
      
      <InfiniteScroll
        loadMore={fetchPosts}
        hasMore={(total > 0 && total == posts.length) ? false : true}
        threshold={1000} 
      >
        {posts && posts.map((post: IPost) => (
          <Post 
            key={post._id}
            _id={post._id}
            user={post.user}
            image={post.image}
            likes={post.likes}
            date={post.date}
            comments={post.comments}
          />
        ))}
      </InfiniteScroll>
    </Container>
  );
};