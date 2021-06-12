/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework';
import { useApis } from '../../data';
import { ApiContext } from '../../context';

import { Header } from '../Header/Header';
import { Menu } from '../Menu/Menu';
import { Content } from '../Content/Content';
import { styles } from './App.css';

export function App() {
  const {
    error,
    filterArrays,
    filters,
    setFilters,
    apiArray,
    isDataLoading,
    displayRandom,
    setDisplayRandom,
    reloadData,
  } = useApis();
  console.log(apiArray);
  return (
    <>
      <Header />
      <Menu
        filterArrays={filterArrays}
        filters={filters}
        setFilters={setFilters}
        setDisplayRandom={setDisplayRandom}
        setReload={reloadData}
      />
      <ApiContext.Provider value={apiArray}>
        <Content
          error={error}
          isDataLoading={isDataLoading}
          apiArray={apiArray}
          filterArrays={filterArrays}
          filters={filters}
          displayRandom={displayRandom}
        />
      </ApiContext.Provider>
    </>
  );
}