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

export type GetPostsQueryVariables = Types.Exact<{
  userId?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type GetPostsQuery = { __typename?: 'Query', instagramPosts: Array<{ __typename?: 'InstagramUserPost', description: string, userId: string, created_at: number, geo?: { __typename?: 'PostGeo', title: string } | null }> };

export type CreatePostMutationVariables = Types.Exact<{
  userId: Types.Scalars['String'];
  data: Types.CreateInstagramPostData;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createInstagramPost: { __typename?: 'InstagramUserPost', description: string, userId: string, created_at: number, geo?: { __typename?: 'PostGeo', title: string } | null } };


export const GetPostsDocument = gql`
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

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
      }
export function useGetPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
        }
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export type GetPostsQueryResult = Apollo.QueryResult<GetPostsQuery, GetPostsQueryVariables>;
export const CreatePostDocument = gql`
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
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;