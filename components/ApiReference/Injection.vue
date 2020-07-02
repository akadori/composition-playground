<template>
  <div>{{ theme }}</div>
</template>
<script lang="ts">
import { defineComponent, provide, inject } from '@vue/composition-api'

function useInjection(key: symbol) {
  provide(key, 'injected in funciton')
}

export default defineComponent({
  setup() {
    // eslint-disable-next-line symbol-description
    const ThemeSymbol = Symbol()

    useInjection(ThemeSymbol)

    const theme = inject(ThemeSymbol, 'light')

    return { theme }
  },
})
</script>
