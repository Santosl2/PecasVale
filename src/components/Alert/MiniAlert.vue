<template>
  <b-message :width="width" :type="className" :has-icon="icon !== false">
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
      type: Boolean,
      default: null,
    },
    width: {
        type: String,
        default: "100%"
    }
  },
};
</script>

<style>
</style>