<template>
  <div>
    <div>{{ count }} {{ state.count }}</div>
    <div>plusOne: {{ plusOne }}</div>
  </div>
</template>

<script lang="ts">
import { ref, reactive, computed, defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const count = ref(1)
    const state = reactive({
      count,
    })

    const plusOne = computed(() => count.value + 1)
    // console.log(`plusOne.value: ${plusOne.value}`) // 2

    const plus = computed({
      get: () => 32,
      set: (val: number) => {
        // console.log(`plus set: ${val}`)
        count.value = val
      },
    })

    plus.value = 22
    // console.log(`plus.value: ${plus.value}`) // 32

    return { state, count, plusOne }
  },
})
</script>
