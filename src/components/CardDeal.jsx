import React from 'react';
import styles, {layout} from '../style';
import {card} from '../assets';
import Button from './Button';

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
            Find a better card deal <br className='sm:block hidden'/>
            in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quaerat est, optio tempore impedit odio.
        </p>
        <Button styles={"mt-10"}/>
      </div>
      <div className={`${layout.sectionImg}`}>
        <img src={card} alt='card'
        className='w-full h-full'/>
      </div>
    </section>
  )
}

export default CardDeal