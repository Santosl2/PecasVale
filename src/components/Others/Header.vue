<template>

    <b-navbar>
        
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/about' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item  tag="router-link" :to="{path: '/'}">
                Inicio
            </b-navbar-item>
            
            <b-navbar-dropdown label="Sobre">
                <b-navbar-item href="#">
                    Sobre
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        
    </b-navbar>
</template>

<script>
export default {

}
</script>
