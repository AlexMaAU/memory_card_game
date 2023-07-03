import { useCallback } from 'react';
import './style.scss';

export interface CardProps {
  card: Card;
  handleChoice: (card: Card) => void;
  disabled: boolean;
  flipped: boolean;
}

const Card = ({ card, handleChoice, disabled, flipped }: CardProps) => {
  const handleClick = useCallback(() => {
    if (!disabled) {
      handleChoice(card);
    }
  }, [handleChoice, disabled, card]);

  return (
    <div className='card'>
      <div className={flipped ? 'flipped' : ''}>
        <img className='front' src={card.src} alt='Card Front' />
        <img
          onClick={handleClick}
          className='back'
          alt='Card Back'
          src='/images/cover.png'
        />
      </div>
    </div>
  );
};

export default Card;
