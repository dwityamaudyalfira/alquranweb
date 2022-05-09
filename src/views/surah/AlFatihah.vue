<template>
  <section class="semua" style="background-color: #FAE7DB;">
  <section class="hero is-small">
    <div class="hero-body">
      <p class="title">
        Surah Al-Fatihah
      </p>
      <p v-if="info">{{info.text}}</p>
    </div>
  </section>
  <section>
    <h1 class="has-text-right awal" v-if="chapter">{{chapter.name_arabic}}
      <br>{{chapter.verses_count}} Ayat</h1>
    <hr>
    <div v-for="verse in verses">
      <p class="has-text-right quran">
        {{verse.text_uthmani}} {{verse.verse_key}}
      </p>
      <hr>
    </div>
  </section>
  </section>
</template>

<script>
export default {
  name: "AlFatihah",
  data(){
    return{
      chapter: null,
      verses: [],
      info: null,
    }
  },
  methods: {
    async getChapter(){
      fetch('https://api.quran.com/api/v4/chapters/1?language=id',{
        method: 'GET'
      })
        .then(response => {
          if(response.ok){
            return response.json();
          }
        })
        .then(json => {
          this.chapter = json.chapter;
        })
    },
    async getVerses(){
      fetch('https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=1', {
        method: 'GET'
      })
        .then(res =>{
          if(res.ok){
            return res.json()
          }
        })
        .then(json => {
          this.verses = json.verses;
        })
    },
    async getInfo(){
      fetch('https://api.quran.com/api/v4/chapters/1/info?language=id', {
        method: 'GET'
      })
        .then(res =>{
          if(res.ok){
            return res.json()
          }
        })
        .then(json => {
          this.info = json.info;
        })
    }
  },
  mounted() {
    this.getChapter();
    this.getVerses();
    this.getInfo();
  }
}
</script>

<style scoped>
.quran{
  font-family: 'Amiri', serif;
  text-align: right;
}
.semua{
padding: 50px;
}
.awal{
  text-align: center;
}
</style>