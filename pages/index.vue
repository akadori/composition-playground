<template>
  <div class="container">
    <!-- <MouseCoordinate />
    <CompositionPlayground /> -->
    Array<br />
    <Array />
    <br /><br /><br /><br /><br /><br />
    ReactivityUtilities<br />
    <ReactivityUtilities />
    <br /><br /><br /><br /><br /><br />
    TemplateRefs<br />
    <TemplateRefs />
    <br /><br /><br /><br /><br /><br />
    Injection<br />
    <Injection />
    <br /><br /><br /><br /><br /><br />
    LifecycleHook<br />
    <LifecycleHook />
    <br /><br /><br /><br /><br /><br />
    Setup<br />
    <Setup :name="name" :aaaa="'bbbbb'" />
    <br /><br /><br /><br /><br /><br />
    Reactive<br />
    <Reactive />
    <br /><br /><br /><br /><br /><br />
    Computed<br />
    <Computed />
    <br /><br /><br /><br /><br /><br />
    WatchEffect<br />
    <WatchEffect />
    <br /><br /><br /><br /><br /><br />
    Watch<br />
    <Watch />
    <br /><br /><br /><br /><br /><br />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import MouseCoordinate from '~/components/MouseCoordinate.vue'
// import CompositionPlayground from '~/components/CompositionPlayground.vue'
import Setup from '~/components/ApiReference/Setup.vue'
import Reactive from '~/components/ApiReference/Reactive.vue'
import Computed from '~/components/ApiReference/Computed.vue'
import WatchEffect from '~/components/ApiReference/WatchEffect.vue'
import Watch from '~/components/ApiReference/Watch.vue'
import LifecycleHook from '~/components/ApiReference/LifecycleHook.vue'
import Injection from '~/components/ApiReference/Injection.vue'
import TemplateRefs from '~/components/ApiReference/TemplateRefs.vue'
import ReactivityUtilities from '~/components/ApiReference/ReactivityUtilities.vue'
import Array from '~/components/Array.vue'

export default Vue.extend({
  components: {
    // MouseCoordinate,
    // CompositionPlayground,
    Setup,
    Reactive,
    Computed,
    WatchEffect,
    Watch,
    LifecycleHook,
    Injection,
    TemplateRefs,
    ReactivityUtilities,
    Array,
  },
  data() {
    return { name: 'first', random: true }
  },
  mounted() {
    setInterval(
      () => (this.name = Math.random().toString(32).substring(2)),
      1000
    )
    setInterval(() => (this.random = Math.random() > 0.5), 1000)
  },
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
