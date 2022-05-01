export type ContactValues = {
  fullname: string;
  email: string;
  title: string;
  text: string;
  img: string;
};

export type Res = {
  status: number;
  msg: string;
  hikes?: object;
};

export type SlackValues = {
  userId: string;
  text: string;
  img: string;
};
