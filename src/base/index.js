import angular from "angular";

import wrapComponent from "./components/wrap/wrap.component";

export default angular.module("app.base", [])
    .component("wrap", wrapComponent);