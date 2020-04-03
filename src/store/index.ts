import { createStore } from 'redux';

import api from '../services/api';

import themes from '../styles/themes';

const user = JSON.parse(localStorage.getItem('auth') || '');

const fetchPosts = async (page: any) => {

  try {
    const posts = await api.get('/posts/following/' + user.username + '?page=' + page + 1)

    return posts.data;

  } catch(err) {}
}

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('auth') || ''),
  stories: [],
  posts: [],
  theme: localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light',
  themes: themes,
  smallMode: false,
  activeStory: null,
};

const reducer = (prev: any, state: any) => {
  switch (state.type) {
    case 'SWITCH_THEME':
      localStorage.setItem('theme', prev.theme == 'light' ? 'dark' : 'light');

      return {
        ...prev,
        theme: prev.theme == 'light' ? 'dark' : 'light',
      };
    case 'SWITCH_STORY':
      return {
        ...prev,
        activeStory: state.pos
      }
    case 'FETCH_POSTS':
      return {
        ...prev,
        page: prev.page + 1,
        posts: fetchPosts(prev.page)
      }
    default:
      return INITIAL_STATE;
  }; 
};

export default createStore(reducer);