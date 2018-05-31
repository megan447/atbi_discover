import {InjectionToken} from "@angular/core";

export let APP_CONFIG = new InjectionToken("app.config");

export interface IAppConfig {
    apiEndpoint: string;
    serverPoint: string;
}

export const AppConfig: IAppConfig = {
    apiEndpoint: "http://localhost:3000/api",
    serverPoint: "http://localhost:3000",
};

export class AgmConfig {
    public static agmKey = 'AIzaSyBhDOphiLj5Ly3HwVNWaKQHUxJSFxJ74CE';
}

export class NotificationSetting {
    public static notificationCarpoolSetting = {
        position: ["top", "right"],
        timeOut: 4000,
        lastOnBottom: true,
        animate: 'fromRight',
        clickToClose: true,
        pauseOnHover: false,
        showProgressBar: true,
        maxLength: 10,
    };
}


