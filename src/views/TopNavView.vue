<template>
  <nav class="navbar navbar-light" style="background-image: url('src/assets/bgnavbar.png');">
    <div class="container-fluid">
      <a class="navbar-brand" href="/surah">
        <img src="src/assets/logo2.png" alt="" width="100" height="100" class="d-inline-block align-text-middle">
        Quran.com by Dwitya Maudy Alfira
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
            <RouterLink class="nav-link" to="/surah">Baca Al-Qur'an</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/quran">Ayat Pilihan</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});
</script>

<style scoped>
.navbar-brand{
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.navbar-light{
  background-size: cover;
}
</style>
