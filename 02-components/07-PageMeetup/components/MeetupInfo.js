import { defineComponent } from '../vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',

  props:{
    organizer:{type: String},
    place:{type: String},
    date:{type: Number},
  },

  methods: {
    isoDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString(navigator.language, options);
    },

    dateTime(date){
      return new Date(date).toISOString().substring(0, 10);
    },
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
        <time :datetime="dateTime(this.date)">{{ isoDate(this.date) }}</time>
      </li>
    </ul>`,
});
