import React, {useContext} from "react";
import {SquarespaceLoader} from "../squarespace/SquarespaceLoader";
import {LOG} from "../util/HocLogger";
import {Sermon} from "./Sermon";
import {action, makeObservable, observable} from "mobx";


export class ChurchData {
  // Composed by this class to do its work
  private sermonLoader = new SquarespaceLoader();

  // Accessed by UI
  sermons: Sermon[] = [];
  isLoaded: boolean = false;

  constructor() {
    makeObservable(this, {
      sermons: observable,
      isLoaded: observable,
      setLoaded: action,
      setSermons: action
    });
  }

  public setLoaded(val: boolean) {
    this.isLoaded = val;
  }

  public setSermons(val: Sermon[]) {
    this.sermons = val;
  }

  /**
   * @return ID of latest sermon (should be this Sunday)
   */
  public getLatestSermon(): string | undefined {
    return (this.sermons.length > 0 ? this.sermons[0].id : undefined)
  }

  public async loadAll() {
    // Async fetch data
    this.sermonLoader.fetchSermons().then((sermons) => {
      this.setSermons(sermons); // should trigger observers to be notified (UI will update)
      this.setLoaded(true);
    }).catch((err) => {
      LOG.error(`Unable to fetch sermons ${err}`)
    });
  }

  public getSermon(sermonId: string): Sermon | undefined {
    const res = this.sermons.filter((sermon) => {
      return sermon.id === sermonId
    });
    return res.length == 1 ? res[0] : undefined;
  }
}

export const ChurchDataContext = React.createContext<ChurchData>(new ChurchData());
export const useChurchDataContext = (): ChurchData => useContext(ChurchDataContext);
