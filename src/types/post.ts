import { User } from './user';
import { Comment } from './comment';

export interface PostSummary {
  postId: number;
  title: string;
  content: string;
  author: User;
  hits: number;
  likeCount: number;
  commentCount: number;
  createdAt: string;
  updatedAt?: string;
}

export interface PostDetail extends PostSummary {
  postImageUrls: string[];
  comments: Comment[];
}
