<template>
  <div ref="root">hoge</div>
</template>

<script lang="ts">
import { ref, onMounted } from '@vue/composition-api'

export default {
  setup() {
    const root = ref(null)

    onMounted(() => {
      // the DOM element will be assigned to the ref after initial render
      console.log(root.value) // <div/>
    })

    return {
      root,
    }
  },
}
</script>
