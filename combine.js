/**
 * Created by samanthamusselman on 1/5/16.
 */

var random = require('./randomNumber');

var toUSD = require('./toUSD');


exports.randomDollar = toUSD(random(100, 1000000));
exports.text = 'Account balance: \n';
