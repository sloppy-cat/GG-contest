export default interface Notice {
  id: string;
  title: string;
  createTime: Date;
  createUser: string;
  content: string;
  files: CustomFile[];
}
export interface CustomFile {
  id: string | undefined;
  fileNm: string;
  bytes: string;
  contsType: string;
  size: number;
}

export interface ReqBodyCreateNotice {
  createUser: string;
  title: string;
  content: string;
  files: CustomFile[];
}

export interface ReqBodyEditNotice {
  id: string;
  title: string;
  createUser: string;
  content: string;
  files: CustomFile[];
}

export interface ResponseNoticeList {
  id: string;
  title: string;
  createTime: Date;
  createUser: string;
  content: string;
}
