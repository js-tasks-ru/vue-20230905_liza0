import {createApp, defineComponent} from "../01-CounterButtonApp/vendor/vue.esm-browser";

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const TitleChangeComponent = defineComponent({
  name: "TitleChangeComponent",

  data(){
    return{
      meetup: null,
      title_id:'',
      title_meetup:'',
    }
  },

  watch: {
    title_id: {
      async handler() {
        this.meetup =  await fetchMeetupById(this.title_id);
      }
    }
  },

});

const app = createApp(TitleChangeComponent);
const vm = app.mount('#app')

