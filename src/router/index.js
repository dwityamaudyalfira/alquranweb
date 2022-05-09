import {createRouter, createWebHistory} from "vue-router";
import Home from '../views/Home.vue';
import Surah from "../views/Surah.vue";
import QuranView from "../views/QuranView.vue";
import Contact from "../views/Contact.vue";
import AlFatihah from "../views/surah/AlFatihah.vue";
import AlBaqarah from "../views/surah/AlBaqarah.vue";
import AliImran from "../views/surah/AliImran.vue";
import AnNisa from "../views/surah/AnNisa.vue";
import AlMaidah from "../views/surah/AlMaidah.vue";
import AlAnam from "../views/surah/AlAnam.vue";
import AlAraf from "../views/surah/AlAraf.vue";
import ALAnfal from "../views/surah/AlAnfal.vue";
import AtTawbah from "../views/surah/AtTawbah.vue";
import Yunus from "../views/surah/Yunus.vue";

import Hud from "../views/surah/11.vue";
import Yusuf from "../views/surah/12.vue";
import ArRad from "../views/surah/13.vue";
import Ibrahim from "../views/surah/14.vue";
import AlHijr from "../views/surah/15.vue";
import AnNahl from "../views/surah/16.vue";
import AlIsra from "../views/surah/17.vue";
import AlKahf from "../views/surah/18.vue";
import Maryam from "../views/surah/19.vue";
import Taha from "../views/surah/20.vue";

import C21 from "../views/surah/21.vue";
import C22 from "../views/surah/22.vue";
import C23 from "../views/surah/23.vue";
import C24 from "../views/surah/24.vue";
import C25 from "../views/surah/25.vue";
import C26 from "../views/surah/26.vue";
import C27 from "../views/surah/27.vue";
import C28 from "../views/surah/28.vue";
import C29 from "../views/surah/29.vue";
import C30 from "../views/surah/30.vue";

import C31 from "../views/surah/31.vue";
import C32 from "../views/surah/32.vue";
import C33 from "../views/surah/33.vue";
import C34 from "../views/surah/34.vue";
import C35 from "../views/surah/35.vue";
import C36 from "../views/surah/36.vue";
import C37 from "../views/surah/37.vue";
import C38 from "../views/surah/38.vue";
import C39 from "../views/surah/39.vue";
import C40 from "../views/surah/40.vue";

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
    path: '/albaqarah',
    name: 'albaqarah',
    component: AlBaqarah,
    meta: {
      title: 'Al-Baqarah'
    }
  },
  {
    path: '/aliimran',
    name: 'aliimran',
    component: AliImran,
    meta: {
      title: 'Ali `Imran'
    }
  },
  {
    path: '/annisa',
    name: 'annisa',
    component: AnNisa,
    meta: {
      title: 'An-Nisa'
    }
  },
  {
    path: '/almaidah',
    name: 'almaidah',
    component: AlMaidah,
    meta: {
      title: 'Al-Ma`idah'
    }
  },
  {
    path: '/alanam',
    name: 'alanam',
    component: AlAnam,
    meta: {
      title: 'Al-An`am'
    }
  },
  {
    path: '/alaraf',
    name: 'alaraf',
    component: AlAraf,
    meta: {
      title: 'Al-A`raf'
    }
  },
  {
    path: '/ananfal',
    name: 'alanfal',
    component: ALAnfal,
    meta: {
      title: 'Al-Anfal'
    }
  },
  {
    path: '/attawbah',
    name: 'attawbah',
    component: AtTawbah,
    meta: {
      title: 'At-Tawbah'
    }
  },
  {
    path: '/yunus',
    name: 'yunus',
    component: Yunus,
    meta: {
      title: 'Yunus'
    }
  },
  {
    path: '/11',
    name: '11',
    component: Hud,
    meta: {
      title: 'Hud'
    }
  },
  {
    path: '/12',
    name: '12',
    component: Yusuf,
    meta: {
      title: 'Yusuf'
    }
  },
  {
    path: '/13',
    name: '13',
    component: ArRad,
    meta: {
      title: 'Ar-Ra’d'
    }
  },
  {
    path: '/14',
    name: '14',
    component: Ibrahim,
    meta: {
      title: 'Ibrahim'
    }
  },
  {
    path: '/15',
    name: '15',
    component: AlHijr,
    meta: {
      title: 'Al-Hijr'
    }
  },
  {
    path: '/16',
    name: '16',
    component: AnNahl ,
    meta: {
      title: 'An-Nahl'
    }
  },
  {
    path: '/17',
    name: '17',
    component: AlIsra,
    meta: {
      title: 'Al-Isra’'
    }
  },
  {
    path: '/18',
    name: '18',
    component: AlKahf,
    meta: {
      title: 'Al-Kahf'
    }
  },
  {
    path: '/19',
    name: '19',
    component: Maryam,
    meta: {
      title: 'Maryam'
    }
  },
  {
    path: '/20',
    name: '20',
    component: Taha,
    meta: {
      title: 'Taha'
    }
  },
  {
    path: '/21',
    name: '21',
    component: C21,
    meta: {
      title: 'C21'
    }
  },
  {
    path: '/22',
    name: '22',
    component: C22,
    meta: {
      title: 'C22'
    }
  },
  {
    path: '/23',
    name: '23',
    component: C23,
    meta: {
      title: 'C23'
    }
  },
  {
    path: '/24',
    name: '24',
    component: C24,
    meta: {
      title: 'C24'
    }
  },
  {
    path: '/25',
    name: '25',
    component: C25,
    meta: {
      title: 'C25'
    }
  },
  {
    path: '/26',
    name: '26',
    component: C26,
    meta: {
      title: 'C26'
    }
  },
  {
    path: '/27',
    name: '27',
    component: C27,
    meta: {
      title: 'C27'
    }
  },
  {
    path: '/28',
    name: '28',
    component: C28,
    meta: {
      title: 'C28'
    }
  },
  {
    path: '/29',
    name: '29',
    component: C29,
    meta: {
      title: 'C29'
    }
  },
  {
    path: '/30',
    name: '30',
    component: C30,
    meta: {
      title: 'C30'
    }
  },

  {
    path: '/31',
    name: '31',
    component: C31,
    meta: {
      title: 'C31'
    }
  },
  {
    path: '/32',
    name: '32',
    component: C32,
    meta: {
      title: 'C32'
    }
  },
  {
    path: '/33',
    name: '33',
    component: C33,
    meta: {
      title: 'C33'
    }
  },
  {
    path: '/34',
    name: '34',
    component: C34,
    meta: {
      title: 'C34'
    }
  },
  {
    path: '/35',
    name: '35',
    component: C35,
    meta: {
      title: 'C35'
    }
  },
  {
    path: '/36',
    name: '36',
    component: C36,
    meta: {
      title: 'C36'
    }
  },
  {
    path: '/37',
    name: '37',
    component: C37,
    meta: {
      title: 'C37'
    }
  },
  {
    path: '/38',
    name: '38',
    component: C38,
    meta: {
      title: 'C38'
    }
  },
  {
    path: '/39',
    name: '39',
    component: C39,
    meta: {
      title: 'C39'
    }
  },
  {
    path: '/40',
    name: '40',
    component: C40,
    meta: {
      title: 'C40'
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