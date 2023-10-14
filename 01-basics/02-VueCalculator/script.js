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

  watch: {
    action(newValue){
      this.CheckCalculator(newValue);
    }
  },

  computed:{
    sum_number: function(){
      return this.CheckCalculator(this.action);
    }
  },

  methods:{
    CheckCalculator(value){

      let sum_number = 0;

      if( value === "sum"){
        sum_number = this.first_number + this.second_number;
      }
      if( value === "subtract"){
        sum_number = this.first_number - this.second_number;
      }
      if( value === "multiply"){
        sum_number = this.first_number * this.second_number;
      }
      if( value === "divide"){
        sum_number = this.first_number / this.second_number;
      }

      return sum_number;
    },
  }
});

const app = createApp(CalculatorComponent);
const vm = app.mount('#app')
