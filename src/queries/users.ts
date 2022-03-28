import { gql } from '@apollo/client';

export const GET_INSTAGRAM_USER = gql`
  query GetUser($userId: String!) {
    instagramUser(userId: $userId) {
      email
      username
      userId
      postsCount
    }
  }
`;

export const GET_ALL_INSTAGRAM_USERS = gql`
  query GetAllUsers {
    instagramUsers {
      username
      userId
    }
  }
`;
