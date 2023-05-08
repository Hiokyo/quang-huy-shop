import React, { useEffect, useState } from 'react'
import { Divider, Layout, Menu, MenuProps } from 'antd';
import history from '~/utils/history';
import { useLocation } from 'react-router-dom';
import Svg from '~/components/atoms/Svg';
import logo from '~/assets/images/quang-huy-logo.png'

import styles from './styles.module.scss'
interface Props {
  menus: any[];

}
const { Header } = Layout;
const TopHeader = (props: Props) => {
  const { menus } = props;
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [selectedKey, setSelectedKey] = useState('1');
  const { pathname } = useLocation();

  const handleClick: MenuProps['onClick'] = ({ key, keyPath }) => {
    history.push(key);
  };

  const menusKey = menus.map((item: any) => item?.key)
  useEffect(() => {
    menus.forEach((route) => {
      if (pathname.startsWith(route?.url || '###')) {
        setSelectedKey(route.key);
      }
      if (route?.children) {
        for (let i = 0; i < route?.children?.length; i += 1) {
          const childRoute = route?.children[i];
          if (window.location.pathname.startsWith(childRoute.url || '###')) {
            setSelectedKey(childRoute.key);
            break;
          }
        }
      }
      if (!(menusKey.includes(pathname))){
        setSelectedKey('')
      }
    });
  }, [pathname, menus]);
  return (
    <Header
      style={{ position: 'sticky', top: 0, zIndex: 1, padding: '0 20vw', width: '100%', backgroundColor: '#515154' }}
      className={styles.container}
    >
      <div
        className={styles.logoContainer}
      >
        <Svg
          src={logo}
          className={styles.logo}
        />
        <Divider
          type='vertical'
          style={{ height: '70%', backgroundColor: '#a8a8aa'}}
        />
      </div>
      <Menu
        className={styles.menu}
        mode="horizontal"
        onClick={handleClick}
        selectedKeys={[selectedKey]}
        openKeys={openKeys}
        onOpenChange={(keys) => setOpenKeys(keys)}
        items={menus}
      />
    </Header>
  )
}

export default TopHeader