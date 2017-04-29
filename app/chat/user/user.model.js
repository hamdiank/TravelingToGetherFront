"use strict";
var uuid_1 = require('../util/uuid');
/**
 * A User represents an agent that sends messages
 */
var User = (function () {
    function User(name, avatarSrc) {
        this.name = name;
        this.avatarSrc = avatarSrc;
        this.id = uuid_1.uuid();
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.model.js.map