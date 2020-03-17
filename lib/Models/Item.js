/**
 * FreteasyLib
 *
 * This file was automatically generated for ISET by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Item
 */
class Item extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.sku = this.constructor.getValue(obj.sku);
        this.quantity = this.constructor.getValue(obj.quantity);
        this.dimensions = this.constructor.getValue(obj.dimensions);
        this.weight = this.constructor.getValue(obj.weight);
        this.declaredValue = this.constructor.getValue(obj.declaredValue || obj.declared_value);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'sku', realName: 'sku' },
            { name: 'quantity', realName: 'quantity' },
            { name: 'dimensions', realName: 'dimensions', type: 'Dimensions' },
            { name: 'weight', realName: 'weight' },
            { name: 'declaredValue', realName: 'declared_value' },
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

module.exports = Item;
