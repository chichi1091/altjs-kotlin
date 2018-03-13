if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'altjs-kotlin'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'altjs-kotlin'.");
}
this['altjs-kotlin'] = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function sayHello() {
    println('Hello World');
  }
  _.sayHello = sayHello;
  Kotlin.defineModule('altjs-kotlin', _);
  return _;
}(typeof this['altjs-kotlin'] === 'undefined' ? {} : this['altjs-kotlin'], kotlin);
