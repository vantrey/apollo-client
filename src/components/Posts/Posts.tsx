import React, { FC } from 'react';
import { useLazyQuery } from '@apollo/client';
import Loading from '../Atoms/Loading';
import ErrorMessage from '../Atoms/ErrorMessage';
import CreatePost from '../CreatePost';
import { GET_USER_POSTS } from '../../queries/posts';
import {
  GetPostsQuery,
  GetPostsQueryVariables,
  useGetPostsLazyQuery,
} from '../../queries/posts.generated';

interface IPosts {
  userId: string;
}

const Posts: FC<IPosts> = ({ userId }) => {
  const [getPosts, { data, error, loading }] = useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(
    GET_USER_POSTS
  );

  //const [getPosts, { data, error, loading }] = useGetPostsLazyQuery();

  const posts = data?.instagramPosts;

  const onViewPosts = async () => {
    await getPosts({ variables: { userId } });
  };

  return (
    <>
      <div style={{ paddingBottom: '10px' }}>
        <button onClick={onViewPosts}>view posts</button>
      </div>
      <Loading isLoading={loading} />
      <ErrorMessage errorMessage={error?.message} />
      {!!posts?.length && (
        <>
          POSTS:
          {posts?.map((post) => (
            <div style={{ padding: '10px 10px' }} key={post.created_at}>
              <div style={{ color: 'olivedrab' }}>
                date: {`${new Date(post.created_at).toDateString()}`}
              </div>
              <div>description: {post.description}</div>
              {post.geo?.title && <div>location: {post.geo.title}</div>}
            </div>
          ))}
        </>
      )}
      {posts?.length === 0 && (
        <div style={{ paddingTop: '10px', marginBottom: '10px' }}>NO POSTS YET</div>
      )}
      <CreatePost userId={userId} />
    </>
  );
};

export default Posts;
