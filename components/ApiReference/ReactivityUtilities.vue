<template>
  <div>
    foo: {{ foo }}, fooCopy: {{ fooCopy }}, unrefFoo: {{ unrefFoo }}, baz:
    {{ baz }}, fizz: {{ fizz }}
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, unref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const foo = ref(12)
    const unrefFoo = unref(foo)
    const fooCopy = foo

    setInterval(() => {
      foo.value++
    }, 1000)

    const baz = 11
    const fizz = unref(baz)

    return { foo, unrefFoo, baz, fizz, fooCopy }
  },
})
</script>
