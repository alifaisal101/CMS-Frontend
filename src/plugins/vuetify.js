import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { md3 } from 'vuetify/blueprints'

import { createVuetify } from 'vuetify'

import themesDb from './themes.db'

export default createVuetify({
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      ...themesDb
    }
  },
  blueprint: md3,
})
