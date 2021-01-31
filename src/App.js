import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import { GlobalStyle } from "./global.styles";

import Spinner from "./components/spinner/spinner.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

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
          <Route exact path="/receptai" component={RecipesPage} />
          <Route exact path="/kontaktai" component={ContactsPage} />
        </Suspense>
      </Switch>
      <Footer />
      <Footer />
      <Footer />
    </div>
  );
};

export default App;
