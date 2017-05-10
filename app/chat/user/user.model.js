"use strict";
/**
 * A User represents an agent that sends messages
 */
var User = (function () {
    function User(name, avatarSrc, idUtilisateur) {
        this.name = name;
        this.avatarSrc = avatarSrc;
        this.idUtilisateur = idUtilisateur;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.model.js.map