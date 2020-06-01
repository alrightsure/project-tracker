<template>
    <div id="app">
        <div class="columns">
            <sidebar class="column is-one-fifth" />
            <router-view class="column"></router-view>
        </div>
    </div>
</template>

<script>
import sidebar from "./components/general/sidebar";

export default {
    name: "project-tracker-vue",
    components: { sidebar }
};
</script>

<style>
#app {
    padding: 2%;
}
</style>
