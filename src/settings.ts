const SETTINGS = {
  CONTEST_ID: 2013,
  // COLOR COUNT MUST MATCH PROBLEM COUNT
  PROBLEM_COLORS: {
    "A": "#FF8B00",
    "B": "#FFF500",
    "C": "#00FF75",
    "D": "#000AFF",
    "E": "#FF008A",
    "F1": "#DDDDDD",  // #DDD is invalid, must be six char hex code
    "F2": "#DDDDDD",
  },

  ACCEPTED_COLOR: "#198754",  // must be six char hex code
  TESTING_COLOR: "#cfcd30",
  REJECTED_COLOR: "#dc3545",

  MAX_SUBMISSIONS_DISPLAYED: 17,
  MAX_STANDINGS_DISPLAYED: 10,

  STATUS_RELOAD_INTERVAL_MS: 2000,
  STANDINGS_RELOAD_INTERVAL_MS: 6000,

  STATUS_PATH: "/status",
  STANDINGS_PATH: "/standings",

  PORT: 3000,
};






























export const _ST = {
  CID: SETTINGS.CONTEST_ID,
  PCS: SETTINGS.PROBLEM_COLORS as {[key: string]: string},

  ACC: SETTINGS.ACCEPTED_COLOR,
  TTC: SETTINGS.TESTING_COLOR,
  RJC: SETTINGS.REJECTED_COLOR,

  MXSMD: SETTINGS.MAX_SUBMISSIONS_DISPLAYED,
  MXSTD: SETTINGS.MAX_STANDINGS_DISPLAYED,

  STRIMS: SETTINGS.STATUS_RELOAD_INTERVAL_MS,
  SNRIMS: SETTINGS.STANDINGS_RELOAD_INTERVAL_MS,

  STATUS_PATH: SETTINGS.STATUS_PATH,
  STANDINGS_PATH: SETTINGS.STANDINGS_PATH,

  PORT: SETTINGS.PORT,
};
