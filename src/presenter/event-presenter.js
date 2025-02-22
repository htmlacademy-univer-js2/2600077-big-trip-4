import EditForm from '../view/edit-form';
import EventItem from '../view/event-item';
import {remove, render, replace} from '../framework/render';
import {UpdateType, UserAction} from '../const';
import {isSameDay} from '../utils/utils';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export default class EventPresenter {
  #destinations = null;
  #offers = null;
  #eventItem = null;
  #editForm = null;
  #eventListComponent = null;
  #event = null;
  #handleDataChange = null;
  #handleModeChange = null;
  #mode = Mode.DEFAULT;
  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#editForm.reset(this.#event);
      this.#replaceFromEditToItem();
    }
  };

  constructor({destinations, offers, eventListComponent, onDataChange, onModeChange}) {
    this.#destinations = destinations;
    this.#offers = offers;
    this.#eventListComponent = eventListComponent;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }

  init(event) {
    const prEventItem = this.#eventItem;
    const prEditForm = this.#editForm;
    this.#event = event;
    this.#editForm = new EditForm({
      event: this.#event,
      destinations: this.#destinations,
      offers: this.#offers,
      submitHandler: async (value) => {
        const isMinor = !isSameDay(value.date_from, this.#event.date_from) || !isSameDay(value.date_to, this.#event.date_to);
        await this.#handleDataChange(
          UserAction.UPDATE_EVENT,
          isMinor ? UpdateType.MINOR : UpdateType.PATCH,
          value
        );
        this.#replaceFromEditToItem();
      },
      clickHandler: () => {
        this.#editForm.reset(this.#event);
        this.#replaceFromEditToItem();
      },
      deleteHandler: async (value) => {
        await this.#handleDataChange(
          UserAction.DELETE_EVENT,
          UpdateType.MINOR,
          value,
        );
      }
    });
    this.#eventItem = new EventItem({
      event: this.#event,
      destinations: this.#destinations,
      offers: this.#offers,
      clickHandler: () => {
        this.#replaceFromItemToEdit();
      },
      favoriteClickHandler: () => {
        this.#handleFavoriteChange();
      }
    });

    if (prEventItem === null || prEditForm === null) {
      render(this.#eventItem, this.#eventListComponent.element);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#eventItem, prEventItem);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#editForm, prEditForm);
    }

    remove(prEventItem);
    remove(prEditForm);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#editForm.reset(this.#event);
      this.#replaceFromEditToItem();
    }
  }

  destroy() {
    remove(this.#eventItem);
    remove(this.#editForm);
  }

  #replaceFromEditToItem() {
    replace(this.#eventItem, this.#editForm);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = Mode.DEFAULT;
  }

  #replaceFromItemToEdit() {
    replace(this.#editForm, this.#eventItem);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  }

  #handleFavoriteChange() {
    this.#handleDataChange(
      UserAction.UPDATE_EVENT,
      UpdateType.MINOR,
      {...this.#event, is_favorite: !this.#event.is_favorite}
    );
  }
}
