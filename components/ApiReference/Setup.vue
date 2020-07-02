<template>
  <div>
    <div>{{ count }} {{ object.foo }}</div>
    <div>name: {{ props.name }}</div>
    <button @click="alertFoo">alert</button>
  </div>
</template>

<script lang="ts">
import {
  ref,
  reactive,
  defineComponent,
  SetupContext,
} from '@vue/composition-api'

export default defineComponent({
  props: {
    name: String,
  },
  setup(props, ctx: SetupContext) {
    const count = ref(0)
    const object = reactive<{ foo: string }>({ foo: 'bar' })
    function alertFoo() {
      // ctx.attrs
      // vue.$attrsと同じ。親から渡されたプロパティの内、styleとclassが除かれたオブジェクト(形式は { [key: string]: string } )が格納されています。
      alert(ctx.attrs.aaaa)
    }
    // expose to template
    return {
      count,
      object,
      props,
      alertFoo,
    }
  },
})
</script>
