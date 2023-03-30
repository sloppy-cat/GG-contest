<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import jwt_decode from 'jwt-decode';
import { VueCookieNext } from 'vue-cookie-next';
import { useRouter } from 'vue-router';
const decodedToken: Ref<any> = ref({});

onMounted(() => {
  let cookie: string = VueCookieNext.getCookie('jwt');
  decodedToken.value = jwt_decode(cookie);
  console.log(decodedToken.value);
});
</script>

<template>
  <header>
    <div class="header-wrap">
      <div class="logo"></div>
      <nav>
        <ul class="nav-menu">
          <li class="active"><a href="">공지사항</a></li>
        </ul>
        <ul class="member-menu">
          <li>
            <span class="name">{{ decodedToken.userId }}</span
            >님
          </li>
          <li>
            <a href="/">
              <i class="bi bi-box-arrow-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
