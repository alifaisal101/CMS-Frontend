import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { md3 } from 'vuetify/blueprints'

import {VBtn, VNavigationDrawer} from 'vuetify/components';

import { createVuetify } from 'vuetify'

import { aliases, mdi } from 'vuetify/iconsets/mdi'
const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      myCustomLightTheme,
    }
  },
  blueprint: md3,

  aliases: {
    MyButton: VBtn,
    MyVNavigationDrawer:VNavigationDrawer
  },
  defaults: {
    global:{

    },
    VNavigationDrawer:{
      color:"black"
    },
    MyButton: { color:"secondary" },
  },

  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
})
