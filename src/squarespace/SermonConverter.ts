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


export class SermonConverter {
  /**
   *
   * @param squarerSermon
   */

  public static convert(squareSermon: SquareSermonJson): Sermon {
    // regex patterns
    const PASSAGE_REGEX = /([12] )?[A-Z][a-z]* \d+:\d+[,\d\-: ]*(?=<\/p>)/g;
    const YOUTUBE_ID_REGEX = /\w{8,11}(?=(\/hqdefault\.jpg&quot;,&quot;)|(&amp;image=http)|(%2Fhqdefault\.jpg&amp;)|(&quot;,&quot;width&quot;)|(\?wmode))/g;

    const result = new Sermon();
    result.id = squareSermon.id;
    result.title = squareSermon.title;
    result.speakerName = squareSermon.author.displayName;
    result.thumbnailUrl = squareSermon.assetUrl;
    // converts milliseconds since midnight jan 1 1970 into javascript date object
    result.date = new Date(squareSermon.startDate);

    // get passage excerpt
    const passageMatches: RegExpMatchArray | null = squareSermon.excerpt.match(PASSAGE_REGEX);
    if (passageMatches == null) {
      result.passage = "No passage";
      LOG.debug(`Unable to find any matches for passage in:\n\t${squareSermon.excerpt}`);
    } else if (passageMatches.length > 1) {
      result.passage = passageMatches.join(", ");
      LOG.debug(`Found multiple matches for the passage excerpt: ${result.passage}`);
    } else {
      result.passage = passageMatches[0];
      LOG.debug(`Successfully found passage ${result.passage}`);
    }

    // get youtube id
    const youtubeIdMatches: RegExpMatchArray | null = squareSermon.body.match(YOUTUBE_ID_REGEX);
    LOG.debug(`Found the following youtube id matches:\n${youtubeIdMatches}`);
    const youtubeId = youtubeIdMatches?.pop();
    result.youtubeVideoId = youtubeId;
    return result;
  }

}

