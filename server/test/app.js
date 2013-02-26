/* Crypton Server, Copyright 2013 SpiderOak, Inc.
 *
 * This file is part of Crypton Server.
 *
 * Crypton Server is free software: you can redistribute it and/or modify it
 * under the terms of the Affero GNU General Public License as published by the
 * Free Software Foundation, either version 3 of the License, or (at your
 * option) any later version.
 *
 * Crypton Server is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE.  See the Affero GNU General Public
 * License for more details.
 *
 * You should have received a copy of the Affero GNU General Public License
 * along with Crypton Server.  If not, see <http://www.gnu.org/licenses/>.
*/

"use strict";
/*jslint expr: true*/

describe("POST /account", function () {
  it("saves account");
  it("sets session cookie");
});

describe("GET /account/:username", function () {
  it("generates login challenge");
  it("returns bogus challenge for unknown users");
});

describe("POST /account/:username", function () {
  it("verifies login challenge answer");
  it("rejects incorrect answers");
  it("rejects answers for unknown users");
});

describe("POST /account/:username/keyring", function () {
  it("requires login");
  it("updates keyring");
});