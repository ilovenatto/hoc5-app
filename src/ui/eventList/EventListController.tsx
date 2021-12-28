import React, {useEffect} from "react";
import {EventListScreen} from "./EventListScreen";
import {LOG} from "../../util/HocLogger";

/**
 * ViewController for {@link EventListScreen}
 */
export function EventListController() {
  // Check if logged by trying to query for the account (and only do this once)
  useEffect(() => {
    LOG.debug(`Do initialization stuff`);
  }, []);

  return <EventListScreen/>;
}
