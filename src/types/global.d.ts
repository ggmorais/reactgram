declare interface IUser {
  fullname: string,
  username: string,
  image: string,
}

declare interface ILike {
  user: IUser;
  date: Date;
}

declare interface IPost {
  _id?: string;
  date: Date,
  user: IUser;
  image: string,
  likes: Array<IUser>;
}

declare interface IStorie {
  _id: string;
  user: IUser;
  image: string;
  date: string;
  onClick(): void;
};

declare interface IStore {
  user: IUser,
  posts: Array<IPost>;
  themes: Object;
  theme: string;
  activeStory: string | null;
  smallMode: boolean;
};