export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
