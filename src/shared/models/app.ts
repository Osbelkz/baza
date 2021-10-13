import { createEvent, createStore, createEffect, sample } from "effector";

const toggleIsAuth = createEvent<{ isUserAuth: boolean }>();

// const getCommentsFx = createEffect(async (postId) => {
//   const url = `posts/${postId}/comments`;
//   const base = "https://jsonplaceholder.typicode.com";
//   const req = await fetch(`${base}/${url}`);
//   return req.json();
// });

export const $app = createStore({ isUserAuth: false }).on(
  toggleIsAuth,
  (state, { isUserAuth }) => ({ ...state, isUserAuth })
);
