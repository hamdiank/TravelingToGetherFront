"use strict";
var uuid_1 = require('../util/uuid');
/**
 * Thread represents a group of Users exchanging Messages
 */
var Thread = (function () {
    function Thread(id, name, avatarSrc) {
        this.id = id || uuid_1.uuid();
        this.name = name;
        this.avatarSrc = avatarSrc;
    }
    return Thread;
}());
exports.Thread = Thread;
//# sourceMappingURL=thread.model.js.map