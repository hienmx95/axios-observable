"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createObservable = void 0;
var rxjs_1 = require("rxjs");
var axios_1 = require("axios");
function createObservable(promiseFactory) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var config = args[args.length - 1];
    config = config ? __assign({}, config) : {};
    args[args.length - 1] = config;
    var cancelSource;
    var hasCancelToken = !!config.cancelToken;
    if (hasCancelToken) {
        console.warn("No need to use cancel token, just unsubscribe the subscription would cancel the http request automatically");
    }
    var observable = new rxjs_1.Observable(function (subscriber) {
        if (!hasCancelToken) {
            cancelSource = axios_1.default.CancelToken.source();
            config.cancelToken = cancelSource.token;
        }
        promiseFactory.apply(void 0, args).then(function (response) {
            subscriber.next(response);
            subscriber.complete();
        })
            .catch(function (error) { return subscriber.error(error); });
    });
    var _subscribe = observable.subscribe.bind(observable);
    observable.subscribe = function () {
        var args2 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args2[_i] = arguments[_i];
        }
        var subscription = _subscribe.apply(void 0, args2);
        var _unsubscribe = subscription.unsubscribe.bind(subscription);
        subscription.unsubscribe = function () {
            if (cancelSource) {
                cancelSource.cancel();
            }
            _unsubscribe();
        };
        return subscription;
    };
    return observable;
}
exports.createObservable = createObservable;
