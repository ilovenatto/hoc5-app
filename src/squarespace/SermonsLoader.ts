/**
 * Responsible for loading squarespace Sermons list JSON data from Squarespace.
 */
import {Sermon} from "../data/Sermon";

class SermonsLoader {
  // TODO sermons URL, etc
  URL_HOC5ROOT = "https://hoc5.squarespace.com";

  //URL_SERMONS = new URL(this.URL_HOC5ROOT).append("key", "value")

  /**
   * Loads Sermons from squarespace and returns a list of Sermons.
   */
  public load(): Sermon[] {
    return [];
  }

  private date(n: number) {
    // mod 146097
  }
}
