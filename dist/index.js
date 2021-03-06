"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Axios = void 0;
var axios_1 = require("axios");
var create_observable_1 = require("./create-observable");
var Axios = /** @class */ (function () {
    function Axios(axiosInstance) {
        this.axiosInstance = axiosInstance;
    }
    Object.defineProperty(Axios.prototype, "defaults", {
        get: function () {
            return this.axiosInstance.defaults;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Axios.prototype, "interceptors", {
        get: function () {
            return this.axiosInstance.interceptors;
        },
        enumerable: false,
        configurable: true
    });
    Axios.request = function (config) {
        return create_observable_1.createObservable(axios_1.default.request, config);
    };
    Axios.get = function (url, config) {
        return create_observable_1.createObservable(axios_1.default.get, url, config);
    };
    Axios.post = function (url, data, config) {
        return create_observable_1.createObservable(axios_1.default.post, url, data, config);
    };
    Axios.put = function (url, data, config) {
        return create_observable_1.createObservable(axios_1.default.put, url, data, config);
    };
    Axios.patch = function (url, data, config) {
        return create_observable_1.createObservable(axios_1.default.patch, url, data, config);
    };
    Axios.delete = function (url, config) {
        return create_observable_1.createObservable(axios_1.default.delete, url, config);
    };
    Axios.head = function (url, config) {
        return create_observable_1.createObservable(axios_1.default.head, url, config);
    };
    Axios.create = function (config) {
        return new Axios(axios_1.default.create(config));
    };
    Axios.prototype.request = function (config) {
        return create_observable_1.createObservable(this.axiosInstance.request, config);
    };
    Axios.prototype.get = function (url, config) {
        return create_observable_1.createObservable(this.axiosInstance.get, url, config);
    };
    Axios.prototype.head = function (url, config) {
        return create_observable_1.createObservable(this.axiosInstance.head, url, config);
    };
    Axios.prototype.post = function (url, data, config) {
        return create_observable_1.createObservable(this.axiosInstance.post, url, data, config);
    };
    Axios.prototype.put = function (url, data, config) {
        return create_observable_1.createObservable(this.axiosInstance.put, url, data, config);
    };
    Axios.prototype.patch = function (url, data, config) {
        return create_observable_1.createObservable(this.axiosInstance.patch, url, data, config);
    };
    Axios.prototype.delete = function (url, config) {
        return create_observable_1.createObservable(this.axiosInstance.delete, url, config);
    };
    Axios.defaults = axios_1.default.defaults;
    Axios.interceptors = axios_1.default.interceptors;
    return Axios;
}());
exports.Axios = Axios;
exports.default = Axios;
