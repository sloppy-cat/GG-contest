import Axios from 'axios';
import type { AxiosResponse, CancelTokenSource } from 'axios';
import type { ReqBodyLoginUser } from './types/User';
import type Notice from './types/Notice';
import type { ReqBodyCreateNotice, ReqBodyEditNotice, ResponseNoticeList, ResponseNoticeDetail } from './types/Notice';

const dummyToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VySWQiOiJiZWFzdEBrdC5jb20iLCJzdWIiOiJ1c2VyIiwiaWF0IjoxNjgwMTQ3NzEzLCJleHAiOjE2ODAxNjU3MTN9.F5HyeWNDvfXzC7HpRnL8FE4zV2xdKZe9doNRBlB1sjE--TjZ90ThrdkSAuRF_WsAZAgLsX_BNkQ4VIr3jMRBv10yxmMr-lFQIR6aWk7hmN81S4Mi--vlYskUNPXRwDVBmP7DJjiEAjrQNX3RzHI1vT3na-i3t7feHj6smH-Bgk0sQ2nNVcyNUj4PNgA9WEPlpwRBSesqxxoimZIcKsnWyOwVm9eqPSggJ-0bJcO2ERjUp0NdCOtfeOy8ktwEIHKQlLv2hzwIT4IuAkolvbP5nBjBzYgItI0NmP9c0sjv3rKYsellBDczaAh2YzsYHgNoefrIJsoaz2qQPf3lEgmMLA';
export default class api {
  // 로그인
  async login(reqBodyLoginUser: ReqBodyLoginUser) {
    try {
      // response type 지정
      // const res = await Axios.post('/login', reqBodyLoginUser);
      // return Promise.resolve(res);
      console.log(reqBodyLoginUser);
      //dummy
      alert(`id: ${reqBodyLoginUser.userId} , pwd: ${reqBodyLoginUser.pwd} 로 로그인합니다 감사합니다`);

      return Promise.resolve({ token: dummyToken });
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
