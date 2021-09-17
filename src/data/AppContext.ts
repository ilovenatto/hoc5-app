import { SermonsModel } from "./SermonsModel";
import { ContextUpdater } from "./ContextUpdater";
import React from "react";
import { LOG } from "../util/HocLogger";
import App from "../../App";
import { autorun, makeObservable, observable } from "mobx";


// context object that the react context will contain

export class AppContextData {
    
    sermonsModel = new SermonsModel();
    private sermonsUpdater = new ContextUpdater(this.sermonsModel);

    constructor() {
        makeObservable(this, {
            sermonsModel: observable
        })
    }

}

// actual react context object
export const universalContext = new AppContextData();
export const AppContext = React.createContext<AppContextData>(universalContext);
