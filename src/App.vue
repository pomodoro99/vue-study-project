<template>
  <div id="app">
    <PanelViewVue></PanelViewVue>
    <ControllerViewVue></ControllerViewVue>
    <AuthViewVue></AuthViewVue>
  </div>
</template>

<script>
import PanelViewVue from "./views/PanelView.vue";
import ControllerViewVue from "./views/ControllerView.vue";
import AuthViewVue from "./views/AuthView.vue";

export default {
  name: "App",

  components: {
    ControllerViewVue,
    PanelViewVue,
    AuthViewVue
  }
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
