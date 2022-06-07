import Card from '../card/card.component';
import './card-list.style.css';
import { Monster } from '../../App'
import { Grid, Typography } from '@mui/material';
import { Copyright } from "@mui/icons-material";



type CardListProps = { 
  monsters: Monster[];
 }

const CardList = ({ monsters }: CardListProps) => (
  <Grid sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
    <div className='card-list'>
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
    <Grid sx={{display: 'flex', flexDirection: 'row', mt: 4}}>
      <Copyright />
      <Typography>2022, Created by Nio Phan </Typography>
    </Grid>
  </Grid>
);

export default CardList;