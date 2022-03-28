import { gql } from '@apollo/client';

const USER_FIELDS_FRAGMENT = gql`
  fragment UserFieldsFragment on InstagramUserProfile {
    username
    userId
  }
`;

export const GET_INSTAGRAM_USER = gql`
  ${USER_FIELDS_FRAGMENT}
  query GetUser($userId: String!) {
    instagramUser(userId: $userId) {
      email
      postsCount
      ...UserFieldsFragment
    }
  }
`;

export const GET_ALL_INSTAGRAM_USERS = gql`
  ${USER_FIELDS_FRAGMENT}
  query GetAllUsers {
    instagramUsers {
      ...UserFieldsFragment
    }
  }
`;
