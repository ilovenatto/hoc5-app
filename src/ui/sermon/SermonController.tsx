import React, {useEffect} from "react";
import {SermonScreen} from "./SermonScreen";
import {LOG} from "../../util/HocLogger";

/**
 * ViewController for {@link SermonScreen}
 */
export function SermonController() {
  // Check if logged by trying to query for the account (and only do this once)
  useEffect(() => {
      LOG.debug(`Do initialization stuff`);
  }, []);

  return <SermonScreen />;
}
