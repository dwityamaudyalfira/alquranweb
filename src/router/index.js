import {createRouter, createWebHistory} from "vue-router";
import Home from '../views/Home.vue';
import Surah from "../views/Surah.vue";
import QuranView from "../views/QuranView.vue";
import Contact from "../views/Contact.vue";
import AlFatihah from "../views/surah/AlFatihah.vue";
import AnnasView from "../views/surah/AnnasView.vue";

const DEFAULT_TITLE = 'Quran.com by Dwitya Maudy Alfira';
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/surah',
    name: 'surah',
    component: Surah,
    meta: {
      title: 'Surah'
    }
  },
  {
    path: '/quran',
    name: 'quran',
    component: QuranView,
    meta: {
      title: 'Quran'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: {
      title: 'Contact'
    }
  },

  {
    path: '/alfatihah',
    name: 'alfatihah',
    component: AlFatihah,
    meta: {
      title: 'Al-Fatihah'
    }
  },

  {
    path: '/annas',
    name: 'annas',
    component: AnnasView,
    meta: {
      title: 'Surah Annas'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

router.afterEach((to, from, next) => {
  const metaTitle = to.meta.title;
  if(metaTitle){
    document.title = metaTitle+" - "+DEFAULT_TITLE;
  }else{
    document.title = DEFAULT_TITLE;
  }
})


export default router