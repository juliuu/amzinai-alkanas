import React, { Suspense, useState, useRef, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { GlobalStyle } from "./global.styles";

import Spinner from "./components/spinner/spinner.component";
import Header from "./components/header/header.component";

const HomePage = React.lazy(() => import("./pages/home/home.component"));
const PreviewPage = React.lazy(() =>
  import("./pages/previews/previews.component")
);
const ReviewPage = React.lazy(() => import("./pages/review/review.component"));

const App = () => {
  const [refs, setRefs] = useState({
    aboutRef: useRef(),
    contactRef: useRef(),
    topRef: useRef(),
  });

  useEffect(() => {
    setRefs(refs);
  }, [refs]);

  return (
    <div>
      <GlobalStyle />
      <Header refs={refs} />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={() => <HomePage refs={refs} />} />
          <Route exact path="/apzvalgos" component={PreviewPage} />
          <Route exact path="/apzvalgos/:id" component={ReviewPage} />
          <Route exact path="/receptai" component={PreviewPage} />
        </Suspense>
      </Switch>
    </div>
  );
};

export default App;
