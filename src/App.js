import React, { Component, Fragment } from "react";
import { layout as Layout } from "./hoc/index";
import { Route, Switch } from "react-router-dom";
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";
import globalTranslations from "./translations/global.json";
import RecipesPage from "./containers/RecipesPage/RecipesPage";
import NewRecipePage from "./containers/NewRecipePage/NewRecipePage";
import RecipePage from "./containers/RecipePage/RecipePage";

class App extends Component {
  constructor(props) {
    super(props);
    this.props.initialize({
      languages: [
        { name: "Polish", code: "pl" },
        { name: "English", code: "en" }
      ],
      translation: globalTranslations,
      options: { renderToStaticMarkup, defaultLanguage: "pl" }
    });
  }

  render() {
    const { activeLanguage } = this.props;
    return (
      !!activeLanguage && (
        <Fragment>
          <Layout>
            <Switch>
              <Route exact path="/" component={RecipesPage} />
              <Route exact path="/new" component={NewRecipePage} />
              <Route exact path="/recipe/:id" component={RecipePage} />
            </Switch>
          </Layout>
        </Fragment>
      )
    );
  }
}

export default withLocalize(App);
