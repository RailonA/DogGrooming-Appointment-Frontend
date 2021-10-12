import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import ServiceList from '../../Containers/serviceList';

describe('serviceList', () => {
  const services = [
    {
      id: 1,
      category: 'dog',
      petService: 'Bath & Full Haircut',
      serviceDescription: 'A haircut and style. Service includes Bath services plus a full haircut or shave.',
      servicePrice: '76.00',

    },
    {
      id: 2,
      category: 'dog',
      petService: 'Bath & Full Haircut with FUR minator',
      serviceDescription: 'Helps reduce shedding. Package includes Bath and Haircut services plus Low-Shed Shampoo, DeShedding Solution and Up to 20 Minutes Brushing with FURminator tool.',
      servicePrice: '91.00',

    },
    {
      id: 3,
      category: 'dog',
      petService: 'Bath & Brush',
      serviceDescription: 'Helps reduce shedding. For dogs that do not need a haircut. Package includes Bath services plus Low-Shed Shampoo, DeShedding Solution and Up to 20 Minutes Brushing with FURminator tool.',
      servicePrice: '81.00',
    },
  ];
  const category = 'dog';

  it('should match the snapshot', () => {
    const wrapper = renderer.create(
      <ServiceList services={services} category={category} />,
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
