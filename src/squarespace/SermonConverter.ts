import {Sermon} from "../data/Sermon";
import {LOG} from "../util/HocLogger";

export interface SquareSermonJson {
  id: string;
  title: string;
  assetUrl: string;
  startDate: number;
  author: {
    displayName: string;
  };
  body: string;
  excerpt: string;
}

//const REGEX_PASSAGE = /(?<=^<.*>)[A-Z][a-z]* \d+:\d+[\-,\d: ]*(?=<\/p>$)/;
const REGEX_PASSAGE = /[A-Z][a-z]* \d+:\d+[\-,\d: ]*(?=<\/p>$)/;

export class SermonConverter {
  /**
   *
   * @param squarerSermon
   */
  public static convert(squareSermon: SquareSermonJson): Sermon {
    const result = new Sermon();
    result.title = squareSermon.title;
    result.speakerName = squareSermon.author.displayName;
    result.thumbnailUrl = squareSermon.assetUrl;
    // converts milliseconds since midnight jan 1 1970 into javascript date object
    result.date = new Date(squareSermon.startDate);
    // get passage excerpt
    const excerpt = squareSermon.excerpt;
    const passage = excerpt.match(REGEX_PASSAGE);
    LOG.debug(passage);
    // get youtube id

    return result;
  }

}

