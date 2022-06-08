import './card.style.css'
import { Monster } from '../../App'
import { Grid, styled, Typography } from '@mui/material';
// All card pictures were collected from https://clashofclans.fandom.com/wiki/Category:Troops

const StyledGrid = styled(Grid)({
  height: '165px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

type CardProps = {
    monster: Monster;
}

const Card = ({ monster }: CardProps) => {
  const { name, describtion, imageUrl } = monster;

  return (
    <div className='card-container'>
      <div className='class-card'>
        <img
          alt={`monster ${name}`}
          src={imageUrl}
          className="image"
        />
      </div>
      <StyledGrid>
        <Typography gutterBottom style={{ fontWeight: 400, textShadow: '1px 1px 2px', color: 'black'}} variant="h4">{name}</Typography>
        <Typography variant="subtitle2">{describtion}</Typography>
      </StyledGrid>
    </div>
  );
};

export default Card;