import Axios from 'axios';
import type { AxiosResponse, CancelTokenSource } from 'axios';
import type { ReqBodyLoginUser } from './types/User';
import type Notice from './types/Notice';
import type { ReqBodyCreateNotice, ReqBodyEditNotice } from './types/Notice';

export default class api {
  async login(reqBodyLoginUser: ReqBodyLoginUser) {
    try {
      // response type 지정
      const res = await Axios.post('/login', reqBodyLoginUser);
      return Promise.resolve(res);
    } catch (e: any) {
      return Promise.reject(e);
    }
  }

  async getNoticeList(noticeList: Notice) {
    try {
      const res = await Axios.get('notice');
    } catch (e: any) {
      return Promise.reject(e);
    }
  }

  //   async registerNotice(reqBodyCreateNotice: ReqBodyCreateNotice) {
  //     try {
  //         const res = await Axios.post()
  //     }
  //   }

  //   async getNoticeEdit();
}
