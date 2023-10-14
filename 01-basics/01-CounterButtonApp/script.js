import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const ButtonComponent = defineComponent({
  name: "ButtonComponent",

  data(){
    return{
      counter : 0
    }
  },

});

const app = createApp(ButtonComponent);
const vm = app.mount('#app')

