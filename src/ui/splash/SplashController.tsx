import React, {useEffect} from "react";
import {SplashScreen} from "./SplashScreen";
import {LOG} from "../../util/HocLogger";

/**
 * ViewController for {@link SplashScreen}
 */
export function SplashController() {
  // Check if logged by trying to query for the account (and only do this once)
  useEffect(() => {
      LOG.debug(`Do initialization stuff`);
  }, []);

  return <SplashScreen />;
}
