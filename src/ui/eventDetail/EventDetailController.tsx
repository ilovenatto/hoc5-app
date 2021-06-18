import React, {useEffect} from "react";
import {EventDetailScreen} from "./EventDetailScreen";
import {LOG} from "../../util/HocLogger";

/**
 * ViewController for {@link EventDetailScreen}
 */
export function EventDetailController() {
  // Check if logged by trying to query for the account (and only do this once)
  useEffect(() => {
      LOG.debug(`Do initialization stuff`);
  }, []);

  return <EventDetailScreen />;
}
