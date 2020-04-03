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
      date: Date.now(),
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
      date: Date.now(),
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
      date: Date.now(),
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
      date: Date.now(),
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
      date: Date.now(),
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
      date: Date.now(),
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
  smallMode: false,
  activeStory: null,
};

export default INITIAL_STATE;