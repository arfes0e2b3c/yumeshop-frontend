type Menu = {
  id: number;
  text: string;
  href: string;
};

export const menus: Record<string, Menu[]> = {
  first: [
    {
      id: 1,
      text: 'メニューメニュー',
      href: '/',
    },
    {
      id: 2,
      text: 'メニューメニュー',
      href: '/',
    },
    {
      id: 3,
      text: 'メニュー',
      href: '/',
    },
  ],
  second: [
    {
      id: 4,
      text: 'メニューメニュー',
      href: '/',
    },
    {
      id: 5,
      text: 'メニュー',
      href: '/',
    },
    {
      id: 6,
      text: 'メニュー',
      href: '/',
    },
    {
      id: 7,
      text: 'メニュー',
      href: '/',
    },
  ],
  third: [
    {
      id: 8,
      text: 'メニューメニュー',
      href: '/',
    },
    {
      id: 9,
      text: 'メニューメニュー',
      href: '/',
    },
    {
      id: 10,
      text: 'メニューメニュー',
      href: '/',
    },
  ],
};
