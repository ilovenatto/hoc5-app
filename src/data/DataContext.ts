import React from "react";
import {Sermon} from "./Sermon";


// context object that the react context will contain

export class AppData {
    sermons: Sermon[] = [];
    // TODO sermonsLoader;
}

// actual react context object
export const DataContext = React.createContext<AppData>(new AppData());
