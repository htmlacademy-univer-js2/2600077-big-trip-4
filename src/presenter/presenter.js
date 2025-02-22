import {remove, render, RenderPosition} from '../framework/render';
import EventList from '../view/event-list';
import Sorting from '../view/sorting';
import EventPresenter from './event-presenter';
import {FilterType, UpdateType, UserAction} from '../const';
import {filter} from '../utils/filter';
import LoadingView from '../view/loading-view';

export default class Presenter {
  #eventListComponent = new EventList();
  #loadingComponent = new LoadingView();
  #eventsContainer = document.querySelector('.trip-events');
  #eventsModel = null;
  #eventPresenters = new Map();
  #filterType = FilterType.EVERYTHING;
  #filterModel = null;
  #sortingComponent = null;
  #isLoading = true;
  #handleEventChange = async (actionType, updateType, update) => {
    switch (actionType) {
      case UserAction.UPDATE_EVENT:
        await this.#eventsModel.updateEvent(updateType, update);
        break;
      case UserAction.DELETE_EVENT:
        this.#eventsModel.deleteEvent(updateType, update);
        break;
    }
  };

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#eventPresenters.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        this.#clearList();
        this.#renderList();
        break;
      case UpdateType.MAJOR:
        this.#clearList();
        this.#renderList();
        break;
      case UpdateType.INIT:
        this.#isLoading = false;
        remove(this.#loadingComponent);
        this.#renderList();
        break;
    }
  };

  #handleModeChange = () => {
    this.#eventPresenters.forEach((event) => event.resetView());
  };

  constructor({eventsModel, filterModel}) {
    this.#eventsModel = eventsModel;
    this.#filterModel = filterModel;

    this.#eventsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  get events() {
    this.#filterType = this.#filterModel.filter;
    const filteredEvents = filter[this.#filterType](this.#eventsModel.events);

    return filteredEvents;
  }

  #renderList() {
    if (this.#isLoading) {
      this.#renderLoading();
      return;
    }
    if(!this.#eventsModel.events.length) {
      return;
    }
    this.#sortingComponent = new Sorting();
    render(this.#sortingComponent, this.#eventsContainer);
    render(this.#eventListComponent, this.#eventsContainer);

    for (let i = 0; i < this.events.length; i++) {
      this.#renderEvent(this.events[i]);
    }
  }

  #clearList() {
    this.#eventPresenters.forEach((event) => event.destroy());
    this.#eventPresenters.clear();

    remove(this.#sortingComponent);
    remove(this.#loadingComponent);
  }

  init() {
    this.#renderList();
  }

  #renderEvent(event) {
    const eventPresenter = new EventPresenter({
      destinations: this.#eventsModel.destinations,
      offers: this.#eventsModel.offers,
      eventListComponent: this.#eventListComponent,
      onDataChange: this.#handleEventChange,
      onModeChange: this.#handleModeChange
    });
    eventPresenter.init(event);
    this.#eventPresenters.set(event.id, eventPresenter);
  }

  #renderLoading() {
    render(this.#loadingComponent, this.#eventsContainer, RenderPosition.AFTERBEGIN);
  }
}
