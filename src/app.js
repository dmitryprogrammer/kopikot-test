import angular from "angular";
/** modules */
import "./base";

angular.module("app", ["app.base"])
    .config(["$httpProvider", ($httpProvider) => {
        $httpProvider.defaults.headers.common["Accept-Language"] = "ru";
    }]);

/** автоматическая инициализация главного модуля */
angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
});