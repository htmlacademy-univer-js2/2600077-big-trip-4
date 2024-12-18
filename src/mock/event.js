const mockEvents = [
  {
    'id': '1',
    'base_price': 20,
    'date_from': new Date('December 20, 2024 03:24:00'),
    'date_to': new Date('December 20, 2024 03:54:00'),
    'destination': 'amst',
    'is_favorite': true,
    'offers': [
      'uber'
    ],
    'type': 'taxi'
  },
  {
    'id': '2',
    'base_price': 1200,
    'date_from': new Date('December 20, 2024 10:24:00'),
    'date_to': new Date('December 21, 2024 06:24:00'),
    'destination': 'amst',
    'is_favorite': true,
    'offers': [
      'luggage',
      'comfort'
    ],
    'type': 'ship'
  },
  {
    'id': '3',
    'base_price': 1200,
    'date_from': new Date('December 22, 2024 10:24:00'),
    'date_to': new Date('December 23, 2024 20:24:00'),
    'destination': 'gnv',
    'is_favorite': false,
    'offers': [
      'rent'
    ],
    'type': 'drive'
  }
];

const mockDestinations = [
  {
    'id': 'chm',
    'description': 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    'name': 'Chamonix',
    'pictures': [
      {
        'src': 'https://loremflickr.com/248/152?random=7',
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': 'amst',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    'name': 'Amsterdam',
    'pictures': [
      {
        'src': 'https://loremflickr.com/248/152?random=1',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.'
      }
    ]
  },
  {
    'id': 'gnv',
    'description': 'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
    'name': 'Geneva',
    'pictures': [
      {
        'src': 'https://loremflickr.com/248/152?random=8',
        'description': 'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.'
      }
    ]
  }
];

const mockOffers = [
  {
    'type': 'taxi',
    'offers': [
      {
        'id': 'uber',
        'title': 'Order Uber',
        'price': 20
      },
      {
        'id': 'childSeat',
        'title': 'Add child seat',
        'price': 5
      }
    ]
  },
  {
    'type': 'ship',
    'offers': [
      {
        'id': 'luggage',
        'title': 'Add luggage',
        'price': 50
      },
      {
        'id': 'comfort',
        'title': 'Switch to comfort',
        'price': 80
      }
    ]
  },
  {
    'type': 'drive',
    'offers': [
      {
        'id': 'rent',
        'title': 'Rent a car',
        'price': 200
      }
    ]
  },
];

export {mockEvents, mockDestinations, mockOffers};
