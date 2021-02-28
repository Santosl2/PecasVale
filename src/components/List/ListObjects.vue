<template>
  <div>
    <section v-if="typeof objects !== undefined && objects.length > 0">
      <div
        class="object"
        v-for="object in objects"
        @click="showModal(object)"
        :key="object.id"
      >
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="object.image" :alt="object.name" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ object.name }}</p>
              </div>
            </div>

            <div class="content">
              <span
                v-if="
                  typeof object.price !== undefined &&
                  Object.keys(object.price).length > 0
                "
              >
                <b-button
                  size="is-small"
                  style="margin: 5px; text-transform: capitalize"
                  v-for="(price, local, index) in object.price"
                  v-bind:class="customClass(index)"
                  :key="index"
                  >{{ local }} - {{ price }}</b-button
                >
              </span>
              <br />
              <time datetime="2016-1-1"> <b-icon
                icon="clock"
                size="is-small">
            </b-icon>11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </div>

      <Modal v-bind:data="modalData" />
    </section>
  </div>
</template>

<script>
import fakeDb from "../../../fakeDb.json";
import Modal from "./Modal.vue";
export default {
  name: "ListObjects",

  components: {
    Modal,
  },

  data: () => ({
    objects: [],
    modalVisible: false,
    modalData: [],
  }),
  methods: {
    showModal(e) {
      this.modalData = e;
      this.modalVisible = true;

      this.$emit("showModal", true);
    },
    loadObjects() {
      this.objects = fakeDb.posts;
    },

    customClass(e) {
      const classes = [
        "is-danger ",
        "is-dark",
        "is-link",
        "is-success",
        "is-primary",
        "is-warning",
        "is-warning",
      ];

      return e >= 4 ? classes[6] : classes[e];
    },
  },

  mounted() {
    this.loadObjects();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
.object {
  width: 326px;
  min-height: 250px;
  background: rgb(253, 253, 253);
  display: inline-block;
  margin: 5px;
  border-radius: 7px;
  color: black;
  font-family: "Poppins", sans-serif;
  box-shadow: 0 0 4px 2px rgba(55, 55, 55, 0.1);
  overflow: hidden;
  transition: all 0.3s linear;
  cursor: pointer;
}
.object:hover {
  transform: translate(0, -7px);
  -webkit-transform: translate(0, -7px);
  -o-transform: translate(0, -7px);
  -moz-transform: translate(0, -7px);
  -ms-transform: translate(0, -7px);
}
.object .content {
  padding: 5px;
}
.object .objectImage {
  width: 100%;
  height: 100px;
  background-size: cover;
  border-radius: 5px;
  background-position: center;
}
</style>