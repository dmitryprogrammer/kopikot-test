import template from "./catalog-item.component.tpl.html";
import controller from "./catalog-item.component.ctrl";

export default {
    template,
    controller,
    bindings: {
        itemData: "<"
    }
}