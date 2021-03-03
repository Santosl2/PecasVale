<template>

  <b-message :title="title" :type="className" aria-close-label="Fechar mensagem" :has-icon="icon != null">
    {{content}}
  </b-message>
</template>

<script>
export default {
  name: "Alert",
  props: {
    title: {
        type: String,
        default: "Mensagem de aviso"
    },
    className: {
      type: String,
      default: "is-warning",
    },
    content: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: null,
    },
  },
};
</script>

<style>
</style>