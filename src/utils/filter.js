import {FilterType} from '../const';
import {isFutureEvent, isPastEvent, isPresentEvent} from './utils';

const filter = {
  [FilterType.EVERYTHING]: (events) => events,
  [FilterType.FUTURE]: (events) => events.filter((event) => isFutureEvent(event.date_from)),
  [FilterType.PRESENT]: (events) => events.filter((event) => isPresentEvent(event.date_from, event.date_to)),
  [FilterType.PAST]: (events) => events.filter((event) => isPastEvent(event.date_to)),
};

export {filter};
