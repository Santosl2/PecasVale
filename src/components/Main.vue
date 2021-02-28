<template>
  <div>
    <navbar-global />
    <div class="container">{{ user }}</div>
    <input v-model="newUser" />
    <button class="button is-dark" @click="addUser">Teste</button>

    <a v-for="(users, index) in users" :key="index"> {{index+1}} {{users}}</a>
  </div>
</template>

<script>

/// exemplo vuex
import {mapGetters, mapMutations} from "vuex"
import { CHANGE_USER } from "../store/mutation-types";
export default {
  name: "Main",
  data: () => ({
    user: "",
    newUser: "",
  }),
  methods: {
      ...mapMutations({
          add: CHANGE_USER
      }),
    addUser() {
        this.user = this.newUser;
      //this.$store.commit(CHANGE_USER, this.newUser);
            this.add(this.newUser)

    },
  },
  mounted() {
    this.user = this.$store.getters.getUsername;
  },
  computed: {
      ...mapGetters({
          users: "getAllUsers"      }),
    /*users() {
              return this.getAllUsers;

      return this.$store.getters.getAllUsers;
    },*/
  },
};
</script>

<style>
</style>