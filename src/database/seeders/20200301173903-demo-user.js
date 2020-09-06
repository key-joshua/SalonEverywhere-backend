import hasher from '../../helpers/passwordHelper';

const demoA = {
  firstname: 'Arjun',
  lastname: 'Mulari',
  role: 'user',
  email: 'arjun855@gmail.com',
  phone: '+911234567890',
  gender: 'male',
  date: '05-05-5555',
  career: 'dog, cat',
  council: 'surgery',
  petimage: 'url',
  addressname: 'Dell',
  coverpicture: 'url',
  profilepicture: 'url',
  rememberme: false,
  isVerified: true,
  password: hasher.hashPassword('qwerty@123'),
  createdAt: new Date(),
  updatedAt: new Date()
};

const demoB = {
  firstname: 'Mr',
  lastname: 'Paras',
  role: 'user',
  email: 'paris855@gmail.com',
  phone: '+910987654321',
  petname: 'Kiriku',
  gender: 'male',
  date: '10-10-1010',
  pettype: 'cat',
  petimage: 'url',
  petbreed: 'unknown',
  addressname: 'Dell',
  rememberme: false,
  isVerified: true,
  password: hasher.hashPassword('qwerty@321'),
  createdAt: new Date(),
  updatedAt: new Date()
};

const up = (queryInterface) => queryInterface.bulkInsert('Users', [demoA, demoB]);

const down = (queryInterface) => queryInterface.bulkDelete('Users', null, {});

export {
  up,
  down
};
