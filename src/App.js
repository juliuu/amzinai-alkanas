import React, { Suspense, useState, useRef, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { GlobalStyle } from "./global.styles";

import Spinner from "./components/spinner/spinner.component";
import Header from "./components/header/header.component";

const HomePage = React.lazy(() => import("./pages/home/home.component"));
const ReviewsPage = React.lazy(() =>
  import("./pages/reviews/reviews.component")
);
const RecipesPage = React.lazy(() =>
  import("./pages/recipes/recipes.component")
);
const Top10Page = React.lazy(() => import("./pages/top10/top10.component"));

const App = () => {
  const [refs, setRefs] = useState({
    aboutRef: useRef(null),
    contactRef: useRef(null),
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
          <Route exact path="/apzvalgos" component={ReviewsPage} />
          <Route exact path="/top" component={Top10Page} />
          <Route exact path="/receptai" component={RecipesPage} />
        </Suspense>
      </Switch>
    </div>
  );
};

export default App;
