import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/LoginPage.vue'),
    },
    {
      path: '/notice',
      name: 'notice',
      component: () => import('../views/NoticePage.vue'),
    },
    {
      path: '/notice-register',
      name: 'notice-register',
      component: () => import('../views/NoticeRegisterPage.vue'),
    },
    {
      path: '/notice-edit',
      name: 'notice-edit',
      component: () => import('../views/NoticeEditPage.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0 };
  },
});

export default router;
