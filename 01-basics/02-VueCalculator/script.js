import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const CalculatorComponent = defineComponent({
  name: "CalculatorComponent",

  data(){
    return{
      first_number: 0,
      second_number: 0,
      action : ''
    }
  },

  computed:{
    sum_number() {
      if( this.action === "sum"){
        return this.first_number + this.second_number;
      }
      if( this.action === "subtract"){
        return this.first_number - this.second_number;
      }
      if( this.action === "multiply"){
        return this.first_number * this.second_number;
      }
      if( this.action === "divide"){
        return this.first_number / this.second_number;
      }
    }
  },

});

const app = createApp(CalculatorComponent);
const vm = app.mount('#app')
