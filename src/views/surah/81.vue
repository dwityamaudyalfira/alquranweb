<template>
  <section className="semua" style="background-color: #FAE7DB;">
    <section className="hero is-small">
      <div className="hero-body">
        <p className="title">
          Surah ‘At-Takwir
        </p>
        <p v-if="info">{{ info.text }}</p>
      </div>
    </section>
    <section>
      <h1 className="has-text-right awal" v-if="chapter">{{ chapter.name_arabic }}
        <br>{{ chapter.verses_count }} Ayat</h1>
      <hr>
      <div v-for="verse in verses">
        <p className="has-text-right quran">
          {{ verse.text_uthmani }} {{ verse.verse_key }}
        </p>
        <hr>
      </div>
      <p v-if="audio" className="has-text-right">
        <audio controls>
          <source :src=audio type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </p>
    </section>
  </section>
</template>

<script>
export default {
  name: "81",
  data() {
    return {
      chapter: null,
      verses: [],
      info: null,
    }
  },
  methods: {
    async getChapter() {
      fetch('https://api.quran.com/api/v4/chapters/81?language=id', {
        method: 'GET'
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(json => {
          this.chapter = json.chapter;
        })
    },
    async getVerses() {
      fetch('https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=81', {
        method: 'GET'
      })
        .then(res => {
          if (res.ok) {
            return res.json()
          }
        })
        .then(json => {
          this.verses = json.verses;
        })
    },
    async getInfo() {
      fetch('https://api.quran.com/api/v4/chapters/81/info?language=id', {
        method: 'GET'
      })
        .then(res => {
          if (res.ok) {
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
.quran {
  font-family: 'Amiri', serif;
  text-align: right;
}

.semua {
  padding: 50px;
}

.awal {
  text-align: center;
}
</style>