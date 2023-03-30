import Axios, { AxiosRequestConfig } from 'axios';
import type { AxiosResponse, CancelTokenSource } from 'axios';
import type { ReqBodyLoginUser } from './types/User';
import type Notice from './types/Notice';
import type { ReqBodyCreateNotice, ReqBodyEditNotice, ResponseNoticeList } from './types/Notice';
import { ResponseBody } from './types/Util';

const dummyToken =
  'eyJ0eXBlIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJ1c2VyTm0iOiLstZzshJ3sm5AiLCJ1c2VySWQiOiJqZXJyeV9jaG9pQG5hdmVyLmNvbSJ9.S-PjCwqBxM16eA0k9JIlfSLITD1-byiaV57sBT7K-Hf1AwJX83KtSvMzQ8ECepWRWidvZPodDvlgMycM30PnCCjyzrXUPHzxNoom3HxtSjQMGce4CqRJU6UFyJLBdDVXNginf-9RVUNjbe5PI6iabK7g3sT88ekGzj7BrdsaXv0';
const dummyList: ResponseNoticeList[] = [];
for (let i = 1; i <= 37; i++) {
  dummyList.push({
    id: `${i}`,
    title: `${i}번 공지입니다`,
    cretDt: new Date(),
    cretId: `이진솔${i}`,
    content:
      '공지내용입니다공지내용입니다공지내용입니다공지내용입니다공지내용입니다공지내용입니다공지내용입니다공지내용입니다공지내용입니다공지내용입니다공지내용입니다공지내용입니다공지내용입니다공지내용입니다공지내용입니다공지내용입니다',
  });
}
export default class api {
  // 로그인
  async login(reqBodyLoginUser: ReqBodyLoginUser) {
    try {
      // response type 지정
      // const config: AxiosRequestConfig = {
      //   baseURL: 'http://127.0.0.1:8080',
      //   data: reqBodyLoginUser,
      // };

      // const res = await Axios.post('/google/v1/signIn', reqBodyLoginUser);
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
      const config: AxiosRequestConfig = { baseURL: 'http://127.0.0.1:8080' };
      const res = await Axios.get<ResponseBody<{ noticeList: ResponseNoticeList[] }>>(
        '/google/v1/getNoticeList',
        config
      );
      let dum = res.data.data.value.noticeList;
      console.log(res.data.data.value.noticeList);
      // return Promise.resolve(res);

      //dummy
      // let dum: ResponseNoticeList[] = JSON.parse(JSON.stringify(dummyList));

      if (target != '' && value) {
        dum = dum.filter((notice: ResponseNoticeList) => {
          if (target === '전체') {
            return JSON.stringify(notice).includes(value);
          } else if (target === '제목') {
            return notice.title.includes(value);
          } else if (target === '작성자') {
            return notice.cretId.includes(value);
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
  async getNoticeDetail(noticeId: string): Promise<ResponseBody<Notice>> {
    try {
      const config: AxiosRequestConfig = {
        baseURL: 'http://127.0.0.1:8080',
        params: { id: noticeId },
      };
      const res = await Axios.get<ResponseBody<any>>('/google/v1/getNoticeById', config);
      console.log(res);
      //dummy
      // let dum = dummyList.filter((notice) => {
      //   console.log(notice.id, noticeId);
      //   return notice.id == noticeId;
      // })[0];
      // console.log(dum);
      let dum = res.data.data.value;
      let resBody: ResponseBody<any> = {
        common: {
          code: 200,
          message: '성공이에요',
        },
        data: {
          value: {
            id: dum.id,
            title: dum.title,
            cretDt: dum.cretDt,
            cretId: dum.cretId,
            content: dum.contents,
            fileId: dum.fileId,
          },
          pagination: undefined,
        },
      };

      return Promise.resolve(resBody);
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

  // 파일가져오기
  async getFile(id: string) {
    try {
      const config: AxiosRequestConfig = {
        baseURL: 'http://127.0.0.1:8080',
        params: { id },
      };
      const res = await Axios.get<ResponseBody<any>>('/google/v1/getNoticeFile', config);
      console.log(res);
    } catch (e: any) {
      return Promise.reject(e);
    }
  }
}
