import { defineComponent } from './vendor/vue.esm-browser.js';
import MeetupView from './components/MeetupView.js';
import meetups from './api/meetups.js';

export default defineComponent({
  name: 'App',

  components: {
    MeetupView,
  },

  data() {
    return {
      meetups: meetups,
    };
  },

  template: `
    <div class="page-meetup" v-for="meetup in meetups">
      <MeetupView :meetup="meetup" />
    </div>
  `,
});
