import {Sermon} from "../data/Sermon";

interface SquareSermonJson {
  filename: string;
  title: string;
  assetUrl: string;
}

export class SermonConverter {
  constructor() {

  }

  /**
   *
   * @param sermon
   */
  public convert(sermon: SquareSermonJson): Sermon {
    return {
      date: 0,
      month: 0,
      notesURL: "",
      passage: "",
      speakerName: "",
      thumbnailURL: "",
      title: "",
      year: 0,
      youtubeVideoID: ""
    };
  }
}

