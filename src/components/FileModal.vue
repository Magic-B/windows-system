<template lang="pug">
q-dialog.file-modal(maximized ref='dialogRef' @hide='onDialogHide')
  q-card.q-dialog-plugin(flat)
    div.wrapper
      div.flex.justify-between.folder-up
        div.flex.items-center
          img(src='public/icons/folder.png').icon-img.q-mx-sm
          div.file-name File Explorer
        div.flex.items-center.q-mr-sm
          div.icon-wrap
            img(src='public/icons/ui/minimize.png').folder-icon
          div.icon-wrap
            img(src='public/icons/ui/maximize.png').folder-icon
          div.icon-wrap
            img(src='public/icons/ui/close.png').folder-icon

      div.flex.folder-panel.full-width.q-mt-md.q-pb-sm
        div.flex.line.q-px-sm.q-py-sm
          img(src='public/icons/ui/new.png').panel-icon
          div New
        div.flex.line.q-px-sm.q-py-sm
          img(src='public/icons/ui/cut.png').panel-icon
          img(src='public/icons/ui/copy.png').panel-icon
          img(src='public/icons/ui/paste.png').panel-icon
          img(src='public/icons/ui/rename.png').panel-icon
        div.flex.line.q-px-sm.q-py-sm
          div.flex
            img(src='public/icons/ui/sort.png').panel-icon
            div Sort
          div.flex
            img(src='public/icons/ui/view.png').panel-icon
            div View

    div.flex.no-wrap.q-my-sm.items-center
      SvgControl(name='left').q-mx-md
      SvgControl(name='right').q-mx-md
      SvgControl(name='top').q-mx-md
      input.full-width
      input(placeholder='search').q-mx-sm

    div.flex.full-height.full-width.no-wrap
      div.nav-bar
        .q-pa-md.q-gutter-sm
          q-tree(:nodes='folderStore.navbar' node-key='label' no-connectors v-model:expanded='expanded' default-expand-all)

      div.content-wrap.full-height.full-width
          div.folder-grid
            div(v-for="(folder, index) in folderStore.folders" :key="index").folder-container.flex.column.items-center
              img(:src="folder.img").folder-img
              div {{ folder.label }}
      q-card-actions(align='right')
</template>

<script>
import { useDialogPluginComponent } from 'quasar'
import { ref } from 'vue'
import { useFolderStore } from 'stores/file-store.ts'
import SvgControl from 'components/SvgControl.vue'
import vueDragResize from 'vue-drag-resize'

export default {
  components: {
    SvgControl,
    vueDragResize
  },

  props: {
  },

  emits: [
    ...useDialogPluginComponent.emits
  ],

  setup () {
    const { dialogRef, onDialogHide } = useDialogPluginComponent()
    const folderStore = useFolderStore()

    const width = ref(0)
    const height = ref(0)
    const top = ref(0)
    const left = ref(0)

    const resize = (newRect) => {
      width.value = newRect.width
      height.value = newRect.height
      top.value = newRect.top
      left.value = newRect.left
    }

    return {
      dialogRef,
      onDialogHide,
      folderStore,
      resize,

      expanded: ref(['Satisfied customers (with avatar)', 'Good food (with icon)'])
    }
  }
}
</script>

<style lang="scss">
.file-modal {
  &, .q-card, .q-dialog__backdrop {
    height: calc(100vh - 50px) !important;
  }
  .q-dialog__inner {
    bottom: unset !important;
  }
  .wrapper {
    background: $primary;
    border-bottom: 1px solid #DDDDDF;

    .folder-up {
      height: 30px;

      .icon-wrap:hover {
        transition: all .3s;
      }
      .icon-wrap:hover {
        background: #DDDDDF;
      }
    }

    .folder-panel {
      .line {
        border-right: 1px solid black;

        .panel-icon {
          width: 20px;
          height: fit-content;
          margin: 0 10px 0 10px;
        }
      }
    }

    .icon-img {
      width: 15px;
      height: fit-content;
    }
    .folder-icon {
      width: 30px;
      padding: 0px 10px 0px 10px;
    }
  }

  .nav-bar {
    width: 200px;
    height: 100%;
    border-right: 3px solid #DDDDDD;
  }

  .folder-img {
    width: 90px;
  }
  .content-wrap {

    .folder-grid {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: repeat(auto-fill, 120px);

      .folder-container:hover {
        background: #D6F3FF;
      }
    }
  }

  .q-tree__node-header-content {
    .q-tree__avatar {
      width: 16px;
      height: auto;
      border-radius: unset;
    }
    div {
      font-size: 12px;
    }
  }
  .q-tree__children {
    padding-left: 10px;
  }
}
</style>
