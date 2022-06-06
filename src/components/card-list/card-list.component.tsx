import Card from '../card/card.component';
import './card-list.style.css';
import { Monster } from '../../App'
import { Grid } from '@mui/material';


type CardListProps = { 
  monsters: Monster[];
 }

const CardList = ({ monsters }: CardListProps) => (
  <Grid sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <div className='card-list'>
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  </Grid>
);

export default CardList;