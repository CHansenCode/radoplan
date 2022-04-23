import { Layout } from 'Layout';

import 'styles/style.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} userData={userData} />
    </Layout>
  );
}

export default MyApp;

const userData = [
  {
    _id: 'aklsdjkajskd',
    name: 'christoffer',
    nickName: 'chris',
    initials: 'ch',
  },
  {
    _id: '12312lkfaajsd',
    name: 'alexander',
    nickName: 'alex',
    initials: 'alex',
  },
  {
    _id: 'afdsagsf',
    name: 'clara',
    nickName: 'clara',
    initials: 'chh',
  },
  {
    _id: 'gsdfdgdfgsf',
    name: 'mussie',
    nickName: 'mussie',
    initials: 'mus',
  },
  {
    _id: 'alsk2391489123',
    name: 'jesper',
    nickName: 'devil',
    initials: 'x',
  },
  {
    _id: 'gsdfdgdfgsf',
    name: 'david',
    nickName: 'david',
    initials: 'dd',
  },
];

const desks = [
  {
    _id: '12398123hjshjadhs',
    tasks: [],
  },
];
