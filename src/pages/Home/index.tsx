import React, { useEffect, useState } from 'react';
import Arrows from '../../components/Arrows';
import Input from '../../components/Input';
import Logo from '../../components/Logo';
import { useData } from '../../hooks/Data';
import { Container, Row } from './styles';

const Home: React.FC = () => {
  const { data, updateData } = useData();
  const [name, setName] = useState('');
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleDataChange = () => {
    if (name) updateData({ name });
  };

  useEffect(() => {
    updateData({ ...data, purchase: {}, total: 0 });
  }, []);

  return (
    <>
      <Container>
        <Logo />

        <Row>
          <h3>Bem-vindo(a) ao DevPizza!</h3>
          <p>
            Faça seu pedido no nosso configurador de pizza ao lado ou selecione
            a pizza do dia para aproveitar nosso programa de pontos!
          </p>
        </Row>

        <Input placeholder="Digite seu nome" onChange={handleName} />

        <Arrows nextUrl="/step-one" onNext={handleDataChange} />
      </Container>
    </>
  );
};

export default Home;
