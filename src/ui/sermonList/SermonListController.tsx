import React, {useEffect} from "react";
import {SermonListScreen} from "./SermonListScreen";
import {LOG} from "../../util/HocLogger";

/**
 * ViewController for {@link SermonListScreen}
 */
export function SermonListController() {
  // Check if logged by trying to query for the account (and only do this once)
  useEffect(() => {
      LOG.debug(`Do initialization stuff`);
  }, []);

  return <SermonListScreen />;
}
