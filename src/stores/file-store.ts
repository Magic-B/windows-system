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
    filter: ''
  }),
  getters: {
    filteredFolders: (state) => state.folders.filter((folder) => folder.label.includes(state.filter))
  },
  actions: {
  }
})
