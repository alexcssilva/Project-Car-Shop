import { ICar } from '../../interfaces/ICar';

const carMock: ICar = {
  model: 'I30',
  year: 2022,
  color: 'black',
  status: true,
  buyValue: 50000,
  doorsQty: 3,
  seatsQty: 5,
};

const carMockWithId: ICar & { _id: string } = {
	_id: '62cf1fc6498565d94eba52cd',
  model: 'I30',
  year: 2022,
  color: 'black',
  status: true,
  buyValue: 50000,
  doorsQty: 3,
  seatsQty: 5,
};

const carMockForChange: ICar = {
  model: 'I30',
  year: 2022,
  color: 'black',
  status: true,
  buyValue: 50000,
  doorsQty: 3,
  seatsQty: 5,
};

const carMockForChangeWithId: ICar & { _id: string } = {
	_id: '62cf1fc6498565d94eba52cd',
  model: 'I30',
  year: 2022,
  color: 'black',
  status: true,
  buyValue: 50000,
  doorsQty: 3,
  seatsQty: 5,
};

const allCarMock: ICar[] & { _id: string }[] = [
	{
		_id: "62cf1fc6498565d94eba52cd",
    model: 'I30',
    year: 2022,
    color: 'black',
    status: true,
    buyValue: 50000,
    doorsQty: 3,
    seatsQty: 5,
	},
	{
		_id: "62cf1fc6498565d94eba52cd",
    model: 'I30',
    year: 2022,
    color: 'black',
    status: true,
    buyValue: 50000,
    doorsQty: 3,
    seatsQty: 5,
	}
];

export {
	carMock,
	carMockWithId,
	carMockForChange,
	carMockForChangeWithId,
	allCarMock
};
