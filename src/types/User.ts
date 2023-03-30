export default interface User {
  id: string;
  userNm: string;
  userId: string;
}

export interface ReqBodyLoginUser {
  userId: string;
  pwd: string;
}
