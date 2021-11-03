import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app'
import ErrorBoundry from './components/error-boundry'
import BookStoreService from './services/bookstore-service'
import {BookStoreServiceProvider} from './components/bookstore-service-context/bookstore-service-context'

import store from './store'

const bookstoreService = new BookStoreService()

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookStoreServiceProvider value={bookstoreService} >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BookStoreServiceProvider>
    </ErrorBoundry>
 </Provider>,
  document.getElementById('root')
);


