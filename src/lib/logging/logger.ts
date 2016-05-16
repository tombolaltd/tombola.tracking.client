import {ITrackerConfiguration} from '../configurations/ITrackerConfiguration';
import {ILog} from "./ILog";
import {IEvent} from './IEvent';

export class Logger {
    events:Array<IEvent>;
    configuration:ITrackerConfiguration;

    constructor(configuration:ITrackerConfiguration) {
        this.configuration = configuration;
        this.events = [];

        if (this.configuration.bufferedLog) {
            window.setInterval(() => this.flushLogs(), this.configuration.flushTimeout);
        }
    }

    push(event:IEvent) {
        event.clientTime = Date.now();
        this.events.push(event);

        if (!this.configuration.bufferedLog) {
            this.flushLogs();
        }
    }

    flushLogs() {
        try {
            let xhr = new (XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0'),
                events = this.events.slice();

            if (events.length > 0) {
                xhr.open('POST', this.configuration.apiEndpoint, 1);
                xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                xhr.setRequestHeader('Content-type', 'application/json');
                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4) {
                        if (xhr.status >= 400 ||
                            xhr.status >= 500) {
                            console.error('Failed to send tracking events:', xhr);
                        } else {
                            this.events = [];
                        }
                    }
                };

                let payload = Object.assign({}, {
                    appName: this.configuration.appName,
                    trackingId: this.configuration.trackingId,
                    tenantId: this.configuration.tenantId,
                    formFactor: this.configuration.formFactor,
                    userId: this.configuration.userId,
                    userAgent: window.navigator.userAgent
                }, {
                    events: events
                });

                xhr.send(JSON.stringify(payload));
            }
        } catch (e) {
            console.error('Failed to send tracking events:', e);
        }
    }
}