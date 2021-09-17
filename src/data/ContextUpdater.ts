import { SermonsModel } from "./SermonsModel";
import { Sermon, newSermon } from "./Sermon";
import { LOG } from "../util/HocLogger";
import firebase from "firebase";
import { action, makeObservable } from "mobx";


// firebase stuff
const firebaseConfig = {
    apiKey: "AIzaSyCjlapwGfut4_I-EKEnFDdZRoQce-Bk5bQ",
    authDomain: "hoc5-app-9f907.firebaseapp.com",
    databaseURL: "https://hoc5-app-9f907-default-rtdb.firebaseio.com",
    projectId: "hoc5-app-9f907",
    storageBucket: "hoc5-app-9f907.appspot.com",
    messagingSenderId: "202004323081",
    appId: "1:202004323081:web:8ac7f87098c89350f2d1d8",
    measurementId: "G-JXYVB71QQX"
};

LOG.debug('initializing firebase');
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebase.database(firebaseApp);

// updates AllSermonsModel from changes in firebase
export class ContextUpdater {
    
    private sermonsModel: SermonsModel;

    constructor(sermonsModel: SermonsModel) {
        this.sermonsModel = sermonsModel;

        this.addListeners(this);

        makeObservable(this, {
            addSermonToModel: action
        });
    }

    addSermonToModel(sermon: Sermon) {
        // this line adds the sermon object into the sermons model at the
        // current sermon count as an ID, then increments the sermon count
        this.sermonsModel.sermons[this.sermonsModel.sermonCount++] = sermon;
    }

    // populates the sermons model with fake data for now
    addFakeData() {
        const fakeSermons = [
            newSermon({
                title: 'The Compassion of Our Lord',
                speakerName: 'Yuji Ogura',
                thumbnailURL: 'https://images.squarespace-cdn.com/content/v1/6021ddae8afaaa12b10682d5/1624640797707-H5INPXV7DUCELP0WS8M2/The+Compassion+of+the+lord.png?format=1500w',
                passage: 'Luke 8:40-56',
                year: 2021,
                month: 6,
                date: 27,
                youtubeVideoID: 'm9FEgDiY2SE',
                notesURL: 'https://drive.google.com/file/d/18MO5A05wH_b9zKdMlc_heat49xhWZ8rb/view'
            }),
            newSermon({
                title: 'Overcoming Temptations',
                speakerName: 'Dean Yuan',
                thumbnailURL: 'https://images.squarespace-cdn.com/content/v1/6021ddae8afaaa12b10682d5/1624388423275-2CZ7DMA6DYXWG203YUU5/Overcoming+Temptations.png?format=1500w',
                passage: 'Matthew 3:16 - 4:11',
                year: 2021,
                month: 6,
                date: 20,
                youtubeVideoID: 'e7cmJVoq7bk',
                notesURL: 'https://drive.google.com/file/d/18MO5A05wH_b9zKdMlc_heat49xhWZ8rb/view'
            }),
            newSermon({
                title: 'Finding Grace Through the Law',
                speakerName: 'Dean Yuan',
                thumbnailURL: 'https://images.squarespace-cdn.com/content/v1/6021ddae8afaaa12b10682d5/1623782841348-ZQHPQ42YW8UGOKDY9JFW/finding+grace+through+the+law.png?format=1500w',
                passage: 'John 8:2-12',
                year: 2021,
                month: 6,
                date: 13,
                youtubeVideoID: 'gNLvdGd7_Yg',
                notesURL: 'https://drive.google.com/file/d/18MO5A05wH_b9zKdMlc_heat49xhWZ8rb/view'
            })
        ];

        for (const sermon of fakeSermons) {
            this.addSermonToModel(sermon);
        }
    }

    // firebase functions
    addListeners(self: ContextUpdater) {
        const listRef = database.ref('sermons');
        listRef.once('value', (snapshot) => {
            self.loadSermons(self, snapshot);
        });
    }

    // loads the list of sermons from a snapshot of the data
    loadSermons(self: ContextUpdater, sermonsSnapshot: firebase.database.DataSnapshot) {

        const sermonsList: {
            [sermonKey: string]: {[fieldKey: string]: string}
        } = sermonsSnapshot.val().list;

        for (const key in sermonsList) {
            self.addSermonToModel(self.dataToSermon(sermonsList[key]));
        }

    }

    

    // converts data stored in firebase into a sermon data object
    dataToSermon(sermonData: {[key: string]: string}): Sermon {

        const dateNumArray = sermonData['date'].split('/');

        return newSermon({
            title: sermonData['title'],
            speakerName: sermonData['speaker-name'],
            thumbnailURL: sermonData['thumbnail-url'],
            passage: sermonData['passage'],
            year: parseInt(dateNumArray[2]),
            month: parseInt(dateNumArray[0]),
            date: parseInt(dateNumArray[1]),
            youtubeVideoID: sermonData['youtube-video-id'],
            notesURL: sermonData['notes-url']

        });
    }
}