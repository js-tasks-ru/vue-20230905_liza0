import { defineComponent } from './vendor/vue.esm-browser.js';
import CounterButton from './CounterButton.js';

export default defineComponent({
  name: 'App',

  components: {
    CounterButton,
  },

  data() {
    return {
      count: 0,
    };
  },

  methods:{
    countSum(){
      this.count = this.count + 1;
      return this.count;
    }
  },

  template: `
    <div class="sample container">
      <p>count = {{ count }}</p>
      <p>
        <CounterButton v-model="count" @click="countSum"/>
      </p>
      <p>
        <CounterButton v-model="count" @click="countSum"/>
      </p>
      <p>
        <CounterButton v-model="count" @click="countSum"/>
      </p>
    </div>
  `,
});
