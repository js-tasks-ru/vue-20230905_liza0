import { defineComponent } from '../vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',

  data(){
    return {
      dateIso: this.date
    }
  },

  props:{
    organizer:{type: String},
    place:{type: String},
    date:{type: Date},
  },

  computed: {
    isoDate() {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(this.dateIso).toLocaleDateString(navigator.language, options);
    }
  },

  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time datetime="2020-01-01">{{ isoDate }}</time>
      </li>
    </ul>`,
});
