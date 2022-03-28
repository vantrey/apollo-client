import React, { FC } from 'react';
import { useQuery } from '@apollo/client';

import { NavLink } from 'react-router-dom';
import Loading from '../../components/Atoms/Loading';
import ErrorMessage from '../../components/Atoms/ErrorMessage';
import { GET_ALL_INSTAGRAM_USERS } from '../../queries/users';
import { GetAllUsersQuery } from '../../queries/users.generated';


const Users: FC = () => {
  const { loading, error, data } =
    useQuery<GetAllUsersQuery>(GET_ALL_INSTAGRAM_USERS);
  const users = data?.instagramUsers;

  return (
    <>
      <Loading isLoading={loading} />
      <ErrorMessage errorMessage={error?.message} />

      {users && (
        <>
          USERS:
          <ul>
            {users.map((user, index) => (
              <li key={user.userId} style={{ listStyleType: 'none', paddingBottom: '5px' }}>
                <NavLink to={`${user.userId}`}>Name: {user.username || `empty ${index}`}</NavLink>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Users;
