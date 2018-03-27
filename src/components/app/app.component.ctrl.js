class AppComponentCtrl {
    constructor(catalogsList) {
        this.clickMoreCounter = 0;
        this.catalogsListService = catalogsList;
        this.catalogsList = [];

        this.loadMoreBtnText = "Load more";
    }

    /** init component
     * @returns {void} */
    $onInit() {
        this.getCatalogsList();
    }

    /** getCatalogsList - метод, для получения списка записей
     * @param {number} offset - начало отсчёта списка данных для получения
     * @returns {void} */
    getCatalogsList(offset = 0) {
        this.catalogsListService(offset)
            .then(catalogsList => {
                this.catalogsList = [...this.catalogsList, ...catalogsList.data.items];
            });
    }

    /**
     * метод для загрузки категорий реагирующий по клику на кнопку "load more"
     * @param {Event} e - объект события DOM-элемента
     * */
    loadMore(e) {
        e.preventDefault();
        this.clickMoreCounter++;

        if (this.clickMoreCounter < 10) {

            this.getCatalogsList(10 * this.clickMoreCounter);
        } else {
            this.loadMoreBtnText = "You can not click more";
        }
    }
}

AppComponentCtrl.$inject = ["catalogsList"];

export default AppComponentCtrl;