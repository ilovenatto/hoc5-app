import { Sermon, sermonID } from "./Sermon";
import { makeObservable, observable } from "mobx";

// class that stores a list of sermon data objects

export class SermonsModel {

    // dictionary of sermons and ids
    sermons: Record<sermonID, Sermon> = {};
    sermonCount: number = 0;

    constructor() {
        makeObservable(this, {
            sermons: observable,
            sermonCount: observable
        });
    }
}