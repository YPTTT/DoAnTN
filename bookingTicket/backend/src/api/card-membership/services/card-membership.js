'use strict';

/**
 * card-membership service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::card-membership.card-membership');
