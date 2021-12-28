import React, {useContext} from "react";
import {SquarespaceLoader} from "../squarespace/SquarespaceLoader";
import {LOG} from "../util/HocLogger";
import {Sermon} from "./Sermon";
import {makeObservable, observable} from "mobx";


export class ChurchData {
  // Composed by this class to do its work
  private sermonLoader = new SquarespaceLoader();

  // Accessed by UI
  sermons: Sermon[] = [];

  constructor() {
    makeObservable(this, {
      sermons: observable,
    });
  }

  public async loadAll() {
    // Async fetch data
    this.sermonLoader.fetchSermons().then((sermons) => {
      this.sermons = sermons; // should trigger observers to be notified (UI will update)
    }).catch((err) => {
      LOG.error(`Unable to fetch sermons ${err}`)
    });
  }
}

export const ChurchDataContext = React.createContext<ChurchData>(new ChurchData());
export const useChurchDataContext = (): ChurchData => useContext(ChurchDataContext);
