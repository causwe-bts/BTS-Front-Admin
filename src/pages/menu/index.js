import { useEffect, useState } from 'react';

import MenuCell from 'components/menuCell';
import { getMenu } from 'api/menu';
import styles from './index.module.css';

export default function Login() {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    getMenu().then((menus) => {
      setMenus(menus);
    });
  }, []);
  return (
    <div className={styles.container}>
      <div>메뉴 페이지</div>
      <div>
        {menus.map((menu) => {
          return <MenuCell menu={menu} className={styles.menu} key={menu.name} />;
        })}
      </div>
    </div>
  );
}
