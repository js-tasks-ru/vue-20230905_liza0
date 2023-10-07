import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const CalculatorComponent = defineComponent({
  name: "CalculatorComponent",

  data(){
    return{
      sum_number:0,
      first_number: 0,
      second_number: 0,
      action : ''
    }
  },

  watch: {
    action(newValue){
        if( newValue === "sum"){
          return this.sum_number = this.first_number + this.second_number;
        }
        if( newValue === "subtract"){
          return this.sum_number = this.first_number - this.second_number;
        }
        if( newValue === "multiply"){
          return this.sum_number = this.first_number * this.second_number;
        }
        if( newValue === "divide"){
          return this.sum_number = this.first_number / this.second_number;
        }
    }
  }
});

const app = createApp(CalculatorComponent);
const vm = app.mount('#app')
