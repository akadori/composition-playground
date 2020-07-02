<template>
  <div>
    <div>{{ count }} {{ state.count }}</div>
  </div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const count = ref(0)
    const state = reactive({
      count,
    })

    // console.log(state.count) // 0

    state.count = 1
    // console.log(count.value) // 1
    // console.log(state.count) // 2
    // console.log(count.value) // 1

    const foo = ref<string | number>('foo') // foo's type: Ref<string | number>

    foo.value = 123 // ok!

    return { state, count }
  },
})
</script>
