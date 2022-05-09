<template>
  <footer class="footer" style="background-color: transparent">
    <div class="content has-text-centered">
      <p>
        <strong>Website Al-Quran</strong> by <a href="https://github.com/dwityamaudyalfira/alquranweb">Dwitya Maudy Alfira</a>
        &copy; {{year}}
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterView",
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer{
  text-align: center;
  position: initial;
  padding: 5px;
  color: #453F79;

}
</style>