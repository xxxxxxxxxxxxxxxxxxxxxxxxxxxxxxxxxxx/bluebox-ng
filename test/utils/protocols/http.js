/*
  Copyright Jesús Pérez <jesusprubio@fsf.org>

  This code may only be used under the MIT license found at
  https://opensource.org/licenses/MIT.
*/

'use strict';


// const test = require('tap').test; // eslint-disable-line import/no-extraneous-dependencies

// const methods = require('../../../lib/protocols/http');

// const serverCfg = {
//   ip: '127.0.0.1',
//   port: 8080,
//   userName: 'js',
//   password: 'js222',
// };


// test('with valid target', (assert) => {
//   assert.plan(1);

//   methods.scan(serverCfg.ip, { port: serverCfg.port })
//   // .then(res => assert.equal(res, '220 ProFTPD 1.3.4c Server (ProFTPD) [::ffff:127.0.0.1]'));
//   .then((res) => {
//     console.log('RESSS');
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log('ERR');
//     console.log(err.message);
//   });
// });

// test('with invalid username', (assert) => {
//   assert.plan(1);

//   // methods.scan(serverCfg.ip, opts)
//   methods.auth(serverCfg.ip, ['ola', 'kase'])
//   .then(res => assert.equal(res, null));
// });
