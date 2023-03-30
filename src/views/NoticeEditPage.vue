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
                  <input type="text" class="input form-control" id="" />
                </div>
              </div>
              <div class="row">
                <label for="" class="col-sm-2 label">date</label>
                <div class="col-sm-10">
                  <span class="input-txt">2023-03-28</span>
                </div>
              </div>
              <div class="row">
                <label for="exampleFormControlTextarea1" class="col-sm-2 label">의뢰 내용</label>
                <div class="col-sm-10">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="8"
                  ></textarea>
                </div>
              </div>
              <div class="row">
                <label for="formFileMultiple" class="col-sm-2 label">첨부파일</label>
                <div class="col-sm-10">
                  <input class="form-control" type="file" id="formFileMultiple" multiple />
                  <div class="input-group gap-3">
                    <span class="input-txt">file uploadname01.png</span>
                    <span class="input-txt">file uploadname02.png</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="comp-footer">
            <div class="btn-wrap">
              <button class="md-btn bg-blue">수정</button>
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
import CustomHeader from '../components/CustomHeader.vue';
</script>

<style scoped></style>
