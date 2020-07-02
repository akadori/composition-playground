import { reactive, onMounted, onUnmounted, toRefs } from '@vue/composition-api'

export default function useMousePosition() {
  const pos = reactive({
    x: 0,
    y: 0,
  })

  function update(e: any) {
    pos.x = e.pageX
    pos.y = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })
  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })

  return toRefs(pos)
}
