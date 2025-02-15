import AbstractView from '../framework/view/abstract-view';

function createFilterItemTemplate(filter, currentFilterType) {
  const id = `filter-${filter.id.toLowerCase()}`;
  const checked = currentFilterType === filter.id;
  return `
    <div class="trip-filters__filter">
      <input id="${id}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter.id}" ${checked ? 'checked' : ''}>
      <label class="trip-filters__filter-label" for="${id}">${filter.name}</label>
    </div>
  `;
}

function filtersTemplate(filterItems, currentFilterType) {
  return `
        <form class="trip-filters" action="#" method="get">
        ${filterItems.map((item) => createFilterItemTemplate(item, currentFilterType)).join('')}
          <button class="visually-hidden" type="submit">Accept filter</button>
        </form>
  `;
}

export default class Filters extends AbstractView {
  #currentFilterType = null;
  #filters = null;
  #handleFilterTypeChange = null;
  #filterTypeChangeHandler = (evt) => {
    evt.preventDefault();
    this.#handleFilterTypeChange(evt.target.value);
  };

  constructor({filters, currentFilterType, onFilterTypeChange}) {
    super();
    this.#filters = filters;
    this.#currentFilterType = currentFilterType;
    this.#handleFilterTypeChange = onFilterTypeChange;

    this.element.addEventListener('change', this.#filterTypeChangeHandler);
  }

  get template() {
    return filtersTemplate(this.#filters, this.#currentFilterType);
  }
}
