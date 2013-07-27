var servo 		  = require('servoControl');
var async         = require('async');
var fn            = require('./sharedFunction.js');

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
        response.send(data);
      } 
        });
  } 

exports.turnOff = function(request, response) {
    async.parallel({
      turnON  : fn.turnOff(request)
    },function(err,data) {
      //TODO : Exception handling
      if(err){
          throw new Error;
       }else{
        response.send(data);
      } 
        });
  } 

exports.blinkPattern = function(request, response) {
    async.parallel({
      turnON  : fn.blinkPattern(request)
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