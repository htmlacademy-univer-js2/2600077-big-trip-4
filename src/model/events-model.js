import Observable from '../framework/observable';
import {updateItem} from '../utils/utils';
import {UpdateType} from '../const';

export default class EventsModel extends Observable {
  #events = [];
  #destinations = [];
  #offers = [];
  #eventsApiService = null;

  constructor({eventsApiService}) {
    super();
    this.#eventsApiService = eventsApiService;
  }

  get events() {
    return this.#events;
  }

  async init() {
    try {
      const events = await this.#eventsApiService.events;
      this.#events = events.map(this.#adaptToClient);
      this.#destinations = await this.#eventsApiService.destinations;
      this.#offers = await this.#eventsApiService.offers;
    } catch (error) {
      this.#events = [];
      this.#destinations = [];
      this.#offers = [];
    }

    this._notify(UpdateType.INIT, null);
  }

  async updateEvent(updateType, event) {
    const index = this.#events.findIndex((e) => e.id === event.id);
    if (index === -1) {
      throw new Error('Can\'t update unexisting event');
    }

    try {
      const res = await this.#eventsApiService.updateEvent(event).then(this.#adaptToClient);
      this.#events = updateItem(this.#events, res);
    } catch (error) {
      throw new Error('Can\'t update event');
    }

    this._notify(updateType, event);
  }

  addEvent(updateType, event) {
    this.#events = [
      event,
      ...this.#events,
    ];

    this._notify(updateType, event);
  }

  deleteEvent(updateType, event) {
    const index = this.#events.findIndex((e) => e.id === event.id);
    if (index === -1) {
      throw new Error('Can\'t delete unexisting event');
    }

    this.#events = this.#events.filter((e, i) => i !== index);

    this._notify(updateType);
  }

  get destinations() {
    return this.#destinations;
  }

  get offers() {
    return this.#offers;
  }

  #adaptToClient(event) {
    return {...event, 'date_from': new Date(event['date_from']), 'date_to': new Date(event['date_to']),};
  }
}
