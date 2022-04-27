<template>
  <div id="app">
    <PanelViewVue></PanelViewVue>
    <ControllerViewVue></ControllerViewVue>
  </div>
</template>

<script>
import PanelViewVue from "./views/PanelView.vue";
import ControllerViewVue from "./views/ControllerView.vue";

export default {
  name: "App",

  components: {
    ControllerViewVue,
    PanelViewVue,
  }
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
