import React, { FC } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import Loading from '../../components/Atoms/Loading';
import ErrorMessage from '../../components/Atoms/ErrorMessage';
import { useParams } from 'react-router-dom';
import Posts from '../../components/Posts/Posts';
import { GET_INSTAGRAM_USER } from '../../queries/users';
import { GetUserQuery, GetUserQueryVariables } from '../../queries/users.generated';

const User: FC = () => {
  const { id } = useParams();

  const { loading, error, data, refetch } = useQuery<GetUserQuery, GetUserQueryVariables>(
    GET_INSTAGRAM_USER,
    {
      variables: { userId: id || '' },
      //pollInterval: 1000,
      //fetchPolicy: 'cache-and-network'
    }
  );
  const user = data?.instagramUser;

  const onRefetch = async () => {
    const response = await refetch(/*{ userId: '623aea90a3b3e16574e5e199' }*/);
    console.log('on refetch', response.data.instagramUser?.userId);
  };

  return (
    <>
      <Loading isLoading={loading} />
      <ErrorMessage errorMessage={error?.message} />
      {user && (
        <>
          <div style={{ listStyleType: 'none', paddingBottom: '5px' }}>name: {user.username}</div>
          <div style={{ listStyleType: 'none', paddingBottom: '5px' }}>email: {user.email}</div>
          <div style={{ listStyleType: 'none', paddingBottom: '30px' }}>
            postCount: {user.postsCount}
          </div>
        </>
      )}
      <button onClick={onRefetch}>refetch</button>
      <div style={{ paddingTop: '20px' }}>{<Posts userId={id || ''} />}</div>
    </>
  );
};

export default User;
