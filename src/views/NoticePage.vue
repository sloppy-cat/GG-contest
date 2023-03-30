<template>
  <div class="sub-layer">
    <CustomHeader />
    <!-- page  -->
    <section id="contents">
      <div id="sub-page">
        <div class="comp-wrap vertical-wrap">
          <div class="row">
            <div class="comp-left col-sm-3">
              <h1 class="h1-tit">공지사항</h1>
              <div class="menu-group gap-3">
                <ul class="list-menu">
                  <li class="active">
                    <i class="bi bi-box-seam"></i>
                    <a href="">목록</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="comp-right col-sm-9">
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
                <div class="search-wrap">
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          검색조건
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        class="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <div class="input-group">
                            <select
                              class="select form-select"
                              aria-label="Default select example"
                              @change="onChangeSearchOption"
                            >
                              <option selected>전체</option>
                              <option>제목</option>
                              <option>작성자</option>
                              <option>내용</option>
                            </select>
                            <input
                              type="text"
                              class="input form-control"
                              placeholder=""
                              aria-label=""
                              aria-describedby="button-addon2"
                              v-model="searchString"
                            />
                            <button
                              class="btn btn-secondary"
                              type="button"
                              id="button-addon2"
                              @click="onClickSearchButton"
                            >
                              <i class="bi bi-search"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-flex mt-5">
                  <h4 class="h4-tit mb-3 col">
                    Total : <span>{{ noticeList.length }}</span
                    >건
                  </h4>
                  <button class="sm-btn bg-blue" @click="$router.push({ name: 'notice-register' })">
                    <i class="bi bi-cursor-fill mx-1"></i>등록
                  </button>
                </div>
                <div class="tb-form">
                  <div
                    class="row"
                    v-for="(notice, index) in selectedList"
                    :key="index"
                    @click="router.push(`/notice-edit?noticeId=${notice.id}`)"
                  >
                    <div class="comp mx-3">
                      <div class="d-flex justify-content-between">
                        <h4 class="h4-tit">{{ notice.title }}</h4>
                      </div>
                      <p class="text-start text gap-5">
                        <small class="text-dark"
                          ><strong>Date :</strong
                          >{{ notice.createTime.toString().slice(0, 10) }}</small
                        >
                        <small class="text-dark"
                          ><strong>작성자 :</strong>{{ notice.createUser }}</small
                        >
                      </p>
                      <p class="text-start text">
                        {{ notice.content }}
                      </p>
                    </div>
                  </div>
                  <!-- <div class="row">
                    <div class="comp mx-3">
                      <div class="d-flex justify-content-between">
                        <h4 class="h4-tit">제목제목제목</h4>
                      </div>
                      <p class="text-start text gap-5">
                        <small class="text-dark"><strong>Date :</strong>2022-12-13</small>
                        <small class="text-dark"><strong>작성자 :</strong>도경수</small>
                      </p>
                      <p class="text-start text">
                        의뢰 내용 (2줄 정도).. 의뢰 내용 (2줄 정도) .. 의뢰 내용 (2줄 정도) 의뢰 내용 (2줄 정도) .. 의뢰
                        내용 (2줄 정도) .. 의뢰 내용 (2줄 정도)의뢰 내용 (2줄 정도).. 의뢰 내용 (2줄 정도) .. 의뢰 내용
                        (2줄 정도) 의뢰 내용 (2줄 정도) .. 의뢰 내용 (2줄 정도) .. 의뢰 내용 (2줄 정도)의뢰 내용 (2줄
                        정도).. 의뢰 내용 (2줄 정도) ..
                      </p>
                    </div>
                  </div> -->
                </div>
              </div>
              <div class="comp-footer">
                <div class="btn-group" role="group" aria-label="First group">
                  <button
                    v-for="(num, idx) in btList"
                    :key="idx"
                    type="button"
                    class="btn btn-outline-secondary"
                    @click="page = num + 1"
                    :style="{
                      backgroundColor: page == num + 1 ? 'gray' : 'white',
                      color: page == num + 1 ? 'white' : 'gray',
                    }"
                  >
                    {{ num + 1 }}
                  </button>
                </div>
              </div>
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
import { ref, type Ref, onMounted, computed } from 'vue';
import { ResponseNoticeList } from '../types/Notice';
import Api from '../api';
import { Pagination } from '../types/Util';
import CustomHeader from '../components/CustomHeader.vue';
import { useRouter } from 'vue-router';

const noticeList: Ref<ResponseNoticeList[]> = ref([]);
const pagination: Ref<Pagination | undefined> = ref({});
const searchOption = ref('전체');
const searchString = ref('');
const api = new Api();
const page = ref(1);
const router = useRouter();
onMounted(() => {
  fetchNoticeList();
});

// Notice List 호출 메소드
// onMounted 에서 호출해서 뿌려주기 (modal Progress)
// 등록버튼 클릭
const btList = computed(() => {
  return [...Array(Math.ceil((pagination.value?.totalElements ?? 0) / 10)).keys()];
});
const selectedList = computed(() => {
  return noticeList.value.slice((page.value - 1) * 10, page.value * 10);
});
const fetchNoticeList = async () => {
  const response = await api.getNoticeList(searchOption.value, searchString.value).then((r) => {
    console.log(r);
    noticeList.value = r.data.value;
    pagination.value = r.data.pagination;
  });
};

const onChangeSearchOption = (e: any) => {
  console.log(e.target.value);
  searchOption.value = e.target.value;
};

const onClickSearchButton = (e: any) => {
  console.log(searchString.value);
  fetchNoticeList();
};
</script>

<style scoped></style>
