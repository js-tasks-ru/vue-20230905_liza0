import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiAlert from './UiAlert.js';
import UiContainer from './UiContainer.js';
import MeetupCover from './MeetupCover.js';
import MeetupDescription from './MeetupDescription.js';
import MeetupInfo from './MeetupInfo.js';
import MeetupAgenda from './MeetupAgenda.js';

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupCover,
    MeetupDescription,
    MeetupInfo,
    MeetupAgenda
  },

  props: {
    meetup: {
      type: Object
    },
  },

  template: `
    <div>

    <MeetupCover :title="meetup.title" :image="meetup.image" />

    <UiContainer>
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <MeetupDescription :description="meetup.description" />

            <h3>Программа</h3>
            <MeetupAgenda v-if="meetup.agenda" :agenda="meetup.agenda" />
            <UiAlert v-else>Программа пока пуста...</UiAlert>
          </div>
          <div class="meetup__aside">
          <MeetupInfo
            :organizer="meetup.organizer"
            :place="meetup.place"
            :date="meetup.date"
          />
          </div>
        </div>
      </UiContainer>
    </div>`,
});
