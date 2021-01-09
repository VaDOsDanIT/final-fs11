import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "@containers/AppContainer";
import store from '@redux/store';
import { HashRouter as Router } from "react-router-dom";
import 'antd/dist/antd.css';
import Header from "./components/Header";
import { Layout } from "antd";
import Container from "./components/Container";
import { PageLoader } from "@components/Loader";

const reduxStore = store();
// import './i18next';

ReactDOM.render(
  <Provider store={reduxStore}>
    <Suspense fallback={<PageLoader loaded={(<div>Pageloader</div>)}/>}>
      <Router>
        <Layout>
          <Header/>
          <Container>
            <App/>
          </Container>
        </Layout>
      </Router>
    </Suspense>
  </Provider>,
  document.getElementById("root")
);
