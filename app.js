import express from "express";

//import path from "path";

// Middlewares
//import cookieParser from "cookie-parser";
//import logger from "morgan";
import cors from "cors";

import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

// Routers
import moviesRouter from "./routes/movies.js";

let app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use("/school", schoolRouter);

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {
  console.log("listening on 3000");
});

import React, { Component } from "react";

import "./styles/foundation.min.css";
import "./styles/custom.css";
import Routes from "./routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import MobileHeader from "./components/MobileHeader/MobileHeader";

class App extends Component {
  constructor() {
    super();
    this.state = {
      appName: "Okul Kayıt",
      home: false,
    };
  }

  render() {
    return (
      <div className="off-canvas-wrapper">
        <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
          <div className="off-canvas-content" data-off-canvas-content>
            <MobileHeader name={this.state.appName} />
            <Header name={this.state.appName} />
            <Routes name={this.state.appName} />
            <hr />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
