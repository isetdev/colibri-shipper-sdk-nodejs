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
const baseController = require("../../lib/Controllers/BaseController");

const controller = testerlib.QuoteController;
const Quote = testerlib.Quote;

describe("QuoteController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Verifying if all services is working fine
     */
    it("should testServices response", function testServicesTest(done) {
        controller.getQuote(function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            done();
        }).catch(() => undefined);
    });

    /**
     * Requesting freight quotation without services info
     */
    it("should testQuoteWithoutServices response", function testQuoteWithoutServicesTest(done) {
        // parameters for the API call
        let quote = null;

        controller.createQuote(quote, function callback(error, response, context) {
            // test response code
            assert.equal(400, context.response.statusCode);
            done();
        }).catch(() => undefined);
    });

});
