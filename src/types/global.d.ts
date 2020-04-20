declare interface IUser {
  _id?: string | any;
  fullname?: string;
  username?: string;
  email?: string;
  creationDate?: Date;
  image?: string;
  imageUrl?: string;
  posts?: IPost[];
  marked?: IPost[];
  saved?: Array;
  marked?: Array;
  password?: string;
  followers?: Array;
  following?: Array;
  host?: string | any;
  string?: any;
}

declare interface IComment {
  user: IUser;
  body: string;
}

declare interface ILike {
  user: IUser;
  date: Date;
}

declare interface IPost {
  _id?: string;
  date: Date;
  user: IUser;
  image: string;
  imageUrl?: string;
  likes: IUser[];
  comments: IComment[]; 
  host?: string | any;
}

declare interface IStorie {
  _id: string;
  user: IUser;
  image: string;
  date: string;
  onClick(): void;
};

declare interface IStore {
  user: IUser;
  posts: Array<IPost>;
  themes: Object;
  theme: string;
  activeStory: string | null;
  smallMode: boolean;
};
