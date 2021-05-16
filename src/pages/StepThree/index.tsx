import React, { useEffect, useState } from 'react';
import Arrows from '../../components/Arrows';
import Card from '../../components/Card';

import Logo from '../../components/Logo';
import Stepper from '../../components/Stepper';

import { Container, Row } from './styles';

import result from '../../services/mock.json';
import { IData } from '../../@types';
import { useData } from '../../hooks/Data';
import { useLoading } from '../../hooks/Loading';

interface ISelected {
  filling?: {
    id?: number;
    description?: string;
    price?: number;
  };
  total: number;
}

const StepThree: React.FC = () => {
  const { data, updateData } = useData();
  const { showLoading, hideLoading } = useLoading();
  const [apiData, setApiData] = useState({} as IData);
  const [selected, setSelected] = useState({
    filling: data?.purchase?.filling,
  } as ISelected);

  useEffect(() => {
    showLoading();
    setTimeout(() => {
      hideLoading();
      if (result) return setApiData(result?.data as IData);
      return false;
    }, 2000);
  }, []);

  const handleSelect = (id: number, type: string) => {
    const newData = {} as any;
    newData[type] = apiData?.filling?.filter(e => e.id === id)[0];
    setSelected(newData);
  };

  const handleNext = () => {
    let total = 0;
    const prices = data?.prices;
    prices[2] = selected?.filling?.price;

    total = prices.reduce((a: number, b: number) => a + b);
    updateData({
      ...data,
      purchase: { ...data?.purchase, ...selected },
      total,
      prices,
    });
  };

  return (
    <Container>
      <Logo />

      <Stepper step={3} />

      <Row>
        <h3>Montando sua pizza</h3>
        <p>Escolha uma dos sabores</p>
      </Row>

      <Row>
        {apiData?.filling?.map(e => (
          <Card
            key={e.name}
            data={e}
            selected={selected?.filling?.id === e.id}
            onSelect={handleSelect}
          />
        ))}
      </Row>

      <Arrows
        nextUrl="/finish"
        disableNext={!selected?.filling}
        onNext={handleNext}
        backUrl="/step-two"
      />
    </Container>
  );
};

export default StepThree;
