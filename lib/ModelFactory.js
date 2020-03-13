/**
 * FreteasyLib
 *
 * This file was automatically generated for ISET by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const Quote = require('../lib/Models/Quote');
const Service = require('../lib/Models/Service');
const Methods = require('../lib/Models/Methods');
const Sender = require('../lib/Models/Sender');
const Destiny = require('../lib/Models/Destiny');
const Address = require('../lib/Models/Address');
const Item = require('../lib/Models/Item');
const Dimensions = require('../lib/Models/Dimensions');
const Document = require('../lib/Models/Document');
const Credentials = require('../lib/Models/Credentials');
const Dispatcher = require('../lib/Models/Dispatcher');

const classMap = {
    Quote,
    Service,
    Methods,
    Sender,
    Destiny,
    Address,
    Item,
    Dimensions,
    Document,
    Credentials,
    Dispatcher,
};

/**
 * Factory class to create instances of models and exception classes
 */
class ModelFactory {
    /**
     * Creates instance of a model class
     * @param  modelName  {string}  Name of class to instantiate
     * @returns  {object} Instance of the model class
     */
    static getInstance(modelName) {
        return new classMap[modelName]();
    }
}

module.exports = ModelFactory;
