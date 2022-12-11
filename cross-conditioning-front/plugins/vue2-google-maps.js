import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAoE1S448d1JKzj1EFy_oCOBayla1qRTzs',
    libraries: 'places',
  },
})