/**
 * Responsible for loading squarespace Sermons list JSON data from Squarespace.
 */
import {Sermon} from "../data/Sermon";
import {SermonConverter, SquareSermonJson} from "./SermonConverter";
import {LOG} from "../util/HocLogger";

export class SquarespaceLoader {
  private URL_SERMONS = "https://hoc5.squarespace.com/sermons?format=json-pretty";
  private URL_EVENTS = "https://hoc5.squarespace.com/events?format=json-pretty";

  /**
   * Loads Sermons from squarespace and returns a list of Sermons.
   */
  public async fetchSermons(): Promise<Sermon[]> {
    try {
      const resp = await fetch(this.URL_SERMONS);
      const json = await resp.json();

      let sermons: Sermon[] = [];
      json.past.forEach((squareSermon: SquareSermonJson) => {
        const sermon = SermonConverter.convert(squareSermon)
        sermons.push(sermon)
      })
      return sermons;
    } catch (err) {
      LOG.error(`Unable to fetch sermons ${err}. Return empty result.`);
      return [];
    }
  }
}
