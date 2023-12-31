import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Tailwind from "primevue/passthrough/tailwind";
import DialogService from 'primevue/dialogservice';
import ToastService from 'primevue/toastservice';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, { unstyled: true, pt: Tailwind });
app.use(DialogService);
app.use(ToastService);

app.mount('#app')
