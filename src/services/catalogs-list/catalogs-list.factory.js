function CatalogsList($http) {
    return function (offset = 0) {
        return $http({
            method: "GET",
            url: "https://api.bonusway.com/campaigns",
            params: {limit: 10, offset}
        });
    };
}

CatalogsList.$inject = ["$http"];

export default CatalogsList;