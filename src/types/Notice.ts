export default interface Notice {
  id: string;
  title: string;
  cretDt: Date;
  cretId: string;
  content: string;
  fileId: string;
}
export interface CustomFile {
  id: string | undefined;
  fileNm: string;
  bytes: string;
  contsType: string;
  size: number;
}

export interface ReqBodyCreateNotice {
  notice: {
    createUser: string;
    title: string;
    content: string;
  };
  files: File[];
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
  cretDt: Date;
  cretId: string;
  content: string;
}
