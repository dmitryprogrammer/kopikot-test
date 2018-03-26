import template from "./wrap.component.tpl.html";
import controller from "./wrap.component.ctrl";

export default {
    template,
    controller,
    controllerAs: "wrap",
    bindings: {
        formAction: "@",
        buttonFormAction: "@",
        csrf: "@"
    }
}