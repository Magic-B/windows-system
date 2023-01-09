<template lang="pug">
div(@dblclick="openFolder").icon-wrap.flex.justify-center.items-center.column.q-ma-xs
  img(:src="shortcut.img" :alt="shortcut.alt").icon
  div.file-name {{ shortcut.label }}

  q-menu(touch-position context-menu)
    q-list(dense style='min-width: 100px')
      q-item(clickable v-close-popup)
        q-item-section Open something
      q-item(clickable v-close-popup)
        q-item-section New
      q-separator
        q-item(clickable)
          q-item-section Preferences
          q-item-section(side)
            q-icon(name='keyboard_arrow_right')
          q-menu(anchor='top end' self='top start')
            q-list
              q-item(v-for='n in 3' :key='n' dense clickable)
                q-item-section Submenu Label
                q-item-section(side='')
                  q-icon(name='keyboard_arrow_right')
                q-menu(auto-close='' anchor='top end' self='top start')
                  q-list
                    q-item(v-for='n in 3' :key='n' dense clickable)
                      q-item-section 3rd level Label
        q-separator
          q-item(clickable v-close-popup)
            q-item-section Quit
</template>

<script lang="ts">
import { useQuasar } from 'quasar'
import FileModal from 'components/FileModal.vue'

export default {
  props: {
    shortcut: Object
  },
  setup () {
    const $q = useQuasar()

    const openFolder = (): void => {
      $q.dialog({
        component: FileModal
      })
    }

    return {
      openFolder
    }
  }
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
