import React from "react";

import {SermonListScreen} from "./SermonListScreen";

// TODO move non-view logic here from SemronListScreen

/**
 * ViewController for {@link SermonListScreen}
 */
export function SermonListController() {
  return <SermonListScreen/>;
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
