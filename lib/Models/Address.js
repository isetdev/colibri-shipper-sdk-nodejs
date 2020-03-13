/**
 * FreteasyLib
 *
 * This file was automatically generated for ISET by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Address
 */
class Address extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.postcode = this.constructor.getValue(obj.postcode);
        this.streetLine1 = this.constructor.getValue(obj.streetLine1 || obj.street_line1);
        this.streetLine2 = this.constructor.getValue(obj.streetLine2 || obj.street_line2);
        this.number = this.constructor.getValue(obj.number);
        this.suburb = this.constructor.getValue(obj.suburb);
        this.city = this.constructor.getValue(obj.city);
        this.state = this.constructor.getValue(obj.state);
        this.country = this.constructor.getValue(obj.country);
        this.neighborhood = this.constructor.getValue(obj.neighborhood);
        this.county = this.constructor.getValue(obj.county);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'postcode', realName: 'postcode' },
            { name: 'streetLine1', realName: 'street_line1' },
            { name: 'streetLine2', realName: 'street_line2' },
            { name: 'number', realName: 'number' },
            { name: 'suburb', realName: 'suburb' },
            { name: 'city', realName: 'city' },
            { name: 'state', realName: 'state' },
            { name: 'country', realName: 'country' },
            { name: 'neighborhood', realName: 'neighborhood' },
            { name: 'county', realName: 'county' },
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

module.exports = Address;
