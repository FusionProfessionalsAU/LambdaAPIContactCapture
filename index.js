'use strict';
var AWS = require('aws-sdk');
var s3 = new AWS.S3();

//Append data to file
function appendData(event, bucket, key){
    var params = {Bucket: bucket, Key: key};
    s3.getObject(params, function(err, data) {
        if (err) {
            console.log(err, err.stack);
        } else {
            var content = data.Body.toString() + "\n" + event.name + "," + event.email + "," + event.timestamp.toString();
            s3.putObject({Bucket: bucket, Key: key, Body: content}, function(err, data) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log('Success');
                        }
            });
        }
    });
}

exports.handler = function(event, context, callback) {
    if(event.field1 === "true"){
        appendData(event, process.env.bucket, "contacts1.csv");
    }
    if(event.field2 === "true"){
        appendData(event, process.env.bucket, "contacts2.csv");
    }
    if(event.field3 === "true"){
        appendData(event, process.env.bucket, "contacts3.csv");
    }
    if(event.field4 === "true"){
        appendData(event, process.env.bucket, "contacts4.csv");
    }
    callback(null, {"message" : "Successful"});
};
