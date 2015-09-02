/*globals describe, it, beforeEach, afterEach, */
'use strict';

var webdriver = require('selenium-webdriver');
//var chrome = require('selenium-webdriver/chrome');
var firefox = require('selenium-webdriver/firefox');
//var phantomjs = require('selenium-webdriver/phantomjs');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;
var assert = require('assert');

describe('Selenium Tutorial', function () {
    this.timeout(10000); // Wartezeit für Test-Cases
    beforeEach(function () {
        this.driver = new webdriver.Builder()
            .forBrowser('firefox')
            .build();

        // Start url
        this.driver.get('http://www.hsr.ch/');
    });

    afterEach(function (done) {
        this.driver.quit().then(done);
    });

    it('Should be on the home page', function (done) {
        var element = this.driver.findElement(By.tagName('body'));

        element.getAttribute('id').then(function (id) {
            assert.equal(id, 'HomeBody');
            done();
        });
    });

    it('Has a working nav', function (done) {
        var element = this.driver.findElement(By.linkText('Studium'));

        element.click();

        this.driver.getCurrentUrl().then(function (value) {
            assert(value.indexOf('/Studium.60.0.html') > -1);
            done();
        });
    });
});