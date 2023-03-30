export default interface Notice {
  id: string;
  createTime: Date;
  createUser: string;
  content: string;
  files: CustomFile[];
}

export interface CustomFile {
  id: string;
  fileNm: string;
  bytes: string;
  contsType: string;
  size: number;
}
