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
  day_flavor?: {
    id: number;
    price: number;
  };
  dough?: {
    id: number;
    price: number;
  };
  total: number;
}

const StepOne: React.FC = () => {
  const [apiData, setApiData] = useState({} as IData);
  const { data, updateData } = useData();
  const { showLoading, hideLoading } = useLoading();
  const [selected, setSelected] = useState({
    dough: data?.purchase?.dough,
    day_flavor: data?.purchase?.day_flavor,
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
    if (type === 'day_flavor') newData[type] = apiData?.day_flavor;
    else newData[type] = apiData?.doughs?.filter(e => e.id === id)[0];
    setSelected(newData);
  };

  const handleNext = () => {
    let total = 0;
    const prices = [];
    if (selected.dough) {
      prices[0] = selected?.dough?.price;
      total = apiData?.doughs?.filter(e => e.id === selected?.dough?.id)[0]
        ?.price;
    } else {
      prices[0] = selected?.day_flavor?.price;
      total = selected?.day_flavor?.price || 0;
    }

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

      <Stepper step={1} />

      <Row>
        <h3>Montando sua pizza</h3>
        <p>
          Escolha uma das massas ou selecione a Pizza do Dia (para ganhar
          pontos)
        </p>
      </Row>

      <Row>
        {apiData?.day_flavor && (
          <Card
            data={apiData?.day_flavor}
            special
            selected={selected?.day_flavor?.id === apiData?.day_flavor?.id}
            onSelect={handleSelect}
          />
        )}
      </Row>

      <h1>Ou</h1>

      <Row>
        {apiData?.doughs?.map(e => (
          <Card
            key={e.name}
            data={e}
            selected={selected?.dough?.id === e.id}
            onSelect={handleSelect}
          />
        ))}
      </Row>

      <Arrows
        nextUrl="/step-two"
        disableNext={!(selected?.day_flavor || selected?.dough)}
        onNext={handleNext}
        backUrl="/"
        finish={!!selected?.day_flavor}
      />
    </Container>
  );
};

export default StepOne;
