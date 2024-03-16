<template lang="pug">
div(@dblclick="openFolder").icon-wrap.flex.justify-center.items-center.column.q-ma-xs
  img(:src="shortcut.img" :alt="shortcut.alt").icon
  div.file-name {{ shortcut.label }}

  q-menu(touch-position context-menu)
    q-list(dense style='min-width: 100px')
      q-item(clickable v-close-popup)
        q-item-section(@click='openFolder') Open
      q-item(clickable v-close-popup)
        q-item-section New
      q-item(clickable v-close-popup)
        q-item-section New
</template>

<script lang="ts" setup>
import { useQuasar } from 'quasar'
import FileModal from 'components/FileModal.vue'

defineProps({
  shortcut: Object
})

const $q = useQuasar()

const openFolder = (): void => {
  $q.dialog({
    component: FileModal
  })
}
</script>

<style lang="scss" scoped>
.icon-wrap {
  width: 70px;
  height: 80px;
  transition: all .3s;
  .icon {
    width: 40px;
  }
  .file-name {
    margin-top: 5px;
    color: #fff;
    text-shadow: 0px 0px 4px #000000;
    font-size: 12px;
  }
}
.icon-wrap:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>
