<template>
  <q-layout view="hHh lpR fFf" class="main">

    <q-page-container id="desktop">
      <router-view/>

      <q-menu
        touch-position
        context-menu
      >

        <q-list dense style="min-width: 100px">
          <q-item clickable v-close-popup>
            <q-item-section>Open...</q-item-section>
          </q-item>
          <q-item clickable v-close-popup>
            <q-item-section>New</q-item-section>
          </q-item>
          <q-separator/>
          <q-item clickable>
            <q-item-section>Preferences</q-item-section>
            <q-item-section side>
              <q-icon name="keyboard_arrow_right"/>
            </q-item-section>

            <q-menu anchor="top end" self="top start">
              <q-list>
                <q-item
                  v-for="n in 3"
                  :key="n"
                  dense
                  clickable
                >
                  <q-item-section>Submenu Label</q-item-section>
                  <q-item-section side>
                    <q-icon name="keyboard_arrow_right"/>
                  </q-item-section>
                  <q-menu auto-close anchor="top end" self="top start">
                    <q-list>
                      <q-item
                        v-for="n in 3"
                        :key="n"
                        dense
                        clickable
                      >
                        <q-item-section>3rd level Label</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-item>
              </q-list>
            </q-menu>

          </q-item>
          <q-separator/>
          <q-item clickable v-close-popup>
            <q-item-section>Quit</q-item-section>
          </q-item>
        </q-list>

      </q-menu>
    </q-page-container>

    <q-footer class="bg-primary text-white">
      <q-toolbar class="flex flex-center">
        <div class="flex flex-center manager-icon-wrap">
          <img src="public/icons/windows.png" alt="" class="icon-manager">
        </div>
        <div class="flex flex-center manager-icon-wrap">
          <img src="public/icons/search.png" alt="" class="icon-manager">
        </div>
        <div class="flex flex-center manager-icon-wrap">
          <img src="public/icons/settings.png" alt="" class="icon-manager">
        </div>
        <div class="flex flex-center manager-icon-wrap">
          <img src="public/icons/folder.png" alt="" class="icon-manager">
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
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
