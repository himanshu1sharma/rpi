var servo 		  = require('servoControl');
var async         = require('async');
var fn            = require('./sharedFunction.js');
var socket        = require('./socket.js');
var a = 0;

exports.blink = function(request, response) {
    async.parallel({
      blink  : fn.blink(request)
    },function(err,data) {
      //TODO : Exception handling
      if(err){
          throw new Error;
       }else{
        response.send(data);
      } 
        });
  } 

exports.turnON = function(request, response) {
    async.parallel({
      turnON  : fn.turnOn(request)
    },function(err,data) {
      //TODO : Exception handling
      if(err){
          throw new Error;
       }else{
        response(data);
      } 
        });
  } 

exports.turnOff = function(request, response) {
    async.parallel({
      turnOff  : fn.turnOff(request)
    },function(err,data) {
      //TODO : Exception handling
      if(err){
          throw new Error;
       }else{
        response(data);
      } 
        });
  } 

exports.blinkPattern = function(request, response) {
    async.parallel({
      turnBlinkPattern  : fn.blinkPattern(request)
    },function(err,data) {
      //TODO : Exception handling
      if(err){
          throw new Error;
       }else{
        response.send(data);
      } 
        });
  } 

  exports.readState = function(request, response) {
    async.parallel({
      turnON  : fn.readState(request)
    },function(err,data) {
      //TODO : Exception handling
      if(err){
          throw new Error;
       }else{
        response.send(data);
      } 
        });
  } 