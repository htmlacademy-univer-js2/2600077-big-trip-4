import Presenter from './presenter/presenter';
import EventsModel from './model/events-model';
import FilterPresenter from './presenter/filter-presenter';
import FilterModel from './model/filter-model';

const eventsModel = new EventsModel();
const filterModel = new FilterModel();
const presenter = new Presenter({eventsModel, filterModel});
const filterContainer = document.querySelector('.trip-controls__filters');
const filterPresenter = new FilterPresenter({filterContainer,filterModel, eventsModel});

presenter.init();
filterPresenter.init();
