import { AllSermonsModel } from "./AllSermonsModel";
import { SermonsModelUpdater } from "./SermonsModelUpdater";
import React from "react";


// context object that the react context will contain

export class AppContextData {
    
    sermonsModel: AllSermonsModel;
    private sermonsUpdater: SermonsModelUpdater;

    constructor() {
        this.sermonsModel = new AllSermonsModel();
        this.sermonsUpdater = new SermonsModelUpdater(this.sermonsModel);
    }    
}

// actual react context object
export const AppContext = React.createContext<AppContextData>(new AppContextData());