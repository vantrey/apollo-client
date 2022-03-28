import { gql } from '@apollo/client';

export const GET_USER_POSTS = gql`
  query GetPosts($userId: String) {
    instagramPosts(userId: $userId) {
      description
      userId
      created_at
      geo {
        title
      }
    }
  }
`;

export const CREATE_POST_MUTATION = gql`
  mutation CreatePost($userId: String!, $data: CreateInstagramPostData!) {
    createInstagramPost(userId: $userId, data: $data) {
      description
      userId
      created_at
      geo {
        title
      }
    }
  }
`;