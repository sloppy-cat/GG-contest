import Axios from 'axios';
import type { AxiosResponse, CancelTokenSource } from 'axios';
import type { ReqBodyLoginUser } from './types/User';
import type Notice from './types/Notice';
import type { ReqBodyCreateNotice, ReqBodyEditNotice, ResponseNoticeList, ResponseNoticeDetail } from './types/Notice';

export default class api {
  // 로그인
  async login(reqBodyLoginUser: ReqBodyLoginUser) {
    try {
      // todo: response type 지정
      const res = await Axios.post('/login', reqBodyLoginUser);
      return Promise.resolve(res);
    } catch (e: any) {
      return Promise.reject(e);
    }
  }

  // 공지사항 목록
  async getNoticeList() {
    try {
      const res = await Axios.get<ResponseNoticeList>('/notice');
      return Promise.resolve(res);
    } catch (e: any) {
      return Promise.reject(e);
    }
  }

  // 공지사항 상세
  async getNoticeDetail(noticeId: any) {
    try {
      const res = await Axios.get<Notice>('/noticeDetail', noticeId);
      return Promise.resolve(res);
    } catch (e: any) {
      return Promise.reject(e);
    }
  }

  // 공지사항 등록
  async registerNotice(queryParam: FormData) {
    try {
      const res = await Axios.post('/registerNotice', queryParam);
      return Promise.resolve(res);
    } catch (e: any) {
      return Promise.reject(e);
    }
  }

  // 공지사항 수정
  async modifyNotice(queryParam: FormData) {
    try {
      const res = await Axios.post('/modifyNotice', queryParam);
    } catch (e: any) {
      return Promise.reject(e);
    }
  }
}
