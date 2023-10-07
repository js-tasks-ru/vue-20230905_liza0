import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  data(){
    return{
      count:1,

      props: {
        count: {type: Number, default: 0}
      }
    }
  },
  // Компонент должен иметь входной параметр и порождать событие

  template: `<button type="button">{{ count }}</button>`,
});
