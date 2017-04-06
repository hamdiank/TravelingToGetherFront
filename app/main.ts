import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppHighModule } from './appHigh.module';
import {enableProdMode} from '@angular/core';
enableProdMode();
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppHighModule);
