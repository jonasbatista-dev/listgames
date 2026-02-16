import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder,
} from '@styled-icons/material-outlined';
import {
  Wrapper,
  ImageBox,
  Info,
  Price,
  Developer,
  Title,
  FavButton,
  BuyBox,
  Content,
} from './styles';
import Button from '../Button';

export type GameCardProps = {
  title: string;
  developer: string;
  img: string;
  price: string;
  promotionalPrice?: string;
  favorite?: boolean;
  onFav?: () => void;
};

const GameCard = ({
  title,
  developer,
  img,
  price,
  promotionalPrice,
  onFav,
  favorite = false,
}: GameCardProps) => {
  return (
    <Wrapper>
      <ImageBox>
        <img src={img} alt={title} />
      </ImageBox>
      <Content>
        <Info>
          <Title>{title}</Title>
          <Developer>{developer}</Developer>{' '}
        </Info>
        <FavButton role="button" onClick={() => onFav && onFav()}>
          {favorite ? (
            <Favorite aria-label="remove from wishlist" />
          ) : (
            <FavoriteBorder aria-label="Add to Wishlist" />
          )}
        </FavButton>
        <BuyBox>
          {!!promotionalPrice && <Price $isPromotional>{price}</Price>}
          <Price>{promotionalPrice || price}</Price>
          <Button icon={<AddShoppingCart />} size="small" />
        </BuyBox>
      </Content>
    </Wrapper>
  );
};

export default GameCard;
