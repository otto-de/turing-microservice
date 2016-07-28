'use strict';

const globalRequestLogger = require('global-request-logger');

module.exports = (() => {
  function initialize(logger) {
    globalRequestLogger.initialize();
    globalRequestLogger.on('success', (request, response) => {
      logger.info('Request', request);
      logger.info('Response', response);
    });
    globalRequestLogger.on('error', (request, response) => {
      logger.info('Request', request);
      logger.info('Response', response);
    });
  }

  return {
    initialize
  };
})();
