const Account = () => import(/* webpackChunkName: "account" */ '@/views/account');

export default [
  {
    path: '/account',
    component: Account,
    children: [],
  },
];
