<template>
  <!-- page  -->
  <section id="contents">
    <div id="sub-page">
      <div class="login-wrap">
        <h1 class="h1-tit text-center mb-5">Login</h1>

        <div class="login-comp">
          <label class="label">회원ID (이메일)</label>
          <input class="input" placeholder="아이디 입력" />
        </div>

        <div class="login-comp">
          <label class="label">비밀번호</label>
          <input class="input" placeholder="비밀번호 입력" />
        </div>

        <div class="btn-wrap login-comp mb-5">
          <button class="lg-btn bg-blue">로그인</button>
          <button class="lg-btn bg-border">회원가입</button>
        </div>

        <div class="login-comp">
          <p class="txt">아이디/비밀번호가 생각나지 않으세요?</p>

          <div class="box">
            <a class="link">아이디 찾기</a>
            <a class="link">비밀번호 찾기</a>
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
</template>

<script setup lang="ts"></script>

<style scoped></style>
