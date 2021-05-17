import React, { useEffect } from 'react';
import { Prompt, useHistory } from 'react-router-dom';
import { VscDebugRestart } from 'react-icons/vsc';

import Logo from '../../components/Logo';
import Stepper from '../../components/Stepper';
import Button from '../../components/Button';

import { Container, Row, Col } from './styles';

import { useData } from '../../hooks/Data';
import { formatMoney } from '../../utils';

const Finish: React.FC = () => {
  const { data, updateData } = useData();

  const history = useHistory();

  useEffect(() => {
    if (!data) history.push('/');
    if (data?.purchase) {
      updateData({
        ...data,
        purchase: { ...data.purchase, id: Math.round(Math.random() * 10) },
        points:
          parseInt(data?.points || 0, 10) +
          parseInt(data?.purchase?.day_flavor?.points || 0, 10),
      });
    }
  }, []);

  return (
    <Container>
      <Prompt
        when
        message="Seu pedido já foi realizado! Você quer mesmo deixar a página?"
      />

      <Logo />

      <Stepper step={4} />

      <Row>
        <h3>Parabéns pelo seu pedido!</h3>
        <p>{`Seu pedido #${data?.purchase?.id} foi realizado com sucesso!`}</p>
      </Row>

      <Row $background>
        <Col>
          <h5>Resumo do pedido #{data?.purchase?.id}</h5>
          {data?.purchase?.day_flavor ? (
            <>
              <p>
                Sabor do dia: <b>{data?.purchase?.day_flavor?.name}</b>
                Ingredientes: <b>{data?.purchase?.day_flavor?.ingredients}</b>
                Total <b>{formatMoney(data?.purchase?.day_flavor?.price)}</b>
              </p>
              <br />
              <h3>
                Você ganhou {data?.purchase?.day_flavor?.points} pontos por esse
                pedido!
              </h3>
            </>
          ) : (
            <p>
              Massa: <b>{data?.purchase?.dough?.name}</b>
              Tamanho: <b>{data?.purchase?.size?.name}</b>
              Sabor: <b>{data?.purchase?.filling?.name}</b>
              Ingredientes: <b>{data?.purchase?.filling?.description}</b>
              Total <b>{formatMoney(data?.total)}</b>
            </p>
          )}
        </Col>
      </Row>

      <Row>
        <Button color="transparent" onClick={() => history.push('/')}>
          <h2>
            <VscDebugRestart /> Quero fazer um novo pedido!
          </h2>
        </Button>
      </Row>
    </Container>
  );
};

export default Finish;
