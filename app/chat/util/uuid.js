/* jshint bitwise:false, node:true */
/* tslint:disable:no-bitwise no-var-keyword typedef */
"use strict";
// taken from TodoMVC
function uuid() {
    var i, random;
    var result = '';
    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            result += '-';
        }
        result += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
            .toString(16);
    }
    return result;
}
exports.uuid = uuid;
;
//# sourceMappingURL=uuid.js.map