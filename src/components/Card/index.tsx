import React from 'react';
import { formatMoney } from '../../utils';
import { Container, Image, Badge, Content, Icon } from './styles';

interface ICard {
  onSelect: (id: number, type: string) => void;
  selected?: boolean;
  special?: boolean;
  data: {
    id: number;
    name?: string;
    dough?: string;
    ingredients?: string;
    type: string;
    points?: number;
    price: number;
    description?: string;
    image?: string;
  };
}

const Card: React.FC<ICard> = ({ selected, special, data, onSelect }) => {
  const {
    id,
    name,
    ingredients,
    dough,
    type,
    points,
    price,
    description,
    image,
  } = data;

  return (
    <Container $selected={selected} onClick={() => onSelect(id, type)}>
      {image && <Image $image={image} />}
      {special && (
        <Badge>
          <div>
            <h5>{points}</h5>
            <p>pontos</p>
          </div>
          <Icon />
        </Badge>
      )}
      <Content>
        {special && <h3>Pizza do Dia</h3>}
        <h5>{name}</h5>
        {special ? (
          <>
            <h6>Massa:</h6>
            <p>{dough}</p>
            <h6>Ingredientes:</h6>
            <p>{ingredients}</p>
          </>
        ) : (
          <p>{description}</p>
        )}
        <h4>
          {!window.location.href.includes('step-one') && '+'}{' '}
          {formatMoney(price)}
        </h4>
      </Content>
    </Container>
  );
};

export default Card;
