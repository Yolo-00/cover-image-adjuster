import { defineComponent as I, ref as u, watch as D, onUnmounted as T, createElementBlock as $, openBlock as j, normalizeStyle as L, createElementVNode as B, withModifiers as _ } from "vue";
const S = (a, v) => (a.install = (t) => {
  for (const i of [a, ...Object.values({})])
    t.component(i.name, i);
}, a), A = ["src"], H = /* @__PURE__ */ I({
  __name: "index",
  props: {
    src: {},
    width: { default: 200 },
    height: { default: 200 },
    draggable: { type: Boolean, default: !0 },
    initialPosition: { default: void 0 }
  },
  emits: ["positionChange"],
  setup(a, { emit: v }) {
    const t = a, i = v, d = u(), c = u(), s = u(!1), o = u({ x: 0, y: 0 }), r = u({ x: 0, y: 0 }), h = u(!1), f = u({
      height: "100%",
      width: "auto"
    }), M = () => {
      if (t.initialPosition) {
        o.value = t.initialPosition;
        return;
      }
      o.value = {
        x: 0,
        y: 0
      }, i("positionChange", o.value);
    }, w = (e, n) => {
      if (d.value && c.value) {
        const m = c.value, b = 0, C = t.width - m.offsetWidth, R = 0, k = t.height - m.offsetHeight, E = {
          x: Math.min(b, Math.max(C, e)),
          y: Math.min(R, Math.max(k, n))
        };
        o.value = E, i("positionChange", E);
      }
    }, g = (e) => {
      if (!s.value || !c.value) return;
      const n = e.clientX - r.value.x, l = e.clientY - r.value.y;
      w(n, l);
    }, p = (e) => {
      if (!s.value || !c.value) return;
      e.preventDefault();
      const n = e.touches[0], l = n.clientX - r.value.x, m = n.clientY - r.value.y;
      w(l, m);
    }, x = () => {
      s.value = !1, document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", x);
    }, y = () => {
      s.value = !1, document.removeEventListener("touchmove", p), document.removeEventListener("touchend", y);
    }, P = (e) => {
      t.draggable && (s.value = !0, r.value = {
        x: e.clientX - o.value.x,
        y: e.clientY - o.value.y
      }, document.addEventListener("mousemove", g), document.addEventListener("mouseup", x));
    }, X = (e) => {
      if (!t.draggable) return;
      e.preventDefault();
      const n = e.touches[0];
      s.value = !0, r.value = {
        x: n.clientX - o.value.x,
        y: n.clientY - o.value.y
      }, document.addEventListener("touchmove", p), document.addEventListener("touchend", y);
    }, Y = () => {
      const e = c.value;
      if (!e) return;
      const n = e.naturalWidth / e.naturalHeight, l = t.width / t.height;
      n > l ? f.value = {
        height: "100%",
        width: "auto"
      } : f.value = {
        width: "100%",
        height: "auto"
      }, h.value = !0, M();
    };
    return D(
      () => t.initialPosition,
      (e) => {
        e && h.value && (o.value = e, i("positionChange", e));
      },
      { deep: !0 }
    ), T(() => {
      document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", x), document.removeEventListener("touchmove", p), document.removeEventListener("touchend", y);
    }), (e, n) => (j(), $("div", {
      ref_key: "containerRef",
      ref: d,
      class: "draggable-container",
      style: L({
        width: `${e.width}px`,
        height: `${e.height}px`
      })
    }, [
      B("img", {
        ref_key: "imgRef",
        ref: c,
        src: e.src,
        onLoad: Y,
        onMousedown: _(P, ["prevent"]),
        onTouchstart: _(X, ["prevent"]),
        style: L({
          ...f.value,
          transform: `translate3d(${o.value.x}px, ${o.value.y}px, 0)`,
          opacity: h.value ? 1 : 0,
          cursor: e.draggable ? "move" : "default",
          "will-change": s.value ? "transform" : "auto"
        })
      }, null, 44, A)
    ], 4));
  }
}), O = (a, v) => {
  const t = a.__vccOpts || a;
  for (const [i, d] of v)
    t[i] = d;
  return t;
}, U = /* @__PURE__ */ O(H, [["__scopeId", "data-v-57648c1a"]]), z = S(U);
export {
  z as CoverImageAdjuster,
  z as default
};
