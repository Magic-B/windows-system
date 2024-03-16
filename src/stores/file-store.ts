import { defineStore } from 'pinia'

export const useFolderStore = defineStore('counter', {
  state: () => ({
    folders: [
      { img: 'public/icons/win/folder.png', label: '.config', alt: '.config' },
      { img: 'public/icons/win/folder.png', label: 'AppData', alt: 'AppData' },
      { img: 'public/icons/win/desk.png', label: 'Desktop', alt: 'Desktop' },
      { img: 'public/icons/win/docs.png', label: 'Documents', alt: 'Documents' },
      { img: 'public/icons/win/down.png', label: 'Downloads', alt: 'Downloads' },
      { img: 'public/icons/win/music.png', label: 'Music', alt: 'Music' },
      { img: 'public/icons/win/pics.png', label: 'Pictures', alt: 'Pictures' },
      { img: 'public/icons/win/vid.png', label: 'Videos', alt: 'Videos' },
      { img: 'public/icons/win/folder.png', label: 'Github', alt: 'Github' },
      { img: 'public/icons/win/onedrive.png', label: 'OneDrive', alt: 'OneDrive' },
      { img: 'public/icons/win/folder.png', label: 'Contacts', alt: 'Contacts' }
    ],
    navbar: [
      {
        label: 'Quick access',
        avatar: 'public/icons/win/star-sm.png',
        children: [
          {
            label: 'Downloads',
            avatar: 'public/icons/win/down-sm.png'
          },
          {
            label: 'Magic-B',
            avatar: 'public/icons/win/user-sm.png'
          },
          {
            label: 'Documents',
            avatar: 'public/icons/win/docs-sm.png'
          },
          {
            label: 'Github',
            avatar: 'public/icons/win/folder-sm.png'
          },
          {
            label: 'Pictures',
            avatar: 'public/icons/win/pics-sm.png'
          }
        ]
      },
      {
        label: 'OneDrive',
        avatar: 'public/icons/win/onedrive-sm.png',
        children: [
          {
            label: 'Downloads',
            avatar: 'public/icons/win/folder-sm.png'
          },
          {
            label: 'Magic-B',
            avatar: 'public/icons/win/folder-sm.png'
          },
          {
            label: 'Documents',
            avatar: 'public/icons/win/folder-sm.png'
          },
          {
            label: 'Github',
            avatar: 'public/icons/win/folder-sm.png'
          },
          {
            label: 'Pictures',
            avatar: 'public/icons/win/folder-sm.png'
          }
        ]
      },
      {
        label: 'This PC',
        avatar: 'public/icons/win/thispc-sm.png',
        children: [
          {
            label: 'Desktop',
            avatar: 'public/icons/win/desk-sm.png'
          },
          {
            label: 'Documents',
            avatar: 'public/icons/win/docs-sm.png'
          },
          {
            label: 'Downloads',
            avatar: 'public/icons/win/down-sm.png'
          },
          {
            label: 'Music-B',
            avatar: 'public/icons/win/music-sm.png'
          },
          {
            label: 'Pictures',
            avatar: 'public/icons/win/pics-sm.png'
          },
          {
            label: 'Videos',
            avatar: 'public/icons/win/vid-sm.png'
          },
          {
            label: 'OS (C:)',
            avatar: 'public/icons/win/disc-sm.png'
          },
          {
            label: 'Magic (D:)',
            avatar: 'public/icons/win/disk-sm.png'
          }
        ]
      }
    ],
    filter: ''
  }),
  getters: {
    filteredFolders: (state) => state.folders.filter((folder) => folder.label.includes(state.filter))
  },
  actions: {
  }
})
