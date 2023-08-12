/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    categories: Category;
    layouts: Layout;
    media: Media;
    pages: Page;
    tags: Tag;
    users: User;
  };
  globals: {};
}
export interface Category {
  id: string;
  name?: string;
}
export interface Layout {
  id: string;
  name: string;
  description?: string;
  updatedAt: string;
  createdAt: string;
}
export interface Media {
  id: string;
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes?: {
    thumbnail?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    sixteenByNineMedium?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
}
export interface Page {
  id: string;
  title: string;
  slug: string;
  author?: string | User;
  publishedDate?: string;
  categories?: string[] | Category[];
  tags?: string[] | Tag[];
  status?: 'Draft' | 'Published';
  layout?: string | Layout;
  content?: {
    [k: string]: unknown;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface User {
  id: string;
  name?: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
export interface Tag {
  id: string;
  name?: string;
}
