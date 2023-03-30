<template>
  <div class="login-layer">
    <!-- page  -->
    <section id="contents">
      <div id="sub-page">
        <div class="login-wrap">
          <h1 class="h1-tit text-center mb-5">Login</h1>
          <div class="login-comp">
            <label class="label">회원ID (이메일)</label>
            <input
              class="input"
              type="text"
              v-model="reqBodyLoginUser.userId"
              placeholder="아이디 입력"
            />
          </div>
          <div class="login-comp">
            <label class="label">비밀번호</label>
            <input
              type="password"
              class="input"
              v-model="reqBodyLoginUser.pwd"
              placeholder="비밀번호 입력"
              @keyup.enter="login"
            />
          </div>
          <div class="btn-wrap login-comp mb-5">
            <button class="lg-btn bg-blue" @click="login">로그인</button>
          </div>
        </div>
      </div>
    </section>
    <!-- // page  -->
    <!-- footer begin  -->
    <!-- //footer end  -->
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import api from '../api';
import { ReqBodyLoginUser } from '../types/User';
import jwt_decode from 'jwt-decode';
import { VueCookieNext } from 'vue-cookie-next';
import { useRouter } from 'vue-router';
const useApi = new api();
const reqBodyLoginUser: Ref<ReqBodyLoginUser> = ref({
  userId: '',
  pwd: '',
});

const router = useRouter();

function getDecodedAccessToken<T>(token: string) {
  return jwt_decode<T>(token);
}

async function login() {
  console.log(reqBodyLoginUser);
  useApi
    .login(reqBodyLoginUser.value)
    .then((res) => {
      // alert(
      //   `id: ${reqBodyLoginUser.value.userId} , pwd: ${reqBodyLoginUser.value.pwd} 로 로그인합니다 감사합니다`
      // );
      console.log(getDecodedAccessToken(res.token));
      let tmpDate = new Date();
      tmpDate.setFullYear(2099);

      VueCookieNext.setCookie('jwt', res.token, {
        expire: tmpDate.toUTCString(),
      });

      router.push('/notice');
    })
    .catch((e: any) => {
      alert('입력하신 정보를 확인해 주세요.');
      reqBodyLoginUser.value.pwd = '';
      reqBodyLoginUser.value.userId = '';
    });
}
</script>

<style scoped></style>
