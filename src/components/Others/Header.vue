<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/about' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Inicio
      </b-navbar-item>

      <b-navbar-dropdown label="Sobre">
        <b-navbar-item tag="router-link" :to="{path: '/about'}"> Contato </b-navbar-item>
        <b-navbar-item href="#"> Como conseguir acesso </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template #end>
      <b-field v-if="isLogged">
        <b-input
          placeholder="Procure por alguma peça..."
          type="search"
          icon="magnify"
          icon-clickable
          @icon-click="searchIconClick"
        >
        </b-input>
      </b-field>
    </template>

  </b-navbar>

  
</template>

<script>
export default {
  name: "Navbar", 
 
    props: {
    isLogged: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
