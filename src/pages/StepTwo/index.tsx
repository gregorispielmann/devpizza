import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  size?: {
    id?: number;
    description?: string;
    price?: number;
  };
  total: number;
}

const StepTwo: React.FC = () => {
  const { data, updateData } = useData();
  const { showLoading, hideLoading } = useLoading();
  const [apiData, setApiData] = useState({} as IData);
  const [selected, setSelected] = useState({
    size: data?.purchase?.size,
  } as ISelected);
  const history = useHistory();

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
    newData[type] = apiData?.sizes?.filter(e => e.id === id)[0];
    setSelected(newData);
  };

  const handleNext = () => {
    let total = 0;
    const prices = data?.prices;
    prices[1] = selected?.size?.price;

    total = prices.reduce((a: number, b: number) => a + b);
    updateData({
      ...data,
      purchase: { ...data?.purchase, ...selected },
      total,
      prices,
    });
    if (Object.keys(selected).includes('day_flavor')) history.push('/finish');
  };

  return (
    <Container>
      <Logo />

      <Stepper step={2} />

      <Row>
        <h3>Montando sua pizza</h3>
        <p>Escolha uma dos tamanhos</p>
      </Row>

      <Row>
        {apiData?.sizes?.map(e => (
          <Card
            key={e.name}
            data={e}
            selected={selected?.size?.id === e.id}
            onSelect={handleSelect}
          />
        ))}
      </Row>

      <Arrows
        nextUrl="/step-three"
        disableNext={!selected?.size}
        onNext={handleNext}
        backUrl="/step-one"
      />
    </Container>
  );
};

export default StepTwo;
