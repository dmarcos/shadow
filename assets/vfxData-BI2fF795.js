import { d as e, ba as o, e as s } from "./index-DbTBEItr.js";
const n = { defaultGrayscale: { id: "defaultGrayscale", parameters: { target: 1, duration: 0, mode: "fade" }, criteria: { currentState: { $gte: e.START_SCREEN, $lt: e.VIEWMASTER } }, priority: 0 }, officeColor: { id: "officeColor", parameters: { target: 0, duration: 5, mode: "bleed" }, criteria: { currentState: { $gte: e.VIEWMASTER, $lt: e.POST_VIEWMASTER } }, priority: 20, delay: 3.5 }, postViewmasterWipe: { id: "postViewmasterWipe", parameters: { target: 1, duration: 2.25, mode: "wipe", wipeDirection: "bottom-to-top", wipeSoftness: 0.15, suppressAudio: true }, criteria: { currentState: { $eq: e.POST_VIEWMASTER } }, priority: 30 }, postViewmasterGrayscale: { id: "postViewmasterGrayscale", parameters: { target: 1, duration: 0, mode: "fade" }, criteria: { isViewmasterEquipped: false, currentState: { $gt: e.POST_VIEWMASTER } }, priority: 0 }, viewmasterToggleColor: { id: "viewmasterToggleColor", parameters: { target: 0, duration: 1.2, mode: "fade" }, criteria: { isViewmasterEquipped: true, currentState: { $gte: e.SHADOW_AMPLIFICATIONS } }, priority: 80, delay: 0.75 }, viewmasterToggleGrayscale: { id: "viewmasterToggleGrayscale", parameters: { target: 1, duration: 1.2, mode: "fade" }, criteria: { isViewmasterEquipped: false, currentState: { $gte: e.CURSOR } }, priority: 70 }, postCursorColor: { id: "postCursorColor", parameters: { target: 0, duration: 7, mode: "bleed", from: 1 }, criteria: { currentState: { $eq: e.POST_CURSOR } }, delay: 2, priority: 80, onComplete: (t) => {
  t.setState({ currentState: e.OUTRO });
} }, outroColor: { id: "outroColor", parameters: { target: 0, duration: 0.1, mode: "bleed", from: 0 }, criteria: { currentState: { $gte: e.OUTRO } }, delay: 0, priority: 80 } }, c = { defaultFog: { id: "defaultFog", parameters: { opacity: 0.01, windSpeed: -0.5, particleCount: 22e3 }, criteria: { currentState: { $gte: e.START_SCREEN, $lt: e.ENTERING_OFFICE } }, priority: 0 } }, l = { hellWaves: { id: "hellWaves", parameters: { effectType: "waves", intensity: 0.8, enableAudio: false, rampDuration: 3, rampOutDuration: 1, targetMeshIds: ["interior", "officeHell"] }, criteria: { currentState: e.VIEWMASTER_HELL }, priority: 10 }, postViewmasterOff: { id: "postViewmasterOff", parameters: { effectType: "waves", intensity: 0, rampDuration: 0, rampOutDuration: 0, targetMeshIds: ["interior", "officeHell"] }, criteria: { isViewmasterEquipped: false, currentState: { $gte: e.POST_VIEWMASTER, $lt: e.LIGHTS_OUT } }, priority: 15 }, viewmasterToggleAmbient: { id: "viewmasterToggleAmbient", parameters: { effectType: "waves", intensity: 0, rampDuration: 0, rampOutDuration: 0, targetMeshIds: ["club"], audioOctaveMultiplier: 4 }, criteria: { isViewmasterEquipped: true, currentState: { $gte: e.SHADOW_AMPLIFICATIONS } }, priority: 20 } }, p = { hellTransition: { id: "hellTransition", parameters: { speedMultiplier: 1, staySeconds: 4, transitionSeconds: 4, randomRadius: 8, scatterCenter: { x: -5.14, y: 3.05, z: 84.66 }, mode: "scatter", trigger: "start" }, criteria: { currentState: { $eq: e.VIEWMASTER_HELL } }, priority: 10 }, hellReverseTransition: { id: "hellReverseTransition", parameters: { speedMultiplier: 1, staySeconds: 0, transitionSeconds: 2.75, mode: "wipe", wipeDirection: "bottom-to-top", wipeSoftness: 0.15, trigger: "start", suppressAudio: true }, criteria: { currentState: { $eq: e.POST_VIEWMASTER } }, priority: 20 } }, d = { edisonDissolve: { id: "edisonDissolve", parameters: { targetObjectIds: ["edison", "candlestickPhone"], progress: -14, targetProgress: 14, autoAnimate: false, transitionDuration: 5, mode: "noise", edgeColor1: "#66bbff", edgeColor2: "#3388cc", particleColor: "#4499dd", frequency: 4, edgeWidth: 0.5, bloomStrength: 12, particleIntensity: 1, enableAudio: true, particleSize: 50, particleDecimation: 5, particleDispersion: 2, particleVelocitySpread: 0.1 }, criteria: { currentState: { $gte: e.VIEWMASTER_DISSOLVE, $lt: e.POST_VIEWMASTER } }, priority: 10 }, edisonWipeIn: { id: "edisonWipeIn", parameters: { targetObjectIds: ["edison", "candlestickPhone"], progress: 15, targetProgress: -15, autoAnimate: false, transitionDuration: 2.5, mode: "wipe", wipeDirection: "bottom-to-top", wipeSoftness: 0.15, suppressAudio: true, particleSize: 0, particleDecimation: 999, edgeWidth: 5e-3 }, criteria: { currentState: { $eq: e.POST_VIEWMASTER } }, priority: 20 } }, u = { defaultOff: { id: "defaultOff", parameters: { intensity: 0, goWild: false }, criteria: { currentState: { $gte: e.START_SCREEN } }, priority: 0 }, shadowAmplificationsGlitch: { id: "shadowAmplificationsGlitch", parameters: { intensity: 0.5, goWild: true }, criteria: { glitchIntense: true, currentState: { $eq: e.SHADOW_AMPLIFICATIONS } }, priority: 100 } }, f = { desaturation: n, cloudParticles: c, splatFractal: l, splatMorph: p, dissolve: d, glitch: u };
function r(t, a) {
  const i = f[t];
  return i ? o(i, a, s) : (console.warn(`Unknown VFX type: ${t}`), null);
}
function m(t) {
  return r("desaturation", t);
}
function g(t) {
  return r("cloudParticles", t);
}
function E(t) {
  return r("splatFractal", t);
}
function T(t) {
  return r("splatMorph", t);
}
function y(t) {
  return r("dissolve", t);
}
function A(t) {
  return r("glitch", t);
}
export {
  c as cloudParticleEffects,
  f as default,
  n as desaturationEffects,
  d as dissolveEffects,
  g as getCloudParticleEffectForState,
  m as getDesaturationForState,
  y as getDissolveEffectForState,
  A as getGlitchEffectForState,
  E as getSplatFractalEffectForState,
  T as getSplatMorphEffectForState,
  r as getVfxEffectForState,
  u as glitchEffects,
  l as splatFractalEffects,
  p as splatMorphEffects,
  f as vfxEffects
};
