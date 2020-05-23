import { Bookmark } from 'utils/api/api.interfaces';

abstract class Api {
  static getBookmarks = (): Array<Bookmark> => {
    return [
      {
        id: 1,
        title: 'Translate',
        href: 'https://translate.google.pl',
      },
      {
        id: 2,
        title: 'diki',
        href: 'https://www.diki.pl',
      },
      {
        id: 3,
        title: 'Sidnet',
        items: [
          {
            id: 4,
            title: 'Redmine',
            href: 'https://company.sidnet.info/projects',
          },
          {
            id: 5,
            title: 'MyTasks',
            href:
              'https://company.sidnet.info/projects/time_entries?utf8=%E2%9C%93&f%5B%5D=spent_on&op%5Bspent_on%5D=m&f%5B%5D=user_id&op%5Buser_id%5D=%3D&v%5Buser_id%5D%5B%5D=me&f%5B%5D=&c%5B%5D=project&c%5B%5D=spent_on&c%5B%5D=user&c%5B%5D=activity&c%5B%5D=issue&c%5B%5D=comments&c%5B%5D=hours',
          },
          {
            id: 6,
            title: 'Test folder',
            items: [
              {
                id: 7,
                title: 'Test link',
                href: 'https://company.sidnet.info/projects',
              },
              {
                id: 8,
                title: 'Test link 2',
                href:
                  'https://company.sidnet.info/projects/time_entries?utf8=%E2%9C%93&f%5B%5D=spent_on&op%5Bspent_on%5D=m&f%5B%5D=user_id&op%5Buser_id%5D=%3D&v%5Buser_id%5D%5B%5D=me&f%5B%5D=&c%5B%5D=project&c%5B%5D=spent_on&c%5B%5D=user&c%5B%5D=activity&c%5B%5D=issue&c%5B%5D=comments&c%5B%5D=hours',
              },
            ],
          },
        ],
      },
    ];
  };
}

export default Api;
