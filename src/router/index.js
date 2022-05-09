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

import C41 from "../views/surah/41.vue";
import C42 from "../views/surah/42.vue";
import C43 from "../views/surah/43.vue";
import C44 from "../views/surah/44.vue";
import C45 from "../views/surah/45.vue";
import C46 from "../views/surah/46.vue";
import C47 from "../views/surah/47.vue";
import C48 from "../views/surah/48.vue";
import C49 from "../views/surah/49.vue";
import C50 from "../views/surah/50.vue";

import C51 from "../views/surah/51.vue";
import C52 from "../views/surah/52.vue";
import C53 from "../views/surah/53.vue";
import C54 from "../views/surah/54.vue";
import C55 from "../views/surah/55.vue";
import C56 from "../views/surah/56.vue";
import C57 from "../views/surah/57.vue";
import C58 from "../views/surah/58.vue";
import C59 from "../views/surah/59.vue";
import C60 from "../views/surah/60.vue";

import C61 from "../views/surah/61.vue";
import C62 from "../views/surah/62.vue";
import C63 from "../views/surah/63.vue";
import C64 from "../views/surah/64.vue";
import C65 from "../views/surah/65.vue";
import C66 from "../views/surah/66.vue";
import C67 from "../views/surah/67.vue";
import C68 from "../views/surah/68.vue";
import C69 from "../views/surah/69.vue";
import C70 from "../views/surah/70.vue";

import C71 from "../views/surah/71.vue";
import C72 from "../views/surah/72.vue";
import C73 from "../views/surah/73.vue";
import C74 from "../views/surah/74.vue";
import C75 from "../views/surah/75.vue";
import C76 from "../views/surah/76.vue";
import C77 from "../views/surah/77.vue";
import C78 from "../views/surah/78.vue";
import C79 from "../views/surah/79.vue";
import C80 from "../views/surah/80.vue";

import C81 from "../views/surah/81.vue";
import C82 from "../views/surah/82.vue";
import C83 from "../views/surah/83.vue";
import C84 from "../views/surah/84.vue";
import C85 from "../views/surah/85.vue";
import C86 from "../views/surah/86.vue";
import C87 from "../views/surah/87.vue";
import C88 from "../views/surah/88.vue";
import C89 from "../views/surah/89.vue";
import C90 from "../views/surah/90.vue";

import C91 from "../views/surah/91.vue";
import C92 from "../views/surah/92.vue";
import C93 from "../views/surah/93.vue";
import C94 from "../views/surah/94.vue";
import C95 from "../views/surah/95.vue";
import C96 from "../views/surah/96.vue";
import C97 from "../views/surah/97.vue";
import C98 from "../views/surah/98.vue";
import C99 from "../views/surah/99.vue";
import C100 from "../views/surah/100.vue";

import C101 from "../views/surah/101.vue";
import C102 from "../views/surah/102.vue";
import C103 from "../views/surah/103.vue";
import C104 from "../views/surah/104.vue";
import C105 from "../views/surah/105.vue";
import C106 from "../views/surah/106.vue";
import C107 from "../views/surah/107.vue";
import C108 from "../views/surah/108.vue";
import C109 from "../views/surah/109.vue";
import C110 from "../views/surah/110.vue";
import C111 from "../views/surah/111.vue";
import C112 from "../views/surah/112.vue";
import C113 from "../views/surah/113.vue";

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
    path: '/alanfal',
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
    path: '/41',
    name: '41',
    component: C41,
    meta: {
      title: 'C41'
    }
  },
  {
    path: '/42',
    name: '42',
    component: C42,
    meta: {
      title: 'C42'
    }
  },
  {
    path: '/43',
    name: '43',
    component: C43,
    meta: {
      title: 'C43'
    }
  },
  {
    path: '/44',
    name: '44',
    component: C44,
    meta: {
      title: 'C44'
    }
  },
  {
    path: '/45',
    name: '45',
    component: C45,
    meta: {
      title: 'C45'
    }
  },
  {
    path: '/46',
    name: '46',
    component: C46,
    meta: {
      title: 'C46'
    }
  },
  {
    path: '/47',
    name: '47',
    component: C47,
    meta: {
      title: 'C47'
    }
  },
  {
    path: '/48',
    name: '48',
    component: C48,
    meta: {
      title: 'C48'
    }
  },
  {
    path: '/49',
    name: '49',
    component: C49,
    meta: {
      title: 'C49'
    }
  },
  {
    path: '/50',
    name: '50',
    component: C50,
    meta: {
      title: 'C50'
    }
  },
  {
    path: '/51',
    name: '51',
    component: C51,
    meta: {
      title: 'C51'
    }
  },
  {
    path: '/52',
    name: '52',
    component: C52,
    meta: {
      title: 'C52'
    }
  },
  {
    path: '/53',
    name: '53',
    component: C53,
    meta: {
      title: 'C53'
    }
  },
  {
    path: '/54',
    name: '54',
    component: C54,
    meta: {
      title: 'C54'
    }
  },
  {
    path: '/55',
    name: '55',
    component: C55,
    meta: {
      title: 'C55'
    }
  },
  {
    path: '/56',
    name: '56',
    component: C56,
    meta: {
      title: 'C56'
    }
  },
  {
    path: '/57',
    name: '57',
    component: C57,
    meta: {
      title: 'C57'
    }
  },
  {
    path: '/58',
    name: '58',
    component: C58,
    meta: {
      title: 'C58'
    }
  },
  {
    path: '/59',
    name: '59',
    component: C59,
    meta: {
      title: 'C59'
    }
  },
  {
    path: '/60',
    name: '60',
    component: C60,
    meta: {
      title: 'C60'
    }
  },
  {
    path: '/61',
    name: '61',
    component: C61,
    meta: {
      title: 'C61'
    }
  },
  {
    path: '/62',
    name: '62',
    component: C62,
    meta: {
      title: 'C62'
    }
  },
  {
    path: '/63',
    name: '63',
    component: C63,
    meta: {
      title: 'C63'
    }
  },
  {
    path: '/64',
    name: '64',
    component: C64,
    meta: {
      title: 'C64'
    }
  },
  {
    path: '/65',
    name: '65',
    component: C65,
    meta: {
      title: 'C65'
    }
  },
  {
    path: '/66',
    name: '66',
    component: C66,
    meta: {
      title: 'C66'
    }
  },
  {
    path: '/67',
    name: '67',
    component: C67,
    meta: {
      title: 'C67'
    }
  },
  {
    path: '/68',
    name: '68',
    component: C68,
    meta: {
      title: 'C68'
    }
  },
  {
    path: '/69',
    name: '69',
    component: C69,
    meta: {
      title: 'C69'
    }
  },
  {
    path: '/70',
    name: '70',
    component: C70,
    meta: {
      title: 'C70'
    }
  },
  {
    path: '/71',
    name: '71',
    component: C71,
    meta: {
      title: 'C71'
    }
  },
  {
    path: '/72',
    name: '72',
    component: C72,
    meta: {
      title: 'C72'
    }
  },
  {
    path: '/73',
    name: '73',
    component: C73,
    meta: {
      title: 'C73'
    }
  },
  {
    path: '/74',
    name: '74',
    component: C74,
    meta: {
      title: 'C74'
    }
  },
  {
    path: '/75',
    name: '75',
    component: C75,
    meta: {
      title: 'C75'
    }
  },
  {
    path: '/76',
    name: '76',
    component: C76,
    meta: {
      title: 'C76'
    }
  },
  {
    path: '/77',
    name: '77',
    component: C77,
    meta: {
      title: 'C77'
    }
  },
  {
    path: '/78',
    name: '78',
    component: C78,
    meta: {
      title: 'C78'
    }
  },
  {
    path: '/79',
    name: '79',
    component: C79,
    meta: {
      title: 'C79'
    }
  },
  {
    path: '/80',
    name: '80',
    component: C80,
    meta: {
      title: 'C80'
    }
  },
  {
    path: '/81',
    name: '81',
    component: C81,
    meta: {
      title: 'C81'
    }
  },
  {
    path: '/82',
    name: '82',
    component: C82,
    meta: {
      title: 'C82'
    }
  },
  {
    path: '/83',
    name: '83',
    component: C83,
    meta: {
      title: 'C83'
    }
  },
  {
    path: '/84',
    name: '84',
    component: C84,
    meta: {
      title: 'C84'
    }
  },
  {
    path: '/85',
    name: '85',
    component: C85,
    meta: {
      title: 'C85'
    }
  },
  {
    path: '/86',
    name: '86',
    component: C86,
    meta: {
      title: 'C86'
    }
  },
  {
    path: '/87',
    name: '87',
    component: C87,
    meta: {
      title: 'C87'
    }
  },
  {
    path: '/88',
    name: '88',
    component: C88,
    meta: {
      title: 'C88'
    }
  },
  {
    path: '/89',
    name: '89',
    component: C89,
    meta: {
      title: 'C89'
    }
  },
  {
    path: '/90',
    name: '90',
    component: C90,
    meta: {
      title: 'C90'
    }
  },
  {
    path: '/91',
    name: '91',
    component: C91,
    meta: {
      title: 'C91'
    }
  },
  {
    path: '/92',
    name: '92',
    component: C92,
    meta: {
      title: 'C92'
    }
  },
  {
    path: '/93',
    name: '93',
    component: C93,
    meta: {
      title: 'C93'
    }
  },
  {
    path: '/94',
    name: '94',
    component: C94,
    meta: {
      title: 'C94'
    }
  },
  {
    path: '/95',
    name: '95',
    component: C95,
    meta: {
      title: 'C95'
    }
  },
  {
    path: '/96',
    name: '96',
    component: C96,
    meta: {
      title: 'C96'
    }
  },
  {
    path: '/97',
    name: '97',
    component: C97,
    meta: {
      title: 'C97'
    }
  },
  {
    path: '/98',
    name: '98',
    component: C98,
    meta: {
      title: 'C98'
    }
  },
  {
    path: '/99',
    name: '99',
    component: C99,
    meta: {
      title: 'C99'
    }
  },
  {
    path: '/100',
    name: '100',
    component: C100,
    meta: {
      title: 'C100'
    }
  },
  {
    path: '/101',
    name: '101',
    component: C101,
    meta: {
      title: 'C101'
    }
  },
  {
    path: '/102',
    name: '102',
    component: C102,
    meta: {
      title: 'C102'
    }
  },
  {
    path: '/103',
    name: '103',
    component: C103,
    meta: {
      title: 'C103'
    }
  },
  {
    path: '/104',
    name: '104',
    component: C104,
    meta: {
      title: 'C104'
    }
  },
  {
    path: '/105',
    name: '105',
    component: C105,
    meta: {
      title: 'C105'
    }
  },
  {
    path: '/106',
    name: '106',
    component: C106,
    meta: {
      title: 'C106'
    }
  },
  {
    path: '/107',
    name: '107',
    component: C107,
    meta: {
      title: 'C107'
    }
  },
  {
    path: '/108',
    name: '108',
    component: C108,
    meta: {
      title: 'C108'
    }
  },
  {
    path: '/109',
    name: '109',
    component: C109,
    meta: {
      title: 'C109'
    }
  },
  {
    path: '/110',
    name: '110',
    component: C110,
    meta: {
      title: 'C110'
    }
  },
  {
    path: '/111',
    name: '111',
    component: C111,
    meta: {
      title: 'C111'
    }
  },
  {
    path: '/112',
    name: '112',
    component: C112,
    meta: {
      title: 'C112'
    }
  },
  {
    path: '/113',
    name: '113',
    component: C113,
    meta: {
      title: 'C113'
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