<script>
export default {
  name: "NavBar",
};
</script>

<template>
  <nav class="navbar navbar-light" style="background-image: url('src/assets/bgNavBar.png');">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="src/assets/logoNama.png" alt="" width="200" height="120">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">Baca Al-Qur'an</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/annas">Recommendations</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/quran">Contact</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.y {
  color:#62360D;
}
</style>