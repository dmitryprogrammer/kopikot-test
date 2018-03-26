class AppComponentCtrl {
    constructor(catalogsList) {
        this.catalogsListService = catalogsList;
    }

    /** init component
     * @returns {void} */
    $onInit() {
        this.getCatalogsList();
    }

    /** getCatalogsList - метод, для получения списка записей
     * @returns {void} */
    getCatalogsList() {
        this.catalogsListService()
            .then(catalogsList => {
                this.catalogsList = catalogsList.data.items;
                console.log(this.catalogsList);
            });
    }
}

AppComponentCtrl.$inject = ["catalogsList"];

export default AppComponentCtrl;