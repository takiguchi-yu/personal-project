export type ProjectType = {
  id: string;
  name: string;
  createdAt: Date;
  published: boolean;
  qiita: string | null;
  thumbnail: string;
  updatedAt: Date;
  url: string;
  zenn: string | null;
};
