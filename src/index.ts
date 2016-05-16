import './lib/utils/polyfills';
import {EVENT_NAMES} from './lib/enums/EventNames';
import {PLUGIN_TYPES} from './lib/enums/PluginTypes';
import {ITrackerConfiguration} from './lib/configurations/ITrackerConfiguration';
import {IInteractionConfig} from "./lib/configurations/IInteractionConfig";
import {IPlugin} from './lib/plugins/IPlugin';
import {Logger} from './lib/logging/Logger';
import {PageTracker} from './lib/page/PageTracker';
import {Interaction} from './lib/interaction/Interaction';

export class Tracker {
    static EVENT_NAMES = EVENT_NAMES;
    static PLUGIN_TYPES = PLUGIN_TYPES;

    configuration:ITrackerConfiguration;
    logData:Object;
    logger:Logger;
    plugins:Array<IPlugin>;
    interactions:Array<Interaction>;
    pages:Array<PageTracker>;

    constructor(configuration:ITrackerConfiguration, logData:Object) {
        this.configuration = configuration;
        this.logData = logData;
        this.logger = new Logger(this.configuration);
        this.plugins = [];
        this.interactions = [];
        this.pages = [];
    }

    addPlugin(Plugin:Function) {
        return this;
    }

    addPage(pageName:String):Tracker {
        this.pages.push(new PageTracker(pageName));

        return this;
    }

    addInteractions(interactions:Array<IInteractionConfig>):Tracker {
        interactions.forEach((interaction) => {
            this.interactions.push(new Interaction(this.logger, interaction.selector, interaction.event, interaction.buildLog));
        });

        return this;
    }
}