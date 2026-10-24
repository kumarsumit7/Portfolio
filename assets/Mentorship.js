import {
  c as te,
  R as A,
  r as j,
  j as e,
  A as W,
  m as D,
  a as ne,
  X as he,
  b as Ie,
  d as Re,
  e as Te,
  f as ue,
  g as De,
  h as Oe,
  i as Fe,
  k as oe,
  l as le,
  U as ce,
  M as ze,
  P as Le,
  n as Be,
  o as _e,
  p as Ue,
} from "./index.js";
const $e = [
    [
      "rect",
      { width: "5", height: "5", x: "3", y: "3", rx: "1", key: "1tu5fj" },
    ],
    [
      "rect",
      { width: "5", height: "5", x: "16", y: "3", rx: "1", key: "1v8r4q" },
    ],
    [
      "rect",
      { width: "5", height: "5", x: "3", y: "16", rx: "1", key: "1x03jg" },
    ],
    ["path", { d: "M21 16h-3a2 2 0 0 0-2 2v3", key: "177gqh" }],
    ["path", { d: "M21 21v.01", key: "ents32" }],
    ["path", { d: "M12 7v3a2 2 0 0 1-2 2H7", key: "8crl2c" }],
    ["path", { d: "M3 12h.01", key: "nlz23k" }],
    ["path", { d: "M12 3h.01", key: "n36tog" }],
    ["path", { d: "M12 16v.01", key: "133mhm" }],
    ["path", { d: "M16 12h1", key: "1slzba" }],
    ["path", { d: "M21 12v.01", key: "1lwtk9" }],
    ["path", { d: "M12 21v-1", key: "1880an" }],
  ],
  Qe = te("qr-code", $e);
const Ye = [
    [
      "path",
      {
        d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
        key: "m3kijz",
      },
    ],
    [
      "path",
      {
        d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
        key: "1fmvmk",
      },
    ],
    ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }],
    ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
  ],
  He = te("rocket", Ye);
const We = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  Xe = te("shield-check", We);
var Ge = Object.defineProperty,
  J = Object.getOwnPropertySymbols,
  xe = Object.prototype.hasOwnProperty,
  pe = Object.prototype.propertyIsEnumerable,
  de = (p, c, n) =>
    c in p
      ? Ge(p, c, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (p[c] = n),
  Z = (p, c) => {
    for (var n in c || (c = {})) xe.call(c, n) && de(p, n, c[n]);
    if (J) for (var n of J(c)) pe.call(c, n) && de(p, n, c[n]);
    return p;
  },
  ee = (p, c) => {
    var n = {};
    for (var d in p) xe.call(p, d) && c.indexOf(d) < 0 && (n[d] = p[d]);
    if (p != null && J)
      for (var d of J(p)) c.indexOf(d) < 0 && pe.call(p, d) && (n[d] = p[d]);
    return n;
  };
var H;
((p) => {
  const c = class b {
    constructor(t, s, a, r) {
      if (
        ((this.version = t),
        (this.errorCorrectionLevel = s),
        (this.modules = []),
        (this.isFunction = []),
        t < b.MIN_VERSION || t > b.MAX_VERSION)
      )
        throw new RangeError("Version value out of range");
      if (r < -1 || r > 7) throw new RangeError("Mask value out of range");
      this.size = t * 4 + 17;
      let i = [];
      for (let l = 0; l < this.size; l++) i.push(!1);
      for (let l = 0; l < this.size; l++)
        (this.modules.push(i.slice()), this.isFunction.push(i.slice()));
      this.drawFunctionPatterns();
      const o = this.addEccAndInterleave(a);
      if ((this.drawCodewords(o), r == -1)) {
        let l = 1e9;
        for (let g = 0; g < 8; g++) {
          (this.applyMask(g), this.drawFormatBits(g));
          const x = this.getPenaltyScore();
          (x < l && ((r = g), (l = x)), this.applyMask(g));
        }
      }
      (h(0 <= r && r <= 7),
        (this.mask = r),
        this.applyMask(r),
        this.drawFormatBits(r),
        (this.isFunction = []));
    }
    static encodeText(t, s) {
      const a = p.QrSegment.makeSegments(t);
      return b.encodeSegments(a, s);
    }
    static encodeBinary(t, s) {
      const a = p.QrSegment.makeBytes(t);
      return b.encodeSegments([a], s);
    }
    static encodeSegments(t, s, a = 1, r = 40, i = -1, o = !0) {
      if (
        !(b.MIN_VERSION <= a && a <= r && r <= b.MAX_VERSION) ||
        i < -1 ||
        i > 7
      )
        throw new RangeError("Invalid value");
      let l, g;
      for (l = a; ; l++) {
        const f = b.getNumDataCodewords(l, s) * 8,
          C = N.getTotalBits(t, l);
        if (C <= f) {
          g = C;
          break;
        }
        if (l >= r) throw new RangeError("Data too long");
      }
      for (const f of [b.Ecc.MEDIUM, b.Ecc.QUARTILE, b.Ecc.HIGH])
        o && g <= b.getNumDataCodewords(l, f) * 8 && (s = f);
      let x = [];
      for (const f of t) {
        (n(f.mode.modeBits, 4, x),
          n(f.numChars, f.mode.numCharCountBits(l), x));
        for (const C of f.getData()) x.push(C);
      }
      h(x.length == g);
      const k = b.getNumDataCodewords(l, s) * 8;
      (h(x.length <= k),
        n(0, Math.min(4, k - x.length), x),
        n(0, (8 - (x.length % 8)) % 8, x),
        h(x.length % 8 == 0));
      for (let f = 236; x.length < k; f ^= 253) n(f, 8, x);
      let E = [];
      for (; E.length * 8 < x.length; ) E.push(0);
      return (
        x.forEach((f, C) => (E[C >>> 3] |= f << (7 - (C & 7)))),
        new b(l, s, E, i)
      );
    }
    getModule(t, s) {
      return (
        0 <= t && t < this.size && 0 <= s && s < this.size && this.modules[s][t]
      );
    }
    getModules() {
      return this.modules;
    }
    drawFunctionPatterns() {
      for (let a = 0; a < this.size; a++)
        (this.setFunctionModule(6, a, a % 2 == 0),
          this.setFunctionModule(a, 6, a % 2 == 0));
      (this.drawFinderPattern(3, 3),
        this.drawFinderPattern(this.size - 4, 3),
        this.drawFinderPattern(3, this.size - 4));
      const t = this.getAlignmentPatternPositions(),
        s = t.length;
      for (let a = 0; a < s; a++)
        for (let r = 0; r < s; r++)
          (a == 0 && r == 0) ||
            (a == 0 && r == s - 1) ||
            (a == s - 1 && r == 0) ||
            this.drawAlignmentPattern(t[a], t[r]);
      (this.drawFormatBits(0), this.drawVersion());
    }
    drawFormatBits(t) {
      const s = (this.errorCorrectionLevel.formatBits << 3) | t;
      let a = s;
      for (let i = 0; i < 10; i++) a = (a << 1) ^ ((a >>> 9) * 1335);
      const r = ((s << 10) | a) ^ 21522;
      h(r >>> 15 == 0);
      for (let i = 0; i <= 5; i++) this.setFunctionModule(8, i, d(r, i));
      (this.setFunctionModule(8, 7, d(r, 6)),
        this.setFunctionModule(8, 8, d(r, 7)),
        this.setFunctionModule(7, 8, d(r, 8)));
      for (let i = 9; i < 15; i++) this.setFunctionModule(14 - i, 8, d(r, i));
      for (let i = 0; i < 8; i++)
        this.setFunctionModule(this.size - 1 - i, 8, d(r, i));
      for (let i = 8; i < 15; i++)
        this.setFunctionModule(8, this.size - 15 + i, d(r, i));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    drawVersion() {
      if (this.version < 7) return;
      let t = this.version;
      for (let a = 0; a < 12; a++) t = (t << 1) ^ ((t >>> 11) * 7973);
      const s = (this.version << 12) | t;
      h(s >>> 18 == 0);
      for (let a = 0; a < 18; a++) {
        const r = d(s, a),
          i = this.size - 11 + (a % 3),
          o = Math.floor(a / 3);
        (this.setFunctionModule(i, o, r), this.setFunctionModule(o, i, r));
      }
    }
    drawFinderPattern(t, s) {
      for (let a = -4; a <= 4; a++)
        for (let r = -4; r <= 4; r++) {
          const i = Math.max(Math.abs(r), Math.abs(a)),
            o = t + r,
            l = s + a;
          0 <= o &&
            o < this.size &&
            0 <= l &&
            l < this.size &&
            this.setFunctionModule(o, l, i != 2 && i != 4);
        }
    }
    drawAlignmentPattern(t, s) {
      for (let a = -2; a <= 2; a++)
        for (let r = -2; r <= 2; r++)
          this.setFunctionModule(
            t + r,
            s + a,
            Math.max(Math.abs(r), Math.abs(a)) != 1,
          );
    }
    setFunctionModule(t, s, a) {
      ((this.modules[s][t] = a), (this.isFunction[s][t] = !0));
    }
    addEccAndInterleave(t) {
      const s = this.version,
        a = this.errorCorrectionLevel;
      if (t.length != b.getNumDataCodewords(s, a))
        throw new RangeError("Invalid argument");
      const r = b.NUM_ERROR_CORRECTION_BLOCKS[a.ordinal][s],
        i = b.ECC_CODEWORDS_PER_BLOCK[a.ordinal][s],
        o = Math.floor(b.getNumRawDataModules(s) / 8),
        l = r - (o % r),
        g = Math.floor(o / r);
      let x = [];
      const k = b.reedSolomonComputeDivisor(i);
      for (let f = 0, C = 0; f < r; f++) {
        let I = t.slice(C, C + g - i + (f < l ? 0 : 1));
        C += I.length;
        const F = b.reedSolomonComputeRemainder(I, k);
        (f < l && I.push(0), x.push(I.concat(F)));
      }
      let E = [];
      for (let f = 0; f < x[0].length; f++)
        x.forEach((C, I) => {
          (f != g - i || I >= l) && E.push(C[f]);
        });
      return (h(E.length == o), E);
    }
    drawCodewords(t) {
      if (t.length != Math.floor(b.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let s = 0;
      for (let a = this.size - 1; a >= 1; a -= 2) {
        a == 6 && (a = 5);
        for (let r = 0; r < this.size; r++)
          for (let i = 0; i < 2; i++) {
            const o = a - i,
              g = ((a + 1) & 2) == 0 ? this.size - 1 - r : r;
            !this.isFunction[g][o] &&
              s < t.length * 8 &&
              ((this.modules[g][o] = d(t[s >>> 3], 7 - (s & 7))), s++);
          }
      }
      h(s == t.length * 8);
    }
    applyMask(t) {
      if (t < 0 || t > 7) throw new RangeError("Mask value out of range");
      for (let s = 0; s < this.size; s++)
        for (let a = 0; a < this.size; a++) {
          let r;
          switch (t) {
            case 0:
              r = (a + s) % 2 == 0;
              break;
            case 1:
              r = s % 2 == 0;
              break;
            case 2:
              r = a % 3 == 0;
              break;
            case 3:
              r = (a + s) % 3 == 0;
              break;
            case 4:
              r = (Math.floor(a / 3) + Math.floor(s / 2)) % 2 == 0;
              break;
            case 5:
              r = ((a * s) % 2) + ((a * s) % 3) == 0;
              break;
            case 6:
              r = (((a * s) % 2) + ((a * s) % 3)) % 2 == 0;
              break;
            case 7:
              r = (((a + s) % 2) + ((a * s) % 3)) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[s][a] &&
            r &&
            (this.modules[s][a] = !this.modules[s][a]);
        }
    }
    getPenaltyScore() {
      let t = 0;
      for (let i = 0; i < this.size; i++) {
        let o = !1,
          l = 0,
          g = [0, 0, 0, 0, 0, 0, 0];
        for (let x = 0; x < this.size; x++)
          this.modules[i][x] == o
            ? (l++, l == 5 ? (t += b.PENALTY_N1) : l > 5 && t++)
            : (this.finderPenaltyAddHistory(l, g),
              o || (t += this.finderPenaltyCountPatterns(g) * b.PENALTY_N3),
              (o = this.modules[i][x]),
              (l = 1));
        t += this.finderPenaltyTerminateAndCount(o, l, g) * b.PENALTY_N3;
      }
      for (let i = 0; i < this.size; i++) {
        let o = !1,
          l = 0,
          g = [0, 0, 0, 0, 0, 0, 0];
        for (let x = 0; x < this.size; x++)
          this.modules[x][i] == o
            ? (l++, l == 5 ? (t += b.PENALTY_N1) : l > 5 && t++)
            : (this.finderPenaltyAddHistory(l, g),
              o || (t += this.finderPenaltyCountPatterns(g) * b.PENALTY_N3),
              (o = this.modules[x][i]),
              (l = 1));
        t += this.finderPenaltyTerminateAndCount(o, l, g) * b.PENALTY_N3;
      }
      for (let i = 0; i < this.size - 1; i++)
        for (let o = 0; o < this.size - 1; o++) {
          const l = this.modules[i][o];
          l == this.modules[i][o + 1] &&
            l == this.modules[i + 1][o] &&
            l == this.modules[i + 1][o + 1] &&
            (t += b.PENALTY_N2);
        }
      let s = 0;
      for (const i of this.modules) s = i.reduce((o, l) => o + (l ? 1 : 0), s);
      const a = this.size * this.size,
        r = Math.ceil(Math.abs(s * 20 - a * 10) / a) - 1;
      return (
        h(0 <= r && r <= 9),
        (t += r * b.PENALTY_N4),
        h(0 <= t && t <= 2568888),
        t
      );
    }
    getAlignmentPatternPositions() {
      if (this.version == 1) return [];
      {
        const t = Math.floor(this.version / 7) + 2,
          s =
            this.version == 32
              ? 26
              : Math.ceil((this.version * 4 + 4) / (t * 2 - 2)) * 2;
        let a = [6];
        for (let r = this.size - 7; a.length < t; r -= s) a.splice(1, 0, r);
        return a;
      }
    }
    static getNumRawDataModules(t) {
      if (t < b.MIN_VERSION || t > b.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let s = (16 * t + 128) * t + 64;
      if (t >= 2) {
        const a = Math.floor(t / 7) + 2;
        ((s -= (25 * a - 10) * a - 55), t >= 7 && (s -= 36));
      }
      return (h(208 <= s && s <= 29648), s);
    }
    static getNumDataCodewords(t, s) {
      return (
        Math.floor(b.getNumRawDataModules(t) / 8) -
        b.ECC_CODEWORDS_PER_BLOCK[s.ordinal][t] *
          b.NUM_ERROR_CORRECTION_BLOCKS[s.ordinal][t]
      );
    }
    static reedSolomonComputeDivisor(t) {
      if (t < 1 || t > 255) throw new RangeError("Degree out of range");
      let s = [];
      for (let r = 0; r < t - 1; r++) s.push(0);
      s.push(1);
      let a = 1;
      for (let r = 0; r < t; r++) {
        for (let i = 0; i < s.length; i++)
          ((s[i] = b.reedSolomonMultiply(s[i], a)),
            i + 1 < s.length && (s[i] ^= s[i + 1]));
        a = b.reedSolomonMultiply(a, 2);
      }
      return s;
    }
    static reedSolomonComputeRemainder(t, s) {
      let a = s.map((r) => 0);
      for (const r of t) {
        const i = r ^ a.shift();
        (a.push(0), s.forEach((o, l) => (a[l] ^= b.reedSolomonMultiply(o, i))));
      }
      return a;
    }
    static reedSolomonMultiply(t, s) {
      if (t >>> 8 || s >>> 8) throw new RangeError("Byte out of range");
      let a = 0;
      for (let r = 7; r >= 0; r--)
        ((a = (a << 1) ^ ((a >>> 7) * 285)), (a ^= ((s >>> r) & 1) * t));
      return (h(a >>> 8 == 0), a);
    }
    finderPenaltyCountPatterns(t) {
      const s = t[1];
      h(s <= this.size * 3);
      const a = s > 0 && t[2] == s && t[3] == s * 3 && t[4] == s && t[5] == s;
      return (
        (a && t[0] >= s * 4 && t[6] >= s ? 1 : 0) +
        (a && t[6] >= s * 4 && t[0] >= s ? 1 : 0)
      );
    }
    finderPenaltyTerminateAndCount(t, s, a) {
      return (
        t && (this.finderPenaltyAddHistory(s, a), (s = 0)),
        (s += this.size),
        this.finderPenaltyAddHistory(s, a),
        this.finderPenaltyCountPatterns(a)
      );
    }
    finderPenaltyAddHistory(t, s) {
      (s[0] == 0 && (t += this.size), s.pop(), s.unshift(t));
    }
  };
  ((c.MIN_VERSION = 1),
    (c.MAX_VERSION = 40),
    (c.PENALTY_N1 = 3),
    (c.PENALTY_N2 = 3),
    (c.PENALTY_N3 = 40),
    (c.PENALTY_N4 = 10),
    (c.ECC_CODEWORDS_PER_BLOCK = [
      [
        -1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28,
        30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30,
        30, 30, 30, 30, 30,
      ],
      [
        -1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28,
        26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
        28, 28, 28, 28, 28,
      ],
      [
        -1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28,
        28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30,
        30, 30, 30, 30, 30,
      ],
      [
        -1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28,
        28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
        30, 30, 30, 30, 30,
      ],
    ]),
    (c.NUM_ERROR_CORRECTION_BLOCKS = [
      [
        -1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9,
        10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25,
      ],
      [
        -1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16,
        17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45,
        47, 49,
      ],
      [
        -1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20,
        23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62,
        65, 68,
      ],
      [
        -1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25,
        25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70,
        74, 77, 81,
      ],
    ]),
    (p.QrCode = c));
  function n(y, t, s) {
    if (t < 0 || t > 31 || y >>> t) throw new RangeError("Value out of range");
    for (let a = t - 1; a >= 0; a--) s.push((y >>> a) & 1);
  }
  function d(y, t) {
    return ((y >>> t) & 1) != 0;
  }
  function h(y) {
    if (!y) throw new Error("Assertion error");
  }
  const m = class M {
    constructor(t, s, a) {
      if (((this.mode = t), (this.numChars = s), (this.bitData = a), s < 0))
        throw new RangeError("Invalid argument");
      this.bitData = a.slice();
    }
    static makeBytes(t) {
      let s = [];
      for (const a of t) n(a, 8, s);
      return new M(M.Mode.BYTE, t.length, s);
    }
    static makeNumeric(t) {
      if (!M.isNumeric(t))
        throw new RangeError("String contains non-numeric characters");
      let s = [];
      for (let a = 0; a < t.length; ) {
        const r = Math.min(t.length - a, 3);
        (n(parseInt(t.substring(a, a + r), 10), r * 3 + 1, s), (a += r));
      }
      return new M(M.Mode.NUMERIC, t.length, s);
    }
    static makeAlphanumeric(t) {
      if (!M.isAlphanumeric(t))
        throw new RangeError(
          "String contains unencodable characters in alphanumeric mode",
        );
      let s = [],
        a;
      for (a = 0; a + 2 <= t.length; a += 2) {
        let r = M.ALPHANUMERIC_CHARSET.indexOf(t.charAt(a)) * 45;
        ((r += M.ALPHANUMERIC_CHARSET.indexOf(t.charAt(a + 1))), n(r, 11, s));
      }
      return (
        a < t.length && n(M.ALPHANUMERIC_CHARSET.indexOf(t.charAt(a)), 6, s),
        new M(M.Mode.ALPHANUMERIC, t.length, s)
      );
    }
    static makeSegments(t) {
      return t == ""
        ? []
        : M.isNumeric(t)
          ? [M.makeNumeric(t)]
          : M.isAlphanumeric(t)
            ? [M.makeAlphanumeric(t)]
            : [M.makeBytes(M.toUtf8ByteArray(t))];
    }
    static makeEci(t) {
      let s = [];
      if (t < 0) throw new RangeError("ECI assignment value out of range");
      if (t < 128) n(t, 8, s);
      else if (t < 16384) (n(2, 2, s), n(t, 14, s));
      else if (t < 1e6) (n(6, 3, s), n(t, 21, s));
      else throw new RangeError("ECI assignment value out of range");
      return new M(M.Mode.ECI, 0, s);
    }
    static isNumeric(t) {
      return M.NUMERIC_REGEX.test(t);
    }
    static isAlphanumeric(t) {
      return M.ALPHANUMERIC_REGEX.test(t);
    }
    getData() {
      return this.bitData.slice();
    }
    static getTotalBits(t, s) {
      let a = 0;
      for (const r of t) {
        const i = r.mode.numCharCountBits(s);
        if (r.numChars >= 1 << i) return 1 / 0;
        a += 4 + i + r.bitData.length;
      }
      return a;
    }
    static toUtf8ByteArray(t) {
      t = encodeURI(t);
      let s = [];
      for (let a = 0; a < t.length; a++)
        t.charAt(a) != "%"
          ? s.push(t.charCodeAt(a))
          : (s.push(parseInt(t.substring(a + 1, a + 3), 16)), (a += 2));
      return s;
    }
  };
  ((m.NUMERIC_REGEX = /^[0-9]*$/),
    (m.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/),
    (m.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:"));
  let N = m;
  p.QrSegment = m;
})(H || (H = {}));
((p) => {
  ((c) => {
    const n = class {
      constructor(h, m) {
        ((this.ordinal = h), (this.formatBits = m));
      }
    };
    ((n.LOW = new n(0, 1)),
      (n.MEDIUM = new n(1, 0)),
      (n.QUARTILE = new n(2, 3)),
      (n.HIGH = new n(3, 2)),
      (c.Ecc = n));
  })(p.QrCode || (p.QrCode = {}));
})(H || (H = {}));
((p) => {
  ((c) => {
    const n = class {
      constructor(h, m) {
        ((this.modeBits = h), (this.numBitsCharCount = m));
      }
      numCharCountBits(h) {
        return this.numBitsCharCount[Math.floor((h + 7) / 17)];
      }
    };
    ((n.NUMERIC = new n(1, [10, 12, 14])),
      (n.ALPHANUMERIC = new n(2, [9, 11, 13])),
      (n.BYTE = new n(4, [8, 16, 16])),
      (n.KANJI = new n(8, [8, 10, 12])),
      (n.ECI = new n(7, [0, 0, 0])),
      (c.Mode = n));
  })(p.QrSegment || (p.QrSegment = {}));
})(H || (H = {}));
var X = H;
var Ve = {
    L: X.QrCode.Ecc.LOW,
    M: X.QrCode.Ecc.MEDIUM,
    Q: X.QrCode.Ecc.QUARTILE,
    H: X.QrCode.Ecc.HIGH,
  },
  fe = 128,
  ge = "L",
  ye = "#FFFFFF",
  be = "#000000",
  we = !1,
  ve = 1,
  qe = 4,
  Ke = 0,
  Je = 0.1;
function Ne(p, c = 0) {
  const n = [];
  return (
    p.forEach(function (d, h) {
      let m = null;
      d.forEach(function (N, y) {
        if (!N && m !== null) {
          (n.push(`M${m + c} ${h + c}h${y - m}v1H${m + c}z`), (m = null));
          return;
        }
        if (y === d.length - 1) {
          if (!N) return;
          m === null
            ? n.push(`M${y + c},${h + c} h1v1H${y + c}z`)
            : n.push(`M${m + c},${h + c} h${y + 1 - m}v1H${m + c}z`);
          return;
        }
        N && m === null && (m = y);
      });
    }),
    n.join("")
  );
}
function je(p, c) {
  return p
    .slice()
    .map((n, d) =>
      d < c.y || d >= c.y + c.h
        ? n
        : n.map((h, m) => (m < c.x || m >= c.x + c.w ? h : !1)),
    );
}
function Ze(p, c, n, d) {
  if (d == null) return null;
  const h = p.length + n * 2,
    m = Math.floor(c * Je),
    N = h / c,
    y = (d.width || m) * N,
    t = (d.height || m) * N,
    s = d.x == null ? p.length / 2 - y / 2 : d.x * N,
    a = d.y == null ? p.length / 2 - t / 2 : d.y * N,
    r = d.opacity == null ? 1 : d.opacity;
  let i = null;
  if (d.excavate) {
    let l = Math.floor(s),
      g = Math.floor(a),
      x = Math.ceil(y + s - l),
      k = Math.ceil(t + a - g);
    i = { x: l, y: g, w: x, h: k };
  }
  const o = d.crossOrigin;
  return { x: s, y: a, h: t, w: y, excavation: i, opacity: r, crossOrigin: o };
}
function et(p, c) {
  return c != null ? Math.max(Math.floor(c), 0) : p ? qe : Ke;
}
function Ce({
  value: p,
  level: c,
  minVersion: n,
  includeMargin: d,
  marginSize: h,
  imageSettings: m,
  size: N,
  boostLevel: y,
}) {
  let t = A.useMemo(() => {
    const l = (Array.isArray(p) ? p : [p]).reduce(
      (g, x) => (g.push(...X.QrSegment.makeSegments(x)), g),
      [],
    );
    return X.QrCode.encodeSegments(l, Ve[c], n, void 0, void 0, y);
  }, [p, c, n, y]);
  const {
    cells: s,
    margin: a,
    numCells: r,
    calculatedImageSettings: i,
  } = A.useMemo(() => {
    let o = t.getModules();
    const l = et(d, h),
      g = o.length + l * 2,
      x = Ze(o, N, l, m);
    return { cells: o, margin: l, numCells: g, calculatedImageSettings: x };
  }, [t, N, m, d, h]);
  return {
    qrcode: t,
    margin: a,
    cells: s,
    numCells: r,
    calculatedImageSettings: i,
  };
}
var tt = (function () {
    try {
      new Path2D().addPath(new Path2D());
    } catch {
      return !1;
    }
    return !0;
  })(),
  st = A.forwardRef(function (c, n) {
    const d = c,
      {
        value: h,
        size: m = fe,
        level: N = ge,
        bgColor: y = ye,
        fgColor: t = be,
        includeMargin: s = we,
        minVersion: a = ve,
        boostLevel: r,
        marginSize: i,
        imageSettings: o,
      } = d,
      g = ee(d, [
        "value",
        "size",
        "level",
        "bgColor",
        "fgColor",
        "includeMargin",
        "minVersion",
        "boostLevel",
        "marginSize",
        "imageSettings",
      ]),
      { style: x } = g,
      k = ee(g, ["style"]),
      E = o?.src,
      f = A.useRef(null),
      C = A.useRef(null),
      I = A.useCallback(
        (R) => {
          ((f.current = R),
            typeof n == "function" ? n(R) : n && (n.current = R));
        },
        [n],
      ),
      [F, $] = A.useState(!1),
      {
        margin: L,
        cells: _,
        numCells: Q,
        calculatedImageSettings: S,
      } = Ce({
        value: h,
        level: N,
        minVersion: a,
        boostLevel: r,
        includeMargin: s,
        marginSize: i,
        imageSettings: o,
        size: m,
      });
    (A.useEffect(() => {
      if (f.current != null) {
        const R = f.current,
          O = R.getContext("2d");
        if (!O) return;
        let G = _;
        const B = C.current,
          u =
            S != null &&
            B !== null &&
            B.complete &&
            B.naturalHeight !== 0 &&
            B.naturalWidth !== 0;
        u && S.excavation != null && (G = je(_, S.excavation));
        const w = window.devicePixelRatio || 1;
        R.height = R.width = m * w;
        const P = (m / Q) * w;
        (O.scale(P, P),
          (O.fillStyle = y),
          O.fillRect(0, 0, Q, Q),
          (O.fillStyle = t),
          tt
            ? O.fill(new Path2D(Ne(G, L)))
            : _.forEach(function (Y, U) {
                Y.forEach(function (V, z) {
                  V && O.fillRect(z + L, U + L, 1, 1);
                });
              }),
          S && (O.globalAlpha = S.opacity),
          u && O.drawImage(B, S.x + L, S.y + L, S.w, S.h));
      }
    }),
      A.useEffect(() => {
        $(!1);
      }, [E]));
    const v = Z({ height: m, width: m }, x);
    let T = null;
    return (
      E != null &&
        (T = A.createElement("img", {
          src: E,
          key: E,
          style: { display: "none" },
          onLoad: () => {
            $(!0);
          },
          ref: C,
          crossOrigin: S?.crossOrigin,
        })),
      A.createElement(
        A.Fragment,
        null,
        A.createElement(
          "canvas",
          Z({ style: v, height: m, width: m, ref: I, role: "img" }, k),
        ),
        T,
      )
    );
  });
st.displayName = "QRCodeCanvas";
var Ee = A.forwardRef(function (c, n) {
  const d = c,
    {
      value: h,
      size: m = fe,
      level: N = ge,
      bgColor: y = ye,
      fgColor: t = be,
      includeMargin: s = we,
      minVersion: a = ve,
      boostLevel: r,
      title: i,
      marginSize: o,
      imageSettings: l,
    } = d,
    g = ee(d, [
      "value",
      "size",
      "level",
      "bgColor",
      "fgColor",
      "includeMargin",
      "minVersion",
      "boostLevel",
      "title",
      "marginSize",
      "imageSettings",
    ]),
    {
      margin: x,
      cells: k,
      numCells: E,
      calculatedImageSettings: f,
    } = Ce({
      value: h,
      level: N,
      minVersion: a,
      boostLevel: r,
      includeMargin: s,
      marginSize: o,
      imageSettings: l,
      size: m,
    });
  let C = k,
    I = null;
  l != null &&
    f != null &&
    (f.excavation != null && (C = je(k, f.excavation)),
    (I = A.createElement("image", {
      href: l.src,
      height: f.h,
      width: f.w,
      x: f.x + x,
      y: f.y + x,
      preserveAspectRatio: "none",
      opacity: f.opacity,
      crossOrigin: f.crossOrigin,
    })));
  const F = Ne(C, x);
  return A.createElement(
    "svg",
    Z(
      { height: m, width: m, viewBox: `0 0 ${E} ${E}`, ref: n, role: "img" },
      g,
    ),
    !!i && A.createElement("title", null, i),
    A.createElement("path", {
      fill: y,
      d: `M0,0 h${E}v${E}H0z`,
      shapeRendering: "crispEdges",
    }),
    A.createElement("path", { fill: t, d: F, shapeRendering: "crispEdges" }),
    I,
  );
});
Ee.displayName = "QRCodeSVG";
const at = ({
    isOpen: p,
    onClose: c,
    planName: n,
    amount: d,
    bookingDetails: h,
  }) => {
    const [m, N] = j.useState(null),
      [y, t] = j.useState(!1),
      [s, a] = j.useState(!1),
      [r, i] = j.useState(!1),
      [o, l] = j.useState(""),
      [g, x] = j.useState(null),
      k = [
        {
          name: "PhonePe",
          id: "alifaiz1251@ybl",
          color: "#5f259f",
          logo: "/phonepe-logo.png",
          intentPrefix: "phonepe://pay?pa=",
        },
        {
          name: "Google Pay",
          id: "alifaiz125-1@oksbi",
          color: "#1a73e8",
          logo: "/googlepay-logo.png",
          intentPrefix: "tez://upi/pay?pa=",
        },
        {
          name: "Paytm",
          id: "alifaiz125@ptyes",
          color: "#00B9F5",
          logo: "/paytm-logo.png",
          intentPrefix: "paytmmp://pay?pa=",
        },
      ],
      E = async (v, T) => {
        try {
          (await navigator.clipboard.writeText(v),
            N(T),
            setTimeout(() => N(null), 2e3));
        } catch (R) {
          console.error("Failed to copy:", R);
        }
      },
      f = (v) => {
        const T = encodeURIComponent("MD FAIZ ALI"),
          O = encodeURIComponent(
            `${n} (${d === 999 ? "30 min" : "1 hour"}) - Mentorship`,
          );
        return `upi://pay?pa=${v}&pn=${T}&am=${d}&cu=INR&tn=${O}`;
      },
      C = () =>
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        ),
      [I, F] = j.useState(!1),
      [$, L] = j.useState(""),
      _ = (v) => {
        if (C()) {
          const T = f(v.id);
          window.location.href = T;
        } else
          (navigator.clipboard.writeText(v.id),
            L(
              `UPI ID copied! Open ${v.name} app on your phone or scan QR code`,
            ),
            F(!0),
            setTimeout(() => F(!1), 3e3),
            t(!0));
      },
      Q = async () => {
        if (!(!o.trim() || !h || !h.id)) {
          (i(!0), x(null));
          try {
            const v = await fetch("/api/bookings/confirm", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                bookingId: h.id,
                transactionId: o.trim(),
              }),
            });
            if (!v.ok) {
              const T = await v.json();
              throw new Error(
                T.message || "Failed to submit transaction verification.",
              );
            }
            a(!0);
          } catch (v) {
            (console.error("Confirm payment error:", v),
              x(
                v.message ||
                  "Failed to submit payment details. Please try again.",
              ));
          } finally {
            i(!1);
          }
        }
      },
      S = () => {
        (a(!1), i(!1), l(""), t(!1), N(null), F(!1), x(null), c());
      };
    return e.jsx(W, {
      children:
        p &&
        e.jsxs(e.Fragment, {
          children: [
            e.jsx(D.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              onClick: S,
              className: "fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]",
            }),
            e.jsx(W, {
              children:
                I &&
                e.jsxs(D.div, {
                  initial: { opacity: 0, y: -50 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -50 },
                  className:
                    "fixed top-4 left-1/2 -translate-x-1/2 z-[200] bg-green-500 text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-2 max-w-[90%] sm:max-w-md text-center",
                  children: [
                    e.jsx(ne, { className: "w-5 h-5 flex-shrink-0" }),
                    e.jsx("span", {
                      className: "text-sm font-medium",
                      children: $,
                    }),
                  ],
                }),
            }),
            e.jsx("div", {
              className:
                "fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 pointer-events-none",
              children: e.jsx(D.div, {
                initial: { opacity: 0, scale: 0.9, y: 20 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.9, y: 20 },
                transition: { type: "spring", damping: 25, stiffness: 300 },
                className:
                  "w-full max-w-md pointer-events-auto max-h-[92vh] sm:max-h-[90vh] overflow-y-auto rounded-2xl",
                style: { WebkitOverflowScrolling: "touch" },
                children: e.jsxs("div", {
                  className:
                    "bg-gradient-to-br from-gray-900/95 via-gray-900/98 to-black/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden",
                  children: [
                    e.jsxs("div", {
                      className:
                        "relative px-4 sm:px-6 pt-4 sm:pt-5 pb-4 sm:pb-5 border-b border-white/10",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10",
                        }),
                        e.jsxs("div", {
                          className:
                            "relative flex items-start justify-between gap-3",
                          children: [
                            e.jsxs("div", {
                              className: "flex-1 min-w-0",
                              children: [
                                e.jsx("h3", {
                                  className:
                                    "text-lg sm:text-xl font-bold text-white",
                                  children: s
                                    ? "Payment Submitted!"
                                    : `Pay for ${n}`,
                                }),
                                e.jsxs("p", {
                                  className:
                                    "text-primary text-xl sm:text-2xl font-bold mt-1",
                                  children: ["₹", d],
                                }),
                              ],
                            }),
                            e.jsx("button", {
                              onClick: S,
                              className:
                                "flex-shrink-0 p-1.5 sm:p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors group",
                              children: e.jsx(he, {
                                className:
                                  "w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "p-4 sm:p-6",
                      children: e.jsx(W, {
                        mode: "wait",
                        children: s
                          ? e.jsxs(
                              D.div,
                              {
                                initial: { opacity: 0, scale: 0.9 },
                                animate: { opacity: 1, scale: 1 },
                                className: "text-center py-4 sm:py-6",
                                children: [
                                  e.jsx(D.div, {
                                    initial: { scale: 0 },
                                    animate: { scale: 1 },
                                    transition: {
                                      type: "spring",
                                      damping: 12,
                                      delay: 0.1,
                                    },
                                    children: e.jsx(Ie, {
                                      className:
                                        "w-14 h-14 sm:w-16 sm:h-16 text-green-400 mx-auto mb-4",
                                    }),
                                  }),
                                  e.jsx("h4", {
                                    className:
                                      "text-lg sm:text-xl font-bold text-white mb-2",
                                    children: "Booking Confirmed! 🎉",
                                  }),
                                  h &&
                                    e.jsxs(e.Fragment, {
                                      children: [
                                        e.jsxs("p", {
                                          className:
                                            "text-gray-400 text-sm mb-1",
                                          children: ["📅 ", h.dateFormatted],
                                        }),
                                        e.jsxs("p", {
                                          className:
                                            "text-gray-400 text-sm mb-1",
                                          children: ["⏰ ", h.time, " • ", n],
                                        }),
                                      ],
                                    }),
                                  e.jsxs("p", {
                                    className: "text-gray-400 text-sm mb-4",
                                    children: ["🧾 Transaction ID: ", o],
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "bg-green-500/10 border border-green-500/20 rounded-xl p-4 mt-4",
                                    children: e.jsx("p", {
                                      className:
                                        "text-green-400 text-sm font-medium",
                                      children:
                                        "✅ Your payment details have been sent for verification. You'll receive confirmation on WhatsApp once verified.",
                                    }),
                                  }),
                                  e.jsx("button", {
                                    onClick: S,
                                    className:
                                      "mt-6 w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300",
                                    children: "Done",
                                  }),
                                ],
                              },
                              "confirmed",
                            )
                          : e.jsxs(
                              D.div,
                              {
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                exit: { opacity: 0 },
                                children: [
                                  h &&
                                    e.jsxs("div", {
                                      className:
                                        "bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 mb-4 sm:mb-5",
                                      children: [
                                        e.jsx("p", {
                                          className:
                                            "text-xs text-gray-500 uppercase tracking-wider mb-2 font-medium",
                                          children: "Booking Summary",
                                        }),
                                        e.jsxs("div", {
                                          className: "space-y-1",
                                          children: [
                                            e.jsxs("p", {
                                              className:
                                                "text-gray-300 text-sm",
                                              children: [
                                                "📅 ",
                                                h.dateFormatted,
                                              ],
                                            }),
                                            e.jsxs("p", {
                                              className:
                                                "text-gray-300 text-sm",
                                              children: [
                                                "⏰ ",
                                                h.time,
                                                " • ",
                                                n,
                                              ],
                                            }),
                                            e.jsxs("p", {
                                              className:
                                                "text-gray-300 text-sm",
                                              children: ["👤 ", h.userName],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  e.jsxs("div", {
                                    className: "flex gap-2 mb-4 sm:mb-6",
                                    children: [
                                      e.jsxs("button", {
                                        onClick: () => t(!1),
                                        className: `flex-1 flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-xl font-medium text-sm transition-all ${y ? "bg-white/5 text-gray-400 hover:bg-white/10" : "bg-primary text-white shadow-lg shadow-primary/25"}`,
                                        children: [
                                          e.jsx(Re, { className: "w-4 h-4" }),
                                          "UPI Apps",
                                        ],
                                      }),
                                      e.jsxs("button", {
                                        onClick: () => t(!0),
                                        className: `flex-1 flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-xl font-medium text-sm transition-all ${y ? "bg-primary text-white shadow-lg shadow-primary/25" : "bg-white/5 text-gray-400 hover:bg-white/10"}`,
                                        children: [
                                          e.jsx(Qe, { className: "w-4 h-4" }),
                                          "Scan QR",
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsx(W, {
                                    mode: "wait",
                                    children: y
                                      ? e.jsxs(
                                          D.div,
                                          {
                                            initial: { opacity: 0, x: 20 },
                                            animate: { opacity: 1, x: 0 },
                                            exit: { opacity: 0, x: -20 },
                                            className:
                                              "flex flex-col items-center",
                                            children: [
                                              e.jsx("div", {
                                                className:
                                                  "p-3 sm:p-4 bg-white rounded-2xl shadow-xl",
                                                children: e.jsx(Ee, {
                                                  value: f("alifaiz1251@ybl"),
                                                  size: 160,
                                                  level: "M",
                                                  includeMargin: !1,
                                                }),
                                              }),
                                              e.jsx("p", {
                                                className:
                                                  "text-white font-semibold mt-3 text-sm tracking-wide",
                                                children: "MD FAIZ ALI",
                                              }),
                                              e.jsx("p", {
                                                className:
                                                  "text-gray-400 text-sm mt-2 text-center",
                                                children:
                                                  "Scan this QR code with any UPI app to pay",
                                              }),
                                              e.jsxs("p", {
                                                className:
                                                  "text-primary font-bold text-lg mt-2",
                                                children: ["Amount: ₹", d],
                                              }),
                                            ],
                                          },
                                          "qr-code",
                                        )
                                      : e.jsxs(
                                          D.div,
                                          {
                                            initial: { opacity: 0, x: -20 },
                                            animate: { opacity: 1, x: 0 },
                                            exit: { opacity: 0, x: 20 },
                                            className:
                                              "space-y-2.5 sm:space-y-3",
                                            children: [
                                              k.map((v, T) =>
                                                e.jsxs(
                                                  D.div,
                                                  {
                                                    initial: {
                                                      opacity: 0,
                                                      y: 10,
                                                    },
                                                    animate: {
                                                      opacity: 1,
                                                      y: 0,
                                                    },
                                                    transition: {
                                                      delay: T * 0.1,
                                                    },
                                                    className: "group relative",
                                                    children: [
                                                      e.jsx("div", {
                                                        className:
                                                          "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                                        style: {
                                                          background: `linear-gradient(135deg, ${v.color}20, transparent)`,
                                                        },
                                                      }),
                                                      e.jsxs("div", {
                                                        className:
                                                          "relative flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all",
                                                        children: [
                                                          e.jsx("div", {
                                                            className:
                                                              "w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center overflow-hidden bg-white p-1 sm:p-1.5 flex-shrink-0",
                                                            children: e.jsx(
                                                              "img",
                                                              {
                                                                src: v.logo,
                                                                alt: v.name,
                                                                className:
                                                                  "w-full h-full object-contain",
                                                              },
                                                            ),
                                                          }),
                                                          e.jsxs("div", {
                                                            className:
                                                              "flex-1 min-w-0",
                                                            children: [
                                                              e.jsx("h4", {
                                                                className:
                                                                  "font-semibold text-white text-sm sm:text-base",
                                                                children:
                                                                  v.name,
                                                              }),
                                                              e.jsx("p", {
                                                                className:
                                                                  "text-xs sm:text-sm text-gray-400 truncate",
                                                                children: v.id,
                                                              }),
                                                            ],
                                                          }),
                                                          e.jsxs("div", {
                                                            className:
                                                              "flex items-center gap-1.5 sm:gap-2 flex-shrink-0",
                                                            children: [
                                                              e.jsx("button", {
                                                                onClick: () =>
                                                                  E(
                                                                    v.id,
                                                                    v.name,
                                                                  ),
                                                                className:
                                                                  "p-1.5 sm:p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors",
                                                                title:
                                                                  "Copy UPI ID",
                                                                children:
                                                                  m === v.name
                                                                    ? e.jsx(
                                                                        ne,
                                                                        {
                                                                          className:
                                                                            "w-4 h-4 text-green-400",
                                                                        },
                                                                      )
                                                                    : e.jsx(
                                                                        Te,
                                                                        {
                                                                          className:
                                                                            "w-4 h-4 text-gray-400",
                                                                        },
                                                                      ),
                                                              }),
                                                              e.jsx("button", {
                                                                onClick: () =>
                                                                  _(v),
                                                                className:
                                                                  "px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium text-white text-sm transition-all hover:scale-105",
                                                                style: {
                                                                  backgroundColor:
                                                                    v.color,
                                                                },
                                                                children: "Pay",
                                                              }),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  },
                                                  v.name,
                                                ),
                                              ),
                                              e.jsx("p", {
                                                className:
                                                  "text-center text-xs text-gray-500 mt-3 sm:mt-4",
                                                children:
                                                  'Click "Pay" to open in app or copy UPI ID to pay manually',
                                              }),
                                            ],
                                          },
                                          "upi-options",
                                        ),
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-white/10",
                                    children: [
                                      e.jsxs("div", {
                                        className:
                                          "flex items-center gap-2 mb-3",
                                        children: [
                                          e.jsx(Xe, {
                                            className: "w-5 h-5 text-primary",
                                          }),
                                          e.jsx("h4", {
                                            className:
                                              "text-white font-semibold text-sm",
                                            children: "Confirm Your Payment",
                                          }),
                                        ],
                                      }),
                                      e.jsx("p", {
                                        className: "text-gray-400 text-xs mb-3",
                                        children:
                                          "After completing the payment, enter your UPI Transaction ID / UTR number below to confirm your booking.",
                                      }),
                                      e.jsx("input", {
                                        type: "text",
                                        value: o,
                                        onChange: (v) => l(v.target.value),
                                        placeholder:
                                          "Enter UPI Transaction ID / UTR",
                                        className:
                                          "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all mb-2",
                                      }),
                                      g &&
                                        e.jsxs("div", {
                                          className:
                                            "text-red-500 text-xs text-center font-medium bg-red-500/10 border border-red-500/20 py-2 ml-1 mr-1 mb-3 rounded-lg",
                                          children: ["⚠️ ", g],
                                        }),
                                      e.jsx("button", {
                                        onClick: Q,
                                        disabled: !o.trim() || r,
                                        className:
                                          "w-full bg-gradient-to-b from-red-600 to-red-700 shadow-[0px_4px_20px_0_rgba(220,38,38,.50)] px-5 py-3.5 rounded-xl border border-red-500/50 text-white font-semibold text-sm hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100",
                                        children: r
                                          ? e.jsxs(e.Fragment, {
                                              children: [
                                                e.jsx("div", {
                                                  className:
                                                    "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin",
                                                }),
                                                "Verifying...",
                                              ],
                                            })
                                          : e.jsxs(e.Fragment, {
                                              children: [
                                                "I've Paid — Confirm Booking",
                                                e.jsx(ue, {
                                                  className: "w-4 h-4",
                                                }),
                                              ],
                                            }),
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-xs text-gray-500 mt-2 text-center",
                                        children:
                                          "⚠️ Fake entries will be rejected. Only confirmed payments are processed.",
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              "payment",
                            ),
                      }),
                    }),
                    e.jsx("div", {
                      className:
                        "px-4 sm:px-6 py-3 sm:py-4 border-t border-white/10 bg-white/5",
                      children: e.jsx("p", {
                        className: "text-xs text-gray-500 text-center",
                        children:
                          "🔒 Secure payment via UPI • Your booking is confirmed only after payment verification",
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
    });
  },
  K = {
    availableDays: [1, 2, 3, 4, 5, 6],
    timeSlots: [
      { time: "10:00", label: "10:00 AM" },
      { time: "11:00", label: "11:00 AM" },
      { time: "12:00", label: "12:00 PM" },
      { time: "13:00", label: "1:00 PM" },
      { time: "14:00", label: "2:00 PM" },
      { time: "15:00", label: "3:00 PM" },
      { time: "16:00", label: "4:00 PM" },
      { time: "17:00", label: "5:00 PM" },
    ],
    blockedDates: [],
    minAdvanceDays: 1,
    maxAdvanceDays: 60,
  },
  rt = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  me = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  it = ({
    isOpen: p,
    onClose: c,
    planName: n,
    amount: d,
    onProceedToPayment: h,
  }) => {
    const [m, N] = j.useState(1),
      [y, t] = j.useState(new Date()),
      [s, a] = j.useState(null),
      [r, i] = j.useState(null),
      [o, l] = j.useState({
        userName: "",
        userEmail: "",
        userWhatsapp: "",
        userNotes: "",
      }),
      [g, x] = j.useState([]),
      [k, E] = j.useState(!1),
      [f, C] = j.useState(!1),
      [I, F] = j.useState(null),
      $ = () => {
        (N(1),
          a(null),
          i(null),
          l({ userName: "", userEmail: "", userWhatsapp: "", userNotes: "" }),
          t(new Date()),
          x([]),
          F(null));
      };
    j.useEffect(() => {
      if (!s) {
        x([]);
        return;
      }
      (async () => {
        E(!0);
        try {
          const w = await fetch(`/api/bookings/availability?date=${s}`);
          if (w.ok) {
            const P = await w.json();
            x(P.unavailableSlots || []);
          }
        } catch (w) {
          console.error("Error fetching availability:", w);
        } finally {
          E(!1);
        }
      })();
    }, [s]);
    const L = j.useMemo(() => {
        const u = y.getFullYear(),
          w = y.getMonth(),
          P = new Date(u, w, 1).getDay(),
          Y = new Date(u, w + 1, 0).getDate(),
          U = new Date();
        U.setHours(0, 0, 0, 0);
        const V = [];
        for (let z = 0; z < P; z++)
          V.push({
            date: 0,
            dateStr: "",
            isAvailable: !1,
            isToday: !1,
            isPast: !1,
            isEmpty: !0,
          });
        for (let z = 1; z <= Y; z++) {
          const q = new Date(u, w, z);
          q.setHours(0, 0, 0, 0);
          const Me = q.getDay(),
            se = `${u}-${String(w + 1).padStart(2, "0")}-${String(z).padStart(2, "0")}`,
            ae = q <= U,
            re = Math.ceil((q.getTime() - U.getTime()) / (1e3 * 60 * 60 * 24)),
            ie = re < K.minAdvanceDays,
            Se = re > K.maxAdvanceDays,
            Pe = K.blockedDates.includes(se),
            Ae = K.availableDays.includes(Me),
            ke = !ae && !ie && !Se && !Pe && Ae;
          V.push({
            date: z,
            dateStr: se,
            isAvailable: ke,
            isToday: q.getTime() === U.getTime(),
            isPast: ae || ie,
            isEmpty: !1,
          });
        }
        return V;
      }, [y]),
      _ = (u) => {
        t((w) => {
          const P = new Date(w);
          return (P.setMonth(P.getMonth() + u), P);
        });
      },
      Q = () => {
        const u = new Date();
        return (
          y.getFullYear() > u.getFullYear() ||
          (y.getFullYear() === u.getFullYear() && y.getMonth() > u.getMonth())
        );
      },
      S = (u) => {
        const w = new Date(u + "T00:00:00"),
          P = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ][w.getDay()],
          Y = me[w.getMonth()];
        return `${P}, ${w.getDate()} ${Y} ${w.getFullYear()}`;
      },
      v = (u) => {
        (a(u), setTimeout(() => N(2), 300));
      },
      T = (u) => {
        (i(u), setTimeout(() => N(3), 300));
      },
      R = (u) => {
        l((w) => ({ ...w, [u.target.name]: u.target.value }));
      },
      O = async (u) => {
        if ((u.preventDefault(), !(!s || !r))) {
          (C(!0), F(null));
          try {
            const w = await fetch("/api/bookings/hold", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: o.userName,
                email: o.userEmail,
                whatsapp: o.userWhatsapp,
                notes: o.userNotes || "No additional notes",
                date: s,
                timeSlot: r,
                planName: n,
                amount: d,
              }),
            });
            if (!w.ok) {
              const U = await w.json();
              throw new Error(
                U.message ||
                  "This slot was just taken. Please select another slot.",
              );
            }
            const Y = {
              id: (await w.json()).bookingId,
              date: s,
              dateFormatted: S(s),
              time: r,
              userName: o.userName,
              userEmail: o.userEmail,
              userWhatsapp: o.userWhatsapp,
              userNotes: o.userNotes || "No additional notes",
            };
            (h(Y),
              setTimeout(() => {
                ($(), c());
              }, 100));
          } catch (w) {
            (console.error("Hold booking error:", w),
              F(w.message || "Failed to request booking. Please try again."));
          } finally {
            C(!1);
          }
        }
      },
      G = () => {
        ($(), c());
      },
      B = {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 },
      };
    return e.jsx(W, {
      children:
        p &&
        e.jsxs(e.Fragment, {
          children: [
            e.jsx(D.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              onClick: G,
              className: "fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]",
            }),
            e.jsx("div", {
              className:
                "fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 pointer-events-none",
              children: e.jsx(D.div, {
                initial: { opacity: 0, scale: 0.9, y: 20 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.9, y: 20 },
                transition: { type: "spring", damping: 25, stiffness: 300 },
                className:
                  "w-full max-w-lg pointer-events-auto max-h-[92vh] sm:max-h-[90vh] overflow-y-auto rounded-2xl",
                style: { WebkitOverflowScrolling: "touch" },
                children: e.jsxs("div", {
                  className:
                    "bg-gradient-to-br from-gray-900/95 via-gray-900/98 to-black/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden",
                  children: [
                    e.jsxs("div", {
                      className:
                        "relative px-4 sm:px-6 pt-4 sm:pt-5 pb-4 sm:pb-5 border-b border-white/10",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10",
                        }),
                        e.jsxs("div", {
                          className:
                            "relative flex items-start justify-between gap-3",
                          children: [
                            e.jsxs("div", {
                              className: "flex-1 min-w-0",
                              children: [
                                e.jsx("h3", {
                                  className:
                                    "text-base sm:text-lg font-bold text-white",
                                  children: n,
                                }),
                                e.jsxs("p", {
                                  className:
                                    "text-primary text-lg sm:text-xl font-bold",
                                  children: ["₹", d],
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className:
                                "flex items-center gap-1.5 sm:gap-2 flex-shrink-0 pt-1",
                              children: [1, 2, 3].map((u) =>
                                e.jsxs(
                                  "div",
                                  {
                                    className: "flex items-center",
                                    children: [
                                      e.jsx("div", {
                                        className: `w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${m >= u ? "bg-primary text-white shadow-lg shadow-primary/30" : "bg-white/10 text-gray-500"}`,
                                        children: m > u ? "✓" : u,
                                      }),
                                      u < 3 &&
                                        e.jsx("div", {
                                          className: `w-3 sm:w-4 h-0.5 mx-0.5 transition-all duration-300 ${m > u ? "bg-primary" : "bg-white/10"}`,
                                        }),
                                    ],
                                  },
                                  u,
                                ),
                              ),
                            }),
                            e.jsx("button", {
                              onClick: G,
                              className:
                                "flex-shrink-0 p-1.5 sm:p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors group ml-1",
                              children: e.jsx(he, {
                                className:
                                  "w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "p-4 sm:p-6",
                      children: e.jsxs(W, {
                        mode: "wait",
                        children: [
                          m === 1 &&
                            e.jsxs(
                              D.div,
                              {
                                variants: B,
                                initial: "initial",
                                animate: "animate",
                                exit: "exit",
                                transition: { duration: 0.25 },
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-2 mb-4",
                                    children: [
                                      e.jsx(De, {
                                        className: "w-5 h-5 text-primary",
                                      }),
                                      e.jsx("h4", {
                                        className:
                                          "text-white font-semibold text-sm sm:text-base",
                                        children: "Select a Date",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "flex items-center justify-between mb-4",
                                    children: [
                                      e.jsx("button", {
                                        onClick: () => _(-1),
                                        disabled: !Q(),
                                        className:
                                          "p-2 rounded-lg hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed",
                                        children: e.jsx(Oe, {
                                          className: "w-5 h-5 text-gray-400",
                                        }),
                                      }),
                                      e.jsxs("h5", {
                                        className:
                                          "text-white font-medium text-sm sm:text-base",
                                        children: [
                                          me[y.getMonth()],
                                          " ",
                                          y.getFullYear(),
                                        ],
                                      }),
                                      e.jsx("button", {
                                        onClick: () => _(1),
                                        className:
                                          "p-2 rounded-lg hover:bg-white/10 transition-colors",
                                        children: e.jsx(Fe, {
                                          className: "w-5 h-5 text-gray-400",
                                        }),
                                      }),
                                    ],
                                  }),
                                  e.jsx("div", {
                                    className: "grid grid-cols-7 gap-1 mb-2",
                                    children: rt.map((u) =>
                                      e.jsx(
                                        "div",
                                        {
                                          className:
                                            "text-center text-xs text-gray-500 font-medium py-1",
                                          children: u,
                                        },
                                        u,
                                      ),
                                    ),
                                  }),
                                  e.jsx("div", {
                                    className: "grid grid-cols-7 gap-1",
                                    children: L.map((u, w) => {
                                      if (u.isEmpty)
                                        return e.jsx(
                                          "div",
                                          { className: "h-9 sm:h-10" },
                                          `empty-${w}`,
                                        );
                                      const P = s === u.dateStr;
                                      return e.jsxs(
                                        "button",
                                        {
                                          onClick: () =>
                                            u.isAvailable && v(u.dateStr),
                                          disabled: !u.isAvailable,
                                          className: `h-9 sm:h-10 rounded-lg text-sm font-medium transition-all duration-200 relative ${P ? "bg-primary text-white shadow-lg shadow-primary/30 scale-110" : u.isAvailable ? "bg-white/5 text-white hover:bg-primary/20 hover:text-primary cursor-pointer hover:scale-105" : "text-gray-600 cursor-not-allowed"} ${u.isToday ? "ring-1 ring-primary/50" : ""}`,
                                          children: [
                                            u.date,
                                            u.isToday &&
                                              e.jsx("div", {
                                                className:
                                                  "absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary",
                                              }),
                                          ],
                                        },
                                        u.dateStr,
                                      );
                                    }),
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "flex items-center gap-3 sm:gap-4 mt-4 pt-4 border-t border-white/5 flex-wrap",
                                    children: [
                                      e.jsxs("div", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "w-3 h-3 rounded bg-white/5 border border-white/20",
                                          }),
                                          e.jsx("span", {
                                            className: "text-xs text-gray-400",
                                            children: "Available",
                                          }),
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "w-3 h-3 rounded bg-gray-800",
                                          }),
                                          e.jsx("span", {
                                            className: "text-xs text-gray-400",
                                            children: "Unavailable",
                                          }),
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "w-3 h-3 rounded bg-primary",
                                          }),
                                          e.jsx("span", {
                                            className: "text-xs text-gray-400",
                                            children: "Selected",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              "step1",
                            ),
                          m === 2 &&
                            e.jsxs(
                              D.div,
                              {
                                variants: B,
                                initial: "initial",
                                animate: "animate",
                                exit: "exit",
                                transition: { duration: 0.25 },
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-2 mb-2",
                                    children: [
                                      e.jsx(oe, {
                                        className: "w-5 h-5 text-primary",
                                      }),
                                      e.jsx("h4", {
                                        className:
                                          "text-white font-semibold text-sm sm:text-base",
                                        children: "Select a Time",
                                      }),
                                    ],
                                  }),
                                  s &&
                                    e.jsxs("p", {
                                      className: "text-gray-400 text-sm mb-5",
                                      children: ["📅 ", S(s)],
                                    }),
                                  k
                                    ? e.jsxs("div", {
                                        className:
                                          "flex flex-col items-center justify-center py-8",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin mb-2",
                                          }),
                                          e.jsx("p", {
                                            className: "text-xs text-gray-500",
                                            children:
                                              "Checking availability...",
                                          }),
                                        ],
                                      })
                                    : e.jsx("div", {
                                        className:
                                          "grid grid-cols-2 gap-2 sm:gap-3",
                                        children: K.timeSlots.map((u) => {
                                          const w = r === u.label,
                                            P = g.includes(u.label);
                                          return e.jsxs(
                                            "button",
                                            {
                                              disabled: P,
                                              onClick: () => T(u.label),
                                              className: `p-3 sm:p-4 rounded-xl text-sm font-medium transition-all duration-200 border ${P ? "bg-neutral-900 border-white/5 text-gray-600 cursor-not-allowed opacity-40" : w ? "bg-primary/20 border-primary text-primary shadow-lg shadow-primary/10 scale-105" : "bg-white/5 border-white/10 text-gray-300 hover:border-primary/30 hover:bg-primary/5 hover:text-white"}`,
                                              children: [
                                                e.jsx(oe, {
                                                  className: `w-4 h-4 mx-auto mb-1.5 ${w ? "text-primary" : P ? "text-gray-700" : "text-gray-500"}`,
                                                }),
                                                u.label,
                                              ],
                                            },
                                            u.time,
                                          );
                                        }),
                                      }),
                                  e.jsxs("button", {
                                    onClick: () => N(1),
                                    className:
                                      "flex items-center gap-1.5 mt-5 text-sm text-gray-400 hover:text-white transition-colors",
                                    children: [
                                      e.jsx(le, { className: "w-4 h-4" }),
                                      "Change date",
                                    ],
                                  }),
                                ],
                              },
                              "step2",
                            ),
                          m === 3 &&
                            e.jsxs(
                              D.div,
                              {
                                variants: B,
                                initial: "initial",
                                animate: "animate",
                                exit: "exit",
                                transition: { duration: 0.25 },
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-2 mb-2",
                                    children: [
                                      e.jsx(ce, {
                                        className: "w-5 h-5 text-primary",
                                      }),
                                      e.jsx("h4", {
                                        className:
                                          "text-white font-semibold text-sm sm:text-base",
                                        children: "Your Details",
                                      }),
                                    ],
                                  }),
                                  s &&
                                    r &&
                                    e.jsxs("p", {
                                      className: "text-gray-400 text-sm mb-5",
                                      children: ["📅 ", S(s), " • ⏰ ", r],
                                    }),
                                  e.jsxs("form", {
                                    onSubmit: O,
                                    className: "space-y-3 sm:space-y-4",
                                    children: [
                                      e.jsxs("div", {
                                        children: [
                                          e.jsxs("label", {
                                            className:
                                              "flex items-center gap-1.5 text-sm text-gray-400 mb-1.5",
                                            children: [
                                              e.jsx(ce, {
                                                className: "w-3.5 h-3.5",
                                              }),
                                              " Name *",
                                            ],
                                          }),
                                          e.jsx("input", {
                                            type: "text",
                                            name: "userName",
                                            value: o.userName,
                                            onChange: R,
                                            required: !0,
                                            placeholder: "Your full name",
                                            className:
                                              "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all",
                                          }),
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        children: [
                                          e.jsxs("label", {
                                            className:
                                              "flex items-center gap-1.5 text-sm text-gray-400 mb-1.5",
                                            children: [
                                              e.jsx(ze, {
                                                className: "w-3.5 h-3.5",
                                              }),
                                              " Email *",
                                            ],
                                          }),
                                          e.jsx("input", {
                                            type: "email",
                                            name: "userEmail",
                                            value: o.userEmail,
                                            onChange: R,
                                            required: !0,
                                            placeholder: "your@email.com",
                                            className:
                                              "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all",
                                          }),
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        children: [
                                          e.jsxs("label", {
                                            className:
                                              "flex items-center gap-1.5 text-sm text-gray-400 mb-1.5",
                                            children: [
                                              e.jsx(Le, {
                                                className: "w-3.5 h-3.5",
                                              }),
                                              " WhatsApp *",
                                            ],
                                          }),
                                          e.jsx("input", {
                                            type: "tel",
                                            name: "userWhatsapp",
                                            value: o.userWhatsapp,
                                            onChange: R,
                                            required: !0,
                                            placeholder: "+91 XXXXX XXXXX",
                                            className:
                                              "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all",
                                          }),
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        children: [
                                          e.jsxs("label", {
                                            className:
                                              "flex items-center gap-1.5 text-sm text-gray-400 mb-1.5",
                                            children: [
                                              e.jsx(Be, {
                                                className: "w-3.5 h-3.5",
                                              }),
                                              " What do you want to discuss? (optional)",
                                            ],
                                          }),
                                          e.jsx("textarea", {
                                            name: "userNotes",
                                            value: o.userNotes,
                                            onChange: R,
                                            rows: 3,
                                            placeholder:
                                              "Tell me briefly what you need help with...",
                                            className:
                                              "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none",
                                          }),
                                        ],
                                      }),
                                      I &&
                                        e.jsxs("div", {
                                          className:
                                            "text-red-500 text-xs text-center font-medium bg-red-500/10 border border-red-500/20 py-2.5 rounded-lg",
                                          children: ["⚠️ ", I],
                                        }),
                                      e.jsxs("button", {
                                        type: "submit",
                                        disabled: f,
                                        className:
                                          "w-full bg-gradient-to-r from-primary to-red-500 text-white py-3.5 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: [
                                          f
                                            ? "Reserving slot..."
                                            : `Proceed to Payment — ₹${d}`,
                                          !f &&
                                            e.jsx(ue, { className: "w-4 h-4" }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsxs("button", {
                                    onClick: () => N(2),
                                    className:
                                      "flex items-center gap-1.5 mt-4 text-sm text-gray-400 hover:text-white transition-colors",
                                    children: [
                                      e.jsx(le, { className: "w-4 h-4" }),
                                      "Change time",
                                    ],
                                  }),
                                ],
                              },
                              "step3",
                            ),
                        ],
                      }),
                    }),
                    e.jsx("div", {
                      className:
                        "px-4 sm:px-6 py-3 border-t border-white/10 bg-white/5",
                      children: e.jsx("p", {
                        className: "text-xs text-gray-500 text-center",
                        children:
                          "🔒 Your details are safe and only used for session scheduling",
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
    });
  },
  ct = () => {
    const [p, c] = j.useState(!1),
      [n, d] = j.useState(!1),
      [h, m] = j.useState(null),
      [N, y] = j.useState(null),
      [t, s] = j.useState([
        {
          planId: "power_session",
          name: "Power Session",
          amount: 999,
          duration: "30 Minutes",
          description: "Quick code review or specific problem solving.",
        },
        {
          planId: "deep_dive",
          name: "Deep Dive",
          amount: 1999,
          duration: "1 Hour",
          description: "Comprehensive career roadmap or architecture review.",
        },
      ]);
    j.useEffect(() => {
      (async () => {
        try {
          const o = await fetch("/api/pricing");
          if (o.ok) {
            const l = await o.json();
            l && l.length > 0 && s(l);
          }
        } catch (o) {
          console.error("Error fetching dynamic pricing, using defaults:", o);
        }
      })();
    }, []);
    const a = (i, o) => {
        (m({ name: i, amount: o }), c(!0));
      },
      r = (i) => {
        (y(i),
          c(!1),
          setTimeout(() => {
            d(!0);
          }, 200));
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs("section", {
          id: "mentorship",
          className: "py-16 relative overflow-hidden",
          children: [
            e.jsx("div", {
              className:
                "absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-primary/5 rounded-full blur-[50px] md:blur-[120px] translate-y-1/2 translate-x-1/2",
            }),
            e.jsx("div", {
              className: "container mx-auto px-6 relative z-10",
              children: e.jsxs("div", {
                className:
                  "flex flex-col lg:flex-row items-center justify-between gap-12",
                children: [
                  e.jsxs("div", {
                    className: "lg:w-1/2",
                    children: [
                      e.jsxs("h2", {
                        className:
                          "text-3xl md:text-5xl font-bold text-white mb-6 leading-tight",
                        children: [
                          "Accelerate Your ",
                          e.jsx("br", {}),
                          e.jsx("span", {
                            className: "text-primary",
                            children: "Tech Career",
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        className: "text-gray-400 text-lg mb-8 leading-relaxed",
                        children:
                          "Stop guessing and start growing. Get personalized guidance, detailed code reviews, and a roadmap tailored to your goals. Whether you're a student or a junior dev, I'll help you bridge the gap to professional excellence.",
                      }),
                      e.jsx("div", {
                        className: "flex flex-col sm:flex-row gap-4",
                        children: e.jsx("a", {
                          href: "#pricing-cards",
                          className: "aurora-button",
                          children: e.jsxs("span", {
                            className: "btn-content",
                            children: [
                              "Book a Session",
                              e.jsx("svg", {
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                className:
                                  "btn-icon w-6 h-6 animate-[float_1s_ease-in-out_infinite]",
                                children: e.jsx("path", {
                                  clipRule: "evenodd",
                                  d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
                                  fillRule: "evenodd",
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    id: "pricing-cards",
                    className:
                      "lg:w-1/2 w-full grid md:grid-cols-2 gap-6 scroll-mt-24",
                    children: t.map((i) => {
                      const o = i.planId === "power_session";
                      return e.jsxs(
                        _e,
                        {
                          className: `p-6 flex flex-col items-center text-center border-2 transition-colors ${o ? "border-primary/20 hover:border-primary/50" : "border-secondary/20 hover:border-secondary/50"}`,
                          children: [
                            e.jsx("div", {
                              className:
                                "w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-primary mb-4 shadow-[0_0_20px_rgba(244,81,30,0.4)] border border-primary/40",
                              children: o
                                ? e.jsx(He, { size: 24 })
                                : e.jsx(Ue, { size: 24 }),
                            }),
                            e.jsx("h3", {
                              className: "text-xl font-bold text-white mb-2",
                              children: i.name,
                            }),
                            e.jsxs("div", {
                              className: "text-3xl font-bold text-primary mb-1",
                              children: ["₹", i.amount],
                            }),
                            e.jsx("p", {
                              className: "text-sm text-gray-400 mb-4",
                              children: i.duration,
                            }),
                            e.jsx("p", {
                              className: "text-gray-400 text-sm mb-6",
                              children: i.description,
                            }),
                            e.jsx("button", {
                              onClick: () => a(i.name, i.amount),
                              className:
                                "w-full cursor-pointer bg-gradient-to-b from-red-600 to-red-700 shadow-[0px_4px_20px_0_rgba(220,38,38,.50)] px-5 py-2.5 rounded-xl border-[1px] border-red-500/50 text-white font-medium group flex justify-center",
                              children: e.jsxs("div", {
                                className: "relative overflow-hidden",
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "group-hover:-translate-y-6 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] text-sm",
                                    children: "Book Now",
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "absolute top-6 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] text-sm",
                                    children: "Book Now",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        },
                        i.planId,
                      );
                    }),
                  }),
                ],
              }),
            }),
            e.jsx("div", {
              className:
                "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none",
            }),
          ],
        }),
        e.jsx(it, {
          isOpen: p,
          onClose: () => c(!1),
          planName: h?.name || "",
          amount: h?.amount || 0,
          onProceedToPayment: r,
        }),
        e.jsx(at, {
          isOpen: n,
          onClose: () => d(!1),
          planName: h?.name || "",
          amount: h?.amount || 0,
          bookingDetails: N,
        }),
      ],
    });
  };
export { ct as default };
