const asl = require('aws-sdk-light');

(function () {
    var globalScope = (function () { return this; }).call(null);
    globalScope.Lambda = asl.Lambda;
    globalScope.STS = asl.STS;
    globalScope.Kinesis = asl.Kinesis;
}());
