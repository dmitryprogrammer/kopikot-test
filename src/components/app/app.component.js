import template from "./app.component.tpl.html";
import controller from "./app.component.ctrl";

export default {
    template,
    controller,
    bindings: {
        formAction: "@",
        buttonFormAction: "@",
        csrf: "@"
    }
}