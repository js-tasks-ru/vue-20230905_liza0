import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  props: {
    modelValue: {type: Number, default: 0}
  },

  // Компонент должен иметь входной параметр и порождать событие

  template: `<button type="button">{{ modelValue }}</button>`,
});
