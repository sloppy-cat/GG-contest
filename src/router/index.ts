import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/',
      component: () => import('../views/LoginPage.vue'),
      children: [
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
        //     {
        //       path: OPENAPI,
        //       name: 'open-api',
        //       component: () => import('@/views/home/OpenApi.vue'),
        //     },
        //     {
        //       path: LOGIN,
        //       name: 'login',
        //       meta: { isNotAuth: true },
        //       component: () => import('@/views/login/LoginPage.vue'),
        //     },
        //     {
        //       path: SIGNUP,
        //       name: 'signUp',
        //       redirect: SIGNUP + '/stplt',
        //       meta: { isNotAuth: true },

        //       component: () => import('@/views/login/sign-up/SignUpPage.vue'),
        //       children: [
        //         {
        //           path: SIGNUP + '/stplt',
        //           name: 'signUpStplt',
        //           meta: { isNotAuth: true },

        //           component: () => import('@/views/login/sign-up/term/StpltPage.vue'),
        //         },
        //         {
        //           path: SIGNUP + '/register',
        //           name: 'signUpRegister',
        //           meta: { isNotAuth: true },

        //           component: () => import('@/views/login/sign-up/register/RegisterPage.vue'),
        //         },
        //         {
        //           path: SIGNUP + '/complete',
        //           name: 'signUpComplete',
        //           meta: { isNotAuth: true },

        //           component: () => import('@/views/login/sign-up/complete/CompletePage.vue'),
        //         },
        //       ],
        //     },
        //     {
        //       path: '/main',
        //       name: 'main',
        //       component: () => import('@/views/main/MainPage.vue'),
        //       children: [
        //         {
        //           path: DASHBOARD,
        //           name: 'dashBoard',
        //           meta: { isAuth: true },
        //           component: () => import('@/views/main/dash-board/DashBoardPage.vue'),
        //         },
        //         // System
        //         {
        //           path: MANAGEMENT + SYSTEM,
        //           name: 'system',
        //           meta: { isAuth: true },
        //           component: () => import('@/views/main/system-mngt/SystemPage.vue'),
        //         },
        //         {
        //           path: MANAGEMENT + SYSTEM + '/register',
        //           name: 'system-register',
        //           component: () => import('@/views/main/system-mngt/register/SystemRegisterPage.vue'),
        //         },
        //       ],
        //     },
        //     {
        //       path: '/:pathMatch(.*)',
        //       component: () => import('@/views/notfound/NotFound.vue'),
        //     },
        //     {
        //       path: '/license',
        //       name: 'license',
        //       component: () => import('@/views/license/License.vue'),
        //     },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0 };
  },
});

export default router;
