import { Meta } from 'components';
import { Layout } from 'Layout';

import 'styles/style.scss';

function MyApp({ Component, pageProps }) {
  const data = {
    userData: userData,
    invData: invData,
    deskData: deskData,
    taskData: taskData,
  };

  return (
    <>
      <Meta />

      <Layout data={data}>
        <Component {...pageProps} data={data} />
      </Layout>
    </>
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
  {
    _id: 'gsdfdgdfgsf',
    name: 'petya',
    nickName: 'petya',
    initials: 'dd',
  },
  {
    _id: 'gsdfdgdfgsf',
    name: 'ali',
    nickName: 'ali',
    initials: 'dd',
  },
  {
    _id: 'gsdfdgdfgsf',
    name: 'Berek',
    nickName: 'Berek',
    initials: 'dd',
  },
  {
    _id: 'gsdfdgdfgsf',
    name: 'merih',
    nickName: 'merih',
    initials: 'dd',
  },
  {
    _id: 'gsdfdgdfgsf',
    name: 'Tomasz',
    nickName: 'Tomasz',
    initials: 'dd',
  },
  {
    _id: 'gsdfdgdfgsf',
    name: 'Jagoda',
    nickName: 'Jagoda',
    initials: 'dd',
  },
  {
    _id: 'gsdfdgdfgsf',
    name: 'Jens',
    nickName: 'Jens',
    initials: 'dd',
  },
  {
    _id: 'gsdfdgdfgsf',
    name: 'Yasi',
    nickName: 'Yasi',
    initials: 'dd',
  },
];
const deskData = [
  {
    _id: '123hjshjadhs',
    number: 1,
    tasks: [],
    top: '60%',
    left: '20%',
    rotation: 0,
  },
  {
    _id: '12398123hadhs',
    number: 2,
    tasks: [],
    top: '76%',
    left: '20%',
    rotation: 180,
  },
  {
    _id: '12398sdf123hjshjadhs',
    number: 3,
    tasks: [],
    top: '60%',
    left: '32%',
    rotation: 0,
  },
  {
    _id: '12398123hjshjasdfdhs',
    number: 4,
    tasks: [],
    top: '76%',
    left: '32%',
    rotation: 180,
  },
  {
    _id: '1sdfs2398123hjshjadhs',
    number: 5,
    tasks: [],
    top: '76%',
    left: '70%',
    rotation: 0,
  },
  {
    _id: '123sdfsdf98123hjshjadhs',
    number: 6,
    tasks: [],
    top: '70%',
    left: '70%',
    rotation: 180,
  },
  {
    _id: '1238123hjdhs',
    number: 7,
    tasks: [],
    top: '54%',
    left: '70%',
    rotation: 0,
  },
  {
    _id: '398123hjshjadhs',
    number: 8,
    tasks: [],
    top: '48%',
    left: '70%',
    rotation: 180,
  },
  {
    _id: '12398123hjshjadh',
    number: 9,
    tasks: [],
    top: '52%',
    left: '32%',
    rotation: 180,
  },
  {
    _id: '12asdasdasdhjshjadhs',
    number: 10,
    tasks: [],
    top: '40%',
    left: '18%',
    rotation: 270,
  },
  {
    _id: '123asdasdfdsfhjadhs',
    number: 11,
    tasks: [],
    top: '30%',
    left: '32%',
    rotation: 0,
  },
  {
    _id: '12398123hjsfghfghhs',
    number: 12,
    tasks: [],
    top: '30%',
    left: '44%',
    rotation: 0,
  },
  {
    _id: '12398123hjsfghfghhs',
    number: 13,
    tasks: [],
    top: '24%',
    left: '44%',
    rotation: 180,
  },
];
const invData = [
  {
    stockIndex: '306707000',
    name: 'Lens seal',
    amount: 20,
    reserved: 0,
  },
  {
    stockIndex: '306707022',
    name: 'Heat sink',
    amount: 50,
    reserved: 0,
  },
  {
    stockIndex: '306707023',
    name: 'Screw',
    amount: 25,
    reserved: 0,
  },
  {
    stockIndex: '306707024',
    name: 'Heat sink gasket',
    amount: 75,
    reserved: 0,
  },
];
const taskData = [
  {
    _id: 'asldkals12312h3j1h23',
    name: 'Bottom lid assembly',
    inventoryItems: [],
  },
];

const currentState = [
  {
    date: 20220424,
  },
];
