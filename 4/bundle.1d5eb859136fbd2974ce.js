(()=>{var e={484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",l="week",o="month",u="quarter",c="year",d="date",p="Invalid Date",v=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,_={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},h=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},m={s:h,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+h(i,2,"0")+":"+h(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,o),r=n-s<0,a=t.clone().add(i+(r?-1:1),o);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:o,y:c,w:l,d:a,D:d,h:r,m:s,s:i,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",b={};b[y]=_;var g=function(e){return e instanceof w},$=function e(t,n,i){var s;if(!t)return y;if("string"==typeof t){var r=t.toLowerCase();b[r]&&(s=r),n&&(b[r]=n,s=r);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var l=t.name;b[l]=t,s=l}return!i&&s&&(y=s),s||!i&&y},M=function(e,t){if(g(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new w(n)},D=m;D.l=$,D.i=g,D.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function _(e){this.$L=$(e.locale,null,!0),this.parse(e)}var h=_.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(v);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return D},h.isValid=function(){return!(this.$d.toString()===p)},h.isSame=function(e,t){var n=M(e);return this.startOf(t)<=n&&n<=this.endOf(t)},h.isAfter=function(e,t){return M(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<M(e)},h.$g=function(e,t,n){return D.u(e)?this[t]:this.set(n,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,t){var n=this,u=!!D.u(t)||t,p=D.p(e),v=function(e,t){var i=D.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return u?i:i.endOf(a)},f=function(e,t){return D.w(n.toDate()[e].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},_=this.$W,h=this.$M,m=this.$D,y="set"+(this.$u?"UTC":"");switch(p){case c:return u?v(1,0):v(31,11);case o:return u?v(1,h):v(0,h+1);case l:var b=this.$locale().weekStart||0,g=(_<b?_+7:_)-b;return v(u?m-g:m+(6-g),h);case a:case d:return f(y+"Hours",0);case r:return f(y+"Minutes",1);case s:return f(y+"Seconds",2);case i:return f(y+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(e,t){var l,u=D.p(e),p="set"+(this.$u?"UTC":""),v=(l={},l[a]=p+"Date",l[d]=p+"Date",l[o]=p+"Month",l[c]=p+"FullYear",l[r]=p+"Hours",l[s]=p+"Minutes",l[i]=p+"Seconds",l[n]=p+"Milliseconds",l)[u],f=u===a?this.$D+(t-this.$W):t;if(u===o||u===c){var _=this.clone().set(d,1);_.$d[v](f),_.init(),this.$d=_.set(d,Math.min(this.$D,_.daysInMonth())).$d}else v&&this.$d[v](f);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[D.p(e)]()},h.add=function(n,u){var d,p=this;n=Number(n);var v=D.p(u),f=function(e){var t=M(p);return D.w(t.date(t.date()+Math.round(e*n)),p)};if(v===o)return this.set(o,this.$M+n);if(v===c)return this.set(c,this.$y+n);if(v===a)return f(1);if(v===l)return f(7);var _=(d={},d[s]=e,d[r]=t,d[i]=1e3,d)[v]||1,h=this.$d.getTime()+n*_;return D.w(h,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=D.z(this),r=this.$H,a=this.$m,l=this.$M,o=n.weekdays,u=n.months,c=function(e,n,s,r){return e&&(e[n]||e(t,i))||s[n].slice(0,r)},d=function(e){return D.s(r%12||12,e,"0")},v=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},_={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:D.s(l+1,2,"0"),MMM:c(n.monthsShort,l,u,3),MMMM:c(u,l),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,o,2),ddd:c(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(r),HH:D.s(r,2,"0"),h:d(1),hh:d(2),a:v(r,a,!0),A:v(r,a,!1),m:String(a),mm:D.s(a,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:s};return i.replace(f,(function(e,t){return t||_[e]||s.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(n,d,p){var v,f=D.p(d),_=M(n),h=(_.utcOffset()-this.utcOffset())*e,m=this-_,y=D.m(this,_);return y=(v={},v[c]=y/12,v[o]=y,v[u]=y/3,v[l]=(m-h)/6048e5,v[a]=(m-h)/864e5,v[r]=m/t,v[s]=m/e,v[i]=m/1e3,v)[f]||m,p?y:D.a(y)},h.daysInMonth=function(){return this.endOf(o).$D},h.$locale=function(){return b[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=$(e,t,!0);return i&&(n.$L=i),n},h.clone=function(){return D.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},_}(),S=w.prototype;return M.prototype=S,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",o],["$y",c],["$D",d]].forEach((function(e){S[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,w,M),e.$i=!0),M},M.locale=$,M.isDayjs=g,M.unix=function(e){return M(1e3*e)},M.en=b[y],M.Ls=b,M.p={},M}()}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function t(e,t,n="beforeend"){t.insertAdjacentElement(n,e.getElement())}var i=n(484),s=n.n(i);function r(e,t){return s()(e).format(t)}function a(e){return`${e}`.padStart(2,"0")}function l(e,t){return t.find((t=>t.id===e))}function o(e){return`img/icons/${e}.png`}function u(e,t){return t.find((t=>t.type===e))?.offers}class c{constructor({event:e,destinations:t,offers:n}){this.event=e,this.destinations=t,this.offers=n}getTemplate(){return function(e,t,n){const{date_from:i,date_to:c,type:d,destination:p,base_price:v,is_favorite:f,offers:_}=e,h=r(i,"MMM D"),m=r(i,"YYYY-MM-DD"),y=function(e,t){const n=s()(e),i=s()(t).diff(n,"minute"),r=Math.floor(i/1440),l=i%1440,o=Math.floor(l/60),u=l%60,c=[];return r>0&&c.push(`${a(r)}D`),o>0&&c.push(`${a(o)}H`),u>0&&c.push(`${a(u)}M`),c.join(" ")}(i,c),b=l(p,t),g=function(e,t){return`${e} ${t}`}(d,b?.name),$=o(d),M=r(i,"HH:MM"),D=r(c,"HH:MM"),w=f?"event__favorite-btn--active":"";return`\n            <li class="trip-events__item">\n              <div class="event">\n                <time class="event__date" datetime="${m}">${h}</time>\n                <div class="event__type">\n                  <img class="event__type-icon" width="42" height="42" src="${$}" alt="Event type icon">\n                </div>\n                <h3 class="event__title">${g}</h3>\n                <div class="event__schedule">\n                  <p class="event__time">\n                    <time class="event__start-time" datetime="${i.toISOString()}">${M}</time>\n                    &mdash;\n                    <time class="event__end-time" datetime="${i.toISOString()}">${D}</time>\n                  </p>\n                  <p class="event__duration">${y}</p>\n                </div>\n                <p class="event__price">\n                  &euro;&nbsp;<span class="event__price-value">${v}</span>\n                </p>\n                <h4 class="visually-hidden">Offers:</h4>\n                <ul class="event__selected-offers">\n                 ${_.map((e=>function(e,t,n){const i=u(t,n)||[],{title:s,price:r}=function(e,t){return t?.find((t=>t.id===e))}(e,i)||{};return`\n          <li class="event__offer">\n            <span class="event__offer-title">${s}</span>\n              &plus;&euro;&nbsp;\n            <span class="event__offer-price">${r}</span>\n          </li>\n  `}(e,d,n))).join("")}\n                </ul>\n                <button class="event__favorite-btn ${w}" type="button">\n                  <span class="visually-hidden">Add to favorite</span>\n                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n                  </svg>\n                </button>\n                <button class="event__rollup-btn" type="button">\n                  <span class="visually-hidden">Open event</span>\n                </button>\n              </div>\n            </li>\n  `}(this.event,this.destinations,this.offers)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class d{getTemplate(){return'\n        <ul class="trip-events__list"></ul>\n    '}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class p{getTemplate(){return'\n        <form class="trip-filters" action="#" method="get">\n          <div class="trip-filters__filter">\n            <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">\n            <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n          </div>\n\n          <div class="trip-filters__filter">\n            <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n            <label class="trip-filters__filter-label" for="filter-future">Future</label>\n          </div>\n\n          <div class="trip-filters__filter">\n            <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n            <label class="trip-filters__filter-label" for="filter-present">Present</label>\n          </div>\n\n          <div class="trip-filters__filter">\n            <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>\n            <label class="trip-filters__filter-label" for="filter-past">Past</label>\n          </div>\n\n          <button class="visually-hidden" type="submit">Accept filter</button>\n        </form>\n  '}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class v{getTemplate(){return'\n          <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n            <div class="trip-sort__item  trip-sort__item--day">\n              <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n              <label class="trip-sort__btn" for="sort-day">Day</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--event">\n              <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n              <label class="trip-sort__btn" for="sort-event">Event</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--time">\n              <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n              <label class="trip-sort__btn" for="sort-time">Time</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--price">\n              <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>\n              <label class="trip-sort__btn" for="sort-price">Price</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--offer">\n              <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n              <label class="trip-sort__btn" for="sort-offer">Offers</label>\n            </div>\n          </form>\n  '}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class f{constructor({event:e,destinations:t,offers:n}){this.event=e,this.destinations=t,this.offers=n}getTemplate(){return function(e,t,n){const{date_from:i,date_to:s,type:a,destination:c,base_price:d,offers:p}=e,v=l(c,t),f=o(a),_=r(i,"DD/MM/YY HH:MM"),h=r(s,"DD/MM/YY HH:MM"),m=u(a,n)||[],y=e=>e===a?"checked":"";return`\n            <li class="trip-events__item">\n              <form class="event event--edit" action="#" method="post">\n                <header class="event__header">\n                  <div class="event__type-wrapper">\n                    <label class="event__type  event__type-btn" for="event-type-toggle-1">\n                      <span class="visually-hidden">Choose event type</span>\n                      <img class="event__type-icon" width="17" height="17" src="${f}" alt="Event type icon">\n                    </label>\n                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n                    <div class="event__type-list">\n                      <fieldset class="event__type-group">\n                        <legend class="visually-hidden">Event type</legend>\n\n                        <div class="event__type-item">\n                          <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi" ${y("taxi")}>\n                          <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus" ${y("bus")}>\n                          <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train" ${y("train")}>\n                          <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship" ${y("ship")}>\n                          <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive" ${y("drive")}>\n                          <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" ${y("flight")}>\n                          <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in" ${y("check-in")}>\n                          <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing" ${y("sightseeing")}>\n                          <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant" ${y("restaurant")}>\n                          <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>\n                        </div>\n                      </fieldset>\n                    </div>\n                  </div>\n\n                  <div class="event__field-group  event__field-group--destination">\n                    <label class="event__label  event__type-output" for="event-destination-1">\n                      ${a}\n                    </label>\n                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${v.name}" list="destination-list-1">\n                    <datalist id="destination-list-1">\n                        ${t.map((e=>`<option value="${e.id}" >${e.name}</option>`)).join("")}\n                    </datalist>\n                  </div>\n\n                  <div class="event__field-group  event__field-group--time">\n                    <label class="visually-hidden" for="event-start-time-1">From</label>\n                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${_}">\n                    &mdash;\n                    <label class="visually-hidden" for="event-end-time-1">To</label>\n                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${h}">\n                  </div>\n\n                  <div class="event__field-group  event__field-group--price">\n                    <label class="event__label" for="event-price-1">\n                      <span class="visually-hidden">Price</span>\n                      &euro;\n                    </label>\n                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${d}">\n                  </div>\n\n                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n                  <button class="event__reset-btn" type="reset">Delete</button>\n                  <button class="event__rollup-btn" type="button">\n                    <span class="visually-hidden">Open event</span>\n                  </button>\n                </header>\n                <section class="event__details">\n                  <section class="event__section  event__section--offers">\n                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n                    <div class="event__available-offers">\n                        ${m.map((e=>function(e,t){const{title:n,price:i,id:s}=e;return`\n          <div class="event__offer-selector">\n            <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" ${t.includes(s)?"checked":""}">\n            <label class="event__offer-label" for="event-offer-luggage-1">\n              <span class="event__offer-title">${n}</span>\n                &plus;&euro;&nbsp;\n              <span class="event__offer-price">${i}</span>\n            </label>\n          </div>\n  `}(e,p))).join("")}\n                    </div>\n                  </section>\n\n                  <section class="event__section  event__section--destination">\n                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n                    <p class="event__destination-description">${v.description}</p>\n                  </section>\n                </section>\n              </form>\n            </li>\n  `}(this.event,this.destinations,this.offers)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const _=[{id:"1",base_price:20,date_from:new Date("December 20, 2024 03:24:00"),date_to:new Date("December 20, 2024 03:54:00"),destination:"amst",is_favorite:!0,offers:["uber"],type:"taxi"},{id:"2",base_price:1200,date_from:new Date("December 20, 2024 10:24:00"),date_to:new Date("December 21, 2024 06:24:00"),destination:"amst",is_favorite:!0,offers:["luggage","comfort"],type:"ship"},{id:"3",base_price:1200,date_from:new Date("December 22, 2024 10:24:00"),date_to:new Date("December 23, 2024 20:24:00"),destination:"gnv",is_favorite:!1,offers:["rent"],type:"drive"}],h=[{id:"chm",description:"Chamonix, is a beautiful city, a true asian pearl, with crowded streets.",name:"Chamonix",pictures:[{src:"https://loremflickr.com/248/152?random=7",description:"Chamonix parliament building"}]},{id:"amst",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.",name:"Amsterdam",pictures:[{src:"https://loremflickr.com/248/152?random=1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante."}]},{id:"gnv",description:"Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.",name:"Geneva",pictures:[{src:"https://loremflickr.com/248/152?random=8",description:"Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus."}]}],m=[{type:"taxi",offers:[{id:"uber",title:"Order Uber",price:20},{id:"childSeat",title:"Add child seat",price:5}]},{type:"ship",offers:[{id:"luggage",title:"Add luggage",price:50},{id:"comfort",title:"Switch to comfort",price:80}]},{type:"drive",offers:[{id:"rent",title:"Rent a car",price:200}]}],y=new class{getEvents(){return[..._]}getDestinations(){return[...h]}getOffers(){return[...m]}},b=new class{eventListComponent=new d;eventsContainer=document.querySelector(".trip-events");filterContainer=document.querySelector(".trip-controls__filters");constructor({eventsModel:e}){this.eventsModel=e}init(){this.events=this.eventsModel.getEvents(),this.destinations=this.eventsModel.getDestinations(),this.offers=this.eventsModel.getOffers(),t(new p,this.filterContainer),t(new v,this.eventsContainer),t(this.eventListComponent,this.eventsContainer),t(new f({event:this.events[0],destinations:this.destinations,offers:this.offers}),this.eventListComponent.getElement());for(let e=1;e<this.events.length;e++)t(new c({event:this.events[e],destinations:this.destinations,offers:this.offers}),this.eventListComponent.getElement())}}({eventsModel:y});b.init()})()})();
//# sourceMappingURL=bundle.1d5eb859136fbd2974ce.js.map