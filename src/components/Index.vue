<template>
  <div>
      <navbar-global/>

    <div
      class="container"
      style="display: flex; justify-content: center; align-itens: Center"
    >
      <form class="box" style="width: 750px">
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
              class="input"
              type="email"
              placeholder="e.g. mfilype@example.com"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Senha</label>
          <div class="control">
            <input class="input" type="password" placeholder="********" />
          </div>
        </div>

        <button class="button is-dark">Logar-se</button>
        <hr />
        <small>Para obter um acesso, entre em contato</small>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

