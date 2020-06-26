!(function () {
  'use strict';
  function t() {}
  function e(t) {
    return t();
  }
  function n() {
    return Object.create(null);
  }
  function o(t) {
    t.forEach(e);
  }
  function r(t) {
    return 'function' == typeof t;
  }
  function c(t, e) {
    return t != t
      ? e == e
      : t !== e || (t && 'object' == typeof t) || 'function' == typeof t;
  }
  function s(t, e) {
    t.appendChild(e);
  }
  function i(t, e, n) {
    t.insertBefore(e, n || null);
  }
  function u(t) {
    t.parentNode.removeChild(t);
  }
  function a(t) {
    return document.createElement(t);
  }
  function l(t) {
    return document.createTextNode(t);
  }
  function d() {
    return l(' ');
  }
  function f(t, e, n, o) {
    return t.addEventListener(e, n, o), () => t.removeEventListener(e, n, o);
  }
  function h(t, e) {
    (e = '' + e), t.data !== e && (t.data = e);
  }
  let p;
  function $(t) {
    p = t;
  }
  const g = [],
    m = [],
    x = [],
    b = [],
    y = Promise.resolve();
  let _ = !1;
  function v(t) {
    x.push(t);
  }
  let E = !1;
  const w = new Set();
  function C() {
    if (!E) {
      E = !0;
      do {
        for (let t = 0; t < g.length; t += 1) {
          const e = g[t];
          $(e), k(e.$$);
        }
        for (g.length = 0; m.length; ) m.pop()();
        for (let t = 0; t < x.length; t += 1) {
          const e = x[t];
          w.has(e) || (w.add(e), e());
        }
        x.length = 0;
      } while (g.length);
      for (; b.length; ) b.pop()();
      (_ = !1), (E = !1), w.clear();
    }
  }
  function k(t) {
    if (null !== t.fragment) {
      t.update(), o(t.before_update);
      const e = t.dirty;
      (t.dirty = [-1]),
        t.fragment && t.fragment.p(t.ctx, e),
        t.after_update.forEach(v);
    }
  }
  const A = new Set();
  function N(t, e) {
    -1 === t.$$.dirty[0] &&
      (g.push(t), _ || ((_ = !0), y.then(C)), t.$$.dirty.fill(0)),
      (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
  }
  function L(c, s, i, a, l, d, f = [-1]) {
    const h = p;
    $(c);
    const g = s.props || {},
      m = (c.$$ = {
        fragment: null,
        ctx: null,
        props: d,
        update: t,
        not_equal: l,
        bound: n(),
        on_mount: [],
        on_destroy: [],
        before_update: [],
        after_update: [],
        context: new Map(h ? h.$$.context : []),
        callbacks: n(),
        dirty: f,
      });
    let x = !1;
    if (
      ((m.ctx = i
        ? i(c, g, (t, e, ...n) => {
            const o = n.length ? n[0] : e;
            return (
              m.ctx &&
                l(m.ctx[t], (m.ctx[t] = o)) &&
                (m.bound[t] && m.bound[t](o), x && N(c, t)),
              e
            );
          })
        : []),
      m.update(),
      (x = !0),
      o(m.before_update),
      (m.fragment = !!a && a(m.ctx)),
      s.target)
    ) {
      if (s.hydrate) {
        const t = (function (t) {
          return Array.from(t.childNodes);
        })(s.target);
        m.fragment && m.fragment.l(t), t.forEach(u);
      } else m.fragment && m.fragment.c();
      s.intro && (b = c.$$.fragment) && b.i && (A.delete(b), b.i(y)),
        (function (t, n, c) {
          const {
            fragment: s,
            on_mount: i,
            on_destroy: u,
            after_update: a,
          } = t.$$;
          s && s.m(n, c),
            v(() => {
              const n = i.map(e).filter(r);
              u ? u.push(...n) : o(n), (t.$$.on_mount = []);
            }),
            a.forEach(v);
        })(c, s.target, s.anchor),
        C();
    }
    var b, y;
    $(h);
  }
  let T;
  function H(e) {
    let n, o, r;
    return {
      c() {
        (n = a('button')), (o = l(e[0])), (this.c = t);
      },
      m(t, c, u) {
        i(t, n, c), s(n, o), u && r(), (r = f(n, 'click', e[1]));
      },
      p(t, [e]) {
        1 & e && h(o, t[0]);
      },
      i: t,
      o: t,
      d(t) {
        t && u(n), r();
      },
    };
  }
  function M(t, e, n) {
    let { text: o } = e,
      r = 0;
    return (
      (t.$set = (t) => {
        'text' in t && n(0, (o = t.text));
      }),
      [
        o,
        function () {
          (r += 1), n(0, (o = r < 5 ? 'Thank You :-)' : 'Not that much!'));
        },
      ]
    );
  }
  'function' == typeof HTMLElement &&
    (T = class extends HTMLElement {
      constructor() {
        super(), this.attachShadow({ mode: 'open' });
      }
      connectedCallback() {
        for (const t in this.$$.slotted) this.appendChild(this.$$.slotted[t]);
      }
      attributeChangedCallback(t, e, n) {
        this[t] = n;
      }
      $destroy() {
        !(function (t, e) {
          const n = t.$$;
          null !== n.fragment &&
            (o(n.on_destroy),
            n.fragment && n.fragment.d(e),
            (n.on_destroy = n.fragment = null),
            (n.ctx = []));
        })(this, 1),
          (this.$destroy = t);
      }
      $on(t, e) {
        const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return (
          n.push(e),
          () => {
            const t = n.indexOf(e);
            -1 !== t && n.splice(t, 1);
          }
        );
      }
      $set() {}
    });
  function S(e) {
    let n, r, c, p, $, g, m, x, b, y, _, v, E;
    return {
      c() {
        var o, s, i;
        (n = a('div')),
          (r = a('h1')),
          (c = l(e[0])),
          (p = d()),
          ($ = a('p')),
          (g = l(e[1])),
          (m = d()),
          (x = l(e[2])),
          (b = d()),
          (y = a('button')),
          (y.textContent = 'Counter'),
          (_ = d()),
          (v = a('button')),
          (v.textContent = 'Say Howdy'),
          (this.c = t),
          (o = n),
          (s = 'class'),
          null == (i = 'card')
            ? o.removeAttribute(s)
            : o.getAttribute(s) !== i && o.setAttribute(s, i);
      },
      m(t, u, a) {
        i(t, n, u),
          s(n, r),
          s(r, c),
          s(n, p),
          s(n, $),
          s($, g),
          s(n, m),
          s(n, x),
          s(n, b),
          s(n, y),
          s(n, _),
          s(n, v),
          a && o(E),
          (E = [f(y, 'click', e[3]), f(v, 'click', R)]);
      },
      p(t, [e]) {
        1 & e && h(c, t[0]), 2 & e && h(g, t[1]), 4 & e && h(x, t[2]);
      },
      i: t,
      o: t,
      d(t) {
        t && u(n), o(E);
      },
    };
  }
  function R() {
    this.dispatchEvent(new CustomEvent('hiya', { composed: !0 }));
  }
  function j(t, e, n) {
    let { title: o = 'No title' } = e,
      { content: r = 'No content' } = e,
      c = 0;
    return (
      (t.$set = (t) => {
        'title' in t && n(0, (o = t.title)),
          'content' in t && n(1, (r = t.content));
      }),
      [o, r, c, () => n(2, c++, c)]
    );
  }
  customElements.define(
    'bsm-button',
    class extends T {
      constructor(t) {
        super(),
          L(this, { target: this.shadowRoot }, M, H, c, { text: 0 }),
          t &&
            (t.target && i(t.target, this, t.anchor),
            t.props && (this.$set(t.props), C()));
      }
      static get observedAttributes() {
        return ['text'];
      }
      get text() {
        return this.$$.ctx[0];
      }
      set text(t) {
        this.$set({ text: t }), C();
      }
    }
  );
  customElements.define(
    'bsm-card',
    class extends T {
      constructor(t) {
        super(),
          (this.shadowRoot.innerHTML =
            '<style>.card{border:1px solid #eaeaea;border-radius:4px;box-shadow:0px 2px 4px rgba(0, 0, 0, 0.2);width:200px;padding:5px;text-align:center}</style>'),
          L(this, { target: this.shadowRoot }, j, S, c, {
            title: 0,
            content: 1,
          }),
          t &&
            (t.target && i(t.target, this, t.anchor),
            t.props && (this.$set(t.props), C()));
      }
      static get observedAttributes() {
        return ['title', 'content'];
      }
      get title() {
        return this.$$.ctx[0];
      }
      set title(t) {
        this.$set({ title: t }), C();
      }
      get content() {
        return this.$$.ctx[1];
      }
      set content(t) {
        this.$set({ content: t }), C();
      }
    }
  );
})();
//# sourceMappingURL=bundle.js.map
