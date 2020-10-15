import React from 'react';
import { useSelector } from 'react-redux'; 
import { setPosts } from '../../store/actions/actions';
import { wrapper } from '../../store/store';

const Posts = () => {
  const posts = useSelector(({ posts }) => posts.posts);

  return (
    <>
      <h1>Posts Page</h1>
      <ul>
        {
          posts.map(post => <li key={post.title}>{post.title}</li>)
        }
      </ul>
    </>
  )
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  let res = await fetch('https://jsonplaceholder.typicode.com/posts'); 
  let posts = await res.json();

  store.dispatch(setPosts(posts));
})

export default Posts
