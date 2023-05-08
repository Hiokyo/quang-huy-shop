import React from 'react'
import BannerSlide from '~/components/molecules/BannerSlide'
import styles from './styles.module.scss'
const IphoneList = () => {
  const images = [
    {
      id: 1,
      name: '1',
      url: 'https://picsum.photos/500/300'
    },
    {
      id: 2,
      name: '2',
      url: 'https://picsum.photos/500/300'
    },
    {
      id: 3,
      name: '3',
      url: 'https://picsum.photos/500/300'
    }
  ]
  return (
    <div
      className={styles.container}
    >
      <div
        style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center'}}
      >iPhone</div>
      <BannerSlide
        images={images}
      />  
    </div>
    
  )
}

export default IphoneList