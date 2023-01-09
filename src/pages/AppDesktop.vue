<template>
  <div class="flex column">
    <FileShortcut
      v-for="item, index in shortcut"
      :key="index"
      :shortcut="item"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import FileShortcut from 'components/FileShortcut.vue'
import { Shortcut } from '../typescript/interfaces'

export default defineComponent({
  components: { FileShortcut },

  setup () {
    const shortcut = ref<{img: string, label: string, alt: string, clickable: boolean}[]>([
      { img: 'public/icons/computer.png', label: 'Magic-B', alt: 'computer', clickable: false },
      { img: 'public/icons/folder.png', label: 'File Explorer', alt: 'folder', clickable: true },
      { img: 'public/icons/trash.png', label: 'Trash', alt: 'trash', clickable: false }
    ])

    return {
      shortcut
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
