/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework';
import styles from './Header.css';

export function Header() {
  return (
    <header class={styles.header}>
      <h1 class={styles.header__title}>🔌 Public APIs app</h1>
    </header>
  );
}