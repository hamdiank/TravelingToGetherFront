import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppHightModule } from './appHight.module';
import {enableProdMode} from '@angular/core';
enableProdMode();
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppHightModule);
