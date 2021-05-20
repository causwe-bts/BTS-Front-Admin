import styles from './[pizza].js';
import { useRouter } from 'next/router';

export default function DetailMenu() {
  const router = useRouter();
  const { pizza } = router.query;

  return <div className={styles.container}>{pizza}메뉴</div>;
}
