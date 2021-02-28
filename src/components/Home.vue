<template>
  <div>
    <navbar-global isLogged="true" />
    <section class="hero is-info"  style="margin-bottom: 20px">
      <div class="hero-body">
        <p class="title">Peças recém atualizadas</p>
        <p class="subtitle">Veja as peças que foram recentemente atualizadas.</p>
      </div>
    </section>
    <div class="container">
      <div class="columns">
        <div class="column is-full">
          <ListObjects />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListObjects from "./List/ListObjects.vue";
export default {
  components: {
    ListObjects,
  },
};
</script>
