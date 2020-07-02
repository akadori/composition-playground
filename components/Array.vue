<template>
  <div>
    <div>{{ (array.content) }}</div>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    name: String,
  },
  setup() {
    // expose to template
    const array = reactive({ content: [...Array(5).keys()] })
    return {
      array,
    }
  },
})
</script>
