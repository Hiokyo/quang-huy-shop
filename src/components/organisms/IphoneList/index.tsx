import React, { useMemo } from 'react'
import BannerSlide from '~/components/molecules/BannerSlide'
import styles from './styles.module.scss'
import { Tabs, TabsProps } from 'antd'
import Iphones from '~/components/molecules/Iphones'
import iphoneBanner from '~/assets/images/ip14 yellow_banner.jpeg'
import iphoneImg from '~/assets/images/iphone_14_pro_max.jpg'

const IphoneList = () => {
  const images = [
    {
      id: 1,
      name: '1',
      url: iphoneBanner
    },
    {
      id: 2,
      name: '2',
      url: iphoneBanner
    },
    {
      id: 3,
      name: '3',
      url: iphoneBanner
    }
  ]

  const iphones = useMemo(() => {
    const IphoneData = {
      id: 1,
      name: 'iPhone 12 Pro Max 128GB',
      image: iphoneImg,
      price: 20000000,
      discountPrice: 19000000,
    }
    
    const arr = [];
    
    for (let i = 0; i < 20; i++) {
      const obj = Object.assign({}, IphoneData);
      obj.id = i + 1;
      obj.name = `iPhone 12 Pro Max 128GB (${i + 1})`;
      obj.price = IphoneData.price + Math.floor(Math.random() * 1000000);
      obj.discountPrice = obj.price - Math.floor(Math.random() * 500000);
      arr.push(obj);
    }
    return arr;  
  }, [])


  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Tab 1`,
      children: <Iphones items={iphones}/>,
    },
    {
      key: '2',
      label: `Tab 2`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: '3',
      label: `Tab 3`,
      children: `Content of Tab Pane 3`,
    },
  ];
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
      <Tabs defaultActiveKey="1" items={items}/>
    </div>
    
  )
}

export default IphoneList