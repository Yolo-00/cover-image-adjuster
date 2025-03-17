import { Directive } from 'vue';
import { SFCInstallWithContext, SFCWithInstall } from './interface';
export declare const withInstall: <T, E extends Record<string, any>>(main: T, extra?: E) => SFCWithInstall<T> & E;
export declare const withInstallFunction: <T>(fn: T, name: string) => SFCInstallWithContext<T>;
export declare const withInstallDirective: <T extends Directive>(directive: T, name: string) => SFCWithInstall<T>;
