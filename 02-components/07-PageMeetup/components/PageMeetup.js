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
      error:null
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
        this.meetup = null;
        this.meetup = await fetchMeetupById(this.meetupId).catch(err => this.error = err)
      },
    }
  },


  async mounted() {
    this.meetup = await fetchMeetupById(this.meetupId).catch(err => this.error = err)
  },

  template: `
    <div class="page-meetup">

    <template v-if="error == null">
      <MeetupView  v-if="meetup != null" :meetup="meetup" />

      <UiContainer v-if="meetup == null">
        <UiAlert>Загрузка...</UiAlert>
      </UiContainer>
    </template>

      <UiContainer v-else>
        <UiAlert>{{ error }}</UiAlert>
      </UiContainer>
    </div>`,
});
