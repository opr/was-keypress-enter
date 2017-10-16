'use strict';

import chai from 'chai';
import {JSDOM} from 'jsdom';
import wasKeypressEnter from '../index';

const document = new JSDOM(
    '<!doctype html>' +
    '<html>' +
    '<body>' +
    '<button class="test-button">Click me</button>' +
    '<input class="epic-input" type="text" />' +
    '</body>' +
    '</html>'
);
/*
 global.document = doc;
 global.window = doc.defaultView;

 Object.keys(window).forEach(key => {
 if (!(key in global)) {
 global[key] = window[key];
 }
 });*/

chai.should();

describe('Setup - main script', () => {
    it('should load', () => {
        wasKeypressEnter(null).should.equal(false);
    });

    it('loads JSDOM and it has a button with class test-button', () => {
        document.window.document.getElementsByClassName('test-button').length.should.equal(1);
    });

    it('lets you click the button', (done) => {
        const clickEvent = new document.window.MouseEvent('click');
        const button = document.window.document.getElementsByClassName('test-button')[0];
        button.addEventListener('click', () => {
            done();
        });
        button.dispatchEvent(clickEvent);
    }).timeout(500);
});

describe('was enter pressed?', () => {
    it('does not let you give it a null value', () => {
        wasKeypressEnter(null).should.equal(false);
    });

    it('tells you enter wasn\'t pressed when you press something that isn\'t enter', (done) => {

        const backspaceKeypress = new document.window.KeyboardEvent('keydown', {
            key: 'Backspace',
            code: 'Backspace',
            which: 8
        });
        const input = document.window.document.getElementsByClassName('epic-input')[0];
        input.addEventListener('keydown', (e) => {
            if(!wasKeypressEnter(e)) {
                done();
            }
        });
        input.dispatchEvent(backspaceKeypress);
    }).timeout(500);

    it('tells you enter was pressed when you press enter', (done) => {

        const enterKeypress = new document.window.KeyboardEvent('keydown', {
            key: 'Enter',
            code: 'Enter',
            which: 13
        });
        const input = document.window.document.getElementsByClassName('epic-input')[0];
        input.addEventListener('keydown', (e) => {
            if(wasKeypressEnter(e)) {
                done();
            }
        });
        input.dispatchEvent(enterKeypress);
    }).timeout(500);
});