/**
  * @module FreteasyLib
  *
  * TODO Enter a description
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const AddressController = require('./Controllers/AddressController');
const QuoteController = require('./Controllers/QuoteController');
const Quote = require('./Models/Quote');
const Service = require('./Models/Service');
const Methods = require('./Models/Methods');
const Sender = require('./Models/Sender');
const Destiny = require('./Models/Destiny');
const Address = require('./Models/Address');
const Item = require('./Models/Item');
const Dimensions = require('./Models/Dimensions');
const Document = require('./Models/Document');
const Credentials = require('./Models/Credentials');
const Dispatcher = require('./Models/Dispatcher');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of FreteasyLib
    Configuration,
    Environments,
    // controllers of FreteasyLib
    AddressController,
    QuoteController,
    // models of FreteasyLib
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
    // exceptions of FreteasyLib
    APIException,
};

module.exports = initializer;
