<template lang='pug'>
q-layout.main(view='hHh lpR fFf')
  q-page-container#desktop
    router-view
    q-menu(touch-position context-menu)
      q-list(dense style='min-width: 100px')
        q-item(clickable v-close-popup)
          q-item-section Open...
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
        q-separator
          q-item(clickable v-close-popup)
            q-item-section Quit
  q-footer.bg-primary.text-white
    q-toolbar.flex.flex-center
      .flex.flex-center.manager-icon-wrap
        img.icon-manager(src='public/icons/windows.png' alt='')
      .flex.flex-center.manager-icon-wrap
        img.icon-manager(src='public/icons/search.png' alt='')
      .flex.flex-center.manager-icon-wrap
        img.icon-manager(src='public/icons/settings.png' alt='')
      .flex.flex-center.manager-icon-wrap
        img.icon-manager(src='public/icons/folder.png' alt='')
</template>

<script>
import { useQuasar } from 'quasar'
import FileModal from 'components/FileModal.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup () {
    const $q = useQuasar()

    const openFolder = () => {
      $q.dialog({
        component: FileModal
      })
    }

    return {
      openFolder
    }
  }
})
</script>

<style lang="scss">
* {
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.main {
  background: url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/3a0b9a123764445.60f58dc2792f0.jpg") center;
  background-size: cover;
  background-position: bottom;
}

.q-dialog-plugin {
  width: 100% !important;
  height: 100%;
}

.q-dialog__inner--minimized > div {
  max-width: none !important;
}

.q-footer {
  height: 50px !important;
}

.manager-icon-wrap {
  width: 40px;
  height: 40px;
  margin-left: 10px;
  border-radius: 5px;
  transition: all .3s;

  .icon-manager {
    width: 25px;
  }
}

.manager-icon-wrap:hover {
  background: rgba(255, 255, 255, 1);
}
</style>
