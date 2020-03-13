/**
 * FreteasyLib
 *
 * This file was automatically generated for ISET by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Quote
 */
class Quote extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.services = this.constructor.getValue(obj.services);
        this.sender = this.constructor.getValue(obj.sender);
        this.destiny = this.constructor.getValue(obj.destiny);
        this.items = this.constructor.getValue(obj.items);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'services', realName: 'services', array: true, type: 'Service' },
            { name: 'sender', realName: 'sender', type: 'Sender' },
            { name: 'destiny', realName: 'destiny', type: 'Destiny' },
            { name: 'items', realName: 'items', array: true, type: 'Item' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = Quote;
