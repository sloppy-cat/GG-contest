<template>
  <div class="sub-layer">
    <div id="skipNavi">
      <a href="#contents">본문 바로가기</a>
    </div>
    <CustomHeader />
    <!-- page  -->
    <section id="contents">
      <div id="sub-page">
        <div class="comp-wrap">
          <div class="comp-header">
            <h1 class="h1-tit">공지사항</h1>
            <div class="direct-comp">
              <a href="">
                <i class="bi bi-house-door-fill"></i>
              </a>
              <span>
                <i class="bi bi-chevron-right"></i>
              </span>
              <a href="">공지사항</a>
            </div>
          </div>
          <div class="comp-contents">
            <div class="tb-form">
              <div class="row">
                <label for="" class="col-sm-2 label">제목</label>
                <div class="col-sm-10">
                  <input type="text" class="input form-control" v-model="reqCreateNotice.notice.title" />
                </div>
              </div>
              <div class="row">
                <label for="" class="col-sm-2 label">date</label>
                <div class="col-sm-10">
                  <span class="input-txt">{{ todayValue }}</span>
                </div>
              </div>
              <div class="row">
                <label for="exampleFormControlTextarea1" class="col-sm-2 label">의뢰 내용</label>
                <div class="col-sm-10">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="8"
                    v-model="reqCreateNotice.notice.content"></textarea>
                </div>
              </div>
              <div class="row">
                <label for="formFileMultiple" class="col-sm-2 label">첨부파일</label>
                <div class="col-sm-10">
                  <input
                    class="form-control"
                    type="file"
                    id="formFileMultiple"
                    multiple
                    @change="addFile"
                    v-show="attachFiles.length < 1" />
                  <div class="input-group gap-3">
                    <div v-for="(file, index) in attachFiles" :key="index">
                      <span class="input-txt">{{ file.name }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="comp-footer">
            <div class="btn-wrap">
              <button class="md-btn bg-blue" @click="createNotice()">저장</button>
              <button class="md-btn bg-border">취소</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- // page  -->
    <!-- footer begin  -->
    <footer>
      <div class="footer-wrap">
        <div class="footer-link">
          <div class="box">
            <a href="" target="_blank">개인정보처리방침</a>
            <a href="" target="_blank">이용약관</a>
            <a href="" target="_blank">FAQ</a>
            <a href="" target="_blank">문의</a>
          </div>
        </div>
      </div>
    </footer>
    <!-- //footer end  -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue';
import Notice, { ReqBodyCreateNotice } from '../types/Notice';
import Api from '../api';
import CustomHeader from '../components/CustomHeader.vue';
import jwt_decode from 'jwt-decode';
import { VueCookieNext } from 'vue-cookie-next';
import { useRouter } from 'vue-router';
import { continueStatement } from '@babel/types';

const decodedToken: Ref<any> = ref({});
const api = new Api();
const todayValue = ref();
const noticeDetail = ref<Notice>();
const router = useRouter();
let today = new Date();

const reqCreateNotice: Ref<ReqBodyCreateNotice> = ref({
  notice: {
    createUser: '',
    title: '',
    content: '',
  },
  files: [],
});

onMounted(() => {
  let cookie: string = VueCookieNext.getCookie('jwt');
  decodedToken.value = jwt_decode(cookie);
  console.log(decodedToken.value);

  // 오늘 날짜
  todayValue.value = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
});

const createNotice = () => {
  reqCreateNotice.value.notice.createUser = decodedToken.value.userId;

  const json = JSON.stringify(reqCreateNotice.value.notice);
  console.log(json);
  const blob = new Blob([json], { type: 'application/json' });
  const formData = new FormData();
  formData.append('notice', blob);
  // attachments

  if (attachFiles.value.length > 0) {
    reqCreateNotice.value.files = attachFiles.value;
  }

  if (reqCreateNotice.value.files != undefined) {
    for (let index = 0; index < reqCreateNotice.value.files.length; index++) {
      const element = reqCreateNotice.value.files[index];
      formData.append('file', element);
    }
  }
  console.log(formData.getAll('notice'));
  console.log(formData.getAll('file'));

  // if (reqCreateNotice.value.files != undefined) {
  //   for (let index = 0; index < reqCreateNotice.value.files.length; index++) {
  //     const element = reqCreateNotice.value.files[index];
  //     formData.append('file', element);
  //   }
  // }
  // 저장
  requestCreateNotice(formData);
};

const requestCreateNotice = async (param: FormData) => {
  const response = await api
    .registerNotice(param)
    .then(r => {
      console.log(r);
      router.push({
        name: 'notice',
      });
    })
    .catch(e => {
      console.log(e);
    });
};

// 파일 업로드
const attachFiles: Ref<File[]> = ref([]);
// const attachFiles = ref();
const addFile = (evt: Event) => {
  console.log('add ', evt);
  if (evt.target == null) {
    return;
  }
  let target: HTMLInputElement = evt.target as HTMLInputElement;

  if (target.files == null) {
    return;
  }

  if (target.files.length == 0) {
    return;
  }

  const files = target.files;
  console.log(files);
  if (files != null && files.length > 0) {
    if (files[0].size > 15000000) {
      const fileElement = document.getElementsByClassName(target.className)[0] as HTMLInputElement;
      target.value = '';
      fileElement.value = '';
      return;
    }
    let filesSize = 0;

    // if (element) {
    //   filesSize += element.size;
    // }
    // attachFiles.value = target.files;

    for (let index = 0; index < attachFiles.value.length; index++) {
      const element = attachFiles.value[index];
      filesSize += element.size;
    }
    if (filesSize + files[0].size > 15000000) {
      target.value = '';
      const fileElement = document.getElementsByClassName(target.className)[0] as HTMLInputElement;
      fileElement.value = '';
      return;
    }
    attachFiles.value = [...attachFiles.value, target.files[0]];
    // let fileList = target.files;
    // attachFiles.value = [...attachFiles.value];

    // for (let i = 0; i <= fileList.length; i++) {
    //   attachFiles.value.push(fileList.item(i) as File);
    // }

    const fileElement = document.getElementsByClassName(target.className)[0] as HTMLInputElement;
    fileElement.value = '';
    target.value = '';
  }
};
</script>

<style scoped></style>
