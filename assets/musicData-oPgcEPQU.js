import { d as e, e as c } from "./index-DbTBEItr.js";
const r = { dukeKoko: { id: "dukeKoko", path: "./audio/music/Duke-Ellington-Ko-Ko.mp3", description: "Duke Koko - interior sequence", preload: false, criteria: { currentState: { $gte: e.ENTERING_OFFICE, $lte: e.PRE_EDISON } }, fadeTime: 2, priority: 10 }, dukeMooche: { id: "dukeMooche", path: "./audio/music/duke-ellington-the-mooche.mp3", description: "Duke Mooche - Intro sequence", preload: false, criteria: { currentState: { $gte: e.NEAR_RADIO, $lte: e.DRIVE_BY_PREAMBLE } }, fadeTime: 1, priority: 10 }, dukeAc: { id: "dukeAc", path: "./audio/music/duke-ellington-air-conditioned-jungle.mp3", description: "Duke Ac", preload: false, criteria: { currentState: { $gte: e.SHADOW_AMPLIFICATIONS, $lt: e.POST_CURSOR } }, fadeTime: 0, priority: 10, loop: true, volume: 1 }, dukeStLouis: { id: "dukeStLouis", path: "./audio/music/duke-ellington-east-st-louis-toodle-oo.mp3", description: "Duke St Louis", preload: false, criteria: { currentState: { $gte: e.POST_CURSOR } }, fadeTime: 0, priority: 10, loop: true, volume: 1, autoPlay: true }, rach2: { id: "rach2", path: "./audio/music/rach 3 - mv 2 - 1-00.mp3", description: "Rachmaninoff 3 - Movement 2 (1:00) - Intro sequence", preload: true, criteria: { currentState: e.START_SCREEN }, fadeTime: 2, priority: 100 }, rachDriveBy: { id: "rachDriveBy", path: "./audio/music/rach 3 - mv 2 - 4-30.mp3", description: "Rachmaninoff 3 - Movement 2 (4:30) - Drive-by sequence", preload: false, criteria: { currentState: { $gte: e.DRIVE_BY, $lt: e.ENTERING_OFFICE } }, fadeTime: 1, priority: 90 }, rach1: { id: "rach1", path: "./audio/music/rach 3 - mv 1 - 0-40.mp3", description: "Rachmaninoff 3 - Movement 1 (0:00-0:40) - Main gameplay", preload: true, criteria: { currentState: { $in: [e.INTRO, e.TITLE_SEQUENCE, e.TITLE_SEQUENCE_COMPLETE, e.CAT_DIALOG_CHOICE] } }, fadeTime: 0.25, priority: 11 }, rach3mv3: { id: "rach3mv3", path: "./audio/music/rach 3 - mv 3 - 0-72.mp3", description: "Rachmaninoff 3 - Movement 3 (1:00) - Main gameplay", preload: false, fadeTime: 1.25, delay: 2, criteria: { currentState: { $gte: e.EDISON, $lt: e.SHADOW_AMPLIFICATIONS } } } };
function d(a) {
  const t = Object.values(r).sort((i, o) => (o.priority || 0) - (i.priority || 0));
  for (const i of t) if (!(i.criteria && !c(a, i.criteria))) return i;
  return t.find((i) => i.isDefault) || null;
}
function s() {
  return Object.keys(r);
}
export {
  r as default,
  s as getAllTrackIds,
  d as getMusicForState,
  r as musicTracks
};
