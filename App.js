import React, {useEffect, useState} from 'react';
import MainNavigation from './src/navigation/navigation';
import {Provider} from 'react-redux';
import {store} from './store';
import Loader from './src/views/hoc/loader';
import ApiClient from './src/apiClient';

const App = () => {

  useEffect(() => {
    const apiClient = new ApiClient()
    apiClient.creatAxiosInstance()
  }, []);

  return (
    <>
      <Provider store={store}>
        <MainNavigation />
        <Loader />
      </Provider>
    </>
  );
};

export default App;
