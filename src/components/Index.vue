<template>
  <div id="app">
    <navbar-global style="margin-bottom: 20px" />

    <div class="container">
      <mini-alert
        v-if="alert.content"
        :className="alert.class"
        :content="alert.content"
        :icon="alert.icon"
      />
      <div class="columns is-vcentered">
        <div class="column is-8 is-mobile">
          <form @submit.prevent="tryLogin" style="width: 750px">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  v-model="user.email"
                  class="input"
                  type="email"
                  placeholder="e.g. mfilype@example.com"
                  required
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Senha</label>
              <div class="control">
                <input
                  v-model="user.password"
                  class="input"
                  type="password"
                  placeholder="********"
                  required
                />
              </div>
            </div>

            <button class="button is-dark" style="margin-right: 5px">Logar-se</button> 
            <button class="button is-link">Registre-se agora</button>
            <hr />
          </form>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Peças Vale</p>
                  <p class="subtitle is-6"></p>
                </div>
              </div>

              <div class="content">
                Para poder acessar o painel e visualizar o valor das peças dos
                principas fornecedores do Vale do Aço, é preciso ter uma conta.
                Para obter uma conta, clique <a href="">aqui</a>.
                <hr/>
                Após a finalização do registro, entre em contato para que
                possamos verificar a sua conta.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer-global />
  </div>
</template>

<script>
import MiniAlert from "./Alert/MiniAlert.vue";
export default {
  name: "Index",
  components: { MiniAlert },
  data: () => ({
    user: {
      email: "mfilype2017@gmail.com",
      password: "matheus1478",
    },
    alert: {
      class: "is-warning",
      content: "",
      icon: false,
    },
  }),
  methods: {
    tryLogin() {
      if (!this.user.email.trim() || !this.user.password.trim()) {
        this.alert.content = "Oops, parece que um dos campos ficou vázio. ";
        return;
      }

      const form = new FormData();
      form.append("email", this.user.email);
      form.append("password", this.user.password);

      this.$http
        .post("auth/login", form, {
          withCredentials: false,
        })
        .then((response) => {
          const message = response.data?.message;
          this.alert.class =
            message.toLowerCase() == "sucesso!" ? "is-success" : "is-danger";
          this.alert.content =
            message.toLowerCase() == "sucesso!"
              ? "Seja-bem vind@ ao Peças Vale!"
              : message;

          console.log(response);
        })
        .catch((err) => {
          this.alert.class = "is-warning";
          this.alert.content = err.response.data?.password;
        })
        .catch(() => {
          this.alert.class = "is-danger";
          this.alert.content = "Oops, algum erro ocorreu! Entre em contato.";
        });
    },
  },
};
</script>


<style scoped>
@media only screen and (max-width: 800px) {
  .container {
    margin: 0 auto;
    padding: 5px;
    width: 98%;
  }

  input {
    width: 90vw;
  }
}
@media only screen and (min-width: 800px) and (max-width: 1200px) {
  .container {
    margin: 0 auto;
    padding: 5px;
    width: 98%;
  }
  input {
    width: 60vw;
  }
}
</style>

