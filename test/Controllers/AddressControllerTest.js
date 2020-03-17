/**
 * FreteasyLib
 *
 * This file was automatically generated for ISET by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const chai = require('chai');
const assert = chai.assert;
const TestHelper = require("../TestHelper");
const APIHelper = require("../../lib/APIHelper");
const testerlib = require("../../lib");
const testConfiguration = require("../TestBootstrap");

const controller = testerlib.AddressController;
const Dispatcher = testerlib.Dispatcher;
const Quote = testerlib.Quote;
const Service = testerlib.Service;
const Credentials = testerlib.Credentials;
const Document = testerlib.Document;
const Method = testerlib.Method;
const Sender = testerlib.Sender;
const Destiny = testerlib.Destiny;
const Address = testerlib.Address;
const Item = testerlib.Item;
const Dimensions = testerlib.Dimensions;


describe("AddressController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Requesting with a valid and existent postcode from Brazil
     */
    it("should testM31275060InBR response", function testM31275060InBRTest(done) {
        // parameters for the API call
        let country = 'BR';
        let postcode = '31275060';

        controller.getByPostcode(country, postcode, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.equal('{\n  status: \'success\',\n  code: 200,\n  address: {\n    city: \'Belo Horizonte\',\n    uf: \'MG\',\n    cod_ibge: \'3106200\',\n    postcode: \'31275060\',\n    neighborhood: \'São Luiz\',\n    cod_ibge_state: \'31\',\n    country: \'BR\',\n    street: \'Alameda dos Jacarandás\',\n    state: \'Minas Gerais\'\n  }\n}', context.response.body);
            done();
        }).catch(() => undefined);
    });

    /**
     * Requesting with a valid and existent postcode but with an inexistent or invalid country(XX)
     */
    it("should testInvalidCountryXX response", function testInvalidCountryXXTest(done) {
        // parameters for the API call
        let country = 'XX';
        let postcode = '31275060';

        controller.getByPostcode(country, postcode, function callback(error, response, context) {
            // test response code
            assert.equal(400, context.response.statusCode);
            assert.isNotNull(response);
            assert.equal('{ status: \'error\', code: 400, message: \'country not found\' }', context.response.body);
            done();
        }).catch(() => undefined);
    });

    /**
     * Requesting with an invalid postcode but with a valid country
     */
    it("should testInvalidPostcodeX4SD1A response", function testInvalidPostcodeX4SD1ATest(done) {
        // parameters for the API call
        let country = 'BR';
        let postcode = 'X/*4SD1A';

        controller.getByPostcode(country, postcode, function callback(error, response, context) {
            // test response code
            assert.equal(500, context.response.statusCode);
            done();
        }).catch(() => undefined);
    });

    /**
     * Requesting with an invalid postcode but with a valid country
     */
    it("should testValidCountryBRAndInvalidPostcode0UMDOIS response", function testValidCountryBRAndInvalidPostcode0UMDOISTest(done) {
        // parameters for the API call
        let country = 'BR';
        let postcode = '0UMDOIS';

        controller.getByPostcode(country, postcode, function callback(error, response, context) {
            // test response code
            assert.equal(500, context.response.statusCode);
            done();
        }).catch(() => undefined);
    });

});
