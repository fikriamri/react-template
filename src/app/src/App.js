import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import route from './routes/routes';

function App() {
  return (
    /**
     * Provider and PersistGate will be used when redux is enabled
     */
    // <Provider store={store}>
    <BrowserRouter>
      {/* <PersistGate persistor={persistor}> */}
      {route.map((e, i) => {
        const index = i + 1;
        return (
          <Switch key={`pages-${index}`}>
            <Route exact path={e.url}>
              {e.page}
            </Route>
          </Switch>
        );
      })}
      {/* </PersistGate> */}
    </BrowserRouter>
  // </Provider>
  );
}

export default App;
