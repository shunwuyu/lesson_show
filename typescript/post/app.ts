'use strict';

enum PostStatus {
  Unpublished,
  Published,
  Draft
}

interface Post {
  title: string;
  content?: string;
  status: PostStatus;
}

let post: Post = {
  title: 'One Day',
  status: PostStatus.Unpublished
}

console.log(post);
console.log(PostStatus[0]);