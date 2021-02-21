import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import { GlobalStyle } from "./global.styles";

import Spinner from "./components/spinner/spinner.component";
import Header from "./components/header/header.component";

const HomePage = React.lazy(() => import("./pages/home/home.component"));
const AboutPage = React.lazy(() => import("./pages/about/about.component"));
const ReviewsPage = React.lazy(() =>
  import("./pages/reviews/reviews.component")
);
const RecipesPage = React.lazy(() =>
  import("./pages/recipes/recipes.component")
);
const ContactsPage = React.lazy(() =>
  import("./pages/contacts/contacts.component")
);
const Top10Page = React.lazy(() => import("./pages/top10/top10.component"));

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/apie" component={AboutPage} />
          <Route exact path="/apzvalgos" component={ReviewsPage} />
          <Route exact path="/top" component={Top10Page} />
          <Route exact path="/receptai" component={RecipesPage} />
          <Route exact path="/susisiekime" component={ContactsPage} />
        </Suspense>
      </Switch>
    </div>
  );
};

export default App;
