import { Card } from 'antd'
import React from 'react'
import Svg from '~/components/atoms/Svg';
import styles from './styles.module.scss'
import { formatter } from '~/utils/helper';
interface Props {
  item: any;
}

const Iphone = (props: Props) => {
  const { item } = props;
  const { Meta } = Card;
  return (
    <Card
      className={styles.cardContainer}
      hoverable
      cover={<Svg alt="example" src={item?.image || 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'} />}
    >
      <Meta
        className={styles.cardMeta}
        title={item?.name} 
        description={
          <div
            style={{display: 'flex'}}
          >
            <div 
              className={styles.discountPrice}
            >
              {item?.discountPrice ? formatter(item?.discountPrice) : 0}
            </div>
            <div
              className={styles.price}
            >
              {item?.price ? formatter(item?.price) : 0}
            </div>
          </div>
        }
      />
    </Card>
  )
}

export default Iphone