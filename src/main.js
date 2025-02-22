import Presenter from './presenter/presenter';
import EventsModel from './model/events-model';
import FilterPresenter from './presenter/filter-presenter';
import FilterModel from './model/filter-model';
import EventsApiService from './events-api-service';

const AUTHORIZATION = 'Basic hS2sfS423wcl1sa2j';
const END_POINT = 'https://21.objects.htmlacademy.pro/big-trip';

const eventsModel = new EventsModel({eventsApiService: new EventsApiService(END_POINT, AUTHORIZATION)});
const filterModel = new FilterModel();
const presenter = new Presenter({eventsModel, filterModel});
const filterContainer = document.querySelector('.trip-controls__filters');
const filterPresenter = new FilterPresenter({filterContainer,filterModel, eventsModel});

presenter.init();
filterPresenter.init();
eventsModel.init();
