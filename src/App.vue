<script>
import TopNavView from "./views/TopNavView.vue";
export default {
  components: {TopNavView}
}
</script>

<template>
  <TopNavView/>
  <main>
      <RouterView/>
  </main>
</template>