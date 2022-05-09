<template>
  <header class="y" style="background-image: url('src/assets/bgHome.png');" >
    <div class="container">
      <div class="h1">Assalamu'alaikum! </div>
      <div class="h2">HARI INI SUDAH BACA AL-QUR'AN BELUM?</div>
      <center><a class="btn btn-primary btn-xl" href="surah">MULAI MEMBACA</a></center>
    </div>
    <FooterView/>
  </header>
</template>

<style scoped>
@media (min-width: 1280px) {
  header.y {
    background-repeat: no-repeat;
    background-size: contain;
  }
  header.y .h1 {
    padding-top: 50px;
    font-size: 25px;
    font-style: italic;
    line-height: 2.25rem;

    text-align: center;
    font-family: "Segoe UI";
    color: white;
  }
  header.y .h2 {
    font-size: 40px;
    font-weight: 700;
    line-height: 4.5rem;

    text-align: center;
    font-family: "Segoe UI";
    color: white;
  }
  .btn-primary {
    text-align: center;
    color: #fff;
    background-color: #453F79;
    border-color: #453F79;
    font-weight: 700;

    margin-bottom: 449px;
  }
}
</style>
<script>
import FooterView from "../views/FooterView.vue";
export default {
  components: { FooterView }
}
</script>