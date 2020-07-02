<template>
  <div>
    <div>count: {{ count }}</div>
    <div>state.count: {{ state.count }}</div>
  </div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent, watch } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const state = reactive({ count: 0 })
    watch<number>(
      () => state.count,
      (count, prevCount) => {
        // console.log(
        //   `state.count changed. count: ${count}, prevCount: ${prevCount}`
        // )
      }
    )

    const count = ref(0)
    watch([count, count], ([count, _count2], prevCount) => {
      // console.log(`count changed. count: ${count}, prevCount: ${prevCount}`)
    })

    setInterval(() => {
      state.count += 2
    }, 1000)
    setInterval(() => {
      count.value += 1
    }, 1000)
    return { count, state }
  },
})
</script>
