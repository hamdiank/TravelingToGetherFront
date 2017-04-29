"use strict";
var uuid_1 = require('./../util/uuid');
/**
 * Message represents one message being sent in a Thread
 */
var Message = (function () {
    function Message(obj) {
        this.id = obj && obj.id || uuid_1.uuid();
        this.isRead = obj && obj.isRead || false;
        this.sentAt = obj && obj.sentAt || new Date();
        this.author = obj && obj.author || null;
        this.text = obj && obj.text || null;
        this.thread = obj && obj.thread || null;
    }
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=message.model.js.map