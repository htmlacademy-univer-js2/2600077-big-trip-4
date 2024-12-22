import {render, replace} from '../framework/render';
import EventItem from '../view/event-item';
import EventList from '../view/event-list';
import Filters from '../view/filters';
import Sorting from '../view/sorting';
import EditForm from '../view/edit-form';

export default class Presenter {
  #eventListComponent = new EventList();
  #eventsContainer = document.querySelector('.trip-events');
  #filterContainer = document.querySelector('.trip-controls__filters');
  #eventsModel = null;
  #events = null;
  #destinations = null;
  #offers = null;

  constructor({eventsModel}) {
    this.#eventsModel = eventsModel;
  }

  init() {
    this.#events = this.#eventsModel.events;
    this.#destinations = this.#eventsModel.destinations;
    this.#offers = this.#eventsModel.offers;

    render(new Filters(), this.#filterContainer);
    render(new Sorting(), this.#eventsContainer);
    render(this.#eventListComponent, this.#eventsContainer);

    for (let i = 0; i < this.#events.length; i++) {
      this.#renderEvent(this.#events[i]);
    }
  }

  #renderEvent(event) {
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFromEditToItem();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const editForm = new EditForm({event, destinations: this.#destinations, offers: this.#offers, submitHandler: () => {
      replaceFromEditToItem();
      document.removeEventListener('keydown', escKeyDownHandler);
    }, clickHandler: () => {
      replaceFromEditToItem();
      document.removeEventListener('keydown', escKeyDownHandler);
    }});
    const eventItem = new EventItem({event, destinations: this.#destinations, offers: this.#offers, clickHandler: () => {
      replaceFromItemToEdit();
      document.addEventListener('keydown', escKeyDownHandler);
    }});

    function replaceFromEditToItem() {
      replace(eventItem, editForm);
    }

    function replaceFromItemToEdit() {
      replace(editForm,eventItem);
    }

    render(eventItem, this.#eventListComponent.element);
  }
}
