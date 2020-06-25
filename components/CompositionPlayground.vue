<template>
  <div>
    count is {{ count }}, double is {{ double }}
    <div>Time Left: {{ timeLeft }}<button @click="reset">reset</button></div>
  </div>
</template>

<script lang="ts">
import { ref, computed, onMounted, defineComponent } from '@vue/composition-api'

function useTimer() {
  const LIMIT = 60
  const timeLeft = ref(LIMIT)
  setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--
    } else {
      reset()
    }
  }, 1000)
  const reset = () => (timeLeft.value = LIMIT)
  return {
    reset,
    timeLeft,
  }
}

export default defineComponent({
  setup() {
    onMounted(() => {
      console.log('component is mounted!')
    })
    const count = ref(0)

    function increment() {
      count.value++
    }

    const double = computed(() => count.value * 2)

    document.body.addEventListener('click', increment)

    const { reset, timeLeft } = useTimer()

    return {
      count,
      double,
      reset,
      timeLeft,
    }
  },
})
</script>
