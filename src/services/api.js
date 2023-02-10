export default function Data() {
  return {
    content: {
      'column-1': {
        title: 'Tasks',
        creatable: true,
        id: 'column-1',
        cards: [
          {
            id: 'card-1',
            content: 'Study Flask',
            labels: ['#F52929'],
            user: 'https://avatars.dicebear.com/api/big-smile/522313213.svg',
          },
          {
            id: 'card-2',
            content: 'Plan a Project',
            labels: ['#3b5bfd'],
            user: 'https://avatars.dicebear.com/api/big-smile/522313213.svg',
          },
          {
            id: 'card-3',
            content: 'Read Goodnight Punpun',
            labels: ['#7159c1'],
            user: 'https://avatars.dicebear.com/api/big-smile/522313213.svg',
          },
        ],
      },
      'column-2': {
        title: 'Doing',
        creatable: true,
        id: 'column-2',
        cards: [
          {
            id: 'card-4',
            content: 'Study TypeScript',
            labels: ['#3b5bfd'],
            user: 'https://avatars.dicebear.com/api/big-smile/522313213.svg',
          },
        ],
      },
      'column-3': {
        title: 'On hold',
        creatable: true,
        id: 'column-3',
        cards: [
          {
            id: 'card-5',
            content: 'Study React Native',
            labels: ['#7159c1'],
            user: 'https://avatars.dicebear.com/api/big-smile/522313213.svg',
          },
          {
            id: 'card-6',
            content: 'Use React Native Maps',
            labels: ['#54e1f7'],
            user: 'https://avatars.dicebear.com/api/big-smile/522313213.svg',
          },
          {
            id: 'card-7',
            content: 'Re-watch The Witcher series from Netflix',
            labels: ['#F52929'],
            user: 'https://avatars.dicebear.com/api/big-smile/522313213.svg',
          },
        ],
      },
      'column-4': {
        title: 'Done',
        creatable: false,
        done: true,
        id: 'column-4',
        cards: [
          {
            id: 'card-8',
            content: 'Study React Beautiful Dnd',
            labels: ['#F52929'],
            user: 'https://avatars.dicebear.com/api/big-smile/522313213.svg',
          },
          {
            id: 'card-10',
            content: 'Study StyledComponents',
            labels: ['#3b5bfd'],
            user: 'https://avatars.dicebear.com/api/big-smile/522313213.svg',
          },
          {
            id: 'card-9',
            content: 'Study NextJS',
            labels: ['#54e1f7'],
            user: 'https://avatars.dicebear.com/api/big-smile/522313213.svg',
          },
        ],
      },
    },
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
  };
}
