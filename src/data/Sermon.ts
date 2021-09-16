// sermon id type alias
export type sermonID = number;

// defines sermon data structure
export interface Sermon {
    title: string;
    speakerName: string;
    thumbnailURL: string;
    passage: string;
    year: number;
    month: number;
    date: number;
    youtubeVideoID: string;
    notesURL: string;
}

// creates a sermon object based on provided arguments
export function newSermon(fields: Partial<Sermon>): Sermon {
    let defaultSermon: Sermon = {
        title: 'Unnamed Sermon',
        speakerName: 'Unknown',
        thumbnailURL: '',
        passage: '',
        year: 1,
        month: 1,
        date: 1,
        youtubeVideoID: '',
        notesURL: ''
    };
    return Object.assign(defaultSermon, fields);
}