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
        div.flex.line
          img(src='public/icons/ui/new.png').panel-icon
          div New
        div.flex.line
          img(src='public/icons/ui/cut.png').panel-icon
          img(src='public/icons/ui/copy.png').panel-icon
          img(src='public/icons/ui/paste.png').panel-icon
          img(src='public/icons/ui/rename.png').panel-icon
        div.flex.line
          div.flex
            img(src='public/icons/ui/sort.png').panel-icon
            div Sort
          div.flex
            img(src='public/icons/ui/view.png').panel-icon
            div View

    div.flex.no-wrap.q-mt-sm
      SvgControl(name='left').q-mx-md
      SvgControl(name='right').q-mx-md
      SvgControl(name='top').q-mx-md
      input.full-width
      input

    div.flex.full-height.full-width.no-wrap
      div.nav-bar
        .q-pa-md.q-gutter-sm
          q-tree(:nodes='simple' node-key='label' no-connectors v-model:expanded='expanded')

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

export default {
  components: {
    SvgControl
  },

  props: {
  },

  emits: [
    ...useDialogPluginComponent.emits
  ],

  setup () {
    const { dialogRef, onDialogHide } = useDialogPluginComponent()
    const folderStore = useFolderStore()

    return {
      dialogRef,
      onDialogHide,
      folderStore,

      expanded: ref(['Satisfied customers (with avatar)', 'Good food (with icon)']),

      simple: [
        {
          label: 'Satisfied customers (with avatar)',
          avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
          children: [
            {
              label: 'Good food (with icon)',
              icon: 'restaurant_menu',
              children: [
                { label: 'Quality ingredients' },
                { label: 'Good recipe' }
              ]
            },
            {
              label: 'Good service (disabled node with icon)',
              icon: 'room_service',
              disabled: true,
              children: [
                { label: 'Prompt attention' },
                { label: 'Professional waiter' }
              ]
            },
            {
              label: 'Pleasant surroundings (with icon)',
              icon: 'photo',
              children: [
                {
                  label: 'Happy atmosphere (with image)',
                  img: 'https://cdn.quasar.dev/img/logo_calendar_128px.png'
                },
                { label: 'Good table presentation' },
                { label: 'Pleasing decor' }
              ]
            }
          ]
        }
      ]
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
    width: 190px;
    height: 100%;
    border-right: 3px #DDDDDD solid;
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
}
</style>
