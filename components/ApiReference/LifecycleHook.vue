<template>
  <div>LifecycleHook: {{ a }}</div>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUpdated,
  onUnmounted,
  ref,
} from '@vue/composition-api'
export default defineComponent({
  setup() {
    onMounted(() => {
      // console.log('mounted!')
    })
    onUpdated(() => {
      // たぶんDOMの更新があった時だけ
      // console.log('updated!')
    })
    onUnmounted(() => {
      // console.log('unmounted!')
    })
    const a = ref(0)
    setInterval(() => a.value++, 1000)
    return { a }
  },
})
</script>
