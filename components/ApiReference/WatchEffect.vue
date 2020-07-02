<template>
  <div>
    <div>count: {{ count }}</div>
  </div>
</template>

<script lang="ts">
import { ref, watchEffect, defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const count = ref(0)

    watchEffect(
      () => {
        // console.log(`post: ${count.value}`)
      }
      // onTriggerはありません。残念
      //       interface WatchOptionsBase {
      //         flush?: FlushMode;
      //        }
      // {
      //   onTrigger(e) {
      //     debugger
      //   },
      // }
    )
    watchEffect(
      () => {
        // console.log(`sync: ${count.value}`)
      },
      { flush: 'sync' }
    )
    watchEffect(
      () => {
        // console.log(`pre: ${count.value}`)
      },
      { flush: 'pre' }
    )

    setTimeout(() => {
      count.value = 4
    }, 1000)

    return {
      count,
    }
  },
})
</script>
