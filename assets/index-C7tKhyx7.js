const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/musicData-Nh_QT-jl.js","assets/index-XYoOAQ19.js","assets/dialogChoiceData-p-IBU3PV.js"])))=>i.map(i=>d[i]);
import { _ as q, L as N, E as U, M as G, Q as I, V as S, A as Ws, G as bt, a as Ft, b as us, h as Y, F as qs, c as Me, u as jt, d as p, e as X, f as k, g as le, i as $i, R as ri, j as gs, k as Ue, C as J, B as Ys, l as Qs, U as Ni, m as ot, I as ps, n as bi, S as Zs, o as ji, p as Bi, q as Xs, r as Ks, H as Js, D as ms, P as fs, s as ys, t as eo, v as Mt, w as ye, x as te, y as L, z as vs, J as Ge, K as ki, N as ws, T as to, O as xs, W as Ct, X as We, Y as bs, Z as lt, $ as io, a0 as Ei, a1 as oe, a2 as so, a3 as St, a4 as Ss, a5 as Ae, a6 as Ie, a7 as oo, a8 as tt, a9 as Fe, aa as Ms, ab as no, ac as Ts, ad as ao, ae as ro, af as lo, ag as Cs, ah as Bt, ai as co, aj as Ps, ak as ho, al as li, am as As, an as uo, ao as go, ap as Vi, aq as po, ar as Ee, as as mo, at as fo, au as Zt, av as ks, aw as yo, ax as vo, ay as wo, az as xo, aA as Es, aB as Ui, aC as Gi, aD as Hi, aE as Wi, aF as qi, aG as bo, aH as So, aI as Mo, aJ as To, aK as Co, aL as Po, aM as Ao, aN as ko, aO as Eo, aP as Io, aQ as Ro, aR as Xt, aS as Si, aT as Mi, aU as Is, aV as Do, aW as Lo, aX as Ii, aY as de, aZ as ze, a_ as Et, a$ as gt, b0 as Oo, b1 as zo, b2 as _o, b3 as Fo, b4 as $o, b5 as No, b6 as jo, b7 as Bo, b8 as Vo, b9 as Uo, __tla as __tla_0 } from "./index-XYoOAQ19.js";
let Ut;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var _a2, _b;
  (function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s);
    new MutationObserver((s) => {
      for (const o of s) if (o.type === "childList") for (const n of o.addedNodes) n.tagName === "LINK" && n.rel === "modulepreload" && i(n);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function t(s) {
      const o = {};
      return s.integrity && (o.integrity = s.integrity), s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? o.credentials = "include" : s.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
    }
    function i(s) {
      if (s.ep) return;
      s.ep = true;
      const o = t(s);
      fetch(s.href, o);
    }
  })();
  const ke = await q(() => import("./rapier-C0AkHkus.js").then(async (m) => {
    await m.__tla;
    return m;
  }), []);
  class Go {
    constructor() {
      this.RAPIER = ke, this.gravity = {
        x: 0,
        y: -9.81,
        z: 0
      }, this.world = new ke.World(this.gravity), this.trimeshColliders = /* @__PURE__ */ new Map(), this.logger = new N("PhysicsManager", false), this.fixedTimeStep = 1 / 60, this.accumulatedTime = 0, this.maxTimeStep = 0.1;
    }
    createCharacter(e = {
      x: 0,
      y: 0,
      z: 0
    }, t = {
      x: 0,
      y: 0,
      z: 0
    }) {
      const i = new U(G.degToRad(t.x), G.degToRad(t.y), G.degToRad(t.z)), s = new I().setFromEuler(i), o = ke.RigidBodyDesc.dynamic().setTranslation(e.x, e.y, e.z).setRotation({
        x: s.x,
        y: s.y,
        z: s.z,
        w: s.w
      }).setLinearDamping(0.2).lockRotations(), n = this.world.createRigidBody(o), r = ke.ColliderDesc.capsule(0.6, 0.3).setFriction(0.9).setMass(60);
      return this.world.createCollider(r, n), n;
    }
    createSensorBox(e, t, i) {
      return ke.ColliderDesc.cuboid(e, t, i).setSensor(true);
    }
    createSensorSphere(e) {
      return ke.ColliderDesc.ball(e).setSensor(true);
    }
    createSensorTrimesh(e, t) {
      return this.RAPIER.ColliderDesc.trimesh(e, t).setSensor(true);
    }
    createSensorCapsule(e, t) {
      return ke.ColliderDesc.capsule(e, t).setSensor(true);
    }
    createColliderFromDesc(e) {
      return this.world.createCollider(e);
    }
    checkIntersection(e, t) {
      return this.world.intersectionPair(e, t);
    }
    checkPointInTrimesh(e, t) {
      const i = t.x !== void 0 ? new this.RAPIER.Vector3(t.x, t.y, t.z) : t, s = this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(i.x, i.y, i.z), o = this.world.createRigidBody(s), n = this.RAPIER.ColliderDesc.ball(0.5).setSensor(true);
      n.setCollisionGroups(4294901760);
      const r = this.world.createCollider(n, o), a = this.world.intersectionPair(r, e);
      return this.world.removeCollider(r, false), this.world.removeRigidBody(o), a;
    }
    extractGeometryFromObject(e) {
      const t = [], i = [];
      let s = 0;
      return e.traverse((o) => {
        if (o.isMesh && o.geometry) {
          const n = o.geometry, r = n.attributes.position;
          if (!r) return;
          o.updateWorldMatrix(true, false);
          const a = o.matrixWorld, l = new S();
          for (let h = 0; h < r.count; h++) l.fromBufferAttribute(r, h), l.applyMatrix4(a), t.push(l.x, l.y, l.z);
          if (n.index) {
            const h = n.index.array;
            for (let c = 0; c < h.length; c++) i.push(h[c] + s);
          } else for (let h = 0; h < r.count; h++) i.push(h + s);
          s += r.count;
        }
      }), t.length === 0 || i.length === 0 ? (this.logger.warn("No geometry data found in object"), null) : (this.logger.log(`Extracted ${t.length / 3} vertices and ${i.length / 3} triangles from object`), {
        vertices: new Float32Array(t),
        indices: new Uint32Array(i)
      });
    }
    extractGeometryFromMesh(e) {
      if (!e || !e.isMesh || !e.geometry) return null;
      const t = e.geometry, i = t.attributes.position;
      if (!i) return null;
      const s = [];
      for (let n = 0; n < i.count; n++) s.push(i.getX(n), i.getY(n), i.getZ(n));
      const o = [];
      if (t.index) {
        const n = t.index.array;
        for (let r = 0; r < n.length; r++) o.push(n[r]);
      } else for (let n = 0; n < i.count; n++) o.push(n);
      return s.length === 0 || o.length === 0 ? null : {
        vertices: new Float32Array(s),
        indices: new Uint32Array(o)
      };
    }
    createTrimeshCollider(e, t, i = {
      x: 0,
      y: 0,
      z: 0
    }, s = {
      x: 0,
      y: 0,
      z: 0,
      w: 1
    }) {
      const o = this.extractGeometryFromObject(t);
      if (!o) return this.logger.error(`Failed to extract geometry for trimesh collider "${e}"`), null;
      const { vertices: n, indices: r } = o, a = ke.RigidBodyDesc.fixed().setTranslation(0, 0, 0).setRotation({
        x: 0,
        y: 0,
        z: 0,
        w: 1
      }), l = this.world.createRigidBody(a), h = ke.ColliderDesc.trimesh(n, r).setFriction(0.7).setRestitution(0).setCollisionGroups(4294901768), c = this.world.createCollider(h, l);
      return this.trimeshColliders.set(e, {
        collider: c,
        body: l
      }), this.logger.log(`Created trimesh collider "${e}" with ${n.length / 3} vertices and ${r.length / 3} triangles`), this.logger.log(`  First vertex: (${n[0].toFixed(2)}, ${n[1].toFixed(2)}, ${n[2].toFixed(2)})`), this.logger.log(`  Collider friction: ${c.friction()}`), this.logger.log(`  Collider is sensor: ${c.isSensor()}`), this.logger.log(`  Body type: ${l.bodyType()}`), {
        collider: c,
        body: l
      };
    }
    removeTrimeshCollider(e) {
      const t = this.trimeshColliders.get(e);
      if (!t) return false;
      const { collider: i, body: s } = t;
      return i && this.world.removeCollider(i, false), s && this.world.removeRigidBody(s), this.trimeshColliders.delete(e), this.logger.log(`Removed trimesh collider "${e}"`), true;
    }
    hasTrimeshCollider(e) {
      return this.trimeshColliders.has(e);
    }
    getFloorHeightAt(e, t, i = 100, s = 200) {
      const o = {
        x: e,
        y: i,
        z: t
      }, n = {
        x: 0,
        y: -1,
        z: 0
      }, r = new this.RAPIER.Ray(o, n), a = this.world.castRay(r, s, true);
      if (a) {
        const l = i + a.toi * n.y;
        return this.logger.log(`Floor raycast at (${e.toFixed(2)}, ${t.toFixed(2)}): hit at Y=${l.toFixed(2)}`), l;
      }
      return this.logger.warn(`Floor raycast at (${e.toFixed(2)}, ${t.toFixed(2)}): no hit within ${s}m`), null;
    }
    step(e = null) {
      if (e === null) {
        this.world.step();
        return;
      }
      const t = Math.min(e, this.maxTimeStep);
      for (this.accumulatedTime += t; this.accumulatedTime >= this.fixedTimeStep; ) this.world.step(), this.accumulatedTime -= this.fixedTimeStep;
    }
  }
  class Ho {
    constructor(e, t, i, s, o = null, n = null, r = null, a = null) {
      this.character = e, this.camera = t, this.renderer = i, this.inputManager = s, this.sfxManager = o, this.sparkRenderer = n, this.idleHelper = r, this.logger = new N("CharacterController", true);
      const l = G.degToRad(-180);
      if (this.logger.log("CharacterController initialRotation:", a), this.yaw = a ? G.degToRad(a.y) : l, this.pitch = a ? G.degToRad(a.x || 0) : 0, this.targetYaw = this.yaw, this.targetPitch = this.pitch, this.logger.log(`CharacterController initial yaw: ${G.radToDeg(this.yaw)}\xB0, pitch: ${G.radToDeg(this.pitch)}\xB0`), a) {
        const h = new U(this.pitch, this.yaw, 0, "YXZ");
        this.camera.quaternion.setFromEuler(h);
      }
      this.bodyYaw = this.yaw, this.isLookingAt = false, this.lookAtTarget = null, this.lookAtDuration = 0, this.lookAtProgress = 0, this.lookAtStartQuat = new I(), this.lookAtEndQuat = new I(), this.lookAtOnComplete = null, this.lookAtDisabledInput = false, this.inputDisabled = false, this.cameraSyncDisabled = false, this.frozenCameraBasePosition = new S(), this.lookAtReturnToOriginalView = false, this.lookAtReturnDuration = 0, this.lookAtReturning = false, this.lookAtHolding = false, this.lookAtHoldTimer = 0, this.lookAtHoldDuration = 0, this.isMovingTo = false, this.moveToStartPos = new S(), this.moveToTargetPos = new S(), this.moveToStartYaw = 0, this.moveToTargetYaw = 0, this.moveToStartPitch = 0, this.moveToTargetPitch = 0, this.moveToDuration = 0, this.moveToProgress = 0, this.moveToOnComplete = null, this.moveToInputControl = null, this.moveToRestoreInput = true, this.dofEnabled = true, this.baseApertureSize = 0.01, this.baseFocalDistance = 6, this.currentFocalDistance = this.baseFocalDistance, this.currentApertureSize = this.baseApertureSize, this.targetFocalDistance = this.baseFocalDistance, this.targetApertureSize = this.baseApertureSize, this.dofTransitioning = false, this.lookAtDofActive = false, this.dofHoldTimer = 0, this.dofHoldDuration = 2, this.dofTransitionStartProgress = 0.8, this.dofTransitionDuration = 2, this.dofTransitionProgress = 0, this.returnTransitionDuration = null, this.baseFov = null, this.currentFov = null, this.targetFov = null, this.startFov = null, this.zoomTransitioning = false, this.zoomTransitionProgress = 0, this.zoomFactor = 1.5, this.lookAtZoomActive = false, this.headbobTime = 0, this.headbobIntensity = 0, this.idleHeadbobTime = 0, this.headbobEnabled = true, this.insanityIntensitySmoothed = 0, this.insanityRampDownSpeed = 0.5, this.glanceEnabled = true, this.glanceState = null, this.glanceProgress = 0, this.glanceDuration = 5, this.glanceTimer = 0, this.wasIdleAllowed = false, this.glanceStartYaw = 0, this.glanceTargetYaw = 0, this.glanceStartPitch = 0, this.glanceTargetPitch = 0, this.glanceStartRoll = 0, this.glanceTargetRoll = 0, this.currentRoll = 0, this.isLerpingRollToZero = false, this.rollLerpSpeed = 2, this.audioListener = new Ws(), this.camera.add(this.audioListener), this.footstepSound = null, this.isPlayingFootsteps = false, this.enableFirstPersonBody = false, this.bodyModel = null, this.bodyModelGroup = null, this.bodyAnimationMixer = null, this.walkAnimation = null, this.idleAnimation = null, this.currentBodyAnimation = null, this.sceneManager = null, this.neckRotationLimit = Math.PI / 6, this.characterContainer = new bt(), this.baseSpeed = 2.5, this.sprintMultiplier = 1.75, this.cameraHeight = 0.9, this.cameraSmoothingFactor = 0.15, this.flightMode = false, this.flightSpeed = 5, this.verticalInput = 0, this._tempForward = new S(), this._tempRight = new S(), this._desired = new S(), this._up = new S(0, 1, 0), this._verticalVelocity = new S(), this._cameraOffset = new S(), this._camFollow = new S(), this._forward = new S(), this._right = new S(), this._yAxis = new S(0, 1, 0), this.baseFov = this.camera.fov, this.currentFov = this.baseFov, this.targetFov = this.baseFov, this.loadFootstepAudio();
    }
    setSceneManager(e) {
      this.sceneManager = e, this.sceneManager.scene && this.characterContainer && (this.sceneManager.scene.add(this.characterContainer), this.logger.log("Character container added to scene")), this.attachFirstPersonBody();
    }
    setPhysicsManager(e) {
      this.physicsManager = e, this.logger.log("Physics manager reference set");
    }
    attachFirstPersonBody() {
      if (!this.enableFirstPersonBody) return;
      if (!this.sceneManager) {
        this.logger.warn("Scene manager not set yet");
        return;
      }
      const e = this.sceneManager.getObject("firstPersonBody");
      if (!e) {
        this.logger.warn("First-person body not loaded yet (will retry)"), setTimeout(() => this.attachFirstPersonBody(), 100);
        return;
      }
      this.logger.log("Attaching first-person body to camera"), this.logger.log("  - Body object:", e), this.logger.log("  - Body visible:", e.visible), this.logger.log("  - Body world position:", e.position), this.bodyModelGroup = e, this.bodyModel = null, e.traverse((d) => {
        !this.bodyModel && d !== e && d.type === "Group" && (this.bodyModel = d);
      }), this.bodyModel || (this.bodyModel = e);
      let t = 1 / 0, i = -1 / 0, s = 1 / 0, o = -1 / 0, n = 1 / 0, r = -1 / 0, a = false;
      this.bodyModel.traverse((d) => {
        if (d.isMesh) {
          this.logger.log(`  - Mesh: ${d.name}`);
          const u = d.name.toLowerCase();
          if ((u.includes("head") || u.includes("hair") || u.includes("face") || u.includes("skull")) && (d.visible = false, a = true, this.logger.log("    (Hidden - head mesh)")), d.geometry) {
            d.geometry.computeBoundingBox();
            const m = d.geometry.boundingBox;
            m && (t = Math.min(t, m.min.x), i = Math.max(i, m.max.x), s = Math.min(s, m.min.y), o = Math.max(o, m.max.y), n = Math.min(n, m.min.z), r = Math.max(r, m.max.z));
          }
        }
      });
      const l = i - t, h = o - s, c = r - n;
      this.logger.log("  - Body Model 3D Bounds:"), this.logger.log(`    X: ${t.toFixed(2)} to ${i.toFixed(2)} (width: ${l.toFixed(2)})`), this.logger.log(`    Y: ${s.toFixed(2)} to ${o.toFixed(2)} (height: ${h.toFixed(2)})`), this.logger.log(`    Z: ${n.toFixed(2)} to ${r.toFixed(2)} (depth: ${c.toFixed(2)})`), a && this.logger.log("  - Head mesh(es) automatically hidden"), this.bodyModelGroup.position.set(0, -0.85, 0.165), this.bodyModelGroup.rotation.set(0, Math.PI, 0), this.characterContainer.add(this.bodyModelGroup), this.logger.log("Body parented to character container at offset (0, -0.8, 0)"), this.setupBodyAnimations();
    }
    setupBodyAnimations() {
      var _a3;
      if (!this.enableFirstPersonBody || !this.bodyModel || !this.bodyModelGroup) return;
      const e = (_a3 = this.sceneManager) == null ? void 0 : _a3.animationMixers.get("firstPersonBody");
      if (this.logger.log("Setting up body animations"), this.logger.log("  - Existing mixer from SceneManager:", e ? "YES" : "NO"), e) {
        this.bodyAnimationMixer = e;
        const t = Array.from(this.sceneManager.animationActions.entries()).filter(([i]) => i.startsWith("firstPersonBody"));
        this.logger.log("  - Found actions from SceneManager:", t.length), this.logger.log("  - Available actions:"), t.forEach(([i, s]) => {
          this.logger.log(`    * "${i}"`);
        });
        for (const [i, s] of t) i.includes("walk") ? (this.walkAnimation = s, this.logger.log(`  - Using walk animation: "${i}"`)) : i.includes("idle") && (this.idleAnimation = s, this.logger.log(`  - Using idle animation: "${i}"`));
        this.walkAnimation && this.idleAnimation ? (this.walkAnimation.loop = Ft, this.walkAnimation.clampWhenFinished = false, this.walkAnimation.setEffectiveWeight(0), this.walkAnimation.play(), this.idleAnimation.loop = Ft, this.idleAnimation.clampWhenFinished = false, this.idleAnimation.setEffectiveWeight(1), this.idleAnimation.play(), this.currentBodyAnimation = this.idleAnimation, this.logger.log("Setup animation blending:", "Walk:", this.walkAnimation.isRunning(), "Idle:", this.idleAnimation.isRunning())) : this.logger.warn("Could not find all animations (walk/idle). Found:", t.map(([i]) => i));
      } else {
        this.logger.log("  - No SceneManager mixer, searching for animations in GLTF...");
        let t = null;
        if (this.bodyModel.traverse((s) => {
          var _a4;
          ((_a4 = s.animations) == null ? void 0 : _a4.length) > 0 && (t = s.animations);
        }), !(t == null ? void 0 : t.length)) {
          this.logger.warn("No animations found in body model");
          return;
        }
        this.logger.log(`  - Found ${t.length} animation(s) in GLTF`), this.bodyAnimationMixer = new us(this.bodyModel);
        const i = t[0];
        this.walkAnimation = this.bodyAnimationMixer.clipAction(i), this.walkAnimation.loop = Ft, this.walkAnimation.play(), this.walkAnimation.paused = false, this.walkAnimation.timeScale = 1, this.logger.log("Created animation mixer for body:", i.name);
      }
    }
    setIdleHelper(e) {
      this.idleHelper = e;
    }
    setGameManager(e) {
      this.gameManager = e, this.gameManager.on("camera:lookat", (t) => {
        if (!this.gameManager.isControlEnabled()) return;
        const i = new S(t.position.x, t.position.y, t.position.z), s = t.onComplete || null, o = t.enableZoom !== void 0 ? t.enableZoom : false, n = t.zoomOptions || {}, r = t.returnToOriginalView || false, a = t.returnDuration || t.duration, l = t.holdDuration || 0;
        this.lookAt(i, t.duration, s, o, n, true, r, a, l);
      }), this.gameManager.on("character:moveto", (t) => {
        if (!this.gameManager.isControlEnabled()) return;
        let i = t.position.y;
        (i === void 0 || !isFinite(i)) && (i = this.character.translation().y, this.logger.warn(`MoveTo: Invalid Y coordinate provided, using current Y=${i.toFixed(2)}`));
        const s = new S(t.position.x, i, t.position.z);
        let o = null;
        if (t.lookat) {
          const l = new S(t.lookat.x, t.lookat.y, t.lookat.z), h = new S().subVectors(l, s).normalize(), c = Math.atan2(-h.x, -h.z), d = Math.sqrt(h.x * h.x + h.z * h.z), u = -Math.atan2(h.y, d);
          o = {
            yaw: c,
            pitch: u
          }, this.logger.log(`MoveTo with lookat: target rotation yaw=${G.radToDeg(c).toFixed(1)}\xB0 pitch=${G.radToDeg(u).toFixed(1)}\xB0`);
        } else t.rotation && (o = {
          yaw: t.rotation.yaw,
          pitch: t.rotation.pitch || 0
        });
        const n = t.inputControl || {
          disableMovement: true,
          disableRotation: true
        }, r = t.restoreInput !== void 0 ? t.restoreInput : true, a = t.onComplete || null;
        this.moveTo(s, o, t.duration, a, n, r);
      }), this.logger.log("Event listeners registered");
    }
    loadFootstepAudio() {
      this.footstepSound = new Y.Howl({
        src: [
          "./audio/sfx/pavement-steps.mp3"
        ],
        loop: true,
        volume: 0.2,
        preload: true,
        onload: () => {
          this.logger.log("Footstep audio loaded successfully");
        },
        onloaderror: (e, t) => {
          this.logger.warn("Failed to load footstep audio:", t);
        }
      }), this.sfxManager && this.sfxManager.registerSound("footsteps", this.footstepSound, 0.2);
    }
    lookAt(e, t = 1, i = null, s = false, o = {}, n = true, r = false, a = null, l = 0) {
      this.isLookingAt = true, this.lookAtTarget = e.clone(), this.lookAtDuration = t, this.lookAtProgress = 0, this.lookAtOnComplete = i, this.lookAtDisabledInput = n, this.lookAtReturnToOriginalView = r, this.lookAtReturnDuration = a || t, this.lookAtReturning = false, this.lookAtHolding = false, this.lookAtHoldTimer = 0;
      const { zoomFactor: h = 1.5, minAperture: c = 0.15, maxAperture: d = 0.35, transitionStart: u = 0.8, transitionDuration: m = 2, holdDuration: f = 2 } = o;
      r ? this.lookAtHoldDuration = l || (s ? f : 0) : this.lookAtHoldDuration = l || 0, this.currentZoomConfig = {
        zoomFactor: h,
        minAperture: c,
        maxAperture: d,
        transitionStart: u,
        transitionDuration: m,
        holdDuration: f
      }, n && (this.inputDisabled = true, this.inputManager.disable()), this.lookAtStartQuat.setFromEuler(new U(this.pitch, this.yaw, 0, "YXZ"));
      const x = new S().subVectors(e, this.camera.position), w = x.length();
      let y = this.yaw, v = this.pitch;
      if (w < 1e-6) this.logger.warn(`lookAt: target coincides with camera (len=${w.toFixed(6)}), keeping current rotation`);
      else {
        x.divideScalar(w);
        const b = Math.sqrt(x.x * x.x + x.z * x.z);
        y = Math.atan2(-x.x, -x.z), v = Math.atan2(x.y, b), (!isFinite(y) || !isFinite(v)) && (this.logger.warn(`lookAt: computed non-finite rotation (yaw=${y}, pitch=${v}), falling back to current`), y = this.yaw, v = this.pitch);
      }
      if (this.lookAtEndQuat.setFromEuler(new U(v, y, 0, "YXZ")), this.lookAtStartQuat.dot(this.lookAtEndQuat) < 0 && (this.lookAtEndQuat.x *= -1, this.lookAtEndQuat.y *= -1, this.lookAtEndQuat.z *= -1, this.lookAtEndQuat.w *= -1), s && this.sparkRenderer && this.dofEnabled) {
        const b = this.camera.position.distanceTo(e), T = b, { minAperture: M, maxAperture: C } = this.currentZoomConfig, A = 1 - (Math.max(2, Math.min(20, b)) - 2) / 18, D = M + (C - M) * A;
        this.targetFocalDistance = T, this.targetApertureSize = D, this.lookAtDofActive = true, this.dofHoldTimer = 0, this.dofTransitionProgress = 0, this.logger.log(`DoF ready - Distance: ${b.toFixed(2)}m, Aperture: ${D.toFixed(3)} (min: ${M.toFixed(3)}, max: ${C.toFixed(3)}) (will transition at ${(this.currentZoomConfig.transitionStart * 100).toFixed(0)}% over ${this.currentZoomConfig.transitionDuration}s)`);
      }
      s ? (this.startFov = this.currentFov, this.targetFov = this.baseFov / this.currentZoomConfig.zoomFactor, this.lookAtZoomActive = true, this.zoomTransitionProgress = 0, this.logger.log(`Looking at target over ${t}s (zoom: ${this.baseFov.toFixed(1)}\xB0 \u2192 ${this.targetFov.toFixed(1)}\xB0 [${this.currentZoomConfig.zoomFactor.toFixed(2)}x])`)) : this.logger.log(`Looking at target over ${t}s (no zoom)`);
    }
    cancelLookAt(e = true) {
      if (this.isLookingAt) {
        if (this.isLookingAt = false, this.lookAtDisabledInput && (this.inputDisabled = false, this.inputManager.enable()), this.glanceState = null, this.glanceTimer = 0, this.wasIdleAllowed = false, this.currentRoll = 0, e) {
          const t = new U().setFromQuaternion(this.camera.quaternion, "YXZ");
          this.yaw = t.y, this.pitch = t.x, this.targetYaw = this.yaw, this.targetPitch = this.pitch;
        }
        this.sparkRenderer && this.lookAtDofActive && (this.targetFocalDistance = this.baseFocalDistance, this.targetApertureSize = this.baseApertureSize, this.lookAtDofActive = false, this.dofTransitioning = true, this.dofTransitionProgress = 0, this.logger.log("Returning DoF to base (cancelled)")), this.lookAtZoomActive && (this.startFov = this.currentFov, this.targetFov = this.baseFov, this.lookAtZoomActive = false, this.zoomTransitioning = true, this.zoomTransitionProgress = 0, this.logger.log("Returning zoom to base (cancelled)")), this.logger.log("Look-at cancelled, control restored");
      }
    }
    moveTo(e, t = null, i = 2, s = null, o = {
      disableMovement: true,
      disableRotation: true
    }, n = true) {
      this.isMovingTo = true, this.moveToDuration = i, this.moveToProgress = 0, this.moveToOnComplete = s, this.moveToInputControl = o, this.moveToRestoreInput = n, o.disableMovement && o.disableRotation ? (this.inputDisabled = true, this.inputManager.disable()) : o.disableMovement ? this.inputManager.disableMovement() : o.disableRotation && this.inputManager.disableRotation();
      const r = this.character.translation();
      this.moveToStartPos.set(r.x, r.y, r.z), this.moveToTargetPos.copy(e), this.moveToStartYaw = isFinite(this.yaw) ? this.yaw : 0, this.moveToStartPitch = isFinite(this.pitch) ? this.pitch : 0, (!isFinite(this.yaw) || !isFinite(this.pitch)) && (this.logger.warn(`MoveTo: Current yaw/pitch invalid (yaw=${this.yaw}, pitch=${this.pitch}), resetting to (0,0)`), this.yaw = 0, this.pitch = 0, this.targetYaw = 0, this.targetPitch = 0), t ? (this.moveToTargetYaw = t.yaw !== void 0 && isFinite(t.yaw) ? t.yaw : this.moveToStartYaw, this.moveToTargetPitch = t.pitch !== void 0 && isFinite(t.pitch) ? t.pitch : this.moveToStartPitch) : (this.moveToTargetYaw = this.moveToStartYaw, this.moveToTargetPitch = this.moveToStartPitch), (!isFinite(this.moveToTargetYaw) || !isFinite(this.moveToTargetPitch)) && (this.logger.warn(`MoveTo: Target yaw/pitch invalid (yaw=${this.moveToTargetYaw}, pitch=${this.moveToTargetPitch}), using (0,0)`), this.moveToTargetYaw = 0, this.moveToTargetPitch = 0);
      let a = this.moveToTargetYaw - this.moveToStartYaw;
      a = Math.atan2(Math.sin(a), Math.cos(a)), this.moveToTargetYaw = this.moveToStartYaw + a, this.logger.log(`Moving to position (${e.x.toFixed(2)}, ${e.y.toFixed(2)}, ${e.z.toFixed(2)}) over ${i}s`);
    }
    resetToUpright() {
      const e = this.character.translation(), t = 2.05;
      this.character.setTranslation({
        x: e.x,
        y: t,
        z: e.z
      }, true);
      const i = new I().setFromEuler(new U(0, 0, 0, "YXZ"));
      this.character.setRotation({
        x: i.x,
        y: i.y,
        z: i.z,
        w: i.w
      }, true), this.character.setLinvel({
        x: 0,
        y: 0,
        z: 0
      }, true), this.character.setAngvel({
        x: 0,
        y: 0,
        z: 0
      }, true), this.camera.position.set(e.x, t + this.cameraHeight, e.z), this.yaw = 0, this.pitch = 0, this.targetYaw = 0, this.targetPitch = 0, this.bodyYaw = 0, this.currentRoll = 0;
      const s = new U(0, 0, 0, "YXZ");
      this.camera.quaternion.setFromEuler(s), this.cameraSyncDisabled = false, this.inputDisabled = false, this.inputManager && this.inputManager.enable(), this.logger.log(`Character reset to upright at Y=${t.toFixed(2)}`);
    }
    cancelMoveTo() {
      this.isMovingTo && (this.isMovingTo = false, this.moveToInputControl ? (this.moveToInputControl.disableMovement && this.moveToInputControl.disableRotation ? (this.inputDisabled = false, this.inputManager.enable(), this.logger.log("Move-to cancelled, restored full input")) : this.moveToInputControl.disableMovement ? (this.inputManager.enableMovement(), this.logger.log("Move-to cancelled, restored movement input")) : this.moveToInputControl.disableRotation && (this.inputManager.enableRotation(), this.logger.log("Move-to cancelled, restored rotation input")), this.moveToInputControl = null) : (this.inputDisabled = false, this.inputManager.enable(), this.logger.log("Move-to cancelled, control restored (fallback)")));
    }
    getForwardRightVectors() {
      return this._forward.set(0, 0, -1).applyAxisAngle(this._yAxis, this.yaw).setY(0).normalize(), this._right.crossVectors(this._forward, this._yAxis), {
        forward: this._forward,
        right: this._right
      };
    }
    disableInput() {
      this.inputDisabled = true, this.inputManager.disable();
    }
    enableInput(e = true) {
      if (this.inputDisabled = false, this.cameraSyncDisabled = false, e) {
        const t = new U().setFromQuaternion(this.camera.quaternion, "YXZ");
        this.yaw = t.y, this.pitch = t.x, this.targetYaw = this.yaw, this.targetPitch = this.pitch, this.bodyYaw = this.yaw;
      }
      this.inputManager.enable();
    }
    disableCameraSync() {
      this.cameraSyncDisabled = true, this.frozenCameraBasePosition.copy(this.camera.position);
    }
    enableCameraSync() {
      this.cameraSyncDisabled = false;
    }
    disableMovement() {
      this.inputManager.disableMovement();
    }
    enableMovement() {
      this.inputManager.enableMovement();
    }
    disableRotation() {
      this.inputManager.disableRotation();
    }
    enableRotation() {
      this.inputManager.enableRotation();
    }
    enableFlightMode() {
      this.flightMode || (this.flightMode = true, this.logger.log("Flight mode enabled (Q=down, E=up)"), this.onFlightKeyDown = this.handleFlightKeyDown.bind(this), this.onFlightKeyUp = this.handleFlightKeyUp.bind(this), window.addEventListener("keydown", this.onFlightKeyDown), window.addEventListener("keyup", this.onFlightKeyUp));
    }
    disableFlightMode() {
      this.flightMode && (this.flightMode = false, this.verticalInput = 0, this.logger.log("Flight mode disabled"), this.onFlightKeyDown && window.removeEventListener("keydown", this.onFlightKeyDown), this.onFlightKeyUp && window.removeEventListener("keyup", this.onFlightKeyUp));
    }
    handleFlightKeyDown(e) {
      if (!(document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA")) switch (e.key.toLowerCase()) {
        case "q":
          this.verticalInput = -1;
          break;
        case "e":
          this.verticalInput = 1;
          break;
      }
    }
    handleFlightKeyUp(e) {
      switch (e.key.toLowerCase()) {
        case "q":
        case "e":
          this.verticalInput = 0;
          break;
      }
    }
    disablePhysicsCollisions() {
      if (!this.character) return;
      const e = this.character.numColliders();
      for (let t = 0; t < e; t++) {
        const i = this.character.collider(t);
        i && i.setCollisionGroups(262145);
      }
      this.logger.log("Physics collisions limited to environment only");
    }
    enablePhysicsCollisions() {
      if (!this.character) return;
      const e = this.character.numColliders();
      for (let t = 0; t < e; t++) {
        const i = this.character.collider(t);
        i && i.setCollisionGroups(4294967295);
      }
      this.logger.log("Physics collisions restored to default");
    }
    adjustBodyPosition(e, t, i) {
      this.bodyModelGroup ? (this.bodyModelGroup.position.set(e, t, i), this.logger.log(`Body position (relative to character container) set to: ${e}, ${t}, ${i}`)) : this.logger.warn("Body model not loaded yet");
    }
    adjustBodyRotation(e, t, i) {
      this.bodyModelGroup ? (this.bodyModelGroup.rotation.set(e, t, i), this.logger.log(`Body rotation set to: ${e}, ${t}, ${i}`)) : this.logger.warn("Body model not loaded yet");
    }
    adjustBodyScale(e) {
      this.bodyModelGroup ? (this.bodyModelGroup.scale.setScalar(e), this.logger.log(`Body scale set to: ${e}`)) : this.logger.warn("Body model not loaded yet");
    }
    toggleBodyVisibility() {
      this.bodyModelGroup ? (this.bodyModelGroup.visible = !this.bodyModelGroup.visible, this.logger.log(`Body model visibility: ${this.bodyModelGroup.visible ? "ON" : "OFF"}`)) : this.logger.warn("Body model not loaded yet");
    }
    checkAnimationState() {
      if (this.logger.log("=== Body Animation State ==="), this.logger.log("Body model group:", this.bodyModelGroup ? "YES" : "NO"), this.logger.log("Body model:", this.bodyModel ? "YES" : "NO"), this.logger.log("Animation mixer:", this.bodyAnimationMixer ? "YES" : "NO"), this.logger.log("Walk animation:", this.walkAnimation ? "YES" : "NO"), this.walkAnimation && (this.logger.log("  - Is running:", this.walkAnimation.isRunning()), this.logger.log("  - Is paused:", this.walkAnimation.paused), this.logger.log("  - Time scale:", this.walkAnimation.timeScale), this.logger.log("  - Time:", this.walkAnimation.time)), this.sceneManager) {
        const e = this.sceneManager.animationMixers.get("firstPersonBody");
        this.logger.log("SceneManager has mixer for firstPersonBody:", e ? "YES" : "NO");
        const t = Array.from(this.sceneManager.animationActions.entries()).filter(([i]) => i.startsWith("firstPersonBody"));
        this.logger.log("SceneManager actions:", t.length), t.forEach(([i, s]) => {
          this.logger.log(`  - ${i}: running=${s.isRunning()}, paused=${s.paused}`);
        });
      }
    }
    setBodyWireframe(e) {
      this.bodyModel ? (this.bodyModel.traverse((t) => {
        t.isMesh && t.material && (t.material.wireframe = e);
      }), this.logger.log(`Body wireframe: ${e ? "ON" : "OFF"}`)) : this.logger.warn("Body model not loaded yet");
    }
    logBodyBounds() {
      if (!this.bodyModel) {
        this.logger.warn("Body model not loaded yet");
        return;
      }
      let e = 1 / 0, t = -1 / 0, i = 1 / 0, s = -1 / 0, o = 1 / 0, n = -1 / 0, r = 0;
      this.bodyModel.traverse((u) => {
        if (u.isMesh && u.geometry) {
          r++, u.geometry.computeBoundingBox();
          const m = u.geometry.boundingBox;
          m && (e = Math.min(e, m.min.x), t = Math.max(t, m.max.x), i = Math.min(i, m.min.y), s = Math.max(s, m.max.y), o = Math.min(o, m.min.z), n = Math.max(n, m.max.z));
        }
      });
      const a = t - e, l = s - i, h = n - o;
      this.logger.log("=== Body Model 3D Bounds ==="), this.logger.log(`Meshes analyzed: ${r}`), this.logger.log(`X: ${e.toFixed(2)} to ${t.toFixed(2)} (width: ${a.toFixed(2)})`), this.logger.log(`Y: ${i.toFixed(2)} to ${s.toFixed(2)} (height: ${l.toFixed(2)})`), this.logger.log(`Z: ${o.toFixed(2)} to ${n.toFixed(2)} (depth: ${h.toFixed(2)})`), this.logger.log(`
Body offset in character container: (${this.bodyModelGroup.position.x.toFixed(2)}, ${this.bodyModelGroup.position.y.toFixed(2)}, ${this.bodyModelGroup.position.z.toFixed(2)})`);
      const c = i + this.bodyModelGroup.position.y, d = s + this.bodyModelGroup.position.y;
      this.logger.log(`
Relative to character container:`), this.logger.log(`  Bottom: y = ${c.toFixed(2)}`), this.logger.log(`  Top: y = ${d.toFixed(2)}`), this.logger.log(`  Height: ${l.toFixed(2)}`);
    }
    getPosition(e = {
      x: 0,
      y: 0,
      z: 0
    }) {
      const t = this.character.translation(), i = new S(e.x, e.y, e.z);
      return i.applyAxisAngle(new S(0, 1, 0), this.yaw), {
        x: t.x + i.x,
        y: t.y + i.y,
        z: t.z + i.z
      };
    }
    logPosition() {
      const e = this.character.translation(), t = G.radToDeg(this.yaw), i = G.radToDeg(this.pitch), s = G.radToDeg(this.bodyYaw);
      if (this.logger.log("=== Physics Body (Capsule Collider Center) ==="), this.logger.log(`Position: { x: ${e.x.toFixed(2)}, y: ${e.y.toFixed(2)}, z: ${e.z.toFixed(2)} }`), this.logger.log(`Rotation: { yaw: ${t.toFixed(2)}\xB0, pitch: ${i.toFixed(2)}\xB0 }`), this.characterContainer) {
        this.logger.log(`
=== Character Container ===`);
        const n = this.characterContainer.position, r = this.characterContainer.rotation;
        this.logger.log(`Position: { x: ${n.x.toFixed(2)}, y: ${n.y.toFixed(2)}, z: ${n.z.toFixed(2)} }`), this.logger.log(`Body Yaw: ${s.toFixed(2)}\xB0 (rotation.y: ${r.y.toFixed(2)} rad)`);
      }
      this.logger.log(`
=== Camera ===`);
      const o = this.camera.position;
      if (this.logger.log(`Position: { x: ${o.x.toFixed(2)}, y: ${o.y.toFixed(2)}, z: ${o.z.toFixed(2)} }`), this.logger.log(`Rotation: { yaw: ${t.toFixed(2)}\xB0, pitch: ${i.toFixed(2)}\xB0 }`), this.logger.log(`Height offset from physics center: ${this.cameraHeight.toFixed(2)}`), this.bodyModelGroup) {
        this.logger.log(`
=== First-Person Body Model (local offset in container) ===`);
        const n = this.bodyModelGroup.position, r = this.bodyModelGroup.rotation;
        this.logger.log(`Local Position: { x: ${n.x.toFixed(2)}, y: ${n.y.toFixed(2)}, z: ${n.z.toFixed(2)} }`), this.logger.log(`Local Rotation: { x: ${r.x.toFixed(2)}, y: ${r.y.toFixed(2)}, z: ${r.z.toFixed(2)} }`);
      }
      return {
        position: {
          x: e.x,
          y: e.y,
          z: e.z
        },
        rotation: {
          yaw: this.yaw,
          pitch: this.pitch
        }
      };
    }
    isPositionInFrustum(e) {
      const t = new qs(), i = this.camera.projectionMatrix, s = this.camera.matrixWorldInverse, o = new Me();
      return o.multiplyMatrices(i, s), t.setFromProjectionMatrix(o), t.containsPoint(e);
    }
    setDofEnabled(e) {
      this.dofEnabled = e, this.logger.log(`DoF ${e ? "enabled" : "disabled"}`);
    }
    updateDepthOfField(e) {
      var _a3;
      if (this.dofHoldTimer > 0 && (this.dofHoldTimer -= e, this.dofHoldTimer <= 0)) {
        this.dofHoldTimer = 0;
        const a = this.lookAtDofActive, l = this.lookAtZoomActive;
        this.lookAtDofActive && (this.targetFocalDistance = this.baseFocalDistance, this.targetApertureSize = this.baseApertureSize, this.lookAtDofActive = false, this.dofTransitioning = true, this.dofTransitionProgress = 0), this.lookAtZoomActive && (this.startFov = this.currentFov, this.targetFov = this.baseFov, this.lookAtZoomActive = false, this.zoomTransitioning = true, this.zoomTransitionProgress = 0), this.logger.log(`Hold complete, returning ${a ? "DoF" : ""}${a && l ? " and " : ""}${l ? "zoom" : ""} to base`);
      }
      if (!this.sparkRenderer || !this.dofEnabled || !this.dofTransitioning) return;
      const t = this.returnTransitionDuration || ((_a3 = this.currentZoomConfig) == null ? void 0 : _a3.transitionDuration) || this.dofTransitionDuration;
      this.dofTransitionProgress += e / t;
      const i = Math.min(1, this.dofTransitionProgress), s = 1 - Math.pow(1 - i, 3), o = this.lookAtDofActive ? this.baseFocalDistance : this.currentFocalDistance, n = this.lookAtDofActive ? this.baseApertureSize : this.currentApertureSize;
      this.currentFocalDistance = o + (this.targetFocalDistance - o) * s, this.currentApertureSize = n + (this.targetApertureSize - n) * s;
      const r = 2 * Math.atan(0.5 * this.currentApertureSize / this.currentFocalDistance);
      this.sparkRenderer.apertureAngle = r, this.sparkRenderer.focalDistance = this.currentFocalDistance, i >= 1 && (this.currentFocalDistance = this.targetFocalDistance, this.currentApertureSize = this.targetApertureSize, this.dofTransitioning = false, this.dofTransitionProgress = 0);
    }
    updateZoom(e) {
      var _a3;
      if (!this.zoomTransitioning) return;
      const t = this.returnTransitionDuration || ((_a3 = this.currentZoomConfig) == null ? void 0 : _a3.transitionDuration) || this.dofTransitionDuration;
      this.zoomTransitionProgress += e / t;
      const i = Math.min(1, this.zoomTransitionProgress), s = 1 - Math.pow(1 - i, 3);
      this.currentFov = this.startFov + (this.targetFov - this.startFov) * s, this.camera.fov = this.currentFov, this.camera.updateProjectionMatrix(), i >= 1 && (this.currentFov = this.targetFov, this.camera.fov = this.currentFov, this.camera.updateProjectionMatrix(), this.zoomTransitioning = false, this.zoomTransitionProgress = 0);
    }
    updateInsanityIntensity(e) {
      var _a3, _b2;
      let t = 0;
      if ((_b2 = (_a3 = window.vfxManager) == null ? void 0 : _a3.effects) == null ? void 0 : _b2.splatFractal) {
        const s = window.vfxManager.effects.splatFractal.currentIntensity || 0, o = 0.02;
        t = Math.max(0, Math.min(1, (s - o) / (10 - o)));
      }
      if (t > this.insanityIntensitySmoothed) this.insanityIntensitySmoothed = t;
      else {
        const i = this.insanityRampDownSpeed * e;
        this.insanityIntensitySmoothed = Math.max(0, this.insanityIntensitySmoothed - i);
      }
    }
    getViewmasterInsanityIntensity() {
      return this.insanityIntensitySmoothed;
    }
    calculateIdleHeadbob() {
      const s = Math.sin(this.idleHeadbobTime * 0.75 * Math.PI * 2) * 6e-3, o = Math.sin(this.idleHeadbobTime * 0.75 * Math.PI) * 3e-3;
      return {
        vertical: s,
        horizontal: o
      };
    }
    startGlance() {
      this.glanceState = "glancing", this.glanceProgress = 0, this.glanceStartYaw = this.yaw, this.glanceStartPitch = this.pitch, this.glanceStartRoll = this.currentRoll, this.glanceDuration = 3 + Math.random() * 4;
      const e = Math.random() > 0.5 ? 1 : -1, t = (Math.random() * 0.3 + 0.2) * e;
      this.glanceTargetYaw = this.yaw + t;
      const i = Math.random() * 0.15 - 0.075;
      this.glanceTargetPitch = this.pitch + i;
      const s = (Math.random() * 0.3 + 0.04) * e;
      this.glanceTargetRoll = s, this.glanceTargetPitch = Math.max(-Math.PI / 3, Math.min(Math.PI / 2 - 0.01, this.glanceTargetPitch));
    }
    updateIdleGlance(e, t) {
      if (!this.glanceEnabled || !this.idleHelper) return;
      const i = this.idleHelper.shouldAllowIdleBehavior();
      if (i && !this.wasIdleAllowed && (this.glanceTimer = 0), this.wasIdleAllowed = i, !i || t || this.inputDisabled) {
        this.glanceState = null, this.glanceTimer = 0, this.currentRoll = 0;
        return;
      }
      if (this.glanceState === "glancing") if (this.glanceProgress += e / this.glanceDuration, this.glanceProgress >= 1) this.glanceProgress = 0, this.glanceState = "returning";
      else {
        const s = this.glanceProgress, o = s < 0.5 ? 2 * s * s : 1 - Math.pow(-2 * s + 2, 2) / 2;
        this.targetYaw = this.glanceStartYaw + (this.glanceTargetYaw - this.glanceStartYaw) * o, this.targetPitch = this.glanceStartPitch + (this.glanceTargetPitch - this.glanceStartPitch) * o, this.currentRoll = this.glanceStartRoll + (this.glanceTargetRoll - this.glanceStartRoll) * o;
      }
      else if (this.glanceState === "returning") if (this.glanceProgress += e / this.glanceDuration, this.glanceProgress >= 1) this.glanceProgress = 1, this.glanceState = null, this.glanceTimer = 5 + Math.random() * 3, this.targetYaw = this.glanceStartYaw, this.targetPitch = this.glanceStartPitch, this.currentRoll = 0;
      else {
        const s = this.glanceProgress, o = s < 0.5 ? 2 * s * s : 1 - Math.pow(-2 * s + 2, 2) / 2;
        this.targetYaw = this.glanceTargetYaw + (this.glanceStartYaw - this.glanceTargetYaw) * o, this.targetPitch = this.glanceTargetPitch + (this.glanceStartPitch - this.glanceTargetPitch) * o, this.currentRoll = this.glanceTargetRoll + (0 - this.glanceTargetRoll) * o;
      }
      else this.glanceTimer -= e, this.glanceTimer <= 0 && this.startGlance();
    }
    calculateHeadbob(e) {
      const a = e ? 2.6 : 2.2, l = e ? 0.02 : 0.01, h = e ? 0.03 : 75e-4, c = Math.sin(this.headbobTime * a * Math.PI * 2) * l, d = Math.sin(this.headbobTime * a * Math.PI) * h;
      return {
        vertical: c * this.headbobIntensity,
        horizontal: d * this.headbobIntensity
      };
    }
    update(e) {
      var _a3, _b2, _c;
      if (this.updateDepthOfField(e), this.updateZoom(e), this.isLookingAt) {
        if (this.lookAtHolding) {
          if (this.lookAtHoldTimer += e, this.lookAtHoldTimer >= this.lookAtHoldDuration) {
            if (this.lookAtHolding = false, this.lookAtReturning = true, this.lookAtProgress = 0, this.logger.log(`Hold complete, starting return to original view (${this.lookAtReturnDuration}s)`), this.lookAtDofActive || this.lookAtZoomActive) {
              this.dofHoldTimer = 0;
              const d = this.lookAtDofActive, u = this.lookAtZoomActive;
              this.sparkRenderer && this.lookAtDofActive && (this.targetFocalDistance = this.baseFocalDistance, this.targetApertureSize = this.baseApertureSize, this.lookAtDofActive = false, this.dofTransitioning = true, this.dofTransitionProgress = 0), this.lookAtZoomActive && (this.startFov = this.currentFov, this.targetFov = this.baseFov, this.lookAtZoomActive = false, this.zoomTransitioning = true, this.zoomTransitionProgress = 0), this.returnTransitionDuration = this.lookAtReturnDuration, this.logger.log(`Starting ${d ? "DoF" : ""}${d && u ? "/" : ""}${u ? "zoom" : ""} reset during return (${this.lookAtReturnDuration}s)`);
            }
            const c = this.lookAtStartQuat.clone();
            this.lookAtStartQuat.copy(this.lookAtEndQuat), this.lookAtEndQuat.copy(c);
          }
          return;
        }
        const n = this.lookAtReturning ? this.lookAtReturnDuration : this.lookAtDuration;
        if (this.lookAtProgress += e / n, !this.lookAtReturning) {
          const c = ((_a3 = this.currentZoomConfig) == null ? void 0 : _a3.transitionStart) || this.dofTransitionStartProgress;
          (this.lookAtDofActive || this.lookAtZoomActive) && !this.dofTransitioning && !this.zoomTransitioning && this.lookAtProgress >= c && (this.lookAtDofActive && (this.dofTransitioning = true), this.lookAtZoomActive && (this.startFov = this.currentFov, this.zoomTransitioning = true), this.logger.log(`Starting ${this.lookAtDofActive ? "DoF" : ""}${this.lookAtDofActive && this.lookAtZoomActive ? " and " : ""}${this.lookAtZoomActive ? "zoom" : ""} transition${this.lookAtDofActive && this.lookAtZoomActive ? "s" : ""} at ${(this.lookAtProgress * 100).toFixed(0)}% (threshold: ${(c * 100).toFixed(0)}%)`));
        }
        if (this.lookAtProgress >= 1) if (this.lookAtProgress = 1, this.lookAtReturnToOriginalView && !this.lookAtReturning) if (this.lookAtHoldDuration > 0) this.lookAtHolding = true, this.lookAtHoldTimer = 0, this.logger.log(`Holding at target for ${this.lookAtHoldDuration}s before returning`);
        else {
          if (this.lookAtReturning = true, this.lookAtProgress = 0, this.logger.log(`Starting return to original view (${this.lookAtReturnDuration}s)`), this.lookAtDofActive || this.lookAtZoomActive) {
            this.dofHoldTimer = 0;
            const d = this.lookAtDofActive, u = this.lookAtZoomActive;
            this.sparkRenderer && this.lookAtDofActive && (this.targetFocalDistance = this.baseFocalDistance, this.targetApertureSize = this.baseApertureSize, this.lookAtDofActive = false, this.dofTransitioning = true, this.dofTransitionProgress = 0), this.lookAtZoomActive && (this.startFov = this.currentFov, this.targetFov = this.baseFov, this.lookAtZoomActive = false, this.zoomTransitioning = true, this.zoomTransitionProgress = 0), this.returnTransitionDuration = this.lookAtReturnDuration, this.logger.log(`Starting ${d ? "DoF" : ""}${d && u ? "/" : ""}${u ? "zoom" : ""} reset during return (${this.lookAtReturnDuration}s)`);
          }
          const c = this.lookAtStartQuat.clone();
          this.lookAtStartQuat.copy(this.lookAtEndQuat), this.lookAtEndQuat.copy(c);
        }
        else {
          if (this.isLookingAt = false, this.lookAtReturning = false, this.lookAtHolding = false, this.returnTransitionDuration = null, this.glanceState = null, this.glanceTimer = 0, this.wasIdleAllowed = false, this.currentRoll = 0, !this.lookAtReturnToOriginalView && (this.lookAtDofActive || this.lookAtZoomActive)) {
            const c = ((_b2 = this.currentZoomConfig) == null ? void 0 : _b2.holdDuration) || this.dofHoldDuration;
            this.dofHoldTimer = c, this.logger.log(`Holding ${this.lookAtDofActive ? "DoF" : ""}${this.lookAtDofActive && this.lookAtZoomActive ? "/" : ""}${this.lookAtZoomActive ? "zoom" : ""} for ${c}s before resetting`);
          }
          this.lookAtOnComplete && (this.lookAtOnComplete(), this.lookAtOnComplete = null);
        }
        const r = Math.min(this.lookAtProgress, 1), a = r < 0.5 ? 2 * r * r : 1 - Math.pow(-2 * r + 2, 2) / 2, l = new I();
        l.slerpQuaternions(this.lookAtStartQuat, this.lookAtEndQuat, a), this.camera.quaternion.copy(l);
        const h = new U().setFromQuaternion(l, "YXZ");
        this.yaw = h.y, this.pitch = h.x, this.targetYaw = this.yaw, this.targetPitch = this.pitch;
      }
      if (this.isMovingTo) if (this.moveToProgress += e / this.moveToDuration, this.moveToProgress >= 1) this.moveToProgress = 1, this.isMovingTo = false, this.character.setTranslation({
        x: this.moveToTargetPos.x,
        y: this.moveToTargetPos.y,
        z: this.moveToTargetPos.z
      }, true), this.yaw = this.moveToTargetYaw, this.pitch = this.moveToTargetPitch, this.targetYaw = this.yaw, this.targetPitch = this.pitch, this.bodyYaw = this.yaw, this.moveToRestoreInput && this.moveToInputControl ? (this.moveToInputControl.disableMovement && this.moveToInputControl.disableRotation ? (this.inputDisabled = false, this.inputManager.enable(), this.logger.log("Move-to complete, restored full input")) : this.moveToInputControl.disableMovement ? (this.inputManager.enableMovement(), this.logger.log("Move-to complete, restored movement input")) : this.moveToInputControl.disableRotation && (this.inputManager.enableRotation(), this.logger.log("Move-to complete, restored rotation input")), this.moveToInputControl = null, this.moveToRestoreInput = true) : this.moveToRestoreInput || (this.logger.log("Move-to complete, input NOT restored (restoreInput: false)"), this.moveToInputControl = null, this.moveToRestoreInput = true), this.moveToOnComplete && (this.moveToOnComplete(), this.moveToOnComplete = null), this.logger.log("Move-to complete");
      else {
        const n = Math.min(this.moveToProgress, 1), r = n < 0.5 ? 2 * n * n : 1 - Math.pow(-2 * n + 2, 2) / 2, a = new S();
        a.lerpVectors(this.moveToStartPos, this.moveToTargetPos, r), this.character.setTranslation({
          x: a.x,
          y: a.y,
          z: a.z
        }, true), this.yaw = this.moveToStartYaw + (this.moveToTargetYaw - this.moveToStartYaw) * r, this.pitch = this.moveToStartPitch + (this.moveToTargetPitch - this.moveToStartPitch) * r, (!isFinite(this.yaw) || !isFinite(this.pitch)) && (this.logger.error(`MoveTo: interpolation produced NaN (start=(${this.moveToStartYaw}, ${this.moveToStartPitch}), target=(${this.moveToTargetYaw}, ${this.moveToTargetPitch}), t=${r})`), this.yaw = 0, this.pitch = 0), this.targetYaw = this.yaw, this.targetPitch = this.pitch, this.bodyYaw = this.yaw;
      }
      if (!this.isLookingAt && !this.inputDisabled) {
        const n = this.inputManager.getCameraInput(e), r = Math.abs(n.x) > 1e-4 || Math.abs(n.y) > 1e-4;
        if (r && this.glanceState !== null && (this.glanceState = null, this.glanceTimer = 5 + Math.random() * 3, this.currentRoll = 0, this.logger.log("Manual camera input detected, cancelling glance")), n.hasGamepad) this.yaw -= n.x, this.pitch -= n.y, this.pitch = Math.max(-Math.PI / 3, Math.min(Math.PI / 2 - 0.01, this.pitch)), this.targetYaw = this.yaw, this.targetPitch = this.pitch;
        else if (r) {
          const a = isFinite(n.x) ? n.x : 0, l = isFinite(n.y) ? n.y : 0;
          isFinite(this.targetYaw) || (this.targetYaw = this.yaw), isFinite(this.targetPitch) || (this.targetPitch = this.pitch), this.targetYaw -= a, this.targetPitch -= l, this.targetPitch = Math.max(-Math.PI / 3, Math.min(Math.PI / 2 - 0.01, this.targetPitch)), isFinite(this.targetYaw) || (this.targetYaw = this.yaw), isFinite(this.targetPitch) || (this.targetPitch = this.pitch), isFinite(this.yaw) || (this.yaw = this.targetYaw), isFinite(this.pitch) || (this.pitch = this.targetPitch), this.yaw += (this.targetYaw - this.yaw) * this.cameraSmoothingFactor, this.pitch += (this.targetPitch - this.pitch) * this.cameraSmoothingFactor, isFinite(this.yaw) || (this.yaw = this.targetYaw), isFinite(this.pitch) || (this.pitch = this.targetPitch);
        } else isFinite(this.yaw) || (this.yaw = 0), isFinite(this.pitch) || (this.pitch = 0), isFinite(this.targetYaw) || (this.targetYaw = this.yaw), isFinite(this.targetPitch) || (this.targetPitch = this.pitch), this.yaw += (this.targetYaw - this.yaw) * this.cameraSmoothingFactor, this.pitch += (this.targetPitch - this.pitch) * this.cameraSmoothingFactor, isFinite(this.yaw) || (this.yaw = this.targetYaw), isFinite(this.pitch) || (this.pitch = this.targetPitch);
        this.inputManager.resetFrameInput();
      }
      let t = false, i = false;
      if (this.inputDisabled) {
        const n = this.character.linvel();
        this.flightMode ? this.character.setLinvel({
          x: 0,
          y: 0,
          z: 0
        }, true) : this.character.setLinvel({
          x: 0,
          y: n.y,
          z: 0
        }, true);
      } else {
        const { forward: n, right: r } = this.getForwardRightVectors(), a = this.inputManager.getMovementInput(), l = this.inputManager.getTouchSpeedMultiplier(), h = l > 0, c = this._desired;
        if (h) {
          i = l >= 0.95;
          const w = this.baseSpeed * this.sprintMultiplier * l;
          c.copy(this._tempForward.copy(n).multiplyScalar(a.y)), c.add(this._tempRight.copy(r).multiplyScalar(a.x)), t = c.lengthSq() > 1e-6, t ? c.normalize().multiplyScalar(w) : c.set(0, 0, 0);
        } else {
          i = this.inputManager.isSprinting();
          const x = i ? this.baseSpeed * this.sprintMultiplier : this.baseSpeed;
          c.copy(this._tempForward.copy(n).multiplyScalar(a.y)), c.add(this._tempRight.copy(r).multiplyScalar(a.x)), t = c.lengthSq() > 1e-6, t && c.normalize().multiplyScalar(x);
        }
        const d = this.yaw - this.bodyYaw, u = Math.atan2(Math.sin(d), Math.cos(d));
        this.bodyYaw += u * 0.15;
        let m = this.yaw - this.bodyYaw;
        m = Math.atan2(Math.sin(m), Math.cos(m)), !t && Math.abs(m) > this.neckRotationLimit && (this.bodyYaw += m * 0.06);
        const f = this.character.linvel();
        this.flightMode ? (this._verticalVelocity.copy(this._up).multiplyScalar(this.verticalInput * this.flightSpeed), !t || !this.inputManager.isMovementEnabled() ? this.character.setLinvel({
          x: 0,
          y: this._verticalVelocity.y,
          z: 0
        }, true) : this.character.setLinvel({
          x: c.x,
          y: this._verticalVelocity.y,
          z: c.z
        }, true)) : !t || !this.inputManager.isMovementEnabled() ? this.character.setLinvel({
          x: 0,
          y: f.y,
          z: 0
        }, true) : this.character.setLinvel({
          x: c.x,
          y: f.y,
          z: c.z
        }, true);
      }
      this.updateIdleGlance(e, t), this.updateInsanityIntensity(e);
      const s = this.headbobEnabled && t ? 1 : 0;
      if (this.headbobIntensity += (s - this.headbobIntensity) * 0.15, this.idleHeadbobTime += e, t && this.headbobEnabled && (this.headbobTime += e), this.enableFirstPersonBody && this.bodyAnimationMixer && this.walkAnimation && this.idleAnimation) {
        !((_c = this.sceneManager) == null ? void 0 : _c.animationMixers.has("firstPersonBody")) && this.bodyAnimationMixer.update(e);
        const r = 0.1;
        if (t) {
          const a = i ? 1.5 : 1, l = this.walkAnimation.getEffectiveWeight(), h = Math.min(1, l + r);
          this.walkAnimation.setEffectiveWeight(h), this.idleAnimation.setEffectiveWeight(1 - h), this.walkAnimation.timeScale = a;
        } else {
          const a = this.idleAnimation.getEffectiveWeight(), l = Math.min(1, a + r);
          this.idleAnimation.setEffectiveWeight(l), this.walkAnimation.setEffectiveWeight(1 - l);
        }
      } else this.enableFirstPersonBody && this.bodyModelGroup && !this.bodyAnimationMixer && (this.loggedNoAnimation || (this.logger.warn("No animation mixer found for body"), this.loggedNoAnimation = true));
      if (this.footstepSound && (this.audioListener.context.state === "suspended" && this.audioListener.context.resume(), t && !this.isPlayingFootsteps ? (this.footstepSound.play(), this.isPlayingFootsteps = true) : !t && this.isPlayingFootsteps && (this.footstepSound.stop(), this.isPlayingFootsteps = false), this.isPlayingFootsteps)) {
        const n = i ? 1.5 : 1;
        this.footstepSound.rate(n);
      }
      const o = this.character.translation();
      if (this.cameraSyncDisabled) {
        if (this.headbobEnabled) {
          const n = this.calculateIdleHeadbob(), { right: r } = this.getForwardRightVectors();
          this.camera.position.copy(this.frozenCameraBasePosition), this.camera.position.y += n.vertical * 3, this.camera.position.add(this._tempRight.copy(r).multiplyScalar(n.horizontal * 3));
        }
      } else {
        const n = this.headbobEnabled ? this.calculateHeadbob(i) : {
          vertical: 0,
          horizontal: 0
        }, r = this.headbobEnabled ? this.calculateIdleHeadbob() : {
          vertical: 0,
          horizontal: 0
        }, { forward: a, right: l } = this.getForwardRightVectors();
        this._cameraOffset.set(0, this.cameraHeight, 0), this._camFollow.set(o.x, o.y, o.z).add(this._cameraOffset), this._camFollow.y += n.vertical + r.vertical, this._camFollow.add(this._tempRight.copy(l).multiplyScalar(n.horizontal + r.horizontal)), this.camera.position.copy(this._camFollow);
      }
      if (this.characterContainer && (this.characterContainer.position.set(o.x, o.y, o.z), this.characterContainer.rotation.set(0, this.bodyYaw, 0)), !this.isLookingAt) {
        if (this.isLerpingRollToZero) {
          const c = this.rollLerpSpeed * e;
          Math.abs(this.currentRoll) <= c ? (this.currentRoll = 0, this.isLerpingRollToZero = false) : this.currentRoll -= Math.sign(this.currentRoll) * c;
        }
        isFinite(this.pitch) || (this.pitch = 0), isFinite(this.yaw) || (this.yaw = 0), isFinite(this.currentRoll) || (this.currentRoll = 0);
        const n = this.camera.position;
        if (!isFinite(n.x) || !isFinite(n.y) || !isFinite(n.z)) return;
        const r = this.camera.quaternion;
        !isFinite(r.x) || !isFinite(r.y) || !isFinite(r.z) || !isFinite(r.w) ? this.camera.quaternion.setFromEuler(new U(this.pitch, this.yaw, this.currentRoll, "YXZ")) : this.camera.quaternion.normalize();
        const a = new S(0, 0, -1).applyEuler(new U(this.pitch, this.yaw, this.currentRoll, "YXZ")), l = new S().copy(this.camera.position).add(a);
        this.camera.lookAt(l);
        const h = this.camera.quaternion;
        !isFinite(h.x) || !isFinite(h.y) || !isFinite(h.z) || !isFinite(h.w) ? this.camera.quaternion.setFromEuler(new U(this.pitch, this.yaw, this.currentRoll, "YXZ")) : this.camera.quaternion.normalize();
      }
    }
  }
  class Yi {
    constructor(e = {}) {
      this.side = e.side || "left", this.size = e.size || 120, this.stickSize = e.stickSize || 50, this.maxDistance = (this.size - this.stickSize) / 2, this.deadzone = e.deadzone || 0.15, this.isTouchDevice = e.isTouchDevice || false, this.active = false, this.touchId = null, this.centerX = 0, this.centerY = 0, this.currentX = 0, this.currentY = 0, this.deltaX = 0, this.deltaY = 0, this.speedMultiplier = 0, this.hasUnlockedOnFirstTouch = false, this.createElements(), this.setupEventListeners();
    }
    createElements() {
      this.container = document.createElement("div"), this.container.className = `touch-joystick touch-joystick-${this.side}`, this.container.style.cssText = `
      position: fixed;
      ${this.side}: 30px;
      bottom: 30px;
      width: ${this.size}px;
      height: ${this.size}px;
      background: rgba(255, 255, 255, 0.1);
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      touch-action: none;
      user-select: none;
      z-index: 1000;
      display: none;
      opacity: 0.6;
      transition: opacity 0.2s;
    `, this.stick = document.createElement("div"), this.stick.className = "touch-joystick-stick", this.stick.style.cssText = `
      position: absolute;
      width: ${this.stickSize}px;
      height: ${this.stickSize}px;
      background: rgba(255, 255, 255, 0.5);
      border: 2px solid rgba(255, 255, 255, 0.8);
      border-radius: 50%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      transition: background 0.2s;
    `, this.container.appendChild(this.stick), document.body.appendChild(this.container);
    }
    setupEventListeners() {
      this.container.addEventListener("touchstart", (t) => {
        var _a3, _b2;
        if (this.hasUnlockedOnFirstTouch ? window.unlockAudioOnInteraction && window.unlockAudioOnInteraction() : (typeof Y.Howler < "u" && typeof Y.Howler.unlock == "function" && Y.Howler.unlock(), jt(), ((_b2 = (_a3 = window.gameManager) == null ? void 0 : _a3.videoManager) == null ? void 0 : _b2.unlockVideoPlayback) && window.gameManager.videoManager.unlockVideoPlayback(), this.hasUnlockedOnFirstTouch = true), t.preventDefault(), this.active) return;
        const i = t.changedTouches[0];
        this.touchId = i.identifier;
        const s = this.container.getBoundingClientRect();
        this.centerX = s.left + s.width / 2, this.centerY = s.top + s.height / 2, this.active = true, this.container.style.opacity = "1", this.stick.style.background = "rgba(255, 255, 255, 0.8)", this.updatePosition(i.clientX, i.clientY);
      }, {
        passive: false
      }), window.addEventListener("touchmove", (t) => {
        if (this.active) for (let i = 0; i < t.changedTouches.length; i++) {
          const s = t.changedTouches[i];
          if (s.identifier === this.touchId) {
            window.unlockAudioOnInteraction && window.unlockAudioOnInteraction(), t.preventDefault(), this.updatePosition(s.clientX, s.clientY);
            break;
          }
        }
      }, {
        passive: false
      });
      const e = (t) => {
        if (this.active) {
          for (let i = 0; i < t.changedTouches.length; i++) if (t.changedTouches[i].identifier === this.touchId) {
            window.unlockAudioOnInteraction && window.unlockAudioOnInteraction(), this.reset();
            break;
          }
        }
      };
      window.addEventListener("touchend", e, {
        passive: false
      }), window.addEventListener("touchcancel", e, {
        passive: false
      });
    }
    updatePosition(e, t) {
      let i = e - this.centerX, s = t - this.centerY;
      if (Math.sqrt(i * i + s * s) > this.maxDistance) {
        const r = Math.atan2(s, i);
        i = Math.cos(r) * this.maxDistance, s = Math.sin(r) * this.maxDistance;
      }
      this.stick.style.transform = `translate(calc(-50% + ${i}px), calc(-50% + ${s}px))`, this.currentX = i, this.currentY = s, this.deltaX = i / this.maxDistance, this.deltaY = s / this.maxDistance;
      const n = Math.sqrt(this.deltaX * this.deltaX + this.deltaY * this.deltaY);
      if (n < this.deadzone) this.speedMultiplier = 0, this.deltaX = 0, this.deltaY = 0;
      else {
        this.speedMultiplier = (n - this.deadzone) / (1 - this.deadzone);
        const r = (n - this.deadzone) / (1 - this.deadzone) / n;
        this.deltaX *= r, this.deltaY *= r;
      }
    }
    reset() {
      this.active = false, this.touchId = null, this.currentX = 0, this.currentY = 0, this.deltaX = 0, this.deltaY = 0, this.speedMultiplier = 0, this.stick.style.transform = "translate(-50%, -50%)", this.container.style.opacity = "0.6", this.stick.style.background = "rgba(255, 255, 255, 0.5)";
    }
    getValue() {
      return {
        x: this.deltaX,
        y: -this.deltaY
      };
    }
    getSpeedMultiplier() {
      return this.speedMultiplier;
    }
    isActive() {
      return this.active;
    }
    show() {
      this.isTouchDevice && (this.container.style.display = "block");
    }
    hide() {
      this.container.style.display = "none", this.reset();
    }
    fadeOut() {
      this.container.style.display !== "none" && (this.container.style.opacity = "0", this.container.style.pointerEvents = "none");
    }
    fadeIn() {
      this.isTouchDevice && (this.container.style.display === "none" && (this.container.style.display = "block"), this.container.style.opacity = "0.6", this.container.style.pointerEvents = "auto");
    }
    destroy() {
      this.container.parentNode && this.container.parentNode.removeChild(this.container);
    }
  }
  class Wo {
    constructor(e, t = null) {
      this.rendererDomElement = e, this.gameManager = t, this.logger = new N("InputManager", false), this.keys = {
        w: false,
        a: false,
        s: false,
        d: false,
        shift: false,
        arrowUp: false,
        arrowDown: false,
        arrowLeft: false,
        arrowRight: false
      }, this.mouseDelta = {
        x: 0,
        y: 0
      }, this.gamepadIndex = null, this.enabled = true, this.movementEnabled = true, this.rotationEnabled = true, this.hasSelectiveDisable = false, this.pointerLockBlocked = false, this.dragToLookEnabled = true, this.isMouseDown = false, this.lastMousePos = {
        x: 0,
        y: 0
      }, this.gizmoProbe = null, this.leftJoystick = null, this.rightJoystick = null, this.deadzone = 0.15, this.stickSensitivity = 1, this.triggerThreshold = 0.5, this.mouseSensitivity = 25e-4, this.gamepadMapping = {
        AXIS_LEFT_STICK_X: 0,
        AXIS_LEFT_STICK_Y: 1,
        AXIS_RIGHT_STICK_X: 2,
        AXIS_RIGHT_STICK_Y: 3,
        BUTTON_A: 0,
        BUTTON_B: 1,
        BUTTON_X: 2,
        BUTTON_Y: 3,
        BUTTON_LB: 4,
        BUTTON_RB: 5,
        BUTTON_LT: 6,
        BUTTON_RT: 7,
        BUTTON_SELECT: 8,
        BUTTON_START: 9,
        BUTTON_L3: 10,
        BUTTON_R3: 11,
        BUTTON_DPAD_UP: 12,
        BUTTON_DPAD_DOWN: 13,
        BUTTON_DPAD_LEFT: 14,
        BUTTON_DPAD_RIGHT: 15
      }, this.setupEventListeners(), this.setupGamepadListeners(), this.setupTouchJoysticks(), this.logger.log("Initialized with keyboard, mouse, gamepad, and touch support");
    }
    setupTouchJoysticks() {
      var _a3, _b2, _c;
      const e = ((_c = (_b2 = (_a3 = this.gameManager) == null ? void 0 : _a3.getState) == null ? void 0 : _b2.call(_a3)) == null ? void 0 : _c.isMobile) || false;
      this.leftJoystick = new Yi({
        side: "left",
        size: 120,
        stickSize: 50,
        deadzone: 0.15,
        isTouchDevice: e
      }), this.rightJoystick = new Yi({
        side: "right",
        size: 120,
        stickSize: 50,
        deadzone: 0.15,
        isTouchDevice: e
      });
    }
    setupEventListeners() {
      window.addEventListener("keydown", (e) => {
        if (!this.enabled) return;
        const t = e.key.toLowerCase();
        t in this.keys && (this.keys[t] = true), e.key === "Shift" && (this.keys.shift = true), e.key === "ArrowUp" && (this.keys.arrowUp = true), e.key === "ArrowDown" && (this.keys.arrowDown = true), e.key === "ArrowLeft" && (this.keys.arrowLeft = true), e.key === "ArrowRight" && (this.keys.arrowRight = true);
      }), window.addEventListener("keyup", (e) => {
        if (!this.enabled) return;
        const t = e.key.toLowerCase();
        t in this.keys && (this.keys[t] = false), e.key === "Shift" && (this.keys.shift = false), e.key === "ArrowUp" && (this.keys.arrowUp = false), e.key === "ArrowDown" && (this.keys.arrowDown = false), e.key === "ArrowLeft" && (this.keys.arrowLeft = false), e.key === "ArrowRight" && (this.keys.arrowRight = false);
      }), this.rendererDomElement.addEventListener("click", (e) => {
        var _a3, _b2, _c, _d, _e2, _f;
        if (this.isDialogChoiceVisible()) {
          e.stopPropagation();
          return;
        }
        if (((_a3 = window.drawingManager) == null ? void 0 : _a3.isActive) || false) {
          console.log("[InputManager] Drawing active, NOT requesting pointer lock");
          return;
        }
        if (((_b2 = window.gizmoManager) == null ? void 0 : _b2.enabled) && (((_c = window.gizmoManager.objects) == null ? void 0 : _c.length) > 0 || window.gizmoManager.hasGizmoInDefinitions || window.gizmoManager.hasGizmoURLParam)) {
          console.log("[InputManager] Gizmo mode active, NOT requesting pointer lock");
          return;
        }
        if (this.gameManager && this.gameManager.state && this.gameManager.state.currentState < p.TITLE_SEQUENCE) return;
        if (((_f = (_e2 = (_d = this.gameManager) == null ? void 0 : _d.getState) == null ? void 0 : _e2.call(_d)) == null ? void 0 : _f.isMobile) || false) {
          console.log("[InputManager] Mobile device detected, NOT requesting pointer lock");
          return;
        }
        if (this.pointerLockBlocked) {
          console.log("[InputManager] Pointer lock blocked, NOT requesting");
          return;
        }
        console.log("[InputManager] Requesting pointer lock"), this.rendererDomElement.requestPointerLock();
      }), document.addEventListener("mousemove", (e) => {
        if (!this.enabled) return;
        const t = document.pointerLockElement === this.rendererDomElement, i = this.gizmoProbe ? this.gizmoProbe() : false;
        if (t) {
          if (this.rotationEnabled) {
            const s = isFinite(e.movementX) ? e.movementX : 0, o = isFinite(e.movementY) ? e.movementY : 0;
            this.mouseDelta.x += s, this.mouseDelta.y += o;
          }
          return;
        }
        if (this.pointerLockBlocked && this.dragToLookEnabled && this.isMouseDown && !i) {
          const s = isFinite(e.clientX) ? e.clientX : this.lastMousePos.x, o = isFinite(e.clientY) ? e.clientY : this.lastMousePos.y, n = isFinite(this.lastMousePos.x) ? this.lastMousePos.x : s, r = isFinite(this.lastMousePos.y) ? this.lastMousePos.y : o, a = s - n, l = o - r;
          isFinite(a) && (this.mouseDelta.x += a), isFinite(l) && (this.mouseDelta.y += l), this.lastMousePos.x = s, this.lastMousePos.y = o;
        }
      }), document.addEventListener("mousedown", (e) => {
        this.enabled && (this.isMouseDown = true, this.lastMousePos.x = e.clientX, this.lastMousePos.y = e.clientY);
      }), document.addEventListener("mouseup", () => {
        this.enabled && (this.isMouseDown = false);
      });
    }
    setPointerLockBlocked(e) {
      this.pointerLockBlocked = !!e, console.log("[InputManager] setPointerLockBlocked:", this.pointerLockBlocked), this.pointerLockBlocked && document.pointerLockElement && (console.log("[InputManager] Exiting existing pointer lock"), document.exitPointerLock());
    }
    setGizmoProbe(e) {
      this.gizmoProbe = typeof e == "function" ? e : null;
    }
    setupGamepadListeners() {
      window.addEventListener("gamepadconnected", (e) => {
        this.logger.log(`Gamepad connected - ${e.gamepad.id} (index: ${e.gamepad.index})`), this.gamepadIndex === null && (this.gamepadIndex = e.gamepad.index, this.logger.log(`Using gamepad index ${this.gamepadIndex}`));
      }), window.addEventListener("gamepaddisconnected", (e) => {
        this.logger.log(`Gamepad disconnected - ${e.gamepad.id} (index: ${e.gamepad.index})`), this.gamepadIndex === e.gamepad.index && (this.gamepadIndex = null, this.logger.log("Active gamepad disconnected"));
      });
    }
    getGamepad() {
      return this.gamepadIndex === null ? null : navigator.getGamepads()[this.gamepadIndex] || null;
    }
    applyDeadzone(e) {
      if (Math.abs(e) < this.deadzone) return 0;
      const t = Math.sign(e), s = (Math.abs(e) - this.deadzone) / (1 - this.deadzone);
      return t * s;
    }
    getMovementInput() {
      if (!this.movementEnabled) return {
        x: 0,
        y: 0
      };
      const e = this.isDialogChoiceVisible();
      let t = 0, i = 0;
      e || ((this.keys.w || this.keys.arrowUp) && (i += 1), (this.keys.s || this.keys.arrowDown) && (i -= 1)), (this.keys.a || this.keys.arrowLeft) && (t -= 1), (this.keys.d || this.keys.arrowRight) && (t += 1);
      const s = this.getGamepad();
      if (s) {
        const o = this.applyDeadzone(s.axes[this.gamepadMapping.AXIS_LEFT_STICK_X]), n = this.applyDeadzone(s.axes[this.gamepadMapping.AXIS_LEFT_STICK_Y]);
        t += o, i -= n;
      }
      if (this.leftJoystick && this.leftJoystick.isActive()) {
        const o = this.leftJoystick.getValue();
        t += o.x, i += o.y;
      }
      return t = Math.max(-1, Math.min(1, t)), i = Math.max(-1, Math.min(1, i)), {
        x: t,
        y: i
      };
    }
    getCameraInput(e = 0.016) {
      if (!this.rotationEnabled) return {
        x: 0,
        y: 0,
        hasGamepad: false
      };
      let t = 0, i = 0, s = false;
      const o = isFinite(this.mouseDelta.x) ? this.mouseDelta.x : 0, n = isFinite(this.mouseDelta.y) ? this.mouseDelta.y : 0, r = e / 0.0167;
      t += o * this.mouseSensitivity * r, i += n * this.mouseSensitivity * r;
      const a = this.getGamepad();
      if (a) {
        const l = a.axes[this.gamepadMapping.AXIS_RIGHT_STICK_X], h = a.axes[this.gamepadMapping.AXIS_RIGHT_STICK_Y], c = isFinite(l) ? this.applyDeadzone(l) : 0, d = isFinite(h) ? this.applyDeadzone(h) : 0;
        if (c !== 0 || d !== 0) {
          s = true;
          const u = 2.5, m = c * u * this.stickSensitivity * e, f = d * u * this.stickSensitivity * e;
          isFinite(m) && (t += m), isFinite(f) && (i += f);
        }
      }
      if (this.rightJoystick && this.rightJoystick.isActive()) {
        s = true;
        const l = this.rightJoystick.getValue(), h = isFinite(l == null ? void 0 : l.x) ? l.x : 0, c = isFinite(l == null ? void 0 : l.y) ? l.y : 0, d = 2.5, u = h * d * e, m = c * d * e;
        isFinite(u) && (t += u), isFinite(m) && (i -= m);
      }
      return t = isFinite(t) ? t : 0, i = isFinite(i) ? i : 0, {
        x: t,
        y: i,
        hasGamepad: s
      };
    }
    getTouchSpeedMultiplier() {
      return this.leftJoystick && this.leftJoystick.isActive() ? this.leftJoystick.getSpeedMultiplier() : 0;
    }
    isSprinting() {
      var _a3, _b2;
      if (this.keys.shift) return true;
      const e = this.getGamepad();
      if (e) {
        if (((_a3 = e.buttons[this.gamepadMapping.BUTTON_L3]) == null ? void 0 : _a3.pressed) || ((_b2 = e.buttons[this.gamepadMapping.BUTTON_R3]) == null ? void 0 : _b2.pressed)) return true;
        const t = e.buttons[this.gamepadMapping.BUTTON_LT];
        if (t && t.value > this.triggerThreshold) return true;
        const i = e.buttons[this.gamepadMapping.BUTTON_RT];
        if (i && i.value > this.triggerThreshold) return true;
      }
      return false;
    }
    resetFrameInput() {
      this.mouseDelta.x = 0, this.mouseDelta.y = 0, isFinite(this.mouseDelta.x) || (this.mouseDelta.x = 0), isFinite(this.mouseDelta.y) || (this.mouseDelta.y = 0);
    }
    enable() {
      if (this.hasSelectiveDisable) {
        this.logger.log("enable() called but selective disable is active (ignoring to preserve selective disables)");
        return;
      }
      this.enabled = true, this.movementEnabled = true, this.rotationEnabled = true, this.mouseDelta = {
        x: 0,
        y: 0
      }, this.showTouchControls(), this.logger.log("Input enabled");
    }
    disable() {
      this.enabled = false, this.movementEnabled = false, this.rotationEnabled = false, this.hasSelectiveDisable = false, this.keys = {
        w: false,
        a: false,
        s: false,
        d: false,
        shift: false,
        arrowUp: false,
        arrowDown: false,
        arrowLeft: false,
        arrowRight: false
      }, this.mouseDelta = {
        x: 0,
        y: 0
      }, this.hideTouchControls(), this.logger.log("Input disabled");
    }
    enableMovement() {
      this.movementEnabled = true, this.enabled = true, this.rotationEnabled && (this.hasSelectiveDisable = false), this.leftJoystick && this.leftJoystick.show(), this.logger.log("Movement enabled");
    }
    disableMovement() {
      this.movementEnabled = false, this.hasSelectiveDisable = true, this.keys.w = false, this.keys.a = false, this.keys.s = false, this.keys.d = false, this.keys.shift = false, this.keys.arrowUp = false, this.keys.arrowDown = false, this.keys.arrowLeft = false, this.keys.arrowRight = false, this.leftJoystick && this.leftJoystick.hide(), this.logger.log("Movement disabled");
    }
    enableRotation() {
      this.rotationEnabled = true, this.enabled = true, this.movementEnabled && (this.hasSelectiveDisable = false), this.mouseDelta = {
        x: 0,
        y: 0
      }, this.rightJoystick && this.rightJoystick.show(), this.logger.log("Rotation enabled");
    }
    disableRotation() {
      this.rotationEnabled = false, this.hasSelectiveDisable = true, this.mouseDelta = {
        x: 0,
        y: 0
      }, this.rightJoystick && this.rightJoystick.hide(), this.logger.log("Rotation disabled");
    }
    showTouchControls() {
      this.isDialogChoiceVisible() || (this.leftJoystick && this.leftJoystick.show(), this.rightJoystick && this.rightJoystick.show());
    }
    hideTouchControls() {
      this.leftJoystick && this.leftJoystick.hide(), this.rightJoystick && this.rightJoystick.hide();
    }
    fadeOutTouchControls() {
      this.leftJoystick && this.leftJoystick.fadeOut(), this.rightJoystick && this.rightJoystick.fadeOut();
    }
    fadeInTouchControls() {
      var _a3, _b2, _c;
      const e = this.isDialogChoiceVisible();
      let t = false;
      ((_c = (_b2 = (_a3 = this.gameManager) == null ? void 0 : _a3.uiManager) == null ? void 0 : _b2.components) == null ? void 0 : _c.dialogChoiceUI) && (t = this.gameManager.uiManager.components.dialogChoiceUI.isShowingChoices()), !(e && t) && (this.leftJoystick && this.leftJoystick.fadeIn(), this.rightJoystick && this.rightJoystick.fadeIn());
    }
    isDialogChoiceVisible() {
      const e = document.getElementById("dialog-choices");
      if (!e) return false;
      const t = window.getComputedStyle(e);
      if (t.display === "none" || t.visibility === "hidden" || t.opacity === "0" || e.style.display === "none") return false;
      const i = e.getBoundingClientRect();
      return !(i.width === 0 && i.height === 0);
    }
    isEnabled() {
      return this.enabled;
    }
    isMovementEnabled() {
      return this.movementEnabled;
    }
    isRotationEnabled() {
      return this.rotationEnabled;
    }
    setMouseSensitivity(e) {
      this.mouseSensitivity = e;
    }
    setStickSensitivity(e) {
      this.stickSensitivity = e;
    }
    setDeadzone(e) {
      this.deadzone = Math.max(0, Math.min(1, e));
    }
    isGamepadConnected() {
      return this.getGamepad() !== null;
    }
    getGamepadInfo() {
      const e = this.getGamepad();
      return e ? {
        id: e.id,
        index: e.index,
        connected: e.connected,
        buttons: e.buttons.length,
        axes: e.axes.length
      } : null;
    }
    update(e) {
    }
  }
  class qo {
    constructor(e = {}) {
      this.defaultVolume = e.defaultVolume || 1, this.loadingScreen = e.loadingScreen || null, this.tracks = {}, this.currentTrack = null, this.isTransitioning = false, this.fadeState = {
        active: false,
        trackName: null,
        startVolume: 0,
        targetVolume: 0,
        duration: 0,
        startTime: 0,
        fadeIn: true,
        resolve: null
      }, this.crossfadeState = {
        active: false,
        fadeOutTrack: null,
        fadeInTrack: null,
        fadeOutStartVolume: 0,
        fadeInStartVolume: 0,
        fadeInTargetVolume: 0,
        duration: 0,
        startTime: 0,
        resolve: null
      }, this.volumeChangeState = {
        active: false,
        startVolume: 0,
        targetVolume: 0,
        duration: 0,
        startTime: 0
      }, this.eventListeners = {
        "music:change": [],
        "music:stop": [],
        "music:pause": [],
        "music:resume": [],
        "music:volume": []
      }, this.changeMusic = this.changeMusic.bind(this), this.stopMusic = this.stopMusic.bind(this), this.stopAllMusic = this.stopAllMusic.bind(this), this.pauseMusic = this.pauseMusic.bind(this), this.resumeMusic = this.resumeMusic.bind(this), this.setVolume = this.setVolume.bind(this), this.gameManager = null, this.logger = new N("MusicManager", false), this.deferredTracks = /* @__PURE__ */ new Map(), this._initializeTracks();
    }
    async _initializeTracks() {
      const { musicTracks: e, getMusicForState: t } = await q(async () => {
        const { musicTracks: r, getMusicForState: a } = await import("./musicData-Nh_QT-jl.js");
        return {
          musicTracks: r,
          getMusicForState: a
        };
      }, __vite__mapDeps([0,1])), { isDebugSpawnActive: i, getDebugSpawnState: s } = await q(async () => {
        const { isDebugSpawnActive: r, getDebugSpawnState: a } = await Promise.resolve().then(() => Pt);
        return {
          isDebugSpawnActive: r,
          getDebugSpawnState: a
        };
      }, void 0);
      this.logger.log(`Initializing ${Object.keys(e).length} music tracks`);
      let o = null, n = null;
      i() && (o = s(), o && (n = t(o), n && this.logger.log(`[Debug] Forcing preload for matching track "${n.id}" (state: ${o.currentState})`))), Object.values(e).forEach((r) => {
        const a = n && n.id === r.id ? true : r.preload !== void 0 ? r.preload : false;
        this.addTrack(r.id, r.path, {
          preload: a,
          loop: r.loop !== void 0 ? r.loop : true
        });
      });
    }
    setGameManager(e) {
      this.gameManager = e, Promise.all([
        q(() => import("./musicData-Nh_QT-jl.js"), __vite__mapDeps([0,1])),
        q(() => import("./index-XYoOAQ19.js").then(async (m) => {
          await m.__tla;
          return m;
        }).then((t) => t.bb), [])
      ]).then(([{ getMusicForState: t }, { GAME_STATES: i }]) => {
        this.gameManager.on("state:changed", (o, n) => {
          const r = t(o);
          if (!r) {
            const c = this.getCurrentTrack();
            c && (this.logger.log(`No music track matches state ${o.currentState}, stopping current track "${c}"`), this.stopMusic());
            return;
          }
          const a = n && n.currentState === i.START_SCREEN && (o.currentState === i.INTRO || o.currentState === i.TITLE_SEQUENCE), l = this.getCurrentTrack(), h = !l || !this.isTrackPlaying(l);
          if (a && h) {
            this.logger.log(`Transitioning from START_SCREEN to ${o.currentState} with no music playing - skipping START_SCREEN track, playing "${r.id}" directly`);
            const c = t(n);
            c && this.tracks[c.id] && this.tracks[c.id].stop(), this.tracks[r.id] ? this.changeMusic(r.id, r.fadeTime || 0) : this._waitForTrackAndPlay(r.id, r.fadeTime || 0);
            return;
          }
          this.getCurrentTrack() !== r.id && (this.logger.log(`Changing music to "${r.id}" (${r.description})`), this.tracks[r.id] ? this.changeMusic(r.id, r.fadeTime || 0) : this._waitForTrackAndPlay(r.id, r.fadeTime || 0));
        });
        const s = t(this.gameManager.state);
        s && (this.logger.log(`Starting initial music "${s.id}" (${s.description})`), this._waitForTrackAndPlay(s.id, s.fadeTime || 0)), this.logger.log("Event listeners registered");
      });
    }
    async _waitForTrackAndPlay(e, t = 0) {
      let o = 0;
      for (; !this.tracks[e] && o < 2e3; ) await new Promise((n) => setTimeout(n, 100)), o += 100;
      this.tracks[e] ? this.changeMusic(e, t) : this.logger.warn(`Track "${e}" not available after waiting 2000ms, will retry on next state change`);
    }
    addTrack(e, t, i = {}) {
      const s = i.preload !== false;
      return s ? (this.loadingScreen && s && this.loadingScreen.registerTask(`music_${e}`, 1), this.tracks[e] = new Y.Howl({
        src: Array.isArray(t) ? t : [
          t
        ],
        loop: i.loop !== void 0 ? i.loop : true,
        volume: i.volume !== void 0 ? i.volume : this.defaultVolume,
        preload: s,
        onload: () => {
          this.logger.log(`Loaded track "${e}"`), this.loadingScreen && s && this.loadingScreen.completeTask(`music_${e}`);
        },
        onloaderror: (o, n) => {
          this.logger.error(`Failed to load track "${e}":`, n), this.loadingScreen && s && this.loadingScreen.completeTask(`music_${e}`);
        },
        ...i
      }), this.tracks[e]) : (this.deferredTracks.set(e, {
        src: t,
        options: i
      }), this.logger.log(`Deferred loading for track "${e}"`), null);
    }
    async loadDeferredTracks() {
      var _a3;
      const e = ((_a3 = this.gameManager) == null ? void 0 : _a3.getState()) || {}, { couldCriteriaStillMatch: t } = await q(async () => {
        const { couldCriteriaStillMatch: o } = await import("./index-XYoOAQ19.js").then(async (m) => {
          await m.__tla;
          return m;
        }).then((n) => n.bc);
        return {
          couldCriteriaStillMatch: o
        };
      }, []), { musicTracks: i } = await q(async () => {
        const { musicTracks: o } = await import("./musicData-Nh_QT-jl.js");
        return {
          musicTracks: o
        };
      }, __vite__mapDeps([0,1])), s = [];
      for (const [o, { src: n, options: r }] of this.deferredTracks) {
        const a = i[o];
        if ((a == null ? void 0 : a.criteria) && !t(e, a.criteria)) {
          this.logger.log(`Skipping deferred track "${o}" - criteria have already passed (currentState: ${e.currentState})`);
          continue;
        }
        s.push([
          o,
          {
            src: n,
            options: r
          }
        ]);
      }
      if (s.length === 0) {
        this.deferredTracks.clear();
        return;
      }
      this.logger.log(`Loading ${s.length} deferred tracks`);
      for (const [o, { src: n, options: r }] of s) this.tracks[o] = new Y.Howl({
        src: Array.isArray(n) ? n : [
          n
        ],
        loop: r.loop !== void 0 ? r.loop : true,
        volume: r.volume !== void 0 ? r.volume : this.defaultVolume,
        preload: true,
        onload: () => {
          this.logger.log(`Loaded deferred track "${o}"`);
        },
        onloaderror: (a, l) => {
          this.logger.error(`Failed to load deferred track "${o}":`, l);
        },
        ...r
      }), this.tracks[o].state && this.tracks[o].state() === "unloaded" && this.tracks[o].load();
      this.deferredTracks.clear();
    }
    async changeMusic(e, t = 0) {
      if (!this.tracks[e] && this.deferredTracks.has(e)) {
        this.logger.log(`Loading deferred track "${e}" on-demand`);
        const { src: n, options: r } = this.deferredTracks.get(e);
        this.tracks[e] = new Y.Howl({
          src: Array.isArray(n) ? n : [
            n
          ],
          loop: r.loop !== void 0 ? r.loop : true,
          volume: r.volume !== void 0 ? r.volume : this.defaultVolume,
          preload: true,
          onload: () => {
            this.logger.log(`Loaded on-demand track "${e}"`);
          },
          onloaderror: (a, l) => {
            this.logger.error(`Failed to load on-demand track "${e}":`, l);
          },
          ...r
        }), this.deferredTracks.delete(e), await new Promise((a) => setTimeout(a, 100));
      }
      if (this.isTransitioning || !this.tracks[e]) {
        this.logger.warn(`Track "${e}" not found or transitioning`);
        return;
      }
      const i = this.tracks[e];
      i.state && i.state() === "unloaded" && i.load(), i.state && i.state() !== "loaded" && await new Promise((n) => {
        i.once("load", () => {
          n();
        }), i.once("loaderror", (r, a) => {
          this.logger.error(`Failed to load track "${e}":`, a), n();
        });
      }), this.isTransitioning = true;
      const s = this.currentTrack;
      this.currentTrack = e;
      const o = [];
      if (Object.keys(this.tracks).forEach((n) => {
        this.tracks[n].playing() && o.push(n);
      }), o.length > 0 && this.logger.log(`Changing to "${e}" - Currently playing: ${o.join(", ")}, previousTrack: ${s || "none"}`), Object.keys(this.tracks).forEach((n) => {
        n !== e && n !== s && this.tracks[n].playing() && (this.logger.log(`Stopping track "${n}" to make way for "${e}"`), this.tracks[n].stop());
      }), t > 0) if (s && this.tracks[s] && this.tracks[s].playing()) {
        this.logger.log(`Starting crossfade from "${s}" to "${e}"`);
        const n = this.tracks[s].volume();
        this.tracks[e].volume(0);
        try {
          const r = this.tracks[e].play();
          if (r == null) {
            this.logger.error(`Failed to play track "${e}" - Howl returned ${r}`), this.isTransitioning = false;
            return;
          }
          if (!this.tracks[e].playing()) {
            this.logger.error(`Track "${e}" failed to start playing`), this.isTransitioning = false;
            return;
          }
          this.logger.log(`Track "${e}" started playing (id: ${r})`), this._startCrossfade(s, e, n, this.defaultVolume, t);
        } catch (r) {
          this.logger.error(`Error playing track "${e}":`, r), this.isTransitioning = false;
          return;
        }
      } else {
        this.tracks[e].volume(0);
        try {
          const n = this.tracks[e].play();
          if (n == null) {
            this.logger.error(`Failed to play track "${e}" - Howl returned ${n}`), this.isTransitioning = false;
            return;
          }
          this._fadeIn(e, this.defaultVolume, t).then(() => {
            this.isTransitioning = false;
          });
        } catch (n) {
          this.logger.error(`Error playing track "${e}":`, n), this.isTransitioning = false;
          return;
        }
      }
      else {
        s && this.tracks[s] && this.tracks[s].stop(), this.tracks[e].volume(this.defaultVolume);
        try {
          const n = this.tracks[e].play();
          if (n == null) {
            this.logger.error(`Failed to play track "${e}" - Howl returned ${n}`), this.isTransitioning = false;
            return;
          }
          this.isTransitioning = false;
        } catch (n) {
          this.logger.error(`Error playing track "${e}":`, n), this.isTransitioning = false;
          return;
        }
      }
    }
    _fadeIn(e, t, i) {
      return new Promise((s) => {
        const o = this.tracks[e];
        this.fadeState = {
          active: true,
          trackName: e,
          startVolume: o.volume(),
          targetVolume: t,
          duration: i,
          startTime: Date.now(),
          fadeIn: true,
          resolve: s
        };
      });
    }
    _fadeOut(e, t, i) {
      return new Promise((s) => {
        this.fadeState = {
          active: true,
          trackName: e,
          startVolume: t,
          targetVolume: 0,
          duration: i,
          startTime: Date.now(),
          fadeIn: false,
          resolve: s
        };
      });
    }
    _startCrossfade(e, t, i, s, o) {
      return new Promise((n) => {
        this.crossfadeState = {
          active: true,
          fadeOutTrack: e,
          fadeInTrack: t,
          fadeOutStartVolume: i,
          fadeInStartVolume: 0,
          fadeInTargetVolume: s,
          duration: o,
          startTime: Date.now(),
          resolve: n
        };
      });
    }
    stopMusic() {
      this.currentTrack && this.tracks[this.currentTrack] && (this.tracks[this.currentTrack].stop(), this.currentTrack = null);
    }
    stopAllMusic() {
      Object.keys(this.tracks).forEach((e) => {
        this.tracks[e].playing() && this.tracks[e].stop();
      }), this.currentTrack = null, this.isTransitioning = false;
    }
    pauseMusic() {
      this.currentTrack && this.tracks[this.currentTrack] && this.tracks[this.currentTrack].pause();
    }
    resumeMusic() {
      this.currentTrack && this.tracks[this.currentTrack] && this.tracks[this.currentTrack].play();
    }
    setVolume(e, t = 0) {
      this.defaultVolume = e, t > 0 ? this.volumeChangeState = {
        active: true,
        startVolume: this.currentTrack ? this.tracks[this.currentTrack].volume() : 0,
        targetVolume: e,
        duration: t,
        startTime: Date.now()
      } : this.currentTrack && this.tracks[this.currentTrack] && this.tracks[this.currentTrack].volume(e);
    }
    getCurrentTrack() {
      return this.currentTrack;
    }
    isTrackPlaying(e) {
      var _a3;
      return this.currentTrack === e && ((_a3 = this.tracks[e]) == null ? void 0 : _a3.playing());
    }
    update(e) {
      if (this.crossfadeState.active) {
        const t = (Date.now() - this.crossfadeState.startTime) / 1e3, i = Math.min(t / this.crossfadeState.duration, 1), s = this.tracks[this.crossfadeState.fadeOutTrack], o = this.tracks[this.crossfadeState.fadeInTrack];
        if (s) {
          const n = this._lerp(this.crossfadeState.fadeOutStartVolume, 0, i);
          s.volume(n);
        }
        if (o) {
          if (!o.playing() && i < 1) {
            this.logger.error(`Crossfade: fade-in track "${this.crossfadeState.fadeInTrack}" stopped unexpectedly during crossfade! Attempting to restart...`);
            try {
              o.play();
            } catch (r) {
              this.logger.error("Failed to restart fade-in track:", r);
            }
          }
          const n = this._lerp(this.crossfadeState.fadeInStartVolume, this.crossfadeState.fadeInTargetVolume, i);
          o.volume(n);
        }
        i >= 1 && (s && s.stop(), this.crossfadeState.active = false, this.isTransitioning = false, this.crossfadeState.resolve && this.crossfadeState.resolve());
      }
      if (!this.crossfadeState.active && this.fadeState.active) {
        const t = (Date.now() - this.fadeState.startTime) / 1e3, i = Math.min(t / this.fadeState.duration, 1), s = this.tracks[this.fadeState.trackName];
        if (s) {
          const o = this._lerp(this.fadeState.startVolume, this.fadeState.targetVolume, i);
          s.volume(o), i >= 1 && (this.fadeState.active = false, this.fadeState.resolve && this.fadeState.resolve());
        }
      }
      if (this.volumeChangeState.active) {
        const t = (Date.now() - this.volumeChangeState.startTime) / 1e3, i = Math.min(t / this.volumeChangeState.duration, 1), s = this._lerp(this.volumeChangeState.startVolume, this.volumeChangeState.targetVolume, i);
        this.currentTrack && this.tracks[this.currentTrack] && this.tracks[this.currentTrack].volume(s), i >= 1 && (this.volumeChangeState.active = false);
      }
    }
    _lerp(e, t, i) {
      return e + (t - e) * i;
    }
    on(e, t) {
      this.eventListeners[e] && this.eventListeners[e].push(t);
    }
    off(e, t) {
      if (this.eventListeners[e]) {
        const i = this.eventListeners[e].indexOf(t);
        i > -1 && this.eventListeners[e].splice(i, 1);
      }
    }
    emit(e, ...t) {
      this.eventListeners[e] && this.eventListeners[e].forEach((i) => i(...t));
    }
    destroy() {
      this.stopAllMusic(), Object.keys(this.tracks).forEach((e) => {
        this.tracks[e].unload();
      }), this.tracks = {}, this.eventListeners = {};
    }
  }
  class Yo {
    constructor(e = {}) {
      this.masterVolume = e.masterVolume || 0.5, this.loadingScreen = e.loadingScreen || null, this.sounds = /* @__PURE__ */ new Map(), this.dialogManager = null, this.lightManager = e.lightManager || null, this.gameManager = null, this.logger = new N("SFXManager", false), this.playedSounds = /* @__PURE__ */ new Set(), this.deferredSounds = /* @__PURE__ */ new Map(), this.prefetchedAudio = /* @__PURE__ */ new Map(), this.prefetchBudgetMax = 25 * 1024 * 1024, this.prefetchBudgetUsed = 0, this.prefetchQueue = [], this.pendingSounds = /* @__PURE__ */ new Map(), this.loopDelays = /* @__PURE__ */ new Map(), this.loopingSounds = /* @__PURE__ */ new Map(), Y.Howler.volume(1);
    }
    setGameManager(e) {
      this.gameManager = e;
      const t = (s, o) => {
        this.updateSoundsForState(s);
      };
      this.gameManager.on("state:changed", t);
      const i = this.gameManager.getState();
      t(i), this.logger.log("Event listeners registered and initial state handled");
    }
    updateSoundsForState(e) {
      if (!e || !this._data) return;
      const t = /* @__PURE__ */ new Set([
        ...this.sounds.keys(),
        ...this.deferredSounds.keys()
      ]);
      for (const i of t) {
        const s = this._data[i];
        if (!s || !s.criteria) continue;
        const o = X(e, s.criteria), n = this.isPlaying(i), r = this.playedSounds.has(i), a = this.pendingSounds.has(i), l = this.deferredSounds.has(i);
        if (o && !n && !a) {
          if (s.playOnce && r) continue;
          l && this.logger.log(`Loading deferred sound "${i}" on-demand for state ${e.currentState}`);
          const h = s.delay || 0;
          if (h > 0) this.scheduleDelayedSound(i, h);
          else try {
            this.play(i), s.playOnce && this.playedSounds.add(i);
          } catch (c) {
            this.logger.warn(`Failed to play sound "${i}":`, c);
          }
        } else o || (n && this.stop(i), a && this.cancelDelayedSound(i));
      }
    }
    scheduleDelayedSound(e, t) {
      this.logger.log(`Scheduling sound "${e}" with ${t}s delay`), this.pendingSounds.set(e, {
        soundId: e,
        timer: 0,
        delay: t
      });
    }
    cancelDelayedSound(e) {
      this.pendingSounds.has(e) && (this.logger.log(`Cancelled delayed sound "${e}"`), this.pendingSounds.delete(e));
    }
    cancelAllDelayedSounds() {
      this.pendingSounds.size > 0 && (this.logger.log(`Cancelling ${this.pendingSounds.size} pending sound(s)`), this.pendingSounds.clear());
    }
    isSoundPending(e) {
      return this.pendingSounds.has(e);
    }
    hasSoundsPending() {
      return this.pendingSounds.size > 0;
    }
    registerSound(e, t, i = 1) {
      this.sounds.set(e, {
        howl: t,
        baseVolume: i,
        isProxy: typeof t.volume != "function" && typeof t.setVolume == "function"
      }), this.updateSoundVolume(e), this.logger.log(`Registered sound "${e}" with base volume ${i}`);
    }
    unregisterSound(e) {
      this.sounds.delete(e);
    }
    setMasterVolume(e) {
      this.masterVolume = Math.max(0, Math.min(1, e));
      for (const [t] of this.sounds) this.updateSoundVolume(t);
      this.dialogManager && this.dialogManager.updateVolume && this.dialogManager.updateVolume();
    }
    registerDialogManager(e) {
      this.dialogManager = e;
    }
    async registerSoundsFromData(e) {
      var _a3, _b2, _c, _d;
      if (!e) return;
      this._data = e;
      let t = null;
      const i = /* @__PURE__ */ new Set(), { isDebugSpawnActive: s, getDebugSpawnState: o } = await q(async () => {
        const { isDebugSpawnActive: a, getDebugSpawnState: l } = await Promise.resolve().then(() => Pt);
        return {
          isDebugSpawnActive: a,
          getDebugSpawnState: l
        };
      }, void 0), { checkCriteria: n } = await q(async () => {
        const { checkCriteria: a } = await import("./index-XYoOAQ19.js").then(async (m) => {
          await m.__tla;
          return m;
        }).then((l) => l.bc);
        return {
          checkCriteria: a
        };
      }, []);
      s() && (t = o(), t && (Object.values(e).forEach((a) => {
        a.criteria && n(t, a.criteria) && i.add(a.id);
      }), i.size > 0 && this.logger.log(`[Debug] Forcing preload for ${i.size} matching SFX (state: ${t.currentState}): ${Array.from(i).join(", ")}`)));
      const r = ((_b2 = (_a3 = this.gameManager) == null ? void 0 : _a3.getState()) == null ? void 0 : _b2.isIOS) || typeof window < "u" && ((_d = (_c = window.gameManager) == null ? void 0 : _c.getState()) == null ? void 0 : _d.isIOS) || false;
      Object.values(e).forEach((a) => {
        let l = i.has(a.id) ? true : a.preload !== void 0 ? a.preload : true;
        if (r && l) {
          const d = this._calculateSoundPriority(a);
          this.prefetchQueue.push({
            sound: a,
            priority: d
          }), this.prefetchQueue.sort((u, m) => u.priority - m.priority), this.logger.log(`iOS: Added sound "${a.id}" to prefetch queue (priority: ${d})`), this._processPrefetchQueue();
          return;
        }
        if (!l) {
          this.deferredSounds.set(a.id, a), this.logger.log(`Deferred loading for sound "${a.id}"`);
          return;
        }
        this.loadingScreen && l && this.loadingScreen.registerTask(`sfx_${a.id}`, 1);
        const h = a.loop && a.loopDelay > 0, c = new Y.Howl({
          src: a.src,
          loop: h ? false : a.loop,
          volume: a.volume,
          ...a.rate !== void 0 && {
            rate: a.rate
          },
          preload: l,
          onload: () => {
            this.logger.log(`Loaded sound "${a.id}"`), this.loadingScreen && l && this.loadingScreen.completeTask(`sfx_${a.id}`);
          },
          onloaderror: (d, u) => {
            this.logger.error(`Failed to load sound "${a.id}":`, u), this.loadingScreen && l && this.loadingScreen.completeTask(`sfx_${a.id}`);
          },
          onend: h ? () => this._handleLoopEnd(a.id) : void 0
        });
        if (a.spatial && (a.position && c.pos(a.position.x, a.position.y, a.position.z), a.pannerAttr && c.pannerAttr(a.pannerAttr)), this.registerSound(a.id, c, a.volume ?? 1), h && (this.loopDelays.set(a.id, {
          delay: a.loopDelay,
          timer: 0,
          active: false
        }), this.logger.log(`Registered loop delay of ${a.loopDelay}s for sound "${a.id}"`)), a.reactiveLight && a.reactiveLight.enabled && this.lightManager) {
          const d = {
            ...a.reactiveLight
          };
          a.position && d.position && (d.position = {
            x: a.position.x + (d.position.x || 0),
            y: a.position.y + (d.position.y || 0),
            z: a.position.z + (d.position.z || 0)
          }), this.lightManager.createReactiveLight(a.id, c, d);
        }
      });
    }
    _calculateSoundPriority(e) {
      if (!e.criteria) return 9999;
      const t = e.criteria;
      if (t.currentState !== void 0) {
        if (typeof t.currentState == "number") return t.currentState;
        if (t.currentState.$gte !== void 0) return t.currentState.$gte;
        if (t.currentState.$in !== void 0 && Array.isArray(t.currentState.$in)) return Math.min(...t.currentState.$in);
        if (t.currentState.$eq !== void 0) return t.currentState.$eq;
      }
      return 50;
    }
    async _processPrefetchQueue() {
      if (!(this._processingPrefetchQueue || this.prefetchQueue.length === 0)) {
        for (this._processingPrefetchQueue = true; this.prefetchQueue.length > 0; ) {
          if (this.prefetchBudgetMax - this.prefetchBudgetUsed <= 0) {
            this.logger.log(`Prefetch budget exhausted (${(this.prefetchBudgetUsed / 1024 / 1024).toFixed(2)}MB / ${(this.prefetchBudgetMax / 1024 / 1024).toFixed(2)}MB), waiting for assets to clear`);
            break;
          }
          const { sound: t } = this.prefetchQueue.shift();
          this.prefetchedAudio.has(t.id) || this.sounds.has(t.id) || await this._prefetchSound(t);
        }
        this._processingPrefetchQueue = false;
      }
    }
    async _prefetchSound(e) {
      const t = Array.isArray(e.src) ? e.src[0] : e.src;
      this.loadingScreen && this.loadingScreen.registerTask(`sfx_${e.id}`, 1);
      try {
        const i = await fetch(t);
        if (!i.ok) throw new Error(`HTTP ${i.status}`);
        const s = i.headers.get("Content-Length"), o = s ? parseInt(s, 10) : null, n = await i.blob(), r = n.size, a = this.prefetchBudgetMax - this.prefetchBudgetUsed;
        if (r > a) {
          this.logger.warn(`Sound "${e.id}" (${(r / 1024 / 1024).toFixed(2)}MB) exceeds available budget (${(a / 1024 / 1024).toFixed(2)}MB), deferring`), this.deferredSounds.set(e.id, e), this.loadingScreen && this.loadingScreen.completeTask(`sfx_${e.id}`);
          return;
        }
        const l = URL.createObjectURL(n);
        this.prefetchedAudio.set(e.id, {
          blob: n,
          blobUrl: l,
          soundData: e,
          size: r
        }), this.prefetchBudgetUsed += r, this.logger.log(`Prefetched sound "${e.id}" (${(r / 1024 / 1024).toFixed(2)}MB, budget: ${(this.prefetchBudgetUsed / 1024 / 1024).toFixed(2)}MB / ${(this.prefetchBudgetMax / 1024 / 1024).toFixed(2)}MB)`), this.loadingScreen && this.loadingScreen.completeTask(`sfx_${e.id}`), this._processPrefetchQueue();
      } catch (i) {
        this.logger.error(`Failed to prefetch sound "${e.id}":`, i), this.loadingScreen && this.loadingScreen.completeTask(`sfx_${e.id}`), this.deferredSounds.set(e.id, e);
      }
    }
    _createHowlFromPrefetched(e, t) {
      const { blobUrl: i, soundData: s } = t, o = s.loop && s.loopDelay > 0;
      return new Promise((n, r) => {
        const a = new Y.Howl({
          src: [
            i
          ],
          loop: o ? false : s.loop,
          volume: s.volume,
          ...s.rate !== void 0 && {
            rate: s.rate
          },
          preload: true,
          onload: () => {
            this.logger.log(`Howl loaded from prefetched blob for sound "${e}"`);
            const l = this.prefetchedAudio.get(e);
            if (l && l.size && (this.prefetchBudgetUsed -= l.size, this.logger.log(`Freed ${(l.size / 1024 / 1024).toFixed(2)}MB from budget (now: ${(this.prefetchBudgetUsed / 1024 / 1024).toFixed(2)}MB / ${(this.prefetchBudgetMax / 1024 / 1024).toFixed(2)}MB)`), URL.revokeObjectURL(l.blobUrl)), this.prefetchedAudio.delete(e), this._processPrefetchQueue(), s.spatial && (s.position && a.pos(s.position.x, s.position.y, s.position.z), s.pannerAttr && a.pannerAttr(s.pannerAttr)), this.registerSound(e, a, s.volume ?? 1), o && (this.loopDelays.set(e, {
              delay: s.loopDelay,
              timer: 0,
              active: false
            }), this.logger.log(`Registered loop delay of ${s.loopDelay}s for sound "${e}"`)), s.reactiveLight && s.reactiveLight.enabled && this.lightManager) {
              const h = {
                ...s.reactiveLight
              };
              s.position && h.position && (h.position = {
                x: s.position.x + (h.position.x || 0),
                y: s.position.y + (h.position.y || 0),
                z: s.position.z + (h.position.z || 0)
              }), this.lightManager.createReactiveLight(e, a, h);
            }
            n(a);
          },
          onloaderror: (l, h) => {
            this.logger.error(`Failed to load Howl from prefetched blob for sound "${e}":`, h), r(h);
          },
          onend: o ? () => this._handleLoopEnd(s.id) : void 0
        });
      });
    }
    async loadDeferredSounds() {
      var _a3, _b2;
      const e = ((_b2 = (_a3 = this.gameManager) == null ? void 0 : _a3.getState()) == null ? void 0 : _b2.isIOS) || false;
      if (this.logger.log(`Loading ${this.deferredSounds.size} deferred sounds${e ? " (iOS: sequential loading)" : ""}`), this.prefetchedAudio.size > 0) {
        this.logger.log(`Creating Howl instances from ${this.prefetchedAudio.size} prefetched sounds`);
        for (const [t, i] of this.prefetchedAudio) try {
          await this._createHowlFromPrefetched(t, i), e && await new Promise((s) => setTimeout(s, 50));
        } catch (s) {
          this.logger.error(`Failed to create Howl from prefetched sound "${t}":`, s), i && i.size && (this.prefetchBudgetUsed -= i.size, URL.revokeObjectURL(i.blobUrl)), this.deferredSounds.set(t, i.soundData);
        }
        this.prefetchedAudio.clear(), this._processPrefetchQueue();
      }
      if (e) for (const [t, i] of this.deferredSounds) await this._loadDeferredSound(t, i), await new Promise((s) => setTimeout(s, 50));
      else for (const [t, i] of this.deferredSounds) this._loadDeferredSound(t, i);
      this.deferredSounds.clear();
    }
    _loadDeferredSound(e, t) {
      const i = t.loop && t.loopDelay > 0, s = new Y.Howl({
        src: t.src,
        loop: i ? false : t.loop,
        volume: t.volume,
        ...t.rate !== void 0 && {
          rate: t.rate
        },
        preload: true,
        onload: () => {
          this.logger.log(`Loaded deferred sound "${t.id}"`);
        },
        onloaderror: (o, n) => {
          this.logger.error(`Failed to load deferred sound "${t.id}":`, n);
        },
        onend: i ? () => this._handleLoopEnd(t.id) : void 0
      });
      if (t.spatial && (t.position && s.pos(t.position.x, t.position.y, t.position.z), t.pannerAttr && s.pannerAttr(t.pannerAttr)), this.registerSound(t.id, s, t.volume ?? 1), i && (this.loopDelays.set(t.id, {
        delay: t.loopDelay,
        timer: 0,
        active: false
      }), this.logger.log(`Registered loop delay of ${t.loopDelay}s for deferred sound "${t.id}"`)), t.reactiveLight && t.reactiveLight.enabled && this.lightManager) {
        const o = {
          ...t.reactiveLight
        };
        t.position && o.position && (o.position = {
          x: t.position.x + (o.position.x || 0),
          y: t.position.y + (o.position.y || 0),
          z: t.position.z + (o.position.z || 0)
        }), this.lightManager.createReactiveLight(t.id, s, o);
      }
    }
    getMasterVolume() {
      return this.masterVolume;
    }
    updateSoundVolume(e) {
      const t = this.sounds.get(e);
      if (!t) return;
      const { howl: i, baseVolume: s, isProxy: o } = t, n = s * this.masterVolume;
      i && (o ? i.setVolume(n) : i.volume(n));
    }
    setSoundBaseVolume(e, t) {
      const i = this.sounds.get(e);
      i && (i.baseVolume = Math.max(0, Math.min(1, t)), this.updateSoundVolume(e));
    }
    getSound(e) {
      const t = this.sounds.get(e);
      return t ? t.howl : null;
    }
    async play(e) {
      if (!this.sounds.has(e) && this.prefetchedAudio.has(e)) {
        this.logger.log(`Creating Howl from prefetched blob for sound "${e}"`);
        const i = this.prefetchedAudio.get(e);
        try {
          await this._createHowlFromPrefetched(e, i);
        } catch (s) {
          this.logger.error(`Failed to create Howl from prefetched sound "${e}":`, s), i && i.size && (this.prefetchBudgetUsed -= i.size, URL.revokeObjectURL(i.blobUrl)), this.prefetchedAudio.delete(e), this._processPrefetchQueue(), this.deferredSounds.has(e) || this.deferredSounds.set(e, i.soundData);
        }
      }
      if (!this.sounds.has(e) && this.deferredSounds.has(e)) {
        this.logger.log(`Loading deferred sound "${e}" on-demand`);
        const i = this.deferredSounds.get(e), s = i.loop && i.loopDelay > 0, o = new Y.Howl({
          src: i.src,
          loop: s ? false : i.loop,
          volume: i.volume,
          ...i.rate !== void 0 && {
            rate: i.rate
          },
          preload: true,
          onend: s ? () => this._handleLoopEnd(i.id) : void 0
        });
        if (await new Promise((n) => {
          o.once("load", () => {
            this.logger.log(`Loaded on-demand sound "${e}"`), n();
          }), o.once("loaderror", (r, a) => {
            this.logger.error(`Failed to load on-demand sound "${e}":`, a), n();
          });
        }), i.spatial && (i.position && o.pos(i.position.x, i.position.y, i.position.z), i.pannerAttr && o.pannerAttr(i.pannerAttr)), this.registerSound(i.id, o, i.volume ?? 1), s && (this.loopDelays.set(i.id, {
          delay: i.loopDelay,
          timer: 0,
          active: false
        }), this.logger.log(`Registered loop delay of ${i.loopDelay}s for on-demand sound "${i.id}"`)), i.reactiveLight && i.reactiveLight.enabled && this.lightManager) {
          const n = {
            ...i.reactiveLight
          };
          i.position && n.position && (n.position = {
            x: i.position.x + (n.position.x || 0),
            y: i.position.y + (n.position.y || 0),
            z: i.position.z + (n.position.z || 0)
          }), this.lightManager.createReactiveLight(i.id, o, n);
        }
        this.deferredSounds.delete(e);
      }
      const t = this.sounds.get(e);
      if (t && t.howl) {
        if (t.isProxy) return this.logger.warn(`Cannot play proxy object "${e}"`), null;
        const i = t.howl.play();
        return this.loopDelays.has(e) && this.loopingSounds.set(e, i), i;
      }
      return null;
    }
    stop(e, t = null) {
      const i = this.sounds.get(e);
      if (i && i.howl) {
        if (i.isProxy) {
          this.logger.warn(`Cannot stop proxy object "${e}"`);
          return;
        }
        if (t !== null ? i.howl.stop(t) : i.howl.stop(), this.loopDelays.has(e)) {
          const s = this.loopDelays.get(e);
          s.active = false, s.timer = 0;
        }
        this.loopingSounds.delete(e);
      }
    }
    stopAll() {
      for (const [e, t] of this.sounds) t.howl && t.howl.stop();
      for (const [e, t] of this.loopDelays) t.active = false, t.timer = 0;
      this.loopingSounds.clear();
    }
    _handleLoopEnd(e) {
      const t = this.loopDelays.get(e);
      t && (t.active = true, t.timer = 0, this.logger.log(`Starting loop delay for "${e}" (${t.delay}s)`));
    }
    isPlaying(e) {
      const t = this.sounds.get(e);
      return t && t.howl && !t.isProxy ? t.howl.playing() : false;
    }
    fade(e, t, i, s, o = null) {
      const n = this.sounds.get(e);
      if (n && n.howl) {
        if (n.isProxy) {
          this.logger.warn(`Cannot fade proxy object "${e}"`);
          return;
        }
        const r = t * this.masterVolume, a = i * this.masterVolume;
        o !== null ? n.howl.fade(r, a, s, o) : n.howl.fade(r, a, s);
      }
    }
    getSoundIds() {
      return Array.from(this.sounds.keys());
    }
    update(e) {
      var _a3;
      if (this.pendingSounds.size > 0) {
        for (const [t, i] of this.pendingSounds) if (i.timer += e, i.timer >= i.delay) {
          this.logger.log(`Playing delayed sound "${t}"`), this.pendingSounds.delete(t);
          const s = (_a3 = this._data) == null ? void 0 : _a3[t];
          try {
            this.play(t), (s == null ? void 0 : s.playOnce) && this.playedSounds.add(t);
          } catch (o) {
            this.logger.warn(`Failed to play delayed sound "${t}"`, o);
          }
          break;
        }
      }
      if (this.loopDelays.size > 0) {
        for (const [t, i] of this.loopDelays) if (i.active && (i.timer += e, i.timer >= i.delay)) {
          this.logger.log(`Replaying sound "${t}" after loop delay`), i.active = false, i.timer = 0;
          try {
            this.play(t);
          } catch (s) {
            this.logger.warn(`Failed to replay sound "${t}" after loop delay`, s);
          }
          break;
        }
      }
    }
    destroy() {
      this.stopAll(), this.pendingSounds.clear(), this.loopDelays.clear(), this.loopingSounds.clear();
      for (const [e, t] of this.sounds) t.howl && !t.isProxy && t.howl.unload();
      this.sounds.clear();
    }
  }
  class Tt extends k {
    constructor() {
      super(Tt.Geometry, new le({
        opacity: 0,
        transparent: true
      })), this.isLensflare = true, this.type = "Lensflare", this.frustumCulled = false, this.renderOrder = 1 / 0;
      const e = new S(), t = new S(), i = new $i(16, 16), s = new $i(16, 16);
      let o = Ni;
      const n = Tt.Geometry, r = new ri({
        uniforms: {
          scale: {
            value: null
          },
          screenPosition: {
            value: null
          }
        },
        vertexShader: `

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,
        fragmentShader: `

				precision highp float;

				void main() {

					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );

				}`,
        depthTest: true,
        depthWrite: false,
        transparent: false
      }), a = new ri({
        uniforms: {
          map: {
            value: i
          },
          scale: {
            value: null
          },
          screenPosition: {
            value: null
          }
        },
        vertexShader: `

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {

					vUV = uv;

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,
        fragmentShader: `

				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {

					gl_FragColor = texture2D( map, vUV );

				}`,
        depthTest: false,
        depthWrite: false,
        transparent: false
      }), l = new k(n, r), h = [], c = Ri.Shader, d = new ri({
        name: c.name,
        uniforms: {
          map: {
            value: null
          },
          occlusionMap: {
            value: s
          },
          color: {
            value: new J(16777215)
          },
          scale: {
            value: new Ue()
          },
          screenPosition: {
            value: new S()
          }
        },
        vertexShader: c.vertexShader,
        fragmentShader: c.fragmentShader,
        blending: gs,
        transparent: true,
        depthWrite: false
      }), u = new k(n, d);
      this.addElement = function(y) {
        h.push(y);
      };
      const m = new Ue(), f = new Ue(), x = new Ys(), w = new Qs();
      this.onBeforeRender = function(y, v, b) {
        y.getCurrentViewport(w);
        const T = y.getRenderTarget(), M = T !== null ? T.texture.type : Ni;
        o !== M && (i.dispose(), s.dispose(), i.type = s.type = M, o = M);
        const C = w.w / w.z, P = w.z / 2, A = w.w / 2;
        let D = 16 / w.w;
        if (m.set(D * C, D), x.min.set(w.x, w.y), x.max.set(w.x + (w.z - 16), w.y + (w.w - 16)), t.setFromMatrixPosition(this.matrixWorld), t.applyMatrix4(b.matrixWorldInverse), !(t.z > 0) && (e.copy(t).applyMatrix4(b.projectionMatrix), f.x = w.x + e.x * P + P - 8, f.y = w.y + e.y * A + A - 8, x.containsPoint(f))) {
          y.copyFramebufferToTexture(i, f);
          let R = r.uniforms;
          R.scale.value = m, R.screenPosition.value = e, y.renderBufferDirect(b, null, n, r, l, null), y.copyFramebufferToTexture(s, f), R = a.uniforms, R.scale.value = m, R.screenPosition.value = e, y.renderBufferDirect(b, null, n, a, l, null);
          const F = -e.x * 2, z = -e.y * 2;
          for (let O = 0, $ = h.length; O < $; O++) {
            const Z = h[O], j = d.uniforms;
            j.color.value.copy(Z.color), j.map.value = Z.texture, j.screenPosition.value.x = e.x + F * Z.distance, j.screenPosition.value.y = e.y + z * Z.distance, D = Z.size / w.w;
            const se = w.w / w.z;
            j.scale.value.set(D * se, D), d.uniformsNeedUpdate = true, y.renderBufferDirect(b, null, n, d, u, null);
          }
        }
      }, this.dispose = function() {
        r.dispose(), a.dispose(), d.dispose(), i.dispose(), s.dispose();
        for (let y = 0, v = h.length; y < v; y++) h[y].texture.dispose();
      };
    }
  }
  class Ri {
    constructor(e, t = 1, i = 0, s = new J(16777215)) {
      this.texture = e, this.size = t, this.distance = i, this.color = s;
    }
  }
  Ri.Shader = {
    name: "LensflareElementShader",
    uniforms: {
      map: {
        value: null
      },
      occlusionMap: {
        value: null
      },
      color: {
        value: null
      },
      scale: {
        value: null
      },
      screenPosition: {
        value: null
      }
    },
    vertexShader: `

		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vUV = uv;

			vec2 pos = position.xy;

			vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			vVisibility =        visibility.r / 9.0;
			vVisibility *= 1.0 - visibility.g / 9.0;
			vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );

		}`,
    fragmentShader: `

		precision highp float;

		uniform sampler2D map;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vec4 texture = texture2D( map, vUV );
			texture.a *= vVisibility;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;

		}`
  };
  Tt.Geometry = (function() {
    const g = new ot(), e = new Float32Array([
      -1,
      -1,
      0,
      0,
      0,
      1,
      -1,
      0,
      1,
      0,
      1,
      1,
      0,
      1,
      1,
      -1,
      1,
      0,
      0,
      1
    ]), t = new ps(e, 5);
    return g.setIndex([
      0,
      1,
      2,
      0,
      2,
      3
    ]), g.setAttribute("position", new bi(t, 3, 0, false)), g.setAttribute("uv", new bi(t, 2, 3, false)), g;
  })();
  const Vt = {
    ambient: {
      id: "ambient",
      type: "AmbientLight",
      color: 16777215,
      intensity: 0.5
    },
    mainDirectional: {
      id: "main-directional",
      type: "DirectionalLight",
      color: 16777215,
      intensity: 0.8,
      position: {
        x: 10,
        y: 20,
        z: 10
      },
      castShadow: true
    },
    streetLight: {
      id: "street-light",
      type: "SplatLight",
      splatType: "SPHERE",
      color: {
        r: 0.9,
        g: 0.9,
        b: 0.9
      },
      position: {
        x: -0.84,
        y: 0.99,
        z: 64.97
      },
      rotation: {
        x: -Math.PI / 2,
        y: 0,
        z: 0
      },
      radius: 3,
      opacity: 0.05,
      rgbaBlendMode: "ADD_RGBA",
      sdfSmooth: 0.1,
      softEdge: 3,
      threeLightDuplicate: true
    },
    streetLight2: {
      id: "street-light-2",
      type: "SplatLight",
      splatType: "SPHERE",
      color: {
        r: 0.9,
        g: 0.9,
        b: 0.9
      },
      position: {
        x: 13.03,
        y: 1.44,
        z: 75.07
      },
      rotation: {
        x: -1.57,
        y: 0,
        z: 0
      },
      radius: 5,
      opacity: 0.025,
      rgbaBlendMode: "ADD_RGBA",
      sdfSmooth: 0.1,
      softEdge: 3
    },
    carHeadlight: {
      id: "car-headlight",
      type: "SplatLight",
      splatType: "INFINITE_CONE",
      color: {
        r: 0.9,
        g: 0.9,
        b: 0.9
      },
      attachTo: {
        objectId: "car",
        childName: "Old_Car_01"
      },
      position: {
        x: 0,
        y: 1,
        z: 1
      },
      rotation: {
        x: 0.12,
        y: Math.PI + 0.06,
        z: -2
      },
      radius: 0.2,
      opacity: 0.4,
      rgbaBlendMode: "ADD_RGBA",
      softEdge: 0.75,
      threeLightDuplicate: {
        type: "PointLight",
        intensity: 100,
        distance: 20,
        castShadow: false,
        position: {
          x: 0,
          y: 2,
          z: 3
        }
      },
      criteria: {
        currentState: {
          $gte: p.DRIVE_BY_PREAMBLE,
          $lt: p.POST_DRIVE_BY
        }
      }
    },
    officeHemisphere: {
      id: "office-hemisphere",
      type: "HemisphereLight",
      skyColor: 15127712,
      groundColor: 3824212,
      intensity: 0.8,
      position: {
        x: -4.5,
        y: 6,
        z: 85
      },
      criteria: {
        currentState: {
          $gte: p.POST_DRIVE_BY
        }
      }
    },
    officeDirectional: {
      id: "office-directional",
      type: "DirectionalLight",
      color: 16777215,
      intensity: 0.5,
      position: {
        x: -2,
        y: 6,
        z: 88
      },
      castShadow: false,
      criteria: {
        currentState: {
          $gte: p.POST_DRIVE_BY
        }
      }
    },
    officeLampKey: {
      id: "office-lamp-key",
      type: "PointLight",
      color: 16764006,
      intensity: 30,
      distance: 12,
      decay: 2,
      position: {
        x: -7.95,
        y: 3.01,
        z: 88.61
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0
      },
      scale: {
        x: 1,
        y: 1,
        z: 1
      },
      castShadow: false,
      criteria: {
        currentState: {
          $gte: p.POST_DRIVE_BY
        }
      }
    },
    officeLampFill: {
      id: "office-lamp-fill",
      type: "PointLight",
      color: 16767372,
      intensity: 20,
      distance: 12,
      decay: 2,
      position: {
        x: -3,
        y: 2.8,
        z: 86
      },
      castShadow: false,
      criteria: {
        currentState: {
          $gte: p.POST_DRIVE_BY
        }
      }
    }
  };
  class Qo {
    constructor(e, t = null, i = null) {
      this.scene = e, this.sceneManager = t, this.gameManager = i, this.lights = /* @__PURE__ */ new Map(), this.reactiveLights = /* @__PURE__ */ new Map(), this.splatLayers = /* @__PURE__ */ new Map(), this.pendingAttachments = /* @__PURE__ */ new Map(), this.gameState = null, this.lensFlares = /* @__PURE__ */ new Map(), this.logger = new N("LightManager", false), this.gameState = i == null ? void 0 : i.getState(), this.loadLightsFromData(Vt, this.gameState), this.gameState && this.updateLensFlareVisibility(this.gameState);
    }
    _resolveParent(e) {
      var _a3, _b2;
      if (!this.sceneManager) return this.scene;
      const t = (e == null ? void 0 : e.parentId) || ((_a3 = e == null ? void 0 : e.attachTo) == null ? void 0 : _a3.objectId), i = (e == null ? void 0 : e.childName) || ((_b2 = e == null ? void 0 : e.attachTo) == null ? void 0 : _b2.childName);
      if (!t) return this.scene;
      if (i && typeof this.sceneManager.findChildByName == "function") {
        const s = this.sceneManager.findChildByName(t, i);
        if (s) return s;
      }
      if (typeof this.sceneManager.getObject == "function") {
        const s = this.sceneManager.getObject(t);
        if (s) return s;
      }
      return this.scene;
    }
    _maybeTrackPendingAttachment(e, t, i, s) {
      var _a3;
      if (!!((i == null ? void 0 : i.parentId) || (i == null ? void 0 : i.attachTo)) && s === this.scene && e) {
        this.pendingAttachments.set(e, {
          object3D: t,
          config: i
        });
        const n = (i == null ? void 0 : i.parentId) || ((_a3 = i == null ? void 0 : i.attachTo) == null ? void 0 : _a3.objectId);
        this.logger.log(`\u23F8\uFE0F "${e}" waiting for parent "${n}" to load`);
      }
    }
    _tryResolvePendingAttachments() {
      if (!this.sceneManager || this.pendingAttachments.size === 0) return;
      let e = false;
      for (const [t, i] of Array.from(this.pendingAttachments.entries())) {
        const { object3D: s, config: o } = i, n = this._resolveParent(o);
        n !== this.scene && (s.parent && s.parent.remove(s), n.add(s), this.pendingAttachments.delete(t), this.logger.log(`\u2705 Reattached "${t}" under resolved parent (type: ${s.constructor.name})`), (this.splatLayers.has(t) || s.constructor.name === "SplatEdit") && (e = true, this.logger.log("  \u2192 This is a splat light, will rebuild fog")));
      }
      if (e && window.cloudParticles && (this.logger.log("\u{1F32B}\uFE0F Rebuilding fog after splat light reattachment..."), window.cloudParticles.rebuild()), this.pendingAttachments.size > 0) {
        const t = Array.from(this.pendingAttachments.keys());
        this.logger.log(`\u23F3 Still waiting for parents: ${t.join(", ")}`);
      }
    }
    loadLightsFromData(e, t = null) {
      this.logger.log("Loading lights from data...");
      for (const [i, s] of Object.entries(e)) {
        if (t && s.criteria && !X(t, s.criteria)) {
          this.logger.log(`\u23ED\uFE0F Skipping light "${i}" - criteria not met`);
          continue;
        }
        this.logger.log(`\u{1F526} Processing light "${i}" (type: ${s.type})`);
        try {
          s.type === "SplatLight" ? this.createSplatLight(s) : this.createLight(s);
        } catch (o) {
          this.logger.error(`\u274C Error creating light "${i}":`, o);
        }
      }
      this.logger.log(`Created ${this.lights.size} light(s)`);
    }
    createLight(e) {
      switch (e.type) {
        case "AmbientLight":
          return this.createAmbientLight(e);
        case "HemisphereLight":
          return this.createHemisphereLight(e);
        case "DirectionalLight":
          return this.createDirectionalLight(e);
        case "PointLight":
          return this.createPointLight(e);
        case "SpotLight":
          return this.createSpotLight(e);
        default:
          return this.logger.warn(`Unknown light type "${e.type}"`), null;
      }
    }
    createSplatLight(e) {
      const t = new Zs({
        rgbaBlendMode: ji[e.rgbaBlendMode] || ji.ADD_RGBA,
        sdfSmooth: e.sdfSmooth ?? 0.1,
        softEdge: e.softEdge ?? 1.2
      });
      e.renderOrder !== void 0 && (t.renderOrder = e.renderOrder);
      const i = this._resolveParent(e);
      i.add(t), this._maybeTrackPendingAttachment(e.id, t, e, i);
      const s = Bi[e.splatType] || Bi.SPHERE, o = new Xs({
        type: s,
        color: new J(e.color.r, e.color.g, e.color.b),
        radius: e.radius ?? 1,
        opacity: e.opacity ?? 0
      });
      return e.position && o.position.set(e.position.x ?? 0, e.position.y ?? 0, e.position.z ?? 0), e.rotation && o.rotation.set(e.rotation.x ?? 0, e.rotation.y ?? 0, e.rotation.z ?? 0), t.add(o), e.id && (this.lights.set(e.id, o), this.splatLayers.set(e.id, t)), e.threeLightDuplicate && this.createThreeLightDuplicate(e), this.logger.log(`Created splat light "${e.id}" at (${e.position.x}, ${e.position.y}, ${e.position.z})`), window.cloudParticles && window.cloudParticles.rebuild(), t;
    }
    createThreeLightDuplicate(e) {
      const t = typeof e.threeLightDuplicate == "object" ? e.threeLightDuplicate : {}, i = new J(e.color.r, e.color.g, e.color.b).getHex(), s = t.type || "PointLight", o = {
        id: `${e.id}-three-duplicate`,
        type: s,
        color: t.color ?? i,
        intensity: t.intensity ?? 1,
        position: t.position ?? e.position,
        distance: t.distance ?? 0,
        decay: t.decay ?? 2,
        castShadow: t.castShadow ?? false
      };
      e.parentId && (o.parentId = e.parentId), e.childName && (o.childName = e.childName), e.attachTo && (o.attachTo = {
        ...e.attachTo
      });
      const n = this.createLight(o);
      return n && (this.logger.log(`Created Three.js duplicate light for "${e.id}"`), t.gizmo && window.gizmoManager && window.gizmoManager.registerObject(n, o.id, "light")), n;
    }
    _createLensFlareTextures() {
      const e = (s) => (s.minFilter = ye, s.magFilter = ye, s.premultiplyAlpha = true, s.needsUpdate = true, s), t = (s, o, n, r) => {
        const a = document.createElement("canvas");
        a.width = a.height = s;
        const l = a.getContext("2d");
        l.clearRect(0, 0, s, s);
        const h = l.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
        return h.addColorStop(0, `rgba(255, 247, 224, ${o})`), h.addColorStop(0.45, `rgba(255, 239, 205, ${n})`), h.addColorStop(1, `rgba(255, 232, 191, ${r})`), l.fillStyle = h, l.fillRect(0, 0, s, s), e(new Mt(a));
      }, i = (s, o) => {
        const n = document.createElement("canvas");
        n.width = n.height = s;
        const r = n.getContext("2d");
        r.clearRect(0, 0, s, s);
        const a = r.createRadialGradient(s / 2, s / 2, s / 2 * 0.45, s / 2, s / 2, s / 2);
        return a.addColorStop(0, "rgba(255, 255, 255, 0)"), a.addColorStop(0.6, `rgba(255, 255, 255, ${o * 0.2})`), a.addColorStop(0.8, `rgba(255, 255, 255, ${o})`), a.addColorStop(1, "rgba(255, 255, 255, 0)"), r.fillStyle = a, r.fillRect(0, 0, s, s), e(new Mt(n));
      };
      return {
        core: t(384, 0.9, 0.35, 0.02),
        glow: t(512, 0.4, 0.15, 0),
        softGlow: t(640, 0.15, 0.05, 0),
        ring: i(384, 0.45)
      };
    }
    createLensFlareForLight(e, t) {
      if (!(t == null ? void 0 : t.enabled)) return;
      const i = new Tt(), s = this._createLensFlareTextures(), o = new J(16770505), n = [], r = [], a = t.elements || [
        {
          size: 180,
          distance: 0
        },
        {
          size: 140,
          distance: 0.25
        },
        {
          size: 260,
          distance: 0.55
        },
        {
          size: 320,
          distance: 0.85
        }
      ], l = [
        s.core,
        s.ring,
        s.glow,
        s.softGlow
      ];
      for (let h = 0; h < a.length; h++) {
        const c = a[h], d = l[h] || s.softGlow, u = o.clone();
        n.push(u.clone());
        const m = new Ri(d, c.size, c.distance, u);
        r.push(m), i.addElement(m);
      }
      e.add(i), this.logger.log(`Created lens flare for light "${t.id || e.name}"`);
      for (let h = 0; h < r.length; h++) r[h].size = 0, r[h].color.set(0, 0, 0);
      return {
        lensflare: i,
        baseColors: n,
        elements: r
      };
    }
    createAmbientLight(e = {}) {
      const t = new Ks(e.color ?? 16777215, e.intensity ?? 1);
      e.id && this.lights.set(e.id, t);
      const i = this._resolveParent(e);
      return i.add(t), this._maybeTrackPendingAttachment(e.id, t, e, i), t;
    }
    createHemisphereLight(e = {}) {
      const t = new Js(e.skyColor ?? 16777215, e.groundColor ?? 0, e.intensity ?? 1);
      e.position && t.position.set(e.position.x ?? 0, e.position.y ?? 0, e.position.z ?? 0), e.id && this.lights.set(e.id, t);
      const i = this._resolveParent(e);
      return i.add(t), this._maybeTrackPendingAttachment(e.id, t, e, i), t;
    }
    createDirectionalLight(e = {}) {
      const t = new ms(e.color ?? 16777215, e.intensity ?? 1);
      if (e.position && t.position.set(e.position.x ?? 0, e.position.y ?? 0, e.position.z ?? 0), e.castShadow !== void 0 && (t.castShadow = e.castShadow), e.shadow && t.castShadow) {
        if (e.shadow.mapSize && (t.shadow.mapSize.width = e.shadow.mapSize.width ?? 512, t.shadow.mapSize.height = e.shadow.mapSize.height ?? 512), e.shadow.camera) {
          const s = e.shadow.camera;
          s.left !== void 0 && (t.shadow.camera.left = s.left), s.right !== void 0 && (t.shadow.camera.right = s.right), s.top !== void 0 && (t.shadow.camera.top = s.top), s.bottom !== void 0 && (t.shadow.camera.bottom = s.bottom), s.near !== void 0 && (t.shadow.camera.near = s.near), s.far !== void 0 && (t.shadow.camera.far = s.far), t.shadow.camera.updateProjectionMatrix();
        }
        e.shadow.bias !== void 0 && (t.shadow.bias = e.shadow.bias), e.shadow.normalBias !== void 0 && (t.shadow.normalBias = e.shadow.normalBias), this.logger.log(`Configured shadow for "${e.id}" - mapSize: ${t.shadow.mapSize.width}x${t.shadow.mapSize.height}`);
      }
      e.id && this.lights.set(e.id, t);
      const i = this._resolveParent(e);
      return i.add(t), this._maybeTrackPendingAttachment(e.id, t, e, i), t;
    }
    createPointLight(e = {}) {
      const t = new fs(e.color ?? 16777215, e.intensity ?? 1, e.distance ?? 0, e.decay ?? 2);
      e.position && t.position.set(e.position.x ?? 0, e.position.y ?? 0, e.position.z ?? 0), e.castShadow !== void 0 && (t.castShadow = e.castShadow), e.id && this.lights.set(e.id, t);
      const i = this._resolveParent(e);
      if (i.add(t), this._maybeTrackPendingAttachment(e.id, t, e, i), e.lensFlare) {
        const { lensflare: s, baseColors: o, elements: n } = this.createLensFlareForLight(t, e.lensFlare);
        this.lensFlares.set(e.id, {
          lensflare: s,
          config: e.lensFlare,
          elements: n,
          currentIntensity: 0,
          targetIntensity: 0,
          startIntensity: 0,
          fadeProgress: 0,
          isFading: false,
          baseColors: o,
          delayRemaining: 0
        });
      }
      return t;
    }
    createSpotLight(e = {}) {
      const t = new ys(e.color ?? 16777215, e.intensity ?? 1, e.distance ?? 0, e.angle ?? Math.PI / 3, e.penumbra ?? 0, e.decay ?? 2);
      this.logger.log(`\u{1F526} Creating SpotLight "${e.id}" with intensity ${t.intensity}, distance ${t.distance}, angle ${t.angle}`), e.position && t.position.set(e.position.x ?? 0, e.position.y ?? 0, e.position.z ?? 0), e.castShadow !== void 0 && (t.castShadow = e.castShadow), e.id && this.lights.set(e.id, t);
      const i = this._resolveParent(e);
      return i.add(t), this.logger.log(`  SpotLight parent: ${i.type || i.constructor.name}`), e.target ? (t.target.position.set(e.target.x ?? 0, e.target.y ?? 0, e.target.z ?? 0), i.add(t.target), this.logger.log(`  SpotLight target at (${t.target.position.x}, ${t.target.position.y}, ${t.target.position.z})`)) : (t.target.position.set(0, 0, 10), i.add(t.target), this.logger.log("  SpotLight target at default (0, 0, 10)")), this._maybeTrackPendingAttachment(e.id, t, e, i), t;
    }
    createReactiveLight(e, t, i) {
      try {
        let s;
        switch (i.type) {
          case "PointLight":
            s = this.createPointLight({
              ...i,
              id: null,
              intensity: i.baseIntensity ?? 1
            });
            break;
          case "SpotLight":
            s = this.createSpotLight({
              ...i,
              id: null,
              intensity: i.baseIntensity ?? 1
            });
            break;
          case "DirectionalLight":
            s = this.createDirectionalLight({
              ...i,
              id: null,
              intensity: i.baseIntensity ?? 1
            });
            break;
          default:
            return this.logger.warn(`Unknown light type "${i.type}" for "${e}"`), null;
        }
        const o = new eo(s, t, {
          baseIntensity: i.baseIntensity,
          reactivityMultiplier: i.reactivityMultiplier,
          smoothing: i.smoothing,
          frequencyRange: i.frequencyRange,
          minIntensity: i.minIntensity,
          maxIntensity: i.maxIntensity,
          noiseFloor: i.noiseFloor
        });
        return this.lights.set(e, s), this.reactiveLights.set(e, {
          light: s,
          audioReactive: o
        }), this.logger.log(`Created reactive light "${e}"`), {
          light: s,
          audioReactive: o
        };
      } catch (s) {
        return this.logger.error(`Error creating reactive light "${e}":`, s), null;
      }
    }
    getLight(e) {
      return this.lights.get(e) || null;
    }
    getReactiveLight(e) {
      return this.reactiveLights.get(e) || null;
    }
    removeLight(e) {
      const t = this.lights.get(e);
      t && (t.parent ? t.parent.remove(t) : this.scene.remove(t), this.lights.delete(e));
      const i = this.splatLayers.get(e);
      i && (i.parent ? i.parent.remove(i) : this.scene.remove(i), this.splatLayers.delete(e));
      const s = this.reactiveLights.get(e);
      s && (s.audioReactive.destroy(), this.reactiveLights.delete(e));
      const o = this.lensFlares.get(e);
      o && (o.lensflare.parent ? o.lensflare.parent.remove(o.lensflare) : this.scene.remove(o.lensflare), this.lensFlares.delete(e));
    }
    updateLightsForState(e) {
      if (e) {
        this.gameState = e;
        for (const [t, i] of Object.entries(Vt)) {
          const s = i.id, o = this.lights.has(s) || this.splatLayers.has(s);
          if (i.criteria) {
            const n = X(e, i.criteria);
            if (n && !o) {
              this.logger.log(`\u{1F526} Creating light "${s}" (criteria now met)`);
              try {
                i.type === "SplatLight" ? this.createSplatLight(i) : this.createLight(i);
              } catch (r) {
                this.logger.error(`\u274C Error creating light "${s}":`, r);
              }
            } else !n && o && (this.logger.log(`\u{1F526} Removing light "${s}" (criteria no longer met)`), this.removeLight(s));
          }
        }
        this.updateLensFlareVisibility(e);
      }
    }
    updateLensFlareVisibility(e) {
      var _a3;
      for (const [t, i] of this.lensFlares) if ((_a3 = i.config) == null ? void 0 : _a3.criteria) {
        const s = X(e, i.config.criteria), o = i.config.fadeDuration || 1.5, n = i.config.fadeDelay || 0, r = s ? 1 : 0;
        r !== i.targetIntensity && (this.logger.log(`Lens flare "${t}" fade triggered: ${i.currentIntensity} -> ${r} (delay: ${n}s, duration: ${o}s)`), i.startIntensity = i.currentIntensity, i.targetIntensity = r, i.fadeProgress = 0, i.delayRemaining = n, i.isFading = true);
      }
    }
    updateLensFlares(e) {
      var _a3, _b2;
      for (const [t, i] of this.lensFlares) {
        if (!i.isFading) continue;
        if (i.delayRemaining > 0) {
          if (i.delayRemaining -= e, i.delayRemaining > 0) continue;
          i.delayRemaining = 0;
        }
        const s = i.config.fadeDuration || 1.5;
        if (i.fadeProgress += e / s, i.fadeProgress >= 1) i.fadeProgress = 1, i.isFading = false, i.currentIntensity = i.targetIntensity, this.logger.log(`Lens flare "${t}" fade complete. Intensity: ${i.currentIntensity}`);
        else {
          const o = i.fadeProgress, n = o < 0.5 ? 2 * o * o : -1 + (4 - 2 * o) * o;
          i.currentIntensity = G.lerp(i.startIntensity, i.targetIntensity, n);
        }
        if (i.lensflare && i.elements) {
          const o = i.config.elements || [];
          for (let n = 0; n < i.elements.length; n++) {
            const r = i.elements[n], a = ((_a3 = o[n]) == null ? void 0 : _a3.size) || 100, l = (_b2 = i.baseColors) == null ? void 0 : _b2[n];
            r.size = a * i.currentIntensity, l && r.color.copy(l).multiplyScalar(i.currentIntensity);
          }
        }
      }
    }
    updateReactiveLights(e) {
      this._tryResolvePendingAttachments();
      for (const { audioReactive: t } of this.reactiveLights.values()) t.update();
    }
    setReactiveLightEnabled(e, t) {
      const i = this.reactiveLights.get(e);
      i && (t ? i.audioReactive.enable() : i.audioReactive.disable());
    }
    getLightIds() {
      return Array.from(this.lights.keys());
    }
    getReactiveLightIds() {
      return Array.from(this.reactiveLights.keys());
    }
    destroy() {
      for (const [e, { light: t, audioReactive: i }] of this.reactiveLights) i.destroy(), t.parent ? t.parent.remove(t) : this.scene.remove(t);
      this.reactiveLights.clear();
      for (const [e, t] of this.splatLayers) t.parent ? t.parent.remove(t) : this.scene.remove(t);
      this.splatLayers.clear();
      for (const [e, t] of this.lights) t.parent ? t.parent.remove(t) : this.scene.remove(t);
      this.lights.clear();
      for (const [e, t] of this.lensFlares) t.lensflare.parent ? t.lensflare.parent.remove(t.lensflare) : this.scene.remove(t.lensflare);
      this.lensFlares.clear();
    }
  }
  class Zo {
    constructor(e = {}) {
      this.musicManager = e.musicManager || null, this.sfxManager = e.sfxManager || null, this.gameManager = e.gameManager || null, this.sparkRenderer = e.sparkRenderer || null, this.logger = new N("OptionsMenu", false), this.uiManager = e.uiManager || null, this.characterController = e.characterController || null, this.startScreen = e.startScreen || null, this.isOpen = false, this.settings = {
        musicVolume: 0.6,
        sfxVolume: 0.5,
        dofEnabled: true,
        captionsEnabled: true,
        performanceProfile: "laptop",
        ...this.loadSettings()
      }, this.escapeKeyDownTime = null, this.menuElement = this.createMenuHTML(), this.bindEvents(), this.bindKeyboardEvents(), this.applySettings(), this.uiManager && this.registerWithUIManager(this.uiManager);
    }
    createMenuHTML() {
      const e = document.createElement("div");
      return e.id = "options-menu", e.className = "options-menu hidden", e.innerHTML = `
      <div class="options-overlay"></div>
      <div class="options-container">
        <div class="options-header">
          <h2 class="options-title">OPTIONS</h2>
          <button class="close-button" id="close-button" aria-label="Close">\xD7</button>
        </div>
        
        <div class="options-content">
          <!-- Music Volume -->
          <div class="option-group">
            <label class="option-label" for="music-volume">
              Music Volume
              <span class="option-value" id="music-volume-value">60%</span>
            </label>
            <input 
              type="range" 
              id="music-volume" 
              class="option-slider"
              min="0" 
              max="100" 
              value="60"
            >
          </div>

          <!-- SFX Volume -->
          <div class="option-group">
            <label class="option-label" for="sfx-volume">
              SFX & Dialog Volume
              <span class="option-value" id="sfx-volume-value">50%</span>
            </label>
            <input 
              type="range" 
              id="sfx-volume" 
              class="option-slider"
              min="0" 
              max="100" 
              value="50"
            >
          </div>

          <!-- Captions Enable Checkbox -->
          <div class="option-group">
            <label class="option-label checkbox-label" for="captions-enabled">
              Captions
              <input 
                type="checkbox" 
                id="captions-enabled" 
                class="option-checkbox"
                checked
              >
            </label>
          </div>

          <!-- Performance Profile -->
          <div class="option-group">
            <label class="option-label">Performance Mode</label>
            <div class="performance-mode-select">
              <label class="radio-label">
                <input 
                  type="radio" 
                  name="performance-profile" 
                  value="mobile"
                  class="performance-radio"
                >
                <span>Mobile</span>
              </label>
              <label class="radio-label">
                <input 
                  type="radio" 
                  name="performance-profile" 
                  value="laptop"
                  class="performance-radio"
                  checked
                >
                <span>Laptop</span>
              </label>
              <label class="radio-label">
                <input 
                  type="radio" 
                  name="performance-profile" 
                  value="desktop"
                  class="performance-radio"
                >
                <span>Desktop</span>
              </label>
              <label class="radio-label">
                <input 
                  type="radio" 
                  name="performance-profile" 
                  value="max"
                  class="performance-radio"
                >
                <span>Max</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Performance Mode Change Confirmation Modal -->
      <div class="refresh-confirm-modal hidden" id="refresh-confirm-modal">
        <div class="refresh-confirm-overlay"></div>
        <div class="refresh-confirm-container">
          <h3 class="refresh-confirm-title">Performance Mode Change</h3>
          <p class="refresh-confirm-message">This action requires a refresh to load the correct assets.</p>
          <div class="refresh-confirm-buttons">
            <button class="refresh-confirm-button refresh-confirm-cancel" id="refresh-confirm-cancel">Cancel</button>
            <button class="refresh-confirm-button refresh-confirm-ok" id="refresh-confirm-ok">Refresh</button>
          </div>
        </div>
      </div>
    `, document.body.appendChild(e), e;
    }
    bindKeyboardEvents() {
      this.keydownHandler = (e) => {
        e.key === "Escape" && (!this.startScreen || !this.startScreen.isActive) && !e.repeat && this.escapeKeyDownTime === null && (this.escapeKeyDownTime = Date.now());
      }, this.keyupHandler = (e) => {
        if (e.key === "Escape" && (!this.startScreen || !this.startScreen.isActive)) {
          e.preventDefault();
          const t = document.getElementById("refresh-confirm-modal");
          if (t && !t.classList.contains("hidden")) {
            this.cancelRefresh(), this.escapeKeyDownTime = null;
            return;
          }
          this.escapeKeyDownTime !== null && (Date.now() - this.escapeKeyDownTime < 200 && this.toggle(), this.escapeKeyDownTime = null);
        }
      }, window.addEventListener("keydown", this.keydownHandler), window.addEventListener("keyup", this.keyupHandler);
    }
    bindEvents() {
      const e = document.getElementById("music-volume"), t = document.getElementById("music-volume-value");
      e.addEventListener("input", (d) => {
        const u = parseInt(d.target.value);
        t.textContent = `${u}%`, e.style.setProperty("--value", `${u}%`), this.settings.musicVolume = u / 100, this.applyMusicVolume();
      }), e.addEventListener("change", () => {
        this.saveSettings();
      });
      const i = document.getElementById("sfx-volume"), s = document.getElementById("sfx-volume-value");
      i.addEventListener("input", (d) => {
        const u = parseInt(d.target.value);
        s.textContent = `${u}%`, i.style.setProperty("--value", `${u}%`), this.settings.sfxVolume = u / 100, this.applySfxVolume();
      }), i.addEventListener("change", () => {
        this.saveSettings();
      }), document.getElementById("captions-enabled").addEventListener("change", (d) => {
        this.settings.captionsEnabled = d.target.checked, this.applyCaptions(), this.saveSettings();
      }), document.querySelectorAll('input[name="performance-profile"]').forEach((d) => {
        d.addEventListener("change", (u) => {
          if (u.target.checked) {
            const m = u.target.value, f = this.settings.performanceProfile;
            m !== f && this.showRefreshConfirmation(m, f);
          }
        });
      });
      const r = document.getElementById("refresh-confirm-modal"), a = document.getElementById("refresh-confirm-ok"), l = document.getElementById("refresh-confirm-cancel"), h = r == null ? void 0 : r.querySelector(".refresh-confirm-overlay");
      a && a.addEventListener("click", () => {
        this.confirmRefresh();
      }), l && l.addEventListener("click", () => {
        this.cancelRefresh();
      }), h && h.addEventListener("click", () => {
        this.cancelRefresh();
      }), this.pendingProfileChange = null;
      const c = document.getElementById("close-button");
      c ? c.addEventListener("click", (d) => {
        d.stopPropagation(), this.close();
      }) : this.logger.error("Close button not found!"), this.menuElement.querySelector(".options-overlay").addEventListener("click", () => {
        this.close();
      });
    }
    open() {
      this.isOpen || (this.isOpen = true, this.uiManager ? this.uiManager.show("options-menu") : (this.menuElement.classList.remove("hidden"), this.gameManager && this.gameManager.pause && this.gameManager.pause()), document.pointerLockElement && document.exitPointerLock(), this.updateUI());
    }
    close() {
      this.isOpen && (this.isOpen = false, this.uiManager ? this.uiManager.hide("options-menu") : (this.menuElement.classList.add("hidden"), this.gameManager && this.gameManager.resume && this.gameManager.resume()));
    }
    toggle() {
      this.isOpen ? this.close() : this.open();
    }
    updateUI() {
      const e = document.getElementById("music-volume"), t = document.getElementById("music-volume-value"), i = document.getElementById("sfx-volume"), s = document.getElementById("sfx-volume-value"), o = document.getElementById("captions-enabled"), n = document.querySelectorAll('input[name="performance-profile"]'), r = Math.round(this.settings.musicVolume * 100), a = Math.round(this.settings.sfxVolume * 100);
      e.value = r, t.textContent = `${r}%`, e.style.setProperty("--value", `${r}%`), i.value = a, s.textContent = `${a}%`, i.style.setProperty("--value", `${a}%`), o.checked = this.settings.captionsEnabled, n.forEach((l) => {
        l.checked = l.value === this.settings.performanceProfile;
      });
    }
    applyMusicVolume() {
      this.musicManager && this.musicManager.setVolume && this.musicManager.setVolume(this.settings.musicVolume, 0.1);
    }
    applySfxVolume() {
      this.sfxManager && this.sfxManager.setMasterVolume(this.settings.sfxVolume);
    }
    applyDepthOfField() {
      this.characterController && this.characterController.setDofEnabled && this.characterController.setDofEnabled(this.settings.dofEnabled);
    }
    applyCaptions() {
      this.gameManager && this.gameManager.dialogManager && this.gameManager.dialogManager.setCaptionsEnabled(this.settings.captionsEnabled);
    }
    applyPerformanceProfile() {
      this.gameManager && this.gameManager.setState({
        performanceProfile: this.settings.performanceProfile
      });
    }
    applySettings() {
      this.applyMusicVolume(), this.applySfxVolume(), this.applyDepthOfField(), this.applyCaptions(), this.applyPerformanceProfile(), this.updateUI();
    }
    saveSettings() {
      try {
        localStorage.setItem("gameSettings", JSON.stringify(this.settings));
      } catch (e) {
        this.logger.warn("Failed to save settings:", e);
      }
    }
    loadSettings() {
      try {
        const e = localStorage.getItem("gameSettings");
        return e ? JSON.parse(e) : {};
      } catch (e) {
        return this.logger.warn("Failed to load settings:", e), {};
      }
    }
    getSettings() {
      return {
        ...this.settings
      };
    }
    setPerformanceProfile(e) {
      [
        "mobile",
        "laptop",
        "max"
      ].includes(e) || (this.logger.warn(`Invalid performance profile: ${e}, defaulting to "max"`), e = "max"), this.settings.performanceProfile = e, this.gameManager && this.gameManager.setState({
        performanceProfile: e
      }), this.menuElement && document.querySelectorAll('input[name="performance-profile"]').forEach((i) => {
        i.checked = i.value === e;
      });
    }
    registerWithUIManager(e) {
      this.uiManager = e, this.uiManager.registerElement("options-menu", this.menuElement, "PAUSE_MENU", {
        blocksInput: true,
        pausesGame: true
      }), this.uiManager.gameManager && (this.uiManager.gameManager.on("ui:shown", (t) => {
        t === "options-menu" && (this.isOpen = true, this.updateUI(), document.pointerLockElement && document.exitPointerLock());
      }), this.uiManager.gameManager.on("ui:hidden", (t) => {
        t === "options-menu" && (this.isOpen = false);
      }));
    }
    showRefreshConfirmation(e, t) {
      this.pendingProfileChange = e;
      const i = document.getElementById("refresh-confirm-modal");
      i && i.classList.remove("hidden");
    }
    confirmRefresh() {
      this.pendingProfileChange && (this.settings.performanceProfile = this.pendingProfileChange, this.saveSettings(), window.location.reload());
    }
    cancelRefresh() {
      const e = document.getElementById("refresh-confirm-modal");
      e && e.classList.add("hidden"), document.querySelectorAll('input[name="performance-profile"]').forEach((i) => {
        i.checked = i.value === this.settings.performanceProfile;
      }), this.pendingProfileChange = null;
    }
    destroy() {
      this.keydownHandler && window.removeEventListener("keydown", this.keydownHandler), this.keyupHandler && window.removeEventListener("keyup", this.keyupHandler), this.menuElement && this.menuElement.parentNode && this.menuElement.parentNode.removeChild(this.menuElement);
    }
  }
  let nt;
  nt = 0.3;
  Ut = {
    intro: {
      id: "intro",
      audio: "./audio/dialog/cole-on-her-trail.mp3",
      preload: true,
      captions: [
        {
          text: "I'd been on her trail for weeks.",
          duration: 2
        },
        {
          text: "An art thief, she'd swindled society-types,",
          duration: 3.5
        },
        {
          text: "hauling in more than a few of the Old Masters.",
          duration: 2.5
        },
        {
          text: "An anonymous tip came in:",
          duration: 2.5
        },
        {
          text: "the stash was uptown,",
          duration: 2
        },
        {
          text: "and sure as I staked it out, she was there.",
          duration: 2
        },
        {
          text: "Time to answer some tough questions, Ms. LeClaire.",
          duration: 2.5
        }
      ],
      criteria: {
        currentState: p.INTRO
      },
      once: true,
      autoPlay: true,
      priority: 100,
      delay: 1,
      progressStateTrigger: {
        progress: 0.85,
        state: p.TITLE_SEQUENCE
      }
    },
    radioCaptions: {
      id: "radioCaptions",
      captions: [
        {
          text: `[Duke Ellington's "The Mooche" plays]`,
          duration: 2.75
        },
        {
          text: "The Czar strikes again!",
          duration: 1.5
        },
        {
          text: "Brazen brute bashes bank!",
          duration: 2
        },
        {
          text: "Czar's zealots embezzle zillions!",
          duration: 2.25
        },
        {
          text: "Cops can't quell criminal caper!",
          duration: 2
        },
        {
          text: "This and more tonight, on City Beat!",
          duration: 2.25
        }
      ],
      criteria: {
        currentState: p.NEAR_RADIO
      },
      once: true,
      autoPlay: true,
      priority: 100,
      delay: 0
    },
    heyYouBeingWatched: {
      id: "heyYouBeingWatched",
      audio: "./audio/dialog/cole-hey-you-being-watched.mp3",
      preload: false,
      captions: [
        {
          text: "Hey, you!",
          duration: 2
        },
        {
          text: "Feels like I'm being watched...",
          duration: 3.5
        }
      ],
      criteria: {
        shadowGlimpse: true
      },
      once: true,
      autoPlay: true,
      priority: 100,
      delay: 3
    },
    okayICanTakeAHint: {
      id: "okayICanTakeAHint",
      audio: "./audio/dialog/cole-okay-i-can-take-a-hint.mp3",
      preload: false,
      captions: [
        {
          text: "Okay, I can take a hint.",
          duration: 2
        }
      ],
      criteria: {
        currentState: p.PHONE_BOOTH_RINGING
      },
      once: true,
      autoPlay: true,
      priority: 100,
      delay: 5
    },
    bonsoir: {
      id: "bonsoir",
      audio: "./audio/dialog/leclaire-bonsoir.mp3",
      preload: false,
      captions: [
        {
          text: "Bonsoir...",
          duration: 1.5
        },
        {
          text: "I presume you know who this is?",
          duration: 2
        }
      ],
      criteria: {
        currentState: p.ANSWERED_PHONE
      },
      once: true,
      autoPlay: true,
      priority: 100,
      delay: 2,
      onComplete: (g) => {
        g.setState({
          currentState: p.DIALOG_CHOICE_1
        });
      }
    },
    dialogChoice1Empath: {
      id: "dialogChoice1Empath",
      audio: "./audio/dialog/choice-1_empath_someone-who-made-a-mistake.mp3",
      preload: false,
      captions: [
        {
          text: "Someone who made a little mistake, that's all.",
          duration: 2.5
        }
      ],
      criteria: {
        currentState: p.DIALOG_CHOICE_1,
        dialogChoice1: te.EMPATH
      },
      once: true,
      autoPlay: false,
      priority: 100,
      delay: 1,
      onComplete: (g) => {
        g.setState({
          dialogChoice1Response: true
        });
      }
    },
    dialogChoice1Psychologist: {
      id: "dialogChoice1Psychologist",
      audio: "./audio/dialog/choice-1_psych_someone-who-was-never-taught-better.mp3",
      captions: [
        {
          text: "Someone who was never taught better than the ways of a thief.",
          duration: 2.5
        }
      ],
      criteria: {
        currentState: p.DIALOG_CHOICE_1,
        dialogChoice1: te.PSYCHOLOGIST
      },
      once: true,
      autoPlay: false,
      priority: 100,
      delay: 1,
      preload: false,
      onComplete: (g) => {
        g.setState({
          dialogChoice1Response: true
        });
      }
    },
    dialogChoice1Lawful: {
      id: "dialogChoice1Lawful",
      audio: "./audio/dialog/choice-1_lawful_someone-with-stolen-property.mp3",
      preload: false,
      captions: [
        {
          text: "Someone with stolen property in their possession",
          duration: 2
        },
        {
          text: "who might be in a lot of trouble!",
          duration: 2
        }
      ],
      criteria: {
        currentState: p.DIALOG_CHOICE_1,
        dialogChoice1: te.LAWFUL
      },
      once: true,
      autoPlay: false,
      priority: 100,
      delay: 1,
      onComplete: (g) => {
        g.setState({
          dialogChoice1Response: true
        });
      }
    },
    dialogChoice1EmpathResponse: {
      id: "dialogChoice1EmpathResponse",
      audio: "./audio/dialog/resp-1_empath_oui-and-ive-made-so-many.mp3",
      preload: false,
      captions: [
        {
          text: "Oui, and I've made *so* many.",
          duration: 2.5
        }
      ],
      criteria: {
        currentState: p.DIALOG_CHOICE_1,
        dialogChoice1: te.EMPATH,
        dialogChoice1Response: true
      },
      once: true,
      autoPlay: true,
      priority: 99,
      delay: 0.5,
      onComplete: (g) => {
        g.setState({
          currentState: p.DRIVE_BY_PREAMBLE
        });
      }
    },
    dialogChoice1PsychologistResponse: {
      id: "dialogChoice1PsychologistResponse",
      audio: "./audio/dialog/resp-1_psych_im-sure-youll-educate-me.mp3",
      preload: false,
      captions: [
        {
          text: "I'm sure you will educate me...",
          duration: 2
        }
      ],
      criteria: {
        currentState: p.DIALOG_CHOICE_1,
        dialogChoice1: te.PSYCHOLOGIST,
        dialogChoice1Response: true
      },
      once: true,
      autoPlay: true,
      priority: 99,
      delay: 0.5,
      onComplete: (g) => {
        g.setState({
          currentState: p.DRIVE_BY_PREAMBLE
        });
      }
    },
    dialogChoice1LawfulResponse: {
      id: "dialogChoice1LawfulResponse",
      audio: "./audio/dialog/resp-1_lawful_hm-quite-the-lawman-you-are.mp3",
      preload: false,
      captions: [
        {
          text: "Hm, quite the lawman you are.",
          duration: 2
        }
      ],
      criteria: {
        currentState: p.DIALOG_CHOICE_1,
        dialogChoice1: te.LAWFUL,
        dialogChoice1Response: true
      },
      once: true,
      autoPlay: true,
      priority: 99,
      delay: 0.5,
      onComplete: (g) => {
        g.setState({
          currentState: p.DRIVE_BY_PREAMBLE
        });
      }
    },
    coleGoodKitty: {
      id: "coleGoodKitty",
      audio: "./audio/dialog/cole-aw-good-kitty.mp3",
      preload: false,
      captions: [
        {
          text: "Aw, good kitty.",
          duration: 2
        }
      ],
      criteria: {
        currentState: p.CAT_DIALOG_CHOICE,
        catDialogChoice: te.CAT_GOOD_KITTY
      },
      once: true,
      autoPlay: false,
      priority: 100,
      delay: 0.5
    },
    coleDamnCats: {
      id: "coleDamnCats",
      audio: "./audio/dialog/cole-damn-cats.mp3",
      preload: false,
      captions: [
        {
          text: "Damn cats.",
          duration: 2
        }
      ],
      criteria: {
        currentState: p.CAT_DIALOG_CHOICE,
        catDialogChoice: te.CAT_DAMN_CATS
      },
      once: true,
      autoPlay: false,
      priority: 100,
      delay: 0.5
    },
    theyreHereForYou: {
      id: "theyreHereForYou",
      audio: "./audio/dialog/04-theyre-here-for-you-duck-and-cover-now.mp3",
      preload: false,
      captions: [
        {
          text: "They're here for you!",
          duration: 1.65
        },
        {
          text: "Duck and cover, now!",
          duration: 2
        }
      ],
      criteria: {
        currentState: p.DRIVE_BY_PREAMBLE
      },
      once: true,
      autoPlay: true,
      priority: 98,
      delay: 2.125,
      onComplete: (g) => {
        g.setState({
          currentState: p.DRIVE_BY
        });
      }
    },
    postDriveBy: {
      id: "postDriveBy",
      audio: "./audio/dialog/leclaire-so-did-you-survive.mp3",
      captions: [
        {
          text: "So...",
          duration: 1
        },
        {
          text: "Did you survive?",
          duration: 1.75
        },
        {
          text: "Then hightail it!",
          duration: 1.5
        },
        {
          text: "There's a room nearby.",
          duration: 1.5
        },
        {
          text: "I've something to show you.",
          duration: 2
        }
      ],
      criteria: {
        currentState: p.POST_DRIVE_BY
      },
      once: true,
      autoPlay: true,
      priority: 100,
      delay: 0.5,
      preload: false
    },
    itsLeCzar: {
      id: "itsLeCzar",
      audio: "./audio/dialog/leclaire-its-le-czar.mp3",
      captions: [
        {
          text: "Cole,",
          duration: 1
        },
        {
          text: "it's Le Czar...",
          duration: 1.75
        },
        {
          text: "He's gone bad!",
          duration: 1
        },
        {
          text: "He was always bad!",
          duration: 1.55
        },
        {
          text: "Non, c'est diff\xE9rent...",
          duration: 1.75
        },
        {
          text: "Under the spell of a mad cultist.",
          duration: 3.75
        },
        {
          text: "And that thing...",
          duration: 1.5
        }
      ],
      criteria: {
        currentState: p.OFFICE_PHONE_ANSWERED
      },
      once: true,
      autoPlay: true,
      priority: 100,
      delay: 0.5,
      preload: false,
      onComplete: (g) => {
        g.setState({
          currentState: p.PRE_VIEWMASTER
        });
      }
    },
    preViewmaster: {
      id: "preViewmaster",
      audio: "./audio/dialog/leclaire-une-technologie.mp3",
      captions: [
        {
          text: "Une technologie incroyable...",
          duration: 2
        },
        {
          text: "It can show you many things.",
          duration: 2
        }
      ],
      criteria: {
        currentState: p.PRE_VIEWMASTER
      },
      once: true,
      autoPlay: true,
      preload: false,
      onComplete: (g) => {
        g.setState({
          currentState: p.VIEWMASTER
        });
      }
    },
    butIDont: {
      id: "butIDont",
      audio: "./audio/dialog/cole-but-i-dont.mp3",
      captions: [
        {
          text: "But I don't...",
          duration: 3
        },
        {
          text: "Ah...",
          duration: 2.75
        },
        {
          text: "Gee, this... this is...",
          duration: 2.75
        },
        {
          text: "This is really something!",
          duration: 3
        }
      ],
      criteria: {
        currentState: p.VIEWMASTER
      },
      once: true,
      autoPlay: true,
      delay: 0.5,
      preload: false,
      onComplete: (g) => {
        g.setState({
          currentState: p.VIEWMASTER_COLOR
        });
      }
    },
    itIsBeautiful: {
      id: "itIsBeautiful",
      audio: "./audio/dialog/leclaire-it-is-beautiful.mp3",
      captions: [
        {
          text: "It is beautiful, non?",
          duration: 2
        },
        {
          text: "And yet they can control your perception.",
          duration: 3.25
        },
        {
          text: "Observe.",
          duration: 1.5
        }
      ],
      criteria: {
        currentState: p.VIEWMASTER_COLOR
      },
      once: true,
      autoPlay: true,
      delay: 0.5,
      preload: false,
      onComplete: (g) => {
        g.setState({
          currentState: p.VIEWMASTER_DISSOLVE
        });
      }
    },
    whatTheHeck: {
      id: "whatTheHeck",
      audio: "./audio/dialog/cole-what-the-heck.mp3",
      captions: [
        {
          text: "What the heck?!",
          duration: 1.5
        }
      ],
      criteria: {
        currentState: p.VIEWMASTER_DISSOLVE
      },
      once: true,
      autoPlay: true,
      delay: 4.5,
      preload: false,
      onComplete: (g) => {
        g.setState({
          currentState: p.VIEWMASTER_DIALOG
        });
      }
    },
    thatWasNothing: {
      id: "thatWasNothing",
      audio: "./audio/dialog/leclaire-that-was-nothing.mp3",
      captions: [
        {
          text: "That was nothing...",
          duration: 1.5
        }
      ],
      criteria: {
        currentState: p.VIEWMASTER_DIALOG
      },
      once: true,
      autoPlay: true,
      delay: 1,
      preload: false,
      onComplete: (g) => {
        g.setState({
          currentState: p.VIEWMASTER_HELL
        });
      }
    },
    hachiMachi: {
      id: "hachiMachi",
      audio: "./audio/dialog/cole-hachi-machi.mp3",
      captions: [
        {
          text: "Hachi machi...",
          duration: 2.5
        },
        {
          text: "",
          duration: 0.5
        },
        {
          text: "Is this real?",
          duration: 2.5
        }
      ],
      criteria: {
        currentState: p.VIEWMASTER_HELL
      },
      once: true,
      autoPlay: true,
      delay: 4,
      preload: false,
      playNext: "remainHereTooLong"
    },
    remainHereTooLong: {
      id: "remainHereTooLong",
      audio: "./audio/dialog/leclaire-is-anything.mp3",
      captions: [
        {
          text: "Is anything?",
          duration: 1.5
        },
        {
          text: "They can make of this world a hellish place.",
          duration: 3.5
        },
        {
          text: "Remain here too long",
          duration: 2.5
        },
        {
          text: "And you'll see the world only as they wish it.",
          duration: 3.5
        },
        {
          text: "Mind control!",
          duration: 1.75
        },
        {
          text: "Exactement!",
          duration: 1.75
        }
      ],
      once: true,
      preload: false,
      onComplete: (g) => {
        g.setState({
          currentState: p.POST_VIEWMASTER
        });
      }
    },
    cat2DialogFriend: {
      id: "cat2DialogFriend",
      audio: "./audio/dialog/cole-theres-my-friend.mp3",
      captions: [
        {
          text: "Hey, there's my friend.",
          duration: 2.3
        }
      ],
      criteria: {
        currentState: p.CAT_DIALOG_CHOICE_2,
        catDialogChoice2: te.CAT_MY_FRIEND
      },
      once: true,
      autoPlay: false,
      delay: 0.5,
      preload: false,
      onComplete: (g) => {
        g.setState({
          currentState: p.PRE_EDISON
        });
      }
    },
    cat2DialogGit: {
      id: "cat2DialogGit",
      audio: "./audio/dialog/cole-you-again-git.mp3",
      captions: [
        {
          text: "You again? Git!",
          duration: 2.3
        }
      ],
      criteria: {
        currentState: p.CAT_DIALOG_CHOICE_2,
        catDialogChoice2: te.CAT_GIT
      },
      once: true,
      autoPlay: false,
      delay: 0.5,
      preload: false,
      onComplete: (g) => {
        g.setState({
          currentState: p.PRE_EDISON
        });
      }
    },
    whatColeFocus: {
      id: "whatColeFocus",
      audio: "./audio/dialog/leclaire-what-cole-focus.mp3",
      captions: [
        {
          text: "What?",
          duration: 1.5
        },
        {
          text: "Cole, focus!",
          duration: 1.5
        },
        {
          text: "This time we've got him - on the record!",
          duration: 3
        },
        {
          text: "Check the Edison...",
          duration: 1.5
        }
      ],
      once: true,
      autoPlay: true,
      preload: false,
      criteria: {
        currentState: p.PRE_EDISON
      },
      onComplete: (g) => {
        g.setState({
          currentState: p.EDISON
        });
      }
    },
    iGetMyCorners: {
      id: "iGetMyCorners",
      audio: "./audio/dialog/czar-i-get-my-corners.mp3",
      captions: [
        {
          text: "I get my corners,",
          duration: 2
        },
        {
          text: "the drug trade,",
          duration: 2
        },
        {
          text: "the speakeasies,",
          duration: 2
        },
        {
          text: "and you get...",
          duration: 2.5
        },
        {
          text: "what you want, eh? [laughs]",
          duration: 2
        },
        {
          text: "",
          duration: 1.5
        },
        {
          text: "Quite.",
          duration: 1.5
        }
      ],
      once: true,
      autoPlay: true,
      delay: 5,
      preload: false,
      criteria: {
        currentState: p.EDISON
      },
      onComplete: (g) => {
        g.setState({
          currentState: p.DIALOG_CHOICE_2
        });
      }
    },
    dialogChoice2Empath: {
      id: "dialogChoice2Empath",
      audio: "./audio/dialog/choice-2_empath_caught-red-handed.mp3",
      preload: false,
      captions: [
        {
          text: "Why, we've caught the Czar red-handed!",
          duration: 2.5
        }
      ],
      criteria: {
        currentState: p.DIALOG_CHOICE_2,
        dialogChoice2: te.EMPATH
      },
      once: true,
      autoPlay: false,
      priority: 100,
      delay: 0.5,
      playNext: "dialogChoice2EmpathResponse",
      onComplete: (g) => {
        g.setState({
          dialogChoice2Response: true
        });
      }
    },
    dialogChoice2Psychologist: {
      id: "dialogChoice2Psychologist",
      audio: "./audio/dialog/choice-2_psych_cant-say-who.mp3",
      preload: false,
      captions: [
        {
          text: "I can't say who's responsible yet.",
          duration: 2.5
        }
      ],
      criteria: {
        currentState: p.DIALOG_CHOICE_2,
        dialogChoice2: te.PSYCHOLOGIST
      },
      once: true,
      autoPlay: false,
      priority: 100,
      delay: 0.5,
      playNext: "dialogChoice2PsychologistResponse",
      onComplete: (g) => {
        g.setState({
          dialogChoice2Response: true
        });
      }
    },
    dialogChoice2Lawful: {
      id: "dialogChoice2Lawful",
      audio: "./audio/dialog/choice-2_lawful_some-ruse.mp3",
      preload: false,
      captions: [
        {
          text: "How do I know this isn't some ruse?",
          duration: 2.5
        }
      ],
      criteria: {
        currentState: p.DIALOG_CHOICE_2,
        dialogChoice2: te.LAWFUL
      },
      once: true,
      autoPlay: false,
      priority: 100,
      delay: 0.5,
      playNext: "dialogChoice2LawfulResponse",
      onComplete: (g) => {
        g.setState({
          dialogChoice2Response: true
        });
      }
    },
    dialogChoice2EmpathResponse: {
      id: "dialogChoice2EmpathResponse",
      audio: "./audio/dialog/resp-2_empath_merci-cole.mp3",
      preload: false,
      captions: [
        {
          text: "Merci, Cole!",
          duration: 1.5
        },
        {
          text: "I knew you would help!",
          duration: 2
        }
      ],
      once: true,
      delay: 0,
      onComplete: (g) => {
        g.setState({
          currentState: p.CZAR_STRUGGLE
        });
      }
    },
    dialogChoice2PsychologistResponse: {
      id: "dialogChoice2PsychologistResponse",
      audio: "./audio/dialog/resp-2_psych_youre-kidding.mp3",
      preload: false,
      captions: [
        {
          text: "You're kidding... It's so obvious!",
          duration: 3
        }
      ],
      once: true,
      delay: 0,
      onComplete: (g) => {
        g.setState({
          currentState: p.CZAR_STRUGGLE
        });
      }
    },
    dialogChoice2LawfulResponse: {
      id: "dialogChoice2LawfulResponse",
      audio: "./audio/dialog/resp-2_lawful_those-goons.mp3",
      preload: false,
      captions: [
        {
          text: "Those goons were going to hang this on you, dummy!",
          duration: 2
        }
      ],
      once: true,
      delay: 0,
      onComplete: (g) => {
        g.setState({
          currentState: p.CZAR_STRUGGLE
        });
      }
    },
    bravoDetective: {
      id: "bravoDetective",
      audio: "./audio/dialog/czar-bravo-detective.mp3",
      captions: [
        {
          text: "[LeClaire screams]",
          duration: 3
        },
        {
          text: "[A commotion]",
          duration: 3.5
        },
        {
          text: "Bravo, detective!",
          duration: 2.5
        },
        {
          text: "Nothing gets by you.",
          duration: 3
        },
        {
          text: "This... is the Czar.",
          duration: 4
        }
      ],
      criteria: {
        currentState: p.CZAR_STRUGGLE
      },
      once: true,
      autoPlay: true,
      priority: 100,
      preload: false,
      playNext: "twoBitCrook"
    },
    twoBitCrook: {
      id: "twoBitCrook",
      audio: "./audio/dialog/cole-you-mean-the-two-bit-crook.mp3",
      captions: [
        {
          text: "You mean the two-bit crook what fanicies himself a king?",
          duration: 4
        },
        {
          text: "The one way in over his head with cultists and madmen?",
          duration: 3
        },
        {
          text: "That Czar?",
          duration: 2
        }
      ],
      once: true,
      priority: 100,
      preload: false,
      playNext: "theVerySame"
    },
    theVerySame: {
      id: "theVerySame",
      audio: "./audio/dialog/czar-the-very-same.mp3",
      captions: [
        {
          text: "The very same, Cole.",
          duration: 2
        },
        {
          text: "Now meet my new friend.",
          duration: 2
        },
        {
          text: "Oh mister Shadow?",
          duration: 2
        }
      ],
      once: true,
      priority: 100,
      preload: false,
      onComplete: (g) => {
        g.setState({
          currentState: p.SHOULDER_TAP
        });
      }
    },
    interuptHisRitual: {
      id: "interuptHisRitual",
      audio: "./audio/dialog/leclaire-you-have-to-interrupt-his-ritual.mp3",
      captions: [
        {
          text: "Go, you have to interrupt his ritual!",
          duration: 2.25
        },
        {
          text: "Dark runes manifest throughout the hall!",
          duration: 2.5
        },
        {
          text: "Use the View-Master to find them,",
          duration: 1.75
        },
        {
          text: "but wear it too long and you'll lose your mind!",
          duration: 2.75
        }
      ],
      criteria: {
        currentState: p.CURSOR
      },
      autoPlay: true,
      once: true,
      preload: false,
      priority: 100,
      delay: 1.5
    },
    drawingFailure1: {
      id: "drawingFailure1",
      audio: "./audio/dialog/leclaire-drawing-failure-1.mp3",
      captions: [
        {
          text: "That was wrong!",
          duration: 1.5
        }
      ],
      criteria: {
        currentState: {
          $in: [
            p.CURSOR,
            p.CURSOR_FINAL
          ]
        },
        lastDrawingSuccess: false,
        drawingFailureCount: {
          $mod: [
            3,
            1
          ],
          $gt: 0
        }
      },
      autoPlay: true,
      once: false,
      priority: 90,
      preload: false
    },
    drawingFailure2: {
      id: "drawingFailure2",
      audio: "./audio/dialog/leclaire-drawing-failure-2.mp3",
      captions: [
        {
          text: "Quoi?",
          duration: 1.75
        },
        {
          text: "Try again!",
          duration: 1.5
        }
      ],
      criteria: {
        currentState: {
          $in: [
            p.CURSOR,
            p.CURSOR_FINAL
          ]
        },
        lastDrawingSuccess: false,
        drawingFailureCount: {
          $mod: [
            3,
            2
          ],
          $gt: 0
        }
      },
      autoPlay: true,
      once: false,
      priority: 90,
      preload: false
    },
    drawingFailure3: {
      id: "drawingFailure3",
      audio: "./audio/dialog/leclaire-drawing-failure-3.mp3",
      captions: [
        {
          text: "You must look for the symbol!",
          duration: 1.8
        },
        {
          text: "Use the View-Master!",
          duration: 1.8
        }
      ],
      criteria: {
        currentState: {
          $in: [
            p.CURSOR,
            p.CURSOR_FINAL
          ]
        },
        lastDrawingSuccess: false,
        drawingFailureCount: {
          $mod: [
            3,
            0
          ],
          $gt: 0
        }
      },
      autoPlay: true,
      once: false,
      priority: 90,
      preload: false
    },
    drawingSuccess1: {
      id: "drawingSuccess1",
      audio: "./audio/dialog/leclaire-drawing-success-1.mp3",
      captions: [
        {
          text: "It worked! Now find the next.",
          duration: 2.75
        }
      ],
      criteria: {
        currentState: {
          $in: [
            p.CURSOR,
            p.CURSOR_FINAL
          ]
        },
        lastDrawingSuccess: true,
        drawingSuccessCount: 1
      },
      autoPlay: true,
      once: true,
      priority: 100,
      preload: false
    },
    drawingSuccess2: {
      id: "drawingSuccess2",
      audio: "./audio/dialog/leclaire-drawing-success-2.mp3",
      captions: [
        {
          text: "Yes! Just one more.",
          duration: 2
        }
      ],
      criteria: {
        currentState: {
          $in: [
            p.CURSOR,
            p.CURSOR_FINAL
          ]
        },
        lastDrawingSuccess: true,
        drawingSuccessCount: 2
      },
      autoPlay: true,
      once: true,
      priority: 100,
      preload: false
    },
    coleUghGimmeASec: {
      id: "coleUghGimmeASec",
      audio: "./audio/dialog/cole-ugh-gimme-a-sec.mp3",
      captions: [
        {
          text: "Ugh...",
          duration: 2
        },
        {
          text: "[coughing]",
          duration: 4
        },
        {
          text: "Gimme a sec...",
          duration: 2
        }
      ],
      criteria: {
        currentState: {
          $in: [
            p.CURSOR,
            p.CURSOR_FINAL
          ]
        },
        viewmasterOverheatDialogIndex: 0,
        viewmasterInsanityIntensity: {
          $gte: nt
        }
      },
      autoPlay: true,
      once: false,
      priority: 95,
      preload: false
    },
    coleUghItsTooMuch: {
      id: "coleUghItsTooMuch",
      audio: "./audio/dialog/cole-ugh-its-too-much.mp3",
      captions: [
        {
          text: "Ugh...",
          duration: 2
        },
        {
          text: "[coughing]",
          duration: 4
        },
        {
          text: "It's too much...",
          duration: 2
        },
        {
          text: "Just a quick break.",
          duration: 2
        }
      ],
      criteria: {
        currentState: {
          $in: [
            p.CURSOR,
            p.CURSOR_FINAL
          ]
        },
        viewmasterOverheatDialogIndex: 1,
        viewmasterInsanityIntensity: {
          $gte: nt
        }
      },
      autoPlay: true,
      once: false,
      priority: 95,
      preload: false
    },
    heWonThatRound: {
      id: "heWonThatRound",
      audio: "./audio/dialog/cole-okay-he-won-that-round.mp3",
      captions: [
        {
          text: "Ugh...",
          duration: 2
        },
        {
          text: "Okay...",
          duration: 2.5
        },
        {
          text: "He won that round.",
          duration: 1.5
        }
      ],
      criteria: {
        currentState: p.WAKING_UP
      },
      once: true,
      autoPlay: true,
      priority: 120,
      delay: 0,
      preload: false
    },
    hesTiedUsUp: {
      id: "hesTiedUsUp",
      videoId: "hesTiedUsUp",
      captions: [
        {
          text: "Cole!",
          duration: 1.5
        },
        {
          text: "He's tied us up!",
          duration: 2.5
        }
      ],
      once: true,
      autoPlay: true,
      priority: 110,
      delay: 0
    },
    soUnkind: {
      id: "soUnkind",
      videoId: "soUnkind",
      captions: [
        {
          text: "[Footsteps]",
          startTime: 3,
          duration: 2
        },
        {
          text: "Quiet!",
          startTime: 6,
          duration: 1.5
        },
        {
          text: "So unkind you were to this innocent woman...",
          startTime: 9.25,
          duration: 5.75
        },
        {
          text: "But soon you will both see the world just as we do.",
          startTime: 16,
          duration: 7
        }
      ],
      autoPlay: true,
      once: false,
      priority: 100
    },
    shadowQuietTheGirl: {
      id: "shadowQuietTheGirl",
      videoId: "shadowQuietTheGirl",
      captions: [
        {
          text: "[Footsteps]",
          startTime: 1,
          duration: 2
        },
        {
          text: "Quiet!",
          startTime: 3,
          duration: 2
        },
        {
          text: "The girl had nothing to do with it, just as you said.",
          startTime: 6.25,
          duration: 5.75
        },
        {
          text: "But soon you will both see the world just as we do.",
          startTime: 13,
          duration: 7
        }
      ],
      autoPlay: true,
      once: false,
      priority: 100
    },
    shadowAmplifications: {
      id: "shadowAmplifications",
      videoId: "shadowAmplifications",
      captions: [
        {
          text: "You see, we have made certain...",
          startTime: 4,
          duration: 4
        },
        {
          text: "Amplifications.",
          startTime: 7.5,
          duration: 5.75,
          emitEvent: "shadow:amplifications"
        },
        {
          text: "Let us try.",
          startTime: 10.5,
          duration: 4
        }
      ],
      once: true,
      autoPlay: true,
      priority: 90
    },
    coleHeyIKnewYouWereMyPal: {
      id: "coleHeyIKnewYouWereMyPal",
      audio: "./audio/dialog/cole-hey-i-knew-you-were-my-pal.mp3",
      captions: [
        {
          text: "Hey, I knew you were my pal.",
          duration: 3.5
        }
      ],
      criteria: {
        currentState: p.CAT_SAVE
      },
      autoPlay: true,
      once: true,
      priority: 100,
      delay: 1,
      preload: false,
      onComplete: (g) => {
        g.setState({
          currentState: p.CURSOR
        });
      }
    }
  };
  function Xo(g, e = /* @__PURE__ */ new Set()) {
    const i = Object.values(Ut).filter((o) => o.autoPlay === true).sort((o, n) => (n.priority || 0) - (o.priority || 0)), s = [];
    for (const o of i) o.once && e.has(o.id) || o.criteria && X(g, o.criteria) && s.push(o);
    return s;
  }
  const It = Object.freeze(Object.defineProperty({
    __proto__: null,
    VIEWMASTER_OVERHEAT_THRESHOLD: nt,
    default: Ut,
    dialogTracks: Ut,
    getDialogsForState: Xo
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  class Ko {
    constructor(e = {}) {
      this.sfxManager = e.sfxManager, this.gameManager = e.gameManager, this.videoManager = e.videoManager, this.loadingScreen = e.loadingScreen, this.captionElement = e.captionElement || this.createCaptionElement(), e.captionElement || document.body.appendChild(this.captionElement), e.captionStyle ? this.setCaptionStyle(e.captionStyle) : this.applyDefaultCaptionStyle(), this.baseVolume = e.audioVolume || 0.8, this.audioVolume = this.baseVolume, this.activeDialogs = /* @__PURE__ */ new Map(), this.unifiedCaptionQueue = [], this.currentCaptionIndex = 0, this.captionTimer = 0, this.queueNeedsRebuild = false, this.isPlaying = false, this.captionsEnabled = true, this.isFadingOut = false, this.fadeOutDuration = 0, this.fadeOutTimer = 0, this.fadeOutStartVolume = 0, this.logger = new N("DialogManager", false), this.pendingDialogs = /* @__PURE__ */ new Map(), this.preloadedAudio = /* @__PURE__ */ new Map(), this.deferredDialogs = /* @__PURE__ */ new Map(), this.prefetchedAudio = /* @__PURE__ */ new Map(), this.prefetchBudgetMax = 25 * 1024 * 1024, this.prefetchBudgetUsed = 0, this.prefetchQueue = [], this._getDialogsForState = null, this._dialogTracks = null, q(() => Promise.resolve().then(() => It), void 0).then((t) => {
        this._getDialogsForState = t.getDialogsForState, this._dialogTracks = t.dialogTracks;
      }), this.sfxManager && (this.audioVolume = this.baseVolume * this.sfxManager.getMasterVolume()), this.eventListeners = {
        "dialog:play": [],
        "dialog:stop": [],
        "dialog:complete": [],
        "dialog:caption": []
      }, this.gameManager && this.setupStateListener();
    }
    _updateVideoCaptionTimes() {
      for (let e = 0; e < this.unifiedCaptionQueue.length; e++) {
        const t = this.unifiedCaptionQueue[e];
        if (t.sourceType === "video") {
          const i = this.activeDialogs.get(t.dialogId);
          if (i && i.videoId && this.videoManager) {
            const s = this.videoManager.getVideoPlayer(i.videoId);
            if (s && s.video && s.isPlaying) {
              let o = i.videoStartTime;
              (!o || o === null) && (o = Date.now() - s.video.currentTime * 1e3, i.videoStartTime = o, this.logger.warn(`videoStartTime was null for "${t.dialogId}" - recalculated to ${new Date(o).toLocaleTimeString()} (this should have been set when dialog triggered!)`)), t.absoluteStartTime = o + t.relativeTime * 1e3, t.absoluteEndTime = t.absoluteStartTime + (t.caption.duration || 3) * 1e3;
            }
          }
        }
      }
      this.unifiedCaptionQueue.sort((e, t) => e.absoluteStartTime - t.absoluteStartTime);
    }
    _rebuildUnifiedCaptionQueue() {
      this.unifiedCaptionQueue = [];
      for (const [t, i] of this.activeDialogs.entries()) {
        const { dialogData: s, startTime: o, videoId: n, videoStartTime: r } = i, a = s.captions || [];
        if (n && this.videoManager) {
          const l = this.videoManager.getVideoPlayer(n);
          if (l && l.video && l.isPlaying) {
            let h = r;
            if (!h || h === null) {
              const u = l.video.currentTime;
              h = Date.now() - u * 1e3, i.videoStartTime = h, this.logger.log(`Calculated videoStartTime for "${t}" (video "${n}"): video currentTime=${u.toFixed(2)}s, videoStartTime=${new Date(h).toLocaleTimeString()}`);
            }
            const c = h;
            let d = 0;
            for (const u of a) {
              let m;
              u.startTime !== void 0 ? m = u.startTime : m = d, d = m + (u.duration || 3);
              const x = c + m * 1e3, w = x + (u.duration || 3) * 1e3, y = Date.now(), v = y >= w, b = y >= x && y < w;
              (b || !v) && this.logger.log(`Adding caption "${u.text.substring(0, 30)}..." for "${t}" - relative: ${m.toFixed(2)}s, absolute: ${new Date(x).toLocaleTimeString()} - ${new Date(w).toLocaleTimeString()}${v ? " (already expired)" : b ? " (currently active)" : ""}`), this.unifiedCaptionQueue.push({
                caption: u,
                dialogId: t,
                absoluteStartTime: x,
                absoluteEndTime: w,
                sourceType: "video",
                relativeTime: m
              });
            }
          }
        } else if (i.audio) {
          let l = 0;
          try {
            i.audio.seek && (l = i.audio.seek() || 0);
          } catch {
          }
          let h = 0;
          for (const c of a) {
            const d = c.duration || 3, u = o + h * 1e3, m = u + d * 1e3;
            l <= h + d && this.unifiedCaptionQueue.push({
              caption: c,
              dialogId: t,
              absoluteStartTime: u,
              absoluteEndTime: m,
              sourceType: "audio",
              relativeTime: h
            }), h += d;
          }
        } else {
          let l = 0;
          for (const h of a) {
            const c = h.duration || 3, d = o + l * 1e3, u = d + c * 1e3;
            this.unifiedCaptionQueue.push({
              caption: h,
              dialogId: t,
              absoluteStartTime: d,
              absoluteEndTime: u,
              sourceType: "caption-only",
              relativeTime: l
            }), l += c;
          }
        }
      }
      this.unifiedCaptionQueue.sort((t, i) => t.absoluteStartTime - i.absoluteStartTime);
      const e = Date.now();
      this.currentCaptionIndex = this.unifiedCaptionQueue.length;
      for (let t = 0; t < this.unifiedCaptionQueue.length; t++) {
        const i = this.unifiedCaptionQueue[t];
        if (e >= i.absoluteStartTime && e < i.absoluteEndTime) {
          this.currentCaptionIndex = t, this.showCaption(i.caption), this.logger.log(`Showing active caption "${i.caption.text.substring(0, 30)}..." (${i.dialogId}) at queue rebuild`);
          break;
        }
      }
      this.currentCaptionIndex >= this.unifiedCaptionQueue.length && this.hideCaption();
    }
    async preloadDialogs(e) {
      var _a3, _b2, _c, _d;
      if (!e) return;
      let t = null;
      const i = /* @__PURE__ */ new Set(), { isDebugSpawnActive: s, getDebugSpawnState: o } = await q(async () => {
        const { isDebugSpawnActive: a, getDebugSpawnState: l } = await Promise.resolve().then(() => Pt);
        return {
          isDebugSpawnActive: a,
          getDebugSpawnState: l
        };
      }, void 0), { getDialogsForState: n } = await q(async () => {
        const { getDialogsForState: a } = await Promise.resolve().then(() => It);
        return {
          getDialogsForState: a
        };
      }, void 0);
      s() && (t = o(), t && (n(t, /* @__PURE__ */ new Set()).forEach((l) => {
        i.add(l.id);
      }), i.size > 0 && this.logger.log(`[Debug] Forcing preload for ${i.size} matching dialogs (state: ${t.currentState}): ${Array.from(i).join(", ")}`)));
      const r = ((_b2 = (_a3 = this.gameManager) == null ? void 0 : _a3.getState()) == null ? void 0 : _b2.isIOS) || typeof window < "u" && ((_d = (_c = window.gameManager) == null ? void 0 : _c.getState()) == null ? void 0 : _d.isIOS) || false;
      Object.values(e).forEach((a) => {
        if (!a.audio) return;
        let l = i.has(a.id) ? true : a.preload !== void 0 ? a.preload : true;
        if (r && l) {
          const c = this._calculateDialogPriority(a);
          this.prefetchQueue.push({
            dialog: a,
            priority: c
          }), this.prefetchQueue.sort((d, u) => d.priority - u.priority), this.logger.log(`iOS: Added dialog "${a.id}" to prefetch queue (priority: ${c})`), this._processPrefetchQueue();
          return;
        }
        if (!l) {
          this.deferredDialogs.set(a.id, a), this.logger.log(`Deferred loading for dialog "${a.id}"`);
          return;
        }
        this.loadingScreen && l && this.loadingScreen.registerTask(`dialog_${a.id}`, 1);
        const h = new Y.Howl({
          src: [
            a.audio
          ],
          volume: this.audioVolume,
          preload: true,
          onload: () => {
            this.logger.log(`Loaded dialog "${a.id}"`), this.loadingScreen && l && this.loadingScreen.completeTask(`dialog_${a.id}`);
          },
          onloaderror: (c, d) => {
            this.logger.error(`Failed to load dialog "${a.id}":`, d), this.loadingScreen && l && this.loadingScreen.completeTask(`dialog_${a.id}`);
          }
        });
        this.preloadedAudio.set(a.id, h), this.logger.log(`Preloaded dialog "${a.id}"`);
      });
    }
    _calculateDialogPriority(e) {
      if (!e.criteria) return 9999;
      const t = e.criteria;
      if (t.currentState !== void 0) {
        if (typeof t.currentState == "number") return t.currentState;
        if (t.currentState.$gte !== void 0) return t.currentState.$gte;
        if (t.currentState.$in !== void 0 && Array.isArray(t.currentState.$in)) return Math.min(...t.currentState.$in);
        if (t.currentState.$eq !== void 0) return t.currentState.$eq;
      }
      return 50;
    }
    async _processPrefetchQueue() {
      if (!(this._processingPrefetchQueue || this.prefetchQueue.length === 0)) {
        for (this._processingPrefetchQueue = true; this.prefetchQueue.length > 0; ) {
          if (this.prefetchBudgetMax - this.prefetchBudgetUsed <= 0) {
            this.logger.log(`Dialog prefetch budget exhausted (${(this.prefetchBudgetUsed / 1024 / 1024).toFixed(2)}MB / ${(this.prefetchBudgetMax / 1024 / 1024).toFixed(2)}MB), waiting for assets to clear`);
            break;
          }
          const { dialog: t } = this.prefetchQueue.shift();
          this.prefetchedAudio.has(t.id) || this.preloadedAudio.has(t.id) || await this._prefetchDialog(t);
        }
        this._processingPrefetchQueue = false;
      }
    }
    async _prefetchDialog(e) {
      if (e.audio) {
        this.loadingScreen && this.loadingScreen.registerTask(`dialog_${e.id}`, 1);
        try {
          const t = await fetch(e.audio);
          if (!t.ok) throw new Error(`HTTP ${t.status}`);
          const i = await t.blob(), s = i.size, o = this.prefetchBudgetMax - this.prefetchBudgetUsed;
          if (s > o) {
            this.logger.warn(`Dialog "${e.id}" (${(s / 1024 / 1024).toFixed(2)}MB) exceeds available budget (${(o / 1024 / 1024).toFixed(2)}MB), deferring`), this.deferredDialogs.set(e.id, e), this.loadingScreen && this.loadingScreen.completeTask(`dialog_${e.id}`);
            return;
          }
          const n = URL.createObjectURL(i);
          this.prefetchedAudio.set(e.id, {
            blob: i,
            blobUrl: n,
            dialogData: e,
            size: s
          }), this.prefetchBudgetUsed += s, this.logger.log(`Prefetched dialog "${e.id}" (${(s / 1024 / 1024).toFixed(2)}MB, budget: ${(this.prefetchBudgetUsed / 1024 / 1024).toFixed(2)}MB / ${(this.prefetchBudgetMax / 1024 / 1024).toFixed(2)}MB)`), this.loadingScreen && this.loadingScreen.completeTask(`dialog_${e.id}`), this._processPrefetchQueue();
        } catch (t) {
          this.logger.error(`Failed to prefetch dialog "${e.id}":`, t), this.loadingScreen && this.loadingScreen.completeTask(`dialog_${e.id}`), this.deferredDialogs.set(e.id, e);
        }
      }
    }
    _createHowlFromPrefetched(e, t) {
      const { blobUrl: i } = t;
      return new Promise((s, o) => {
        const n = new Y.Howl({
          src: [
            i
          ],
          volume: this.audioVolume,
          preload: true,
          onload: () => {
            this.logger.log(`Howl loaded from prefetched blob for dialog "${e}"`), t && t.size && (this.prefetchBudgetUsed -= t.size, this.logger.log(`Freed ${(t.size / 1024 / 1024).toFixed(2)}MB from dialog budget (now: ${(this.prefetchBudgetUsed / 1024 / 1024).toFixed(2)}MB / ${(this.prefetchBudgetMax / 1024 / 1024).toFixed(2)}MB)`), URL.revokeObjectURL(t.blobUrl)), this.prefetchedAudio.delete(e), this._processPrefetchQueue(), this.preloadedAudio.set(e, n), s(n);
          },
          onloaderror: (r, a) => {
            this.logger.error(`Failed to load Howl from prefetched blob for dialog "${e}":`, a), t && t.size && (this.prefetchBudgetUsed -= t.size, URL.revokeObjectURL(t.blobUrl)), this.prefetchedAudio.delete(e), this._processPrefetchQueue(), o(a);
          }
        });
      });
    }
    async loadDeferredDialogs() {
      var _a3, _b2;
      const e = ((_b2 = (_a3 = this.gameManager) == null ? void 0 : _a3.getState()) == null ? void 0 : _b2.isIOS) || false;
      if (this.prefetchedAudio.size > 0) {
        this.logger.log(`Creating Howl instances from ${this.prefetchedAudio.size} prefetched dialogs`);
        for (const [t, i] of this.prefetchedAudio) try {
          await this._createHowlFromPrefetched(t, i), e && await new Promise((s) => setTimeout(s, 50));
        } catch (s) {
          this.logger.error(`Failed to create Howl from prefetched dialog "${t}":`, s), i && i.size && (this.prefetchBudgetUsed -= i.size, URL.revokeObjectURL(i.blobUrl)), this.deferredDialogs.set(t, i.dialogData);
        }
        this.prefetchedAudio.clear(), this._processPrefetchQueue();
      }
      if (this.deferredDialogs.size !== 0) {
        if (this.logger.log(`Loading ${this.deferredDialogs.size} deferred dialogs${e ? " (iOS: sequential loading)" : ""}`), e) for (const [t, i] of this.deferredDialogs) i.audio && (await this._loadDeferredDialog(t, i), await new Promise((s) => setTimeout(s, 50)));
        else this.deferredDialogs.forEach((t, i) => {
          t.audio && this._loadDeferredDialog(i, t);
        });
        this.deferredDialogs.clear();
      }
    }
    _loadDeferredDialog(e, t) {
      if (!t.audio) return;
      const i = new Y.Howl({
        src: [
          t.audio
        ],
        volume: this.audioVolume,
        preload: true,
        onload: () => {
          this.logger.log(`Loaded deferred dialog "${e}"`);
        },
        onloaderror: (s, o) => {
          this.logger.error(`Failed to load deferred dialog "${e}":`, o);
        }
      });
      this.preloadedAudio.set(e, i);
    }
    setGameManager(e) {
      this.gameManager = e, this.setupStateListener();
    }
    setupStateListener() {
      if (!this.gameManager) {
        this.logger.warn("Cannot setup state listener - gameManager not available");
        return;
      }
      this.logger.log("Setting up state listener..."), this.playedDialogs = /* @__PURE__ */ new Set(), this._dialogDataLoaded = false, this._pendingStateChecks = [], q(async () => {
        const { dialogTracks: t, getDialogsForState: i, VIEWMASTER_OVERHEAT_THRESHOLD: s } = await Promise.resolve().then(() => It);
        return {
          dialogTracks: t,
          getDialogsForState: i,
          VIEWMASTER_OVERHEAT_THRESHOLD: s
        };
      }, void 0).then(({ dialogTracks: t, getDialogsForState: i, VIEWMASTER_OVERHEAT_THRESHOLD: s }) => {
        this.logger.log("Dialog data loaded, registering state listener"), this._dialogDataLoaded = true, this._getDialogsForState = i;
        const o = /* @__PURE__ */ new Set();
        for (const a of Object.values(t)) if (a.videoId && a.autoPlay) {
          const l = this._getCounterpartVideoIds(a.videoId);
          for (const h of l) {
            const c = `video:play:${h}`;
            o.has(c) || (this.gameManager.on(c, () => {
              this._checkAndTriggerVideoDialog(h);
            }), o.add(c), this.logger.log(`Registered video play listener for dialog "${a.id}" on event "${c}"`));
          }
        }
        const n = (a, l) => {
          if ((l == null ? void 0 : l.currentState) === (a == null ? void 0 : a.currentState)) {
            this.logger.log(`Skipping state change handler - currentState unchanged (${a == null ? void 0 : a.currentState}), only properties updated`);
            return;
          }
          a.viewmasterOverheatDialogIndex !== (l == null ? void 0 : l.viewmasterOverheatDialogIndex) && this.logger.log(`Viewmaster overheat dialog index changed: ${l == null ? void 0 : l.viewmasterOverheatDialogIndex} -> ${a.viewmasterOverheatDialogIndex}, intensity: ${a.viewmasterInsanityIntensity}`);
          const h = i(a, this.playedDialogs);
          if (this.logger.log(`State changed: ${l == null ? void 0 : l.currentState} -> ${a.currentState}, found ${h.length} matching dialog(s): ${h.map((c) => c.id).join(", ")}`), a.viewmasterInsanityIntensity >= s && a.viewmasterOverheatDialogIndex !== null && a.viewmasterOverheatDialogIndex !== void 0) {
            const c = h.filter((d) => d.id === "coleUghGimmeASec" || d.id === "coleUghItsTooMuch");
            c.length > 0 ? this.logger.log(`State change: Found ${c.length} matching overheat dialog(s): ${c.map((d) => d.id).join(", ")}`) : this.logger.log(`State change: Overheat criteria met but no dialogs matched. Index: ${a.viewmasterOverheatDialogIndex}, Intensity: ${a.viewmasterInsanityIntensity}, isViewmasterEquipped: ${a.isViewmasterEquipped}`);
          }
          if (h.length > 0) for (const c of h) {
            if (c.once && this.playedDialogs && this.playedDialogs.has(c.id)) {
              this.logger.log(`Skipping dialog "${c.id}" - already played (once: true)`);
              continue;
            }
            if (!c.videoId) {
              if (this.activeDialogs.has(c.id)) {
                this.logger.log(`Skipping dialog "${c.id}" - already active`);
                continue;
              }
              if (this.pendingDialogs.has(c.id)) {
                this.logger.log(`Skipping dialog "${c.id}" - already pending`);
                continue;
              }
              this.logger.log(`Auto-playing dialog "${c.id}" from state change`), c.once && this.playedDialogs.add(c.id), this.gameManager.emit("dialog:trigger", c.id, c), this.playDialog(c, (d) => {
                this.gameManager.emit("dialog:finished", d);
              });
              break;
            }
          }
        };
        this.gameManager.on("state:changed", n), this.logger.log("Event listeners registered");
        const r = this.gameManager.getState();
        if (r) {
          this.logger.log(`Checking initial state: ${r.currentState}, isViewmasterEquipped: ${r.isViewmasterEquipped}`);
          const a = i(r, this.playedDialogs);
          if (this.logger.log(`Initial state check: found ${a.length} matching dialog(s): ${a.map((l) => l.id).join(", ")}`), a.length > 0) for (const l of a) {
            if (l.once && this.playedDialogs && this.playedDialogs.has(l.id)) {
              this.logger.log(`Skipping initial dialog "${l.id}" - already played (once: true)`);
              continue;
            }
            if (!l.videoId) {
              if (this.activeDialogs.has(l.id)) {
                this.logger.log(`Skipping initial dialog "${l.id}" - already active`);
                continue;
              }
              if (this.pendingDialogs.has(l.id)) {
                this.logger.log(`Skipping initial dialog "${l.id}" - already pending`);
                continue;
              }
              this.logger.log(`Auto-playing dialog "${l.id}" from initial state check`), l.once && this.playedDialogs.add(l.id), this.gameManager.emit("dialog:trigger", l.id, l), this.playDialog(l, (h) => {
                this.gameManager.emit("dialog:finished", h);
              });
              break;
            }
          }
        }
        for (this.gameManager.on("state:changed", n); this._pendingStateChecks.length > 0; ) {
          const { newState: a, oldState: l } = this._pendingStateChecks.shift();
          this.logger.log("Processing pending state check that occurred before dialog data loaded"), n(a, l);
        }
      });
      const e = (t, i) => {
        (i == null ? void 0 : i.currentState) !== (t == null ? void 0 : t.currentState) && (this._dialogDataLoaded || (this._pendingStateChecks.push({
          newState: t,
          oldState: i
        }), this.logger.log(`State changed to ${t == null ? void 0 : t.currentState} before dialog data loaded, queuing for later processing`)));
      };
      this.gameManager.on("state:changed", e);
    }
    createCaptionElement() {
      const e = document.createElement("div");
      return e.id = "dialog-caption", e.className = "dialog-caption", e;
    }
    async playDialog(e, t = null) {
      if (!e) {
        this.logger.warn("playDialog called with null/undefined dialogData");
        return;
      }
      const i = e.delay || 0;
      i > 0 ? this.scheduleDelayedDialog(e, t, i) : this._playDialogImmediate(e, t);
    }
    scheduleDelayedDialog(e, t, i) {
      const s = e.id;
      this.pendingDialogs.set(s, {
        dialogData: e,
        onComplete: t,
        timer: 0,
        delay: i
      });
    }
    cancelDelayedDialog(e) {
      this.pendingDialogs.has(e) && this.pendingDialogs.delete(e);
    }
    cancelAllDelayedDialogs() {
      this.pendingDialogs.size > 0 && (this.logger.log(`Cancelling ${this.pendingDialogs.size} pending dialog(s)`), this.pendingDialogs.clear());
    }
    async _playDialogImmediate(e, t = null) {
      const i = e.id, s = Date.now(), o = (u) => {
        e.onComplete && typeof e.onComplete == "function" && e.onComplete(u), t && typeof t == "function" && t(e);
      }, r = e.onComplete && typeof e.onComplete == "function" || t && typeof t == "function" ? o : null, a = [], l = /* @__PURE__ */ new Set();
      if (e) {
        if (e.progressStateTrigger && typeof e.progressStateTrigger == "object") {
          const u = e.progressStateTrigger;
          typeof u.progress == "number" && u.state !== void 0 && a.push({
            progress: Math.max(0, Math.min(1, u.progress)),
            state: u.state
          });
        }
        Array.isArray(e.progressStateTriggers) && e.progressStateTriggers.forEach((u) => {
          u && typeof u.progress == "number" && u.state !== void 0 && a.push({
            progress: Math.max(0, Math.min(1, u.progress)),
            state: u.state
          });
        }), a.sort((u, m) => u.progress - m.progress);
      }
      let h = null, c = null, d = null;
      if (e.videoId) if (c = e.videoId, this.videoManager) {
        const u = this.videoManager.getVideoPlayer(c);
        u && u.video && u.isPlaying ? (d = Date.now() - u.video.currentTime * 1e3, this.logger.log(`Syncing captions to video "${c}" at video time ${u.video.currentTime.toFixed(2)}s (videoStartTime: ${new Date(d).toLocaleTimeString()})`)) : this.logger.warn(`Video player not found or not playing for "${c}"`);
      } else this.logger.warn(`VideoManager not available for video-synced dialog "${i}"`);
      else if (e.audio) {
        if (this.prefetchedAudio.has(i)) {
          this.logger.log(`Creating Howl from prefetched blob for dialog "${i}"`);
          const u = this.prefetchedAudio.get(i);
          try {
            h = await this._createHowlFromPrefetched(i, u);
          } catch (m) {
            this.logger.error(`Failed to create Howl from prefetched dialog "${i}":`, m), u && u.size && (this.prefetchBudgetUsed -= u.size, URL.revokeObjectURL(u.blobUrl)), this.prefetchedAudio.delete(i), this._processPrefetchQueue(), this.deferredDialogs.set(i, u.dialogData);
          }
        }
        if (!h && this.preloadedAudio.has(i)) {
          this.logger.log(`Using preloaded audio for "${i}"`), h = this.preloadedAudio.get(i), h.once("end", () => {
            this.logger.log(`Preloaded audio for "${i}" ended`), this._handleDialogComplete(i);
          }), h.volume(this.audioVolume);
          const u = h.play();
          u ? this.logger.log(`Playing preloaded audio for "${i}" (sound ID: ${u})`) : this.logger.error(`Failed to start playback for "${i}" - Howl returned no sound ID`);
        } else {
          if (this.deferredDialogs.has(i)) {
            this.logger.log(`Loading deferred dialog "${i}" on-demand`);
            const f = this.deferredDialogs.get(i);
            h = new Y.Howl({
              src: [
                f.audio
              ],
              volume: this.audioVolume,
              preload: true,
              onend: () => {
                this._handleDialogComplete(i);
              },
              onloaderror: (x, w) => {
                this.logger.error(`Failed to load audio for "${i}":`, w), this._handleDialogComplete(i);
              }
            }), this.deferredDialogs.delete(i), this.preloadedAudio.set(i, h);
          } else this.logger.log(`Loading audio on-demand for "${i}"`), h = new Y.Howl({
            src: [
              e.audio
            ],
            volume: this.audioVolume,
            preload: true,
            onend: () => {
              this._handleDialogComplete(i);
            },
            onloaderror: (f, x) => {
              this.logger.error(`Failed to load audio for "${i}":`, x), this._handleDialogComplete(i);
            },
            onplayerror: (f, x) => {
              this.logger.error(`Failed to play audio for "${i}":`, x), this._handleDialogComplete(i);
            }
          });
          const u = h.state ? h.state() : "unloaded";
          this.logger.log(`Audio state for "${i}": ${u}`), u !== "loaded" && (this.logger.log(`Waiting for audio to load for "${i}"...`), await new Promise((f) => {
            const x = setTimeout(() => {
              this.logger.error(`Audio load timeout for "${i}"`), f();
            }, 1e4);
            h.once("load", () => {
              clearTimeout(x), this.logger.log(`Loaded on-demand dialog "${i}"`), f();
            }), h.once("loaderror", (w, y) => {
              clearTimeout(x), this.logger.error(`Failed to load on-demand dialog "${i}":`, y, `Audio path: ${e.audio}`), f();
            });
          }));
          const m = h.play();
          m ? this.logger.log(`Playing audio for "${i}" (sound ID: ${m})`) : this.logger.error(`Failed to start playback for "${i}" - Howl returned no sound ID. Audio state: ${h.state ? h.state() : "unknown"}`);
        }
      }
      if (c && this.videoManager && !d) {
        const u = this.videoManager.getVideoPlayer(c);
        if (u && u.video && u.isPlaying) {
          const m = u.video.currentTime;
          if (d = Date.now() - m * 1e3, this.logger.log(`Set videoStartTime for "${i}" at video time ${m.toFixed(2)}s (absolute: ${new Date(d).toLocaleTimeString()})`), e.captions && m > 0) {
            const f = e.captions.find((x) => x.startTime !== void 0);
            if (f) {
              const x = f.startTime + (f.duration || 3);
              m >= f.startTime && (m < x ? this.logger.warn(`\u26A0\uFE0F Video "${c}" is at ${m.toFixed(2)}s, first caption "${f.text.substring(0, 30)}..." starts at ${f.startTime}s (ends ${x.toFixed(1)}s). Caption SHOULD be active now!`) : this.logger.warn(`\u26A0\uFE0F Video "${c}" has advanced ${m.toFixed(2)}s, first caption "${f.text.substring(0, 30)}..." (${f.startTime}s-${x.toFixed(1)}s) has already expired!`));
            }
          }
        } else this.logger.warn(`Cannot set videoStartTime for "${i}" - video player not available or not playing`);
      }
      this.activeDialogs.set(i, {
        dialogData: e,
        audio: h,
        videoId: c,
        videoStartTime: d,
        startTime: s,
        onComplete: r,
        progressTriggers: a,
        progressTriggersFired: l
      }), this.isPlaying = true, this.activeDialogs.size > 0 ? (this._rebuildUnifiedCaptionQueue(), this.queueNeedsRebuild = false) : this.queueNeedsRebuild = true, this.emit("dialog:play", e);
    }
    stopDialog(e = null, t = 0) {
      if (e) {
        const i = this.activeDialogs.get(e);
        if (!i) return;
        if (t > 0 && i.audio) {
          const s = this.audioVolume, o = Date.now(), n = () => {
            const r = (Date.now() - o) / 1e3, a = Math.min(r / t, 1), l = s * (1 - a);
            i.audio && i.audio.volume && i.audio.volume(l), a >= 1 ? (i.audio && i.audio.stop(), this._removeDialog(e)) : this.activeDialogs.has(e) && requestAnimationFrame(n);
          };
          n();
        } else i.audio && i.audio.stop(), this._removeDialog(e);
      } else {
        for (const [i, s] of this.activeDialogs.entries()) s.audio && s.audio.stop();
        this.activeDialogs.clear(), this.unifiedCaptionQueue = [], this.currentCaptionIndex = 0, this.isPlaying = false, this.hideCaption(), this.emit("dialog:stop");
      }
    }
    _removeDialog(e) {
      const t = this.activeDialogs.get(e);
      if (t) {
        if (this.activeDialogs.delete(e), this.queueNeedsRebuild = true, this.activeDialogs.size === 0 ? (this.isPlaying = false, this.hideCaption(), this.emit("dialog:stop")) : this.emit("dialog:complete", t.dialogData), t.onComplete) if (this.logger.log(`Calling onComplete callback for dialog "${e}"`), this.gameManager) try {
          t.onComplete(this.gameManager), this.logger.log(`onComplete callback for "${e}" finished`);
        } catch (i) {
          this.logger.error(`Error in onComplete callback for "${e}":`, i);
        }
        else try {
          t.onComplete(t.dialogData);
        } catch (i) {
          this.logger.error(`Error in onComplete callback for "${e}":`, i);
        }
        t.dialogData.playNext && this._handlePlayNext(t.dialogData);
      }
    }
    _handleDialogComplete(e) {
      this.logger.log(`Dialog "${e}" completed, removing...`), this._removeDialog(e);
    }
    async _handlePlayNext(e) {
      if (!e || !e.playNext) {
        e ? this.logger.log(`Dialog "${e.id}" has no playNext property`) : this.logger.warn("_handlePlayNext called with null/undefined dialogData");
        return;
      }
      this.logger.log(`Chaining to next dialog from "${e.id}" -> "${e.playNext}"`);
      let t;
      if (typeof e.playNext == "string" ? (this.logger.log(`Resolving dialog by ID: "${e.playNext}"`), t = await this.resolveDialogById(e.playNext), t ? this.logger.log(`Resolved dialog "${e.playNext}": found ${t.id}`) : this.logger.error(`Failed to resolve dialog "${e.playNext}" from "${e.id}"`)) : (t = e.playNext, this.logger.log(`Using direct dialog object: ${t.id || "unknown"}`)), !t) {
        this.logger.warn(`playNext dialog not found for "${e.id}": ${e.playNext}`);
        return;
      }
      if (this.logger.log(`Processing playNext for "${t.id}"`), this.gameManager && t.criteria) {
        const s = this.gameManager.getState(), o = t.criteria;
        if (!X(s, o)) {
          this.logger.log(`Next dialog "${t.id}" criteria not met, skipping playNext`);
          return;
        }
        this.logger.log(`Next dialog "${t.id}" criteria met`);
      } else this.logger.log(`Next dialog "${t.id}" has no criteria - allowing playNext chain`);
      if (t.once && this.playedDialogs && this.playedDialogs.has(t.id)) {
        this.logger.log(`Next dialog "${t.id}" already played once, skipping playNext`);
        return;
      }
      t.once && this.playedDialogs && (this.playedDialogs.add(t.id), this.logger.log(`Marked chained dialog "${t.id}" as played`));
      const i = t.delay || 0;
      i > 0 ? (this.logger.log(`Chaining to "${t.id}" with ${i}s delay`), setTimeout(() => {
        this.logger.log(`Playing delayed chained dialog "${t.id}"`), this.playDialog(t);
      }, i * 1e3)) : (this.logger.log(`Playing chained dialog "${t.id}" immediately`), this.playDialog(t));
    }
    showCaption(e) {
      this.captionsEnabled && (this.captionElement.textContent = e.text), e.emitEvent && this.gameManager && (this.gameManager.emit(e.emitEvent, e), this.logger.log(`Emitted global event "${e.emitEvent}" for caption: ${e.text}`)), this.captionTimer = 0, this.emit("dialog:caption", e);
    }
    hideCaption() {
      this.captionElement.textContent = "";
    }
    async resolveDialogById(e) {
      if (this._dialogTracks && this._dialogTracks[e]) return this._dialogTracks[e];
      const { dialogTracks: t } = await q(async () => {
        const { dialogTracks: s } = await Promise.resolve().then(() => It);
        return {
          dialogTracks: s
        };
      }, void 0);
      this._dialogTracks || (this._dialogTracks = t);
      const i = t[e];
      return i || this.logger.warn(`Dialog "${e}" not found in dialogTracks`), i || null;
    }
    _getCounterpartVideoIds(e) {
      const t = [
        e
      ];
      if (e.endsWith("Safari")) {
        const i = e.replace("Safari", "");
        t.push(i);
      } else {
        const i = e + "Safari";
        t.push(i);
      }
      return t;
    }
    _checkAndTriggerVideoDialog(e) {
      if (!this.videoManager || !this._dialogTracks || this.isFadingOut) return;
      const t = this._getCounterpartVideoIds(e), i = Object.values(this._dialogTracks).filter((a) => a.videoId && t.includes(a.videoId) && a.autoPlay);
      if (i.length === 0) return;
      const s = this.videoManager.getVideoPlayer(e);
      if (!s || !(!(this.videoManager.pendingDelays && this.videoManager.pendingDelays.has(e)) && s.isPlaying && s.video && !s.video.paused && !s.video.ended && s.video.readyState >= 2 && s.video.currentTime >= 0)) return;
      const r = s.video.currentTime;
      for (const a of i) {
        if (a.once && this.playedDialogs && this.playedDialogs.has(a.id) || this.activeDialogs.has(a.id) || this.pendingDialogs.has(a.id)) continue;
        this.logger.log(`Video-synced dialog "${a.id}" triggered via event (video "${e}" at ${r.toFixed(2)}s)`), r > 1 && this.logger.warn(`\u26A0\uFE0F Video "${e}" has advanced ${r.toFixed(2)}s before dialog "${a.id}" triggered. Early captions may be missed!`), a.once && this.playedDialogs && this.playedDialogs.add(a.id);
        const l = {
          ...a
        };
        a.videoId !== e && (l.videoId = e), this.playDialog(l);
      }
    }
    update(e) {
      if (this.gameManager && this.videoManager && !this.isFadingOut && this._dialogTracks) for (const t of Object.values(this._dialogTracks)) {
        if (!t.videoId || !t.autoPlay || t.once && this.playedDialogs && this.playedDialogs.has(t.id) || this.activeDialogs.has(t.id) || this.pendingDialogs.has(t.id)) continue;
        const i = this._getCounterpartVideoIds(t.videoId);
        let s = null, o = null;
        for (const a of i) {
          const l = this.videoManager.getVideoPlayer(a);
          if (l && !(this.videoManager.pendingDelays && this.videoManager.pendingDelays.has(a)) && l.isPlaying && l.video && !l.video.paused && !l.video.ended && l.video.readyState >= 2 && l.video.currentTime >= 0) {
            s = l, o = a;
            break;
          }
        }
        if (!s || !o) continue;
        const n = s.video.currentTime;
        this.logger.log(`Video-synced dialog "${t.id}" triggered via update loop (video "${o}" at ${n.toFixed(2)}s)`), n > 1 && this.logger.warn(`\u26A0\uFE0F Video "${o}" has advanced ${n.toFixed(2)}s before dialog "${t.id}" triggered. Early captions may be missed!`), t.once && this.playedDialogs && this.playedDialogs.add(t.id);
        const r = {
          ...t
        };
        t.videoId !== o && (r.videoId = o), this.playDialog(r);
        break;
      }
      if (this.gameManager && !this.isFadingOut && this._getDialogsForState) {
        const t = this.gameManager.getState(), s = this._getDialogsForState(t, this.playedDialogs || /* @__PURE__ */ new Set()).filter((o) => !o.videoId);
        if (t.viewmasterInsanityIntensity >= nt && t.viewmasterOverheatDialogIndex !== null && t.viewmasterOverheatDialogIndex !== void 0) {
          const o = s.filter((n) => n.id === "coleUghGimmeASec" || n.id === "coleUghItsTooMuch");
          o.length > 0 && !this.isPlaying && this.logger.log(`Found matching overheat dialog(s): ${o.map((n) => n.id).join(", ")}`);
        }
        for (const o of s) if (!(o.once && this.playedDialogs && this.playedDialogs.has(o.id)) && !this.activeDialogs.has(o.id) && !this.pendingDialogs.has(o.id)) {
          this.logger.log(`Auto-playing dialog "${o.id}"`), o.once && this.playedDialogs && this.playedDialogs.add(o.id), this.playDialog(o);
          break;
        }
      }
      if (this.pendingDialogs.size > 0) {
        for (const [t, i] of this.pendingDialogs) if (i.timer += e, i.timer >= i.delay) {
          this.logger.log(`Playing delayed dialog "${t}"`), this.pendingDialogs.delete(t), this._playDialogImmediate(i.dialogData, i.onComplete);
          break;
        }
      }
      if (this.gameManager && this.activeDialogs.size > 0) {
        for (const [t, i] of this.activeDialogs.entries()) if (!(!i.audio || i.progressTriggers.length === 0)) try {
          const s = i.audio.duration ? i.audio.duration() : 0, o = i.audio.seek ? i.audio.seek() : 0;
          if (s > 0) {
            const n = o / s;
            for (let r = 0; r < i.progressTriggers.length; r++) {
              const a = i.progressTriggers[r];
              n >= a.progress && !i.progressTriggersFired.has(r) && (typeof this.gameManager.setState == "function" && this.gameManager.setState({
                currentState: a.state
              }), i.progressTriggersFired.add(r));
            }
          }
        } catch {
        }
      }
      if (this.queueNeedsRebuild && this.activeDialogs.size > 0 ? (this._rebuildUnifiedCaptionQueue(), this.queueNeedsRebuild = false) : this.activeDialogs.size > 0 && this._updateVideoCaptionTimes(), this.activeDialogs.size > 0) {
        const t = Date.now();
        let i = null, s = -1;
        for (let o = 0; o < this.unifiedCaptionQueue.length; o++) {
          const n = this.unifiedCaptionQueue[o];
          if (t >= n.absoluteStartTime && t < n.absoluteEndTime) {
            i = n, s = o;
            break;
          }
        }
        if (i) this.currentCaptionIndex !== s && (this.currentCaptionIndex = s, this.showCaption(i.caption));
        else if (this.currentCaptionIndex >= 0 && this.currentCaptionIndex < this.unifiedCaptionQueue.length) {
          const o = this.unifiedCaptionQueue[this.currentCaptionIndex];
          if (t >= o.absoluteEndTime) {
            const n = this.unifiedCaptionQueue[this.unifiedCaptionQueue.length - 1];
            t >= n.absoluteEndTime ? (this.currentCaptionIndex = this.unifiedCaptionQueue.length, this.hideCaption()) : this.hideCaption();
          }
        } else this.currentCaptionIndex < this.unifiedCaptionQueue.length && (this.currentCaptionIndex = this.unifiedCaptionQueue.length), this.hideCaption();
        for (const [o, n] of this.activeDialogs.entries()) if (!n.audio && !n.videoId) {
          let r = null;
          for (let a = this.unifiedCaptionQueue.length - 1; a >= 0; a--) if (this.unifiedCaptionQueue[a].dialogId === o) {
            r = this.unifiedCaptionQueue[a];
            break;
          }
          r && t >= r.absoluteEndTime && (this.logger.log(`Caption-only dialog "${o}" completed (all captions finished)`), this._handleDialogComplete(o));
        }
        if (this.currentCaptionIndex >= this.unifiedCaptionQueue.length) {
          let o = true;
          for (const [n, r] of this.activeDialogs.entries()) if (r.audio) try {
            if (r.audio.playing && r.audio.playing()) {
              o = false;
              break;
            }
          } catch {
          }
          else if (r.videoId && this.videoManager) {
            const a = this.videoManager.getVideoPlayer(r.videoId);
            if (a && a.isPlaying) {
              o = false;
              break;
            }
          }
        }
      } else this.currentCaptionIndex < this.unifiedCaptionQueue.length && (this.hideCaption(), this.currentCaptionIndex = this.unifiedCaptionQueue.length);
      if (this.isFadingOut) {
        this.fadeOutTimer += e;
        const t = Math.min(this.fadeOutTimer / this.fadeOutDuration, 1), i = this.fadeOutStartVolume * (1 - t);
        for (const [s, o] of this.activeDialogs.entries()) o.audio && o.audio.volume && o.audio.volume(i);
        t >= 1 && (this.isFadingOut = false, this.fadeOutTimer = 0, this.fadeOutDuration = 0, this.stopDialog());
      }
    }
    setCaptionStyle(e) {
      Object.assign(this.captionElement.style, e);
    }
    applyDefaultCaptionStyle() {
    }
    setVolume(e) {
      this.baseVolume = Math.max(0, Math.min(1, e)), this.updateVolume();
    }
    updateVolume() {
      this.audioVolume = this.baseVolume, this.sfxManager && (this.audioVolume *= this.sfxManager.getMasterVolume());
      for (const [e, t] of this.activeDialogs.entries()) t.audio && t.audio.volume && t.audio.volume(this.audioVolume);
      this.preloadedAudio.forEach((e) => {
        e.volume && e.volume(this.audioVolume);
      });
    }
    setCaptionsEnabled(e) {
      this.captionsEnabled = e, e || this.hideCaption();
    }
    isDialogPlaying() {
      return this.isPlaying && this.activeDialogs.size > 0;
    }
    isDialogPending(e) {
      return this.pendingDialogs.has(e);
    }
    hasDialogsPending() {
      return this.pendingDialogs.size > 0;
    }
    getDialogDuration(e) {
      const t = this.activeDialogs.get(e);
      if (t && t.audio) try {
        return t.audio.duration ? t.audio.duration() : null;
      } catch {
        return null;
      }
      if (this.preloadedAudio.has(e)) {
        const i = this.preloadedAudio.get(e);
        try {
          return i.duration ? i.duration() : null;
        } catch {
          return null;
        }
      }
      return null;
    }
    getTotalDialogDuration(e) {
      if (!e) return 0;
      if (e.videoId && e.captions) {
        let t = 0;
        for (const i of e.captions) {
          const o = (i.startTime || 0) + (i.duration || 3);
          t = Math.max(t, o);
        }
        return t;
      }
      return e.captions ? e.captions.reduce((t, i) => t + (i.duration || 3), 0) : 0;
    }
    on(e, t) {
      this.eventListeners[e] || (this.eventListeners[e] = []), this.eventListeners[e].push(t);
    }
    off(e, t) {
      if (!this.eventListeners[e]) return;
      const i = this.eventListeners[e].indexOf(t);
      i !== -1 && this.eventListeners[e].splice(i, 1);
    }
    emit(e, ...t) {
      this.eventListeners[e] && this.eventListeners[e].forEach((i) => {
        try {
          i(...t);
        } catch (s) {
          this.logger.error(`Error in event listener for "${e}":`, s);
        }
      });
    }
    destroy() {
      this.stopDialog(), this.preloadedAudio.forEach((e) => {
        e.unload();
      }), this.preloadedAudio.clear(), this.captionElement && this.captionElement.parentNode && this.captionElement.parentNode.removeChild(this.captionElement);
    }
  }
  class Rs {
    constructor(e = {}) {
      this.inputManager = e.inputManager || null, this.sfxManager = e.sfxManager || null, this.onNavigateUp = e.onNavigateUp || null, this.onNavigateDown = e.onNavigateDown || null, this.onConfirm = e.onConfirm || null, this.lastNavigationUp = false, this.lastNavigationDown = false, this.lastConfirmButton = false, this.navigationCooldown = 0, this.navigationDelay = e.navigationDelay || 0.2, this.keystrokeIndex = 0;
    }
    update(e) {
      var _a3, _b2, _c;
      if (!this.inputManager) return;
      const t = this.inputManager.getGamepad();
      if (!t) return;
      this.navigationCooldown > 0 && (this.navigationCooldown -= e);
      const i = ((_a3 = t.buttons[12]) == null ? void 0 : _a3.pressed) || false, s = ((_b2 = t.buttons[13]) == null ? void 0 : _b2.pressed) || false, o = t.axes[1] || 0, n = ((_c = t.buttons[0]) == null ? void 0 : _c.pressed) || false, r = i || o < -0.5, a = s || o > 0.5;
      r && !this.lastNavigationUp && this.navigationCooldown <= 0 && (this.onNavigateUp && this.onNavigateUp(), this.navigationCooldown = this.navigationDelay, this.playKeystrokeSound()), a && !this.lastNavigationDown && this.navigationCooldown <= 0 && (this.onNavigateDown && this.onNavigateDown(), this.navigationCooldown = this.navigationDelay, this.playKeystrokeSound()), n && !this.lastConfirmButton && (this.onConfirm && this.onConfirm(), this.playReturnSound()), this.lastNavigationUp = r, this.lastNavigationDown = a, this.lastConfirmButton = n;
    }
    playKeystrokeSound() {
      if (this.sfxManager) {
        const e = `typewriter-keystroke-0${this.keystrokeIndex}`;
        this.sfxManager.play(e), this.keystrokeIndex = (this.keystrokeIndex + 1) % 4;
      }
    }
    playReturnSound() {
      this.sfxManager && this.sfxManager.play("typewriter-return");
    }
    reset() {
      this.lastNavigationUp = false, this.lastNavigationDown = false, this.lastConfirmButton = false, this.navigationCooldown = 0, this.keystrokeIndex = 0;
    }
    setInputManager(e) {
      this.inputManager = e;
    }
    setSfxManager(e) {
      this.sfxManager = e;
    }
  }
  class Jo {
    constructor(e = {}) {
      this.gameManager = e.gameManager || null, this.dialogManager = e.dialogManager || null, this.sfxManager = e.sfxManager || null, this.inputManager = e.inputManager || null, this.logger = new N("DialogChoiceUI", false), this.container = null, this.currentChoices = null, this.isVisible = false, this.selectedIndex = 0, this.choiceButtons = [], this.keystrokeIndex = 0, this.createUI(), this.applyStyles(), this.setupKeyboardListeners(), this.gamepadNav = new Rs({
        inputManager: this.inputManager,
        sfxManager: this.sfxManager,
        onNavigateUp: () => this.moveSelection(-1),
        onNavigateDown: () => this.moveSelection(1),
        onConfirm: () => this.confirmSelection()
      }), this.gameManager && this.setupStateListener();
    }
    setGameManager(e) {
      this.gameManager = e, this.setupStateListener();
    }
    setupStateListener() {
      this.gameManager && (this.shownChoices = /* @__PURE__ */ new Set(), q(async () => {
        const { getChoicesForState: e } = await import("./dialogChoiceData-p-IBU3PV.js").then(async (m) => {
          await m.__tla;
          return m;
        });
        return {
          getChoicesForState: e
        };
      }, __vite__mapDeps([2,1])).then(({ getChoicesForState: e }) => {
        this.gameManager.on("state:changed", (t, i) => {
          const s = e(t, this.shownChoices);
          if (s.length > 0) {
            const o = s[0];
            this.logger.log(`Auto-showing choices "${o.id}"`), this.shownChoices.add(o.id), this.showChoices(o), this.gameManager.emit("dialogChoice:trigger", o.id, o);
          }
        }), this.logger.log("State listener registered");
      }));
    }
    createUI() {
      this.container = document.createElement("div"), this.container.id = "dialog-choices", this.container.className = "dialog-choices-container", this.container.style.display = "none", this.promptElement = document.createElement("div"), this.promptElement.className = "dialog-choices-prompt", this.container.appendChild(this.promptElement), this.choicesElement = document.createElement("div"), this.choicesElement.className = "dialog-choices-list", this.container.appendChild(this.choicesElement), document.body.appendChild(this.container);
    }
    applyStyles() {
      const e = document.createElement("style");
      e.textContent = `
      @keyframes slideUpFadeIn {
        from {
          transform: translateY(100%);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }

      .dialog-choices-container {
        position: fixed;
        bottom: 5%;
        left: 5%;
        width: auto;
        max-width: 500px;
        min-width: 300px;
        z-index: 2000;
        pointer-events: auto;
        background: rgba(255, 255, 255, 0.6);
        border: 4px solid black;
        box-shadow: 
          0 8px 16px rgba(0, 0, 0, 0.7),
          inset 0 0 0 2px rgba(255, 255, 255, 0.6),
          inset 0 0 0 6px black;
        padding: 4px;
        animation: slideUpFadeIn 0.4s ease-out;
      }

      .dialog-choices-prompt {
        font-family: 'PXCountryTypewriter', Arial, sans-serif;
        font-size: 32px;
        color: rgba(0, 0, 0, 0.8);
        text-align: left;
        padding: 8px 12px;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 4px;
      }

      .dialog-choices-list {
        display: flex;
        flex-direction: column;
        gap: 0;
      }

      .dialog-choice-button {
        font-family: 'PXCountryTypewriter', Arial, sans-serif;
        font-size: 24px;
        padding: 10px 16px;
        background: transparent;
        color: rgba(0, 0, 0, 0.5);
        border: none;
        cursor: pointer;
        transition: all 0.15s ease;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-align: left;
        width: 100%;
      }

      .dialog-choice-button:last-child {
        border-bottom: none;
      }

      .dialog-choice-button.selected {
        background: rgba(0, 0, 0, 0.85);
        color: white;
      }

      .dialog-choice-button:hover:not(.selected) {
        background: rgba(0, 0, 0, 0.1);
        color: rgba(0, 0, 0, 0.7);
      }

      @media (max-width: 768px) {
        .dialog-choices-container {
          left: 50%;
          right: auto;
          transform: translateX(-50%);
          max-width: 90vw;
          min-width: 280px;
          width: auto;
        }
        
        @keyframes slideUpFadeInMobile {
          from {
            transform: translateX(-50%) translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
          }
        }
        
        .dialog-choices-container {
          animation: slideUpFadeInMobile 0.4s ease-out;
        }
        
        .dialog-choice-button {
          font-size: 22px;
          padding: 10px 14px;
        }
        
        .dialog-choices-prompt {
          font-size: 28px;
          padding: 8px 10px;
        }
      }
      
      @media (max-width: 480px) {
        .dialog-choices-container {
          max-width: 95vw;
          min-width: 260px;
          bottom: 10%;
        }
        
        .dialog-choice-button {
          font-size: 20px;
          padding: 10px 14px;
        }
        
        .dialog-choices-prompt {
          font-size: 26px;
          padding: 8px 10px;
        }
      }
    `, document.head.appendChild(e);
    }
    setupKeyboardListeners() {
      this.keyboardHandler = (e) => {
        if (this.isVisible) switch (e.key) {
          case "ArrowUp":
          case "w":
          case "W":
            e.preventDefault(), this.moveSelection(-1);
            break;
          case "ArrowDown":
          case "s":
          case "S":
            e.preventDefault(), this.moveSelection(1);
            break;
          case "Enter":
          case " ":
            e.preventDefault(), this.confirmSelection();
            break;
        }
      }, window.addEventListener("keydown", this.keyboardHandler), this.setupMouseListeners();
    }
    setupMouseListeners() {
      this.wheelHandler = (e) => {
        this.isVisible && (e.preventDefault(), e.deltaY > 0 ? this.moveSelection(1) : e.deltaY < 0 && this.moveSelection(-1));
      }, this.clickHandler = (e) => {
        var _a3, _b2, _c, _d, _e2;
        if (!this.isVisible) return;
        const t = document.pointerLockElement !== null, i = ((_d = (_c = (_b2 = (_a3 = this.inputManager) == null ? void 0 : _a3.gameManager) == null ? void 0 : _b2.getState) == null ? void 0 : _c.call(_b2)) == null ? void 0 : _d.isMobile) || false, s = e.target, o = s && (s.closest && s.closest("#dialog-choices") !== null || ((_e2 = s.classList) == null ? void 0 : _e2.contains("dialog-choice-button")) || s.id === "dialog-choices" || s === this.container || this.container && this.container.contains(s));
        if (i && !t) {
          if (!o) {
            e.stopPropagation(), e.preventDefault();
            return;
          }
          return;
        }
        t && (e.preventDefault(), this.confirmSelection());
      }, window.addEventListener("wheel", this.wheelHandler, {
        passive: false
      }), window.addEventListener("click", this.clickHandler);
    }
    moveSelection(e) {
      if (!(!this.currentChoices || this.choiceButtons.length === 0)) {
        if (this.choiceButtons[this.selectedIndex].classList.remove("selected"), this.selectedIndex += e, this.selectedIndex < 0 ? this.selectedIndex = this.choiceButtons.length - 1 : this.selectedIndex >= this.choiceButtons.length && (this.selectedIndex = 0), this.choiceButtons[this.selectedIndex].classList.add("selected"), this.sfxManager) {
          const t = `typewriter-keystroke-0${this.keystrokeIndex}`;
          this.sfxManager.play(t), this.keystrokeIndex = (this.keystrokeIndex + 1) % 4;
        }
        this.logger.log(`Selected option ${this.selectedIndex}`);
      }
    }
    confirmSelection() {
      if (!this.currentChoices || this.choiceButtons.length === 0) return;
      this.sfxManager && this.sfxManager.play("typewriter-return");
      const e = this.currentChoices.choices[this.selectedIndex];
      this.selectChoice(e, this.currentChoices);
    }
    showChoices(e) {
      var _a3, _b2, _c, _d;
      if (!e || !e.choices || e.choices.length === 0) {
        this.logger.warn("No choices provided");
        return;
      }
      this.currentChoices = e, this.isVisible = true, this.selectedIndex = 0, this.choiceButtons = [], this.keystrokeIndex = 0, (_d = (_c = (_b2 = (_a3 = this.inputManager) == null ? void 0 : _a3.gameManager) == null ? void 0 : _b2.getState) == null ? void 0 : _c.call(_b2)) == null ? void 0 : _d.isMobile, e.prompt ? (this.promptElement.textContent = e.prompt, this.promptElement.style.display = "block") : this.promptElement.style.display = "none", this.choicesElement.innerHTML = "", e.choices.forEach((t, i) => {
        const s = document.createElement("button");
        s.className = "dialog-choice-button", i === 0 && s.classList.add("selected"), s.textContent = t.text, s.dataset.choiceResponseType = t.responseType, s.dataset.choiceIndex = i, s.addEventListener("click", (o) => {
          o.stopPropagation(), this.choiceButtons.forEach((n) => n.classList.remove("selected")), s.classList.add("selected"), this.selectedIndex = i, this.sfxManager && this.sfxManager.play("typewriter-return"), this.selectChoice(t, e);
        }), s.addEventListener("mouseenter", () => {
          var _a4, _b3, _c2, _d2;
          if (!((_d2 = (_c2 = (_b3 = (_a4 = this.inputManager) == null ? void 0 : _a4.gameManager) == null ? void 0 : _b3.getState) == null ? void 0 : _c2.call(_b3)) == null ? void 0 : _d2.isMobile) && (this.choiceButtons[this.selectedIndex].classList.remove("selected"), this.selectedIndex = i, s.classList.add("selected"), this.sfxManager)) {
            const n = `typewriter-keystroke-0${this.keystrokeIndex}`;
            this.sfxManager.play(n), this.keystrokeIndex = (this.keystrokeIndex + 1) % 4;
          }
        }), this.choicesElement.appendChild(s), this.choiceButtons.push(s);
      }), this.container.style.display = "block", this.inputManager && this.inputManager.fadeOutTouchControls(), this.logger.log("Showing choices", e);
    }
    selectChoice(e, t) {
      this.logger.log("Choice selected", e), this.hide();
      const i = {};
      if (t.stateKey && (i[t.stateKey] = e.responseType), e.onSelect && typeof e.onSelect == "function") try {
        const s = e.onSelect(this.gameManager, e);
        s && typeof s == "object" && Object.assign(i, s);
      } catch (s) {
        this.logger.error("Error in onSelect callback", s);
      }
      if (Object.keys(i).length > 0 && this.gameManager && (this.logger.log("Applying state updates:", i), this.gameManager.setState(i)), e.responseDialog && this.dialogManager && (this.logger.log("Playing response dialog", e.responseDialog), this.dialogManager.playDialog(e.responseDialog)), t.onChoiceSelected && typeof t.onChoiceSelected == "function") try {
        t.onChoiceSelected(this.gameManager, e);
      } catch (s) {
        this.logger.error("Error in onChoiceSelected callback", s);
      }
    }
    update(e) {
      this.isVisible && this.gamepadNav && this.gamepadNav.update(e);
    }
    hide() {
      this.container.style.display = "none", this.isVisible = false, this.currentChoices = null, this.selectedIndex = 0, this.choiceButtons = [], this.choicesElement.innerHTML = "", this.gamepadNav && this.gamepadNav.reset(), this.inputManager && setTimeout(() => {
        requestAnimationFrame(() => {
          this.inputManager && this.inputManager.fadeInTouchControls();
        });
      }, 50);
    }
    isShowingChoices() {
      return this.isVisible;
    }
    destroy() {
      this.keyboardHandler && (window.removeEventListener("keydown", this.keyboardHandler), this.keyboardHandler = null), this.wheelHandler && (window.removeEventListener("wheel", this.wheelHandler), this.wheelHandler = null), this.clickHandler && (window.removeEventListener("click", this.clickHandler), this.clickHandler = null), this.container && this.container.parentNode && this.container.parentNode.removeChild(this.container);
    }
  }
  const Rt = new N("DebugSpawner", false), en = {
    START_SCREEN: {
      controlEnabled: false
    },
    TITLE_SEQUENCE: {
      controlEnabled: false
    },
    TITLE_SEQUENCE_COMPLETE: {
      controlEnabled: true,
      playerRotation: {
        x: 0,
        y: 180,
        z: 0
      }
    },
    INTRO_COMPLETE: {
      isPlaying: true,
      controlEnabled: true
    },
    NEAR_RADIO: {
      isPlaying: true,
      controlEnabled: true,
      playerPosition: {
        x: 0,
        y: 0.8,
        z: 28
      }
    },
    PHONE_BOOTH_RINGING: {
      isPlaying: true,
      controlEnabled: true,
      playerPosition: {
        x: L.phonebooth.position.x + 5,
        y: 0.8,
        z: L.phonebooth.position.z - 8
      }
    },
    ANSWERED_PHONE: {
      isPlaying: true,
      controlEnabled: true,
      playerPosition: {
        x: L.phonebooth.position.x,
        y: 0.8,
        z: L.phonebooth.position.z - 0.15
      }
    },
    DIALOG_CHOICE_1: {
      isPlaying: true,
      controlEnabled: true
    },
    DRIVE_BY_PREAMBLE: {
      isPlaying: true,
      controlEnabled: true,
      playerPosition: {
        x: L.phonebooth.position.x,
        y: 1.9,
        z: L.phonebooth.position.z - 0.15
      }
    },
    DRIVE_BY: {
      isPlaying: true,
      controlEnabled: true,
      playerPosition: {
        x: L.phonebooth.position.x,
        y: 0.8,
        z: L.phonebooth.position.z
      }
    },
    POST_DRIVE_BY: {
      isPlaying: true,
      controlEnabled: true,
      playerPosition: {
        x: 11.68,
        y: 0.8,
        z: 64.35
      }
    },
    ENTERING_OFFICE: {
      isPlaying: true,
      controlEnabled: true,
      playerPosition: {
        x: 1.94,
        y: 2.13,
        z: 79.85
      },
      playerRotation: {
        x: 0,
        y: 110,
        z: 0
      }
    },
    OFFICE_INTERIOR: {
      isPlaying: true,
      controlEnabled: true,
      playerPosition: {
        x: -2.69,
        y: 1.5,
        z: 84.05
      }
    },
    OFFICE_PHONE_ANSWERED: {
      isPlaying: true,
      controlEnabled: true,
      playerPosition: {
        x: -4.69,
        y: 1.5,
        z: 83.05
      }
    },
    PRE_VIEWMASTER: {
      isPlaying: true,
      controlEnabled: true,
      playerPosition: {
        x: -5.14,
        y: 2.05,
        z: 84.66
      }
    },
    VIEWMASTER: {
      isPlaying: true,
      controlEnabled: true,
      playerPosition: {
        x: -5.14,
        y: 2.05,
        z: 84.66
      }
    },
    VIEWMASTER_COLOR: {
      isPlaying: true,
      controlEnabled: true,
      playerPosition: {
        x: -5.14,
        y: 2.05,
        z: 84.66
      }
    },
    VIEWMASTER_DISSOLVE: {
      isPlaying: true,
      controlEnabled: true,
      playerPosition: {
        x: -5.14,
        y: 2.05,
        z: 84.66
      }
    },
    VIEWMASTER_HELL: {
      isPlaying: true,
      controlEnabled: true,
      playerPosition: {
        x: -5.14,
        y: 2.05,
        z: 84.66
      }
    },
    POST_VIEWMASTER: {
      isPlaying: true,
      controlEnabled: true,
      playerPosition: {
        x: -5.14,
        y: 2.05,
        z: 84.66
      }
    },
    PRE_EDISON: {
      isPlaying: true,
      controlEnabled: true,
      playerPosition: {
        x: -5.14,
        y: 2.05,
        z: 84.66
      }
    },
    EDISON: {
      isPlaying: true,
      controlEnabled: true,
      playerPosition: {
        x: -5.14,
        y: 2.05,
        z: 84.66
      }
    },
    CZAR_STRUGGLE: {
      isPlaying: true,
      controlEnabled: true,
      playerPosition: {
        x: -5.14,
        y: 2.05,
        z: 84.66
      }
    },
    SHOULDER_TAP: {
      isPlaying: true,
      controlEnabled: true,
      playerPosition: {
        x: -5.14,
        y: 2.05,
        z: 83.66
      }
    },
    LIGHTS_OUT: {
      isPlaying: true,
      controlEnabled: true,
      playerPosition: {
        x: -5.14,
        y: 2.05,
        z: 83.66
      },
      playerRotation: {
        x: 0,
        y: 0,
        z: 0
      }
    },
    WAKING_UP: {
      isPlaying: true,
      controlEnabled: true,
      playerPosition: {
        x: -5.14,
        y: 2.05,
        z: 83.66
      },
      playerRotation: {
        x: 0,
        y: 0,
        z: 0
      }
    },
    CURSOR: {
      isPlaying: true,
      controlEnabled: true,
      playerPosition: {
        x: -5.14,
        y: 2.05,
        z: 83.66
      }
    },
    CURSOR_FINAL: {
      isPlaying: true,
      controlEnabled: true,
      playerPosition: {
        x: -5.14,
        y: 2.05,
        z: 83.66
      }
    },
    SHADOW_AMPLIFICATIONS: {
      isPlaying: true,
      controlEnabled: true,
      isViewmasterEquipped: true,
      viewmasterManuallyRemoved: false,
      viewmasterOverheatDialogIndex: null,
      playerPosition: {
        x: -5.14,
        y: 2.05,
        z: 83.66
      },
      playerRotation: {
        x: 0,
        y: 0,
        z: 0
      }
    }
  };
  function tn(g) {
    return {
      ...vs,
      currentState: g,
      controlEnabled: true
    };
  }
  function sn(g) {
    if (!(g in p)) return null;
    const e = p[g], t = tn(e), i = en[g] || {};
    return {
      ...t,
      ...i
    };
  }
  const Ti = new Proxy({}, {
    get(g, e) {
      if (typeof e == "string" && e in p) return sn(e);
    },
    has(g, e) {
      return typeof e == "string" && e in p;
    },
    ownKeys() {
      return Object.keys(p);
    },
    getOwnPropertyDescriptor(g, e) {
      if (typeof e == "string" && e in p) return {
        enumerable: true,
        configurable: true
      };
    }
  });
  function Ds() {
    const e = new URLSearchParams(window.location.search).get("gameState");
    if (!e) return null;
    const t = Ti[e];
    if (!t) return Rt.warn(`Unknown gameState "${e}". Available states:`, Object.keys(Ti)), null;
    Rt.log(`Spawning into state "${e}"`), Rt.log("Preset includes playerRotation:", t.playerRotation);
    const i = {
      ...t
    };
    return Rt.log("Returning preset with playerRotation:", i.playerRotation), i;
  }
  function Gt() {
    return new URLSearchParams(window.location.search).has("gameState");
  }
  const Pt = Object.freeze(Object.defineProperty({
    __proto__: null,
    debugStatePresets: Ti,
    getDebugSpawnState: Ds,
    isDebugSpawnActive: Gt
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  class Ht {
    constructor(e = {}) {
      this.scene = e.scene, this.physicsManager = e.physicsManager, this.cordAttach = e.cordAttach, this.receiver = e.receiver, this.logger = new N(e.loggerName || "PhoneCord", false), this.cordLinks = [], this.cordLineMesh = null, this.cordAttachAnchor = null, this.receiverAnchor = null, this.isDestroyed = false, this.config = {
        cordSegments: 12,
        cordSegmentLength: 0.05,
        cordSegmentRadius: 2e-3,
        cordMass: 2e-3,
        cordDamping: 8,
        cordAngularDamping: 8,
        cordDroopAmount: 2,
        cordRigidSegments: 0,
        initMode: "horizontal",
        cordColor: 8421504,
        cordVisualRadius: 8e-3,
        cordMetalness: 0.3,
        cordRoughness: 0.8,
        cordCollisionGroup: 262146,
        ...e.config
      };
    }
    createCord() {
      if (!this.physicsManager || !this.cordAttach || !this.receiver) return this.logger.warn("Cannot create cord - missing components"), false;
      const e = this.physicsManager.world, t = this.physicsManager.RAPIER, i = new S(), s = new S();
      this.cordAttach.getWorldPosition(i), this.receiver.getWorldPosition(s), new S().subVectors(s, i).normalize();
      const o = this.config.cordSegmentLength, n = i.distanceTo(s), a = this.config.cordSegments * o / n;
      this.logger.log("Creating phone cord with", this.config.cordSegments, "segments"), this.logger.log("  Slack factor:", a.toFixed(2), "(>1 means cord will droop)"), this.logger.log("  CordAttach position (phone booth):", i.toArray()), this.logger.log("  Receiver position:", s.toArray()), this.logger.log("  Rigid segments:", this.config.cordRigidSegments, "at attach point end");
      for (let u = 0; u < this.config.cordSegments; u++) {
        let m = new S(), f = {
          x: 0,
          y: 0,
          z: 0,
          w: 1
        };
        if (this.config.initialSegmentTransforms && this.config.initialSegmentTransforms[u]) {
          const M = this.config.initialSegmentTransforms[u];
          m.set(M.position.x, M.position.y, M.position.z), f = M.rotation, u === 0 && this.logger.log("Using baked initial segment transforms");
        } else if (this.config.initMode === "straight") if (u < this.config.cordRigidSegments) {
          const M = (u + 1) / this.config.cordRigidSegments;
          m.copy(i), m.y += M * o * 0.5;
          const C = new S(s.x, m.y, s.z);
          m.lerp(C, M * 0.3), this.logger.log(`  Segment ${u} (RIGID, straight mode): position`, m.toArray());
        } else {
          const M = (u - this.config.cordRigidSegments + 0.5) / (this.config.cordSegments - this.config.cordRigidSegments), C = new S().copy(i);
          C.y += o * 0.5;
          const P = new S(s.x, C.y, s.z);
          C.lerp(P, 0.3), m.lerpVectors(C, s, M);
        }
        else if (u < this.config.cordRigidSegments) {
          const M = (u + 1) / this.config.cordRigidSegments;
          m.copy(i), m.x += M * o * this.config.cordRigidSegments;
          const C = M * M;
          m.y -= C * o * 2, this.logger.log(`  Segment ${u} (RIGID, horizontal mode): position`, m.toArray());
        } else {
          const M = u - this.config.cordRigidSegments, C = this.config.cordSegments - this.config.cordRigidSegments, P = (M + 0.5) / C, A = new S().copy(i);
          A.x += o * this.config.cordRigidSegments, A.y -= o * 2, m.lerpVectors(A, s, P);
          const R = Math.sin(P * Math.PI) * this.config.cordDroopAmount;
          m.y -= R;
        }
        let x;
        u < this.config.cordRigidSegments ? (x = t.RigidBodyDesc.kinematicPositionBased().setTranslation(m.x, m.y, m.z).setRotation(f), this.logger.log(`  Segment ${u} is KINEMATIC (won't fall)`)) : x = t.RigidBodyDesc.dynamic().setTranslation(m.x, m.y, m.z).setRotation(f).setLinearDamping(this.config.cordDamping).setAngularDamping(this.config.cordAngularDamping);
        const w = e.createRigidBody(x), y = t.ColliderDesc.ball(this.config.cordSegmentRadius).setMass(this.config.cordMass).setCollisionGroups(this.config.cordCollisionGroup), v = e.createCollider(y, w);
        if (u === 0) {
          const M = v.collisionGroups();
          this.logger.log(`  Segment 0 collision groups: 0x${M.toString(16).padStart(8, "0")}`), this.logger.log(`    Belongs to: 0x${(M & 65535).toString(16).padStart(4, "0")}`), this.logger.log(`    Collides with: 0x${(M >> 16 & 65535).toString(16).padStart(4, "0")}`);
        }
        const b = null;
        let T = null;
        if (u === 0) {
          const M = t.RigidBodyDesc.kinematicPositionBased().setTranslation(i.x, i.y, i.z), C = new I().setFromAxisAngle(new S(0, 0, 1), -Math.PI / 2);
          M.setRotation({
            x: C.x,
            y: C.y,
            z: C.z,
            w: C.w
          });
          const P = e.createRigidBody(M);
          this.cordAttachAnchor = P;
          const A = t.JointData.fixed({
            x: 0,
            y: 0,
            z: 0
          }, {
            w: 1,
            x: 0,
            y: 0,
            z: 0
          }, {
            x: 0,
            y: 0,
            z: 0
          }, {
            w: 1,
            x: 0,
            y: 0,
            z: 0
          });
          T = e.createImpulseJoint(A, P, w, true), this.cordLinks.push({
            rigidBody: P,
            mesh: null,
            joint: null,
            isAnchor: true,
            isCordAttachAnchor: true
          });
        } else if (u < this.config.cordRigidSegments) {
          const M = this.cordLinks[this.cordLinks.length - 1], C = t.JointData.fixed({
            x: 0,
            y: 0,
            z: 0
          }, {
            w: 1,
            x: 0,
            y: 0,
            z: 0
          }, {
            x: 0,
            y: 0,
            z: 0
          }, {
            w: 1,
            x: 0,
            y: 0,
            z: 0
          });
          T = e.createImpulseJoint(C, M.rigidBody, w, true);
        } else {
          const M = this.cordLinks[this.cordLinks.length - 1], C = t.JointData.rope(o * 1.5, {
            x: 0,
            y: 0,
            z: 0
          }, {
            x: 0,
            y: 0,
            z: 0
          });
          T = e.createImpulseJoint(C, M.rigidBody, w, true);
        }
        this.cordLinks.push({
          rigidBody: w,
          mesh: b,
          joint: T,
          isAnchor: false
        });
      }
      const l = t.RigidBodyDesc.kinematicPositionBased().setTranslation(s.x, s.y, s.z);
      this.receiverAnchor = e.createRigidBody(l);
      const h = this.cordLinks[this.cordLinks.length - 1], c = t.JointData.rope(o * 1.5, {
        x: 0,
        y: 0,
        z: 0
      }, {
        x: 0,
        y: 0,
        z: 0
      }), d = e.createImpulseJoint(c, h.rigidBody, this.receiverAnchor, true);
      return this.cordLinks.push({
        rigidBody: this.receiverAnchor,
        mesh: null,
        joint: d,
        isAnchor: true,
        isReceiverAnchor: true
      }), this.createCordLine(), this.logger.log("Phone cord created successfully"), true;
    }
    createCordLine() {
      const e = new ot(), t = new Float32Array((this.config.cordSegments + 2) * 3);
      e.setAttribute("position", new Ge(t, 3));
      const i = new ki({
        color: this.config.cordColor,
        metalness: this.config.cordMetalness,
        roughness: this.config.cordRoughness,
        wireframe: false
      });
      this.cordLineMesh = new k(e, i), this.cordLineMesh.renderOrder = 1, this.scene.add(this.cordLineMesh);
    }
    updateCordLine() {
      if (!this.cordLineMesh || !this.cordAttach) return;
      const e = [], t = new S();
      this.cordAttach.getWorldPosition(t), e.push(t.clone());
      for (let o = 1; o < this.cordLinks.length; o++) {
        const n = this.cordLinks[o];
        if (n.isAnchor) continue;
        const r = n.rigidBody.translation();
        e.push(new S(r.x, r.y, r.z));
      }
      if (this.receiver) {
        const o = new S();
        this.receiver.getWorldPosition(o), e.push(o.clone());
      } else if (this.receiverAnchor) {
        const o = this.receiverAnchor.translation();
        e.push(new S(o.x, o.y, o.z));
      }
      const i = new ws(e), s = new to(i, e.length * 2, this.config.cordVisualRadius, 8, false);
      this.cordLineMesh.geometry && this.cordLineMesh.geometry.dispose(), this.cordLineMesh.geometry = s;
    }
    update() {
      if (this.cordAttachAnchor && this.cordAttach) {
        const e = new S();
        this.cordAttach.getWorldPosition(e), this.cordAttachAnchor.setTranslation({
          x: e.x,
          y: e.y,
          z: e.z
        }, true);
      }
      if (this.receiverAnchor && this.receiver) {
        const e = new S();
        this.receiver.getWorldPosition(e), this.receiverAnchor.setTranslation({
          x: e.x,
          y: e.y,
          z: e.z
        }, true);
      }
      this.cordLinks.length > 0 && this.updateCordLine();
    }
    debugExportSegmentTransforms() {
      if (!this.cordLinks || this.cordLinks.length === 0) {
        console.log("No segments to export");
        return;
      }
      const e = [];
      for (let t = 0; t < this.cordLinks.length; t++) {
        const i = this.cordLinks[t];
        if (!i.rigidBody || i.isAnchor) continue;
        const s = i.rigidBody.translation(), o = i.rigidBody.rotation();
        e.push({
          index: e.length,
          position: {
            x: s.x,
            y: s.y,
            z: s.z
          },
          rotation: {
            x: o.x,
            y: o.y,
            z: o.z,
            w: o.w
          }
        });
      }
      return console.log("=== CORD SEGMENT TRANSFORMS ==="), console.log(`Found ${e.length} segments`), console.log("Copy the array below and paste into cordConfig as 'initialSegmentTransforms':"), console.log(JSON.stringify(e, null, 2)), console.log("==============================="), e;
    }
    sever() {
      if (this.isDestroyed || !this.physicsManager || !this.receiverAnchor) return;
      this.logger.log("Severing cord connection from receiver");
      const e = this.physicsManager.world, t = this.physicsManager.RAPIER, i = this.cordLinks.find((s) => s.isReceiverAnchor);
      i && i.joint && (e.removeImpulseJoint(i.joint, true), i.joint = null), this.receiverAnchor && (this.receiverAnchor.setBodyType(t.RigidBodyType.Dynamic, true), this.receiverAnchor.setLinvel({
        x: 0,
        y: -1,
        z: 0
      }, true)), this.receiver = null;
    }
    destroy() {
      if (this.isDestroyed || (this.logger.log("Destroying phone cord"), this.isDestroyed = true, !this.physicsManager)) return;
      const e = this.physicsManager.world;
      this.logger.log(`Removing ${this.cordLinks.length} cord links`);
      for (const t of this.cordLinks) t.joint && e.removeImpulseJoint(t.joint, true), t.rigidBody && e.removeRigidBody(t.rigidBody), t.mesh && (this.scene.remove(t.mesh), t.mesh.geometry.dispose(), t.mesh.material.dispose());
      this.cordLinks = [], this.cordAttachAnchor = null, this.receiverAnchor = null, this.cordLineMesh && (this.scene.remove(this.cordLineMesh), this.cordLineMesh.geometry.dispose(), this.cordLineMesh.material.dispose(), this.cordLineMesh = null), this.logger.log("Phone cord destroyed");
    }
  }
  class on {
    constructor(e = {}) {
      this.sceneManager = e.sceneManager, this.lightManager = e.lightManager, this.sfxManager = e.sfxManager, this.physicsManager = e.physicsManager, this.scene = e.scene, this.camera = e.camera, this.characterController = e.characterController, this.logger = new N("PhoneBooth", false), this.receiverLerp = null, this.receiverDropLerp = null, this.receiver = null, this.receiverOriginalWorldPos = null, this.receiverOriginalWorldRot = null, this.cordAttach = null, this.receiverPositionLocked = false, this.lockedReceiverPos = null, this.lockedReceiverRot = null, this.phoneCord = null, this.receiverRigidBody = null, this.receiverCollider = null, this.config = {
        receiverTargetPos: new S(-0.3, 0, -0.3),
        receiverTargetRot: new U(-0.5, -0.5, -Math.PI / 2),
        receiverTargetScale: new S(1, 1, 1),
        receiverLerpDuration: 1.5,
        receiverLerpEase: (t) => 1 - Math.pow(1 - t, 3),
        cordCriteria: {
          currentState: {
            $lt: p.OFFICE_INTERIOR
          }
        },
        receiverColliderHeight: 0.215,
        receiverColliderRadius: 0.05,
        receiverMass: 0.15,
        receiverDamping: 0.8,
        receiverAngularDamping: 1
      };
    }
    initialize(e = null) {
      if (!this.sceneManager) {
        this.logger.warn("No SceneManager provided");
        return;
      }
      if (this.gameManager = e, !this.sceneManager.hasObject("phonebooth")) {
        this.logger.log("Phonebooth not loaded, skipping initialization");
        return;
      }
      this.sceneManager.on("animation:finished", (t) => {
        t === "phonebooth-ring" && this.handleAnimationFinished();
      }), this.gameManager && this.gameManager.on("state:changed", (t, i) => {
        if (this.phoneCord && this.config.cordCriteria && (X(t, this.config.cordCriteria) || (this.logger.log("\u{1F5D1}\uFE0F Cord criteria no longer met, destroying cord"), this.phoneCord.destroy(), this.phoneCord = null)), i.currentState === p.ANSWERED_PHONE && t.currentState !== p.ANSWERED_PHONE && (this.stopReceiverLerp(), this.receiver && this.receiver.parent === this.camera)) {
          this.logger.log("Locking receiver position relative to camera");
          const s = this.receiver.position.clone(), o = this.receiver.rotation.clone();
          this.receiverPositionLocked = true, this.lockedReceiverPos = s, this.lockedReceiverRot = o;
        }
        t.currentState === p.DRIVE_BY && this.dropReceiverWithPhysics();
      }), this.cordAttach = this.sceneManager.findChildByName("phonebooth", "CordAttach"), this.receiver = this.sceneManager.findChildByName("phonebooth", "Receiver"), this.receiver && (this.receiverOriginalWorldPos = new S(), this.receiverOriginalWorldRot = new I(), this.receiver.getWorldPosition(this.receiverOriginalWorldPos), this.receiver.getWorldQuaternion(this.receiverOriginalWorldRot), this.logger.log("Stored receiver original position:", this.receiverOriginalWorldPos.toArray()), this.gameManager && this.gameManager.state && this.gameManager.state.currentState >= p.DRIVE_BY && (this.logger.log("Starting in DRIVE_BY or later state, positioning receiver in dropped state"), this.initializeReceiverInDroppedState())), this.cordAttach && this.receiver && this.physicsManager ? (this.phoneCord = new Ht({
        scene: this.scene,
        physicsManager: this.physicsManager,
        cordAttach: this.cordAttach,
        receiver: this.receiver,
        loggerName: "PhoneBooth.Cord"
      }), this.phoneCord.createCord()) : this.logger.warn("Cannot create phone cord - missing CordAttach, Receiver, or PhysicsManager"), this.logger.log("Initialized");
    }
    handleAnimationFinished() {
      this.logger.log("Ring animation finished, reparenting receiver"), this.reparentReceiver();
    }
    reparentReceiver() {
      var _a3;
      if (!this.sceneManager || !this.camera) {
        this.logger.warn("Cannot reparent receiver - missing managers");
        return;
      }
      if (this.receiver = this.sceneManager.reparentChild("phonebooth", "Receiver", this.camera), this.receiver) {
        const e = new S();
        this.receiver.getWorldPosition(e), this.logger.log("Receiver successfully attached to camera"), this.logger.log("  Local position:", this.receiver.position.toArray()), this.logger.log("  Local rotation:", this.receiver.rotation.toArray().slice(0, 3)), this.logger.log("  Local scale:", this.receiver.scale.toArray()), this.logger.log("  World position:", e.toArray()), this.logger.log("  Parent:", ((_a3 = this.receiver.parent) == null ? void 0 : _a3.type) || "none"), this.startReceiverLerp();
      } else this.logger.warn("Failed to attach receiver to camera");
    }
    startReceiverLerp() {
      if (!this.receiver) {
        this.logger.warn("Cannot start lerp - no receiver");
        return;
      }
      const e = this.receiver.quaternion.clone(), t = new I().setFromEuler(this.config.receiverTargetRot);
      this.receiverLerp = {
        object: this.receiver,
        startPos: this.receiver.position.clone(),
        targetPos: this.config.receiverTargetPos,
        startQuat: e,
        targetQuat: t,
        startScale: this.receiver.scale.clone(),
        targetScale: this.config.receiverTargetScale,
        duration: this.config.receiverLerpDuration,
        elapsed: 0
      }, this.logger.log("Starting receiver lerp animation");
    }
    stopReceiverLerp() {
      this.receiverLerp && (this.logger.log("Stopping receiver lerp"), this.receiverLerp = null);
    }
    startReceiverDropLerp() {
      if (!this.receiver || !this.receiverOriginalWorldPos || !this.receiverOriginalWorldRot || !this.cordAttach || !this.phoneCord) {
        this.logger.warn("Cannot start drop lerp - no receiver or original position");
        return;
      }
      const e = this.receiver.position.clone(), t = this.receiver.quaternion.clone(), i = new S();
      this.cordAttach.getWorldPosition(i);
      const s = i.clone();
      s.x += this.phoneCord.config.cordSegmentLength * this.phoneCord.config.cordRigidSegments, s.y -= this.phoneCord.config.cordSegmentLength * 2, s.y -= 0.3;
      const o = this.receiverOriginalWorldRot.clone(), n = new I().setFromAxisAngle(new S(1, 0, 0), Math.PI);
      o.multiply(n), this.receiverDropLerp = {
        object: this.receiver,
        startPos: e,
        targetPos: s,
        startQuat: t,
        targetQuat: o,
        duration: 0.8,
        elapsed: 0
      }, this.logger.log("Starting receiver drop animation (below rigid cord section)"), this.logger.log("  Target position:", s.toArray());
    }
    updateReceiverDropLerp(e) {
      if (!this.receiverDropLerp) return;
      this.receiverDropLerp.elapsed += e;
      const t = Math.min(1, this.receiverDropLerp.elapsed / this.receiverDropLerp.duration), i = t * t * t;
      this.receiverDropLerp.object.position.lerpVectors(this.receiverDropLerp.startPos, this.receiverDropLerp.targetPos, i), this.receiverDropLerp.object.quaternion.slerpQuaternions(this.receiverDropLerp.startQuat, this.receiverDropLerp.targetQuat, i), t >= 1 && (this.logger.log("Receiver drop animation complete"), this.receiverDropLerp = null);
    }
    dropReceiverWithPhysics() {
      var _a3, _b2;
      if (!this.receiver || !this.physicsManager || !this.phoneCord) {
        this.logger.warn("Cannot drop receiver - missing receiver, physics manager, or phone cord");
        return;
      }
      this.logger.log("Detaching receiver from camera (no physics)"), this.receiverPositionLocked = false, this.lockedReceiverPos = null, this.lockedReceiverRot = null;
      const e = new S(), t = new I();
      this.receiver.getWorldPosition(e), this.receiver.getWorldQuaternion(t), this.logger.log("Receiver current parent:", ((_a3 = this.receiver.parent) == null ? void 0 : _a3.name) || "none"), this.logger.log("Receiver world position before detach:", e.toArray()), this.scene.attach(this.receiver), this.logger.log("Receiver detached from camera, new parent:", ((_b2 = this.receiver.parent) == null ? void 0 : _b2.name) || "none"), this.logger.log("Receiver world position after detach:", this.receiver.position.toArray()), this.startReceiverDropLerp(), this.characterController && this.characterController.enablePhysicsCollisions();
    }
    updateReceiverLerp(e) {
      if (!this.receiverLerp) return;
      this.receiverLerp.elapsed += e;
      const t = Math.min(1, this.receiverLerp.elapsed / this.receiverLerp.duration), i = this.config.receiverLerpEase(t);
      this.receiverLerp.object.position.lerpVectors(this.receiverLerp.startPos, this.receiverLerp.targetPos, i), this.receiverLerp.object.quaternion.slerpQuaternions(this.receiverLerp.startQuat, this.receiverLerp.targetQuat, i), this.receiverLerp.object.scale.lerpVectors(this.receiverLerp.startScale, this.receiverLerp.targetScale, i), t >= 1 && (this.logger.log("Receiver lerp animation complete"), this.receiverLerp = null);
    }
    update(e) {
      if (this.updateReceiverLerp(e), this.updateReceiverDropLerp(e), this.receiverPositionLocked && this.receiver && this.lockedReceiverPos && (this.receiver.position.copy(this.lockedReceiverPos), this.receiver.rotation.copy(this.lockedReceiverRot)), this.receiverRigidBody && this.receiver) {
        const t = this.receiverRigidBody.translation(), i = this.receiverRigidBody.rotation();
        this.receiver.position.set(t.x, t.y, t.z), this.receiver.quaternion.set(i.x, i.y, i.z, i.w);
      }
      this.phoneCord && this.phoneCord.update();
    }
    setReceiverTargetPosition(e) {
      this.config.receiverTargetPos.copy(e);
    }
    setReceiverTargetRotation(e) {
      this.config.receiverTargetRot.copy(e);
    }
    setReceiverTargetScale(e) {
      this.config.receiverTargetScale.copy(e);
    }
    setReceiverLerpDuration(e) {
      this.config.receiverLerpDuration = e;
    }
    getReceiver() {
      return this.receiver;
    }
    isReceiverAttached() {
      return this.receiver !== null && this.receiver.parent === this.camera;
    }
    initializeReceiverInDroppedState() {
      if (!this.receiver || !this.receiverOriginalWorldPos || !this.receiverOriginalWorldRot || !this.cordAttach || !this.phoneCord) {
        this.logger.warn("Cannot initialize dropped state - missing receiver or original position");
        return;
      }
      this.scene.attach(this.receiver);
      const e = new S();
      this.cordAttach.getWorldPosition(e);
      const t = e.clone();
      t.x += this.phoneCord.config.cordSegmentLength * this.phoneCord.config.cordRigidSegments, t.y -= this.phoneCord.config.cordSegmentLength * 2, t.y -= 0.3;
      const i = this.receiverOriginalWorldRot.clone(), s = new I().setFromAxisAngle(new S(1, 0, 0), Math.PI);
      i.multiply(s), this.receiver.position.copy(t), this.receiver.quaternion.copy(i), this.logger.log("Receiver initialized in dropped state below rigid cord at:", t.toArray()), this.characterController && this.characterController.enablePhysicsCollisions();
    }
    destroy() {
      this.phoneCord && (this.phoneCord.destroy(), this.phoneCord = null), this.receiver && this.receiver.parent && this.receiver.parent.remove(this.receiver), this.receiver = null, this.receiverLerp = null, this.receiverDropLerp = null, this.cordAttach = null;
    }
  }
  class ci {
    constructor(e = {}) {
      this.sceneManager = e.sceneManager, this.physicsManager = e.physicsManager, this.scene = e.scene, this.camera = e.camera, this.logger = new N("CandlestickPhone", false), this.phoneObject = null, this.cordAttach = null, this.receiver = null, this.phoneBody = null, this.phoneGroup = null, this.colliderMesh = null, this.phoneCord = null, this.tableCollider = null, this.tableRigidBody = null, this.meshCollider = null, this.meshColliderBody = null, this.lastPhonePosition = new S(), this.receiverLerp = null, this.phoneBodyLerp = null, this.isHeldToCamera = false, this.receiverHeldScale = null, this.receiverOriginalWorldPos = null, this.receiverOriginalWorldQuat = null, this.receiverOriginalScale = null, this.phoneOriginalWorldPos = null, this.phoneOriginalWorldQuat = null, this.phoneOriginalScale = null, this.config = {
        cordConfig: {
          cordSegments: 10,
          cordSegmentLength: 0.06,
          cordSegmentRadius: 0.05,
          cordMass: 1e-3,
          cordDamping: 5,
          cordAngularDamping: 5,
          cordDroopAmount: 0,
          cordRigidSegments: 0,
          cordColor: 2763306,
          cordVisualRadius: 8e-3,
          cordMetalness: 0.4,
          cordRoughness: 0.7,
          initMode: "straight",
          cordCollisionGroup: 524290,
          initialSegmentTransforms: [
            {
              index: 0,
              position: {
                x: -4.76614236831665,
                y: 1.1566543579101562,
                z: 85.10692596435547
              },
              rotation: {
                x: 0.01608729548752308,
                y: 0.0039041037671267986,
                z: -0.6943904161453247,
                w: 0.7194080352783203
              }
            },
            {
              index: 1,
              position: {
                x: -4.842679500579834,
                y: 1.1704081296920776,
                z: 85.14257049560547
              },
              rotation: {
                x: -0.26038578152656555,
                y: -0.6332693099975586,
                z: -0.7261661887168884,
                w: -0.06206420436501503
              }
            },
            {
              index: 2,
              position: {
                x: -4.890603542327881,
                y: 1.1704081296920776,
                z: 85.21875
              },
              rotation: {
                x: 0.5373536944389343,
                y: -0.2495744377374649,
                z: 0.3767964243888855,
                w: -0.7120309472084045
              }
            },
            {
              index: 3,
              position: {
                x: -4.979955673217773,
                y: 1.1704081296920776,
                z: 85.20796966552734
              },
              rotation: {
                x: 0.3558013141155243,
                y: -0.1129140853881836,
                z: -0.914277970790863,
                w: -0.15732675790786743
              }
            },
            {
              index: 4,
              position: {
                x: -4.987236022949219,
                y: 1.1704081296920776,
                z: 85.29729461669922
              },
              rotation: {
                x: 0.38533830642700195,
                y: -0.8555383682250977,
                z: 0.08497804403305054,
                w: 0.3351823687553406
              }
            },
            {
              index: 5,
              position: {
                x: -4.899610996246338,
                y: 1.1704082489013672,
                z: 85.2767562866211
              },
              rotation: {
                x: -0.5119867324829102,
                y: 0.6058070063591003,
                z: -0.5236726999282837,
                w: -0.31086090207099915
              }
            },
            {
              index: 6,
              position: {
                x: -4.809802532196045,
                y: 1.1704081296920776,
                z: 85.2710189819336
              },
              rotation: {
                x: -0.7087559103965759,
                y: 0.6893279552459717,
                z: -0.08311052620410919,
                w: -0.12483887374401093
              }
            },
            {
              index: 7,
              position: {
                x: -4.720593452453613,
                y: 1.1704086065292358,
                z: 85.2591781616211
              },
              rotation: {
                x: 0.19807924330234528,
                y: -0.15645527839660645,
                z: -0.05735204368829727,
                w: 0.9659178256988525
              }
            },
            {
              index: 8,
              position: {
                x: -4.634779453277588,
                y: 1.180083990097046,
                z: 85.2403335571289
              },
              rotation: {
                x: 0.6636924743652344,
                y: 0.08627700805664062,
                z: 0.7408108115196228,
                w: -0.057167429476976395
              }
            },
            {
              index: 9,
              position: {
                x: -4.622823238372803,
                y: 1.2620922327041626,
                z: 85.20442199707031
              },
              rotation: {
                x: -0.23143023252487183,
                y: -0.7361793518066406,
                z: -0.3078458607196808,
                w: 0.5565167665481567
              }
            }
          ]
        },
        receiverTargetPos: new S(-0.4, 0.05, -0.5),
        receiverTargetRot: new U(-0.5, -0.4, -Math.PI / 2),
        receiverForwardRoll: Math.PI,
        receiverTargetScale: new S(1, 1, 1),
        phoneBodyTargetPos: new S(0, -0.5, -0.5),
        phoneBodyTargetRot: new U(0.15, 0, 0),
        phoneBodyTargetScale: new S(1, 1, 1),
        lerpDuration: 1.2,
        lerpEase: (t) => 1 - Math.pow(1 - t, 3),
        tableSize: {
          x: 1,
          y: 0.1,
          z: 1
        },
        tableOffset: -0.1
      };
    }
    initialize(e = null) {
      if (!this.sceneManager) {
        this.logger.warn("No SceneManager provided");
        return;
      }
      if (this.gameManager = e, this.gameManager && this.gameManager.on("state:changed", (i) => {
        var _a3, _b2;
        if (i.currentState === p.OFFICE_PHONE_ANSWERED && this.handleOfficePhoneAnswered(), i.currentState === p.PRE_VIEWMASTER && this.putDownToOriginal(), i.currentState === p.CZAR_STRUGGLE && setTimeout(() => {
          this.handleOfficePhoneAnswered();
        }, 8e3), i.currentState === p.SHOULDER_TAP && this.putDownToOriginal(), i.currentState >= p.VIEWMASTER_COLOR && i.currentState <= p.POST_VIEWMASTER ? this.setCordVisibility(false) : i.currentState > p.POST_VIEWMASTER && this.setCordVisibility(true), i.currentState === p.LIGHTS_OUT) {
          this.destroyCord(), this.detachFromCamera(), this.logger.log("LIGHTS_OUT: Phone cleanup complete, ready for object removal");
          const s = (_a3 = this.sceneManager) == null ? void 0 : _a3.getObject("candlestickPhone");
          s && (s.visible = false, this.logger.log("LIGHTS_OUT: Set phone object visibility to false"));
        }
        i.currentState === p.WAKING_UP && ((_b2 = this.sceneManager) == null ? void 0 : _b2.hasObject("candlestickPhone")) && this.detachFromCamera();
      }), this.phoneObject = this.sceneManager.getObject("candlestickPhone"), this.cordAttach = this.sceneManager.findChildByName("candlestickPhone", "CordAttach"), this.receiver = this.sceneManager.findChildByName("candlestickPhone", "Receiver"), this.phoneBody = this.sceneManager.findChildByName("candlestickPhone", "PhoneBody"), this.phoneGroup = this.sceneManager.findChildByName("candlestickPhone", "Phone_Parent_Empty"), this.cordAttach || this.logger.warn("CordAttach mesh not found in candlestickPhone model"), this.receiver || this.logger.warn("Receiver mesh not found in candlestickPhone model"), this.phoneBody || this.logger.warn("PhoneBody mesh not found in candlestickPhone model"), this.phoneGroup || this.logger.log("Phone group 'Phone Parent Empty' not found; will use body/root fallback"), this.receiver && (this.receiverOriginalWorldPos = new S(), this.receiverOriginalWorldQuat = new I(), this.receiver.getWorldPosition(this.receiverOriginalWorldPos), this.receiver.getWorldQuaternion(this.receiverOriginalWorldQuat), this.receiverOriginalScale = this.receiver.scale.clone()), this.phoneGroup || this.phoneBody || this.phoneObject) {
        const i = this.phoneGroup || this.phoneBody || this.phoneObject, s = new S(), o = new I();
        i.getWorldPosition(s), i.getWorldQuaternion(o), this.phoneOriginalWorldPos = s.clone(), this.phoneOriginalWorldQuat = o.clone(), this.phoneOriginalScale = i.scale.clone();
      }
      this.colliderMesh = this.sceneManager.findChildByName("candlestickPhone", "Collider");
      const t = (i) => {
        i && i.traverse((s) => {
          var _a3;
          (((_a3 = s.name) == null ? void 0 : _a3.toLowerCase()) || "").includes("collider") && (s.visible = false, s.renderOrder = -9999, s.isMesh && s.material && (Array.isArray(s.material) ? s.material : [
            s.material
          ]).forEach((r) => {
            r.visible = false, r.opacity = 0, r.transparent = true;
          }));
        });
      };
      if (this.phoneObject && (t(this.phoneObject), requestAnimationFrame(() => {
        this.phoneObject && (t(this.phoneObject), this.logger.log("Made all Collider meshes invisible"));
      })), this.colliderMesh) {
        this.createColliderTrimesh();
        const i = this.sceneManager.getObject("candlestickPhone");
        i && i.getWorldPosition(this.lastPhonePosition);
      } else this.logger.warn("Collider mesh not found in candlestickPhone model");
      this.ensurePhoneCord(), this.createTableCollider(), this.ensurePickupCollider(), this.logger.log("Initialized");
    }
    ensurePhoneCord() {
      if (this.phoneCord) return;
      if (this.cordAttach && this.receiver && this.physicsManager) if (this.phoneCord = new Ht({
        scene: this.scene,
        physicsManager: this.physicsManager,
        cordAttach: this.cordAttach,
        receiver: this.receiver,
        gameManager: this.gameManager,
        loggerName: "CandlestickPhone.Cord",
        config: this.config.cordConfig
      }), this.phoneCord.createCord()) {
        this.logger.log("Phone cord created successfully");
        return;
      } else this.logger.warn("Failed to create phone cord"), this.phoneCord = null;
      this.logger.warn("Cannot create phone cord - missing components, will retry"), this.logger.warn(`  cordAttach: ${!!this.cordAttach}, receiver: ${!!this.receiver}, physicsManager: ${!!this.physicsManager}`);
      let e = 0;
      const t = 10, i = 100, s = () => {
        if (e++, this.cordAttach || (this.cordAttach = this.sceneManager.findChildByName("candlestickPhone", "CordAttach")), this.receiver || (this.receiver = this.sceneManager.findChildByName("candlestickPhone", "Receiver")), this.cordAttach && this.receiver && this.physicsManager) if (this.phoneCord = new Ht({
          scene: this.scene,
          physicsManager: this.physicsManager,
          cordAttach: this.cordAttach,
          receiver: this.receiver,
          gameManager: this.gameManager,
          loggerName: "CandlestickPhone.Cord",
          config: this.config.cordConfig
        }), this.phoneCord.createCord()) {
          this.logger.log(`Phone cord created successfully (retry ${e})`);
          return;
        } else this.logger.warn(`Failed to create phone cord (retry ${e})`), this.phoneCord = null;
        if (!this.phoneCord && e < t) {
          const o = i * Math.pow(1.5, e - 1);
          setTimeout(s, o);
        } else this.phoneCord || this.logger.error(`Failed to create phone cord after ${e} retries - giving up`);
      };
      setTimeout(s, i);
    }
    ensurePickupCollider() {
      var _a3;
      if (!((_a3 = this.gameManager) == null ? void 0 : _a3.colliderManager) || !this.sceneManager) {
        this.logger.warn("Cannot ensure pickup collider - missing colliderManager or sceneManager");
        return;
      }
      const e = this.gameManager.colliderManager, t = this.sceneManager.getObject("candlestickPhone");
      if (!t) {
        this.logger.warn("Cannot ensure pickup collider - phone object not found");
        return;
      }
      q(async () => {
        const { colliders: i } = await Promise.resolve().then(() => Xn);
        return {
          colliders: i
        };
      }, void 0).then(({ colliders: i }) => {
        const s = i.find((a) => a.id === "candlestickPhone-pickup");
        if (!s) {
          this.logger.warn("Pickup collider data not found");
          return;
        }
        const o = {
          ...s,
          position: {
            ...s.position
          },
          rotation: {
            ...s.rotation
          },
          dimensions: {
            ...s.dimensions
          }
        }, n = new S();
        t.getWorldPosition(n), o.position = {
          x: n.x,
          y: n.y,
          z: n.z
        }, e.registerCollider(o) ? this.logger.log("Ensured pickup collider exists and is enabled") : this.logger.warn("Failed to ensure pickup collider");
      }).catch((i) => {
        this.logger.error("Failed to import collider data:", i);
      });
    }
    handleOfficePhoneAnswered() {
      if (!this.sceneManager || !this.camera) {
        this.logger.warn("Cannot handle office phone answer - missing managers");
        return;
      }
      let e = false;
      if (this.camera.traverse((t) => {
        t.name === "Receiver" && (this.receiver = t, e = true, this.logger.log("Receiver already attached to camera"));
      }), !e) if (this.receiver && this.receiver.parent === this.sceneManager.getObject("candlestickPhone")) this.receiver = this.sceneManager.reparentChild("candlestickPhone", "Receiver", this.camera);
      else {
        const t = this.sceneManager.getObject("candlestickPhone");
        t && (t.traverse((i) => {
          i.name === "Receiver" && !this.receiver && (this.receiver = i);
        }), this.receiver && (this.camera.attach(this.receiver), this.logger.log("Attached receiver found in phone object to camera")));
      }
      if (this.phoneGroup && this.phoneGroup.parent !== this.camera) this.camera.attach(this.phoneGroup);
      else if (this.phoneBody && this.phoneBody.parent !== this.camera) {
        let t = false;
        if (this.camera.traverse((i) => {
          i.name === "PhoneBody" && (this.phoneBody = i, t = true, this.logger.log("Found phoneBody already attached to camera"));
        }), !t) {
          const i = this.sceneManager.reparentChild("candlestickPhone", "PhoneBody", this.camera);
          i && (this.phoneBody = i);
        }
      } else this.phoneObject && this.phoneObject.parent !== this.camera && this.camera.attach(this.phoneObject);
      this.receiver && this.startReceiverLerp(), this.phoneGroup ? this.startPhoneGroupLerp() : this.phoneBody ? this.startPhoneBodyLerp() : this.phoneObject && this.startPhoneObjectLerp(), this.removeHeldPhysics(), this.disableContactShadow(), this.colliderMesh && (this.colliderMesh.visible = false, this.colliderMesh.renderOrder = -9999, this.colliderMesh.isMesh && this.colliderMesh.material && (Array.isArray(this.colliderMesh.material) ? this.colliderMesh.material : [
        this.colliderMesh.material
      ]).forEach((i) => {
        i.visible = false, i.opacity = 0, i.transparent = true;
      })), this.isHeldToCamera = true;
    }
    startReceiverLerp() {
      if (!this.receiver) return;
      if (this.receiver.parent !== this.camera) {
        this.logger.warn("Cannot start receiver lerp - receiver not attached to camera");
        return;
      }
      const e = this.receiver.position, t = e.length();
      if (t > 100) {
        this.logger.warn(`Receiver position appears invalid (magnitude: ${t.toFixed(2)}), resetting to target`), this.receiver.position.copy(this.config.receiverTargetPos);
        const l = new I().setFromEuler(this.config.receiverTargetRot), h = new I().setFromAxisAngle(new S(0, 0, 1), this.config.receiverForwardRoll || 0);
        this.receiver.quaternion.copy(l.multiply(h)), this.receiverLerp = null;
        return;
      }
      const i = this.config.receiverTargetPos;
      if (e.distanceTo(i) < 0.01) {
        this.receiver.position.copy(i);
        const l = new I().setFromEuler(this.config.receiverTargetRot), h = new I().setFromAxisAngle(new S(0, 0, 1), this.config.receiverForwardRoll || 0);
        this.receiver.quaternion.copy(l.multiply(h)), this.receiverLerp = null, this.logger.log("Receiver already at target position, skipping lerp");
        return;
      }
      const o = this.receiver.quaternion.clone(), n = new I().setFromEuler(this.config.receiverTargetRot), r = new I().setFromAxisAngle(new S(0, 0, 1), this.config.receiverForwardRoll || 0), a = n.multiply(r);
      this.receiverHeldScale = this.receiver.scale.clone(), this.receiverLerp = {
        object: this.receiver,
        startPos: this.receiver.position.clone(),
        targetPos: this.config.receiverTargetPos,
        startQuat: o,
        targetQuat: a,
        startScale: this.receiver.scale.clone(),
        targetScale: this.receiver.scale.clone(),
        duration: this.config.lerpDuration,
        elapsed: 0
      };
    }
    putDownToOriginal() {
      if (!this.sceneManager) return;
      this.isHeldToCamera = false, this.receiver && this.receiver.parent === this.camera && this.scene.attach(this.receiver);
      const e = this.phoneGroup || this.phoneBody || this.phoneObject;
      if (e && e.parent === this.camera && this.scene.attach(e), this.receiver && this.receiverOriginalWorldPos && this.receiverOriginalWorldQuat) {
        const t = this.receiver.parent || this.scene, i = new Me().copy(t.matrixWorld).invert(), s = this.receiverOriginalWorldPos.clone(), o = this.receiverOriginalWorldQuat.clone(), n = s.clone().applyMatrix4(i), r = o.clone();
        this.receiverLerp = {
          object: this.receiver,
          startPos: this.receiver.position.clone(),
          targetPos: n,
          startQuat: this.receiver.quaternion.clone(),
          targetQuat: r,
          startScale: this.receiver.scale.clone(),
          targetScale: this.receiverOriginalScale ? this.receiverOriginalScale.clone() : this.receiver.scale.clone(),
          duration: this.config.lerpDuration,
          elapsed: 0
        };
      }
      if (e && this.phoneOriginalWorldPos && this.phoneOriginalWorldQuat) {
        const t = e.parent || this.scene, i = new Me().copy(t.matrixWorld).invert(), s = this.phoneOriginalWorldPos.clone(), o = this.phoneOriginalWorldQuat.clone(), n = s.clone().applyMatrix4(i), r = o.clone();
        this.phoneBodyLerp = {
          object: e,
          startPos: e.position.clone(),
          targetPos: n,
          startQuat: e.quaternion.clone(),
          targetQuat: r,
          startScale: e.scale.clone(),
          targetScale: this.phoneOriginalScale ? this.phoneOriginalScale.clone() : e.scale.clone(),
          duration: this.config.lerpDuration,
          elapsed: 0
        };
      }
      this.enableContactShadow();
    }
    startPhoneBodyLerp() {
      if (!this.phoneBody) return;
      const e = this.phoneBody.quaternion.clone(), t = new I().setFromEuler(this.config.phoneBodyTargetRot);
      this.phoneBodyLerp = {
        object: this.phoneBody,
        startPos: this.phoneBody.position.clone(),
        targetPos: this.config.phoneBodyTargetPos,
        startQuat: e,
        targetQuat: t,
        startScale: this.phoneBody.scale.clone(),
        targetScale: this.config.phoneBodyTargetScale,
        duration: this.config.lerpDuration,
        elapsed: 0
      };
    }
    startPhoneGroupLerp() {
      if (!this.phoneGroup) return;
      const e = this.phoneGroup.quaternion.clone(), t = new I().setFromEuler(this.config.phoneBodyTargetRot);
      this.phoneBodyLerp = {
        object: this.phoneGroup,
        startPos: this.phoneGroup.position.clone(),
        targetPos: this.config.phoneBodyTargetPos,
        startQuat: e,
        targetQuat: t,
        startScale: this.phoneGroup.scale.clone(),
        targetScale: this.config.phoneBodyTargetScale,
        duration: this.config.lerpDuration,
        elapsed: 0
      };
    }
    startPhoneObjectLerp() {
      if (!this.phoneObject) return;
      const e = this.phoneObject.quaternion.clone(), t = new I().setFromEuler(this.config.phoneBodyTargetRot);
      this.phoneBodyLerp = {
        object: this.phoneObject,
        startPos: this.phoneObject.position.clone(),
        targetPos: this.config.phoneBodyTargetPos,
        startQuat: e,
        targetQuat: t,
        startScale: this.phoneObject.scale.clone(),
        targetScale: this.config.phoneBodyTargetScale,
        duration: this.config.lerpDuration,
        elapsed: 0
      };
    }
    removeHeldPhysics() {
      if (!this.physicsManager) return;
      const e = this.physicsManager.world;
      this.tableRigidBody && (e.removeRigidBody(this.tableRigidBody), this.tableRigidBody = null, this.tableCollider = null), this.meshColliderBody && (this.meshCollider && (e.removeCollider(this.meshCollider, false), this.meshCollider = null), e.removeRigidBody(this.meshColliderBody), this.meshColliderBody = null);
    }
    createTableCollider() {
      if (!this.physicsManager || !this.sceneManager) {
        this.logger.warn("Cannot create table collider - missing physics manager");
        return;
      }
      const e = this.sceneManager.getObject("candlestickPhone");
      if (!e) {
        this.logger.warn("Cannot create table collider - candlestickPhone object not found");
        return;
      }
      let t = new S();
      this.cordAttach ? (this.cordAttach.getWorldPosition(t), this.logger.log("Using CordAttach position as reference for table placement")) : (e.getWorldPosition(t), this.logger.log("Using phone base position as reference for table placement"));
      const i = {
        x: t.x,
        y: t.y + this.config.tableOffset,
        z: t.z
      }, s = this.physicsManager.RAPIER, o = this.physicsManager.world, n = s.RigidBodyDesc.fixed().setTranslation(i.x, i.y, i.z);
      this.tableRigidBody = o.createRigidBody(n);
      const r = s.ColliderDesc.cuboid(this.config.tableSize.x, this.config.tableSize.y, this.config.tableSize.z).setFriction(0.7).setRestitution(0).setCollisionGroups(131080);
      this.tableCollider = o.createCollider(r, this.tableRigidBody);
      const a = i.y + this.config.tableSize.y, l = i.y - this.config.tableSize.y;
      this.logger.log(`Created table collider at position (${i.x.toFixed(2)}, ${i.y.toFixed(2)}, ${i.z.toFixed(2)})`), this.logger.log(`Table size: ${(this.config.tableSize.x * 2).toFixed(2)}m x ${(this.config.tableSize.y * 2).toFixed(2)}m x ${(this.config.tableSize.z * 2).toFixed(2)}m`), this.logger.log(`Table Y range: ${l.toFixed(2)}m (bottom) to ${a.toFixed(2)}m (top)`), this.logger.log(`Reference point Y: ${t.y.toFixed(2)}m`), this.logger.log(`Clearance below reference: ${(t.y - a).toFixed(2)}m`);
    }
    createColliderTrimesh() {
      if (!this.physicsManager || !this.colliderMesh) {
        this.logger.warn("Cannot create trimesh collider - missing physics manager or collider mesh");
        return;
      }
      const e = this.physicsManager.RAPIER, t = this.physicsManager.world, i = this.physicsManager.extractGeometryFromObject(this.colliderMesh);
      if (!i) {
        this.logger.error("Failed to extract geometry from Collider mesh");
        return;
      }
      const { vertices: s, indices: o } = i, n = e.RigidBodyDesc.kinematicPositionBased().setTranslation(0, 0, 0).setRotation({
        x: 0,
        y: 0,
        z: 0,
        w: 1
      });
      this.meshColliderBody = t.createRigidBody(n);
      const r = e.ColliderDesc.trimesh(s, o).setFriction(0.7).setRestitution(0).setCollisionGroups(131080);
      this.meshCollider = t.createCollider(r, this.meshColliderBody);
      const a = this.meshCollider.collisionGroups();
      this.logger.log(`Created trimesh collider from Collider mesh with ${s.length / 3} vertices and ${o.length / 3} triangles (world-space geometry, body at origin)`), this.logger.log(`Trimesh collision groups: 0x${a.toString(16).padStart(8, "0")}`), this.logger.log(`  Belongs to groups: 0x${(a & 65535).toString(16).padStart(4, "0")}`), this.logger.log(`  Collides with groups: 0x${(a >> 16 & 65535).toString(16).padStart(4, "0")}`);
    }
    update(e) {
      if (this.phoneCord && this.phoneCord.update(), this.meshColliderBody && this.sceneManager) {
        const t = this.sceneManager.getObject("candlestickPhone");
        if (t) {
          const i = new S();
          t.getWorldPosition(i);
          const s = new S().subVectors(i, this.lastPhonePosition);
          this.meshColliderBody.setTranslation({
            x: s.x,
            y: s.y,
            z: s.z
          }, true), this._updateFrameCount || (this._updateFrameCount = 0), this._updateFrameCount++, this._updateFrameCount % 60 === 0 && this.logger.log(`Collider update: phone=(${i.x.toFixed(2)}, ${i.y.toFixed(2)}, ${i.z.toFixed(2)}), offset=(${s.x.toFixed(2)}, ${s.y.toFixed(2)}, ${s.z.toFixed(2)})`);
        }
      }
      if (this.receiverLerp) {
        this.receiverLerp.elapsed += e;
        const t = Math.min(1, this.receiverLerp.elapsed / this.receiverLerp.duration), i = this.config.lerpEase(t);
        this.receiverLerp.object.position.lerpVectors(this.receiverLerp.startPos, this.receiverLerp.targetPos, i), this.receiverLerp.object.quaternion.slerpQuaternions(this.receiverLerp.startQuat, this.receiverLerp.targetQuat, i), this.receiverLerp.object.scale.lerpVectors(this.receiverLerp.startScale, this.receiverLerp.targetScale, i), t >= 1 && (this.receiverLerp = null);
      }
      if (this.phoneBodyLerp) {
        this.phoneBodyLerp.elapsed += e;
        const t = Math.min(1, this.phoneBodyLerp.elapsed / this.phoneBodyLerp.duration), i = this.config.lerpEase(t);
        this.phoneBodyLerp.object.position.lerpVectors(this.phoneBodyLerp.startPos, this.phoneBodyLerp.targetPos, i), this.phoneBodyLerp.object.quaternion.slerpQuaternions(this.phoneBodyLerp.startQuat, this.phoneBodyLerp.targetQuat, i), this.phoneBodyLerp.object.scale.lerpVectors(this.phoneBodyLerp.startScale, this.phoneBodyLerp.targetScale, i), t >= 1 && (this.phoneBodyLerp = null);
      }
      if (this.isHeldToCamera) {
        if (this.receiver && !this.receiverLerp && this.receiver.parent === this.camera) {
          this.receiver.position.copy(this.config.receiverTargetPos);
          const i = new I().setFromEuler(this.config.receiverTargetRot), s = new I().setFromAxisAngle(new S(0, 0, 1), this.config.receiverForwardRoll || 0);
          this.receiver.quaternion.copy(i.multiply(s)), this.receiverHeldScale && this.receiver.scale.copy(this.receiverHeldScale);
        }
        const t = this.phoneBody || this.phoneObject;
        t && !this.phoneBodyLerp && t.parent === this.camera && (t.position.copy(this.config.phoneBodyTargetPos), t.quaternion.setFromEuler(this.config.phoneBodyTargetRot), t.scale.copy(this.config.phoneBodyTargetScale));
      }
    }
    getReceiver() {
      return this.receiver;
    }
    getCordAttach() {
      return this.cordAttach;
    }
    getPhoneCord() {
      return this.phoneCord;
    }
    setCordVisibility(e) {
      this.phoneCord && this.phoneCord.cordLineMesh && (this.phoneCord.cordLineMesh.visible = e, this.logger.log(`Phone cord visibility: ${e}`));
    }
    disableContactShadow() {
      if (!this.sceneManager || !this.sceneManager.contactShadows) return;
      const e = this.sceneManager.contactShadows.get("candlestickPhone");
      e && typeof e.disable == "function" && (e.disable(), this.logger.log("Disabled contact shadow"));
    }
    enableContactShadow() {
      if (!this.sceneManager || !this.sceneManager.contactShadows) return;
      const e = this.sceneManager.contactShadows.get("candlestickPhone");
      e && typeof e.enable == "function" && (e.enable(), this.logger.log("Enabled contact shadow"));
    }
    detachFromCamera() {
      var _a3;
      if (!this.scene || !this.camera || !this.sceneManager) return;
      this.receiverLerp = null, this.phoneBodyLerp = null, this.isHeldToCamera = false;
      const e = this.sceneManager.getObject("candlestickPhone");
      if (!e) {
        this.receiver && this.receiver.parent === this.camera && (this.camera.remove(this.receiver), this.scene.add(this.receiver), this.logger.log("Detached receiver from camera to scene root (phone object removed)"));
        const s = this.phoneGroup || this.phoneBody;
        s && s.parent === this.camera && (this.camera.remove(s), this.scene.add(s), this.logger.log("Detached phone body from camera to scene root (phone object removed)")), this.phoneObject = null, this.receiver = null, this.phoneBody = null, this.phoneGroup = null;
        return;
      }
      const t = (_a3 = this.sceneManager.contactShadows) == null ? void 0 : _a3.get("candlestickPhone");
      t && typeof t.dispose == "function" && (t.dispose(), this.sceneManager.contactShadows.delete("candlestickPhone"), this.logger.log("Disposed contact shadow before phone removal")), this.receiver && this.receiver.parent === this.camera && (e.attach(this.receiver), this.logger.log("Reattached receiver to phone object"));
      const i = this.phoneGroup || this.phoneBody;
      i && i.parent === this.camera && (e.attach(i), this.logger.log("Reattached phone body to phone object")), this.phoneObject = null, this.receiver = null, this.phoneBody = null, this.phoneGroup = null;
    }
    destroyCord() {
      this.phoneCord && (this.phoneCord.destroy(), this.phoneCord = null, this.logger.log("Phone cord destroyed"));
    }
    destroy() {
      if (this.detachFromCamera(), this.camera) {
        const e = [];
        this.camera.traverse((t) => {
          (t.name === "Receiver" || t.name === "PhoneBody" || t.name === "Phone_Parent_Empty" || t.name === "Phone Group") && e.push(t);
        }), e.forEach((t) => {
          t.parent && (t.parent.remove(t), this.logger.log(`Removed ${t.name} from camera`));
        });
      }
      if (this.scene) {
        const e = [];
        this.scene.traverse((t) => {
          var _a3;
          if (t !== this.scene && (t.name === "Receiver" || t.name === "PhoneBody" || t.name === "Phone_Parent_Empty" || t.name === "Phone Group")) {
            let i = false, s = t.parent;
            for (; s && s !== this.scene; ) {
              if (s.name === "candlestickPhone" || ((_a3 = s.userData) == null ? void 0 : _a3.objectId) === "candlestickPhone") {
                i = true;
                break;
              }
              s = s.parent;
            }
            i || e.push(t);
          }
        }), e.forEach((t) => {
          t.parent && (t.parent.remove(t), this.logger.log(`Removed ${t.name} from scene`));
        });
      }
      if (this.phoneCord && (this.phoneCord.destroy(), this.phoneCord = null), this.physicsManager && this.tableRigidBody && (this.physicsManager.world.removeRigidBody(this.tableRigidBody), this.tableRigidBody = null, this.tableCollider = null, this.logger.log("Removed table collider")), this.physicsManager && this.meshColliderBody) {
        const e = this.physicsManager.world;
        this.meshCollider && (e.removeCollider(this.meshCollider, false), this.meshCollider = null), e.removeRigidBody(this.meshColliderBody), this.meshColliderBody = null, this.logger.log("Removed mesh trimesh collider");
      }
      this.receiver = null, this.cordAttach = null, this.phoneBody = null, this.phoneGroup = null, this.phoneObject = null, this.logger.log("Destroyed");
    }
  }
  class Qi {
    constructor(e = {}) {
      this.sceneManager = e.sceneManager, this.physicsManager = e.physicsManager, this.scene = e.scene, this.logger = new N("AmplifierCord", false), this.cordAttach = null, this.viewmasterCordAttach = null, this.phoneCord = null, this.config = {
        cordConfig: {
          cordSegments: 38,
          cordSegmentLength: 0.08,
          cordSegmentRadius: 2e-3,
          cordMass: 2e-3,
          cordDamping: 8,
          cordAngularDamping: 8,
          cordDroopAmount: 6,
          cordRigidSegments: 2,
          cordColor: 8421504,
          cordVisualRadius: 8e-3,
          cordMetalness: 0.3,
          cordRoughness: 0.8,
          initMode: "horizontal",
          cordCollisionGroup: 262146
        },
        cordCriteria: {
          currentState: {
            $gte: p.LIGHTS_OUT
          }
        }
      };
    }
    initialize(e = null) {
      if (!this.sceneManager) {
        this.logger.warn("No SceneManager provided");
        return;
      }
      if (this.gameManager = e, !this.sceneManager.hasObject("amplifier")) {
        this.logger.log("Amplifier not loaded, skipping initialization");
        return;
      }
      if (this.gameManager && this.gameManager.on("state:changed", (t, i) => {
        if (this.config.cordCriteria) {
          const s = X(t, this.config.cordCriteria);
          s && !this.phoneCord ? this.createCord() : !s && this.phoneCord && (this.logger.log("\u{1F5D1}\uFE0F Cord criteria no longer met, destroying cord"), this.phoneCord.destroy(), this.phoneCord = null);
        }
      }), this.cordAttach = this.sceneManager.findChildByName("amplifier", "CordAttach"), this.viewmasterCordAttach = this.sceneManager.findChildByName("viewmaster", "CordAttach"), this.cordAttach || this.logger.warn("CordAttach mesh not found in amplifier model"), this.viewmasterCordAttach || this.logger.warn("CordAttach mesh not found in viewmaster model"), this.gameManager && this.cordAttach && this.viewmasterCordAttach && this.physicsManager) {
        const t = this.gameManager.getState();
        X(t, this.config.cordCriteria) && this.createCord();
      }
      this.logger.log("Initialized");
    }
    createCord() {
      if (!this.cordAttach || !this.viewmasterCordAttach || !this.physicsManager) {
        this.logger.warn("Cannot create cord - missing CordAttach (amplifier or viewmaster), or PhysicsManager");
        return;
      }
      this.phoneCord = new Ht({
        scene: this.scene,
        physicsManager: this.physicsManager,
        cordAttach: this.cordAttach,
        receiver: this.viewmasterCordAttach,
        loggerName: "AmplifierCord.Cord",
        config: this.config.cordConfig
      }), this.phoneCord.createCord() ? this.logger.log("Amplifier cord created successfully") : this.logger.warn("Failed to create amplifier cord");
    }
    update(e) {
      this.phoneCord && this.phoneCord.update();
    }
    getPhoneCord() {
      return this.phoneCord;
    }
    setCordVisibility(e) {
      this.phoneCord && this.phoneCord.cordLineMesh && (this.phoneCord.cordLineMesh.visible = e, this.logger.log(`Amplifier cord visibility: ${e}`));
    }
    destroy() {
      this.phoneCord && (this.phoneCord.destroy(), this.phoneCord = null), this.cordAttach = null, this.viewmasterCordAttach = null, this.logger.log("Destroyed");
    }
  }
  const Zi = new N("VideoData", false), K = {
    shadowGlimpse: {
      id: "shadowGlimpse",
      videoPath: "/video/shadow-glimpse.webm",
      preload: false,
      position: {
        x: -17.95,
        y: 1.22,
        z: 39.24
      },
      rotation: {
        x: 0,
        y: 1.4075,
        z: 0
      },
      scale: {
        x: 0.95,
        y: 0.88,
        z: 1
      },
      loop: false,
      muted: true,
      billboard: true,
      criteria: {
        shadowGlimpse: true
      },
      autoPlay: true,
      once: true,
      priority: 0,
      platform: "!safari"
    },
    shadowGlimpseSafari: {
      id: "shadowGlimpseSafari",
      videoPath: "/video/mov/shadow-glimpse.mov",
      preload: false,
      position: {
        x: -17.95,
        y: 1.22,
        z: 39.24
      },
      rotation: {
        x: 0,
        y: 1.4075,
        z: 0
      },
      scale: {
        x: 0.95,
        y: 0.88,
        z: 1
      },
      loop: false,
      muted: true,
      billboard: true,
      criteria: {
        shadowGlimpse: true
      },
      autoPlay: true,
      once: true,
      priority: 0,
      platform: "safari"
    },
    cat: {
      id: "cat",
      videoPath: "/video/cat.webm",
      preload: false,
      position: {
        x: -24.13,
        y: -1.48,
        z: 21.46
      },
      rotation: {
        x: 0,
        y: 1.5708,
        z: 0
      },
      scale: {
        x: 1,
        y: 1,
        z: 1
      },
      loop: false,
      muted: false,
      billboard: true,
      criteria: {
        heardCat: true
      },
      autoPlay: true,
      once: true,
      priority: 0,
      platform: "!safari"
    },
    catSafari: {
      id: "catSafari",
      videoPath: "/video/mov/cat-1-hvec.mov",
      preload: false,
      position: {
        x: -24.13,
        y: -1.48,
        z: 21.46
      },
      rotation: {
        x: 0,
        y: 1.5708,
        z: 0
      },
      scale: {
        x: 1,
        y: 1,
        z: 1
      },
      loop: false,
      muted: false,
      billboard: true,
      criteria: {
        heardCat: true,
        currentState: {
          $gte: p.INTRO
        }
      },
      autoPlay: true,
      once: true,
      priority: 0,
      platform: "safari"
    },
    cat2: {
      id: "cat2",
      videoPath: "/video/cat-2.webm",
      gizmo: false,
      preload: false,
      position: {
        x: -1.39,
        y: 1.91,
        z: 81.48
      },
      rotation: {
        x: 0,
        y: -0.8856,
        z: 0
      },
      scale: {
        x: 0.12,
        y: 0.21,
        z: 1.31
      },
      loop: false,
      muted: false,
      billboard: true,
      criteria: {
        currentState: {
          $gte: p.POST_VIEWMASTER,
          $lte: p.EDISON
        }
      },
      autoPlay: true,
      once: true,
      priority: 0,
      delay: 3.5,
      platform: "!safari"
    },
    cat2Safari: {
      id: "cat2Safari",
      videoPath: "/video/mov/cat-2-paws.mov",
      gizmo: false,
      preload: false,
      position: {
        x: -1.39,
        y: 1.91,
        z: 81.48
      },
      rotation: {
        x: 0,
        y: -0.8856,
        z: 0
      },
      scale: {
        x: 0.12,
        y: 0.21,
        z: 1.31
      },
      loop: false,
      muted: false,
      billboard: true,
      criteria: {
        currentState: {
          $gte: p.POST_VIEWMASTER,
          $lte: p.EDISON
        }
      },
      autoPlay: true,
      once: true,
      priority: 0,
      delay: 3.5,
      platform: "safari"
    },
    punch: {
      id: "punch",
      videoPath: "/video/punch.webm",
      preload: false,
      position: (g) => (g == null ? void 0 : g.characterController) ? g.characterController.getPosition({
        x: 0,
        y: 1.5,
        z: 1.35
      }) : (Zi.warn("Cannot get player position, using origin"), {
        x: 0,
        y: 1.8,
        z: 0
      }),
      rotation: {
        x: 0,
        y: 0,
        z: 0
      },
      scale: {
        x: 0.79,
        y: 0.79,
        z: 0.79
      },
      loop: false,
      muted: true,
      billboard: true,
      once: true,
      priority: 0,
      spawnCriteria: {
        currentState: {
          $gte: p.SHOULDER_TAP,
          $lt: p.LIGHTS_OUT
        }
      },
      autoPlay: true,
      delay: 0.2,
      platform: "!safari"
    },
    punchSafari: {
      id: "punchSafari",
      videoPath: "/video/mov/shadow-punch.mov",
      preload: false,
      position: (g) => (g == null ? void 0 : g.characterController) ? g.characterController.getPosition({
        x: 0,
        y: 1.5,
        z: 1.35
      }) : (Zi.warn("Cannot get player position, using origin"), {
        x: 0,
        y: 1.8,
        z: 0
      }),
      rotation: {
        x: 0,
        y: 0,
        z: 0
      },
      scale: {
        x: 0.79,
        y: 0.79,
        z: 0.79
      },
      loop: false,
      muted: true,
      billboard: true,
      once: true,
      priority: 0,
      spawnCriteria: {
        currentState: {
          $gte: p.SHOULDER_TAP,
          $lt: p.LIGHTS_OUT
        }
      },
      autoPlay: true,
      delay: 0.2,
      platform: "safari"
    },
    hesTiedUsUp: {
      id: "hesTiedUsUp",
      videoPath: "/video/cole-hes-tied-us-up.webm",
      preload: false,
      position: {
        x: -4.28,
        y: 5.94,
        z: 75.77
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0
      },
      scale: {
        x: 0.39,
        y: 0.67,
        z: 0.81
      },
      autoPlay: true,
      loop: false,
      billboard: true,
      muted: false,
      delay: 6,
      once: true,
      criteria: {
        currentState: {
          $gte: p.WAKING_UP
        }
      },
      platform: "!safari"
    },
    hesTiedUsUpSafari: {
      id: "hesTiedUsUpSafari",
      videoPath: "/video/mov/leclaire-hes-tied-us-up.mov",
      preload: false,
      position: {
        x: -4.28,
        y: 5.94,
        z: 75.77
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0
      },
      scale: {
        x: 0.39,
        y: 0.67,
        z: 0.81
      },
      autoPlay: true,
      loop: false,
      billboard: true,
      muted: false,
      delay: 6,
      once: true,
      criteria: {
        currentState: {
          $gte: p.WAKING_UP
        }
      },
      platform: "safari"
    },
    soUnkind: {
      id: "soUnkind",
      videoPath: "/video/shadow-unkind.webm",
      preload: false,
      position: {
        x: -12.7,
        y: 1.52,
        z: 79.28
      },
      rotation: {
        x: 0,
        y: 1.3344,
        z: 0
      },
      scale: {
        x: 1.22,
        y: 0.91,
        z: 3.04
      },
      autoPlay: true,
      loop: false,
      billboard: false,
      muted: false,
      delay: 6,
      criteria: {
        currentState: {
          $eq: p.WAKING_UP
        },
        dialogChoice2: {
          $ne: te.EMPATH
        }
      },
      spatial: true,
      audioPositionOffset: {
        x: 0,
        y: 0,
        z: 0
      },
      pannerAttr: {
        panningModel: "HRTF",
        refDistance: 5,
        rolloffFactor: 1,
        distanceModel: "inverse",
        maxDistance: 100
      },
      playNext: "shadowAmplifications",
      platform: "!safari"
    },
    soUnkindSafari: {
      id: "soUnkindSafari",
      videoPath: "/video/mov/shadow-so-unkind.mov",
      preload: false,
      position: {
        x: -12.7,
        y: 1.52,
        z: 79.28
      },
      rotation: {
        x: 0,
        y: 1.3344,
        z: 0
      },
      scale: {
        x: 1.22,
        y: 0.91,
        z: 3.04
      },
      autoPlay: true,
      loop: false,
      billboard: false,
      muted: false,
      delay: 6,
      criteria: {
        currentState: {
          $eq: p.WAKING_UP
        },
        dialogChoice2: {
          $ne: te.EMPATH
        }
      },
      spatial: true,
      audioPositionOffset: {
        x: 0,
        y: 0,
        z: 0
      },
      pannerAttr: {
        panningModel: "HRTF",
        refDistance: 5,
        rolloffFactor: 1,
        distanceModel: "inverse",
        maxDistance: 100
      },
      playNext: "shadowAmplificationsSafari",
      platform: "safari"
    },
    shadowQuietTheGirl: {
      id: "shadowQuietTheGirl",
      videoPath: "/video/shadow-quiet-the-girl.webm",
      preload: false,
      position: {
        x: -12.7,
        y: 1.52,
        z: 79.28
      },
      rotation: {
        x: 0,
        y: 1.3344,
        z: 0
      },
      scale: {
        x: 1.22,
        y: 0.91,
        z: 3.04
      },
      autoPlay: true,
      loop: false,
      billboard: false,
      muted: false,
      delay: 8,
      criteria: {
        currentState: {
          $eq: p.WAKING_UP
        },
        dialogChoice2: te.EMPATH
      },
      spatial: true,
      audioPositionOffset: {
        x: 0,
        y: 0,
        z: 0
      },
      pannerAttr: {
        panningModel: "HRTF",
        refDistance: 5,
        rolloffFactor: 1,
        distanceModel: "inverse",
        maxDistance: 100
      },
      playNext: "shadowAmplifications",
      platform: "!safari"
    },
    shadowQuietTheGirlSafari: {
      id: "shadowQuietTheGirlSafari",
      videoPath: "/video/mov/shadow-quiet-the-girl.mov",
      preload: false,
      position: {
        x: -12.7,
        y: 1.52,
        z: 79.28
      },
      rotation: {
        x: 0,
        y: 1.3344,
        z: 0
      },
      scale: {
        x: 1.22,
        y: 0.91,
        z: 3.04
      },
      autoPlay: true,
      loop: false,
      billboard: false,
      muted: false,
      delay: 8,
      criteria: {
        currentState: {
          $eq: p.WAKING_UP
        },
        dialogChoice2: te.EMPATH
      },
      spatial: true,
      audioPositionOffset: {
        x: 0,
        y: 0,
        z: 0
      },
      pannerAttr: {
        panningModel: "HRTF",
        refDistance: 5,
        rolloffFactor: 1,
        distanceModel: "inverse",
        maxDistance: 100
      },
      playNext: "shadowAmplificationsSafari",
      platform: "safari"
    },
    shadowAmplifications: {
      id: "shadowAmplifications",
      videoPath: "/video/shadow-amplifications-2.webm",
      preload: false,
      position: {
        x: -8.47,
        y: 1.96,
        z: 75.51
      },
      rotation: {
        x: 0,
        y: -0.2291,
        z: 0
      },
      scale: {
        x: 0.94,
        y: 0.91,
        z: 3.04
      },
      autoPlay: false,
      loop: false,
      billboard: false,
      muted: false,
      delay: 1,
      onComplete: (g) => {
        console.log("shadowAmplifications complete"), g.setState({
          currentState: p.SHADOW_AMPLIFICATIONS,
          isViewmasterEquipped: true,
          viewmasterManuallyRemoved: false,
          viewmasterOverheatDialogIndex: null
        });
      },
      platform: "!safari"
    },
    shadowAmplificationsSafari: {
      id: "shadowAmplificationsSafari",
      videoPath: "/video/mov/shadow-amplifications.mov",
      preload: false,
      position: {
        x: -8.47,
        y: 1.96,
        z: 75.51
      },
      rotation: {
        x: 0,
        y: -0.2291,
        z: 0
      },
      scale: {
        x: 0.94,
        y: 0.91,
        z: 3.04
      },
      autoPlay: false,
      loop: false,
      billboard: false,
      muted: false,
      delay: 1,
      onComplete: (g) => {
        console.log("shadowAmplifications complete"), g.setState({
          currentState: p.SHADOW_AMPLIFICATIONS,
          isViewmasterEquipped: true,
          viewmasterManuallyRemoved: false,
          viewmasterOverheatDialogIndex: null
        });
      },
      platform: "safari"
    },
    catChew: {
      id: "catChew",
      videoPath: "/video/cat-3-wire.webm",
      preload: false,
      position: {
        x: -2.1,
        y: 1.26,
        z: 80.85
      },
      rotation: {
        x: 0,
        y: -0.5905,
        z: 0
      },
      scale: {
        x: 0.18,
        y: 0.28,
        z: 3.04
      },
      autoPlay: true,
      loop: false,
      billboard: true,
      muted: false,
      delay: 0,
      once: true,
      criteria: {
        currentState: {
          $gte: p.CAT_SAVE
        }
      },
      platform: "!safari"
    },
    catChewSafari: {
      id: "catChewSafari",
      videoPath: "/video/mov/cat-3-wire.mov",
      preload: false,
      position: {
        x: -2.1,
        y: 1.26,
        z: 80.85
      },
      rotation: {
        x: 0,
        y: -0.5905,
        z: 0
      },
      scale: {
        x: 0.18,
        y: 0.28,
        z: 3.04
      },
      autoPlay: true,
      loop: false,
      billboard: true,
      muted: false,
      delay: 0,
      once: true,
      criteria: {
        currentState: {
          $gte: p.CAT_SAVE
        }
      },
      platform: "safari"
    },
    shadowTrance: {
      id: "shadowTrance",
      videoPath: "/video/shadow-trance.webm",
      preload: false,
      position: {
        x: -10.42,
        y: 2.2,
        z: 81.94
      },
      rotation: {
        x: 0,
        y: 1.4047,
        z: 0
      },
      scale: {
        x: 1.07,
        y: 1.52,
        z: 1.52
      },
      autoPlay: true,
      loop: true,
      billboard: true,
      muted: false,
      delay: 0,
      criteria: {
        currentState: {
          $in: [
            p.CURSOR,
            p.CURSOR_FINAL
          ]
        }
      },
      platform: "!safari"
    },
    shadowTranceSafari: {
      id: "shadowTranceSafari",
      videoPath: "/video/mov/shadow-trance.mov",
      preload: false,
      position: {
        x: -10.42,
        y: 2.2,
        z: 81.94
      },
      rotation: {
        x: 0,
        y: 1.4047,
        z: 0
      },
      scale: {
        x: 1.07,
        y: 1.52,
        z: 1.52
      },
      autoPlay: true,
      loop: true,
      billboard: true,
      muted: false,
      delay: 0,
      criteria: {
        currentState: {
          $in: [
            p.CURSOR,
            p.CURSOR_FINAL
          ]
        }
      },
      platform: "safari"
    }
  }, nn = Object.freeze(Object.defineProperty({
    __proto__: null,
    videos: K
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  class an {
    constructor(e = {}) {
      this.scene = e.scene, this.gameManager = e.gameManager, this.camera = e.camera, this.gizmoManager = e.gizmoManager, this.loadingScreen = e.loadingScreen || null, this.logger = new N("VideoManager", false), this.videoPlayers = /* @__PURE__ */ new Map(), this.playedOnce = /* @__PURE__ */ new Set(), this.pendingDelays = /* @__PURE__ */ new Map(), this.deferredVideos = /* @__PURE__ */ new Set(), this.shouldUnlockOnCreate = false, this.gameManager && (this.gameManager.on("state:changed", (t, i) => {
        this.updateVideosForState(t);
      }), setTimeout(() => {
        const t = this.gameManager.getState();
        this.updateVideosForState(t);
      }, 0));
    }
    async resolveVideoById(e) {
      if (K[e]) return K[e];
      try {
        const { videos: t } = await q(async () => {
          const { videos: i } = await Promise.resolve().then(() => nn);
          return {
            videos: i
          };
        }, void 0);
        if (t[e]) return t[e];
      } catch {
      }
      return null;
    }
    async _handlePlayNext(e) {
      if (!e || !e.playNext) return;
      this.logger.log(`Chaining to next video from "${e.id}"`);
      let t;
      if (typeof e.playNext == "string" ? t = await this.resolveVideoById(e.playNext) : t = e.playNext, t) {
        if (this.gameManager) {
          const s = this.gameManager.getState(), o = t.playCriteria || t.criteria;
          if (o && !X(s, o)) {
            this.logger.log(`Next video "${t.id}" criteria not met, skipping playNext`);
            return;
          }
          if (t.once && this.playedOnce.has(t.id)) {
            this.logger.log(`Next video "${t.id}" already played once, skipping playNext`);
            return;
          }
        }
        t.once && (this.playedOnce.add(t.id), this.logger.log(`Marked chained video "${t.id}" as played`));
        const i = t.delay || 0;
        i > 0 ? (this.logger.log(`Chaining to "${t.id}" with ${i}s delay`), setTimeout(() => {
          this.playVideo(t.id);
        }, i * 1e3)) : this.playVideo(t.id);
      } else this.logger.warn(`playNext video not found for "${e.id}": ${e.playNext}`);
    }
    _shouldLoadOnPlatform(e) {
      var _a3;
      if (!e.platform) return true;
      const t = ((_a3 = this.gameManager) == null ? void 0 : _a3.getState()) || {}, i = t.isIOS || false, s = t.isSafari || false;
      return e.platform === "ios" || e.platform === "safari" ? e.platform === "ios" ? i : s : e.platform === "!ios" || e.platform === "!safari" ? e.platform === "!ios" ? !i : !s : true;
    }
    async updateVideosForState(e) {
      let t = false;
      try {
        const { isDebugSpawnActive: i } = await q(async () => {
          const { isDebugSpawnActive: s } = await Promise.resolve().then(() => Pt);
          return {
            isDebugSpawnActive: s
          };
        }, void 0);
        t = i();
      } catch {
      }
      for (const [i, s] of Object.entries(K)) {
        if (!this._shouldLoadOnPlatform(s)) {
          const f = this.videoPlayers.get(i);
          f && (f.destroy(), this.videoPlayers.delete(i), this.logger.log(`Removed video "${i}" (not supported on current platform)`));
          continue;
        }
        const o = s.spawnCriteria || s.criteria, n = o ? X(e, o) : true, r = s.playCriteria !== void 0, a = s.playCriteria || s.criteria, l = a ? X(e, a) : true, h = this.videoPlayers.get(i), c = h !== void 0, d = h && h.isPlaying, u = this.playedOnce.has(i), m = this.pendingDelays.has(i);
        if (n) {
          const f = t && n ? true : s.preload !== false, x = !this.loadingScreen || this.loadingScreen.isLoadingComplete();
          if (!f && !x) {
            this.deferredVideos.add(i), this.logger.log(`Deferred loading for video "${i}" (preload: false)`);
            continue;
          }
          if (!c) {
            const y = s.autoPlay && (s.delay || 0) > 0;
            s.autoPlay ? this.playVideo(i) : this.createVideoPlayer(i);
            const v = s.spawnCriteria && !r;
            if (v && s.autoPlay) {
              const b = s.delay || 0, T = this.videoPlayers.get(i);
              T && T.video && T.video.play().then(() => {
                requestAnimationFrame(async () => {
                  if (await T.pause(), T.video.currentTime = 0, b > 0) {
                    const M = setTimeout(() => {
                      this.pendingDelays.delete(i), this.playVideo(i);
                    }, b * 1e3);
                    this.pendingDelays.set(i, M), this.logger.log(`Spawned video "${i}" (paused), will play in ${b}s`);
                  } else this.logger.log(`Spawned video "${i}" (paused, first frame visible)`), this.playVideo(i);
                });
              }).catch(async (M) => {
                M.name !== "AbortError" && this.logger.warn(`Failed to render first frame for "${i}":`, M), await T.pause();
              });
            } else if (!l && s.autoPlay) {
              const b = this.videoPlayers.get(i);
              b && b.video && b.video.play().then(() => {
                requestAnimationFrame(async () => {
                  await b.pause(), b.video.currentTime = 0, this.logger.log(`Spawned video "${i}" (paused, waiting for play criteria)`);
                });
              }).catch(async (T) => {
                T.name !== "AbortError" && this.logger.warn(`Failed to render first frame for "${i}":`, T), await b.pause();
              });
            } else if (!l && !s.autoPlay) this.logger.log(`Spawned video "${i}" (paused, autoPlay=false, waiting for play criteria)`);
            else if (l && y && !v && s.autoPlay) {
              const b = this.videoPlayers.get(i);
              b && b.video && (async () => {
                await b.pause(), b.video.currentTime = 0;
                const T = s.delay || 0, M = setTimeout(() => {
                  this.pendingDelays.delete(i), this.playVideo(i);
                }, T * 1e3);
                this.pendingDelays.set(i, M), this.logger.log(`Spawned video "${i}" (paused), will play in ${T}s`);
              })();
            }
          }
          const w = s.spawnCriteria && !r;
          if (!w && l && !d && !m) {
            if (s.once && u) continue;
            if (s.autoPlay) {
              const y = s.delay || 0;
              if (y > 0) {
                const v = setTimeout(() => {
                  this.pendingDelays.delete(i), this.playVideo(i);
                }, y * 1e3);
                this.pendingDelays.set(i, v), this.logger.log(`Scheduled video "${i}" to play in ${y}s`);
              } else this.playVideo(i);
            }
          } else !w && !l && d && this.stopVideo(i);
        } else n || (m && (clearTimeout(this.pendingDelays.get(i)), this.pendingDelays.delete(i), this.logger.log(`Cancelled delayed playback for "${i}"`)), c && (h.destroy(), this.videoPlayers.delete(i), this.logger.log(`Removed video "${i}" (spawn criteria no longer met)`)));
      }
    }
    createVideoPlayer(e) {
      var _a3;
      const t = K[e];
      if (!t) return this.logger.warn(`Video not found: ${e}`), null;
      if (this.videoPlayers.has(e)) return this.videoPlayers.get(e);
      const i = typeof t.position == "function" ? t.position(this.gameManager) : t.position, s = new rn({
        scene: this.scene,
        gameManager: this.gameManager,
        camera: this.camera,
        videoPath: t.videoPath,
        position: i,
        rotation: t.rotation,
        scale: t.scale,
        loop: t.loop,
        muted: t.muted,
        volume: t.volume,
        playbackRate: t.playbackRate,
        spatialAudio: t.spatial || t.spatialAudio,
        audioPositionOffset: t.audioPositionOffset,
        pannerAttr: t.pannerAttr,
        billboard: t.billboard
      });
      if (s.initialize(), this.videoPlayers.set(e, s), t.autoPlay || (s.setVisible(false), this.logger.log(`Created video "${e}" (hidden, autoPlay=false)`)), this.shouldUnlockOnCreate && s.video && !s.video.muted) {
        const o = ((_a3 = this.gameManager) == null ? void 0 : _a3.getState()) || {}, n = o.isIOS || false, r = o.isSafari || false;
        if (n || r) try {
          const a = s.video.play();
          a && typeof a.then == "function" && a.then(() => {
            requestAnimationFrame(() => {
              s.video.pause(), s.video.currentTime = 0, this.logger.log(`Unlocked video "${e}" on creation`);
            });
          }).catch((l) => {
            this.logger.warn(`Failed to unlock video "${e}" on creation:`, l);
          });
        } catch (a) {
          this.logger.warn(`Error unlocking video "${e}" on creation:`, a);
        }
      }
      if (t.gizmo) {
        s.config.billboard = false, this.logger.log(`Disabled billboard for "${e}" (gizmo enabled)`), this.gizmoManager && s.videoMesh ? (this.gizmoManager.registerObject(s.videoMesh, e, "video"), typeof this.gizmoManager.selectObjectById == "function" && this.gizmoManager.selectObjectById(e)) : this.gizmoManager || (s._needsGizmoRegistration = true);
        try {
          this.gameManager && typeof this.gameManager.setState == "function" && this.gameManager.setState({
            hasGizmoInData: true
          });
        } catch (o) {
          this.logger.error("Failed to set hasGizmoInData:", o);
        }
      }
      return s.video.addEventListener("ended", async () => {
        t.once && this.playedOnce.add(e), t.onComplete && t.onComplete(this.gameManager), !t.loop && t.playNext && await this._handlePlayNext(t);
      }), s._needsGizmoRegistration && this.gizmoManager && s.videoMesh && (s.config.billboard = false, this.logger.log(`Retry registering "${e}" with gizmo and selecting it`), this.gizmoManager.registerObject(s.videoMesh, e, "video"), typeof this.gizmoManager.selectObjectById == "function" && this.gizmoManager.selectObjectById(e), s._needsGizmoRegistration = false), s;
    }
    playVideo(e) {
      const t = K[e];
      if (!t) {
        this.logger.warn(`Video not found: ${e}`);
        return;
      }
      if (!this._shouldLoadOnPlatform(t)) {
        this.logger.warn(`Video "${e}" is not supported on current platform`);
        return;
      }
      const i = t.preload !== false, s = !this.loadingScreen || this.loadingScreen.isLoadingComplete();
      if (!i && !s) {
        this.deferredVideos.add(e), this.logger.log(`Deferred loading for video "${e}" (preload: false, playVideo called)`);
        return;
      }
      let o = this.videoPlayers.get(e);
      !o && (this.deferredVideos.delete(e), o = this.createVideoPlayer(e), !o) || (o.setVisible(true), o.play(), this.gameManager && this.gameManager.emit(`video:play:${e}`, e));
    }
    stopVideo(e) {
      const t = this.videoPlayers.get(e);
      t && t.stop();
    }
    stopAllVideos() {
      this.videoPlayers.forEach((e) => e.stop());
    }
    getVideoPlayer(e) {
      return this.videoPlayers.get(e) || null;
    }
    unlockVideoPlayback() {
      var _a3;
      const e = ((_a3 = this.gameManager) == null ? void 0 : _a3.getState()) || {}, t = e.isIOS || false, i = e.isSafari || false;
      if (!t && !i) return;
      this.logger.log("Unlocking video playback for iOS Safari"), this.shouldUnlockOnCreate = true;
      let s = 0;
      this.videoPlayers.forEach((o, n) => {
        if (o.video && !o.video.muted) try {
          const r = o.video.play();
          r && typeof r.then == "function" ? r.then(() => {
            requestAnimationFrame(() => {
              o.video.pause(), o.video.currentTime = 0, s++, this.logger.log(`Unlocked video "${n}" for playback`);
            });
          }).catch((a) => {
            this.logger.warn(`Failed to unlock video "${n}":`, a);
          }) : (o.video.pause(), o.video.currentTime = 0);
        } catch (r) {
          this.logger.warn(`Error unlocking video "${n}":`, r);
        }
      }), s > 0 && this.logger.log(`Unlocked ${s} video(s) for iOS Safari playback`);
    }
    _retryGizmoRegistrations() {
      this.gizmoManager && this.videoPlayers.forEach((e, t) => {
        var _a3;
        const i = K[t];
        if (!i || !i.gizmo) return;
        !((_a3 = this.gizmoManager.objects) == null ? void 0 : _a3.some((o) => o.id === t && o.object === e.videoMesh)) && e.videoMesh && (e.config.billboard = false, this.logger.log(`Retrying gizmo registration for "${t}"`), this.gizmoManager.registerObject(e.videoMesh, t, "video"), typeof this.gizmoManager.selectObjectById == "function" && this.gizmoManager.selectObjectById(t), e._needsGizmoRegistration = false);
      });
    }
    update(e) {
      const t = performance.now() * 1e-3;
      let i = false, s = null, o = null;
      this.videoPlayers.forEach((n) => {
        n.update(e, t), n.config.spatialAudio && n.isPlaying && n.cachedVisible && !i && n.audioContext && n.audioContext.listener && (s = n.audioContext, o = n.audioContext.listener, i = true);
      }), i && s && this.camera && this._updateSpatialAudioListener(s, o), this._retryGizmoRegistrations();
    }
    _updateSpatialAudioListener(e, t) {
      if (!this.camera || !e || !t) return;
      t.positionX ? (t.positionX.setValueAtTime(this.camera.position.x, e.currentTime), t.positionY.setValueAtTime(this.camera.position.y, e.currentTime), t.positionZ.setValueAtTime(this.camera.position.z, e.currentTime)) : t.setPosition(this.camera.position.x, this.camera.position.y, this.camera.position.z);
      const i = this.camera.getWorldDirection(new S());
      t.forwardX ? (t.forwardX.setValueAtTime(i.x, e.currentTime), t.forwardY.setValueAtTime(i.y, e.currentTime), t.forwardZ.setValueAtTime(i.z, e.currentTime), t.upX.setValueAtTime(this.camera.up.x, e.currentTime), t.upY.setValueAtTime(this.camera.up.y, e.currentTime), t.upZ.setValueAtTime(this.camera.up.z, e.currentTime)) : t.setOrientation(i.x, i.y, i.z, this.camera.up.x, this.camera.up.y, this.camera.up.z);
    }
    loadDeferredVideos() {
      const e = [];
      for (const [t, i] of Object.entries(K)) {
        if (!this._shouldLoadOnPlatform(i)) continue;
        i.preload !== false || e.push(t);
      }
      if (e.length !== 0) {
        this.logger.log(`Loading ${e.length} deferred videos`);
        for (const t of e) {
          if (!K[t]) continue;
          let s = this.videoPlayers.get(t);
          s ? s.video && s.video.readyState === 0 && (s.video.load(), this.logger.log(`Triggered fetch for already-created deferred video "${t}"`)) : (s = this.createVideoPlayer(t), s && (s.setVisible(false), this.logger.log(`Preloaded deferred video "${t}" (hidden, paused)`)));
        }
        this.deferredVideos.clear();
      }
    }
    destroy() {
      this.pendingDelays.forEach((e) => clearTimeout(e)), this.pendingDelays.clear(), this.videoPlayers.forEach((e) => e.destroy()), this.videoPlayers.clear(), this.playedOnce.clear(), this.deferredVideos.clear();
    }
  }
  class rn {
    constructor(e = {}) {
      this.scene = e.scene, this.gameManager = e.gameManager, this.camera = e.camera, this.logger = new N("VideoPlayer", false), this.config = {
        videoPath: e.videoPath,
        position: e.position || {
          x: 0,
          y: 0,
          z: 0
        },
        rotation: e.rotation || {
          x: 0,
          y: 0,
          z: 0
        },
        scale: e.scale || {
          x: 1,
          y: 1,
          z: 1
        },
        loop: e.loop !== void 0 ? e.loop : false,
        muted: e.muted !== void 0 ? e.muted : true,
        volume: e.volume !== void 0 ? e.volume : 1,
        playbackRate: e.playbackRate !== void 0 ? e.playbackRate : 1,
        spatialAudio: e.spatialAudio || false,
        audioPositionOffset: e.audioPositionOffset || {
          x: 0,
          y: 0,
          z: 0
        },
        pannerAttr: e.pannerAttr || {
          panningModel: "HRTF",
          refDistance: 1,
          rolloffFactor: 1,
          distanceModel: "inverse",
          maxDistance: 1e4
        },
        billboard: e.billboard !== void 0 ? e.billboard : false
      }, this.video = null, this.canvas = null, this.canvasContext = null, this.videoTexture = null, this.videoMesh = null, this.videoMaterial = null, this.isPlaying = false, this.isInitialized = false, this.canvasReady = false, this.isDestroying = false, this.playPromise = null, this.intendedVisible = true, this.viewmasterRevealTimeout = null, this.wasViewmasterEquipped = false, this.cachedVisible = true, this.lastBillboardUpdate = 0, this.lastCameraPosition = new S(), this.billboardUpdateThreshold = 0.1, this.billboardUpdateInterval = 0.033, this.audioContext = null, this.audioSource = null, this.audioPanner = null, this.audioGain = null;
    }
    initialize() {
      var _a3;
      if (this.isInitialized) return;
      this.video = document.createElement("video"), this.video.src = this.config.videoPath, this.video.crossOrigin = "anonymous", this.video.loop = this.config.loop, this.video.playsInline = true, this.video.preload = "auto", this.video.playbackRate = this.config.playbackRate, this.video.load(), this.config.spatialAudio && !this.config.muted ? this.setupSpatialAudio() : (this.video.muted = this.config.muted, this.video.volume = this.config.volume), this.canvas = document.createElement("canvas"), this.canvas.width = 1920, this.canvas.height = 1080, this.canvasContext = this.canvas.getContext("2d", {
        alpha: true,
        willReadFrequently: false
      }), this.videoTexture = null;
      const t = new le({
        map: this.videoTexture,
        transparent: true,
        side: xs,
        toneMapped: false,
        depthTest: true,
        depthWrite: true,
        alphaTest: 0.05
      }), i = new Ct(3, 3);
      this.videoMesh = new k(i, t), this.videoMesh.position.set(this.config.position.x, this.config.position.y, this.config.position.z), this.videoMesh.rotation.set(this.config.rotation.x, this.config.rotation.y, this.config.rotation.z), this.videoMesh.scale.set(this.config.scale.x, this.config.scale.y, this.config.scale.z), this.videoMaterial = t;
      const s = (_a3 = this.gameManager) == null ? void 0 : _a3.getState();
      this.wasViewmasterEquipped = (s == null ? void 0 : s.isViewmasterEquipped) || false, this.applyVisibility(), this.videoMesh.name = "video-player", this.initialRotation = {
        x: this.config.rotation.x,
        y: this.config.rotation.y,
        z: this.config.rotation.z
      }, this.camera && this.lastCameraPosition.copy(this.camera.position), this.scene && this.scene.add(this.videoMesh), this.video.addEventListener("loadeddata", () => {
        this.video.videoWidth > 0 && this.video.videoHeight > 0 && (this.canvas.width = this.video.videoWidth, this.canvas.height = this.video.videoHeight, this.videoTexture || (this.videoTexture = new Mt(this.canvas), this.videoTexture.minFilter = ye, this.videoTexture.magFilter = ye, this.videoTexture.colorSpace = We, this.videoMesh && this.videoMesh.material && (this.videoMesh.material.map = this.videoTexture, this.videoMesh.material.needsUpdate = true)), this.canvasReady = true, this.isPlaying && this.video.readyState >= this.video.HAVE_CURRENT_DATA && (this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height), this.canvasContext.drawImage(this.video, 0, 0), this.videoTexture.needsUpdate = true));
      }), this.video.addEventListener("error", (o) => {
        var _a4, _b2;
        this.isDestroying || (this.logger.error("Video error:", o), this.logger.error("Video error code:", (_a4 = this.video.error) == null ? void 0 : _a4.code), this.logger.error("Video error message:", (_b2 = this.video.error) == null ? void 0 : _b2.message));
      }), this.video.addEventListener("ended", () => {
        this.isPlaying = false;
      }), this.video.addEventListener("play", () => {
        this.isPlaying = true, this.videoTexture && (this.videoTexture.needsUpdate = true), this.videoMaterial && (this.videoMaterial.needsUpdate = true);
      }), this.video.addEventListener("pause", () => {
        this.isPlaying = false;
      }), "requestVideoFrameCallback" in HTMLVideoElement.prototype ? (this.useVideoFrameCallback = true, this.pendingVideoFrame = false) : this.useVideoFrameCallback = false, this.isInitialized = true;
    }
    async play() {
      if (this.video) try {
        this.video.ended && (this.video.currentTime = 0), this.playPromise = this.video.play(), await this.playPromise, this.playPromise = null, this.useVideoFrameCallback && !this.pendingVideoFrame && this.scheduleVideoFrameCallback();
      } catch (e) {
        this.playPromise = null, e.name !== "AbortError" && this.logger.error("Failed to play video", e);
      }
    }
    scheduleVideoFrameCallback() {
      !this.video || !this.useVideoFrameCallback || (this.pendingVideoFrame = true, this.video.requestVideoFrameCallback(() => {
        this.pendingVideoFrame = false, this.canvasReady && this.isPlaying && this.video.readyState >= this.video.HAVE_CURRENT_DATA && (this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height), this.canvasContext.drawImage(this.video, 0, 0), this.videoTexture.needsUpdate = true), this.isPlaying && this.scheduleVideoFrameCallback();
      }));
    }
    async pause() {
      this.video && (this.playPromise && await this.playPromise.catch(() => {
      }), this.video.pause());
    }
    async stop() {
      this.video && (this.playPromise && await this.playPromise.catch(() => {
      }), this.video.pause(), this.video.currentTime = 0, this.isPlaying = false, this.pendingVideoFrame = false);
    }
    setPosition(e, t, i) {
      this.videoMesh && this.videoMesh.position.set(e, t, i);
    }
    setRotation(e, t, i) {
      this.videoMesh && this.videoMesh.rotation.set(e, t, i);
    }
    setScale(e, t, i) {
      this.videoMesh && this.videoMesh.scale.set(e, t, i);
    }
    setVisible(e) {
      this.intendedVisible = e, this.applyVisibility();
    }
    applyVisibility() {
      var _a3, _b2;
      if (!this.videoMesh) return this.cachedVisible = false, false;
      const e = ((_b2 = (_a3 = this.gameManager) == null ? void 0 : _a3.getState()) == null ? void 0 : _b2.isViewmasterEquipped) || false;
      if (this.wasViewmasterEquipped && !e) return this.viewmasterRevealTimeout && clearTimeout(this.viewmasterRevealTimeout), this.videoMesh.visible = false, this.cachedVisible = false, this.viewmasterRevealTimeout = setTimeout(() => {
        var _a4, _b3;
        if (this.viewmasterRevealTimeout = null, this.videoMesh && !this.isDestroying) {
          const s = ((_b3 = (_a4 = this.gameManager) == null ? void 0 : _a4.getState()) == null ? void 0 : _b3.isViewmasterEquipped) || false;
          this.cachedVisible = this.intendedVisible && !s, this.videoMesh.visible = this.cachedVisible;
        }
      }, 500), this.wasViewmasterEquipped = e, false;
      if (!this.wasViewmasterEquipped && e) return this.viewmasterRevealTimeout && (clearTimeout(this.viewmasterRevealTimeout), this.viewmasterRevealTimeout = null), this.videoMesh.visible = false, this.cachedVisible = false, this.wasViewmasterEquipped = e, false;
      let t;
      return e || this.viewmasterRevealTimeout ? t = false : t = this.intendedVisible, this.cachedVisible !== t && (this.videoMesh.visible = t, this.cachedVisible = t), this.wasViewmasterEquipped = e, t;
    }
    update(e, t = performance.now() * 1e-3) {
      if (this.applyVisibility() && !(!this.isPlaying || !this.video || !this.canvasReady) && (this.useVideoFrameCallback || this.video.readyState >= this.video.HAVE_CURRENT_DATA && (this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height), this.canvasContext.drawImage(this.video, 0, 0), this.videoTexture.needsUpdate = true), this.config.billboard && this.videoMesh && this.camera)) {
        const s = t - this.lastBillboardUpdate, o = this.lastCameraPosition.distanceTo(this.camera.position);
        if (s >= this.billboardUpdateInterval || o >= this.billboardUpdateThreshold) {
          const n = this.camera.position.x - this.videoMesh.position.x, r = this.camera.position.z - this.videoMesh.position.z, a = Math.atan2(n, r);
          this.videoMesh.rotation.y = a, this.lastBillboardUpdate = t, this.lastCameraPosition.copy(this.camera.position);
        }
      }
    }
    setupSpatialAudio() {
      try {
        window.videoAudioContext || (window.videoAudioContext = new (window.AudioContext || window.webkitAudioContext)()), this.audioContext = window.videoAudioContext, this.audioSource = this.audioContext.createMediaElementSource(this.video), this.audioPanner = this.audioContext.createPanner();
        const e = this.config.pannerAttr;
        this.audioPanner.panningModel = e.panningModel || "HRTF", this.audioPanner.refDistance = e.refDistance || 1, this.audioPanner.rolloffFactor = e.rolloffFactor || 1, this.audioPanner.distanceModel = e.distanceModel || "inverse", this.audioPanner.maxDistance = e.maxDistance || 1e4, this.audioPanner.coneInnerAngle = e.coneInnerAngle || 360, this.audioPanner.coneOuterAngle = e.coneOuterAngle || 360, this.audioPanner.coneOuterGain = e.coneOuterGain || 0;
        const t = this.config.position, i = this.config.audioPositionOffset, s = {
          x: t.x + i.x,
          y: t.y + i.y,
          z: t.z + i.z
        };
        this.audioPanner.positionX.setValueAtTime(s.x, this.audioContext.currentTime), this.audioPanner.positionY.setValueAtTime(s.y, this.audioContext.currentTime), this.audioPanner.positionZ.setValueAtTime(s.z, this.audioContext.currentTime), this.audioGain = this.audioContext.createGain(), this.audioGain.gain.setValueAtTime(this.config.volume, this.audioContext.currentTime), this.audioSource.connect(this.audioPanner), this.audioPanner.connect(this.audioGain), this.audioGain.connect(this.audioContext.destination), this.video.muted = false, this.video.volume = 1, this.logger.log(`Spatial audio enabled at world position [${s.x}, ${s.y}, ${s.z}] (video pos + offset)`);
      } catch (e) {
        this.logger.error("Failed to set up spatial audio:", e), this.video.muted = this.config.muted, this.video.volume = this.config.volume;
      }
    }
    updateSpatialAudio(e) {
      if (!this.audioContext || !e) return;
      const t = this.audioContext.listener;
      t.positionX ? (t.positionX.setValueAtTime(e.position.x, this.audioContext.currentTime), t.positionY.setValueAtTime(e.position.y, this.audioContext.currentTime), t.positionZ.setValueAtTime(e.position.z, this.audioContext.currentTime)) : t.setPosition(e.position.x, e.position.y, e.position.z);
      const i = e.getWorldDirection(new S());
      t.forwardX ? (t.forwardX.setValueAtTime(i.x, this.audioContext.currentTime), t.forwardY.setValueAtTime(i.y, this.audioContext.currentTime), t.forwardZ.setValueAtTime(i.z, this.audioContext.currentTime), t.upX.setValueAtTime(e.up.x, this.audioContext.currentTime), t.upY.setValueAtTime(e.up.y, this.audioContext.currentTime), t.upZ.setValueAtTime(e.up.z, this.audioContext.currentTime)) : t.setOrientation(i.x, i.y, i.z, e.up.x, e.up.y, e.up.z);
    }
    destroy() {
      if (this.isDestroying = true, this.stop(), this.viewmasterRevealTimeout && (clearTimeout(this.viewmasterRevealTimeout), this.viewmasterRevealTimeout = null), this.audioSource) {
        try {
          this.audioSource.disconnect();
        } catch {
        }
        this.audioSource = null;
      }
      if (this.audioPanner) {
        try {
          this.audioPanner.disconnect();
        } catch {
        }
        this.audioPanner = null;
      }
      if (this.audioGain) {
        try {
          this.audioGain.disconnect();
        } catch {
        }
        this.audioGain = null;
      }
      this.videoMesh && (this.videoMesh.parent && this.videoMesh.parent.remove(this.videoMesh), this.videoMesh.geometry && this.videoMesh.geometry.dispose(), this.videoMesh.material && this.videoMesh.material.dispose()), this.videoTexture && this.videoTexture.dispose(), this.video && (this.video.pause(), this.video.removeAttribute("src"), this.video.load(), this.video = null);
    }
  }
  class ln {
    constructor() {
      const e = Ds();
      this.state = e ? {
        ...e
      } : {
        ...vs
      }, this.isDebugMode = Gt(), this.logger = new N("GameManager", true), this.isDebugMode && (this.logger.log("Debug mode active", this.state), this.logger.log("State includes playerRotation:", this.state.playerRotation)), this.eventListeners = {}, this.dialogManager = null, this.musicManager = null, this.sfxManager = null, this.uiManager = null, this.sceneManager = null, this.phoneBooth = null, this.candlestickPhone = null, this.amplifierCord = null, this.loadedScenes = /* @__PURE__ */ new Set(), this.previousObjectsToLoad = null, this.lastStateLogTime = 0, this.urlParams = this.parseURLParams(), this._applyURLParamOverrides();
    }
    _applyURLParamOverrides() {
      const e = this.getURLParam("dialogChoice2");
      if (e !== null) {
        let t = null;
        const i = parseInt(e, 10);
        if (!isNaN(i)) Object.values(te).includes(i) && (t = i);
        else {
          const s = e.toLowerCase();
          s === "empath" ? t = te.EMPATH : s === "psychologist" || s === "psych" ? t = te.PSYCHOLOGIST : s === "lawful" && (t = te.LAWFUL);
        }
        if (t !== null) {
          const s = {
            ...this.state
          };
          this.state.dialogChoice2 = t, this.logger.log(`URL parameter set dialogChoice2 to ${t} (${e}). Current state:`, this.state), this.videoManager && this.emit("state:changed", this.state, s);
        } else this.logger.warn(`Invalid dialogChoice2 URL parameter value: "${e}". Valid values: empath, psychologist, lawful, or 0, 1, 2`);
      }
    }
    parseURLParams() {
      const e = {}, t = new URLSearchParams(window.location.search);
      for (const [i, s] of t) e[i] = s;
      return this.logger.log("URL params:", e), e;
    }
    getURLParam(e) {
      return this.urlParams[e] || null;
    }
    getDebugSpawnPosition() {
      return !this.isDebugMode || !this.state.playerPosition ? null : {
        ...this.state.playerPosition
      };
    }
    getDebugSpawnRotation() {
      return this.isDebugMode ? this.state.playerRotation !== void 0 && this.state.playerRotation !== null ? (this.logger.log("getDebugSpawnRotation: returning", this.state.playerRotation), {
        ...this.state.playerRotation
      }) : (this.logger.log("getDebugSpawnRotation: playerRotation not found in state", this.state), null) : (this.logger.log("getDebugSpawnRotation: not in debug mode"), null);
    }
    getStateName(e) {
      for (const [t, i] of Object.entries(p)) if (i === e) return t;
      return "UNKNOWN";
    }
    async initialize(e = {}) {
      var _a3, _b2, _c;
      if (this.dialogManager = e.dialogManager, this.musicManager = e.musicManager, this.sfxManager = e.sfxManager, this.uiManager = e.uiManager, this.characterController = e.characterController, this.cameraAnimationManager = e.cameraAnimationManager, this.sceneManager = e.sceneManager, this.lightManager = e.lightManager, this.inputManager = e.inputManager, this.physicsManager = e.physicsManager, this.camera = e.camera, this.scene = e.scene, this.setupEventHandlers(), this.state.controlEnabled === true && this.updateCharacterController(), this.sceneManager) {
        const t = this.isDebugMode ? {
          forcePreloadForState: true
        } : {
          preloadOnly: true
        };
        await this.updateSceneForState(t), this.sceneManager.updateAnimationsForState(this.state);
      }
      !this.candlestickPhone && this.state.currentState >= p.POST_DRIVE_BY && ((_a3 = this.sceneManager) == null ? void 0 : _a3.hasObject("candlestickPhone")) && (this.logger.log("Initializing candlestick phone (object loaded at startup)"), this.candlestickPhone = new ci({
        sceneManager: this.sceneManager,
        physicsManager: this.physicsManager,
        scene: this.scene,
        camera: this.camera
      }), this.candlestickPhone.initialize(this)), !this.amplifierCord && this.state.currentState >= p.LIGHTS_OUT && ((_b2 = this.sceneManager) == null ? void 0 : _b2.hasObject("amplifier")) && ((_c = this.sceneManager) == null ? void 0 : _c.hasObject("viewmaster")) && (this.logger.log("Initializing amplifier cord (objects loaded at startup)"), this.amplifierCord = new Qi({
        sceneManager: this.sceneManager,
        physicsManager: this.physicsManager,
        scene: this.scene
      }), this.amplifierCord.initialize(this)), this.phoneBooth = new on({
        sceneManager: this.sceneManager,
        lightManager: this.lightManager,
        sfxManager: this.sfxManager,
        physicsManager: e.physicsManager,
        scene: e.scene,
        camera: this.camera,
        characterController: this.characterController
      }), this.phoneBooth.initialize(this), this.videoManager = new an({
        scene: e.scene,
        gameManager: this,
        camera: this.camera,
        loadingScreen: null
      }), this.urlParams && this.urlParams.dialogChoice2 && setTimeout(() => {
        const t = this.getState();
        this.logger.log(`Triggering video update after URL param dialogChoice2=${this.urlParams.dialogChoice2}, current state:`, t), this.videoManager && this.videoManager.updateVideosForState(t);
      }, 100);
    }
    setupEventHandlers() {
      this.on("character-controller:enabled", () => {
        this.characterController && this.characterController.enableInput(true), this.inputManager && (this.inputManager.enable(), this.inputManager.showTouchControls());
      }), this.on("character-controller:disabled", () => {
        this.inputManager && (this.inputManager.disable(), this.inputManager.hideTouchControls());
      }), this.on("state:changed", (e, t) => {
        var _a3, _b2, _c;
        !this.candlestickPhone && e.currentState >= p.POST_DRIVE_BY && ((_a3 = this.sceneManager) == null ? void 0 : _a3.hasObject("candlestickPhone")) && (this.logger.log("Initializing candlestick phone (object loaded)"), this.candlestickPhone = new ci({
          sceneManager: this.sceneManager,
          physicsManager: this.physicsManager,
          scene: this.scene,
          camera: this.camera
        }), this.candlestickPhone.initialize(this)), !this.amplifierCord && e.currentState >= p.LIGHTS_OUT && ((_b2 = this.sceneManager) == null ? void 0 : _b2.hasObject("amplifier")) && ((_c = this.sceneManager) == null ? void 0 : _c.hasObject("viewmaster")) && (this.logger.log("Initializing amplifier cord (objects loaded)"), this.amplifierCord = new Qi({
          sceneManager: this.sceneManager,
          physicsManager: this.physicsManager,
          scene: this.scene
        }), this.amplifierCord.initialize(this));
      });
    }
    setState(e) {
      const t = {
        ...this.state
      };
      if (this.state = {
        ...this.state,
        ...e
      }, e.currentState !== void 0 && e.currentState !== t.currentState) this.logger.log(`[GameManager] currentState changed from ${t.currentState} to ${e.currentState}`), typeof window < "u" && window.gtag && (this.getStateName(e.currentState), window.gtag("event", e.currentState));
      else if (Object.keys(e).length > 0) {
        const i = Date.now();
        i - this.lastStateLogTime >= 1e3 && (this.logger.log("[GameManager] setState called with (no currentState change):", e), this.lastStateLogTime = i);
      }
      this.emit("state:changed", this.state, t), this.sceneManager && e.currentState !== t.currentState && this.updateSceneForState(), this.sceneManager && this.sceneManager.updateAnimationsForState(this.state), e.controlEnabled !== void 0 && e.controlEnabled !== t.controlEnabled && this.updateCharacterController();
    }
    getState() {
      return {
        ...this.state
      };
    }
    updateCharacterController() {
      this.characterController && (this.state.controlEnabled === true ? (this.logger.log("Enabling character controller"), this.characterController.headbobEnabled = true, this.emit("character-controller:enabled")) : this.state.controlEnabled === false && (this.logger.log("Disabling character controller"), this.characterController.headbobEnabled = false, this.emit("character-controller:disabled")));
    }
    async updateSceneForState(e = {}) {
      var _a3;
      if (!this.sceneManager) return;
      const t = bs(this.state, e), i = new Set(t.map((a) => a.id)), s = t.map((a) => a.id).sort().join(",");
      t.length > 0 && s !== this.previousObjectsToLoad && (this.logger.log(`Objects to load for state ${this.state.currentState}: ${t.map((a) => a.id).join(", ")}`), this.previousObjectsToLoad = s);
      const o = Array.from(this.loadedScenes).filter((a) => !i.has(a));
      o.length > 0 && (this.logger.log(`Unloading ${o.length} scene objects no longer needed`, o[0]), o.forEach((a) => {
        a === "candlestickPhone" && this.candlestickPhone && (this.logger.log("Destroying candlestickPhone script instance"), this.candlestickPhone.destroy(), this.candlestickPhone = null), this.sceneManager.removeObject(a), this.loadedScenes.delete(a);
      }));
      const r = t.filter((a) => !this.loadedScenes.has(a.id)).filter((a) => !((a.preload !== void 0 ? a.preload : false) === false && a.type === "splat" && a.id !== "interior" && a.id !== "officeHell" && a.id !== "club"));
      r.length > 0 && (this.logger.log(`Loading ${r.length} new scene objects for state`), r.forEach((a) => this.loadedScenes.add(a.id)), await this.sceneManager.loadObjectsForState(r));
      for (const a of t) this.loadedScenes.has(a.id) && this.sceneManager.objectsNotInScene.has(a.id) && this.sceneManager.addObjectToScene(a.id);
      !this.candlestickPhone && this.state.currentState >= p.POST_DRIVE_BY && ((_a3 = this.sceneManager) == null ? void 0 : _a3.hasObject("candlestickPhone")) && (this.logger.log("Initializing candlestick phone (object loaded in updateSceneForState)"), this.candlestickPhone = new ci({
        sceneManager: this.sceneManager,
        physicsManager: this.physicsManager,
        scene: this.scene,
        camera: this.camera
      }), this.candlestickPhone.initialize(this));
    }
    async loadDeferredSceneObjects() {
      if (!this.sceneManager) return;
      const { sceneObjects: e } = await q(async () => {
        const { sceneObjects: n } = await import("./index-XYoOAQ19.js").then(async (m) => {
          await m.__tla;
          return m;
        }).then((r) => r.bd);
        return {
          sceneObjects: n
        };
      }, []), t = this.getState(), i = [];
      for (const [n, r] of Object.entries(e)) if (!(r.preload !== void 0 ? r.preload : false) && !this.loadedScenes.has(n)) {
        if (r.criteria && !X(t, r.criteria)) continue;
        i.push(r);
      }
      if (i.length === 0) return;
      this.logger.log(`Prefetching ${i.length} deferred scene objects`);
      const s = i.filter((n) => n.type === "gltf"), o = i.filter((n) => n.type === "splat");
      s.forEach((n) => {
        fetch(n.path, {
          method: "HEAD"
        }).catch(() => {
        }), fetch(n.path).catch(() => {
        });
      }), setTimeout(async () => {
        for (const n of o) this.sceneManager.hasObject(n.id) || this.sceneManager.loadingPromises && this.sceneManager.loadingPromises.has(n.id) || this.sceneManager.loadObject(n, true).catch(() => {
        });
      }, 2e3), this.logger.log(`Prefetched ${i.length} deferred scene objects (files cached, will load when criteria match)`);
    }
    isControlEnabled() {
      return this.state.controlEnabled === true;
    }
    pause() {
      this.setState({
        isPaused: true
      }), this.emit("game:paused");
    }
    resume() {
      this.setState({
        isPaused: false
      }), this.emit("game:resumed");
    }
    start() {
      this.setState({
        isPlaying: true,
        isPaused: false
      }), this.emit("game:started");
    }
    stop() {
      this.setState({
        isPlaying: false,
        isPaused: false
      }), this.emit("game:stopped");
    }
    on(e, t) {
      this.eventListeners[e] || (this.eventListeners[e] = []), this.eventListeners[e].push(t);
    }
    off(e, t) {
      if (this.eventListeners[e]) {
        const i = this.eventListeners[e].indexOf(t);
        i > -1 && this.eventListeners[e].splice(i, 1);
      }
    }
    emit(e, ...t) {
      this.eventListeners[e] && this.eventListeners[e].forEach((i) => i(...t));
    }
    update(e) {
      this.phoneBooth && this.phoneBooth.update(e), this.candlestickPhone && this.candlestickPhone.update(e), this.amplifierCord && this.amplifierCord.update(e);
    }
  }
  class cn {
    constructor(e = null, t = null, i = null, s = null, o = null, n = null) {
      this.helperElement = null, this.lastMovementTime = null, this.idleThreshold = 1e4, this.isAnimating = false, this.dialogManager = e, this.cameraAnimationSystem = t, this.dialogChoiceUI = i, this.gameManager = s, this.inputManager = o, this.characterController = n, this.wasControlEnabled = false, this.wasCameraAnimating = false, this.wasBlocked = false, this.globalDisable = false, this.logger = new N("IdleHelper", false), this.init(), this.setupMovementListeners(), this.startIdleCheck();
    }
    setGlobalDisable(e) {
      this.globalDisable = !!e, this.globalDisable ? this.isAnimating && this.stopAnimation() : this.lastMovementTime = Date.now();
    }
    init() {
      var _a3, _b2, _c;
      if (((_c = (_b2 = (_a3 = this.gameManager) == null ? void 0 : _a3.getState) == null ? void 0 : _b2.call(_a3)) == null ? void 0 : _c.isIOS) === true) {
        this.logger.log("Skipping initialization on iOS device");
        return;
      }
      this.helperElement = document.createElement("div"), this.helperElement.id = "idle-helper";
      const i = document.createElement("img");
      i.src = "/images/WASD.svg", i.alt = "WASD controls", this.helperElement.appendChild(i), document.body.appendChild(this.helperElement);
    }
    setupMovementListeners() {
      const e = [
        "w",
        "a",
        "s",
        "d",
        "W",
        "A",
        "S",
        "D",
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight"
      ];
      window.addEventListener("keydown", (s) => {
        e.includes(s.key) && this.onMovement();
      });
      let t = 0;
      const i = 100;
      window.addEventListener("mousemove", () => {
        if (document.pointerLockElement) {
          const s = Date.now();
          s - t >= i && (t = s, this.onMovement());
        }
      });
    }
    onMovement() {
      const e = this.gameManager && this.gameManager.isControlEnabled(), t = this.inputManager && this.inputManager.isEnabled(), i = !this.characterController || !this.characterController.inputDisabled;
      !e || !t || !i || (this.lastMovementTime = Date.now(), this.isAnimating && this.interruptWithFadeOut());
    }
    shouldAllowIdleBehavior() {
      var _a3, _b2;
      if (this.globalDisable) return false;
      const e = (_b2 = (_a3 = this.gameManager) == null ? void 0 : _a3.getState) == null ? void 0 : _b2.call(_a3);
      if ((e == null ? void 0 : e.hasGizmoInData) === true || (e == null ? void 0 : e.isIOS) === true) return false;
      const s = this.gameManager && this.gameManager.isControlEnabled(), o = this.inputManager && this.inputManager.isEnabled(), n = !this.characterController || !this.characterController.inputDisabled;
      if (!s || !o || !n || this.lastMovementTime === null) return false;
      const r = this.dialogManager && this.dialogManager.isPlaying, a = this.dialogManager && this.dialogManager.pendingDialogs && this.dialogManager.pendingDialogs.size > 0, l = this.cameraAnimationSystem && this.cameraAnimationSystem.isPlaying, h = this.characterController && this.characterController.isLookingAt, c = this.characterController && this.characterController.isMovingTo, d = this.dialogChoiceUI && this.dialogChoiceUI.isVisible;
      return !(r || a || l || h || c || d || Date.now() - this.lastMovementTime < this.idleThreshold);
    }
    interruptWithFadeOut() {
      if (!this.helperElement) {
        this.isAnimating = false;
        return;
      }
      this.helperElement.classList.remove("animating"), this.isAnimating = false;
    }
    startIdleCheck() {
      setInterval(() => {
        var _a3, _b2;
        const e = this.gameManager && this.gameManager.isControlEnabled(), t = this.inputManager && this.inputManager.isEnabled(), i = !this.characterController || !this.characterController.inputDisabled, s = e && t && i;
        s && !this.wasControlEnabled && (this.lastMovementTime = Date.now()), !s && this.wasControlEnabled && this.isAnimating && this.stopAnimation(), this.wasControlEnabled = s;
        const o = this.cameraAnimationSystem && this.cameraAnimationSystem.isPlaying;
        this.wasCameraAnimating && !o && (this.lastMovementTime = Date.now(), this.logger.log("Camera animation ended, resetting idle timer")), this.wasCameraAnimating = o;
        const n = (_b2 = (_a3 = this.gameManager) == null ? void 0 : _a3.getState) == null ? void 0 : _b2.call(_a3), r = (n == null ? void 0 : n.hasGizmoInData) === true, a = (n == null ? void 0 : n.isIOS) === true;
        if (this.globalDisable || r || a) {
          this.isAnimating && this.stopAnimation();
          return;
        }
        const l = this.dialogManager && this.dialogManager.isPlaying, h = this.dialogManager && this.dialogManager.pendingDialogs && this.dialogManager.pendingDialogs.size > 0, c = this.characterController && this.characterController.isLookingAt, d = this.characterController && this.characterController.isMovingTo, u = this.dialogChoiceUI && this.dialogChoiceUI.isVisible, m = !s || l || h || o || c || d || u;
        if (this.wasBlocked && !m && (this.lastMovementTime = Date.now(), this.logger.log("Transitioned from blocked to unblocked, resetting idle timer")), this.wasBlocked = m, !s || this.lastMovementTime === null || o) return;
        if (this.inputManager) {
          const x = this.inputManager.getMovementInput(), w = Math.abs(x.x) > 0.01 || Math.abs(x.y) > 0.01, y = this.inputManager.getGamepad();
          let v = false;
          if (y) {
            const T = this.inputManager.applyDeadzone(y.axes[this.inputManager.gamepadMapping.AXIS_RIGHT_STICK_X]), M = this.inputManager.applyDeadzone(y.axes[this.inputManager.gamepadMapping.AXIS_RIGHT_STICK_Y]);
            v = Math.abs(T) > 0.01 || Math.abs(M) > 0.01;
          }
          let b = false;
          this.inputManager.leftJoystick && this.inputManager.leftJoystick.isActive() && (b = true), this.inputManager.rightJoystick && this.inputManager.rightJoystick.isActive() && (b = true), (w || v || b) && this.onMovement();
        }
        Date.now() - this.lastMovementTime >= this.idleThreshold && !this.isAnimating && !l && !h && !o && !c && !d && !u && this.startAnimation(), (l || h || o || c || d || u) && this.isAnimating && this.stopAnimation();
      }, 100);
    }
    startAnimation() {
      if (!this.helperElement) {
        this.isAnimating = false;
        return;
      }
      this.isAnimating = true, this.helperElement.classList.add("animating");
      const e = () => {
        this.helperElement.classList.remove("animating"), this.isAnimating = false, this.helperElement.removeEventListener("animationend", e);
      };
      this.helperElement.addEventListener("animationend", e);
    }
    stopAnimation() {
      this.helperElement && this.helperElement.classList.remove("animating"), this.isAnimating = false;
    }
    destroy() {
      this.stopAnimation(), this.helperElement && this.helperElement.parentNode && this.helperElement.parentNode.removeChild(this.helperElement);
    }
  }
  class hn {
    constructor(e = {}) {
      this.uiManager = e.uiManager || null, this.gameManager = e.gameManager || null, this.config = e.config || {}, this.logger = new N("FullscreenButton", false), this.createButton(), this.bindFullscreenEvents(), this.bindPointerLockEvents();
    }
    isFullscreenSupported() {
      return this.gameManager ? this.gameManager.getState().isFullscreenSupported !== false : true;
    }
    createButton() {
      this.button = document.createElement("div"), this.button.id = this.config.id || "fullscreen-button", this.button.classList.add("fullscreen-button"), this.image = document.createElement("img"), this.image.src = this.config.image || "/images/FullScreen.svg", this.image.alt = "Toggle Fullscreen", this.button.appendChild(this.image);
      const e = this.config.position || {}, t = this.config.size || {}, i = this.config.style || {}, s = {
        "--fb-bottom": e.bottom,
        "--fb-right": e.right,
        "--fb-width": t.width,
        "--fb-height": t.height,
        "--fb-cursor": i.cursor,
        "--fb-opacity": i.opacity,
        "--fb-transition": i.transition,
        "--fb-pointer-events": i.pointerEvents,
        "--fb-z-index": i.zIndex
      };
      Object.entries(s).forEach(([o, n]) => {
        n !== void 0 && this.button.style.setProperty(o, n);
      }), this.button.addEventListener("touchstart", (o) => {
        o.preventDefault(), this.button.classList.add("is-touching");
      }), this.button.addEventListener("touchcancel", () => {
        this.button.classList.remove("is-touching");
      }), this.button.addEventListener("click", (o) => {
        o.pointerType !== "touch" && this.toggleFullscreen();
      }), this.button.addEventListener("touchend", (o) => {
        o.preventDefault(), this.button.classList.remove("is-touching"), this.toggleFullscreen();
      }), document.body.appendChild(this.button), this.uiManager && this.uiManager.registerElement(this.config.id || "fullscreen-button", this.button, this.config.layer || "GAME_HUD", {
        blocksInput: this.config.blocksInput !== void 0 ? this.config.blocksInput : false,
        pausesGame: this.config.pausesGame || false
      }), this.isFullscreenSupported() || (this.button.classList.add("is-hidden"), this.logger.log("Fullscreen API not supported on this device, button hidden"));
    }
    toggleFullscreen() {
      if (!this.isFullscreenSupported()) {
        this.logger.log("Fullscreen not supported on this device");
        return;
      }
      document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen().catch((e) => {
        this.logger.warn("Error attempting to enable fullscreen:", e);
      });
    }
    bindFullscreenEvents() {
      document.addEventListener("fullscreenchange", () => {
        this.updateButtonState();
      }), document.addEventListener("webkitfullscreenchange", () => {
        this.updateButtonState();
      }), document.addEventListener("mozfullscreenchange", () => {
        this.updateButtonState();
      }), document.addEventListener("MSFullscreenChange", () => {
        this.updateButtonState();
      }), window.addEventListener("resize", () => {
        this.updateButtonState();
      }), this.updateButtonState();
    }
    isInFullscreen() {
      return document.fullscreenElement ? true : window.innerHeight === screen.height && window.innerWidth === screen.width;
    }
    updateButtonState() {
      const e = this.isInFullscreen();
      this.gameManager && this.gameManager.setState({
        isFullscreen: e
      }), e ? this.hide() : this.show(), e ? this.button.title = "Exit Fullscreen (ESC or F11)" : this.button.title = "Enter Fullscreen";
    }
    bindPointerLockEvents() {
      const e = () => {
        this.updatePointerLockState();
      };
      document.addEventListener("pointerlockchange", e), document.addEventListener("mozpointerlockchange", e), document.addEventListener("webkitpointerlockchange", e), this.updatePointerLockState();
    }
    isPointerLocked() {
      return document.pointerLockElement !== null;
    }
    updatePointerLockState() {
      this.isPointerLocked() ? (this.button.classList.add("is-pointer-locked"), this.button.style.pointerEvents = "none") : (this.button.classList.remove("is-pointer-locked"), this.button.style.pointerEvents = "");
    }
    show() {
      this.isFullscreenSupported() && (this.button.classList.remove("is-hidden"), this.uiManager && this.uiManager.show(this.config.id || "fullscreen-button"));
    }
    hide() {
      this.button.classList.add("is-hidden"), this.uiManager && this.uiManager.hide(this.config.id || "fullscreen-button");
    }
    setUIManager(e) {
      this.uiManager = e;
    }
    destroy() {
      this.button && this.button.parentNode && this.button.parentNode.removeChild(this.button), this.uiManager && this.uiManager.unregisterElement(this.config.id || "fullscreen-button");
    }
  }
  const dn = {
    FULLSCREEN_BUTTON: {
      id: "fullscreen-button",
      layer: "GAME_HUD",
      image: "/images/FullScreen.svg",
      position: {
        bottom: "5%",
        right: "5%"
      },
      size: {
        width: "80px",
        height: "80px"
      },
      style: {
        cursor: "pointer",
        opacity: "1.0",
        transition: "opacity 0.3s ease, transform 0.2s ease",
        pointerEvents: "all",
        color: "white",
        backgroundColor: "white"
      },
      hoverStyle: {
        opacity: "1.0",
        transform: "scale(1.15)"
      },
      blocksInput: false,
      pausesGame: false
    }
  };
  class un {
    constructor(e = null) {
      this.gameManager = e, this.logger = new N("UIManager", false), this.layers = {
        BACKGROUND: 1e3,
        GAME_HUD: 2e3,
        MAIN_MENU: 3e3,
        PAUSE_MENU: 4e3,
        DIALOG: 5e3,
        MODAL: 6e3,
        TOOLTIP: 7e3,
        DEBUG: 9e3
      }, this.activeElements = /* @__PURE__ */ new Map(), this.uiStack = [], this.components = {
        introScreen: null,
        optionsMenu: null,
        dialogManager: null,
        idleHelper: null,
        fullscreenButton: null
      }, this.detectPlatform();
    }
    detectPlatform() {
      var _a3, _b2;
      const e = (_b2 = (_a3 = this.gameManager) == null ? void 0 : _a3.getState) == null ? void 0 : _b2.call(_a3), t = (e == null ? void 0 : e.isIOS) || false, i = (e == null ? void 0 : e.isFullscreenSupported) !== void 0 ? e.isFullscreenSupported : true, s = (e == null ? void 0 : e.isMobile) || false;
      this.logger.log(`Platform detected - iOS: ${t}, Fullscreen supported: ${i}, Mobile: ${s}`);
    }
    initializeComponents(e = {}) {
      const { dialogManager: t, cameraAnimationManager: i, dialogChoiceUI: s, inputManager: o, characterController: n, sparkRenderer: r } = e;
      this.components.idleHelper = new cn(t, i, s, this.gameManager, o, n), n && n.setIdleHelper(this.components.idleHelper), this.components.fullscreenButton = new hn({
        uiManager: this,
        gameManager: this.gameManager,
        config: dn.FULLSCREEN_BUTTON
      });
    }
    createElementFromConfig(e) {
      const t = document.createElement("div");
      return t.id = e.id, e.style && Object.assign(t.style, e.style), e.position && Object.entries(e.position).forEach(([i, s]) => {
        t.style[i] = s;
      }), document.body.appendChild(t), this.registerElement(e.id, t, e.layer, {
        blocksInput: e.blocksInput,
        pausesGame: e.pausesGame
      }), t;
    }
    registerComponent(e, t) {
      this.components[e] = t, t.setUIManager && t.setUIManager(this);
    }
    getComponent(e) {
      return this.components[e] || null;
    }
    registerElement(e, t, i = "MAIN_MENU", s = {}) {
      const o = this.layers[i] || this.layers.MAIN_MENU;
      return t.style.zIndex = o, this.activeElements.set(e, {
        element: t,
        layer: i,
        zIndex: o,
        isVisible: !t.classList.contains("hidden"),
        blocksInput: s.blocksInput !== false,
        pausesGame: s.pausesGame || false
      }), o;
    }
    unregisterElement(e) {
      this.activeElements.delete(e), this.removeFromStack(e);
    }
    show(e, t = {}) {
      const i = this.activeElements.get(e);
      if (!i) {
        this.logger.warn(`Element "${e}" not registered`);
        return;
      }
      if (t.hideOthers && this.uiStack.length > 0) {
        const s = this.uiStack[this.uiStack.length - 1];
        this.hide(s);
      }
      i.element.classList.remove("hidden"), i.isVisible = true, this.uiStack.includes(e) || this.uiStack.push(e), i.pausesGame && this.gameManager && !this.gameManager.state.isPaused && this.gameManager.pause(), this.emit("ui:shown", e);
    }
    hide(e, t = {}) {
      const i = this.activeElements.get(e);
      i && (i.element.classList.add("hidden"), i.isVisible = false, this.removeFromStack(e), i.pausesGame && this.gameManager && this.gameManager.state.isPaused && (Array.from(this.activeElements.values()).some((o) => o.isVisible && o.pausesGame && o !== i) || this.gameManager.resume()), this.emit("ui:hidden", e));
    }
    toggle(e) {
      const t = this.activeElements.get(e);
      t && (t.isVisible ? this.hide(e) : this.show(e));
    }
    removeFromStack(e) {
      const t = this.uiStack.indexOf(e);
      t > -1 && this.uiStack.splice(t, 1);
    }
    getActiveUI() {
      return this.uiStack.length > 0 ? this.uiStack[this.uiStack.length - 1] : null;
    }
    isInputBlocked() {
      for (const [e, t] of this.activeElements) if (t.isVisible && t.blocksInput) return true;
      return false;
    }
    hideAll(e = []) {
      for (const [t, i] of this.activeElements) !e.includes(t) && i.isVisible && this.hide(t);
    }
    getLayerZIndex(e) {
      return this.layers[e] || this.layers.MAIN_MENU;
    }
    emit(e, ...t) {
      this.gameManager && this.gameManager.emit && this.gameManager.emit(e, ...t);
    }
    update(e) {
      this.components.idleHelper && typeof this.components.idleHelper.update == "function" && this.components.idleHelper.update(e), this.components.fullscreenButton && typeof this.components.fullscreenButton.update == "function" && this.components.fullscreenButton.update(e);
    }
    destroy() {
      this.activeElements.clear(), this.uiStack = [], this.components = {};
    }
  }
  class gn {
    constructor(e, t, i = [], s = null, o = null, n = null) {
      this.physicsManager = e, this.gameManager = t, this.scene = s, this.sceneManager = o, this.gizmoManager = n, this.logger = new N("ColliderManager", false), this.colliders = [], this.debugMeshes = /* @__PURE__ */ new Map(), this.activeColliders = /* @__PURE__ */ new Set(), this.triggeredOnce = /* @__PURE__ */ new Set(), this.zoneMeshes = /* @__PURE__ */ new Map(), this.cameraProbeBody = null, this.cameraProbeCollider = null, this.camera = null, this.sparkRenderer = null, this.checkForGizmoColliders(i), this.initializeColliders(i), this.initializeDebugMeshes();
    }
    checkForGizmoColliders(e) {
      if (e.some((i) => i && i.gizmo === true)) try {
        (window == null ? void 0 : window.gameManager) && typeof window.gameManager.setState == "function" && (window.gameManager.setState({
          hasGizmoInData: true
        }), this.logger.log("Set hasGizmoInData=true due to gizmo-enabled colliders"));
      } catch (i) {
        this.logger.error("Failed to set hasGizmoInData:", i);
      }
    }
    registerCollider(e) {
      const t = this.colliders.find((s) => s.id === e.id);
      if (t) return t.enabled = e.enabled !== false, this.logger.log(`Collider "${e.id}" already exists, enabled=${t.enabled}`), true;
      const i = this.createCollider(e);
      return i ? (this.colliders.push({
        id: e.id,
        data: e,
        collider: i,
        handle: i.handle,
        enabled: e.enabled !== false
      }), this.logger.log(`Registered collider "${e.id}"`), true) : false;
    }
    initializeColliders(e) {
      e.forEach((t) => {
        const i = this.createCollider(t);
        i && this.colliders.push({
          id: t.id,
          data: t,
          collider: i,
          handle: i.handle,
          enabled: t.enabled !== false
        });
      }), this.logger.log(`Initialized ${this.colliders.length} colliders`);
    }
    createCollider(e) {
      const { type: t, position: i, rotation: s, dimensions: o } = e, n = new U(G.degToRad(s.x), G.degToRad(s.y), G.degToRad(s.z)), r = new I().setFromEuler(n);
      let a;
      switch (t) {
        case "box":
          a = this.physicsManager.createSensorBox(o.x, o.y, o.z);
          break;
        case "sphere":
          a = this.physicsManager.createSensorSphere(o.radius);
          break;
        case "capsule":
          a = this.physicsManager.createSensorCapsule(o.halfHeight, o.radius);
          break;
        default:
          return this.logger.warn(`Unknown collider type "${t}" for ${e.id}`), null;
      }
      return a ? (a.setTranslation(i.x, i.y, i.z), a.setRotation({
        x: r.x,
        y: r.y,
        z: r.z,
        w: r.w
      }), this.physicsManager.createColliderFromDesc(a)) : null;
    }
    registerTrimeshTriggerCollider(e, t, i) {
      if (!this.physicsManager || !t) return this.logger.warn(`Cannot register trimesh trigger collider "${e}" - missing physics manager or mesh`), false;
      const s = this.physicsManager.RAPIER, o = this.physicsManager.world, n = this.physicsManager.extractGeometryFromMesh(t);
      if (!n) return this.logger.error(`Failed to extract geometry for trimesh trigger collider "${e}"`), false;
      const { vertices: r, indices: a } = n, l = this.physicsManager.createSensorTrimesh(r, a), h = s.RigidBodyDesc.fixed().setTranslation(0, 0, 0).setRotation({
        x: 0,
        y: 0,
        z: 0,
        w: 1
      }), c = o.createRigidBody(h), d = o.createCollider(l, c);
      if (!d) return this.logger.error(`Failed to create trimesh trigger collider "${e}"`), false;
      if (this.colliders.push({
        id: e,
        data: i,
        collider: d,
        enabled: i.enabled !== false
      }), e.startsWith("zone-") && this.zoneMeshes.set(e, t), new URLSearchParams(window.location.search).get("showColliders") === "true" && this.scene) {
        const f = t.geometry.clone(), x = new le({
          color: 65280,
          wireframe: true,
          wireframeLinewidth: 2,
          transparent: true,
          opacity: 0.5,
          side: lt,
          depthTest: true,
          depthWrite: false
        }), w = new k(f, x);
        t.parent && (t.parent.updateWorldMatrix(true, false), w.applyMatrix4(t.parent.matrixWorld)), w.renderOrder = 9999, this.scene.add(w), this.debugMeshes.set(e, w), this.logger.log(`Created debug mesh for zone collider "${e}"`);
      }
      if (this.logger.log(`Registered trimesh trigger collider "${e}" from mesh "${t.name}" (${r.length / 3} vertices, ${a.length / 3} triangles)`), e.startsWith("zone-")) {
        const f = e.replace("zone-", "");
        this.logger.log(`Zone collider "${f}" registered - first vertex: (${r[0].toFixed(2)}, ${r[1].toFixed(2)}, ${r[2].toFixed(2)})`);
      }
      return true;
    }
    setCamera(e) {
      this.camera = e, this._createCameraProbe();
    }
    setSparkRenderer(e) {
      this.sparkRenderer = e, this.logger.log("SparkRenderer reference set on ColliderManager");
    }
    _createCameraProbe() {
      if (!this.physicsManager || this.cameraProbeBody) return;
      const e = this.physicsManager.RAPIER, t = this.physicsManager.world, i = e.RigidBodyDesc.kinematicPositionBased().setTranslation(0, 0, 0);
      this.cameraProbeBody = t.createRigidBody(i);
      const s = e.ColliderDesc.ball(0.2).setSensor(true);
      if (this.cameraProbeCollider = t.createCollider(s, this.cameraProbeBody), this.logger.log("Created camera probe for zone detection"), this.cameraProbeCollider) {
        const o = this.cameraProbeCollider.shape;
        this.logger.log(`Camera probe collider created: type=${o.type}, radius=${o.radius || "N/A"}`);
      }
    }
    _hasCameraMovedFromSpawn() {
      if (!this.cameraProbeBody) return false;
      const e = this.cameraProbeBody.translation();
      return Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z) > 5;
    }
    update(e = null, t = false) {
      this.updateDebugMeshVisibility();
      let i = null, s = null;
      t && this.camera && this.cameraProbeBody && (i = this.cameraProbeCollider), e && (s = e.collider(0)), !(!i && !s) && this.colliders.forEach(({ id: o, data: n, collider: r, enabled: a }) => {
        var _a3, _b2;
        if (!a || n.once && this.triggeredOnce.has(o) || !this.checkActivationConditions(n)) return;
        let l = false;
        if (o.startsWith("zone-") && this.zoneMeshes.has(o)) {
          if (t && this.cameraProbeBody && this.camera) {
            const c = this.cameraProbeBody.translation(), d = new S(10.94, 2.4, 57.76), u = ((_b2 = (_a3 = this.gameManager) == null ? void 0 : _a3.zoneManager) == null ? void 0 : _b2.hasMovedFromInitialState) ? new S(c.x, c.y, c.z) : d;
            l = this.checkPointInMesh(this.zoneMeshes.get(o), u);
          } else if (s && e) {
            const c = e.translation();
            l = this.checkPointInMesh(this.zoneMeshes.get(o), new S(c.x, c.y, c.z));
          }
        } else {
          let c = s;
          !c && i && (c = i), c && (l = this.physicsManager.checkIntersection(c, r));
        }
        const h = this.activeColliders.has(o);
        if (l && !h) {
          if (this.activeColliders.add(o), o.startsWith("zone-")) {
            const c = o.replace("zone-", "");
            this.logger.log(`[Zone] Entered zone collider "${o}" -> zone "${c}"`), this.gameManager && this.gameManager.zoneManager && this.gameManager.zoneManager.addActiveZone(c);
          }
          if (this.sparkRenderer) if (e) {
            const c = e.translation();
            this.sparkRenderer.position.set(c.x, c.y, c.z);
          } else this.camera && t && this.sparkRenderer.position.copy(this.camera.position);
          this.onEnter(o, n), n.once && (this.triggeredOnce.add(o), setTimeout(() => {
            this.removeCollider(o);
          }, 100));
        } else if (!l && h) {
          if (this.activeColliders.delete(o), o.startsWith("zone-")) {
            const c = o.replace("zone-", "");
            this.gameManager && this.gameManager.zoneManager && this.gameManager.zoneManager.removeActiveZone(c);
          }
          this.onExit(o, n);
        }
      });
    }
    checkPointInMesh(e, t) {
      const i = e.geometry;
      if (!i) return false;
      const s = i.attributes.position;
      if (!s) return false;
      e.updateWorldMatrix(true, false);
      const o = e.matrixWorld, n = i.index, r = n ? n.array : null, a = t.clone(), l = new S(1, 0, 0);
      let h = 0;
      const c = s.count, d = r ? r.length / 3 : c / 3;
      for (let u = 0; u < d; u++) {
        let m, f, x;
        if (r) {
          const R = r[u * 3], F = r[u * 3 + 1], z = r[u * 3 + 2];
          m = new S(s.getX(R), s.getY(R), s.getZ(R)).applyMatrix4(o), f = new S(s.getX(F), s.getY(F), s.getZ(F)).applyMatrix4(o), x = new S(s.getX(z), s.getY(z), s.getZ(z)).applyMatrix4(o);
        } else m = new S(s.getX(u * 3), s.getY(u * 3), s.getZ(u * 3)).applyMatrix4(o), f = new S(s.getX(u * 3 + 1), s.getY(u * 3 + 1), s.getZ(u * 3 + 1)).applyMatrix4(o), x = new S(s.getX(u * 3 + 2), s.getY(u * 3 + 2), s.getZ(u * 3 + 2)).applyMatrix4(o);
        const w = new S().subVectors(f, m), y = new S().subVectors(x, m), v = new S().crossVectors(l, y), b = w.dot(v);
        if (Math.abs(b) < 1e-8) continue;
        const T = 1 / b, M = new S().subVectors(a, m), C = T * M.dot(v);
        if (C < 0 || C > 1) continue;
        const P = new S().crossVectors(M, w), A = T * l.dot(P);
        if (A < 0 || C + A > 1) continue;
        T * y.dot(P) > 1e-8 && h++;
      }
      return h % 2 === 1;
    }
    checkActivationConditions(e) {
      const t = this.gameManager.getState();
      return e.criteria ? X(t, e.criteria) : true;
    }
    onEnter(e, t) {
      var _a3, _b2;
      if (e.startsWith("zone-") || this.logger.log(`Entered "${e}"`), !e.startsWith("zone-") && t.setStateOnEnter) {
        const s = (((_a3 = this.gameManager) == null ? void 0 : _a3.getState()) || {}).isSafari || false;
        if (s && e === "cat" && t.setStateOnEnter.heardCat) {
          const o = (_b2 = this.gameManager) == null ? void 0 : _b2.videoManager;
          if (o) {
            const n = s ? "catSafari" : "cat";
            this.logger.log(`Safari: Directly playing video "${n}" from collider trigger (before setState)`), o.playVideo(n);
          }
        }
        this.gameManager.setState(t.setStateOnEnter);
      }
    }
    onExit(e, t) {
      e.startsWith("zone-") || this.logger.log(`Exited "${e}"`), !e.startsWith("zone-") && t.setStateOnExit && this.gameManager.setState(t.setStateOnExit);
    }
    enableCollider(e) {
      const t = this.colliders.find((i) => i.id === e);
      t && (t.enabled = true, this.logger.log(`Enabled "${e}"`));
    }
    disableCollider(e) {
      const t = this.colliders.find((i) => i.id === e);
      t && (t.enabled = false, this.activeColliders.delete(e), this.logger.log(`Disabled "${e}"`));
    }
    resetOnceCollider(e) {
      this.triggeredOnce.delete(e), this.logger.log(`Reset once-trigger for "${e}"`);
    }
    isInCollider(e) {
      return this.activeColliders.has(e);
    }
    getActiveColliders() {
      return Array.from(this.activeColliders);
    }
    addDebugMesh(e, t) {
      this.debugMeshes.set(e, t);
    }
    updateDebugMeshVisibility() {
      this.colliders.forEach(({ id: e, data: t, enabled: i }) => {
        const s = this.debugMeshes.get(e);
        if (!s) return;
        if (t.gizmo) {
          s.visible = i;
          return;
        }
        const o = i && this.checkActivationConditions(t);
        s.visible = o;
      });
    }
    initializeDebugMeshes() {
      const e = this.gameManager.getURLParam("showColliders") === "true";
      this.gizmoManager;
      const t = this.colliders.some(({ data: i }) => i.gizmo);
      if (!e && !t) {
        this.logger.log("Collider debug visualization disabled (add ?showColliders=true to URL to enable)");
        return;
      }
      e && this.logger.log("Collider debug visualization enabled (showColliders=true)"), this.colliders.forEach(({ id: i, data: s, enabled: o }) => {
        const n = e || s.gizmo;
        if (!o || !n) return;
        let r;
        switch (s.type) {
          case "box":
            r = new oe(s.dimensions.x * 2, s.dimensions.y * 2, s.dimensions.z * 2);
            break;
          case "sphere":
            r = new Ei(s.dimensions.radius, 16, 16);
            break;
          case "capsule":
            r = new io(s.dimensions.radius, s.dimensions.halfHeight * 2, 8, 16);
            break;
        }
        if (r) {
          const a = new le({
            color: s.gizmo ? 16711680 : 65280,
            wireframe: true,
            wireframeLinewidth: 2
          }), l = new k(r, a);
          l.position.set(s.position.x, s.position.y, s.position.z), l.rotation.set(G.degToRad(s.rotation.x), G.degToRad(s.rotation.y), G.degToRad(s.rotation.z)), this.scene.add(l), this.debugMeshes.set(i, l), s.gizmo && this.gizmoManager && (this.gizmoManager.registerObject(l, i, "collider"), this.logger.log(`Registered gizmo collider: ${i}`)), e ? this.logger.log(`Added debug mesh for collider: ${i}`) : s.gizmo && this.logger.log(`Added gizmo debug mesh for collider: ${i} (red wireframe)`);
        }
      });
    }
    removeCollider(e) {
      const t = this.colliders.findIndex((s) => s.id === e);
      if (t === -1) return;
      const { collider: i } = this.colliders[t];
      if (i && this.physicsManager.world && this.physicsManager.world.removeCollider(i), this.debugMeshes.has(e)) {
        const s = this.debugMeshes.get(e);
        this.scene && s && (this.scene.remove(s), s.geometry.dispose(), s.material.dispose()), this.debugMeshes.delete(e);
      }
      this.zoneMeshes.has(e) && this.zoneMeshes.delete(e), this.colliders.splice(t, 1), this.activeColliders.delete(e), this.triggeredOnce.delete(e), this.logger.log(`Removed and cleaned up collider "${e}"`);
    }
  }
  class pn {
    constructor(e, t) {
      this.gameManager = e, this.sceneManager = t, this.logger = new N("ZoneManager", true), this.sparkRenderer = null, this.zoneToSplatsMax = {
        alleyIntro: [
          "alleyIntro",
          "alleyNavigable"
        ],
        alleyNavigable: [
          "alleyNavigable",
          "alleyLongView",
          "fourWay",
          "alleyIntro"
        ],
        fourWay: [
          "fourWay",
          "alleyNavigable",
          "threeWay",
          "plaza"
        ],
        threeWay: [
          "threeWay",
          "fourWay",
          "threeWay2"
        ],
        threeWay2: [
          "threeWay2",
          "threeWay",
          "plaza"
        ],
        plaza: [
          "plaza",
          "threeWay2",
          "fourWay"
        ]
      }, this.zoneToSplatsLaptop = {
        alleyIntro: [
          "alleyIntro",
          "fourWay"
        ],
        alleyNavigable: [
          "alleyIntro",
          "alleyLongView",
          "fourWay"
        ],
        fourWay: [
          "fourWay",
          "alleyIntro",
          "threeWay",
          "plaza"
        ],
        threeWay: [
          "threeWay",
          "fourWay",
          "threeWay2"
        ],
        threeWay2: [
          "threeWay2",
          "threeWay",
          "plaza"
        ],
        plaza: [
          "plaza",
          "threeWay2",
          "fourWay"
        ]
      }, this.zoneToSplatsDesktop = {
        alleyIntro: [
          "alleyIntro",
          "fourWay"
        ],
        alleyNavigable: [
          "alleyIntro",
          "alleyLongView",
          "fourWay"
        ],
        fourWay: [
          "fourWay",
          "alleyIntro",
          "threeWay",
          "plaza"
        ],
        threeWay: [
          "threeWay",
          "fourWay",
          "threeWay2"
        ],
        threeWay2: [
          "threeWay2",
          "threeWay",
          "plaza"
        ],
        plaza: [
          "plaza",
          "threeWay2",
          "fourWay"
        ]
      }, this.zoneToSplatsMobile = {
        alleyIntro: [
          "alleyIntro",
          "fourWay"
        ],
        alleyNavigable: [
          "alleyIntro",
          "alleyLongView",
          "fourWay"
        ],
        fourWay: [
          "fourWay",
          "alleyIntro",
          "threeWay",
          "plaza"
        ],
        threeWay: [
          "threeWay",
          "fourWay",
          "threeWay2"
        ],
        threeWay2: [
          "threeWay2",
          "threeWay",
          "plaza"
        ],
        plaza: [
          "plaza",
          "threeWay2",
          "fourWay"
        ]
      }, this.zoneToSplats = this.zoneToSplatsLaptop, this.loadedSplats = /* @__PURE__ */ new Set(), this.currentZone = null, this.hasMovedFromInitialState = false, this.zoneDetectionTimeout = null, this.enableZoneDetectionCallback = null, this.isActive = false, this.pendingZoneChange = null, this.zoneChangeTimeout = null, this.zoneChangeDebounceDelay = 200, this.activeZones = /* @__PURE__ */ new Set(), this.gameManager && (this.gameManager.on("state:changed", (i, s) => {
        this.handleStateChange(i, s);
      }), this.handleStateChange(this.gameManager.getState(), null)), this.logger.log("ZoneManager initialized");
    }
    setSparkRenderer(e) {
      this.sparkRenderer = e, this.logger.log("SparkRenderer reference set on ZoneManager");
    }
    getZoneMapping() {
      var _a3;
      if (!this.gameManager) return this.zoneToSplatsLaptop;
      const t = ((_a3 = this.gameManager.getState()) == null ? void 0 : _a3.performanceProfile) || "laptop";
      return t === "mobile" ? this.zoneToSplatsMobile : t === "laptop" ? this.zoneToSplatsLaptop : t === "desktop" ? this.zoneToSplatsDesktop : this.zoneToSplatsMax;
    }
    updateZoneMappingIfNeeded(e, t) {
      if (!e || !t) return;
      const i = t.performanceProfile || "laptop", s = e.performanceProfile || "laptop";
      i !== s && (this.zoneToSplats = this.getZoneMapping(), this.logger.log(`Zone mapping updated for ${s} performance profile`), this.currentZone && this.setZone(this.currentZone).catch((o) => {
        this.logger.error("Error reloading zone after mapping change:", o);
      }));
    }
    enableZoneDetection() {
      this.logger.log("enableZoneDetection() called - will activate after 10 second delay from plaza setup");
    }
    setEnableZoneDetectionCallback(e) {
      this.enableZoneDetectionCallback = e;
    }
    handleStateChange(e, t) {
      if (!e) return;
      t ? this.updateZoneMappingIfNeeded(e, t) : this.zoneToSplats = this.getZoneMapping();
      const i = this.isActive;
      if (this.isActive = e.currentState < p.ENTERING_OFFICE, i && !this.isActive) {
        this.logger.log(`Exiting exterior area (state ${e.currentState} >= ENTERING_OFFICE) - unloading all exterior splats. Scene objects will now load/unload based on criteria.`), this.currentZone = null, this.zoneChangeTimeout && (clearTimeout(this.zoneChangeTimeout), this.zoneChangeTimeout = null, this.pendingZoneChange = null), this.activeZones.clear(), this.unloadAllExteriorSplats();
        return;
      }
      if (Gt() && !this.hasMovedFromInitialState && (this.hasMovedFromInitialState = true, this.logger.log("Zone detection enabled immediately (debug spawn active) - collision detection will determine zones")), e.currentZone && e.currentZone !== this.currentZone && this.isActive && (this.hasMovedFromInitialState ? this.logger.log(`[Zone] Ignoring state.currentZone="${e.currentZone}" - zone detection is enabled, collision detection is source of truth`) : e.currentZone === "plaza" && this.currentZone === null && !Gt() && (this.activeZones.has(e.currentZone) || this.activeZones.add(e.currentZone), this.setZone(e.currentZone).catch((s) => {
        this.logger.error("Error setting initial zone:", s);
      }), this.zoneDetectionTimeout && clearTimeout(this.zoneDetectionTimeout), this.zoneDetectionTimeout = setTimeout(() => {
        this.hasMovedFromInitialState || (this.hasMovedFromInitialState = true, this.logger.log("Zone detection enabled after 10 second delay (plaza set)"));
      }, 1e4))), !i && this.isActive) {
        this.logger.log(`ZoneManager activated (currentState: ${e.currentState}, < OFFICE_INTERIOR: ${e.currentState < p.OFFICE_INTERIOR}) - waiting for zone collision detection`);
        return;
      }
    }
    _hasCameraMovedFromSpawn() {
      return !this.gameManager || !this.gameManager.sceneManager ? false : this.hasMovedFromInitialState;
    }
    async setZone(e) {
      var _a3;
      if (!this.isActive) {
        this.logger.warn(`Cannot set zone "${e}" - ZoneManager is not active (must be before OFFICE_INTERIOR)`);
        return;
      }
      if (!this.hasMovedFromInitialState && (e !== "plaza" || this.currentZone !== null)) {
        this.logger.log(`[BLOCKED] Zone change to "${e}" - zone detection not enabled yet (currentZone: ${this.currentZone}, hasMovedFromInitialState: ${this.hasMovedFromInitialState})`);
        return;
      }
      if (!e) {
        this.currentZone = null, this.logger.log("Zone cleared - unloading all exterior splats"), this.unloadAllExteriorSplats();
        return;
      }
      if (e === this.currentZone) return;
      const t = this.currentZone;
      if (this.currentZone = e, this.sparkRenderer && ((_a3 = this.gameManager) == null ? void 0 : _a3.colliderManager)) {
        const c = this.gameManager.colliderManager;
        c.camera && this.sparkRenderer.position.copy(c.camera.position);
      }
      const s = this.getZoneMapping()[e] || [];
      this.logger.log(`Zone changed: ${t || "none"} -> ${e}`), this.logger.log(`Required splats for zone "${e}": ${s.join(", ")}`), this.logger.log(`Currently loaded splats: ${Array.from(this.loadedSplats).join(", ") || "none"}`);
      const o = /* @__PURE__ */ new Set();
      for (const c of s) if (this.loadedSplats.has(c) || this.sceneManager.hasObject(c)) {
        const d = this.sceneManager.getObject(c);
        d && d.parent === this.sceneManager.scene && (o.add(c), this.loadedSplats.has(c) || this.loadedSplats.add(c));
      }
      const n = [];
      for (const c of this.loadedSplats) s.includes(c) || n.push(c);
      const r = [];
      for (const c of s) if (!o.has(c)) {
        if (this.sceneManager.hasObject(c)) {
          const d = this.sceneManager.getObject(c);
          if (d) {
            (!d.parent || d.parent !== this.sceneManager.scene) && (this.sceneManager.objectsNotInScene.has(c) ? this.sceneManager.addObjectToScene(c) : this.sceneManager.scene.add(d)), this.loadedSplats.has(c) || this.loadedSplats.add(c);
            continue;
          }
        }
        this.sceneManager.loadingPromises && this.sceneManager.loadingPromises.has(c) || (this.loadedSplats.has(c) && this.loadedSplats.delete(c), r.push(c));
      }
      n.length > 0 && this.logger.log(`Unloading ${n.length} splat(s): ${n.join(", ")}`), r.length > 0 && this.logger.log(`Loading ${r.length} splat(s): ${r.join(", ")}`);
      for (const c of n) this.unloadSplat(c);
      const a = [], l = [];
      for (const c of r) this.sceneManager.loadingPromises && this.sceneManager.loadingPromises.has(c) ? a.push(c) : l.push(c);
      a.length > 0 && (this.logger.log(`Waiting for ${a.length} already-loading splat(s): ${a.join(", ")}`), await Promise.all(a.map(async (c) => {
        try {
          const d = await this.sceneManager.loadingPromises.get(c);
          d && ((!d.parent || d.parent !== this.sceneManager.scene) && (this.sceneManager.objectsNotInScene.has(c) ? this.sceneManager.addObjectToScene(c) : this.sceneManager.scene.add(d)), this.loadedSplats.has(c) || this.loadedSplats.add(c));
        } catch (d) {
          this.logger.error(`Error waiting for splat "${c}":`, d);
        }
      })));
      for (const c of l) await this.loadSplat(c);
      const h = Array.from(this.loadedSplats).filter((c) => s.includes(c));
      this.logger.log(`Zone configured - Loaded splats: ${h.join(", ")}`);
    }
    async loadSplat(e) {
      if (!this.sceneManager) {
        this.logger.error("Cannot load splat - sceneManager not available");
        return;
      }
      if (this.sceneManager.hasObject(e)) {
        const o = this.sceneManager.getObject(e);
        if (o) {
          (!o.parent || o.parent !== this.sceneManager.scene) && (this.sceneManager.objectsNotInScene.has(e) ? this.sceneManager.addObjectToScene(e) : this.sceneManager.scene.add(o)), this.loadedSplats.has(e) || this.loadedSplats.add(e);
          return;
        }
      }
      if (this.loadedSplats.has(e)) {
        const o = this.sceneManager.getObject(e);
        if (o && o.parent === this.sceneManager.scene) return;
        this.loadedSplats.delete(e);
      }
      if (!this.gameManager) {
        this.logger.error("Cannot load splat - gameManager not available");
        return;
      }
      const t = this.gameManager.getState(), s = bs(t).find((o) => o.id === e);
      if (!s) {
        this.logger.warn(`Splat "${e}" not found in sceneData or doesn't match current criteria (performanceProfile: ${t == null ? void 0 : t.performanceProfile})`);
        return;
      }
      if (this.sceneManager.loadingPromises && this.sceneManager.loadingPromises.has(e)) try {
        const o = await this.sceneManager.loadingPromises.get(e);
        o && ((!o.parent || o.parent !== this.sceneManager.scene) && (this.sceneManager.objectsNotInScene.has(e) ? this.sceneManager.addObjectToScene(e) : this.sceneManager.scene.add(o)), this.loadedSplats.has(e) || this.loadedSplats.add(e));
        return;
      } catch (o) {
        this.logger.error(`Error waiting for splat "${e}" to load:`, o);
      }
      try {
        await this.sceneManager.loadObject(s, false), this.loadedSplats.add(e);
      } catch (o) {
        this.logger.error(`Failed to load splat "${e}":`, o);
      }
    }
    unloadSplat(e) {
      if (!this.sceneManager) {
        this.logger.error("Cannot unload splat - sceneManager not available");
        return;
      }
      if (!this.loadedSplats.has(e)) return;
      if (this.currentZone && (this.getZoneMapping()[this.currentZone] || []).includes(e)) {
        this.logger.warn(`Attempted to unload required splat "${e}" for zone "${this.currentZone}" - skipping`);
        return;
      }
      const t = this.sceneManager.getObject(e);
      t && t.parent === this.sceneManager.scene && (this.sceneManager.scene.remove(t), this.sceneManager.objectsNotInScene.add(e)), this.loadedSplats.delete(e);
    }
    unloadAllExteriorSplats() {
      const e = Array.from(this.loadedSplats);
      for (const t of e) this.unloadSplat(t);
      this.logger.log("All exterior splats unloaded");
    }
    addActiveZone(e) {
      if (!this.isActive) return;
      if (!this.hasMovedFromInitialState) {
        this.logger.log(`Ignoring collision detection for "${e}" - waiting for camera animation to position camera`);
        return;
      }
      if (this.activeZones.has(e)) return;
      this.activeZones.add(e), this.logger.log(`[Zone] Added zone "${e}" to active zones: ${Array.from(this.activeZones).join(", ")}`);
      let t = null;
      if (this.currentZone && this.activeZones.has(this.currentZone)) t = this.currentZone;
      else if (this.activeZones.size > 0) {
        const i = [
          "alleyIntro",
          "alleyNavigable",
          "alleyLongView",
          "threeWay2",
          "threeWay",
          "plaza",
          "fourWay"
        ];
        for (const s of i) if (this.activeZones.has(s)) {
          t = s;
          break;
        }
        t || (t = Array.from(this.activeZones)[0]);
      }
      t && t !== this.currentZone && (this.pendingZoneChange = t, this.zoneChangeTimeout && clearTimeout(this.zoneChangeTimeout), this.zoneChangeTimeout = setTimeout(() => {
        if (this.pendingZoneChange !== null) {
          const i = this.pendingZoneChange;
          this.pendingZoneChange = null, i !== this.currentZone && this.activeZones.has(i) && this.setZone(i).catch((s) => {
            this.logger.error("Error setting zone:", s);
          });
        }
        this.zoneChangeTimeout = null;
      }, this.zoneChangeDebounceDelay));
    }
    removeActiveZone(e) {
      if (this.isActive && this.activeZones.has(e) && (this.activeZones.delete(e), this.logger.log(`[Zone] Removed zone "${e}" from active zones: ${Array.from(this.activeZones).join(", ") || "none"}`), e === this.currentZone && this.activeZones.size > 0)) {
        const t = [
          "alleyIntro",
          "alleyNavigable",
          "alleyLongView",
          "threeWay2",
          "threeWay",
          "plaza",
          "fourWay"
        ];
        let i = null;
        for (const s of t) if (this.activeZones.has(s)) {
          i = s;
          break;
        }
        i || (i = Array.from(this.activeZones)[0]), this.logger.log(`[Zone] Current zone "${e}" removed. Selected new zone "${i}" from active zones: ${Array.from(this.activeZones).join(", ")}`), i !== this.currentZone && (this.pendingZoneChange = i, this.zoneChangeTimeout && clearTimeout(this.zoneChangeTimeout), this.zoneChangeTimeout = setTimeout(() => {
          if (this.pendingZoneChange !== null) {
            const s = this.pendingZoneChange;
            this.pendingZoneChange = null, s !== this.currentZone && this.activeZones.has(s) && this.setZone(s).catch((o) => {
              this.logger.error("Error switching zone after exit:", o);
            });
          }
          this.zoneChangeTimeout = null;
        }, this.zoneChangeDebounceDelay));
      }
    }
  }
  class mn extends so {
    constructor(e) {
      super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
        return new xn(t);
      }), this.register(function(t) {
        return new bn(t);
      }), this.register(function(t) {
        return new In(t);
      }), this.register(function(t) {
        return new Rn(t);
      }), this.register(function(t) {
        return new Dn(t);
      }), this.register(function(t) {
        return new Mn(t);
      }), this.register(function(t) {
        return new Tn(t);
      }), this.register(function(t) {
        return new Cn(t);
      }), this.register(function(t) {
        return new Pn(t);
      }), this.register(function(t) {
        return new wn(t);
      }), this.register(function(t) {
        return new An(t);
      }), this.register(function(t) {
        return new Sn(t);
      }), this.register(function(t) {
        return new En(t);
      }), this.register(function(t) {
        return new kn(t);
      }), this.register(function(t) {
        return new yn(t);
      }), this.register(function(t) {
        return new Ln(t);
      }), this.register(function(t) {
        return new On(t);
      });
    }
    load(e, t, i, s) {
      const o = this;
      let n;
      if (this.resourcePath !== "") n = this.resourcePath;
      else if (this.path !== "") {
        const l = St.extractUrlBase(e);
        n = St.resolveURL(l, this.path);
      } else n = St.extractUrlBase(e);
      this.manager.itemStart(e);
      const r = function(l) {
        s ? s(l) : console.error(l), o.manager.itemError(e), o.manager.itemEnd(e);
      }, a = new Ss(this.manager);
      a.setPath(this.path), a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(l) {
        try {
          o.parse(l, n, function(h) {
            t(h), o.manager.itemEnd(e);
          }, r);
        } catch (h) {
          r(h);
        }
      }, i, r);
    }
    setDRACOLoader(e) {
      return this.dracoLoader = e, this;
    }
    setKTX2Loader(e) {
      return this.ktx2Loader = e, this;
    }
    setMeshoptDecoder(e) {
      return this.meshoptDecoder = e, this;
    }
    register(e) {
      return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
    }
    unregister(e) {
      return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
    }
    parse(e, t, i, s) {
      let o;
      const n = {}, r = {}, a = new TextDecoder();
      if (typeof e == "string") o = JSON.parse(e);
      else if (e instanceof ArrayBuffer) if (a.decode(new Uint8Array(e, 0, 4)) === Ls) {
        try {
          n[_.KHR_BINARY_GLTF] = new zn(e);
        } catch (c) {
          s && s(c);
          return;
        }
        o = JSON.parse(n[_.KHR_BINARY_GLTF].content);
      } else o = JSON.parse(a.decode(e));
      else o = e;
      if (o.asset === void 0 || o.asset.version[0] < 2) {
        s && s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
        return;
      }
      const l = new Yn(o, {
        path: t || this.resourcePath || "",
        crossOrigin: this.crossOrigin,
        requestHeader: this.requestHeader,
        manager: this.manager,
        ktx2Loader: this.ktx2Loader,
        meshoptDecoder: this.meshoptDecoder
      });
      l.fileLoader.setRequestHeader(this.requestHeader);
      for (let h = 0; h < this.pluginCallbacks.length; h++) {
        const c = this.pluginCallbacks[h](l);
        c.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), r[c.name] = c, n[c.name] = true;
      }
      if (o.extensionsUsed) for (let h = 0; h < o.extensionsUsed.length; ++h) {
        const c = o.extensionsUsed[h], d = o.extensionsRequired || [];
        switch (c) {
          case _.KHR_MATERIALS_UNLIT:
            n[c] = new vn();
            break;
          case _.KHR_DRACO_MESH_COMPRESSION:
            n[c] = new _n(o, this.dracoLoader);
            break;
          case _.KHR_TEXTURE_TRANSFORM:
            n[c] = new Fn();
            break;
          case _.KHR_MESH_QUANTIZATION:
            n[c] = new $n();
            break;
          default:
            d.indexOf(c) >= 0 && r[c] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + c + '".');
        }
      }
      l.setExtensions(n), l.setPlugins(r), l.parse(i, s);
    }
    parseAsync(e, t) {
      const i = this;
      return new Promise(function(s, o) {
        i.parse(e, t, s, o);
      });
    }
  }
  function fn() {
    let g = {};
    return {
      get: function(e) {
        return g[e];
      },
      add: function(e, t) {
        g[e] = t;
      },
      remove: function(e) {
        delete g[e];
      },
      removeAll: function() {
        g = {};
      }
    };
  }
  const _ = {
    KHR_BINARY_GLTF: "KHR_binary_glTF",
    KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
    KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
    KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
    KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
    KHR_MATERIALS_IOR: "KHR_materials_ior",
    KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
    KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
    KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
    KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
    KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
    KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
    KHR_MATERIALS_VOLUME: "KHR_materials_volume",
    KHR_TEXTURE_BASISU: "KHR_texture_basisu",
    KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
    KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
    KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
    EXT_MATERIALS_BUMP: "EXT_materials_bump",
    EXT_TEXTURE_WEBP: "EXT_texture_webp",
    EXT_TEXTURE_AVIF: "EXT_texture_avif",
    EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
    EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
  };
  class yn {
    constructor(e) {
      this.parser = e, this.name = _.KHR_LIGHTS_PUNCTUAL, this.cache = {
        refs: {},
        uses: {}
      };
    }
    _markDefs() {
      const e = this.parser, t = this.parser.json.nodes || [];
      for (let i = 0, s = t.length; i < s; i++) {
        const o = t[i];
        o.extensions && o.extensions[this.name] && o.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, o.extensions[this.name].light);
      }
    }
    _loadLight(e) {
      const t = this.parser, i = "light:" + e;
      let s = t.cache.get(i);
      if (s) return s;
      const o = t.json, a = ((o.extensions && o.extensions[this.name] || {}).lights || [])[e];
      let l;
      const h = new J(16777215);
      a.color !== void 0 && h.setRGB(a.color[0], a.color[1], a.color[2], Ie);
      const c = a.range !== void 0 ? a.range : 0;
      switch (a.type) {
        case "directional":
          l = new ms(h), l.target.position.set(0, 0, -1), l.add(l.target);
          break;
        case "point":
          l = new fs(h), l.distance = c;
          break;
        case "spot":
          l = new ys(h), l.distance = c, a.spot = a.spot || {}, a.spot.innerConeAngle = a.spot.innerConeAngle !== void 0 ? a.spot.innerConeAngle : 0, a.spot.outerConeAngle = a.spot.outerConeAngle !== void 0 ? a.spot.outerConeAngle : Math.PI / 4, l.angle = a.spot.outerConeAngle, l.penumbra = 1 - a.spot.innerConeAngle / a.spot.outerConeAngle, l.target.position.set(0, 0, -1), l.add(l.target);
          break;
        default:
          throw new Error("THREE.GLTFLoader: Unexpected light type: " + a.type);
      }
      return l.position.set(0, 0, 0), Pe(l, a), a.intensity !== void 0 && (l.intensity = a.intensity), l.name = t.createUniqueName(a.name || "light_" + e), s = Promise.resolve(l), t.cache.add(i, s), s;
    }
    getDependency(e, t) {
      if (e === "light") return this._loadLight(t);
    }
    createNodeAttachment(e) {
      const t = this, i = this.parser, o = i.json.nodes[e], r = (o.extensions && o.extensions[this.name] || {}).light;
      return r === void 0 ? null : this._loadLight(r).then(function(a) {
        return i._getNodeRef(t.cache, r, a);
      });
    }
  }
  class vn {
    constructor() {
      this.name = _.KHR_MATERIALS_UNLIT;
    }
    getMaterialType() {
      return le;
    }
    extendParams(e, t, i) {
      const s = [];
      e.color = new J(1, 1, 1), e.opacity = 1;
      const o = t.pbrMetallicRoughness;
      if (o) {
        if (Array.isArray(o.baseColorFactor)) {
          const n = o.baseColorFactor;
          e.color.setRGB(n[0], n[1], n[2], Ie), e.opacity = n[3];
        }
        o.baseColorTexture !== void 0 && s.push(i.assignTexture(e, "map", o.baseColorTexture, We));
      }
      return Promise.all(s);
    }
  }
  class wn {
    constructor(e) {
      this.parser = e, this.name = _.KHR_MATERIALS_EMISSIVE_STRENGTH;
    }
    extendMaterialParams(e, t) {
      const s = this.parser.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const o = s.extensions[this.name].emissiveStrength;
      return o !== void 0 && (t.emissiveIntensity = o), Promise.resolve();
    }
  }
  class xn {
    constructor(e) {
      this.parser = e, this.name = _.KHR_MATERIALS_CLEARCOAT;
    }
    getMaterialType(e) {
      const i = this.parser.json.materials[e];
      return !i.extensions || !i.extensions[this.name] ? null : Ae;
    }
    extendMaterialParams(e, t) {
      const i = this.parser, s = i.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const o = [], n = s.extensions[this.name];
      if (n.clearcoatFactor !== void 0 && (t.clearcoat = n.clearcoatFactor), n.clearcoatTexture !== void 0 && o.push(i.assignTexture(t, "clearcoatMap", n.clearcoatTexture)), n.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = n.clearcoatRoughnessFactor), n.clearcoatRoughnessTexture !== void 0 && o.push(i.assignTexture(t, "clearcoatRoughnessMap", n.clearcoatRoughnessTexture)), n.clearcoatNormalTexture !== void 0 && (o.push(i.assignTexture(t, "clearcoatNormalMap", n.clearcoatNormalTexture)), n.clearcoatNormalTexture.scale !== void 0)) {
        const r = n.clearcoatNormalTexture.scale;
        t.clearcoatNormalScale = new Ue(r, r);
      }
      return Promise.all(o);
    }
  }
  class bn {
    constructor(e) {
      this.parser = e, this.name = _.KHR_MATERIALS_DISPERSION;
    }
    getMaterialType(e) {
      const i = this.parser.json.materials[e];
      return !i.extensions || !i.extensions[this.name] ? null : Ae;
    }
    extendMaterialParams(e, t) {
      const s = this.parser.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const o = s.extensions[this.name];
      return t.dispersion = o.dispersion !== void 0 ? o.dispersion : 0, Promise.resolve();
    }
  }
  class Sn {
    constructor(e) {
      this.parser = e, this.name = _.KHR_MATERIALS_IRIDESCENCE;
    }
    getMaterialType(e) {
      const i = this.parser.json.materials[e];
      return !i.extensions || !i.extensions[this.name] ? null : Ae;
    }
    extendMaterialParams(e, t) {
      const i = this.parser, s = i.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const o = [], n = s.extensions[this.name];
      return n.iridescenceFactor !== void 0 && (t.iridescence = n.iridescenceFactor), n.iridescenceTexture !== void 0 && o.push(i.assignTexture(t, "iridescenceMap", n.iridescenceTexture)), n.iridescenceIor !== void 0 && (t.iridescenceIOR = n.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [
        100,
        400
      ]), n.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = n.iridescenceThicknessMinimum), n.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = n.iridescenceThicknessMaximum), n.iridescenceThicknessTexture !== void 0 && o.push(i.assignTexture(t, "iridescenceThicknessMap", n.iridescenceThicknessTexture)), Promise.all(o);
    }
  }
  class Mn {
    constructor(e) {
      this.parser = e, this.name = _.KHR_MATERIALS_SHEEN;
    }
    getMaterialType(e) {
      const i = this.parser.json.materials[e];
      return !i.extensions || !i.extensions[this.name] ? null : Ae;
    }
    extendMaterialParams(e, t) {
      const i = this.parser, s = i.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const o = [];
      t.sheenColor = new J(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
      const n = s.extensions[this.name];
      if (n.sheenColorFactor !== void 0) {
        const r = n.sheenColorFactor;
        t.sheenColor.setRGB(r[0], r[1], r[2], Ie);
      }
      return n.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = n.sheenRoughnessFactor), n.sheenColorTexture !== void 0 && o.push(i.assignTexture(t, "sheenColorMap", n.sheenColorTexture, We)), n.sheenRoughnessTexture !== void 0 && o.push(i.assignTexture(t, "sheenRoughnessMap", n.sheenRoughnessTexture)), Promise.all(o);
    }
  }
  class Tn {
    constructor(e) {
      this.parser = e, this.name = _.KHR_MATERIALS_TRANSMISSION;
    }
    getMaterialType(e) {
      const i = this.parser.json.materials[e];
      return !i.extensions || !i.extensions[this.name] ? null : Ae;
    }
    extendMaterialParams(e, t) {
      const i = this.parser, s = i.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const o = [], n = s.extensions[this.name];
      return n.transmissionFactor !== void 0 && (t.transmission = n.transmissionFactor), n.transmissionTexture !== void 0 && o.push(i.assignTexture(t, "transmissionMap", n.transmissionTexture)), Promise.all(o);
    }
  }
  class Cn {
    constructor(e) {
      this.parser = e, this.name = _.KHR_MATERIALS_VOLUME;
    }
    getMaterialType(e) {
      const i = this.parser.json.materials[e];
      return !i.extensions || !i.extensions[this.name] ? null : Ae;
    }
    extendMaterialParams(e, t) {
      const i = this.parser, s = i.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const o = [], n = s.extensions[this.name];
      t.thickness = n.thicknessFactor !== void 0 ? n.thicknessFactor : 0, n.thicknessTexture !== void 0 && o.push(i.assignTexture(t, "thicknessMap", n.thicknessTexture)), t.attenuationDistance = n.attenuationDistance || 1 / 0;
      const r = n.attenuationColor || [
        1,
        1,
        1
      ];
      return t.attenuationColor = new J().setRGB(r[0], r[1], r[2], Ie), Promise.all(o);
    }
  }
  class Pn {
    constructor(e) {
      this.parser = e, this.name = _.KHR_MATERIALS_IOR;
    }
    getMaterialType(e) {
      const i = this.parser.json.materials[e];
      return !i.extensions || !i.extensions[this.name] ? null : Ae;
    }
    extendMaterialParams(e, t) {
      const s = this.parser.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const o = s.extensions[this.name];
      return t.ior = o.ior !== void 0 ? o.ior : 1.5, Promise.resolve();
    }
  }
  class An {
    constructor(e) {
      this.parser = e, this.name = _.KHR_MATERIALS_SPECULAR;
    }
    getMaterialType(e) {
      const i = this.parser.json.materials[e];
      return !i.extensions || !i.extensions[this.name] ? null : Ae;
    }
    extendMaterialParams(e, t) {
      const i = this.parser, s = i.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const o = [], n = s.extensions[this.name];
      t.specularIntensity = n.specularFactor !== void 0 ? n.specularFactor : 1, n.specularTexture !== void 0 && o.push(i.assignTexture(t, "specularIntensityMap", n.specularTexture));
      const r = n.specularColorFactor || [
        1,
        1,
        1
      ];
      return t.specularColor = new J().setRGB(r[0], r[1], r[2], Ie), n.specularColorTexture !== void 0 && o.push(i.assignTexture(t, "specularColorMap", n.specularColorTexture, We)), Promise.all(o);
    }
  }
  class kn {
    constructor(e) {
      this.parser = e, this.name = _.EXT_MATERIALS_BUMP;
    }
    getMaterialType(e) {
      const i = this.parser.json.materials[e];
      return !i.extensions || !i.extensions[this.name] ? null : Ae;
    }
    extendMaterialParams(e, t) {
      const i = this.parser, s = i.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const o = [], n = s.extensions[this.name];
      return t.bumpScale = n.bumpFactor !== void 0 ? n.bumpFactor : 1, n.bumpTexture !== void 0 && o.push(i.assignTexture(t, "bumpMap", n.bumpTexture)), Promise.all(o);
    }
  }
  class En {
    constructor(e) {
      this.parser = e, this.name = _.KHR_MATERIALS_ANISOTROPY;
    }
    getMaterialType(e) {
      const i = this.parser.json.materials[e];
      return !i.extensions || !i.extensions[this.name] ? null : Ae;
    }
    extendMaterialParams(e, t) {
      const i = this.parser, s = i.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const o = [], n = s.extensions[this.name];
      return n.anisotropyStrength !== void 0 && (t.anisotropy = n.anisotropyStrength), n.anisotropyRotation !== void 0 && (t.anisotropyRotation = n.anisotropyRotation), n.anisotropyTexture !== void 0 && o.push(i.assignTexture(t, "anisotropyMap", n.anisotropyTexture)), Promise.all(o);
    }
  }
  class In {
    constructor(e) {
      this.parser = e, this.name = _.KHR_TEXTURE_BASISU;
    }
    loadTexture(e) {
      const t = this.parser, i = t.json, s = i.textures[e];
      if (!s.extensions || !s.extensions[this.name]) return null;
      const o = s.extensions[this.name], n = t.options.ktx2Loader;
      if (!n) {
        if (i.extensionsRequired && i.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
        return null;
      }
      return t.loadTextureImage(e, o.source, n);
    }
  }
  class Rn {
    constructor(e) {
      this.parser = e, this.name = _.EXT_TEXTURE_WEBP;
    }
    loadTexture(e) {
      const t = this.name, i = this.parser, s = i.json, o = s.textures[e];
      if (!o.extensions || !o.extensions[t]) return null;
      const n = o.extensions[t], r = s.images[n.source];
      let a = i.textureLoader;
      if (r.uri) {
        const l = i.options.manager.getHandler(r.uri);
        l !== null && (a = l);
      }
      return i.loadTextureImage(e, n.source, a);
    }
  }
  class Dn {
    constructor(e) {
      this.parser = e, this.name = _.EXT_TEXTURE_AVIF;
    }
    loadTexture(e) {
      const t = this.name, i = this.parser, s = i.json, o = s.textures[e];
      if (!o.extensions || !o.extensions[t]) return null;
      const n = o.extensions[t], r = s.images[n.source];
      let a = i.textureLoader;
      if (r.uri) {
        const l = i.options.manager.getHandler(r.uri);
        l !== null && (a = l);
      }
      return i.loadTextureImage(e, n.source, a);
    }
  }
  class Ln {
    constructor(e) {
      this.name = _.EXT_MESHOPT_COMPRESSION, this.parser = e;
    }
    loadBufferView(e) {
      const t = this.parser.json, i = t.bufferViews[e];
      if (i.extensions && i.extensions[this.name]) {
        const s = i.extensions[this.name], o = this.parser.getDependency("buffer", s.buffer), n = this.parser.options.meshoptDecoder;
        if (!n || !n.supported) {
          if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
          return null;
        }
        return o.then(function(r) {
          const a = s.byteOffset || 0, l = s.byteLength || 0, h = s.count, c = s.byteStride, d = new Uint8Array(r, a, l);
          return n.decodeGltfBufferAsync ? n.decodeGltfBufferAsync(h, c, d, s.mode, s.filter).then(function(u) {
            return u.buffer;
          }) : n.ready.then(function() {
            const u = new ArrayBuffer(h * c);
            return n.decodeGltfBuffer(new Uint8Array(u), h, c, d, s.mode, s.filter), u;
          });
        });
      } else return null;
    }
  }
  class On {
    constructor(e) {
      this.name = _.EXT_MESH_GPU_INSTANCING, this.parser = e;
    }
    createNodeMesh(e) {
      const t = this.parser.json, i = t.nodes[e];
      if (!i.extensions || !i.extensions[this.name] || i.mesh === void 0) return null;
      const s = t.meshes[i.mesh];
      for (const l of s.primitives) if (l.mode !== we.TRIANGLES && l.mode !== we.TRIANGLE_STRIP && l.mode !== we.TRIANGLE_FAN && l.mode !== void 0) return null;
      const n = i.extensions[this.name].attributes, r = [], a = {};
      for (const l in n) r.push(this.parser.getDependency("accessor", n[l]).then((h) => (a[l] = h, a[l])));
      return r.length < 1 ? null : (r.push(this.parser.createNodeMesh(e)), Promise.all(r).then((l) => {
        const h = l.pop(), c = h.isGroup ? h.children : [
          h
        ], d = l[0].count, u = [];
        for (const m of c) {
          const f = new Me(), x = new S(), w = new I(), y = new S(1, 1, 1), v = new oo(m.geometry, m.material, d);
          for (let b = 0; b < d; b++) a.TRANSLATION && x.fromBufferAttribute(a.TRANSLATION, b), a.ROTATION && w.fromBufferAttribute(a.ROTATION, b), a.SCALE && y.fromBufferAttribute(a.SCALE, b), v.setMatrixAt(b, f.compose(x, w, y));
          for (const b in a) if (b === "_COLOR_0") {
            const T = a[b];
            v.instanceColor = new tt(T.array, T.itemSize, T.normalized);
          } else b !== "TRANSLATION" && b !== "ROTATION" && b !== "SCALE" && m.geometry.setAttribute(b, a[b]);
          Fe.prototype.copy.call(v, m), this.parser.assignFinalMaterial(v), u.push(v);
        }
        return h.isGroup ? (h.clear(), h.add(...u), h) : u[0];
      }));
    }
  }
  const Ls = "glTF", pt = 12, Xi = {
    JSON: 1313821514,
    BIN: 5130562
  };
  class zn {
    constructor(e) {
      this.name = _.KHR_BINARY_GLTF, this.content = null, this.body = null;
      const t = new DataView(e, 0, pt), i = new TextDecoder();
      if (this.header = {
        magic: i.decode(new Uint8Array(e.slice(0, 4))),
        version: t.getUint32(4, true),
        length: t.getUint32(8, true)
      }, this.header.magic !== Ls) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
      if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
      const s = this.header.length - pt, o = new DataView(e, pt);
      let n = 0;
      for (; n < s; ) {
        const r = o.getUint32(n, true);
        n += 4;
        const a = o.getUint32(n, true);
        if (n += 4, a === Xi.JSON) {
          const l = new Uint8Array(e, pt + n, r);
          this.content = i.decode(l);
        } else if (a === Xi.BIN) {
          const l = pt + n;
          this.body = e.slice(l, l + r);
        }
        n += r;
      }
      if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
    }
  }
  class _n {
    constructor(e, t) {
      if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
      this.name = _.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
    }
    decodePrimitive(e, t) {
      const i = this.json, s = this.dracoLoader, o = e.extensions[this.name].bufferView, n = e.extensions[this.name].attributes, r = {}, a = {}, l = {};
      for (const h in n) {
        const c = Ci[h] || h.toLowerCase();
        r[c] = n[h];
      }
      for (const h in e.attributes) {
        const c = Ci[h] || h.toLowerCase();
        if (n[h] !== void 0) {
          const d = i.accessors[e.attributes[h]], u = st[d.componentType];
          l[c] = u.name, a[c] = d.normalized === true;
        }
      }
      return t.getDependency("bufferView", o).then(function(h) {
        return new Promise(function(c, d) {
          s.decodeDracoFile(h, function(u) {
            for (const m in u.attributes) {
              const f = u.attributes[m], x = a[m];
              x !== void 0 && (f.normalized = x);
            }
            c(u);
          }, r, l, Ie, d);
        });
      });
    }
  }
  class Fn {
    constructor() {
      this.name = _.KHR_TEXTURE_TRANSFORM;
    }
    extendTexture(e, t) {
      return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = true), e;
    }
  }
  class $n {
    constructor() {
      this.name = _.KHR_MESH_QUANTIZATION;
    }
  }
  class Os extends bo {
    constructor(e, t, i, s) {
      super(e, t, i, s);
    }
    copySampleValue_(e) {
      const t = this.resultBuffer, i = this.sampleValues, s = this.valueSize, o = e * s * 3 + s;
      for (let n = 0; n !== s; n++) t[n] = i[o + n];
      return t;
    }
    interpolate_(e, t, i, s) {
      const o = this.resultBuffer, n = this.sampleValues, r = this.valueSize, a = r * 2, l = r * 3, h = s - t, c = (i - t) / h, d = c * c, u = d * c, m = e * l, f = m - l, x = -2 * u + 3 * d, w = u - d, y = 1 - x, v = w - d + c;
      for (let b = 0; b !== r; b++) {
        const T = n[f + b + r], M = n[f + b + a] * h, C = n[m + b + r], P = n[m + b] * h;
        o[b] = y * T + v * M + x * C + w * P;
      }
      return o;
    }
  }
  const Nn = new I();
  class jn extends Os {
    interpolate_(e, t, i, s) {
      const o = super.interpolate_(e, t, i, s);
      return Nn.fromArray(o).normalize().toArray(o), o;
    }
  }
  const we = {
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6
  }, st = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array
  }, Ki = {
    9728: Cs,
    9729: ye,
    9984: lo,
    9985: ro,
    9986: ao,
    9987: Ts
  }, Ji = {
    33071: Ps,
    33648: co,
    10497: Bt
  }, hi = {
    SCALAR: 1,
    VEC2: 2,
    VEC3: 3,
    VEC4: 4,
    MAT2: 4,
    MAT3: 9,
    MAT4: 16
  }, Ci = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv1",
    TEXCOORD_2: "uv2",
    TEXCOORD_3: "uv3",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex"
  }, Le = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences"
  }, Bn = {
    CUBICSPLINE: void 0,
    LINEAR: Es,
    STEP: xo
  }, di = {
    OPAQUE: "OPAQUE",
    MASK: "MASK",
    BLEND: "BLEND"
  };
  function Vn(g) {
    return g.DefaultMaterial === void 0 && (g.DefaultMaterial = new ki({
      color: 16777215,
      emissive: 0,
      metalness: 1,
      roughness: 1,
      transparent: false,
      depthTest: true,
      side: xs
    })), g.DefaultMaterial;
  }
  function je(g, e, t) {
    for (const i in t.extensions) g[i] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[i] = t.extensions[i]);
  }
  function Pe(g, e) {
    e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(g.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
  }
  function Un(g, e, t) {
    let i = false, s = false, o = false;
    for (let l = 0, h = e.length; l < h; l++) {
      const c = e[l];
      if (c.POSITION !== void 0 && (i = true), c.NORMAL !== void 0 && (s = true), c.COLOR_0 !== void 0 && (o = true), i && s && o) break;
    }
    if (!i && !s && !o) return Promise.resolve(g);
    const n = [], r = [], a = [];
    for (let l = 0, h = e.length; l < h; l++) {
      const c = e[l];
      if (i) {
        const d = c.POSITION !== void 0 ? t.getDependency("accessor", c.POSITION) : g.attributes.position;
        n.push(d);
      }
      if (s) {
        const d = c.NORMAL !== void 0 ? t.getDependency("accessor", c.NORMAL) : g.attributes.normal;
        r.push(d);
      }
      if (o) {
        const d = c.COLOR_0 !== void 0 ? t.getDependency("accessor", c.COLOR_0) : g.attributes.color;
        a.push(d);
      }
    }
    return Promise.all([
      Promise.all(n),
      Promise.all(r),
      Promise.all(a)
    ]).then(function(l) {
      const h = l[0], c = l[1], d = l[2];
      return i && (g.morphAttributes.position = h), s && (g.morphAttributes.normal = c), o && (g.morphAttributes.color = d), g.morphTargetsRelative = true, g;
    });
  }
  function Gn(g, e) {
    if (g.updateMorphTargets(), e.weights !== void 0) for (let t = 0, i = e.weights.length; t < i; t++) g.morphTargetInfluences[t] = e.weights[t];
    if (e.extras && Array.isArray(e.extras.targetNames)) {
      const t = e.extras.targetNames;
      if (g.morphTargetInfluences.length === t.length) {
        g.morphTargetDictionary = {};
        for (let i = 0, s = t.length; i < s; i++) g.morphTargetDictionary[t[i]] = i;
      } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
    }
  }
  function Hn(g) {
    let e;
    const t = g.extensions && g.extensions[_.KHR_DRACO_MESH_COMPRESSION];
    if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + ui(t.attributes) : e = g.indices + ":" + ui(g.attributes) + ":" + g.mode, g.targets !== void 0) for (let i = 0, s = g.targets.length; i < s; i++) e += ":" + ui(g.targets[i]);
    return e;
  }
  function ui(g) {
    let e = "";
    const t = Object.keys(g).sort();
    for (let i = 0, s = t.length; i < s; i++) e += t[i] + ":" + g[t[i]] + ";";
    return e;
  }
  function Pi(g) {
    switch (g) {
      case Int8Array:
        return 1 / 127;
      case Uint8Array:
        return 1 / 255;
      case Int16Array:
        return 1 / 32767;
      case Uint16Array:
        return 1 / 65535;
      default:
        throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
    }
  }
  function Wn(g) {
    return g.search(/\.jpe?g($|\?)/i) > 0 || g.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : g.search(/\.webp($|\?)/i) > 0 || g.search(/^data\:image\/webp/) === 0 ? "image/webp" : g.search(/\.ktx2($|\?)/i) > 0 || g.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
  }
  const qn = new Me();
  class Yn {
    constructor(e = {}, t = {}) {
      this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new fn(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = {
        refs: {},
        uses: {}
      }, this.cameraCache = {
        refs: {},
        uses: {}
      }, this.lightCache = {
        refs: {},
        uses: {}
      }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
      let i = false, s = -1, o = false, n = -1;
      if (typeof navigator < "u") {
        const r = navigator.userAgent;
        i = /^((?!chrome|android).)*safari/i.test(r) === true;
        const a = r.match(/Version\/(\d+)/);
        s = i && a ? parseInt(a[1], 10) : -1, o = r.indexOf("Firefox") > -1, n = o ? r.match(/Firefox\/([0-9]+)\./)[1] : -1;
      }
      typeof createImageBitmap > "u" || i && s < 17 || o && n < 98 ? this.textureLoader = new Ms(this.options.manager) : this.textureLoader = new no(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Ss(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(true);
    }
    setExtensions(e) {
      this.extensions = e;
    }
    setPlugins(e) {
      this.plugins = e;
    }
    parse(e, t) {
      const i = this, s = this.json, o = this.extensions;
      this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(n) {
        return n._markDefs && n._markDefs();
      }), Promise.all(this._invokeAll(function(n) {
        return n.beforeRoot && n.beforeRoot();
      })).then(function() {
        return Promise.all([
          i.getDependencies("scene"),
          i.getDependencies("animation"),
          i.getDependencies("camera")
        ]);
      }).then(function(n) {
        const r = {
          scene: n[0][s.scene || 0],
          scenes: n[0],
          animations: n[1],
          cameras: n[2],
          asset: s.asset,
          parser: i,
          userData: {}
        };
        return je(o, r, s), Pe(r, s), Promise.all(i._invokeAll(function(a) {
          return a.afterRoot && a.afterRoot(r);
        })).then(function() {
          for (const a of r.scenes) a.updateMatrixWorld();
          e(r);
        });
      }).catch(t);
    }
    _markDefs() {
      const e = this.json.nodes || [], t = this.json.skins || [], i = this.json.meshes || [];
      for (let s = 0, o = t.length; s < o; s++) {
        const n = t[s].joints;
        for (let r = 0, a = n.length; r < a; r++) e[n[r]].isBone = true;
      }
      for (let s = 0, o = e.length; s < o; s++) {
        const n = e[s];
        n.mesh !== void 0 && (this._addNodeRef(this.meshCache, n.mesh), n.skin !== void 0 && (i[n.mesh].isSkinnedMesh = true)), n.camera !== void 0 && this._addNodeRef(this.cameraCache, n.camera);
      }
    }
    _addNodeRef(e, t) {
      t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
    }
    _getNodeRef(e, t, i) {
      if (e.refs[t] <= 1) return i;
      const s = i.clone(), o = (n, r) => {
        const a = this.associations.get(n);
        a != null && this.associations.set(r, a);
        for (const [l, h] of n.children.entries()) o(h, r.children[l]);
      };
      return o(i, s), s.name += "_instance_" + e.uses[t]++, s;
    }
    _invokeOne(e) {
      const t = Object.values(this.plugins);
      t.push(this);
      for (let i = 0; i < t.length; i++) {
        const s = e(t[i]);
        if (s) return s;
      }
      return null;
    }
    _invokeAll(e) {
      const t = Object.values(this.plugins);
      t.unshift(this);
      const i = [];
      for (let s = 0; s < t.length; s++) {
        const o = e(t[s]);
        o && i.push(o);
      }
      return i;
    }
    getDependency(e, t) {
      const i = e + ":" + t;
      let s = this.cache.get(i);
      if (!s) {
        switch (e) {
          case "scene":
            s = this.loadScene(t);
            break;
          case "node":
            s = this._invokeOne(function(o) {
              return o.loadNode && o.loadNode(t);
            });
            break;
          case "mesh":
            s = this._invokeOne(function(o) {
              return o.loadMesh && o.loadMesh(t);
            });
            break;
          case "accessor":
            s = this.loadAccessor(t);
            break;
          case "bufferView":
            s = this._invokeOne(function(o) {
              return o.loadBufferView && o.loadBufferView(t);
            });
            break;
          case "buffer":
            s = this.loadBuffer(t);
            break;
          case "material":
            s = this._invokeOne(function(o) {
              return o.loadMaterial && o.loadMaterial(t);
            });
            break;
          case "texture":
            s = this._invokeOne(function(o) {
              return o.loadTexture && o.loadTexture(t);
            });
            break;
          case "skin":
            s = this.loadSkin(t);
            break;
          case "animation":
            s = this._invokeOne(function(o) {
              return o.loadAnimation && o.loadAnimation(t);
            });
            break;
          case "camera":
            s = this.loadCamera(t);
            break;
          default:
            if (s = this._invokeOne(function(o) {
              return o != this && o.getDependency && o.getDependency(e, t);
            }), !s) throw new Error("Unknown type: " + e);
            break;
        }
        this.cache.add(i, s);
      }
      return s;
    }
    getDependencies(e) {
      let t = this.cache.get(e);
      if (!t) {
        const i = this, s = this.json[e + (e === "mesh" ? "es" : "s")] || [];
        t = Promise.all(s.map(function(o, n) {
          return i.getDependency(e, n);
        })), this.cache.add(e, t);
      }
      return t;
    }
    loadBuffer(e) {
      const t = this.json.buffers[e], i = this.fileLoader;
      if (t.type && t.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
      if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[_.KHR_BINARY_GLTF].body);
      const s = this.options;
      return new Promise(function(o, n) {
        i.load(St.resolveURL(t.uri, s.path), o, void 0, function() {
          n(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
        });
      });
    }
    loadBufferView(e) {
      const t = this.json.bufferViews[e];
      return this.getDependency("buffer", t.buffer).then(function(i) {
        const s = t.byteLength || 0, o = t.byteOffset || 0;
        return i.slice(o, o + s);
      });
    }
    loadAccessor(e) {
      const t = this, i = this.json, s = this.json.accessors[e];
      if (s.bufferView === void 0 && s.sparse === void 0) {
        const n = hi[s.type], r = st[s.componentType], a = s.normalized === true, l = new r(s.count * n);
        return Promise.resolve(new Ge(l, n, a));
      }
      const o = [];
      return s.bufferView !== void 0 ? o.push(this.getDependency("bufferView", s.bufferView)) : o.push(null), s.sparse !== void 0 && (o.push(this.getDependency("bufferView", s.sparse.indices.bufferView)), o.push(this.getDependency("bufferView", s.sparse.values.bufferView))), Promise.all(o).then(function(n) {
        const r = n[0], a = hi[s.type], l = st[s.componentType], h = l.BYTES_PER_ELEMENT, c = h * a, d = s.byteOffset || 0, u = s.bufferView !== void 0 ? i.bufferViews[s.bufferView].byteStride : void 0, m = s.normalized === true;
        let f, x;
        if (u && u !== c) {
          const w = Math.floor(d / u), y = "InterleavedBuffer:" + s.bufferView + ":" + s.componentType + ":" + w + ":" + s.count;
          let v = t.cache.get(y);
          v || (f = new l(r, w * u, s.count * u / h), v = new ps(f, u / h), t.cache.add(y, v)), x = new bi(v, a, d % u / h, m);
        } else r === null ? f = new l(s.count * a) : f = new l(r, d, s.count * a), x = new Ge(f, a, m);
        if (s.sparse !== void 0) {
          const w = hi.SCALAR, y = st[s.sparse.indices.componentType], v = s.sparse.indices.byteOffset || 0, b = s.sparse.values.byteOffset || 0, T = new y(n[1], v, s.sparse.count * w), M = new l(n[2], b, s.sparse.count * a);
          r !== null && (x = new Ge(x.array.slice(), x.itemSize, x.normalized)), x.normalized = false;
          for (let C = 0, P = T.length; C < P; C++) {
            const A = T[C];
            if (x.setX(A, M[C * a]), a >= 2 && x.setY(A, M[C * a + 1]), a >= 3 && x.setZ(A, M[C * a + 2]), a >= 4 && x.setW(A, M[C * a + 3]), a >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
          }
          x.normalized = m;
        }
        return x;
      });
    }
    loadTexture(e) {
      const t = this.json, i = this.options, o = t.textures[e].source, n = t.images[o];
      let r = this.textureLoader;
      if (n.uri) {
        const a = i.manager.getHandler(n.uri);
        a !== null && (r = a);
      }
      return this.loadTextureImage(e, o, r);
    }
    loadTextureImage(e, t, i) {
      const s = this, o = this.json, n = o.textures[e], r = o.images[t], a = (r.uri || r.bufferView) + ":" + n.sampler;
      if (this.textureCache[a]) return this.textureCache[a];
      const l = this.loadImageSource(t, i).then(function(h) {
        h.flipY = false, h.name = n.name || r.name || "", h.name === "" && typeof r.uri == "string" && r.uri.startsWith("data:image/") === false && (h.name = r.uri);
        const d = (o.samplers || {})[n.sampler] || {};
        return h.magFilter = Ki[d.magFilter] || ye, h.minFilter = Ki[d.minFilter] || Ts, h.wrapS = Ji[d.wrapS] || Bt, h.wrapT = Ji[d.wrapT] || Bt, h.generateMipmaps = !h.isCompressedTexture && h.minFilter !== Cs && h.minFilter !== ye, s.associations.set(h, {
          textures: e
        }), h;
      }).catch(function() {
        return null;
      });
      return this.textureCache[a] = l, l;
    }
    loadImageSource(e, t) {
      const i = this, s = this.json, o = this.options;
      if (this.sourceCache[e] !== void 0) return this.sourceCache[e].then((c) => c.clone());
      const n = s.images[e], r = self.URL || self.webkitURL;
      let a = n.uri || "", l = false;
      if (n.bufferView !== void 0) a = i.getDependency("bufferView", n.bufferView).then(function(c) {
        l = true;
        const d = new Blob([
          c
        ], {
          type: n.mimeType
        });
        return a = r.createObjectURL(d), a;
      });
      else if (n.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
      const h = Promise.resolve(a).then(function(c) {
        return new Promise(function(d, u) {
          let m = d;
          t.isImageBitmapLoader === true && (m = function(f) {
            const x = new Ui(f);
            x.needsUpdate = true, d(x);
          }), t.load(St.resolveURL(c, o.path), m, void 0, u);
        });
      }).then(function(c) {
        return l === true && r.revokeObjectURL(a), Pe(c, n), c.userData.mimeType = n.mimeType || Wn(n.uri), c;
      }).catch(function(c) {
        throw console.error("THREE.GLTFLoader: Couldn't load texture", a), c;
      });
      return this.sourceCache[e] = h, h;
    }
    assignTexture(e, t, i, s) {
      const o = this;
      return this.getDependency("texture", i.index).then(function(n) {
        if (!n) return null;
        if (i.texCoord !== void 0 && i.texCoord > 0 && (n = n.clone(), n.channel = i.texCoord), o.extensions[_.KHR_TEXTURE_TRANSFORM]) {
          const r = i.extensions !== void 0 ? i.extensions[_.KHR_TEXTURE_TRANSFORM] : void 0;
          if (r) {
            const a = o.associations.get(n);
            n = o.extensions[_.KHR_TEXTURE_TRANSFORM].extendTexture(n, r), o.associations.set(n, a);
          }
        }
        return s !== void 0 && (n.colorSpace = s), e[t] = n, n;
      });
    }
    assignFinalMaterial(e) {
      const t = e.geometry;
      let i = e.material;
      const s = t.attributes.tangent === void 0, o = t.attributes.color !== void 0, n = t.attributes.normal === void 0;
      if (e.isPoints) {
        const r = "PointsMaterial:" + i.uuid;
        let a = this.cache.get(r);
        a || (a = new ho(), li.prototype.copy.call(a, i), a.color.copy(i.color), a.map = i.map, a.sizeAttenuation = false, this.cache.add(r, a)), i = a;
      } else if (e.isLine) {
        const r = "LineBasicMaterial:" + i.uuid;
        let a = this.cache.get(r);
        a || (a = new As(), li.prototype.copy.call(a, i), a.color.copy(i.color), a.map = i.map, this.cache.add(r, a)), i = a;
      }
      if (s || o || n) {
        let r = "ClonedMaterial:" + i.uuid + ":";
        s && (r += "derivative-tangents:"), o && (r += "vertex-colors:"), n && (r += "flat-shading:");
        let a = this.cache.get(r);
        a || (a = i.clone(), o && (a.vertexColors = true), n && (a.flatShading = true), s && (a.normalScale && (a.normalScale.y *= -1), a.clearcoatNormalScale && (a.clearcoatNormalScale.y *= -1)), this.cache.add(r, a), this.associations.set(a, this.associations.get(i))), i = a;
      }
      e.material = i;
    }
    getMaterialType() {
      return ki;
    }
    loadMaterial(e) {
      const t = this, i = this.json, s = this.extensions, o = i.materials[e];
      let n;
      const r = {}, a = o.extensions || {}, l = [];
      if (a[_.KHR_MATERIALS_UNLIT]) {
        const c = s[_.KHR_MATERIALS_UNLIT];
        n = c.getMaterialType(), l.push(c.extendParams(r, o, t));
      } else {
        const c = o.pbrMetallicRoughness || {};
        if (r.color = new J(1, 1, 1), r.opacity = 1, Array.isArray(c.baseColorFactor)) {
          const d = c.baseColorFactor;
          r.color.setRGB(d[0], d[1], d[2], Ie), r.opacity = d[3];
        }
        c.baseColorTexture !== void 0 && l.push(t.assignTexture(r, "map", c.baseColorTexture, We)), r.metalness = c.metallicFactor !== void 0 ? c.metallicFactor : 1, r.roughness = c.roughnessFactor !== void 0 ? c.roughnessFactor : 1, c.metallicRoughnessTexture !== void 0 && (l.push(t.assignTexture(r, "metalnessMap", c.metallicRoughnessTexture)), l.push(t.assignTexture(r, "roughnessMap", c.metallicRoughnessTexture))), n = this._invokeOne(function(d) {
          return d.getMaterialType && d.getMaterialType(e);
        }), l.push(Promise.all(this._invokeAll(function(d) {
          return d.extendMaterialParams && d.extendMaterialParams(e, r);
        })));
      }
      o.doubleSided === true && (r.side = lt);
      const h = o.alphaMode || di.OPAQUE;
      if (h === di.BLEND ? (r.transparent = true, r.depthWrite = false) : (r.transparent = false, h === di.MASK && (r.alphaTest = o.alphaCutoff !== void 0 ? o.alphaCutoff : 0.5)), o.normalTexture !== void 0 && n !== le && (l.push(t.assignTexture(r, "normalMap", o.normalTexture)), r.normalScale = new Ue(1, 1), o.normalTexture.scale !== void 0)) {
        const c = o.normalTexture.scale;
        r.normalScale.set(c, c);
      }
      if (o.occlusionTexture !== void 0 && n !== le && (l.push(t.assignTexture(r, "aoMap", o.occlusionTexture)), o.occlusionTexture.strength !== void 0 && (r.aoMapIntensity = o.occlusionTexture.strength)), o.emissiveFactor !== void 0 && n !== le) {
        const c = o.emissiveFactor;
        r.emissive = new J().setRGB(c[0], c[1], c[2], Ie);
      }
      return o.emissiveTexture !== void 0 && n !== le && l.push(t.assignTexture(r, "emissiveMap", o.emissiveTexture, We)), Promise.all(l).then(function() {
        const c = new n(r);
        return o.name && (c.name = o.name), Pe(c, o), t.associations.set(c, {
          materials: e
        }), o.extensions && je(s, c, o), c;
      });
    }
    createUniqueName(e) {
      const t = uo.sanitizeNodeName(e || "");
      return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
    }
    loadGeometries(e) {
      const t = this, i = this.extensions, s = this.primitiveCache;
      function o(r) {
        return i[_.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(r, t).then(function(a) {
          return es(a, r, t);
        });
      }
      const n = [];
      for (let r = 0, a = e.length; r < a; r++) {
        const l = e[r], h = Hn(l), c = s[h];
        if (c) n.push(c.promise);
        else {
          let d;
          l.extensions && l.extensions[_.KHR_DRACO_MESH_COMPRESSION] ? d = o(l) : d = es(new ot(), l, t), s[h] = {
            primitive: l,
            promise: d
          }, n.push(d);
        }
      }
      return Promise.all(n);
    }
    loadMesh(e) {
      const t = this, i = this.json, s = this.extensions, o = i.meshes[e], n = o.primitives, r = [];
      for (let a = 0, l = n.length; a < l; a++) {
        const h = n[a].material === void 0 ? Vn(this.cache) : this.getDependency("material", n[a].material);
        r.push(h);
      }
      return r.push(t.loadGeometries(n)), Promise.all(r).then(function(a) {
        const l = a.slice(0, a.length - 1), h = a[a.length - 1], c = [];
        for (let u = 0, m = h.length; u < m; u++) {
          const f = h[u], x = n[u];
          let w;
          const y = l[u];
          if (x.mode === we.TRIANGLES || x.mode === we.TRIANGLE_STRIP || x.mode === we.TRIANGLE_FAN || x.mode === void 0) w = o.isSkinnedMesh === true ? new go(f, y) : new k(f, y), w.isSkinnedMesh === true && w.normalizeSkinWeights(), x.mode === we.TRIANGLE_STRIP ? w.geometry = Vi(w.geometry, To) : x.mode === we.TRIANGLE_FAN && (w.geometry = Vi(w.geometry, Co));
          else if (x.mode === we.LINES) w = new po(f, y);
          else if (x.mode === we.LINE_STRIP) w = new Ee(f, y);
          else if (x.mode === we.LINE_LOOP) w = new mo(f, y);
          else if (x.mode === we.POINTS) w = new fo(f, y);
          else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + x.mode);
          Object.keys(w.geometry.morphAttributes).length > 0 && Gn(w, o), w.name = t.createUniqueName(o.name || "mesh_" + e), Pe(w, o), x.extensions && je(s, w, x), t.assignFinalMaterial(w), c.push(w);
        }
        for (let u = 0, m = c.length; u < m; u++) t.associations.set(c[u], {
          meshes: e,
          primitives: u
        });
        if (c.length === 1) return o.extensions && je(s, c[0], o), c[0];
        const d = new bt();
        o.extensions && je(s, d, o), t.associations.set(d, {
          meshes: e
        });
        for (let u = 0, m = c.length; u < m; u++) d.add(c[u]);
        return d;
      });
    }
    loadCamera(e) {
      let t;
      const i = this.json.cameras[e], s = i[i.type];
      if (!s) {
        console.warn("THREE.GLTFLoader: Missing camera parameters.");
        return;
      }
      return i.type === "perspective" ? t = new Zt(G.radToDeg(s.yfov), s.aspectRatio || 1, s.znear || 1, s.zfar || 2e6) : i.type === "orthographic" && (t = new ks(-s.xmag, s.xmag, s.ymag, -s.ymag, s.znear, s.zfar)), i.name && (t.name = this.createUniqueName(i.name)), Pe(t, i), Promise.resolve(t);
    }
    loadSkin(e) {
      const t = this.json.skins[e], i = [];
      for (let s = 0, o = t.joints.length; s < o; s++) i.push(this._loadNodeShallow(t.joints[s]));
      return t.inverseBindMatrices !== void 0 ? i.push(this.getDependency("accessor", t.inverseBindMatrices)) : i.push(null), Promise.all(i).then(function(s) {
        const o = s.pop(), n = s, r = [], a = [];
        for (let l = 0, h = n.length; l < h; l++) {
          const c = n[l];
          if (c) {
            r.push(c);
            const d = new Me();
            o !== null && d.fromArray(o.array, l * 16), a.push(d);
          } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[l]);
        }
        return new yo(r, a);
      });
    }
    loadAnimation(e) {
      const t = this.json, i = this, s = t.animations[e], o = s.name ? s.name : "animation_" + e, n = [], r = [], a = [], l = [], h = [];
      for (let c = 0, d = s.channels.length; c < d; c++) {
        const u = s.channels[c], m = s.samplers[u.sampler], f = u.target, x = f.node, w = s.parameters !== void 0 ? s.parameters[m.input] : m.input, y = s.parameters !== void 0 ? s.parameters[m.output] : m.output;
        f.node !== void 0 && (n.push(this.getDependency("node", x)), r.push(this.getDependency("accessor", w)), a.push(this.getDependency("accessor", y)), l.push(m), h.push(f));
      }
      return Promise.all([
        Promise.all(n),
        Promise.all(r),
        Promise.all(a),
        Promise.all(l),
        Promise.all(h)
      ]).then(function(c) {
        const d = c[0], u = c[1], m = c[2], f = c[3], x = c[4], w = [];
        for (let v = 0, b = d.length; v < b; v++) {
          const T = d[v], M = u[v], C = m[v], P = f[v], A = x[v];
          if (T === void 0) continue;
          T.updateMatrix && T.updateMatrix();
          const D = i._createAnimationTracks(T, M, C, P, A);
          if (D) for (let R = 0; R < D.length; R++) w.push(D[R]);
        }
        const y = new vo(o, void 0, w);
        return Pe(y, s), y;
      });
    }
    createNodeMesh(e) {
      const t = this.json, i = this, s = t.nodes[e];
      return s.mesh === void 0 ? null : i.getDependency("mesh", s.mesh).then(function(o) {
        const n = i._getNodeRef(i.meshCache, s.mesh, o);
        return s.weights !== void 0 && n.traverse(function(r) {
          if (r.isMesh) for (let a = 0, l = s.weights.length; a < l; a++) r.morphTargetInfluences[a] = s.weights[a];
        }), n;
      });
    }
    loadNode(e) {
      const t = this.json, i = this, s = t.nodes[e], o = i._loadNodeShallow(e), n = [], r = s.children || [];
      for (let l = 0, h = r.length; l < h; l++) n.push(i.getDependency("node", r[l]));
      const a = s.skin === void 0 ? Promise.resolve(null) : i.getDependency("skin", s.skin);
      return Promise.all([
        o,
        Promise.all(n),
        a
      ]).then(function(l) {
        const h = l[0], c = l[1], d = l[2];
        d !== null && h.traverse(function(u) {
          u.isSkinnedMesh && u.bind(d, qn);
        });
        for (let u = 0, m = c.length; u < m; u++) h.add(c[u]);
        return h;
      });
    }
    _loadNodeShallow(e) {
      const t = this.json, i = this.extensions, s = this;
      if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
      const o = t.nodes[e], n = o.name ? s.createUniqueName(o.name) : "", r = [], a = s._invokeOne(function(l) {
        return l.createNodeMesh && l.createNodeMesh(e);
      });
      return a && r.push(a), o.camera !== void 0 && r.push(s.getDependency("camera", o.camera).then(function(l) {
        return s._getNodeRef(s.cameraCache, o.camera, l);
      })), s._invokeAll(function(l) {
        return l.createNodeAttachment && l.createNodeAttachment(e);
      }).forEach(function(l) {
        r.push(l);
      }), this.nodeCache[e] = Promise.all(r).then(function(l) {
        let h;
        if (o.isBone === true ? h = new wo() : l.length > 1 ? h = new bt() : l.length === 1 ? h = l[0] : h = new Fe(), h !== l[0]) for (let c = 0, d = l.length; c < d; c++) h.add(l[c]);
        if (o.name && (h.userData.name = o.name, h.name = n), Pe(h, o), o.extensions && je(i, h, o), o.matrix !== void 0) {
          const c = new Me();
          c.fromArray(o.matrix), h.applyMatrix4(c);
        } else o.translation !== void 0 && h.position.fromArray(o.translation), o.rotation !== void 0 && h.quaternion.fromArray(o.rotation), o.scale !== void 0 && h.scale.fromArray(o.scale);
        if (!s.associations.has(h)) s.associations.set(h, {});
        else if (o.mesh !== void 0 && s.meshCache.refs[o.mesh] > 1) {
          const c = s.associations.get(h);
          s.associations.set(h, {
            ...c
          });
        }
        return s.associations.get(h).nodes = e, h;
      }), this.nodeCache[e];
    }
    loadScene(e) {
      const t = this.extensions, i = this.json.scenes[e], s = this, o = new bt();
      i.name && (o.name = s.createUniqueName(i.name)), Pe(o, i), i.extensions && je(t, o, i);
      const n = i.nodes || [], r = [];
      for (let a = 0, l = n.length; a < l; a++) r.push(s.getDependency("node", n[a]));
      return Promise.all(r).then(function(a) {
        for (let h = 0, c = a.length; h < c; h++) o.add(a[h]);
        const l = (h) => {
          const c = /* @__PURE__ */ new Map();
          for (const [d, u] of s.associations) (d instanceof li || d instanceof Ui) && c.set(d, u);
          return h.traverse((d) => {
            const u = s.associations.get(d);
            u != null && c.set(d, u);
          }), c;
        };
        return s.associations = l(o), o;
      });
    }
    _createAnimationTracks(e, t, i, s, o) {
      const n = [], r = e.name ? e.name : e.uuid, a = [];
      Le[o.path] === Le.weights ? e.traverse(function(d) {
        d.morphTargetInfluences && a.push(d.name ? d.name : d.uuid);
      }) : a.push(r);
      let l;
      switch (Le[o.path]) {
        case Le.weights:
          l = Hi;
          break;
        case Le.rotation:
          l = Wi;
          break;
        case Le.translation:
        case Le.scale:
          l = Gi;
          break;
        default:
          switch (i.itemSize) {
            case 1:
              l = Hi;
              break;
            case 2:
            case 3:
            default:
              l = Gi;
              break;
          }
          break;
      }
      const h = s.interpolation !== void 0 ? Bn[s.interpolation] : Es, c = this._getArrayFromAccessor(i);
      for (let d = 0, u = a.length; d < u; d++) {
        const m = new l(a[d] + "." + Le[o.path], t.array, c, h);
        s.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(m), n.push(m);
      }
      return n;
    }
    _getArrayFromAccessor(e) {
      let t = e.array;
      if (e.normalized) {
        const i = Pi(t.constructor), s = new Float32Array(t.length);
        for (let o = 0, n = t.length; o < n; o++) s[o] = t[o] * i;
        t = s;
      }
      return t;
    }
    _createCubicSplineTrackInterpolant(e) {
      e.createInterpolant = function(i) {
        const s = this instanceof Wi ? jn : Os;
        return new s(this.times, this.values, this.getValueSize() / 3, i);
      }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
    }
  }
  function Qn(g, e, t) {
    const i = e.attributes, s = new So();
    if (i.POSITION !== void 0) {
      const r = t.json.accessors[i.POSITION], a = r.min, l = r.max;
      if (a !== void 0 && l !== void 0) {
        if (s.set(new S(a[0], a[1], a[2]), new S(l[0], l[1], l[2])), r.normalized) {
          const h = Pi(st[r.componentType]);
          s.min.multiplyScalar(h), s.max.multiplyScalar(h);
        }
      } else {
        console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
        return;
      }
    } else return;
    const o = e.targets;
    if (o !== void 0) {
      const r = new S(), a = new S();
      for (let l = 0, h = o.length; l < h; l++) {
        const c = o[l];
        if (c.POSITION !== void 0) {
          const d = t.json.accessors[c.POSITION], u = d.min, m = d.max;
          if (u !== void 0 && m !== void 0) {
            if (a.setX(Math.max(Math.abs(u[0]), Math.abs(m[0]))), a.setY(Math.max(Math.abs(u[1]), Math.abs(m[1]))), a.setZ(Math.max(Math.abs(u[2]), Math.abs(m[2]))), d.normalized) {
              const f = Pi(st[d.componentType]);
              a.multiplyScalar(f);
            }
            r.max(a);
          } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
        }
      }
      s.expandByVector(r);
    }
    g.boundingBox = s;
    const n = new Mo();
    s.getCenter(n.center), n.radius = s.min.distanceTo(s.max) / 2, g.boundingSphere = n;
  }
  function es(g, e, t) {
    const i = e.attributes, s = [];
    function o(n, r) {
      return t.getDependency("accessor", n).then(function(a) {
        g.setAttribute(r, a);
      });
    }
    for (const n in i) {
      const r = Ci[n] || n.toLowerCase();
      r in g.attributes || s.push(o(i[n], r));
    }
    if (e.indices !== void 0 && !g.index) {
      const n = t.getDependency("accessor", e.indices).then(function(r) {
        g.setIndex(r);
      });
      s.push(n);
    }
    return qi.workingColorSpace !== Ie && "COLOR_0" in i && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qi.workingColorSpace}" not supported.`), Pe(g, e), Qn(g, e, t), Promise.all(s).then(function() {
      return e.targets !== void 0 ? Un(g, e.targets, t) : g;
    });
  }
  class Zn {
    constructor(e, t = {}) {
      this.scene = e, this.renderer = t.renderer || null, this.sparkRenderer = t.sparkRenderer || null, this.gizmoManager = t.gizmoManager || null, this.loadingScreen = t.loadingScreen || null, this.physicsManager = t.physicsManager || null, this.gameManager = t.gameManager || null, this.colliderManager = null, this.pendingTriggerColliders = null, this.objects = /* @__PURE__ */ new Map(), this.objectData = /* @__PURE__ */ new Map(), this.gltfLoader = new mn(), this.loadingPromises = /* @__PURE__ */ new Map(), this.physicsColliderObjects = /* @__PURE__ */ new Set(), this.objectsNotInScene = /* @__PURE__ */ new Set(), this.animationMixers = /* @__PURE__ */ new Map(), this.animationActions = /* @__PURE__ */ new Map(), this.animationData = /* @__PURE__ */ new Map(), this.animationToObject = /* @__PURE__ */ new Map(), this.contactShadows = /* @__PURE__ */ new Map(), this.contactShadowCriteria = /* @__PURE__ */ new Map(), this.materialRenderOrders = /* @__PURE__ */ new Map(), this.materialRenderOrderState = /* @__PURE__ */ new Map(), this.contactShadowState = /* @__PURE__ */ new Map(), this.envMapCache = /* @__PURE__ */ new Map(), this.eventListeners = {}, this.assetProgress = /* @__PURE__ */ new Map(), this.logger = new N("SceneManager", false), this.gameManager && (this.gameManager.on("state:changed", (i) => {
        this.updateContactShadowsForState(i), this.updateMaterialRenderOrdersForState(i);
      }), this.logger.log("Listening for game state changes (contact shadows, material render orders)"));
    }
    on(e, t) {
      this.eventListeners[e] || (this.eventListeners[e] = []), this.eventListeners[e].push(t);
    }
    emit(e, ...t) {
      this.eventListeners[e] && this.eventListeners[e].forEach((i) => i(...t));
    }
    async loadFromData(e) {
      const t = Object.values(e).map((i) => this.loadObject(i));
      await Promise.all(t);
    }
    async loadObjectsForState(e, t = false) {
      if (!e || e.length === 0) {
        this.logger.log("No objects to load for current state");
        return;
      }
      const i = [
        ...e
      ].sort((o, n) => (n.priority || 0) - (o.priority || 0));
      this.logger.log(`Loading ${i.length} objects for current state (in priority order)`);
      let s = false;
      for (const o of i) try {
        const n = await this.loadObject(o, t);
        o && o.gizmo === true && (s = true), t && n && this.objectsNotInScene.add(o.id);
      } catch (n) {
        this.logger.error(`Failed to load object "${o.id}":`, n);
      }
      try {
        s && (window == null ? void 0 : window.gameManager) && typeof window.gameManager.setState == "function" && window.gameManager.setState({
          hasGizmoInData: true
        });
      } catch {
      }
    }
    async loadObject(e, t = false) {
      const { id: i, type: s } = e;
      if (this.loadingPromises.has(i)) return this.loadingPromises.get(i);
      if (this.objects.has(i)) return this.logger.warn(`Object "${i}" is already loaded`), this.objects.get(i);
      let o;
      switch (s) {
        case "splat":
          o = this._loadSplat(e, t);
          break;
        case "gltf":
          o = this._loadGLTF(e, t);
          break;
        default:
          return this.logger.error(`Unknown object type "${s}"`), null;
      }
      this.loadingPromises.set(i, o);
      try {
        const n = await o;
        if (this.objects.set(i, n), this.objectData.set(i, e), this.loadingPromises.delete(i), t ? (this.objectsNotInScene.add(i), this.logger.log(`Loaded "${i}" (${s}) - not added to scene (deferred)`)) : this.logger.log(`Loaded "${i}" (${s})`), e.parent) {
          const r = e.parent;
          let a = this.objects.get(r);
          !a && this.loadingPromises.has(r) && (this.logger.log(`Waiting for parent "${r}" to load...`), a = await this.loadingPromises.get(r)), a ? (n.parent === this.scene && this.scene.remove(n), a.add(n), this.logger.log(`Parented "${i}" to "${r}"`)) : this.logger.warn(`Parent "${r}" not found for "${i}"`);
        }
        return e.gizmo && this.gizmoManager && n && this.gizmoManager.registerObject(n, i, s), n;
      } catch (n) {
        throw this.loadingPromises.delete(i), this.logger.error(`Error loading "${i}":`, n), n;
      }
    }
    async _loadSplat(e, t = false) {
      const { id: i, path: s, position: o, rotation: n, scale: r, quaternion: a } = e, h = e.preload === true && this.loadingScreen;
      h && this.loadingScreen.registerTask(`splat_${i}`, 100);
      const c = new Po({
        url: s,
        editable: false,
        onProgress: (d) => {
          if (h) {
            const u = Math.round(d * 100);
            this.loadingScreen.updateTask(`splat_${i}`, u, 100);
          }
        }
      });
      return a ? c.quaternion.set(a.x, a.y, a.z, a.w) : n && c.rotation.set(n.x, n.y, n.z), o && c.position.set(o.x, o.y, o.z), r && (typeof r == "object" && "x" in r ? c.scale.set(r.x, r.y, r.z) : typeof r == "number" && c.scale.setScalar(r)), t || this.scene.add(c), await c.initialized, h && this.loadingScreen.completeTask(`splat_${i}`), c;
    }
    _loadGLTF(e, t = false) {
      return new Promise((i, s) => {
        const { id: o, path: n, position: r, rotation: a, scale: l, options: h, animations: c } = e, u = e.preload === true && this.loadingScreen;
        u && this.loadingScreen.registerTask(`gltf_${o}`, 100), this.gltfLoader.load(n, (m) => {
          u && this.loadingScreen.completeTask(`gltf_${o}`);
          const f = m.scene, x = [];
          f.traverse((y) => {
            y.isMesh && (y.material && (Array.isArray(y.material) ? y.material : [
              y.material
            ]).forEach((b, T) => {
              if (b.name === "headlightbeams") {
                const M = Ao(b);
                Array.isArray(y.material) ? y.material[T] = M : y.material = M, y.renderOrder = 9999;
              } else b.needsUpdate = true;
            }), h && h.contactShadow && (y.castShadow = true, y.receiveShadow = true), h && h.castShadow !== void 0 && (y.castShadow = h.castShadow), h && h.receiveShadow !== void 0 && (y.receiveShadow = h.receiveShadow)), y.isLight && x.push(y);
          }), x.forEach((y) => {
            y.parent && y.parent.remove(y);
          });
          let w;
          if (h && h.useContainer) {
            const y = new bt();
            y.add(f), w = y;
          } else w = f;
          if (r && w.position.set(r.x, r.y, r.z), a && w.rotation.set(a.x, a.y, a.z), l && (typeof l == "object" && "x" in l ? w.scale.set(l.x, l.y, l.z) : typeof l == "number" && w.scale.setScalar(l)), h && h.visible === false && (w.visible = false, this.logger.log(`Set "${o}" to invisible`)), h && h.debugMaterial && this._applyDebugMaterial(o, w), h && h.contactShadow && this.renderer) {
            const y = {
              ...h.contactShadow,
              name: `${o}_contactShadow`
            };
            y.static !== void 0 && (y.isStatic = y.static, delete y.static);
            const v = new ko(this.renderer, this.scene, w, y);
            this.contactShadows.set(o, v), h.contactShadow.criteria ? (this.contactShadowCriteria.set(o, h.contactShadow.criteria), this.logger.log(`Created contact shadow for "${o}" with criteria`)) : this.logger.log(`Created contact shadow for "${o}" (always enabled)`);
          } else h && h.contactShadow && !this.renderer && this.logger.warn(`Cannot create contact shadow for "${o}" - renderer not provided to SceneManager`);
          if (c && c.length > 0 && m.animations && m.animations.length > 0 && this._setupAnimations(o, f, m.animations, c), h && h.materialRenderOrder && this._setupMaterialRenderOrders(o, w, h.materialRenderOrder), t || this.scene.add(w), h && h.physicsCollider && this.physicsManager && this._createPhysicsCollider(o, w, r, a), h && h.triggerColliders && this.physicsManager ? (this.logger.log(`Creating trigger colliders for "${o}"`), this._createTriggerColliders(o, f, e)) : h && h.triggerColliders && this.logger.warn(`Cannot create trigger colliders for "${o}" - physicsManager not available`), h && h.envMap) if (this.sparkRenderer) {
            if (o === "candlestickPhone") {
              this.logger.log(`PRE-ENVMAP: finalObject type: ${w.type}, name: "${w.name || "unnamed"}", children: ${w.children.length}`);
              const y = (v, b = 0) => {
                const T = "  ".repeat(b);
                this.logger.log(`${T}${v.type} "${v.name || "unnamed"}" (${v.children.length} children)${v.isMesh ? " [MESH]" : ""}`), b < 3 && v.children.forEach((M) => y(M, b + 1));
              };
              y(w);
            }
            this.logger.log(`Starting environment map application for "${o}"`), this._applyEnvMap(o, w, h.envMap).catch((y) => {
              this.logger.error(`Failed to apply environment map to "${o}":`, y);
            });
          } else this.logger.warn(`Cannot apply environment map to "${o}" - sparkRenderer not provided to SceneManager`);
          i(w);
        }, (m) => {
          if (m.lengthComputable && u) {
            const f = Math.round(m.loaded / m.total * 100);
            this.loadingScreen.updateTask(`gltf_${o}`, f, 100);
          }
        }, (m) => {
          s(m);
        });
      });
    }
    _applyDebugMaterial(e, t) {
      const i = new le({
        color: 65280,
        wireframe: true,
        wireframeLinewidth: 2,
        transparent: true,
        opacity: 0.5,
        side: lt,
        depthTest: true,
        depthWrite: false
      });
      t.traverse((s) => {
        s.isMesh && (s.material = i, s.renderOrder = 9999);
      }), this.logger.log(`Applied debug material to "${e}"`);
    }
    async _applyEnvMap(e, t, i) {
      var _a3, _b2;
      if (!this.sparkRenderer) {
        this.logger.warn("Cannot apply env map - sparkRenderer not available");
        return;
      }
      const s = [];
      t.traverse((c) => {
        if (c.isMesh && c.material) {
          const d = Array.isArray(c.material) ? c.material : [
            c.material
          ];
          s.push({
            mesh: c,
            materials: d
          });
        }
      }), this.logger.log(`Collected ${s.length} meshes before async operations`), this.logger.log("Waiting for all loading objects to complete...");
      const o = Array.from(this.loadingPromises.entries());
      o.length > 0 && (this.logger.log(`  ${o.length} object(s) still loading`), await Promise.all(o.map(([c, d]) => (this.logger.log(`  Waiting for "${c}"...`), d.catch(() => {
      })))), this.logger.log("  All loading objects complete \u2713")), this.logger.log("Waiting for splat scenes to initialize before envMap...");
      const n = [];
      for (const [c, d] of this.objects) d.initialized && typeof d.initialized.then == "function" && (this.logger.log(`  Waiting for splat "${c}" to initialize...`), n.push(d.initialized.then(() => {
        this.logger.log(`  Splat "${c}" initialized \u2713`);
      })));
      n.length > 0 ? (await Promise.all(n), this.logger.log(`All ${n.length} splat(s) initialized, proceeding with envMap`)) : this.logger.warn("No splat meshes found - envMap may not capture environment correctly");
      const r = new S();
      let a = false;
      for (const [c, d] of this.objects) {
        const u = this.objectData.get(c);
        if (u && u.envMapWorldCenter) {
          r.set(u.envMapWorldCenter.x, u.envMapWorldCenter.y, u.envMapWorldCenter.z), a = true, this.logger.log(`  Using envMapWorldCenter from splat "${c}"`);
          break;
        }
      }
      a || (t.getWorldPosition(r), this.logger.log("  No splat with envMapWorldCenter found, using object position"));
      const l = [];
      if (i.hideObjects) for (const c of i.hideObjects) {
        const d = this.getObject(c);
        d ? l.push(d) : this.logger.warn(`EnvMap hideObjects: object "${c}" not found, skipping`);
      }
      else l.push(t);
      const h = `${r.x.toFixed(2)}_${r.y.toFixed(2)}_${r.z.toFixed(2)}`;
      this.logger.log(`Environment map for "${e}":`), this.logger.log(`  World center: (${r.x.toFixed(2)}, ${r.y.toFixed(2)}, ${r.z.toFixed(2)})`);
      try {
        let c;
        if (this.envMapCache.has(h)) this.logger.log(`  \u23F3 Waiting for cached envMap (key: ${h})`), c = await this.envMapCache.get(h), this.logger.log(`  \u2713 Using cached envMap (key: ${h})`);
        else {
          this.logger.log(`  \u{1F3A8} Rendering new envMap (key: ${h})...`), this.logger.log(`  Hiding ${l.length} object(s) during render`);
          const v = new Promise((b, T) => {
            requestAnimationFrame(async () => {
              try {
                const M = await this.sparkRenderer.renderEnvMap({
                  scene: this.scene,
                  worldCenter: r,
                  hideObjects: l,
                  update: true
                });
                b(M);
              } catch (M) {
                this.logger.error(`EnvMap render failed for "${e}":`, M), T(M);
              }
            });
          });
          this.envMapCache.set(h, v), c = await v, this.logger.log(`  \u2713 EnvMap rendered and cached (key: ${h})`);
        }
        const d = i.metalness !== void 0 ? i.metalness : 1, u = i.roughness !== void 0 ? i.roughness : 0.02, m = i.envMapIntensity !== void 0 ? i.envMapIntensity : 1, f = i.materials || null, x = i.excludeMaterials || [], w = i.materialOverrides || {};
        let y = 0;
        this.logger.log(`Processing ${s.length} collected meshes`), s.forEach(({ mesh: v, materials: b }) => {
          this.logger.log(`  Processing mesh: "${v.name || "unnamed"}"`), b.forEach((T) => {
            if (e === "candlestickPhone" && this.logger.log(`    Material debug: name="${T.name || "NONE"}", type="${T.type}", uuid="${T.uuid.substring(0, 8)}"`), T.name && (T.name.includes("BlurShader") || T.name.includes("ContactShadow"))) {
              this.logger.log(`  \u2717 Skipped "${T.name}" (shader material)`);
              return;
            }
            if (x.includes(T.name)) {
              this.logger.log(`  \u2717 Skipped "${T.name}" (excluded)`);
              return;
            }
            if (!f || f.includes(T.name) || f.length === 0) {
              const M = w[T.name], C = (M == null ? void 0 : M.metalness) ?? d, P = (M == null ? void 0 : M.roughness) ?? u, A = (M == null ? void 0 : M.envMapIntensity) ?? m;
              T.userData || (T.userData = {}), !T.userData.original_color && T.color && (T.userData.original_color = T.color.clone()), T.envMap = c, T.metalness = C, T.roughness = P, T.envMapIntensity = A, T.needsUpdate = true, y++;
              const D = T.color ? T.color.getHexString() : "no-color", R = M ? " [OVERRIDE]" : "";
              this.logger.log(`  \u2713 "${T.name || "unnamed"}" | color: #${D} | M=${C.toFixed(2)} R=${P.toFixed(2)} I=${A.toFixed(1)}${R}`);
            }
          });
        }), this.logger.log(`\u2713 Applied environment map to ${y} material(s) on "${e}"`), this.logger.log(`  Default settings: metalness=${d}, roughness=${u}, envMapIntensity=${m}`), Object.keys(w).length > 0 && this.logger.log(`  Material overrides: ${Object.keys(w).join(", ")}`), x.length > 0 && this.logger.log(`  Excluded materials: ${x.join(", ")}`), c ? this.logger.log(`  EnvMap texture: \u2713 Created (${((_a3 = c.image) == null ? void 0 : _a3.width) || "unknown"}x${((_b2 = c.image) == null ? void 0 : _b2.height) || "unknown"})`) : this.logger.error("  EnvMap texture: \u2717 Failed to create");
      } catch (c) {
        throw this.logger.error(`Error rendering environment map for "${e}":`, c), c;
      }
    }
    _createTriggerColliders(e, t, i) {
      if (this.logger.log(`_createTriggerColliders called for "${e}"`), !this.physicsManager) {
        this.logger.warn(`Cannot create trigger colliders for "${e}" - physicsManager not available`);
        return;
      }
      const s = {
        "ZoneCollider-AlleyIntro": "alleyIntro",
        "ZoneCollider-AlleyNavigable": "alleyNavigable",
        "ZoneCollider-FourWay": "fourWay",
        "ZoneCollider-ThreeWay": "threeWay",
        "ZoneCollider-ThreeWay2": "threeWay2",
        "ZoneCollider-Plaza": "plaza"
      }, o = [];
      if (t.traverse((n) => {
        if (n.isMesh && n.name.startsWith("ZoneCollider-")) {
          const r = s[n.name];
          r ? (o.push({
            mesh: n,
            zoneName: r
          }), this.logger.log(`Found ZoneCollider mesh "${n.name}" -> mapped to zone "${r}"`)) : this.logger.warn(`Found ZoneCollider mesh "${n.name}" but no zone mapping defined. Available mappings: ${Object.keys(s).join(", ")}`);
        }
      }), o.length === 0) {
        this.logger.warn(`No ZoneCollider meshes found in "${e}" - expected meshes matching "ZoneCollider-*" pattern`);
        return;
      }
      if (this.logger.log(`Found ${o.length} ZoneCollider mesh(es) in "${e}"`), !this.colliderManager) {
        this.logger.warn(`Cannot register trigger colliders for "${e}" - colliderManager not set. Call sceneManager.setColliderManager(colliderManager) first. Storing for later registration.`), this.pendingTriggerColliders || (this.pendingTriggerColliders = /* @__PURE__ */ new Map()), this.pendingTriggerColliders.set(e, o), this.logger.log(`Stored ${o.length} zone mesh(es) for "${e}" in pendingTriggerColliders`);
        return;
      }
      q(async () => {
        const { GAME_STATES: n } = await import("./index-XYoOAQ19.js").then(async (m) => {
          await m.__tla;
          return m;
        }).then((r) => r.bb);
        return {
          GAME_STATES: n
        };
      }, []).then(({ GAME_STATES: n }) => {
        for (const { mesh: r, zoneName: a } of o) {
          r.visible = false, r.material && ((Array.isArray(r.material) ? r.material : [
            r.material
          ]).forEach((u) => {
            u.dispose && u.dispose();
          }), r.material = null);
          const l = `zone-${a}`, h = {
            id: l,
            once: false,
            enabled: true,
            criteria: {
              currentState: {
                $lt: n.OFFICE_INTERIOR
              }
            }
          };
          this.colliderManager.registerTrimeshTriggerCollider(l, r, h) ? this.logger.log(`Registered trigger collider "${l}" from mesh "${r.name}" -> zone "${a}"`) : this.logger.warn(`Failed to register trigger collider "${l}" from mesh "${r.name}"`);
        }
      });
    }
    setColliderManager(e) {
      var _a3, _b2, _c, _d;
      if (this.colliderManager = e, this.logger.log("ColliderManager set on SceneManager"), this.pendingTriggerColliders && this.pendingTriggerColliders.size > 0) {
        this.logger.log(`Registering ${this.pendingTriggerColliders.size} pending trigger collider set(s): ${Array.from(this.pendingTriggerColliders.keys()).join(", ")}`);
        for (const [t, i] of this.pendingTriggerColliders) {
          const s = this.objectData.get(t);
          if (s && ((_a3 = s.options) == null ? void 0 : _a3.triggerColliders)) {
            const o = this.objects.get(t);
            if (o) {
              const n = o.children.length > 0 && ((_b2 = o.children[0]) == null ? void 0 : _b2.type) === "Scene" ? o.children[0] : o;
              this.logger.log(`Registering pending trigger colliders for "${t}"`), this._createTriggerColliders(t, n, s);
            } else this.logger.warn(`Cannot register pending trigger colliders for "${t}" - model not found`);
          } else this.logger.warn(`Cannot register pending trigger colliders for "${t}" - objectData or triggerColliders option not found`);
        }
        this.pendingTriggerColliders.clear();
      } else this.logger.log("No pending trigger colliders to register");
      this.logger.log(`Checking ${this.objects.size} already-loaded objects for triggerColliders`);
      for (const [t, i] of this.objects) {
        const s = this.objectData.get(t);
        if (s && ((_c = s.options) == null ? void 0 : _c.triggerColliders)) {
          const o = this.colliderManager.colliders.filter((r) => r.id.startsWith("zone-"));
          if (o.length > 0) this.logger.log(`Trigger colliders already registered (${o.length} zone colliders found)`);
          else {
            this.logger.log(`Found already-loaded object "${t}" with triggerColliders option - creating trigger colliders now`);
            const r = i.children.length > 0 && ((_d = i.children[0]) == null ? void 0 : _d.type) === "Scene" ? i.children[0] : i;
            this._createTriggerColliders(t, r, s);
          }
        }
      }
    }
    _createPhysicsCollider(e, t, i, s) {
      try {
        const o = new U((s == null ? void 0 : s.x) || 0, (s == null ? void 0 : s.y) || 0, (s == null ? void 0 : s.z) || 0), n = new I().setFromEuler(o);
        this.physicsManager.createTrimeshCollider(e, t, i || {
          x: 0,
          y: 0,
          z: 0
        }, {
          x: n.x,
          y: n.y,
          z: n.z,
          w: n.w
        }) ? (this.physicsColliderObjects.add(e), this.logger.log(`Created physics trimesh collider for "${e}"`)) : this.logger.error(`Failed to create physics collider for "${e}"`);
      } catch (o) {
        this.logger.error(`Error creating physics collider for "${e}":`, o);
      }
    }
    _setupAnimations(e, t, i, s) {
      const o = new us(t);
      this.animationMixers.set(e, o), o.addEventListener("finished", (n) => {
        const r = n.action;
        for (const [a, l] of this.animationActions) if (l === r) {
          this.logger.log(`Animation "${a}" finished`), this.emit("animation:finished", a);
          const h = this.animationData.get(a);
          if (h && h.removeObjectOnFinish) {
            const c = this.animationToObject.get(a);
            c && (this.logger.log(`Removing object "${c}" after animation "${a}" finished`), this.removeObject(c));
          }
          break;
        }
      }), this.logger.log(`Available animation clips for "${e}":`, i.map((n) => n.name)), s.forEach((n) => {
        let r;
        if (n.clipName ? (r = i.find((l) => l.name === n.clipName), r || this.logger.warn(`Animation clip "${n.clipName}" not found for "${n.id}". Available:`, i.map((l) => l.name))) : r = i[0], !r) {
          this.logger.warn(`No animation clip found for "${n.id}"`);
          return;
        }
        const a = o.clipAction(r);
        a.loop = n.loop ? Ft : Eo, a.timeScale = n.timeScale || 1, a.clampWhenFinished = !n.loop, this.animationActions.set(n.id, a), this.animationData.set(n.id, n), this.animationToObject.set(n.id, e), this.logger.log(`Registered animation "${n.id}" for object "${e}"`);
      });
    }
    _setupMaterialRenderOrders(e, t, i) {
      const s = /* @__PURE__ */ new Map();
      for (const [o, n] of Object.entries(i)) {
        const r = [];
        t.traverse((a) => {
          a.isMesh && a.material && (Array.isArray(a.material) ? a.material : [
            a.material
          ]).forEach((h) => {
            h.name === o && r.push(a);
          });
        }), r.length > 0 ? (s.set(o, {
          renderOrder: n.renderOrder,
          criteria: n.criteria,
          meshes: r
        }), this.logger.log(`Found ${r.length} mesh(es) with material "${o}" for object "${e}"`), n.criteria ? this.logger.log(`Material "${o}" renderOrder will be applied when criteria match`) : (r.forEach((a) => {
          a.renderOrder = n.renderOrder;
        }), this.logger.log(`Applied renderOrder ${n.renderOrder} to material "${o}" (no criteria)`))) : this.logger.warn(`Material "${o}" not found in object "${e}"`);
      }
      s.size > 0 && this.materialRenderOrders.set(e, s);
    }
    updateMaterialRenderOrdersForState(e) {
      if (this.materialRenderOrders.size !== 0) for (const [t, i] of this.materialRenderOrders) for (const [s, o] of i) {
        if (!o.criteria) continue;
        const n = X(e, o.criteria), r = `${t}:${s}`;
        this.materialRenderOrderState.get(r) !== n ? (o.meshes.forEach((l) => {
          n ? l.renderOrder = o.renderOrder : l.renderOrder = 0;
        }), this.logger.log(`Material "${s}" on "${t}": renderOrder ${n ? o.renderOrder : 0} (state=${e.currentState}, criteria ${n ? "matched" : "not matched"})`), this.materialRenderOrderState.set(r, n)) : o.meshes.forEach((l) => {
          n ? l.renderOrder = o.renderOrder : l.renderOrder = 0;
        });
      }
    }
    addObjectToScene(e) {
      const t = this.objects.get(e);
      return t ? t.parent === this.scene || this.scene.children.includes(t) ? (this.objectsNotInScene.delete(e), true) : (this.scene.add(t), this.objectsNotInScene.delete(e), this.logger.log(`Added deferred object "${e}" to scene`), true) : (this.logger.warn(`Cannot add object "${e}" to scene - object not found`), false);
    }
    getObject(e) {
      return this.objects.get(e) || null;
    }
    findChildByName(e, t) {
      const i = this.getObject(e);
      if (!i) return this.logger.warn(`Object "${e}" not found`), null;
      let s = null;
      return i.traverse((o) => {
        o.name === t && (s = o);
      }), s || this.logger.warn(`Child "${t}" not found in "${e}"`), s;
    }
    reparentChild(e, t, i) {
      const s = this.findChildByName(e, t);
      return s ? (i.attach(s), s) : null;
    }
    reparentChildWithTransform(e, t, i, s = null) {
      const o = this.findChildByName(e, t);
      return o ? (o.parent && o.parent.remove(o), i.add(o), s && (s.position && o.position.set(s.position.x, s.position.y, s.position.z), s.rotation && o.rotation.set(s.rotation.x, s.rotation.y, s.rotation.z), s.scale && (typeof s.scale == "object" && "x" in s.scale ? o.scale.set(s.scale.x, s.scale.y, s.scale.z) : typeof s.scale == "number" && o.scale.setScalar(s.scale))), this.logger.log(`Reparented "${t}" from "${e}" to new parent`), o) : null;
    }
    removeObject(e) {
      const t = this.objects.get(e);
      if (t) {
        t.visible = false;
        const i = this.animationMixers.get(e);
        if (i) {
          i.stopAllAction();
          for (const [o, n] of this.animationActions.entries()) n.getMixer() === i && (this.animationActions.delete(o), this.animationData.delete(o), this.animationToObject.delete(o));
          this.animationMixers.delete(e);
        }
        const s = this.contactShadows.get(e);
        s && (s.dispose(), this.contactShadows.delete(e), this.logger.log(`Removed contact shadow for "${e}"`)), this.contactShadowCriteria.has(e) && this.contactShadowCriteria.delete(e), this.contactShadowState.has(e) && this.contactShadowState.delete(e), this.materialRenderOrders.has(e) && (this.materialRenderOrders.delete(e), this.logger.log(`Removed material render orders for "${e}"`));
        for (const [o] of this.materialRenderOrderState.entries()) o.startsWith(`${e}:`) && this.materialRenderOrderState.delete(o);
        this.physicsColliderObjects.has(e) && this.physicsManager && this.physicsManager.removeTrimeshCollider(e) && (this.physicsColliderObjects.delete(e), this.logger.log(`Removed physics collider for "${e}"`)), this.pendingTriggerColliders && this.pendingTriggerColliders.has(e) && this.pendingTriggerColliders.delete(e), t.visible = false, t.parent && t.parent.remove(t), this.scene.remove(t), t.traverse((o) => {
          o.visible = false, o.geometry && o.geometry.dispose(), o.material && (Array.isArray(o.material) ? o.material.forEach((n) => n.dispose()) : o.material.dispose());
        }), this.objects.delete(e), this.objectData.delete(e), this.objectsNotInScene.delete(e), this.logger.log(`Removed "${e}"`);
      }
    }
    hasObject(e) {
      return this.objects.has(e);
    }
    isLoading(e) {
      return this.loadingPromises.has(e);
    }
    getObjectIds() {
      return Array.from(this.objects.keys());
    }
    playAnimation(e) {
      const t = this.animationActions.get(e);
      t ? (t.reset(), t.play(), this.logger.log(`Playing animation "${e}"`)) : this.logger.warn(`Animation "${e}" not found`);
    }
    stopAnimation(e) {
      const t = this.animationActions.get(e);
      t && (t.stop(), this.logger.log(`Stopped animation "${e}"`));
    }
    isAnimationPlaying(e) {
      const t = this.animationActions.get(e);
      return t ? t.isRunning() : false;
    }
    update(e) {
      for (const t of this.animationMixers.values()) t.update(e);
    }
    updateContactShadows(e = 0) {
      if (this.contactShadows.size !== 0) for (const t of this.contactShadows.values()) t.update(e), t.render();
    }
    updateContactShadowsForState(e) {
      if (this.contactShadowCriteria.size !== 0) for (const [t, i] of this.contactShadowCriteria) {
        const s = this.contactShadows.get(t);
        if (!s) continue;
        const o = X(e, i);
        this.contactShadowState.get(t) !== o && (o ? s.enable() : s.disable(), this.logger.log(`Contact shadow "${t}" ${o ? "enabled" : "disabled"} (state=${e.currentState}, criteria check ${o ? "passed" : "failed"})`), this.contactShadowState.set(t, o));
      }
    }
    updateAnimationsForState(e) {
      if (!(!e || !e.currentState)) for (const [t, i] of this.animationData) {
        if (!i.autoPlay || !i.criteria) continue;
        const s = X(e, i.criteria), o = this.isAnimationPlaying(t), n = this.animationActions.get(t);
        if (s && !o) {
          if (!i.loop && n && n.time > 0) continue;
          this.playAnimation(t);
        } else !s && o && this.stopAnimation(t);
      }
    }
    async captureEnvMap(e = {}) {
      var _a3, _b2;
      if (!this.sparkRenderer) throw new Error("SparkRenderer not available - cannot capture environment map");
      const t = e.position || {
        x: 0,
        y: 0,
        z: 0
      }, i = new S(t.x, t.y, t.z), s = e.hideObjectIds || [], o = e.download !== false, n = e.filename || "envmap.png", r = [];
      for (const c of s) {
        const d = this.getObject(c);
        d ? r.push(d) : this.logger.warn(`captureEnvMap: object "${c}" not found`);
      }
      this.logger.log(`Capturing environment map at position (${i.x.toFixed(2)}, ${i.y.toFixed(2)}, ${i.z.toFixed(2)})`), r.length > 0 && this.logger.log(`  Hiding ${r.length} object(s): ${s.join(", ")}`);
      const a = Array.from(this.loadingPromises.values());
      a.length > 0 && (this.logger.log(`  Waiting for ${a.length} object(s) to finish loading...`), await Promise.all(a.map((c) => c.catch(() => {
      }))));
      const l = [];
      for (const [c, d] of this.objects) d.initialized && typeof d.initialized.then == "function" && l.push(d.initialized);
      l.length > 0 && await Promise.all(l), this.logger.log("  Rendering environment map...");
      const h = await new Promise((c, d) => {
        requestAnimationFrame(async () => {
          try {
            const u = await this.sparkRenderer.renderEnvMap({
              scene: this.scene,
              worldCenter: i,
              hideObjects: r,
              update: true
            });
            c(u);
          } catch (u) {
            d(u);
          }
        });
      });
      return this.logger.log(`  \u2713 Environment map captured (${((_a3 = h.image) == null ? void 0 : _a3.width) || "unknown"}x${((_b2 = h.image) == null ? void 0 : _b2.height) || "unknown"})`), o && await this._downloadTexture(h, n), h;
    }
    async _downloadTexture(e, t) {
      if (!this.renderer) {
        this.logger.error("THREE.WebGLRenderer not available");
        return;
      }
      const i = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `, s = `
      #include <common>
      varying vec2 vUv;
      uniform samplerCube envMap;
      
      void main() {
        vec2 uv = vUv;
        float theta = uv.x * PI * 2.0;
        float phi = uv.y * PI;
        
        vec3 dir = vec3(
          sin(phi) * cos(theta),
          cos(phi),
          sin(phi) * sin(theta)
        );
        
        gl_FragColor = textureCube(envMap, dir);
      }
    `, o = 2048, n = 1024, r = new Io(o, n, {
        minFilter: ye,
        magFilter: ye,
        format: Ro
      }), a = new Xt(), l = new ks(-1, 1, 1, -1, 0, 1), h = new Ct(2, 2), c = new Si({
        vertexShader: i,
        fragmentShader: s,
        uniforms: {
          envMap: {
            value: e
          }
        }
      }), d = new k(h, c);
      a.add(d), this.renderer.setRenderTarget(r), this.renderer.render(a, l), this.renderer.setRenderTarget(null);
      const u = new Uint8Array(o * n * 4);
      this.renderer.readRenderTargetPixels(r, 0, 0, o, n, u);
      const m = document.createElement("canvas");
      m.width = o, m.height = n;
      const f = m.getContext("2d"), x = f.createImageData(o, n);
      x.data.set(u), f.putImageData(x, 0, 0), m.toBlob((w) => {
        const y = URL.createObjectURL(w), v = document.createElement("a");
        v.href = y, v.download = t, document.body.appendChild(v), v.click(), document.body.removeChild(v), URL.revokeObjectURL(y), this.logger.log(`  \u2713 Downloaded equirectangular map as "${t}"`);
      }, "image/png"), h.dispose(), c.dispose(), r.dispose();
    }
    moveCameraToEnvMapCenter(e) {
      const t = this.objectData.get(e);
      if (!t || !t.envMapWorldCenter) {
        this.logger.error(`Scene "${e}" not found or doesn't have envMapWorldCenter`);
        return;
      }
      const i = t.envMapWorldCenter;
      window.camera ? (window.camera.position.set(i.x, i.y, i.z), this.logger.log(`\u2713 Camera moved to envMapWorldCenter: (${i.x}, ${i.y}, ${i.z})`), this.logger.log("Take a screenshot now! This is what your environment map sees.")) : this.logger.error("window.camera not available");
    }
    destroy() {
      for (const e of this.animationActions.values()) e.stop();
      this.animationMixers.clear(), this.animationActions.clear(), this.animationData.clear(), this.animationToObject.clear();
      for (const e of this.contactShadows.values()) e.dispose();
      if (this.contactShadows.clear(), this.envMapCache.clear(), this.physicsManager) {
        for (const e of this.physicsColliderObjects) this.physicsManager.removeTrimeshCollider(e);
        this.physicsColliderObjects.clear();
      }
      for (const e of this.objects.keys()) this.removeObject(e);
      this.objects.clear(), this.loadingPromises.clear();
    }
  }
  const Wt = [
    {
      id: "trigger-phonebooth-ring",
      type: "box",
      position: L.phonebooth.position,
      rotation: {
        x: 0,
        y: 0,
        z: 0
      },
      dimensions: {
        x: 10,
        y: 4,
        z: 10
      },
      setStateOnEnter: {
        currentState: p.PHONE_BOOTH_RINGING
      },
      once: true,
      enabled: true,
      criteria: {
        currentState: {
          $gte: p.TITLE_SEQUENCE_COMPLETE,
          $lt: p.PHONE_BOOTH_RINGING
        }
      }
    },
    {
      id: "phonebooth-answer",
      type: "box",
      position: {
        x: L.phonebooth.position.x,
        y: 1,
        z: L.phonebooth.position.z
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0
      },
      dimensions: {
        x: 1,
        y: 4,
        z: 1
      },
      setStateOnEnter: {
        currentState: p.ANSWERED_PHONE
      },
      once: true,
      enabled: true,
      criteria: {
        currentState: p.PHONE_BOOTH_RINGING
      }
    },
    {
      id: "cat",
      type: "box",
      position: {
        x: -0.5,
        y: 0.4,
        z: 18.6
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0
      },
      dimensions: {
        x: 2.5,
        y: 1,
        z: 2.5
      },
      setStateOnEnter: {
        heardCat: true
      },
      true: false,
      enabled: true
    },
    {
      id: "radio-state-trigger",
      type: "sphere",
      position: L.radio.position,
      rotation: {
        x: 0,
        y: 0,
        z: 0
      },
      dimensions: {
        radius: 8
      },
      setStateOnEnter: {
        currentState: p.NEAR_RADIO
      },
      once: true,
      enabled: true,
      criteria: {
        currentState: {
          $gte: p.TITLE_SEQUENCE_COMPLETE,
          $lt: p.NEAR_RADIO
        }
      }
    },
    {
      id: "radio-proximity-toggle",
      type: "sphere",
      position: L.radio.position,
      rotation: {
        x: 0,
        y: 0,
        z: 0
      },
      dimensions: {
        radius: 8
      },
      setStateOnEnter: {
        nearRadio: true
      },
      setStateOnExit: {
        nearRadio: false
      },
      once: false,
      enabled: true,
      criteria: {
        currentState: {
          $gte: p.TITLE_SEQUENCE_COMPLETE
        }
      }
    },
    {
      id: "shadow-glimpse-trigger",
      type: "sphere",
      position: {
        x: -10.45,
        y: 1.21,
        z: 40.64
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0
      },
      dimensions: {
        radius: 3
      },
      setStateOnEnter: {
        shadowGlimpse: true
      },
      once: true,
      enabled: true,
      criteria: {
        currentState: {
          $gte: p.TITLE_SEQUENCE_COMPLETE
        }
      }
    },
    {
      id: "entering-office",
      type: "box",
      position: {
        x: -1.3,
        y: 1.33,
        z: 81.18
      },
      rotation: {
        x: 0,
        y: 0.138,
        z: 0
      },
      dimensions: {
        x: 3,
        y: 4,
        z: 3
      },
      setStateOnEnter: {
        currentState: p.ENTERING_OFFICE
      },
      once: true,
      enabled: true,
      criteria: {
        currentState: {
          $gte: p.POST_DRIVE_BY,
          $lt: p.ENTERING_OFFICE
        }
      }
    },
    {
      id: "interior-office",
      type: "box",
      position: L.candlestickPhone.position,
      rotation: {
        x: 0,
        y: 0,
        z: 0
      },
      dimensions: {
        x: 3,
        y: 4,
        z: 3
      },
      setStateOnEnter: {
        currentState: p.OFFICE_INTERIOR
      },
      once: true,
      enabled: true,
      criteria: {
        currentState: {
          $gte: p.POST_DRIVE_BY,
          $lt: p.OFFICE_INTERIOR
        }
      }
    },
    {
      id: "candlestickPhone-pickup",
      type: "box",
      position: L.candlestickPhone.position,
      rotation: {
        x: 0,
        y: 0,
        z: 0
      },
      dimensions: {
        x: 1.5,
        y: 5,
        z: 1.5
      },
      setStateOnEnter: {
        currentState: p.OFFICE_PHONE_ANSWERED
      },
      once: true,
      enabled: true,
      criteria: {
        currentState: {
          $gte: p.OFFICE_INTERIOR,
          $lt: p.OFFICE_PHONE_ANSWERED
        }
      }
    },
    {
      id: "zone-alleyIntro",
      type: "box",
      position: {
        x: 0,
        y: 1,
        z: 0
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0
      },
      dimensions: {
        x: 10,
        y: 4,
        z: 10
      },
      setStateOnEnter: {
        currentZone: "alleyIntro"
      },
      setStateOnExit: {
        currentZone: null
      },
      once: false,
      enabled: false,
      criteria: {
        currentState: {
          $lt: p.OFFICE_INTERIOR
        }
      }
    },
    {
      id: "zone-alleyNavigable",
      type: "box",
      position: {
        x: 0,
        y: 1,
        z: 0
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0
      },
      dimensions: {
        x: 10,
        y: 4,
        z: 10
      },
      setStateOnEnter: {
        currentZone: "alleyNavigable"
      },
      setStateOnExit: {
        currentZone: null
      },
      once: false,
      enabled: false,
      criteria: {
        currentState: {
          $lt: p.OFFICE_INTERIOR
        }
      }
    },
    {
      id: "zone-fourWay",
      type: "box",
      position: {
        x: 0,
        y: 1,
        z: 0
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0
      },
      dimensions: {
        x: 10,
        y: 4,
        z: 10
      },
      setStateOnEnter: {
        currentZone: "fourWay"
      },
      setStateOnExit: {
        currentZone: null
      },
      once: false,
      enabled: true,
      criteria: {
        currentState: {
          $lt: p.OFFICE_INTERIOR
        }
      }
    },
    {
      id: "zone-threeWay",
      type: "box",
      position: {
        x: 0,
        y: 1,
        z: 0
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0
      },
      dimensions: {
        x: 10,
        y: 4,
        z: 10
      },
      setStateOnEnter: {
        currentZone: "threeWay"
      },
      setStateOnExit: {
        currentZone: null
      },
      once: false,
      enabled: true,
      criteria: {
        currentState: {
          $lt: p.OFFICE_INTERIOR
        }
      }
    },
    {
      id: "zone-threeWay2",
      type: "box",
      position: {
        x: 0,
        y: 1,
        z: 0
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0
      },
      dimensions: {
        x: 10,
        y: 4,
        z: 10
      },
      setStateOnEnter: {
        currentZone: "threeWay2"
      },
      setStateOnExit: {
        currentZone: null
      },
      once: false,
      enabled: true,
      criteria: {
        currentState: {
          $lt: p.OFFICE_INTERIOR
        }
      }
    },
    {
      id: "zone-plaza",
      type: "box",
      position: {
        x: 0,
        y: 1,
        z: 0
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0
      },
      dimensions: {
        x: 10,
        y: 4,
        z: 10
      },
      setStateOnEnter: {
        currentZone: "plaza"
      },
      setStateOnExit: {
        currentZone: null
      },
      once: false,
      enabled: true,
      criteria: {
        currentState: {
          $lt: p.OFFICE_INTERIOR
        }
      }
    }
  ], Xn = Object.freeze(Object.defineProperty({
    __proto__: null,
    colliders: Wt,
    default: Wt
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  class Kn {
    constructor(e, t = {}) {
      this.texts = e, this.introDuration = t.introDuration || 3, this.staggerDelay = t.staggerDelay || 2, this.holdDuration = t.holdDuration || 3, this.outroDuration = t.outroDuration || 2, this.onComplete = t.onComplete || null, this.time = 0, this.completed = false, this.totalDuration = this.introDuration + this.staggerDelay * (e.length - 1) + this.holdDuration + this.outroDuration, this.outroStartTime = this.introDuration + this.staggerDelay * (e.length - 1) + this.holdDuration, this.texts.forEach((i, s) => {
        i._startTime = s * this.staggerDelay;
      });
    }
    update(e) {
      if (this.isComplete()) {
        this.completed || (this.completed = true, this.onComplete && this.onComplete());
        return;
      }
      this.time += e, this.texts.forEach((t) => {
        if (!t.element) return;
        const i = this.time - t._startTime, s = this.time - this.outroStartTime;
        let o = 0;
        i < 0 ? o = 0 : i < this.introDuration ? o = i / this.introDuration : s < 0 ? o = 1 : s < this.outroDuration ? o = 1 - s / this.outroDuration : o = 0, t.element.style.opacity = Math.max(0, Math.min(1, o));
      });
    }
    isComplete() {
      return this.time >= this.totalDuration;
    }
    hasOutroStarted() {
      return this.time >= this.outroStartTime && this.time < this.totalDuration;
    }
  }
  class Jn {
    constructor(e, t, i = {}) {
      if (this.camera = e, this.scene = t, this.isActive = true, this.hasStarted = false, this.transitionProgress = 0, this.uiManager = i.uiManager || null, this.sceneManager = i.sceneManager || null, this.dialogManager = i.dialogManager || null, this.sfxManager = i.sfxManager || null, this.inputManager = i.inputManager || null, this.logger = new N("StartScreen", false), this.introStartTriggered = false, this.titleSequence = null, this.title = null, this.byline = null, this.keystrokeIndex = 0, this.useImageBackup = true, this.gamepadNav = new Rs({
        inputManager: this.inputManager,
        sfxManager: this.sfxManager,
        onNavigateUp: () => this.navigateMenu(-1),
        onNavigateDown: () => this.navigateMenu(1),
        onConfirm: () => this.confirmMenuSelection()
      }), this.coneCurveObject = null, this.coneAnimatedMesh = null, this.isLoadingAnimation = false, this.animationCompleteTime = null, this.animationDirection = 1, this.animationSpeed = 1, this.cameraSpinProgress = 0, this.cameraSpinDuration = 1, this.isSpinning = false, this.lerpToSpawnDuration = 8, this.unifiedPath = null, this.unifiedPathProgress = 0, this.unifiedPathDuration = 0, this.isFollowingUnifiedPath = false, this.initialLookDirection = null, this.pathInitialTangent = null, this.rotationTransitionTime = 0, this.previousTangent = null, this.smoothedTangent = null, this.smoothedForward = null, this.smoothedTiltAxis = null, this.phase3StartT = 0.6, this.smoothedTiltAxis = null, this.initialAnimSpeed = 0, this.targetPathSpeed = 0, this.glbAnimationStartProgress = i.glbAnimationStartProgress !== void 0 ? i.glbAnimationStartProgress : 0, this.tiltTime = Math.random() * 100, this.tiltSpeed1 = 0.3 + Math.random() * 0.2, this.tiltSpeed2 = 0.5 + Math.random() * 0.3, this.tiltAmount = 0.12, this.targetPosition = i.targetPosition || new S(10, 1.6, 15), this.targetRotation = i.targetRotation || {
        yaw: G.degToRad(-210),
        pitch: 0
      }, this.transitionDuration = i.transitionDuration || 2, this.startPosition = new S(), this.startLookAt = new S(), this.createStartButton(), this.useImageBackup) {
        const { title: s, byline: o } = this.createTitleImages();
        this.title = s, this.byline = o;
      } else {
        const { title: s, byline: o } = this.createTitleText();
        this.title = s, this.byline = o;
      }
      this.loadCameraAnimation();
    }
    async loadCameraAnimation() {
      if (!this.sceneManager) {
        this.logger.warn("No sceneManager provided, using fallback circle animation");
        return;
      }
      this.isLoadingAnimation = true;
      try {
        if (this.coneCurveObject = this.sceneManager.getObject("coneCurve"), !this.coneCurveObject) {
          this.logger.warn("coneCurve object not loaded yet, will retry"), setTimeout(() => this.loadCameraAnimation(), 100);
          return;
        }
        if (this.coneCurveObject.traverse((e) => {
          e.name === "Cone" && (this.coneAnimatedMesh = e, this.logger.log("Found Cone object, type:", e.type)), e.isMesh && (e.visible = false);
        }), !this.coneAnimatedMesh) {
          this.logger.warn("Could not find 'Cone' mesh in ConeCurve.glb, using fallback"), this.isLoadingAnimation = false;
          return;
        }
        if (this.logger.log("Camera animation loaded successfully"), this.logger.log("Found animated mesh:", this.coneAnimatedMesh.name), this.sceneManager && (this.logger.log("Manually playing coneCurve-anim"), this.sceneManager.playAnimation("coneCurve-anim"), this.glbAnimationStartProgress > 0)) {
          const e = this.sceneManager.animationActions.get("coneCurve-anim");
          if (e) {
            const i = e.getClip().duration, s = i * this.glbAnimationStartProgress;
            e.time = s;
            const o = this.sceneManager.animationMixers.get("coneCurve");
            o && o.update(0), this.logger.log(`Set animation start time to ${s.toFixed(2)}s (${(this.glbAnimationStartProgress * 100).toFixed(1)}% of ${i.toFixed(2)}s)`);
          }
        }
        this.isLoadingAnimation = false, this.uiManager && this.uiManager.gameManager && this.uiManager.gameManager.zoneManager && this.uiManager.gameManager.zoneManager.enableZoneDetection();
      } catch (e) {
        this.logger.error("Error loading camera animation:", e), this.isLoadingAnimation = false;
      }
    }
    createStartButton() {
      this.overlay = document.createElement("div"), this.overlay.id = "intro-overlay", this.tagline = document.createElement("div"), this.tagline.className = "intro-tagline", this.tagline.innerHTML = '<img src="/images/CliffCole_Emblem.svg" alt="From the Files of Confidential" />', this.startButton = document.createElement("button"), this.startButton.className = "intro-button", this.startButton.textContent = "START", this.startButton.addEventListener("click", (e) => {
        var _a3, _b2, _c, _d, _e2, _f, _g, _h, _i, _j, _k;
        if (typeof Y.Howler < "u" && typeof Y.Howler.unlock == "function" && Y.Howler.unlock(), jt(), ((((_b2 = (_a3 = this.uiManager) == null ? void 0 : _a3.gameManager) == null ? void 0 : _b2.getState()) || {}).isSafari || false) && ((_d = (_c = this.uiManager) == null ? void 0 : _c.gameManager) == null ? void 0 : _d.videoManager)) {
          const o = this.uiManager.gameManager.videoManager;
          o.getVideoPlayer("catSafari") || o.createVideoPlayer("catSafari");
        }
        if (((_g = (_f = (_e2 = this.uiManager) == null ? void 0 : _e2.gameManager) == null ? void 0 : _f.videoManager) == null ? void 0 : _g.unlockVideoPlayback) && this.uiManager.gameManager.videoManager.unlockVideoPlayback(), e.stopPropagation(), this.sfxManager && this.sfxManager.play("typewriter-return"), this.startGame(), !(((_k = (_j = (_i = (_h = this.uiManager) == null ? void 0 : _h.gameManager) == null ? void 0 : _i.getState) == null ? void 0 : _j.call(_i)) == null ? void 0 : _k.isMobile) || false)) {
          const o = document.querySelector("canvas");
          o && o.requestPointerLock && o.requestPointerLock();
        }
      }), this.startButton.addEventListener("mouseenter", () => {
        if (this.selectedButtonIndex = 0, this.updateButtonSelection(), this.sfxManager) {
          const e = `typewriter-keystroke-0${this.keystrokeIndex}`;
          this.sfxManager.play(e), this.keystrokeIndex = (this.keystrokeIndex + 1) % 4;
        }
      }), this.optionsButton = document.createElement("button"), this.optionsButton.className = "intro-button", this.optionsButton.textContent = "OPTIONS", this.optionsButton.addEventListener("click", (e) => {
        e.stopPropagation(), this.sfxManager && this.sfxManager.play("typewriter-return"), this.uiManager && this.uiManager.show("options-menu");
      }), this.optionsButton.addEventListener("mouseenter", () => {
        if (this.selectedButtonIndex = 1, this.updateButtonSelection(), this.sfxManager) {
          const e = `typewriter-keystroke-0${this.keystrokeIndex}`;
          this.sfxManager.play(e), this.keystrokeIndex = (this.keystrokeIndex + 1) % 4;
        }
      }), this.overlay.appendChild(this.tagline), this.overlay.appendChild(this.startButton), this.overlay.appendChild(this.optionsButton), document.body.appendChild(this.overlay), this.overlay.style.opacity = "0", this.overlay.style.transition = "opacity 1s ease-in", requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.overlay.style.opacity = "1";
        });
      }), this.menuButtons = [
        this.startButton,
        this.optionsButton
      ], this.selectedButtonIndex = 0, this.updateButtonSelection(), this.keydownHandler = (e) => {
        if (!(!this.overlay || this.overlay.style.display === "none")) if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") {
          if (e.preventDefault(), this.selectedButtonIndex = (this.selectedButtonIndex + 1) % this.menuButtons.length, this.updateButtonSelection(), this.sfxManager) {
            const t = `typewriter-keystroke-0${this.keystrokeIndex}`;
            this.sfxManager.play(t), this.keystrokeIndex = (this.keystrokeIndex + 1) % 4;
          }
        } else if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
          if (e.preventDefault(), this.selectedButtonIndex = (this.selectedButtonIndex - 1 + this.menuButtons.length) % this.menuButtons.length, this.updateButtonSelection(), this.sfxManager) {
            const t = `typewriter-keystroke-0${this.keystrokeIndex}`;
            this.sfxManager.play(t), this.keystrokeIndex = (this.keystrokeIndex + 1) % 4;
          }
        } else (e.key === "Enter" || e.key === " ") && (e.preventDefault(), this.sfxManager && this.sfxManager.play("typewriter-return"), this.menuButtons[this.selectedButtonIndex].click());
      }, document.addEventListener("keydown", this.keydownHandler), this.uiManager && this.uiManager.registerElement("intro-screen", this.overlay, "MAIN_MENU", {
        blocksInput: true,
        pausesGame: false
      });
    }
    updateButtonSelection() {
      this.menuButtons.forEach((e, t) => {
        t === this.selectedButtonIndex ? e.classList.add("selected") : e.classList.remove("selected");
      });
    }
    createTitleImages() {
      this.titleImageContainer = document.createElement("div"), this.titleImageContainer.id = "title-images", this.titleImageContainer.className = "title-images-container", document.body.appendChild(this.titleImageContainer);
      const e = document.createElement("img");
      e.src = "/images/Czar_MainTitle.png", e.className = "title-image", e.style.width = "50%", e.style.opacity = "0", this.titleImageContainer.appendChild(e);
      const t = document.createElement("img");
      return t.src = "/images/JamesCKane.png", t.className = "byline-image", t.style.width = "30%", t.style.opacity = "0", this.titleImageContainer.appendChild(t), {
        title: {
          element: e,
          fadeIn: false,
          fadeOut: false,
          opacity: 0
        },
        byline: {
          element: t,
          fadeIn: false,
          fadeOut: false,
          opacity: 0
        }
      };
    }
    createTitleText() {
      var _a3, _b2, _c, _d;
      const e = ((_d = (_c = (_b2 = (_a3 = this.uiManager) == null ? void 0 : _a3.gameManager) == null ? void 0 : _b2.getState) == null ? void 0 : _c.call(_b2)) == null ? void 0 : _d.isMobile) || false, t = e ? -3.5 : -2.25, i = e ? -3.5 : -2.25, s = e ? 3e3 : 6e3, o = e ? 600 : 1200;
      this.textScene = new Xt(), this.textCamera = new Zt(60, window.innerWidth / window.innerHeight, 1, 20);
      const n = Mi(this.textScene, {
        imageUrl: "/images/Czar_MainTitle.png",
        position: {
          x: 0,
          y: 0,
          z: t
        },
        scale: 0.03125,
        animate: true,
        maxParticles: s,
        alphaThreshold: 0.1
      });
      this.textScene.remove(n.mesh), this.textCamera.add(n.mesh), this.textScene.add(this.textCamera), n.mesh.userData.baseScale = 0.0125, n.mesh.visible = false;
      const r = {
        mesh: n.mesh,
        particles: n.particles,
        update: n.update,
        pointSize: 0.28
      }, a = Mi(this.textScene, {
        imageUrl: "/images/JamesCKane.png",
        position: {
          x: 0,
          y: -0.8,
          z: i
        },
        scale: 0.0225,
        animate: true,
        maxParticles: o,
        alphaThreshold: 0.1
      });
      this.textScene.remove(a.mesh), this.textCamera.add(a.mesh), a.mesh.userData.baseScale = 0.0125, a.mesh.visible = false;
      const l = {
        mesh: a.mesh,
        particles: a.particles,
        update: a.update,
        pointSize: 0.28
      };
      return {
        title: r,
        byline: l
      };
    }
    startGame() {
      if (!this.hasStarted) {
        if (this.hasStarted = true, this.sceneManager && this.coneAnimatedMesh) {
          const e = this.sceneManager.animationActions.get("coneCurve-anim");
          if (e) {
            const i = e.getClip().duration, s = e.time, o = s / i;
            this.logger.log(`Creating unified path from ${(o * 100).toFixed(1)}% of animation`);
            const n = o < 0.5, r = n ? 0 : i;
            this.animationDirection = n ? -1 : 1, this.isSpinning = n, this.cameraSpinProgress = 0;
            const l = Math.max(0, s - 0.016), h = s;
            e.time = l;
            const c = this.sceneManager.animationMixers.get("coneCurve");
            c && c.update(0);
            const d = new S();
            this.coneAnimatedMesh.getWorldPosition(d), e.time = h, c && c.update(0);
            const u = new S();
            this.coneAnimatedMesh.getWorldPosition(u);
            const m = d.distanceTo(u), f = h - l, x = f > 0 ? m / f : 0, w = e.timeScale || 1;
            this.initialAnimSpeed = x * w, this.logger.log(`GLB speed \u2248 ${this.initialAnimSpeed.toFixed(2)} u/s (raw ${x.toFixed(2)}, ts ${w})`);
            const y = [], v = 20;
            for (let O = 0; O <= v; O++) {
              const $ = O / v, Z = G.lerp(s, r, $);
              e.time = Z;
              const j = this.sceneManager.animationMixers.get("coneCurve");
              j && j.update(0);
              const se = new S();
              this.coneAnimatedMesh.getWorldPosition(se), y.push(se.clone());
            }
            const b = y[y.length - 1], T = this.targetPosition, M = 8;
            for (let O = 1; O <= M; O++) {
              const $ = O / M, Z = new S().lerpVectors(b, T, $);
              y.push(Z);
            }
            this.unifiedPath = new ws(y, false, "chordal"), this.unifiedPathProgress = 0;
            let C = 8;
            if (this.dialogManager) {
              const O = this.dialogManager.getDialogDuration("intro");
              O > 0 ? (C = O, this.logger.log(`Using intro dialog duration: ${C}s`)) : this.logger.warn(`Could not get intro dialog duration, using fallback: ${C}s`);
            }
            this.unifiedPathDuration = C;
            const P = this.unifiedPath.getLength();
            this.targetPathSpeed = P > 0 ? P / C : 1, this.logger.log(`Target path speed \u2248 ${this.targetPathSpeed.toFixed(2)} u/s (length ${P.toFixed(2)}, dur ${C.toFixed(2)})`), this.isFollowingUnifiedPath = true;
            const A = new S(0, 0, -1);
            A.applyQuaternion(this.camera.quaternion), this.initialLookDirection = A.clone(), this.pathInitialTangent = this.unifiedPath.getTangentAt(0).normalize(), this.rotationTransitionTime = 0, this.previousTangent = this.pathInitialTangent.clone(), this.smoothedTangent = A.clone();
            const D = n ? o : 1 - o, R = 0.5, F = 0.75, z = Math.min(0.5, Math.max(0, D)) / 0.5;
            this.phase3StartT = R + (F - R) * z, this.isSpinning && (this.cameraSpinDuration = 1), e.paused = true, this.uiManager && this.uiManager.gameManager && this.uiManager.gameManager.setState({
              currentState: p.INTRO
            }), this.logger.log(`Created unified path with ${y.length} points over ${this.unifiedPathDuration}s`);
          }
        }
        this.overlay.style.opacity = "0", this.overlay.style.transition = "opacity 0.15s ease", setTimeout(() => {
          this.overlay.style.display = "none", this.uiManager && this.uiManager.hide("intro-screen");
        }, 150);
      }
    }
    calculateCameraTilt() {
      const e = Math.sin(this.tiltTime * this.tiltSpeed1) * this.tiltAmount, t = Math.sin(this.tiltTime * this.tiltSpeed2) * this.tiltAmount * 0.5;
      return e + t;
    }
    navigateMenu(e) {
      this.selectedButtonIndex = (this.selectedButtonIndex + e + this.menuButtons.length) % this.menuButtons.length, this.updateButtonSelection();
    }
    confirmMenuSelection() {
      this.menuButtons && this.menuButtons[this.selectedButtonIndex] && this.menuButtons[this.selectedButtonIndex].click();
    }
    update(e) {
      if (!this.hasStarted && this.overlay && this.overlay.style.display !== "none" && this.gamepadNav.update(e), this.tiltTime += e, this.textCamera && (this.textCamera.position.copy(this.camera.position), this.textCamera.quaternion.copy(this.camera.quaternion), this.textCamera.aspect = this.camera.aspect, this.textCamera.updateProjectionMatrix()), this.isFollowingUnifiedPath && this.unifiedPath) {
        const i = Math.min(1, this.rotationTransitionTime / 1.5), s = i * i, o = G.lerp(this.initialAnimSpeed || 0, this.targetPathSpeed || 1, s), n = this.unifiedPath.getLength(), r = n > 0 ? o * e / n : e / this.unifiedPathDuration;
        if (this.unifiedPathProgress += r, this.rotationTransitionTime += e, this.unifiedPathProgress >= 1) return this.isActive = false, this.cleanup(), false;
        const a = Math.min(1, this.unifiedPathProgress), l = this.unifiedPath.getPointAt(a);
        this.camera.position.copy(l);
        const h = this.unifiedPath.getTangentAt(a).normalize();
        this.smoothedTangent.lerp(h, 0.04), this.smoothedTangent.normalize();
        const d = this.smoothedTangent.clone(), u = new S(0, 0, -1).applyEuler(new U(this.targetRotation.pitch, this.targetRotation.yaw, 0, "YXZ"));
        let m = d.clone();
        const f = 3, x = 0.5;
        if (this.rotationTransitionTime < f) {
          const M = this.rotationTransitionTime / f, C = 1 - Math.pow(1 - M, 3), P = Math.atan2(this.initialLookDirection.x, this.initialLookDirection.z), A = Math.asin(-this.initialLookDirection.y), D = Math.atan2(h.x, h.z), R = Math.asin(-h.y);
          let F = D - P;
          F > Math.PI && (F -= 2 * Math.PI), F < -Math.PI && (F += 2 * Math.PI);
          const z = P + F * C, O = A + (R - A) * C;
          m = new S(Math.sin(z) * Math.cos(O), -Math.sin(O), Math.cos(z) * Math.cos(O)).normalize();
        } else if (this.rotationTransitionTime < f + x) {
          const M = (this.rotationTransitionTime - f) / x, C = M * M, P = Math.atan2(this.initialLookDirection.x, this.initialLookDirection.z);
          Math.asin(-this.initialLookDirection.y);
          const A = Math.atan2(d.x, d.z), D = Math.asin(-d.y);
          let R = A - P;
          R > Math.PI && (R -= 2 * Math.PI), R < -Math.PI && (R += 2 * Math.PI);
          const F = P + R, z = D, O = new S(Math.sin(F) * Math.cos(z), -Math.sin(z), Math.cos(F) * Math.cos(z)).normalize();
          m = new S().lerpVectors(O, d, C).normalize();
        } else if (a < this.phase3StartT) m = d;
        else {
          const M = Math.max(1e-3, 1 - this.phase3StartT), C = (a - this.phase3StartT) / M, P = 1 - Math.pow(1 - C, 4), A = Math.atan2(d.x, d.z), D = Math.asin(-d.y), R = Math.atan2(u.x, u.z), F = Math.asin(-u.y);
          let z = R - A;
          z > Math.PI && (z -= 2 * Math.PI), z < -Math.PI && (z += 2 * Math.PI), z = z > 0 ? z - 2 * Math.PI : z + 2 * Math.PI;
          const O = A + z * P, $ = D + (F - D) * P;
          m = new S(Math.sin(O) * Math.cos($), -Math.sin($), Math.cos(O) * Math.cos($)).normalize();
        }
        const w = new S();
        w.copy(l).add(m.multiplyScalar(5)), this.camera.lookAt(w), this.smoothedTiltAxis || (this.smoothedTiltAxis = m.clone()), this.smoothedTiltAxis.lerp(m, 0.08), this.smoothedTiltAxis.normalize();
        let v = 1;
        if (a >= this.phase3StartT) {
          const M = Math.max(1e-3, 1 - this.phase3StartT);
          v = 1 - (a - this.phase3StartT) / M;
        }
        const b = this.calculateCameraTilt() * v, T = new I();
        return T.setFromAxisAngle(this.smoothedTiltAxis, b), this.camera.quaternion.multiply(T), true;
      }
      if (!this.hasStarted && this.coneAnimatedMesh) {
        const t = new S(), i = new I(), s = new S();
        if (this.coneAnimatedMesh.getWorldPosition(t), this.coneAnimatedMesh.getWorldQuaternion(i), this.coneAnimatedMesh.getWorldScale(s), Math.random() < 0.01 && (this.logger.log("Cone position:", t.toArray()), this.sceneManager)) {
          const h = this.sceneManager.isAnimationPlaying("coneCurve-anim");
          this.logger.log("Animation playing?", h);
        }
        this.camera.position.copy(t);
        const o = new S(0, 0, -1);
        if (o.applyQuaternion(i), this.animationDirection === -1) {
          let h;
          this.cameraSpinProgress < 1 ? h = (this.cameraSpinProgress < 0.5 ? 2 * this.cameraSpinProgress * this.cameraSpinProgress : 1 - Math.pow(-2 * this.cameraSpinProgress + 2, 2) / 2) * Math.PI : h = Math.PI;
          const c = new I();
          c.setFromAxisAngle(new S(0, 1, 0), h), o.applyQuaternion(c);
        }
        this.smoothedForward || (this.smoothedForward = o.clone()), this.smoothedForward.lerp(o, 0.04), this.smoothedForward.normalize();
        const r = new S();
        r.copy(t).add(this.smoothedForward), this.camera.lookAt(r);
        const a = this.calculateCameraTilt(), l = new I();
        return l.setFromAxisAngle(this.smoothedForward, a), this.camera.quaternion.multiply(l), true;
      }
      return true;
    }
    isComplete() {
      return !this.isActive;
    }
    cleanup() {
      this.overlay && this.overlay.parentNode && this.overlay.parentNode.removeChild(this.overlay), this.keydownHandler && (document.removeEventListener("keydown", this.keydownHandler), this.keydownHandler = null), this.coneCurveObject && this.sceneManager && (this.scene.remove(this.coneCurveObject), this.logger.log("Removed camera curve object"));
    }
    checkIntroStart(e, t) {
      if (this.hasStarted && this.hasStarted && !this.introStartTriggered) {
        this.introStartTriggered = true, e && !e.isPlaying("city-ambiance") && e.play("city-ambiance");
        const i = () => {
          this.useImageBackup ? this.titleSequence = new Kn([
            this.title,
            this.byline
          ], {
            introDuration: 1,
            staggerDelay: 3,
            holdDuration: 2,
            outroDuration: 1,
            onComplete: () => {
              this.logger.log("Title sequence complete"), this.titleImageContainer && this.titleImageContainer.parentNode && (this.titleImageContainer.parentNode.removeChild(this.titleImageContainer), this.titleImageContainer = null), this.titleSequence = null, t.setState({
                currentState: p.TITLE_SEQUENCE_COMPLETE
              });
            }
          }) : (this.titleSequence = new Is([
            this.title,
            this.byline
          ], {
            introDuration: 3,
            staggerDelay: 2,
            holdDuration: 3,
            outroDuration: 2,
            disperseDistance: 5,
            basePointSize: 0.56,
            onComplete: () => {
              this.logger.log("Title sequence complete"), this.title && this.title.mesh && (this.title.mesh.parent && this.title.mesh.parent.remove(this.title.mesh), this.title.mesh.geometry.dispose(), this.title.mesh.material.dispose(), this.title.mesh = null), this.byline && this.byline.mesh && (this.byline.mesh.parent && this.byline.mesh.parent.remove(this.byline.mesh), this.byline.mesh.geometry.dispose(), this.byline.mesh.material.dispose(), this.byline.mesh = null), this.titleSequence = null, t.setState({
                currentState: p.TITLE_SEQUENCE_COMPLETE
              });
            }
          }), this.titleSequence && typeof this.titleSequence.update == "function" && this.titleSequence.update(0), this.title.mesh.visible = true, this.byline.mesh.visible = true), t.setState({
            currentState: p.TITLE_SEQUENCE
          });
        }, s = this.uiManager && this.uiManager.gameManager;
        if (s && typeof s.on == "function") {
          const o = (n, r) => {
            n && n.currentState === p.TITLE_SEQUENCE && (typeof s.off == "function" && s.off("state:changed", o), i());
          };
          s.on("state:changed", o);
        } else i();
      }
    }
    getTitleSequence() {
      return this.titleSequence;
    }
    getTextRenderInfo() {
      return {
        scene: this.textScene,
        camera: this.textCamera
      };
    }
  }
  class ea {
    constructor(e, t = {}) {
      this.camera = e, this.uiManager = t.uiManager || null, this.gameManager = t.gameManager || null, this.isActive = false, this.sequenceStarted = false, this.logger = new N("TimePassesSequence", true), this.titleSequence = null, this.timePassesText = null, this.createTimePassesText();
    }
    createTimePassesText() {
      this.textScene = new Xt(), this.textCamera = new Zt(60, window.innerWidth / window.innerHeight, 1, 20);
      const e = Mi(this.textScene, {
        imageUrl: "/images/SomeTimePasses.png",
        position: {
          x: 0,
          y: 0,
          z: -2.25
        },
        scale: 0.03125,
        animate: true,
        particleDensity: 0.5,
        alphaThreshold: 0.1,
        tintColor: new J(16777215)
      });
      this.textScene.remove(e.mesh), this.textCamera.add(e.mesh), this.textScene.add(this.textCamera), e.mesh.userData.baseScale = 0.0125, e.mesh.visible = false, this.timePassesText = {
        mesh: e.mesh,
        particles: e.particles,
        update: e.update
      }, this.particlesLoaded = false;
      const t = () => {
        if (e.particles && e.particles.length > 0) {
          this.logger.log(`Particles created: ${e.particles.length}`), this.logger.log(`Mesh geometry vertices: ${e.mesh.geometry.attributes.position.count}`), this.particlesLoaded = true, this.timePassesText.particles.forEach((o) => {
            o.opacity = 0, o.scale = 0.2;
          });
          const i = this.timePassesText.mesh.geometry.attributes.opacity, s = this.timePassesText.mesh.geometry.attributes.size;
          i && s && (this.timePassesText.particles.forEach((o, n) => {
            i.array[n] = 0, s.array[n] = 0.28 * 0.2;
          }), i.needsUpdate = true, s.needsUpdate = true), this.sequenceStarted && !this.titleSequence && (this.logger.log("Creating TitleSequence now that particles are loaded"), this.createTitleSequence());
        } else setTimeout(t, 500);
      };
      setTimeout(t, 500);
    }
    createTitleSequence() {
      this.timePassesText.particles && this.timePassesText.particles.forEach((e) => {
        e.opacity = 0, e.scale = 0.2;
      }), this.titleSequence = new Is([
        this.timePassesText
      ], {
        introDuration: 2,
        staggerDelay: 0,
        holdDuration: 3,
        outroDuration: 4,
        disperseDistance: 5,
        basePointSize: 0.15,
        onComplete: () => {
          this.logger.log("Time passes sequence complete"), this.gameManager && this.gameManager.setState({
            currentState: p.WAKING_UP
          }), this.isActive = false;
        }
      }), this.titleSequence && typeof this.titleSequence.update == "function" && this.titleSequence.update(0);
    }
    start() {
      var _a3, _b2;
      if (this.sequenceStarted) return;
      this.sequenceStarted = true, this.isActive = true, this.logger.log("Starting time passes sequence");
      const e = ((_b2 = (_a3 = this.timePassesText) == null ? void 0 : _a3.particles) == null ? void 0 : _b2.length) || 0;
      this.logger.log(`Particles available: ${e}`), e === 0 ? this.logger.warn("No particles loaded yet - TitleSequence will be created when particles load") : this.createTitleSequence(), this.timePassesText.mesh.visible = true, this.logger.log(`Mesh visible set to: ${this.timePassesText.mesh.visible}`);
    }
    update(e) {
      !this.isActive || !this.titleSequence || (this.textCamera && (this.textCamera.position.copy(this.camera.position), this.textCamera.quaternion.copy(this.camera.quaternion), this.textCamera.aspect = this.camera.aspect, this.textCamera.updateProjectionMatrix()), this.titleSequence.update(e));
    }
    getTextRenderInfo() {
      return this.isActive ? {
        scene: this.textScene,
        camera: this.textCamera
      } : null;
    }
    cleanup() {
      this.isActive = false, this.timePassesText && this.timePassesText.mesh && (this.timePassesText.mesh.visible = false);
    }
  }
  const mt = new N("CameraAnimationData", false), qt = {
    catLookat: {
      id: "catLookat",
      type: "lookat",
      description: "Look at cat video when player hears cat sound",
      position: K.cat.position,
      transitionTime: 0.75,
      returnToOriginalView: true,
      returnTransitionTime: 1.25,
      enableZoom: true,
      zoomOptions: {
        zoomFactor: 1.8,
        minAperture: 0.15,
        maxAperture: 0.35,
        transitionStart: 0.7,
        transitionDuration: 2,
        holdDuration: 2.9
      },
      criteria: {
        heardCat: true
      },
      playOnce: true,
      priority: 100,
      onComplete: (g) => {
        g.setState({
          currentState: p.CAT_DIALOG_CHOICE
        });
      }
    },
    cat2Lookat: {
      id: "cat2Lookat",
      type: "lookat",
      description: "Look at cat2 video in POST_VIEWMASTER state",
      position: K.cat2.position,
      transitionTime: 0.75,
      returnToOriginalView: false,
      enableZoom: true,
      zoomOptions: {
        zoomFactor: 1.8,
        minAperture: 0.15,
        maxAperture: 0.35,
        transitionStart: 0.7,
        transitionDuration: 1,
        holdDuration: 1.8
      },
      criteria: {
        currentState: p.POST_VIEWMASTER
      },
      playOnce: true,
      priority: 100,
      delay: 3,
      onComplete: (g) => {
        g.setState({
          currentState: p.CAT_DIALOG_CHOICE_2
        });
      }
    },
    radioLookat: {
      id: "radioLookat",
      type: "lookat",
      description: "Look at radio when player approaches it",
      position: {
        x: L.radio.position.x,
        y: L.radio.position.y + 0.5,
        z: L.radio.position.z
      },
      transitionTime: 0.75,
      lookAtHoldDuration: 1.5,
      returnToOriginalView: true,
      returnTransitionTime: 1,
      criteria: {
        currentState: p.NEAR_RADIO
      },
      playOnce: true,
      priority: 100
    },
    shadowGlimpseLookat: {
      id: "shadowGlimpseLookat",
      type: "lookat",
      description: "Look at shadow glimpse video when player enters trigger",
      position: K.shadowGlimpse.position,
      transitionTime: 0.6,
      returnToOriginalView: false,
      enableZoom: true,
      zoomOptions: {
        zoomFactor: 1.5,
        minAperture: 0.2,
        maxAperture: 0.35,
        transitionStart: 0.6,
        transitionDuration: 1.5,
        holdDuration: 2
      },
      criteria: {
        shadowGlimpse: true
      },
      playOnce: true,
      priority: 100
    },
    phoneBoothLookat: {
      id: "phoneBoothLookat",
      type: "lookat",
      description: "Look at phone booth when it starts ringing",
      position: {
        x: L.phonebooth.position.x,
        y: 1.5,
        z: L.phonebooth.position.z
      },
      transitionTime: 1,
      enableZoom: true,
      zoomOptions: {
        zoomFactor: 2,
        minAperture: 0.2,
        maxAperture: 0.4,
        transitionStart: 0.5,
        transitionDuration: 2.5,
        holdDuration: 2
      },
      criteria: {
        currentState: {
          $in: [
            p.PHONE_BOOTH_RINGING
          ]
        }
      },
      priority: 100,
      playOnce: true,
      delay: 0.25
    },
    phoneBoothMoveTo: {
      id: "phoneBoothMoveTo",
      type: "moveTo",
      description: "Move character into phone booth when player enters trigger",
      position: {
        x: L.phonebooth.position.x,
        y: 1.2,
        z: L.phonebooth.position.z - 0.15
      },
      rotation: {
        yaw: Math.PI,
        pitch: 0
      },
      transitionTime: 1.5,
      autoHeight: true,
      inputControl: {
        disableMovement: true,
        disableRotation: false
      },
      restoreInput: false,
      criteria: {
        currentState: p.ANSWERED_PHONE
      },
      priority: 100,
      playOnce: true
    },
    carLookat: {
      id: "carLookat",
      type: "lookat",
      description: "Look at car from within phone booth",
      position: {
        x: -5.9,
        y: 0.76,
        z: 68.35
      },
      transitionTime: 1,
      enableZoom: true,
      zoomOptions: {
        zoomFactor: 2,
        minAperture: 0.2,
        maxAperture: 0.4,
        transitionStart: 0.5,
        transitionDuration: 2.5,
        holdDuration: 2
      },
      criteria: {
        currentState: p.DRIVE_BY_PREAMBLE
      },
      restoreInput: false,
      priority: 100,
      playOnce: true,
      delay: 0.3
    },
    lookAndJump: {
      id: "lookAndJump",
      type: "jsonAnimation",
      path: "/json/look-and-jump.json",
      preload: false,
      description: "Camera animation for drive-by sequence",
      criteria: {
        currentState: p.DRIVE_BY
      },
      priority: 100,
      playOnce: true,
      restoreInput: true,
      delay: 1,
      scaleY: 0.425,
      playbackRate: 1.175,
      onComplete: (g) => {
        g.setState({
          currentState: p.POST_DRIVE_BY
        });
      }
    },
    passageLookat: {
      id: "passageLookat",
      type: "lookat",
      description: "Look at passage after LeClaire tells you to",
      positions: [
        {
          x: L.phonebooth.position.x,
          y: 0.9,
          z: L.phonebooth.position.z
        },
        {
          x: 4.73,
          y: 1.29,
          z: 79.05
        }
      ],
      transitionTime: 1,
      lookAtHoldDuration: 4,
      criteria: {
        currentState: {
          $in: [
            p.POST_DRIVE_BY
          ]
        }
      },
      priority: 100,
      playOnce: true,
      delay: 0.25,
      sequenceSettings: [
        null,
        {
          enableZoom: true,
          zoomOptions: {
            zoomFactor: 1.5,
            minAperture: 0.25,
            maxAperture: 0.4,
            transitionStart: 0.5,
            transitionDuration: 2,
            holdDuration: 2
          }
        }
      ]
    },
    phonoAndPhoneLookat: {
      id: "phonoAndPhoneLookat",
      type: "lookat",
      description: "Look at passage after LeClaire tells you to",
      positions: [
        L.edison.position,
        L.candlestickPhone.position
      ],
      transitionTime: 1,
      lookAtHoldDuration: 2,
      criteria: {
        currentState: {
          $in: [
            p.OFFICE_INTERIOR
          ]
        }
      },
      priority: 100,
      playOnce: true,
      delay: 0.25
    },
    edisonColorLookat: {
      id: "edisonColorLookat",
      type: "lookat",
      description: "Look at edison phonograph during viewmaster color phase",
      position: {
        x: L.edison.position.x,
        y: L.edison.position.y + 0.75,
        z: L.edison.position.z
      },
      transitionTime: 1,
      criteria: {
        currentState: p.VIEWMASTER_DISSOLVE
      },
      priority: 100,
      playOnce: true
    },
    viewmasterMoveTo: {
      id: "viewmasterMoveTo",
      type: "moveTo",
      description: "Move character near Viewmaster and look down at it",
      position: {
        x: -5.14,
        y: 2.15,
        z: 84.66
      },
      lookat: L.viewmaster.position,
      transitionTime: 1.5,
      autoHeight: true,
      inputControl: {
        disableMovement: true,
        disableRotation: false
      },
      criteria: {
        currentState: p.PRE_VIEWMASTER
      },
      priority: 100,
      playOnce: true
    },
    candlestickPhoneLookat: {
      id: "candlestickPhoneLookat",
      type: "lookat",
      description: "Look at candlestick phone",
      position: L.candlestickPhone.position,
      transitionTime: 1,
      criteria: {
        currentState: p.PRE_EDISON
      },
      priority: 100,
      playOnce: true,
      delay: 1
    },
    candlestickPhoneLookatCzarStruggle: {
      id: "candlestickPhoneLookatCzarStruggle",
      type: "lookat",
      description: "Look at candlestick phone during Czar struggle",
      position: L.candlestickPhone.position,
      transitionTime: 1,
      criteria: {
        currentState: p.CZAR_STRUGGLE
      },
      priority: 100,
      playOnce: true
    },
    edisonMoveTo: {
      id: "edisonMoveTo",
      type: "moveTo",
      description: "Move character near Edison phonograph and look at it",
      position: {
        x: -5.14,
        y: 2.15,
        z: 84.66
      },
      lookat: L.edison.position,
      transitionTime: 1.5,
      autoHeight: true,
      inputControl: {
        disableMovement: true,
        disableRotation: false
      },
      criteria: {
        currentState: p.EDISON
      },
      priority: 100,
      playOnce: true
    },
    shoulderTap: {
      id: "shoulderTap",
      type: "lookat",
      position: (g) => {
        const e = typeof K.punch.position == "function" ? K.punch.position(g) : K.punch.position;
        return {
          x: e.x,
          y: e.y - 0.3,
          z: e.z
        };
      },
      transitionTime: 0.75,
      criteria: {
        currentState: p.SHOULDER_TAP
      },
      priority: 100,
      playOnce: true,
      onComplete: (g) => {
        g.setState({
          currentState: p.PUNCH_OUT
        });
      }
    },
    punchOut: {
      id: "punchOut",
      type: "jsonAnimation",
      path: "/json/punchout.json",
      preload: false,
      description: "Camera animation for punch-out sequence",
      criteria: {
        currentState: {
          $gte: p.PUNCH_OUT,
          $lt: p.LIGHTS_OUT
        }
      },
      priority: 100,
      playOnce: true,
      restoreInput: false,
      delay: 0.1,
      scaleY: 0.4,
      onComplete: (g) => {
        g.setState({
          currentState: p.FALLEN
        });
      }
    },
    punchWhiteout: {
      id: "punchWhiteout",
      type: "fade",
      description: "Whiteout effect when punch impacts",
      color: {
        r: 1,
        g: 1,
        b: 1
      },
      fadeInTime: 0.05,
      holdTime: 0.01,
      fadeOutTime: 1.5,
      maxOpacity: 0.8,
      criteria: {
        currentState: p.PUNCH_OUT
      },
      priority: 100,
      playOnce: true,
      delay: 0.05
    },
    fallenBlackout: {
      id: "fallenBlackout",
      type: "fade",
      description: "Fade to black after falling, persists through FALLEN and LIGHTS_OUT states",
      color: {
        r: 0,
        g: 0,
        b: 0
      },
      fadeInTime: 3,
      holdTime: 0,
      fadeOutTime: 0,
      maxOpacity: 1,
      persistWhileCriteria: true,
      criteria: {
        currentState: {
          $in: [
            p.FALLEN,
            p.LIGHTS_OUT
          ]
        }
      },
      priority: 100,
      playOnce: true,
      delay: 1.5,
      onFadeInComplete: (g) => {
        g.setState({
          currentState: p.LIGHTS_OUT
        }), g.characterController && g.characterController.resetToUpright();
      }
    },
    lightsOutMoveTo: {
      id: "lightsOutMoveTo",
      type: "moveTo",
      description: "Move player to consistent position/rotation during blackout (unseen behind fade)",
      position: {
        x: -5.14,
        y: 2.05,
        z: 83.66
      },
      rotation: {
        yaw: 0,
        pitch: 0
      },
      transitionTime: 0.1,
      autoHeight: false,
      inputControl: {
        disableMovement: true,
        disableRotation: true
      },
      restoreInput: false,
      criteria: {
        currentState: p.LIGHTS_OUT
      },
      priority: 100,
      playOnce: true,
      delay: 0.5
    },
    wakingUpFadeIn: {
      id: "wakingUpFadeIn",
      type: "fade",
      description: "Fade from black back to vision when waking up",
      color: {
        r: 0,
        g: 0,
        b: 0
      },
      fadeInTime: 0,
      holdTime: 0,
      fadeOutTime: 8,
      maxOpacity: 1,
      startFrom: "current",
      criteria: {
        currentState: p.WAKING_UP
      },
      priority: 100,
      playOnce: true
    },
    wakingUp: {
      id: "wakingUp",
      type: "jsonAnimation",
      path: "/json/waking-up.json",
      preload: false,
      description: "Passing out animation blending with player movement during wake up",
      criteria: {
        currentState: p.WAKING_UP
      },
      priority: 90,
      playOnce: true,
      blendWithPlayer: true,
      blendAmount: 0.25,
      restoreInput: {
        movement: false,
        rotation: true
      },
      playNext: "leclaireLookat",
      duration: 6
    },
    leclaireLookat: {
      id: "leclaireLookat",
      type: "lookat",
      description: "Look at LeClaire",
      position: K.hesTiedUsUp.position,
      transitionTime: 1,
      priority: 110,
      playNext: "shadowUnkindLookat",
      enableZoom: true,
      lookAtHoldDuration: 1.5,
      zoomOptions: {
        zoomFactor: 2,
        transitionStart: 0.6,
        transitionDuration: 1.5,
        holdDuration: 1.5
      }
    },
    shadowUnkindLookat: {
      id: "shadowUnkindLookat",
      type: "lookat",
      description: "Look at shadow unkind video",
      position: K.soUnkind.position,
      transitionTime: 1,
      priority: 100,
      playOnce: true,
      enableZoom: true,
      restoreInput: {
        movement: false,
        rotation: true
      },
      zoomOptions: {
        zoomFactor: 2,
        minAperture: 0.2,
        maxAperture: 0.35,
        transitionStart: 0.6,
        transitionDuration: 1.5,
        holdDuration: 6
      }
    },
    shadowAmplificationsLookat: {
      id: "shadowAmplificationsLookat",
      type: "lookat",
      description: "Look at shadowAmplifications video when it appears",
      position: K.shadowAmplifications.position,
      transitionTime: 1,
      priority: 100,
      playOnce: false,
      fireOnEvent: "video:play:shadowAmplifications",
      enableZoom: true,
      restoreInput: {
        movement: false,
        rotation: true
      },
      zoomOptions: {
        zoomFactor: 2,
        minAperture: 0.2,
        maxAperture: 0.35,
        transitionStart: 0.6,
        transitionDuration: 1.5,
        holdDuration: 7
      }
    },
    amplifierLookat: {
      id: "amplifierLookat",
      type: "lookat",
      description: "Look at amplifier, quick glance to shadow, then back to amplifier",
      positions: [
        L.amplifier.position,
        K.shadowAmplifications.position,
        L.amplifier.position
      ],
      transitionTime: 1,
      lookAtHoldDuration: 2,
      returnToOriginalView: false,
      priority: 100,
      playOnce: false,
      fireOnEvent: "shadow:amplifications",
      enableZoom: true,
      restoreInput: {
        movement: false,
        rotation: true
      },
      zoomOptions: {
        zoomFactor: 1.5,
        minAperture: 0.2,
        maxAperture: 0.35,
        transitionStart: 0.6,
        transitionDuration: 0.75,
        holdDuration: 1.5
      },
      sequenceSettings: [
        null,
        {
          transitionTime: 1,
          lookAtHoldDuration: 4.5,
          zoomOptions: {
            zoomFactor: 2,
            minAperture: 0.2,
            maxAperture: 0.35,
            transitionStart: 0.6,
            transitionDuration: 1.5,
            holdDuration: 4.5
          }
        },
        {
          transitionTime: 1,
          lookAtHoldDuration: 1,
          enableZoom: false
        }
      ]
    },
    cursorHesTiedUsUpLookat: {
      id: "cursorHesTiedUsUpLookat",
      type: "lookat",
      description: "Look at hesTiedUsUp video position when entering CURSOR state",
      position: K.hesTiedUsUp.position,
      transitionTime: 1,
      lookAtHoldDuration: 2,
      criteria: {
        currentState: p.CURSOR
      },
      priority: 100,
      playOnce: true
    },
    woozy: {
      id: "woozy",
      type: "jsonAnimation",
      path: "/json/woozy.json",
      preload: false,
      description: "Woozy camera animation blending with player movement during viewmaster overheat",
      criteria: {
        currentState: {
          $in: [
            p.CURSOR,
            p.CURSOR_FINAL
          ]
        },
        viewmasterInsanityIntensity: {
          $gte: 0.1
        }
      },
      priority: 95,
      playOnce: false,
      restoreInput: true,
      blendWithPlayer: true,
      blendAmount: 0.8,
      playbackPercentage: 0.5
    },
    catChewLookat: {
      id: "catChewLookat",
      type: "lookat",
      description: "Look at cat chew video when headset comes off after glitch",
      position: K.catChew.position,
      transitionTime: 1,
      returnToOriginalView: false,
      enableZoom: true,
      restoreInput: {
        movement: false,
        rotation: true
      },
      zoomOptions: {
        zoomFactor: 2,
        minAperture: 0.15,
        maxAperture: 0.35,
        transitionStart: 0.6,
        transitionDuration: 1.5,
        holdDuration: 3
      },
      criteria: {
        currentState: p.CAT_SAVE
      },
      playOnce: true,
      priority: 100
    }
  };
  function zs(g, e = /* @__PURE__ */ new Set()) {
    const t = Object.values(qt).sort((s, o) => (o.priority || 0) - (s.priority || 0));
    mt.log(`Checking ${t.length} animations for state:`, g);
    const i = [];
    for (const s of t) {
      if (!s.criteria) {
        mt.log(`Animation '${s.id}' has no criteria, skipping`);
        continue;
      }
      const o = X(g, s.criteria);
      if (mt.log(`Animation '${s.id}' criteria:`, s.criteria, "matches:", o), o) {
        if (s.playOnce && e.has(s.id)) {
          mt.log(`Animation '${s.id}' matches but already played (playOnce), skipping...`);
          continue;
        }
        i.push(s);
      }
    }
    return mt.log(`Found ${i.length} matching animation(s)`), i;
  }
  const ta = Object.freeze(Object.defineProperty({
    __proto__: null,
    cameraAnimations: qt,
    default: qt,
    getCameraAnimationsForState: zs
  }, Symbol.toStringTag, {
    value: "Module"
  })), _e = {
    viewmasterPeering: {
      id: "viewmasterPeering",
      type: "objectAnimation",
      description: "Animate viewmaster up to player's face for first-person viewing",
      targetObjectId: "viewmaster",
      duration: 3,
      properties: {
        position: {
          to: [
            {
              x: 0,
              y: 0,
              z: -0.4
            },
            {
              x: 0,
              y: 0,
              z: -0.2
            },
            {
              x: 0,
              y: 0,
              z: 0.1
            }
          ]
        },
        rotation: {
          to: [
            {
              x: 0,
              y: 0,
              z: 0
            },
            {
              x: 0,
              y: 0,
              z: 0
            }
          ]
        }
      },
      reparentToCamera: true,
      easing: "easeInOutQuad",
      criteria: {
        currentState: p.VIEWMASTER
      },
      priority: 100,
      playOnce: true
    },
    viewmasterToggleOn: {
      id: "viewmasterToggleOn",
      type: "objectAnimation",
      description: "Equip viewmaster during free-toggle phase",
      targetObjectId: "viewmaster",
      duration: 1.6,
      properties: {
        position: {
          to: [
            {
              x: 0,
              y: 0,
              z: -0.4
            },
            {
              x: 0,
              y: 0,
              z: -0.2
            },
            {
              x: 0,
              y: 0,
              z: 0.1
            }
          ]
        },
        rotation: {
          to: [
            {
              x: 0,
              y: 0,
              z: 0
            },
            {
              x: 0,
              y: 0,
              z: 0
            }
          ]
        }
      },
      easing: "easeInOutQuad",
      reparentToCamera: true,
      priority: 80,
      playOnce: false
    },
    viewmasterToggleOff: {
      id: "viewmasterToggleOff",
      type: "objectAnimation",
      description: "Stow viewmaster just out of view when toggled off",
      targetObjectId: "viewmaster",
      duration: 1.4,
      properties: {
        position: {
          to: [
            {
              x: 0,
              y: 0,
              z: -0.2
            },
            {
              x: 0,
              y: 0.5,
              z: -0.2
            },
            {
              x: 0,
              y: 1,
              z: 0
            }
          ]
        }
      },
      easing: "easeInOutQuad",
      reparentToCamera: true,
      priority: 80,
      playOnce: false
    },
    viewmasterPutDown: {
      id: "viewmasterPutDown",
      type: "objectAnimation",
      description: "Remove viewmaster from face with upward movement, synced with vertical wipe effects",
      targetObjectId: "viewmaster",
      duration: 4,
      properties: {
        position: {
          to: [
            {
              x: 0,
              y: 0,
              z: -0.2
            },
            {
              x: 0,
              y: 0.5,
              z: -0.2
            },
            {
              x: 0,
              y: 1,
              z: 0
            }
          ]
        }
      },
      easing: "easeInOutQuad",
      criteria: {
        currentState: p.POST_VIEWMASTER
      },
      priority: 100,
      playOnce: true
    },
    viewmasterLightsOutPosition: {
      id: "viewmasterLightsOutPosition",
      type: "objectAnimation",
      description: "Position viewmaster 3m in front of player during LIGHTS_OUT and WAKING_UP (unseen behind blackout fade, then correct when fade clears)",
      targetObjectId: "viewmaster",
      duration: 0.01,
      properties: {
        position: {
          to: {
            x: -3.31,
            y: 0.85,
            z: 81.3
          }
        },
        rotation: {
          to: {
            x: 0.6079,
            y: -0.5014,
            z: 0.2916
          }
        }
      },
      easing: "easeInOutQuad",
      criteria: {
        currentState: {
          $in: [
            p.LIGHTS_OUT,
            p.WAKING_UP,
            p.SHADOW_AMPLIFICATIONS
          ]
        }
      },
      priority: 100,
      playOnce: true
    },
    doorsOpenLeft: {
      id: "doorsOpenLeft",
      type: "objectAnimation",
      description: "Open left door by rotating 120 degrees on Y axis",
      targetObjectId: "doors",
      childMeshName: "Big_Door_L",
      duration: 3,
      properties: {
        rotation: {
          to: {
            y: Math.PI * 2 / 3
          }
        }
      },
      easing: "easeInOutQuad",
      criteria: {
        currentState: p.POST_DRIVE_BY
      },
      priority: 50,
      playOnce: true,
      delay: 6.25
    },
    doorsOpenRight: {
      id: "doorsOpenRight",
      type: "objectAnimation",
      description: "Open right door by rotating 120 degrees on Y axis",
      targetObjectId: "doors",
      childMeshName: "Big_Door_R",
      duration: 3,
      properties: {
        rotation: {
          to: {
            y: Math.PI * 2 / 3
          }
        }
      },
      easing: "easeInOutQuad",
      criteria: {
        currentState: p.POST_DRIVE_BY
      },
      priority: 50,
      playOnce: true,
      delay: 6.25
    },
    doorsCloseLeft: {
      id: "doorsCloseLeft",
      type: "objectAnimation",
      description: "Close left door by rotating back to 0 degrees on Y axis",
      targetObjectId: "doors",
      childMeshName: "Big_Door_L",
      duration: 3,
      properties: {
        rotation: {
          to: {
            y: 0
          }
        }
      },
      easing: "easeInOutQuad",
      criteria: {
        currentState: p.ENTERING_OFFICE
      },
      priority: 50,
      playOnce: true
    },
    doorsCloseRight: {
      id: "doorsCloseRight",
      type: "objectAnimation",
      description: "Close right door by rotating back to 0 degrees on Y axis",
      targetObjectId: "doors",
      childMeshName: "Big_Door_R",
      duration: 3,
      properties: {
        rotation: {
          to: {
            y: 0
          }
        }
      },
      easing: "easeInOutQuad",
      criteria: {
        currentState: p.ENTERING_OFFICE
      },
      priority: 50,
      playOnce: true
    }
  }, ia = Object.freeze(Object.defineProperty({
    __proto__: null,
    objectAnimations: _e
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  let sa = _e;
  class oa {
    constructor(e, t, i, s = {}) {
      this.logger = new N("AnimationManager", false), this.camera = e, this.characterController = t, this.gameManager = i, this.loadingScreen = s.loadingScreen || null, this.physicsManager = s.physicsManager || null, this.sceneManager = s.sceneManager || null, this.isPlaying = false, this.currentAnimation = null, this.currentAnimationData = null, this.elapsed = 0, this.frameIdx = 1, this.onComplete = null, this.scaleY = 0.8, this.playbackRate = 1, this.playbackPercentage = 1, this.blendWithPlayer = false, this.blendAmount = 0.5, this.blendedAnimQuat = new I(), this.blendedAnimPos = new S(), this.playerQuat = new I(), this.playerPos = new S(), this.isPreSlerping = false, this.preSlerpStartQuat = new I(), this.preSlerpTargetQuat = new I(), this.preSlerpElapsed = 0, this.preSlerpDuration = 0.3, this.deferredAnimations = /* @__PURE__ */ new Map(), this.baseQuat = new I(), this.basePos = new S(), this._interpDelta = new I(), this._interpPos = new S(), this._rotatedPos = new S(), this.animations = /* @__PURE__ */ new Map(), this.cameraAnimationsData = null, this.objectAnimationsData = sa, this.playedAnimations = /* @__PURE__ */ new Set(), this.lastState = null, this.pendingAnimations = /* @__PURE__ */ new Map(), this.pendingInputRestore = null, this.activeSequence = null, this.activeObjectAnimations = /* @__PURE__ */ new Map(), this.isSettlingUp = false, this.settleStartY = 0, this.settleTargetY = 0, this.settleElapsed = 0, this.settleDuration = 0.3, this._pendingComplete = null, this._pendingAnimData = null, this.minCharacterCenterY = 0.9, this.isFading = false, this.fadeElapsed = 0, this.fadeData = null, this.fadeAnimData = null, this.fadeCube = null, this.fadeOnComplete = null, this.fadeInputControl = null, this.fadeRestoreInput = true, this.logger.log("AnimationManager constructed (call initialize() to set up event listeners)");
    }
    initialize() {
      if (!this.gameManager) {
        this.logger.warn("Cannot initialize, no gameManager");
        return;
      }
      this.gameManager.on("state:changed", (e, t) => {
        this.logger.log(`[AnimationManager] state:changed event - oldState.currentState: ${t.currentState}, newState.currentState: ${e.currentState}`), this.onStateChanged(e, t);
      }), this.gameManager.on("camera:animation", async (e) => {
        const { animation: t, onComplete: i } = e;
        if (this.logger.log(`AnimationManager: Playing animation: ${t}`), !this.getAnimationNames().includes(t) && !await this.loadAnimation(t, t)) {
          this.logger.warn(`Failed to load animation: ${t}`), i && i(false);
          return;
        }
        this.play(t, () => {
          this.debug && this.logger.log(`Animation complete: ${t}`), i && i(true);
        });
      }), requestAnimationFrame(() => {
        const e = this.gameManager.getState();
        this.logger.log("[AnimationManager] Checking initial state for animations:", e), this.onStateChanged(e, {});
      }), this.logger.log("AnimationManager initialized with event listeners");
    }
    async loadAnimationsFromData(e) {
      this.cameraAnimationsData = e;
      let t = null;
      const i = /* @__PURE__ */ new Set(), { isDebugSpawnActive: s, getDebugSpawnState: o } = await q(async () => {
        const { isDebugSpawnActive: d, getDebugSpawnState: u } = await Promise.resolve().then(() => Pt);
        return {
          isDebugSpawnActive: d,
          getDebugSpawnState: u
        };
      }, void 0);
      s() && (t = o(), t && (Object.values(e).forEach((d) => {
        d.criteria && X(t, d.criteria) && i.add(d.id);
      }), i.size > 0 && this.logger.log(`[Debug] Forcing preload for ${i.size} matching animations (state: ${t.currentState}): ${Array.from(i).join(", ")}`)));
      const n = Object.values(e), r = n.filter((d) => (d.type === "jsonAnimation" || d.type === "animation") && d.path), a = [], l = [];
      for (const d of r) (i.has(d.id) ? true : d.preload === true) ? a.push(d) : (l.push(d), this.deferredAnimations.set(d.id, d), this.logger.log(`AnimationManager: Deferred loading for animation "${d.id}"`));
      const h = a.map((d) => this.loadAnimation(d.id, d.path, true));
      await Promise.all(h);
      const c = n.length - r.length;
      this.debug && this.logger.log(`Loaded ${a.length} JSON animations from data (${l.length} deferred, ${c} lookats/moveTos)`), this._registerEventListeners(n);
    }
    _registerEventListeners(e) {
      if (!this.gameManager) {
        this.logger.warn("Cannot register event listeners, no gameManager");
        return;
      }
      for (const t of e) if (t.fireOnEvent) {
        const i = t.fireOnEvent;
        this.logger.log(`Registering event listener for animation "${t.id}" on event "${i}"`);
        const s = (o) => {
          if (t.playOnce && this.playedAnimations.has(t.id)) {
            this.logger.log(`Animation "${t.id}" already played (playOnce), skipping event "${i}"`);
            return;
          }
          if (this.isPlaying && this.currentAnimationData && this.currentAnimationData.id === t.id) {
            this.logger.log(`Animation "${t.id}" is already playing, skipping event "${i}"`);
            return;
          }
          this.logger.log(`Event "${i}" fired, playing animation "${t.id}"`), this.playFromData(t);
        };
        this.gameManager.on(i, s);
      }
    }
    async loadDeferredAnimations() {
      var _a3;
      const e = ((_a3 = this.gameManager) == null ? void 0 : _a3.getState()) || {}, { couldCriteriaStillMatch: t } = await q(async () => {
        const { couldCriteriaStillMatch: o } = await import("./index-XYoOAQ19.js").then(async (m) => {
          await m.__tla;
          return m;
        }).then((n) => n.bc);
        return {
          couldCriteriaStillMatch: o
        };
      }, []), i = [];
      for (const [o, n] of this.deferredAnimations) {
        if (n.fireOnEvent) {
          i.push([
            o,
            n
          ]);
          continue;
        }
        if (n.criteria) {
          if (typeof n.criteria.currentState == "number") {
            i.push([
              o,
              n
            ]);
            continue;
          }
          if (!t(e, n.criteria)) {
            this.logger.log(`Skipping deferred animation "${o}" - criteria have already passed (currentState: ${e.currentState})`);
            continue;
          }
        }
        i.push([
          o,
          n
        ]);
      }
      if (i.length === 0) {
        this.deferredAnimations.clear();
        return;
      }
      this.debug && this.logger.log(`Loading ${i.length} deferred animations`);
      const s = [];
      for (const [o, n] of i) s.push(this.loadAnimation(o, n.path, false));
      await Promise.all(s), this.deferredAnimations.clear();
    }
    onStateChanged(e, t = {}) {
      if (!Object.keys(e).some((a) => e[a] !== t[a])) {
        this.logger.log("[AnimationManager] No state changes detected, skipping animation check");
        return;
      }
      const s = Object.keys(e).filter((a) => e[a] !== t[a]);
      this.logger.log(`[AnimationManager] State changed (${s.join(", ")}), checking for animations...`);
      const o = zs(e, this.playedAnimations), n = Object.values(_e).filter((a) => {
        if (!a.criteria) return false;
        const l = X(e, a.criteria);
        return l && a.playOnce && this.playedAnimations.has(a.id) || l && this.activeObjectAnimations.has(a.id) ? false : l;
      }).sort((a, l) => (l.priority || 0) - (a.priority || 0)), r = [
        ...o,
        ...n
      ];
      if (!r || r.length === 0) {
        this.logger.log("AnimationManager: No animations match current state");
        return;
      }
      this.debug && this.logger.log(`Found ${r.length} animation(s) for state:`, r.map((a) => a.id));
      for (const a of r) {
        if (!(a.type === "fade") && (this.isPlaying || this.isPreSlerping)) {
          this.logger.log(`AnimationManager: Animation already playing or pre-slerping, skipping non-fade animation '${a.id}'`);
          continue;
        }
        const h = a.delay || 0;
        h > 0 ? this.scheduleDelayedAnimation(a, h) : (this.logger.log(`AnimationManager: State changed, playing '${a.id}'`), this.playFromData(a));
      }
    }
    scheduleDelayedAnimation(e, t) {
      this.debug && this.logger.log(`Scheduling animation "${e.id}" with ${t}s delay`), this.pendingAnimations.set(e.id, {
        animData: e,
        timer: 0,
        delay: t
      });
    }
    cancelDelayedAnimation(e) {
      this.pendingAnimations.has(e) && (this.logger.log(`AnimationManager: Cancelled delayed animation "${e}"`), this.pendingAnimations.delete(e));
    }
    cancelAllDelayedAnimations() {
      this.pendingAnimations.size > 0 && (this.logger.log(`AnimationManager: Cancelling ${this.pendingAnimations.size} pending animation(s)`), this.pendingAnimations.clear());
    }
    isAnimationPending(e) {
      return this.pendingAnimations.has(e);
    }
    hasAnimationsPending() {
      return this.pendingAnimations.size > 0;
    }
    async resolveAnimationById(e) {
      if (this.cameraAnimationsData && this.cameraAnimationsData[e]) return this.cameraAnimationsData[e];
      if (this.objectAnimationsData && this.objectAnimationsData[e]) return this.objectAnimationsData[e];
      try {
        const { cameraAnimations: t } = await q(async () => {
          const { cameraAnimations: i } = await Promise.resolve().then(() => ta);
          return {
            cameraAnimations: i
          };
        }, void 0);
        if (t[e]) return t[e];
      } catch {
      }
      try {
        const { objectAnimations: t } = await q(async () => {
          const { objectAnimations: i } = await Promise.resolve().then(() => ia);
          return {
            objectAnimations: i
          };
        }, void 0);
        if (t[e]) return t[e];
      } catch {
      }
      return null;
    }
    async _handlePlayNext(e) {
      if (!e || !e.playNext) return;
      this.logger.log(`Chaining to next animation from "${e.id}"`);
      let t;
      if (typeof e.playNext == "string" ? t = await this.resolveAnimationById(e.playNext) : t = e.playNext, t) {
        t.playOnce && (this.playedAnimations.add(t.id), this.logger.log(`Marked chained animation "${t.id}" as played`));
        const i = t.delay || 0;
        i > 0 ? (this.logger.log(`Chaining to "${t.id}" with ${i}s delay`), this.scheduleDelayedAnimation(t, i)) : this.playFromData(t);
      } else this.logger.warn(`playNext animation not found for "${e.id}": ${e.playNext}`);
    }
    playFromData(e) {
      return e.type === "fade" ? (this.playFade(e), true) : e.type === "lookat" ? (this.playLookat(e), true) : e.type === "moveTo" ? (this.playMoveTo(e), true) : e.type === "objectAnimation" ? (this.playObjectAnimation(e), true) : e.type === "jsonAnimation" || e.type === "animation" ? this.play(e.id, async () => {
        e.playOnce && this.playedAnimations.add(e.id), e.onComplete && e.onComplete(this.gameManager), await this._handlePlayNext(e);
      }, e) : (this.logger.warn(`Unknown animation type "${e.type}"`), false);
    }
    _getOrCreateFadeCube() {
      if (!this.fadeCube) {
        const e = new oe(0.5, 0.5, 0.5), t = new le({
          color: 16777215,
          transparent: true,
          opacity: 0,
          side: Do,
          depthTest: false,
          depthWrite: false
        });
        this.fadeCube = new k(e, t), this.fadeCube.renderOrder = 9999, this.camera.add(this.fadeCube), this.fadeCube.position.set(0, 0, -0.25);
      }
      return this.fadeCube;
    }
    playFade(e) {
      if (this.debug && this.logger.log(`Playing fade '${e.id}'`), e.playOnce && this.playedAnimations.add(e.id), this.fadeAnimData = e, this.fadeInputControl = e.inputControl || null, this.fadeRestoreInput = e.restoreInput !== void 0 ? e.restoreInput : true, this.characterController && this.fadeInputControl) {
        const o = this.fadeInputControl;
        o.disableMovement && o.disableRotation ? (this.characterController.inputDisabled = true, this.characterController.inputManager.disable(), this.debug && this.logger.log(`Fade '${e.id}': Disabled all input (movement + rotation)`)) : o.disableMovement ? (this.characterController.inputManager.disableMovement(), this.debug && this.logger.log(`Fade '${e.id}': Disabled movement input only`)) : o.disableRotation && (this.characterController.inputManager.disableRotation(), this.debug && this.logger.log(`Fade '${e.id}': Disabled rotation input only`));
      }
      const t = this._getOrCreateFadeCube();
      let i = 0;
      e.startFrom !== void 0 ? e.startFrom === "current" ? i = t.material.opacity : i = e.startFrom : e.fadeInTime === 0 ? i = e.maxOpacity !== void 0 ? e.maxOpacity : 1 : i = 0, this.isFading = true, this.fadeElapsed = 0, this.fadeData = {
        color: e.color || {
          r: 1,
          g: 1,
          b: 1
        },
        fadeInTime: e.fadeInTime || 0.1,
        holdTime: e.holdTime || 0,
        fadeOutTime: e.fadeOutTime || 1,
        maxOpacity: e.maxOpacity !== void 0 ? e.maxOpacity : 1,
        persistWhileCriteria: e.persistWhileCriteria || false,
        criteria: e.criteria || null,
        startOpacity: i
      }, this.fadeOnComplete = e.onComplete || null, this.fadeOnFadeInComplete = e.onFadeInComplete || null, this.fadeInCompleteTriggered = false;
      const s = this.fadeData.color;
      t.material.color.setRGB(s.r, s.g, s.b), t.material.opacity = i, this.debug && this.logger.log(`Fade '${e.id}' - in:${this.fadeData.fadeInTime}s hold:${this.fadeData.holdTime}s out:${this.fadeData.fadeOutTime}s`);
    }
    playLookat(e) {
      this.debug && this.logger.log(`Playing lookat '${e.id}'`), e.playOnce && this.playedAnimations.add(e.id);
      const t = {
        ...e
      };
      if (typeof e.position == "function" && (t.position = e.position(this.gameManager), this.debug && this.logger.log(`Resolved lookat position for '${e.id}':`, t.position)), Array.isArray(t.positions)) {
        this.activeSequence = {
          animData: t,
          currentIndex: 0,
          isWaitingForNext: false
        }, this._playLookatAtIndex(t, 0);
        return;
      }
      this._playSingleLookat(t);
    }
    _playSingleLookat(e) {
      var _a3;
      const t = e.transitionTime || e.duration || 2, i = e.returnTransitionTime || e.returnDuration || t, s = e.lookAtHoldDuration || 0;
      this.characterController && (this.characterController.inputDisabled = true, this.characterController.inputManager.disable(), this.debug && this.logger.log(`Lookat '${e.id}': Disabled all input (movement + rotation)`));
      const o = e.restoreInput !== void 0 ? e.restoreInput : true, n = this._normalizeRestoreInput(o), r = n.movement || n.rotation, a = r && e.enableZoom && e.zoomOptions, l = e.playNext && !e.returnToOriginalView && (s > 0 || e.enableZoom && e.zoomOptions && e.zoomOptions.holdDuration > 0), h = l ? s + (e.enableZoom && e.zoomOptions && e.zoomOptions.holdDuration ? e.zoomOptions.holdDuration : 0) : 0, c = e.onComplete;
      let d = null;
      if (a) {
        const u = ((_a3 = e.zoomOptions) == null ? void 0 : _a3.transitionDuration) || 0;
        let m;
        e.returnToOriginalView ? (m = i, this.logger.log(`AnimationManager: Lookat '${e.id}' has zoom with return. Will restore control ${m.toFixed(2)}s after lookat completes (return transition: ${i}s)`)) : (m = u, this.logger.log(`AnimationManager: Lookat '${e.id}' has zoom without return. Will restore control ${m.toFixed(2)}s after lookat completes (zoom-out: ${u}s)`)), d = async () => {
          this.pendingInputRestore = {
            timer: 0,
            delay: m,
            restoreInputConfig: o
          }, c && c(this.gameManager), l && h > 0 ? (this.logger.log(`Lookat '${e.id}': Delaying playNext by ${h.toFixed(2)}s (lookAtHoldDuration: ${s}s${e.enableZoom && e.zoomOptions && e.zoomOptions.holdDuration ? ` + zoom holdDuration: ${e.zoomOptions.holdDuration}s` : ""})`), setTimeout(async () => {
            await this._handlePlayNext(e);
          }, h * 1e3)) : await this._handlePlayNext(e);
        };
      } else r ? d = async () => {
        this.characterController && (this._restoreInputControls(o), this.debug && this.logger.log(`Lookat '${e.id}' complete, input restored`)), c && c(this.gameManager), l && h > 0 ? (this.logger.log(`Lookat '${e.id}': Delaying playNext by ${h.toFixed(2)}s (lookAtHoldDuration: ${s}s${e.enableZoom && e.zoomOptions && e.zoomOptions.holdDuration ? ` + zoom holdDuration: ${e.zoomOptions.holdDuration}s` : ""})`), setTimeout(async () => {
          await this._handlePlayNext(e);
        }, h * 1e3)) : await this._handlePlayNext(e);
      } : d = async () => {
        this.logger.log(`AnimationManager: Lookat '${e.id}' complete, input NOT restored (manual restoration required)`), c && c(this.gameManager), l && h > 0 ? (this.logger.log(`Lookat '${e.id}': Delaying playNext by ${h.toFixed(2)}s (lookAtHoldDuration: ${s}s${e.enableZoom && e.zoomOptions && e.zoomOptions.holdDuration ? ` + zoom holdDuration: ${e.zoomOptions.holdDuration}s` : ""})`), setTimeout(async () => {
          await this._handlePlayNext(e);
        }, h * 1e3)) : await this._handlePlayNext(e);
      };
      this.gameManager ? this.gameManager.emit("camera:lookat", {
        position: e.position,
        duration: t,
        holdDuration: s,
        onComplete: d,
        returnToOriginalView: e.returnToOriginalView || false,
        returnDuration: i,
        enableZoom: e.enableZoom || false,
        zoomOptions: e.zoomOptions || {},
        colliderId: `camera-data-${e.id}`,
        disableInput: true
      }) : this.logger.warn(`Cannot play lookat '${e.id}', no gameManager`);
    }
    _playLookatAtIndex(e, t) {
      var _a3;
      if (!Array.isArray(e.positions) || t >= e.positions.length) {
        this.logger.warn(`Invalid sequence index ${t} for '${e.id}'`);
        return;
      }
      const i = e.positions[t], s = ((_a3 = e.sequenceSettings) == null ? void 0 : _a3[t]) || {}, o = s.transitionTime ?? e.transitionTime ?? 2, n = s.lookAtHoldDuration ?? e.lookAtHoldDuration ?? 0, r = s.enableZoom ?? e.enableZoom ?? false;
      let a = null;
      r && (a = {
        ...e.zoomOptions || {},
        ...s.zoomOptions || {}
      });
      const l = t === e.positions.length - 1, h = e.loop ?? false, c = l && !h && (e.returnToOriginalView ?? false), d = e.returnTransitionTime ?? o;
      t === 0 && this.characterController && (this.characterController.inputDisabled = true, this.characterController.inputManager.disable(), this.debug && this.logger.log(`Lookat '${e.id}': Disabled all input (movement + rotation)`));
      const u = l && !h && (e.restoreInput !== void 0 ? e.restoreInput : true), m = this._normalizeRestoreInput(u), f = m.movement || m.rotation, x = f && r && a, w = e.playNext && !c && (n > 0 || r && a && a.holdDuration > 0), y = w ? n + (r && a && a.holdDuration ? a.holdDuration : 0) : 0, v = l && !h ? e.onComplete : null, b = () => {
        if (!l || h) {
          const M = n || 0;
          M > 0 ? (this.logger.log(`AnimationManager: Waiting ${M.toFixed(2)}s before next position in sequence`), setTimeout(() => {
            this._onSequencePositionComplete(e, t);
          }, M * 1e3)) : this._onSequencePositionComplete(e, t);
        } else this._onSequencePositionComplete(e, t);
      };
      let T = null;
      if (x) {
        const M = (a == null ? void 0 : a.transitionDuration) || 0;
        let C;
        c ? (C = d, this.logger.log(`AnimationManager: Lookat '${e.id}' [${t}] has zoom with return. Will restore control ${C.toFixed(2)}s after lookat completes`)) : (C = M, this.logger.log(`AnimationManager: Lookat '${e.id}' [${t}] has zoom without return. Will restore control ${C.toFixed(2)}s after lookat completes`)), T = async () => {
          this.pendingInputRestore = {
            timer: 0,
            delay: C,
            restoreInputConfig: u
          }, v && v(this.gameManager), l && !h && (w && y > 0 ? (this.logger.log(`Lookat '${e.id}' [${t}]: Delaying playNext by ${y.toFixed(2)}s (lookAtHoldDuration: ${n}s${r && a && a.holdDuration ? ` + zoom holdDuration: ${a.holdDuration}s` : ""})`), setTimeout(async () => {
            await this._handlePlayNext(e);
          }, y * 1e3)) : await this._handlePlayNext(e)), b();
        };
      } else f ? T = async () => {
        this.characterController && (this._restoreInputControls(u), this.debug && this.logger.log(`Lookat '${e.id}' [${t}] complete, input restored`)), v && v(this.gameManager), l && !h && (w && y > 0 ? (this.logger.log(`Lookat '${e.id}' [${t}]: Delaying playNext by ${y.toFixed(2)}s (lookAtHoldDuration: ${n}s${r && a && a.holdDuration ? ` + zoom holdDuration: ${a.holdDuration}s` : ""})`), setTimeout(async () => {
          await this._handlePlayNext(e);
        }, y * 1e3)) : await this._handlePlayNext(e)), b();
      } : T = async () => {
        l && !h && this.logger.log(`AnimationManager: Lookat '${e.id}' complete, input NOT restored (manual restoration required)`), v && v(this.gameManager), l && !h && (w && y > 0 ? (this.logger.log(`Lookat '${e.id}' [${t}]: Delaying playNext by ${y.toFixed(2)}s (lookAtHoldDuration: ${n}s${r && a && a.holdDuration ? ` + zoom holdDuration: ${a.holdDuration}s` : ""})`), setTimeout(async () => {
          await this._handlePlayNext(e);
        }, y * 1e3)) : await this._handlePlayNext(e)), b();
      };
      this.logger.log(`Playing lookat sequence '${e.id}' position ${t + 1}/${e.positions.length}`, `transition: ${o}s, hold: ${n}s, return: ${c}`, i), this.gameManager ? this.gameManager.emit("camera:lookat", {
        position: i,
        duration: o,
        holdDuration: n,
        onComplete: T,
        returnToOriginalView: c,
        returnDuration: d,
        enableZoom: r,
        zoomOptions: a || {},
        colliderId: `camera-data-${e.id}-${t}`,
        disableInput: true
      }) : this.logger.warn(`Cannot play lookat '${e.id}', no gameManager`);
    }
    _onSequencePositionComplete(e, t) {
      if (!this.activeSequence || this.activeSequence.animData.id !== e.id) return;
      const i = t + 1, s = e.loop ?? false;
      i < e.positions.length ? (this.activeSequence.currentIndex = i, this._playLookatAtIndex(e, i)) : s ? (this.activeSequence.currentIndex = 0, this.debug && this.logger.log(`Looping sequence '${e.id}' back to start`), this._playLookatAtIndex(e, 0)) : (this.debug && this.logger.log(`Sequence '${e.id}' complete`), this.activeSequence = null);
    }
    stopSequence() {
      this.activeSequence && (this.logger.log(`Stopping sequence '${this.activeSequence.animData.id}'`), this.activeSequence = null);
    }
    playObjectAnimation(e) {
      if (this.debug && this.logger.log(`Playing objectAnimation '${e.id}'`), e.playOnce && this.playedAnimations.add(e.id), !this.sceneManager) {
        this.logger.warn(`Cannot play objectAnimation '${e.id}', no sceneManager`);
        return;
      }
      let t = this.sceneManager.getObject(e.targetObjectId);
      if (!t) {
        this.logger.warn(`Cannot play objectAnimation '${e.id}', object '${e.targetObjectId}' not found - will retry on next state check`), e.playOnce && this.playedAnimations.delete(e.id);
        return;
      }
      if (e.childMeshName) {
        let h = null;
        if (t.traverse((c) => {
          c.name === e.childMeshName && (h = c);
        }), !h) {
          this.logger.warn(`Cannot play objectAnimation '${e.id}', child mesh '${e.childMeshName}' not found in '${e.targetObjectId}'`);
          return;
        }
        t = h, this.debug && this.logger.log(`Found child mesh '${e.childMeshName}' in '${e.targetObjectId}'`);
      }
      const i = e.properties || {}, s = e.duration || 1;
      if (this.camera && t.parent === this.camera && !e.reparentToCamera) {
        const h = new S(), c = new I(), d = new S();
        t.getWorldPosition(h), t.getWorldQuaternion(c), t.getWorldScale(d), this.camera.remove(t), this.camera.parent && this.camera.parent.add(t), t.position.copy(h), t.quaternion.copy(c), t.scale.copy(d), this.logger.log(`Unparented '${e.targetObjectId}' from camera and restored to world space`);
      }
      let n = null, r = null, a = null, l = null;
      if (e.reparentToCamera && this.camera) {
        n = t.parent, r = new S(), a = new I(), l = new S(), t.getWorldPosition(r), t.getWorldQuaternion(a), t.getWorldScale(l), n && n.remove(t), this.camera.add(t);
        const h = new Me().copy(this.camera.matrixWorld).invert();
        new Me().compose(r, a, l).premultiply(h).decompose(t.position, t.quaternion, t.scale), this.logger.log(`Reparented '${e.targetObjectId}' to camera. Local pos: (${t.position.x.toFixed(2)}, ${t.position.y.toFixed(2)}, ${t.position.z.toFixed(2)})`);
      }
      this.activeObjectAnimations.set(e.id, {
        animData: e,
        targetObject: t,
        elapsed: 0,
        duration: s,
        direction: 1,
        loopCount: 0,
        hasReversed: false,
        properties: this._parseObjectAnimationProperties(t, i, e.reparentToCamera),
        originalParent: n,
        reparentedToCamera: !!e.reparentToCamera
      }), this.logger.log(`Started objectAnimation '${e.id}' on '${e.targetObjectId}' (duration: ${s.toFixed(2)}s)`);
    }
    _parseObjectAnimationProperties(e, t, i = false) {
      const s = {};
      if (t.position) {
        const o = t.position.from || {
          x: e.position.x,
          y: e.position.y,
          z: e.position.z
        };
        let n = t.position.to || o;
        if (n === "CAMERA_FRONT" && this.camera && !i) {
          const a = this.camera.position, l = new S();
          this.camera.getWorldDirection(l);
          const c = new S(0, -0.1, -0.3).applyQuaternion(this.camera.quaternion);
          n = {
            x: a.x + c.x,
            y: a.y + c.y,
            z: a.z + c.z
          }, this.logger.log(`Dynamic camera-front position calculated: (${n.x.toFixed(2)}, ${n.y.toFixed(2)}, ${n.z.toFixed(2)})`);
        }
        if (Array.isArray(n)) {
          const a = [
            o,
            ...n
          ];
          s.position = {
            keyframes: a,
            isKeyframes: true
          };
        } else s.position = {
          from: o,
          to: n,
          isKeyframes: false
        };
      }
      if (t.rotation) {
        const o = t.rotation.to, n = Array.isArray(o);
        if (i) {
          const r = e.quaternion.clone();
          if (n) {
            const a = [
              r,
              ...o.map((l) => new I().setFromEuler(new U(l.x, l.y, l.z, "XYZ")))
            ];
            s.rotation = {
              keyframes: a,
              useQuaternion: true,
              isKeyframes: true
            };
          } else {
            const a = o || {
              x: 0,
              y: 0,
              z: 0
            }, l = new I().setFromEuler(new U(a.x, a.y, a.z, "XYZ"));
            s.rotation = {
              from: r,
              to: l,
              useQuaternion: true,
              isKeyframes: false
            };
          }
        } else {
          const r = t.rotation.from || {
            x: e.rotation.x,
            y: e.rotation.y,
            z: e.rotation.z
          };
          if (n) {
            const a = [
              r,
              ...o
            ];
            s.rotation = {
              keyframes: a,
              useQuaternion: false,
              isKeyframes: true
            };
          } else {
            const a = o || r, l = {
              x: a.x !== void 0 ? a.x : r.x,
              y: a.y !== void 0 ? a.y : r.y,
              z: a.z !== void 0 ? a.z : r.z
            };
            s.rotation = {
              from: r,
              to: l,
              useQuaternion: false,
              isKeyframes: false
            };
          }
        }
      }
      if (t.scale) {
        let o, n;
        typeof t.scale.from == "number" ? o = {
          x: t.scale.from,
          y: t.scale.from,
          z: t.scale.from
        } : t.scale.from ? o = t.scale.from : o = {
          x: e.scale.x,
          y: e.scale.y,
          z: e.scale.z
        }, typeof t.scale.to == "number" ? n = {
          x: t.scale.to,
          y: t.scale.to,
          z: t.scale.to
        } : t.scale.to ? n = t.scale.to : n = o, s.scale = {
          from: o,
          to: n
        };
      }
      if (t.opacity) {
        const o = t.opacity.from !== void 0 ? t.opacity.from : this._getObjectOpacity(e), n = t.opacity.to !== void 0 ? t.opacity.to : o;
        s.opacity = {
          from: o,
          to: n
        };
      }
      return s;
    }
    _getObjectOpacity(e) {
      let t = 1;
      return e.traverse((i) => {
        i.material && t === 1 && (Array.isArray(i.material) ? t = i.material[0].opacity || 1 : t = i.material.opacity || 1);
      }), t;
    }
    _setObjectOpacity(e, t) {
      e.traverse((i) => {
        i.material && (Array.isArray(i.material) ? i.material.forEach((s) => {
          s.transparent = t < 1, s.opacity = t, s.needsUpdate = true;
        }) : (i.material.transparent = t < 1, i.material.opacity = t, i.material.needsUpdate = true));
      });
    }
    _getKeyframeSegment(e, t) {
      if (e.length < 2) return {
        from: e[0],
        to: e[0],
        localT: 0
      };
      const i = e.length - 1, s = 1 / i, o = Math.min(Math.floor(t / s), i - 1), n = o * s, r = (t - n) / s;
      return {
        from: e[o],
        to: e[o + 1],
        localT: r
      };
    }
    _getEasingFunction(e) {
      const t = {
        linear: (i) => i,
        easeInQuad: (i) => i * i,
        easeOutQuad: (i) => i * (2 - i),
        easeInOutQuad: (i) => i < 0.5 ? 2 * i * i : 1 - Math.pow(-2 * i + 2, 2) / 2,
        easeInCubic: (i) => i * i * i,
        easeOutCubic: (i) => 1 - Math.pow(1 - i, 3),
        easeInOutCubic: (i) => i < 0.5 ? 4 * i * i * i : 1 - Math.pow(-2 * i + 2, 3) / 2,
        easeInOutElastic: (i) => {
          const s = 2 * Math.PI / 4.5;
          return i === 0 ? 0 : i === 1 ? 1 : i < 0.5 ? -(Math.pow(2, 20 * i - 10) * Math.sin((20 * i - 11.125) * s)) / 2 : Math.pow(2, -20 * i + 10) * Math.sin((20 * i - 11.125) * s) / 2 + 1;
        }
      };
      return t[e] || t.linear;
    }
    stopObjectAnimation(e) {
      this.activeObjectAnimations.has(e) && (this.logger.log(`Stopping objectAnimation '${e}'`), this.activeObjectAnimations.delete(e));
    }
    stopAllObjectAnimations() {
      this.activeObjectAnimations.size > 0 && (this.logger.log(`Stopping ${this.activeObjectAnimations.size} object animation(s)`), this.activeObjectAnimations.clear());
    }
    playMoveTo(e) {
      var _a3;
      this.debug && this.logger.log(`Playing moveTo '${e.id}'`), e.playOnce && this.playedAnimations.add(e.id);
      const t = e.transitionTime || e.duration || 2, i = e.onComplete || null, s = async () => {
        i && i(), await this._handlePlayNext(e);
      };
      let o = {
        ...e.position
      };
      if (e.autoHeight && this.physicsManager) {
        const n = this.physicsManager.getFloorHeightAt(e.position.x, e.position.z, 100, 200);
        if (n !== null && isFinite(n)) {
          const a = ((_a3 = this.characterController) == null ? void 0 : _a3.cameraHeight) ?? 1.6;
          if (o.y = n + 0.9 + a, isFinite(o.y)) this.logger.log(`MoveTo '${e.id}': Auto-calculated Y=${o.y.toFixed(2)} (floor=${n.toFixed(2)} + center=${0.9} + camera=${a})`);
          else if (this.logger.warn(`MoveTo '${e.id}': Calculated Y is invalid (${o.y}), using current character height`), this.characterController && this.characterController.character) {
            const l = this.characterController.character.translation();
            o.y = l.y;
          } else o.y = e.position.y;
        } else if (this.logger.warn(`MoveTo '${e.id}': Failed to find floor at (${e.position.x.toFixed(2)}, ${e.position.z.toFixed(2)}), using current character height`), this.characterController && this.characterController.character) {
          const r = this.characterController.character.translation();
          o.y = r.y;
        } else o.y = e.position.y;
      }
      this.gameManager ? this.gameManager.emit("character:moveto", {
        position: o,
        rotation: e.rotation || null,
        lookat: e.lookat || null,
        duration: t,
        inputControl: e.inputControl || {
          disableMovement: true,
          disableRotation: true
        },
        restoreInput: e.restoreInput !== void 0 ? e.restoreInput : true,
        onComplete: s
      }) : this.logger.warn(`Cannot play moveTo '${e.id}', no gameManager`);
    }
    async loadAnimation(e, t, i = false) {
      this.loadingScreen && i && this.loadingScreen.registerTask(`camera_anim_${e}`, 1);
      try {
        let s = t || "";
        /^(\/|https?:)/i.test(s) || (s = "/json/" + (s.endsWith(".json") ? s : s + ".json"));
        const o = await fetch(s);
        if (!o.ok) throw new Error(`HTTP ${o.status}`);
        const n = await o.json(), r = Array.isArray(n.frames) ? n.frames : [];
        if (r.length === 0) return this.logger.warn(`No frames in '${s}'`), this.loadingScreen && i && this.loadingScreen.completeTask(`camera_anim_${e}`), false;
        const a = r.map((f) => new I(f.q[0], f.q[1], f.q[2], f.q[3])), l = a[0].clone().invert(), h = Array.isArray(r[0].p) ? new S(r[0].p[0], r[0].p[1], r[0].p[2]) : new S(0, 0, 0), c = typeof r[0].t == "number" ? r[0].t : 0, d = 2, u = r.map((f, x) => {
          const w = (typeof f.t == "number" ? f.t : 0) - c, y = l.clone().multiply(a[x]);
          let v = null;
          return Array.isArray(f.p) && (v = new S(f.p[0], f.p[1], f.p[2]).sub(h).multiplyScalar(d).applyQuaternion(l.clone())), {
            t: w,
            qd: y,
            pd: v
          };
        }), m = u[u.length - 1].t;
        return this.animations.set(e, {
          frames: u,
          duration: m
        }), this.logger.log(`AnimationManager: Loaded '${e}' (${u.length} frames, ${m.toFixed(2)}s)`), this.loadingScreen && i && this.loadingScreen.completeTask(`camera_anim_${e}`), true;
      } catch (s) {
        return this.logger.warn(`Failed to load '${e}':`, s), this.loadingScreen && i && this.loadingScreen.completeTask(`camera_anim_${e}`), false;
      }
    }
    play(e, t = null, i = null) {
      const s = this.animations.get(e);
      if (!s) return this.logger.warn(`Animation '${e}' not found`), false;
      if (this.characterController && !(i == null ? void 0 : i.blendWithPlayer) && this.characterController.disableInput(), this.characterController && (this.characterController.isLerpingRollToZero = false), i == null ? void 0 : i.blendWithPlayer) {
        const a = this.camera.quaternion;
        if (!isFinite(a.x) || !isFinite(a.y) || !isFinite(a.z) || !isFinite(a.w)) {
          const l = new U().setFromQuaternion(a, "YXZ");
          isFinite(l.x) && isFinite(l.y) && isFinite(l.z) ? this.camera.quaternion.setFromEuler(l).normalize() : this.camera.quaternion.identity();
        } else this.camera.quaternion.normalize();
        return this.baseQuat.copy(this.camera.quaternion), this.basePos.copy(this.camera.position), this.currentAnimation = s, this.currentAnimationData = i, this.onComplete = t, this._startAnimationPlayback(), true;
      }
      const o = this.camera.quaternion;
      !isFinite(o.x) || !isFinite(o.y) || !isFinite(o.z) || !isFinite(o.w) ? this.camera.quaternion.identity() : this.camera.quaternion.normalize(), this.preSlerpStartQuat.copy(this.camera.quaternion);
      const n = new U().setFromQuaternion(this.camera.quaternion, "YXZ"), r = new U(0, n.y, 0, "YXZ");
      return this.preSlerpTargetQuat.setFromEuler(r), this.preSlerpElapsed = 0, this.isPreSlerping = true, this.currentAnimation = s, this.currentAnimationData = i, this.onComplete = t, this.isPlaying = false, this.debug && this.logger.log(`Pre-slerping to zero pitch (keeping yaw) before playing '${e}'`), true;
    }
    _startAnimationPlayback() {
      var _a3, _b2, _c, _d, _e2, _f, _g;
      if (this.baseQuat.copy(this.camera.quaternion).normalize(), this.basePos.copy(this.camera.position), this.elapsed = 0, this.frameIdx = 1, this.isPlaying = true, this.scaleY = ((_a3 = this.currentAnimationData) == null ? void 0 : _a3.scaleY) ?? 1, this.playbackPercentage = Math.max(0, Math.min(1, ((_b2 = this.currentAnimationData) == null ? void 0 : _b2.playbackPercentage) ?? 1)), ((_c = this.currentAnimationData) == null ? void 0 : _c.duration) !== void 0) {
        const t = this.currentAnimationData.duration, s = this.currentAnimation.duration * this.playbackPercentage;
        t > 0 && s > 0 ? this.playbackRate = s / t : this.playbackRate = 1;
      } else this.playbackRate = ((_d = this.currentAnimationData) == null ? void 0 : _d.playbackRate) ?? 1;
      this.blendWithPlayer = ((_e2 = this.currentAnimationData) == null ? void 0 : _e2.blendWithPlayer) ?? false;
      const e = ((_f = this.currentAnimationData) == null ? void 0 : _f.blendAmount) ?? 0.5;
      if (this.blendAmount = Math.max(0, Math.min(1, e)), this.debug) {
        const t = ((_g = this.currentAnimationData) == null ? void 0 : _g.duration) ? ` (target duration: ${this.currentAnimationData.duration.toFixed(2)}s, calculated rate: ${this.playbackRate.toFixed(3)}x)` : this.playbackRate !== 1 ? ` at ${this.playbackRate}x speed` : "";
        this.logger.log(`Starting animation playback from level horizon (pitch=0)${this.scaleY !== 1 ? ` with Y-scale ${this.scaleY}` : ""}${t}${this.blendWithPlayer ? ` blending ${(this.blendAmount * 100).toFixed(0)}% with player` : ""}`);
      }
    }
    _normalizeRestoreInput(e) {
      return typeof e == "boolean" ? {
        movement: e,
        rotation: e
      } : typeof e == "object" && e !== null ? {
        movement: e.movement !== void 0 ? e.movement : true,
        rotation: e.rotation !== void 0 ? e.rotation : true
      } : {
        movement: true,
        rotation: true
      };
    }
    _restoreInputControls(e) {
      if (!this.characterController) return;
      const t = this._normalizeRestoreInput(e);
      this.logger.log("_restoreInputControls called with restoreInput:", e, "normalized:", t), t.movement && t.rotation ? (this.characterController.enableInput(), this.logger.log("AnimationManager: Stopped, input restored (movement + rotation)")) : t.movement && !t.rotation ? (this.characterController.inputDisabled = false, this.characterController.inputManager.enableMovement(), this.characterController.inputManager.disableRotation(), this.logger.log("AnimationManager: Stopped, input restored (movement only)")) : !t.movement && t.rotation ? (this.characterController.inputDisabled = false, this.characterController.inputManager.enableRotation(), this.characterController.inputManager.disableMovement(), this.logger.log("AnimationManager: Stopped, input restored (rotation only) - rotation should now be enabled")) : (this.characterController.disableCameraSync(), this.logger.log("AnimationManager: Stopped, input NOT restored, camera frozen (manual restoration required)"));
    }
    stop(e = true) {
      var _a3, _b2;
      if (this.isPreSlerping) {
        if (this.isPreSlerping = false, this.currentAnimation = null, this.currentAnimationData = null, this.characterController) {
          const s = ((_a3 = this.currentAnimationData) == null ? void 0 : _a3.restoreInput) !== void 0 ? this.currentAnimationData.restoreInput : e;
          this._restoreInputControls(s);
        }
        return;
      }
      if (!this.isPlaying) return;
      const t = (_b2 = this.currentAnimationData) == null ? void 0 : _b2.restoreInput;
      t !== void 0 && (e = t), this.isPlaying = false, this.currentAnimation = null, this.currentAnimationData = null;
      const i = this.camera.quaternion;
      if (!isFinite(i.x) || !isFinite(i.y) || !isFinite(i.z) || !isFinite(i.w) ? isFinite(this.baseQuat.x) && isFinite(this.baseQuat.y) && isFinite(this.baseQuat.z) && isFinite(this.baseQuat.w) ? this.camera.quaternion.copy(this.baseQuat).normalize() : this.camera.quaternion.identity() : this.camera.quaternion.normalize(), this.characterController && this.characterController.character) {
        const s = this.characterController.character, o = this.characterController.cameraHeight || 1.6, n = {
          x: this.camera.position.x,
          y: this.camera.position.y - o,
          z: this.camera.position.z
        };
        s.setTranslation(n, true);
        const r = new U().setFromQuaternion(this.camera.quaternion, "YXZ"), a = new I().setFromEuler(new U(0, r.y, 0, "YXZ"));
        s.setRotation({
          x: a.x,
          y: a.y,
          z: a.z,
          w: a.w
        }, true), s.setLinvel({
          x: 0,
          y: 0,
          z: 0
        }, true), s.setAngvel({
          x: 0,
          y: 0,
          z: 0
        }, true);
      }
      if (this.characterController) {
        const s = new U().setFromQuaternion(this.camera.quaternion, "YXZ");
        this.characterController.yaw = s.y, this.characterController.pitch = s.x, this.characterController.targetYaw = this.characterController.yaw, this.characterController.targetPitch = this.characterController.pitch, this.blendWithPlayer && Math.abs(s.z) > 1e-3 && (this.characterController.currentRoll = s.z, this.characterController.isLerpingRollToZero = true, this.debug && this.logger.log(`Blended animation ended with roll ${s.z.toFixed(3)}, starting smooth lerp to zero`)), this._restoreInputControls(e);
      }
    }
    update(e) {
      var _a3, _b2;
      if ((!this._lastRetryCheck || Date.now() - this._lastRetryCheck > 1e3) && (this._lastRetryCheck = Date.now(), this.gameManager && this.sceneManager)) {
        const l = this.gameManager.getState(), h = Object.values(_e).filter((c) => c.criteria ? !!(X(l, c.criteria) && !this.activeObjectAnimations.has(c.id) && !(c.playOnce && this.playedAnimations.has(c.id))) : false);
        for (const c of h) this.sceneManager.getObject(c.targetObjectId) && (this.logger.log(`Retrying objectAnimation '${c.id}' - object now available`), this.playObjectAnimation(c));
      }
      if (this.isPreSlerping) {
        this.preSlerpElapsed += e;
        const l = Math.min(1, this.preSlerpElapsed / this.preSlerpDuration), h = l < 0.5 ? 2 * l * l : 1 - Math.pow(-2 * l + 2, 2) / 2;
        this.camera.quaternion.copy(this.preSlerpStartQuat).slerp(this.preSlerpTargetQuat, h), l >= 1 && (this.isPreSlerping = false, this._startAnimationPlayback());
        return;
      }
      if (this.isFading && this.fadeData) {
        this.fadeElapsed += e;
        const l = this.fadeCube;
        if (l) {
          const { fadeInTime: h, holdTime: c, fadeOutTime: d, maxOpacity: u, persistWhileCriteria: m, criteria: f } = this.fadeData, x = h, w = x + c, y = w + d, v = this.fadeData.startOpacity !== void 0 ? this.fadeData.startOpacity : 0;
          let b = v;
          if (h === 0 && c === 0) if (this.fadeElapsed < d) {
            const T = this.fadeElapsed / d;
            b = G.lerp(v, 0, T);
          } else b = 0;
          else if (this.fadeElapsed < x) if (h > 0) {
            const T = this.fadeElapsed / h;
            b = G.lerp(v, u, T);
          } else b = u;
          else if (this.fadeElapsed < w) b = u, !this.fadeInCompleteTriggered && this.fadeOnFadeInComplete && (this.fadeInCompleteTriggered = true, this.fadeOnFadeInComplete(this.gameManager));
          else if (m && f) if (X(this.gameManager.getState(), f)) b = u, !this.fadeInCompleteTriggered && this.fadeOnFadeInComplete && (this.fadeInCompleteTriggered = true, this.fadeOnFadeInComplete(this.gameManager));
          else if (this.fadeElapsed < w + d) if (d > 0) b = (1 - (this.fadeElapsed - w) / d) * u;
          else {
            b = 0, this.isFading = false;
            const M = this.fadeOnComplete, C = this.fadeRestoreInput, P = this.fadeAnimData;
            this.fadeData = null, this.fadeAnimData = null, this.fadeOnComplete = null, this.fadeInputControl = null, this.fadeRestoreInput = true, this.characterController && this._restoreInputControls(C), M && M(this.gameManager), P && this._handlePlayNext(P);
          }
          else {
            b = 0, this.isFading = false;
            const M = this.fadeOnComplete, C = this.fadeRestoreInput, P = this.fadeAnimData;
            this.fadeData = null, this.fadeAnimData = null, this.fadeOnComplete = null, this.fadeInputControl = null, this.fadeRestoreInput = true, this.characterController && (this._restoreInputControls(C), this.debug && this.logger.log("Fade complete, input restored based on restoreInput config")), M && M(this.gameManager), P && this._handlePlayNext(P), this.logger.log("Fade complete");
          }
          else if (this.fadeElapsed < y) b = (1 - (this.fadeElapsed - w) / d) * u;
          else {
            b = 0, this.isFading = false;
            const T = this.fadeOnComplete, M = this.fadeRestoreInput, C = this.fadeAnimData;
            this.fadeData = null, this.fadeAnimData = null, this.fadeOnComplete = null, this.fadeInputControl = null, this.fadeRestoreInput = true, this.characterController && (this._restoreInputControls(M), this.debug && this.logger.log("Fade complete, input restored based on restoreInput config")), T && T(this.gameManager), C && this._handlePlayNext(C), this.logger.log("Fade complete");
          }
          l.material.opacity = b;
        }
      }
      if (this.pendingAnimations.size > 0) for (const [l, h] of this.pendingAnimations) {
        h.timer += e;
        const c = h.animData.type === "fade";
        if (h.timer >= h.delay && (c || !this.isPlaying && !this.isPreSlerping)) {
          this.debug && this.logger.log(`Playing delayed animation "${l}"${c ? " (fade)" : ""}`), this.pendingAnimations.delete(l), this.playFromData(h.animData);
          break;
        }
      }
      if (this.pendingInputRestore && (this.pendingInputRestore.timer += e, this.pendingInputRestore.timer >= this.pendingInputRestore.delay)) {
        if (this.characterController) {
          const l = this.pendingInputRestore.restoreInputConfig !== void 0 ? this.pendingInputRestore.restoreInputConfig : true;
          this._restoreInputControls(l), this.debug && this.logger.log(`Restored control after zoom completion (${this.pendingInputRestore.delay.toFixed(2)}s delay)`);
        }
        this.pendingInputRestore = null;
      }
      if (this.activeObjectAnimations.size > 0) {
        const l = [];
        for (const [h, c] of this.activeObjectAnimations) {
          const { animData: d, targetObject: u, duration: m, direction: f, properties: x } = c;
          if (d.reverseOnCriteria && !c.hasReversed && this.gameManager) {
            const M = this.gameManager.getState();
            X(M, d.reverseOnCriteria) && c.direction === 1 && (c.direction = -1, c.hasReversed = true, this.debug && this.logger.log(`Reversing objectAnimation '${h}' due to criteria match`));
          }
          c.elapsed += e * c.direction;
          let w = Math.max(0, Math.min(1, c.elapsed / m));
          const y = d.easing || "linear", b = this._getEasingFunction(y)(w);
          if (x.position) {
            const { isKeyframes: M } = x.position;
            if (M) {
              const { keyframes: C } = x.position, { from: P, to: A, localT: D } = this._getKeyframeSegment(C, b);
              u.position.x = P.x + (A.x - P.x) * D, u.position.y = P.y + (A.y - P.y) * D, u.position.z = P.z + (A.z - P.z) * D;
            } else {
              const { from: C, to: P } = x.position;
              u.position.x = C.x + (P.x - C.x) * b, u.position.y = C.y + (P.y - C.y) * b, u.position.z = C.z + (P.z - C.z) * b;
            }
          }
          if (x.rotation) {
            const { useQuaternion: M, isKeyframes: C } = x.rotation;
            if (C) {
              const { keyframes: P } = x.rotation, { from: A, to: D, localT: R } = this._getKeyframeSegment(P, b);
              M ? u.quaternion.slerpQuaternions(A, D, R) : (u.rotation.x = A.x + (D.x - A.x) * R, u.rotation.y = A.y + (D.y - A.y) * R, u.rotation.z = A.z + (D.z - A.z) * R);
            } else {
              const { from: P, to: A } = x.rotation;
              M ? u.quaternion.slerpQuaternions(P, A, b) : (u.rotation.x = P.x + (A.x - P.x) * b, u.rotation.y = P.y + (A.y - P.y) * b, u.rotation.z = P.z + (A.z - P.z) * b);
            }
          }
          if (x.scale) {
            const { from: M, to: C } = x.scale;
            u.scale.x = M.x + (C.x - M.x) * b, u.scale.y = M.y + (C.y - M.y) * b, u.scale.z = M.z + (C.z - M.z) * b;
          }
          if (x.opacity) {
            const { from: M, to: C } = x.opacity, P = M + (C - M) * b;
            this._setObjectOpacity(u, P);
          }
          if (f > 0 && c.elapsed >= m || f < 0 && c.elapsed <= 0) {
            const M = d.loop || false, C = d.yoyo || false;
            M ? (C ? (c.direction *= -1, f > 0 ? c.elapsed = m : c.elapsed = 0) : c.elapsed = 0, c.loopCount++) : (l.push(h), d.onComplete && d.onComplete(this.gameManager), this._handlePlayNext(d), this.debug && this.logger.log(`objectAnimation '${h}' complete`));
          }
        }
        for (const h of l) this.activeObjectAnimations.delete(h);
      }
      if (this.isSettlingUp) {
        this.settleElapsed += e;
        const l = Math.min(1, this.settleElapsed / this.settleDuration), h = 1 - Math.pow(1 - l, 3);
        if (this.camera.position.y = this.settleStartY + (this.settleTargetY - this.settleStartY) * h, l >= 1) {
          const c = this._pendingComplete, d = this._pendingAnimData;
          if (this._pendingComplete = null, this._pendingAnimData = null, this.isSettlingUp = false, d) {
            this.currentAnimationData = d;
            const u = d.restoreInput !== void 0 ? d.restoreInput : true;
            this.stop(u);
          } else this.stop(true);
          c && c(), d && this._handlePlayNext(d);
        }
        return;
      }
      if (!this.isPlaying || !this.currentAnimation) return;
      this.elapsed += e * this.playbackRate;
      const { frames: t, duration: i } = this.currentAnimation, s = i * this.playbackPercentage;
      if (this.elapsed > s && (this.elapsed = s), this.elapsed >= s) {
        let l = t[t.length - 1];
        for (let f = 0; f < t.length; f++) if (t[f].t >= s) {
          l = t[f];
          break;
        }
        if (this.blendedAnimQuat.copy(this.baseQuat).multiply(l.qd), this.blendedAnimQuat.normalize(), l.pd ? (this._interpPos.copy(l.pd), this.scaleY !== 1 && (this._interpPos.y *= this.scaleY), this._rotatedPos.copy(this._interpPos).applyQuaternion(this.baseQuat), this.blendedAnimPos.copy(this.basePos).add(this._rotatedPos)) : this.blendedAnimPos.copy(this.basePos), (!isFinite(this.blendedAnimQuat.x) || !isFinite(this.blendedAnimQuat.y) || !isFinite(this.blendedAnimQuat.z) || !isFinite(this.blendedAnimQuat.w)) && this.blendedAnimQuat.copy(this.baseQuat).normalize(), this.blendWithPlayer) {
          let f = this.camera.quaternion.clone();
          (!isFinite(f.x) || !isFinite(f.y) || !isFinite(f.z) || !isFinite(f.w)) && (f = this.baseQuat.clone()), f.normalize();
          const x = this.camera.position.clone(), w = Math.max(0, Math.min(1, this.blendAmount || 0.5)), y = f.clone().multiply(l.qd);
          y.normalize(), this.camera.quaternion.copy(f).slerp(y, w), this.camera.position.lerpVectors(x, this.blendedAnimPos, w), this.camera.quaternion.normalize();
        } else this.camera.quaternion.copy(this.blendedAnimQuat), l.pd && this.camera.position.copy(this.blendedAnimPos);
        const h = ((_a3 = this.currentAnimationData) == null ? void 0 : _a3.restoreInput) !== void 0 ? this.currentAnimationData.restoreInput : true, c = this._normalizeRestoreInput(h);
        if (c.movement || c.rotation) {
          const f = ((_b2 = this.characterController) == null ? void 0 : _b2.cameraHeight) ?? 1.6, x = this.camera.position.y - f;
          if (x < this.minCharacterCenterY) {
            const w = this.minCharacterCenterY - x;
            this.isSettlingUp = true, this.settleStartY = this.camera.position.y, this.settleTargetY = this.camera.position.y + w, this.settleElapsed = 0, this._pendingComplete = this.onComplete, this._pendingAnimData = this.currentAnimationData;
            return;
          }
        }
        const d = this.onComplete, u = this.currentAnimationData, m = (u == null ? void 0 : u.restoreInput) !== void 0 ? u.restoreInput : true;
        this.stop(m), d && d(), u && this._handlePlayNext(u);
        return;
      }
      for (; this.frameIdx < t.length && t[this.frameIdx].t < this.elapsed; ) this.frameIdx++;
      const o = t[Math.max(0, this.frameIdx - 1)], n = t[Math.min(t.length - 1, this.frameIdx)], r = Math.max(1e-6, n.t - o.t), a = Math.min(1, Math.max(0, (this.elapsed - o.t) / r));
      if (this._interpDelta.copy(o.qd).slerp(n.qd, a), this.blendedAnimQuat.copy(this.baseQuat).multiply(this._interpDelta), this.blendedAnimQuat.normalize(), (!isFinite(this.blendedAnimQuat.x) || !isFinite(this.blendedAnimQuat.y) || !isFinite(this.blendedAnimQuat.z) || !isFinite(this.blendedAnimQuat.w)) && this.blendedAnimQuat.copy(this.baseQuat).normalize(), o.pd && n.pd ? (this._interpPos.copy(o.pd).lerp(n.pd, a), this.scaleY !== 1 && (this._interpPos.y *= this.scaleY), this._rotatedPos.copy(this._interpPos).applyQuaternion(this.baseQuat), this.blendedAnimPos.copy(this.basePos).add(this._rotatedPos)) : this.blendedAnimPos.copy(this.basePos), this.blendWithPlayer) {
        let l = this.camera.quaternion.clone();
        (!isFinite(l.x) || !isFinite(l.y) || !isFinite(l.z) || !isFinite(l.w)) && (l = this.baseQuat.clone()), l.normalize();
        const h = this.camera.position.clone(), c = Math.max(0, Math.min(1, this.blendAmount || 0.5)), d = l.clone().multiply(this._interpDelta);
        d.normalize(), this.camera.quaternion.copy(l).slerp(d, c), this.camera.position.lerpVectors(h, this.blendedAnimPos, c), this.camera.quaternion.normalize();
      } else this.camera.quaternion.copy(this.blendedAnimQuat), o.pd && n.pd && this.camera.position.copy(this.blendedAnimPos);
    }
    get playing() {
      return this.isPlaying || this.isPreSlerping;
    }
    getAnimationNames() {
      return Array.from(this.animations.keys());
    }
  }
  const Be = new Ii(), re = new S(), Oe = new S(), Q = new I(), ts = {
    X: new S(1, 0, 0),
    Y: new S(0, 1, 0),
    Z: new S(0, 0, 1)
  }, gi = {
    type: "change"
  }, is = {
    type: "mouseDown",
    mode: null
  }, ss = {
    type: "mouseUp",
    mode: null
  }, os = {
    type: "objectChange"
  };
  class na extends Lo {
    constructor(e, t = null) {
      super(void 0, t);
      const i = new da(this);
      this._root = i;
      const s = new ua();
      this._gizmo = s, i.add(s);
      const o = new ga();
      this._plane = o, i.add(o);
      const n = this;
      function r(v, b) {
        let T = b;
        Object.defineProperty(n, v, {
          get: function() {
            return T !== void 0 ? T : b;
          },
          set: function(M) {
            T !== M && (T = M, o[v] = M, s[v] = M, n.dispatchEvent({
              type: v + "-changed",
              value: M
            }), n.dispatchEvent(gi));
          }
        }), n[v] = b, o[v] = b, s[v] = b;
      }
      r("camera", e), r("object", void 0), r("enabled", true), r("axis", null), r("mode", "translate"), r("translationSnap", null), r("rotationSnap", null), r("scaleSnap", null), r("space", "world"), r("size", 1), r("dragging", false), r("showX", true), r("showY", true), r("showZ", true), r("minX", -1 / 0), r("maxX", 1 / 0), r("minY", -1 / 0), r("maxY", 1 / 0), r("minZ", -1 / 0), r("maxZ", 1 / 0);
      const a = new S(), l = new S(), h = new I(), c = new I(), d = new S(), u = new I(), m = new S(), f = new S(), x = new S(), w = 0, y = new S();
      r("worldPosition", a), r("worldPositionStart", l), r("worldQuaternion", h), r("worldQuaternionStart", c), r("cameraPosition", d), r("cameraQuaternion", u), r("pointStart", m), r("pointEnd", f), r("rotationAxis", x), r("rotationAngle", w), r("eye", y), this._offset = new S(), this._startNorm = new S(), this._endNorm = new S(), this._cameraScale = new S(), this._parentPosition = new S(), this._parentQuaternion = new I(), this._parentQuaternionInv = new I(), this._parentScale = new S(), this._worldScaleStart = new S(), this._worldQuaternionInv = new I(), this._worldScale = new S(), this._positionStart = new S(), this._quaternionStart = new I(), this._scaleStart = new S(), this._getPointer = aa.bind(this), this._onPointerDown = la.bind(this), this._onPointerHover = ra.bind(this), this._onPointerMove = ca.bind(this), this._onPointerUp = ha.bind(this), t !== null && this.connect(t);
    }
    connect(e) {
      super.connect(e), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointermove", this._onPointerHover), this.domElement.addEventListener("pointerup", this._onPointerUp), this.domElement.style.touchAction = "none";
    }
    disconnect() {
      this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerHover), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.style.touchAction = "auto";
    }
    getHelper() {
      return this._root;
    }
    pointerHover(e) {
      if (this.object === void 0 || this.dragging === true) return;
      e !== null && Be.setFromCamera(e, this.camera);
      const t = pi(this._gizmo.picker[this.mode], Be);
      t ? this.axis = t.object.name : this.axis = null;
    }
    pointerDown(e) {
      if (!(this.object === void 0 || this.dragging === true || e != null && e.button !== 0) && this.axis !== null) {
        e !== null && Be.setFromCamera(e, this.camera);
        const t = pi(this._plane, Be, true);
        t && (this.object.updateMatrixWorld(), this.object.parent.updateMatrixWorld(), this._positionStart.copy(this.object.position), this._quaternionStart.copy(this.object.quaternion), this._scaleStart.copy(this.object.scale), this.object.matrixWorld.decompose(this.worldPositionStart, this.worldQuaternionStart, this._worldScaleStart), this.pointStart.copy(t.point).sub(this.worldPositionStart)), this.dragging = true, is.mode = this.mode, this.dispatchEvent(is);
      }
    }
    pointerMove(e) {
      const t = this.axis, i = this.mode, s = this.object;
      let o = this.space;
      if (i === "scale" ? o = "local" : (t === "E" || t === "XYZE" || t === "XYZ") && (o = "world"), s === void 0 || t === null || this.dragging === false || e !== null && e.button !== -1) return;
      e !== null && Be.setFromCamera(e, this.camera);
      const n = pi(this._plane, Be, true);
      if (n) {
        if (this.pointEnd.copy(n.point).sub(this.worldPositionStart), i === "translate") this._offset.copy(this.pointEnd).sub(this.pointStart), o === "local" && t !== "XYZ" && this._offset.applyQuaternion(this._worldQuaternionInv), t.indexOf("X") === -1 && (this._offset.x = 0), t.indexOf("Y") === -1 && (this._offset.y = 0), t.indexOf("Z") === -1 && (this._offset.z = 0), o === "local" && t !== "XYZ" ? this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale) : this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale), s.position.copy(this._offset).add(this._positionStart), this.translationSnap && (o === "local" && (s.position.applyQuaternion(Q.copy(this._quaternionStart).invert()), t.search("X") !== -1 && (s.position.x = Math.round(s.position.x / this.translationSnap) * this.translationSnap), t.search("Y") !== -1 && (s.position.y = Math.round(s.position.y / this.translationSnap) * this.translationSnap), t.search("Z") !== -1 && (s.position.z = Math.round(s.position.z / this.translationSnap) * this.translationSnap), s.position.applyQuaternion(this._quaternionStart)), o === "world" && (s.parent && s.position.add(re.setFromMatrixPosition(s.parent.matrixWorld)), t.search("X") !== -1 && (s.position.x = Math.round(s.position.x / this.translationSnap) * this.translationSnap), t.search("Y") !== -1 && (s.position.y = Math.round(s.position.y / this.translationSnap) * this.translationSnap), t.search("Z") !== -1 && (s.position.z = Math.round(s.position.z / this.translationSnap) * this.translationSnap), s.parent && s.position.sub(re.setFromMatrixPosition(s.parent.matrixWorld)))), s.position.x = Math.max(this.minX, Math.min(this.maxX, s.position.x)), s.position.y = Math.max(this.minY, Math.min(this.maxY, s.position.y)), s.position.z = Math.max(this.minZ, Math.min(this.maxZ, s.position.z));
        else if (i === "scale") {
          if (t.search("XYZ") !== -1) {
            let r = this.pointEnd.length() / this.pointStart.length();
            this.pointEnd.dot(this.pointStart) < 0 && (r *= -1), Oe.set(r, r, r);
          } else re.copy(this.pointStart), Oe.copy(this.pointEnd), re.applyQuaternion(this._worldQuaternionInv), Oe.applyQuaternion(this._worldQuaternionInv), Oe.divide(re), t.search("X") === -1 && (Oe.x = 1), t.search("Y") === -1 && (Oe.y = 1), t.search("Z") === -1 && (Oe.z = 1);
          s.scale.copy(this._scaleStart).multiply(Oe), this.scaleSnap && (t.search("X") !== -1 && (s.scale.x = Math.round(s.scale.x / this.scaleSnap) * this.scaleSnap || this.scaleSnap), t.search("Y") !== -1 && (s.scale.y = Math.round(s.scale.y / this.scaleSnap) * this.scaleSnap || this.scaleSnap), t.search("Z") !== -1 && (s.scale.z = Math.round(s.scale.z / this.scaleSnap) * this.scaleSnap || this.scaleSnap));
        } else if (i === "rotate") {
          this._offset.copy(this.pointEnd).sub(this.pointStart);
          const r = 20 / this.worldPosition.distanceTo(re.setFromMatrixPosition(this.camera.matrixWorld));
          let a = false;
          t === "XYZE" ? (this.rotationAxis.copy(this._offset).cross(this.eye).normalize(), this.rotationAngle = this._offset.dot(re.copy(this.rotationAxis).cross(this.eye)) * r) : (t === "X" || t === "Y" || t === "Z") && (this.rotationAxis.copy(ts[t]), re.copy(ts[t]), o === "local" && re.applyQuaternion(this.worldQuaternion), re.cross(this.eye), re.length() === 0 ? a = true : this.rotationAngle = this._offset.dot(re.normalize()) * r), (t === "E" || a) && (this.rotationAxis.copy(this.eye), this.rotationAngle = this.pointEnd.angleTo(this.pointStart), this._startNorm.copy(this.pointStart).normalize(), this._endNorm.copy(this.pointEnd).normalize(), this.rotationAngle *= this._endNorm.cross(this._startNorm).dot(this.eye) < 0 ? 1 : -1), this.rotationSnap && (this.rotationAngle = Math.round(this.rotationAngle / this.rotationSnap) * this.rotationSnap), o === "local" && t !== "E" && t !== "XYZE" ? (s.quaternion.copy(this._quaternionStart), s.quaternion.multiply(Q.setFromAxisAngle(this.rotationAxis, this.rotationAngle)).normalize()) : (this.rotationAxis.applyQuaternion(this._parentQuaternionInv), s.quaternion.copy(Q.setFromAxisAngle(this.rotationAxis, this.rotationAngle)), s.quaternion.multiply(this._quaternionStart).normalize());
        }
        this.dispatchEvent(gi), this.dispatchEvent(os);
      }
    }
    pointerUp(e) {
      e !== null && e.button !== 0 || (this.dragging && this.axis !== null && (ss.mode = this.mode, this.dispatchEvent(ss)), this.dragging = false, this.axis = null);
    }
    dispose() {
      this.disconnect(), this._root.dispose();
    }
    attach(e) {
      return this.object = e, this._root.visible = true, this;
    }
    detach() {
      return this.object = void 0, this.axis = null, this._root.visible = false, this;
    }
    reset() {
      this.enabled && this.dragging && (this.object.position.copy(this._positionStart), this.object.quaternion.copy(this._quaternionStart), this.object.scale.copy(this._scaleStart), this.dispatchEvent(gi), this.dispatchEvent(os), this.pointStart.copy(this.pointEnd));
    }
    getRaycaster() {
      return Be;
    }
    getMode() {
      return this.mode;
    }
    setMode(e) {
      this.mode = e;
    }
    setTranslationSnap(e) {
      this.translationSnap = e;
    }
    setRotationSnap(e) {
      this.rotationSnap = e;
    }
    setScaleSnap(e) {
      this.scaleSnap = e;
    }
    setSize(e) {
      this.size = e;
    }
    setSpace(e) {
      this.space = e;
    }
    setColors(e, t, i, s) {
      const o = this._gizmo.materialLib;
      o.xAxis.color.set(e), o.yAxis.color.set(t), o.zAxis.color.set(i), o.active.color.set(s), o.xAxisTransparent.color.set(e), o.yAxisTransparent.color.set(t), o.zAxisTransparent.color.set(i), o.activeTransparent.color.set(s), o.xAxis._color && o.xAxis._color.set(e), o.yAxis._color && o.yAxis._color.set(t), o.zAxis._color && o.zAxis._color.set(i), o.active._color && o.active._color.set(s), o.xAxisTransparent._color && o.xAxisTransparent._color.set(e), o.yAxisTransparent._color && o.yAxisTransparent._color.set(t), o.zAxisTransparent._color && o.zAxisTransparent._color.set(i), o.activeTransparent._color && o.activeTransparent._color.set(s);
    }
  }
  function aa(g) {
    if (this.domElement.ownerDocument.pointerLockElement) return {
      x: 0,
      y: 0,
      button: g.button
    };
    {
      const e = this.domElement.getBoundingClientRect();
      return {
        x: (g.clientX - e.left) / e.width * 2 - 1,
        y: -(g.clientY - e.top) / e.height * 2 + 1,
        button: g.button
      };
    }
  }
  function ra(g) {
    if (this.enabled) switch (g.pointerType) {
      case "mouse":
      case "pen":
        this.pointerHover(this._getPointer(g));
        break;
    }
  }
  function la(g) {
    this.enabled && (document.pointerLockElement || this.domElement.setPointerCapture(g.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.pointerHover(this._getPointer(g)), this.pointerDown(this._getPointer(g)));
  }
  function ca(g) {
    this.enabled && this.pointerMove(this._getPointer(g));
  }
  function ha(g) {
    this.enabled && (this.domElement.releasePointerCapture(g.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.pointerUp(this._getPointer(g)));
  }
  function pi(g, e, t) {
    const i = e.intersectObject(g, true);
    for (let s = 0; s < i.length; s++) if (i[s].object.visible || t) return i[s];
    return false;
  }
  const Dt = new U(), B = new S(0, 1, 0), ns = new S(0, 0, 0), as = new Me(), Lt = new I(), $t = new I(), Te = new S(), rs = new Me(), vt = new S(1, 0, 0), Ve = new S(0, 1, 0), wt = new S(0, 0, 1), Ot = new S(), ft = new S(), yt = new S();
  class da extends Fe {
    constructor(e) {
      super(), this.isTransformControlsRoot = true, this.controls = e, this.visible = false;
    }
    updateMatrixWorld(e) {
      const t = this.controls;
      t.object !== void 0 && (t.object.updateMatrixWorld(), t.object.parent === null ? console.error("TransformControls: The attached 3D object must be a part of the scene graph.") : t.object.parent.matrixWorld.decompose(t._parentPosition, t._parentQuaternion, t._parentScale), t.object.matrixWorld.decompose(t.worldPosition, t.worldQuaternion, t._worldScale), t._parentQuaternionInv.copy(t._parentQuaternion).invert(), t._worldQuaternionInv.copy(t.worldQuaternion).invert()), t.camera.updateMatrixWorld(), t.camera.matrixWorld.decompose(t.cameraPosition, t.cameraQuaternion, t._cameraScale), t.camera.isOrthographicCamera ? t.camera.getWorldDirection(t.eye).negate() : t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(), super.updateMatrixWorld(e);
    }
    dispose() {
      this.traverse(function(e) {
        e.geometry && e.geometry.dispose(), e.material && e.material.dispose();
      });
    }
  }
  class ua extends Fe {
    constructor() {
      super(), this.isTransformControlsGizmo = true, this.type = "TransformControlsGizmo";
      const e = new le({
        depthTest: false,
        depthWrite: false,
        fog: false,
        toneMapped: false,
        transparent: true
      }), t = new As({
        depthTest: false,
        depthWrite: false,
        fog: false,
        toneMapped: false,
        transparent: true
      }), i = e.clone();
      i.opacity = 0.15;
      const s = t.clone();
      s.opacity = 0.5;
      const o = e.clone();
      o.color.setHex(16711680);
      const n = e.clone();
      n.color.setHex(65280);
      const r = e.clone();
      r.color.setHex(255);
      const a = e.clone();
      a.color.setHex(16711680), a.opacity = 0.5;
      const l = e.clone();
      l.color.setHex(65280), l.opacity = 0.5;
      const h = e.clone();
      h.color.setHex(255), h.opacity = 0.5;
      const c = e.clone();
      c.opacity = 0.25;
      const d = e.clone();
      d.color.setHex(16776960), d.opacity = 0.25;
      const u = e.clone();
      u.color.setHex(16776960);
      const m = e.clone();
      m.color.setHex(7895160), this.materialLib = {
        xAxis: o,
        yAxis: n,
        zAxis: r,
        active: u,
        xAxisTransparent: a,
        yAxisTransparent: l,
        zAxisTransparent: h,
        activeTransparent: d
      };
      const f = new de(0, 0.04, 0.1, 12);
      f.translate(0, 0.05, 0);
      const x = new oe(0.08, 0.08, 0.08);
      x.translate(0, 0.04, 0);
      const w = new ot();
      w.setAttribute("position", new ze([
        0,
        0,
        0,
        1,
        0,
        0
      ], 3));
      const y = new de(75e-4, 75e-4, 0.5, 3);
      y.translate(0, 0.25, 0);
      function v($, Z) {
        const j = new gt($, 75e-4, 3, 64, Z * Math.PI * 2);
        return j.rotateY(Math.PI / 2), j.rotateX(Math.PI / 2), j;
      }
      function b() {
        const $ = new ot();
        return $.setAttribute("position", new ze([
          0,
          0,
          0,
          1,
          1,
          1
        ], 3)), $;
      }
      const T = {
        X: [
          [
            new k(f, o),
            [
              0.5,
              0,
              0
            ],
            [
              0,
              0,
              -Math.PI / 2
            ]
          ],
          [
            new k(f, o),
            [
              -0.5,
              0,
              0
            ],
            [
              0,
              0,
              Math.PI / 2
            ]
          ],
          [
            new k(y, o),
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              -Math.PI / 2
            ]
          ]
        ],
        Y: [
          [
            new k(f, n),
            [
              0,
              0.5,
              0
            ]
          ],
          [
            new k(f, n),
            [
              0,
              -0.5,
              0
            ],
            [
              Math.PI,
              0,
              0
            ]
          ],
          [
            new k(y, n)
          ]
        ],
        Z: [
          [
            new k(f, r),
            [
              0,
              0,
              0.5
            ],
            [
              Math.PI / 2,
              0,
              0
            ]
          ],
          [
            new k(f, r),
            [
              0,
              0,
              -0.5
            ],
            [
              -Math.PI / 2,
              0,
              0
            ]
          ],
          [
            new k(y, r),
            null,
            [
              Math.PI / 2,
              0,
              0
            ]
          ]
        ],
        XYZ: [
          [
            new k(new Et(0.1, 0), c),
            [
              0,
              0,
              0
            ]
          ]
        ],
        XY: [
          [
            new k(new oe(0.15, 0.15, 0.01), h),
            [
              0.15,
              0.15,
              0
            ]
          ]
        ],
        YZ: [
          [
            new k(new oe(0.15, 0.15, 0.01), a),
            [
              0,
              0.15,
              0.15
            ],
            [
              0,
              Math.PI / 2,
              0
            ]
          ]
        ],
        XZ: [
          [
            new k(new oe(0.15, 0.15, 0.01), l),
            [
              0.15,
              0,
              0.15
            ],
            [
              -Math.PI / 2,
              0,
              0
            ]
          ]
        ]
      }, M = {
        X: [
          [
            new k(new de(0.2, 0, 0.6, 4), i),
            [
              0.3,
              0,
              0
            ],
            [
              0,
              0,
              -Math.PI / 2
            ]
          ],
          [
            new k(new de(0.2, 0, 0.6, 4), i),
            [
              -0.3,
              0,
              0
            ],
            [
              0,
              0,
              Math.PI / 2
            ]
          ]
        ],
        Y: [
          [
            new k(new de(0.2, 0, 0.6, 4), i),
            [
              0,
              0.3,
              0
            ]
          ],
          [
            new k(new de(0.2, 0, 0.6, 4), i),
            [
              0,
              -0.3,
              0
            ],
            [
              0,
              0,
              Math.PI
            ]
          ]
        ],
        Z: [
          [
            new k(new de(0.2, 0, 0.6, 4), i),
            [
              0,
              0,
              0.3
            ],
            [
              Math.PI / 2,
              0,
              0
            ]
          ],
          [
            new k(new de(0.2, 0, 0.6, 4), i),
            [
              0,
              0,
              -0.3
            ],
            [
              -Math.PI / 2,
              0,
              0
            ]
          ]
        ],
        XYZ: [
          [
            new k(new Et(0.2, 0), i)
          ]
        ],
        XY: [
          [
            new k(new oe(0.2, 0.2, 0.01), i),
            [
              0.15,
              0.15,
              0
            ]
          ]
        ],
        YZ: [
          [
            new k(new oe(0.2, 0.2, 0.01), i),
            [
              0,
              0.15,
              0.15
            ],
            [
              0,
              Math.PI / 2,
              0
            ]
          ]
        ],
        XZ: [
          [
            new k(new oe(0.2, 0.2, 0.01), i),
            [
              0.15,
              0,
              0.15
            ],
            [
              -Math.PI / 2,
              0,
              0
            ]
          ]
        ]
      }, C = {
        START: [
          [
            new k(new Et(0.01, 2), s),
            null,
            null,
            null,
            "helper"
          ]
        ],
        END: [
          [
            new k(new Et(0.01, 2), s),
            null,
            null,
            null,
            "helper"
          ]
        ],
        DELTA: [
          [
            new Ee(b(), s),
            null,
            null,
            null,
            "helper"
          ]
        ],
        X: [
          [
            new Ee(w, s),
            [
              -1e3,
              0,
              0
            ],
            null,
            [
              1e6,
              1,
              1
            ],
            "helper"
          ]
        ],
        Y: [
          [
            new Ee(w, s),
            [
              0,
              -1e3,
              0
            ],
            [
              0,
              0,
              Math.PI / 2
            ],
            [
              1e6,
              1,
              1
            ],
            "helper"
          ]
        ],
        Z: [
          [
            new Ee(w, s),
            [
              0,
              0,
              -1e3
            ],
            [
              0,
              -Math.PI / 2,
              0
            ],
            [
              1e6,
              1,
              1
            ],
            "helper"
          ]
        ]
      }, P = {
        XYZE: [
          [
            new k(v(0.5, 1), m),
            null,
            [
              0,
              Math.PI / 2,
              0
            ]
          ]
        ],
        X: [
          [
            new k(v(0.5, 0.5), o)
          ]
        ],
        Y: [
          [
            new k(v(0.5, 0.5), n),
            null,
            [
              0,
              0,
              -Math.PI / 2
            ]
          ]
        ],
        Z: [
          [
            new k(v(0.5, 0.5), r),
            null,
            [
              0,
              Math.PI / 2,
              0
            ]
          ]
        ],
        E: [
          [
            new k(v(0.75, 1), d),
            null,
            [
              0,
              Math.PI / 2,
              0
            ]
          ]
        ]
      }, A = {
        AXIS: [
          [
            new Ee(w, s),
            [
              -1e3,
              0,
              0
            ],
            null,
            [
              1e6,
              1,
              1
            ],
            "helper"
          ]
        ]
      }, D = {
        XYZE: [
          [
            new k(new Ei(0.25, 10, 8), i)
          ]
        ],
        X: [
          [
            new k(new gt(0.5, 0.1, 4, 24), i),
            [
              0,
              0,
              0
            ],
            [
              0,
              -Math.PI / 2,
              -Math.PI / 2
            ]
          ]
        ],
        Y: [
          [
            new k(new gt(0.5, 0.1, 4, 24), i),
            [
              0,
              0,
              0
            ],
            [
              Math.PI / 2,
              0,
              0
            ]
          ]
        ],
        Z: [
          [
            new k(new gt(0.5, 0.1, 4, 24), i),
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              -Math.PI / 2
            ]
          ]
        ],
        E: [
          [
            new k(new gt(0.75, 0.1, 2, 24), i)
          ]
        ]
      }, R = {
        X: [
          [
            new k(x, o),
            [
              0.5,
              0,
              0
            ],
            [
              0,
              0,
              -Math.PI / 2
            ]
          ],
          [
            new k(y, o),
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              -Math.PI / 2
            ]
          ],
          [
            new k(x, o),
            [
              -0.5,
              0,
              0
            ],
            [
              0,
              0,
              Math.PI / 2
            ]
          ]
        ],
        Y: [
          [
            new k(x, n),
            [
              0,
              0.5,
              0
            ]
          ],
          [
            new k(y, n)
          ],
          [
            new k(x, n),
            [
              0,
              -0.5,
              0
            ],
            [
              0,
              0,
              Math.PI
            ]
          ]
        ],
        Z: [
          [
            new k(x, r),
            [
              0,
              0,
              0.5
            ],
            [
              Math.PI / 2,
              0,
              0
            ]
          ],
          [
            new k(y, r),
            [
              0,
              0,
              0
            ],
            [
              Math.PI / 2,
              0,
              0
            ]
          ],
          [
            new k(x, r),
            [
              0,
              0,
              -0.5
            ],
            [
              -Math.PI / 2,
              0,
              0
            ]
          ]
        ],
        XY: [
          [
            new k(new oe(0.15, 0.15, 0.01), h),
            [
              0.15,
              0.15,
              0
            ]
          ]
        ],
        YZ: [
          [
            new k(new oe(0.15, 0.15, 0.01), a),
            [
              0,
              0.15,
              0.15
            ],
            [
              0,
              Math.PI / 2,
              0
            ]
          ]
        ],
        XZ: [
          [
            new k(new oe(0.15, 0.15, 0.01), l),
            [
              0.15,
              0,
              0.15
            ],
            [
              -Math.PI / 2,
              0,
              0
            ]
          ]
        ],
        XYZ: [
          [
            new k(new oe(0.1, 0.1, 0.1), c)
          ]
        ]
      }, F = {
        X: [
          [
            new k(new de(0.2, 0, 0.6, 4), i),
            [
              0.3,
              0,
              0
            ],
            [
              0,
              0,
              -Math.PI / 2
            ]
          ],
          [
            new k(new de(0.2, 0, 0.6, 4), i),
            [
              -0.3,
              0,
              0
            ],
            [
              0,
              0,
              Math.PI / 2
            ]
          ]
        ],
        Y: [
          [
            new k(new de(0.2, 0, 0.6, 4), i),
            [
              0,
              0.3,
              0
            ]
          ],
          [
            new k(new de(0.2, 0, 0.6, 4), i),
            [
              0,
              -0.3,
              0
            ],
            [
              0,
              0,
              Math.PI
            ]
          ]
        ],
        Z: [
          [
            new k(new de(0.2, 0, 0.6, 4), i),
            [
              0,
              0,
              0.3
            ],
            [
              Math.PI / 2,
              0,
              0
            ]
          ],
          [
            new k(new de(0.2, 0, 0.6, 4), i),
            [
              0,
              0,
              -0.3
            ],
            [
              -Math.PI / 2,
              0,
              0
            ]
          ]
        ],
        XY: [
          [
            new k(new oe(0.2, 0.2, 0.01), i),
            [
              0.15,
              0.15,
              0
            ]
          ]
        ],
        YZ: [
          [
            new k(new oe(0.2, 0.2, 0.01), i),
            [
              0,
              0.15,
              0.15
            ],
            [
              0,
              Math.PI / 2,
              0
            ]
          ]
        ],
        XZ: [
          [
            new k(new oe(0.2, 0.2, 0.01), i),
            [
              0.15,
              0,
              0.15
            ],
            [
              -Math.PI / 2,
              0,
              0
            ]
          ]
        ],
        XYZ: [
          [
            new k(new oe(0.2, 0.2, 0.2), i),
            [
              0,
              0,
              0
            ]
          ]
        ]
      }, z = {
        X: [
          [
            new Ee(w, s),
            [
              -1e3,
              0,
              0
            ],
            null,
            [
              1e6,
              1,
              1
            ],
            "helper"
          ]
        ],
        Y: [
          [
            new Ee(w, s),
            [
              0,
              -1e3,
              0
            ],
            [
              0,
              0,
              Math.PI / 2
            ],
            [
              1e6,
              1,
              1
            ],
            "helper"
          ]
        ],
        Z: [
          [
            new Ee(w, s),
            [
              0,
              0,
              -1e3
            ],
            [
              0,
              -Math.PI / 2,
              0
            ],
            [
              1e6,
              1,
              1
            ],
            "helper"
          ]
        ]
      };
      function O($) {
        const Z = new Fe();
        for (const j in $) for (let se = $[j].length; se--; ) {
          const ae = $[j][se][0].clone(), Ze = $[j][se][1], Xe = $[j][se][2], Ke = $[j][se][3], Jt = $[j][se][4];
          ae.name = j, ae.tag = Jt, Ze && ae.position.set(Ze[0], Ze[1], Ze[2]), Xe && ae.rotation.set(Xe[0], Xe[1], Xe[2]), Ke && ae.scale.set(Ke[0], Ke[1], Ke[2]), ae.updateMatrix();
          const At = ae.geometry.clone();
          At.applyMatrix4(ae.matrix), ae.geometry = At, ae.renderOrder = 1 / 0, ae.position.set(0, 0, 0), ae.rotation.set(0, 0, 0), ae.scale.set(1, 1, 1), Z.add(ae);
        }
        return Z;
      }
      this.gizmo = {}, this.picker = {}, this.helper = {}, this.add(this.gizmo.translate = O(T)), this.add(this.gizmo.rotate = O(P)), this.add(this.gizmo.scale = O(R)), this.add(this.picker.translate = O(M)), this.add(this.picker.rotate = O(D)), this.add(this.picker.scale = O(F)), this.add(this.helper.translate = O(C)), this.add(this.helper.rotate = O(A)), this.add(this.helper.scale = O(z)), this.picker.translate.visible = false, this.picker.rotate.visible = false, this.picker.scale.visible = false;
    }
    updateMatrixWorld(e) {
      const i = (this.mode === "scale" ? "local" : this.space) === "local" ? this.worldQuaternion : $t;
      this.gizmo.translate.visible = this.mode === "translate", this.gizmo.rotate.visible = this.mode === "rotate", this.gizmo.scale.visible = this.mode === "scale", this.helper.translate.visible = this.mode === "translate", this.helper.rotate.visible = this.mode === "rotate", this.helper.scale.visible = this.mode === "scale";
      let s = [];
      s = s.concat(this.picker[this.mode].children), s = s.concat(this.gizmo[this.mode].children), s = s.concat(this.helper[this.mode].children);
      for (let o = 0; o < s.length; o++) {
        const n = s[o];
        n.visible = true, n.rotation.set(0, 0, 0), n.position.copy(this.worldPosition);
        let r;
        if (this.camera.isOrthographicCamera ? r = (this.camera.top - this.camera.bottom) / this.camera.zoom : r = this.worldPosition.distanceTo(this.cameraPosition) * Math.min(1.9 * Math.tan(Math.PI * this.camera.fov / 360) / this.camera.zoom, 7), n.scale.set(1, 1, 1).multiplyScalar(r * this.size / 4), n.tag === "helper") {
          n.visible = false, n.name === "AXIS" ? (n.visible = !!this.axis, this.axis === "X" && (Q.setFromEuler(Dt.set(0, 0, 0)), n.quaternion.copy(i).multiply(Q), Math.abs(B.copy(vt).applyQuaternion(i).dot(this.eye)) > 0.9 && (n.visible = false)), this.axis === "Y" && (Q.setFromEuler(Dt.set(0, 0, Math.PI / 2)), n.quaternion.copy(i).multiply(Q), Math.abs(B.copy(Ve).applyQuaternion(i).dot(this.eye)) > 0.9 && (n.visible = false)), this.axis === "Z" && (Q.setFromEuler(Dt.set(0, Math.PI / 2, 0)), n.quaternion.copy(i).multiply(Q), Math.abs(B.copy(wt).applyQuaternion(i).dot(this.eye)) > 0.9 && (n.visible = false)), this.axis === "XYZE" && (Q.setFromEuler(Dt.set(0, Math.PI / 2, 0)), B.copy(this.rotationAxis), n.quaternion.setFromRotationMatrix(as.lookAt(ns, B, Ve)), n.quaternion.multiply(Q), n.visible = this.dragging), this.axis === "E" && (n.visible = false)) : n.name === "START" ? (n.position.copy(this.worldPositionStart), n.visible = this.dragging) : n.name === "END" ? (n.position.copy(this.worldPosition), n.visible = this.dragging) : n.name === "DELTA" ? (n.position.copy(this.worldPositionStart), n.quaternion.copy(this.worldQuaternionStart), re.set(1e-10, 1e-10, 1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1), re.applyQuaternion(this.worldQuaternionStart.clone().invert()), n.scale.copy(re), n.visible = this.dragging) : (n.quaternion.copy(i), this.dragging ? n.position.copy(this.worldPositionStart) : n.position.copy(this.worldPosition), this.axis && (n.visible = this.axis.search(n.name) !== -1));
          continue;
        }
        n.quaternion.copy(i), this.mode === "translate" || this.mode === "scale" ? (n.name === "X" && Math.abs(B.copy(vt).applyQuaternion(i).dot(this.eye)) > 0.99 && (n.scale.set(1e-10, 1e-10, 1e-10), n.visible = false), n.name === "Y" && Math.abs(B.copy(Ve).applyQuaternion(i).dot(this.eye)) > 0.99 && (n.scale.set(1e-10, 1e-10, 1e-10), n.visible = false), n.name === "Z" && Math.abs(B.copy(wt).applyQuaternion(i).dot(this.eye)) > 0.99 && (n.scale.set(1e-10, 1e-10, 1e-10), n.visible = false), n.name === "XY" && Math.abs(B.copy(wt).applyQuaternion(i).dot(this.eye)) < 0.2 && (n.scale.set(1e-10, 1e-10, 1e-10), n.visible = false), n.name === "YZ" && Math.abs(B.copy(vt).applyQuaternion(i).dot(this.eye)) < 0.2 && (n.scale.set(1e-10, 1e-10, 1e-10), n.visible = false), n.name === "XZ" && Math.abs(B.copy(Ve).applyQuaternion(i).dot(this.eye)) < 0.2 && (n.scale.set(1e-10, 1e-10, 1e-10), n.visible = false)) : this.mode === "rotate" && (Lt.copy(i), B.copy(this.eye).applyQuaternion(Q.copy(i).invert()), n.name.search("E") !== -1 && n.quaternion.setFromRotationMatrix(as.lookAt(this.eye, ns, Ve)), n.name === "X" && (Q.setFromAxisAngle(vt, Math.atan2(-B.y, B.z)), Q.multiplyQuaternions(Lt, Q), n.quaternion.copy(Q)), n.name === "Y" && (Q.setFromAxisAngle(Ve, Math.atan2(B.x, B.z)), Q.multiplyQuaternions(Lt, Q), n.quaternion.copy(Q)), n.name === "Z" && (Q.setFromAxisAngle(wt, Math.atan2(B.y, B.x)), Q.multiplyQuaternions(Lt, Q), n.quaternion.copy(Q))), n.visible = n.visible && (n.name.indexOf("X") === -1 || this.showX), n.visible = n.visible && (n.name.indexOf("Y") === -1 || this.showY), n.visible = n.visible && (n.name.indexOf("Z") === -1 || this.showZ), n.visible = n.visible && (n.name.indexOf("E") === -1 || this.showX && this.showY && this.showZ), n.material._color = n.material._color || n.material.color.clone(), n.material._opacity = n.material._opacity || n.material.opacity, n.material.color.copy(n.material._color), n.material.opacity = n.material._opacity, this.enabled && this.axis && (n.name === this.axis ? (n.material.color.copy(this.materialLib.active.color), n.material.opacity = 1) : this.axis.split("").some(function(a) {
          return n.name === a;
        }) && (n.material.color.copy(this.materialLib.active.color), n.material.opacity = 1));
      }
      super.updateMatrixWorld(e);
    }
  }
  class ga extends k {
    constructor() {
      super(new Ct(1e5, 1e5, 2, 2), new le({
        visible: false,
        wireframe: true,
        side: lt,
        transparent: true,
        opacity: 0.1,
        toneMapped: false
      })), this.isTransformControlsPlane = true, this.type = "TransformControlsPlane";
    }
    updateMatrixWorld(e) {
      let t = this.space;
      switch (this.position.copy(this.worldPosition), this.mode === "scale" && (t = "local"), Ot.copy(vt).applyQuaternion(t === "local" ? this.worldQuaternion : $t), ft.copy(Ve).applyQuaternion(t === "local" ? this.worldQuaternion : $t), yt.copy(wt).applyQuaternion(t === "local" ? this.worldQuaternion : $t), B.copy(ft), this.mode) {
        case "translate":
        case "scale":
          switch (this.axis) {
            case "X":
              B.copy(this.eye).cross(Ot), Te.copy(Ot).cross(B);
              break;
            case "Y":
              B.copy(this.eye).cross(ft), Te.copy(ft).cross(B);
              break;
            case "Z":
              B.copy(this.eye).cross(yt), Te.copy(yt).cross(B);
              break;
            case "XY":
              Te.copy(yt);
              break;
            case "YZ":
              Te.copy(Ot);
              break;
            case "XZ":
              B.copy(yt), Te.copy(ft);
              break;
            case "XYZ":
            case "E":
              Te.set(0, 0, 0);
              break;
          }
          break;
        case "rotate":
        default:
          Te.set(0, 0, 0);
      }
      Te.length() === 0 ? this.quaternion.copy(this.cameraQuaternion) : (rs.lookAt(re.set(0, 0, 0), Te, B), this.quaternion.setFromRotationMatrix(rs)), super.updateMatrixWorld(e);
    }
  }
  class pa {
    constructor(e, t, i, s = null, o = null) {
      this.scene = e, this.camera = t, this.renderer = i, this.characterController = o, this.enabled = false;
      const n = this.checkIfLoggingShouldBeEnabled();
      this.logger = new N("GizmoManager", n), this.objects = [], this.controls = /* @__PURE__ */ new Map(), this.controlHelpers = /* @__PURE__ */ new Map(), this.isGizmoDragging = false, this.isGizmoHovering = false, this.isVisible = true, this.hasGizmoInDefinitions = false, this.hasGizmoURLParam = false, this.currentMode = "translate", this.currentSpace = "world", this.idleHelper = null, this.inputManager = null, this.activeObject = null, this.spawnedGizmoCounter = 0, this.currentGizmoIndex = 0, this.raycaster = new Ii(), this.mouse = new Ue(), this.checkGizmoURLParam(), this.enable();
    }
    checkIfLoggingShouldBeEnabled() {
      try {
        if (new URLSearchParams(window.location.search).has("gizmo")) return true;
      } catch {
      }
      return false;
    }
    updateLoggingBasedOnGizmoData() {
      const e = this.objects && this.objects.length > 0, t = this.hasGizmoInDefinitions || this.hasGizmoURLParam || e;
      this.logger.debug !== t && (this.logger.setDebug(t), this.logger.log(`Logging ${t ? "enabled" : "disabled"} based on gizmo data availability`));
    }
    checkGizmoURLParam() {
      try {
        const e = new URLSearchParams(window.location.search);
        this.hasGizmoURLParam = e.has("gizmo"), this.hasGizmoURLParam && this.updateLoggingBasedOnGizmoData();
      } catch (e) {
        this.logger.warn("Failed to check URL params:", e), this.hasGizmoURLParam = false;
      }
    }
    setIntegration(e, t) {
      this.idleHelper = e || null, this.inputManager = t || null, this.updateGlobalBlocks();
    }
    updateGlobalBlocks() {
      const e = this.objects && this.objects.length > 0, t = this.hasGizmoInDefinitions || e || this.hasGizmoURLParam;
      this.idleHelper && typeof this.idleHelper.setGlobalDisable == "function" && this.idleHelper.setGlobalDisable(t), this.inputManager && typeof this.inputManager.setPointerLockBlocked == "function" && t && this.inputManager.setPointerLockBlocked(true), this.characterController && (t && typeof this.characterController.enableFlightMode == "function" ? this.characterController.enableFlightMode() : !t && typeof this.characterController.disableFlightMode == "function" && this.characterController.disableFlightMode());
    }
    applyGlobalBlocksFromDefinitions({ sceneDefs: e = null, videoDefs: t = null, colliderDefs: i = null, lightDefs: s = null } = {}) {
      const o = (r) => r ? Array.isArray(r) ? r : typeof r == "object" ? Object.values(r) : [] : [], n = [
        ...o(e),
        ...o(t),
        ...o(i),
        ...o(s)
      ];
      this.hasGizmoInDefinitions = n.some((r) => r && r.gizmo === true), this.updateLoggingBasedOnGizmoData();
      try {
        (window == null ? void 0 : window.gameManager) && typeof window.gameManager.setState == "function" && window.gameManager.setState({
          hasGizmoInData: this.hasGizmoInDefinitions
        });
      } catch {
      }
      this.updateGlobalBlocks();
    }
    registerSceneObjects(e) {
      if (!(!e || !e.objects || !e.objectData)) try {
        e.objects.forEach((t, i) => {
          const s = e.objectData.get(i);
          s && s.gizmo && this.registerObject(t, i, s.type || "scene");
        });
      } catch (t) {
        this.logger.warn("registerSceneObjects failed:", t);
      }
    }
    registerLights(e, t) {
      if (!(!e || !t)) try {
        for (const [i, s] of Object.entries(t)) if (s.gizmo) {
          const o = e.getLight(s.id);
          o && this.registerObject(o, s.id, "light");
        }
      } catch (i) {
        this.logger.warn("registerLights failed:", i);
      }
    }
    hasAnyGizmoObjects(e) {
      var _a3;
      try {
        return Array.from(((_a3 = e == null ? void 0 : e.objectData) == null ? void 0 : _a3.values()) || []).some((i) => i && i.gizmo === true);
      } catch {
        return false;
      }
    }
    applyIdleBlockIfNeeded(e, t) {
      e && this.hasAnyGizmoObjects(t) && typeof e.setGlobalDisable == "function" && (e.setGlobalDisable(true), this.logger.log("IdleHelper: Globally disabled due to gizmo-enabled object(s)"));
    }
    applyPointerLockBlockIfNeeded(e, t) {
      if (!e || typeof e.setPointerLockBlocked != "function") return;
      const i = this.hasAnyGizmoObjects(t);
      e.setPointerLockBlocked(i), i && this.logger.log("InputManager: Pointer lock blocked due to gizmo-enabled object(s)");
    }
    enable() {
      this.enabled || (this.enabled = true, this.setupEventListeners(), this.logger.log("Enabled (multi-gizmo mode)"));
    }
    disable() {
      if (this.enabled) {
        this.enabled = false;
        for (const e of this.controls.values()) e && e.dispose();
        this.controls.clear();
        for (const e of this.controlHelpers.values()) e && e.parent && e.parent.remove(e);
        this.controlHelpers.clear(), this.removeEventListeners();
      }
    }
    registerObject(e, t = null, i = "object") {
      if (!e) {
        this.logger.warn("Attempted to register null object");
        return;
      }
      const s = {
        object: e,
        id: t || e.name || "unnamed",
        type: i
      };
      this.objects.push(s);
      const o = new na(this.camera, this.renderer.domElement);
      if (o.setMode(this.currentMode), o.setSpace(this.currentSpace), o.attach(e), typeof o.getHelper == "function") {
        const n = o.getHelper();
        n && (this.scene.add(n), n.visible = this.isVisible, this.controlHelpers.set(e, n));
      }
      o.addEventListener("dragging-changed", (n) => {
        n.value ? (this.isGizmoDragging = true, this.activeObject = s, this.logger.log(`Dragging "${s.id}"`)) : (this.isGizmoDragging = false, this.logger.log(`Drag ended "${s.id}"`), this.logObjectTransform(s));
      }), o.addEventListener("hoveron", () => {
        this.isGizmoHovering = true;
      }), o.addEventListener("hoveroff", () => {
        this.isGizmoHovering = false;
      }), this.controls.set(e, o), this.logger.log(`Registered "${s.id}" (${i}) with gizmo`, e), this.logger.log(`  Total registered objects: ${this.objects.length}`), this.updateLoggingBasedOnGizmoData(), this.updateGlobalBlocks();
    }
    selectObjectById(e) {
      if (!e) return;
      const t = this.objects.find((i) => i.id === e);
      t && (this.activeObject = t, this.logger.log(`Set active object to "${e}"`));
    }
    unregisterObject(e) {
      const t = this.objects.findIndex((o) => o.object === e);
      t !== -1 && this.objects.splice(t, 1);
      const i = this.controls.get(e);
      i && (i.dispose(), this.controls.delete(e));
      const s = this.controlHelpers.get(e);
      s && s.parent && s.parent.remove(s), this.controlHelpers.delete(e), this.updateLoggingBasedOnGizmoData(), this.updateGlobalBlocks();
    }
    setupEventListeners() {
      this.onMouseDown = this.handleMouseDown.bind(this), this.renderer.domElement.addEventListener("mousedown", this.onMouseDown), this.onMouseUp = this.handleMouseUp.bind(this), this.renderer.domElement.addEventListener("mouseup", this.onMouseUp), this.onKeyDown = this.handleKeyDown.bind(this), window.addEventListener("keydown", this.onKeyDown);
    }
    isPointerOverGizmo() {
      return this.isGizmoHovering || this.isGizmoDragging;
    }
    removeEventListeners() {
      this.onMouseDown && this.renderer.domElement.removeEventListener("mousedown", this.onMouseDown), this.onMouseUp && this.renderer.domElement.removeEventListener("mouseup", this.onMouseUp), this.onKeyDown && window.addEventListener("keydown", this.onKeyDown);
    }
    handleMouseDown(e) {
      if (Array.from(this.controls.values()).some((n) => n.dragging)) return;
      const i = this.renderer.domElement.getBoundingClientRect();
      this.mouse.x = (e.clientX - i.left) / i.width * 2 - 1, this.mouse.y = -((e.clientY - i.top) / i.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera);
      const s = this.objects.map((n) => n.object), o = this.raycaster.intersectObjects(s, true);
      if (o.length > 0) {
        let n = null;
        for (const r of this.objects) if (o[0].object === r.object || o[0].object.parent === r.object || r.object.children.includes(o[0].object)) {
          n = r;
          break;
        }
        n && (this.activeObject = n, this.logger.log(`Focused "${n.id}" (${n.type})`));
      }
    }
    handleMouseUp(e) {
    }
    handleKeyDown(e) {
      if (!this.enabled) {
        this.logger.log("handleKeyDown called but not enabled");
        return;
      }
      if (!(document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA")) switch (e.key) {
        case "p":
        case "P":
          this.logger.log("P key pressed, hasGizmoURLParam:", this.hasGizmoURLParam), this.hasGizmoURLParam ? this.spawnGizmoInFrontOfCamera() : this.logger.log("P key pressed but gizmo URL param not present");
          break;
        case "g":
        case "G":
          if (this.controls.size === 0) return;
          this.currentMode = "translate";
          for (const t of this.controls.values()) t.setMode("translate");
          this.logger.log("Mode = Translate (all gizmos)");
          break;
        case "r":
        case "R":
          if (this.controls.size === 0) return;
          this.currentMode = "rotate";
          for (const t of this.controls.values()) t.setMode("rotate");
          this.logger.log("Mode = Rotate (all gizmos)");
          break;
        case "x":
        case "X":
          if (this.controls.size === 0) return;
          this.currentMode = "scale";
          for (const t of this.controls.values()) t.setMode("scale");
          this.logger.log("Mode = Scale (all gizmos)");
          break;
        case " ":
          if (this.controls.size === 0) return;
          this.currentSpace = this.currentSpace === "world" ? "local" : "world";
          for (const t of this.controls.values()) t.setSpace(this.currentSpace);
          this.logger.log(`Space = ${this.currentSpace === "world" ? "World" : "Local"} (all gizmos)`);
          break;
        case "h":
        case "H":
          if (this.controls.size === 0) return;
          this.setVisible(!this.isVisible), this.logger.log(`${this.isVisible ? "Shown" : "Hidden"} (all gizmos)`);
          break;
        case "u":
        case "U":
          this.cycleAndTeleportToNextGizmo();
          break;
        case "Escape":
          this.activeObject && (this.logger.log(`Cleared focus from "${this.activeObject.id}"`), this.activeObject = null);
          break;
      }
    }
    spawnGizmoInFrontOfCamera() {
      if (!this.camera) {
        this.logger.warn("Cannot spawn gizmo - no camera reference");
        return;
      }
      const e = new Ei(0.1, 16, 16), t = new le({
        color: 16711935,
        wireframe: true
      }), i = new k(e, t), s = new S();
      this.camera.getWorldDirection(s);
      const o = new S();
      o.copy(this.camera.position), o.addScaledVector(s, 5), i.position.copy(o), this.scene.add(i), this.spawnedGizmoCounter++;
      const n = `spawned-gizmo-${this.spawnedGizmoCounter}`;
      this.registerObject(i, n, "spawned");
      const r = `position: {x: ${o.x.toFixed(2)}, y: ${o.y.toFixed(2)}, z: ${o.z.toFixed(2)}}`;
      this.logger.logRaw(`Spawned gizmo "${n}" at ${r}`);
    }
    cycleAndTeleportToNextGizmo() {
      if (this.objects.length === 0) {
        this.logger.log("No gizmo objects available");
        return;
      }
      if (this.objects.length === 1) {
        this.activeObject = this.objects[0], this.teleportCharacterToObject(this.objects[0]);
        return;
      }
      this.currentGizmoIndex = (this.currentGizmoIndex + 1) % this.objects.length;
      const e = this.objects[this.currentGizmoIndex];
      this.activeObject = e, this.logger.log(`Cycling to gizmo ${this.currentGizmoIndex + 1}/${this.objects.length} ("${e.id}")`), this.teleportCharacterToObject(e);
    }
    teleportCharacterToObject(e) {
      var _a3;
      if (!e || !e.object) {
        this.logger.warn("Cannot teleport - no object specified");
        return;
      }
      if ((_a3 = this.characterController) == null ? void 0 : _a3.physicsManager, !this.characterController) {
        this.logger.warn("Cannot teleport - character controller not found");
        return;
      }
      const t = e.object, i = new S(0, 0, -1);
      i.applyQuaternion(t.quaternion), i.normalize();
      const s = new S();
      s.copy(t.position), s.addScaledVector(i, 5), s.y = Math.max(0.9, s.y), this.characterController.character ? (this.characterController.character.setTranslation({
        x: s.x,
        y: s.y,
        z: s.z
      }, true), this.logger.log(`Teleported character to 5m in front of "${e.id}"`), this.logger.logRaw(`  Object position: {x: ${t.position.x.toFixed(2)}, y: ${t.position.y.toFixed(2)}, z: ${t.position.z.toFixed(2)}}`), this.logger.logRaw(`  Object forward: {x: ${i.x.toFixed(3)}, y: ${i.y.toFixed(3)}, z: ${i.z.toFixed(3)}}`), this.logger.logRaw(`  Teleport position: {x: ${s.x.toFixed(2)}, y: ${s.y.toFixed(2)}, z: ${s.z.toFixed(2)}}`)) : this.logger.warn("Cannot teleport - character physics body not found");
    }
    setVisible(e) {
      this.isVisible = !!e;
      for (const t of this.controlHelpers.values()) t && (t.visible = this.isVisible);
      for (const t of this.controls.values()) t && (t.enabled = this.isVisible);
    }
    selectObject(e) {
      this.activeObject = e, this.logger.log(`Selected "${e.id}" (${e.type})`), this.logObjectTransform(e);
    }
    deselectObject() {
      this.activeObject && (this.logger.log(`Deselected "${this.activeObject.id}"`), this.activeObject = null);
    }
    logObjectTransform(e = null) {
      const t = e || this.activeObject;
      if (!t) return;
      const i = t.object, s = i.position, o = i.rotation, n = i.scale, r = `position: {x: ${s.x.toFixed(2)}, y: ${s.y.toFixed(2)}, z: ${s.z.toFixed(2)}},
rotation: {x: ${o.x.toFixed(4)}, y: ${o.y.toFixed(4)}, z: ${o.z.toFixed(4)}},
scale: {x: ${n.x.toFixed(2)}, y: ${n.y.toFixed(2)}, z: ${n.z.toFixed(2)}}`;
      this.logger.logRaw(r);
    }
    update(e) {
    }
    destroy() {
      this.disable(), this.objects = [];
    }
  }
  const mi = "viewmasterToggleOn", fi = "viewmasterToggleOff", ma = 10, yi = 0.02, fa = 10, ls = 0.7;
  class ya {
    constructor({ gameManager: e, animationManager: t, sceneManager: i, vfxManager: s = null }) {
      this.gameManager = e, this.animationManager = t, this.sceneManager = i, this.vfxManager = s || (window == null ? void 0 : window.vfxManager) || null, this.logger = new N("ViewmasterController", false), this.isTransitioning = false, this.isToggleEnabled = false, this.transitionTimeout = null, this.initialPoseApplied = false, this.initialPoseTimer = null, this.pendingVfxTimeout = null, this.isEquipped = false, this.maskPlane = null, this.fractalTimer = 0, this.timeoutTriggered = false, this.currentFractalIntensity = 0, this._splatFractal = null, this.maxIntensityReached = false, this.isAutoEquipping = false, this.glitchSequenceActive = false, this.glitchSequenceTimeout = null, this.equipRetryTimeout = null, this.handleStateChanged = this.handleStateChanged.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    initialize() {
      if (!this.gameManager || !this.animationManager) {
        this.logger.warn("Missing dependencies, skipping initialization");
        return;
      }
      this.gameManager.on("state:changed", this.handleStateChanged), window.addEventListener("keydown", this.handleKeyDown, false), this.handleStateChanged(this.gameManager.getState()), this.applyInitialAttachmentIfNeeded(this.gameManager.getState()), this.applyFractalIntensity(0), this.logger.log("Initialized");
    }
    handleStateChanged(e, t) {
      const i = e && e.currentState !== void 0 && e.currentState >= p.SHADOW_AMPLIFICATIONS;
      this.isToggleEnabled = i, !i && (e == null ? void 0 : e.isViewmasterEquipped) && this.gameManager.setState({
        isViewmasterEquipped: false
      });
      const s = (e == null ? void 0 : e.currentState) === p.SHADOW_AMPLIFICATIONS && (t == null || (t == null ? void 0 : t.currentState) !== p.SHADOW_AMPLIFICATIONS), o = t == null;
      s && !this.isEquipped && !this.isTransitioning && !this.isAutoEquipping && (this.logger.log(`SHADOW_AMPLIFICATIONS state detected (currentState: ${e == null ? void 0 : e.currentState}), auto-equipping viewmaster`), this.logger.log(`Current equipped state: ${this.isEquipped}, transitioning: ${this.isTransitioning}, autoEquipping: ${this.isAutoEquipping}, oldState: ${o ? "undefined/null (init)" : t.currentState}`), (e == null ? void 0 : e.isViewmasterEquipped) || this.gameManager.setState({
        isViewmasterEquipped: true,
        viewmasterManuallyRemoved: false,
        viewmasterOverheatDialogIndex: null
      }), o ? setTimeout(() => {
        this.equipForShadowAmplifications();
      }, 100) : this.equipForShadowAmplifications());
      const n = this.isEquipped;
      this.isAutoEquipping || (this.isEquipped = !!(e == null ? void 0 : e.isViewmasterEquipped)), this.isEquipped !== n && (this.isEquipped ? (this.startFractalRamp(), (e == null ? void 0 : e.currentState) === p.SHADOW_AMPLIFICATIONS && (this.maxIntensityReached = false)) : (this.stopFractalRamp(), this.maxIntensityReached = false)), (e == null ? void 0 : e.currentState) !== p.SHADOW_AMPLIFICATIONS && (this.maxIntensityReached && (this.maxIntensityReached = false), this.glitchSequenceActive && (this.glitchSequenceActive = false, clearTimeout(this.glitchSequenceTimeout), this.glitchSequenceTimeout = null, (e == null ? void 0 : e.currentState) !== p.CAT_SAVE && this.gameManager.setState({
        glitchIntense: false
      }))), this.applyInitialAttachmentIfNeeded(e);
    }
    handleKeyDown(e) {
      if (!this.isToggleEnabled || e.repeat || e.code !== "Space" && e.key !== " ") return;
      const t = document.activeElement;
      if (t) {
        const i = t.tagName;
        if (i === "INPUT" || i === "TEXTAREA") return;
      }
      this.toggle();
    }
    applyInitialAttachmentIfNeeded(e) {
      var _a3;
      if (this.initialPoseApplied || !e || e.currentState === void 0 || e.currentState < p.CURSOR) return;
      if (!((_a3 = this.sceneManager) == null ? void 0 : _a3.hasObject("viewmaster"))) {
        this.initialPoseTimer || (this.initialPoseTimer = setTimeout(() => {
          this.initialPoseTimer = null, this.applyInitialAttachmentIfNeeded(this.gameManager.getState());
        }, 250));
        return;
      }
      const t = _e[fi];
      if (!t) {
        this.initialPoseApplied = true, this.logger.warn("Toggle-off animation missing; skipping initial pose");
        return;
      }
      this.initialPoseApplied = true, this.isEquipped = false, this.gameManager.setState({
        isViewmasterEquipped: false,
        viewmasterManuallyRemoved: false,
        viewmasterOverheatDialogIndex: null
      }), this.isTransitioning = true, this.animationManager.playObjectAnimation(t), this.ensureMaskPlane(), this.updateMaskPlane(false), this.stopFractalRamp();
      const i = Math.max(t.duration || 1, 1) * 1e3;
      clearTimeout(this.transitionTimeout), this.transitionTimeout = setTimeout(() => {
        this.isTransitioning = false;
      }, i + 200);
    }
    toggle() {
      var _a3;
      if (this.isTransitioning) return;
      if (!((_a3 = this.sceneManager) == null ? void 0 : _a3.hasObject("viewmaster"))) {
        this.logger.warn("Viewmaster object not loaded yet");
        return;
      }
      const e = !this.isEquipped, t = e ? mi : fi, i = _e[t];
      if (!i) {
        this.logger.warn(`Animation '${t}' not found`);
        return;
      }
      this.isTransitioning = true, this.isEquipped = e, this.animationManager.playObjectAnimation(i), this.ensureMaskPlane(), this.updateMaskPlane(true);
      const s = Math.max(i.duration || 1, 1) * 1e3;
      if (clearTimeout(this.transitionTimeout), this.transitionTimeout = setTimeout(() => {
        this.isTransitioning = false, this.updateMaskPlane(this.isEquipped), !this.isEquipped && this.timeoutTriggered && (this.timeoutTriggered = false);
      }, s + 200), this.pendingVfxTimeout && (clearTimeout(this.pendingVfxTimeout), this.pendingVfxTimeout = null), e) {
        this.stopFractalRamp();
        const o = Math.max(s * ls, 0);
        this.pendingVfxTimeout = setTimeout(() => {
          this.gameManager.setState({
            isViewmasterEquipped: true,
            viewmasterManuallyRemoved: false,
            viewmasterOverheatDialogIndex: null
          }), this.startFractalRamp(), this.pendingVfxTimeout = null;
        }, o);
      } else {
        const o = this.gameManager.getState(), n = this.timeoutTriggered && (o == null ? void 0 : o.viewmasterOverheatDialogIndex) !== null && (o == null ? void 0 : o.viewmasterOverheatDialogIndex) !== void 0;
        this.gameManager.setState({
          isViewmasterEquipped: false,
          viewmasterManuallyRemoved: !this.timeoutTriggered,
          viewmasterOverheatDialogIndex: n ? o.viewmasterOverheatDialogIndex : null
        }), this.stopFractalRamp();
      }
    }
    ensureMaskPlane() {
      if (this.maskPlane || !this.sceneManager) return;
      const e = this.sceneManager.getObject("viewmaster");
      if (!e) return;
      const t = new Ct(0.6, 0.35), i = new le({
        color: 0,
        transparent: true,
        opacity: 0,
        depthWrite: true,
        depthTest: true,
        colorWrite: false,
        side: lt
      });
      this.maskPlane = new k(t, i), this.maskPlane.position.set(0, 0, -0.1), this.maskPlane.renderOrder = 10050, this.maskPlane.visible = false, e.add(this.maskPlane);
    }
    updateMaskPlane(e) {
      this.maskPlane && (this.maskPlane.visible = !!e);
    }
    getFractalEffect() {
      var _a3, _b2, _c, _d;
      if (this._splatFractal && typeof this._splatFractal.setExternalIntensity == "function") return this._splatFractal;
      const e = ((_b2 = (_a3 = this.vfxManager) == null ? void 0 : _a3.effects) == null ? void 0 : _b2.splatFractal) || ((_d = (_c = window == null ? void 0 : window.vfxManager) == null ? void 0 : _c.effects) == null ? void 0 : _d.splatFractal) || null;
      return e && typeof e.setExternalIntensity == "function" ? (this._splatFractal = e, e) : null;
    }
    applyFractalIntensity(e) {
      const t = Math.max(0, e);
      this.currentFractalIntensity = t;
      const i = this.getFractalEffect();
      i && i.setExternalIntensity(t);
    }
    startFractalRamp() {
      this.fractalTimer = 0, this.timeoutTriggered = false, this.applyFractalIntensity(yi);
    }
    stopFractalRamp() {
      this.fractalTimer = 0, this.timeoutTriggered = false, this.applyFractalIntensity(0);
    }
    equipForShadowAmplifications() {
      var _a3;
      if (!((_a3 = this.sceneManager) == null ? void 0 : _a3.hasObject("viewmaster"))) {
        this.logger.warn("Viewmaster object not loaded yet, retrying..."), this.equipRetryTimeout || (this.equipRetryTimeout = setTimeout(() => {
          this.equipRetryTimeout = null, this.equipForShadowAmplifications();
        }, 250));
        return;
      }
      const e = _e[mi];
      if (!e) {
        this.logger.warn(`Animation '${mi}' not found`);
        return;
      }
      this.equipRetryTimeout && (clearTimeout(this.equipRetryTimeout), this.equipRetryTimeout = null), this.isAutoEquipping = true, this.isTransitioning = true, this.isEquipped = true, this.animationManager.playObjectAnimation(e), this.ensureMaskPlane(), this.updateMaskPlane(true);
      const t = Math.max(e.duration || 1, 1) * 1e3;
      clearTimeout(this.transitionTimeout), this.transitionTimeout = setTimeout(() => {
        this.isTransitioning = false, this.updateMaskPlane(this.isEquipped);
      }, t + 200), this.pendingVfxTimeout && (clearTimeout(this.pendingVfxTimeout), this.pendingVfxTimeout = null);
      const i = Math.max(t * ls, 0);
      this.pendingVfxTimeout = setTimeout(() => {
        this.startFractalRamp(), this.isAutoEquipping = false, this.pendingVfxTimeout = null;
      }, i);
    }
    forceTakeoff() {
      this.timeoutTriggered || (this.timeoutTriggered = true, !(this.isTransitioning || !this.isEquipped) && (this.logger.log("Fractal intensity threshold reached, forcing takeoff"), this.pendingVfxTimeout && (clearTimeout(this.pendingVfxTimeout), this.pendingVfxTimeout = null), this.gameManager.setState({
        viewmasterManuallyRemoved: false
      }), this.toggle()));
    }
    update(e = 0.016) {
      var _a3, _b2;
      this._splatFractal || this.getFractalEffect();
      const i = ((_b2 = (_a3 = this.gameManager) == null ? void 0 : _a3.getState()) == null ? void 0 : _b2.currentState) === p.SHADOW_AMPLIFICATIONS;
      if (this.isEquipped || this.timeoutTriggered && this.isTransitioning) {
        if (this.getFractalEffect()) {
          this.fractalTimer += e;
          const o = Math.min(this.fractalTimer / ma, 1), n = Math.pow(o, 4), r = yi + n * (fa - yi);
          if (this.applyFractalIntensity(r), o >= 1 && this.isEquipped) if (i) {
            if (!this.maxIntensityReached && !this.glitchSequenceActive) {
              this.maxIntensityReached = true, this.glitchSequenceActive = true, this.logger.log("Max fractal intensity reached in SHADOW_AMPLIFICATIONS, starting glitch sequence");
              const a = this.getFractalEffect();
              a && a.audio && a.audio.isPlaying && (a.audio.stop(), this.logger.log("Stopped fractal audio at max intensity")), this.gameManager.setState({
                glitchIntense: true
              }), clearTimeout(this.glitchSequenceTimeout), this.glitchSequenceTimeout = setTimeout(() => {
                if (this.logger.log("Glitch sequence complete, taking off viewmaster and transitioning to CAT_SAVE"), this.isEquipped = false, this.applyFractalIntensity(0), this.gameManager.setState({
                  glitchIntense: false,
                  isViewmasterEquipped: false,
                  viewmasterManuallyRemoved: false,
                  viewmasterOverheatDialogIndex: null,
                  currentState: p.CAT_SAVE
                }), this.glitchSequenceActive = false, this.maxIntensityReached = false, this.glitchSequenceTimeout = null, this.gameManager.amplifierCord) {
                  const h = this.gameManager.amplifierCord.getPhoneCord();
                  h && typeof h.sever == "function" && (h.sever(), this.logger.log("Cord connection severed, cord falling to floor"));
                }
                const l = _e[fi];
                if (l) {
                  this.isTransitioning = true, this.animationManager.playObjectAnimation(l), this.updateMaskPlane(false);
                  const h = Math.max(l.duration || 1, 1) * 1e3;
                  clearTimeout(this.transitionTimeout), this.transitionTimeout = setTimeout(() => {
                    this.isTransitioning = false;
                  }, h + 200);
                }
              }, 3e3);
            }
          } else this.forceTakeoff();
        }
      } else this.currentFractalIntensity > 0 && !this.isTransitioning && this.applyFractalIntensity(0);
    }
  }
  class va {
    constructor() {
      this.container = null, this.progressRect = null, this.logger = new N("LoadingScreen", false), this.progressText = null, this.loadingTasks = /* @__PURE__ */ new Map(), this.isVisible = true, this.isComplete = false, this.gameManager = null, this.createUI();
    }
    setGameManager(e) {
      this.gameManager = e;
    }
    async createUI() {
      this.container = document.createElement("div"), this.container.id = "loading-screen", this.container.className = "loading-screen";
      const e = document.createElement("div");
      e.className = "loading-content";
      const t = document.createElement("div");
      t.className = "loading-title", t.textContent = "LOADING", e.appendChild(t);
      try {
        const s = await (await fetch("images/Loading.svg")).text(), o = document.createElement("div");
        o.className = "loading-svg-container", o.innerHTML = s, e.appendChild(o), this.progressRect = o.querySelector("#progressRect");
      } catch (i) {
        this.logger.error("Failed to load Loading.svg:", i);
      }
      this.progressText = document.createElement("div"), this.progressText.className = "loading-progress-text", this.progressText.textContent = "0%", e.appendChild(this.progressText), this.container.appendChild(e), document.body.appendChild(this.container);
    }
    registerTask(e, t = 1) {
      this.loadingTasks.set(e, {
        loaded: 0,
        total: t
      }), this.updateProgress();
    }
    updateTask(e, t, i = null) {
      const s = this.loadingTasks.get(e);
      s && (s.loaded = t, i !== null && (s.total = i), this.updateProgress());
    }
    completeTask(e) {
      const t = this.loadingTasks.get(e);
      t && (t.loaded = t.total, this.updateProgress());
    }
    updateProgress() {
      let e = 0, t = 0;
      for (const s of this.loadingTasks.values()) e += s.loaded, t += s.total;
      const i = t > 0 ? e / t * 100 : 0;
      if (this.progressRect) {
        const s = i / 100 * 850;
        this.progressRect.setAttribute("width", s.toString());
      }
      this.progressText && (this.progressText.textContent = `${Math.round(i)}%`), i >= 100 && !this.isComplete && (this.isComplete = true, this.handleLoadingComplete());
    }
    setManagers(e) {
      this.renderer = e.renderer, this.musicManager = e.musicManager, this.sfxManager = e.sfxManager, this.dialogManager = e.dialogManager, this.cameraAnimationManager = e.cameraAnimationManager, this.videoManager = e.videoManager;
    }
    handleLoadingComplete() {
      if (!this.isLoadingComplete()) return;
      const e = 0.5;
      this.hide(e), this.renderer && this.renderer.domElement && (this.renderer.domElement.style.transition = `opacity ${e}s ease-in`, setTimeout(() => {
        this.renderer.domElement.style.opacity = "1";
      }, 100)), setTimeout(() => {
        this.logger.log("Loading deferred assets..."), this.musicManager && this.musicManager.loadDeferredTracks(), this.sfxManager && this.sfxManager.loadDeferredSounds(), this.dialogManager && this.dialogManager.loadDeferredDialogs(), this.cameraAnimationManager && this.cameraAnimationManager.loadDeferredAnimations(), this.gameManager && this.gameManager.loadDeferredSceneObjects(), this.videoManager && this.videoManager.loadDeferredVideos();
      }, 600);
    }
    hide(e = 0.5) {
      !this.isVisible || !this.container || (this.isVisible = false, this.container.style.transition = `opacity ${e}s ease-out`, this.container.style.opacity = "0", this.gameManager && q(async () => {
        const { GAME_STATES: t } = await import("./index-XYoOAQ19.js").then(async (m) => {
          await m.__tla;
          return m;
        }).then((i) => i.bb);
        return {
          GAME_STATES: t
        };
      }, []).then(({ GAME_STATES: t }) => {
        this.gameManager.state.currentState === t.LOADING && this.gameManager.setState({
          currentState: t.START_SCREEN
        });
      }), setTimeout(() => {
        this.container && this.container.parentNode && this.container.parentNode.removeChild(this.container);
      }, e * 1e3));
    }
    show() {
      this.container && (this.container.style.opacity = "1", this.isVisible = true);
    }
    isLoadingComplete() {
      return this.isComplete;
    }
    getProgress() {
      let e = 0, t = 0;
      for (const i of this.loadingTasks.values()) e += i.loaded, t += i.total;
      return t > 0 ? e / t * 100 : 0;
    }
  }
  const vi = [
    "lightning",
    "star",
    "circle"
  ], wi = [
    "The Eiffel Tower",
    "The Great Wall of China",
    "The Mona Lisa",
    "aircraft carrier",
    "airplane",
    "alarm clock",
    "ambulance",
    "angel",
    "animal migration",
    "ant",
    "anvil",
    "apple",
    "arm",
    "asparagus",
    "axe",
    "backpack",
    "banana",
    "bandage",
    "barn",
    "baseball",
    "baseball bat",
    "basket",
    "basketball",
    "bat",
    "bathtub",
    "beach",
    "bear",
    "beard",
    "bed",
    "bee",
    "belt",
    "bench",
    "bicycle",
    "binoculars",
    "bird",
    "birthday cake",
    "blackberry",
    "blueberry",
    "book",
    "boomerang",
    "bottlecap",
    "bowtie",
    "bracelet",
    "brain",
    "bread",
    "bridge",
    "broccoli",
    "broom",
    "bucket",
    "bulldozer",
    "bus",
    "bush",
    "butterfly",
    "cactus",
    "cake",
    "calculator",
    "calendar",
    "camel",
    "camera",
    "camouflage",
    "campfire",
    "candle",
    "cannon",
    "canoe",
    "car",
    "carrot",
    "castle",
    "cat",
    "ceiling fan",
    "cell phone",
    "cello",
    "chair",
    "chandelier",
    "church",
    "circle",
    "clarinet",
    "clock",
    "cloud",
    "coffee cup",
    "compass",
    "computer",
    "cookie",
    "cooler",
    "couch",
    "cow",
    "crab",
    "crayon",
    "crocodile",
    "crown",
    "cruise ship",
    "cup",
    "diamond",
    "dishwasher",
    "diving board",
    "dog",
    "dolphin",
    "donut",
    "door",
    "dragon",
    "dresser",
    "drill",
    "drums",
    "duck",
    "dumbbell",
    "ear",
    "elbow",
    "elephant",
    "envelope",
    "eraser",
    "eye",
    "eyeglasses",
    "face",
    "fan",
    "feather",
    "fence",
    "finger",
    "fire hydrant",
    "fireplace",
    "firetruck",
    "fish",
    "flamingo",
    "flashlight",
    "flip flops",
    "floor lamp",
    "flower",
    "flying saucer",
    "foot",
    "fork",
    "frog",
    "frying pan",
    "garden",
    "garden hose",
    "giraffe",
    "goatee",
    "golf club",
    "grapes",
    "grass",
    "guitar",
    "hamburger",
    "hammer",
    "hand",
    "harp",
    "hat",
    "headphones",
    "hedgehog",
    "helicopter",
    "helmet",
    "hexagon",
    "hockey puck",
    "hockey stick",
    "horse",
    "hospital",
    "hot air balloon",
    "hot dog",
    "hot tub",
    "hourglass",
    "house",
    "house plant",
    "hurricane",
    "ice cream",
    "jacket",
    "jail",
    "kangaroo",
    "key",
    "keyboard",
    "knee",
    "knife",
    "ladder",
    "lantern",
    "laptop",
    "leaf",
    "leg",
    "light bulb",
    "lighter",
    "lighthouse",
    "lightning",
    "line",
    "lion",
    "lipstick",
    "lobster",
    "lollipop",
    "mailbox",
    "map",
    "marker",
    "matches",
    "megaphone",
    "mermaid",
    "microphone",
    "microwave",
    "monkey",
    "moon",
    "mosquito",
    "motorbike",
    "mountain",
    "mouse",
    "moustache",
    "mouth",
    "mug",
    "mushroom",
    "nail",
    "necklace",
    "nose",
    "ocean",
    "octagon",
    "octopus",
    "onion",
    "oven",
    "owl",
    "paint can",
    "paintbrush",
    "palm tree",
    "panda",
    "pants",
    "paper clip",
    "parachute",
    "parrot",
    "passport",
    "peanut",
    "pear",
    "peas",
    "pencil",
    "penguin",
    "piano",
    "pickup truck",
    "picture frame",
    "pig",
    "pillow",
    "pineapple",
    "pizza",
    "pliers",
    "police car",
    "pond",
    "pool",
    "popsicle",
    "postcard",
    "potato",
    "power outlet",
    "purse",
    "rabbit",
    "raccoon",
    "radio",
    "rain",
    "rainbow",
    "rake",
    "remote control",
    "rhinoceros",
    "rifle",
    "river",
    "roller coaster",
    "rollerskates",
    "sailboat",
    "sandwich",
    "saw",
    "saxophone",
    "school bus",
    "scissors",
    "scorpion",
    "screwdriver",
    "sea turtle",
    "see saw",
    "shark",
    "sheep",
    "shoe",
    "shorts",
    "shovel",
    "sink",
    "skateboard",
    "skull",
    "skyscraper",
    "sleeping bag",
    "smiley face",
    "snail",
    "snake",
    "snorkel",
    "snowflake",
    "snowman",
    "soccer ball",
    "sock",
    "speedboat",
    "spider",
    "spoon",
    "spreadsheet",
    "square",
    "squiggle",
    "squirrel",
    "stairs",
    "star",
    "steak",
    "stereo",
    "stethoscope",
    "stitches",
    "stop sign",
    "stove",
    "strawberry",
    "streetlight",
    "string bean",
    "submarine",
    "suitcase",
    "sun",
    "swan",
    "sweater",
    "swing set",
    "sword",
    "syringe",
    "t-shirt",
    "table",
    "teapot",
    "teddy-bear",
    "telephone",
    "television",
    "tennis racquet",
    "tent",
    "tiger",
    "toaster",
    "toe",
    "toilet",
    "tooth",
    "toothbrush",
    "toothpaste",
    "tornado",
    "tractor",
    "traffic light",
    "train",
    "tree",
    "triangle",
    "trombone",
    "truck",
    "trumpet",
    "umbrella",
    "underwear",
    "van",
    "vase",
    "violin",
    "washing machine",
    "watermelon",
    "waterslide",
    "whale",
    "wheel",
    "windmill",
    "wine bottle",
    "wine glass",
    "wristwatch",
    "yoga",
    "zebra",
    "zigzag"
  ], wa = 500, xa = 500, et = 2, cs = 2;
  function ba() {
    const g = navigator.userAgent.toLowerCase();
    return navigator.platform === "MacIntel" && navigator.maxTouchPoints <= 1 || g.includes("mac os x") || g.includes("macintosh");
  }
  class Sa {
    constructor() {
      this.isMacOS = ba();
    }
    getMinimumCoordinates(e) {
      let t = Number.MAX_SAFE_INTEGER, i = Number.MAX_SAFE_INTEGER;
      for (const s of e) for (let o = 0; o < s[0].length; o++) t = Math.min(t, s[0][o]), i = Math.min(i, s[1][o]);
      return [
        Math.max(0, t),
        Math.max(0, i)
      ];
    }
    repositionImage(e) {
      const [t, i] = this.getMinimumCoordinates(e);
      for (const s of e) for (let o = 0; o < s[0].length; o++) s[0][o] = s[0][o] - t + cs, s[1][o] = s[1][o] - i + cs;
    }
    getBoundingBox(e) {
      this.repositionImage(e);
      const t = [], i = [];
      for (const d of e) for (let u = 0; u < d[0].length; u++) t.push(d[0][u]), i.push(d[1][u]);
      const s = Math.min(...t), o = Math.max(...t), n = Math.min(...i), r = Math.max(...i), a = Math.max(...t) - Math.min(...t), l = Math.max(...i) - Math.min(...i), h = {
        x: Math.max(0, s - et),
        y: Math.max(0, n - et)
      };
      let c;
      return a > l ? c = {
        x: Math.min(wa, o + et),
        y: Math.max(0, n + et) + a
      } : c = {
        x: Math.max(0, s + et) + l,
        y: Math.min(xa, r + et)
      }, {
        min: h,
        max: c
      };
    }
    async preprocessImage(e) {
      if (!e || e.length === 0) return null;
      const t = JSON.parse(JSON.stringify(e)), { min: i, max: s } = this.getBoundingBox(t), o = s.x - i.x, n = s.y - i.y, r = document.createElement("canvas"), a = 280;
      r.width = a, r.height = a;
      const l = r.getContext("2d", {
        alpha: false,
        willReadFrequently: false
      }), h = Math.max(o, n), c = a * 0.85 / h, d = o * c, u = n * c, m = (a - d) / 2, f = (a - u) / 2;
      l.fillStyle = "white", l.fillRect(0, 0, a, a), l.strokeStyle = "black", l.lineWidth = 3, l.lineCap = "round", l.lineJoin = "round";
      for (const y of t) {
        if (y[0].length < 2) continue;
        l.beginPath();
        const v = (y[0][0] - i.x) * c + m, b = (y[1][0] - i.y) * c + f;
        l.moveTo(v, b);
        for (let T = 1; T < y[0].length; T++) {
          const M = (y[0][T] - i.x) * c + m, C = (y[1][T] - i.y) * c + f;
          l.lineTo(M, C);
        }
        l.stroke();
      }
      const x = document.createElement("canvas");
      x.width = 28, x.height = 28;
      const w = x.getContext("2d", {
        alpha: false,
        desynchronized: false,
        willReadFrequently: false
      });
      if (this.isMacOS) {
        const y = l.getImageData(0, 0, a, a), v = w.createImageData(28, 28), b = a / 28, T = a / 28;
        for (let M = 0; M < 28; M++) for (let C = 0; C < 28; C++) {
          const P = Math.floor(C * b), A = Math.floor(M * T), D = Math.floor((C + 1) * b), R = Math.floor((M + 1) * T);
          let F = 0, z = 0;
          for (let Z = A; Z < R && Z < a; Z++) for (let j = P; j < D && j < a; j++) {
            const se = (Z * a + j) * 4;
            F += y.data[se], z++;
          }
          const O = z > 0 ? Math.round(F / z) : 255, $ = (M * 28 + C) * 4;
          v.data[$] = O, v.data[$ + 1] = O, v.data[$ + 2] = O, v.data[$ + 3] = 255;
        }
        w.putImageData(v, 0, 0);
      } else w.imageSmoothingEnabled = true, w.imageSmoothingQuality = "high", w.drawImage(r, 0, 0, 28, 28);
      return x;
    }
  }
  const Ce = 500, ue = 100, Ma = 0.0225, Ta = 2.5, Ca = 2, Pa = 0.05, Aa = 42e-5, ka = 45e-5, Ea = 0.35, Ia = 0.35, Ra = 0.15;
  class Da {
    constructor(e, t = {
      x: 0,
      y: 2,
      z: -2
    }, i = 1, s = true) {
      this.scene = e, this.enableParticles = s, this.strokeRepulsionDistance = Pa, this.galaxySwirlIntensity = Ia, this.galaxySwirlRadialExponent = Ra, this.canvas = document.createElement("canvas"), this.canvas.width = Ce, this.canvas.height = Ce, this.ctx = this.canvas.getContext("2d"), this.touchCanvas = document.createElement("canvas"), this.touchCanvas.width = ue, this.touchCanvas.height = ue, this.touchCtx = this.touchCanvas.getContext("2d"), this.touchTexture = new Mt(this.touchCanvas), this.touchTexture.minFilter = ye, this.touchTexture.magFilter = ye, this.touchTexture.needsUpdate = true, this.texture = new Mt(this.canvas), this.texture.needsUpdate = true;
      const o = new Ct(i, i), n = new le({
        visible: false
      });
      this.mesh = new k(o, n), this.mesh.position.set(t.x, t.y, t.z), this.mesh.userData.isDrawingCanvas = true, this.scene.add(this.mesh), this.strokeScale = i, this.strokeMesh = null, this.strokeGeometry = null, this.createStrokeMesh(), this.particleSystem = null, this.particleOffset = 0.05, this.particleVelocities = null, this.particleCount = ue * ue, this.enableParticles && (this.particleSystem = this.createParticleSystem(i), this.particleSystem.position.set(t.x, t.y, t.z), this.particleSystem.renderOrder = 9999, this.scene.add(this.particleSystem), this.particleVelocities = new Float32Array(this.particleCount * 3)), this.isDrawing = false, this.currentStroke = [
        [],
        []
      ], this.lastPoint = null, this.time = 0, this.strokeUVPosition = 0, this.strokeSegments = [], this.fadeDuration = 6, this.rapidFadeDuration = 0.8, this.incorrectGuessFadeDuration = 2, this.currentStrokeIndex = 0, this.colorStage = 0, this.baseColor = new J(11202303), this.orangeColor = new J(16768426), this.redColor = new J(16777215), this.isTransitioningColor = false, this.colorTransitionProgress = 0, this.colorTransitionDuration = 1.5, this.currentColor = new J().copy(this.baseColor), this.startColor = new J().copy(this.baseColor), this.targetColor = new J().copy(this.baseColor), this.currentJitterIntensity = 0, this.startJitterIntensity = 0, this.targetJitterIntensity = 0, this.isPulsing = false, this.pulseProgress = 0, this.pulseDuration = 1, this.strokeScaleFactor = 1, this.isStrokePulsing = false, this.strokePulseProgress = 0, this.strokePulseDuration = 1, this.strokeScaleTarget = 2, this.isExploding = false, this.explosionProgress = 0, this.explosionDuration = 2.5, this.explosionPhase1 = 0.3, this.explosionPhase2 = 0.5, this.explosionPhase3 = 0.8, this.skipRecreateAfterExplosion = false, this.isSuccessAnimating = false, this.successAnimProgress = 0, this.successAnimDuration = 1, this.successAnimScale = 1, this.clearCanvas();
    }
    createStrokeMesh() {
      this.strokeGeometry = new ot();
      const t = new Ms().load("/images/particle.png");
      t.minFilter = ye, t.magFilter = ye, t.wrapS = Bt, t.wrapT = Ps;
      const i = new Si({
        uniforms: {
          uTime: {
            value: 0
          },
          uColor: {
            value: new J(11202303).multiplyScalar(0.8)
          },
          uBrushTexture: {
            value: t
          },
          uUseBrushTexture: {
            value: 1
          },
          uFractalIntensity: {
            value: 0
          }
        },
        vertexShader: `
        attribute float segmentProgress; // 0-1 along segment
        attribute float segmentLength; // Length of this segment
        attribute float segmentTime; // When this segment was drawn
        attribute float fadeAlpha; // Alpha for progressive fade
        
        uniform float uTime;
        uniform float uFractalIntensity;
        
        varying float vProgress;
        varying float vFadeAlpha;
        varying float vSegmentLength;
        varying vec2 vUv;
        
        void main() {
          vProgress = segmentProgress;
          vFadeAlpha = fadeAlpha;
          vSegmentLength = segmentLength;
          vUv = uv;
          
          vec3 pos = position;
          
          // Apply fractal warping when world is disintegrating
          if (uFractalIntensity > 0.0) {
            float warpTime = uTime * 3.0;
            float warpX = sin(warpTime + pos.y * 15.0 + segmentTime * 2.0) * cos(warpTime * 1.3 + pos.x * 12.0);
            float warpY = cos(warpTime * 1.1 + pos.x * 13.0) * sin(warpTime * 1.7 + pos.y * 11.0);
            float warpZ = sin(warpTime * 0.9 + pos.x * 10.0) * cos(warpTime * 1.5 + pos.y * 14.0);
            
            float warpScale = 0.015 * uFractalIntensity;
            pos.x += warpX * warpScale;
            pos.y += warpY * warpScale;
            pos.z += warpZ * warpScale * 0.5;
          }
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
        fragmentShader: `
        uniform vec3 uColor;
        uniform float uTime;
        uniform sampler2D uBrushTexture;
        uniform float uUseBrushTexture;
        
        varying float vProgress;
        varying float vFadeAlpha;
        varying float vSegmentLength;
        varying vec2 vUv;
        
        // Simple noise function
        float hash(float n) {
          return fract(sin(n) * 43758.5453123);
        }
        
        // Improved noise function for brush texture
        float noise2d(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          
          float n = i.x + i.y * 57.0;
          return mix(
            mix(hash(n + 0.0), hash(n + 1.0), f.x),
            mix(hash(n + 57.0), hash(n + 58.0), f.x),
            f.y
          );
        }
        
        void main() {
          // Scroll UV along stroke length
          float scrollSpeed = -0.5;
          float scrollOffset = uTime * scrollSpeed;
          vec2 brushUV = vec2(fract(vUv.x + scrollOffset), vProgress);
          vec4 texColor = texture2D(uBrushTexture, brushUV);

          // Base stroke body so texture never drops to zero
          float centerDist = abs(vProgress - 0.5) * 2.0;
          float baseCore = 1.0 - smoothstep(0.0, 1.0, centerDist);
          baseCore = pow(baseCore, 1.2); // Softer falloff

          // Blend texture detail with base core for continuity
          float detail = mix(0.55, 1.0, texColor.r);
          float strokeAlpha = baseCore * detail;

          // Global pulse for steady, intense flashes
          float globalPulse = 0.5 + 0.5 * sin(uTime * 6.0);
          float alphaPulse = mix(0.8, 1.35, globalPulse); // Higher minimum alpha
          float brightnessPulse = mix(1.1, 2.2, globalPulse); // Keep bright peaks, raise floor

          // Subtle spatial banding to keep energy shimmering
          float band = 0.85 + 0.15 * sin(vUv.x * 10.0);

          // Apply pulses to alpha (clamped for stability)
          float alpha = strokeAlpha * vFadeAlpha * alphaPulse * band;
          alpha = clamp(alpha, 0.0, 1.2);

          if (alpha < 0.01) discard;

          // Pulse affects brightness too - magical energy effect
          vec3 finalColor = uColor * brightnessPulse;

          gl_FragColor = vec4(finalColor, min(alpha, 1.0));
        }
      `,
        transparent: true,
        depthWrite: false,
        depthTest: true,
        blending: Oo,
        side: lt
      });
      this.strokeMesh = new k(this.strokeGeometry, i), this.strokeMesh.position.copy(this.mesh.position), this.strokeMesh.quaternion.copy(this.mesh.quaternion), this.strokeMesh.scale.copy(this.mesh.scale), this.strokeMesh.renderOrder = 9999, this.scene.add(this.strokeMesh), console.log("[ParticleCanvas3D] Stroke mesh created:", {
        position: this.strokeMesh.position,
        rotation: this.strokeMesh.rotation,
        visible: this.strokeMesh.visible
      });
    }
    updateStrokeMesh() {
      if (!this.strokeGeometry) return;
      const e = [], t = [], i = [], s = [], o = [], n = [], r = [];
      let a = 0;
      const l = this.time, h = 0.05 * this.strokeScaleFactor, c = (f) => {
        if (f.length < 2) return;
        const x = a;
        for (let y = 0; y < f.length; y++) {
          const v = f[y], b = f[y - 1] || v, T = f[y + 1] || v;
          let M = T.x - b.x, C = T.y - b.y, P = Math.sqrt(M * M + C * C);
          P < 1e-4 && (M = 0, C = 1, P = 1), M /= P, C /= P;
          const A = -C, D = M, R = v.u !== void 0 ? v.u : v.length !== void 0 ? v.length * 8 : 0, F = v.time, z = v.alpha, O = v.segmentLength || 0, $ = v.x + A * h, Z = v.y + D * h, j = v.x - A * h, se = v.y - D * h;
          e.push($, Z, 1e-3, j, se, 1e-3), t.push(R, 0, R, 1), i.push(0, 1), s.push(O, O), o.push(F, F), n.push(z, z), a += 2;
        }
        const w = f.length - 1;
        for (let y = 0; y < w; y++) {
          const v = x + y * 2, b = v + 1, T = v + 2, M = v + 3;
          r.push(v, b, T, b, M, T);
        }
      };
      let d = null, u = [];
      const m = () => {
        u.length >= 2 && c(u), u = [];
      };
      for (const f of this.strokeSegments) {
        f.strokeIndex !== d && (m(), d = f.strokeIndex);
        const x = (f.uvX1 - 0.5) * this.strokeScale, w = -(f.uvY1 - 0.5) * this.strokeScale, y = (f.uvX2 - 0.5) * this.strokeScale, v = -(f.uvY2 - 0.5) * this.strokeScale, b = y - x, T = v - w, M = Math.sqrt(b * b + T * T);
        if (M < 1e-5) continue;
        let C = 1;
        if (f.rapidFade) {
          const P = f.customFadeDuration || this.rapidFadeDuration, A = l - f.rapidFadeStartTime;
          if (A > P) {
            m();
            continue;
          }
          C = 1 - A / P;
        } else {
          const P = l - f.timestamp;
          if (P > this.fadeDuration) {
            m();
            continue;
          }
          const A = this.fadeDuration * 0.7;
          P > A && (C = 1 - (P - A) / (this.fadeDuration - A));
        }
        if (C <= 0) {
          m();
          continue;
        }
        if (u.length === 0) u.push({
          x,
          y: w,
          length: f.uvStart,
          u: f.uvStart,
          alpha: C,
          time: f.timestamp,
          segmentLength: M
        });
        else {
          const P = u[u.length - 1];
          Math.sqrt(Math.pow(x - P.x, 2) + Math.pow(w - P.y, 2)) > 5e-4 ? (m(), u.push({
            x,
            y: w,
            length: f.uvStart,
            u: f.uvStart,
            alpha: C,
            time: f.timestamp,
            segmentLength: M
          })) : (P.alpha = Math.max(P.alpha, C), P.time = Math.max(P.time, f.timestamp), P.u = P.u !== void 0 ? P.u : f.uvStart);
        }
        u.push({
          x: y,
          y: v,
          length: f.uvEnd,
          u: f.uvEnd,
          alpha: C,
          time: f.timestamp,
          segmentLength: M
        });
      }
      m(), e.length > 0 ? (Math.random() < 0.01 && console.log("[ParticleCanvas3D] Building stroke mesh with", e.length / 3, "vertices"), this.strokeGeometry.setAttribute("position", new ze(e, 3)), this.strokeGeometry.setAttribute("uv", new ze(t, 2)), this.strokeGeometry.setAttribute("segmentProgress", new ze(i, 1)), this.strokeGeometry.setAttribute("segmentLength", new ze(s, 1)), this.strokeGeometry.setAttribute("segmentTime", new ze(o, 1)), this.strokeGeometry.setAttribute("fadeAlpha", new ze(n, 1)), this.strokeGeometry.setIndex(r), this.strokeGeometry.attributes.position.needsUpdate = true, this.strokeGeometry.computeBoundingSphere(), this.strokeMesh && this.mesh && (this.strokeMesh.position.copy(this.mesh.position), this.strokeMesh.quaternion.copy(this.mesh.quaternion), this.strokeMesh.scale.copy(this.mesh.scale))) : (this.strokeGeometry.setIndex([]), this.strokeGeometry.attributes.position && this.strokeGeometry.deleteAttribute("position"));
    }
    createParticleSystem(e) {
      const t = ue * ue, i = new zo(), s = new Ge(new Float32Array(12), 3);
      s.setXYZ(0, -0.5, 0.5, 0), s.setXYZ(1, 0.5, 0.5, 0), s.setXYZ(2, -0.5, -0.5, 0), s.setXYZ(3, 0.5, -0.5, 0), i.setAttribute("position", s);
      const o = new Ge(new Float32Array(8), 2);
      o.setXY(0, 0, 0), o.setXY(1, 1, 0), o.setXY(2, 0, 1), o.setXY(3, 1, 1), i.setAttribute("uv", o), i.setIndex(new Ge(new Uint16Array([
        0,
        2,
        1,
        2,
        3,
        1
      ]), 1));
      const n = new Uint16Array(t), r = new Float32Array(t * 3), a = new Float32Array(t * 3), l = new Float32Array(t * 3), h = new Float32Array(t);
      for (let d = 0; d < t; d++) {
        const u = d % ue / ue, m = Math.floor(d / ue) / ue, f = u - 0.5, x = m - 0.5, w = 1 - Math.abs(f) * 2, y = 1 - Math.abs(x) * 2, v = Math.min(w, y), b = Math.pow(1 - v, 2.5), T = b * 0.15, M = (Math.random() - 0.5) * 2 * T * e, C = (Math.random() - 0.5) * 2 * T * e, P = (Math.random() - 0.5) * T * e * 0.3, A = f * e + M, D = x * e + C, R = P;
        r[d * 3 + 0] = A, r[d * 3 + 1] = D, r[d * 3 + 2] = R, a[d * 3 + 0] = A, a[d * 3 + 1] = D, a[d * 3 + 2] = R, n[d] = d, l[d * 3 + 0] = 0, l[d * 3 + 1] = 0, l[d * 3 + 2] = 0;
        const F = 0.25 + Math.random() * 0.75;
        h[d] = F * (1 - b * 0.3);
      }
      i.setAttribute("pindex", new tt(n, 1, false)), i.setAttribute("homePosition", new tt(r, 3, false)), i.setAttribute("currentPosition", new tt(a, 3, false)), i.setAttribute("velocity", new tt(l, 3, false)), i.setAttribute("particleSize", new tt(h, 1, false));
      const c = new Si({
        uniforms: {
          uTime: {
            value: 0
          },
          uDeltaTime: {
            value: 0.016
          },
          uSize: {
            value: Ma * e
          },
          uColor: {
            value: new J(11202303)
          },
          uPulseScale: {
            value: 1
          },
          uJitterIntensity: {
            value: 0
          },
          uExplosionFactor: {
            value: 0
          },
          uImplosionFactor: {
            value: 0
          }
        },
        vertexShader: `
        attribute float pindex;
        attribute vec3 homePosition;
        attribute vec3 currentPosition;
        attribute vec3 velocity;
        attribute float particleSize;
        
        uniform float uTime;
        uniform float uSize;
        uniform float uPulseScale;
        uniform float uJitterIntensity;
        uniform float uExplosionFactor;
        uniform float uImplosionFactor;
        
        varying vec2 vUv;
        varying float vVelocityMagnitude;
        
        void main() {
          vUv = uv;
          
          // Use currentPosition (updated on CPU with physics)
          vec3 displaced = currentPosition;
          
          // Calculate velocity magnitude for brightness
          vVelocityMagnitude = length(velocity);
          
          // Add energetic jitter that builds with each round
          if (uJitterIntensity > 0.0) {
            float jitterTime = uTime * 15.0;
            float jitterX = sin(jitterTime + pindex * 43.0) * cos(jitterTime * 1.3 + pindex * 17.0);
            float jitterY = cos(jitterTime * 1.1 + pindex * 31.0) * sin(jitterTime * 1.7 + pindex * 23.0);
            float jitterZ = sin(jitterTime * 0.9 + pindex * 19.0) * cos(jitterTime * 1.5 + pindex * 29.0);
            
            float jitterScale = 0.008 * uJitterIntensity;
            displaced.x += jitterX * jitterScale;
            displaced.y += jitterY * jitterScale;
            displaced.z += jitterZ * jitterScale * 0.5;
          }
          
          // Apply explosion force: push particles outward from center
          if (uExplosionFactor > 0.0) {
            vec3 outwardDir = normalize(displaced);
            float outwardForce = 0.8 * uExplosionFactor;
            displaced.xy += outwardDir.xy * outwardForce;
            displaced.z += 0.3 * uExplosionFactor;
          }
          
          // Apply implosion force: pull particles toward center
          if (uImplosionFactor > 0.0) {
            displaced.xyz *= (1.0 - uImplosionFactor * 0.95);
          }
          
          // Transform to world space
          vec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);
          mvPosition.xyz += position * uSize * particleSize * uPulseScale;
          
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
        fragmentShader: `
        uniform vec3 uColor;
        varying vec2 vUv;
        varying float vVelocityMagnitude;
        
        void main() {
          // Circular particle shape with soft glow
          float dist = distance(vUv, vec2(0.5));
          float alpha = 1.0 - smoothstep(0.2, 0.5, dist);
          
          // Brightness increases with velocity (GPGPU-style)
          // Base brightness is high, velocity adds extra glow
          float velocityBrightness = clamp(vVelocityMagnitude * 20.0, 0.0, 1.0);
          vec3 color = uColor * (1.5 + velocityBrightness * 1.0);
          
          // Strong base alpha with velocity boost
          float velocityAlpha = 1.0 + velocityBrightness * 0.3;
          alpha *= velocityAlpha;
          
          // Soft glow falloff
          alpha *= alpha;
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
        transparent: true,
        depthTest: true,
        depthWrite: false,
        blending: gs
      });
      return new k(i, c);
    }
    clearCanvas() {
      if (this.strokeSegments.length === 0) this.ctx.clearRect(0, 0, Ce, Ce), this.touchCtx.fillStyle = "rgba(0, 0, 0, 1)", this.touchCtx.fillRect(0, 0, ue, ue), this.texture && (this.texture.needsUpdate = true), this.touchTexture.needsUpdate = true;
      else for (let e of this.strokeSegments) e.rapidFade || (e.rapidFade = true, e.rapidFadeStartTime = this.time, e.rapidFadeStartAlpha = 1 - (this.time - e.timestamp) / this.fadeDuration, e.customFadeDuration = null);
      this.currentStroke = [
        [],
        []
      ], this.lastPoint = null;
    }
    fadeIncorrectGuess() {
      for (let e of this.strokeSegments) e.rapidFade || (e.rapidFade = true, e.rapidFadeStartTime = this.time, e.rapidFadeStartAlpha = 1 - (this.time - e.timestamp) / this.fadeDuration, e.customFadeDuration = this.incorrectGuessFadeDuration);
    }
    startStroke(e) {
      if (!e) return;
      this.isDrawing = true, this.strokeUVPosition = 0;
      const t = Math.floor(e.x * Ce), i = Math.floor((1 - e.y) * Ce);
      this.lastPoint = {
        x: t,
        y: i,
        uvX: e.x,
        uvY: 1 - e.y
      }, this.currentStroke = [
        [
          t
        ],
        [
          i
        ]
      ];
    }
    addPoint(e) {
      if (!this.isDrawing || !e || !this.lastPoint) return;
      const t = Math.floor(e.x * Ce), i = Math.floor((1 - e.y) * Ce);
      if (t < 0 || t >= Ce || i < 0 || i >= Ce) return;
      const s = t - this.lastPoint.x, o = i - this.lastPoint.y, n = Math.sqrt(s * s + o * o), r = Math.max(Math.floor(n), 1);
      for (let x = 1; x <= r; x++) {
        const w = x / r, y = Math.floor(this.lastPoint.x + s * w), v = Math.floor(this.lastPoint.y + o * w);
        this.currentStroke[0].push(y), this.currentStroke[1].push(v);
      }
      const a = this.lastPoint.uvX - 0.5, l = -(this.lastPoint.uvY - 0.5), h = e.x - 0.5, c = -(1 - e.y - 0.5), d = Math.sqrt(Math.pow(h - a, 2) + Math.pow(c - l, 2)), u = 8, m = this.strokeUVPosition;
      this.strokeUVPosition += d * u;
      const f = this.strokeUVPosition;
      this.strokeSegments.push({
        x1: this.lastPoint.x,
        y1: this.lastPoint.y,
        x2: t,
        y2: i,
        uvX1: this.lastPoint.uvX || e.x,
        uvY1: this.lastPoint.uvY || 1 - e.y,
        uvX2: e.x,
        uvY2: 1 - e.y,
        uvStart: m,
        uvEnd: f,
        timestamp: this.time,
        rapidFade: false,
        strokeIndex: this.currentStrokeIndex
      }), this.ctx.beginPath(), this.ctx.moveTo(this.lastPoint.x, this.lastPoint.y), this.ctx.lineTo(t, i), this.ctx.stroke(), this.texture && (this.texture.needsUpdate = true), this.lastPoint = {
        x: t,
        y: i,
        uvX: e.x,
        uvY: 1 - e.y
      };
    }
    stampTouchTexture(e, t, i = 1) {
      const s = Ta, o = s * Ca, n = Math.min(Math.max(i, 0), 1);
      this.touchCtx.globalCompositeOperation = "lighter";
      const r = this.touchCtx.createRadialGradient(e, t, 0, e, t, s);
      r.addColorStop(0, `rgba(255, 255, 255, ${n})`), r.addColorStop(0.5, `rgba(255, 255, 255, ${n * 0.9})`), r.addColorStop(1, "rgba(255, 255, 255, 0)"), this.touchCtx.fillStyle = r;
      const a = s * 2;
      this.touchCtx.fillRect(e - s, t - s, a, a);
      const l = this.touchCtx.createRadialGradient(e, t, s * 0.6, e, t, o), h = n * 0.35;
      l.addColorStop(0, `rgba(255, 255, 255, ${h})`), l.addColorStop(0.7, `rgba(255, 255, 255, ${h * 0.6})`), l.addColorStop(1, "rgba(255, 255, 255, 0)"), this.touchCtx.fillStyle = l;
      const c = o * 2;
      this.touchCtx.fillRect(e - o, t - o, c, c), this.touchCtx.globalCompositeOperation = "source-over";
    }
    drawToTouchTexture(e, t) {
      const i = e * ue, s = t * ue;
      this.stampTouchTexture(i, s, 1), this.touchTexture.needsUpdate = true;
    }
    endStroke() {
      this.isDrawing && this.currentStroke[0].length > 0 && this.currentStrokeIndex++, this.isDrawing = false, this.currentStroke = [
        [],
        []
      ], this.lastPoint = null;
    }
    getStrokes() {
      if (this.strokeSegments.length === 0) return [];
      const e = /* @__PURE__ */ new Map();
      for (const i of this.strokeSegments) {
        let s = false;
        if (i.rapidFade) {
          const o = i.customFadeDuration || this.rapidFadeDuration;
          s = this.time - i.rapidFadeStartTime > o;
        } else s = this.time - i.timestamp > this.fadeDuration;
        s || (e.has(i.strokeIndex) || e.set(i.strokeIndex, {
          xPoints: [],
          yPoints: [],
          segments: []
        }), e.get(i.strokeIndex).segments.push(i));
      }
      const t = [];
      for (const [i, s] of e.entries()) {
        const o = [], n = [];
        s.segments.sort((r, a) => r.timestamp - a.timestamp);
        for (const r of s.segments) (o.length === 0 || o[o.length - 1] !== r.x1 || n[n.length - 1] !== r.y1) && (o.push(r.x1), n.push(r.y1)), o.push(r.x2), n.push(r.y2);
        o.length >= 2 && t.push([
          o,
          n
        ]);
      }
      return t;
    }
    hasStrokes() {
      const e = this.time;
      for (const t of this.strokeSegments) {
        let i = false;
        if (t.rapidFade) {
          const s = t.customFadeDuration || this.rapidFadeDuration;
          i = e - t.rapidFadeStartTime > s;
        } else i = e - t.timestamp > this.fadeDuration;
        if (!i) return true;
      }
      return false;
    }
    triggerColorCycle() {
      const e = (this.colorStage + 1) % 3;
      if (this.colorStage === 2 && e === 0) {
        console.log("[ParticleCanvas3D] triggerColorCycle detected red->blue, triggering explosion"), this.triggerExplosion();
        return;
      }
      if (console.log(`[ParticleCanvas3D] triggerColorCycle: advancing from stage ${this.colorStage} to ${e}`), this.colorStage = e, !this.particleSystem || !this.particleSystem.material) return;
      let t, i;
      switch (this.colorStage) {
        case 0:
          t = this.baseColor, i = 0;
          break;
        case 1:
          t = this.orangeColor, i = 0.15;
          break;
        case 2:
          t = this.redColor, i = 0.5;
          break;
      }
      this.startColor.copy(this.currentColor), this.targetColor.copy(t), this.startJitterIntensity = this.currentJitterIntensity, this.targetJitterIntensity = i, this.isTransitioningColor = true, this.colorTransitionProgress = 0;
    }
    triggerExplosion() {
      this.isExploding = true, this.explosionProgress = 0, console.log(`[ParticleCanvas3D] Explosion triggered! isExploding=${this.isExploding}`);
    }
    triggerSuccessAnimation(e = 0.25) {
      this.isSuccessAnimating = true, this.successAnimProgress = 0, this.successAnimScale = e, console.log(`[ParticleCanvas3D] Success animation triggered! scale=${e}`);
    }
    triggerPulse() {
      this.isPulsing = true, this.pulseProgress = 0;
    }
    triggerStrokePulse() {
      this.isStrokePulsing = true, this.strokePulseProgress = 0;
    }
    triggerExplosion(e, t, i) {
      if (!this.particleSystem || !this.particleSystem.material) return;
      const s = i * 5e-3;
      this.particleSystem.material.uniforms.uExplosionFactor.value = s, setTimeout(() => {
        this.particleSystem.material.uniforms.uExplosionFactor.value = 0;
      }, 100);
    }
    setBrushTexture(e) {
      this.strokeMesh && this.strokeMesh.material && (this.strokeMesh.material.uniforms.uUseBrushTexture.value = e ? 1 : 0, console.log("[ParticleCanvas3D] Brush texture", e ? "enabled" : "disabled"));
    }
    updateParticlePhysics(e) {
      if (!this.particleSystem || !this.particleVelocities) return;
      const t = this.particleSystem.geometry, i = t.attributes.homePosition.array, s = t.attributes.currentPosition.array, o = t.attributes.velocity.array, n = 0.9, r = 3e-4, a = 3e-3, l = this.strokeRepulsionDistance, h = l * l, c = 8e-5, d = this.strokeSegments.length;
      let u = null, m = null;
      if (d > 0) {
        u = new Float32Array(d * 2), m = new Float32Array(d * 4);
        for (let v = 0; v < d; v++) {
          const b = this.strokeSegments[v], T = (b.uvX1 - 0.5) * this.strokeScale, M = -(b.uvY1 - 0.5) * this.strokeScale, C = (b.uvX2 - 0.5) * this.strokeScale, P = -(b.uvY2 - 0.5) * this.strokeScale;
          u[v * 2] = C, u[v * 2 + 1] = P;
          const A = l;
          m[v * 4] = Math.min(T, C) - A, m[v * 4 + 1] = Math.min(M, P) - A, m[v * 4 + 2] = Math.max(T, C) + A, m[v * 4 + 3] = Math.max(M, P) + A;
        }
      }
      const f = this.strokeScale * 0.9 + 1e-4, x = this.galaxySwirlIntensity, w = this.time * 0.9, y = this.time;
      for (let v = 0; v < this.particleCount; v++) {
        const b = v * 3, T = s[b], M = s[b + 1], C = s[b + 2], P = i[b], A = i[b + 1], D = i[b + 2];
        let R = o[b], F = o[b + 1], z = o[b + 2];
        R *= n, F *= n, z *= n;
        const O = v * 0.1, $ = y + O, Z = $ * 0.3 + v * 0.05, j = $ * 0.17, se = $ * 0.25 + v * 0.07, ae = $ * 0.19, Ze = $ * 0.15 + v * 0.03, Xe = $ * 0.21, Ke = Math.sin(Z) * Math.cos(j), Jt = Math.cos(se) * Math.sin(ae), At = Math.sin(Ze) * Math.cos(Xe);
        R += Ke * c, F += Jt * c, z += At * c * 0.5;
        const Vs = T * T + M * M, ei = Math.sqrt(Vs), Us = Math.min(ei / f, 1);
        if (ei > 5e-4) {
          const he = 1 / ei, $e = -M * he, dt = T * he, Je = Math.pow(Us, this.galaxySwirlRadialExponent), ut = (Aa + ka * Je) * Je, Ne = 1 + Math.sin(w + v * 0.13) * Ea, kt = ut * Ne * x;
          R += $e * kt, F += dt * kt;
        }
        const ti = P - T, ii = A - M, si = D - C, Oi = ti * ti + ii * ii + si * si;
        if (Oi > 1e-6) {
          const he = Math.sqrt(Oi), $e = 1 / he, dt = ti * $e, Je = ii * $e, ut = si * $e, Ne = he > 0.02 ? r : r * 0.1;
          R += dt * Ne, F += Je * Ne, z += ut * Ne;
        }
        if (d > 0 && u && m) for (let he = 0; he < d; he++) {
          const $e = m[he * 4], dt = m[he * 4 + 1], Je = m[he * 4 + 2], ut = m[he * 4 + 3];
          if (T < $e || T > Je || M < dt || M > ut) continue;
          const Ne = u[he * 2], kt = u[he * 2 + 1], oi = T - Ne, ni = M - kt, ai = oi * oi + ni * ni;
          if (ai < h && ai > 1e-6) {
            const zi = Math.sqrt(ai), _i = 1 / zi, Fi = (1 - zi * (1 / l)) * a, Gs = oi * _i, Hs = ni * _i;
            R += Gs * Fi, F += Hs * Fi;
          }
        }
        o[b] = R, o[b + 1] = F, o[b + 2] = z, s[b] = T + R, s[b + 1] = M + F, s[b + 2] = C + z;
      }
      t.attributes.velocity.needsUpdate = true, t.attributes.currentPosition.needsUpdate = true;
    }
    getMesh() {
      return this.mesh;
    }
    dispose() {
      this.mesh && (this.scene.remove(this.mesh), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.texture && this.texture.dispose()), this.strokeMesh && (this.scene.remove(this.strokeMesh), this.strokeGeometry && this.strokeGeometry.dispose(), this.strokeMesh.material.dispose()), this.particleSystem && (this.scene.remove(this.particleSystem), this.particleSystem.geometry.dispose(), this.particleSystem.material.dispose()), this.touchTexture && this.touchTexture.dispose();
    }
    update(e = 0.016) {
      if (this.time += e, !this.isExploding && !this.isSuccessAnimating && this.updateParticlePhysics(e), this.isExploding && (this.explosionProgress += e / this.explosionDuration, Math.random() < 0.02 && console.log(`[ParticleCanvas3D] Explosion progress: ${(this.explosionProgress * 100).toFixed(1)}%`), this.explosionProgress >= 1 && (console.log("[ParticleCanvas3D] Explosion complete"), this.isExploding = false, this.explosionProgress = 0, this.particleSystem && (this.scene.remove(this.particleSystem), this.particleSystem.geometry.dispose(), this.particleSystem.material.dispose(), this.particleSystem = null), this.skipRecreateAfterExplosion ? console.log("[ParticleCanvas3D] Skipping recreation - final explosion") : (console.log("[ParticleCanvas3D] Recreating particle system for next round"), this.enableParticles && (this.particleSystem = this.createParticleSystem(this.strokeScale), this.particleSystem.position.copy(this.mesh.position), this.particleSystem.renderOrder = 9999, this.scene.add(this.particleSystem), this.particleVelocities = new Float32Array(this.particleCount * 3)), this.colorStage = 0, this.currentColor.copy(this.baseColor), this.currentJitterIntensity = 0, this.particleSystem && this.particleSystem.material && (this.particleSystem.material.uniforms.uColor.value.copy(this.currentColor), this.particleSystem.material.uniforms.uJitterIntensity.value = 0, this.particleSystem.material.uniforms.uPulseScale.value = 1), this.clearCanvas()))), this.isSuccessAnimating && (this.successAnimProgress += e / this.successAnimDuration, this.successAnimProgress >= 1 && (this.isSuccessAnimating = false, this.successAnimProgress = 0, this.particleSystem && this.particleSystem.material && (this.particleSystem.material.uniforms.uPulseScale.value = 1, this.particleSystem.material.uniforms.uJitterIntensity.value = this.currentJitterIntensity || 0, this.particleSystem.material.uniforms.uExplosionFactor.value = 0, this.particleSystem.material.uniforms.uImplosionFactor.value = 0))), this.particleSystem && this.particleSystem.material) {
        if (this.particleSystem.material.uniforms.uTime.value = this.time, this.isExploding && this.explosionProgress < 1) {
          const t = this.explosionProgress;
          if (t < this.explosionPhase1) {
            const i = t / this.explosionPhase1, s = 1 + i * 1.2;
            this.particleSystem.material.uniforms.uPulseScale.value = s;
            const o = 0.5 + i * 1;
            this.particleSystem.material.uniforms.uJitterIntensity.value = o;
            const n = i * 0.6;
            this.particleSystem.material.uniforms.uExplosionFactor.value = n, this.particleSystem.material.uniforms.uImplosionFactor.value = 0;
          } else if (t < this.explosionPhase2) this.particleSystem.material.uniforms.uPulseScale.value = 2.2, this.particleSystem.material.uniforms.uJitterIntensity.value = 2.5, this.particleSystem.material.uniforms.uExplosionFactor.value = 0.6, this.particleSystem.material.uniforms.uImplosionFactor.value = 0;
          else if (t < this.explosionPhase3) {
            const i = (t - this.explosionPhase2) / (this.explosionPhase3 - this.explosionPhase2), s = 2.2 - i * 2.1;
            this.particleSystem.material.uniforms.uPulseScale.value = s;
            const o = 2.5 * (1 - i);
            this.particleSystem.material.uniforms.uJitterIntensity.value = o;
            const n = 0.6 * (1 - i);
            this.particleSystem.material.uniforms.uExplosionFactor.value = n, this.particleSystem.material.uniforms.uImplosionFactor.value = i;
          } else {
            const s = 0.1 * (1 - (t - this.explosionPhase3) / (1 - this.explosionPhase3));
            this.particleSystem.material.uniforms.uPulseScale.value = s, this.particleSystem.material.uniforms.uJitterIntensity.value = 0, this.particleSystem.material.uniforms.uExplosionFactor.value = 0, this.particleSystem.material.uniforms.uImplosionFactor.value = 1;
          }
        }
        if (this.isSuccessAnimating && this.successAnimProgress < 1) {
          const t = this.successAnimProgress, i = this.successAnimScale, s = i >= 0.45, o = s ? 1.4 : 1, n = s ? 1.8 : 1;
          if (t < 0.5) {
            const r = t / 0.5, a = 1 + r * 1.2 * i * o;
            this.particleSystem.material.uniforms.uPulseScale.value = a;
            const l = r * 1.5 * i * n;
            this.particleSystem.material.uniforms.uJitterIntensity.value = l;
            const h = r * 0.6 * i;
            this.particleSystem.material.uniforms.uExplosionFactor.value = h, this.particleSystem.material.uniforms.uImplosionFactor.value = 0;
          } else {
            const r = (t - 0.5) / 0.5, a = 1 + 1.2 * i * o, l = 1.5 * i * n, h = 0.6 * i, c = a - r * (a - 1);
            this.particleSystem.material.uniforms.uPulseScale.value = c;
            const d = l * (1 - r);
            this.particleSystem.material.uniforms.uJitterIntensity.value = d;
            const u = h * (1 - r);
            this.particleSystem.material.uniforms.uExplosionFactor.value = u, this.particleSystem.material.uniforms.uImplosionFactor.value = 0;
          }
        }
        if (this.isTransitioningColor) {
          if (this.colorTransitionProgress += e / this.colorTransitionDuration, this.colorTransitionProgress >= 1) this.isTransitioningColor = false, this.colorTransitionProgress = 0, this.currentColor.copy(this.targetColor), this.currentJitterIntensity = this.targetJitterIntensity;
          else {
            const t = this.colorTransitionProgress, i = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
            this.currentColor.lerpColors(this.startColor, this.targetColor, i), this.currentJitterIntensity = this.startJitterIntensity + (this.targetJitterIntensity - this.startJitterIntensity) * i;
          }
          this.particleSystem.material.uniforms.uColor.value.copy(this.currentColor), this.particleSystem.material.uniforms.uJitterIntensity.value = this.currentJitterIntensity;
        }
        if (this.strokeMesh && this.strokeMesh.material) {
          const t = this.currentColor.clone();
          t.multiplyScalar(0.8), this.strokeMesh.material.uniforms.uColor.value.copy(t);
        }
        if (this.isPulsing) if (this.pulseProgress += e / this.pulseDuration, this.pulseProgress >= 1) this.isPulsing = false, this.pulseProgress = 0, this.particleSystem.material.uniforms.uPulseScale.value = 1;
        else {
          const t = this.pulseProgress, i = 1 + Math.sin(t * Math.PI) * 0.5;
          this.particleSystem.material.uniforms.uPulseScale.value = i;
        }
      }
      if (this.isStrokePulsing) if (this.strokePulseProgress += e / this.strokePulseDuration, this.strokePulseProgress >= 1) this.isStrokePulsing = false, this.strokePulseProgress = 0, this.strokeScaleFactor = 1;
      else {
        const t = this.strokePulseProgress, i = 1 + Math.sin(t * Math.PI) * (this.strokeScaleTarget - 1);
        this.strokeScaleFactor = i;
      }
      if (this.isExploding && this.explosionProgress < 1) {
        const t = this.explosionProgress;
        if (t < this.explosionPhase2) {
          const i = t / this.explosionPhase2;
          this.strokeScaleFactor = 1 + i * (this.strokeScaleTarget - 1);
        } else if (t < this.explosionPhase3) {
          const i = (t - this.explosionPhase2) / (this.explosionPhase3 - this.explosionPhase2);
          this.strokeScaleFactor = this.strokeScaleTarget * (1 - i);
        } else this.strokeScaleFactor = 0;
      }
      this.strokeSegments.length > 0 && (this.strokeSegments = this.strokeSegments.filter((t) => {
        if (t.rapidFade) {
          const i = t.customFadeDuration || this.rapidFadeDuration;
          return this.time - t.rapidFadeStartTime <= i;
        } else return this.time - t.timestamp <= this.fadeDuration;
      }), this.updateStrokeMesh()), this.strokeMesh && this.strokeMesh.material && (this.strokeMesh.material.uniforms.uTime.value = this.time);
    }
  }
  class La {
    constructor(e) {
      this.gameManager = e, this.model = null, this.preprocessor = new Sa(), this.isModelLoaded = false, this.drawingCanvas = null, this.raycaster = new Ii(), this.expectedDrawing = null, this.isDrawingMode = false, this.logger = new N("DrawingRecognitionManager", false), this.showEmojiUI = false, this.isPointerOverCanvas = false, this.onStrokeEndCallback = null;
    }
    loadScript(e) {
      return new Promise((t, i) => {
        const s = document.querySelector(`script[src="${e}"]`);
        if (s) {
          if (s.dataset.loaded === "true") {
            t();
            return;
          }
          const n = () => {
            s.dataset.loaded = "true", t();
          }, r = i;
          s.addEventListener("load", n, {
            once: true
          }), s.addEventListener("error", r, {
            once: true
          }), s.dataset.loaded === "true" && t();
          return;
        }
        const o = document.createElement("script");
        o.src = e, o.onload = () => {
          o.dataset.loaded = "true", t();
        }, o.onerror = i, document.head.appendChild(o);
      });
    }
    async ensureInitialized() {
      if (this.isModelLoaded) return;
      if (this._initializationPromise) return this._initializationPromise;
      const e = window.loadingScreen;
      e && !e.isLoadingComplete() && (this.logger.log("Waiting for loading screen to complete before initializing TensorFlow..."), await new Promise((t) => {
        const i = () => {
          e.isLoadingComplete() ? t() : setTimeout(i, 100);
        };
        i();
      })), this._initializationPromise = this.initialize();
      try {
        await this._initializationPromise;
      } finally {
        this._initializationPromise = null;
      }
    }
    async initialize() {
      if (this.isModelLoaded) {
        this.logger.log("Model already initialized, skipping");
        return;
      }
      this.logger.log("Loading Quick Draw model...");
      try {
        if (this.logger.log("Loading TensorFlow.js from /models/..."), await this.loadScript("/models/local-tf.min.js"), this.logger.log("Loading TFLite from /models/..."), await this.loadScript("/models/local-tf-tflite.min.js"), await new Promise((e) => setTimeout(e, 500)), !window.tf || !window.tflite) throw new Error("TensorFlow.js or TFLite not available after loading");
        this.logger.log("TensorFlow.js and TFLite loaded from local files"), window.tflite.setWasmPath("/models/"), await window.tf.ready(), this.logger.log("TensorFlow.js backend ready"), this.logger.log("Loading TFLite model from /models/quickdraw-model.tflite"), this.model = await window.tflite.loadTFLiteModel("/models/quickdraw-model.tflite"), this.logger.log("Running warmup prediction"), this.model.predict(window.tf.zeros([
          1,
          28,
          28,
          1
        ])), this.isModelLoaded = true, this.logger.log(`Quick Draw model loaded! (${wi.length} total classes, ${vi.length} active labels)`);
      } catch (e) {
        throw this.logger.error("Failed to load Quick Draw model:", e), e;
      }
    }
    createDrawingCanvas(e, t, i = 1, s = true) {
      return this.drawingCanvas && this.drawingCanvas.dispose(), this.drawingCanvas = new Da(e, t, i, s), this.drawingCanvas;
    }
    setExpectedDrawing(e) {
      return this.logger.log(`setExpectedDrawing called with: "${e}"`), vi.includes(e) ? (this.expectedDrawing = e, this.logger.log(`expectedDrawing is now: "${this.expectedDrawing}"`), true) : (this.logger.warn(`Label "${e}" is not in the active drawing labels`), false);
    }
    setOnStrokeEndCallback(e) {
      this.onStrokeEndCallback = e;
    }
    enableDrawingMode(e, t) {
      if (!this.drawingCanvas) {
        this.logger.error("No drawing canvas created");
        return;
      }
      this.isDrawingMode = true, this.camera = e, this.domElement = t, this.onPointerDown = this.handlePointerDown.bind(this), this.onPointerMove = this.handlePointerMove.bind(this), this.onPointerUp = this.handlePointerUp.bind(this), t.addEventListener("pointerdown", this.onPointerDown), t.addEventListener("pointermove", this.onPointerMove), t.addEventListener("pointerup", this.onPointerUp);
    }
    disableDrawingMode() {
      this.domElement && (this.isDrawingMode = false, this.domElement.removeEventListener("pointerdown", this.onPointerDown), this.domElement.removeEventListener("pointermove", this.onPointerMove), this.domElement.removeEventListener("pointerup", this.onPointerUp));
    }
    handlePointerDown(e) {
      if (!this.isDrawingMode || !this.drawingCanvas) return;
      const t = this.getCanvasUV(e);
      this.isPointerOverCanvas = !!t, t && (e.preventDefault(), this.drawingCanvas.startStroke(t));
    }
    handlePointerMove(e) {
      if (!this.isDrawingMode || !this.drawingCanvas) return;
      const t = this.getCanvasUV(e);
      this.isPointerOverCanvas = !!t, t && (e.preventDefault(), this.drawingCanvas.addPoint(t));
    }
    handlePointerUp(e) {
      !this.isDrawingMode || !this.drawingCanvas || (this.drawingCanvas.isDrawing && (e.preventDefault(), this.drawingCanvas.endStroke(), this.onStrokeEndCallback && this.onStrokeEndCallback()), this.isPointerOverCanvas = false);
    }
    getCanvasUV(e) {
      if (!this.camera || !this.domElement || !this.drawingCanvas) return null;
      const t = this.domElement.getBoundingClientRect(), i = new Ue((e.clientX - t.left) / t.width * 2 - 1, -((e.clientY - t.top) / t.height) * 2 + 1);
      this.raycaster.setFromCamera(i, this.camera);
      const s = this.raycaster.intersectObject(this.drawingCanvas.getMesh());
      return s.length > 0 ? s[0].uv : null;
    }
    isPointerOverDrawingCanvas() {
      return this.isPointerOverCanvas || this.drawingCanvas && this.drawingCanvas.isDrawing;
    }
    async predict() {
      if (this.isModelLoaded || await this.ensureInitialized(), !this.isModelLoaded) return this.logger.error("Model not loaded yet"), null;
      if (!this.drawingCanvas || !this.drawingCanvas.hasStrokes()) return this.logger.warn("No drawing to predict"), null;
      const e = this.drawingCanvas.getStrokes();
      this.logger.log("Raw strokes:", e);
      const t = await this.preprocessor.preprocessImage(e);
      if (!t) return this.logger.error("Failed to preprocess image"), null;
      if (this.logger.log("Canvas size:", t.width, "x", t.height), this.logger.debug) {
        this.logger.log("Preprocessed to 28x28 using canvas drawImage (like PIL)");
        const a = document.createElement("canvas");
        a.width = 28, a.height = 28, a.getContext("2d").drawImage(t, 0, 0), a.style.cssText = "position: fixed; top: 10px; right: 10px; width: 280px; height: 280px; image-rendering: pixelated; border: 2px solid red; z-index: 10000; background: white;", a.title = "28x28 canvas (resized with drawImage like PIL)", document.body.appendChild(a), setTimeout(() => {
          a.remove();
        }, 5e3);
      }
      const i = window.tf.tidy(() => {
        const l = window.tf.browser.fromPixels(t, 1).toFloat();
        return window.tf.expandDims(l, 0);
      });
      this.logger.log("Tensor:", i);
      const s = await i.data();
      this.logger.log("28x28 Tensor values (784 pixels):", Array.from(s)), this.logger.log("Min value:", Math.min(...s)), this.logger.log("Max value:", Math.max(...s)), this.logger.log("First 10 values:", Array.from(s).slice(0, 10));
      const o = this.model.predict(i).dataSync();
      i.dispose();
      const n = Array.from(o).map((a, l) => ({
        probability: a,
        className: wi[l],
        index: l
      })).filter((a) => vi.includes(a.className)).sort((a, l) => l.probability - a.probability);
      this.logger.log("Filtered predictions (active labels only):", n);
      const r = Array.from(o).map((a, l) => ({
        probability: a,
        className: wi[l],
        index: l
      })).sort((a, l) => l.probability - a.probability).slice(0, 3);
      return this.logger.log("Top 3 predictions (all classes):", r), n;
    }
    async predictAndEvaluate() {
      const e = await this.predict();
      if (!e || e.length === 0) return this.logger.log("No predictions returned"), {
        success: false,
        prediction: null,
        expected: this.expectedDrawing
      };
      const t = e[0];
      this.logger.log("=== EVALUATION DEBUG ==="), this.logger.log("Expected drawing:", this.expectedDrawing), this.logger.log("Top prediction:", t.className), this.logger.log("Probability:", t.probability), this.logger.log("Class match:", t.className === this.expectedDrawing);
      const i = t.className === this.expectedDrawing;
      return this.logger.log("RECOGNIZED:", i), this.logger.log("======================="), {
        success: i,
        prediction: t.className,
        confidence: t.probability,
        expected: this.expectedDrawing,
        allPredictions: e
      };
    }
    clearCanvas() {
      this.drawingCanvas && this.drawingCanvas.clearCanvas();
    }
    captureStrokeData() {
      if (!this.drawingCanvas || !this.drawingCanvas.hasStrokes()) return this.logger.warn("No drawing to capture"), null;
      const e = this.drawingCanvas.getStrokes(), t = [];
      for (const i of e) {
        const s = [];
        for (let o = 0; o < i[0].length; o++) s.push({
          x: i[0][o] / 500,
          y: i[1][o] / 500
        });
        t.push(s);
      }
      return this.logger.log("Captured stroke data:", JSON.stringify(t, null, 2)), t;
    }
    async captureDrawing(e = 1024, t = 1024, i = "drawing") {
      if (!this.drawingCanvas || !this.drawingCanvas.hasStrokes()) return this.logger.warn("No drawing to capture"), null;
      const s = this.drawingCanvas.getStrokes(), o = JSON.parse(JSON.stringify(s)), n = document.createElement("canvas");
      n.width = e, n.height = t;
      const r = n.getContext("2d");
      r.fillStyle = "black", r.fillRect(0, 0, e, t);
      const [a, l] = this.preprocessor.getMinimumCoordinates(o);
      for (const y of o) for (let v = 0; v < y[0].length; v++) y[0][v] = y[0][v] - a + 2, y[1][v] = y[1][v] - l + 2;
      const h = [], c = [];
      for (const y of o) for (let v = 0; v < y[0].length; v++) h.push(y[0][v]), c.push(y[1][v]);
      const d = Math.max(...h) - Math.min(...h), u = Math.max(...c) - Math.min(...c), m = Math.max(d, u), f = Math.min(e, t) * 0.85 / m, x = (e - d * f) / 2, w = (t - u * f) / 2;
      r.strokeStyle = "white", r.lineWidth = Math.max(2, e / 200), r.lineCap = "round", r.lineJoin = "round";
      for (const y of o) {
        if (y[0].length < 2) continue;
        r.beginPath();
        const v = (y[0][0] - Math.min(...h)) * f + x, b = (y[1][0] - Math.min(...c)) * f + w;
        r.moveTo(v, b);
        for (let T = 1; T < y[0].length; T++) {
          const M = (y[0][T] - Math.min(...h)) * f + x, C = (y[1][T] - Math.min(...c)) * f + w;
          r.lineTo(M, C);
        }
        r.stroke();
      }
      return n.toBlob((y) => {
        const v = URL.createObjectURL(y), b = document.createElement("a");
        b.href = v, b.download = `${i}.png`, b.click(), URL.revokeObjectURL(v), this.logger.log(`Downloaded ${i}.png (${e}x${t})`);
      }), n;
    }
    dispose() {
      this.disableDrawingMode(), this.drawingCanvas && (this.drawingCanvas.dispose(), this.drawingCanvas = null), this.model && (this.model.dispose(), this.model = null);
    }
    update(e = 0.016) {
      this.drawingCanvas && this.drawingCanvas.update(e);
    }
  }
  const zt = {
    strokeRepulsionDistance: 0.05,
    strokeRepulsionFalloff: "smooth",
    strokeRepulsionSmoothness: 1,
    canvasGizmo: false
  }, Oa = {
    lightning: "\u26A1",
    star: "\u2B50",
    circle: "\u{1F534}"
  }, za = [
    "lightning",
    "star",
    "circle"
  ];
  class _a {
    constructor(e, t, i) {
      this.scene = e, this.recognitionManager = t, this.gameManager = i, this.logger = new N("DrawingManager", false), this.targetLabel = null, this.targetEmojiElement = null, this.feedbackContainer = null, this.submitButton = null, this.clearButton = null, this.isActive = false, this.canvasPosition = {
        x: 0,
        y: 1.5,
        z: -2
      }, this.canvasScale = 1, this.enableParticles = true, this.strokeRepulsionDistance = zt.strokeRepulsionDistance, this.strokeRepulsionFalloff = zt.strokeRepulsionFalloff, this.strokeRepulsionSmoothness = zt.strokeRepulsionSmoothness, this.canvasGizmo = zt.canvasGizmo, this.inputManager = null, this.originalGizmoProbe = null, this.canvasMesh = null, this.canvasParticleSystem = null, this.gizmoRegistered = false, this.previousFractalIntensity = 0, this.jitterResetTimeout = null, this.pointerLockChangeHandler = null, this.labelPool = [], this.refillLabelPool(), this.successCount = 0, this.maxRounds = 3, this.currentGoalRune = null, this.gameStartTime = 0, this.goalRunePositions = {
        lightning: null,
        star: {
          x: 2.17,
          y: 2.06,
          z: 77.8
        },
        circle: {
          x: -1.81,
          y: 6.31,
          z: 74.67
        }
      }, this.runeTargetOpacity = 0, this.runeCurrentOpacity = 0, this.billboardLerpSpeed = 2, this.targetQuaternion = new I(), this.currentQuaternion = new I(), this.isShaking = false, this.shakeProgress = 0, this.shakeDuration = 2.5, this.shakeAmplitude = 0.15, this.shakeFrequency = 8, this.shakeBaseQuaternion = new I(), this.setupUI(), this.setupKeyboardShortcuts(), this.bindGameStateListener();
    }
    setInputManager(e) {
      this.inputManager = e;
    }
    refillLabelPool() {
      this.labelPool = [
        ...za
      ];
      for (let e = this.labelPool.length - 1; e > 0; e--) {
        const t = Math.floor(Math.random() * (e + 1));
        [this.labelPool[e], this.labelPool[t]] = [
          this.labelPool[t],
          this.labelPool[e]
        ];
      }
    }
    setupKeyboardShortcuts() {
      this.onKeyDown = (e) => {
        if (this.isActive && !(document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA")) switch (e.key.toLowerCase()) {
          case "r":
            this.handleClear();
            break;
          case "enter":
            e.preventDefault(), this.handleSubmit();
            break;
        }
      }, window.addEventListener("keydown", this.onKeyDown);
    }
    bindGameStateListener() {
      this.gameManager && (setTimeout(() => {
        const e = this.gameManager.getState();
        e && (e.currentState === p.CURSOR || e.currentState === p.CURSOR_FINAL) && !this.isActive && (this.startGame(e.currentState === p.CURSOR_FINAL), this.updateRuneVisibility(e));
      }, 100), this.gameManager.on("state:changed", (e, t) => {
        const i = e.currentState === p.CURSOR || e.currentState === p.CURSOR_FINAL;
        i && !this.isActive ? this.startGame(e.currentState === p.CURSOR_FINAL) : !i && this.isActive && this.stopGame(), this.updateRuneVisibility(e);
      }));
    }
    updateRuneVisibility(e) {
      const t = (e == null ? void 0 : e.isViewmasterEquipped) || false;
      this.runeTargetOpacity = t ? 1 : 0;
    }
    setupUI() {
      const e = document.createElement("style");
      e.textContent = `
      body.drawing-game-cursor {
        cursor: grab !important;
      }

      body.drawing-game-cursor:active {
        cursor: grabbing !important;
      }

      body.drawing-game-cursor * {
        cursor: grab !important;
      }

      body.drawing-game-cursor *:active {
        cursor: grabbing !important;
      }

      .drawing-game-target {
        position: fixed;
        top: 5%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 80px;
        background: rgba(0, 0, 0, 0.8);
        padding: 20px 40px;
        border-radius: 15px;
        border: 3px solid white;
        display: none;
        z-index: 999;
      }

      .drawing-game-target.active {
        display: flex;
        align-items: center;
        gap: 20px;
      }

      .drawing-game-result {
        font-size: 60px;
        opacity: 0;
        transition: opacity 0.3s;
      }

      .drawing-game-result.show {
        opacity: 1;
      }
    `, document.head.appendChild(e), this.targetEmojiElement = document.createElement("div"), this.targetEmojiElement.className = "drawing-game-target", this.targetEmoji = document.createElement("span"), this.resultEmoji = document.createElement("span"), this.resultEmoji.className = "drawing-game-result", this.targetEmojiElement.appendChild(this.targetEmoji), this.targetEmojiElement.appendChild(this.resultEmoji), document.body.appendChild(this.targetEmojiElement);
    }
    async startGame(e = false) {
      var _a3, _b2, _c, _d;
      if (!this.recognitionManager.isModelLoaded) {
        this.logger.log("Initializing DrawingRecognitionManager (lazy load TensorFlow.js)...");
        try {
          await this.recognitionManager.ensureInitialized(), this.logger.log("\u2705 DrawingRecognitionManager initialized");
        } catch (s) {
          this.logger.error("\u274C Failed to initialize DrawingRecognitionManager:", s);
          return;
        }
      }
      const t = window.camera, i = this.inputManager || window.inputManager;
      if (!t) {
        this.logger.warn("Camera not available yet, retrying in 100ms..."), setTimeout(() => {
          this.isActive || this.startGame(e);
        }, 100);
        return;
      }
      if (!i) {
        this.logger.warn("InputManager not available yet, retrying in 100ms..."), setTimeout(() => {
          this.isActive || this.startGame(e);
        }, 100);
        return;
      }
      if (this.isActive = true, this.successCount = e ? 2 : 0, this.gameStartTime = Date.now(), this.gameManager && this.gameManager.setState({
        drawingSuccessCount: this.successCount,
        drawingFailureCount: 0,
        lastDrawingSuccess: null,
        currentDrawingTarget: null
      }), i) {
        i.setPointerLockBlocked(true);
        const s = i.gizmoProbe;
        this.originalGizmoProbe = s, i.setGizmoProbe(() => {
          const o = this.recognitionManager.isPointerOverDrawingCanvas(), n = s ? s() : false;
          return o || n;
        });
      } else this.logger.warn("No inputManager available!");
      if (document.body.classList.add("drawing-game-cursor"), this.pointerLockChangeHandler = () => {
        this.isActive && document.pointerLockElement && document.exitPointerLock();
      }, document.addEventListener("pointerlockchange", this.pointerLockChangeHandler), document.addEventListener("mozpointerlockchange", this.pointerLockChangeHandler), document.addEventListener("webkitpointerlockchange", this.pointerLockChangeHandler), this.recognitionManager.showEmojiUI && this.targetEmojiElement && this.targetEmojiElement.classList.add("active"), setTimeout(() => {
        this.isActive && this.recognitionManager.setOnStrokeEndCallback(() => {
          this.autoSubmitDrawing();
        });
      }, 1500), this.recognitionManager.drawingCanvas) {
        ((_a3 = this.recognitionManager.drawingCanvas) == null ? void 0 : _a3.particleSystem) && (this.recognitionManager.drawingCanvas.particleSystem.visible = true), ((_c = (_b2 = this.recognitionManager.drawingCanvas) == null ? void 0 : _b2.strokeMesh) == null ? void 0 : _c.mesh) && (this.recognitionManager.drawingCanvas.strokeMesh.mesh.visible = true);
        const s = this.recognitionManager.drawingCanvas.getMesh(), o = this.recognitionManager.drawingCanvas;
        s && (this.canvasMesh = s, this.canvasParticleSystem = o.particleSystem, this.canvasGizmo && o.particleSystem ? window.gizmoManager ? (window.gizmoManager.registerObject(o.particleSystem, "drawing-canvas-particles", "drawing"), this.gizmoRegistered = true, this.logger.log("\u2705 Registered existing drawing particle system with gizmo manager")) : this.logger.warn("\u274C GizmoManager not found on window!") : this.canvasGizmo && this.logger.warn("Canvas gizmo enabled but particleSystem not found"), this.goalRunePositions.lightning || (this.goalRunePositions.lightning = {
          x: s.position.x + 1.2,
          y: s.position.y,
          z: s.position.z
        }));
      } else {
        const s = {
          x: -8.77,
          y: 2.85,
          z: 81.87
        }, o = {
          x: 0,
          y: 1.4047,
          z: -0
        }, n = 1.5;
        this.recognitionManager.createDrawingCanvas(this.scene, s, n, this.enableParticles, this.strokeRepulsionDistance, this.strokeRepulsionFalloff, this.strokeRepulsionSmoothness);
        const r = this.recognitionManager.drawingCanvas;
        if (r) {
          r.particleSystem && (r.particleSystem.visible = true), r.strokeMesh && r.strokeMesh.mesh && (r.strokeMesh.mesh.visible = true);
          const h = r.getMesh();
          if (h && (h.position.set(s.x, s.y, s.z), h.rotation.set(o.x, o.y, o.z), h.scale.set(n, n, n), this.canvasMesh = h, this.canvasParticleSystem = r.particleSystem, this.canvasGizmo && r.particleSystem ? window.gizmoManager ? (window.gizmoManager.registerObject(r.particleSystem, "drawing-canvas-particles", "drawing"), this.gizmoRegistered = true, this.logger.log("\u2705 Registered drawing particle system with gizmo manager")) : this.logger.warn("\u274C GizmoManager not found on window!") : this.canvasGizmo && this.logger.warn("Canvas gizmo enabled but particleSystem not found")), r.particleSystem && (r.particleSystem.position.set(s.x, s.y, s.z), r.particleSystem.rotation.set(o.x, o.y, o.z), r.particleSystem.scale.set(n, n, n)), r.strokeMesh && (r.strokeMesh.position.set(s.x, s.y, s.z), r.strokeMesh.rotation.set(o.x, o.y, o.z), r.strokeMesh.scale.set(n, n, n)), e && (r.colorStage = 2, r.currentColor.copy(r.redColor), r.currentJitterIntensity = 0.5, r.particleSystem && r.particleSystem.material && (r.particleSystem.material.uniforms.uColor.value.copy(r.redColor), r.particleSystem.material.uniforms.uJitterIntensity.value = 0.5), r.strokeMesh && r.strokeMesh.material)) {
            const c = r.redColor.clone().multiplyScalar(0.8);
            r.strokeMesh.material.uniforms.uColor.value.copy(c);
          }
          this.goalRunePositions.lightning = {
            x: s.x + 2.2,
            y: s.y,
            z: s.z
          };
        }
        const a = ((_d = window.inputManager) == null ? void 0 : _d.domElement) || document.querySelector("canvas"), l = window.camera;
        l && a ? this.recognitionManager.enableDrawingMode(l, a) : this.logger.warn("Missing camera or domElement!");
      }
      if (this.recognitionManager.drawingCanvas) {
        this.recognitionManager.clearCanvas();
        const s = this.recognitionManager.drawingCanvas.getMesh();
        s && this.currentQuaternion.copy(s.quaternion);
      }
      this.pickNewTarget();
    }
    stopGame() {
      this.isActive = false, this.gameStartTime = 0, this.isShaking = false, this.shakeProgress = 0, this.jitterResetTimeout && (clearTimeout(this.jitterResetTimeout), this.jitterResetTimeout = null), this.previousFractalIntensity = 0, this.gameManager && this.gameManager.setState({
        drawingSuccessCount: 0,
        drawingFailureCount: 0,
        lastDrawingSuccess: null,
        currentDrawingTarget: null
      }), this.recognitionManager.setOnStrokeEndCallback(null), this.pointerLockChangeHandler && (document.removeEventListener("pointerlockchange", this.pointerLockChangeHandler), document.removeEventListener("mozpointerlockchange", this.pointerLockChangeHandler), document.removeEventListener("webkitpointerlockchange", this.pointerLockChangeHandler), this.pointerLockChangeHandler = null);
      const e = this.inputManager || window.inputManager;
      if (e && (e.setPointerLockBlocked(false), e.setGizmoProbe(this.originalGizmoProbe || null)), document.body.classList.remove("drawing-game-cursor"), this.recognitionManager.showEmojiUI && this.targetEmojiElement && this.targetEmojiElement.classList.remove("active"), this.clearResult(), this.recognitionManager.drawingCanvas) {
        const t = this.recognitionManager.drawingCanvas;
        t.isExploding = false, t.explosionProgress = 0, t.isSuccessAnimating = false, t.successAnimProgress = 0, t.isPulsing = false, t.pulseProgress = 0, t.isStrokePulsing = false, t.strokePulseProgress = 0, t.isTransitioningColor = false, t.colorTransitionProgress = 0, t.currentJitterIntensity = 0, t.particleSystem && t.particleSystem.material && (t.particleSystem.material.uniforms.uJitterIntensity.value = 0, t.particleSystem.material.uniforms.uPulseScale.value = 1, t.particleSystem.material.uniforms.uExplosionFactor.value = 0, t.particleSystem.material.uniforms.uImplosionFactor.value = 0, t.particleSystem.visible = false), t.strokeMesh && (t.strokeMesh.material && t.strokeMesh.material.uniforms.uFractalIntensity && (t.strokeMesh.material.uniforms.uFractalIntensity.value = 0), t.strokeMesh.mesh && (t.strokeMesh.mesh.visible = false)), this.recognitionManager.disableDrawingMode();
      }
      this.gizmoRegistered && this.canvasParticleSystem && window.gizmoManager && (window.gizmoManager.unregisterObject(this.canvasParticleSystem), this.gizmoRegistered = false), this.canvasParticleSystem = null, this.canvasMesh = null, this.currentGoalRune && (this.currentGoalRune.dispose(), this.currentGoalRune = null), window.runeManager && window.runeManager.clearRunes();
    }
    pickNewTarget() {
      if (this.labelPool.length === 0 && this.refillLabelPool(), this.targetLabel = this.labelPool.pop(), this.gameManager && this.gameManager.setState({
        currentDrawingTarget: this.targetLabel
      }), this.recognitionManager.setExpectedDrawing(this.targetLabel), this.recognitionManager.showEmojiUI) {
        const t = Oa[this.targetLabel];
        this.targetEmoji ? this.targetEmoji.textContent = t : this.logger.warn("targetEmoji is null!");
      }
      const e = this.goalRunePositions[this.targetLabel];
      if (window.runeManager && e) {
        this.currentGoalRune && this.currentGoalRune.dispose();
        const t = window.runeManager.createRune(this.targetLabel, e, {
          scale: 1.5,
          rotation: {
            x: 0,
            y: 0,
            z: 0
          }
        });
        if (t && t.mesh) {
          const i = window.camera;
          i && t.mesh.lookAt(i.position);
        }
        this.currentGoalRune = t, this.logger.log(`Created ${this.targetLabel} goal rune at position`, e);
      }
    }
    async autoSubmitDrawing() {
      var _a3;
      this.isActive && ((_a3 = this.recognitionManager.drawingCanvas) == null ? void 0 : _a3.hasStrokes()) && await this.handleSubmit();
    }
    async handleSubmit() {
      var _a3, _b2;
      if (!this.isActive) {
        this.logger.log("Submit ignored - game not active");
        return;
      }
      const e = Date.now() - this.gameStartTime;
      if (e < 1500) {
        this.logger.log(`Submit ignored - too soon after init (${e}ms)`);
        return;
      }
      if (!((_a3 = this.recognitionManager.drawingCanvas) == null ? void 0 : _a3.hasStrokes())) {
        this.logger.log("Submit ignored - no strokes");
        return;
      }
      this.logger.log("Submitting drawing...");
      const t = await this.recognitionManager.predictAndEvaluate();
      if (this.logger.log("Result received:", t), !t || !t.prediction) {
        this.logger.log("No prediction - ignoring for gameplay");
        return;
      }
      if (this.logger.log(`Result: predicted=${t.prediction} (${(_b2 = t.confidence) == null ? void 0 : _b2.toFixed(2)}), expected=${t.expected}, success=${t.success}`), t.success) {
        if (this.successCount++, this.logger.log(`Success ${this.successCount}/${this.maxRounds}!`), this.showResult("\u2705"), this.gameManager && (this.gameManager.setState({
          drawingSuccessCount: this.successCount,
          lastDrawingSuccess: true
        }), setTimeout(() => {
          this.gameManager && this.isActive && this.gameManager.setState({
            lastDrawingSuccess: null
          });
        }, 100)), this.recognitionManager.drawingCanvas) {
          const i = this.recognitionManager.drawingCanvas;
          this.logger.log(`Checking for explosion: colorStage=${i.colorStage}`), i.colorStage === 2 ? (this.logger.log("EXPLOSION TRIGGERED!"), i.isExploding = true, i.explosionProgress = 0, this.successCount >= this.maxRounds && (i.skipRecreateAfterExplosion = true, this.logger.log("Final explosion - particles will not recreate")), this.logger.log(`After setting - isExploding=${i.isExploding}, explosionProgress=${i.explosionProgress}`), setTimeout(() => {
            this.logger.log("Explosion complete"), this.successCount >= this.maxRounds ? (this.logger.log("Drawing game complete! Transitioning to POST_CURSOR"), this.stopGame(), this.gameManager && this.gameManager.setState({
              currentState: p.POST_CURSOR
            })) : (this.logger.log("Picking new target"), this.pickNewTarget());
          }, 2.5 * 1e3 + 300)) : (this.successCount === 1 ? i.triggerSuccessAnimation(0.25) : this.successCount === 2 && i.triggerSuccessAnimation(0.5), i.triggerStrokePulse(), this.logger.log(`Normal color cycle: advancing from stage ${i.colorStage}`), setTimeout(() => {
            this.handleClear(true), this.successCount === 2 && (this.logger.log("Advancing to CURSOR_FINAL state"), this.gameManager && this.gameManager.setState({
              currentState: p.CURSOR_FINAL
            })), this.pickNewTarget();
          }, 1500));
        }
      } else if (this.recognitionManager.drawingCanvas && (this.recognitionManager.drawingCanvas.fadeIncorrectGuess(), this.isShaking = true, this.shakeProgress = 0, this.recognitionManager.drawingCanvas.mesh && this.shakeBaseQuaternion.copy(this.currentQuaternion)), this.gameManager) {
        const i = this.gameManager.state.drawingFailureCount || 0;
        this.gameManager.setState({
          lastDrawingSuccess: false,
          drawingFailureCount: i + 1
        }), setTimeout(() => {
          this.gameManager && this.isActive && this.gameManager.setState({
            lastDrawingSuccess: null
          });
        }, 100);
      }
    }
    handleClear(e = false) {
      this.isActive && (e && this.recognitionManager.drawingCanvas && this.recognitionManager.drawingCanvas.triggerColorCycle(), this.recognitionManager.clearCanvas(), this.clearResult());
    }
    showResult(e) {
      !this.recognitionManager.showEmojiUI || !this.resultEmoji || (this.resultEmoji.textContent = e, this.resultEmoji.classList.add("show"), setTimeout(() => {
        this.clearResult();
      }, 3e3));
    }
    clearResult() {
      !this.recognitionManager.showEmojiUI || !this.resultEmoji || (this.resultEmoji.classList.remove("show"), setTimeout(() => {
        this.resultEmoji.textContent = "";
      }, 300));
    }
    update(e = 0.016) {
      var _a3;
      if (!this.isActive) return;
      const t = window.camera;
      if (t && this.recognitionManager.drawingCanvas) {
        const o = this.recognitionManager.drawingCanvas;
        if (o.mesh) {
          if (this.isShaking) if (this.shakeProgress += e / this.shakeDuration, this.shakeProgress >= 1) {
            this.isShaking = false, this.shakeProgress = 0;
            const n = new Fe();
            n.position.copy(o.mesh.position), n.lookAt(t.position), this.currentQuaternion.copy(n.quaternion);
          } else {
            const n = new Fe();
            n.position.copy(o.mesh.position), n.lookAt(t.position), this.shakeBaseQuaternion.slerp(n.quaternion, this.billboardLerpSpeed * e * 0.5);
            const r = Math.sin(this.shakeProgress * Math.PI * this.shakeFrequency) * this.shakeAmplitude * (1 - this.shakeProgress), a = new S(0, 1, 0), l = new I().setFromAxisAngle(a, r);
            this.currentQuaternion.multiplyQuaternions(l, this.shakeBaseQuaternion);
          }
          else {
            const n = new Fe();
            n.position.copy(o.mesh.position), n.lookAt(t.position), this.targetQuaternion.copy(n.quaternion), this.currentQuaternion.slerp(this.targetQuaternion, this.billboardLerpSpeed * e);
          }
          o.mesh.quaternion.copy(this.currentQuaternion), o.particleSystem && o.particleSystem.quaternion.copy(this.currentQuaternion), o.strokeMesh && o.strokeMesh.quaternion.copy(this.currentQuaternion);
        }
      }
      if (this.canvasGizmo && !this.gizmoRegistered && this.canvasParticleSystem && window.gizmoManager && (window.gizmoManager.registerObject(this.canvasParticleSystem, "drawing-canvas-particles", "drawing"), this.gizmoRegistered = true, this.logger.log("\u2705 Late-registered drawing particle system with gizmo manager")), this.recognitionManager.drawingCanvas && window.vfxManager) {
        const o = (_a3 = window.vfxManager.effects) == null ? void 0 : _a3.splatFractal, n = this.recognitionManager.drawingCanvas, r = (o == null ? void 0 : o.currentIntensity) || 0, a = this.previousFractalIntensity > 0 && r === 0;
        if (r > 0) {
          if (this.jitterResetTimeout && (clearTimeout(this.jitterResetTimeout), this.jitterResetTimeout = null), n.particleSystem && n.particleSystem.material) {
            const l = n.currentJitterIntensity || 0, h = r * 2;
            n.particleSystem.material.uniforms.uJitterIntensity.value = l + h;
          }
          n.strokeMesh && n.strokeMesh.material && n.strokeMesh.material.uniforms.uFractalIntensity && (n.strokeMesh.material.uniforms.uFractalIntensity.value = r);
        } else if (a) this.jitterResetTimeout && clearTimeout(this.jitterResetTimeout), this.jitterResetTimeout = setTimeout(() => {
          if (this.jitterResetTimeout = null, n.particleSystem && n.particleSystem.material && this.isActive) {
            const l = n.currentJitterIntensity || 0;
            n.particleSystem.material.uniforms.uJitterIntensity.value = l;
          }
          n.strokeMesh && n.strokeMesh.material && this.isActive && n.strokeMesh.material.uniforms.uFractalIntensity && (n.strokeMesh.material.uniforms.uFractalIntensity.value = 0);
        }, 500);
        else if (!this.jitterResetTimeout) {
          if (n.particleSystem && n.particleSystem.material) {
            const l = n.currentJitterIntensity || 0;
            n.particleSystem.material.uniforms.uJitterIntensity.value = l;
          }
          n.strokeMesh && n.strokeMesh.material && n.strokeMesh.material.uniforms.uFractalIntensity && (n.strokeMesh.material.uniforms.uFractalIntensity.value = 0);
        }
        this.previousFractalIntensity = r;
      }
      const i = 3, s = this.runeTargetOpacity - this.runeCurrentOpacity;
      if (this.runeCurrentOpacity += s * i * e, this.currentGoalRune && this.currentGoalRune.material) {
        if (this.currentGoalRune.material.uniforms && this.currentGoalRune.material.uniforms.uOpacity && (this.currentGoalRune.material.uniforms.uOpacity.value = this.runeCurrentOpacity), this.recognitionManager.drawingCanvas) {
          const o = this.recognitionManager.drawingCanvas;
          o.currentColor && this.currentGoalRune.material.uniforms && this.currentGoalRune.material.uniforms.uColor && this.currentGoalRune.material.uniforms.uColor.value.copy(o.currentColor).multiplyScalar(0.8);
        }
        this.currentGoalRune.visible = this.runeCurrentOpacity > 0.01;
      }
    }
    dispose() {
      this.stopGame(), this.targetEmojiElement && this.targetEmojiElement.remove(), this.onKeyDown && window.removeEventListener("keydown", this.onKeyDown), this.gizmoRegistered && this.canvasParticleSystem && window.gizmoManager && (window.gizmoManager.unregisterObject(this.canvasParticleSystem), this.gizmoRegistered = false), this.canvasParticleSystem = null, this.canvasMesh = null;
    }
  }
  const Fa = {
    lightning: [
      {
        x: 0.524,
        y: 0.124
      },
      {
        x: 0.524,
        y: 0.126
      },
      {
        x: 0.522,
        y: 0.126
      },
      {
        x: 0.522,
        y: 0.128
      },
      {
        x: 0.52,
        y: 0.13
      },
      {
        x: 0.518,
        y: 0.132
      },
      {
        x: 0.516,
        y: 0.136
      },
      {
        x: 0.512,
        y: 0.14
      },
      {
        x: 0.51,
        y: 0.144
      },
      {
        x: 0.506,
        y: 0.148
      },
      {
        x: 0.502,
        y: 0.152
      },
      {
        x: 0.498,
        y: 0.158
      },
      {
        x: 0.494,
        y: 0.166
      },
      {
        x: 0.486,
        y: 0.178
      },
      {
        x: 0.478,
        y: 0.19
      },
      {
        x: 0.472,
        y: 0.2
      },
      {
        x: 0.464,
        y: 0.214
      },
      {
        x: 0.458,
        y: 0.224
      },
      {
        x: 0.444,
        y: 0.242
      },
      {
        x: 0.438,
        y: 0.25
      },
      {
        x: 0.43,
        y: 0.26
      },
      {
        x: 0.42,
        y: 0.278
      },
      {
        x: 0.412,
        y: 0.288
      },
      {
        x: 0.404,
        y: 0.298
      },
      {
        x: 0.396,
        y: 0.308
      },
      {
        x: 0.39,
        y: 0.316
      },
      {
        x: 0.382,
        y: 0.328
      },
      {
        x: 0.376,
        y: 0.34
      },
      {
        x: 0.368,
        y: 0.348
      },
      {
        x: 0.366,
        y: 0.358
      },
      {
        x: 0.36,
        y: 0.368
      },
      {
        x: 0.358,
        y: 0.37
      },
      {
        x: 0.356,
        y: 0.378
      },
      {
        x: 0.354,
        y: 0.386
      },
      {
        x: 0.348,
        y: 0.392
      },
      {
        x: 0.348,
        y: 0.396
      },
      {
        x: 0.346,
        y: 0.402
      },
      {
        x: 0.342,
        y: 0.406
      },
      {
        x: 0.342,
        y: 0.408
      },
      {
        x: 0.34,
        y: 0.412
      },
      {
        x: 0.338,
        y: 0.418
      },
      {
        x: 0.338,
        y: 0.418
      },
      {
        x: 0.338,
        y: 0.42
      },
      {
        x: 0.336,
        y: 0.422
      },
      {
        x: 0.336,
        y: 0.424
      },
      {
        x: 0.336,
        y: 0.424
      },
      {
        x: 0.336,
        y: 0.424
      },
      {
        x: 0.338,
        y: 0.424
      },
      {
        x: 0.338,
        y: 0.424
      },
      {
        x: 0.342,
        y: 0.424
      },
      {
        x: 0.344,
        y: 0.424
      },
      {
        x: 0.348,
        y: 0.424
      },
      {
        x: 0.352,
        y: 0.424
      },
      {
        x: 0.368,
        y: 0.422
      },
      {
        x: 0.38,
        y: 0.42
      },
      {
        x: 0.394,
        y: 0.418
      },
      {
        x: 0.414,
        y: 0.414
      },
      {
        x: 0.43,
        y: 0.41
      },
      {
        x: 0.442,
        y: 0.406
      },
      {
        x: 0.462,
        y: 0.398
      },
      {
        x: 0.476,
        y: 0.392
      },
      {
        x: 0.49,
        y: 0.388
      },
      {
        x: 0.5,
        y: 0.384
      },
      {
        x: 0.512,
        y: 0.38
      },
      {
        x: 0.52,
        y: 0.376
      },
      {
        x: 0.524,
        y: 0.372
      },
      {
        x: 0.526,
        y: 0.372
      },
      {
        x: 0.53,
        y: 0.37
      },
      {
        x: 0.53,
        y: 0.368
      },
      {
        x: 0.534,
        y: 0.366
      },
      {
        x: 0.534,
        y: 0.364
      },
      {
        x: 0.538,
        y: 0.36
      },
      {
        x: 0.538,
        y: 0.358
      },
      {
        x: 0.54,
        y: 0.358
      },
      {
        x: 0.542,
        y: 0.354
      },
      {
        x: 0.546,
        y: 0.352
      },
      {
        x: 0.55,
        y: 0.35
      },
      {
        x: 0.554,
        y: 0.348
      },
      {
        x: 0.558,
        y: 0.348
      },
      {
        x: 0.56,
        y: 0.346
      },
      {
        x: 0.564,
        y: 0.346
      },
      {
        x: 0.564,
        y: 0.344
      },
      {
        x: 0.566,
        y: 0.344
      },
      {
        x: 0.566,
        y: 0.344
      },
      {
        x: 0.566,
        y: 0.354
      },
      {
        x: 0.566,
        y: 0.366
      },
      {
        x: 0.564,
        y: 0.374
      },
      {
        x: 0.56,
        y: 0.388
      },
      {
        x: 0.554,
        y: 0.402
      },
      {
        x: 0.55,
        y: 0.416
      },
      {
        x: 0.542,
        y: 0.434
      },
      {
        x: 0.534,
        y: 0.45
      },
      {
        x: 0.524,
        y: 0.464
      },
      {
        x: 0.51,
        y: 0.484
      },
      {
        x: 0.494,
        y: 0.5
      },
      {
        x: 0.48,
        y: 0.52
      },
      {
        x: 0.474,
        y: 0.528
      },
      {
        x: 0.46,
        y: 0.548
      },
      {
        x: 0.454,
        y: 0.556
      },
      {
        x: 0.446,
        y: 0.57
      },
      {
        x: 0.44,
        y: 0.576
      },
      {
        x: 0.438,
        y: 0.582
      },
      {
        x: 0.436,
        y: 0.59
      },
      {
        x: 0.432,
        y: 0.602
      },
      {
        x: 0.432,
        y: 0.61
      },
      {
        x: 0.432,
        y: 0.618
      },
      {
        x: 0.43,
        y: 0.626
      },
      {
        x: 0.43,
        y: 0.632
      },
      {
        x: 0.43,
        y: 0.638
      },
      {
        x: 0.428,
        y: 0.646
      },
      {
        x: 0.428,
        y: 0.65
      },
      {
        x: 0.428,
        y: 0.656
      },
      {
        x: 0.428,
        y: 0.66
      },
      {
        x: 0.428,
        y: 0.666
      },
      {
        x: 0.428,
        y: 0.67
      },
      {
        x: 0.428,
        y: 0.672
      },
      {
        x: 0.43,
        y: 0.672
      },
      {
        x: 0.43,
        y: 0.674
      },
      {
        x: 0.432,
        y: 0.674
      },
      {
        x: 0.44,
        y: 0.672
      },
      {
        x: 0.456,
        y: 0.662
      },
      {
        x: 0.474,
        y: 0.656
      },
      {
        x: 0.49,
        y: 0.65
      },
      {
        x: 0.512,
        y: 0.64
      },
      {
        x: 0.524,
        y: 0.636
      },
      {
        x: 0.55,
        y: 0.628
      },
      {
        x: 0.564,
        y: 0.622
      },
      {
        x: 0.58,
        y: 0.616
      },
      {
        x: 0.592,
        y: 0.61
      },
      {
        x: 0.61,
        y: 0.602
      },
      {
        x: 0.618,
        y: 0.598
      },
      {
        x: 0.622,
        y: 0.596
      },
      {
        x: 0.626,
        y: 0.594
      },
      {
        x: 0.63,
        y: 0.592
      },
      {
        x: 0.634,
        y: 0.59
      },
      {
        x: 0.634,
        y: 0.59
      },
      {
        x: 0.64,
        y: 0.586
      },
      {
        x: 0.642,
        y: 0.586
      },
      {
        x: 0.646,
        y: 0.584
      },
      {
        x: 0.65,
        y: 0.59
      },
      {
        x: 0.65,
        y: 0.594
      },
      {
        x: 0.65,
        y: 0.602
      },
      {
        x: 0.644,
        y: 0.618
      },
      {
        x: 0.638,
        y: 0.628
      },
      {
        x: 0.628,
        y: 0.648
      },
      {
        x: 0.62,
        y: 0.664
      },
      {
        x: 0.608,
        y: 0.68
      },
      {
        x: 0.596,
        y: 0.696
      },
      {
        x: 0.582,
        y: 0.718
      },
      {
        x: 0.576,
        y: 0.728
      },
      {
        x: 0.564,
        y: 0.746
      },
      {
        x: 0.556,
        y: 0.756
      },
      {
        x: 0.544,
        y: 0.772
      },
      {
        x: 0.536,
        y: 0.782
      },
      {
        x: 0.528,
        y: 0.796
      },
      {
        x: 0.524,
        y: 0.802
      },
      {
        x: 0.518,
        y: 0.81
      },
      {
        x: 0.516,
        y: 0.814
      },
      {
        x: 0.514,
        y: 0.818
      },
      {
        x: 0.512,
        y: 0.822
      },
      {
        x: 0.512,
        y: 0.826
      },
      {
        x: 0.51,
        y: 0.83
      },
      {
        x: 0.51,
        y: 0.832
      },
      {
        x: 0.51,
        y: 0.834
      },
      {
        x: 0.512,
        y: 0.834
      },
      {
        x: 0.512,
        y: 0.836
      },
      {
        x: 0.512,
        y: 0.836
      },
      {
        x: 0.512,
        y: 0.84
      },
      {
        x: 0.512,
        y: 0.842
      },
      {
        x: 0.514,
        y: 0.844
      },
      {
        x: 0.514,
        y: 0.846
      },
      {
        x: 0.514,
        y: 0.85
      },
      {
        x: 0.516,
        y: 0.852
      },
      {
        x: 0.518,
        y: 0.852
      },
      {
        x: 0.518,
        y: 0.854
      },
      {
        x: 0.518,
        y: 0.854
      },
      {
        x: 0.52,
        y: 0.854
      },
      {
        x: 0.522,
        y: 0.856
      }
    ],
    star: [
      {
        x: 0.114,
        y: 0.378
      },
      {
        x: 0.114,
        y: 0.378
      },
      {
        x: 0.116,
        y: 0.378
      },
      {
        x: 0.116,
        y: 0.38
      },
      {
        x: 0.118,
        y: 0.38
      },
      {
        x: 0.124,
        y: 0.38
      },
      {
        x: 0.13,
        y: 0.38
      },
      {
        x: 0.138,
        y: 0.38
      },
      {
        x: 0.152,
        y: 0.38
      },
      {
        x: 0.178,
        y: 0.38
      },
      {
        x: 0.196,
        y: 0.378
      },
      {
        x: 0.216,
        y: 0.376
      },
      {
        x: 0.236,
        y: 0.376
      },
      {
        x: 0.258,
        y: 0.374
      },
      {
        x: 0.278,
        y: 0.372
      },
      {
        x: 0.3,
        y: 0.368
      },
      {
        x: 0.32,
        y: 0.366
      },
      {
        x: 0.34,
        y: 0.362
      },
      {
        x: 0.356,
        y: 0.358
      },
      {
        x: 0.372,
        y: 0.352
      },
      {
        x: 0.378,
        y: 0.352
      },
      {
        x: 0.394,
        y: 0.348
      },
      {
        x: 0.414,
        y: 0.34
      },
      {
        x: 0.424,
        y: 0.338
      },
      {
        x: 0.45,
        y: 0.332
      },
      {
        x: 0.476,
        y: 0.326
      },
      {
        x: 0.506,
        y: 0.32
      },
      {
        x: 0.518,
        y: 0.316
      },
      {
        x: 0.548,
        y: 0.306
      },
      {
        x: 0.562,
        y: 0.304
      },
      {
        x: 0.588,
        y: 0.296
      },
      {
        x: 0.598,
        y: 0.296
      },
      {
        x: 0.624,
        y: 0.288
      },
      {
        x: 0.636,
        y: 0.286
      },
      {
        x: 0.66,
        y: 0.282
      },
      {
        x: 0.668,
        y: 0.282
      },
      {
        x: 0.69,
        y: 0.278
      },
      {
        x: 0.696,
        y: 0.276
      },
      {
        x: 0.698,
        y: 0.274
      },
      {
        x: 0.702,
        y: 0.274
      },
      {
        x: 0.702,
        y: 0.274
      },
      {
        x: 0.704,
        y: 0.272
      },
      {
        x: 0.708,
        y: 0.272
      },
      {
        x: 0.712,
        y: 0.27
      },
      {
        x: 0.718,
        y: 0.27
      },
      {
        x: 0.73,
        y: 0.268
      },
      {
        x: 0.742,
        y: 0.268
      },
      {
        x: 0.75,
        y: 0.266
      },
      {
        x: 0.76,
        y: 0.264
      },
      {
        x: 0.762,
        y: 0.264
      },
      {
        x: 0.764,
        y: 0.264
      },
      {
        x: 0.764,
        y: 0.262
      },
      {
        x: 0.764,
        y: 0.262
      },
      {
        x: 0.762,
        y: 0.26
      },
      {
        x: 0.762,
        y: 0.262
      },
      {
        x: 0.758,
        y: 0.264
      },
      {
        x: 0.752,
        y: 0.272
      },
      {
        x: 0.744,
        y: 0.282
      },
      {
        x: 0.74,
        y: 0.286
      },
      {
        x: 0.728,
        y: 0.3
      },
      {
        x: 0.714,
        y: 0.316
      },
      {
        x: 0.706,
        y: 0.322
      },
      {
        x: 0.684,
        y: 0.34
      },
      {
        x: 0.676,
        y: 0.346
      },
      {
        x: 0.65,
        y: 0.37
      },
      {
        x: 0.612,
        y: 0.394
      },
      {
        x: 0.598,
        y: 0.402
      },
      {
        x: 0.584,
        y: 0.412
      },
      {
        x: 0.544,
        y: 0.44
      },
      {
        x: 0.526,
        y: 0.45
      },
      {
        x: 0.486,
        y: 0.478
      },
      {
        x: 0.468,
        y: 0.488
      },
      {
        x: 0.428,
        y: 0.518
      },
      {
        x: 0.414,
        y: 0.528
      },
      {
        x: 0.382,
        y: 0.56
      },
      {
        x: 0.37,
        y: 0.57
      },
      {
        x: 0.36,
        y: 0.582
      },
      {
        x: 0.34,
        y: 0.604
      },
      {
        x: 0.334,
        y: 0.614
      },
      {
        x: 0.32,
        y: 0.632
      },
      {
        x: 0.306,
        y: 0.648
      },
      {
        x: 0.292,
        y: 0.664
      },
      {
        x: 0.286,
        y: 0.67
      },
      {
        x: 0.27,
        y: 0.686
      },
      {
        x: 0.264,
        y: 0.694
      },
      {
        x: 0.25,
        y: 0.71
      },
      {
        x: 0.236,
        y: 0.728
      },
      {
        x: 0.23,
        y: 0.734
      },
      {
        x: 0.22,
        y: 0.748
      },
      {
        x: 0.214,
        y: 0.758
      },
      {
        x: 0.21,
        y: 0.764
      },
      {
        x: 0.21,
        y: 0.766
      },
      {
        x: 0.208,
        y: 0.768
      },
      {
        x: 0.21,
        y: 0.766
      },
      {
        x: 0.212,
        y: 0.764
      },
      {
        x: 0.214,
        y: 0.756
      },
      {
        x: 0.216,
        y: 0.75
      },
      {
        x: 0.218,
        y: 0.742
      },
      {
        x: 0.224,
        y: 0.73
      },
      {
        x: 0.23,
        y: 0.716
      },
      {
        x: 0.24,
        y: 0.7
      },
      {
        x: 0.242,
        y: 0.69
      },
      {
        x: 0.252,
        y: 0.67
      },
      {
        x: 0.266,
        y: 0.646
      },
      {
        x: 0.282,
        y: 0.616
      },
      {
        x: 0.298,
        y: 0.576
      },
      {
        x: 0.316,
        y: 0.532
      },
      {
        x: 0.33,
        y: 0.494
      },
      {
        x: 0.348,
        y: 0.45
      },
      {
        x: 0.366,
        y: 0.406
      },
      {
        x: 0.386,
        y: 0.356
      },
      {
        x: 0.404,
        y: 0.312
      },
      {
        x: 0.408,
        y: 0.298
      },
      {
        x: 0.418,
        y: 0.264
      },
      {
        x: 0.424,
        y: 0.238
      },
      {
        x: 0.428,
        y: 0.212
      },
      {
        x: 0.432,
        y: 0.198
      },
      {
        x: 0.434,
        y: 0.184
      },
      {
        x: 0.436,
        y: 0.176
      },
      {
        x: 0.44,
        y: 0.158
      },
      {
        x: 0.442,
        y: 0.154
      },
      {
        x: 0.444,
        y: 0.15
      },
      {
        x: 0.446,
        y: 0.144
      },
      {
        x: 0.448,
        y: 0.134
      },
      {
        x: 0.448,
        y: 0.13
      },
      {
        x: 0.45,
        y: 0.128
      },
      {
        x: 0.45,
        y: 0.126
      },
      {
        x: 0.452,
        y: 0.122
      },
      {
        x: 0.452,
        y: 0.12
      },
      {
        x: 0.454,
        y: 0.118
      },
      {
        x: 0.456,
        y: 0.114
      },
      {
        x: 0.456,
        y: 0.112
      },
      {
        x: 0.456,
        y: 0.112
      },
      {
        x: 0.458,
        y: 0.112
      },
      {
        x: 0.46,
        y: 0.116
      },
      {
        x: 0.462,
        y: 0.128
      },
      {
        x: 0.464,
        y: 0.138
      },
      {
        x: 0.468,
        y: 0.152
      },
      {
        x: 0.474,
        y: 0.168
      },
      {
        x: 0.482,
        y: 0.19
      },
      {
        x: 0.49,
        y: 0.224
      },
      {
        x: 0.504,
        y: 0.258
      },
      {
        x: 0.514,
        y: 0.284
      },
      {
        x: 0.524,
        y: 0.312
      },
      {
        x: 0.54,
        y: 0.35
      },
      {
        x: 0.556,
        y: 0.394
      },
      {
        x: 0.566,
        y: 0.422
      },
      {
        x: 0.574,
        y: 0.45
      },
      {
        x: 0.592,
        y: 0.498
      },
      {
        x: 0.6,
        y: 0.514
      },
      {
        x: 0.61,
        y: 0.54
      },
      {
        x: 0.62,
        y: 0.564
      },
      {
        x: 0.628,
        y: 0.588
      },
      {
        x: 0.634,
        y: 0.604
      },
      {
        x: 0.64,
        y: 0.624
      },
      {
        x: 0.644,
        y: 0.634
      },
      {
        x: 0.648,
        y: 0.642
      },
      {
        x: 0.654,
        y: 0.658
      },
      {
        x: 0.656,
        y: 0.668
      },
      {
        x: 0.658,
        y: 0.676
      },
      {
        x: 0.662,
        y: 0.682
      },
      {
        x: 0.664,
        y: 0.688
      },
      {
        x: 0.666,
        y: 0.692
      },
      {
        x: 0.666,
        y: 0.696
      },
      {
        x: 0.668,
        y: 0.696
      },
      {
        x: 0.668,
        y: 0.694
      },
      {
        x: 0.664,
        y: 0.692
      },
      {
        x: 0.664,
        y: 0.69
      },
      {
        x: 0.66,
        y: 0.686
      },
      {
        x: 0.656,
        y: 0.684
      },
      {
        x: 0.648,
        y: 0.676
      },
      {
        x: 0.63,
        y: 0.666
      },
      {
        x: 0.614,
        y: 0.658
      },
      {
        x: 0.596,
        y: 0.648
      },
      {
        x: 0.57,
        y: 0.634
      },
      {
        x: 0.536,
        y: 0.614
      },
      {
        x: 0.518,
        y: 0.606
      },
      {
        x: 0.486,
        y: 0.592
      },
      {
        x: 0.47,
        y: 0.582
      },
      {
        x: 0.442,
        y: 0.568
      },
      {
        x: 0.43,
        y: 0.56
      },
      {
        x: 0.418,
        y: 0.55
      },
      {
        x: 0.404,
        y: 0.538
      },
      {
        x: 0.398,
        y: 0.532
      },
      {
        x: 0.392,
        y: 0.526
      },
      {
        x: 0.388,
        y: 0.52
      },
      {
        x: 0.384,
        y: 0.516
      },
      {
        x: 0.376,
        y: 0.512
      },
      {
        x: 0.37,
        y: 0.506
      },
      {
        x: 0.364,
        y: 0.502
      },
      {
        x: 0.354,
        y: 0.496
      },
      {
        x: 0.34,
        y: 0.488
      },
      {
        x: 0.33,
        y: 0.484
      },
      {
        x: 0.31,
        y: 0.474
      },
      {
        x: 0.3,
        y: 0.47
      },
      {
        x: 0.284,
        y: 0.464
      },
      {
        x: 0.264,
        y: 0.456
      },
      {
        x: 0.252,
        y: 0.452
      },
      {
        x: 0.244,
        y: 0.446
      },
      {
        x: 0.238,
        y: 0.446
      },
      {
        x: 0.232,
        y: 0.442
      },
      {
        x: 0.228,
        y: 0.44
      },
      {
        x: 0.226,
        y: 0.44
      },
      {
        x: 0.224,
        y: 0.438
      },
      {
        x: 0.222,
        y: 0.436
      },
      {
        x: 0.22,
        y: 0.436
      },
      {
        x: 0.214,
        y: 0.432
      },
      {
        x: 0.214,
        y: 0.432
      },
      {
        x: 0.212,
        y: 0.43
      },
      {
        x: 0.206,
        y: 0.426
      },
      {
        x: 0.2,
        y: 0.424
      },
      {
        x: 0.194,
        y: 0.422
      },
      {
        x: 0.186,
        y: 0.42
      },
      {
        x: 0.18,
        y: 0.418
      },
      {
        x: 0.178,
        y: 0.418
      },
      {
        x: 0.172,
        y: 0.416
      },
      {
        x: 0.168,
        y: 0.416
      },
      {
        x: 0.168,
        y: 0.416
      },
      {
        x: 0.164,
        y: 0.416
      },
      {
        x: 0.164,
        y: 0.416
      },
      {
        x: 0.16,
        y: 0.416
      },
      {
        x: 0.158,
        y: 0.414
      },
      {
        x: 0.158,
        y: 0.414
      },
      {
        x: 0.154,
        y: 0.412
      },
      {
        x: 0.15,
        y: 0.41
      },
      {
        x: 0.146,
        y: 0.408
      },
      {
        x: 0.144,
        y: 0.406
      },
      {
        x: 0.142,
        y: 0.404
      },
      {
        x: 0.14,
        y: 0.404
      },
      {
        x: 0.14,
        y: 0.404
      },
      {
        x: 0.14,
        y: 0.404
      },
      {
        x: 0.138,
        y: 0.402
      },
      {
        x: 0.138,
        y: 0.402
      },
      {
        x: 0.138,
        y: 0.402
      },
      {
        x: 0.136,
        y: 0.402
      },
      {
        x: 0.136,
        y: 0.402
      },
      {
        x: 0.136,
        y: 0.402
      },
      {
        x: 0.136,
        y: 0.4
      }
    ],
    circle: [
      [
        {
          x: 0.506,
          y: 0.182
        },
        {
          x: 0.506,
          y: 0.182
        },
        {
          x: 0.506,
          y: 0.182
        },
        {
          x: 0.512,
          y: 0.18
        },
        {
          x: 0.518,
          y: 0.18
        },
        {
          x: 0.522,
          y: 0.18
        },
        {
          x: 0.528,
          y: 0.182
        },
        {
          x: 0.532,
          y: 0.184
        },
        {
          x: 0.536,
          y: 0.184
        },
        {
          x: 0.544,
          y: 0.186
        },
        {
          x: 0.55,
          y: 0.186
        },
        {
          x: 0.552,
          y: 0.188
        },
        {
          x: 0.556,
          y: 0.19
        },
        {
          x: 0.56,
          y: 0.19
        },
        {
          x: 0.562,
          y: 0.192
        },
        {
          x: 0.562,
          y: 0.192
        },
        {
          x: 0.562,
          y: 0.194
        },
        {
          x: 0.564,
          y: 0.194
        },
        {
          x: 0.566,
          y: 0.194
        },
        {
          x: 0.566,
          y: 0.194
        },
        {
          x: 0.568,
          y: 0.196
        },
        {
          x: 0.57,
          y: 0.196
        },
        {
          x: 0.572,
          y: 0.2
        },
        {
          x: 0.574,
          y: 0.2
        },
        {
          x: 0.576,
          y: 0.202
        },
        {
          x: 0.578,
          y: 0.204
        },
        {
          x: 0.578,
          y: 0.206
        },
        {
          x: 0.58,
          y: 0.206
        },
        {
          x: 0.582,
          y: 0.21
        },
        {
          x: 0.584,
          y: 0.212
        },
        {
          x: 0.588,
          y: 0.216
        },
        {
          x: 0.592,
          y: 0.22
        },
        {
          x: 0.598,
          y: 0.224
        },
        {
          x: 0.602,
          y: 0.228
        },
        {
          x: 0.61,
          y: 0.234
        },
        {
          x: 0.618,
          y: 0.242
        },
        {
          x: 0.622,
          y: 0.244
        },
        {
          x: 0.63,
          y: 0.252
        },
        {
          x: 0.638,
          y: 0.26
        },
        {
          x: 0.642,
          y: 0.262
        },
        {
          x: 0.646,
          y: 0.268
        },
        {
          x: 0.65,
          y: 0.272
        },
        {
          x: 0.652,
          y: 0.274
        },
        {
          x: 0.654,
          y: 0.276
        },
        {
          x: 0.654,
          y: 0.278
        },
        {
          x: 0.658,
          y: 0.282
        },
        {
          x: 0.66,
          y: 0.282
        },
        {
          x: 0.662,
          y: 0.288
        },
        {
          x: 0.664,
          y: 0.29
        },
        {
          x: 0.666,
          y: 0.294
        },
        {
          x: 0.668,
          y: 0.296
        },
        {
          x: 0.67,
          y: 0.298
        },
        {
          x: 0.672,
          y: 0.304
        },
        {
          x: 0.674,
          y: 0.308
        },
        {
          x: 0.676,
          y: 0.312
        },
        {
          x: 0.678,
          y: 0.32
        },
        {
          x: 0.68,
          y: 0.322
        },
        {
          x: 0.682,
          y: 0.326
        },
        {
          x: 0.684,
          y: 0.332
        },
        {
          x: 0.688,
          y: 0.336
        },
        {
          x: 0.69,
          y: 0.338
        },
        {
          x: 0.692,
          y: 0.348
        },
        {
          x: 0.694,
          y: 0.352
        },
        {
          x: 0.696,
          y: 0.356
        },
        {
          x: 0.702,
          y: 0.366
        },
        {
          x: 0.702,
          y: 0.37
        },
        {
          x: 0.704,
          y: 0.374
        },
        {
          x: 0.706,
          y: 0.38
        },
        {
          x: 0.708,
          y: 0.386
        },
        {
          x: 0.714,
          y: 0.4
        },
        {
          x: 0.716,
          y: 0.406
        },
        {
          x: 0.716,
          y: 0.412
        },
        {
          x: 0.718,
          y: 0.418
        },
        {
          x: 0.72,
          y: 0.424
        },
        {
          x: 0.722,
          y: 0.438
        },
        {
          x: 0.724,
          y: 0.444
        },
        {
          x: 0.724,
          y: 0.45
        },
        {
          x: 0.728,
          y: 0.454
        },
        {
          x: 0.728,
          y: 0.458
        },
        {
          x: 0.728,
          y: 0.464
        },
        {
          x: 0.73,
          y: 0.47
        },
        {
          x: 0.73,
          y: 0.476
        },
        {
          x: 0.732,
          y: 0.488
        },
        {
          x: 0.732,
          y: 0.496
        },
        {
          x: 0.732,
          y: 0.502
        },
        {
          x: 0.734,
          y: 0.508
        },
        {
          x: 0.734,
          y: 0.516
        },
        {
          x: 0.734,
          y: 0.522
        },
        {
          x: 0.734,
          y: 0.53
        },
        {
          x: 0.734,
          y: 0.536
        },
        {
          x: 0.732,
          y: 0.544
        },
        {
          x: 0.732,
          y: 0.552
        },
        {
          x: 0.732,
          y: 0.558
        },
        {
          x: 0.73,
          y: 0.564
        },
        {
          x: 0.728,
          y: 0.572
        },
        {
          x: 0.726,
          y: 0.578
        },
        {
          x: 0.726,
          y: 0.582
        },
        {
          x: 0.724,
          y: 0.588
        },
        {
          x: 0.72,
          y: 0.592
        },
        {
          x: 0.72,
          y: 0.596
        },
        {
          x: 0.718,
          y: 0.6
        },
        {
          x: 0.716,
          y: 0.602
        },
        {
          x: 0.712,
          y: 0.606
        },
        {
          x: 0.71,
          y: 0.61
        },
        {
          x: 0.704,
          y: 0.614
        },
        {
          x: 0.702,
          y: 0.618
        },
        {
          x: 0.698,
          y: 0.62
        },
        {
          x: 0.694,
          y: 0.626
        },
        {
          x: 0.69,
          y: 0.628
        },
        {
          x: 0.686,
          y: 0.632
        },
        {
          x: 0.68,
          y: 0.636
        },
        {
          x: 0.676,
          y: 0.64
        },
        {
          x: 0.674,
          y: 0.642
        },
        {
          x: 0.668,
          y: 0.648
        },
        {
          x: 0.664,
          y: 0.652
        },
        {
          x: 0.66,
          y: 0.654
        },
        {
          x: 0.656,
          y: 0.658
        },
        {
          x: 0.652,
          y: 0.66
        },
        {
          x: 0.646,
          y: 0.664
        },
        {
          x: 0.644,
          y: 0.666
        },
        {
          x: 0.638,
          y: 0.67
        },
        {
          x: 0.634,
          y: 0.674
        },
        {
          x: 0.628,
          y: 0.676
        },
        {
          x: 0.624,
          y: 0.68
        },
        {
          x: 0.618,
          y: 0.68
        },
        {
          x: 0.612,
          y: 0.684
        },
        {
          x: 0.606,
          y: 0.686
        },
        {
          x: 0.6,
          y: 0.69
        },
        {
          x: 0.594,
          y: 0.692
        },
        {
          x: 0.586,
          y: 0.696
        },
        {
          x: 0.58,
          y: 0.698
        },
        {
          x: 0.572,
          y: 0.7
        },
        {
          x: 0.564,
          y: 0.704
        },
        {
          x: 0.558,
          y: 0.708
        },
        {
          x: 0.552,
          y: 0.71
        },
        {
          x: 0.542,
          y: 0.714
        },
        {
          x: 0.534,
          y: 0.716
        },
        {
          x: 0.528,
          y: 0.718
        },
        {
          x: 0.522,
          y: 0.72
        },
        {
          x: 0.516,
          y: 0.722
        },
        {
          x: 0.508,
          y: 0.722
        },
        {
          x: 0.502,
          y: 0.724
        },
        {
          x: 0.496,
          y: 0.724
        },
        {
          x: 0.488,
          y: 0.724
        },
        {
          x: 0.482,
          y: 0.724
        },
        {
          x: 0.474,
          y: 0.724
        },
        {
          x: 0.456,
          y: 0.722
        },
        {
          x: 0.45,
          y: 0.722
        },
        {
          x: 0.444,
          y: 0.722
        },
        {
          x: 0.44,
          y: 0.722
        },
        {
          x: 0.434,
          y: 0.72
        },
        {
          x: 0.43,
          y: 0.72
        },
        {
          x: 0.416,
          y: 0.716
        },
        {
          x: 0.41,
          y: 0.714
        },
        {
          x: 0.404,
          y: 0.714
        },
        {
          x: 0.398,
          y: 0.712
        },
        {
          x: 0.392,
          y: 0.71
        },
        {
          x: 0.374,
          y: 0.702
        },
        {
          x: 0.368,
          y: 0.702
        },
        {
          x: 0.364,
          y: 0.7
        },
        {
          x: 0.36,
          y: 0.698
        },
        {
          x: 0.356,
          y: 0.696
        },
        {
          x: 0.35,
          y: 0.696
        },
        {
          x: 0.346,
          y: 0.694
        },
        {
          x: 0.344,
          y: 0.694
        },
        {
          x: 0.342,
          y: 0.692
        },
        {
          x: 0.342,
          y: 0.692
        },
        {
          x: 0.338,
          y: 0.69
        },
        {
          x: 0.336,
          y: 0.69
        },
        {
          x: 0.328,
          y: 0.682
        },
        {
          x: 0.324,
          y: 0.68
        },
        {
          x: 0.322,
          y: 0.676
        },
        {
          x: 0.316,
          y: 0.672
        },
        {
          x: 0.31,
          y: 0.67
        },
        {
          x: 0.306,
          y: 0.664
        },
        {
          x: 0.3,
          y: 0.66
        },
        {
          x: 0.296,
          y: 0.656
        },
        {
          x: 0.29,
          y: 0.652
        },
        {
          x: 0.284,
          y: 0.648
        },
        {
          x: 0.282,
          y: 0.644
        },
        {
          x: 0.278,
          y: 0.64
        },
        {
          x: 0.274,
          y: 0.636
        },
        {
          x: 0.27,
          y: 0.63
        },
        {
          x: 0.266,
          y: 0.628
        },
        {
          x: 0.262,
          y: 0.624
        },
        {
          x: 0.256,
          y: 0.618
        },
        {
          x: 0.248,
          y: 0.606
        },
        {
          x: 0.246,
          y: 0.602
        },
        {
          x: 0.244,
          y: 0.598
        },
        {
          x: 0.242,
          y: 0.592
        },
        {
          x: 0.242,
          y: 0.59
        },
        {
          x: 0.24,
          y: 0.586
        },
        {
          x: 0.24,
          y: 0.584
        },
        {
          x: 0.238,
          y: 0.578
        },
        {
          x: 0.236,
          y: 0.574
        },
        {
          x: 0.234,
          y: 0.568
        },
        {
          x: 0.232,
          y: 0.564
        },
        {
          x: 0.232,
          y: 0.56
        },
        {
          x: 0.23,
          y: 0.556
        },
        {
          x: 0.228,
          y: 0.55
        },
        {
          x: 0.226,
          y: 0.544
        },
        {
          x: 0.226,
          y: 0.54
        },
        {
          x: 0.226,
          y: 0.534
        },
        {
          x: 0.224,
          y: 0.528
        },
        {
          x: 0.222,
          y: 0.518
        },
        {
          x: 0.22,
          y: 0.512
        },
        {
          x: 0.218,
          y: 0.506
        },
        {
          x: 0.218,
          y: 0.5
        },
        {
          x: 0.218,
          y: 0.492
        },
        {
          x: 0.218,
          y: 0.488
        },
        {
          x: 0.218,
          y: 0.482
        },
        {
          x: 0.218,
          y: 0.476
        },
        {
          x: 0.218,
          y: 0.468
        },
        {
          x: 0.218,
          y: 0.462
        },
        {
          x: 0.218,
          y: 0.452
        },
        {
          x: 0.22,
          y: 0.446
        },
        {
          x: 0.222,
          y: 0.44
        },
        {
          x: 0.224,
          y: 0.432
        },
        {
          x: 0.226,
          y: 0.426
        },
        {
          x: 0.226,
          y: 0.418
        },
        {
          x: 0.23,
          y: 0.408
        },
        {
          x: 0.234,
          y: 0.398
        },
        {
          x: 0.234,
          y: 0.39
        },
        {
          x: 0.236,
          y: 0.384
        },
        {
          x: 0.24,
          y: 0.374
        },
        {
          x: 0.242,
          y: 0.368
        },
        {
          x: 0.246,
          y: 0.358
        },
        {
          x: 0.248,
          y: 0.354
        },
        {
          x: 0.252,
          y: 0.348
        },
        {
          x: 0.258,
          y: 0.34
        },
        {
          x: 0.26,
          y: 0.334
        },
        {
          x: 0.264,
          y: 0.328
        },
        {
          x: 0.268,
          y: 0.322
        },
        {
          x: 0.272,
          y: 0.316
        },
        {
          x: 0.276,
          y: 0.312
        },
        {
          x: 0.282,
          y: 0.304
        },
        {
          x: 0.288,
          y: 0.3
        },
        {
          x: 0.294,
          y: 0.292
        },
        {
          x: 0.302,
          y: 0.284
        },
        {
          x: 0.308,
          y: 0.276
        },
        {
          x: 0.312,
          y: 0.272
        },
        {
          x: 0.318,
          y: 0.266
        },
        {
          x: 0.322,
          y: 0.262
        },
        {
          x: 0.326,
          y: 0.258
        },
        {
          x: 0.33,
          y: 0.254
        },
        {
          x: 0.334,
          y: 0.248
        },
        {
          x: 0.34,
          y: 0.242
        },
        {
          x: 0.344,
          y: 0.236
        },
        {
          x: 0.35,
          y: 0.232
        },
        {
          x: 0.356,
          y: 0.228
        },
        {
          x: 0.364,
          y: 0.224
        },
        {
          x: 0.37,
          y: 0.218
        },
        {
          x: 0.378,
          y: 0.216
        },
        {
          x: 0.384,
          y: 0.21
        },
        {
          x: 0.39,
          y: 0.206
        },
        {
          x: 0.398,
          y: 0.202
        },
        {
          x: 0.406,
          y: 0.198
        },
        {
          x: 0.412,
          y: 0.194
        },
        {
          x: 0.418,
          y: 0.192
        },
        {
          x: 0.426,
          y: 0.188
        },
        {
          x: 0.43,
          y: 0.186
        },
        {
          x: 0.432,
          y: 0.184
        },
        {
          x: 0.436,
          y: 0.182
        },
        {
          x: 0.44,
          y: 0.182
        },
        {
          x: 0.442,
          y: 0.182
        },
        {
          x: 0.446,
          y: 0.18
        },
        {
          x: 0.452,
          y: 0.18
        },
        {
          x: 0.458,
          y: 0.178
        },
        {
          x: 0.468,
          y: 0.178
        },
        {
          x: 0.476,
          y: 0.176
        },
        {
          x: 0.486,
          y: 0.174
        },
        {
          x: 0.492,
          y: 0.174
        },
        {
          x: 0.498,
          y: 0.174
        },
        {
          x: 0.5,
          y: 0.172
        },
        {
          x: 0.502,
          y: 0.172
        },
        {
          x: 0.502,
          y: 0.17
        },
        {
          x: 0.504,
          y: 0.17
        },
        {
          x: 0.504,
          y: 0.17
        },
        {
          x: 0.506,
          y: 0.17
        },
        {
          x: 0.508,
          y: 0.17
        },
        {
          x: 0.512,
          y: 0.168
        },
        {
          x: 0.514,
          y: 0.168
        },
        {
          x: 0.514,
          y: 0.166
        }
      ]
    ]
  };
  class $a {
    constructor(e, t) {
      this.scene = e, this.gameManager = t, this.logger = new N("RuneManager", true), this.runes = [], this.isActive = false;
    }
    createRune(e, t, i = {}) {
      let s;
      if (i.strokeData) s = i.strokeData;
      else if (s = Fa[e], !s) return this.logger.warn(`Unknown rune type: ${e}`), null;
      const o = i.scale || 0.3, n = i.color || new J(11202303), r = i.rotation || {
        x: 0,
        y: 0,
        z: 0
      }, a = new _o(this.scene, {
        scale: o,
        color: n,
        position: t,
        rotation: r,
        isStatic: true,
        gameManager: this.gameManager
      });
      return a.setStrokeData(s), this.runes.push({
        type: e || "custom",
        mesh: a,
        position: t
      }), this.isActive = true, this.logger.log(`Created ${e || "custom"} rune at`, t), a;
    }
    spawnRunesAroundPosition(e, t = 2, i = 3) {
      const s = [
        "lightning",
        "star",
        "circle"
      ], o = Math.PI * 2 / i;
      for (let n = 0; n < i; n++) {
        const r = o * n + Math.random() * 0.3 - 0.15, a = t + Math.random() * 0.5, l = {
          x: e.x + Math.cos(r) * a,
          y: e.y + (Math.random() - 0.5) * 0.5,
          z: e.z + Math.sin(r) * a
        }, h = {
          x: 0,
          y: Math.random() * Math.PI * 2,
          z: 0
        }, c = s[n % s.length];
        this.createRune(c, l, {
          scale: 0.25 + Math.random() * 0.15,
          rotation: h
        });
      }
      this.isActive = true, this.logger.log(`Spawned ${i} runes around`, e);
    }
    clearRunes() {
      for (const e of this.runes) e.mesh.dispose();
      this.runes = [], this.isActive = false, this.logger.log("Cleared all runes");
    }
    update(e) {
      if (!this.isActive) return;
      const t = this.getFractalIntensity();
      for (const i of this.runes) i.mesh && i.mesh.material && i.mesh.material.uniforms.uFractalIntensity && (i.mesh.material.uniforms.uFractalIntensity.value = t), i.mesh.update(e);
    }
    getFractalIntensity() {
      if (window.vfxManager && window.vfxManager.effects) {
        const e = window.vfxManager.effects.splatFractal;
        if (e && e.currentIntensity > 0) return e.currentIntensity;
      }
      return 0;
    }
    dispose() {
      this.clearRunes();
    }
  }
  function Na(g) {
    if (!g) {
      console.warn("[PlatformDetection] gameManager not provided");
      return;
    }
    const e = "ontouchstart" in window || navigator.maxTouchPoints > 0, t = /iPad|iPhone|iPod/.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1, i = navigator.userAgent.toLowerCase(), s = i.includes("safari") && !i.includes("chrome") && !i.includes("chromium") && !i.includes("edge") || navigator.vendor && navigator.vendor.indexOf("Apple") > -1 && !i.includes("chrome") && !i.includes("chromium"), o = !t && (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
    return g.setState({
      isMobile: e,
      isIOS: t,
      isSafari: s,
      isFullscreenSupported: o
    }), {
      isMobile: e,
      isIOS: t,
      isSafari: s,
      isFullscreenSupported: o
    };
  }
  const _s = {
    "phone-ring": {
      id: "phone-ring",
      src: [
        "/audio/sfx/phone-ringing.mp3"
      ],
      volume: 1,
      loop: true,
      spatial: true,
      position: {
        x: L.phonebooth.position.x,
        y: 0.9,
        z: L.phonebooth.position.z
      },
      pannerAttr: {
        panningModel: "HRTF",
        refDistance: 10,
        rolloffFactor: 2,
        distanceModel: "inverse",
        maxDistance: 100
      },
      preload: false,
      criteria: {
        currentState: {
          $gte: p.PHONE_BOOTH_RINGING,
          $lt: p.ANSWERED_PHONE
        }
      },
      reactiveLight: {
        enabled: true,
        type: "PointLight",
        color: 16711680,
        position: {
          x: 0,
          y: 1,
          z: 0
        },
        baseIntensity: 0,
        reactivityMultiplier: 50,
        distance: 20,
        decay: 2,
        smoothing: 0.6,
        frequencyRange: "full",
        maxIntensity: 250,
        noiseFloor: 0.125
      }
    },
    "phone-ring-2": {
      id: "phone-ring-2",
      src: [
        "/audio/sfx/bakelitephonering.mp3"
      ],
      volume: 1,
      loop: true,
      spatial: true,
      position: {
        x: L.candlestickPhone.position.x,
        y: 0.9,
        z: L.candlestickPhone.position.z
      },
      pannerAttr: {
        panningModel: "HRTF",
        refDistance: 10,
        rolloffFactor: 2,
        distanceModel: "inverse",
        maxDistance: 100
      },
      preload: false,
      criteria: {
        currentState: p.OFFICE_INTERIOR
      },
      delay: 2.75,
      reactiveLight: {
        enabled: true,
        type: "PointLight",
        color: 5294200,
        position: {
          x: 0,
          y: 1.7,
          z: 0
        },
        baseIntensity: 0,
        reactivityMultiplier: 50,
        distance: 20,
        decay: 2,
        smoothing: 0.6,
        frequencyRange: "full",
        maxIntensity: 250,
        noiseFloor: 0.125
      }
    },
    "footsteps-gravel": {
      id: "footsteps-gravel",
      src: [
        "/audio/sfx/pavement-steps.mp3"
      ],
      volume: 0.7,
      loop: true,
      spatial: false,
      preload: false
    },
    "city-ambiance": {
      id: "city-ambiance",
      src: [
        "/audio/sfx/city-ambiance.mp3"
      ],
      volume: 0.3,
      loop: true,
      spatial: false,
      preload: true,
      criteria: {
        currentState: {
          $gte: p.START_SCREEN
        }
      }
    },
    "phone-pickup": {
      id: "phone-pickup",
      src: [
        "/audio/sfx/phone-pickup.mp3"
      ],
      volume: 0.8,
      loop: false,
      spatial: true,
      position: {
        x: L.phonebooth.position.x,
        y: L.phonebooth.position.y,
        z: L.phonebooth.position.z
      },
      pannerAttr: {
        panningModel: "HRTF",
        refDistance: 2,
        rolloffFactor: 1.5,
        distanceModel: "inverse",
        maxDistance: 15
      },
      preload: false,
      criteria: {
        currentState: p.ANSWERED_PHONE
      },
      playOnce: true
    },
    "record-scratch": {
      id: "record-scratch",
      src: [
        "/audio/sfx/record-scratch.mp3"
      ],
      volume: 0.1,
      loop: false,
      spatial: false,
      preload: false,
      criteria: {
        currentState: p.EDISON
      },
      playOnce: true,
      delay: 0
    },
    "engine-and-gun": {
      id: "engine-and-gun",
      src: [
        "/audio/sfx/engine-guns-glass.mp3"
      ],
      volume: 0.9,
      loop: false,
      spatial: false,
      preload: false,
      criteria: {
        currentState: {
          $gte: p.DRIVE_BY_PREAMBLE,
          $lte: p.DRIVE_BY
        }
      },
      playOnce: true,
      rate: 1.15
    },
    "typewriter-keystroke-00": {
      id: "typewriter-keystroke-00",
      src: [
        "/audio/sfx/typewriter-keystroke-00.mp3"
      ],
      volume: 0.6,
      loop: false,
      spatial: false,
      preload: true
    },
    "typewriter-keystroke-01": {
      id: "typewriter-keystroke-01",
      src: [
        "/audio/sfx/typewriter-keystroke-01.mp3"
      ],
      volume: 0.4,
      loop: false,
      spatial: false,
      preload: true
    },
    "typewriter-keystroke-02": {
      id: "typewriter-keystroke-02",
      src: [
        "/audio/sfx/typewriter-keystroke-02.mp3"
      ],
      volume: 0.4,
      loop: false,
      spatial: false,
      preload: true
    },
    "typewriter-keystroke-03": {
      id: "typewriter-keystroke-03",
      src: [
        "/audio/sfx/typewriter-keystroke-03.mp3"
      ],
      volume: 0.4,
      loop: false,
      spatial: false,
      preload: true
    },
    "typewriter-return": {
      id: "typewriter-return",
      src: [
        "/audio/sfx/typewriter-return.mp3"
      ],
      volume: 0.3,
      loop: false,
      spatial: false,
      preload: true
    },
    "punch-sound": {
      id: "punch-sound",
      src: [
        "/audio/sfx/punch.mp3"
      ],
      volume: 0.7,
      loop: false,
      spatial: false,
      preload: false,
      criteria: {
        currentState: p.PUNCH_OUT
      },
      playOnce: true,
      delay: 0.35
    },
    "body-fall": {
      id: "body-fall",
      src: [
        "/audio/sfx/body-fall.mp3"
      ],
      volume: 0.7,
      loop: false,
      spatial: false,
      preload: false,
      criteria: {
        currentState: {
          $eq: p.PUNCH_OUT
        }
      },
      playOnce: true,
      delay: 1.5
    },
    "view-master-warp": {
      id: "view-master-warp",
      src: [
        "/audio/sfx/view-master-warp.mp3"
      ],
      volume: 0.5,
      loop: false,
      spatial: false,
      preload: false,
      criteria: {
        currentState: p.VIEWMASTER
      },
      playOnce: true,
      delay: 2
    },
    radio: {
      id: "radio",
      src: [
        "/audio/dialog/newsman-czar-strikes-again.mp3"
      ],
      volume: 1,
      delay: 2,
      loop: true,
      loopDelay: 40,
      spatial: true,
      position: L.radio.position,
      pannerAttr: {
        panningModel: "HRTF",
        refDistance: 8,
        rolloffFactor: 1,
        distanceModel: "linear",
        maxDistance: 14
      },
      preload: false,
      criteria: {
        currentState: {
          $gte: p.NEAR_RADIO
        }
      },
      reactiveLight: {
        enabled: true,
        type: "PointLight",
        color: 4095,
        position: {
          x: 0,
          y: 1.2,
          z: 0
        },
        baseIntensity: 1,
        reactivityMultiplier: 20,
        distance: 15,
        decay: 1,
        smoothing: 0.7,
        frequencyRange: "mid",
        maxIntensity: 100,
        noiseFloor: 0.1
      }
    }
  }, H = new N("Main", true);
  window.addEventListener("unhandledrejection", (g) => {
    H.error("\u274C Unhandled promise rejection:", g.reason);
  });
  window.addEventListener("error", (g) => {
    H.error("\u274C Global error:", g.error || g.message);
  });
  H.log("\u{1F680} Main.js starting...");
  const ve = new va();
  window.loadingScreen = ve;
  H.log("\u2705 Loading screen created");
  ve.registerTask("initialization", 1);
  const be = new Xt(), ee = new Zt(60, window.innerWidth / window.innerHeight, 0.01, 100);
  ee.position.set(0, 5, 0);
  be.add(ee);
  const W = new Fo({
    alpha: true,
    antialias: false
  });
  W.setSize(window.innerWidth, window.innerHeight);
  W.shadowMap.enabled = true;
  W.shadowMap.type = $o;
  W.toneMapping = No;
  W.toneMappingExposure = 1;
  W.outputColorSpace = We;
  W.domElement.style.opacity = "0";
  document.body.appendChild(W.domElement);
  const ja = 0.01, Fs = 6, Ba = 2 * Math.atan(0.5 * ja / Fs);
  H.log("Creating SparkRenderer...");
  const Re = new jo({
    renderer: W,
    apertureAngle: Ba,
    focalDistance: Fs,
    maxStdDev: Math.sqrt(5),
    minAlpha: 0.8 * (1 / 255)
  });
  Re.renderOrder = 9998;
  be.add(Re);
  H.log("\u2705 SparkRenderer created");
  const E = new ln();
  window.gameManager = E;
  const Nt = Na(E);
  H.log(`\u2705 Platform detection complete - Mobile: ${Nt == null ? void 0 : Nt.isMobile}, iOS: ${Nt == null ? void 0 : Nt.isIOS}, Fullscreen supported: ${Nt == null ? void 0 : Nt.isFullscreenSupported}`);
  const ge = new Zo({
    gameManager: E
  }), _t = E.getURLParam("performanceProfile");
  let it = null, xt = null;
  if (_t && [
    "mobile",
    "laptop",
    "desktop",
    "max"
  ].includes(_t)) it = _t, xt = "URL parameter", ge.settings.performanceProfile = _t, ge.saveSettings();
  else {
    const e = (_a2 = ge.loadSettings()) == null ? void 0 : _a2.performanceProfile;
    e && [
      "mobile",
      "laptop",
      "desktop",
      "max"
    ].includes(e) ? (it = e, xt = "saved settings") : (Nt == null ? void 0 : Nt.isMobile) ? (it = "mobile", xt = "platform detection") : (it = "laptop", xt = "default");
  }
  ge.setPerformanceProfile(it);
  H.log(`\u2705 Performance profile set to ${it} (${xt})`);
  const ie = new Zn(be, {
    loadingScreen: ve,
    renderer: W,
    sparkRenderer: Re,
    gameManager: E
  });
  window.sceneManager = ie;
  window.getEnvMapWorldCenters = Bo;
  window.captureEnvMapAtScene = Vo;
  ve.setGameManager(E);
  H.log("Creating PhysicsManager...");
  const Ye = new Go();
  H.log("\u2705 PhysicsManager created");
  H.log("Creating LightManager...");
  const at = new Qo(be, ie, E);
  H.log("\u2705 LightManager created");
  const qe = new Uo(be, ee, W, ve);
  try {
    await qe.initialize(ie), H.log("\u2705 VFX Manager initialized");
  } catch (g) {
    throw H.error("\u274C Failed to initialize VFX Manager:", g), g;
  }
  window.vfxManager = qe;
  H.log("Creating RuneManager...");
  const Ai = new $a(be, E);
  H.log("\u2705 RuneManager created");
  window.runeManager = Ai;
  H.log("Creating DrawingRecognitionManager...");
  const rt = new La(E);
  H.log("Creating DrawingManager...");
  const Yt = new _a(be, rt, E);
  H.log("\u2705 DrawingManager created");
  window.drawingRecognitionManager = rt;
  window.drawingManager = Yt;
  window.captureDrawing = (g, e, t) => rt.captureDrawing(g, e, t);
  window.captureStrokeData = () => rt.captureStrokeData();
  window.addEventListener("resize", () => {
    ee.aspect = window.innerWidth / window.innerHeight, ee.updateProjectionMatrix(), W.setSize(window.innerWidth, window.innerHeight), qe.setSize(window.innerWidth, window.innerHeight), V && V.textCamera && (V.textCamera.aspect = window.innerWidth / window.innerHeight, V.textCamera.updateProjectionMatrix()), Se && Se.textCamera && (Se.textCamera.aspect = window.innerWidth / window.innerHeight, Se.textCamera.updateProjectionMatrix());
  });
  const Va = {
    x: 0,
    y: 0.9,
    z: 0
  }, $s = {
    x: 0,
    y: 180,
    z: 0
  }, He = E.getDebugSpawnPosition() || Va, Di = E.getDebugSpawnRotation() || $s;
  H.log(`Spawn rotation: ${JSON.stringify(Di)}`);
  const Ns = Ye.createCharacter(He, Di);
  ee.position.set(He.x, He.y + 0.8, He.z);
  const ce = new Yo({
    masterVolume: 0.5,
    lightManager: at,
    loadingScreen: ve
  }), xe = new Wo(W.domElement, E);
  xe.disable();
  Yt.setInputManager(xe);
  const ne = new Ho(Ns, ee, W, xe, ce, Re, null, Di);
  ce._data = _s;
  ce.registerSoundsFromData(_s);
  window.characterController = ne;
  window.inputManager = xe;
  window.camera = ee;
  const fe = new oa(ee, ne, E, {
    loadingScreen: ve,
    physicsManager: Ye,
    sceneManager: ie
  });
  fe.loadAnimationsFromData(qt);
  window.cameraAnimationManager = fe;
  const Qt = new ya({
    gameManager: E,
    animationManager: fe,
    sceneManager: ie,
    vfxManager: qe
  });
  Qt.initialize();
  window.viewmasterController = Qt;
  const ct = new un(E), ht = new qo({
    defaultVolume: 0.6,
    loadingScreen: ve
  }), Kt = new Jo({
    gameManager: E,
    sfxManager: ce,
    inputManager: xe
  }), pe = new Ko({
    audioVolume: 1,
    useSplats: false,
    sfxManager: ce,
    gameManager: E,
    dialogChoiceUI: Kt,
    loadingScreen: ve
  });
  ve.setManagers({
    renderer: W,
    musicManager: ht,
    sfxManager: ce,
    dialogManager: pe,
    cameraAnimationManager: fe,
    videoManager: null
  });
  let V = null, Se = null;
  const js = (g, e) => {
    if (g.currentState === p.START_SCREEN && !V) {
      H.log("Creating StartScreen");
      const t = new S(He.x, He.y + ne.cameraHeight, He.z);
      V = new Jn(ee, be, {
        targetPosition: t,
        targetRotation: {
          yaw: G.degToRad($s.y),
          pitch: 0
        },
        transitionDuration: 8,
        uiManager: ct,
        sceneManager: ie,
        sfxManager: ce,
        dialogManager: pe,
        inputManager: xe,
        glbAnimationStartProgress: 0.55
      }), E.off("state:changed", js);
    }
  };
  E.on("state:changed", js);
  const Bs = (g, e) => {
    g.currentState === p.LIGHTS_OUT && !Se && (H.log("Creating TimePassesSequence"), Se = new ea(ee, {
      uiManager: ct,
      gameManager: E
    }), Se.start(), E.off("state:changed", Bs));
  };
  E.on("state:changed", Bs);
  ge.musicManager = ht;
  ge.sfxManager = ce;
  ge.sparkRenderer = Re;
  ge.characterController = ne;
  ge.startScreen = V;
  ge.registerWithUIManager(ct);
  ie.physicsManager = Ye;
  pe.preloadDialogs(Ut);
  Kt.dialogManager = pe;
  V && (V.dialogManager = pe);
  ce.registerDialogManager(pe);
  if (ce && pe) {
    const g = {
      setVolume: (e) => {
        pe.setVolume(e);
      }
    };
    ce.registerSound("dialog", g, 2);
  }
  try {
    H.log("Starting gameManager initialization..."), await E.initialize({
      dialogManager: pe,
      musicManager: ht,
      sfxManager: ce,
      uiManager: ct,
      characterController: ne,
      cameraAnimationManager: fe,
      sceneManager: ie,
      lightManager: at,
      physicsManager: Ye,
      inputManager: xe,
      scene: be,
      camera: ee,
      renderer: W
    }), H.log("\u2705 GameManager initialized"), ve.completeTask("initialization");
  } catch (g) {
    throw H.error("\u274C Failed to initialize GameManager:", g), g;
  }
  E.videoManager && pe && (pe.videoManager = E.videoManager);
  E.videoManager && (E.videoManager.loadingScreen = ve, ve.setManagers({
    renderer: W,
    musicManager: ht,
    sfxManager: ce,
    dialogManager: pe,
    cameraAnimationManager: fe,
    videoManager: E.videoManager
  }));
  ne.setGameManager(E);
  ne.setSceneManager(ie);
  ne.setPhysicsManager(Ye);
  fe.initialize();
  ht.setGameManager(E);
  ce.setGameManager(E);
  qe.setGameManager(E);
  ge.applyCaptions();
  E.on("state:changed", (g, e) => {
    at.updateLightsForState(g);
  });
  ct.initializeComponents({
    dialogManager: pe,
    cameraAnimationManager: fe,
    dialogChoiceUI: Kt,
    inputManager: xe,
    characterController: ne,
    sparkRenderer: Re
  });
  const De = new pa(be, ee, W, ie, ne), me = new gn(Ye, E, Wt, be, ie, De);
  window.colliderManager = me;
  me.setCamera(ee);
  me.setSparkRenderer(Re);
  const xi = Ns.translation();
  Re.position.set(xi.x, xi.y, xi.z);
  ie.setColliderManager(me);
  const Li = new pn(E, ie);
  window.zoneManager = Li;
  Li.setSparkRenderer(Re);
  E && (E.zoneManager = Li, E.colliderManager = me);
  H.log("\u2705 ZoneManager initialized");
  ie.gizmoManager = De;
  E.videoManager && (E.videoManager.gizmoManager = De);
  De.registerSceneObjects(ie);
  De.registerLights(at, Vt);
  window.gizmoManager = De;
  window.gameManager = E;
  De.applyGlobalBlocksFromDefinitions({
    sceneDefs: L,
    videoDefs: K,
    colliderDefs: Wt,
    lightDefs: Vt
  });
  let hs = false;
  const Qe = () => {
    var _a3;
    hs ? jt() : (jt(), typeof Y.Howler < "u" && typeof Y.Howler.unlock == "function" && Y.Howler.unlock(), hs = true, H.log("\u2705 Audio contexts unlocked via user interaction")), ((_a3 = E == null ? void 0 : E.videoManager) == null ? void 0 : _a3.retryQueuedVideoPlays) && E.videoManager.retryQueuedVideoPlays();
  };
  window.unlockAudioOnInteraction = Qe;
  window.addEventListener("click", Qe, {
    once: false,
    capture: true
  });
  window.addEventListener("touchstart", Qe, {
    once: false,
    capture: true
  });
  window.addEventListener("touchmove", Qe, {
    once: false,
    capture: true
  });
  window.addEventListener("touchend", Qe, {
    once: false,
    capture: true
  });
  window.addEventListener("keydown", Qe, {
    once: false,
    capture: true
  });
  window.addEventListener("mousedown", Qe, {
    once: false,
    capture: true
  });
  De.setIntegration((_b = ct == null ? void 0 : ct.components) == null ? void 0 : _b.idleHelper, xe);
  typeof xe.setGizmoProbe == "function" && xe.setGizmoProbe(() => De.isPointerOverGizmo());
  let ds;
  W.setAnimationLoop(function(e) {
    const t = e * 1e-3, i = Math.min(0.1, t - (ds ?? t));
    ds = t, V && V.isActive && (V.update(i), V.checkIntroStart(ce, E)), E.getState();
    const s = V && V.isActive && !V.isLoadingAnimation, o = V && V.isFollowingUnifiedPath, n = s || o || fe.isPlaying && !E.isControlEnabled();
    if (n && me.camera && me.cameraProbeBody && me.cameraProbeBody.setTranslation({
      x: me.camera.position.x,
      y: me.camera.position.y,
      z: me.camera.position.z
    }, true), ge.isOpen || Ye.step(i), n ? me.update(ne.character || null, true) : ne.character && me.update(ne.character, false), !ge.isOpen && (!V || !V.isActive)) {
      xe.update(i);
      const a = fe.isPlaying && fe.blendWithPlayer;
      a && E.isControlEnabled() && ne.update(i), fe.update(i), E.isControlEnabled() && !a && !fe.playing && ne.update(i);
    }
    if (!ge.isOpen && (!V || !V.isActive)) {
      Y.Howler.pos(ee.position.x, ee.position.y, ee.position.z);
      const a = new S();
      ee.getWorldDirection(a), Y.Howler.orientation(a.x, a.y, a.z, ee.up.x, ee.up.y, ee.up.z);
    }
    E.videoManager && E.videoManager.update(i);
    const r = V ? V.getTitleSequence() : null;
    if (r && !r.isComplete() && (r.update(i), !E.isControlEnabled() && r.hasOutroStarted() && E.setState({
      controlEnabled: true
    })), Se && Se.update(i), ht.update(i), ce.update(i), ne && E) {
      const a = ne.getViewmasterInsanityIntensity(), l = E.getState(), h = l.viewmasterInsanityIntensity || 0;
      if (h < nt && a >= nt) {
        const d = (l.viewmasterOverheatCount || 0) + 1;
        E.setState({
          viewmasterInsanityIntensity: a,
          viewmasterOverheatCount: d,
          viewmasterOverheatDialogIndex: d % 2
        });
      } else a !== h && E.setState({
        viewmasterInsanityIntensity: a
      });
    }
    if (pe.update(i), Kt.update(i), ie.update(i), ie.updateAnimationsForState(E.state), ie.updateContactShadows(i), E.update(i), at.updateReactiveLights(i), at.updateLensFlares(i), qe.update(i), rt && rt.update(i), Yt && Yt.update(i), Qt && Qt.update(i), Ai && Ai.update(i), qe.render(be, ee), V && V.getTextRenderInfo) {
      const a = V.getTextRenderInfo();
      a && a.scene && a.camera && (W.autoClear = false, W.render(a.scene, a.camera), W.autoClear = true);
    }
    if (Se) {
      const a = Se.getTextRenderInfo();
      a && a.scene && a.camera && (W.autoClear = false, W.render(a.scene, a.camera), W.autoClear = true);
    }
  });
});
export {
  __tla,
  Ut as d
};
