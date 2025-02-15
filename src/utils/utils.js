import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

function formatDate(date, format) {
  return dayjs(date).format(format);
}

function formatToDisplayString(value) {
  return`${value}`.padStart(2, '0');
}

function getDuration(dateFrom, dateTo) {
  const from = dayjs(dateFrom);
  const to = dayjs(dateTo);
  const minutes = to.diff(from, 'minute');
  const days = Math.floor(minutes / (24 * 60));
  const remainingMinutes = minutes % (24 * 60);

  const hours = Math.floor(remainingMinutes / 60);
  const finalMinutes = remainingMinutes % 60;

  const result = [];

  if (days > 0) {
    result.push(`${formatToDisplayString(days)}D`);
  }
  if (hours > 0) {
    result.push(`${formatToDisplayString(hours)}H`);
  }
  if (finalMinutes > 0) {
    result.push(`${formatToDisplayString(finalMinutes)}M`);
  }

  return result.join(' ');
}

function getEvent(type, destination) {
  return `${type } ${ destination}`;
}

function getDestination(id, destinations) {
  return destinations.find((d) => d.id === id);
}

function getEventIconUrl(type) {
  return `img/icons/${type}.png`;
}

function getTypeOffers(type, offers) {
  return offers.find((d) => d.type === type)?.offers;
}

function getOffer(id, offers) {
  return offers?.find((d) => d.id === id);
}

function updateItem(items, update) {
  return items.map((item) => item.id === update.id ? update : item);
}

function isSameDay(date1, date2) {
  return dayjs(date1).isSame(date2, 'd');
}

function isFutureEvent(date) {
  return dayjs(date).isAfter(new Date(),'day');
}

function isPastEvent(date) {
  return dayjs(date).isBefore(new Date(),'day');
}

function isPresentEvent(from, to) {
  return dayjs(from).isSameOrBefore(new Date(),'day') && dayjs(to).isSameOrAfter(new Date(),'day');
}

export {
  formatDate,
  getDuration,
  getEvent,
  getDestination,
  getEventIconUrl,
  getTypeOffers,
  getOffer,
  updateItem,
  isFutureEvent,
  isPastEvent,
  isPresentEvent,
  isSameDay
};

