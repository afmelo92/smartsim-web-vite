export default {
  menu: [
    {
      id: 1,
      title: 'Admin',
      icon: 'admin',
      url: '/admin',
      active: true,
      admin: true,
    },
    {
      id: 2,
      title: 'Home',
      icon: 'home',
      url: '/home',
      active: true,
      admin: false,
    },
    {
      id: 3,
      title: 'Loja',
      icon: 'cart',
      url: '/shop',
      active: true,
      admin: false,
    },
    {
      id: 4,
      title: 'Mensagens',
      icon: 'inbox',
      url: '/messages',
      active: false,
      admin: false,
    },
    {
      id: 5,
      title: 'Comandos',
      icon: 'command',
      url: '/commands',
      active: false,
      admin: false,
    },
  ],
};
