<script>
import FooterView from "../views/FooterView.vue";
export default {
  components: { FooterView }
}
</script>

<template>
  <section class="hero is-small" style="background-color: #E1BA9D;">
    <div class="hero-body">
      <p class="title">القرآن الكريم</p>
      <p class="subtitle">
        SURAH
      </p>
    </div>
    <div class="list-group">
      <a href="alfatihah" class="list-group-item list-group-item-action">Al-Fatihah</a>
      <a href="#" class="list-group-item list-group-item-action">A third link item</a>
      <a href="annas" class="list-group-item list-group-item-action">An-Nas</a>
    </div>
    <FooterView/>
  </section>
</template>

<style scoped>
.title{
  font-size: 40px;
  font-weight: 700;
  line-height: 4.5rem;

  text-align: center;
  font-family: "Segoe UI";
  color: white;
}
.subtitle{
  font-size: 25px;
  font-style: italic;
  line-height: 2.25rem;

  font-family: "Segoe UI";
  color: white;
}
.hero{
  padding: 50px;
}
</style>