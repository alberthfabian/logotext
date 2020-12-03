import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import Layout from './components/Layout';
import { Provider } from 'react-redux';
import store from './redux/store';
import { initial, summary, form } from './redux/actions/ShopAction';

store.dispatch(initial());
store.dispatch(summary());
store.dispatch(form());

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route component={NotFound} />
           </Switch>
          </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
