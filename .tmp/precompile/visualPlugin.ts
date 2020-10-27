import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api"
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];

var taskChartF42768A98C494AF199B2FC622DF8AC0F_DEBUG: IVisualPlugin = {
    name: 'taskChartF42768A98C494AF199B2FC622DF8AC0F_DEBUG',
    displayName: 'TaskChart',
    class: 'Visual',
    apiVersion: '2.6.0',
    create: (options: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }

        throw 'Visual instance not found';
    },
    custom: true
};

if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["taskChartF42768A98C494AF199B2FC622DF8AC0F_DEBUG"] = taskChartF42768A98C494AF199B2FC622DF8AC0F_DEBUG;
}

export default taskChartF42768A98C494AF199B2FC622DF8AC0F_DEBUG;