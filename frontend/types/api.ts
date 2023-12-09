export type Author = {
  name: string;
  image: string;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export type API = {
  _id: number;
  name: string;
  author: string;
  desc: string;
  price : number;
  mainImage?: any;
};
