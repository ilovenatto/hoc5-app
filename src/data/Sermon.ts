// sermon id type alias
import {makeObservable, observable} from "mobx";

export type sermonID = number;

// defines sermon data structure
export class Sermon {
  id: string = "";
  title: string = "";
  speakerName: string = "";
  thumbnailUrl: string = "";
  passage: string = "";
  date: Date = new Date(0);
  youtubeVideoId: string = "";
  notesUrl: string = "";

  constructor() {
    makeObservable(this, {
      id: observable,
      title: observable,
      speakerName: observable,
      thumbnailUrl: observable,
      passage: observable,
      date: observable,
      youtubeVideoId: observable,
      notesUrl: observable
    });
  }
}
