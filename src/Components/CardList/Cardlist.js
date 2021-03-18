import React from'react'
import './Cardlist.styles.css'
import {Card} from '../Card/Card'
export const CardList=(props)=>{
return (<div className={'card-list'}>
  {props.monsters.map(monster=><Card key={monster.id} monster={monster}></Card>)}


</div>
)

};
