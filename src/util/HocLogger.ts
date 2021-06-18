
import {
  configLoggerType,
  consoleTransport,
  logger,
  transportFunctionType,
} from "react-native-logs";
import {CONFIG_LOG_LEVEL} from "./HocConfig";

// Mapping of React Native log levels to the corresponding numeric log severity defined by react-native-logs
enum RNLogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

/**
 * Configuration for how react-native-logs Logger transports logs
 */
let transport: transportFunctionType = consoleTransport;

/**
 * Configuration for react-native-logs Logger
 */
const LOGGER_CONFIG: configLoggerType = {
  severity: "debug",
  transport: transport,
  levels: {
    debug: RNLogLevel.DEBUG,
    info: RNLogLevel.INFO,
    warn: RNLogLevel.WARN,
    error: RNLogLevel.ERROR,
  },
  async: true,
  dateFormat: "time",
  printLevel: true,
  printDate: false,
  enabled: true,
};

/**
 * App-wide logger for react-native-log. Facade over either console logging (in dev env)
 * or whatever logging in production env.
 */
export const LOG = logger.createLogger(LOGGER_CONFIG);

// Advertise the logging setup
LOG.debug(
  `Logger level is ${CONFIG_LOG_LEVEL}`
);
