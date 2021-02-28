<template>
  <b-modal v-model="show" :width="740" scroll="keep">
           <div class="card">
                
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="/static/img/placeholder-1280x960.png" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">Estatiscas de {{data.name}}</p>
                            <p class="subtitle is-6">@johnsmith</p>
                        </div>
                    </div>

                    <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a>#css</a> <a>#responsive</a>
                        <br>
                        <small>11:09 PM - 1 Jan 2016</small>
                    </div>
                </div>
            </div>
        </b-modal>
</template>

<script>
export default {
    name: 'Modal',
    data: () => ({
        show: false
    }),
    props: {
        data: {
            type: Object
        }
    },
    methods: {
        showModal(){
            this.show = true;
        }
    },

    created(){
        this.$parent.$on('showModal', this.showModal)       
    }
   
}
</script>

<style>

</style>