import { createStore } from 'redux';
import themes from '../styles/themes';

export interface IStore {
  user: Object,
  posts: Array<Object>;
  themes: Object;
  smallMode: boolean;
};

const INITIAL_STATE = {
  user: {
    _id: '123123',
    username: 'gusxmorais',
    fullname: 'Gustavo Morais',
    image: 'https://api.adorable.io/avatars/50/' + Math.random().toString() + '.png',
  },
  stories: [
    {
      _id: Math.random().toString(),
      user: {
        _id: Math.random().toString(),
        image: 'https://api.adorable.io/avatars/50/' + Math.random().toString() + '.png',
        username: 'Nome da pessoa ',
        fullname: 'Fulano da Silva',
      },
      image: 'https://picsum.photos/750',
    },
    {
      _id: Math.random().toString(),
      user: {
        _id: Math.random().toString(),
        image: 'https://api.adorable.io/avatars/50/' + Math.random().toString() + '.png',
        username: 'Nome da pessoa ',
        fullname: 'Fulano da Silva',
      },
      image: 'https://picsum.photos/751',
    },
    {
      _id: Math.random().toString(),
      user: {
        _id: Math.random().toString(),
        image: 'https://api.adorable.io/avatars/50/' + Math.random().toString() + '.png',
        username: 'Nome da pessoa ',
        fullname: 'Fulano da Silva',
      },
      image: 'https://picsum.photos/752',
    },
    {
      _id: Math.random().toString(),
      user: {
        _id: Math.random().toString(),
        image: 'https://api.adorable.io/avatars/50/' + Math.random().toString() + '.png',
        username: 'Nome da pessoa ',
        fullname: 'Fulano da Silva',
      },
      image: 'https://picsum.photos/753',
    },
    {
      _id: Math.random().toString(),
      user: {
        _id: Math.random().toString(),
        image: 'https://api.adorable.io/avatars/50/' + Math.random().toString() + '.png',
        username: 'Nome da pessoa ',
        fullname: 'Fulano da Silva',
      },
      image: 'https://picsum.photos/754',
    },
    {
      _id: Math.random().toString(),
      user: {
        _id: Math.random().toString(),
        image: 'https://api.adorable.io/avatars/50/' + Math.random().toString() + '.png',
        username: 'Nome da pessoa ',
        fullname: 'Fulano da Silva',
      },
      image: 'https://picsum.photos/754',
    },
  ],
  posts: [
    {
      _id: Math.random().toString(),
      user: {
        _id: Math.random().toString(),
        image: 'https://api.adorable.io/avatars/50/' + Math.random().toString() + '.png',
        username: 'Nome da pessoa ',
        fullname: 'Fulano da Silva',
      },
      date: Date.now(),
      image: 'https://picsum.photos/801',
      likes: [],
    },
    {
      _id: Math.random().toString(),
      user: {
        _id: Math.random().toString(),
        image: 'https://api.adorable.io/avatars/50/' + Math.random().toString() + '.png',
        username: 'Nome da pessoa ',
        fullname: 'Fulano da Silva',
      },
      date: Date.now(),
      image: 'https://picsum.photos/802',
      likes: [],
    },
    {
      _id: Math.random().toString(),
      user: {
        _id: Math.random().toString(),
        image: 'https://api.adorable.io/avatars/50/' + Math.random().toString() + '.png',
        username: 'Nome da pessoa ',
        fullname: 'Fulano da Silva',
      },
      date: Date.now(),
      image: 'https://picsum.photos/803',
      likes: [],
    },
    {
      _id: Math.random().toString(),
      user: {
        _id: Math.random().toString(),
        image: 'https://api.adorable.io/avatars/50/' + Math.random().toString() + '.png',
        username: 'Nome da pessoa ',
        fullname: 'Fulano da Silva',
      },
      date: Date.now(),
      image: 'https://picsum.photos/804',
      likes: [],
    },
    {
      _id: Math.random().toString(),
      user: {
        _id: Math.random().toString(),
        image: 'https://api.adorable.io/avatars/50/' + Math.random().toString() + '.png',
        username: 'Nome da pessoa ',
        fullname: 'Fulano da Silva',
      },
      date: Date.now(),
      image: 'https://picsum.photos/805',
      likes: [],
    },
  ],
  theme: localStorage.getItem('@reactgram/theme') ? localStorage.getItem('@reactgram/theme') : 'light',
  themes: themes,
  smallMode: false,
  activeStory: null,
};

const reducer = (prev: any, state: any) => {
  switch (state.type) {
    case 'SWITCH_THEME':
      localStorage.setItem('@reactgram/theme', prev.theme == 'light' ? 'dark' : 'light');
      return {
        ...prev,
        theme: prev.theme == 'light' ? 'dark' : 'light',
      };
    case 'SWITCH_STORY':
      return {
        ...prev,
        activeStory: { ...state }
      }
    default:
      return INITIAL_STATE;
  };
};

export default createStore(reducer);