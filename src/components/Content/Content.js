/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework';
import { useApiContext } from '../../context';

import { Apis } from '../Apis/Apis';
import styles from './Content.css';

export function Content({ error, isDataLoading, apiArray, filterArrays, filters, displayRandom }) {
  const apiis = useApiContext();
  
  console.log(apiis);
  if (error !== null)
    return <p class={styles.loading_text + ' ' + styles.loading_text__error}>{error}</p>;
  if (isDataLoading) return <p class={styles.loading_text}>Data is loading</p>;

  return (
    <Apis
      filterArrays={filterArrays}
      filters={filters}
      displayRandom={displayRandom}
      apiArray={apiArray}
    />
  );
}