/* global it, describe */
/* @flow */

import chai from 'chai';
import {didCssExceedsLimits} from './../src/helpers';
import {makeCSS} from './testHelpers';

const expect = chai.expect;

describe('Helpers', () => {

  it('didCssExceedsLimits() should check if css exceeds selectors limit', () => {

    let resultIE9True  = didCssExceedsLimits(makeCSS(4095), 'ie9');
    let resultIE9False = didCssExceedsLimits(makeCSS(4094), 'ie9');
    let resultIE10True  = didCssExceedsLimits(makeCSS(65534), 'ie10');
    let resultIE10False = didCssExceedsLimits(makeCSS(65533), 'ie10');

    expect(resultIE9True).to.equal(true);
    expect(resultIE9False).to.equal(false);
    expect(resultIE10True).to.equal(true);
    expect(resultIE10False).to.equal(false);
  });

});
