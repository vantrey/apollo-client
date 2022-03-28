import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type CreateInstagramPostData = {
  city: Scalars['String'];
  country: Scalars['String'];
  description: Scalars['String'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
};

export type CreateInstagramUserData = {
  email: Scalars['String'];
  username: Scalars['String'];
};

/** instagram user photo */
export type Image = {
  __typename?: 'Image';
  height: Scalars['Float'];
  src: Scalars['String'];
  width: Scalars['Float'];
};

/** instagram user posts */
export type InstagramUserPost = {
  __typename?: 'InstagramUserPost';
  created_at: Scalars['Float'];
  description: Scalars['String'];
  geo?: Maybe<PostGeo>;
  likes: Array<PostLike>;
  photos?: Maybe<Array<PostPhoto>>;
  userId: Scalars['String'];
};

/** instagram user profile */
export type InstagramUserProfile = {
  __typename?: 'InstagramUserProfile';
  bio: Scalars['String'];
  created_at: Scalars['Float'];
  email: Scalars['String'];
  followersCount: Scalars['Float'];
  followingCount: Scalars['Float'];
  gender: Scalars['String'];
  phone: Scalars['String'];
  photos?: Maybe<Array<Image>>;
  posts: Array<InstagramUserPost>;
  postsCount: Scalars['Float'];
  userId: Scalars['String'];
  username: Scalars['String'];
  website: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createInstagramPost: InstagramUserPost;
  createInstagramUser: InstagramUserProfile;
  uploadFile: Scalars['Boolean'];
};


export type MutationCreateInstagramPostArgs = {
  data: CreateInstagramPostData;
  userId: Scalars['String'];
};


export type MutationCreateInstagramUserArgs = {
  data: CreateInstagramUserData;
};


export type MutationUploadFileArgs = {
  file?: InputMaybe<Scalars['Upload']>;
};

/** user post geo */
export type PostGeo = {
  __typename?: 'PostGeo';
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  title: Scalars['String'];
};

/** user post like */
export type PostLike = {
  __typename?: 'PostLike';
  created_at: Scalars['DateTime'];
  userId: Scalars['String'];
};

/** instagram user photo */
export type PostPhoto = {
  __typename?: 'PostPhoto';
  image: Image;
  taggedUsers: Array<PostTaggedUser>;
};

/** post tagged user */
export type PostTaggedUser = {
  __typename?: 'PostTaggedUser';
  userId: Scalars['String'];
  username: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  instagramPosts: Array<InstagramUserPost>;
  instagramUser?: Maybe<InstagramUserProfile>;
  instagramUsers: Array<InstagramUserProfile>;
};


export type QueryInstagramPostsArgs = {
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryInstagramUserArgs = {
  userId: Scalars['String'];
};

export type GetUserQueryVariables = Types.Exact<{
  userId: Types.Scalars['String'];
}>;


export type GetUserQuery = { __typename?: 'Query', instagramUser?: { __typename?: 'InstagramUserProfile', email: string, username: string, userId: string, postsCount: number } | null };

export type GetAllUsersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', instagramUsers: Array<{ __typename?: 'InstagramUserProfile', username: string, userId: string }> };


export const GetUserDocument = gql`
    query GetUser($userId: String!) {
  instagramUser(userId: $userId) {
    email
    username
    userId
    postsCount
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetAllUsersDocument = gql`
    query GetAllUsers {
  instagramUsers {
    username
    userId
  }
}
    `;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;