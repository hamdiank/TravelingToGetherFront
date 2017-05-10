"use strict";
/**
 * Message represents one message being sent in a Thread
 */
var Message = (function () {
    function Message(obj) {
        this.isRead = obj && obj.isRead || false;
        this.sentAt = obj && obj.sentAt || new Date();
        this.author = obj && obj.author || null;
        this.text = obj && obj.text || null;
        this.thread = obj && obj.thread || null;
        this.idDestinataire = obj && obj.idDestinataire || null;
    }
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=message.model.js.map