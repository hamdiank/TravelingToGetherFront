"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var index_1 = require('./login/index');
var index_2 = require('./_guards/index');
var appRoutes = [
    { path: '/dashboard', component: dashboard_component_1.DashboardComponent, canActivate: [index_2.AuthGuard] },
    { path: '', component: index_1.LoginComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map