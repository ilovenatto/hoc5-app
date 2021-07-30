import { AllSermonsModel } from "./AllSermonsModel";
import { Sermon, newSermon } from "./Sermon";
import { LOG } from "../util/HocLogger";

// updates AllSermonsModel from changes in firebase

export class SermonsModelUpdater {
    
    private sermonsModel: AllSermonsModel;

    constructor(sermonsModel: AllSermonsModel) {
        this.sermonsModel = sermonsModel;
        this.addFakeData();
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
}