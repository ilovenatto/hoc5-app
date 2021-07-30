import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { AppContext } from "../../data/AppContext";
import { LOG } from "../../util/HocLogger";
import {SermonListScreen} from "./SermonListScreen";

/**
 * ViewController for {@link EventListScreen}
 */


export function SermonListController() {

  // the following code is a demonstration on how to access 
  // the sermon data from any react component within the app

  useContext(AppContext)

  const sermonsModel = useContext(AppContext).sermonsModel;

  useEffect(() => {
    for (let i = 0; i < sermonsModel.sermonCount; ++i) {
      LOG.debug(`${sermonsModel.sermons[i].title}\n`);
    }
  });

  return <SermonListScreen />;
}

// the following code implements basically the same thing as above, but shows
// how to access the sermons model when the component is written as a class

// export class SermonListController extends React.Component {

//   render() {

//     let sermonsModel = this.context.sermonsModel;

//     for (let i = 0; i < sermonsModel.sermonCount; ++i) {
//       LOG.debug(`${sermonsModel.sermons[i].title}\n`);
//     }

//     return <SermonListScreen />;
//   }
// }
// SermonListController.contextType = AppContext;