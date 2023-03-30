import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';

// import './style/bootstrap.css';
// import './style/bootstrap-vue-3.css';

import './style/reset.css';
import './style/common.css';
import './style/design.css';

const app = createApp(App);
// app.use(BootstrapVue3);
app.use(router);
