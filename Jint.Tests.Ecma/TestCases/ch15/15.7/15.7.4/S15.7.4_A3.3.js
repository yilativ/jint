// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The Number prototype object has the property toLocaleString
 *
 * @path ch15/15.7/15.7.4/S15.7.4_A3.3.js
 * @description The test uses hasOwnProperty() method
 */

//CHECK#1
if(Number.prototype.hasOwnProperty("toLocaleString") !== true){
  $ERROR('#1: The Number prototype object has the property toLocaleString');
}


