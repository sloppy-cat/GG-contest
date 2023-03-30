import Axios from 'axios';
import type { AxiosResponse, CancelTokenSource } from 'axios';
import type { ReqBodyLoginUser } from './types/User';
import type Notice from './types/Notice';
import type { ReqBodyCreateNotice, ReqBodyEditNotice, ResponseNoticeList } from './types/Notice';
import { ResponseBody } from './types/Util';

const dummyToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VySWQiOiJiZWFzdEBrdC5jb20iLCJzdWIiOiJ1c2VyIiwiaWF0IjoxNjgwMTQ3NzEzLCJleHAiOjE2ODAxNjU3MTN9.F5HyeWNDvfXzC7HpRnL8FE4zV2xdKZe9doNRBlB1sjE--TjZ90ThrdkSAuRF_WsAZAgLsX_BNkQ4VIr3jMRBv10yxmMr-lFQIR6aWk7hmN81S4Mi--vlYskUNPXRwDVBmP7DJjiEAjrQNX3RzHI1vT3na-i3t7feHj6smH-Bgk0sQ2nNVcyNUj4PNgA9WEPlpwRBSesqxxoimZIcKsnWyOwVm9eqPSggJ-0bJcO2ERjUp0NdCOtfeOy8ktwEIHKQlLv2hzwIT4IuAkolvbP5nBjBzYgItI0NmP9c0sjv3rKYsellBDczaAh2YzsYHgNoefrIJsoaz2qQPf3lEgmMLA';
const dummyList: ResponseNoticeList[] = [];
for (let i = 1; i <= 37; i++) {
  dummyList.push({
    id: `${i}`,
    title: '공지입니다',
    createTime: new Date(),
    createUser: `이진솔${i}`,
    content:
      '공지내용입니다공지내용입니다공지내용입니다공지내용입니다공지내용입니다공지내용입니다공지내용입니다공지내용입니다공지내용입니다공지내용입니다공지내용입니다공지내용입니다공지내용입니다공지내용입니다공지내용입니다공지내용입니다',
  });
}
export default class api {
  // 로그인
  async login(reqBodyLoginUser: ReqBodyLoginUser) {
    try {
      // response type 지정
      // const res = await Axios.post('/login', reqBodyLoginUser);
      // return Promise.resolve(res);
      //dummy
      console.log(reqBodyLoginUser);
      //dummy error
      if (reqBodyLoginUser.userId == 'fail') {
        return Promise.reject();
      }
      return Promise.resolve({ token: dummyToken });
    } catch (e: any) {
      return Promise.reject(e);
    }
  }

  // 공지사항 목록
  async getNoticeList(
    target?: string,
    value?: string
  ): Promise<ResponseBody<ResponseNoticeList[]>> {
    try {
      // const res = await Axios.get<ResponseNoticeList[]>('/notice');
      // return Promise.resolve(res);

      //dummy
      let dum: ResponseNoticeList[] = JSON.parse(JSON.stringify(dummyList));
      if (target != '' && value) {
        dum = dum.filter((notice) => {
          if (target === '전체') {
            return JSON.stringify(notice).includes(value);
          } else if (target === '제목') {
            return notice.title.includes(value);
          } else if (target === '작성자') {
            return notice.createUser.includes(value);
          } else if (target === '내용') {
            return notice.content.includes(value);
          }
        });
      }
      let resBody: ResponseBody<ResponseNoticeList[]> = {
        common: {
          code: 200,
          message: '성공이에요',
        },
        data: {
          value: dum,
          pagination: {
            page: 1,
            totalElements: dum.length,
            size: 10,
          },
        },
      };
      return Promise.resolve(resBody);
    } catch (e: any) {
      return Promise.reject(e);
    }
  }

  // 공지사항 상세
  async getNoticeDetail(noticeId: string) {
    try {
      const res = await Axios.get<Notice>('/noticeDetail', { params: { noticeId } });
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
