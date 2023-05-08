import React from 'react'
import List, { Item } from '~/components/atoms/List'
import Iphone from './Item';
import styles from './styles.module.scss'
interface Props {
  items: any[];
}

const Iphones = (props: Props) => {
  const { items } = props;
  return (
    <List
      className={styles.listContainer}
      dataSource={items}
      grid={{
        gutter: 26,
          xs: 2,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
          xxl: 4,
      }}
      renderItem={(item) =>
        <Item>
          <Iphone
            item={item}
          />
        </Item>
      }
    />   
  )
}

export default Iphones