export const data = [
  {
    id: 1,
    title: 'Dnešní plán',
    cards: [
      {
        id: 1,
        text: 'ukol 1',
        image: false,
        labels: [
          {
            className: 'w-8 h-2 mr-2 rounded bg-fuchsia-700',
          },
          {
            className: 'w-8 h-2 mr-2 rounded bg-green-600'
          },
          {
            className: 'w-8 h-2 mr-2 rounded bg-blue-700'
          },
        ],
        tags: [
          {
            text: 'tag 1',
          },
          {
            text: 'tag 2'
          },
        ]
      },
      {
        id: 2,
        text: 'ukol 2',
      },
      {
        id: 3,
        text: 'ukol 3',
        tags: [
          {
            text: 'tag 1',
          },
          {
            text: 'tag 2'
          },
        ]
      },
    ],
  },
  {
    id:  2,
    title: 'Zítřejší plán',
    cards: [
      {
        id: 1,
        item: 'ukol 4',
        labels: [
          {
            className: 'w-8 h-2 mr-2 rounded bg-yellow-600',
          },
          {
            className: 'w-8 h-2 mr-2 rounded bg-green-600'
          },
          {
            className: 'w-8 h-2 mr-2 rounded bg-orange-600'
          }
        ]
      },
      {
        id: 2,
        item: 'ukol 5',
        labels: [
          {
            className: 'w-8 h-2 mr-2 rounded bg-green-600'
          },
          {
            className: 'w-8 h-2 mr-2 rounded bg-blue-700'
          },
        ],
      }
    ],
  },
]
