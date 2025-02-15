import {mockDestinations, mockEvents, mockOffers} from '../mock/event';
import Observable from '../framework/observable';
import {updateItem} from '../utils/utils';

export default class EventsModel extends Observable{
  #events = [...mockEvents];

  get events() {
    return this.#events;
  }

  updateEvent(updateType, event) {
    const index = this.#events.findIndex((e) => e.id === event.id);
    if (index === -1) {
      throw new Error('Can\'t update unexisting event');
    }

    this.#events = updateItem(this.#events, event);

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
    return [...mockDestinations];
  }

  get offers() {
    return [...mockOffers];
  }
}
