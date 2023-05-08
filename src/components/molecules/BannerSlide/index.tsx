import { Carousel } from 'antd';
import React from 'react'
import Svg from '~/components/atoms/Svg';
import styles from './styles.module.scss'
interface Props {
  images: any[];
}

const BannerSlide = (props: Props) => {
  const { images } = props;

  const contentStyle: React.CSSProperties = {
    height: '45vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
  };
  return (
    <Carousel
      className={styles.container}
      // effect="fade"
      autoplay>
      { images.map((item: any) => (
        <div
          key={item.id}
        >
          <h3 className={styles.content} style={contentStyle}>
            <Svg alt={item.name} src={item.url}/>
          </h3>
        </div>
      ))
      }
    </Carousel>
  )
}

export default BannerSlide