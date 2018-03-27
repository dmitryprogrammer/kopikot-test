import angular from "angular";
/** styles */
import "./assets/styles/main.scss";
/** components */
import appComponent from "./components/app/app.component";
import catalogItemComponent from "./components/catalog-item/catalog-item.component";
/** services */
import catalogsList from "./services/catalogs-list/catalogs-list.factory";

angular.module("app", [])
    .component("app", appComponent)
    .component("catalogItem", catalogItemComponent)
    .factory("catalogsList", catalogsList)
    .config(["$httpProvider", ($httpProvider) => {
        $httpProvider.defaults.headers.common["Accept-Language"] = "ru";
    }]);

/** автоматическая инициализация главного модуля */
angular.element(document).ready(function () {
    angular.bootstrap(document, ["app"]);
});