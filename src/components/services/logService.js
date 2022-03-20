import Raven from "raven-js";

function init() {
  Raven.config(
    "https://6cbe3a83085a49398c330c46e56b7f3d@o1172528.ingest.sentry.io/6267487"
  ).install();
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log,
};
