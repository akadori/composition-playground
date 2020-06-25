<template>
  <div>
    <div>{{ `x: ${x}` }}</div>
    <div>{{ `y: ${y}` }}</div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  onMounted,
  onUnmounted,
  defineComponent,
} from '@vue/composition-api'

export default defineComponent({
  setup() {
    const x = ref(0)
    const y = ref(0)
    const update = (e: MouseEvent) => {
      x.value = e.pageX
      y.value = e.pageY
    }
    onMounted(() => {
      window.addEventListener('mousemove', update)
    })
    onUnmounted(() => {
      window.removeEventListener('mousemove', update)
    })
    return { x, y }
  },
})
</script>
