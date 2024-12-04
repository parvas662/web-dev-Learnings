var path = require('path');
var fs = require('fs');
var test = require('tape');
var resolve = require('../');
var async = require('../async');

test('`./async` entry point', function (t) {
    t.equal(resolve, async, '`./async` entry point is the same as `main`');
    t.end();
});

test('async foo', function (t) {
    t.plan(12);
    var dir = path.join(__dirname, 'resolver');

    resolve('./foo', { basedir: dir }, function (err, res, pkg) {
        if (err) t.fail(err);
        t.equal(res, path.join(dir, 'foo.js'));
        t.equal(pkg && pkg.name, 'resolve');
    });

    resolve('./foo.js', { basedir: dir }, function (err, res, pkg) {
        if (err) t.fail(err);
        t.equal(res, path.join(dir, 'foo.js'));
        t.equal(pkg && pkg.name, 'resolve');
    });

    resolve('./foo', { basedir: dir, 'package': { main: 'resolver' } }, function (err, res, pkg) {
        if (err) t.fail(err);
        t.equal(res, path.join(dir, 'foo.js'));
        t.equal(pkg && pkg.main, 'resolver');
