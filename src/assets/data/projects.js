import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Bicycle Store',
    desc:
      'An application to buy and manage bicycle online store.People can also give review here.',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Food Delivery',
    desc:
      'An app to order food online.Users data will save to database.Users can edit orders.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Health Care',
    desc:
      'Using this app you can see all doctors can take/read their services after login.',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Mark Portfolio',
    desc:
      'A portfolio for Mark. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: CavinImg,
  },
];

export default projects;
