import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from '../meetupService.js';
import MeetupView from './MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',

  data(){
    return{
      meetup:null,
    }
  },

  components: {
    UiAlert,
    UiContainer,
    MeetupView
  },

  props:{
    meetupId:{
      type:Number
    }
  },

  watch:{
    meetupId:{
      async handler() {
        this.meetup = await fetchMeetupById(this.meetupId);
      }
    }
  },

  async mounted() {
    this.meetup = await fetchMeetupById(this.meetupId);
  },

  template: `
    <div class="page-meetup">

      <MeetupView  v-if="meetup != null" :meetup="meetup" />

      <UiContainer v-if="meetup == null">
        <UiAlert>Загрузка...</UiAlert>
      </UiContainer>

      <UiContainer v-if="!meetup">
        <UiAlert>error</UiAlert>
      </UiContainer>
    </div>`,
});
