console.log("인덱스JS")
! function(t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var r = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) n.d(i, r, function(e) {
                return t[e]
            }.bind(null, r));
        return i
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 2)
}([function(t, e) {
    var n = {
        isWebGLAvailable: function() {
            try {
                var t = document.createElement("canvas");
                return !(!window.WebGLRenderingContext || !t.getContext("webgl") && !t.getContext("experimental-webgl"))
            } catch (t) {
                return !1
            }
        },
        isWebGL2Available: function() {
            try {
                var t = document.createElement("canvas");
                return !(!window.WebGL2RenderingContext || !t.getContext("webgl2"))
            } catch (t) {
                return !1
            }
        },
        getWebGLErrorMessage: function() {
            return this.getErrorMessage(1)
        },
        getWebGL2ErrorMessage: function() {
            return this.getErrorMessage(2)
        },
        getErrorMessage: function(t) {
            var e = {
                    1: window.WebGLRenderingContext,
                    2: window.WebGL2RenderingContext
                },
                n = 'Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>',
                i = document.createElement("div");
            return i.id = "webgl-error-message", n = (n = e[t] ? n.replace("$0", "graphics card") : n.replace("$0", "browser")).replace("$1", {
                1: "WebGL",
                2: "WebGL 2"
            } [t]), i.innerHTML = n, i
        }
    };
    t.exports = {
        WEBGL: n
    }
}, function(t, e) {
    var n = document.getElementById("info-modal"),
        i = document.getElementById("open-modal-btn"),
        r = document.getElementsByClassName("close-modal-btn")[0];
    i.onclick = function() {
        n.style.display = "block"
    }, r.onclick = function() {
        n.style.display = "none"
    }, window.onclick = function(t) {
        t.target == n && (n.style.display = "none")
    }
}, function(t, e, n) {
    "use strict";
    n.r(e), void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Number.isInteger && (Number.isInteger = function(t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t
    }), void 0 === Math.sign && (Math.sign = function(t) {
        return t < 0 ? -1 : t > 0 ? 1 : +t
    }), "name" in Function.prototype == !1 && Object.defineProperty(Function.prototype, "name", {
        get: function() {
            return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
        }
    }), void 0 === Object.assign && (Object.assign = function(t) {
        if (null == t) throw new TypeError("Cannot convert undefined or null to object");
        for (var e = Object(t), n = 1; n < arguments.length; n++) {
            var i = arguments[n];
            if (null != i)
                for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
        }
        return e
    });

    function i() {}
    Object.assign(i.prototype, {
        addEventListener: function(t, e) {
            void 0 === this._listeners && (this._listeners = {});
            var n = this._listeners;
            void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e)
        },
        hasEventListener: function(t, e) {
            if (void 0 === this._listeners) return !1;
            var n = this._listeners;
            return void 0 !== n[t] && -1 !== n[t].indexOf(e)
        },
        removeEventListener: function(t, e) {
            if (void 0 !== this._listeners) {
                var n = this._listeners[t];
                if (void 0 !== n) {
                    var i = n.indexOf(e); - 1 !== i && n.splice(i, 1)
                }
            }
        },
        dispatchEvent: function(t) {
            if (void 0 !== this._listeners) {
                var e = this._listeners[t.type];
                if (void 0 !== e) {
                    t.target = this;
                    for (var n = e.slice(0), i = 0, r = n.length; i < r; i++) n[i].call(this, t)
                }
            }
        }
    });
    for (var r = [], a = 0; a < 256; a++) r[a] = (a < 16 ? "0" : "") + a.toString(16);
    var o, s = {
        DEG2RAD: Math.PI / 180,
        RAD2DEG: 180 / Math.PI,
        generateUUID: function() {
            var t = 4294967295 * Math.random() | 0,
                e = 4294967295 * Math.random() | 0,
                n = 4294967295 * Math.random() | 0,
                i = 4294967295 * Math.random() | 0;
            return (r[255 & t] + r[t >> 8 & 255] + r[t >> 16 & 255] + r[t >> 24 & 255] + "-" + r[255 & e] + r[e >> 8 & 255] + "-" + r[e >> 16 & 15 | 64] + r[e >> 24 & 255] + "-" + r[63 & n | 128] + r[n >> 8 & 255] + "-" + r[n >> 16 & 255] + r[n >> 24 & 255] + r[255 & i] + r[i >> 8 & 255] + r[i >> 16 & 255] + r[i >> 24 & 255]).toUpperCase()
        },
        clamp: function(t, e, n) {
            return Math.max(e, Math.min(n, t))
        },
        euclideanModulo: function(t, e) {
            return (t % e + e) % e
        },
        mapLinear: function(t, e, n, i, r) {
            return i + (t - e) * (r - i) / (n - e)
        },
        lerp: function(t, e, n) {
            return (1 - n) * t + n * e
        },
        smoothstep: function(t, e, n) {
            return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * (3 - 2 * t)
        },
        smootherstep: function(t, e, n) {
            return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10)
        },
        randInt: function(t, e) {
            return t + Math.floor(Math.random() * (e - t + 1))
        },
        randFloat: function(t, e) {
            return t + Math.random() * (e - t)
        },
        randFloatSpread: function(t) {
            return t * (.5 - Math.random())
        },
        degToRad: function(t) {
            return t * s.DEG2RAD
        },
        radToDeg: function(t) {
            return t * s.RAD2DEG
        },
        isPowerOfTwo: function(t) {
            return 0 == (t & t - 1) && 0 !== t
        },
        ceilPowerOfTwo: function(t) {
            return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2))
        },
        floorPowerOfTwo: function(t) {
            return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
        },
        setQuaternionFromProperEuler: function(t, e, n, i, r) {
            var a = Math.cos,
                o = Math.sin,
                s = a(n / 2),
                c = o(n / 2),
                l = a((e + i) / 2),
                h = o((e + i) / 2),
                u = a((e - i) / 2),
                p = o((e - i) / 2),
                d = a((i - e) / 2),
                f = o((i - e) / 2);
            "XYX" === r ? t.set(s * h, c * u, c * p, s * l) : "YZY" === r ? t.set(c * p, s * h, c * u, s * l) : "ZXZ" === r ? t.set(c * u, c * p, s * h, s * l) : "XZX" === r ? t.set(s * h, c * f, c * d, s * l) : "YXY" === r ? t.set(c * d, s * h, c * f, s * l) : "ZYZ" === r ? t.set(c * f, c * d, s * h, s * l) : console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order.")
        }
    };

    function c(t, e) {
        this.x = t || 0, this.y = e || 0
    }

    function l() {
        this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
    }
    Object.defineProperties(c.prototype, {
        width: {
            get: function() {
                return this.x
            },
            set: function(t) {
                this.x = t
            }
        },
        height: {
            get: function() {
                return this.y
            },
            set: function(t) {
                this.y = t
            }
        }
    }), Object.assign(c.prototype, {
        isVector2: !0,
        set: function(t, e) {
            return this.x = t, this.y = e, this
        },
        setScalar: function(t) {
            return this.x = t, this.y = t, this
        },
        setX: function(t) {
            return this.x = t, this
        },
        setY: function(t) {
            return this.y = t, this
        },
        setComponent: function(t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t)
            }
            return this
        },
        getComponent: function(t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw new Error("index is out of range: " + t)
            }
        },
        clone: function() {
            return new this.constructor(this.x, this.y)
        },
        copy: function(t) {
            return this.x = t.x, this.y = t.y, this
        },
        add: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this)
        },
        addScalar: function(t) {
            return this.x += t, this.y += t, this
        },
        addVectors: function(t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this
        },
        addScaledVector: function(t, e) {
            return this.x += t.x * e, this.y += t.y * e, this
        },
        sub: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this)
        },
        subScalar: function(t) {
            return this.x -= t, this.y -= t, this
        },
        subVectors: function(t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this
        },
        multiply: function(t) {
            return this.x *= t.x, this.y *= t.y, this
        },
        multiplyScalar: function(t) {
            return this.x *= t, this.y *= t, this
        },
        divide: function(t) {
            return this.x /= t.x, this.y /= t.y, this
        },
        divideScalar: function(t) {
            return this.multiplyScalar(1 / t)
        },
        applyMatrix3: function(t) {
            var e = this.x,
                n = this.y,
                i = t.elements;
            return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this
        },
        min: function(t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this
        },
        max: function(t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this
        },
        clamp: function(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this
        },
        clampScalar: function(t, e) {
            return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this
        },
        clampLength: function(t, e) {
            var n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
        },
        floor: function() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
        },
        round: function() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        },
        roundToZero: function() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
        },
        negate: function() {
            return this.x = -this.x, this.y = -this.y, this
        },
        dot: function(t) {
            return this.x * t.x + this.y * t.y
        },
        cross: function(t) {
            return this.x * t.y - this.y * t.x
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        },
        manhattanLength: function() {
            return Math.abs(this.x) + Math.abs(this.y)
        },
        normalize: function() {
            return this.divideScalar(this.length() || 1)
        },
        angle: function() {
            return Math.atan2(-this.y, -this.x) + Math.PI
        },
        distanceTo: function(t) {
            return Math.sqrt(this.distanceToSquared(t))
        },
        distanceToSquared: function(t) {
            var e = this.x - t.x,
                n = this.y - t.y;
            return e * e + n * n
        },
        manhattanDistanceTo: function(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
        },
        setLength: function(t) {
            return this.normalize().multiplyScalar(t)
        },
        lerp: function(t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
        },
        lerpVectors: function(t, e, n) {
            return this.subVectors(e, t).multiplyScalar(n).add(t)
        },
        equals: function(t) {
            return t.x === this.x && t.y === this.y
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t
        },
        fromBufferAttribute: function(t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this
        },
        rotateAround: function(t, e) {
            var n = Math.cos(e),
                i = Math.sin(e),
                r = this.x - t.x,
                a = this.y - t.y;
            return this.x = r * n - a * i + t.x, this.y = r * i + a * n + t.y, this
        }
    }), Object.assign(l.prototype, {
        isMatrix3: !0,
        set: function(t, e, n, i, r, a, o, s, c) {
            var l = this.elements;
            return l[0] = t, l[1] = i, l[2] = o, l[3] = e, l[4] = r, l[5] = s, l[6] = n, l[7] = a, l[8] = c, this
        },
        identity: function() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
        },
        clone: function() {
            return (new this.constructor).fromArray(this.elements)
        },
        copy: function(t) {
            var e = this.elements,
                n = t.elements;
            return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this
        },
        extractBasis: function(t, e, n) {
            return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this
        },
        setFromMatrix4: function(t) {
            var e = t.elements;
            return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
        },
        multiply: function(t) {
            return this.multiplyMatrices(this, t)
        },
        premultiply: function(t) {
            return this.multiplyMatrices(t, this)
        },
        multiplyMatrices: function(t, e) {
            var n = t.elements,
                i = e.elements,
                r = this.elements,
                a = n[0],
                o = n[3],
                s = n[6],
                c = n[1],
                l = n[4],
                h = n[7],
                u = n[2],
                p = n[5],
                d = n[8],
                f = i[0],
                m = i[3],
                g = i[6],
                v = i[1],
                y = i[4],
                x = i[7],
                b = i[2],
                _ = i[5],
                w = i[8];
            return r[0] = a * f + o * v + s * b, r[3] = a * m + o * y + s * _, r[6] = a * g + o * x + s * w, r[1] = c * f + l * v + h * b, r[4] = c * m + l * y + h * _, r[7] = c * g + l * x + h * w, r[2] = u * f + p * v + d * b, r[5] = u * m + p * y + d * _, r[8] = u * g + p * x + d * w, this
        },
        multiplyScalar: function(t) {
            var e = this.elements;
            return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
        },
        determinant: function() {
            var t = this.elements,
                e = t[0],
                n = t[1],
                i = t[2],
                r = t[3],
                a = t[4],
                o = t[5],
                s = t[6],
                c = t[7],
                l = t[8];
            return e * a * l - e * o * c - n * r * l + n * o * s + i * r * c - i * a * s
        },
        getInverse: function(t, e) {
            void 0 !== e && console.warn("THREE.Matrix3: .getInverse() can no longer be configured to throw on degenerate.");
            var n = t.elements,
                i = this.elements,
                r = n[0],
                a = n[1],
                o = n[2],
                s = n[3],
                c = n[4],
                l = n[5],
                h = n[6],
                u = n[7],
                p = n[8],
                d = p * c - l * u,
                f = l * h - p * s,
                m = u * s - c * h,
                g = r * d + a * f + o * m;
            if (0 === g) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
            var v = 1 / g;
            return i[0] = d * v, i[1] = (o * u - p * a) * v, i[2] = (l * a - o * c) * v, i[3] = f * v, i[4] = (p * r - o * h) * v, i[5] = (o * s - l * r) * v, i[6] = m * v, i[7] = (a * h - u * r) * v, i[8] = (c * r - a * s) * v, this
        },
        transpose: function() {
            var t, e = this.elements;
            return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
        },
        getNormalMatrix: function(t) {
            return this.setFromMatrix4(t).getInverse(this).transpose()
        },
        transposeIntoArray: function(t) {
            var e = this.elements;
            return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
        },
        setUvTransform: function(t, e, n, i, r, a, o) {
            var s = Math.cos(r),
                c = Math.sin(r);
            this.set(n * s, n * c, -n * (s * a + c * o) + a + t, -i * c, i * s, -i * (-c * a + s * o) + o + e, 0, 0, 1)
        },
        scale: function(t, e) {
            var n = this.elements;
            return n[0] *= t, n[3] *= t, n[6] *= t, n[1] *= e, n[4] *= e, n[7] *= e, this
        },
        rotate: function(t) {
            var e = Math.cos(t),
                n = Math.sin(t),
                i = this.elements,
                r = i[0],
                a = i[3],
                o = i[6],
                s = i[1],
                c = i[4],
                l = i[7];
            return i[0] = e * r + n * s, i[3] = e * a + n * c, i[6] = e * o + n * l, i[1] = -n * r + e * s, i[4] = -n * a + e * c, i[7] = -n * o + e * l, this
        },
        translate: function(t, e) {
            var n = this.elements;
            return n[0] += t * n[2], n[3] += t * n[5], n[6] += t * n[8], n[1] += e * n[2], n[4] += e * n[5], n[7] += e * n[8], this
        },
        equals: function(t) {
            for (var e = this.elements, n = t.elements, i = 0; i < 9; i++)
                if (e[i] !== n[i]) return !1;
            return !0
        },
        fromArray: function(t, e) {
            void 0 === e && (e = 0);
            for (var n = 0; n < 9; n++) this.elements[n] = t[n + e];
            return this
        },
        toArray: function(t, e) {
            void 0 === t && (t = []), void 0 === e && (e = 0);
            var n = this.elements;
            return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t
        }
    });
    var h = {
            getDataURL: function(t) {
                var e;
                if ("undefined" == typeof HTMLCanvasElement) return t.src;
                if (t instanceof HTMLCanvasElement) e = t;
                else {
                    void 0 === o && (o = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), o.width = t.width, o.height = t.height;
                    var n = o.getContext("2d");
                    t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), e = o
                }
                return e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png")
            }
        },
        u = 0;

    function p(t, e, n, i, r, a, o, h, d, f) {
        Object.defineProperty(this, "id", {
            value: u++
        }), this.uuid = s.generateUUID(), this.name = "", this.image = void 0 !== t ? t : p.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== e ? e : p.DEFAULT_MAPPING, this.wrapS = void 0 !== n ? n : 1001, this.wrapT = void 0 !== i ? i : 1001, this.magFilter = void 0 !== r ? r : 1006, this.minFilter = void 0 !== a ? a : 1008, this.anisotropy = void 0 !== d ? d : 1, this.format = void 0 !== o ? o : 1023, this.internalFormat = null, this.type = void 0 !== h ? h : 1009, this.offset = new c(0, 0), this.repeat = new c(1, 1), this.center = new c(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new l, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== f ? f : 3e3, this.version = 0, this.onUpdate = null
    }

    function d(t, e, n, i) {
        this.x = t || 0, this.y = e || 0, this.z = n || 0, this.w = void 0 !== i ? i : 1
    }

    function f(t, e, n) {
        this.width = t, this.height = e, this.scissor = new d(0, 0, t, e), this.scissorTest = !1, this.viewport = new d(0, 0, t, e), n = n || {}, this.texture = new p(void 0, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.image = {}, this.texture.image.width = t, this.texture.image.height = e, this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps, this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : 1006, this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer, this.stencilBuffer = void 0 === n.stencilBuffer || n.stencilBuffer, this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null
    }

    function m(t, e, n) {
        f.call(this, t, e, n), this.samples = 4
    }

    function g(t, e, n, i) {
        this._x = t || 0, this._y = e || 0, this._z = n || 0, this._w = void 0 !== i ? i : 1
    }
    p.DEFAULT_IMAGE = void 0, p.DEFAULT_MAPPING = 300, p.prototype = Object.assign(Object.create(i.prototype), {
        constructor: p,
        isTexture: !0,
        updateMatrix: function() {
            this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.name = t.name, this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this
        },
        toJSON: function(t) {
            var e = void 0 === t || "string" == typeof t;
            if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
            var n = {
                metadata: {
                    version: 4.5,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                mapping: this.mapping,
                repeat: [this.repeat.x, this.repeat.y],
                offset: [this.offset.x, this.offset.y],
                center: [this.center.x, this.center.y],
                rotation: this.rotation,
                wrap: [this.wrapS, this.wrapT],
                format: this.format,
                type: this.type,
                encoding: this.encoding,
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY,
                premultiplyAlpha: this.premultiplyAlpha,
                unpackAlignment: this.unpackAlignment
            };
            if (void 0 !== this.image) {
                var i = this.image;
                if (void 0 === i.uuid && (i.uuid = s.generateUUID()), !e && void 0 === t.images[i.uuid]) {
                    var r;
                    if (Array.isArray(i)) {
                        r = [];
                        for (var a = 0, o = i.length; a < o; a++) r.push(h.getDataURL(i[a]))
                    } else r = h.getDataURL(i);
                    t.images[i.uuid] = {
                        uuid: i.uuid,
                        url: r
                    }
                }
                n.image = i.uuid
            }
            return e || (t.textures[this.uuid] = n), n
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        },
        transformUv: function(t) {
            if (300 !== this.mapping) return t;
            if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
                case 1e3:
                    t.x = t.x - Math.floor(t.x);
                    break;
                case 1001:
                    t.x = t.x < 0 ? 0 : 1;
                    break;
                case 1002:
                    1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
            }
            if (t.y < 0 || t.y > 1) switch (this.wrapT) {
                case 1e3:
                    t.y = t.y - Math.floor(t.y);
                    break;
                case 1001:
                    t.y = t.y < 0 ? 0 : 1;
                    break;
                case 1002:
                    1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
            }
            return this.flipY && (t.y = 1 - t.y), t
        }
    }), Object.defineProperty(p.prototype, "needsUpdate", {
        set: function(t) {
            !0 === t && this.version++
        }
    }), Object.defineProperties(d.prototype, {
        width: {
            get: function() {
                return this.z
            },
            set: function(t) {
                this.z = t
            }
        },
        height: {
            get: function() {
                return this.w
            },
            set: function(t) {
                this.w = t
            }
        }
    }), Object.assign(d.prototype, {
        isVector4: !0,
        set: function(t, e, n, i) {
            return this.x = t, this.y = e, this.z = n, this.w = i, this
        },
        setScalar: function(t) {
            return this.x = t, this.y = t, this.z = t, this.w = t, this
        },
        setX: function(t) {
            return this.x = t, this
        },
        setY: function(t) {
            return this.y = t, this
        },
        setZ: function(t) {
            return this.z = t, this
        },
        setW: function(t) {
            return this.w = t, this
        },
        setComponent: function(t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                case 3:
                    this.w = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t)
            }
            return this
        },
        getComponent: function(t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw new Error("index is out of range: " + t)
            }
        },
        clone: function() {
            return new this.constructor(this.x, this.y, this.z, this.w)
        },
        copy: function(t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
        },
        add: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this)
        },
        addScalar: function(t) {
            return this.x += t, this.y += t, this.z += t, this.w += t, this
        },
        addVectors: function(t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
        },
        addScaledVector: function(t, e) {
            return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
        },
        sub: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this)
        },
        subScalar: function(t) {
            return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
        },
        subVectors: function(t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
        },
        multiplyScalar: function(t) {
            return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
        },
        applyMatrix4: function(t) {
            var e = this.x,
                n = this.y,
                i = this.z,
                r = this.w,
                a = t.elements;
            return this.x = a[0] * e + a[4] * n + a[8] * i + a[12] * r, this.y = a[1] * e + a[5] * n + a[9] * i + a[13] * r, this.z = a[2] * e + a[6] * n + a[10] * i + a[14] * r, this.w = a[3] * e + a[7] * n + a[11] * i + a[15] * r, this
        },
        divideScalar: function(t) {
            return this.multiplyScalar(1 / t)
        },
        setAxisAngleFromQuaternion: function(t) {
            this.w = 2 * Math.acos(t.w);
            var e = Math.sqrt(1 - t.w * t.w);
            return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
        },
        setAxisAngleFromRotationMatrix: function(t) {
            var e, n, i, r, a = t.elements,
                o = a[0],
                s = a[4],
                c = a[8],
                l = a[1],
                h = a[5],
                u = a[9],
                p = a[2],
                d = a[6],
                f = a[10];
            if (Math.abs(s - l) < .01 && Math.abs(c - p) < .01 && Math.abs(u - d) < .01) {
                if (Math.abs(s + l) < .1 && Math.abs(c + p) < .1 && Math.abs(u + d) < .1 && Math.abs(o + h + f - 3) < .1) return this.set(1, 0, 0, 0), this;
                e = Math.PI;
                var m = (o + 1) / 2,
                    g = (h + 1) / 2,
                    v = (f + 1) / 2,
                    y = (s + l) / 4,
                    x = (c + p) / 4,
                    b = (u + d) / 4;
                return m > g && m > v ? m < .01 ? (n = 0, i = .707106781, r = .707106781) : (i = y / (n = Math.sqrt(m)), r = x / n) : g > v ? g < .01 ? (n = .707106781, i = 0, r = .707106781) : (n = y / (i = Math.sqrt(g)), r = b / i) : v < .01 ? (n = .707106781, i = .707106781, r = 0) : (n = x / (r = Math.sqrt(v)), i = b / r), this.set(n, i, r, e), this
            }
            var _ = Math.sqrt((d - u) * (d - u) + (c - p) * (c - p) + (l - s) * (l - s));
            return Math.abs(_) < .001 && (_ = 1), this.x = (d - u) / _, this.y = (c - p) / _, this.z = (l - s) / _, this.w = Math.acos((o + h + f - 1) / 2), this
        },
        min: function(t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this
        },
        max: function(t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this
        },
        clamp: function(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this
        },
        clampScalar: function(t, e) {
            return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this
        },
        clampLength: function(t, e) {
            var n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
        },
        floor: function() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
        },
        round: function() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
        },
        roundToZero: function() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
        },
        negate: function() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
        },
        dot: function(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        },
        manhattanLength: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        },
        normalize: function() {
            return this.divideScalar(this.length() || 1)
        },
        setLength: function(t) {
            return this.normalize().multiplyScalar(t)
        },
        lerp: function(t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
        },
        lerpVectors: function(t, e, n) {
            return this.subVectors(e, t).multiplyScalar(n).add(t)
        },
        equals: function(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
        },
        fromBufferAttribute: function(t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this
        }
    }), f.prototype = Object.assign(Object.create(i.prototype), {
        constructor: f,
        isWebGLRenderTarget: !0,
        setSize: function(t, e) {
            this.width === t && this.height === e || (this.width = t, this.height = e, this.texture.image.width = t, this.texture.image.height = e, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.width = t.width, this.height = t.height, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }), m.prototype = Object.assign(Object.create(f.prototype), {
        constructor: m,
        isWebGLMultisampleRenderTarget: !0,
        copy: function(t) {
            return f.prototype.copy.call(this, t), this.samples = t.samples, this
        }
    }), Object.assign(g, {
        slerp: function(t, e, n, i) {
            return n.copy(t).slerp(e, i)
        },
        slerpFlat: function(t, e, n, i, r, a, o) {
            var s = n[i + 0],
                c = n[i + 1],
                l = n[i + 2],
                h = n[i + 3],
                u = r[a + 0],
                p = r[a + 1],
                d = r[a + 2],
                f = r[a + 3];
            if (h !== f || s !== u || c !== p || l !== d) {
                var m = 1 - o,
                    g = s * u + c * p + l * d + h * f,
                    v = g >= 0 ? 1 : -1,
                    y = 1 - g * g;
                if (y > Number.EPSILON) {
                    var x = Math.sqrt(y),
                        b = Math.atan2(x, g * v);
                    m = Math.sin(m * b) / x, o = Math.sin(o * b) / x
                }
                var _ = o * v;
                if (s = s * m + u * _, c = c * m + p * _, l = l * m + d * _, h = h * m + f * _, m === 1 - o) {
                    var w = 1 / Math.sqrt(s * s + c * c + l * l + h * h);
                    s *= w, c *= w, l *= w, h *= w
                }
            }
            t[e] = s, t[e + 1] = c, t[e + 2] = l, t[e + 3] = h
        }
    }), Object.defineProperties(g.prototype, {
        x: {
            get: function() {
                return this._x
            },
            set: function(t) {
                this._x = t, this._onChangeCallback()
            }
        },
        y: {
            get: function() {
                return this._y
            },
            set: function(t) {
                this._y = t, this._onChangeCallback()
            }
        },
        z: {
            get: function() {
                return this._z
            },
            set: function(t) {
                this._z = t, this._onChangeCallback()
            }
        },
        w: {
            get: function() {
                return this._w
            },
            set: function(t) {
                this._w = t, this._onChangeCallback()
            }
        }
    }), Object.assign(g.prototype, {
        isQuaternion: !0,
        set: function(t, e, n, i) {
            return this._x = t, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), this
        },
        clone: function() {
            return new this.constructor(this._x, this._y, this._z, this._w)
        },
        copy: function(t) {
            return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this
        },
        setFromEuler: function(t, e) {
            if (!t || !t.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
            var n = t._x,
                i = t._y,
                r = t._z,
                a = t.order,
                o = Math.cos,
                s = Math.sin,
                c = o(n / 2),
                l = o(i / 2),
                h = o(r / 2),
                u = s(n / 2),
                p = s(i / 2),
                d = s(r / 2);
            return "XYZ" === a ? (this._x = u * l * h + c * p * d, this._y = c * p * h - u * l * d, this._z = c * l * d + u * p * h, this._w = c * l * h - u * p * d) : "YXZ" === a ? (this._x = u * l * h + c * p * d, this._y = c * p * h - u * l * d, this._z = c * l * d - u * p * h, this._w = c * l * h + u * p * d) : "ZXY" === a ? (this._x = u * l * h - c * p * d, this._y = c * p * h + u * l * d, this._z = c * l * d + u * p * h, this._w = c * l * h - u * p * d) : "ZYX" === a ? (this._x = u * l * h - c * p * d, this._y = c * p * h + u * l * d, this._z = c * l * d - u * p * h, this._w = c * l * h + u * p * d) : "YZX" === a ? (this._x = u * l * h + c * p * d, this._y = c * p * h + u * l * d, this._z = c * l * d - u * p * h, this._w = c * l * h - u * p * d) : "XZY" === a && (this._x = u * l * h - c * p * d, this._y = c * p * h - u * l * d, this._z = c * l * d + u * p * h, this._w = c * l * h + u * p * d), !1 !== e && this._onChangeCallback(), this
        },
        setFromAxisAngle: function(t, e) {
            var n = e / 2,
                i = Math.sin(n);
            return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(n), this._onChangeCallback(), this
        },
        setFromRotationMatrix: function(t) {
            var e, n = t.elements,
                i = n[0],
                r = n[4],
                a = n[8],
                o = n[1],
                s = n[5],
                c = n[9],
                l = n[2],
                h = n[6],
                u = n[10],
                p = i + s + u;
            return p > 0 ? (e = .5 / Math.sqrt(p + 1), this._w = .25 / e, this._x = (h - c) * e, this._y = (a - l) * e, this._z = (o - r) * e) : i > s && i > u ? (e = 2 * Math.sqrt(1 + i - s - u), this._w = (h - c) / e, this._x = .25 * e, this._y = (r + o) / e, this._z = (a + l) / e) : s > u ? (e = 2 * Math.sqrt(1 + s - i - u), this._w = (a - l) / e, this._x = (r + o) / e, this._y = .25 * e, this._z = (c + h) / e) : (e = 2 * Math.sqrt(1 + u - i - s), this._w = (o - r) / e, this._x = (a + l) / e, this._y = (c + h) / e, this._z = .25 * e), this._onChangeCallback(), this
        },
        setFromUnitVectors: function(t, e) {
            var n = t.dot(e) + 1;
            return n < 1e-6 ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize()
        },
        angleTo: function(t) {
            return 2 * Math.acos(Math.abs(s.clamp(this.dot(t), -1, 1)))
        },
        rotateTowards: function(t, e) {
            var n = this.angleTo(t);
            if (0 === n) return this;
            var i = Math.min(1, e / n);
            return this.slerp(t, i), this
        },
        inverse: function() {
            return this.conjugate()
        },
        conjugate: function() {
            return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this
        },
        dot: function(t) {
            return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
        },
        lengthSq: function() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        },
        length: function() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
        },
        normalize: function() {
            var t = this.length();
            return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this
        },
        multiply: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
        },
        premultiply: function(t) {
            return this.multiplyQuaternions(t, this)
        },
        multiplyQuaternions: function(t, e) {
            var n = t._x,
                i = t._y,
                r = t._z,
                a = t._w,
                o = e._x,
                s = e._y,
                c = e._z,
                l = e._w;
            return this._x = n * l + a * o + i * c - r * s, this._y = i * l + a * s + r * o - n * c, this._z = r * l + a * c + n * s - i * o, this._w = a * l - n * o - i * s - r * c, this._onChangeCallback(), this
        },
        slerp: function(t, e) {
            if (0 === e) return this;
            if (1 === e) return this.copy(t);
            var n = this._x,
                i = this._y,
                r = this._z,
                a = this._w,
                o = a * t._w + n * t._x + i * t._y + r * t._z;
            if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1) return this._w = a, this._x = n, this._y = i, this._z = r, this;
            var s = 1 - o * o;
            if (s <= Number.EPSILON) {
                var c = 1 - e;
                return this._w = c * a + e * this._w, this._x = c * n + e * this._x, this._y = c * i + e * this._y, this._z = c * r + e * this._z, this.normalize(), this._onChangeCallback(), this
            }
            var l = Math.sqrt(s),
                h = Math.atan2(l, o),
                u = Math.sin((1 - e) * h) / l,
                p = Math.sin(e * h) / l;
            return this._w = a * u + this._w * p, this._x = n * u + this._x * p, this._y = i * u + this._y * p, this._z = r * u + this._z * p, this._onChangeCallback(), this
        },
        equals: function(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0), this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
        },
        fromBufferAttribute: function(t, e) {
            return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this
        },
        _onChange: function(t) {
            return this._onChangeCallback = t, this
        },
        _onChangeCallback: function() {}
    });
    var v = new x,
        y = new g;

    function x(t, e, n) {
        this.x = t || 0, this.y = e || 0, this.z = n || 0
    }
    Object.assign(x.prototype, {
        isVector3: !0,
        set: function(t, e, n) {
            return this.x = t, this.y = e, this.z = n, this
        },
        setScalar: function(t) {
            return this.x = t, this.y = t, this.z = t, this
        },
        setX: function(t) {
            return this.x = t, this
        },
        setY: function(t) {
            return this.y = t, this
        },
        setZ: function(t) {
            return this.z = t, this
        },
        setComponent: function(t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t)
            }
            return this
        },
        getComponent: function(t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw new Error("index is out of range: " + t)
            }
        },
        clone: function() {
            return new this.constructor(this.x, this.y, this.z)
        },
        copy: function(t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this
        },
        add: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this)
        },
        addScalar: function(t) {
            return this.x += t, this.y += t, this.z += t, this
        },
        addVectors: function(t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
        },
        addScaledVector: function(t, e) {
            return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
        },
        sub: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this)
        },
        subScalar: function(t) {
            return this.x -= t, this.y -= t, this.z -= t, this
        },
        subVectors: function(t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
        },
        multiply: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this)
        },
        multiplyScalar: function(t) {
            return this.x *= t, this.y *= t, this.z *= t, this
        },
        multiplyVectors: function(t, e) {
            return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
        },
        applyEuler: function(t) {
            return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(y.setFromEuler(t))
        },
        applyAxisAngle: function(t, e) {
            return this.applyQuaternion(y.setFromAxisAngle(t, e))
        },
        applyMatrix3: function(t) {
            var e = this.x,
                n = this.y,
                i = this.z,
                r = t.elements;
            return this.x = r[0] * e + r[3] * n + r[6] * i, this.y = r[1] * e + r[4] * n + r[7] * i, this.z = r[2] * e + r[5] * n + r[8] * i, this
        },
        applyNormalMatrix: function(t) {
            return this.applyMatrix3(t).normalize()
        },
        applyMatrix4: function(t) {
            var e = this.x,
                n = this.y,
                i = this.z,
                r = t.elements,
                a = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
            return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * a, this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * a, this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * a, this
        },
        applyQuaternion: function(t) {
            var e = this.x,
                n = this.y,
                i = this.z,
                r = t.x,
                a = t.y,
                o = t.z,
                s = t.w,
                c = s * e + a * i - o * n,
                l = s * n + o * e - r * i,
                h = s * i + r * n - a * e,
                u = -r * e - a * n - o * i;
            return this.x = c * s + u * -r + l * -o - h * -a, this.y = l * s + u * -a + h * -r - c * -o, this.z = h * s + u * -o + c * -a - l * -r, this
        },
        project: function(t) {
            return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
        },
        unproject: function(t) {
            return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)
        },
        transformDirection: function(t) {
            var e = this.x,
                n = this.y,
                i = this.z,
                r = t.elements;
            return this.x = r[0] * e + r[4] * n + r[8] * i, this.y = r[1] * e + r[5] * n + r[9] * i, this.z = r[2] * e + r[6] * n + r[10] * i, this.normalize()
        },
        divide: function(t) {
            return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
        },
        divideScalar: function(t) {
            return this.multiplyScalar(1 / t)
        },
        min: function(t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this
        },
        max: function(t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this
        },
        clamp: function(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this
        },
        clampScalar: function(t, e) {
            return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this
        },
        clampLength: function(t, e) {
            var n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
        },
        floor: function() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
        },
        round: function() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
        },
        roundToZero: function() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
        },
        negate: function() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
        },
        dot: function(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        },
        manhattanLength: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        },
        normalize: function() {
            return this.divideScalar(this.length() || 1)
        },
        setLength: function(t) {
            return this.normalize().multiplyScalar(t)
        },
        lerp: function(t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
        },
        lerpVectors: function(t, e, n) {
            return this.subVectors(e, t).multiplyScalar(n).add(t)
        },
        cross: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e)) : this.crossVectors(this, t)
        },
        crossVectors: function(t, e) {
            var n = t.x,
                i = t.y,
                r = t.z,
                a = e.x,
                o = e.y,
                s = e.z;
            return this.x = i * s - r * o, this.y = r * a - n * s, this.z = n * o - i * a, this
        },
        projectOnVector: function(t) {
            var e = t.lengthSq();
            if (0 === e) return this.set(0, 0, 0);
            var n = t.dot(this) / e;
            return this.copy(t).multiplyScalar(n)
        },
        projectOnPlane: function(t) {
            return v.copy(this).projectOnVector(t), this.sub(v)
        },
        reflect: function(t) {
            return this.sub(v.copy(t).multiplyScalar(2 * this.dot(t)))
        },
        angleTo: function(t) {
            var e = Math.sqrt(this.lengthSq() * t.lengthSq());
            if (0 === e) return Math.PI / 2;
            var n = this.dot(t) / e;
            return Math.acos(s.clamp(n, -1, 1))
        },
        distanceTo: function(t) {
            return Math.sqrt(this.distanceToSquared(t))
        },
        distanceToSquared: function(t) {
            var e = this.x - t.x,
                n = this.y - t.y,
                i = this.z - t.z;
            return e * e + n * n + i * i
        },
        manhattanDistanceTo: function(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
        },
        setFromSpherical: function(t) {
            return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
        },
        setFromSphericalCoords: function(t, e, n) {
            var i = Math.sin(e) * t;
            return this.x = i * Math.sin(n), this.y = Math.cos(e) * t, this.z = i * Math.cos(n), this
        },
        setFromCylindrical: function(t) {
            return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
        },
        setFromCylindricalCoords: function(t, e, n) {
            return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this
        },
        setFromMatrixPosition: function(t) {
            var e = t.elements;
            return this.x = e[12], this.y = e[13], this.z = e[14], this
        },
        setFromMatrixScale: function(t) {
            var e = this.setFromMatrixColumn(t, 0).length(),
                n = this.setFromMatrixColumn(t, 1).length(),
                i = this.setFromMatrixColumn(t, 2).length();
            return this.x = e, this.y = n, this.z = i, this
        },
        setFromMatrixColumn: function(t, e) {
            return this.fromArray(t.elements, 4 * e)
        },
        setFromMatrix3Column: function(t, e) {
            return this.fromArray(t.elements, 3 * e)
        },
        equals: function(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
        },
        fromBufferAttribute: function(t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this
        }
    });
    var b = new x,
        _ = new A,
        w = new x(0, 0, 0),
        M = new x(1, 1, 1),
        S = new x,
        T = new x,
        E = new x;

    function A() {
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
    }
    Object.assign(A.prototype, {
        isMatrix4: !0,
        set: function(t, e, n, i, r, a, o, s, c, l, h, u, p, d, f, m) {
            var g = this.elements;
            return g[0] = t, g[4] = e, g[8] = n, g[12] = i, g[1] = r, g[5] = a, g[9] = o, g[13] = s, g[2] = c, g[6] = l, g[10] = h, g[14] = u, g[3] = p, g[7] = d, g[11] = f, g[15] = m, this
        },
        identity: function() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        },
        clone: function() {
            return (new A).fromArray(this.elements)
        },
        copy: function(t) {
            var e = this.elements,
                n = t.elements;
            return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this
        },
        copyPosition: function(t) {
            var e = this.elements,
                n = t.elements;
            return e[12] = n[12], e[13] = n[13], e[14] = n[14], this
        },
        extractBasis: function(t, e, n) {
            return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this
        },
        makeBasis: function(t, e, n) {
            return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this
        },
        extractRotation: function(t) {
            var e = this.elements,
                n = t.elements,
                i = 1 / b.setFromMatrixColumn(t, 0).length(),
                r = 1 / b.setFromMatrixColumn(t, 1).length(),
                a = 1 / b.setFromMatrixColumn(t, 2).length();
            return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * a, e[9] = n[9] * a, e[10] = n[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
        },
        makeRotationFromEuler: function(t) {
            t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            var e = this.elements,
                n = t.x,
                i = t.y,
                r = t.z,
                a = Math.cos(n),
                o = Math.sin(n),
                s = Math.cos(i),
                c = Math.sin(i),
                l = Math.cos(r),
                h = Math.sin(r);
            if ("XYZ" === t.order) {
                var u = a * l,
                    p = a * h,
                    d = o * l,
                    f = o * h;
                e[0] = s * l, e[4] = -s * h, e[8] = c, e[1] = p + d * c, e[5] = u - f * c, e[9] = -o * s, e[2] = f - u * c, e[6] = d + p * c, e[10] = a * s
            } else if ("YXZ" === t.order) {
                var m = s * l,
                    g = s * h,
                    v = c * l,
                    y = c * h;
                e[0] = m + y * o, e[4] = v * o - g, e[8] = a * c, e[1] = a * h, e[5] = a * l, e[9] = -o, e[2] = g * o - v, e[6] = y + m * o, e[10] = a * s
            } else if ("ZXY" === t.order) {
                m = s * l, g = s * h, v = c * l, y = c * h;
                e[0] = m - y * o, e[4] = -a * h, e[8] = v + g * o, e[1] = g + v * o, e[5] = a * l, e[9] = y - m * o, e[2] = -a * c, e[6] = o, e[10] = a * s
            } else if ("ZYX" === t.order) {
                u = a * l, p = a * h, d = o * l, f = o * h;
                e[0] = s * l, e[4] = d * c - p, e[8] = u * c + f, e[1] = s * h, e[5] = f * c + u, e[9] = p * c - d, e[2] = -c, e[6] = o * s, e[10] = a * s
            } else if ("YZX" === t.order) {
                var x = a * s,
                    b = a * c,
                    _ = o * s,
                    w = o * c;
                e[0] = s * l, e[4] = w - x * h, e[8] = _ * h + b, e[1] = h, e[5] = a * l, e[9] = -o * l, e[2] = -c * l, e[6] = b * h + _, e[10] = x - w * h
            } else if ("XZY" === t.order) {
                x = a * s, b = a * c, _ = o * s, w = o * c;
                e[0] = s * l, e[4] = -h, e[8] = c * l, e[1] = x * h + w, e[5] = a * l, e[9] = b * h - _, e[2] = _ * h - b, e[6] = o * l, e[10] = w * h + x
            }
            return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
        },
        makeRotationFromQuaternion: function(t) {
            return this.compose(w, t, M)
        },
        lookAt: function(t, e, n) {
            var i = this.elements;
            return E.subVectors(t, e), 0 === E.lengthSq() && (E.z = 1), E.normalize(), S.crossVectors(n, E), 0 === S.lengthSq() && (1 === Math.abs(n.z) ? E.x += 1e-4 : E.z += 1e-4, E.normalize(), S.crossVectors(n, E)), S.normalize(), T.crossVectors(E, S), i[0] = S.x, i[4] = T.x, i[8] = E.x, i[1] = S.y, i[5] = T.y, i[9] = E.y, i[2] = S.z, i[6] = T.z, i[10] = E.z, this
        },
        multiply: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
        },
        premultiply: function(t) {
            return this.multiplyMatrices(t, this)
        },
        multiplyMatrices: function(t, e) {
            var n = t.elements,
                i = e.elements,
                r = this.elements,
                a = n[0],
                o = n[4],
                s = n[8],
                c = n[12],
                l = n[1],
                h = n[5],
                u = n[9],
                p = n[13],
                d = n[2],
                f = n[6],
                m = n[10],
                g = n[14],
                v = n[3],
                y = n[7],
                x = n[11],
                b = n[15],
                _ = i[0],
                w = i[4],
                M = i[8],
                S = i[12],
                T = i[1],
                E = i[5],
                A = i[9],
                L = i[13],
                R = i[2],
                P = i[6],
                C = i[10],
                O = i[14],
                D = i[3],
                N = i[7],
                I = i[11],
                z = i[15];
            return r[0] = a * _ + o * T + s * R + c * D, r[4] = a * w + o * E + s * P + c * N, r[8] = a * M + o * A + s * C + c * I, r[12] = a * S + o * L + s * O + c * z, r[1] = l * _ + h * T + u * R + p * D, r[5] = l * w + h * E + u * P + p * N, r[9] = l * M + h * A + u * C + p * I, r[13] = l * S + h * L + u * O + p * z, r[2] = d * _ + f * T + m * R + g * D, r[6] = d * w + f * E + m * P + g * N, r[10] = d * M + f * A + m * C + g * I, r[14] = d * S + f * L + m * O + g * z, r[3] = v * _ + y * T + x * R + b * D, r[7] = v * w + y * E + x * P + b * N, r[11] = v * M + y * A + x * C + b * I, r[15] = v * S + y * L + x * O + b * z, this
        },
        multiplyScalar: function(t) {
            var e = this.elements;
            return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
        },
        determinant: function() {
            var t = this.elements,
                e = t[0],
                n = t[4],
                i = t[8],
                r = t[12],
                a = t[1],
                o = t[5],
                s = t[9],
                c = t[13],
                l = t[2],
                h = t[6],
                u = t[10],
                p = t[14];
            return t[3] * (+r * s * h - i * c * h - r * o * u + n * c * u + i * o * p - n * s * p) + t[7] * (+e * s * p - e * c * u + r * a * u - i * a * p + i * c * l - r * s * l) + t[11] * (+e * c * h - e * o * p - r * a * h + n * a * p + r * o * l - n * c * l) + t[15] * (-i * o * l - e * s * h + e * o * u + i * a * h - n * a * u + n * s * l)
        },
        transpose: function() {
            var t, e = this.elements;
            return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
        },
        setPosition: function(t, e, n) {
            var i = this.elements;
            return t.isVector3 ? (i[12] = t.x, i[13] = t.y, i[14] = t.z) : (i[12] = t, i[13] = e, i[14] = n), this
        },
        getInverse: function(t, e) {
            void 0 !== e && console.warn("THREE.Matrix4: .getInverse() can no longer be configured to throw on degenerate.");
            var n = this.elements,
                i = t.elements,
                r = i[0],
                a = i[1],
                o = i[2],
                s = i[3],
                c = i[4],
                l = i[5],
                h = i[6],
                u = i[7],
                p = i[8],
                d = i[9],
                f = i[10],
                m = i[11],
                g = i[12],
                v = i[13],
                y = i[14],
                x = i[15],
                b = d * y * u - v * f * u + v * h * m - l * y * m - d * h * x + l * f * x,
                _ = g * f * u - p * y * u - g * h * m + c * y * m + p * h * x - c * f * x,
                w = p * v * u - g * d * u + g * l * m - c * v * m - p * l * x + c * d * x,
                M = g * d * h - p * v * h - g * l * f + c * v * f + p * l * y - c * d * y,
                S = r * b + a * _ + o * w + s * M;
            if (0 === S) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            var T = 1 / S;
            return n[0] = b * T, n[1] = (v * f * s - d * y * s - v * o * m + a * y * m + d * o * x - a * f * x) * T, n[2] = (l * y * s - v * h * s + v * o * u - a * y * u - l * o * x + a * h * x) * T, n[3] = (d * h * s - l * f * s - d * o * u + a * f * u + l * o * m - a * h * m) * T, n[4] = _ * T, n[5] = (p * y * s - g * f * s + g * o * m - r * y * m - p * o * x + r * f * x) * T, n[6] = (g * h * s - c * y * s - g * o * u + r * y * u + c * o * x - r * h * x) * T, n[7] = (c * f * s - p * h * s + p * o * u - r * f * u - c * o * m + r * h * m) * T, n[8] = w * T, n[9] = (g * d * s - p * v * s - g * a * m + r * v * m + p * a * x - r * d * x) * T, n[10] = (c * v * s - g * l * s + g * a * u - r * v * u - c * a * x + r * l * x) * T, n[11] = (p * l * s - c * d * s - p * a * u + r * d * u + c * a * m - r * l * m) * T, n[12] = M * T, n[13] = (p * v * o - g * d * o + g * a * f - r * v * f - p * a * y + r * d * y) * T, n[14] = (g * l * o - c * v * o - g * a * h + r * v * h + c * a * y - r * l * y) * T, n[15] = (c * d * o - p * l * o + p * a * h - r * d * h - c * a * f + r * l * f) * T, this
        },
        scale: function(t) {
            var e = this.elements,
                n = t.x,
                i = t.y,
                r = t.z;
            return e[0] *= n, e[4] *= i, e[8] *= r, e[1] *= n, e[5] *= i, e[9] *= r, e[2] *= n, e[6] *= i, e[10] *= r, e[3] *= n, e[7] *= i, e[11] *= r, this
        },
        getMaxScaleOnAxis: function() {
            var t = this.elements,
                e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
                n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
                i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
            return Math.sqrt(Math.max(e, n, i))
        },
        makeTranslation: function(t, e, n) {
            return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this
        },
        makeRotationX: function(t) {
            var e = Math.cos(t),
                n = Math.sin(t);
            return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this
        },
        makeRotationY: function(t) {
            var e = Math.cos(t),
                n = Math.sin(t);
            return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this
        },
        makeRotationZ: function(t) {
            var e = Math.cos(t),
                n = Math.sin(t);
            return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        },
        makeRotationAxis: function(t, e) {
            var n = Math.cos(e),
                i = Math.sin(e),
                r = 1 - n,
                a = t.x,
                o = t.y,
                s = t.z,
                c = r * a,
                l = r * o;
            return this.set(c * a + n, c * o - i * s, c * s + i * o, 0, c * o + i * s, l * o + n, l * s - i * a, 0, c * s - i * o, l * s + i * a, r * s * s + n, 0, 0, 0, 0, 1), this
        },
        makeScale: function(t, e, n) {
            return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this
        },
        makeShear: function(t, e, n) {
            return this.set(1, e, n, 0, t, 1, n, 0, t, e, 1, 0, 0, 0, 0, 1), this
        },
        compose: function(t, e, n) {
            var i = this.elements,
                r = e._x,
                a = e._y,
                o = e._z,
                s = e._w,
                c = r + r,
                l = a + a,
                h = o + o,
                u = r * c,
                p = r * l,
                d = r * h,
                f = a * l,
                m = a * h,
                g = o * h,
                v = s * c,
                y = s * l,
                x = s * h,
                b = n.x,
                _ = n.y,
                w = n.z;
            return i[0] = (1 - (f + g)) * b, i[1] = (p + x) * b, i[2] = (d - y) * b, i[3] = 0, i[4] = (p - x) * _, i[5] = (1 - (u + g)) * _, i[6] = (m + v) * _, i[7] = 0, i[8] = (d + y) * w, i[9] = (m - v) * w, i[10] = (1 - (u + f)) * w, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this
        },
        decompose: function(t, e, n) {
            var i = this.elements,
                r = b.set(i[0], i[1], i[2]).length(),
                a = b.set(i[4], i[5], i[6]).length(),
                o = b.set(i[8], i[9], i[10]).length();
            this.determinant() < 0 && (r = -r), t.x = i[12], t.y = i[13], t.z = i[14], _.copy(this);
            var s = 1 / r,
                c = 1 / a,
                l = 1 / o;
            return _.elements[0] *= s, _.elements[1] *= s, _.elements[2] *= s, _.elements[4] *= c, _.elements[5] *= c, _.elements[6] *= c, _.elements[8] *= l, _.elements[9] *= l, _.elements[10] *= l, e.setFromRotationMatrix(_), n.x = r, n.y = a, n.z = o, this
        },
        makePerspective: function(t, e, n, i, r, a) {
            void 0 === a && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
            var o = this.elements,
                s = 2 * r / (e - t),
                c = 2 * r / (n - i),
                l = (e + t) / (e - t),
                h = (n + i) / (n - i),
                u = -(a + r) / (a - r),
                p = -2 * a * r / (a - r);
            return o[0] = s, o[4] = 0, o[8] = l, o[12] = 0, o[1] = 0, o[5] = c, o[9] = h, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = u, o[14] = p, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this
        },
        makeOrthographic: function(t, e, n, i, r, a) {
            var o = this.elements,
                s = 1 / (e - t),
                c = 1 / (n - i),
                l = 1 / (a - r),
                h = (e + t) * s,
                u = (n + i) * c,
                p = (a + r) * l;
            return o[0] = 2 * s, o[4] = 0, o[8] = 0, o[12] = -h, o[1] = 0, o[5] = 2 * c, o[9] = 0, o[13] = -u, o[2] = 0, o[6] = 0, o[10] = -2 * l, o[14] = -p, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
        },
        equals: function(t) {
            for (var e = this.elements, n = t.elements, i = 0; i < 16; i++)
                if (e[i] !== n[i]) return !1;
            return !0
        },
        fromArray: function(t, e) {
            void 0 === e && (e = 0);
            for (var n = 0; n < 16; n++) this.elements[n] = t[n + e];
            return this
        },
        toArray: function(t, e) {
            void 0 === t && (t = []), void 0 === e && (e = 0);
            var n = this.elements;
            return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t
        }
    });
    var L = new A,
        R = new g;

    function P(t, e, n, i) {
        this._x = t || 0, this._y = e || 0, this._z = n || 0, this._order = i || P.DefaultOrder
    }

    function C() {
        this.mask = 1
    }
    P.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], P.DefaultOrder = "XYZ", Object.defineProperties(P.prototype, {
        x: {
            get: function() {
                return this._x
            },
            set: function(t) {
                this._x = t, this._onChangeCallback()
            }
        },
        y: {
            get: function() {
                return this._y
            },
            set: function(t) {
                this._y = t, this._onChangeCallback()
            }
        },
        z: {
            get: function() {
                return this._z
            },
            set: function(t) {
                this._z = t, this._onChangeCallback()
            }
        },
        order: {
            get: function() {
                return this._order
            },
            set: function(t) {
                this._order = t, this._onChangeCallback()
            }
        }
    }), Object.assign(P.prototype, {
        isEuler: !0,
        set: function(t, e, n, i) {
            return this._x = t, this._y = e, this._z = n, this._order = i || this._order, this._onChangeCallback(), this
        },
        clone: function() {
            return new this.constructor(this._x, this._y, this._z, this._order)
        },
        copy: function(t) {
            return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this
        },
        setFromRotationMatrix: function(t, e, n) {
            var i = s.clamp,
                r = t.elements,
                a = r[0],
                o = r[4],
                c = r[8],
                l = r[1],
                h = r[5],
                u = r[9],
                p = r[2],
                d = r[6],
                f = r[10];
            return "XYZ" === (e = e || this._order) ? (this._y = Math.asin(i(c, -1, 1)), Math.abs(c) < .9999999 ? (this._x = Math.atan2(-u, f), this._z = Math.atan2(-o, a)) : (this._x = Math.atan2(d, h), this._z = 0)) : "YXZ" === e ? (this._x = Math.asin(-i(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(c, f), this._z = Math.atan2(l, h)) : (this._y = Math.atan2(-p, a), this._z = 0)) : "ZXY" === e ? (this._x = Math.asin(i(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-p, f), this._z = Math.atan2(-o, h)) : (this._y = 0, this._z = Math.atan2(l, a))) : "ZYX" === e ? (this._y = Math.asin(-i(p, -1, 1)), Math.abs(p) < .9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(l, a)) : (this._x = 0, this._z = Math.atan2(-o, h))) : "YZX" === e ? (this._z = Math.asin(i(l, -1, 1)), Math.abs(l) < .9999999 ? (this._x = Math.atan2(-u, h), this._y = Math.atan2(-p, a)) : (this._x = 0, this._y = Math.atan2(c, f))) : "XZY" === e ? (this._z = Math.asin(-i(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(d, h), this._y = Math.atan2(c, a)) : (this._x = Math.atan2(-u, f), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + e), this._order = e, !1 !== n && this._onChangeCallback(), this
        },
        setFromQuaternion: function(t, e, n) {
            return L.makeRotationFromQuaternion(t), this.setFromRotationMatrix(L, e, n)
        },
        setFromVector3: function(t, e) {
            return this.set(t.x, t.y, t.z, e || this._order)
        },
        reorder: function(t) {
            return R.setFromEuler(this), this.setFromQuaternion(R, t)
        },
        equals: function(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
        },
        fromArray: function(t) {
            return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this._onChangeCallback(), this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
        },
        toVector3: function(t) {
            return t ? t.set(this._x, this._y, this._z) : new x(this._x, this._y, this._z)
        },
        _onChange: function(t) {
            return this._onChangeCallback = t, this
        },
        _onChangeCallback: function() {}
    }), Object.assign(C.prototype, {
        set: function(t) {
            this.mask = 1 << t | 0
        },
        enable: function(t) {
            this.mask |= 1 << t | 0
        },
        enableAll: function() {
            this.mask = -1
        },
        toggle: function(t) {
            this.mask ^= 1 << t | 0
        },
        disable: function(t) {
            this.mask &= ~(1 << t | 0)
        },
        disableAll: function() {
            this.mask = 0
        },
        test: function(t) {
            return 0 != (this.mask & t.mask)
        }
    });
    var O = 0,
        D = new x,
        N = new g,
        I = new A,
        z = new x,
        U = new x,
        B = new x,
        F = new g,
        G = new x(1, 0, 0),
        H = new x(0, 1, 0),
        V = new x(0, 0, 1),
        k = {
            type: "added"
        },
        j = {
            type: "removed"
        };

    function W() {
        Object.defineProperty(this, "id", {
            value: O++
        }), this.uuid = s.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = W.DefaultUp.clone();
        var t = new x,
            e = new P,
            n = new g,
            i = new x(1, 1, 1);
        e._onChange((function() {
            n.setFromEuler(e, !1)
        })), n._onChange((function() {
            e.setFromQuaternion(n, void 0, !1)
        })), Object.defineProperties(this, {
            position: {
                configurable: !0,
                enumerable: !0,
                value: t
            },
            rotation: {
                configurable: !0,
                enumerable: !0,
                value: e
            },
            quaternion: {
                configurable: !0,
                enumerable: !0,
                value: n
            },
            scale: {
                configurable: !0,
                enumerable: !0,
                value: i
            },
            modelViewMatrix: {
                value: new A
            },
            normalMatrix: {
                value: new l
            }
        }), this.matrix = new A, this.matrixWorld = new A, this.matrixAutoUpdate = W.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new C, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
    }

    function q() {
        W.call(this), this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
            detail: this
        }))
    }
    W.DefaultUp = new x(0, 1, 0), W.DefaultMatrixAutoUpdate = !0, W.prototype = Object.assign(Object.create(i.prototype), {
        constructor: W,
        isObject3D: !0,
        onBeforeRender: function() {},
        onAfterRender: function() {},
        applyMatrix4: function(t) {
            this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale)
        },
        applyQuaternion: function(t) {
            return this.quaternion.premultiply(t), this
        },
        setRotationFromAxisAngle: function(t, e) {
            this.quaternion.setFromAxisAngle(t, e)
        },
        setRotationFromEuler: function(t) {
            this.quaternion.setFromEuler(t, !0)
        },
        setRotationFromMatrix: function(t) {
            this.quaternion.setFromRotationMatrix(t)
        },
        setRotationFromQuaternion: function(t) {
            this.quaternion.copy(t)
        },
        rotateOnAxis: function(t, e) {
            return N.setFromAxisAngle(t, e), this.quaternion.multiply(N), this
        },
        rotateOnWorldAxis: function(t, e) {
            return N.setFromAxisAngle(t, e), this.quaternion.premultiply(N), this
        },
        rotateX: function(t) {
            return this.rotateOnAxis(G, t)
        },
        rotateY: function(t) {
            return this.rotateOnAxis(H, t)
        },
        rotateZ: function(t) {
            return this.rotateOnAxis(V, t)
        },
        translateOnAxis: function(t, e) {
            return D.copy(t).applyQuaternion(this.quaternion), this.position.add(D.multiplyScalar(e)), this
        },
        translateX: function(t) {
            return this.translateOnAxis(G, t)
        },
        translateY: function(t) {
            return this.translateOnAxis(H, t)
        },
        translateZ: function(t) {
            return this.translateOnAxis(V, t)
        },
        localToWorld: function(t) {
            return t.applyMatrix4(this.matrixWorld)
        },
        worldToLocal: function(t) {
            return t.applyMatrix4(I.getInverse(this.matrixWorld))
        },
        lookAt: function(t, e, n) {
            t.isVector3 ? z.copy(t) : z.set(t, e, n);
            var i = this.parent;
            this.updateWorldMatrix(!0, !1), U.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? I.lookAt(U, z, this.up) : I.lookAt(z, U, this.up), this.quaternion.setFromRotationMatrix(I), i && (I.extractRotation(i.matrixWorld), N.setFromRotationMatrix(I), this.quaternion.premultiply(N.inverse()))
        },
        add: function(t) {
            if (arguments.length > 1) {
                for (var e = 0; e < arguments.length; e++) this.add(arguments[e]);
                return this
            }
            return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(k)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this)
        },
        remove: function(t) {
            if (arguments.length > 1) {
                for (var e = 0; e < arguments.length; e++) this.remove(arguments[e]);
                return this
            }
            var n = this.children.indexOf(t);
            return -1 !== n && (t.parent = null, this.children.splice(n, 1), t.dispatchEvent(j)), this
        },
        attach: function(t) {
            return this.updateWorldMatrix(!0, !1), I.getInverse(this.matrixWorld), null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), I.multiply(t.parent.matrixWorld)), t.applyMatrix4(I), t.updateWorldMatrix(!1, !1), this.add(t), this
        },
        getObjectById: function(t) {
            return this.getObjectByProperty("id", t)
        },
        getObjectByName: function(t) {
            return this.getObjectByProperty("name", t)
        },
        getObjectByProperty: function(t, e) {
            if (this[t] === e) return this;
            for (var n = 0, i = this.children.length; n < i; n++) {
                var r = this.children[n].getObjectByProperty(t, e);
                if (void 0 !== r) return r
            }
        },
        getWorldPosition: function(t) {
            return void 0 === t && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), t = new x), this.updateMatrixWorld(!0), t.setFromMatrixPosition(this.matrixWorld)
        },
        getWorldQuaternion: function(t) {
            return void 0 === t && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), t = new g), this.updateMatrixWorld(!0), this.matrixWorld.decompose(U, t, B), t
        },
        getWorldScale: function(t) {
            return void 0 === t && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), t = new x), this.updateMatrixWorld(!0), this.matrixWorld.decompose(U, F, t), t
        },
        getWorldDirection: function(t) {
            void 0 === t && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), t = new x), this.updateMatrixWorld(!0);
            var e = this.matrixWorld.elements;
            return t.set(e[8], e[9], e[10]).normalize()
        },
        raycast: function() {},
        traverse: function(t) {
            t(this);
            for (var e = this.children, n = 0, i = e.length; n < i; n++) e[n].traverse(t)
        },
        traverseVisible: function(t) {
            if (!1 !== this.visible) {
                t(this);
                for (var e = this.children, n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t)
            }
        },
        traverseAncestors: function(t) {
            var e = this.parent;
            null !== e && (t(e), e.traverseAncestors(t))
        },
        updateMatrix: function() {
            this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
        },
        updateMatrixWorld: function(t) {
            this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
            for (var e = this.children, n = 0, i = e.length; n < i; n++) e[n].updateMatrixWorld(t)
        },
        updateWorldMatrix: function(t, e) {
            var n = this.parent;
            if (!0 === t && null !== n && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e)
                for (var i = this.children, r = 0, a = i.length; r < a; r++) i[r].updateWorldMatrix(!1, !0)
        },
        toJSON: function(t) {
            var e = void 0 === t || "string" == typeof t,
                n = {};
            e && (t = {
                geometries: {},
                materials: {},
                textures: {},
                images: {},
                shapes: {}
            }, n.metadata = {
                version: 4.5,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            var i = {};

            function r(e, n) {
                return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid
            }
            if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), !0 === this.castShadow && (i.castShadow = !0), !0 === this.receiveShadow && (i.receiveShadow = !0), !1 === this.visible && (i.visible = !1), !1 === this.frustumCulled && (i.frustumCulled = !1), 0 !== this.renderOrder && (i.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON()), this.isMesh || this.isLine || this.isPoints) {
                i.geometry = r(t.geometries, this.geometry);
                var a = this.geometry.parameters;
                if (void 0 !== a && void 0 !== a.shapes) {
                    var o = a.shapes;
                    if (Array.isArray(o))
                        for (var s = 0, c = o.length; s < c; s++) {
                            var l = o[s];
                            r(t.shapes, l)
                        } else r(t.shapes, o)
                }
            }
            if (void 0 !== this.material)
                if (Array.isArray(this.material)) {
                    var h = [];
                    for (s = 0, c = this.material.length; s < c; s++) h.push(r(t.materials, this.material[s]));
                    i.material = h
                } else i.material = r(t.materials, this.material);
            if (this.children.length > 0) {
                i.children = [];
                for (s = 0; s < this.children.length; s++) i.children.push(this.children[s].toJSON(t).object)
            }
            if (e) {
                var u = m(t.geometries),
                    p = m(t.materials),
                    d = m(t.textures),
                    f = m(t.images);
                o = m(t.shapes);
                u.length > 0 && (n.geometries = u), p.length > 0 && (n.materials = p), d.length > 0 && (n.textures = d), f.length > 0 && (n.images = f), o.length > 0 && (n.shapes = o)
            }
            return n.object = i, n;

            function m(t) {
                var e = [];
                for (var n in t) {
                    var i = t[n];
                    delete i.metadata, e.push(i)
                }
                return e
            }
        },
        clone: function(t) {
            return (new this.constructor).copy(this, t)
        },
        copy: function(t, e) {
            if (void 0 === e && (e = !0), this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e)
                for (var n = 0; n < t.children.length; n++) {
                    var i = t.children[n];
                    this.add(i.clone())
                }
            return this
        }
    }), q.prototype = Object.assign(Object.create(W.prototype), {
        constructor: q,
        isScene: !0,
        copy: function(t, e) {
            return W.prototype.copy.call(this, t, e), null !== t.background && (this.background = t.background.clone()), null !== t.environment && (this.environment = t.environment.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this
        },
        toJSON: function(t) {
            var e = W.prototype.toJSON.call(this, t);
            return null !== this.background && (e.object.background = this.background.toJSON(t)), null !== this.environment && (e.object.environment = this.environment.toJSON(t)), null !== this.fog && (e.object.fog = this.fog.toJSON()), e
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    });
    var X = [new x, new x, new x, new x, new x, new x, new x, new x],
        Y = new x,
        Z = new ot,
        J = new x,
        Q = new x,
        K = new x,
        $ = new x,
        tt = new x,
        et = new x,
        nt = new x,
        it = new x,
        rt = new x,
        at = new x;

    function ot(t, e) {
        this.min = void 0 !== t ? t : new x(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== e ? e : new x(-1 / 0, -1 / 0, -1 / 0)
    }

    function st(t, e, n, i, r) {
        var a, o;
        for (a = 0, o = t.length - 3; a <= o; a += 3) {
            at.fromArray(t, a);
            var s = r.x * Math.abs(at.x) + r.y * Math.abs(at.y) + r.z * Math.abs(at.z),
                c = e.dot(at),
                l = n.dot(at),
                h = i.dot(at);
            if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > s) return !1
        }
        return !0
    }
    Object.assign(ot.prototype, {
        isBox3: !0,
        set: function(t, e) {
            return this.min.copy(t), this.max.copy(e), this
        },
        setFromArray: function(t) {
            for (var e = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = t.length; s < c; s += 3) {
                var l = t[s],
                    h = t[s + 1],
                    u = t[s + 2];
                l < e && (e = l), h < n && (n = h), u < i && (i = u), l > r && (r = l), h > a && (a = h), u > o && (o = u)
            }
            return this.min.set(e, n, i), this.max.set(r, a, o), this
        },
        setFromBufferAttribute: function(t) {
            for (var e = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = t.count; s < c; s++) {
                var l = t.getX(s),
                    h = t.getY(s),
                    u = t.getZ(s);
                l < e && (e = l), h < n && (n = h), u < i && (i = u), l > r && (r = l), h > a && (a = h), u > o && (o = u)
            }
            return this.min.set(e, n, i), this.max.set(r, a, o), this
        },
        setFromPoints: function(t) {
            this.makeEmpty();
            for (var e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
            return this
        },
        setFromCenterAndSize: function(t, e) {
            var n = Y.copy(e).multiplyScalar(.5);
            return this.min.copy(t).sub(n), this.max.copy(t).add(n), this
        },
        setFromObject: function(t) {
            return this.makeEmpty(), this.expandByObject(t)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.min.copy(t.min), this.max.copy(t.max), this
        },
        makeEmpty: function() {
            return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
        },
        isEmpty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        },
        getCenter: function(t) {
            return void 0 === t && (console.warn("THREE.Box3: .getCenter() target is now required"), t = new x), this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        getSize: function(t) {
            return void 0 === t && (console.warn("THREE.Box3: .getSize() target is now required"), t = new x), this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
        },
        expandByPoint: function(t) {
            return this.min.min(t), this.max.max(t), this
        },
        expandByVector: function(t) {
            return this.min.sub(t), this.max.add(t), this
        },
        expandByScalar: function(t) {
            return this.min.addScalar(-t), this.max.addScalar(t), this
        },
        expandByObject: function(t) {
            t.updateWorldMatrix(!1, !1);
            var e = t.geometry;
            void 0 !== e && (null === e.boundingBox && e.computeBoundingBox(), Z.copy(e.boundingBox), Z.applyMatrix4(t.matrixWorld), this.union(Z));
            for (var n = t.children, i = 0, r = n.length; i < r; i++) this.expandByObject(n[i]);
            return this
        },
        containsPoint: function(t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
        },
        containsBox: function(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
        },
        getParameter: function(t, e) {
            return void 0 === e && (console.warn("THREE.Box3: .getParameter() target is now required"), e = new x), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
        },
        intersectsBox: function(t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
        },
        intersectsSphere: function(t) {
            return this.clampPoint(t.center, Y), Y.distanceToSquared(t.center) <= t.radius * t.radius
        },
        intersectsPlane: function(t) {
            var e, n;
            return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant
        },
        intersectsTriangle: function(t) {
            if (this.isEmpty()) return !1;
            this.getCenter(nt), it.subVectors(this.max, nt), J.subVectors(t.a, nt), Q.subVectors(t.b, nt), K.subVectors(t.c, nt), $.subVectors(Q, J), tt.subVectors(K, Q), et.subVectors(J, K);
            var e = [0, -$.z, $.y, 0, -tt.z, tt.y, 0, -et.z, et.y, $.z, 0, -$.x, tt.z, 0, -tt.x, et.z, 0, -et.x, -$.y, $.x, 0, -tt.y, tt.x, 0, -et.y, et.x, 0];
            return !!st(e, J, Q, K, it) && (!!st(e = [1, 0, 0, 0, 1, 0, 0, 0, 1], J, Q, K, it) && (rt.crossVectors($, tt), st(e = [rt.x, rt.y, rt.z], J, Q, K, it)))
        },
        clampPoint: function(t, e) {
            return void 0 === e && (console.warn("THREE.Box3: .clampPoint() target is now required"), e = new x), e.copy(t).clamp(this.min, this.max)
        },
        distanceToPoint: function(t) {
            return Y.copy(t).clamp(this.min, this.max).sub(t).length()
        },
        getBoundingSphere: function(t) {
            return void 0 === t && console.error("THREE.Box3: .getBoundingSphere() target is now required"), this.getCenter(t.center), t.radius = .5 * this.getSize(Y).length(), t
        },
        intersect: function(t) {
            return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
        },
        union: function(t) {
            return this.min.min(t.min), this.max.max(t.max), this
        },
        applyMatrix4: function(t) {
            return this.isEmpty() || (X[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), X[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), X[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), X[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), X[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), X[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), X[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), X[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(X)), this
        },
        translate: function(t) {
            return this.min.add(t), this.max.add(t), this
        },
        equals: function(t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
        }
    });
    var ct = new ot;

    function lt(t, e) {
        this.center = void 0 !== t ? t : new x, this.radius = void 0 !== e ? e : 0
    }
    Object.assign(lt.prototype, {
        set: function(t, e) {
            return this.center.copy(t), this.radius = e, this
        },
        setFromPoints: function(t, e) {
            var n = this.center;
            void 0 !== e ? n.copy(e) : ct.setFromPoints(t).getCenter(n);
            for (var i = 0, r = 0, a = t.length; r < a; r++) i = Math.max(i, n.distanceToSquared(t[r]));
            return this.radius = Math.sqrt(i), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.center.copy(t.center), this.radius = t.radius, this
        },
        empty: function() {
            return this.radius <= 0
        },
        containsPoint: function(t) {
            return t.distanceToSquared(this.center) <= this.radius * this.radius
        },
        distanceToPoint: function(t) {
            return t.distanceTo(this.center) - this.radius
        },
        intersectsSphere: function(t) {
            var e = this.radius + t.radius;
            return t.center.distanceToSquared(this.center) <= e * e
        },
        intersectsBox: function(t) {
            return t.intersectsSphere(this)
        },
        intersectsPlane: function(t) {
            return Math.abs(t.distanceToPoint(this.center)) <= this.radius
        },
        clampPoint: function(t, e) {
            var n = this.center.distanceToSquared(t);
            return void 0 === e && (console.warn("THREE.Sphere: .clampPoint() target is now required"), e = new x), e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e
        },
        getBoundingBox: function(t) {
            return void 0 === t && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), t = new ot), t.set(this.center, this.center), t.expandByScalar(this.radius), t
        },
        applyMatrix4: function(t) {
            return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this
        },
        translate: function(t) {
            return this.center.add(t), this
        },
        equals: function(t) {
            return t.center.equals(this.center) && t.radius === this.radius
        }
    });
    var ht = new x,
        ut = new x,
        pt = new x,
        dt = new x,
        ft = new x,
        mt = new x,
        gt = new x;

    function vt(t, e) {
        this.origin = void 0 !== t ? t : new x, this.direction = void 0 !== e ? e : new x(0, 0, -1)
    }
    Object.assign(vt.prototype, {
        set: function(t, e) {
            return this.origin.copy(t), this.direction.copy(e), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.origin.copy(t.origin), this.direction.copy(t.direction), this
        },
        at: function(t, e) {
            return void 0 === e && (console.warn("THREE.Ray: .at() target is now required"), e = new x), e.copy(this.direction).multiplyScalar(t).add(this.origin)
        },
        lookAt: function(t) {
            return this.direction.copy(t).sub(this.origin).normalize(), this
        },
        recast: function(t) {
            return this.origin.copy(this.at(t, ht)), this
        },
        closestPointToPoint: function(t, e) {
            void 0 === e && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), e = new x), e.subVectors(t, this.origin);
            var n = e.dot(this.direction);
            return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin)
        },
        distanceToPoint: function(t) {
            return Math.sqrt(this.distanceSqToPoint(t))
        },
        distanceSqToPoint: function(t) {
            var e = ht.subVectors(t, this.origin).dot(this.direction);
            return e < 0 ? this.origin.distanceToSquared(t) : (ht.copy(this.direction).multiplyScalar(e).add(this.origin), ht.distanceToSquared(t))
        },
        distanceSqToSegment: function(t, e, n, i) {
            ut.copy(t).add(e).multiplyScalar(.5), pt.copy(e).sub(t).normalize(), dt.copy(this.origin).sub(ut);
            var r, a, o, s, c = .5 * t.distanceTo(e),
                l = -this.direction.dot(pt),
                h = dt.dot(this.direction),
                u = -dt.dot(pt),
                p = dt.lengthSq(),
                d = Math.abs(1 - l * l);
            if (d > 0)
                if (a = l * h - u, s = c * d, (r = l * u - h) >= 0)
                    if (a >= -s)
                        if (a <= s) {
                            var f = 1 / d;
                            o = (r *= f) * (r + l * (a *= f) + 2 * h) + a * (l * r + a + 2 * u) + p
                        } else a = c, o = -(r = Math.max(0, -(l * a + h))) * r + a * (a + 2 * u) + p;
            else a = -c, o = -(r = Math.max(0, -(l * a + h))) * r + a * (a + 2 * u) + p;
            else a <= -s ? o = -(r = Math.max(0, -(-l * c + h))) * r + (a = r > 0 ? -c : Math.min(Math.max(-c, -u), c)) * (a + 2 * u) + p : a <= s ? (r = 0, o = (a = Math.min(Math.max(-c, -u), c)) * (a + 2 * u) + p) : o = -(r = Math.max(0, -(l * c + h))) * r + (a = r > 0 ? c : Math.min(Math.max(-c, -u), c)) * (a + 2 * u) + p;
            else a = l > 0 ? -c : c, o = -(r = Math.max(0, -(l * a + h))) * r + a * (a + 2 * u) + p;
            return n && n.copy(this.direction).multiplyScalar(r).add(this.origin), i && i.copy(pt).multiplyScalar(a).add(ut), o
        },
        intersectSphere: function(t, e) {
            ht.subVectors(t.center, this.origin);
            var n = ht.dot(this.direction),
                i = ht.dot(ht) - n * n,
                r = t.radius * t.radius;
            if (i > r) return null;
            var a = Math.sqrt(r - i),
                o = n - a,
                s = n + a;
            return o < 0 && s < 0 ? null : o < 0 ? this.at(s, e) : this.at(o, e)
        },
        intersectsSphere: function(t) {
            return this.distanceSqToPoint(t.center) <= t.radius * t.radius
        },
        distanceToPlane: function(t) {
            var e = t.normal.dot(this.direction);
            if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
            var n = -(this.origin.dot(t.normal) + t.constant) / e;
            return n >= 0 ? n : null
        },
        intersectPlane: function(t, e) {
            var n = this.distanceToPlane(t);
            return null === n ? null : this.at(n, e)
        },
        intersectsPlane: function(t) {
            var e = t.distanceToPoint(this.origin);
            return 0 === e || t.normal.dot(this.direction) * e < 0
        },
        intersectBox: function(t, e) {
            var n, i, r, a, o, s, c = 1 / this.direction.x,
                l = 1 / this.direction.y,
                h = 1 / this.direction.z,
                u = this.origin;
            return c >= 0 ? (n = (t.min.x - u.x) * c, i = (t.max.x - u.x) * c) : (n = (t.max.x - u.x) * c, i = (t.min.x - u.x) * c), l >= 0 ? (r = (t.min.y - u.y) * l, a = (t.max.y - u.y) * l) : (r = (t.max.y - u.y) * l, a = (t.min.y - u.y) * l), n > a || r > i ? null : ((r > n || n != n) && (n = r), (a < i || i != i) && (i = a), h >= 0 ? (o = (t.min.z - u.z) * h, s = (t.max.z - u.z) * h) : (o = (t.max.z - u.z) * h, s = (t.min.z - u.z) * h), n > s || o > i ? null : ((o > n || n != n) && (n = o), (s < i || i != i) && (i = s), i < 0 ? null : this.at(n >= 0 ? n : i, e)))
        },
        intersectsBox: function(t) {
            return null !== this.intersectBox(t, ht)
        },
        intersectTriangle: function(t, e, n, i, r) {
            ft.subVectors(e, t), mt.subVectors(n, t), gt.crossVectors(ft, mt);
            var a, o = this.direction.dot(gt);
            if (o > 0) {
                if (i) return null;
                a = 1
            } else {
                if (!(o < 0)) return null;
                a = -1, o = -o
            }
            dt.subVectors(this.origin, t);
            var s = a * this.direction.dot(mt.crossVectors(dt, mt));
            if (s < 0) return null;
            var c = a * this.direction.dot(ft.cross(dt));
            if (c < 0) return null;
            if (s + c > o) return null;
            var l = -a * dt.dot(gt);
            return l < 0 ? null : this.at(l / o, r)
        },
        applyMatrix4: function(t) {
            return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
        },
        equals: function(t) {
            return t.origin.equals(this.origin) && t.direction.equals(this.direction)
        }
    });
    var yt = new x,
        xt = new x,
        bt = new l;

    function _t(t, e) {
        this.normal = void 0 !== t ? t : new x(1, 0, 0), this.constant = void 0 !== e ? e : 0
    }
    Object.assign(_t.prototype, {
        isPlane: !0,
        set: function(t, e) {
            return this.normal.copy(t), this.constant = e, this
        },
        setComponents: function(t, e, n, i) {
            return this.normal.set(t, e, n), this.constant = i, this
        },
        setFromNormalAndCoplanarPoint: function(t, e) {
            return this.normal.copy(t), this.constant = -e.dot(this.normal), this
        },
        setFromCoplanarPoints: function(t, e, n) {
            var i = yt.subVectors(n, e).cross(xt.subVectors(t, e)).normalize();
            return this.setFromNormalAndCoplanarPoint(i, t), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.normal.copy(t.normal), this.constant = t.constant, this
        },
        normalize: function() {
            var t = 1 / this.normal.length();
            return this.normal.multiplyScalar(t), this.constant *= t, this
        },
        negate: function() {
            return this.constant *= -1, this.normal.negate(), this
        },
        distanceToPoint: function(t) {
            return this.normal.dot(t) + this.constant
        },
        distanceToSphere: function(t) {
            return this.distanceToPoint(t.center) - t.radius
        },
        projectPoint: function(t, e) {
            return void 0 === e && (console.warn("THREE.Plane: .projectPoint() target is now required"), e = new x), e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
        },
        intersectLine: function(t, e) {
            void 0 === e && (console.warn("THREE.Plane: .intersectLine() target is now required"), e = new x);
            var n = t.delta(yt),
                i = this.normal.dot(n);
            if (0 === i) return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : void 0;
            var r = -(t.start.dot(this.normal) + this.constant) / i;
            return r < 0 || r > 1 ? void 0 : e.copy(n).multiplyScalar(r).add(t.start)
        },
        intersectsLine: function(t) {
            var e = this.distanceToPoint(t.start),
                n = this.distanceToPoint(t.end);
            return e < 0 && n > 0 || n < 0 && e > 0
        },
        intersectsBox: function(t) {
            return t.intersectsPlane(this)
        },
        intersectsSphere: function(t) {
            return t.intersectsPlane(this)
        },
        coplanarPoint: function(t) {
            return void 0 === t && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), t = new x), t.copy(this.normal).multiplyScalar(-this.constant)
        },
        applyMatrix4: function(t, e) {
            var n = e || bt.getNormalMatrix(t),
                i = this.coplanarPoint(yt).applyMatrix4(t),
                r = this.normal.applyMatrix3(n).normalize();
            return this.constant = -i.dot(r), this
        },
        translate: function(t) {
            return this.constant -= t.dot(this.normal), this
        },
        equals: function(t) {
            return t.normal.equals(this.normal) && t.constant === this.constant
        }
    });
    var wt = new x,
        Mt = new x,
        St = new x,
        Tt = new x,
        Et = new x,
        At = new x,
        Lt = new x,
        Rt = new x,
        Pt = new x,
        Ct = new x;

    function Ot(t, e, n) {
        this.a = void 0 !== t ? t : new x, this.b = void 0 !== e ? e : new x, this.c = void 0 !== n ? n : new x
    }
    Object.assign(Ot, {
        getNormal: function(t, e, n, i) {
            void 0 === i && (console.warn("THREE.Triangle: .getNormal() target is now required"), i = new x), i.subVectors(n, e), wt.subVectors(t, e), i.cross(wt);
            var r = i.lengthSq();
            return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0)
        },
        getBarycoord: function(t, e, n, i, r) {
            wt.subVectors(i, e), Mt.subVectors(n, e), St.subVectors(t, e);
            var a = wt.dot(wt),
                o = wt.dot(Mt),
                s = wt.dot(St),
                c = Mt.dot(Mt),
                l = Mt.dot(St),
                h = a * c - o * o;
            if (void 0 === r && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), r = new x), 0 === h) return r.set(-2, -1, -1);
            var u = 1 / h,
                p = (c * s - o * l) * u,
                d = (a * l - o * s) * u;
            return r.set(1 - p - d, d, p)
        },
        containsPoint: function(t, e, n, i) {
            return Ot.getBarycoord(t, e, n, i, Tt), Tt.x >= 0 && Tt.y >= 0 && Tt.x + Tt.y <= 1
        },
        getUV: function(t, e, n, i, r, a, o, s) {
            return this.getBarycoord(t, e, n, i, Tt), s.set(0, 0), s.addScaledVector(r, Tt.x), s.addScaledVector(a, Tt.y), s.addScaledVector(o, Tt.z), s
        },
        isFrontFacing: function(t, e, n, i) {
            return wt.subVectors(n, e), Mt.subVectors(t, e), wt.cross(Mt).dot(i) < 0
        }
    }), Object.assign(Ot.prototype, {
        set: function(t, e, n) {
            return this.a.copy(t), this.b.copy(e), this.c.copy(n), this
        },
        setFromPointsAndIndices: function(t, e, n, i) {
            return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
        },
        getArea: function() {
            return wt.subVectors(this.c, this.b), Mt.subVectors(this.a, this.b), .5 * wt.cross(Mt).length()
        },
        getMidpoint: function(t) {
            return void 0 === t && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), t = new x), t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
        },
        getNormal: function(t) {
            return Ot.getNormal(this.a, this.b, this.c, t)
        },
        getPlane: function(t) {
            return void 0 === t && (console.warn("THREE.Triangle: .getPlane() target is now required"), t = new _t), t.setFromCoplanarPoints(this.a, this.b, this.c)
        },
        getBarycoord: function(t, e) {
            return Ot.getBarycoord(t, this.a, this.b, this.c, e)
        },
        getUV: function(t, e, n, i, r) {
            return Ot.getUV(t, this.a, this.b, this.c, e, n, i, r)
        },
        containsPoint: function(t) {
            return Ot.containsPoint(t, this.a, this.b, this.c)
        },
        isFrontFacing: function(t) {
            return Ot.isFrontFacing(this.a, this.b, this.c, t)
        },
        intersectsBox: function(t) {
            return t.intersectsTriangle(this)
        },
        closestPointToPoint: function(t, e) {
            void 0 === e && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), e = new x);
            var n, i, r = this.a,
                a = this.b,
                o = this.c;
            Et.subVectors(a, r), At.subVectors(o, r), Rt.subVectors(t, r);
            var s = Et.dot(Rt),
                c = At.dot(Rt);
            if (s <= 0 && c <= 0) return e.copy(r);
            Pt.subVectors(t, a);
            var l = Et.dot(Pt),
                h = At.dot(Pt);
            if (l >= 0 && h <= l) return e.copy(a);
            var u = s * h - l * c;
            if (u <= 0 && s >= 0 && l <= 0) return n = s / (s - l), e.copy(r).addScaledVector(Et, n);
            Ct.subVectors(t, o);
            var p = Et.dot(Ct),
                d = At.dot(Ct);
            if (d >= 0 && p <= d) return e.copy(o);
            var f = p * c - s * d;
            if (f <= 0 && c >= 0 && d <= 0) return i = c / (c - d), e.copy(r).addScaledVector(At, i);
            var m = l * d - p * h;
            if (m <= 0 && h - l >= 0 && p - d >= 0) return Lt.subVectors(o, a), i = (h - l) / (h - l + (p - d)), e.copy(a).addScaledVector(Lt, i);
            var g = 1 / (m + f + u);
            return n = f * g, i = u * g, e.copy(r).addScaledVector(Et, n).addScaledVector(At, i)
        },
        equals: function(t) {
            return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
        }
    });
    var Dt = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        },
        Nt = {
            h: 0,
            s: 0,
            l: 0
        },
        It = {
            h: 0,
            s: 0,
            l: 0
        };

    function zt(t, e, n) {
        return void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n)
    }

    function Ut(t, e, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t
    }

    function Bt(t) {
        return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4)
    }

    function Ft(t) {
        return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055
    }

    function Gt(t, e, n, i, r, a) {
        this.a = t, this.b = e, this.c = n, this.normal = i && i.isVector3 ? i : new x, this.vertexNormals = Array.isArray(i) ? i : [], this.color = r && r.isColor ? r : new zt, this.vertexColors = Array.isArray(r) ? r : [], this.materialIndex = void 0 !== a ? a : 0
    }
    Object.assign(zt.prototype, {
        isColor: !0,
        r: 1,
        g: 1,
        b: 1,
        set: function(t) {
            return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this
        },
        setScalar: function(t) {
            return this.r = t, this.g = t, this.b = t, this
        },
        setHex: function(t) {
            return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this
        },
        setRGB: function(t, e, n) {
            return this.r = t, this.g = e, this.b = n, this
        },
        setHSL: function(t, e, n) {
            if (t = s.euclideanModulo(t, 1), e = s.clamp(e, 0, 1), n = s.clamp(n, 0, 1), 0 === e) this.r = this.g = this.b = n;
            else {
                var i = n <= .5 ? n * (1 + e) : n + e - n * e,
                    r = 2 * n - i;
                this.r = Ut(r, i, t + 1 / 3), this.g = Ut(r, i, t), this.b = Ut(r, i, t - 1 / 3)
            }
            return this
        },
        setStyle: function(t) {
            function e(e) {
                void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
            }
            var n;
            if (n = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)) {
                var i, r = n[1],
                    a = n[2];
                switch (r) {
                    case "rgb":
                    case "rgba":
                        if (i = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(255, parseInt(i[1], 10)) / 255, this.g = Math.min(255, parseInt(i[2], 10)) / 255, this.b = Math.min(255, parseInt(i[3], 10)) / 255, e(i[5]), this;
                        if (i = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(100, parseInt(i[1], 10)) / 100, this.g = Math.min(100, parseInt(i[2], 10)) / 100, this.b = Math.min(100, parseInt(i[3], 10)) / 100, e(i[5]), this;
                        break;
                    case "hsl":
                    case "hsla":
                        if (i = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
                            var o = parseFloat(i[1]) / 360,
                                s = parseInt(i[2], 10) / 100,
                                c = parseInt(i[3], 10) / 100;
                            return e(i[5]), this.setHSL(o, s, c)
                        }
                }
            } else if (n = /^\#([A-Fa-f0-9]+)$/.exec(t)) {
                var l = n[1],
                    h = l.length;
                if (3 === h) return this.r = parseInt(l.charAt(0) + l.charAt(0), 16) / 255, this.g = parseInt(l.charAt(1) + l.charAt(1), 16) / 255, this.b = parseInt(l.charAt(2) + l.charAt(2), 16) / 255, this;
                if (6 === h) return this.r = parseInt(l.charAt(0) + l.charAt(1), 16) / 255, this.g = parseInt(l.charAt(2) + l.charAt(3), 16) / 255, this.b = parseInt(l.charAt(4) + l.charAt(5), 16) / 255, this
            }
            return t && t.length > 0 ? this.setColorName(t) : this
        },
        setColorName: function(t) {
            var e = Dt[t];
            return void 0 !== e ? this.setHex(e) : console.warn("THREE.Color: Unknown color " + t), this
        },
        clone: function() {
            return new this.constructor(this.r, this.g, this.b)
        },
        copy: function(t) {
            return this.r = t.r, this.g = t.g, this.b = t.b, this
        },
        copyGammaToLinear: function(t, e) {
            return void 0 === e && (e = 2), this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this
        },
        copyLinearToGamma: function(t, e) {
            void 0 === e && (e = 2);
            var n = e > 0 ? 1 / e : 1;
            return this.r = Math.pow(t.r, n), this.g = Math.pow(t.g, n), this.b = Math.pow(t.b, n), this
        },
        convertGammaToLinear: function(t) {
            return this.copyGammaToLinear(this, t), this
        },
        convertLinearToGamma: function(t) {
            return this.copyLinearToGamma(this, t), this
        },
        copySRGBToLinear: function(t) {
            return this.r = Bt(t.r), this.g = Bt(t.g), this.b = Bt(t.b), this
        },
        copyLinearToSRGB: function(t) {
            return this.r = Ft(t.r), this.g = Ft(t.g), this.b = Ft(t.b), this
        },
        convertSRGBToLinear: function() {
            return this.copySRGBToLinear(this), this
        },
        convertLinearToSRGB: function() {
            return this.copyLinearToSRGB(this), this
        },
        getHex: function() {
            return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
        },
        getHexString: function() {
            return ("000000" + this.getHex().toString(16)).slice(-6)
        },
        getHSL: function(t) {
            void 0 === t && (console.warn("THREE.Color: .getHSL() target is now required"), t = {
                h: 0,
                s: 0,
                l: 0
            });
            var e, n, i = this.r,
                r = this.g,
                a = this.b,
                o = Math.max(i, r, a),
                s = Math.min(i, r, a),
                c = (s + o) / 2;
            if (s === o) e = 0, n = 0;
            else {
                var l = o - s;
                switch (n = c <= .5 ? l / (o + s) : l / (2 - o - s), o) {
                    case i:
                        e = (r - a) / l + (r < a ? 6 : 0);
                        break;
                    case r:
                        e = (a - i) / l + 2;
                        break;
                    case a:
                        e = (i - r) / l + 4
                }
                e /= 6
            }
            return t.h = e, t.s = n, t.l = c, t
        },
        getStyle: function() {
            return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
        },
        offsetHSL: function(t, e, n) {
            return this.getHSL(Nt), Nt.h += t, Nt.s += e, Nt.l += n, this.setHSL(Nt.h, Nt.s, Nt.l), this
        },
        add: function(t) {
            return this.r += t.r, this.g += t.g, this.b += t.b, this
        },
        addColors: function(t, e) {
            return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
        },
        addScalar: function(t) {
            return this.r += t, this.g += t, this.b += t, this
        },
        sub: function(t) {
            return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this
        },
        multiply: function(t) {
            return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
        },
        multiplyScalar: function(t) {
            return this.r *= t, this.g *= t, this.b *= t, this
        },
        lerp: function(t, e) {
            return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
        },
        lerpHSL: function(t, e) {
            this.getHSL(Nt), t.getHSL(It);
            var n = s.lerp(Nt.h, It.h, e),
                i = s.lerp(Nt.s, It.s, e),
                r = s.lerp(Nt.l, It.l, e);
            return this.setHSL(n, i, r), this
        },
        equals: function(t) {
            return t.r === this.r && t.g === this.g && t.b === this.b
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0), this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
        },
        toJSON: function() {
            return this.getHex()
        }
    }), zt.NAMES = Dt, Object.assign(Gt.prototype, {
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            this.a = t.a, this.b = t.b, this.c = t.c, this.normal.copy(t.normal), this.color.copy(t.color), this.materialIndex = t.materialIndex;
            for (var e = 0, n = t.vertexNormals.length; e < n; e++) this.vertexNormals[e] = t.vertexNormals[e].clone();
            for (e = 0, n = t.vertexColors.length; e < n; e++) this.vertexColors[e] = t.vertexColors[e].clone();
            return this
        }
    });
    var Ht = 0;

    function Vt() {
        Object.defineProperty(this, "id", {
            value: Ht++
        }), this.uuid = s.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.blending = 1, this.side = 0, this.flatShading = !1, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0
    }

    function kt(t) {
        Vt.call(this), this.type = "MeshBasicMaterial", this.color = new zt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.setValues(t)
    }
    Vt.prototype = Object.assign(Object.create(i.prototype), {
        constructor: Vt,
        isMaterial: !0,
        onBeforeCompile: function() {},
        setValues: function(t) {
            if (void 0 !== t)
                for (var e in t) {
                    var n = t[e];
                    if (void 0 !== n)
                        if ("shading" !== e) {
                            var i = this[e];
                            void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
                        } else console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === n;
                    else console.warn("THREE.Material: '" + e + "' parameter is undefined.")
                }
        },
        toJSON: function(t) {
            var e = void 0 === t || "string" == typeof t;
            e && (t = {
                textures: {},
                images: {}
            });
            var n = {
                metadata: {
                    version: 4.5,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };

            function i(t) {
                var e = [];
                for (var n in t) {
                    var i = t[n];
                    delete i.metadata, e.push(i)
                }
                return e
            }
            if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), this.sheen && this.sheen.isColor && (n.sheen = this.sheen.getHex()), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, n.reflectivity = this.reflectivity, n.refractionRatio = this.refractionRatio, void 0 !== this.combine && (n.combine = this.combine), void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity)), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.size && (n.size = this.size), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (n.blending = this.blending), !0 === this.flatShading && (n.flatShading = this.flatShading), 0 !== this.side && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation && 0 !== this.rotation && (n.rotation = this.rotation), !0 === this.polygonOffset && (n.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (n.morphTargets = !0), !0 === this.morphNormals && (n.morphNormals = !0), !0 === this.skinning && (n.skinning = !0), !1 === this.visible && (n.visible = !1), !1 === this.toneMapped && (n.toneMapped = !1), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), e) {
                var r = i(t.textures),
                    a = i(t.images);
                r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a)
            }
            return n
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            this.name = t.name, this.fog = t.fog, this.blending = t.blending, this.side = t.side, this.flatShading = t.flatShading, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
            var e = t.clippingPlanes,
                n = null;
            if (null !== e) {
                var i = e.length;
                n = new Array(i);
                for (var r = 0; r !== i; ++r) n[r] = e[r].clone()
            }
            return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.premultipliedAlpha = t.premultipliedAlpha, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }), Object.defineProperty(Vt.prototype, "needsUpdate", {
        set: function(t) {
            !0 === t && this.version++
        }
    }), kt.prototype = Object.create(Vt.prototype), kt.prototype.constructor = kt, kt.prototype.isMeshBasicMaterial = !0, kt.prototype.copy = function(t) {
        return Vt.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this
    };
    var jt = new x;

    function Wt(t, e, n) {
        if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === n, this.usage = 35044, this.updateRange = {
            offset: 0,
            count: -1
        }, this.version = 0
    }

    function qt(t, e, n) {
        Wt.call(this, new Int8Array(t), e, n)
    }

    function Xt(t, e, n) {
        Wt.call(this, new Uint8Array(t), e, n)
    }

    function Yt(t, e, n) {
        Wt.call(this, new Uint8ClampedArray(t), e, n)
    }

    function Zt(t, e, n) {
        Wt.call(this, new Int16Array(t), e, n)
    }

    function Jt(t, e, n) {
        Wt.call(this, new Uint16Array(t), e, n)
    }

    function Qt(t, e, n) {
        Wt.call(this, new Int32Array(t), e, n)
    }

    function Kt(t, e, n) {
        Wt.call(this, new Uint32Array(t), e, n)
    }

    function $t(t, e, n) {
        Wt.call(this, new Float32Array(t), e, n)
    }

    function te(t, e, n) {
        Wt.call(this, new Float64Array(t), e, n)
    }

    function ee() {
        this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1
    }

    function ne(t) {
        if (0 === t.length) return -1 / 0;
        for (var e = t[0], n = 1, i = t.length; n < i; ++n) t[n] > e && (e = t[n]);
        return e
    }
    Object.defineProperty(Wt.prototype, "needsUpdate", {
        set: function(t) {
            !0 === t && this.version++
        }
    }), Object.assign(Wt.prototype, {
        isBufferAttribute: !0,
        onUploadCallback: function() {},
        setUsage: function(t) {
            return this.usage = t, this
        },
        copy: function(t) {
            return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this
        },
        copyAt: function(t, e, n) {
            t *= this.itemSize, n *= e.itemSize;
            for (var i = 0, r = this.itemSize; i < r; i++) this.array[t + i] = e.array[n + i];
            return this
        },
        copyArray: function(t) {
            return this.array.set(t), this
        },
        copyColorsArray: function(t) {
            for (var e = this.array, n = 0, i = 0, r = t.length; i < r; i++) {
                var a = t[i];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), a = new zt), e[n++] = a.r, e[n++] = a.g, e[n++] = a.b
            }
            return this
        },
        copyVector2sArray: function(t) {
            for (var e = this.array, n = 0, i = 0, r = t.length; i < r; i++) {
                var a = t[i];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), a = new c), e[n++] = a.x, e[n++] = a.y
            }
            return this
        },
        copyVector3sArray: function(t) {
            for (var e = this.array, n = 0, i = 0, r = t.length; i < r; i++) {
                var a = t[i];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), a = new x), e[n++] = a.x, e[n++] = a.y, e[n++] = a.z
            }
            return this
        },
        copyVector4sArray: function(t) {
            for (var e = this.array, n = 0, i = 0, r = t.length; i < r; i++) {
                var a = t[i];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), a = new d), e[n++] = a.x, e[n++] = a.y, e[n++] = a.z, e[n++] = a.w
            }
            return this
        },
        applyMatrix3: function(t) {
            for (var e = 0, n = this.count; e < n; e++) jt.x = this.getX(e), jt.y = this.getY(e), jt.z = this.getZ(e), jt.applyMatrix3(t), this.setXYZ(e, jt.x, jt.y, jt.z);
            return this
        },
        applyMatrix4: function(t) {
            for (var e = 0, n = this.count; e < n; e++) jt.x = this.getX(e), jt.y = this.getY(e), jt.z = this.getZ(e), jt.applyMatrix4(t), this.setXYZ(e, jt.x, jt.y, jt.z);
            return this
        },
        applyNormalMatrix: function(t) {
            for (var e = 0, n = this.count; e < n; e++) jt.x = this.getX(e), jt.y = this.getY(e), jt.z = this.getZ(e), jt.applyNormalMatrix(t), this.setXYZ(e, jt.x, jt.y, jt.z);
            return this
        },
        transformDirection: function(t) {
            for (var e = 0, n = this.count; e < n; e++) jt.x = this.getX(e), jt.y = this.getY(e), jt.z = this.getZ(e), jt.transformDirection(t), this.setXYZ(e, jt.x, jt.y, jt.z);
            return this
        },
        set: function(t, e) {
            return void 0 === e && (e = 0), this.array.set(t, e), this
        },
        getX: function(t) {
            return this.array[t * this.itemSize]
        },
        setX: function(t, e) {
            return this.array[t * this.itemSize] = e, this
        },
        getY: function(t) {
            return this.array[t * this.itemSize + 1]
        },
        setY: function(t, e) {
            return this.array[t * this.itemSize + 1] = e, this
        },
        getZ: function(t) {
            return this.array[t * this.itemSize + 2]
        },
        setZ: function(t, e) {
            return this.array[t * this.itemSize + 2] = e, this
        },
        getW: function(t) {
            return this.array[t * this.itemSize + 3]
        },
        setW: function(t, e) {
            return this.array[t * this.itemSize + 3] = e, this
        },
        setXY: function(t, e, n) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this
        },
        setXYZ: function(t, e, n, i) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this
        },
        setXYZW: function(t, e, n, i, r) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this.array[t + 3] = r, this
        },
        onUpload: function(t) {
            return this.onUploadCallback = t, this
        },
        clone: function() {
            return new this.constructor(this.array, this.itemSize).copy(this)
        },
        toJSON: function() {
            return {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array: Array.prototype.slice.call(this.array),
                normalized: this.normalized
            }
        }
    }), qt.prototype = Object.create(Wt.prototype), qt.prototype.constructor = qt, Xt.prototype = Object.create(Wt.prototype), Xt.prototype.constructor = Xt, Yt.prototype = Object.create(Wt.prototype), Yt.prototype.constructor = Yt, Zt.prototype = Object.create(Wt.prototype), Zt.prototype.constructor = Zt, Jt.prototype = Object.create(Wt.prototype), Jt.prototype.constructor = Jt, Qt.prototype = Object.create(Wt.prototype), Qt.prototype.constructor = Qt, Kt.prototype = Object.create(Wt.prototype), Kt.prototype.constructor = Kt, $t.prototype = Object.create(Wt.prototype), $t.prototype.constructor = $t, te.prototype = Object.create(Wt.prototype), te.prototype.constructor = te, Object.assign(ee.prototype, {
        computeGroups: function(t) {
            for (var e, n = [], i = void 0, r = t.faces, a = 0; a < r.length; a++) {
                var o = r[a];
                o.materialIndex !== i && (i = o.materialIndex, void 0 !== e && (e.count = 3 * a - e.start, n.push(e)), e = {
                    start: 3 * a,
                    materialIndex: i
                })
            }
            void 0 !== e && (e.count = 3 * a - e.start, n.push(e)), this.groups = n
        },
        fromGeometry: function(t) {
            var e, n = t.faces,
                i = t.vertices,
                r = t.faceVertexUvs,
                a = r[0] && r[0].length > 0,
                o = r[1] && r[1].length > 0,
                s = t.morphTargets,
                l = s.length;
            if (l > 0) {
                e = [];
                for (var h = 0; h < l; h++) e[h] = {
                    name: s[h].name,
                    data: []
                };
                this.morphTargets.position = e
            }
            var u, p = t.morphNormals,
                d = p.length;
            if (d > 0) {
                u = [];
                for (h = 0; h < d; h++) u[h] = {
                    name: p[h].name,
                    data: []
                };
                this.morphTargets.normal = u
            }
            var f = t.skinIndices,
                m = t.skinWeights,
                g = f.length === i.length,
                v = m.length === i.length;
            i.length > 0 && 0 === n.length && console.error("THREE.DirectGeometry: Faceless geometries are not supported.");
            for (h = 0; h < n.length; h++) {
                var y = n[h];
                this.vertices.push(i[y.a], i[y.b], i[y.c]);
                var x = y.vertexNormals;
                if (3 === x.length) this.normals.push(x[0], x[1], x[2]);
                else {
                    var b = y.normal;
                    this.normals.push(b, b, b)
                }
                var _, w = y.vertexColors;
                if (3 === w.length) this.colors.push(w[0], w[1], w[2]);
                else {
                    var M = y.color;
                    this.colors.push(M, M, M)
                }
                if (!0 === a) void 0 !== (_ = r[0][h]) ? this.uvs.push(_[0], _[1], _[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", h), this.uvs.push(new c, new c, new c));
                if (!0 === o) void 0 !== (_ = r[1][h]) ? this.uvs2.push(_[0], _[1], _[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", h), this.uvs2.push(new c, new c, new c));
                for (var S = 0; S < l; S++) {
                    var T = s[S].vertices;
                    e[S].data.push(T[y.a], T[y.b], T[y.c])
                }
                for (S = 0; S < d; S++) {
                    var E = p[S].vertexNormals[h];
                    u[S].data.push(E.a, E.b, E.c)
                }
                g && this.skinIndices.push(f[y.a], f[y.b], f[y.c]), v && this.skinWeights.push(m[y.a], m[y.b], m[y.c])
            }
            return this.computeGroups(t), this.verticesNeedUpdate = t.verticesNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this
        }
    });
    var ie = 1,
        re = new A,
        ae = new W,
        oe = new x,
        se = new ot,
        ce = new ot,
        le = new x;

    function he() {
        Object.defineProperty(this, "id", {
            value: ie += 2
        }), this.uuid = s.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
            start: 0,
            count: 1 / 0
        }, this.userData = {}
    }
    he.prototype = Object.assign(Object.create(i.prototype), {
        constructor: he,
        isBufferGeometry: !0,
        getIndex: function() {
            return this.index
        },
        setIndex: function(t) {
            Array.isArray(t) ? this.index = new(ne(t) > 65535 ? Kt : Jt)(t, 1) : this.index = t
        },
        getAttribute: function(t) {
            return this.attributes[t]
        },
        setAttribute: function(t, e) {
            return this.attributes[t] = e, this
        },
        deleteAttribute: function(t) {
            return delete this.attributes[t], this
        },
        addGroup: function(t, e, n) {
            this.groups.push({
                start: t,
                count: e,
                materialIndex: void 0 !== n ? n : 0
            })
        },
        clearGroups: function() {
            this.groups = []
        },
        setDrawRange: function(t, e) {
            this.drawRange.start = t, this.drawRange.count = e
        },
        applyMatrix4: function(t) {
            var e = this.attributes.position;
            void 0 !== e && (e.applyMatrix4(t), e.needsUpdate = !0);
            var n = this.attributes.normal;
            if (void 0 !== n) {
                var i = (new l).getNormalMatrix(t);
                n.applyNormalMatrix(i), n.needsUpdate = !0
            }
            var r = this.attributes.tangent;
            return void 0 !== r && (r.transformDirection(t), r.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
        },
        rotateX: function(t) {
            return re.makeRotationX(t), this.applyMatrix4(re), this
        },
        rotateY: function(t) {
            return re.makeRotationY(t), this.applyMatrix4(re), this
        },
        rotateZ: function(t) {
            return re.makeRotationZ(t), this.applyMatrix4(re), this
        },
        translate: function(t, e, n) {
            return re.makeTranslation(t, e, n), this.applyMatrix4(re), this
        },
        scale: function(t, e, n) {
            return re.makeScale(t, e, n), this.applyMatrix4(re), this
        },
        lookAt: function(t) {
            return ae.lookAt(t), ae.updateMatrix(), this.applyMatrix4(ae.matrix), this
        },
        center: function() {
            return this.computeBoundingBox(), this.boundingBox.getCenter(oe).negate(), this.translate(oe.x, oe.y, oe.z), this
        },
        setFromObject: function(t) {
            var e = t.geometry;
            if (t.isPoints || t.isLine) {
                var n = new $t(3 * e.vertices.length, 3),
                    i = new $t(3 * e.colors.length, 3);
                if (this.setAttribute("position", n.copyVector3sArray(e.vertices)), this.setAttribute("color", i.copyColorsArray(e.colors)), e.lineDistances && e.lineDistances.length === e.vertices.length) {
                    var r = new $t(e.lineDistances.length, 1);
                    this.setAttribute("lineDistance", r.copyArray(e.lineDistances))
                }
                null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone())
            } else t.isMesh && e && e.isGeometry && this.fromGeometry(e);
            return this
        },
        setFromPoints: function(t) {
            for (var e = [], n = 0, i = t.length; n < i; n++) {
                var r = t[n];
                e.push(r.x, r.y, r.z || 0)
            }
            return this.setAttribute("position", new $t(e, 3)), this
        },
        updateFromObject: function(t) {
            var e, n = t.geometry;
            if (t.isMesh) {
                var i = n.__directGeometry;
                if (!0 === n.elementsNeedUpdate && (i = void 0, n.elementsNeedUpdate = !1), void 0 === i) return this.fromGeometry(n);
                i.verticesNeedUpdate = n.verticesNeedUpdate, i.normalsNeedUpdate = n.normalsNeedUpdate, i.colorsNeedUpdate = n.colorsNeedUpdate, i.uvsNeedUpdate = n.uvsNeedUpdate, i.groupsNeedUpdate = n.groupsNeedUpdate, n.verticesNeedUpdate = !1, n.normalsNeedUpdate = !1, n.colorsNeedUpdate = !1, n.uvsNeedUpdate = !1, n.groupsNeedUpdate = !1, n = i
            }
            return !0 === n.verticesNeedUpdate && (void 0 !== (e = this.attributes.position) && (e.copyVector3sArray(n.vertices), e.needsUpdate = !0), n.verticesNeedUpdate = !1), !0 === n.normalsNeedUpdate && (void 0 !== (e = this.attributes.normal) && (e.copyVector3sArray(n.normals), e.needsUpdate = !0), n.normalsNeedUpdate = !1), !0 === n.colorsNeedUpdate && (void 0 !== (e = this.attributes.color) && (e.copyColorsArray(n.colors), e.needsUpdate = !0), n.colorsNeedUpdate = !1), n.uvsNeedUpdate && (void 0 !== (e = this.attributes.uv) && (e.copyVector2sArray(n.uvs), e.needsUpdate = !0), n.uvsNeedUpdate = !1), n.lineDistancesNeedUpdate && (void 0 !== (e = this.attributes.lineDistance) && (e.copyArray(n.lineDistances), e.needsUpdate = !0), n.lineDistancesNeedUpdate = !1), n.groupsNeedUpdate && (n.computeGroups(t.geometry), this.groups = n.groups, n.groupsNeedUpdate = !1), this
        },
        fromGeometry: function(t) {
            return t.__directGeometry = (new ee).fromGeometry(t), this.fromDirectGeometry(t.__directGeometry)
        },
        fromDirectGeometry: function(t) {
            var e = new Float32Array(3 * t.vertices.length);
            if (this.setAttribute("position", new Wt(e, 3).copyVector3sArray(t.vertices)), t.normals.length > 0) {
                var n = new Float32Array(3 * t.normals.length);
                this.setAttribute("normal", new Wt(n, 3).copyVector3sArray(t.normals))
            }
            if (t.colors.length > 0) {
                var i = new Float32Array(3 * t.colors.length);
                this.setAttribute("color", new Wt(i, 3).copyColorsArray(t.colors))
            }
            if (t.uvs.length > 0) {
                var r = new Float32Array(2 * t.uvs.length);
                this.setAttribute("uv", new Wt(r, 2).copyVector2sArray(t.uvs))
            }
            if (t.uvs2.length > 0) {
                var a = new Float32Array(2 * t.uvs2.length);
                this.setAttribute("uv2", new Wt(a, 2).copyVector2sArray(t.uvs2))
            }
            for (var o in this.groups = t.groups, t.morphTargets) {
                for (var s = [], c = t.morphTargets[o], l = 0, h = c.length; l < h; l++) {
                    var u = c[l],
                        p = new $t(3 * u.data.length, 3);
                    p.name = u.name, s.push(p.copyVector3sArray(u.data))
                }
                this.morphAttributes[o] = s
            }
            if (t.skinIndices.length > 0) {
                var d = new $t(4 * t.skinIndices.length, 4);
                this.setAttribute("skinIndex", d.copyVector4sArray(t.skinIndices))
            }
            if (t.skinWeights.length > 0) {
                var f = new $t(4 * t.skinWeights.length, 4);
                this.setAttribute("skinWeight", f.copyVector4sArray(t.skinWeights))
            }
            return null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this
        },
        computeBoundingBox: function() {
            null === this.boundingBox && (this.boundingBox = new ot);
            var t = this.attributes.position,
                e = this.morphAttributes.position;
            if (void 0 !== t) {
                if (this.boundingBox.setFromBufferAttribute(t), e)
                    for (var n = 0, i = e.length; n < i; n++) {
                        var r = e[n];
                        se.setFromBufferAttribute(r), this.morphTargetsRelative ? (le.addVectors(this.boundingBox.min, se.min), this.boundingBox.expandByPoint(le), le.addVectors(this.boundingBox.max, se.max), this.boundingBox.expandByPoint(le)) : (this.boundingBox.expandByPoint(se.min), this.boundingBox.expandByPoint(se.max))
                    }
            } else this.boundingBox.makeEmpty();
            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
        },
        computeBoundingSphere: function() {
            null === this.boundingSphere && (this.boundingSphere = new lt);
            var t = this.attributes.position,
                e = this.morphAttributes.position;
            if (t) {
                var n = this.boundingSphere.center;
                if (se.setFromBufferAttribute(t), e)
                    for (var i = 0, r = e.length; i < r; i++) {
                        var a = e[i];
                        ce.setFromBufferAttribute(a), this.morphTargetsRelative ? (le.addVectors(se.min, ce.min), se.expandByPoint(le), le.addVectors(se.max, ce.max), se.expandByPoint(le)) : (se.expandByPoint(ce.min), se.expandByPoint(ce.max))
                    }
                se.getCenter(n);
                var o = 0;
                for (i = 0, r = t.count; i < r; i++) le.fromBufferAttribute(t, i), o = Math.max(o, n.distanceToSquared(le));
                if (e)
                    for (i = 0, r = e.length; i < r; i++) {
                        a = e[i];
                        for (var s = this.morphTargetsRelative, c = 0, l = a.count; c < l; c++) le.fromBufferAttribute(a, c), s && (oe.fromBufferAttribute(t, c), le.add(oe)), o = Math.max(o, n.distanceToSquared(le))
                    }
                this.boundingSphere.radius = Math.sqrt(o), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
            }
        },
        computeFaceNormals: function() {},
        computeVertexNormals: function() {
            var t = this.index,
                e = this.attributes;
            if (e.position) {
                var n = e.position.array;
                if (void 0 === e.normal) this.setAttribute("normal", new Wt(new Float32Array(n.length), 3));
                else
                    for (var i = e.normal.array, r = 0, a = i.length; r < a; r++) i[r] = 0;
                var o, s, c, l = e.normal.array,
                    h = new x,
                    u = new x,
                    p = new x,
                    d = new x,
                    f = new x;
                if (t) {
                    var m = t.array;
                    for (r = 0, a = t.count; r < a; r += 3) o = 3 * m[r + 0], s = 3 * m[r + 1], c = 3 * m[r + 2], h.fromArray(n, o), u.fromArray(n, s), p.fromArray(n, c), d.subVectors(p, u), f.subVectors(h, u), d.cross(f), l[o] += d.x, l[o + 1] += d.y, l[o + 2] += d.z, l[s] += d.x, l[s + 1] += d.y, l[s + 2] += d.z, l[c] += d.x, l[c + 1] += d.y, l[c + 2] += d.z
                } else
                    for (r = 0, a = n.length; r < a; r += 9) h.fromArray(n, r), u.fromArray(n, r + 3), p.fromArray(n, r + 6), d.subVectors(p, u), f.subVectors(h, u), d.cross(f), l[r] = d.x, l[r + 1] = d.y, l[r + 2] = d.z, l[r + 3] = d.x, l[r + 4] = d.y, l[r + 5] = d.z, l[r + 6] = d.x, l[r + 7] = d.y, l[r + 8] = d.z;
                this.normalizeNormals(), e.normal.needsUpdate = !0
            }
        },
        merge: function(t, e) {
            if (t && t.isBufferGeometry) {
                void 0 === e && (e = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
                var n = this.attributes;
                for (var i in n)
                    if (void 0 !== t.attributes[i])
                        for (var r = n[i].array, a = t.attributes[i], o = a.array, s = a.itemSize * e, c = Math.min(o.length, r.length - s), l = 0, h = s; l < c; l++, h++) r[h] = o[l];
                return this
            }
            console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t)
        },
        normalizeNormals: function() {
            for (var t = this.attributes.normal, e = 0, n = t.count; e < n; e++) le.x = t.getX(e), le.y = t.getY(e), le.z = t.getZ(e), le.normalize(), t.setXYZ(e, le.x, le.y, le.z)
        },
        toNonIndexed: function() {
            function t(t, e) {
                for (var n = t.array, i = t.itemSize, r = new n.constructor(e.length * i), a = 0, o = 0, s = 0, c = e.length; s < c; s++) {
                    a = e[s] * i;
                    for (var l = 0; l < i; l++) r[o++] = n[a++]
                }
                return new Wt(r, i)
            }
            if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
            var e = new he,
                n = this.index.array,
                i = this.attributes;
            for (var r in i) {
                var a = t(i[r], n);
                e.setAttribute(r, a)
            }
            var o = this.morphAttributes;
            for (r in o) {
                for (var s = [], c = o[r], l = 0, h = c.length; l < h; l++) {
                    a = t(c[l], n);
                    s.push(a)
                }
                e.morphAttributes[r] = s
            }
            e.morphTargetsRelative = this.morphTargetsRelative;
            for (var u = this.groups, p = (l = 0, u.length); l < p; l++) {
                var d = u[l];
                e.addGroup(d.start, d.count, d.materialIndex)
            }
            return e
        },
        toJSON: function() {
            var t = {
                metadata: {
                    version: 4.5,
                    type: "BufferGeometry",
                    generator: "BufferGeometry.toJSON"
                }
            };
            if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters) {
                var e = this.parameters;
                for (var n in e) void 0 !== e[n] && (t[n] = e[n]);
                return t
            }
            t.data = {
                attributes: {}
            };
            var i = this.index;
            null !== i && (t.data.index = {
                type: i.array.constructor.name,
                array: Array.prototype.slice.call(i.array)
            });
            var r = this.attributes;
            for (var n in r) {
                var a = (p = r[n]).toJSON();
                "" !== p.name && (a.name = p.name), t.data.attributes[n] = a
            }
            var o = {},
                s = !1;
            for (var n in this.morphAttributes) {
                for (var c = this.morphAttributes[n], l = [], h = 0, u = c.length; h < u; h++) {
                    var p;
                    a = (p = c[h]).toJSON();
                    "" !== p.name && (a.name = p.name), l.push(a)
                }
                l.length > 0 && (o[n] = l, s = !0)
            }
            s && (t.data.morphAttributes = o, t.data.morphTargetsRelative = this.morphTargetsRelative);
            var d = this.groups;
            d.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(d)));
            var f = this.boundingSphere;
            return null !== f && (t.data.boundingSphere = {
                center: f.center.toArray(),
                radius: f.radius
            }), t
        },
        clone: function() {
            return (new he).copy(this)
        },
        copy: function(t) {
            var e, n, i;
            this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;
            var r = t.index;
            null !== r && this.setIndex(r.clone());
            var a = t.attributes;
            for (e in a) {
                var o = a[e];
                this.setAttribute(e, o.clone())
            }
            var s = t.morphAttributes;
            for (e in s) {
                var c = [],
                    l = s[e];
                for (n = 0, i = l.length; n < i; n++) c.push(l[n].clone());
                this.morphAttributes[e] = c
            }
            this.morphTargetsRelative = t.morphTargetsRelative;
            var h = t.groups;
            for (n = 0, i = h.length; n < i; n++) {
                var u = h[n];
                this.addGroup(u.start, u.count, u.materialIndex)
            }
            var p = t.boundingBox;
            null !== p && (this.boundingBox = p.clone());
            var d = t.boundingSphere;
            return null !== d && (this.boundingSphere = d.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    });
    var ue = new A,
        pe = new vt,
        de = new lt,
        fe = new x,
        me = new x,
        ge = new x,
        ve = new x,
        ye = new x,
        xe = new x,
        be = new x,
        _e = new x,
        we = new x,
        Me = new c,
        Se = new c,
        Te = new c,
        Ee = new x,
        Ae = new x;

    function Le(t, e) {
        W.call(this), this.type = "Mesh", this.geometry = void 0 !== t ? t : new he, this.material = void 0 !== e ? e : new kt, this.updateMorphTargets()
    }

    function Re(t, e, n, i, r, a, o, s) {
        if (null === (1 === e.side ? i.intersectTriangle(o, a, r, !0, s) : i.intersectTriangle(r, a, o, 2 !== e.side, s))) return null;
        Ae.copy(s), Ae.applyMatrix4(t.matrixWorld);
        var c = n.ray.origin.distanceTo(Ae);
        return c < n.near || c > n.far ? null : {
            distance: c,
            point: Ae.clone(),
            object: t
        }
    }

    function Pe(t, e, n, i, r, a, o, s, l, h, u, p) {
        fe.fromBufferAttribute(r, h), me.fromBufferAttribute(r, u), ge.fromBufferAttribute(r, p);
        var d = t.morphTargetInfluences;
        if (e.morphTargets && a && d) {
            be.set(0, 0, 0), _e.set(0, 0, 0), we.set(0, 0, 0);
            for (var f = 0, m = a.length; f < m; f++) {
                var g = d[f],
                    v = a[f];
                0 !== g && (ve.fromBufferAttribute(v, h), ye.fromBufferAttribute(v, u), xe.fromBufferAttribute(v, p), o ? (be.addScaledVector(ve, g), _e.addScaledVector(ye, g), we.addScaledVector(xe, g)) : (be.addScaledVector(ve.sub(fe), g), _e.addScaledVector(ye.sub(me), g), we.addScaledVector(xe.sub(ge), g)))
            }
            fe.add(be), me.add(_e), ge.add(we)
        }
        var y = Re(t, e, n, i, fe, me, ge, Ee);
        if (y) {
            s && (Me.fromBufferAttribute(s, h), Se.fromBufferAttribute(s, u), Te.fromBufferAttribute(s, p), y.uv = Ot.getUV(Ee, fe, me, ge, Me, Se, Te, new c)), l && (Me.fromBufferAttribute(l, h), Se.fromBufferAttribute(l, u), Te.fromBufferAttribute(l, p), y.uv2 = Ot.getUV(Ee, fe, me, ge, Me, Se, Te, new c));
            var x = new Gt(h, u, p);
            Ot.getNormal(fe, me, ge, x.normal), y.face = x
        }
        return y
    }
    Le.prototype = Object.assign(Object.create(W.prototype), {
        constructor: Le,
        isMesh: !0,
        copy: function(t) {
            return W.prototype.copy.call(this, t), void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this
        },
        updateMorphTargets: function() {
            var t, e, n, i = this.geometry;
            if (i.isBufferGeometry) {
                var r = i.morphAttributes,
                    a = Object.keys(r);
                if (a.length > 0) {
                    var o = r[a[0]];
                    if (void 0 !== o)
                        for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = o.length; t < e; t++) n = o[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = t
                }
            } else {
                var s = i.morphTargets;
                void 0 !== s && s.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
            }
        },
        raycast: function(t, e) {
            var n, i = this.geometry,
                r = this.material,
                a = this.matrixWorld;
            if (void 0 !== r && (null === i.boundingSphere && i.computeBoundingSphere(), de.copy(i.boundingSphere), de.applyMatrix4(a), !1 !== t.ray.intersectsSphere(de) && (ue.getInverse(a), pe.copy(t.ray).applyMatrix4(ue), null === i.boundingBox || !1 !== pe.intersectsBox(i.boundingBox))))
                if (i.isBufferGeometry) {
                    var o, s, l, h, u, p, d, f, m, g = i.index,
                        v = i.attributes.position,
                        y = i.morphAttributes.position,
                        x = i.morphTargetsRelative,
                        b = i.attributes.uv,
                        _ = i.attributes.uv2,
                        w = i.groups,
                        M = i.drawRange;
                    if (null !== g)
                        if (Array.isArray(r))
                            for (h = 0, p = w.length; h < p; h++)
                                for (m = r[(f = w[h]).materialIndex], u = Math.max(f.start, M.start), d = Math.min(f.start + f.count, M.start + M.count); u < d; u += 3) o = g.getX(u), s = g.getX(u + 1), l = g.getX(u + 2), (n = Pe(this, m, t, pe, v, y, x, b, _, o, s, l)) && (n.faceIndex = Math.floor(u / 3), n.face.materialIndex = f.materialIndex, e.push(n));
                        else
                            for (h = Math.max(0, M.start), p = Math.min(g.count, M.start + M.count); h < p; h += 3) o = g.getX(h), s = g.getX(h + 1), l = g.getX(h + 2), (n = Pe(this, r, t, pe, v, y, x, b, _, o, s, l)) && (n.faceIndex = Math.floor(h / 3), e.push(n));
                    else if (void 0 !== v)
                        if (Array.isArray(r))
                            for (h = 0, p = w.length; h < p; h++)
                                for (m = r[(f = w[h]).materialIndex], u = Math.max(f.start, M.start), d = Math.min(f.start + f.count, M.start + M.count); u < d; u += 3)(n = Pe(this, m, t, pe, v, y, x, b, _, o = u, s = u + 1, l = u + 2)) && (n.faceIndex = Math.floor(u / 3), n.face.materialIndex = f.materialIndex, e.push(n));
                        else
                            for (h = Math.max(0, M.start), p = Math.min(v.count, M.start + M.count); h < p; h += 3)(n = Pe(this, r, t, pe, v, y, x, b, _, o = h, s = h + 1, l = h + 2)) && (n.faceIndex = Math.floor(h / 3), e.push(n))
                } else if (i.isGeometry) {
                var S, T, E, A, L = Array.isArray(r),
                    R = i.vertices,
                    P = i.faces,
                    C = i.faceVertexUvs[0];
                C.length > 0 && (A = C);
                for (var O = 0, D = P.length; O < D; O++) {
                    var N = P[O],
                        I = L ? r[N.materialIndex] : r;
                    if (void 0 !== I && (S = R[N.a], T = R[N.b], E = R[N.c], n = Re(this, I, t, pe, S, T, E, Ee))) {
                        if (A && A[O]) {
                            var z = A[O];
                            Me.copy(z[0]), Se.copy(z[1]), Te.copy(z[2]), n.uv = Ot.getUV(Ee, S, T, E, Me, Se, Te, new c)
                        }
                        n.face = N, n.faceIndex = O, e.push(n)
                    }
                }
            }
        },
        clone: function() {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    });
    var Ce = 0,
        Oe = new A,
        De = new W,
        Ne = new x;

    function Ie() {
        Object.defineProperty(this, "id", {
            value: Ce += 2
        }), this.uuid = s.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
            []
        ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
    }
    Ie.prototype = Object.assign(Object.create(i.prototype), {
        constructor: Ie,
        isGeometry: !0,
        applyMatrix4: function(t) {
            for (var e = (new l).getNormalMatrix(t), n = 0, i = this.vertices.length; n < i; n++) {
                this.vertices[n].applyMatrix4(t)
            }
            for (n = 0, i = this.faces.length; n < i; n++) {
                var r = this.faces[n];
                r.normal.applyMatrix3(e).normalize();
                for (var a = 0, o = r.vertexNormals.length; a < o; a++) r.vertexNormals[a].applyMatrix3(e).normalize()
            }
            return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this
        },
        rotateX: function(t) {
            return Oe.makeRotationX(t), this.applyMatrix4(Oe), this
        },
        rotateY: function(t) {
            return Oe.makeRotationY(t), this.applyMatrix4(Oe), this
        },
        rotateZ: function(t) {
            return Oe.makeRotationZ(t), this.applyMatrix4(Oe), this
        },
        translate: function(t, e, n) {
            return Oe.makeTranslation(t, e, n), this.applyMatrix4(Oe), this
        },
        scale: function(t, e, n) {
            return Oe.makeScale(t, e, n), this.applyMatrix4(Oe), this
        },
        lookAt: function(t) {
            return De.lookAt(t), De.updateMatrix(), this.applyMatrix4(De.matrix), this
        },
        fromBufferGeometry: function(t) {
            var e = this,
                n = null !== t.index ? t.index.array : void 0,
                i = t.attributes;
            if (void 0 === i.position) return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."), this;
            var r = i.position.array,
                a = void 0 !== i.normal ? i.normal.array : void 0,
                o = void 0 !== i.color ? i.color.array : void 0,
                s = void 0 !== i.uv ? i.uv.array : void 0,
                l = void 0 !== i.uv2 ? i.uv2.array : void 0;
            void 0 !== l && (this.faceVertexUvs[1] = []);
            for (var h = 0; h < r.length; h += 3) e.vertices.push((new x).fromArray(r, h)), void 0 !== o && e.colors.push((new zt).fromArray(o, h));

            function u(t, n, i, r) {
                var h = void 0 === o ? [] : [e.colors[t].clone(), e.colors[n].clone(), e.colors[i].clone()],
                    u = new Gt(t, n, i, void 0 === a ? [] : [(new x).fromArray(a, 3 * t), (new x).fromArray(a, 3 * n), (new x).fromArray(a, 3 * i)], h, r);
                e.faces.push(u), void 0 !== s && e.faceVertexUvs[0].push([(new c).fromArray(s, 2 * t), (new c).fromArray(s, 2 * n), (new c).fromArray(s, 2 * i)]), void 0 !== l && e.faceVertexUvs[1].push([(new c).fromArray(l, 2 * t), (new c).fromArray(l, 2 * n), (new c).fromArray(l, 2 * i)])
            }
            var p = t.groups;
            if (p.length > 0)
                for (h = 0; h < p.length; h++)
                    for (var d = p[h], f = d.start, m = f, g = f + d.count; m < g; m += 3) void 0 !== n ? u(n[m], n[m + 1], n[m + 2], d.materialIndex) : u(m, m + 1, m + 2, d.materialIndex);
            else if (void 0 !== n)
                for (h = 0; h < n.length; h += 3) u(n[h], n[h + 1], n[h + 2]);
            else
                for (h = 0; h < r.length / 3; h += 3) u(h, h + 1, h + 2);
            return this.computeFaceNormals(), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), this
        },
        center: function() {
            return this.computeBoundingBox(), this.boundingBox.getCenter(Ne).negate(), this.translate(Ne.x, Ne.y, Ne.z), this
        },
        normalize: function() {
            this.computeBoundingSphere();
            var t = this.boundingSphere.center,
                e = this.boundingSphere.radius,
                n = 0 === e ? 1 : 1 / e,
                i = new A;
            return i.set(n, 0, 0, -n * t.x, 0, n, 0, -n * t.y, 0, 0, n, -n * t.z, 0, 0, 0, 1), this.applyMatrix4(i), this
        },
        computeFaceNormals: function() {
            for (var t = new x, e = new x, n = 0, i = this.faces.length; n < i; n++) {
                var r = this.faces[n],
                    a = this.vertices[r.a],
                    o = this.vertices[r.b],
                    s = this.vertices[r.c];
                t.subVectors(s, o), e.subVectors(a, o), t.cross(e), t.normalize(), r.normal.copy(t)
            }
        },
        computeVertexNormals: function(t) {
            var e, n, i, r, a, o;
            for (void 0 === t && (t = !0), o = new Array(this.vertices.length), e = 0, n = this.vertices.length; e < n; e++) o[e] = new x;
            if (t) {
                var s, c, l, h = new x,
                    u = new x;
                for (i = 0, r = this.faces.length; i < r; i++) a = this.faces[i], s = this.vertices[a.a], c = this.vertices[a.b], l = this.vertices[a.c], h.subVectors(l, c), u.subVectors(s, c), h.cross(u), o[a.a].add(h), o[a.b].add(h), o[a.c].add(h)
            } else
                for (this.computeFaceNormals(), i = 0, r = this.faces.length; i < r; i++) o[(a = this.faces[i]).a].add(a.normal), o[a.b].add(a.normal), o[a.c].add(a.normal);
            for (e = 0, n = this.vertices.length; e < n; e++) o[e].normalize();
            for (i = 0, r = this.faces.length; i < r; i++) {
                var p = (a = this.faces[i]).vertexNormals;
                3 === p.length ? (p[0].copy(o[a.a]), p[1].copy(o[a.b]), p[2].copy(o[a.c])) : (p[0] = o[a.a].clone(), p[1] = o[a.b].clone(), p[2] = o[a.c].clone())
            }
            this.faces.length > 0 && (this.normalsNeedUpdate = !0)
        },
        computeFlatVertexNormals: function() {
            var t, e, n;
            for (this.computeFaceNormals(), t = 0, e = this.faces.length; t < e; t++) {
                var i = (n = this.faces[t]).vertexNormals;
                3 === i.length ? (i[0].copy(n.normal), i[1].copy(n.normal), i[2].copy(n.normal)) : (i[0] = n.normal.clone(), i[1] = n.normal.clone(), i[2] = n.normal.clone())
            }
            this.faces.length > 0 && (this.normalsNeedUpdate = !0)
        },
        computeMorphNormals: function() {
            var t, e, n, i, r;
            for (n = 0, i = this.faces.length; n < i; n++)
                for ((r = this.faces[n]).__originalFaceNormal ? r.__originalFaceNormal.copy(r.normal) : r.__originalFaceNormal = r.normal.clone(), r.__originalVertexNormals || (r.__originalVertexNormals = []), t = 0, e = r.vertexNormals.length; t < e; t++) r.__originalVertexNormals[t] ? r.__originalVertexNormals[t].copy(r.vertexNormals[t]) : r.__originalVertexNormals[t] = r.vertexNormals[t].clone();
            var a = new Ie;
            for (a.faces = this.faces, t = 0, e = this.morphTargets.length; t < e; t++) {
                if (!this.morphNormals[t]) {
                    this.morphNormals[t] = {}, this.morphNormals[t].faceNormals = [], this.morphNormals[t].vertexNormals = [];
                    var o = this.morphNormals[t].faceNormals,
                        s = this.morphNormals[t].vertexNormals;
                    for (n = 0, i = this.faces.length; n < i; n++) c = new x, l = {
                        a: new x,
                        b: new x,
                        c: new x
                    }, o.push(c), s.push(l)
                }
                var c, l, h = this.morphNormals[t];
                for (a.vertices = this.morphTargets[t].vertices, a.computeFaceNormals(), a.computeVertexNormals(), n = 0, i = this.faces.length; n < i; n++) r = this.faces[n], c = h.faceNormals[n], l = h.vertexNormals[n], c.copy(r.normal), l.a.copy(r.vertexNormals[0]), l.b.copy(r.vertexNormals[1]), l.c.copy(r.vertexNormals[2])
            }
            for (n = 0, i = this.faces.length; n < i; n++)(r = this.faces[n]).normal = r.__originalFaceNormal, r.vertexNormals = r.__originalVertexNormals
        },
        computeBoundingBox: function() {
            null === this.boundingBox && (this.boundingBox = new ot), this.boundingBox.setFromPoints(this.vertices)
        },
        computeBoundingSphere: function() {
            null === this.boundingSphere && (this.boundingSphere = new lt), this.boundingSphere.setFromPoints(this.vertices)
        },
        merge: function(t, e, n) {
            if (t && t.isGeometry) {
                var i, r = this.vertices.length,
                    a = this.vertices,
                    o = t.vertices,
                    s = this.faces,
                    c = t.faces,
                    h = this.colors,
                    u = t.colors;
                void 0 === n && (n = 0), void 0 !== e && (i = (new l).getNormalMatrix(e));
                for (var p = 0, d = o.length; p < d; p++) {
                    var f = o[p].clone();
                    void 0 !== e && f.applyMatrix4(e), a.push(f)
                }
                for (p = 0, d = u.length; p < d; p++) h.push(u[p].clone());
                for (p = 0, d = c.length; p < d; p++) {
                    var m, g, v, y = c[p],
                        x = y.vertexNormals,
                        b = y.vertexColors;
                    (m = new Gt(y.a + r, y.b + r, y.c + r)).normal.copy(y.normal), void 0 !== i && m.normal.applyMatrix3(i).normalize();
                    for (var _ = 0, w = x.length; _ < w; _++) g = x[_].clone(), void 0 !== i && g.applyMatrix3(i).normalize(), m.vertexNormals.push(g);
                    m.color.copy(y.color);
                    for (_ = 0, w = b.length; _ < w; _++) v = b[_], m.vertexColors.push(v.clone());
                    m.materialIndex = y.materialIndex + n, s.push(m)
                }
                for (p = 0, d = t.faceVertexUvs.length; p < d; p++) {
                    var M = t.faceVertexUvs[p];
                    void 0 === this.faceVertexUvs[p] && (this.faceVertexUvs[p] = []);
                    for (_ = 0, w = M.length; _ < w; _++) {
                        for (var S = M[_], T = [], E = 0, A = S.length; E < A; E++) T.push(S[E].clone());
                        this.faceVertexUvs[p].push(T)
                    }
                }
            } else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", t)
        },
        mergeMesh: function(t) {
            t && t.isMesh ? (t.matrixAutoUpdate && t.updateMatrix(), this.merge(t.geometry, t.matrix)) : console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", t)
        },
        mergeVertices: function() {
            var t, e, n, i, r, a, o, s, c = {},
                l = [],
                h = [],
                u = Math.pow(10, 4);
            for (n = 0, i = this.vertices.length; n < i; n++) t = this.vertices[n], void 0 === c[e = Math.round(t.x * u) + "_" + Math.round(t.y * u) + "_" + Math.round(t.z * u)] ? (c[e] = n, l.push(this.vertices[n]), h[n] = l.length - 1) : h[n] = h[c[e]];
            var p = [];
            for (n = 0, i = this.faces.length; n < i; n++) {
                (r = this.faces[n]).a = h[r.a], r.b = h[r.b], r.c = h[r.c], a = [r.a, r.b, r.c];
                for (var d = 0; d < 3; d++)
                    if (a[d] === a[(d + 1) % 3]) {
                        p.push(n);
                        break
                    }
            }
            for (n = p.length - 1; n >= 0; n--) {
                var f = p[n];
                for (this.faces.splice(f, 1), o = 0, s = this.faceVertexUvs.length; o < s; o++) this.faceVertexUvs[o].splice(f, 1)
            }
            var m = this.vertices.length - l.length;
            return this.vertices = l, m
        },
        setFromPoints: function(t) {
            this.vertices = [];
            for (var e = 0, n = t.length; e < n; e++) {
                var i = t[e];
                this.vertices.push(new x(i.x, i.y, i.z || 0))
            }
            return this
        },
        sortFacesByMaterialIndex: function() {
            for (var t = this.faces, e = t.length, n = 0; n < e; n++) t[n]._id = n;
            t.sort((function(t, e) {
                return t.materialIndex - e.materialIndex
            }));
            var i, r, a = this.faceVertexUvs[0],
                o = this.faceVertexUvs[1];
            a && a.length === e && (i = []), o && o.length === e && (r = []);
            for (n = 0; n < e; n++) {
                var s = t[n]._id;
                i && i.push(a[s]), r && r.push(o[s])
            }
            i && (this.faceVertexUvs[0] = i), r && (this.faceVertexUvs[1] = r)
        },
        toJSON: function() {
            var t = {
                metadata: {
                    version: 4.5,
                    type: "Geometry",
                    generator: "Geometry.toJSON"
                }
            };
            if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), void 0 !== this.parameters) {
                var e = this.parameters;
                for (var n in e) void 0 !== e[n] && (t[n] = e[n]);
                return t
            }
            for (var i = [], r = 0; r < this.vertices.length; r++) {
                var a = this.vertices[r];
                i.push(a.x, a.y, a.z)
            }
            var o = [],
                s = [],
                c = {},
                l = [],
                h = {},
                u = [],
                p = {};
            for (r = 0; r < this.faces.length; r++) {
                var d = this.faces[r],
                    f = void 0 !== this.faceVertexUvs[0][r],
                    m = d.normal.length() > 0,
                    g = d.vertexNormals.length > 0,
                    v = 1 !== d.color.r || 1 !== d.color.g || 1 !== d.color.b,
                    y = d.vertexColors.length > 0,
                    x = 0;
                if (x = M(x, 0, 0), x = M(x, 1, !0), x = M(x, 2, !1), x = M(x, 3, f), x = M(x, 4, m), x = M(x, 5, g), x = M(x, 6, v), x = M(x, 7, y), o.push(x), o.push(d.a, d.b, d.c), o.push(d.materialIndex), f) {
                    var b = this.faceVertexUvs[0][r];
                    o.push(E(b[0]), E(b[1]), E(b[2]))
                }
                if (m && o.push(S(d.normal)), g) {
                    var _ = d.vertexNormals;
                    o.push(S(_[0]), S(_[1]), S(_[2]))
                }
                if (v && o.push(T(d.color)), y) {
                    var w = d.vertexColors;
                    o.push(T(w[0]), T(w[1]), T(w[2]))
                }
            }

            function M(t, e, n) {
                return n ? t | 1 << e : t & ~(1 << e)
            }

            function S(t) {
                var e = t.x.toString() + t.y.toString() + t.z.toString();
                return void 0 !== c[e] || (c[e] = s.length / 3, s.push(t.x, t.y, t.z)), c[e]
            }

            function T(t) {
                var e = t.r.toString() + t.g.toString() + t.b.toString();
                return void 0 !== h[e] || (h[e] = l.length, l.push(t.getHex())), h[e]
            }

            function E(t) {
                var e = t.x.toString() + t.y.toString();
                return void 0 !== p[e] || (p[e] = u.length / 2, u.push(t.x, t.y)), p[e]
            }
            return t.data = {}, t.data.vertices = i, t.data.normals = s, l.length > 0 && (t.data.colors = l), u.length > 0 && (t.data.uvs = [u]), t.data.faces = o, t
        },
        clone: function() {
            return (new Ie).copy(this)
        },
        copy: function(t) {
            var e, n, i, r, a, o;
            this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
                []
            ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;
            var s = t.vertices;
            for (e = 0, n = s.length; e < n; e++) this.vertices.push(s[e].clone());
            var c = t.colors;
            for (e = 0, n = c.length; e < n; e++) this.colors.push(c[e].clone());
            var l = t.faces;
            for (e = 0, n = l.length; e < n; e++) this.faces.push(l[e].clone());
            for (e = 0, n = t.faceVertexUvs.length; e < n; e++) {
                var h = t.faceVertexUvs[e];
                for (void 0 === this.faceVertexUvs[e] && (this.faceVertexUvs[e] = []), i = 0, r = h.length; i < r; i++) {
                    var u = h[i],
                        p = [];
                    for (a = 0, o = u.length; a < o; a++) {
                        var d = u[a];
                        p.push(d.clone())
                    }
                    this.faceVertexUvs[e].push(p)
                }
            }
            var f = t.morphTargets;
            for (e = 0, n = f.length; e < n; e++) {
                var m = {};
                if (m.name = f[e].name, void 0 !== f[e].vertices)
                    for (m.vertices = [], i = 0, r = f[e].vertices.length; i < r; i++) m.vertices.push(f[e].vertices[i].clone());
                if (void 0 !== f[e].normals)
                    for (m.normals = [], i = 0, r = f[e].normals.length; i < r; i++) m.normals.push(f[e].normals[i].clone());
                this.morphTargets.push(m)
            }
            var g = t.morphNormals;
            for (e = 0, n = g.length; e < n; e++) {
                var v = {};
                if (void 0 !== g[e].vertexNormals)
                    for (v.vertexNormals = [], i = 0, r = g[e].vertexNormals.length; i < r; i++) {
                        var y = g[e].vertexNormals[i],
                            x = {};
                        x.a = y.a.clone(), x.b = y.b.clone(), x.c = y.c.clone(), v.vertexNormals.push(x)
                    }
                if (void 0 !== g[e].faceNormals)
                    for (v.faceNormals = [], i = 0, r = g[e].faceNormals.length; i < r; i++) v.faceNormals.push(g[e].faceNormals[i].clone());
                this.morphNormals.push(v)
            }
            var b = t.skinWeights;
            for (e = 0, n = b.length; e < n; e++) this.skinWeights.push(b[e].clone());
            var _ = t.skinIndices;
            for (e = 0, n = _.length; e < n; e++) this.skinIndices.push(_[e].clone());
            var w = t.lineDistances;
            for (e = 0, n = w.length; e < n; e++) this.lineDistances.push(w[e]);
            var M = t.boundingBox;
            null !== M && (this.boundingBox = M.clone());
            var S = t.boundingSphere;
            return null !== S && (this.boundingSphere = S.clone()), this.elementsNeedUpdate = t.elementsNeedUpdate, this.verticesNeedUpdate = t.verticesNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    });
    class ze extends he {
        constructor(t, e, n, i, r, a) {
            super(), this.type = "BoxBufferGeometry", this.parameters = {
                width: t,
                height: e,
                depth: n,
                widthSegments: i,
                heightSegments: r,
                depthSegments: a
            };
            var o = this;
            t = t || 1, e = e || 1, n = n || 1, i = Math.floor(i) || 1, r = Math.floor(r) || 1, a = Math.floor(a) || 1;
            var s = [],
                c = [],
                l = [],
                h = [],
                u = 0,
                p = 0;

            function d(t, e, n, i, r, a, d, f, m, g, v) {
                var y, b, _ = a / m,
                    w = d / g,
                    M = a / 2,
                    S = d / 2,
                    T = f / 2,
                    E = m + 1,
                    A = g + 1,
                    L = 0,
                    R = 0,
                    P = new x;
                for (b = 0; b < A; b++) {
                    var C = b * w - S;
                    for (y = 0; y < E; y++) {
                        var O = y * _ - M;
                        P[t] = O * i, P[e] = C * r, P[n] = T, c.push(P.x, P.y, P.z), P[t] = 0, P[e] = 0, P[n] = f > 0 ? 1 : -1, l.push(P.x, P.y, P.z), h.push(y / m), h.push(1 - b / g), L += 1
                    }
                }
                for (b = 0; b < g; b++)
                    for (y = 0; y < m; y++) {
                        var D = u + y + E * b,
                            N = u + y + E * (b + 1),
                            I = u + (y + 1) + E * (b + 1),
                            z = u + (y + 1) + E * b;
                        s.push(D, N, z), s.push(N, I, z), R += 6
                    }
                o.addGroup(p, R, v), p += R, u += L
            }
            d("z", "y", "x", -1, -1, n, e, t, a, r, 0), d("z", "y", "x", 1, -1, n, e, -t, a, r, 1), d("x", "z", "y", 1, 1, t, n, e, i, a, 2), d("x", "z", "y", 1, -1, t, n, -e, i, a, 3), d("x", "y", "z", 1, -1, t, e, n, i, r, 4), d("x", "y", "z", -1, -1, t, e, -n, i, r, 5), this.setIndex(s), this.setAttribute("position", new $t(c, 3)), this.setAttribute("normal", new $t(l, 3)), this.setAttribute("uv", new $t(h, 2))
        }
    }

    function Ue(t) {
        var e = {};
        for (var n in t)
            for (var i in e[n] = {}, t[n]) {
                var r = t[n][i];
                r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture) ? e[n][i] = r.clone() : Array.isArray(r) ? e[n][i] = r.slice() : e[n][i] = r
            }
        return e
    }

    function Be(t) {
        for (var e = {}, n = 0; n < t.length; n++) {
            var i = Ue(t[n]);
            for (var r in i) e[r] = i[r]
        }
        return e
    }
    var Fe = {
        clone: Ue,
        merge: Be
    };

    function Ge(t) {
        Vt.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        }, this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
        }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(t))
    }

    function He() {
        W.call(this), this.type = "Camera", this.matrixWorldInverse = new A, this.projectionMatrix = new A, this.projectionMatrixInverse = new A
    }

    function Ve(t, e, n, i) {
        He.call(this), this.type = "PerspectiveCamera", this.fov = void 0 !== t ? t : 50, this.zoom = 1, this.near = void 0 !== n ? n : .1, this.far = void 0 !== i ? i : 2e3, this.focus = 10, this.aspect = void 0 !== e ? e : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
    }
    Ge.prototype = Object.create(Vt.prototype), Ge.prototype.constructor = Ge, Ge.prototype.isShaderMaterial = !0, Ge.prototype.copy = function(t) {
        return Vt.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = Ue(t.uniforms), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = t.extensions, this
    }, Ge.prototype.toJSON = function(t) {
        var e = Vt.prototype.toJSON.call(this, t);
        for (var n in e.uniforms = {}, this.uniforms) {
            var i = this.uniforms[n].value;
            i && i.isTexture ? e.uniforms[n] = {
                type: "t",
                value: i.toJSON(t).uuid
            } : i && i.isColor ? e.uniforms[n] = {
                type: "c",
                value: i.getHex()
            } : i && i.isVector2 ? e.uniforms[n] = {
                type: "v2",
                value: i.toArray()
            } : i && i.isVector3 ? e.uniforms[n] = {
                type: "v3",
                value: i.toArray()
            } : i && i.isVector4 ? e.uniforms[n] = {
                type: "v4",
                value: i.toArray()
            } : i && i.isMatrix3 ? e.uniforms[n] = {
                type: "m3",
                value: i.toArray()
            } : i && i.isMatrix4 ? e.uniforms[n] = {
                type: "m4",
                value: i.toArray()
            } : e.uniforms[n] = {
                value: i
            }
        }
        Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader;
        var r = {};
        for (var a in this.extensions) !0 === this.extensions[a] && (r[a] = !0);
        return Object.keys(r).length > 0 && (e.extensions = r), e
    }, He.prototype = Object.assign(Object.create(W.prototype), {
        constructor: He,
        isCamera: !0,
        copy: function(t, e) {
            return W.prototype.copy.call(this, t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this
        },
        getWorldDirection: function(t) {
            void 0 === t && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), t = new x), this.updateMatrixWorld(!0);
            var e = this.matrixWorld.elements;
            return t.set(-e[8], -e[9], -e[10]).normalize()
        },
        updateMatrixWorld: function(t) {
            W.prototype.updateMatrixWorld.call(this, t), this.matrixWorldInverse.getInverse(this.matrixWorld)
        },
        updateWorldMatrix: function(t, e) {
            W.prototype.updateWorldMatrix.call(this, t, e), this.matrixWorldInverse.getInverse(this.matrixWorld)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        }
    }), Ve.prototype = Object.assign(Object.create(He.prototype), {
        constructor: Ve,
        isPerspectiveCamera: !0,
        copy: function(t, e) {
            return He.prototype.copy.call(this, t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this
        },
        setFocalLength: function(t) {
            var e = .5 * this.getFilmHeight() / t;
            this.fov = 2 * s.RAD2DEG * Math.atan(e), this.updateProjectionMatrix()
        },
        getFocalLength: function() {
            var t = Math.tan(.5 * s.DEG2RAD * this.fov);
            return .5 * this.getFilmHeight() / t
        },
        getEffectiveFOV: function() {
            return 2 * s.RAD2DEG * Math.atan(Math.tan(.5 * s.DEG2RAD * this.fov) / this.zoom)
        },
        getFilmWidth: function() {
            return this.filmGauge * Math.min(this.aspect, 1)
        },
        getFilmHeight: function() {
            return this.filmGauge / Math.max(this.aspect, 1)
        },
        setViewOffset: function(t, e, n, i, r, a) {
            this.aspect = t / e, null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            var t = this.near,
                e = t * Math.tan(.5 * s.DEG2RAD * this.fov) / this.zoom,
                n = 2 * e,
                i = this.aspect * n,
                r = -.5 * i,
                a = this.view;
            if (null !== this.view && this.view.enabled) {
                var o = a.fullWidth,
                    c = a.fullHeight;
                r += a.offsetX * i / o, e -= a.offsetY * n / c, i *= a.width / o, n *= a.height / c
            }
            var l = this.filmOffset;
            0 !== l && (r += t * l / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix)
        },
        toJSON: function(t) {
            var e = W.prototype.toJSON.call(this, t);
            return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
        }
    });

    function ke(t, e, n, i) {
        W.call(this), this.type = "CubeCamera";
        var r = new Ve(90, 1, t, e);
        r.up.set(0, -1, 0), r.lookAt(new x(1, 0, 0)), this.add(r);
        var a = new Ve(90, 1, t, e);
        a.up.set(0, -1, 0), a.lookAt(new x(-1, 0, 0)), this.add(a);
        var o = new Ve(90, 1, t, e);
        o.up.set(0, 0, 1), o.lookAt(new x(0, 1, 0)), this.add(o);
        var s = new Ve(90, 1, t, e);
        s.up.set(0, 0, -1), s.lookAt(new x(0, -1, 0)), this.add(s);
        var c = new Ve(90, 1, t, e);
        c.up.set(0, -1, 0), c.lookAt(new x(0, 0, 1)), this.add(c);
        var l = new Ve(90, 1, t, e);
        l.up.set(0, -1, 0), l.lookAt(new x(0, 0, -1)), this.add(l), i = i || {
            format: 1022,
            magFilter: 1006,
            minFilter: 1006
        }, this.renderTarget = new je(n, i), this.renderTarget.texture.name = "CubeCamera", this.update = function(t, e) {
            null === this.parent && this.updateMatrixWorld();
            var n = t.getRenderTarget(),
                i = this.renderTarget,
                h = i.texture.generateMipmaps;
            i.texture.generateMipmaps = !1, t.setRenderTarget(i, 0), t.render(e, r), t.setRenderTarget(i, 1), t.render(e, a), t.setRenderTarget(i, 2), t.render(e, o), t.setRenderTarget(i, 3), t.render(e, s), t.setRenderTarget(i, 4), t.render(e, c), i.texture.generateMipmaps = h, t.setRenderTarget(i, 5), t.render(e, l), t.setRenderTarget(n)
        }, this.clear = function(t, e, n, i) {
            for (var r = t.getRenderTarget(), a = this.renderTarget, o = 0; o < 6; o++) t.setRenderTarget(a, o), t.clear(e, n, i);
            t.setRenderTarget(r)
        }
    }

    function je(t, e, n) {
        Number.isInteger(e) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"), e = n), f.call(this, t, t, e)
    }

    function We(t, e, n, i, r, a, o, s, c, l, h, u) {
        p.call(this, null, a, o, s, c, l, i, r, h, u), this.image = {
            data: t || null,
            width: e || 1,
            height: n || 1
        }, this.magFilter = void 0 !== c ? c : 1003, this.minFilter = void 0 !== l ? l : 1003, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0
    }
    ke.prototype = Object.create(W.prototype), ke.prototype.constructor = ke, je.prototype = Object.create(f.prototype), je.prototype.constructor = je, je.prototype.isWebGLCubeRenderTarget = !0, je.prototype.fromEquirectangularTexture = function(t, e) {
        this.texture.type = e.type, this.texture.format = e.format, this.texture.encoding = e.encoding;
        var n = new q,
            i = {
                uniforms: {
                    tEquirect: {
                        value: null
                    }
                },
                vertexShader: ["varying vec3 vWorldDirection;", "vec3 transformDirection( in vec3 dir, in mat4 matrix ) {", "\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );", "}", "void main() {", "\tvWorldDirection = transformDirection( position, modelMatrix );", "\t#include <begin_vertex>", "\t#include <project_vertex>", "}"].join("\n"),
                fragmentShader: ["uniform sampler2D tEquirect;", "varying vec3 vWorldDirection;", "#define RECIPROCAL_PI 0.31830988618", "#define RECIPROCAL_PI2 0.15915494", "void main() {", "\tvec3 direction = normalize( vWorldDirection );", "\tvec2 sampleUV;", "\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;", "\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;", "\tgl_FragColor = texture2D( tEquirect, sampleUV );", "}"].join("\n")
            },
            r = new Ge({
                type: "CubemapFromEquirect",
                uniforms: Ue(i.uniforms),
                vertexShader: i.vertexShader,
                fragmentShader: i.fragmentShader,
                side: 1,
                blending: 0
            });
        r.uniforms.tEquirect.value = e;
        var a = new Le(new ze(5, 5, 5), r);
        n.add(a);
        var o = new ke(1, 10, 1);
        return o.renderTarget = this, o.renderTarget.texture.name = "CubeCameraTexture", o.update(t, n), a.geometry.dispose(), a.material.dispose(), this
    }, We.prototype = Object.create(p.prototype), We.prototype.constructor = We, We.prototype.isDataTexture = !0;
    var qe = new lt,
        Xe = new x;

    function Ye(t, e, n, i, r, a) {
        this.planes = [void 0 !== t ? t : new _t, void 0 !== e ? e : new _t, void 0 !== n ? n : new _t, void 0 !== i ? i : new _t, void 0 !== r ? r : new _t, void 0 !== a ? a : new _t]
    }
    Object.assign(Ye.prototype, {
        set: function(t, e, n, i, r, a) {
            var o = this.planes;
            return o[0].copy(t), o[1].copy(e), o[2].copy(n), o[3].copy(i), o[4].copy(r), o[5].copy(a), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            for (var e = this.planes, n = 0; n < 6; n++) e[n].copy(t.planes[n]);
            return this
        },
        setFromProjectionMatrix: function(t) {
            var e = this.planes,
                n = t.elements,
                i = n[0],
                r = n[1],
                a = n[2],
                o = n[3],
                s = n[4],
                c = n[5],
                l = n[6],
                h = n[7],
                u = n[8],
                p = n[9],
                d = n[10],
                f = n[11],
                m = n[12],
                g = n[13],
                v = n[14],
                y = n[15];
            return e[0].setComponents(o - i, h - s, f - u, y - m).normalize(), e[1].setComponents(o + i, h + s, f + u, y + m).normalize(), e[2].setComponents(o + r, h + c, f + p, y + g).normalize(), e[3].setComponents(o - r, h - c, f - p, y - g).normalize(), e[4].setComponents(o - a, h - l, f - d, y - v).normalize(), e[5].setComponents(o + a, h + l, f + d, y + v).normalize(), this
        },
        intersectsObject: function(t) {
            var e = t.geometry;
            return null === e.boundingSphere && e.computeBoundingSphere(), qe.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(qe)
        },
        intersectsSprite: function(t) {
            return qe.center.set(0, 0, 0), qe.radius = .7071067811865476, qe.applyMatrix4(t.matrixWorld), this.intersectsSphere(qe)
        },
        intersectsSphere: function(t) {
            for (var e = this.planes, n = t.center, i = -t.radius, r = 0; r < 6; r++) {
                if (e[r].distanceToPoint(n) < i) return !1
            }
            return !0
        },
        intersectsBox: function(t) {
            for (var e = this.planes, n = 0; n < 6; n++) {
                var i = e[n];
                if (Xe.x = i.normal.x > 0 ? t.max.x : t.min.x, Xe.y = i.normal.y > 0 ? t.max.y : t.min.y, Xe.z = i.normal.z > 0 ? t.max.z : t.min.z, i.distanceToPoint(Xe) < 0) return !1
            }
            return !0
        },
        containsPoint: function(t) {
            for (var e = this.planes, n = 0; n < 6; n++)
                if (e[n].distanceToPoint(t) < 0) return !1;
            return !0
        }
    });
    var Ze = {
        common: {
            diffuse: {
                value: new zt(15658734)
            },
            opacity: {
                value: 1
            },
            map: {
                value: null
            },
            uvTransform: {
                value: new l
            },
            uv2Transform: {
                value: new l
            },
            alphaMap: {
                value: null
            }
        },
        specularmap: {
            specularMap: {
                value: null
            }
        },
        envmap: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            reflectivity: {
                value: 1
            },
            refractionRatio: {
                value: .98
            },
            maxMipLevel: {
                value: 0
            }
        },
        aomap: {
            aoMap: {
                value: null
            },
            aoMapIntensity: {
                value: 1
            }
        },
        lightmap: {
            lightMap: {
                value: null
            },
            lightMapIntensity: {
                value: 1
            }
        },
        emissivemap: {
            emissiveMap: {
                value: null
            }
        },
        bumpmap: {
            bumpMap: {
                value: null
            },
            bumpScale: {
                value: 1
            }
        },
        normalmap: {
            normalMap: {
                value: null
            },
            normalScale: {
                value: new c(1, 1)
            }
        },
        displacementmap: {
            displacementMap: {
                value: null
            },
            displacementScale: {
                value: 1
            },
            displacementBias: {
                value: 0
            }
        },
        roughnessmap: {
            roughnessMap: {
                value: null
            }
        },
        metalnessmap: {
            metalnessMap: {
                value: null
            }
        },
        gradientmap: {
            gradientMap: {
                value: null
            }
        },
        fog: {
            fogDensity: {
                value: 25e-5
            },
            fogNear: {
                value: 1
            },
            fogFar: {
                value: 2e3
            },
            fogColor: {
                value: new zt(16777215)
            }
        },
        lights: {
            ambientLightColor: {
                value: []
            },
            lightProbe: {
                value: []
            },
            directionalLights: {
                value: [],
                properties: {
                    direction: {},
                    color: {}
                }
            },
            directionalLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            directionalShadowMap: {
                value: []
            },
            directionalShadowMatrix: {
                value: []
            },
            spotLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    direction: {},
                    distance: {},
                    coneCos: {},
                    penumbraCos: {},
                    decay: {}
                }
            },
            spotLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            spotShadowMap: {
                value: []
            },
            spotShadowMatrix: {
                value: []
            },
            pointLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    decay: {},
                    distance: {}
                }
            },
            pointLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {},
                    shadowCameraNear: {},
                    shadowCameraFar: {}
                }
            },
            pointShadowMap: {
                value: []
            },
            pointShadowMatrix: {
                value: []
            },
            hemisphereLights: {
                value: [],
                properties: {
                    direction: {},
                    skyColor: {},
                    groundColor: {}
                }
            },
            rectAreaLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    width: {},
                    height: {}
                }
            }
        },
        points: {
            diffuse: {
                value: new zt(15658734)
            },
            opacity: {
                value: 1
            },
            size: {
                value: 1
            },
            scale: {
                value: 1
            },
            map: {
                value: null
            },
            alphaMap: {
                value: null
            },
            uvTransform: {
                value: new l
            }
        },
        sprite: {
            diffuse: {
                value: new zt(15658734)
            },
            opacity: {
                value: 1
            },
            center: {
                value: new c(.5, .5)
            },
            rotation: {
                value: 0
            },
            map: {
                value: null
            },
            alphaMap: {
                value: null
            },
            uvTransform: {
                value: new l
            }
        }
    };

    function Je() {
        var t = null,
            e = !1,
            n = null;

        function i(r, a) {
            !1 !== e && (n(r, a), t.requestAnimationFrame(i))
        }
        return {
            start: function() {
                !0 !== e && null !== n && (t.requestAnimationFrame(i), e = !0)
            },
            stop: function() {
                e = !1
            },
            setAnimationLoop: function(t) {
                n = t
            },
            setContext: function(e) {
                t = e
            }
        }
    }

    function Qe(t, e) {
        var n = e.isWebGL2,
            i = new WeakMap;
        return {
            get: function(t) {
                return t.isInterleavedBufferAttribute && (t = t.data), i.get(t)
            },
            remove: function(e) {
                e.isInterleavedBufferAttribute && (e = e.data);
                var n = i.get(e);
                n && (t.deleteBuffer(n.buffer), i.delete(e))
            },
            update: function(e, r) {
                e.isInterleavedBufferAttribute && (e = e.data);
                var a = i.get(e);
                void 0 === a ? i.set(e, function(e, n) {
                    var i = e.array,
                        r = e.usage,
                        a = t.createBuffer();
                    t.bindBuffer(n, a), t.bufferData(n, i, r), e.onUploadCallback();
                    var o = 5126;
                    return i instanceof Float32Array ? o = 5126 : i instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : i instanceof Uint16Array ? o = 5123 : i instanceof Int16Array ? o = 5122 : i instanceof Uint32Array ? o = 5125 : i instanceof Int32Array ? o = 5124 : i instanceof Int8Array ? o = 5120 : i instanceof Uint8Array && (o = 5121), {
                        buffer: a,
                        type: o,
                        bytesPerElement: i.BYTES_PER_ELEMENT,
                        version: e.version
                    }
                }(e, r)) : a.version < e.version && (! function(e, i, r) {
                    var a = i.array,
                        o = i.updateRange;
                    t.bindBuffer(r, e), -1 === o.count ? t.bufferSubData(r, 0, a) : (n ? t.bufferSubData(r, o.offset * a.BYTES_PER_ELEMENT, a, o.offset, o.count) : t.bufferSubData(r, o.offset * a.BYTES_PER_ELEMENT, a.subarray(o.offset, o.offset + o.count)), o.count = -1)
                }(a.buffer, e, r), a.version = e.version)
            }
        }
    }

    function Ke(t, e, n, i) {
        Ie.call(this), this.type = "PlaneGeometry", this.parameters = {
            width: t,
            height: e,
            widthSegments: n,
            heightSegments: i
        }, this.fromBufferGeometry(new $e(t, e, n, i)), this.mergeVertices()
    }

    function $e(t, e, n, i) {
        he.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
            width: t,
            height: e,
            widthSegments: n,
            heightSegments: i
        };
        var r, a, o = (t = t || 1) / 2,
            s = (e = e || 1) / 2,
            c = Math.floor(n) || 1,
            l = Math.floor(i) || 1,
            h = c + 1,
            u = l + 1,
            p = t / c,
            d = e / l,
            f = [],
            m = [],
            g = [],
            v = [];
        for (a = 0; a < u; a++) {
            var y = a * d - s;
            for (r = 0; r < h; r++) {
                var x = r * p - o;
                m.push(x, -y, 0), g.push(0, 0, 1), v.push(r / c), v.push(1 - a / l)
            }
        }
        for (a = 0; a < l; a++)
            for (r = 0; r < c; r++) {
                var b = r + h * a,
                    _ = r + h * (a + 1),
                    w = r + 1 + h * (a + 1),
                    M = r + 1 + h * a;
                f.push(b, _, M), f.push(_, w, M)
            }
        this.setIndex(f), this.setAttribute("position", new $t(m, 3)), this.setAttribute("normal", new $t(g, 3)), this.setAttribute("uv", new $t(v, 2))
    }
    Ke.prototype = Object.create(Ie.prototype), Ke.prototype.constructor = Ke, $e.prototype = Object.create(he.prototype), $e.prototype.constructor = $e;
    var tn = {
            alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
            alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
            alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
            aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
            aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
            begin_vertex: "vec3 transformed = vec3( position );",
            beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
            bsdfs: "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha  = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
            bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
            clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
            clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
            clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
            clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
            color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
            color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
            color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
            color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
            common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n  return m[ 2 ][ 3 ] == - 1.0;\n}",
            cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_maxMipLevel 8.0\n#define cubeUV_minMipLevel 4.0\n#define cubeUV_maxTileSize 256.0\n#define cubeUV_minTileSize 16.0\nfloat getFace(vec3 direction) {\n    vec3 absDirection = abs(direction);\n    float face = -1.0;\n    if (absDirection.x > absDirection.z) {\n      if (absDirection.x > absDirection.y)\n        face = direction.x > 0.0 ? 0.0 : 3.0;\n      else\n        face = direction.y > 0.0 ? 1.0 : 4.0;\n    } else {\n      if (absDirection.z > absDirection.y)\n        face = direction.z > 0.0 ? 2.0 : 5.0;\n      else\n        face = direction.y > 0.0 ? 1.0 : 4.0;\n    }\n    return face;\n}\nvec2 getUV(vec3 direction, float face) {\n    vec2 uv;\n    if (face == 0.0) {\n      uv = vec2(-direction.z, direction.y) / abs(direction.x);\n    } else if (face == 1.0) {\n      uv = vec2(direction.x, -direction.z) / abs(direction.y);\n    } else if (face == 2.0) {\n      uv = direction.xy / abs(direction.z);\n    } else if (face == 3.0) {\n      uv = vec2(direction.z, direction.y) / abs(direction.x);\n    } else if (face == 4.0) {\n      uv = direction.xz / abs(direction.y);\n    } else {\n      uv = vec2(-direction.x, direction.y) / abs(direction.z);\n    }\n    return 0.5 * (uv + 1.0);\n}\nvec3 bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {\n  float face = getFace(direction);\n  float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);\n  mipInt = max(mipInt, cubeUV_minMipLevel);\n  float faceSize = exp2(mipInt);\n  float texelSize = 1.0 / (3.0 * cubeUV_maxTileSize);\n  vec2 uv = getUV(direction, face) * (faceSize - 1.0);\n  vec2 f = fract(uv);\n  uv += 0.5 - f;\n  if (face > 2.0) {\n    uv.y += faceSize;\n    face -= 3.0;\n  }\n  uv.x += face * faceSize;\n  if(mipInt < cubeUV_maxMipLevel){\n    uv.y += 2.0 * cubeUV_maxTileSize;\n  }\n  uv.y += filterInt * 2.0 * cubeUV_minTileSize;\n  uv.x += 3.0 * max(0.0, cubeUV_maxTileSize - 2.0 * faceSize);\n  uv *= texelSize;\n  vec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.x += texelSize;\n  vec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.y += texelSize;\n  vec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.x -= texelSize;\n  vec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  vec3 tm = mix(tl, tr, f.x);\n  vec3 bm = mix(bl, br, f.x);\n  return mix(tm, bm, f.y);\n}\n#define r0 1.0\n#define v0 0.339\n#define m0 -2.0\n#define r1 0.8\n#define v1 0.276\n#define m1 -1.0\n#define r4 0.4\n#define v4 0.046\n#define m4 2.0\n#define r5 0.305\n#define v5 0.016\n#define m5 3.0\n#define r6 0.21\n#define v6 0.0038\n#define m6 4.0\nfloat roughnessToMip(float roughness) {\n  float mip = 0.0;\n  if (roughness >= r1) {\n    mip = (r0 - roughness) * (m1 - m0) / (r0 - r1) + m0;\n  } else if (roughness >= r4) {\n    mip = (r1 - roughness) * (m4 - m1) / (r1 - r4) + m1;\n  } else if (roughness >= r5) {\n    mip = (r4 - roughness) * (m5 - m4) / (r4 - r5) + m4;\n  } else if (roughness >= r6) {\n    mip = (r5 - roughness) * (m6 - m5) / (r5 - r6) + m5;\n  } else {\n    mip = -2.0 * log2(1.16 * roughness);  }\n  return mip;\n}\nvec4 textureCubeUV(sampler2D envMap, vec3 sampleDir, float roughness) {\n  float mip = clamp(roughnessToMip(roughness), m0, cubeUV_maxMipLevel);\n  float mipF = fract(mip);\n  float mipInt = floor(mip);\n  vec3 color0 = bilinearCubeUV(envMap, sampleDir, mipInt);\n  if (mipF == 0.0) {\n    return vec4(color0, 1.0);\n  } else {\n    vec3 color1 = bilinearCubeUV(envMap, sampleDir, mipInt + 1.0);\n    return vec4(mix(color0, color1, mipF), 1.0);\n  }\n}\n#endif",
            defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
            displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
            displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
            emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
            emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
            encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
            encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
            envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\t\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t}  else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
            envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
            envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
            envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
            envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t  vec3 reflectVec = reflect( -viewDir, normal );\n\t\t  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
            envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) { \n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
            fog_vertex: "#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif",
            fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",
            fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
            fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
            gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",
            lightmap_fragment: "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif",
            lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
            lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",
            lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
            lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
            lights_toon_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
            lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
            lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
            lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",
            lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
            lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
            lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",
            lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
            logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
            logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
            logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
            logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
            map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
            map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
            map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
            map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
            metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
            metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
            morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif",
            morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
            morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
            normal_fragment_begin: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
            normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",
            normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tmat3 tsn = mat3( S, T, N );\n\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif",
            clearcoat_normal_fragment_begin: "#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
            clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );\n\t#endif\n#endif",
            clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
            packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
            premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
            project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
            dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
            dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
            roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
            roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
            shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
            shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
            shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
            shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
            skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
            skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
            skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
            skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
            specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
            specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
            tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
            tonemapping_pars_fragment: "#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );\n}",
            uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
            uv_pars_vertex: "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
            uv_vertex: "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
            uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
            uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
            uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
            worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
            background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
            background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
            cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
            cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
            depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
            depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
            distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
            distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
            equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
            equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
            linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
            linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
            meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
            meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
            meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
            meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
            meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
            meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
            meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
            meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
            meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
            meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
            meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSPARENCY\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSPARENCY\n\tuniform float transparency;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSPARENCY\n\t\tdiffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
            meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
            normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
            normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
            points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
            points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
            shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
            shadow_vert: "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
            sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
            sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"
        },
        en = {
            basic: {
                uniforms: Be([Ze.common, Ze.specularmap, Ze.envmap, Ze.aomap, Ze.lightmap, Ze.fog]),
                vertexShader: tn.meshbasic_vert,
                fragmentShader: tn.meshbasic_frag
            },
            lambert: {
                uniforms: Be([Ze.common, Ze.specularmap, Ze.envmap, Ze.aomap, Ze.lightmap, Ze.emissivemap, Ze.fog, Ze.lights, {
                    emissive: {
                        value: new zt(0)
                    }
                }]),
                vertexShader: tn.meshlambert_vert,
                fragmentShader: tn.meshlambert_frag
            },
            phong: {
                uniforms: Be([Ze.common, Ze.specularmap, Ze.envmap, Ze.aomap, Ze.lightmap, Ze.emissivemap, Ze.bumpmap, Ze.normalmap, Ze.displacementmap, Ze.fog, Ze.lights, {
                    emissive: {
                        value: new zt(0)
                    },
                    specular: {
                        value: new zt(1118481)
                    },
                    shininess: {
                        value: 30
                    }
                }]),
                vertexShader: tn.meshphong_vert,
                fragmentShader: tn.meshphong_frag
            },
            standard: {
                uniforms: Be([Ze.common, Ze.envmap, Ze.aomap, Ze.lightmap, Ze.emissivemap, Ze.bumpmap, Ze.normalmap, Ze.displacementmap, Ze.roughnessmap, Ze.metalnessmap, Ze.fog, Ze.lights, {
                    emissive: {
                        value: new zt(0)
                    },
                    roughness: {
                        value: .5
                    },
                    metalness: {
                        value: .5
                    },
                    envMapIntensity: {
                        value: 1
                    }
                }]),
                vertexShader: tn.meshphysical_vert,
                fragmentShader: tn.meshphysical_frag
            },
            toon: {
                uniforms: Be([Ze.common, Ze.specularmap, Ze.aomap, Ze.lightmap, Ze.emissivemap, Ze.bumpmap, Ze.normalmap, Ze.displacementmap, Ze.gradientmap, Ze.fog, Ze.lights, {
                    emissive: {
                        value: new zt(0)
                    },
                    specular: {
                        value: new zt(1118481)
                    },
                    shininess: {
                        value: 30
                    }
                }]),
                vertexShader: tn.meshtoon_vert,
                fragmentShader: tn.meshtoon_frag
            },
            matcap: {
                uniforms: Be([Ze.common, Ze.bumpmap, Ze.normalmap, Ze.displacementmap, Ze.fog, {
                    matcap: {
                        value: null
                    }
                }]),
                vertexShader: tn.meshmatcap_vert,
                fragmentShader: tn.meshmatcap_frag
            },
            points: {
                uniforms: Be([Ze.points, Ze.fog]),
                vertexShader: tn.points_vert,
                fragmentShader: tn.points_frag
            },
            dashed: {
                uniforms: Be([Ze.common, Ze.fog, {
                    scale: {
                        value: 1
                    },
                    dashSize: {
                        value: 1
                    },
                    totalSize: {
                        value: 2
                    }
                }]),
                vertexShader: tn.linedashed_vert,
                fragmentShader: tn.linedashed_frag
            },
            depth: {
                uniforms: Be([Ze.common, Ze.displacementmap]),
                vertexShader: tn.depth_vert,
                fragmentShader: tn.depth_frag
            },
            normal: {
                uniforms: Be([Ze.common, Ze.bumpmap, Ze.normalmap, Ze.displacementmap, {
                    opacity: {
                        value: 1
                    }
                }]),
                vertexShader: tn.normal_vert,
                fragmentShader: tn.normal_frag
            },
            sprite: {
                uniforms: Be([Ze.sprite, Ze.fog]),
                vertexShader: tn.sprite_vert,
                fragmentShader: tn.sprite_frag
            },
            background: {
                uniforms: {
                    uvTransform: {
                        value: new l
                    },
                    t2D: {
                        value: null
                    }
                },
                vertexShader: tn.background_vert,
                fragmentShader: tn.background_frag
            },
            cube: {
                uniforms: Be([Ze.envmap, {
                    opacity: {
                        value: 1
                    }
                }]),
                vertexShader: tn.cube_vert,
                fragmentShader: tn.cube_frag
            },
            equirect: {
                uniforms: {
                    tEquirect: {
                        value: null
                    }
                },
                vertexShader: tn.equirect_vert,
                fragmentShader: tn.equirect_frag
            },
            distanceRGBA: {
                uniforms: Be([Ze.common, Ze.displacementmap, {
                    referencePosition: {
                        value: new x
                    },
                    nearDistance: {
                        value: 1
                    },
                    farDistance: {
                        value: 1e3
                    }
                }]),
                vertexShader: tn.distanceRGBA_vert,
                fragmentShader: tn.distanceRGBA_frag
            },
            shadow: {
                uniforms: Be([Ze.lights, Ze.fog, {
                    color: {
                        value: new zt(0)
                    },
                    opacity: {
                        value: 1
                    }
                }]),
                vertexShader: tn.shadow_vert,
                fragmentShader: tn.shadow_frag
            }
        };

    function nn(t, e, n, i) {
        var r, a, o = new zt(0),
            s = 0,
            c = null,
            l = 0,
            h = null;

        function u(t, n) {
            e.buffers.color.setClear(t.r, t.g, t.b, n, i)
        }
        return {
            getClearColor: function() {
                return o
            },
            setClearColor: function(t, e) {
                o.set(t), u(o, s = void 0 !== e ? e : 1)
            },
            getClearAlpha: function() {
                return s
            },
            setClearAlpha: function(t) {
                u(o, s = t)
            },
            render: function(e, i, p, d) {
                var f = i.background,
                    m = t.xr,
                    g = m.getSession && m.getSession();
                if (g && "additive" === g.environmentBlendMode && (f = null), null === f ? u(o, s) : f && f.isColor && (u(f, 1), d = !0), (t.autoClear || d) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), f && (f.isCubeTexture || f.isWebGLCubeRenderTarget || 306 === f.mapping)) {
                    void 0 === a && ((a = new Le(new ze(1, 1, 1), new Ge({
                        type: "BackgroundCubeMaterial",
                        uniforms: Ue(en.cube.uniforms),
                        vertexShader: en.cube.vertexShader,
                        fragmentShader: en.cube.fragmentShader,
                        side: 1,
                        depthTest: !1,
                        depthWrite: !1,
                        fog: !1
                    }))).geometry.deleteAttribute("normal"), a.geometry.deleteAttribute("uv"), a.onBeforeRender = function(t, e, n) {
                        this.matrixWorld.copyPosition(n.matrixWorld)
                    }, Object.defineProperty(a.material, "envMap", {
                        get: function() {
                            return this.uniforms.envMap.value
                        }
                    }), n.update(a));
                    var v = f.isWebGLCubeRenderTarget ? f.texture : f;
                    a.material.uniforms.envMap.value = v, a.material.uniforms.flipEnvMap.value = v.isCubeTexture ? -1 : 1, c === f && l === v.version && h === t.toneMapping || (a.material.needsUpdate = !0, c = f, l = v.version, h = t.toneMapping), e.unshift(a, a.geometry, a.material, 0, 0, null)
                } else f && f.isTexture && (void 0 === r && ((r = new Le(new $e(2, 2), new Ge({
                    type: "BackgroundMaterial",
                    uniforms: Ue(en.background.uniforms),
                    vertexShader: en.background.vertexShader,
                    fragmentShader: en.background.fragmentShader,
                    side: 0,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1
                }))).geometry.deleteAttribute("normal"), Object.defineProperty(r.material, "map", {
                    get: function() {
                        return this.uniforms.t2D.value
                    }
                }), n.update(r)), r.material.uniforms.t2D.value = f, !0 === f.matrixAutoUpdate && f.updateMatrix(), r.material.uniforms.uvTransform.value.copy(f.matrix), c === f && l === f.version && h === t.toneMapping || (r.material.needsUpdate = !0, c = f, l = f.version, h = t.toneMapping), e.unshift(r, r.geometry, r.material, 0, 0, null))
            }
        }
    }

    function rn(t, e, n, i) {
        var r, a = i.isWebGL2;
        this.setMode = function(t) {
            r = t
        }, this.render = function(e, i) {
            t.drawArrays(r, e, i), n.update(i, r)
        }, this.renderInstances = function(i, o, s, c) {
            if (0 !== c) {
                var l, h;
                if (a) l = t, h = "drawArraysInstanced";
                else if (h = "drawArraysInstancedANGLE", null === (l = e.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                l[h](r, o, s, c), n.update(s, r, c)
            }
        }
    }

    function an(t, e, n) {
        var i;

        function r(e) {
            if ("highp" === e) {
                if (t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
                e = "mediump"
            }
            return "mediump" === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
        }
        var a = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && t instanceof WebGL2ComputeRenderingContext,
            o = void 0 !== n.precision ? n.precision : "highp",
            s = r(o);
        s !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", s, "instead."), o = s);
        var c = !0 === n.logarithmicDepthBuffer,
            l = t.getParameter(34930),
            h = t.getParameter(35660),
            u = t.getParameter(3379),
            p = t.getParameter(34076),
            d = t.getParameter(34921),
            f = t.getParameter(36347),
            m = t.getParameter(36348),
            g = t.getParameter(36349),
            v = h > 0,
            y = a || !!e.get("OES_texture_float");
        return {
            isWebGL2: a,
            getMaxAnisotropy: function() {
                if (void 0 !== i) return i;
                var n = e.get("EXT_texture_filter_anisotropic");
                return i = null !== n ? t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
            },
            getMaxPrecision: r,
            precision: o,
            logarithmicDepthBuffer: c,
            maxTextures: l,
            maxVertexTextures: h,
            maxTextureSize: u,
            maxCubemapSize: p,
            maxAttributes: d,
            maxVertexUniforms: f,
            maxVaryings: m,
            maxFragmentUniforms: g,
            vertexTextures: v,
            floatFragmentTextures: y,
            floatVertexTextures: v && y,
            maxSamples: a ? t.getParameter(36183) : 0
        }
    }

    function on() {
        var t = this,
            e = null,
            n = 0,
            i = !1,
            r = !1,
            a = new _t,
            o = new l,
            s = {
                value: null,
                needsUpdate: !1
            };

        function c() {
            s.value !== e && (s.value = e, s.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0
        }

        function h(e, n, i, r) {
            var c = null !== e ? e.length : 0,
                l = null;
            if (0 !== c) {
                if (l = s.value, !0 !== r || null === l) {
                    var h = i + 4 * c,
                        u = n.matrixWorldInverse;
                    o.getNormalMatrix(u), (null === l || l.length < h) && (l = new Float32Array(h));
                    for (var p = 0, d = i; p !== c; ++p, d += 4) a.copy(e[p]).applyMatrix4(u, o), a.normal.toArray(l, d), l[d + 3] = a.constant
                }
                s.value = l, s.needsUpdate = !0
            }
            return t.numPlanes = c, t.numIntersection = 0, l
        }
        this.uniform = s, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t, r, a) {
            var o = 0 !== t.length || r || 0 !== n || i;
            return i = r, e = h(t, a, 0), n = t.length, o
        }, this.beginShadows = function() {
            r = !0, h(null)
        }, this.endShadows = function() {
            r = !1, c()
        }, this.setState = function(t, a, o, l, u, p) {
            if (!i || null === t || 0 === t.length || r && !o) r ? h(null) : c();
            else {
                var d = r ? 0 : n,
                    f = 4 * d,
                    m = u.clippingState || null;
                s.value = m, m = h(t, l, f, p);
                for (var g = 0; g !== f; ++g) m[g] = e[g];
                u.clippingState = m, this.numIntersection = a ? this.numPlanes : 0, this.numPlanes += d
            }
        }
    }

    function sn(t) {
        var e = {};
        return {
            get: function(n) {
                if (void 0 !== e[n]) return e[n];
                var i;
                switch (n) {
                    case "WEBGL_depth_texture":
                        i = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
                        break;
                    case "EXT_texture_filter_anisotropic":
                        i = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                        break;
                    case "WEBGL_compressed_texture_s3tc":
                        i = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                        break;
                    case "WEBGL_compressed_texture_pvrtc":
                        i = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                        break;
                    default:
                        i = t.getExtension(n)
                }
                return null === i && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), e[n] = i, i
            }
        }
    }

    function cn(t, e, n) {
        var i = new WeakMap,
            r = new WeakMap;

        function a(t) {
            var o = t.target,
                s = i.get(o);
            for (var c in null !== s.index && e.remove(s.index), s.attributes) e.remove(s.attributes[c]);
            o.removeEventListener("dispose", a), i.delete(o);
            var l = r.get(s);
            l && (e.remove(l), r.delete(s)), n.memory.geometries--
        }

        function o(t) {
            var n = [],
                i = t.index,
                a = t.attributes.position,
                o = 0;
            if (null !== i) {
                var s = i.array;
                o = i.version;
                for (var c = 0, l = s.length; c < l; c += 3) {
                    var h = s[c + 0],
                        u = s[c + 1],
                        p = s[c + 2];
                    n.push(h, u, u, p, p, h)
                }
            } else {
                s = a.array;
                o = a.version;
                for (c = 0, l = s.length / 3 - 1; c < l; c += 3) {
                    h = c + 0, u = c + 1, p = c + 2;
                    n.push(h, u, u, p, p, h)
                }
            }
            var d = new(ne(n) > 65535 ? Kt : Jt)(n, 1);
            d.version = o, e.update(d, 34963);
            var f = r.get(t);
            f && e.remove(f), r.set(t, d)
        }
        return {
            get: function(t, e) {
                var r = i.get(e);
                return r || (e.addEventListener("dispose", a), e.isBufferGeometry ? r = e : e.isGeometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = (new he).setFromObject(t)), r = e._bufferGeometry), i.set(e, r), n.memory.geometries++, r)
            },
            update: function(t) {
                var n = t.index,
                    i = t.attributes;
                for (var r in null !== n && e.update(n, 34963), i) e.update(i[r], 34962);
                var a = t.morphAttributes;
                for (var r in a)
                    for (var o = a[r], s = 0, c = o.length; s < c; s++) e.update(o[s], 34962)
            },
            getWireframeAttribute: function(t) {
                var e = r.get(t);
                if (e) {
                    var n = t.index;
                    null !== n && e.version < n.version && o(t)
                } else o(t);
                return r.get(t)
            }
        }
    }

    function ln(t, e, n, i) {
        var r, a, o, s = i.isWebGL2;
        this.setMode = function(t) {
            r = t
        }, this.setIndex = function(t) {
            a = t.type, o = t.bytesPerElement
        }, this.render = function(e, i) {
            t.drawElements(r, i, a, e * o), n.update(i, r)
        }, this.renderInstances = function(i, c, l, h) {
            if (0 !== h) {
                var u, p;
                if (s) u = t, p = "drawElementsInstanced";
                else if (p = "drawElementsInstancedANGLE", null === (u = e.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                u[p](r, l, a, c * o, h), n.update(l, r, h)
            }
        }
    }

    function hn(t) {
        var e = {
            frame: 0,
            calls: 0,
            triangles: 0,
            points: 0,
            lines: 0
        };
        return {
            memory: {
                geometries: 0,
                textures: 0
            },
            render: e,
            programs: null,
            autoReset: !0,
            reset: function() {
                e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0
            },
            update: function(t, n, i) {
                switch (i = i || 1, e.calls++, n) {
                    case 4:
                        e.triangles += i * (t / 3);
                        break;
                    case 1:
                        e.lines += i * (t / 2);
                        break;
                    case 3:
                        e.lines += i * (t - 1);
                        break;
                    case 2:
                        e.lines += i * t;
                        break;
                    case 0:
                        e.points += i * t;
                        break;
                    default:
                        console.error("THREE.WebGLInfo: Unknown draw mode:", n)
                }
            }
        }
    }

    function un(t, e) {
        return Math.abs(e[1]) - Math.abs(t[1])
    }

    function pn(t) {
        var e = {},
            n = new Float32Array(8);
        return {
            update: function(i, r, a, o) {
                var s = i.morphTargetInfluences,
                    c = void 0 === s ? 0 : s.length,
                    l = e[r.id];
                if (void 0 === l) {
                    l = [];
                    for (var h = 0; h < c; h++) l[h] = [h, 0];
                    e[r.id] = l
                }
                var u = a.morphTargets && r.morphAttributes.position,
                    p = a.morphNormals && r.morphAttributes.normal;
                for (h = 0; h < c; h++) {
                    0 !== (f = l[h])[1] && (u && r.deleteAttribute("morphTarget" + h), p && r.deleteAttribute("morphNormal" + h))
                }
                for (h = 0; h < c; h++) {
                    (f = l[h])[0] = h, f[1] = s[h]
                }
                l.sort(un);
                var d = 0;
                for (h = 0; h < 8; h++) {
                    var f;
                    if (f = l[h]) {
                        var m = f[0],
                            g = f[1];
                        if (g) {
                            u && r.setAttribute("morphTarget" + h, u[m]), p && r.setAttribute("morphNormal" + h, p[m]), n[h] = g, d += g;
                            continue
                        }
                    }
                    n[h] = 0
                }
                var v = r.morphTargetsRelative ? 1 : 1 - d;
                o.getUniforms().setValue(t, "morphTargetBaseInfluence", v), o.getUniforms().setValue(t, "morphTargetInfluences", n)
            }
        }
    }

    function dn(t, e, n, i) {
        var r = new WeakMap;
        return {
            update: function(t) {
                var a = i.render.frame,
                    o = t.geometry,
                    s = e.get(t, o);
                return r.get(s) !== a && (o.isGeometry && s.updateFromObject(t), e.update(s), r.set(s, a)), t.isInstancedMesh && n.update(t.instanceMatrix, 34962), s
            },
            dispose: function() {
                r = new WeakMap
            }
        }
    }

    function fn(t, e, n, i, r, a, o, s, c, l) {
        t = void 0 !== t ? t : [], e = void 0 !== e ? e : 301, o = void 0 !== o ? o : 1022, p.call(this, t, e, n, i, r, a, o, s, c, l), this.flipY = !1
    }

    function mn(t, e, n, i) {
        p.call(this, null), this.image = {
            data: t || null,
            width: e || 1,
            height: n || 1,
            depth: i || 1
        }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0
    }

    function gn(t, e, n, i) {
        p.call(this, null), this.image = {
            data: t || null,
            width: e || 1,
            height: n || 1,
            depth: i || 1
        }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0
    }
    en.physical = {
        uniforms: Be([en.standard.uniforms, {
            clearcoat: {
                value: 0
            },
            clearcoatMap: {
                value: null
            },
            clearcoatRoughness: {
                value: 0
            },
            clearcoatRoughnessMap: {
                value: null
            },
            clearcoatNormalScale: {
                value: new c(1, 1)
            },
            clearcoatNormalMap: {
                value: null
            },
            sheen: {
                value: new zt(0)
            },
            transparency: {
                value: 0
            }
        }]),
        vertexShader: tn.meshphysical_vert,
        fragmentShader: tn.meshphysical_frag
    }, fn.prototype = Object.create(p.prototype), fn.prototype.constructor = fn, fn.prototype.isCubeTexture = !0, Object.defineProperty(fn.prototype, "images", {
        get: function() {
            return this.image
        },
        set: function(t) {
            this.image = t
        }
    }), mn.prototype = Object.create(p.prototype), mn.prototype.constructor = mn, mn.prototype.isDataTexture2DArray = !0, gn.prototype = Object.create(p.prototype), gn.prototype.constructor = gn, gn.prototype.isDataTexture3D = !0;
    var vn = new p,
        yn = new mn,
        xn = new gn,
        bn = new fn,
        _n = [],
        wn = [],
        Mn = new Float32Array(16),
        Sn = new Float32Array(9),
        Tn = new Float32Array(4);

    function En(t, e, n) {
        var i = t[0];
        if (i <= 0 || i > 0) return t;
        var r = e * n,
            a = _n[r];
        if (void 0 === a && (a = new Float32Array(r), _n[r] = a), 0 !== e) {
            i.toArray(a, 0);
            for (var o = 1, s = 0; o !== e; ++o) s += n, t[o].toArray(a, s)
        }
        return a
    }

    function An(t, e) {
        if (t.length !== e.length) return !1;
        for (var n = 0, i = t.length; n < i; n++)
            if (t[n] !== e[n]) return !1;
        return !0
    }

    function Ln(t, e) {
        for (var n = 0, i = e.length; n < i; n++) t[n] = e[n]
    }

    function Rn(t, e) {
        var n = wn[e];
        void 0 === n && (n = new Int32Array(e), wn[e] = n);
        for (var i = 0; i !== e; ++i) n[i] = t.allocateTextureUnit();
        return n
    }

    function Pn(t, e) {
        var n = this.cache;
        n[0] !== e && (t.uniform1f(this.addr, e), n[0] = e)
    }

    function Cn(t, e) {
        var n = this.cache;
        if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);
        else {
            if (An(n, e)) return;
            t.uniform2fv(this.addr, e), Ln(n, e)
        }
    }

    function On(t, e) {
        var n = this.cache;
        if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);
        else if (void 0 !== e.r) n[0] === e.r && n[1] === e.g && n[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), n[0] = e.r, n[1] = e.g, n[2] = e.b);
        else {
            if (An(n, e)) return;
            t.uniform3fv(this.addr, e), Ln(n, e)
        }
    }

    function Dn(t, e) {
        var n = this.cache;
        if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);
        else {
            if (An(n, e)) return;
            t.uniform4fv(this.addr, e), Ln(n, e)
        }
    }

    function Nn(t, e) {
        var n = this.cache,
            i = e.elements;
        if (void 0 === i) {
            if (An(n, e)) return;
            t.uniformMatrix2fv(this.addr, !1, e), Ln(n, e)
        } else {
            if (An(n, i)) return;
            Tn.set(i), t.uniformMatrix2fv(this.addr, !1, Tn), Ln(n, i)
        }
    }

    function In(t, e) {
        var n = this.cache,
            i = e.elements;
        if (void 0 === i) {
            if (An(n, e)) return;
            t.uniformMatrix3fv(this.addr, !1, e), Ln(n, e)
        } else {
            if (An(n, i)) return;
            Sn.set(i), t.uniformMatrix3fv(this.addr, !1, Sn), Ln(n, i)
        }
    }

    function zn(t, e) {
        var n = this.cache,
            i = e.elements;
        if (void 0 === i) {
            if (An(n, e)) return;
            t.uniformMatrix4fv(this.addr, !1, e), Ln(n, e)
        } else {
            if (An(n, i)) return;
            Mn.set(i), t.uniformMatrix4fv(this.addr, !1, Mn), Ln(n, i)
        }
    }

    function Un(t, e, n) {
        var i = this.cache,
            r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.safeSetTexture2D(e || vn, r)
    }

    function Bn(t, e, n) {
        var i = this.cache,
            r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(e || yn, r)
    }

    function Fn(t, e, n) {
        var i = this.cache,
            r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(e || xn, r)
    }

    function Gn(t, e, n) {
        var i = this.cache,
            r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.safeSetTextureCube(e || bn, r)
    }

    function Hn(t, e) {
        var n = this.cache;
        n[0] !== e && (t.uniform1i(this.addr, e), n[0] = e)
    }

    function Vn(t, e) {
        var n = this.cache;
        An(n, e) || (t.uniform2iv(this.addr, e), Ln(n, e))
    }

    function kn(t, e) {
        var n = this.cache;
        An(n, e) || (t.uniform3iv(this.addr, e), Ln(n, e))
    }

    function jn(t, e) {
        var n = this.cache;
        An(n, e) || (t.uniform4iv(this.addr, e), Ln(n, e))
    }

    function Wn(t, e) {
        var n = this.cache;
        n[0] !== e && (t.uniform1ui(this.addr, e), n[0] = e)
    }

    function qn(t, e) {
        t.uniform1fv(this.addr, e)
    }

    function Xn(t, e) {
        t.uniform1iv(this.addr, e)
    }

    function Yn(t, e) {
        t.uniform2iv(this.addr, e)
    }

    function Zn(t, e) {
        t.uniform3iv(this.addr, e)
    }

    function Jn(t, e) {
        t.uniform4iv(this.addr, e)
    }

    function Qn(t, e) {
        var n = En(e, this.size, 2);
        t.uniform2fv(this.addr, n)
    }

    function Kn(t, e) {
        var n = En(e, this.size, 3);
        t.uniform3fv(this.addr, n)
    }

    function $n(t, e) {
        var n = En(e, this.size, 4);
        t.uniform4fv(this.addr, n)
    }

    function ti(t, e) {
        var n = En(e, this.size, 4);
        t.uniformMatrix2fv(this.addr, !1, n)
    }

    function ei(t, e) {
        var n = En(e, this.size, 9);
        t.uniformMatrix3fv(this.addr, !1, n)
    }

    function ni(t, e) {
        var n = En(e, this.size, 16);
        t.uniformMatrix4fv(this.addr, !1, n)
    }

    function ii(t, e, n) {
        var i = e.length,
            r = Rn(n, i);
        t.uniform1iv(this.addr, r);
        for (var a = 0; a !== i; ++a) n.safeSetTexture2D(e[a] || vn, r[a])
    }

    function ri(t, e, n) {
        var i = e.length,
            r = Rn(n, i);
        t.uniform1iv(this.addr, r);
        for (var a = 0; a !== i; ++a) n.safeSetTextureCube(e[a] || bn, r[a])
    }

    function ai(t, e, n) {
        this.id = t, this.addr = n, this.cache = [], this.setValue = function(t) {
            switch (t) {
                case 5126:
                    return Pn;
                case 35664:
                    return Cn;
                case 35665:
                    return On;
                case 35666:
                    return Dn;
                case 35674:
                    return Nn;
                case 35675:
                    return In;
                case 35676:
                    return zn;
                case 5124:
                case 35670:
                    return Hn;
                case 35667:
                case 35671:
                    return Vn;
                case 35668:
                case 35672:
                    return kn;
                case 35669:
                case 35673:
                    return jn;
                case 5125:
                    return Wn;
                case 35678:
                case 36198:
                case 36298:
                case 36306:
                case 35682:
                    return Un;
                case 35679:
                case 36299:
                case 36307:
                    return Fn;
                case 35680:
                case 36300:
                case 36308:
                case 36293:
                    return Gn;
                case 36289:
                case 36303:
                case 36311:
                case 36292:
                    return Bn
            }
        }(e.type)
    }

    function oi(t, e, n) {
        this.id = t, this.addr = n, this.cache = [], this.size = e.size, this.setValue = function(t) {
            switch (t) {
                case 5126:
                    return qn;
                case 35664:
                    return Qn;
                case 35665:
                    return Kn;
                case 35666:
                    return $n;
                case 35674:
                    return ti;
                case 35675:
                    return ei;
                case 35676:
                    return ni;
                case 5124:
                case 35670:
                    return Xn;
                case 35667:
                case 35671:
                    return Yn;
                case 35668:
                case 35672:
                    return Zn;
                case 35669:
                case 35673:
                    return Jn;
                case 35678:
                case 36198:
                case 36298:
                case 36306:
                case 35682:
                    return ii;
                case 35680:
                case 36300:
                case 36308:
                case 36293:
                    return ri
            }
        }(e.type)
    }

    function si(t) {
        this.id = t, this.seq = [], this.map = {}
    }
    oi.prototype.updateCache = function(t) {
        var e = this.cache;
        t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)), Ln(e, t)
    }, si.prototype.setValue = function(t, e, n) {
        for (var i = this.seq, r = 0, a = i.length; r !== a; ++r) {
            var o = i[r];
            o.setValue(t, e[o.id], n)
        }
    };
    var ci = /([\w\d_]+)(\])?(\[|\.)?/g;

    function li(t, e) {
        t.seq.push(e), t.map[e.id] = e
    }

    function hi(t, e, n) {
        var i = t.name,
            r = i.length;
        for (ci.lastIndex = 0;;) {
            var a = ci.exec(i),
                o = ci.lastIndex,
                s = a[1],
                c = "]" === a[2],
                l = a[3];
            if (c && (s |= 0), void 0 === l || "[" === l && o + 2 === r) {
                li(n, void 0 === l ? new ai(s, t, e) : new oi(s, t, e));
                break
            }
            var h = n.map[s];
            void 0 === h && li(n, h = new si(s)), n = h
        }
    }

    function ui(t, e) {
        this.seq = [], this.map = {};
        for (var n = t.getProgramParameter(e, 35718), i = 0; i < n; ++i) {
            var r = t.getActiveUniform(e, i);
            hi(r, t.getUniformLocation(e, r.name), this)
        }
    }

    function pi(t, e, n) {
        var i = t.createShader(e);
        return t.shaderSource(i, n), t.compileShader(i), i
    }
    ui.prototype.setValue = function(t, e, n, i) {
        var r = this.map[e];
        void 0 !== r && r.setValue(t, n, i)
    }, ui.prototype.setOptional = function(t, e, n) {
        var i = e[n];
        void 0 !== i && this.setValue(t, n, i)
    }, ui.upload = function(t, e, n, i) {
        for (var r = 0, a = e.length; r !== a; ++r) {
            var o = e[r],
                s = n[o.id];
            !1 !== s.needsUpdate && o.setValue(t, s.value, i)
        }
    }, ui.seqWithValue = function(t, e) {
        for (var n = [], i = 0, r = t.length; i !== r; ++i) {
            var a = t[i];
            a.id in e && n.push(a)
        }
        return n
    };
    var di = 0;

    function fi(t) {
        switch (t) {
            case 3e3:
                return ["Linear", "( value )"];
            case 3001:
                return ["sRGB", "( value )"];
            case 3002:
                return ["RGBE", "( value )"];
            case 3004:
                return ["RGBM", "( value, 7.0 )"];
            case 3005:
                return ["RGBM", "( value, 16.0 )"];
            case 3006:
                return ["RGBD", "( value, 256.0 )"];
            case 3007:
                return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
            case 3003:
                return ["LogLuv", "( value )"];
            default:
                throw new Error("unsupported encoding: " + t)
        }
    }

    function mi(t, e, n) {
        var i = t.getShaderParameter(e, 35713),
            r = t.getShaderInfoLog(e).trim();
        return i && "" === r ? "" : "THREE.WebGLShader: gl.getShaderInfoLog() " + n + "\n" + r + function(t) {
            for (var e = t.split("\n"), n = 0; n < e.length; n++) e[n] = n + 1 + ": " + e[n];
            return e.join("\n")
        }(t.getShaderSource(e))
    }

    function gi(t, e) {
        var n = fi(e);
        return "vec4 " + t + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }"
    }

    function vi(t, e) {
        var n;
        switch (e) {
            case 1:
                n = "Linear";
                break;
            case 2:
                n = "Reinhard";
                break;
            case 3:
                n = "Uncharted2";
                break;
            case 4:
                n = "OptimizedCineon";
                break;
            case 5:
                n = "ACESFilmic";
                break;
            default:
                throw new Error("unsupported toneMapping: " + e)
        }
        return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
    }

    function yi(t) {
        return "" !== t
    }

    function xi(t, e) {
        return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
    }

    function bi(t, e) {
        return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
    }
    var _i = /^[ \t]*#include +<([\w\d./]+)>/gm;

    function wi(t) {
        return t.replace(_i, Mi)
    }

    function Mi(t, e) {
        var n = tn[e];
        if (void 0 === n) throw new Error("Can not resolve #include <" + e + ">");
        return wi(n)
    }
    var Si = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
        Ti = /#pragma unroll_loop_start[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}[\s]+?#pragma unroll_loop_end/g;

    function Ei(t) {
        return t.replace(Ti, Li).replace(Si, Ai)
    }

    function Ai(t, e, n, i) {
        return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), Li(t, e, n, i)
    }

    function Li(t, e, n, i) {
        for (var r = "", a = parseInt(e); a < parseInt(n); a++) r += i.replace(/\[ i \]/g, "[ " + a + " ]").replace(/UNROLLED_LOOP_INDEX/g, a);
        return r
    }

    function Ri(t) {
        var e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;";
        return "highp" === t.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"), e
    }

    function Pi(t, e, n) {
        var i, r, a, o, s, c = t.getContext(),
            l = n.defines,
            h = n.vertexShader,
            u = n.fragmentShader,
            p = function(t) {
                var e = "SHADOWMAP_TYPE_BASIC";
                return 1 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF" : 2 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"), e
            }(n),
            d = function(t) {
                var e = "ENVMAP_TYPE_CUBE";
                if (t.envMap) switch (t.envMapMode) {
                    case 301:
                    case 302:
                        e = "ENVMAP_TYPE_CUBE";
                        break;
                    case 306:
                    case 307:
                        e = "ENVMAP_TYPE_CUBE_UV";
                        break;
                    case 303:
                    case 304:
                        e = "ENVMAP_TYPE_EQUIREC";
                        break;
                    case 305:
                        e = "ENVMAP_TYPE_SPHERE"
                }
                return e
            }(n),
            f = function(t) {
                var e = "ENVMAP_MODE_REFLECTION";
                if (t.envMap) switch (t.envMapMode) {
                    case 302:
                    case 304:
                        e = "ENVMAP_MODE_REFRACTION"
                }
                return e
            }(n),
            m = function(t) {
                var e = "ENVMAP_BLENDING_NONE";
                if (t.envMap) switch (t.combine) {
                    case 0:
                        e = "ENVMAP_BLENDING_MULTIPLY";
                        break;
                    case 1:
                        e = "ENVMAP_BLENDING_MIX";
                        break;
                    case 2:
                        e = "ENVMAP_BLENDING_ADD"
                }
                return e
            }(n),
            g = t.gammaFactor > 0 ? t.gammaFactor : 1,
            v = n.isWebGL2 ? "" : function(t) {
                return [t.extensionDerivatives || t.envMapCubeUV || t.bumpMap || t.tangentSpaceNormalMap || t.clearcoatNormalMap || t.flatShading || "physical" === t.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", t.extensionDrawBuffers && t.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (t.extensionShaderTextureLOD || t.envMap) && t.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(yi).join("\n")
            }(n),
            y = function(t) {
                var e = [];
                for (var n in t) {
                    var i = t[n];
                    !1 !== i && e.push("#define " + n + " " + i)
                }
                return e.join("\n")
            }(l),
            x = c.createProgram();
        if (n.isRawShaderMaterial ? ((i = [y].filter(yi).join("\n")).length > 0 && (i += "\n"), (r = [v, y].filter(yi).join("\n")).length > 0 && (r += "\n")) : (i = [Ri(n), "#define SHADER_NAME " + n.shaderName, y, n.instancing ? "#define USE_INSTANCING" : "", n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + g, "#define MAX_BONES " + n.maxBones, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + f : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.useVertexTexture ? "#define BONE_TEXTURE" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + p : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", " attribute mat4 instanceMatrix;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(yi).join("\n"), r = [v, Ri(n), "#define SHADER_NAME " + n.shaderName, y, n.alphaTest ? "#define ALPHATEST " + n.alphaTest + (n.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + g, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + d : "", n.envMap ? "#define " + f : "", n.envMap ? "#define " + m : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.sheen ? "#define USE_SHEEN" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + p : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", (n.extensionShaderTextureLOD || n.envMap) && n.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== n.toneMapping ? "#define TONE_MAPPING" : "", 0 !== n.toneMapping ? tn.tonemapping_pars_fragment : "", 0 !== n.toneMapping ? vi("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", n.outputEncoding || n.mapEncoding || n.matcapEncoding || n.envMapEncoding || n.emissiveMapEncoding || n.lightMapEncoding ? tn.encodings_pars_fragment : "", n.mapEncoding ? gi("mapTexelToLinear", n.mapEncoding) : "", n.matcapEncoding ? gi("matcapTexelToLinear", n.matcapEncoding) : "", n.envMapEncoding ? gi("envMapTexelToLinear", n.envMapEncoding) : "", n.emissiveMapEncoding ? gi("emissiveMapTexelToLinear", n.emissiveMapEncoding) : "", n.lightMapEncoding ? gi("lightMapTexelToLinear", n.lightMapEncoding) : "", n.outputEncoding ? (a = "linearToOutputTexel", o = n.outputEncoding, s = fi(o), "vec4 " + a + "( vec4 value ) { return LinearTo" + s[0] + s[1] + "; }") : "", n.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(yi).join("\n")), h = bi(h = xi(h = wi(h), n), n), u = bi(u = xi(u = wi(u), n), n), h = Ei(h), u = Ei(u), n.isWebGL2 && !n.isRawShaderMaterial) {
            var b = !1,
                _ = /^\s*#version\s+300\s+es\s*\n/;
            n.isShaderMaterial && null !== h.match(_) && null !== u.match(_) && (b = !0, h = h.replace(_, ""), u = u.replace(_, "")), i = ["#version 300 es\n", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + i, r = ["#version 300 es\n", "#define varying in", b ? "" : "out highp vec4 pc_fragColor;", b ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + r
        }
        var w, M, S = r + u,
            T = pi(c, 35633, i + h),
            E = pi(c, 35632, S);
        if (c.attachShader(x, T), c.attachShader(x, E), void 0 !== n.index0AttributeName ? c.bindAttribLocation(x, 0, n.index0AttributeName) : !0 === n.morphTargets && c.bindAttribLocation(x, 0, "position"), c.linkProgram(x), t.debug.checkShaderErrors) {
            var A = c.getProgramInfoLog(x).trim(),
                L = c.getShaderInfoLog(T).trim(),
                R = c.getShaderInfoLog(E).trim(),
                P = !0,
                C = !0;
            if (!1 === c.getProgramParameter(x, 35714)) {
                P = !1;
                var O = mi(c, T, "vertex"),
                    D = mi(c, E, "fragment");
                console.error("THREE.WebGLProgram: shader error: ", c.getError(), "35715", c.getProgramParameter(x, 35715), "gl.getProgramInfoLog", A, O, D)
            } else "" !== A ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", A) : "" !== L && "" !== R || (C = !1);
            C && (this.diagnostics = {
                runnable: P,
                programLog: A,
                vertexShader: {
                    log: L,
                    prefix: i
                },
                fragmentShader: {
                    log: R,
                    prefix: r
                }
            })
        }
        return c.detachShader(x, T), c.detachShader(x, E), c.deleteShader(T), c.deleteShader(E), this.getUniforms = function() {
            return void 0 === w && (w = new ui(c, x)), w
        }, this.getAttributes = function() {
            return void 0 === M && (M = function(t, e) {
                for (var n = {}, i = t.getProgramParameter(e, 35721), r = 0; r < i; r++) {
                    var a = t.getActiveAttrib(e, r).name;
                    n[a] = t.getAttribLocation(e, a)
                }
                return n
            }(c, x)), M
        }, this.destroy = function() {
            c.deleteProgram(x), this.program = void 0
        }, this.name = n.shaderName, this.id = di++, this.cacheKey = e, this.usedTimes = 1, this.program = x, this.vertexShader = T, this.fragmentShader = E, this
    }

    function Ci(t, e, n) {
        var i = [],
            r = n.isWebGL2,
            a = n.logarithmicDepthBuffer,
            o = n.floatVertexTextures,
            s = n.precision,
            c = n.maxVertexUniforms,
            l = n.vertexTextures,
            h = {
                MeshDepthMaterial: "depth",
                MeshDistanceMaterial: "distanceRGBA",
                MeshNormalMaterial: "normal",
                MeshBasicMaterial: "basic",
                MeshLambertMaterial: "lambert",
                MeshPhongMaterial: "phong",
                MeshToonMaterial: "toon",
                MeshStandardMaterial: "physical",
                MeshPhysicalMaterial: "physical",
                MeshMatcapMaterial: "matcap",
                LineBasicMaterial: "basic",
                LineDashedMaterial: "dashed",
                PointsMaterial: "points",
                ShadowMaterial: "shadow",
                SpriteMaterial: "sprite"
            },
            u = ["precision", "isWebGL2", "supportsVertexTextures", "outputEncoding", "instancing", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "envMapCubeUV", "lightMap", "lightMapEncoding", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "tangentSpaceNormalMap", "clearcoatMap", "clearcoatRoughnessMap", "clearcoatNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "vertexTangents", "vertexUvs", "uvsVertexOnly", "fog", "useFog", "fogExp2", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "numDirLightShadows", "numPointLightShadows", "numSpotLightShadows", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering", "sheen"];

        function p(t) {
            var e;
            return t ? t.isTexture ? e = t.encoding : t.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), e = t.texture.encoding) : e = 3e3, e
        }
        this.getParameters = function(i, u, d, f, m, g, v) {
            var y = f.fog,
                x = i.isMeshStandardMaterial ? f.environment : null,
                b = i.envMap || x,
                _ = h[i.type],
                w = v.isSkinnedMesh ? function(t) {
                    var e = t.skeleton.bones;
                    if (o) return 1024;
                    var n = c,
                        i = Math.floor((n - 20) / 4),
                        r = Math.min(i, e.length);
                    return r < e.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + e.length + " bones. This GPU supports " + r + "."), 0) : r
                }(v) : 0;
            null !== i.precision && (s = n.getMaxPrecision(i.precision)) !== i.precision && console.warn("THREE.WebGLProgram.getParameters:", i.precision, "not supported, using", s, "instead.");
            var M = function(t, e) {
                var n;
                if (e) {
                    var i = en[e];
                    n = {
                        name: t.type,
                        uniforms: Fe.clone(i.uniforms),
                        vertexShader: i.vertexShader,
                        fragmentShader: i.fragmentShader
                    }
                } else n = {
                    name: t.type,
                    uniforms: t.uniforms,
                    vertexShader: t.vertexShader,
                    fragmentShader: t.fragmentShader
                };
                return n
            }(i, _);
            i.onBeforeCompile(M, t);
            var S = t.getRenderTarget();
            return {
                isWebGL2: r,
                shaderID: _,
                shaderName: M.name,
                uniforms: M.uniforms,
                vertexShader: M.vertexShader,
                fragmentShader: M.fragmentShader,
                defines: i.defines,
                isRawShaderMaterial: i.isRawShaderMaterial,
                isShaderMaterial: i.isShaderMaterial,
                precision: s,
                instancing: !0 === v.isInstancedMesh,
                supportsVertexTextures: l,
                outputEncoding: null !== S ? p(S.texture) : t.outputEncoding,
                map: !!i.map,
                mapEncoding: p(i.map),
                matcap: !!i.matcap,
                matcapEncoding: p(i.matcap),
                envMap: !!b,
                envMapMode: b && b.mapping,
                envMapEncoding: p(b),
                envMapCubeUV: !!b && (306 === b.mapping || 307 === b.mapping),
                lightMap: !!i.lightMap,
                lightMapEncoding: p(i.lightMap),
                aoMap: !!i.aoMap,
                emissiveMap: !!i.emissiveMap,
                emissiveMapEncoding: p(i.emissiveMap),
                bumpMap: !!i.bumpMap,
                normalMap: !!i.normalMap,
                objectSpaceNormalMap: 1 === i.normalMapType,
                tangentSpaceNormalMap: 0 === i.normalMapType,
                clearcoatMap: !!i.clearcoatMap,
                clearcoatRoughnessMap: !!i.clearcoatRoughnessMap,
                clearcoatNormalMap: !!i.clearcoatNormalMap,
                displacementMap: !!i.displacementMap,
                roughnessMap: !!i.roughnessMap,
                metalnessMap: !!i.metalnessMap,
                specularMap: !!i.specularMap,
                alphaMap: !!i.alphaMap,
                gradientMap: !!i.gradientMap,
                sheen: !!i.sheen,
                combine: i.combine,
                vertexTangents: i.normalMap && i.vertexTangents,
                vertexColors: i.vertexColors,
                vertexUvs: !!(i.map || i.bumpMap || i.normalMap || i.specularMap || i.alphaMap || i.emissiveMap || i.roughnessMap || i.metalnessMap || i.clearcoatMap || i.clearcoatRoughnessMap || i.clearcoatNormalMap || i.displacementMap),
                uvsVertexOnly: !(i.map || i.bumpMap || i.normalMap || i.specularMap || i.alphaMap || i.emissiveMap || i.roughnessMap || i.metalnessMap || i.clearcoatNormalMap || !i.displacementMap),
                fog: !!y,
                useFog: i.fog,
                fogExp2: y && y.isFogExp2,
                flatShading: i.flatShading,
                sizeAttenuation: i.sizeAttenuation,
                logarithmicDepthBuffer: a,
                skinning: i.skinning && w > 0,
                maxBones: w,
                useVertexTexture: o,
                morphTargets: i.morphTargets,
                morphNormals: i.morphNormals,
                maxMorphTargets: t.maxMorphTargets,
                maxMorphNormals: t.maxMorphNormals,
                numDirLights: u.directional.length,
                numPointLights: u.point.length,
                numSpotLights: u.spot.length,
                numRectAreaLights: u.rectArea.length,
                numHemiLights: u.hemi.length,
                numDirLightShadows: u.directionalShadowMap.length,
                numPointLightShadows: u.pointShadowMap.length,
                numSpotLightShadows: u.spotShadowMap.length,
                numClippingPlanes: m,
                numClipIntersection: g,
                dithering: i.dithering,
                shadowMapEnabled: t.shadowMap.enabled && d.length > 0,
                shadowMapType: t.shadowMap.type,
                toneMapping: i.toneMapped ? t.toneMapping : 0,
                physicallyCorrectLights: t.physicallyCorrectLights,
                premultipliedAlpha: i.premultipliedAlpha,
                alphaTest: i.alphaTest,
                doubleSided: 2 === i.side,
                flipSided: 1 === i.side,
                depthPacking: void 0 !== i.depthPacking && i.depthPacking,
                index0AttributeName: i.index0AttributeName,
                extensionDerivatives: i.extensions && i.extensions.derivatives,
                extensionFragDepth: i.extensions && i.extensions.fragDepth,
                extensionDrawBuffers: i.extensions && i.extensions.drawBuffers,
                extensionShaderTextureLOD: i.extensions && i.extensions.shaderTextureLOD,
                rendererExtensionFragDepth: r || null !== e.get("EXT_frag_depth"),
                rendererExtensionDrawBuffers: r || null !== e.get("WEBGL_draw_buffers"),
                rendererExtensionShaderTextureLod: r || null !== e.get("EXT_shader_texture_lod"),
                onBeforeCompile: i.onBeforeCompile
            }
        }, this.getProgramCacheKey = function(e) {
            var n = [];
            if (e.shaderID ? n.push(e.shaderID) : (n.push(e.fragmentShader), n.push(e.vertexShader)), void 0 !== e.defines)
                for (var i in e.defines) n.push(i), n.push(e.defines[i]);
            if (void 0 === e.isRawShaderMaterial) {
                for (var r = 0; r < u.length; r++) n.push(e[u[r]]);
                n.push(t.outputEncoding), n.push(t.gammaFactor)
            }
            return n.push(e.onBeforeCompile.toString()), n.join()
        }, this.acquireProgram = function(e, n) {
            for (var r, a = 0, o = i.length; a < o; a++) {
                var s = i[a];
                if (s.cacheKey === n) {
                    ++(r = s).usedTimes;
                    break
                }
            }
            return void 0 === r && (r = new Pi(t, n, e), i.push(r)), r
        }, this.releaseProgram = function(t) {
            if (0 == --t.usedTimes) {
                var e = i.indexOf(t);
                i[e] = i[i.length - 1], i.pop(), t.destroy()
            }
        }, this.programs = i
    }

    function Oi() {
        var t = new WeakMap;
        return {
            get: function(e) {
                var n = t.get(e);
                return void 0 === n && (n = {}, t.set(e, n)), n
            },
            remove: function(e) {
                t.delete(e)
            },
            update: function(e, n, i) {
                t.get(e)[n] = i
            },
            dispose: function() {
                t = new WeakMap
            }
        }
    }

    function Di(t, e) {
        return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
    }

    function Ni(t, e) {
        return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
    }

    function Ii() {
        var t = [],
            e = 0,
            n = [],
            i = [],
            r = {
                id: -1
            };

        function a(n, i, a, o, s, c) {
            var l = t[e];
            return void 0 === l ? (l = {
                id: n.id,
                object: n,
                geometry: i,
                material: a,
                program: a.program || r,
                groupOrder: o,
                renderOrder: n.renderOrder,
                z: s,
                group: c
            }, t[e] = l) : (l.id = n.id, l.object = n, l.geometry = i, l.material = a, l.program = a.program || r, l.groupOrder = o, l.renderOrder = n.renderOrder, l.z = s, l.group = c), e++, l
        }
        return {
            opaque: n,
            transparent: i,
            init: function() {
                e = 0, n.length = 0, i.length = 0
            },
            push: function(t, e, r, o, s, c) {
                var l = a(t, e, r, o, s, c);
                (!0 === r.transparent ? i : n).push(l)
            },
            unshift: function(t, e, r, o, s, c) {
                var l = a(t, e, r, o, s, c);
                (!0 === r.transparent ? i : n).unshift(l)
            },
            finish: function() {
                for (var n = e, i = t.length; n < i; n++) {
                    var r = t[n];
                    if (null === r.id) break;
                    r.id = null, r.object = null, r.geometry = null, r.material = null, r.program = null, r.group = null
                }
            },
            sort: function(t, e) {
                n.length > 1 && n.sort(t || Di), i.length > 1 && i.sort(e || Ni)
            }
        }
    }

    function zi() {
        var t = new WeakMap;

        function e(n) {
            var i = n.target;
            i.removeEventListener("dispose", e), t.delete(i)
        }
        return {
            get: function(n, i) {
                var r, a = t.get(n);
                return void 0 === a ? (r = new Ii, t.set(n, new WeakMap), t.get(n).set(i, r), n.addEventListener("dispose", e)) : void 0 === (r = a.get(i)) && (r = new Ii, a.set(i, r)), r
            },
            dispose: function() {
                t = new WeakMap
            }
        }
    }

    function Ui() {
        var t = {};
        return {
            get: function(e) {
                if (void 0 !== t[e.id]) return t[e.id];
                var n;
                switch (e.type) {
                    case "DirectionalLight":
                        n = {
                            direction: new x,
                            color: new zt
                        };
                        break;
                    case "SpotLight":
                        n = {
                            position: new x,
                            direction: new x,
                            color: new zt,
                            distance: 0,
                            coneCos: 0,
                            penumbraCos: 0,
                            decay: 0
                        };
                        break;
                    case "PointLight":
                        n = {
                            position: new x,
                            color: new zt,
                            distance: 0,
                            decay: 0
                        };
                        break;
                    case "HemisphereLight":
                        n = {
                            direction: new x,
                            skyColor: new zt,
                            groundColor: new zt
                        };
                        break;
                    case "RectAreaLight":
                        n = {
                            color: new zt,
                            position: new x,
                            halfWidth: new x,
                            halfHeight: new x
                        }
                }
                return t[e.id] = n, n
            }
        }
    }
    var Bi = 0;

    function Fi(t, e) {
        return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0)
    }

    function Gi() {
        for (var t, e = new Ui, n = (t = {}, {
                get: function(e) {
                    if (void 0 !== t[e.id]) return t[e.id];
                    var n;
                    switch (e.type) {
                        case "DirectionalLight":
                        case "SpotLight":
                            n = {
                                shadowBias: 0,
                                shadowRadius: 1,
                                shadowMapSize: new c
                            };
                            break;
                        case "PointLight":
                            n = {
                                shadowBias: 0,
                                shadowRadius: 1,
                                shadowMapSize: new c,
                                shadowCameraNear: 1,
                                shadowCameraFar: 1e3
                            }
                    }
                    return t[e.id] = n, n
                }
            }), i = {
                version: 0,
                hash: {
                    directionalLength: -1,
                    pointLength: -1,
                    spotLength: -1,
                    rectAreaLength: -1,
                    hemiLength: -1,
                    numDirectionalShadows: -1,
                    numPointShadows: -1,
                    numSpotShadows: -1
                },
                ambient: [0, 0, 0],
                probe: [],
                directional: [],
                directionalShadow: [],
                directionalShadowMap: [],
                directionalShadowMatrix: [],
                spot: [],
                spotShadow: [],
                spotShadowMap: [],
                spotShadowMatrix: [],
                rectArea: [],
                point: [],
                pointShadow: [],
                pointShadowMap: [],
                pointShadowMatrix: [],
                hemi: []
            }, r = 0; r < 9; r++) i.probe.push(new x);
        var a = new x,
            o = new A,
            s = new A;
        return {
            setup: function(t, r, c) {
                for (var l = 0, h = 0, u = 0, p = 0; p < 9; p++) i.probe[p].set(0, 0, 0);
                var d = 0,
                    f = 0,
                    m = 0,
                    g = 0,
                    v = 0,
                    y = 0,
                    x = 0,
                    b = 0,
                    _ = c.matrixWorldInverse;
                t.sort(Fi), p = 0;
                for (var w = t.length; p < w; p++) {
                    var M = t[p],
                        S = M.color,
                        T = M.intensity,
                        E = M.distance,
                        A = M.shadow && M.shadow.map ? M.shadow.map.texture : null;
                    if (M.isAmbientLight) l += S.r * T, h += S.g * T, u += S.b * T;
                    else if (M.isLightProbe)
                        for (var L = 0; L < 9; L++) i.probe[L].addScaledVector(M.sh.coefficients[L], T);
                    else if (M.isDirectionalLight) {
                        if ((C = e.get(M)).color.copy(M.color).multiplyScalar(M.intensity), C.direction.setFromMatrixPosition(M.matrixWorld), a.setFromMatrixPosition(M.target.matrixWorld), C.direction.sub(a), C.direction.transformDirection(_), M.castShadow) {
                            var R = M.shadow;
                            (P = n.get(M)).shadowBias = R.bias, P.shadowRadius = R.radius, P.shadowMapSize = R.mapSize, i.directionalShadow[d] = P, i.directionalShadowMap[d] = A, i.directionalShadowMatrix[d] = M.shadow.matrix, y++
                        }
                        i.directional[d] = C, d++
                    } else if (M.isSpotLight) {
                        if ((C = e.get(M)).position.setFromMatrixPosition(M.matrixWorld), C.position.applyMatrix4(_), C.color.copy(S).multiplyScalar(T), C.distance = E, C.direction.setFromMatrixPosition(M.matrixWorld), a.setFromMatrixPosition(M.target.matrixWorld), C.direction.sub(a), C.direction.transformDirection(_), C.coneCos = Math.cos(M.angle), C.penumbraCos = Math.cos(M.angle * (1 - M.penumbra)), C.decay = M.decay, M.castShadow) {
                            R = M.shadow;
                            (P = n.get(M)).shadowBias = R.bias, P.shadowRadius = R.radius, P.shadowMapSize = R.mapSize, i.spotShadow[m] = P, i.spotShadowMap[m] = A, i.spotShadowMatrix[m] = M.shadow.matrix, b++
                        }
                        i.spot[m] = C, m++
                    } else if (M.isRectAreaLight) {
                        (C = e.get(M)).color.copy(S).multiplyScalar(T), C.position.setFromMatrixPosition(M.matrixWorld), C.position.applyMatrix4(_), s.identity(), o.copy(M.matrixWorld), o.premultiply(_), s.extractRotation(o), C.halfWidth.set(.5 * M.width, 0, 0), C.halfHeight.set(0, .5 * M.height, 0), C.halfWidth.applyMatrix4(s), C.halfHeight.applyMatrix4(s), i.rectArea[g] = C, g++
                    } else if (M.isPointLight) {
                        if ((C = e.get(M)).position.setFromMatrixPosition(M.matrixWorld), C.position.applyMatrix4(_), C.color.copy(M.color).multiplyScalar(M.intensity), C.distance = M.distance, C.decay = M.decay, M.castShadow) {
                            var P;
                            R = M.shadow;
                            (P = n.get(M)).shadowBias = R.bias, P.shadowRadius = R.radius, P.shadowMapSize = R.mapSize, P.shadowCameraNear = R.camera.near, P.shadowCameraFar = R.camera.far, i.pointShadow[f] = P, i.pointShadowMap[f] = A, i.pointShadowMatrix[f] = M.shadow.matrix, x++
                        }
                        i.point[f] = C, f++
                    } else if (M.isHemisphereLight) {
                        var C;
                        (C = e.get(M)).direction.setFromMatrixPosition(M.matrixWorld), C.direction.transformDirection(_), C.direction.normalize(), C.skyColor.copy(M.color).multiplyScalar(T), C.groundColor.copy(M.groundColor).multiplyScalar(T), i.hemi[v] = C, v++
                    }
                }
                i.ambient[0] = l, i.ambient[1] = h, i.ambient[2] = u;
                var O = i.hash;
                O.directionalLength === d && O.pointLength === f && O.spotLength === m && O.rectAreaLength === g && O.hemiLength === v && O.numDirectionalShadows === y && O.numPointShadows === x && O.numSpotShadows === b || (i.directional.length = d, i.spot.length = m, i.rectArea.length = g, i.point.length = f, i.hemi.length = v, i.directionalShadow.length = y, i.directionalShadowMap.length = y, i.pointShadow.length = x, i.pointShadowMap.length = x, i.spotShadow.length = b, i.spotShadowMap.length = b, i.directionalShadowMatrix.length = y, i.pointShadowMatrix.length = x, i.spotShadowMatrix.length = b, O.directionalLength = d, O.pointLength = f, O.spotLength = m, O.rectAreaLength = g, O.hemiLength = v, O.numDirectionalShadows = y, O.numPointShadows = x, O.numSpotShadows = b, i.version = Bi++)
            },
            state: i
        }
    }

    function Hi() {
        var t = new Gi,
            e = [],
            n = [];
        return {
            init: function() {
                e.length = 0, n.length = 0
            },
            state: {
                lightsArray: e,
                shadowsArray: n,
                lights: t
            },
            setupLights: function(i) {
                t.setup(e, n, i)
            },
            pushLight: function(t) {
                e.push(t)
            },
            pushShadow: function(t) {
                n.push(t)
            }
        }
    }

    function Vi() {
        var t = new WeakMap;

        function e(n) {
            var i = n.target;
            i.removeEventListener("dispose", e), t.delete(i)
        }
        return {
            get: function(n, i) {
                var r;
                return !1 === t.has(n) ? (r = new Hi, t.set(n, new WeakMap), t.get(n).set(i, r), n.addEventListener("dispose", e)) : !1 === t.get(n).has(i) ? (r = new Hi, t.get(n).set(i, r)) : r = t.get(n).get(i), r
            },
            dispose: function() {
                t = new WeakMap
            }
        }
    }

    function ki(t) {
        Vt.call(this), this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(t)
    }

    function ji(t) {
        Vt.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new x, this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(t)
    }
    ki.prototype = Object.create(Vt.prototype), ki.prototype.constructor = ki, ki.prototype.isMeshDepthMaterial = !0, ki.prototype.copy = function(t) {
        return Vt.prototype.copy.call(this, t), this.depthPacking = t.depthPacking, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
    }, ji.prototype = Object.create(Vt.prototype), ji.prototype.constructor = ji, ji.prototype.isMeshDistanceMaterial = !0, ji.prototype.copy = function(t) {
        return Vt.prototype.copy.call(this, t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this
    };

    function Wi(t, e, n) {
        var i = new Ye,
            r = new c,
            a = new c,
            o = new d,
            s = [],
            l = [],
            h = {},
            u = {
                0: 1,
                1: 0,
                2: 2
            },
            p = new Ge({
                defines: {
                    SAMPLE_RATE: 2 / 8,
                    HALF_SAMPLE_RATE: 1 / 8
                },
                uniforms: {
                    shadow_pass: {
                        value: null
                    },
                    resolution: {
                        value: new c
                    },
                    radius: {
                        value: 4
                    }
                },
                vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
                fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n  float mean = 0.0;\n  float squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );\n  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n    #ifdef HORIZONAL_PASS\n      vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n      mean += distribution.x;\n      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n    #else\n      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );\n      mean += depth;\n      squared_mean += depth * depth;\n    #endif\n  }\n  mean = mean * HALF_SAMPLE_RATE;\n  squared_mean = squared_mean * HALF_SAMPLE_RATE;\n  float std_dev = sqrt( squared_mean - mean * mean );\n  gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
            }),
            m = p.clone();
        m.defines.HORIZONAL_PASS = 1;
        var g = new he;
        g.setAttribute("position", new Wt(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
        var v = new Le(g, p),
            y = this;

        function x(n, i) {
            var r = e.update(v);
            p.uniforms.shadow_pass.value = n.map.texture, p.uniforms.resolution.value = n.mapSize, p.uniforms.radius.value = n.radius, t.setRenderTarget(n.mapPass), t.clear(), t.renderBufferDirect(i, null, r, p, v, null), m.uniforms.shadow_pass.value = n.mapPass.texture, m.uniforms.resolution.value = n.mapSize, m.uniforms.radius.value = n.radius, t.setRenderTarget(n.map), t.clear(), t.renderBufferDirect(i, null, r, m, v, null)
        }

        function b(t, e, n) {
            var i = t << 0 | e << 1 | n << 2,
                r = s[i];
            return void 0 === r && (r = new ki({
                depthPacking: 3201,
                morphTargets: t,
                skinning: e
            }), s[i] = r), r
        }

        function _(t, e, n) {
            var i = t << 0 | e << 1 | n << 2,
                r = l[i];
            return void 0 === r && (r = new ji({
                morphTargets: t,
                skinning: e
            }), l[i] = r), r
        }

        function w(e, n, i, r, a, o) {
            var s = e.geometry,
                c = null,
                l = b,
                p = e.customDepthMaterial;
            if (!0 === i.isPointLight && (l = _, p = e.customDistanceMaterial), void 0 === p) {
                var d = !1;
                !0 === n.morphTargets && (!0 === s.isBufferGeometry ? d = s.morphAttributes && s.morphAttributes.position && s.morphAttributes.position.length > 0 : !0 === s.isGeometry && (d = s.morphTargets && s.morphTargets.length > 0));
                var f = !1;
                !0 === e.isSkinnedMesh && (!0 === n.skinning ? f = !0 : console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", e)), c = l(d, f, !0 === e.isInstancedMesh)
            } else c = p;
            if (t.localClippingEnabled && !0 === n.clipShadows && 0 !== n.clippingPlanes.length) {
                var m = c.uuid,
                    g = n.uuid,
                    v = h[m];
                void 0 === v && (v = {}, h[m] = v);
                var y = v[g];
                void 0 === y && (y = c.clone(), v[g] = y), c = y
            }
            return c.visible = n.visible, c.wireframe = n.wireframe, c.side = 3 === o ? null !== n.shadowSide ? n.shadowSide : n.side : null !== n.shadowSide ? n.shadowSide : u[n.side], c.clipShadows = n.clipShadows, c.clippingPlanes = n.clippingPlanes, c.clipIntersection = n.clipIntersection, c.wireframeLinewidth = n.wireframeLinewidth, c.linewidth = n.linewidth, !0 === i.isPointLight && !0 === c.isMeshDistanceMaterial && (c.referencePosition.setFromMatrixPosition(i.matrixWorld), c.nearDistance = r, c.farDistance = a), c
        }

        function M(n, r, a, o, s) {
            if (!1 !== n.visible) {
                if (n.layers.test(r.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && 3 === s) && (!n.frustumCulled || i.intersectsObject(n))) {
                    n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
                    var c = e.update(n),
                        l = n.material;
                    if (Array.isArray(l))
                        for (var h = c.groups, u = 0, p = h.length; u < p; u++) {
                            var d = h[u],
                                f = l[d.materialIndex];
                            if (f && f.visible) {
                                var m = w(n, f, o, a.near, a.far, s);
                                t.renderBufferDirect(a, null, c, m, n, d)
                            }
                        } else if (l.visible) {
                            m = w(n, l, o, a.near, a.far, s);
                            t.renderBufferDirect(a, null, c, m, n, null)
                        }
                }
                for (var g = n.children, v = 0, y = g.length; v < y; v++) M(g[v], r, a, o, s)
            }
        }
        this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function(e, s, c) {
            if (!1 !== y.enabled && (!1 !== y.autoUpdate || !1 !== y.needsUpdate) && 0 !== e.length) {
                var l = t.getRenderTarget(),
                    h = t.getActiveCubeFace(),
                    u = t.getActiveMipmapLevel(),
                    p = t.state;
                p.setBlending(0), p.buffers.color.setClear(1, 1, 1, 1), p.buffers.depth.setTest(!0), p.setScissorTest(!1);
                for (var d = 0, m = e.length; d < m; d++) {
                    var g = e[d],
                        v = g.shadow;
                    if (void 0 !== v) {
                        r.copy(v.mapSize);
                        var b = v.getFrameExtents();
                        if (r.multiply(b), a.copy(v.mapSize), (r.x > n || r.y > n) && (console.warn("THREE.WebGLShadowMap:", g, "has shadow exceeding max texture size, reducing"), r.x > n && (a.x = Math.floor(n / b.x), r.x = a.x * b.x, v.mapSize.x = a.x), r.y > n && (a.y = Math.floor(n / b.y), r.y = a.y * b.y, v.mapSize.y = a.y)), null === v.map && !v.isPointLightShadow && 3 === this.type) {
                            var _ = {
                                minFilter: 1006,
                                magFilter: 1006,
                                format: 1023
                            };
                            v.map = new f(r.x, r.y, _), v.map.texture.name = g.name + ".shadowMap", v.mapPass = new f(r.x, r.y, _), v.camera.updateProjectionMatrix()
                        }
                        if (null === v.map) {
                            _ = {
                                minFilter: 1003,
                                magFilter: 1003,
                                format: 1023
                            };
                            v.map = new f(r.x, r.y, _), v.map.texture.name = g.name + ".shadowMap", v.camera.updateProjectionMatrix()
                        }
                        t.setRenderTarget(v.map), t.clear();
                        for (var w = v.getViewportCount(), S = 0; S < w; S++) {
                            var T = v.getViewport(S);
                            o.set(a.x * T.x, a.y * T.y, a.x * T.z, a.y * T.w), p.viewport(o), v.updateMatrices(g, S), i = v.getFrustum(), M(s, c, v.camera, g, this.type)
                        }
                        v.isPointLightShadow || 3 !== this.type || x(v, c)
                    } else console.warn("THREE.WebGLShadowMap:", g, "has no shadow.")
                }
                y.needsUpdate = !1, t.setRenderTarget(l, h, u)
            }
        }
    }

    function qi(t, e, n) {
        var i = n.isWebGL2;
        var r = new function() {
                var e = !1,
                    n = new d,
                    i = null,
                    r = new d(0, 0, 0, 0);
                return {
                    setMask: function(n) {
                        i === n || e || (t.colorMask(n, n, n, n), i = n)
                    },
                    setLocked: function(t) {
                        e = t
                    },
                    setClear: function(e, i, a, o, s) {
                        !0 === s && (e *= o, i *= o, a *= o), n.set(e, i, a, o), !1 === r.equals(n) && (t.clearColor(e, i, a, o), r.copy(n))
                    },
                    reset: function() {
                        e = !1, i = null, r.set(-1, 0, 0, 0)
                    }
                }
            },
            a = new function() {
                var e = !1,
                    n = null,
                    i = null,
                    r = null;
                return {
                    setTest: function(t) {
                        t ? F(2929) : G(2929)
                    },
                    setMask: function(i) {
                        n === i || e || (t.depthMask(i), n = i)
                    },
                    setFunc: function(e) {
                        if (i !== e) {
                            if (e) switch (e) {
                                case 0:
                                    t.depthFunc(512);
                                    break;
                                case 1:
                                    t.depthFunc(519);
                                    break;
                                case 2:
                                    t.depthFunc(513);
                                    break;
                                case 3:
                                    t.depthFunc(515);
                                    break;
                                case 4:
                                    t.depthFunc(514);
                                    break;
                                case 5:
                                    t.depthFunc(518);
                                    break;
                                case 6:
                                    t.depthFunc(516);
                                    break;
                                case 7:
                                    t.depthFunc(517);
                                    break;
                                default:
                                    t.depthFunc(515)
                            } else t.depthFunc(515);
                            i = e
                        }
                    },
                    setLocked: function(t) {
                        e = t
                    },
                    setClear: function(e) {
                        r !== e && (t.clearDepth(e), r = e)
                    },
                    reset: function() {
                        e = !1, n = null, i = null, r = null
                    }
                }
            },
            o = new function() {
                var e = !1,
                    n = null,
                    i = null,
                    r = null,
                    a = null,
                    o = null,
                    s = null,
                    c = null,
                    l = null;
                return {
                    setTest: function(t) {
                        e || (t ? F(2960) : G(2960))
                    },
                    setMask: function(i) {
                        n === i || e || (t.stencilMask(i), n = i)
                    },
                    setFunc: function(e, n, o) {
                        i === e && r === n && a === o || (t.stencilFunc(e, n, o), i = e, r = n, a = o)
                    },
                    setOp: function(e, n, i) {
                        o === e && s === n && c === i || (t.stencilOp(e, n, i), o = e, s = n, c = i)
                    },
                    setLocked: function(t) {
                        e = t
                    },
                    setClear: function(e) {
                        l !== e && (t.clearStencil(e), l = e)
                    },
                    reset: function() {
                        e = !1, n = null, i = null, r = null, a = null, o = null, s = null, c = null, l = null
                    }
                }
            },
            s = t.getParameter(34921),
            c = new Uint8Array(s),
            l = new Uint8Array(s),
            h = new Uint8Array(s),
            u = {},
            p = null,
            f = null,
            m = null,
            g = null,
            v = null,
            y = null,
            x = null,
            b = null,
            _ = null,
            w = !1,
            M = null,
            S = null,
            T = null,
            E = null,
            A = null,
            L = t.getParameter(35661),
            R = !1,
            P = 0,
            C = t.getParameter(7938); - 1 !== C.indexOf("WebGL") ? (P = parseFloat(/^WebGL\ ([0-9])/.exec(C)[1]), R = P >= 1) : -1 !== C.indexOf("OpenGL ES") && (P = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(C)[1]), R = P >= 2);
        var O = null,
            D = {},
            N = new d,
            I = new d;

        function z(e, n, i) {
            var r = new Uint8Array(4),
                a = t.createTexture();
            t.bindTexture(e, a), t.texParameteri(e, 10241, 9728), t.texParameteri(e, 10240, 9728);
            for (var o = 0; o < i; o++) t.texImage2D(n + o, 0, 6408, 1, 1, 0, 6408, 5121, r);
            return a
        }
        var U = {};

        function B(n, r) {
            (c[n] = 1, 0 === l[n] && (t.enableVertexAttribArray(n), l[n] = 1), h[n] !== r) && ((i ? t : e.get("ANGLE_instanced_arrays"))[i ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, r), h[n] = r)
        }

        function F(e) {
            !0 !== u[e] && (t.enable(e), u[e] = !0)
        }

        function G(e) {
            !1 !== u[e] && (t.disable(e), u[e] = !1)
        }
        U[3553] = z(3553, 3553, 1), U[34067] = z(34067, 34069, 6), r.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), F(2929), a.setFunc(3), W(!1), q(1), F(2884), j(0);
        var H = {
            100: 32774,
            101: 32778,
            102: 32779
        };
        if (i) H[103] = 32775, H[104] = 32776;
        else {
            var V = e.get("EXT_blend_minmax");
            null !== V && (H[103] = V.MIN_EXT, H[104] = V.MAX_EXT)
        }
        var k = {
            200: 0,
            201: 1,
            202: 768,
            204: 770,
            210: 776,
            208: 774,
            206: 772,
            203: 769,
            205: 771,
            209: 775,
            207: 773
        };

        function j(e, n, i, r, a, o, s, c) {
            if (0 !== e) {
                if (f || (F(3042), f = !0), 5 === e) a = a || n, o = o || i, s = s || r, n === g && a === x || (t.blendEquationSeparate(H[n], H[a]), g = n, x = a), i === v && r === y && o === b && s === _ || (t.blendFuncSeparate(k[i], k[r], k[o], k[s]), v = i, y = r, b = o, _ = s), m = e, w = null;
                else if (e !== m || c !== w) {
                    if (100 === g && 100 === x || (t.blendEquation(32774), g = 100, x = 100), c) switch (e) {
                        case 1:
                            t.blendFuncSeparate(1, 771, 1, 771);
                            break;
                        case 2:
                            t.blendFunc(1, 1);
                            break;
                        case 3:
                            t.blendFuncSeparate(0, 0, 769, 771);
                            break;
                        case 4:
                            t.blendFuncSeparate(0, 768, 0, 770);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", e)
                    } else switch (e) {
                        case 1:
                            t.blendFuncSeparate(770, 771, 1, 771);
                            break;
                        case 2:
                            t.blendFunc(770, 1);
                            break;
                        case 3:
                            t.blendFunc(0, 769);
                            break;
                        case 4:
                            t.blendFunc(0, 768);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", e)
                    }
                    v = null, y = null, b = null, _ = null, m = e, w = c
                }
            } else f && (G(3042), f = !1)
        }

        function W(e) {
            M !== e && (e ? t.frontFace(2304) : t.frontFace(2305), M = e)
        }

        function q(e) {
            0 !== e ? (F(2884), e !== S && (1 === e ? t.cullFace(1029) : 2 === e ? t.cullFace(1028) : t.cullFace(1032))) : G(2884), S = e
        }

        function X(e, n, i) {
            e ? (F(32823), E === n && A === i || (t.polygonOffset(n, i), E = n, A = i)) : G(32823)
        }

        function Y(e) {
            void 0 === e && (e = 33984 + L - 1), O !== e && (t.activeTexture(e), O = e)
        }
        return {
            buffers: {
                color: r,
                depth: a,
                stencil: o
            },
            initAttributes: function() {
                for (var t = 0, e = c.length; t < e; t++) c[t] = 0
            },
            enableAttribute: function(t) {
                B(t, 0)
            },
            enableAttributeAndDivisor: B,
            disableUnusedAttributes: function() {
                for (var e = 0, n = l.length; e !== n; ++e) l[e] !== c[e] && (t.disableVertexAttribArray(e), l[e] = 0)
            },
            enable: F,
            disable: G,
            useProgram: function(e) {
                return p !== e && (t.useProgram(e), p = e, !0)
            },
            setBlending: j,
            setMaterial: function(t, e) {
                2 === t.side ? G(2884) : F(2884);
                var n = 1 === t.side;
                e && (n = !n), W(n), 1 === t.blending && !1 === t.transparent ? j(0) : j(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha), a.setFunc(t.depthFunc), a.setTest(t.depthTest), a.setMask(t.depthWrite), r.setMask(t.colorWrite);
                var i = t.stencilWrite;
                o.setTest(i), i && (o.setMask(t.stencilWriteMask), o.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), o.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), X(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits)
            },
            setFlipSided: W,
            setCullFace: q,
            setLineWidth: function(e) {
                e !== T && (R && t.lineWidth(e), T = e)
            },
            setPolygonOffset: X,
            setScissorTest: function(t) {
                t ? F(3089) : G(3089)
            },
            activeTexture: Y,
            bindTexture: function(e, n) {
                null === O && Y();
                var i = D[O];
                void 0 === i && (i = {
                    type: void 0,
                    texture: void 0
                }, D[O] = i), i.type === e && i.texture === n || (t.bindTexture(e, n || U[e]), i.type = e, i.texture = n)
            },
            unbindTexture: function() {
                var e = D[O];
                void 0 !== e && void 0 !== e.type && (t.bindTexture(e.type, null), e.type = void 0, e.texture = void 0)
            },
            compressedTexImage2D: function() {
                try {
                    t.compressedTexImage2D.apply(t, arguments)
                } catch (t) {
                    console.error("THREE.WebGLState:", t)
                }
            },
            texImage2D: function() {
                try {
                    t.texImage2D.apply(t, arguments)
                } catch (t) {
                    console.error("THREE.WebGLState:", t)
                }
            },
            texImage3D: function() {
                try {
                    t.texImage3D.apply(t, arguments)
                } catch (t) {
                    console.error("THREE.WebGLState:", t)
                }
            },
            scissor: function(e) {
                !1 === N.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), N.copy(e))
            },
            viewport: function(e) {
                !1 === I.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), I.copy(e))
            },
            reset: function() {
                for (var e = 0; e < l.length; e++) 1 === l[e] && (t.disableVertexAttribArray(e), l[e] = 0);
                u = {}, O = null, D = {}, p = null, m = null, M = null, S = null, r.reset(), a.reset(), o.reset()
            }
        }
    }

    function Xi(t, e, n, i, r, a, o) {
        var c, l = r.isWebGL2,
            h = r.maxTextures,
            u = r.maxCubemapSize,
            p = r.maxTextureSize,
            d = r.maxSamples,
            f = new WeakMap,
            m = !1;
        try {
            m = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d")
        } catch (t) {}

        function g(t, e) {
            return m ? new OffscreenCanvas(t, e) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")
        }

        function v(t, e, n, i) {
            var r = 1;
            if ((t.width > i || t.height > i) && (r = i / Math.max(t.width, t.height)), r < 1 || !0 === e) {
                if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
                    var a = e ? s.floorPowerOfTwo : Math.floor,
                        o = a(r * t.width),
                        l = a(r * t.height);
                    void 0 === c && (c = g(o, l));
                    var h = n ? g(o, l) : c;
                    return h.width = o, h.height = l, h.getContext("2d").drawImage(t, 0, 0, o, l), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + o + "x" + l + ")."), h
                }
                return "data" in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."), t
            }
            return t
        }

        function y(t) {
            return s.isPowerOfTwo(t.width) && s.isPowerOfTwo(t.height)
        }

        function x(t, e) {
            return t.generateMipmaps && e && 1003 !== t.minFilter && 1006 !== t.minFilter
        }

        function b(e, n, r, a) {
            t.generateMipmap(e), i.get(n).__maxMipLevel = Math.log(Math.max(r, a)) * Math.LOG2E
        }

        function _(n, i, r) {
            if (!1 === l) return i;
            if (null !== n) {
                if (void 0 !== t[n]) return t[n];
                console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'")
            }
            var a = i;
            return 6403 === i && (5126 === r && (a = 33326), 5131 === r && (a = 33325), 5121 === r && (a = 33321)), 6407 === i && (5126 === r && (a = 34837), 5131 === r && (a = 34843), 5121 === r && (a = 32849)), 6408 === i && (5126 === r && (a = 34836), 5131 === r && (a = 34842), 5121 === r && (a = 32856)), 33325 !== a && 33326 !== a && 34842 !== a && 34836 !== a || e.get("EXT_color_buffer_float"), a
        }

        function w(t) {
            return 1003 === t || 1004 === t || 1005 === t ? 9728 : 9729
        }

        function M(e) {
            var n = e.target;
            n.removeEventListener("dispose", M),
                function(e) {
                    var n = i.get(e);
                    if (void 0 === n.__webglInit) return;
                    t.deleteTexture(n.__webglTexture), i.remove(e)
                }(n), n.isVideoTexture && f.delete(n), o.memory.textures--
        }

        function S(e) {
            var n = e.target;
            n.removeEventListener("dispose", S),
                function(e) {
                    var n = i.get(e),
                        r = i.get(e.texture);
                    if (!e) return;
                    void 0 !== r.__webglTexture && t.deleteTexture(r.__webglTexture);
                    e.depthTexture && e.depthTexture.dispose();
                    if (e.isWebGLCubeRenderTarget)
                        for (var a = 0; a < 6; a++) t.deleteFramebuffer(n.__webglFramebuffer[a]), n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer[a]);
                    else t.deleteFramebuffer(n.__webglFramebuffer), n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer), n.__webglMultisampledFramebuffer && t.deleteFramebuffer(n.__webglMultisampledFramebuffer), n.__webglColorRenderbuffer && t.deleteRenderbuffer(n.__webglColorRenderbuffer), n.__webglDepthRenderbuffer && t.deleteRenderbuffer(n.__webglDepthRenderbuffer);
                    i.remove(e.texture), i.remove(e)
                }(n), o.memory.textures--
        }
        var T = 0;

        function E(t, e) {
            var r = i.get(t);
            if (t.isVideoTexture && function(t) {
                    var e = o.render.frame;
                    f.get(t) !== e && (f.set(t, e), t.update())
                }(t), t.version > 0 && r.__version !== t.version) {
                var a = t.image;
                if (void 0 === a) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
                else {
                    if (!1 !== a.complete) return void D(r, t, e);
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
                }
            }
            n.activeTexture(33984 + e), n.bindTexture(3553, r.__webglTexture)
        }

        function A(e, r) {
            if (6 === e.image.length) {
                var o = i.get(e);
                if (e.version > 0 && o.__version !== e.version) {
                    O(o, e), n.activeTexture(33984 + r), n.bindTexture(34067, o.__webglTexture), t.pixelStorei(37440, e.flipY);
                    for (var s = e && (e.isCompressedTexture || e.image[0].isCompressedTexture), c = e.image[0] && e.image[0].isDataTexture, h = [], p = 0; p < 6; p++) h[p] = s || c ? c ? e.image[p].image : e.image[p] : v(e.image[p], !1, !0, u);
                    var d, f = h[0],
                        m = y(f) || l,
                        g = a.convert(e.format),
                        w = a.convert(e.type),
                        M = _(e.internalFormat, g, w);
                    if (C(34067, e, m), s) {
                        for (p = 0; p < 6; p++) {
                            d = h[p].mipmaps;
                            for (var S = 0; S < d.length; S++) {
                                var T = d[S];
                                1023 !== e.format && 1022 !== e.format ? null !== g ? n.compressedTexImage2D(34069 + p, S, M, T.width, T.height, 0, T.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(34069 + p, S, M, T.width, T.height, 0, g, w, T.data)
                            }
                        }
                        o.__maxMipLevel = d.length - 1
                    } else {
                        d = e.mipmaps;
                        for (p = 0; p < 6; p++)
                            if (c) {
                                n.texImage2D(34069 + p, 0, M, h[p].width, h[p].height, 0, g, w, h[p].data);
                                for (S = 0; S < d.length; S++) {
                                    var E = (T = d[S]).image[p].image;
                                    n.texImage2D(34069 + p, S + 1, M, E.width, E.height, 0, g, w, E.data)
                                }
                            } else {
                                n.texImage2D(34069 + p, 0, M, g, w, h[p]);
                                for (S = 0; S < d.length; S++) {
                                    T = d[S];
                                    n.texImage2D(34069 + p, S + 1, M, g, w, T.image[p])
                                }
                            } o.__maxMipLevel = d.length
                    }
                    x(e, m) && b(34067, e, f.width, f.height), o.__version = e.version, e.onUpdate && e.onUpdate(e)
                } else n.activeTexture(33984 + r), n.bindTexture(34067, o.__webglTexture)
            }
        }

        function L(t, e) {
            n.activeTexture(33984 + e), n.bindTexture(34067, i.get(t).__webglTexture)
        }
        var R = {
                1e3: 10497,
                1001: 33071,
                1002: 33648
            },
            P = {
                1003: 9728,
                1004: 9984,
                1005: 9986,
                1006: 9729,
                1007: 9985,
                1008: 9987
            };

        function C(n, a, o) {
            o ? (t.texParameteri(n, 10242, R[a.wrapS]), t.texParameteri(n, 10243, R[a.wrapT]), 32879 !== n && 35866 !== n || t.texParameteri(n, 32882, R[a.wrapR]), t.texParameteri(n, 10240, P[a.magFilter]), t.texParameteri(n, 10241, P[a.minFilter])) : (t.texParameteri(n, 10242, 33071), t.texParameteri(n, 10243, 33071), 32879 !== n && 35866 !== n || t.texParameteri(n, 32882, 33071), 1001 === a.wrapS && 1001 === a.wrapT || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t.texParameteri(n, 10240, w(a.magFilter)), t.texParameteri(n, 10241, w(a.minFilter)), 1003 !== a.minFilter && 1006 !== a.minFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));
            var s = e.get("EXT_texture_filter_anisotropic");
            if (s) {
                if (1015 === a.type && null === e.get("OES_texture_float_linear")) return;
                if (1016 === a.type && null === (l || e.get("OES_texture_half_float_linear"))) return;
                (a.anisotropy > 1 || i.get(a).__currentAnisotropy) && (t.texParameterf(n, s.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, r.getMaxAnisotropy())), i.get(a).__currentAnisotropy = a.anisotropy)
            }
        }

        function O(e, n) {
            void 0 === e.__webglInit && (e.__webglInit = !0, n.addEventListener("dispose", M), e.__webglTexture = t.createTexture(), o.memory.textures++)
        }

        function D(e, i, r) {
            var o = 3553;
            i.isDataTexture2DArray && (o = 35866), i.isDataTexture3D && (o = 32879), O(e, i), n.activeTexture(33984 + r), n.bindTexture(o, e.__webglTexture), t.pixelStorei(37440, i.flipY), t.pixelStorei(37441, i.premultiplyAlpha), t.pixelStorei(3317, i.unpackAlignment);
            var s = function(t) {
                    return !l && (1001 !== t.wrapS || 1001 !== t.wrapT || 1003 !== t.minFilter && 1006 !== t.minFilter)
                }(i) && !1 === y(i.image),
                c = v(i.image, s, !1, p),
                h = y(c) || l,
                u = a.convert(i.format),
                d = a.convert(i.type),
                f = _(i.internalFormat, u, d);
            C(o, i, h);
            var m, g = i.mipmaps;
            if (i.isDepthTexture) f = 6402, l ? f = 1015 === i.type ? 36012 : 1014 === i.type ? 33190 : 1020 === i.type ? 35056 : 33189 : 1015 === i.type && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), 1026 === i.format && 6402 === f && 1012 !== i.type && 1014 !== i.type && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), i.type = 1012, d = a.convert(i.type)), 1027 === i.format && 6402 === f && (f = 34041, 1020 !== i.type && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), i.type = 1020, d = a.convert(i.type))), n.texImage2D(3553, 0, f, c.width, c.height, 0, u, d, null);
            else if (i.isDataTexture)
                if (g.length > 0 && h) {
                    for (var w = 0, M = g.length; w < M; w++) m = g[w], n.texImage2D(3553, w, f, m.width, m.height, 0, u, d, m.data);
                    i.generateMipmaps = !1, e.__maxMipLevel = g.length - 1
                } else n.texImage2D(3553, 0, f, c.width, c.height, 0, u, d, c.data), e.__maxMipLevel = 0;
            else if (i.isCompressedTexture) {
                for (w = 0, M = g.length; w < M; w++) m = g[w], 1023 !== i.format && 1022 !== i.format ? null !== u ? n.compressedTexImage2D(3553, w, f, m.width, m.height, 0, m.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(3553, w, f, m.width, m.height, 0, u, d, m.data);
                e.__maxMipLevel = g.length - 1
            } else if (i.isDataTexture2DArray) n.texImage3D(35866, 0, f, c.width, c.height, c.depth, 0, u, d, c.data), e.__maxMipLevel = 0;
            else if (i.isDataTexture3D) n.texImage3D(32879, 0, f, c.width, c.height, c.depth, 0, u, d, c.data), e.__maxMipLevel = 0;
            else if (g.length > 0 && h) {
                for (w = 0, M = g.length; w < M; w++) m = g[w], n.texImage2D(3553, w, f, u, d, m);
                i.generateMipmaps = !1, e.__maxMipLevel = g.length - 1
            } else n.texImage2D(3553, 0, f, u, d, c), e.__maxMipLevel = 0;
            x(i, h) && b(o, i, c.width, c.height), e.__version = i.version, i.onUpdate && i.onUpdate(i)
        }

        function N(e, r, o, s) {
            var c = a.convert(r.texture.format),
                l = a.convert(r.texture.type),
                h = _(r.texture.internalFormat, c, l);
            n.texImage2D(s, 0, h, r.width, r.height, 0, c, l, null), t.bindFramebuffer(36160, e), t.framebufferTexture2D(36160, o, s, i.get(r.texture).__webglTexture, 0), t.bindFramebuffer(36160, null)
        }

        function I(e, n, i) {
            if (t.bindRenderbuffer(36161, e), n.depthBuffer && !n.stencilBuffer) {
                var r = 33189;
                if (i) {
                    var o = n.depthTexture;
                    o && o.isDepthTexture && (1015 === o.type ? r = 36012 : 1014 === o.type && (r = 33190));
                    var s = U(n);
                    t.renderbufferStorageMultisample(36161, s, r, n.width, n.height)
                } else t.renderbufferStorage(36161, r, n.width, n.height);
                t.framebufferRenderbuffer(36160, 36096, 36161, e)
            } else if (n.depthBuffer && n.stencilBuffer) {
                if (i) {
                    s = U(n);
                    t.renderbufferStorageMultisample(36161, s, 35056, n.width, n.height)
                } else t.renderbufferStorage(36161, 34041, n.width, n.height);
                t.framebufferRenderbuffer(36160, 33306, 36161, e)
            } else {
                var c = a.convert(n.texture.format),
                    l = a.convert(n.texture.type);
                r = _(n.texture.internalFormat, c, l);
                if (i) {
                    s = U(n);
                    t.renderbufferStorageMultisample(36161, s, r, n.width, n.height)
                } else t.renderbufferStorage(36161, r, n.width, n.height)
            }
            t.bindRenderbuffer(36161, null)
        }

        function z(e) {
            var n = i.get(e),
                r = !0 === e.isWebGLCubeRenderTarget;
            if (e.depthTexture) {
                if (r) throw new Error("target.depthTexture not supported in Cube render targets");
                ! function(e, n) {
                    if (n && n.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
                    if (t.bindFramebuffer(36160, e), !n.depthTexture || !n.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                    i.get(n.depthTexture).__webglTexture && n.depthTexture.image.width === n.width && n.depthTexture.image.height === n.height || (n.depthTexture.image.width = n.width, n.depthTexture.image.height = n.height, n.depthTexture.needsUpdate = !0), E(n.depthTexture, 0);
                    var r = i.get(n.depthTexture).__webglTexture;
                    if (1026 === n.depthTexture.format) t.framebufferTexture2D(36160, 36096, 3553, r, 0);
                    else {
                        if (1027 !== n.depthTexture.format) throw new Error("Unknown depthTexture format");
                        t.framebufferTexture2D(36160, 33306, 3553, r, 0)
                    }
                }(n.__webglFramebuffer, e)
            } else if (r) {
                n.__webglDepthbuffer = [];
                for (var a = 0; a < 6; a++) t.bindFramebuffer(36160, n.__webglFramebuffer[a]), n.__webglDepthbuffer[a] = t.createRenderbuffer(), I(n.__webglDepthbuffer[a], e, !1)
            } else t.bindFramebuffer(36160, n.__webglFramebuffer), n.__webglDepthbuffer = t.createRenderbuffer(), I(n.__webglDepthbuffer, e, !1);
            t.bindFramebuffer(36160, null)
        }

        function U(t) {
            return l && t.isWebGLMultisampleRenderTarget ? Math.min(d, t.samples) : 0
        }
        var B = !1,
            F = !1;
        this.allocateTextureUnit = function() {
            var t = T;
            return t >= h && console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + h), T += 1, t
        }, this.resetTextureUnits = function() {
            T = 0
        }, this.setTexture2D = E, this.setTexture2DArray = function(t, e) {
            var r = i.get(t);
            t.version > 0 && r.__version !== t.version ? D(r, t, e) : (n.activeTexture(33984 + e), n.bindTexture(35866, r.__webglTexture))
        }, this.setTexture3D = function(t, e) {
            var r = i.get(t);
            t.version > 0 && r.__version !== t.version ? D(r, t, e) : (n.activeTexture(33984 + e), n.bindTexture(32879, r.__webglTexture))
        }, this.setTextureCube = A, this.setTextureCubeDynamic = L, this.setupRenderTarget = function(e) {
            var r = i.get(e),
                s = i.get(e.texture);
            e.addEventListener("dispose", S), s.__webglTexture = t.createTexture(), o.memory.textures++;
            var c = !0 === e.isWebGLCubeRenderTarget,
                h = !0 === e.isWebGLMultisampleRenderTarget,
                u = y(e) || l;
            if (!l || 1022 !== e.texture.format || 1015 !== e.texture.type && 1016 !== e.texture.type || (e.texture.format = 1023, console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")), c) {
                r.__webglFramebuffer = [];
                for (var p = 0; p < 6; p++) r.__webglFramebuffer[p] = t.createFramebuffer()
            } else if (r.__webglFramebuffer = t.createFramebuffer(), h)
                if (l) {
                    r.__webglMultisampledFramebuffer = t.createFramebuffer(), r.__webglColorRenderbuffer = t.createRenderbuffer(), t.bindRenderbuffer(36161, r.__webglColorRenderbuffer);
                    var d = a.convert(e.texture.format),
                        f = a.convert(e.texture.type),
                        m = _(e.texture.internalFormat, d, f),
                        g = U(e);
                    t.renderbufferStorageMultisample(36161, g, m, e.width, e.height), t.bindFramebuffer(36160, r.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(36160, 36064, 36161, r.__webglColorRenderbuffer), t.bindRenderbuffer(36161, null), e.depthBuffer && (r.__webglDepthRenderbuffer = t.createRenderbuffer(), I(r.__webglDepthRenderbuffer, e, !0)), t.bindFramebuffer(36160, null)
                } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
            if (c) {
                n.bindTexture(34067, s.__webglTexture), C(34067, e.texture, u);
                for (p = 0; p < 6; p++) N(r.__webglFramebuffer[p], e, 36064, 34069 + p);
                x(e.texture, u) && b(34067, e.texture, e.width, e.height), n.bindTexture(34067, null)
            } else n.bindTexture(3553, s.__webglTexture), C(3553, e.texture, u), N(r.__webglFramebuffer, e, 36064, 3553), x(e.texture, u) && b(3553, e.texture, e.width, e.height), n.bindTexture(3553, null);
            e.depthBuffer && z(e)
        }, this.updateRenderTargetMipmap = function(t) {
            var e = t.texture;
            if (x(e, y(t) || l)) {
                var r = t.isWebGLCubeRenderTarget ? 34067 : 3553,
                    a = i.get(e).__webglTexture;
                n.bindTexture(r, a), b(r, e, t.width, t.height), n.bindTexture(r, null)
            }
        }, this.updateMultisampleRenderTarget = function(e) {
            if (e.isWebGLMultisampleRenderTarget)
                if (l) {
                    var n = i.get(e);
                    t.bindFramebuffer(36008, n.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, n.__webglFramebuffer);
                    var r = e.width,
                        a = e.height,
                        o = 16384;
                    e.depthBuffer && (o |= 256), e.stencilBuffer && (o |= 1024), t.blitFramebuffer(0, 0, r, a, 0, 0, r, a, o, 9728), t.bindFramebuffer(36160, n.__webglMultisampledFramebuffer)
                } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")
        }, this.safeSetTexture2D = function(t, e) {
            t && t.isWebGLRenderTarget && (!1 === B && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), B = !0), t = t.texture), E(t, e)
        }, this.safeSetTextureCube = function(t, e) {
            t && t.isWebGLCubeRenderTarget && (!1 === F && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), F = !0), t = t.texture), t && t.isCubeTexture || Array.isArray(t.image) && 6 === t.image.length ? A(t, e) : L(t, e)
        }
    }

    function Yi(t, e, n) {
        var i = n.isWebGL2;
        return {
            convert: function(t) {
                var n;
                if (1009 === t) return 5121;
                if (1017 === t) return 32819;
                if (1018 === t) return 32820;
                if (1019 === t) return 33635;
                if (1010 === t) return 5120;
                if (1011 === t) return 5122;
                if (1012 === t) return 5123;
                if (1013 === t) return 5124;
                if (1014 === t) return 5125;
                if (1015 === t) return 5126;
                if (1016 === t) return i ? 5131 : null !== (n = e.get("OES_texture_half_float")) ? n.HALF_FLOAT_OES : null;
                if (1021 === t) return 6406;
                if (1022 === t) return 6407;
                if (1023 === t) return 6408;
                if (1024 === t) return 6409;
                if (1025 === t) return 6410;
                if (1026 === t) return 6402;
                if (1027 === t) return 34041;
                if (1028 === t) return 6403;
                if (1029 === t) return 36244;
                if (1030 === t) return 33319;
                if (1031 === t) return 33320;
                if (1032 === t) return 36248;
                if (1033 === t) return 36249;
                if (33776 === t || 33777 === t || 33778 === t || 33779 === t) {
                    if (null === (n = e.get("WEBGL_compressed_texture_s3tc"))) return null;
                    if (33776 === t) return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
                    if (33777 === t) return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                    if (33778 === t) return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                    if (33779 === t) return n.COMPRESSED_RGBA_S3TC_DXT5_EXT
                }
                if (35840 === t || 35841 === t || 35842 === t || 35843 === t) {
                    if (null === (n = e.get("WEBGL_compressed_texture_pvrtc"))) return null;
                    if (35840 === t) return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    if (35841 === t) return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    if (35842 === t) return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    if (35843 === t) return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                }
                if (36196 === t) return null !== (n = e.get("WEBGL_compressed_texture_etc1")) ? n.COMPRESSED_RGB_ETC1_WEBGL : null;
                if ((37492 === t || 37496 === t) && null !== (n = e.get("WEBGL_compressed_texture_etc"))) {
                    if (37492 === t) return n.COMPRESSED_RGB8_ETC2;
                    if (37496 === t) return n.COMPRESSED_RGBA8_ETC2_EAC
                }
                return 37808 === t || 37809 === t || 37810 === t || 37811 === t || 37812 === t || 37813 === t || 37814 === t || 37815 === t || 37816 === t || 37817 === t || 37818 === t || 37819 === t || 37820 === t || 37821 === t || 37840 === t || 37841 === t || 37842 === t || 37843 === t || 37844 === t || 37845 === t || 37846 === t || 37847 === t || 37848 === t || 37849 === t || 37850 === t || 37851 === t || 37852 === t || 37853 === t ? null !== (n = e.get("WEBGL_compressed_texture_astc")) ? t : null : 36492 === t ? null !== (n = e.get("EXT_texture_compression_bptc")) ? t : null : 1020 === t ? i ? 34042 : null !== (n = e.get("WEBGL_depth_texture")) ? n.UNSIGNED_INT_24_8_WEBGL : null : void 0
            }
        }
    }

    function Zi(t) {
        Ve.call(this), this.cameras = t || []
    }

    function Ji() {
        W.call(this), this.type = "Group"
    }

    function Qi(t, e) {
        var n = this,
            i = null,
            r = 1,
            a = null,
            o = "local-floor",
            s = null,
            c = [],
            l = new Map,
            h = new Ve;
        h.layers.enable(1), h.viewport = new d;
        var u = new Ve;
        u.layers.enable(2), u.viewport = new d;
        var p = new Zi([h, u]);
        p.layers.enable(1), p.layers.enable(2);
        var f = null,
            m = null;

        function g(t) {
            var e = l.get(t.inputSource);
            e && (e.targetRay && e.targetRay.dispatchEvent({
                type: t.type
            }), e.grip && e.grip.dispatchEvent({
                type: t.type
            }))
        }

        function v() {
            l.forEach((function(t, e) {
                t.targetRay && (t.targetRay.dispatchEvent({
                    type: "disconnected",
                    data: e
                }), t.targetRay.visible = !1), t.grip && (t.grip.dispatchEvent({
                    type: "disconnected",
                    data: e
                }), t.grip.visible = !1)
            })), l.clear(), t.setFramebuffer(null), t.setRenderTarget(t.getRenderTarget()), T.stop(), n.isPresenting = !1, n.dispatchEvent({
                type: "sessionend"
            })
        }

        function y(t) {
            a = t, T.setContext(i), T.start(), n.isPresenting = !0, n.dispatchEvent({
                type: "sessionstart"
            })
        }

        function b(t) {
            for (var e = i.inputSources, n = 0; n < c.length; n++) l.set(e[n], c[n]);
            for (n = 0; n < t.removed.length; n++) {
                var r = t.removed[n];
                (a = l.get(r)) && (a.targetRay && a.targetRay.dispatchEvent({
                    type: "disconnected",
                    data: r
                }), a.grip && a.grip.dispatchEvent({
                    type: "disconnected",
                    data: r
                }), l.delete(r))
            }
            for (n = 0; n < t.added.length; n++) {
                var a;
                r = t.added[n];
                (a = l.get(r)) && (a.targetRay && a.targetRay.dispatchEvent({
                    type: "connected",
                    data: r
                }), a.grip && a.grip.dispatchEvent({
                    type: "connected",
                    data: r
                }))
            }
        }
        this.enabled = !1, this.isPresenting = !1, this.getController = function(t) {
            var e = c[t];
            return void 0 === e && (e = {}, c[t] = e), void 0 === e.targetRay && (e.targetRay = new Ji, e.targetRay.matrixAutoUpdate = !1, e.targetRay.visible = !1), e.targetRay
        }, this.getControllerGrip = function(t) {
            var e = c[t];
            return void 0 === e && (e = {}, c[t] = e), void 0 === e.grip && (e.grip = new Ji, e.grip.matrixAutoUpdate = !1, e.grip.visible = !1), e.grip
        }, this.setFramebufferScaleFactor = function(t) {
            r = t, 1 == n.isPresenting && console.warn("WebXRManager: Cannot change framebuffer scale while presenting VR content")
        }, this.setReferenceSpaceType = function(t) {
            o = t
        }, this.getReferenceSpace = function() {
            return a
        }, this.getSession = function() {
            return i
        }, this.setSession = function(t) {
            if (null !== (i = t)) {
                i.addEventListener("select", g), i.addEventListener("selectstart", g), i.addEventListener("selectend", g), i.addEventListener("squeeze", g), i.addEventListener("squeezestart", g), i.addEventListener("squeezeend", g), i.addEventListener("end", v);
                var n = e.getContextAttributes(),
                    a = {
                        antialias: n.antialias,
                        alpha: n.alpha,
                        depth: n.depth,
                        stencil: n.stencil,
                        framebufferScaleFactor: r
                    },
                    s = new XRWebGLLayer(i, e, a);
                i.updateRenderState({
                    baseLayer: s
                }), i.requestReferenceSpace(o).then(y), i.addEventListener("inputsourceschange", b)
            }
        };
        var _ = new x,
            w = new x;

        function M(t, e) {
            null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.getInverse(t.matrixWorld)
        }
        this.getCamera = function(t) {
            p.near = u.near = h.near = t.near, p.far = u.far = h.far = t.far, f === p.near && m === p.far || (i.updateRenderState({
                depthNear: p.near,
                depthFar: p.far
            }), f = p.near, m = p.far);
            var e = t.parent,
                n = p.cameras;
            M(p, e);
            for (var r = 0; r < n.length; r++) M(n[r], e);
            t.matrixWorld.copy(p.matrixWorld);
            for (var a = t.children, o = (r = 0, a.length); r < o; r++) a[r].updateMatrixWorld(!0);
            return function(t, e, n) {
                _.setFromMatrixPosition(e.matrixWorld), w.setFromMatrixPosition(n.matrixWorld);
                var i = _.distanceTo(w),
                    r = e.projectionMatrix.elements,
                    a = n.projectionMatrix.elements,
                    o = r[14] / (r[10] - 1),
                    s = r[14] / (r[10] + 1),
                    c = (r[9] + 1) / r[5],
                    l = (r[9] - 1) / r[5],
                    h = (r[8] - 1) / r[0],
                    u = (a[8] + 1) / a[0],
                    p = o * h,
                    d = o * u,
                    f = i / (-h + u),
                    m = f * -h;
                e.matrixWorld.decompose(t.position, t.quaternion, t.scale), t.translateX(m), t.translateZ(f), t.matrixWorld.compose(t.position, t.quaternion, t.scale), t.matrixWorldInverse.getInverse(t.matrixWorld);
                var g = o + f,
                    v = s + f,
                    y = p - m,
                    x = d + (i - m),
                    b = c * s / v * g,
                    M = l * s / v * g;
                t.projectionMatrix.makePerspective(y, x, b, M, g, v)
            }(p, h, u), p
        };
        var S = null;
        var T = new Je;
        T.setAnimationLoop((function(e, n) {
            if (null !== (s = n.getViewerPose(a))) {
                var r = s.views,
                    o = i.renderState.baseLayer;
                t.setFramebuffer(o.framebuffer);
                for (var l = 0; l < r.length; l++) {
                    var h = r[l],
                        u = o.getViewport(h),
                        d = p.cameras[l];
                    d.matrix.fromArray(h.transform.matrix), d.projectionMatrix.fromArray(h.projectionMatrix), d.viewport.set(u.x, u.y, u.width, u.height), 0 === l && p.matrix.copy(d.matrix)
                }
            }
            var f = i.inputSources;
            for (l = 0; l < c.length; l++) {
                var m = c[l],
                    g = f[l],
                    v = null,
                    y = null;
                g && (m.targetRay && null !== (v = n.getPose(g.targetRaySpace, a)) && (m.targetRay.matrix.fromArray(v.transform.matrix), m.targetRay.matrix.decompose(m.targetRay.position, m.targetRay.rotation, m.targetRay.scale)), m.grip && g.gripSpace && null !== (y = n.getPose(g.gripSpace, a)) && (m.grip.matrix.fromArray(y.transform.matrix), m.grip.matrix.decompose(m.grip.position, m.grip.rotation, m.grip.scale))), m.targetRay && (m.targetRay.visible = null !== v), m.grip && (m.grip.visible = null !== y)
            }
            S && S(e, n)
        })), this.setAnimationLoop = function(t) {
            S = t
        }, this.dispose = function() {}
    }

    function Ki(t) {
        var e = void 0 !== (t = t || {}).canvas ? t.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
            n = void 0 !== t.context ? t.context : null,
            i = void 0 !== t.alpha && t.alpha,
            r = void 0 === t.depth || t.depth,
            a = void 0 === t.stencil || t.stencil,
            o = void 0 !== t.antialias && t.antialias,
            l = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
            h = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
            u = void 0 !== t.powerPreference ? t.powerPreference : "default",
            p = void 0 !== t.failIfMajorPerformanceCaveat && t.failIfMajorPerformanceCaveat,
            f = null,
            m = null;
        this.domElement = e, this.debug = {
            checkShaderErrors: !0
        }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.outputEncoding = 3e3, this.physicallyCorrectLights = !1, this.toneMapping = 1, this.toneMappingExposure = 1, this.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
        var g, v, y, b, _, w, M, S, T, E, L, R, P, C, O, D, N, I, z = this,
            U = !1,
            B = null,
            F = 0,
            G = 0,
            H = null,
            V = null,
            k = -1,
            j = {
                geometry: null,
                program: null,
                wireframe: !1
            },
            W = null,
            X = null,
            Y = new d,
            Z = new d,
            J = null,
            Q = e.width,
            K = e.height,
            $ = 1,
            tt = null,
            et = null,
            nt = new d(0, 0, Q, K),
            it = new d(0, 0, Q, K),
            rt = !1,
            at = new Ye,
            ot = new on,
            st = !1,
            ct = !1,
            lt = new A,
            ht = new x;

        function ut() {
            return null === H ? $ : 1
        }
        try {
            var pt = {
                alpha: i,
                depth: r,
                stencil: a,
                antialias: o,
                premultipliedAlpha: l,
                preserveDrawingBuffer: h,
                powerPreference: u,
                failIfMajorPerformanceCaveat: p,
                xrCompatible: !0
            };
            if (e.addEventListener("webglcontextlost", gt, !1), e.addEventListener("webglcontextrestored", vt, !1), null === (g = n || e.getContext("webgl", pt) || e.getContext("experimental-webgl", pt))) throw null !== e.getContext("webgl") ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
            void 0 === g.getShaderPrecisionFormat && (g.getShaderPrecisionFormat = function() {
                return {
                    rangeMin: 1,
                    rangeMax: 1,
                    precision: 1
                }
            })
        } catch (t) {
            throw console.error("THREE.WebGLRenderer: " + t.message), t
        }

        function dt() {
            v = new sn(g), !1 === (y = new an(g, v, t)).isWebGL2 && (v.get("WEBGL_depth_texture"), v.get("OES_texture_float"), v.get("OES_texture_half_float"), v.get("OES_texture_half_float_linear"), v.get("OES_standard_derivatives"), v.get("OES_element_index_uint"), v.get("ANGLE_instanced_arrays")), v.get("OES_texture_float_linear"), I = new Yi(g, v, y), (b = new qi(g, v, y)).scissor(Z.copy(it).multiplyScalar($).floor()), b.viewport(Y.copy(nt).multiplyScalar($).floor()), _ = new hn(g), w = new Oi, M = new Xi(g, v, b, w, y, I, _), S = new Qe(g, y), T = new cn(g, S, _), E = new dn(g, T, S, _), O = new pn(g), L = new Ci(z, v, y), R = new zi, P = new Vi, C = new nn(z, b, E, l), D = new rn(g, v, _, y), N = new ln(g, v, _, y), _.programs = L.programs, z.capabilities = y, z.extensions = v, z.properties = w, z.renderLists = R, z.state = b, z.info = _
        }
        dt();
        var ft = new Qi(z, g);
        this.xr = ft;
        var mt = new Wi(z, E, y.maxTextureSize);

        function gt(t) {
            console.log("THREE.WebGLRenderer: Context Lost."), U = !0
        }

        function vt() {
            console.log("THREE.WebGLRenderer: Context Restored."), U = !1, dt()
        }

        function yt(t) {
            var e = t.target;
            e.removeEventListener("dispose", yt),
                function(t) {
                    xt(t), w.remove(t)
                }(e)
        }

        function xt(t) {
            var e = w.get(t).program;
            t.program = void 0, void 0 !== e && L.releaseProgram(e)
        }
        this.shadowMap = mt, this.getContext = function() {
            return g
        }, this.getContextAttributes = function() {
            return g.getContextAttributes()
        }, this.forceContextLoss = function() {
            var t = v.get("WEBGL_lose_context");
            t && t.loseContext()
        }, this.forceContextRestore = function() {
            var t = v.get("WEBGL_lose_context");
            t && t.restoreContext()
        }, this.getPixelRatio = function() {
            return $
        }, this.setPixelRatio = function(t) {
            void 0 !== t && ($ = t, this.setSize(Q, K, !1))
        }, this.getSize = function(t) {
            return void 0 === t && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"), t = new c), t.set(Q, K)
        }, this.setSize = function(t, n, i) {
            ft.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (Q = t, K = n, e.width = Math.floor(t * $), e.height = Math.floor(n * $), !1 !== i && (e.style.width = t + "px", e.style.height = n + "px"), this.setViewport(0, 0, t, n))
        }, this.getDrawingBufferSize = function(t) {
            return void 0 === t && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"), t = new c), t.set(Q * $, K * $).floor()
        }, this.setDrawingBufferSize = function(t, n, i) {
            Q = t, K = n, $ = i, e.width = Math.floor(t * i), e.height = Math.floor(n * i), this.setViewport(0, 0, t, n)
        }, this.getCurrentViewport = function(t) {
            return void 0 === t && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"), t = new d), t.copy(Y)
        }, this.getViewport = function(t) {
            return t.copy(nt)
        }, this.setViewport = function(t, e, n, i) {
            t.isVector4 ? nt.set(t.x, t.y, t.z, t.w) : nt.set(t, e, n, i), b.viewport(Y.copy(nt).multiplyScalar($).floor())
        }, this.getScissor = function(t) {
            return t.copy(it)
        }, this.setScissor = function(t, e, n, i) {
            t.isVector4 ? it.set(t.x, t.y, t.z, t.w) : it.set(t, e, n, i), b.scissor(Z.copy(it).multiplyScalar($).floor())
        }, this.getScissorTest = function() {
            return rt
        }, this.setScissorTest = function(t) {
            b.setScissorTest(rt = t)
        }, this.setOpaqueSort = function(t) {
            tt = t
        }, this.setTransparentSort = function(t) {
            et = t
        }, this.getClearColor = function() {
            return C.getClearColor()
        }, this.setClearColor = function() {
            C.setClearColor.apply(C, arguments)
        }, this.getClearAlpha = function() {
            return C.getClearAlpha()
        }, this.setClearAlpha = function() {
            C.setClearAlpha.apply(C, arguments)
        }, this.clear = function(t, e, n) {
            var i = 0;
            (void 0 === t || t) && (i |= 16384), (void 0 === e || e) && (i |= 256), (void 0 === n || n) && (i |= 1024), g.clear(i)
        }, this.clearColor = function() {
            this.clear(!0, !1, !1)
        }, this.clearDepth = function() {
            this.clear(!1, !0, !1)
        }, this.clearStencil = function() {
            this.clear(!1, !1, !0)
        }, this.dispose = function() {
            e.removeEventListener("webglcontextlost", gt, !1), e.removeEventListener("webglcontextrestored", vt, !1), R.dispose(), P.dispose(), w.dispose(), E.dispose(), ft.dispose(), wt.stop(), this.forceContextLoss()
        }, this.renderBufferImmediate = function(t, e) {
            b.initAttributes();
            var n = w.get(t);
            t.hasPositions && !n.position && (n.position = g.createBuffer()), t.hasNormals && !n.normal && (n.normal = g.createBuffer()), t.hasUvs && !n.uv && (n.uv = g.createBuffer()), t.hasColors && !n.color && (n.color = g.createBuffer());
            var i = e.getAttributes();
            t.hasPositions && (g.bindBuffer(34962, n.position), g.bufferData(34962, t.positionArray, 35048), b.enableAttribute(i.position), g.vertexAttribPointer(i.position, 3, 5126, !1, 0, 0)), t.hasNormals && (g.bindBuffer(34962, n.normal), g.bufferData(34962, t.normalArray, 35048), b.enableAttribute(i.normal), g.vertexAttribPointer(i.normal, 3, 5126, !1, 0, 0)), t.hasUvs && (g.bindBuffer(34962, n.uv), g.bufferData(34962, t.uvArray, 35048), b.enableAttribute(i.uv), g.vertexAttribPointer(i.uv, 2, 5126, !1, 0, 0)), t.hasColors && (g.bindBuffer(34962, n.color), g.bufferData(34962, t.colorArray, 35048), b.enableAttribute(i.color), g.vertexAttribPointer(i.color, 3, 5126, !1, 0, 0)), b.disableUnusedAttributes(), g.drawArrays(4, 0, t.count), t.count = 0
        };
        var bt = new q;
        this.renderBufferDirect = function(t, e, n, i, r, a) {
            null === e && (e = bt);
            var o = r.isMesh && r.matrixWorld.determinant() < 0,
                s = At(t, e, i, r);
            b.setMaterial(i, o);
            var c = !1;
            j.geometry === n.id && j.program === s.id && j.wireframe === (!0 === i.wireframe) || (j.geometry = n.id, j.program = s.id, j.wireframe = !0 === i.wireframe, c = !0), (i.morphTargets || i.morphNormals) && (O.update(r, n, i, s), c = !0);
            var l = n.index,
                h = n.attributes.position;
            if (null === l) {
                if (void 0 === h || 0 === h.count) return
            } else if (0 === l.count) return;
            var u, p = 1;
            !0 === i.wireframe && (l = T.getWireframeAttribute(n), p = 2);
            var d = D;
            null !== l && (u = S.get(l), (d = N).setIndex(u)), c && (! function(t, e, n, i) {
                if (!1 === y.isWebGL2 && (t.isInstancedMesh || e.isInstancedBufferGeometry) && null === v.get("ANGLE_instanced_arrays")) return;
                b.initAttributes();
                var r = e.attributes,
                    a = i.getAttributes(),
                    o = n.defaultAttributeValues;
                for (var s in a) {
                    var c = a[s];
                    if (c >= 0) {
                        var l = r[s];
                        if (void 0 !== l) {
                            var h = l.normalized,
                                u = l.itemSize;
                            if (void 0 === (w = S.get(l))) continue;
                            var p = w.buffer,
                                d = w.type,
                                f = w.bytesPerElement;
                            if (l.isInterleavedBufferAttribute) {
                                var m = l.data,
                                    x = m.stride,
                                    _ = l.offset;
                                m && m.isInstancedInterleavedBuffer ? (b.enableAttributeAndDivisor(c, m.meshPerAttribute), void 0 === e.maxInstancedCount && (e.maxInstancedCount = m.meshPerAttribute * m.count)) : b.enableAttribute(c), g.bindBuffer(34962, p), g.vertexAttribPointer(c, u, d, h, x * f, _ * f)
                            } else l.isInstancedBufferAttribute ? (b.enableAttributeAndDivisor(c, l.meshPerAttribute), void 0 === e.maxInstancedCount && (e.maxInstancedCount = l.meshPerAttribute * l.count)) : b.enableAttribute(c), g.bindBuffer(34962, p), g.vertexAttribPointer(c, u, d, h, 0, 0)
                        } else if ("instanceMatrix" === s) {
                            var w;
                            if (void 0 === (w = S.get(t.instanceMatrix))) continue;
                            p = w.buffer, d = w.type;
                            b.enableAttributeAndDivisor(c + 0, 1), b.enableAttributeAndDivisor(c + 1, 1), b.enableAttributeAndDivisor(c + 2, 1), b.enableAttributeAndDivisor(c + 3, 1), g.bindBuffer(34962, p), g.vertexAttribPointer(c + 0, 4, d, !1, 64, 0), g.vertexAttribPointer(c + 1, 4, d, !1, 64, 16), g.vertexAttribPointer(c + 2, 4, d, !1, 64, 32), g.vertexAttribPointer(c + 3, 4, d, !1, 64, 48)
                        } else if (void 0 !== o) {
                            var M = o[s];
                            if (void 0 !== M) switch (M.length) {
                                case 2:
                                    g.vertexAttrib2fv(c, M);
                                    break;
                                case 3:
                                    g.vertexAttrib3fv(c, M);
                                    break;
                                case 4:
                                    g.vertexAttrib4fv(c, M);
                                    break;
                                default:
                                    g.vertexAttrib1fv(c, M)
                            }
                        }
                    }
                }
                b.disableUnusedAttributes()
            }(r, n, i, s), null !== l && g.bindBuffer(34963, u.buffer));
            var f = null !== l ? l.count : h.count,
                m = n.drawRange.start * p,
                x = n.drawRange.count * p,
                _ = null !== a ? a.start * p : 0,
                w = null !== a ? a.count * p : 1 / 0,
                M = Math.max(m, _),
                E = Math.min(f, m + x, _ + w) - 1,
                A = Math.max(0, E - M + 1);
            if (0 !== A) {
                if (r.isMesh) !0 === i.wireframe ? (b.setLineWidth(i.wireframeLinewidth * ut()), d.setMode(1)) : d.setMode(4);
                else if (r.isLine) {
                    var L = i.linewidth;
                    void 0 === L && (L = 1), b.setLineWidth(L * ut()), r.isLineSegments ? d.setMode(1) : r.isLineLoop ? d.setMode(2) : d.setMode(3)
                } else r.isPoints ? d.setMode(0) : r.isSprite && d.setMode(4);
                r.isInstancedMesh ? d.renderInstances(n, M, A, r.count) : n.isInstancedBufferGeometry ? d.renderInstances(n, M, A, n.maxInstancedCount) : d.render(M, A)
            }
        }, this.compile = function(t, e) {
            (m = P.get(t, e)).init(), t.traverse((function(t) {
                t.isLight && (m.pushLight(t), t.castShadow && m.pushShadow(t))
            })), m.setupLights(e);
            var n = {};
            t.traverse((function(e) {
                if (e.material)
                    if (Array.isArray(e.material))
                        for (var i = 0; i < e.material.length; i++) e.material[i].uuid in n == !1 && (Et(e.material[i], t, e), n[e.material[i].uuid] = !0);
                    else e.material.uuid in n == !1 && (Et(e.material, t, e), n[e.material.uuid] = !0)
            }))
        };
        var _t = null;
        var wt = new Je;

        function Mt(t, e, n, i) {
            if (!1 !== t.visible) {
                if (t.layers.test(e.layers))
                    if (t.isGroup) n = t.renderOrder;
                    else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
                else if (t.isLight) m.pushLight(t), t.castShadow && m.pushShadow(t);
                else if (t.isSprite) {
                    if (!t.frustumCulled || at.intersectsSprite(t)) {
                        i && ht.setFromMatrixPosition(t.matrixWorld).applyMatrix4(lt);
                        var r = E.update(t);
                        (a = t.material).visible && f.push(t, r, a, n, ht.z, null)
                    }
                } else if (t.isImmediateRenderObject) i && ht.setFromMatrixPosition(t.matrixWorld).applyMatrix4(lt), f.push(t, null, t.material, n, ht.z, null);
                else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== _.render.frame && (t.skeleton.update(), t.skeleton.frame = _.render.frame), !t.frustumCulled || at.intersectsObject(t))) {
                    i && ht.setFromMatrixPosition(t.matrixWorld).applyMatrix4(lt);
                    r = E.update(t);
                    var a = t.material;
                    if (Array.isArray(a))
                        for (var o = r.groups, s = 0, c = o.length; s < c; s++) {
                            var l = o[s],
                                h = a[l.materialIndex];
                            h && h.visible && f.push(t, r, h, n, ht.z, l)
                        } else a.visible && f.push(t, r, a, n, ht.z, null)
                }
                var u = t.children;
                for (s = 0, c = u.length; s < c; s++) Mt(u[s], e, n, i)
            }
        }

        function St(t, e, n, i) {
            for (var r = 0, a = t.length; r < a; r++) {
                var o = t[r],
                    s = o.object,
                    c = o.geometry,
                    l = void 0 === i ? o.material : i,
                    h = o.group;
                if (n.isArrayCamera) {
                    X = n;
                    for (var u = n.cameras, p = 0, d = u.length; p < d; p++) {
                        var f = u[p];
                        s.layers.test(f.layers) && (b.viewport(Y.copy(f.viewport)), m.setupLights(f), Tt(s, e, f, c, l, h))
                    }
                } else X = null, Tt(s, e, n, c, l, h)
            }
        }

        function Tt(t, e, n, i, r, a) {
            if (t.onBeforeRender(z, e, n, i, r, a), m = P.get(e, X || n), t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), t.isImmediateRenderObject) {
                var o = At(n, e, r, t);
                b.setMaterial(r), j.geometry = null, j.program = null, j.wireframe = !1,
                    function(t, e) {
                        t.render((function(t) {
                            z.renderBufferImmediate(t, e)
                        }))
                    }(t, o)
            } else z.renderBufferDirect(n, e, i, r, t, a);
            t.onAfterRender(z, e, n, i, r, a), m = P.get(e, X || n)
        }

        function Et(t, e, n) {
            var i = w.get(t),
                r = m.state.lights,
                a = m.state.shadowsArray,
                o = r.state.version,
                s = L.getParameters(t, r.state, a, e, ot.numPlanes, ot.numIntersection, n),
                c = L.getProgramCacheKey(s),
                l = i.program,
                h = !0;
            if (void 0 === l) t.addEventListener("dispose", yt);
            else if (l.cacheKey !== c) xt(t);
            else if (i.lightsStateVersion !== o) i.lightsStateVersion = o, h = !1;
            else {
                if (void 0 !== s.shaderID) return;
                h = !1
            }
            h && (l = L.acquireProgram(s, c), i.program = l, i.uniforms = s.uniforms, i.environment = t.isMeshStandardMaterial ? e.environment : null, i.outputEncoding = z.outputEncoding, t.program = l);
            var u = l.getAttributes();
            if (t.morphTargets) {
                t.numSupportedMorphTargets = 0;
                for (var p = 0; p < z.maxMorphTargets; p++) u["morphTarget" + p] >= 0 && t.numSupportedMorphTargets++
            }
            if (t.morphNormals) {
                t.numSupportedMorphNormals = 0;
                for (p = 0; p < z.maxMorphNormals; p++) u["morphNormal" + p] >= 0 && t.numSupportedMorphNormals++
            }
            var d = i.uniforms;
            (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (i.numClippingPlanes = ot.numPlanes, i.numIntersection = ot.numIntersection, d.clippingPlanes = ot.uniform), i.fog = e.fog, i.needsLights = function(t) {
                return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || t.isShaderMaterial && !0 === t.lights
            }(t), i.lightsStateVersion = o, i.needsLights && (d.ambientLightColor.value = r.state.ambient, d.lightProbe.value = r.state.probe, d.directionalLights.value = r.state.directional, d.directionalLightShadows.value = r.state.directionalShadow, d.spotLights.value = r.state.spot, d.spotLightShadows.value = r.state.spotShadow, d.rectAreaLights.value = r.state.rectArea, d.pointLights.value = r.state.point, d.pointLightShadows.value = r.state.pointShadow, d.hemisphereLights.value = r.state.hemi, d.directionalShadowMap.value = r.state.directionalShadowMap, d.directionalShadowMatrix.value = r.state.directionalShadowMatrix, d.spotShadowMap.value = r.state.spotShadowMap, d.spotShadowMatrix.value = r.state.spotShadowMatrix, d.pointShadowMap.value = r.state.pointShadowMap, d.pointShadowMatrix.value = r.state.pointShadowMatrix);
            var f = i.program.getUniforms(),
                g = ui.seqWithValue(f.seq, d);
            i.uniformsList = g
        }

        function At(t, e, n, i) {
            M.resetTextureUnits();
            var r = e.fog,
                a = n.isMeshStandardMaterial ? e.environment : null,
                o = w.get(n),
                c = m.state.lights;
            if (st && (ct || t !== W)) {
                var l = t === W && n.id === k;
                ot.setState(n.clippingPlanes, n.clipIntersection, n.clipShadows, t, o, l)
            }
            n.version === o.__version ? void 0 === o.program || n.fog && o.fog !== r || o.environment !== a || o.needsLights && o.lightsStateVersion !== c.state.version ? Et(n, e, i) : void 0 === o.numClippingPlanes || o.numClippingPlanes === ot.numPlanes && o.numIntersection === ot.numIntersection ? o.outputEncoding !== z.outputEncoding && Et(n, e, i) : Et(n, e, i) : (Et(n, e, i), o.__version = n.version);
            var h, u, p = !1,
                d = !1,
                f = !1,
                v = o.program,
                x = v.getUniforms(),
                _ = o.uniforms;
            if (b.useProgram(v.program) && (p = !0, d = !0, f = !0), n.id !== k && (k = n.id, d = !0), p || W !== t) {
                if (x.setValue(g, "projectionMatrix", t.projectionMatrix), y.logarithmicDepthBuffer && x.setValue(g, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), W !== t && (W = t, d = !0, f = !0), n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshStandardMaterial || n.envMap) {
                    var S = x.map.cameraPosition;
                    void 0 !== S && S.setValue(g, ht.setFromMatrixPosition(t.matrixWorld))
                }(n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial) && x.setValue(g, "isOrthographic", !0 === t.isOrthographicCamera), (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.skinning) && x.setValue(g, "viewMatrix", t.matrixWorldInverse)
            }
            if (n.skinning) {
                x.setOptional(g, i, "bindMatrix"), x.setOptional(g, i, "bindMatrixInverse");
                var T = i.skeleton;
                if (T) {
                    var E = T.bones;
                    if (y.floatVertexTextures) {
                        if (void 0 === T.boneTexture) {
                            var A = Math.sqrt(4 * E.length);
                            A = s.ceilPowerOfTwo(A), A = Math.max(A, 4);
                            var L = new Float32Array(A * A * 4);
                            L.set(T.boneMatrices);
                            var R = new We(L, A, A, 1023, 1015);
                            T.boneMatrices = L, T.boneTexture = R, T.boneTextureSize = A
                        }
                        x.setValue(g, "boneTexture", T.boneTexture, M), x.setValue(g, "boneTextureSize", T.boneTextureSize)
                    } else x.setOptional(g, T, "boneMatrices")
                }
            }
            return (d || o.receiveShadow !== i.receiveShadow) && (o.receiveShadow = i.receiveShadow, x.setValue(g, "receiveShadow", i.receiveShadow)), d && (x.setValue(g, "toneMappingExposure", z.toneMappingExposure), x.setValue(g, "toneMappingWhitePoint", z.toneMappingWhitePoint), o.needsLights && (u = f, (h = _).ambientLightColor.needsUpdate = u, h.lightProbe.needsUpdate = u, h.directionalLights.needsUpdate = u, h.directionalLightShadows.needsUpdate = u, h.pointLights.needsUpdate = u, h.pointLightShadows.needsUpdate = u, h.spotLights.needsUpdate = u, h.spotLightShadows.needsUpdate = u, h.rectAreaLights.needsUpdate = u, h.hemisphereLights.needsUpdate = u), r && n.fog && function(t, e) {
                t.fogColor.value.copy(e.color), e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density)
            }(_, r), n.isMeshBasicMaterial ? Lt(_, n) : n.isMeshLambertMaterial ? (Lt(_, n), function(t, e) {
                e.emissiveMap && (t.emissiveMap.value = e.emissiveMap)
            }(_, n)) : n.isMeshToonMaterial ? (Lt(_, n), function(t, e) {
                t.specular.value.copy(e.specular), t.shininess.value = Math.max(e.shininess, 1e-4), e.gradientMap && (t.gradientMap.value = e.gradientMap);
                e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
                e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
                e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
                e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
            }(_, n)) : n.isMeshPhongMaterial ? (Lt(_, n), function(t, e) {
                t.specular.value.copy(e.specular), t.shininess.value = Math.max(e.shininess, 1e-4), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
                e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
                e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
                e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
            }(_, n)) : n.isMeshStandardMaterial ? (Lt(_, n, a), n.isMeshPhysicalMaterial ? function(t, e, n) {
                Rt(t, e, n), t.reflectivity.value = e.reflectivity, t.clearcoat.value = e.clearcoat, t.clearcoatRoughness.value = e.clearcoatRoughness, e.sheen && t.sheen.value.copy(e.sheen);
                e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap);
                e.clearcoatRoughnessMap && (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap);
                e.clearcoatNormalMap && (t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale), t.clearcoatNormalMap.value = e.clearcoatNormalMap, 1 === e.side && t.clearcoatNormalScale.value.negate());
                t.transparency.value = e.transparency
            }(_, n, a) : Rt(_, n, a)) : n.isMeshMatcapMaterial ? (Lt(_, n), function(t, e) {
                e.matcap && (t.matcap.value = e.matcap);
                e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
                e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
                e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
            }(_, n)) : n.isMeshDepthMaterial ? (Lt(_, n), function(t, e) {
                e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
            }(_, n)) : n.isMeshDistanceMaterial ? (Lt(_, n), function(t, e) {
                e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
                t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance
            }(_, n)) : n.isMeshNormalMaterial ? (Lt(_, n), function(t, e) {
                e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
                e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
                e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
            }(_, n)) : n.isLineBasicMaterial ? (function(t, e) {
                t.diffuse.value.copy(e.color), t.opacity.value = e.opacity
            }(_, n), n.isLineDashedMaterial && function(t, e) {
                t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale
            }(_, n)) : n.isPointsMaterial ? function(t, e) {
                t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.size.value = e.size * $, t.scale.value = .5 * K, e.map && (t.map.value = e.map);
                e.alphaMap && (t.alphaMap.value = e.alphaMap);
                var n;
                e.map ? n = e.map : e.alphaMap && (n = e.alphaMap);
                void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(), t.uvTransform.value.copy(n.matrix))
            }(_, n) : n.isSpriteMaterial ? function(t, e) {
                t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.rotation.value = e.rotation, e.map && (t.map.value = e.map);
                e.alphaMap && (t.alphaMap.value = e.alphaMap);
                var n;
                e.map ? n = e.map : e.alphaMap && (n = e.alphaMap);
                void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(), t.uvTransform.value.copy(n.matrix))
            }(_, n) : n.isShadowMaterial && (_.color.value.copy(n.color), _.opacity.value = n.opacity), void 0 !== _.ltc_1 && (_.ltc_1.value = Ze.LTC_1), void 0 !== _.ltc_2 && (_.ltc_2.value = Ze.LTC_2), ui.upload(g, o.uniformsList, _, M), n.isShaderMaterial && (n.uniformsNeedUpdate = !1)), n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (ui.upload(g, o.uniformsList, _, M), n.uniformsNeedUpdate = !1), n.isSpriteMaterial && x.setValue(g, "center", i.center), x.setValue(g, "modelViewMatrix", i.modelViewMatrix), x.setValue(g, "normalMatrix", i.normalMatrix), x.setValue(g, "modelMatrix", i.matrixWorld), v
        }

        function Lt(t, e, n) {
            t.opacity.value = e.opacity, e.color && t.diffuse.value.copy(e.color), e.emissive && t.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity), e.map && (t.map.value = e.map), e.alphaMap && (t.alphaMap.value = e.alphaMap), e.specularMap && (t.specularMap.value = e.specularMap);
            var i, r, a = e.envMap || n;
            a && (t.envMap.value = a, t.flipEnvMap.value = a.isCubeTexture ? -1 : 1, t.reflectivity.value = e.reflectivity, t.refractionRatio.value = e.refractionRatio, t.maxMipLevel.value = w.get(a).__maxMipLevel), e.lightMap && (t.lightMap.value = e.lightMap, t.lightMapIntensity.value = e.lightMapIntensity), e.aoMap && (t.aoMap.value = e.aoMap, t.aoMapIntensity.value = e.aoMapIntensity), e.map ? i = e.map : e.specularMap ? i = e.specularMap : e.displacementMap ? i = e.displacementMap : e.normalMap ? i = e.normalMap : e.bumpMap ? i = e.bumpMap : e.roughnessMap ? i = e.roughnessMap : e.metalnessMap ? i = e.metalnessMap : e.alphaMap ? i = e.alphaMap : e.emissiveMap && (i = e.emissiveMap), void 0 !== i && (i.isWebGLRenderTarget && (i = i.texture), !0 === i.matrixAutoUpdate && i.updateMatrix(), t.uvTransform.value.copy(i.matrix)), e.aoMap ? r = e.aoMap : e.lightMap && (r = e.lightMap), void 0 !== r && (r.isWebGLRenderTarget && (r = r.texture), !0 === r.matrixAutoUpdate && r.updateMatrix(), t.uv2Transform.value.copy(r.matrix))
        }

        function Rt(t, e, n) {
            t.roughness.value = e.roughness, t.metalness.value = e.metalness, e.roughnessMap && (t.roughnessMap.value = e.roughnessMap), e.metalnessMap && (t.metalnessMap.value = e.metalnessMap), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias), (e.envMap || n) && (t.envMapIntensity.value = e.envMapIntensity)
        }
        wt.setAnimationLoop((function(t) {
            ft.isPresenting || _t && _t(t)
        })), "undefined" != typeof window && wt.setContext(window), this.setAnimationLoop = function(t) {
            _t = t, ft.setAnimationLoop(t), wt.start()
        }, this.render = function(t, e) {
            var n, i;
            if (void 0 !== arguments[2] && (console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."), n = arguments[2]), void 0 !== arguments[3] && (console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."), i = arguments[3]), e && e.isCamera) {
                if (!U) {
                    j.geometry = null, j.program = null, j.wireframe = !1, k = -1, W = null, !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), ft.enabled && ft.isPresenting && (e = ft.getCamera(e)), (m = P.get(t, e)).init(), t.onBeforeRender(z, t, e, n || H), lt.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), at.setFromProjectionMatrix(lt), ct = this.localClippingEnabled, st = ot.init(this.clippingPlanes, ct, e), (f = R.get(t, e)).init(), Mt(t, e, 0, z.sortObjects), f.finish(), !0 === z.sortObjects && f.sort(tt, et), st && ot.beginShadows();
                    var r = m.state.shadowsArray;
                    mt.render(r, t, e), m.setupLights(e), st && ot.endShadows(), this.info.autoReset && this.info.reset(), void 0 !== n && this.setRenderTarget(n), C.render(f, t, e, i);
                    var a = f.opaque,
                        o = f.transparent;
                    if (t.overrideMaterial) {
                        var s = t.overrideMaterial;
                        a.length && St(a, t, e, s), o.length && St(o, t, e, s)
                    } else a.length && St(a, t, e), o.length && St(o, t, e);
                    t.onAfterRender(z, t, e), null !== H && (M.updateRenderTargetMipmap(H), M.updateMultisampleRenderTarget(H)), b.buffers.depth.setTest(!0), b.buffers.depth.setMask(!0), b.buffers.color.setMask(!0), b.setPolygonOffset(!1), f = null, m = null
                }
            } else console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")
        }, this.setFramebuffer = function(t) {
            B !== t && null === H && g.bindFramebuffer(36160, t), B = t
        }, this.getActiveCubeFace = function() {
            return F
        }, this.getActiveMipmapLevel = function() {
            return G
        }, this.getRenderTarget = function() {
            return H
        }, this.setRenderTarget = function(t, e, n) {
            H = t, F = e, G = n, t && void 0 === w.get(t).__webglFramebuffer && M.setupRenderTarget(t);
            var i = B,
                r = !1;
            if (t) {
                var a = w.get(t).__webglFramebuffer;
                t.isWebGLCubeRenderTarget ? (i = a[e || 0], r = !0) : i = t.isWebGLMultisampleRenderTarget ? w.get(t).__webglMultisampledFramebuffer : a, Y.copy(t.viewport), Z.copy(t.scissor), J = t.scissorTest
            } else Y.copy(nt).multiplyScalar($).floor(), Z.copy(it).multiplyScalar($).floor(), J = rt;
            if (V !== i && (g.bindFramebuffer(36160, i), V = i), b.viewport(Y), b.scissor(Z), b.setScissorTest(J), r) {
                var o = w.get(t.texture);
                g.framebufferTexture2D(36160, 36064, 34069 + (e || 0), o.__webglTexture, n || 0)
            }
        }, this.readRenderTargetPixels = function(t, e, n, i, r, a, o) {
            if (t && t.isWebGLRenderTarget) {
                var s = w.get(t).__webglFramebuffer;
                if (t.isWebGLCubeRenderTarget && void 0 !== o && (s = s[o]), s) {
                    var c = !1;
                    s !== V && (g.bindFramebuffer(36160, s), c = !0);
                    try {
                        var l = t.texture,
                            h = l.format,
                            u = l.type;
                        if (1023 !== h && I.convert(h) !== g.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                        if (!(1009 === u || I.convert(u) === g.getParameter(35738) || 1015 === u && (y.isWebGL2 || v.get("OES_texture_float") || v.get("WEBGL_color_buffer_float")) || 1016 === u && (y.isWebGL2 ? v.get("EXT_color_buffer_float") : v.get("EXT_color_buffer_half_float")))) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                        36053 === g.checkFramebufferStatus(36160) ? e >= 0 && e <= t.width - i && n >= 0 && n <= t.height - r && g.readPixels(e, n, i, r, I.convert(h), I.convert(u), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
                    } finally {
                        c && g.bindFramebuffer(36160, V)
                    }
                }
            } else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")
        }, this.copyFramebufferToTexture = function(t, e, n) {
            void 0 === n && (n = 0);
            var i = Math.pow(2, -n),
                r = Math.floor(e.image.width * i),
                a = Math.floor(e.image.height * i),
                o = I.convert(e.format);
            M.setTexture2D(e, 0), g.copyTexImage2D(3553, n, o, t.x, t.y, r, a, 0), b.unbindTexture()
        }, this.copyTextureToTexture = function(t, e, n, i) {
            var r = e.image.width,
                a = e.image.height,
                o = I.convert(n.format),
                s = I.convert(n.type);
            M.setTexture2D(n, 0), e.isDataTexture ? g.texSubImage2D(3553, i || 0, t.x, t.y, r, a, o, s, e.image.data) : g.texSubImage2D(3553, i || 0, t.x, t.y, o, s, e.image), b.unbindTexture()
        }, this.initTexture = function(t) {
            M.setTexture2D(t, 0), b.unbindTexture()
        }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
            detail: this
        }))
    }

    function $i(t, e) {
        this.name = "", this.color = new zt(t), this.density = void 0 !== e ? e : 25e-5
    }

    function tr(t, e, n) {
        this.name = "", this.color = new zt(t), this.near = void 0 !== e ? e : 1, this.far = void 0 !== n ? n : 1e3
    }

    function er(t, e) {
        this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.usage = 35044, this.updateRange = {
            offset: 0,
            count: -1
        }, this.version = 0
    }
    Zi.prototype = Object.assign(Object.create(Ve.prototype), {
        constructor: Zi,
        isArrayCamera: !0
    }), Ji.prototype = Object.assign(Object.create(W.prototype), {
        constructor: Ji,
        isGroup: !0
    }), Object.assign(Qi.prototype, i.prototype), Object.assign($i.prototype, {
        isFogExp2: !0,
        clone: function() {
            return new $i(this.color, this.density)
        },
        toJSON: function() {
            return {
                type: "FogExp2",
                color: this.color.getHex(),
                density: this.density
            }
        }
    }), Object.assign(tr.prototype, {
        isFog: !0,
        clone: function() {
            return new tr(this.color, this.near, this.far)
        },
        toJSON: function() {
            return {
                type: "Fog",
                color: this.color.getHex(),
                near: this.near,
                far: this.far
            }
        }
    }), Object.defineProperty(er.prototype, "needsUpdate", {
        set: function(t) {
            !0 === t && this.version++
        }
    }), Object.assign(er.prototype, {
        isInterleavedBuffer: !0,
        onUploadCallback: function() {},
        setUsage: function(t) {
            return this.usage = t, this
        },
        copy: function(t) {
            return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.usage = t.usage, this
        },
        copyAt: function(t, e, n) {
            t *= this.stride, n *= e.stride;
            for (var i = 0, r = this.stride; i < r; i++) this.array[t + i] = e.array[n + i];
            return this
        },
        set: function(t, e) {
            return void 0 === e && (e = 0), this.array.set(t, e), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        onUpload: function(t) {
            return this.onUploadCallback = t, this
        }
    });
    var nr, ir = new x;

    function rr(t, e, n, i) {
        this.data = t, this.itemSize = e, this.offset = n, this.normalized = !0 === i
    }

    function ar(t) {
        Vt.call(this), this.type = "SpriteMaterial", this.color = new zt(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.setValues(t)
    }
    Object.defineProperties(rr.prototype, {
        count: {
            get: function() {
                return this.data.count
            }
        },
        array: {
            get: function() {
                return this.data.array
            }
        }
    }), Object.assign(rr.prototype, {
        isInterleavedBufferAttribute: !0,
        applyMatrix4: function(t) {
            for (var e = 0, n = this.data.count; e < n; e++) ir.x = this.getX(e), ir.y = this.getY(e), ir.z = this.getZ(e), ir.applyMatrix4(t), this.setXYZ(e, ir.x, ir.y, ir.z);
            return this
        },
        setX: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset] = e, this
        },
        setY: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 1] = e, this
        },
        setZ: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 2] = e, this
        },
        setW: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 3] = e, this
        },
        getX: function(t) {
            return this.data.array[t * this.data.stride + this.offset]
        },
        getY: function(t) {
            return this.data.array[t * this.data.stride + this.offset + 1]
        },
        getZ: function(t) {
            return this.data.array[t * this.data.stride + this.offset + 2]
        },
        getW: function(t) {
            return this.data.array[t * this.data.stride + this.offset + 3]
        },
        setXY: function(t, e, n) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this
        },
        setXYZ: function(t, e, n, i) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this
        },
        setXYZW: function(t, e, n, i, r) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this.data.array[t + 3] = r, this
        }
    }), ar.prototype = Object.create(Vt.prototype), ar.prototype.constructor = ar, ar.prototype.isSpriteMaterial = !0, ar.prototype.copy = function(t) {
        return Vt.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this
    };
    var or = new x,
        sr = new x,
        cr = new x,
        lr = new c,
        hr = new c,
        ur = new A,
        pr = new x,
        dr = new x,
        fr = new x,
        mr = new c,
        gr = new c,
        vr = new c;

    function yr(t) {
        if (W.call(this), this.type = "Sprite", void 0 === nr) {
            nr = new he;
            var e = new er(new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]), 5);
            nr.setIndex([0, 1, 2, 0, 2, 3]), nr.setAttribute("position", new rr(e, 3, 0, !1)), nr.setAttribute("uv", new rr(e, 2, 3, !1))
        }
        this.geometry = nr, this.material = void 0 !== t ? t : new ar, this.center = new c(.5, .5)
    }

    function xr(t, e, n, i, r, a) {
        lr.subVectors(t, n).addScalar(.5).multiply(i), void 0 !== r ? (hr.x = a * lr.x - r * lr.y, hr.y = r * lr.x + a * lr.y) : hr.copy(lr), t.copy(e), t.x += hr.x, t.y += hr.y, t.applyMatrix4(ur)
    }
    yr.prototype = Object.assign(Object.create(W.prototype), {
        constructor: yr,
        isSprite: !0,
        raycast: function(t, e) {
            null === t.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), sr.setFromMatrixScale(this.matrixWorld), ur.copy(t.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld), cr.setFromMatrixPosition(this.modelViewMatrix), t.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && sr.multiplyScalar(-cr.z);
            var n, i, r = this.material.rotation;
            0 !== r && (i = Math.cos(r), n = Math.sin(r));
            var a = this.center;
            xr(pr.set(-.5, -.5, 0), cr, a, sr, n, i), xr(dr.set(.5, -.5, 0), cr, a, sr, n, i), xr(fr.set(.5, .5, 0), cr, a, sr, n, i), mr.set(0, 0), gr.set(1, 0), vr.set(1, 1);
            var o = t.ray.intersectTriangle(pr, dr, fr, !1, or);
            if (null !== o || (xr(dr.set(-.5, .5, 0), cr, a, sr, n, i), gr.set(0, 1), null !== (o = t.ray.intersectTriangle(pr, fr, dr, !1, or)))) {
                var s = t.ray.origin.distanceTo(or);
                s < t.near || s > t.far || e.push({
                    distance: s,
                    point: or.clone(),
                    uv: Ot.getUV(or, pr, dr, fr, mr, gr, vr, new c),
                    face: null,
                    object: this
                })
            }
        },
        clone: function() {
            return new this.constructor(this.material).copy(this)
        },
        copy: function(t) {
            return W.prototype.copy.call(this, t), void 0 !== t.center && this.center.copy(t.center), this
        }
    });
    var br = new x,
        _r = new x;

    function wr() {
        W.call(this), this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, {
            levels: {
                enumerable: !0,
                value: []
            }
        }), this.autoUpdate = !0
    }

    function Mr(t, e) {
        t && t.isGeometry && console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."), Le.call(this, t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new A, this.bindMatrixInverse = new A
    }
    wr.prototype = Object.assign(Object.create(W.prototype), {
        constructor: wr,
        isLOD: !0,
        copy: function(t) {
            W.prototype.copy.call(this, t, !1);
            for (var e = t.levels, n = 0, i = e.length; n < i; n++) {
                var r = e[n];
                this.addLevel(r.object.clone(), r.distance)
            }
            return this.autoUpdate = t.autoUpdate, this
        },
        addLevel: function(t, e) {
            void 0 === e && (e = 0), e = Math.abs(e);
            for (var n = this.levels, i = 0; i < n.length && !(e < n[i].distance); i++);
            return n.splice(i, 0, {
                distance: e,
                object: t
            }), this.add(t), this
        },
        getCurrentLevel: function() {
            return this._currentLevel
        },
        getObjectForDistance: function(t) {
            var e = this.levels;
            if (e.length > 0) {
                for (var n = 1, i = e.length; n < i && !(t < e[n].distance); n++);
                return e[n - 1].object
            }
            return null
        },
        raycast: function(t, e) {
            if (this.levels.length > 0) {
                br.setFromMatrixPosition(this.matrixWorld);
                var n = t.ray.origin.distanceTo(br);
                this.getObjectForDistance(n).raycast(t, e)
            }
        },
        update: function(t) {
            var e = this.levels;
            if (e.length > 1) {
                br.setFromMatrixPosition(t.matrixWorld), _r.setFromMatrixPosition(this.matrixWorld);
                var n = br.distanceTo(_r) / t.zoom;
                e[0].object.visible = !0;
                for (var i = 1, r = e.length; i < r && n >= e[i].distance; i++) e[i - 1].object.visible = !1, e[i].object.visible = !0;
                for (this._currentLevel = i - 1; i < r; i++) e[i].object.visible = !1
            }
        },
        toJSON: function(t) {
            var e = W.prototype.toJSON.call(this, t);
            !1 === this.autoUpdate && (e.object.autoUpdate = !1), e.object.levels = [];
            for (var n = this.levels, i = 0, r = n.length; i < r; i++) {
                var a = n[i];
                e.object.levels.push({
                    object: a.object.uuid,
                    distance: a.distance
                })
            }
            return e
        }
    }), Mr.prototype = Object.assign(Object.create(Le.prototype), {
        constructor: Mr,
        isSkinnedMesh: !0,
        bind: function(t, e) {
            this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.getInverse(e)
        },
        pose: function() {
            this.skeleton.pose()
        },
        normalizeSkinWeights: function() {
            for (var t = new d, e = this.geometry.attributes.skinWeight, n = 0, i = e.count; n < i; n++) {
                t.x = e.getX(n), t.y = e.getY(n), t.z = e.getZ(n), t.w = e.getW(n);
                var r = 1 / t.manhattanLength();
                r !== 1 / 0 ? t.multiplyScalar(r) : t.set(1, 0, 0, 0), e.setXYZW(n, t.x, t.y, t.z, t.w)
            }
        },
        updateMatrixWorld: function(t) {
            Le.prototype.updateMatrixWorld.call(this, t), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
        },
        clone: function() {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    });
    var Sr = new A,
        Tr = new A;

    function Er(t, e) {
        if (t = t || [], this.bones = t.slice(0), this.boneMatrices = new Float32Array(16 * this.bones.length), this.frame = -1, void 0 === e) this.calculateInverses();
        else if (this.bones.length === e.length) this.boneInverses = e.slice(0);
        else {
            console.warn("THREE.Skeleton boneInverses is the wrong length."), this.boneInverses = [];
            for (var n = 0, i = this.bones.length; n < i; n++) this.boneInverses.push(new A)
        }
    }

    function Ar() {
        W.call(this), this.type = "Bone"
    }
    Object.assign(Er.prototype, {
        calculateInverses: function() {
            this.boneInverses = [];
            for (var t = 0, e = this.bones.length; t < e; t++) {
                var n = new A;
                this.bones[t] && n.getInverse(this.bones[t].matrixWorld), this.boneInverses.push(n)
            }
        },
        pose: function() {
            var t, e, n;
            for (e = 0, n = this.bones.length; e < n; e++)(t = this.bones[e]) && t.matrixWorld.getInverse(this.boneInverses[e]);
            for (e = 0, n = this.bones.length; e < n; e++)(t = this.bones[e]) && (t.parent && t.parent.isBone ? (t.matrix.getInverse(t.parent.matrixWorld), t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld), t.matrix.decompose(t.position, t.quaternion, t.scale))
        },
        update: function() {
            for (var t = this.bones, e = this.boneInverses, n = this.boneMatrices, i = this.boneTexture, r = 0, a = t.length; r < a; r++) {
                var o = t[r] ? t[r].matrixWorld : Tr;
                Sr.multiplyMatrices(o, e[r]), Sr.toArray(n, 16 * r)
            }
            void 0 !== i && (i.needsUpdate = !0)
        },
        clone: function() {
            return new Er(this.bones, this.boneInverses)
        },
        getBoneByName: function(t) {
            for (var e = 0, n = this.bones.length; e < n; e++) {
                var i = this.bones[e];
                if (i.name === t) return i
            }
        },
        dispose: function() {
            this.boneTexture && (this.boneTexture.dispose(), this.boneTexture = void 0)
        }
    }), Ar.prototype = Object.assign(Object.create(W.prototype), {
        constructor: Ar,
        isBone: !0
    });
    var Lr = new A,
        Rr = new A,
        Pr = [],
        Cr = new Le;

    function Or(t, e, n) {
        Le.call(this, t, e), this.instanceMatrix = new Wt(new Float32Array(16 * n), 16), this.count = n, this.frustumCulled = !1
    }

    function Dr(t) {
        Vt.call(this), this.type = "LineBasicMaterial", this.color = new zt(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.setValues(t)
    }
    Or.prototype = Object.assign(Object.create(Le.prototype), {
        constructor: Or,
        isInstancedMesh: !0,
        getMatrixAt: function(t, e) {
            e.fromArray(this.instanceMatrix.array, 16 * t)
        },
        raycast: function(t, e) {
            var n = this.matrixWorld,
                i = this.count;
            if (Cr.geometry = this.geometry, Cr.material = this.material, void 0 !== Cr.material)
                for (var r = 0; r < i; r++) this.getMatrixAt(r, Lr), Rr.multiplyMatrices(n, Lr), Cr.matrixWorld = Rr, Cr.raycast(t, Pr), Pr.length > 0 && (Pr[0].instanceId = r, Pr[0].object = this, e.push(Pr[0]), Pr.length = 0)
        },
        setMatrixAt: function(t, e) {
            e.toArray(this.instanceMatrix.array, 16 * t)
        },
        updateMorphTargets: function() {}
    }), Dr.prototype = Object.create(Vt.prototype), Dr.prototype.constructor = Dr, Dr.prototype.isLineBasicMaterial = !0, Dr.prototype.copy = function(t) {
        return Vt.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this
    };
    var Nr = new x,
        Ir = new x,
        zr = new A,
        Ur = new vt,
        Br = new lt;

    function Fr(t, e, n) {
        1 === n && console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."), W.call(this), this.type = "Line", this.geometry = void 0 !== t ? t : new he, this.material = void 0 !== e ? e : new Dr
    }
    Fr.prototype = Object.assign(Object.create(W.prototype), {
        constructor: Fr,
        isLine: !0,
        computeLineDistances: function() {
            var t = this.geometry;
            if (t.isBufferGeometry)
                if (null === t.index) {
                    for (var e = t.attributes.position, n = [0], i = 1, r = e.count; i < r; i++) Nr.fromBufferAttribute(e, i - 1), Ir.fromBufferAttribute(e, i), n[i] = n[i - 1], n[i] += Nr.distanceTo(Ir);
                    t.setAttribute("lineDistance", new $t(n, 1))
                } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            else if (t.isGeometry) {
                var a = t.vertices;
                (n = t.lineDistances)[0] = 0;
                for (i = 1, r = a.length; i < r; i++) n[i] = n[i - 1], n[i] += a[i - 1].distanceTo(a[i])
            }
            return this
        },
        raycast: function(t, e) {
            var n = this.geometry,
                i = this.matrixWorld,
                r = t.params.Line.threshold;
            if (null === n.boundingSphere && n.computeBoundingSphere(), Br.copy(n.boundingSphere), Br.applyMatrix4(i), Br.radius += r, !1 !== t.ray.intersectsSphere(Br)) {
                zr.getInverse(i), Ur.copy(t.ray).applyMatrix4(zr);
                var a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                    o = a * a,
                    s = new x,
                    c = new x,
                    l = new x,
                    h = new x,
                    u = this && this.isLineSegments ? 2 : 1;
                if (n.isBufferGeometry) {
                    var p = n.index,
                        d = n.attributes.position.array;
                    if (null !== p)
                        for (var f = p.array, m = 0, g = f.length - 1; m < g; m += u) {
                            var v = f[m],
                                y = f[m + 1];
                            if (s.fromArray(d, 3 * v), c.fromArray(d, 3 * y), !(Ur.distanceSqToSegment(s, c, h, l) > o)) h.applyMatrix4(this.matrixWorld), (w = t.ray.origin.distanceTo(h)) < t.near || w > t.far || e.push({
                                distance: w,
                                point: l.clone().applyMatrix4(this.matrixWorld),
                                index: m,
                                face: null,
                                faceIndex: null,
                                object: this
                            })
                        } else
                            for (m = 0, g = d.length / 3 - 1; m < g; m += u) {
                                if (s.fromArray(d, 3 * m), c.fromArray(d, 3 * m + 3), !(Ur.distanceSqToSegment(s, c, h, l) > o)) h.applyMatrix4(this.matrixWorld), (w = t.ray.origin.distanceTo(h)) < t.near || w > t.far || e.push({
                                    distance: w,
                                    point: l.clone().applyMatrix4(this.matrixWorld),
                                    index: m,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                })
                            }
                } else if (n.isGeometry) {
                    var b = n.vertices,
                        _ = b.length;
                    for (m = 0; m < _ - 1; m += u) {
                        var w;
                        if (!(Ur.distanceSqToSegment(b[m], b[m + 1], h, l) > o)) h.applyMatrix4(this.matrixWorld), (w = t.ray.origin.distanceTo(h)) < t.near || w > t.far || e.push({
                            distance: w,
                            point: l.clone().applyMatrix4(this.matrixWorld),
                            index: m,
                            face: null,
                            faceIndex: null,
                            object: this
                        })
                    }
                }
            }
        },
        clone: function() {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    });
    var Gr = new x,
        Hr = new x;

    function Vr(t, e) {
        Fr.call(this, t, e), this.type = "LineSegments"
    }

    function kr(t, e) {
        Fr.call(this, t, e), this.type = "LineLoop"
    }

    function jr(t) {
        Vt.call(this), this.type = "PointsMaterial", this.color = new zt(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.setValues(t)
    }
    Vr.prototype = Object.assign(Object.create(Fr.prototype), {
        constructor: Vr,
        isLineSegments: !0,
        computeLineDistances: function() {
            var t = this.geometry;
            if (t.isBufferGeometry)
                if (null === t.index) {
                    for (var e = t.attributes.position, n = [], i = 0, r = e.count; i < r; i += 2) Gr.fromBufferAttribute(e, i), Hr.fromBufferAttribute(e, i + 1), n[i] = 0 === i ? 0 : n[i - 1], n[i + 1] = n[i] + Gr.distanceTo(Hr);
                    t.setAttribute("lineDistance", new $t(n, 1))
                } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            else if (t.isGeometry) {
                var a = t.vertices;
                for (n = t.lineDistances, i = 0, r = a.length; i < r; i += 2) Gr.copy(a[i]), Hr.copy(a[i + 1]), n[i] = 0 === i ? 0 : n[i - 1], n[i + 1] = n[i] + Gr.distanceTo(Hr)
            }
            return this
        }
    }), kr.prototype = Object.assign(Object.create(Fr.prototype), {
        constructor: kr,
        isLineLoop: !0
    }), jr.prototype = Object.create(Vt.prototype), jr.prototype.constructor = jr, jr.prototype.isPointsMaterial = !0, jr.prototype.copy = function(t) {
        return Vt.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.morphTargets = t.morphTargets, this
    };
    var Wr = new A,
        qr = new vt,
        Xr = new lt,
        Yr = new x;

    function Zr(t, e) {
        W.call(this), this.type = "Points", this.geometry = void 0 !== t ? t : new he, this.material = void 0 !== e ? e : new jr, this.updateMorphTargets()
    }

    function Jr(t, e, n, i, r, a, o) {
        var s = qr.distanceSqToPoint(t);
        if (s < n) {
            var c = new x;
            qr.closestPointToPoint(t, c), c.applyMatrix4(i);
            var l = r.ray.origin.distanceTo(c);
            if (l < r.near || l > r.far) return;
            a.push({
                distance: l,
                distanceToRay: Math.sqrt(s),
                point: c,
                index: e,
                face: null,
                object: o
            })
        }
    }

    function Qr(t, e, n, i, r, a, o, s, c) {
        p.call(this, t, e, n, i, r, a, o, s, c), this.format = void 0 !== o ? o : 1022, this.minFilter = void 0 !== a ? a : 1006, this.magFilter = void 0 !== r ? r : 1006, this.generateMipmaps = !1
    }

    function Kr(t, e, n, i, r, a, o, s, c, l, h, u) {
        p.call(this, null, a, o, s, c, l, i, r, h, u), this.image = {
            width: e,
            height: n
        }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1
    }

    function $r(t, e, n, i, r, a, o, s, c) {
        p.call(this, t, e, n, i, r, a, o, s, c), this.needsUpdate = !0
    }

    function ta(t, e, n, i, r, a, o, s, c, l) {
        if (1026 !== (l = void 0 !== l ? l : 1026) && 1027 !== l) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        void 0 === n && 1026 === l && (n = 1012), void 0 === n && 1027 === l && (n = 1020), p.call(this, null, i, r, a, o, s, l, n, c), this.image = {
            width: t,
            height: e
        }, this.magFilter = void 0 !== o ? o : 1003, this.minFilter = void 0 !== s ? s : 1003, this.flipY = !1, this.generateMipmaps = !1
    }

    function ea(t) {
        he.call(this), this.type = "WireframeGeometry";
        var e, n, i, r, a, o, s, c, l, h, u = [],
            p = [0, 0],
            d = {},
            f = ["a", "b", "c"];
        if (t && t.isGeometry) {
            var m = t.faces;
            for (e = 0, i = m.length; e < i; e++) {
                var g = m[e];
                for (n = 0; n < 3; n++) s = g[f[n]], c = g[f[(n + 1) % 3]], p[0] = Math.min(s, c), p[1] = Math.max(s, c), void 0 === d[l = p[0] + "," + p[1]] && (d[l] = {
                    index1: p[0],
                    index2: p[1]
                })
            }
            for (l in d) o = d[l], h = t.vertices[o.index1], u.push(h.x, h.y, h.z), h = t.vertices[o.index2], u.push(h.x, h.y, h.z)
        } else if (t && t.isBufferGeometry) {
            var v, y, b, _, w, M, S;
            if (h = new x, null !== t.index) {
                for (v = t.attributes.position, y = t.index, 0 === (b = t.groups).length && (b = [{
                        start: 0,
                        count: y.count,
                        materialIndex: 0
                    }]), r = 0, a = b.length; r < a; ++r)
                    for (e = w = (_ = b[r]).start, i = w + _.count; e < i; e += 3)
                        for (n = 0; n < 3; n++) s = y.getX(e + n), c = y.getX(e + (n + 1) % 3), p[0] = Math.min(s, c), p[1] = Math.max(s, c), void 0 === d[l = p[0] + "," + p[1]] && (d[l] = {
                            index1: p[0],
                            index2: p[1]
                        });
                for (l in d) o = d[l], h.fromBufferAttribute(v, o.index1), u.push(h.x, h.y, h.z), h.fromBufferAttribute(v, o.index2), u.push(h.x, h.y, h.z)
            } else
                for (e = 0, i = (v = t.attributes.position).count / 3; e < i; e++)
                    for (n = 0; n < 3; n++) M = 3 * e + n, h.fromBufferAttribute(v, M), u.push(h.x, h.y, h.z), S = 3 * e + (n + 1) % 3, h.fromBufferAttribute(v, S), u.push(h.x, h.y, h.z)
        }
        this.setAttribute("position", new $t(u, 3))
    }

    function na(t, e, n) {
        Ie.call(this), this.type = "ParametricGeometry", this.parameters = {
            func: t,
            slices: e,
            stacks: n
        }, this.fromBufferGeometry(new ia(t, e, n)), this.mergeVertices()
    }

    function ia(t, e, n) {
        he.call(this), this.type = "ParametricBufferGeometry", this.parameters = {
            func: t,
            slices: e,
            stacks: n
        };
        var i, r, a = [],
            o = [],
            s = [],
            c = [],
            l = 1e-5,
            h = new x,
            u = new x,
            p = new x,
            d = new x,
            f = new x;
        t.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
        var m = e + 1;
        for (i = 0; i <= n; i++) {
            var g = i / n;
            for (r = 0; r <= e; r++) {
                var v = r / e;
                t(v, g, u), o.push(u.x, u.y, u.z), v - l >= 0 ? (t(v - l, g, p), d.subVectors(u, p)) : (t(v + l, g, p), d.subVectors(p, u)), g - l >= 0 ? (t(v, g - l, p), f.subVectors(u, p)) : (t(v, g + l, p), f.subVectors(p, u)), h.crossVectors(d, f).normalize(), s.push(h.x, h.y, h.z), c.push(v, g)
            }
        }
        for (i = 0; i < n; i++)
            for (r = 0; r < e; r++) {
                var y = i * m + r,
                    b = i * m + r + 1,
                    _ = (i + 1) * m + r + 1,
                    w = (i + 1) * m + r;
                a.push(y, b, w), a.push(b, _, w)
            }
        this.setIndex(a), this.setAttribute("position", new $t(o, 3)), this.setAttribute("normal", new $t(s, 3)), this.setAttribute("uv", new $t(c, 2))
    }

    function ra(t, e, n, i) {
        Ie.call(this), this.type = "PolyhedronGeometry", this.parameters = {
            vertices: t,
            indices: e,
            radius: n,
            detail: i
        }, this.fromBufferGeometry(new aa(t, e, n, i)), this.mergeVertices()
    }

    function aa(t, e, n, i) {
        he.call(this), this.type = "PolyhedronBufferGeometry", this.parameters = {
            vertices: t,
            indices: e,
            radius: n,
            detail: i
        }, n = n || 1;
        var r = [],
            a = [];

        function o(t, e, n, i) {
            var r, a, o = Math.pow(2, i),
                c = [];
            for (r = 0; r <= o; r++) {
                c[r] = [];
                var l = t.clone().lerp(n, r / o),
                    h = e.clone().lerp(n, r / o),
                    u = o - r;
                for (a = 0; a <= u; a++) c[r][a] = 0 === a && r === o ? l : l.clone().lerp(h, a / u)
            }
            for (r = 0; r < o; r++)
                for (a = 0; a < 2 * (o - r) - 1; a++) {
                    var p = Math.floor(a / 2);
                    a % 2 == 0 ? (s(c[r][p + 1]), s(c[r + 1][p]), s(c[r][p])) : (s(c[r][p + 1]), s(c[r + 1][p + 1]), s(c[r + 1][p]))
                }
        }

        function s(t) {
            r.push(t.x, t.y, t.z)
        }

        function l(e, n) {
            var i = 3 * e;
            n.x = t[i + 0], n.y = t[i + 1], n.z = t[i + 2]
        }

        function h(t, e, n, i) {
            i < 0 && 1 === t.x && (a[e] = t.x - 1), 0 === n.x && 0 === n.z && (a[e] = i / 2 / Math.PI + .5)
        }

        function u(t) {
            return Math.atan2(t.z, -t.x)
        }! function(t) {
            for (var n = new x, i = new x, r = new x, a = 0; a < e.length; a += 3) l(e[a + 0], n), l(e[a + 1], i), l(e[a + 2], r), o(n, i, r, t)
        }(i = i || 0),
        function(t) {
            for (var e = new x, n = 0; n < r.length; n += 3) e.x = r[n + 0], e.y = r[n + 1], e.z = r[n + 2], e.normalize().multiplyScalar(t), r[n + 0] = e.x, r[n + 1] = e.y, r[n + 2] = e.z
        }(n),
        function() {
            for (var t = new x, e = 0; e < r.length; e += 3) {
                t.x = r[e + 0], t.y = r[e + 1], t.z = r[e + 2];
                var n = u(t) / 2 / Math.PI + .5,
                    i = (o = t, Math.atan2(-o.y, Math.sqrt(o.x * o.x + o.z * o.z)) / Math.PI + .5);
                a.push(n, 1 - i)
            }
            var o;
            (function() {
                for (var t = new x, e = new x, n = new x, i = new x, o = new c, s = new c, l = new c, p = 0, d = 0; p < r.length; p += 9, d += 6) {
                    t.set(r[p + 0], r[p + 1], r[p + 2]), e.set(r[p + 3], r[p + 4], r[p + 5]), n.set(r[p + 6], r[p + 7], r[p + 8]), o.set(a[d + 0], a[d + 1]), s.set(a[d + 2], a[d + 3]), l.set(a[d + 4], a[d + 5]), i.copy(t).add(e).add(n).divideScalar(3);
                    var f = u(i);
                    h(o, d + 0, t, f), h(s, d + 2, e, f), h(l, d + 4, n, f)
                }
            })(),
            function() {
                for (var t = 0; t < a.length; t += 6) {
                    var e = a[t + 0],
                        n = a[t + 2],
                        i = a[t + 4],
                        r = Math.max(e, n, i),
                        o = Math.min(e, n, i);
                    r > .9 && o < .1 && (e < .2 && (a[t + 0] += 1), n < .2 && (a[t + 2] += 1), i < .2 && (a[t + 4] += 1))
                }
            }()
        }(), this.setAttribute("position", new $t(r, 3)), this.setAttribute("normal", new $t(r.slice(), 3)), this.setAttribute("uv", new $t(a, 2)), 0 === i ? this.computeVertexNormals() : this.normalizeNormals()
    }

    function oa(t, e) {
        Ie.call(this), this.type = "TetrahedronGeometry", this.parameters = {
            radius: t,
            detail: e
        }, this.fromBufferGeometry(new sa(t, e)), this.mergeVertices()
    }

    function sa(t, e) {
        aa.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t, e), this.type = "TetrahedronBufferGeometry", this.parameters = {
            radius: t,
            detail: e
        }
    }

    function ca(t, e) {
        Ie.call(this), this.type = "OctahedronGeometry", this.parameters = {
            radius: t,
            detail: e
        }, this.fromBufferGeometry(new la(t, e)), this.mergeVertices()
    }

    function la(t, e) {
        aa.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t, e), this.type = "OctahedronBufferGeometry", this.parameters = {
            radius: t,
            detail: e
        }
    }

    function ha(t, e) {
        Ie.call(this), this.type = "IcosahedronGeometry", this.parameters = {
            radius: t,
            detail: e
        }, this.fromBufferGeometry(new ua(t, e)), this.mergeVertices()
    }

    function ua(t, e) {
        var n = (1 + Math.sqrt(5)) / 2,
            i = [-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1];
        aa.call(this, i, [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t, e), this.type = "IcosahedronBufferGeometry", this.parameters = {
            radius: t,
            detail: e
        }
    }

    function pa(t, e) {
        Ie.call(this), this.type = "DodecahedronGeometry", this.parameters = {
            radius: t,
            detail: e
        }, this.fromBufferGeometry(new da(t, e)), this.mergeVertices()
    }

    function da(t, e) {
        var n = (1 + Math.sqrt(5)) / 2,
            i = 1 / n,
            r = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, 0, -n, 0, -i, n, 0, -i, -n, 0, i, n, 0, i];
        aa.call(this, r, [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t, e), this.type = "DodecahedronBufferGeometry", this.parameters = {
            radius: t,
            detail: e
        }
    }

    function fa(t, e, n, i, r, a) {
        Ie.call(this), this.type = "TubeGeometry", this.parameters = {
            path: t,
            tubularSegments: e,
            radius: n,
            radialSegments: i,
            closed: r
        }, void 0 !== a && console.warn("THREE.TubeGeometry: taper has been removed.");
        var o = new ma(t, e, n, i, r);
        this.tangents = o.tangents, this.normals = o.normals, this.binormals = o.binormals, this.fromBufferGeometry(o), this.mergeVertices()
    }

    function ma(t, e, n, i, r) {
        he.call(this), this.type = "TubeBufferGeometry", this.parameters = {
            path: t,
            tubularSegments: e,
            radius: n,
            radialSegments: i,
            closed: r
        }, e = e || 64, n = n || 1, i = i || 8, r = r || !1;
        var a = t.computeFrenetFrames(e, r);
        this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals;
        var o, s, l = new x,
            h = new x,
            u = new c,
            p = new x,
            d = [],
            f = [],
            m = [],
            g = [];

        function v(r) {
            p = t.getPointAt(r / e, p);
            var o = a.normals[r],
                c = a.binormals[r];
            for (s = 0; s <= i; s++) {
                var u = s / i * Math.PI * 2,
                    m = Math.sin(u),
                    g = -Math.cos(u);
                h.x = g * o.x + m * c.x, h.y = g * o.y + m * c.y, h.z = g * o.z + m * c.z, h.normalize(), f.push(h.x, h.y, h.z), l.x = p.x + n * h.x, l.y = p.y + n * h.y, l.z = p.z + n * h.z, d.push(l.x, l.y, l.z)
            }
        }! function() {
            for (o = 0; o < e; o++) v(o);
            v(!1 === r ? e : 0),
                function() {
                    for (o = 0; o <= e; o++)
                        for (s = 0; s <= i; s++) u.x = o / e, u.y = s / i, m.push(u.x, u.y)
                }(),
                function() {
                    for (s = 1; s <= e; s++)
                        for (o = 1; o <= i; o++) {
                            var t = (i + 1) * (s - 1) + (o - 1),
                                n = (i + 1) * s + (o - 1),
                                r = (i + 1) * s + o,
                                a = (i + 1) * (s - 1) + o;
                            g.push(t, n, a), g.push(n, r, a)
                        }
                }()
        }(), this.setIndex(g), this.setAttribute("position", new $t(d, 3)), this.setAttribute("normal", new $t(f, 3)), this.setAttribute("uv", new $t(m, 2))
    }

    function ga(t, e, n, i, r, a, o) {
        Ie.call(this), this.type = "TorusKnotGeometry", this.parameters = {
            radius: t,
            tube: e,
            tubularSegments: n,
            radialSegments: i,
            p: r,
            q: a
        }, void 0 !== o && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."), this.fromBufferGeometry(new va(t, e, n, i, r, a)), this.mergeVertices()
    }

    function va(t, e, n, i, r, a) {
        he.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = {
            radius: t,
            tube: e,
            tubularSegments: n,
            radialSegments: i,
            p: r,
            q: a
        }, t = t || 1, e = e || .4, n = Math.floor(n) || 64, i = Math.floor(i) || 8, r = r || 2, a = a || 3;
        var o, s, c = [],
            l = [],
            h = [],
            u = [],
            p = new x,
            d = new x,
            f = new x,
            m = new x,
            g = new x,
            v = new x,
            y = new x;
        for (o = 0; o <= n; ++o) {
            var b = o / n * r * Math.PI * 2;
            for (L(b, r, a, t, f), L(b + .01, r, a, t, m), v.subVectors(m, f), y.addVectors(m, f), g.crossVectors(v, y), y.crossVectors(g, v), g.normalize(), y.normalize(), s = 0; s <= i; ++s) {
                var _ = s / i * Math.PI * 2,
                    w = -e * Math.cos(_),
                    M = e * Math.sin(_);
                p.x = f.x + (w * y.x + M * g.x), p.y = f.y + (w * y.y + M * g.y), p.z = f.z + (w * y.z + M * g.z), l.push(p.x, p.y, p.z), d.subVectors(p, f).normalize(), h.push(d.x, d.y, d.z), u.push(o / n), u.push(s / i)
            }
        }
        for (s = 1; s <= n; s++)
            for (o = 1; o <= i; o++) {
                var S = (i + 1) * (s - 1) + (o - 1),
                    T = (i + 1) * s + (o - 1),
                    E = (i + 1) * s + o,
                    A = (i + 1) * (s - 1) + o;
                c.push(S, T, A), c.push(T, E, A)
            }

        function L(t, e, n, i, r) {
            var a = Math.cos(t),
                o = Math.sin(t),
                s = n / e * t,
                c = Math.cos(s);
            r.x = i * (2 + c) * .5 * a, r.y = i * (2 + c) * o * .5, r.z = i * Math.sin(s) * .5
        }
        this.setIndex(c), this.setAttribute("position", new $t(l, 3)), this.setAttribute("normal", new $t(h, 3)), this.setAttribute("uv", new $t(u, 2))
    }

    function ya(t, e, n, i, r) {
        Ie.call(this), this.type = "TorusGeometry", this.parameters = {
            radius: t,
            tube: e,
            radialSegments: n,
            tubularSegments: i,
            arc: r
        }, this.fromBufferGeometry(new xa(t, e, n, i, r)), this.mergeVertices()
    }

    function xa(t, e, n, i, r) {
        he.call(this), this.type = "TorusBufferGeometry", this.parameters = {
            radius: t,
            tube: e,
            radialSegments: n,
            tubularSegments: i,
            arc: r
        }, t = t || 1, e = e || .4, n = Math.floor(n) || 8, i = Math.floor(i) || 6, r = r || 2 * Math.PI;
        var a, o, s = [],
            c = [],
            l = [],
            h = [],
            u = new x,
            p = new x,
            d = new x;
        for (a = 0; a <= n; a++)
            for (o = 0; o <= i; o++) {
                var f = o / i * r,
                    m = a / n * Math.PI * 2;
                p.x = (t + e * Math.cos(m)) * Math.cos(f), p.y = (t + e * Math.cos(m)) * Math.sin(f), p.z = e * Math.sin(m), c.push(p.x, p.y, p.z), u.x = t * Math.cos(f), u.y = t * Math.sin(f), d.subVectors(p, u).normalize(), l.push(d.x, d.y, d.z), h.push(o / i), h.push(a / n)
            }
        for (a = 1; a <= n; a++)
            for (o = 1; o <= i; o++) {
                var g = (i + 1) * a + o - 1,
                    v = (i + 1) * (a - 1) + o - 1,
                    y = (i + 1) * (a - 1) + o,
                    b = (i + 1) * a + o;
                s.push(g, v, b), s.push(v, y, b)
            }
        this.setIndex(s), this.setAttribute("position", new $t(c, 3)), this.setAttribute("normal", new $t(l, 3)), this.setAttribute("uv", new $t(h, 2))
    }
    Zr.prototype = Object.assign(Object.create(W.prototype), {
        constructor: Zr,
        isPoints: !0,
        raycast: function(t, e) {
            var n = this.geometry,
                i = this.matrixWorld,
                r = t.params.Points.threshold;
            if (null === n.boundingSphere && n.computeBoundingSphere(), Xr.copy(n.boundingSphere), Xr.applyMatrix4(i), Xr.radius += r, !1 !== t.ray.intersectsSphere(Xr)) {
                Wr.getInverse(i), qr.copy(t.ray).applyMatrix4(Wr);
                var a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                    o = a * a;
                if (n.isBufferGeometry) {
                    var s = n.index,
                        c = n.attributes.position.array;
                    if (null !== s)
                        for (var l = s.array, h = 0, u = l.length; h < u; h++) {
                            var p = l[h];
                            Yr.fromArray(c, 3 * p), Jr(Yr, p, o, i, t, e, this)
                        } else {
                            h = 0;
                            for (var d = c.length / 3; h < d; h++) Yr.fromArray(c, 3 * h), Jr(Yr, h, o, i, t, e, this)
                        }
                } else {
                    var f = n.vertices;
                    for (h = 0, d = f.length; h < d; h++) Jr(f[h], h, o, i, t, e, this)
                }
            }
        },
        updateMorphTargets: function() {
            var t, e, n, i = this.geometry;
            if (i.isBufferGeometry) {
                var r = i.morphAttributes,
                    a = Object.keys(r);
                if (a.length > 0) {
                    var o = r[a[0]];
                    if (void 0 !== o)
                        for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = o.length; t < e; t++) n = o[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = t
                }
            } else {
                var s = i.morphTargets;
                void 0 !== s && s.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
            }
        },
        clone: function() {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    }), Qr.prototype = Object.assign(Object.create(p.prototype), {
        constructor: Qr,
        isVideoTexture: !0,
        update: function() {
            var t = this.image;
            t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
        }
    }), Kr.prototype = Object.create(p.prototype), Kr.prototype.constructor = Kr, Kr.prototype.isCompressedTexture = !0, $r.prototype = Object.create(p.prototype), $r.prototype.constructor = $r, $r.prototype.isCanvasTexture = !0, ta.prototype = Object.create(p.prototype), ta.prototype.constructor = ta, ta.prototype.isDepthTexture = !0, ea.prototype = Object.create(he.prototype), ea.prototype.constructor = ea, na.prototype = Object.create(Ie.prototype), na.prototype.constructor = na, ia.prototype = Object.create(he.prototype), ia.prototype.constructor = ia, ra.prototype = Object.create(Ie.prototype), ra.prototype.constructor = ra, aa.prototype = Object.create(he.prototype), aa.prototype.constructor = aa, oa.prototype = Object.create(Ie.prototype), oa.prototype.constructor = oa, sa.prototype = Object.create(aa.prototype), sa.prototype.constructor = sa, ca.prototype = Object.create(Ie.prototype), ca.prototype.constructor = ca, la.prototype = Object.create(aa.prototype), la.prototype.constructor = la, ha.prototype = Object.create(Ie.prototype), ha.prototype.constructor = ha, ua.prototype = Object.create(aa.prototype), ua.prototype.constructor = ua, pa.prototype = Object.create(Ie.prototype), pa.prototype.constructor = pa, da.prototype = Object.create(aa.prototype), da.prototype.constructor = da, fa.prototype = Object.create(Ie.prototype), fa.prototype.constructor = fa, ma.prototype = Object.create(he.prototype), ma.prototype.constructor = ma, ma.prototype.toJSON = function() {
        var t = he.prototype.toJSON.call(this);
        return t.path = this.parameters.path.toJSON(), t
    }, ga.prototype = Object.create(Ie.prototype), ga.prototype.constructor = ga, va.prototype = Object.create(he.prototype), va.prototype.constructor = va, ya.prototype = Object.create(Ie.prototype), ya.prototype.constructor = ya, xa.prototype = Object.create(he.prototype), xa.prototype.constructor = xa;
    var ba = function(t, e, n) {
        n = n || 2;
        var i, r, a, o, s, c, l, h = e && e.length,
            u = h ? e[0] * n : t.length,
            p = _a(t, 0, u, n, !0),
            d = [];
        if (!p || p.next === p.prev) return d;
        if (h && (p = function(t, e, n, i) {
                var r, a, o, s, c, l = [];
                for (r = 0, a = e.length; r < a; r++) o = e[r] * i, s = r < a - 1 ? e[r + 1] * i : t.length, (c = _a(t, o, s, i, !1)) === c.next && (c.steiner = !0), l.push(Ca(c));
                for (l.sort(La), r = 0; r < l.length; r++) Ra(l[r], n), n = wa(n, n.next);
                return n
            }(t, e, p, n)), t.length > 80 * n) {
            i = a = t[0], r = o = t[1];
            for (var f = n; f < u; f += n)(s = t[f]) < i && (i = s), (c = t[f + 1]) < r && (r = c), s > a && (a = s), c > o && (o = c);
            l = 0 !== (l = Math.max(a - i, o - r)) ? 1 / l : 0
        }
        return Ma(p, d, n, i, r, l), d
    };

    function _a(t, e, n, i, r) {
        var a, o;
        if (r === function(t, e, n, i) {
                for (var r = 0, a = e, o = n - i; a < n; a += i) r += (t[o] - t[a]) * (t[a + 1] + t[o + 1]), o = a;
                return r
            }(t, e, n, i) > 0)
            for (a = e; a < n; a += i) o = Fa(a, t[a], t[a + 1], o);
        else
            for (a = n - i; a >= e; a -= i) o = Fa(a, t[a], t[a + 1], o);
        return o && Ia(o, o.next) && (Ga(o), o = o.next), o
    }

    function wa(t, e) {
        if (!t) return t;
        e || (e = t);
        var n, i = t;
        do {
            if (n = !1, i.steiner || !Ia(i, i.next) && 0 !== Na(i.prev, i, i.next)) i = i.next;
            else {
                if (Ga(i), (i = e = i.prev) === i.next) break;
                n = !0
            }
        } while (n || i !== e);
        return e
    }

    function Ma(t, e, n, i, r, a, o) {
        if (t) {
            !o && a && function(t, e, n, i) {
                var r = t;
                do {
                    null === r.z && (r.z = Pa(r.x, r.y, e, n, i)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next
                } while (r !== t);
                r.prevZ.nextZ = null, r.prevZ = null,
                    function(t) {
                        var e, n, i, r, a, o, s, c, l = 1;
                        do {
                            for (n = t, t = null, a = null, o = 0; n;) {
                                for (o++, i = n, s = 0, e = 0; e < l && (s++, i = i.nextZ); e++);
                                for (c = l; s > 0 || c > 0 && i;) 0 !== s && (0 === c || !i || n.z <= i.z) ? (r = n, n = n.nextZ, s--) : (r = i, i = i.nextZ, c--), a ? a.nextZ = r : t = r, r.prevZ = a, a = r;
                                n = i
                            }
                            a.nextZ = null, l *= 2
                        } while (o > 1)
                    }(r)
            }(t, i, r, a);
            for (var s, c, l = t; t.prev !== t.next;)
                if (s = t.prev, c = t.next, a ? Ta(t, i, r, a) : Sa(t)) e.push(s.i / n), e.push(t.i / n), e.push(c.i / n), Ga(t), t = c.next, l = c.next;
                else if ((t = c) === l) {
                o ? 1 === o ? Ma(t = Ea(t, e, n), e, n, i, r, a, 2) : 2 === o && Aa(t, e, n, i, r, a) : Ma(wa(t), e, n, i, r, a, 1);
                break
            }
        }
    }

    function Sa(t) {
        var e = t.prev,
            n = t,
            i = t.next;
        if (Na(e, n, i) >= 0) return !1;
        for (var r = t.next.next; r !== t.prev;) {
            if (Oa(e.x, e.y, n.x, n.y, i.x, i.y, r.x, r.y) && Na(r.prev, r, r.next) >= 0) return !1;
            r = r.next
        }
        return !0
    }

    function Ta(t, e, n, i) {
        var r = t.prev,
            a = t,
            o = t.next;
        if (Na(r, a, o) >= 0) return !1;
        for (var s = r.x < a.x ? r.x < o.x ? r.x : o.x : a.x < o.x ? a.x : o.x, c = r.y < a.y ? r.y < o.y ? r.y : o.y : a.y < o.y ? a.y : o.y, l = r.x > a.x ? r.x > o.x ? r.x : o.x : a.x > o.x ? a.x : o.x, h = r.y > a.y ? r.y > o.y ? r.y : o.y : a.y > o.y ? a.y : o.y, u = Pa(s, c, e, n, i), p = Pa(l, h, e, n, i), d = t.prevZ, f = t.nextZ; d && d.z >= u && f && f.z <= p;) {
            if (d !== t.prev && d !== t.next && Oa(r.x, r.y, a.x, a.y, o.x, o.y, d.x, d.y) && Na(d.prev, d, d.next) >= 0) return !1;
            if (d = d.prevZ, f !== t.prev && f !== t.next && Oa(r.x, r.y, a.x, a.y, o.x, o.y, f.x, f.y) && Na(f.prev, f, f.next) >= 0) return !1;
            f = f.nextZ
        }
        for (; d && d.z >= u;) {
            if (d !== t.prev && d !== t.next && Oa(r.x, r.y, a.x, a.y, o.x, o.y, d.x, d.y) && Na(d.prev, d, d.next) >= 0) return !1;
            d = d.prevZ
        }
        for (; f && f.z <= p;) {
            if (f !== t.prev && f !== t.next && Oa(r.x, r.y, a.x, a.y, o.x, o.y, f.x, f.y) && Na(f.prev, f, f.next) >= 0) return !1;
            f = f.nextZ
        }
        return !0
    }

    function Ea(t, e, n) {
        var i = t;
        do {
            var r = i.prev,
                a = i.next.next;
            !Ia(r, a) && za(r, i, i.next, a) && Ua(r, a) && Ua(a, r) && (e.push(r.i / n), e.push(i.i / n), e.push(a.i / n), Ga(i), Ga(i.next), i = t = a), i = i.next
        } while (i !== t);
        return i
    }

    function Aa(t, e, n, i, r, a) {
        var o = t;
        do {
            for (var s = o.next.next; s !== o.prev;) {
                if (o.i !== s.i && Da(o, s)) {
                    var c = Ba(o, s);
                    return o = wa(o, o.next), c = wa(c, c.next), Ma(o, e, n, i, r, a), void Ma(c, e, n, i, r, a)
                }
                s = s.next
            }
            o = o.next
        } while (o !== t)
    }

    function La(t, e) {
        return t.x - e.x
    }

    function Ra(t, e) {
        if (e = function(t, e) {
                var n, i = e,
                    r = t.x,
                    a = t.y,
                    o = -1 / 0;
                do {
                    if (a <= i.y && a >= i.next.y && i.next.y !== i.y) {
                        var s = i.x + (a - i.y) * (i.next.x - i.x) / (i.next.y - i.y);
                        if (s <= r && s > o) {
                            if (o = s, s === r) {
                                if (a === i.y) return i;
                                if (a === i.next.y) return i.next
                            }
                            n = i.x < i.next.x ? i : i.next
                        }
                    }
                    i = i.next
                } while (i !== e);
                if (!n) return null;
                if (r === o) return n.prev;
                var c, l = n,
                    h = n.x,
                    u = n.y,
                    p = 1 / 0;
                i = n.next;
                for (; i !== l;) r >= i.x && i.x >= h && r !== i.x && Oa(a < u ? r : o, a, h, u, a < u ? o : r, a, i.x, i.y) && ((c = Math.abs(a - i.y) / (r - i.x)) < p || c === p && i.x > n.x) && Ua(i, t) && (n = i, p = c), i = i.next;
                return n
            }(t, e)) {
            var n = Ba(e, t);
            wa(n, n.next)
        }
    }

    function Pa(t, e, n, i, r) {
        return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - i) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
    }

    function Ca(t) {
        var e = t,
            n = t;
        do {
            (e.x < n.x || e.x === n.x && e.y < n.y) && (n = e), e = e.next
        } while (e !== t);
        return n
    }

    function Oa(t, e, n, i, r, a, o, s) {
        return (r - o) * (e - s) - (t - o) * (a - s) >= 0 && (t - o) * (i - s) - (n - o) * (e - s) >= 0 && (n - o) * (a - s) - (r - o) * (i - s) >= 0
    }

    function Da(t, e) {
        return t.next.i !== e.i && t.prev.i !== e.i && ! function(t, e) {
            var n = t;
            do {
                if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && za(n, n.next, t, e)) return !0;
                n = n.next
            } while (n !== t);
            return !1
        }(t, e) && Ua(t, e) && Ua(e, t) && function(t, e) {
            var n = t,
                i = !1,
                r = (t.x + e.x) / 2,
                a = (t.y + e.y) / 2;
            do {
                n.y > a != n.next.y > a && n.next.y !== n.y && r < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x && (i = !i), n = n.next
            } while (n !== t);
            return i
        }(t, e)
    }

    function Na(t, e, n) {
        return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)
    }

    function Ia(t, e) {
        return t.x === e.x && t.y === e.y
    }

    function za(t, e, n, i) {
        return !!(Ia(t, n) && Ia(e, i) || Ia(t, i) && Ia(n, e)) || Na(t, e, n) > 0 != Na(t, e, i) > 0 && Na(n, i, t) > 0 != Na(n, i, e) > 0
    }

    function Ua(t, e) {
        return Na(t.prev, t, t.next) < 0 ? Na(t, e, t.next) >= 0 && Na(t, t.prev, e) >= 0 : Na(t, e, t.prev) < 0 || Na(t, t.next, e) < 0
    }

    function Ba(t, e) {
        var n = new Ha(t.i, t.x, t.y),
            i = new Ha(e.i, e.x, e.y),
            r = t.next,
            a = e.prev;
        return t.next = e, e.prev = t, n.next = r, r.prev = n, i.next = n, n.prev = i, a.next = i, i.prev = a, i
    }

    function Fa(t, e, n, i) {
        var r = new Ha(t, e, n);
        return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r
    }

    function Ga(t) {
        t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
    }

    function Ha(t, e, n) {
        this.i = t, this.x = e, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
    }
    var Va = {
        area: function(t) {
            for (var e = t.length, n = 0, i = e - 1, r = 0; r < e; i = r++) n += t[i].x * t[r].y - t[r].x * t[i].y;
            return .5 * n
        },
        isClockWise: function(t) {
            return Va.area(t) < 0
        },
        triangulateShape: function(t, e) {
            var n = [],
                i = [],
                r = [];
            ka(t), ja(n, t);
            var a = t.length;
            e.forEach(ka);
            for (var o = 0; o < e.length; o++) i.push(a), a += e[o].length, ja(n, e[o]);
            var s = ba(n, i);
            for (o = 0; o < s.length; o += 3) r.push(s.slice(o, o + 3));
            return r
        }
    };

    function ka(t) {
        var e = t.length;
        e > 2 && t[e - 1].equals(t[0]) && t.pop()
    }

    function ja(t, e) {
        for (var n = 0; n < e.length; n++) t.push(e[n].x), t.push(e[n].y)
    }

    function Wa(t, e) {
        Ie.call(this), this.type = "ExtrudeGeometry", this.parameters = {
            shapes: t,
            options: e
        }, this.fromBufferGeometry(new qa(t, e)), this.mergeVertices()
    }

    function qa(t, e) {
        he.call(this), this.type = "ExtrudeBufferGeometry", this.parameters = {
            shapes: t,
            options: e
        }, t = Array.isArray(t) ? t : [t];
        for (var n = this, i = [], r = [], a = 0, o = t.length; a < o; a++) {
            s(t[a])
        }

        function s(t) {
            var a = [],
                o = void 0 !== e.curveSegments ? e.curveSegments : 12,
                s = void 0 !== e.steps ? e.steps : 1,
                l = void 0 !== e.depth ? e.depth : 100,
                h = void 0 === e.bevelEnabled || e.bevelEnabled,
                u = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
                p = void 0 !== e.bevelSize ? e.bevelSize : u - 2,
                d = void 0 !== e.bevelOffset ? e.bevelOffset : 0,
                f = void 0 !== e.bevelSegments ? e.bevelSegments : 3,
                m = e.extrudePath,
                g = void 0 !== e.UVGenerator ? e.UVGenerator : Xa;
            void 0 !== e.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), l = e.amount);
            var v, y, b, _, w, M, S, T, E = !1;
            m && (v = m.getSpacedPoints(s), E = !0, h = !1, y = m.computeFrenetFrames(s, !1), b = new x, _ = new x, w = new x), h || (f = 0, u = 0, p = 0, d = 0);
            var A = t.extractPoints(o),
                L = A.shape,
                R = A.holes;
            if (!Va.isClockWise(L))
                for (L = L.reverse(), S = 0, T = R.length; S < T; S++) M = R[S], Va.isClockWise(M) && (R[S] = M.reverse());
            var P = Va.triangulateShape(L, R),
                C = L;
            for (S = 0, T = R.length; S < T; S++) M = R[S], L = L.concat(M);

            function O(t, e, n) {
                return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(n).add(t)
            }
            var D, N, I, z, U, B, F = L.length,
                G = P.length;

            function H(t, e, n) {
                var i, r, a, o = t.x - e.x,
                    s = t.y - e.y,
                    l = n.x - t.x,
                    h = n.y - t.y,
                    u = o * o + s * s,
                    p = o * h - s * l;
                if (Math.abs(p) > Number.EPSILON) {
                    var d = Math.sqrt(u),
                        f = Math.sqrt(l * l + h * h),
                        m = e.x - s / d,
                        g = e.y + o / d,
                        v = ((n.x - h / f - m) * h - (n.y + l / f - g) * l) / (o * h - s * l),
                        y = (i = m + o * v - t.x) * i + (r = g + s * v - t.y) * r;
                    if (y <= 2) return new c(i, r);
                    a = Math.sqrt(y / 2)
                } else {
                    var x = !1;
                    o > Number.EPSILON ? l > Number.EPSILON && (x = !0) : o < -Number.EPSILON ? l < -Number.EPSILON && (x = !0) : Math.sign(s) === Math.sign(h) && (x = !0), x ? (i = -s, r = o, a = Math.sqrt(u)) : (i = o, r = s, a = Math.sqrt(u / 2))
                }
                return new c(i / a, r / a)
            }
            for (var V = [], k = 0, j = C.length, W = j - 1, q = k + 1; k < j; k++, W++, q++) W === j && (W = 0), q === j && (q = 0), V[k] = H(C[k], C[W], C[q]);
            var X, Y, Z = [],
                J = V.concat();
            for (S = 0, T = R.length; S < T; S++) {
                for (M = R[S], X = [], k = 0, W = (j = M.length) - 1, q = k + 1; k < j; k++, W++, q++) W === j && (W = 0), q === j && (q = 0), X[k] = H(M[k], M[W], M[q]);
                Z.push(X), J = J.concat(X)
            }
            for (D = 0; D < f; D++) {
                for (I = D / f, z = u * Math.cos(I * Math.PI / 2), N = p * Math.sin(I * Math.PI / 2) + d, k = 0, j = C.length; k < j; k++) K((U = O(C[k], V[k], N)).x, U.y, -z);
                for (S = 0, T = R.length; S < T; S++)
                    for (M = R[S], X = Z[S], k = 0, j = M.length; k < j; k++) K((U = O(M[k], X[k], N)).x, U.y, -z)
            }
            for (N = p + d, k = 0; k < F; k++) U = h ? O(L[k], J[k], N) : L[k], E ? (_.copy(y.normals[0]).multiplyScalar(U.x), b.copy(y.binormals[0]).multiplyScalar(U.y), w.copy(v[0]).add(_).add(b), K(w.x, w.y, w.z)) : K(U.x, U.y, 0);
            for (Y = 1; Y <= s; Y++)
                for (k = 0; k < F; k++) U = h ? O(L[k], J[k], N) : L[k], E ? (_.copy(y.normals[Y]).multiplyScalar(U.x), b.copy(y.binormals[Y]).multiplyScalar(U.y), w.copy(v[Y]).add(_).add(b), K(w.x, w.y, w.z)) : K(U.x, U.y, l / s * Y);
            for (D = f - 1; D >= 0; D--) {
                for (I = D / f, z = u * Math.cos(I * Math.PI / 2), N = p * Math.sin(I * Math.PI / 2) + d, k = 0, j = C.length; k < j; k++) K((U = O(C[k], V[k], N)).x, U.y, l + z);
                for (S = 0, T = R.length; S < T; S++)
                    for (M = R[S], X = Z[S], k = 0, j = M.length; k < j; k++) U = O(M[k], X[k], N), E ? K(U.x, U.y + v[s - 1].y, v[s - 1].x + z) : K(U.x, U.y, l + z)
            }

            function Q(t, e) {
                var n, i;
                for (k = t.length; --k >= 0;) {
                    n = k, (i = k - 1) < 0 && (i = t.length - 1);
                    var r = 0,
                        a = s + 2 * f;
                    for (r = 0; r < a; r++) {
                        var o = F * r,
                            c = F * (r + 1);
                        tt(e + n + o, e + i + o, e + i + c, e + n + c)
                    }
                }
            }

            function K(t, e, n) {
                a.push(t), a.push(e), a.push(n)
            }

            function $(t, e, r) {
                et(t), et(e), et(r);
                var a = i.length / 3,
                    o = g.generateTopUV(n, i, a - 3, a - 2, a - 1);
                nt(o[0]), nt(o[1]), nt(o[2])
            }

            function tt(t, e, r, a) {
                et(t), et(e), et(a), et(e), et(r), et(a);
                var o = i.length / 3,
                    s = g.generateSideWallUV(n, i, o - 6, o - 3, o - 2, o - 1);
                nt(s[0]), nt(s[1]), nt(s[3]), nt(s[1]), nt(s[2]), nt(s[3])
            }

            function et(t) {
                i.push(a[3 * t + 0]), i.push(a[3 * t + 1]), i.push(a[3 * t + 2])
            }

            function nt(t) {
                r.push(t.x), r.push(t.y)
            }! function() {
                var t = i.length / 3;
                if (h) {
                    var e = 0,
                        r = F * e;
                    for (k = 0; k < G; k++) $((B = P[k])[2] + r, B[1] + r, B[0] + r);
                    for (r = F * (e = s + 2 * f), k = 0; k < G; k++) $((B = P[k])[0] + r, B[1] + r, B[2] + r)
                } else {
                    for (k = 0; k < G; k++) $((B = P[k])[2], B[1], B[0]);
                    for (k = 0; k < G; k++) $((B = P[k])[0] + F * s, B[1] + F * s, B[2] + F * s)
                }
                n.addGroup(t, i.length / 3 - t, 0)
            }(),
            function() {
                var t = i.length / 3,
                    e = 0;
                for (Q(C, e), e += C.length, S = 0, T = R.length; S < T; S++) Q(M = R[S], e), e += M.length;
                n.addGroup(t, i.length / 3 - t, 1)
            }()
        }
        this.setAttribute("position", new $t(i, 3)), this.setAttribute("uv", new $t(r, 2)), this.computeVertexNormals()
    }
    Wa.prototype = Object.create(Ie.prototype), Wa.prototype.constructor = Wa, Wa.prototype.toJSON = function() {
        var t = Ie.prototype.toJSON.call(this);
        return Ya(this.parameters.shapes, this.parameters.options, t)
    }, qa.prototype = Object.create(he.prototype), qa.prototype.constructor = qa, qa.prototype.toJSON = function() {
        var t = he.prototype.toJSON.call(this);
        return Ya(this.parameters.shapes, this.parameters.options, t)
    };
    var Xa = {
        generateTopUV: function(t, e, n, i, r) {
            var a = e[3 * n],
                o = e[3 * n + 1],
                s = e[3 * i],
                l = e[3 * i + 1],
                h = e[3 * r],
                u = e[3 * r + 1];
            return [new c(a, o), new c(s, l), new c(h, u)]
        },
        generateSideWallUV: function(t, e, n, i, r, a) {
            var o = e[3 * n],
                s = e[3 * n + 1],
                l = e[3 * n + 2],
                h = e[3 * i],
                u = e[3 * i + 1],
                p = e[3 * i + 2],
                d = e[3 * r],
                f = e[3 * r + 1],
                m = e[3 * r + 2],
                g = e[3 * a],
                v = e[3 * a + 1],
                y = e[3 * a + 2];
            return Math.abs(s - u) < .01 ? [new c(o, 1 - l), new c(h, 1 - p), new c(d, 1 - m), new c(g, 1 - y)] : [new c(s, 1 - l), new c(u, 1 - p), new c(f, 1 - m), new c(v, 1 - y)]
        }
    };

    function Ya(t, e, n) {
        if (n.shapes = [], Array.isArray(t))
            for (var i = 0, r = t.length; i < r; i++) {
                var a = t[i];
                n.shapes.push(a.uuid)
            } else n.shapes.push(t.uuid);
        return void 0 !== e.extrudePath && (n.options.extrudePath = e.extrudePath.toJSON()), n
    }

    function Za(t, e) {
        Ie.call(this), this.type = "TextGeometry", this.parameters = {
            text: t,
            parameters: e
        }, this.fromBufferGeometry(new Ja(t, e)), this.mergeVertices()
    }

    function Ja(t, e) {
        var n = (e = e || {}).font;
        if (!n || !n.isFont) return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new Ie;
        var i = n.generateShapes(t, e.size);
        e.depth = void 0 !== e.height ? e.height : 50, void 0 === e.bevelThickness && (e.bevelThickness = 10), void 0 === e.bevelSize && (e.bevelSize = 8), void 0 === e.bevelEnabled && (e.bevelEnabled = !1), qa.call(this, i, e), this.type = "TextBufferGeometry"
    }

    function Qa(t, e, n, i, r, a, o) {
        Ie.call(this), this.type = "SphereGeometry", this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: n,
            phiStart: i,
            phiLength: r,
            thetaStart: a,
            thetaLength: o
        }, this.fromBufferGeometry(new Ka(t, e, n, i, r, a, o)), this.mergeVertices()
    }

    function Ka(t, e, n, i, r, a, o) {
        he.call(this), this.type = "SphereBufferGeometry", this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: n,
            phiStart: i,
            phiLength: r,
            thetaStart: a,
            thetaLength: o
        }, t = t || 1, e = Math.max(3, Math.floor(e) || 8), n = Math.max(2, Math.floor(n) || 6), i = void 0 !== i ? i : 0, r = void 0 !== r ? r : 2 * Math.PI, a = void 0 !== a ? a : 0, o = void 0 !== o ? o : Math.PI;
        var s, c, l = Math.min(a + o, Math.PI),
            h = 0,
            u = [],
            p = new x,
            d = new x,
            f = [],
            m = [],
            g = [],
            v = [];
        for (c = 0; c <= n; c++) {
            var y = [],
                b = c / n,
                _ = 0;
            for (0 == c && 0 == a ? _ = .5 / e : c == n && l == Math.PI && (_ = -.5 / e), s = 0; s <= e; s++) {
                var w = s / e;
                p.x = -t * Math.cos(i + w * r) * Math.sin(a + b * o), p.y = t * Math.cos(a + b * o), p.z = t * Math.sin(i + w * r) * Math.sin(a + b * o), m.push(p.x, p.y, p.z), d.copy(p).normalize(), g.push(d.x, d.y, d.z), v.push(w + _, 1 - b), y.push(h++)
            }
            u.push(y)
        }
        for (c = 0; c < n; c++)
            for (s = 0; s < e; s++) {
                var M = u[c][s + 1],
                    S = u[c][s],
                    T = u[c + 1][s],
                    E = u[c + 1][s + 1];
                (0 !== c || a > 0) && f.push(M, S, E), (c !== n - 1 || l < Math.PI) && f.push(S, T, E)
            }
        this.setIndex(f), this.setAttribute("position", new $t(m, 3)), this.setAttribute("normal", new $t(g, 3)), this.setAttribute("uv", new $t(v, 2))
    }

    function $a(t, e, n, i, r, a) {
        Ie.call(this), this.type = "RingGeometry", this.parameters = {
            innerRadius: t,
            outerRadius: e,
            thetaSegments: n,
            phiSegments: i,
            thetaStart: r,
            thetaLength: a
        }, this.fromBufferGeometry(new to(t, e, n, i, r, a)), this.mergeVertices()
    }

    function to(t, e, n, i, r, a) {
        he.call(this), this.type = "RingBufferGeometry", this.parameters = {
            innerRadius: t,
            outerRadius: e,
            thetaSegments: n,
            phiSegments: i,
            thetaStart: r,
            thetaLength: a
        }, t = t || .5, e = e || 1, r = void 0 !== r ? r : 0, a = void 0 !== a ? a : 2 * Math.PI, n = void 0 !== n ? Math.max(3, n) : 8;
        var o, s, l, h = [],
            u = [],
            p = [],
            d = [],
            f = t,
            m = (e - t) / (i = void 0 !== i ? Math.max(1, i) : 1),
            g = new x,
            v = new c;
        for (s = 0; s <= i; s++) {
            for (l = 0; l <= n; l++) o = r + l / n * a, g.x = f * Math.cos(o), g.y = f * Math.sin(o), u.push(g.x, g.y, g.z), p.push(0, 0, 1), v.x = (g.x / e + 1) / 2, v.y = (g.y / e + 1) / 2, d.push(v.x, v.y);
            f += m
        }
        for (s = 0; s < i; s++) {
            var y = s * (n + 1);
            for (l = 0; l < n; l++) {
                var b = o = l + y,
                    _ = o + n + 1,
                    w = o + n + 2,
                    M = o + 1;
                h.push(b, _, M), h.push(_, w, M)
            }
        }
        this.setIndex(h), this.setAttribute("position", new $t(u, 3)), this.setAttribute("normal", new $t(p, 3)), this.setAttribute("uv", new $t(d, 2))
    }

    function eo(t, e, n, i) {
        Ie.call(this), this.type = "LatheGeometry", this.parameters = {
            points: t,
            segments: e,
            phiStart: n,
            phiLength: i
        }, this.fromBufferGeometry(new no(t, e, n, i)), this.mergeVertices()
    }

    function no(t, e, n, i) {
        he.call(this), this.type = "LatheBufferGeometry", this.parameters = {
            points: t,
            segments: e,
            phiStart: n,
            phiLength: i
        }, e = Math.floor(e) || 12, n = n || 0, i = i || 2 * Math.PI, i = s.clamp(i, 0, 2 * Math.PI);
        var r, a, o, l = [],
            h = [],
            u = [],
            p = 1 / e,
            d = new x,
            f = new c;
        for (a = 0; a <= e; a++) {
            var m = n + a * p * i,
                g = Math.sin(m),
                v = Math.cos(m);
            for (o = 0; o <= t.length - 1; o++) d.x = t[o].x * g, d.y = t[o].y, d.z = t[o].x * v, h.push(d.x, d.y, d.z), f.x = a / e, f.y = o / (t.length - 1), u.push(f.x, f.y)
        }
        for (a = 0; a < e; a++)
            for (o = 0; o < t.length - 1; o++) {
                var y = r = o + a * t.length,
                    b = r + t.length,
                    _ = r + t.length + 1,
                    w = r + 1;
                l.push(y, b, w), l.push(b, _, w)
            }
        if (this.setIndex(l), this.setAttribute("position", new $t(h, 3)), this.setAttribute("uv", new $t(u, 2)), this.computeVertexNormals(), i === 2 * Math.PI) {
            var M = this.attributes.normal.array,
                S = new x,
                T = new x,
                E = new x;
            for (r = e * t.length * 3, a = 0, o = 0; a < t.length; a++, o += 3) S.x = M[o + 0], S.y = M[o + 1], S.z = M[o + 2], T.x = M[r + o + 0], T.y = M[r + o + 1], T.z = M[r + o + 2], E.addVectors(S, T).normalize(), M[o + 0] = M[r + o + 0] = E.x, M[o + 1] = M[r + o + 1] = E.y, M[o + 2] = M[r + o + 2] = E.z
        }
    }

    function io(t, e) {
        Ie.call(this), this.type = "ShapeGeometry", "object" == typeof e && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), e = e.curveSegments), this.parameters = {
            shapes: t,
            curveSegments: e
        }, this.fromBufferGeometry(new ro(t, e)), this.mergeVertices()
    }

    function ro(t, e) {
        he.call(this), this.type = "ShapeBufferGeometry", this.parameters = {
            shapes: t,
            curveSegments: e
        }, e = e || 12;
        var n = [],
            i = [],
            r = [],
            a = [],
            o = 0,
            s = 0;
        if (!1 === Array.isArray(t)) l(t);
        else
            for (var c = 0; c < t.length; c++) l(t[c]), this.addGroup(o, s, c), o += s, s = 0;

        function l(t) {
            var o, c, l, h = i.length / 3,
                u = t.extractPoints(e),
                p = u.shape,
                d = u.holes;
            for (!1 === Va.isClockWise(p) && (p = p.reverse()), o = 0, c = d.length; o < c; o++) l = d[o], !0 === Va.isClockWise(l) && (d[o] = l.reverse());
            var f = Va.triangulateShape(p, d);
            for (o = 0, c = d.length; o < c; o++) l = d[o], p = p.concat(l);
            for (o = 0, c = p.length; o < c; o++) {
                var m = p[o];
                i.push(m.x, m.y, 0), r.push(0, 0, 1), a.push(m.x, m.y)
            }
            for (o = 0, c = f.length; o < c; o++) {
                var g = f[o],
                    v = g[0] + h,
                    y = g[1] + h,
                    x = g[2] + h;
                n.push(v, y, x), s += 3
            }
        }
        this.setIndex(n), this.setAttribute("position", new $t(i, 3)), this.setAttribute("normal", new $t(r, 3)), this.setAttribute("uv", new $t(a, 2))
    }

    function ao(t, e) {
        if (e.shapes = [], Array.isArray(t))
            for (var n = 0, i = t.length; n < i; n++) {
                var r = t[n];
                e.shapes.push(r.uuid)
            } else e.shapes.push(t.uuid);
        return e
    }

    function oo(t, e) {
        he.call(this), this.type = "EdgesGeometry", this.parameters = {
            thresholdAngle: e
        }, e = void 0 !== e ? e : 1;
        var n, i, r, a, o = [],
            c = Math.cos(s.DEG2RAD * e),
            l = [0, 0],
            h = {},
            u = ["a", "b", "c"];
        t.isBufferGeometry ? (a = new Ie).fromBufferGeometry(t) : a = t.clone(), a.mergeVertices(), a.computeFaceNormals();
        for (var p = a.vertices, d = a.faces, f = 0, m = d.length; f < m; f++)
            for (var g = d[f], v = 0; v < 3; v++) n = g[u[v]], i = g[u[(v + 1) % 3]], l[0] = Math.min(n, i), l[1] = Math.max(n, i), void 0 === h[r = l[0] + "," + l[1]] ? h[r] = {
                index1: l[0],
                index2: l[1],
                face1: f,
                face2: void 0
            } : h[r].face2 = f;
        for (r in h) {
            var y = h[r];
            if (void 0 === y.face2 || d[y.face1].normal.dot(d[y.face2].normal) <= c) {
                var x = p[y.index1];
                o.push(x.x, x.y, x.z), x = p[y.index2], o.push(x.x, x.y, x.z)
            }
        }
        this.setAttribute("position", new $t(o, 3))
    }

    function so(t, e, n, i, r, a, o, s) {
        Ie.call(this), this.type = "CylinderGeometry", this.parameters = {
            radiusTop: t,
            radiusBottom: e,
            height: n,
            radialSegments: i,
            heightSegments: r,
            openEnded: a,
            thetaStart: o,
            thetaLength: s
        }, this.fromBufferGeometry(new co(t, e, n, i, r, a, o, s)), this.mergeVertices()
    }

    function co(t, e, n, i, r, a, o, s) {
        he.call(this), this.type = "CylinderBufferGeometry", this.parameters = {
            radiusTop: t,
            radiusBottom: e,
            height: n,
            radialSegments: i,
            heightSegments: r,
            openEnded: a,
            thetaStart: o,
            thetaLength: s
        };
        var l = this;
        t = void 0 !== t ? t : 1, e = void 0 !== e ? e : 1, n = n || 1, i = Math.floor(i) || 8, r = Math.floor(r) || 1, a = void 0 !== a && a, o = void 0 !== o ? o : 0, s = void 0 !== s ? s : 2 * Math.PI;
        var h = [],
            u = [],
            p = [],
            d = [],
            f = 0,
            m = [],
            g = n / 2,
            v = 0;

        function y(n) {
            var r, a, m, y = new c,
                b = new x,
                _ = 0,
                w = !0 === n ? t : e,
                M = !0 === n ? 1 : -1;
            for (a = f, r = 1; r <= i; r++) u.push(0, g * M, 0), p.push(0, M, 0), d.push(.5, .5), f++;
            for (m = f, r = 0; r <= i; r++) {
                var S = r / i * s + o,
                    T = Math.cos(S),
                    E = Math.sin(S);
                b.x = w * E, b.y = g * M, b.z = w * T, u.push(b.x, b.y, b.z), p.push(0, M, 0), y.x = .5 * T + .5, y.y = .5 * E * M + .5, d.push(y.x, y.y), f++
            }
            for (r = 0; r < i; r++) {
                var A = a + r,
                    L = m + r;
                !0 === n ? h.push(L, L + 1, A) : h.push(L + 1, L, A), _ += 3
            }
            l.addGroup(v, _, !0 === n ? 1 : 2), v += _
        }! function() {
            var a, c, y = new x,
                b = new x,
                _ = 0,
                w = (e - t) / n;
            for (c = 0; c <= r; c++) {
                var M = [],
                    S = c / r,
                    T = S * (e - t) + t;
                for (a = 0; a <= i; a++) {
                    var E = a / i,
                        A = E * s + o,
                        L = Math.sin(A),
                        R = Math.cos(A);
                    b.x = T * L, b.y = -S * n + g, b.z = T * R, u.push(b.x, b.y, b.z), y.set(L, w, R).normalize(), p.push(y.x, y.y, y.z), d.push(E, 1 - S), M.push(f++)
                }
                m.push(M)
            }
            for (a = 0; a < i; a++)
                for (c = 0; c < r; c++) {
                    var P = m[c][a],
                        C = m[c + 1][a],
                        O = m[c + 1][a + 1],
                        D = m[c][a + 1];
                    h.push(P, C, D), h.push(C, O, D), _ += 6
                }
            l.addGroup(v, _, 0), v += _
        }(), !1 === a && (t > 0 && y(!0), e > 0 && y(!1)), this.setIndex(h), this.setAttribute("position", new $t(u, 3)), this.setAttribute("normal", new $t(p, 3)), this.setAttribute("uv", new $t(d, 2))
    }

    function lo(t, e, n, i, r, a, o) {
        so.call(this, 0, t, e, n, i, r, a, o), this.type = "ConeGeometry", this.parameters = {
            radius: t,
            height: e,
            radialSegments: n,
            heightSegments: i,
            openEnded: r,
            thetaStart: a,
            thetaLength: o
        }
    }

    function ho(t, e, n, i, r, a, o) {
        co.call(this, 0, t, e, n, i, r, a, o), this.type = "ConeBufferGeometry", this.parameters = {
            radius: t,
            height: e,
            radialSegments: n,
            heightSegments: i,
            openEnded: r,
            thetaStart: a,
            thetaLength: o
        }
    }

    function uo(t, e, n, i) {
        Ie.call(this), this.type = "CircleGeometry", this.parameters = {
            radius: t,
            segments: e,
            thetaStart: n,
            thetaLength: i
        }, this.fromBufferGeometry(new po(t, e, n, i)), this.mergeVertices()
    }

    function po(t, e, n, i) {
        he.call(this), this.type = "CircleBufferGeometry", this.parameters = {
            radius: t,
            segments: e,
            thetaStart: n,
            thetaLength: i
        }, t = t || 1, e = void 0 !== e ? Math.max(3, e) : 8, n = void 0 !== n ? n : 0, i = void 0 !== i ? i : 2 * Math.PI;
        var r, a, o = [],
            s = [],
            l = [],
            h = [],
            u = new x,
            p = new c;
        for (s.push(0, 0, 0), l.push(0, 0, 1), h.push(.5, .5), a = 0, r = 3; a <= e; a++, r += 3) {
            var d = n + a / e * i;
            u.x = t * Math.cos(d), u.y = t * Math.sin(d), s.push(u.x, u.y, u.z), l.push(0, 0, 1), p.x = (s[r] / t + 1) / 2, p.y = (s[r + 1] / t + 1) / 2, h.push(p.x, p.y)
        }
        for (r = 1; r <= e; r++) o.push(r, r + 1, 0);
        this.setIndex(o), this.setAttribute("position", new $t(s, 3)), this.setAttribute("normal", new $t(l, 3)), this.setAttribute("uv", new $t(h, 2))
    }
    Za.prototype = Object.create(Ie.prototype), Za.prototype.constructor = Za, Ja.prototype = Object.create(qa.prototype), Ja.prototype.constructor = Ja, Qa.prototype = Object.create(Ie.prototype), Qa.prototype.constructor = Qa, Ka.prototype = Object.create(he.prototype), Ka.prototype.constructor = Ka, $a.prototype = Object.create(Ie.prototype), $a.prototype.constructor = $a, to.prototype = Object.create(he.prototype), to.prototype.constructor = to, eo.prototype = Object.create(Ie.prototype), eo.prototype.constructor = eo, no.prototype = Object.create(he.prototype), no.prototype.constructor = no, io.prototype = Object.create(Ie.prototype), io.prototype.constructor = io, io.prototype.toJSON = function() {
        var t = Ie.prototype.toJSON.call(this);
        return ao(this.parameters.shapes, t)
    }, ro.prototype = Object.create(he.prototype), ro.prototype.constructor = ro, ro.prototype.toJSON = function() {
        var t = he.prototype.toJSON.call(this);
        return ao(this.parameters.shapes, t)
    }, oo.prototype = Object.create(he.prototype), oo.prototype.constructor = oo, so.prototype = Object.create(Ie.prototype), so.prototype.constructor = so, co.prototype = Object.create(he.prototype), co.prototype.constructor = co, lo.prototype = Object.create(so.prototype), lo.prototype.constructor = lo, ho.prototype = Object.create(co.prototype), ho.prototype.constructor = ho, uo.prototype = Object.create(Ie.prototype), uo.prototype.constructor = uo, po.prototype = Object.create(he.prototype), po.prototype.constructor = po;
    var fo = Object.freeze({
        __proto__: null,
        WireframeGeometry: ea,
        ParametricGeometry: na,
        ParametricBufferGeometry: ia,
        TetrahedronGeometry: oa,
        TetrahedronBufferGeometry: sa,
        OctahedronGeometry: ca,
        OctahedronBufferGeometry: la,
        IcosahedronGeometry: ha,
        IcosahedronBufferGeometry: ua,
        DodecahedronGeometry: pa,
        DodecahedronBufferGeometry: da,
        PolyhedronGeometry: ra,
        PolyhedronBufferGeometry: aa,
        TubeGeometry: fa,
        TubeBufferGeometry: ma,
        TorusKnotGeometry: ga,
        TorusKnotBufferGeometry: va,
        TorusGeometry: ya,
        TorusBufferGeometry: xa,
        TextGeometry: Za,
        TextBufferGeometry: Ja,
        SphereGeometry: Qa,
        SphereBufferGeometry: Ka,
        RingGeometry: $a,
        RingBufferGeometry: to,
        PlaneGeometry: Ke,
        PlaneBufferGeometry: $e,
        LatheGeometry: eo,
        LatheBufferGeometry: no,
        ShapeGeometry: io,
        ShapeBufferGeometry: ro,
        ExtrudeGeometry: Wa,
        ExtrudeBufferGeometry: qa,
        EdgesGeometry: oo,
        ConeGeometry: lo,
        ConeBufferGeometry: ho,
        CylinderGeometry: so,
        CylinderBufferGeometry: co,
        CircleGeometry: uo,
        CircleBufferGeometry: po,
        BoxGeometry: class extends Ie {
            constructor(t, e, n, i, r, a) {
                super(), this.type = "BoxGeometry", this.parameters = {
                    width: t,
                    height: e,
                    depth: n,
                    widthSegments: i,
                    heightSegments: r,
                    depthSegments: a
                }, this.fromBufferGeometry(new ze(t, e, n, i, r, a)), this.mergeVertices()
            }
        },
        BoxBufferGeometry: ze
    });

    function mo(t) {
        Vt.call(this), this.type = "ShadowMaterial", this.color = new zt(0), this.transparent = !0, this.setValues(t)
    }

    function go(t) {
        Ge.call(this, t), this.type = "RawShaderMaterial"
    }

    function vo(t) {
        Vt.call(this), this.defines = {
            STANDARD: ""
        }, this.type = "MeshStandardMaterial", this.color = new zt(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new zt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new c(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.vertexTangents = !1, this.setValues(t)
    }

    function yo(t) {
        vo.call(this), this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        }, this.type = "MeshPhysicalMaterial", this.clearcoat = 0, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new c(1, 1), this.clearcoatNormalMap = null, this.reflectivity = .5, this.sheen = null, this.transparency = 0, this.setValues(t)
    }

    function xo(t) {
        Vt.call(this), this.type = "MeshPhongMaterial", this.color = new zt(16777215), this.specular = new zt(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new zt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new c(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
    }

    function bo(t) {
        Vt.call(this), this.defines = {
            TOON: ""
        }, this.type = "MeshToonMaterial", this.color = new zt(16777215), this.specular = new zt(1118481), this.shininess = 30, this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new zt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new c(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
    }

    function _o(t) {
        Vt.call(this), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new c(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
    }

    function wo(t) {
        Vt.call(this), this.type = "MeshLambertMaterial", this.color = new zt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new zt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
    }

    function Mo(t) {
        Vt.call(this), this.defines = {
            MATCAP: ""
        }, this.type = "MeshMatcapMaterial", this.color = new zt(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new c(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
    }

    function So(t) {
        Dr.call(this), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t)
    }
    mo.prototype = Object.create(Vt.prototype), mo.prototype.constructor = mo, mo.prototype.isShadowMaterial = !0, mo.prototype.copy = function(t) {
        return Vt.prototype.copy.call(this, t), this.color.copy(t.color), this
    }, go.prototype = Object.create(Ge.prototype), go.prototype.constructor = go, go.prototype.isRawShaderMaterial = !0, vo.prototype = Object.create(Vt.prototype), vo.prototype.constructor = vo, vo.prototype.isMeshStandardMaterial = !0, vo.prototype.copy = function(t) {
        return Vt.prototype.copy.call(this, t), this.defines = {
            STANDARD: ""
        }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.vertexTangents = t.vertexTangents, this
    }, yo.prototype = Object.create(vo.prototype), yo.prototype.constructor = yo, yo.prototype.isMeshPhysicalMaterial = !0, yo.prototype.copy = function(t) {
        return vo.prototype.copy.call(this, t), this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        }, this.clearcoat = t.clearcoat, this.clearcoatMap = t.clearcoatMap, this.clearcoatRoughness = t.clearcoatRoughness, this.clearcoatRoughnessMap = t.clearcoatRoughnessMap, this.clearcoatNormalMap = t.clearcoatNormalMap, this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.reflectivity = t.reflectivity, t.sheen ? this.sheen = (this.sheen || new zt).copy(t.sheen) : this.sheen = null, this.transparency = t.transparency, this
    }, xo.prototype = Object.create(Vt.prototype), xo.prototype.constructor = xo, xo.prototype.isMeshPhongMaterial = !0, xo.prototype.copy = function(t) {
        return Vt.prototype.copy.call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    }, bo.prototype = Object.create(Vt.prototype), bo.prototype.constructor = bo, bo.prototype.isMeshToonMaterial = !0, bo.prototype.copy = function(t) {
        return Vt.prototype.copy.call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.gradientMap = t.gradientMap, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    }, _o.prototype = Object.create(Vt.prototype), _o.prototype.constructor = _o, _o.prototype.isMeshNormalMaterial = !0, _o.prototype.copy = function(t) {
        return Vt.prototype.copy.call(this, t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    }, wo.prototype = Object.create(Vt.prototype), wo.prototype.constructor = wo, wo.prototype.isMeshLambertMaterial = !0, wo.prototype.copy = function(t) {
        return Vt.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    }, Mo.prototype = Object.create(Vt.prototype), Mo.prototype.constructor = Mo, Mo.prototype.isMeshMatcapMaterial = !0, Mo.prototype.copy = function(t) {
        return Vt.prototype.copy.call(this, t), this.defines = {
            MATCAP: ""
        }, this.color.copy(t.color), this.matcap = t.matcap, this.map = t.map, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    }, So.prototype = Object.create(Dr.prototype), So.prototype.constructor = So, So.prototype.isLineDashedMaterial = !0, So.prototype.copy = function(t) {
        return Dr.prototype.copy.call(this, t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this
    };
    var To = Object.freeze({
            __proto__: null,
            ShadowMaterial: mo,
            SpriteMaterial: ar,
            RawShaderMaterial: go,
            ShaderMaterial: Ge,
            PointsMaterial: jr,
            MeshPhysicalMaterial: yo,
            MeshStandardMaterial: vo,
            MeshPhongMaterial: xo,
            MeshToonMaterial: bo,
            MeshNormalMaterial: _o,
            MeshLambertMaterial: wo,
            MeshDepthMaterial: ki,
            MeshDistanceMaterial: ji,
            MeshBasicMaterial: kt,
            MeshMatcapMaterial: Mo,
            LineDashedMaterial: So,
            LineBasicMaterial: Dr,
            Material: Vt
        }),
        Eo = {
            arraySlice: function(t, e, n) {
                return Eo.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length)) : t.slice(e, n)
            },
            convertArray: function(t, e, n) {
                return !t || !n && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
            },
            isTypedArray: function(t) {
                return ArrayBuffer.isView(t) && !(t instanceof DataView)
            },
            getKeyframeOrder: function(t) {
                for (var e = t.length, n = new Array(e), i = 0; i !== e; ++i) n[i] = i;
                return n.sort((function(e, n) {
                    return t[e] - t[n]
                })), n
            },
            sortedArray: function(t, e, n) {
                for (var i = t.length, r = new t.constructor(i), a = 0, o = 0; o !== i; ++a)
                    for (var s = n[a] * e, c = 0; c !== e; ++c) r[o++] = t[s + c];
                return r
            },
            flattenJSON: function(t, e, n, i) {
                for (var r = 1, a = t[0]; void 0 !== a && void 0 === a[i];) a = t[r++];
                if (void 0 !== a) {
                    var o = a[i];
                    if (void 0 !== o)
                        if (Array.isArray(o))
                            do {
                                void 0 !== (o = a[i]) && (e.push(a.time), n.push.apply(n, o)), a = t[r++]
                            } while (void 0 !== a);
                        else if (void 0 !== o.toArray)
                        do {
                            void 0 !== (o = a[i]) && (e.push(a.time), o.toArray(n, n.length)), a = t[r++]
                        } while (void 0 !== a);
                    else
                        do {
                            void 0 !== (o = a[i]) && (e.push(a.time), n.push(o)), a = t[r++]
                        } while (void 0 !== a)
                }
            },
            subclip: function(t, e, n, i, r) {
                r = r || 30;
                var a = t.clone();
                a.name = e;
                for (var o = [], s = 0; s < a.tracks.length; ++s) {
                    for (var c = a.tracks[s], l = c.getValueSize(), h = [], u = [], p = 0; p < c.times.length; ++p) {
                        var d = c.times[p] * r;
                        if (!(d < n || d >= i)) {
                            h.push(c.times[p]);
                            for (var f = 0; f < l; ++f) u.push(c.values[p * l + f])
                        }
                    }
                    0 !== h.length && (c.times = Eo.convertArray(h, c.times.constructor), c.values = Eo.convertArray(u, c.values.constructor), o.push(c))
                }
                a.tracks = o;
                var m = 1 / 0;
                for (s = 0; s < a.tracks.length; ++s) m > a.tracks[s].times[0] && (m = a.tracks[s].times[0]);
                for (s = 0; s < a.tracks.length; ++s) a.tracks[s].shift(-1 * m);
                return a.resetDuration(), a
            }
        };

    function Ao(t, e, n, i) {
        this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== i ? i : new e.constructor(n), this.sampleValues = e, this.valueSize = n
    }

    function Lo(t, e, n, i) {
        Ao.call(this, t, e, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0
    }

    function Ro(t, e, n, i) {
        Ao.call(this, t, e, n, i)
    }

    function Po(t, e, n, i) {
        Ao.call(this, t, e, n, i)
    }

    function Co(t, e, n, i) {
        if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
        if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
        this.name = t, this.times = Eo.convertArray(e, this.TimeBufferType), this.values = Eo.convertArray(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation)
    }

    function Oo(t, e, n) {
        Co.call(this, t, e, n)
    }

    function Do(t, e, n, i) {
        Co.call(this, t, e, n, i)
    }

    function No(t, e, n, i) {
        Co.call(this, t, e, n, i)
    }

    function Io(t, e, n, i) {
        Ao.call(this, t, e, n, i)
    }

    function zo(t, e, n, i) {
        Co.call(this, t, e, n, i)
    }

    function Uo(t, e, n, i) {
        Co.call(this, t, e, n, i)
    }

    function Bo(t, e, n, i) {
        Co.call(this, t, e, n, i)
    }

    function Fo(t, e, n) {
        this.name = t, this.tracks = n, this.duration = void 0 !== e ? e : -1, this.uuid = s.generateUUID(), this.duration < 0 && this.resetDuration()
    }

    function Go(t) {
        if (void 0 === t.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
        var e = function(t) {
            switch (t.toLowerCase()) {
                case "scalar":
                case "double":
                case "float":
                case "number":
                case "integer":
                    return No;
                case "vector":
                case "vector2":
                case "vector3":
                case "vector4":
                    return Bo;
                case "color":
                    return Do;
                case "quaternion":
                    return zo;
                case "bool":
                case "boolean":
                    return Oo;
                case "string":
                    return Uo
            }
            throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t)
        }(t.type);
        if (void 0 === t.times) {
            var n = [],
                i = [];
            Eo.flattenJSON(t.keys, n, i, "value"), t.times = n, t.values = i
        }
        return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation)
    }
    Object.assign(Ao.prototype, {
        evaluate: function(t) {
            var e = this.parameterPositions,
                n = this._cachedIndex,
                i = e[n],
                r = e[n - 1];
            t: {
                e: {
                    var a;n: {
                        i: if (!(t < i)) {
                            for (var o = n + 2;;) {
                                if (void 0 === i) {
                                    if (t < r) break i;
                                    return n = e.length, this._cachedIndex = n, this.afterEnd_(n - 1, t, r)
                                }
                                if (n === o) break;
                                if (r = i, t < (i = e[++n])) break e
                            }
                            a = e.length;
                            break n
                        }if (t >= r) break t;
                        var s = e[1];t < s && (n = 2, r = s);
                        for (o = n - 2;;) {
                            if (void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t, i);
                            if (n === o) break;
                            if (i = r, t >= (r = e[--n - 1])) break e
                        }
                        a = n,
                        n = 0
                    }
                    for (; n < a;) {
                        var c = n + a >>> 1;
                        t < e[c] ? a = c : n = c + 1
                    }
                    if (i = e[n], void 0 === (r = e[n - 1])) return this._cachedIndex = 0,
                    this.beforeStart_(0, t, i);
                    if (void 0 === i) return n = e.length,
                    this._cachedIndex = n,
                    this.afterEnd_(n - 1, r, t)
                }
                this._cachedIndex = n,
                this.intervalChanged_(n, r, i)
            }
            return this.interpolate_(n, r, t, i)
        },
        settings: null,
        DefaultSettings_: {},
        getSettings_: function() {
            return this.settings || this.DefaultSettings_
        },
        copySampleValue_: function(t) {
            for (var e = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = t * i, a = 0; a !== i; ++a) e[a] = n[r + a];
            return e
        },
        interpolate_: function() {
            throw new Error("call to abstract method")
        },
        intervalChanged_: function() {}
    }), Object.assign(Ao.prototype, {
        beforeStart_: Ao.prototype.copySampleValue_,
        afterEnd_: Ao.prototype.copySampleValue_
    }), Lo.prototype = Object.assign(Object.create(Ao.prototype), {
        constructor: Lo,
        DefaultSettings_: {
            endingStart: 2400,
            endingEnd: 2400
        },
        intervalChanged_: function(t, e, n) {
            var i = this.parameterPositions,
                r = t - 2,
                a = t + 1,
                o = i[r],
                s = i[a];
            if (void 0 === o) switch (this.getSettings_().endingStart) {
                case 2401:
                    r = t, o = 2 * e - n;
                    break;
                case 2402:
                    o = e + i[r = i.length - 2] - i[r + 1];
                    break;
                default:
                    r = t, o = n
            }
            if (void 0 === s) switch (this.getSettings_().endingEnd) {
                case 2401:
                    a = t, s = 2 * n - e;
                    break;
                case 2402:
                    a = 1, s = n + i[1] - i[0];
                    break;
                default:
                    a = t - 1, s = e
            }
            var c = .5 * (n - e),
                l = this.valueSize;
            this._weightPrev = c / (e - o), this._weightNext = c / (s - n), this._offsetPrev = r * l, this._offsetNext = a * l
        },
        interpolate_: function(t, e, n, i) {
            for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = s - o, l = this._offsetPrev, h = this._offsetNext, u = this._weightPrev, p = this._weightNext, d = (n - e) / (i - e), f = d * d, m = f * d, g = -u * m + 2 * u * f - u * d, v = (1 + u) * m + (-1.5 - 2 * u) * f + (-.5 + u) * d + 1, y = (-1 - p) * m + (1.5 + p) * f + .5 * d, x = p * m - p * f, b = 0; b !== o; ++b) r[b] = g * a[l + b] + v * a[c + b] + y * a[s + b] + x * a[h + b];
            return r
        }
    }), Ro.prototype = Object.assign(Object.create(Ao.prototype), {
        constructor: Ro,
        interpolate_: function(t, e, n, i) {
            for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = s - o, l = (n - e) / (i - e), h = 1 - l, u = 0; u !== o; ++u) r[u] = a[c + u] * h + a[s + u] * l;
            return r
        }
    }), Po.prototype = Object.assign(Object.create(Ao.prototype), {
        constructor: Po,
        interpolate_: function(t) {
            return this.copySampleValue_(t - 1)
        }
    }), Object.assign(Co, {
        toJSON: function(t) {
            var e, n = t.constructor;
            if (void 0 !== n.toJSON) e = n.toJSON(t);
            else {
                e = {
                    name: t.name,
                    times: Eo.convertArray(t.times, Array),
                    values: Eo.convertArray(t.values, Array)
                };
                var i = t.getInterpolation();
                i !== t.DefaultInterpolation && (e.interpolation = i)
            }
            return e.type = t.ValueTypeName, e
        }
    }), Object.assign(Co.prototype, {
        constructor: Co,
        TimeBufferType: Float32Array,
        ValueBufferType: Float32Array,
        DefaultInterpolation: 2301,
        InterpolantFactoryMethodDiscrete: function(t) {
            return new Po(this.times, this.values, this.getValueSize(), t)
        },
        InterpolantFactoryMethodLinear: function(t) {
            return new Ro(this.times, this.values, this.getValueSize(), t)
        },
        InterpolantFactoryMethodSmooth: function(t) {
            return new Lo(this.times, this.values, this.getValueSize(), t)
        },
        setInterpolation: function(t) {
            var e;
            switch (t) {
                case 2300:
                    e = this.InterpolantFactoryMethodDiscrete;
                    break;
                case 2301:
                    e = this.InterpolantFactoryMethodLinear;
                    break;
                case 2302:
                    e = this.InterpolantFactoryMethodSmooth
            }
            if (void 0 === e) {
                var n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                if (void 0 === this.createInterpolant) {
                    if (t === this.DefaultInterpolation) throw new Error(n);
                    this.setInterpolation(this.DefaultInterpolation)
                }
                return console.warn("THREE.KeyframeTrack:", n), this
            }
            return this.createInterpolant = e, this
        },
        getInterpolation: function() {
            switch (this.createInterpolant) {
                case this.InterpolantFactoryMethodDiscrete:
                    return 2300;
                case this.InterpolantFactoryMethodLinear:
                    return 2301;
                case this.InterpolantFactoryMethodSmooth:
                    return 2302
            }
        },
        getValueSize: function() {
            return this.values.length / this.times.length
        },
        shift: function(t) {
            if (0 !== t)
                for (var e = this.times, n = 0, i = e.length; n !== i; ++n) e[n] += t;
            return this
        },
        scale: function(t) {
            if (1 !== t)
                for (var e = this.times, n = 0, i = e.length; n !== i; ++n) e[n] *= t;
            return this
        },
        trim: function(t, e) {
            for (var n = this.times, i = n.length, r = 0, a = i - 1; r !== i && n[r] < t;) ++r;
            for (; - 1 !== a && n[a] > e;) --a;
            if (++a, 0 !== r || a !== i) {
                r >= a && (r = (a = Math.max(a, 1)) - 1);
                var o = this.getValueSize();
                this.times = Eo.arraySlice(n, r, a), this.values = Eo.arraySlice(this.values, r * o, a * o)
            }
            return this
        },
        validate: function() {
            var t = !0,
                e = this.getValueSize();
            e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1);
            var n = this.times,
                i = this.values,
                r = n.length;
            0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1);
            for (var a = null, o = 0; o !== r; o++) {
                var s = n[o];
                if ("number" == typeof s && isNaN(s)) {
                    console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, s), t = !1;
                    break
                }
                if (null !== a && a > s) {
                    console.error("THREE.KeyframeTrack: Out of order keys.", this, o, s, a), t = !1;
                    break
                }
                a = s
            }
            if (void 0 !== i && Eo.isTypedArray(i)) {
                o = 0;
                for (var c = i.length; o !== c; ++o) {
                    var l = i[o];
                    if (isNaN(l)) {
                        console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, l), t = !1;
                        break
                    }
                }
            }
            return t
        },
        optimize: function() {
            for (var t = Eo.arraySlice(this.times), e = Eo.arraySlice(this.values), n = this.getValueSize(), i = 2302 === this.getInterpolation(), r = 1, a = t.length - 1, o = 1; o < a; ++o) {
                var s = !1,
                    c = t[o];
                if (c !== t[o + 1] && (1 !== o || c !== c[0]))
                    if (i) s = !0;
                    else
                        for (var l = o * n, h = l - n, u = l + n, p = 0; p !== n; ++p) {
                            var d = e[l + p];
                            if (d !== e[h + p] || d !== e[u + p]) {
                                s = !0;
                                break
                            }
                        }
                if (s) {
                    if (o !== r) {
                        t[r] = t[o];
                        var f = o * n,
                            m = r * n;
                        for (p = 0; p !== n; ++p) e[m + p] = e[f + p]
                    }++r
                }
            }
            if (a > 0) {
                t[r] = t[a];
                for (f = a * n, m = r * n, p = 0; p !== n; ++p) e[m + p] = e[f + p];
                ++r
            }
            return r !== t.length ? (this.times = Eo.arraySlice(t, 0, r), this.values = Eo.arraySlice(e, 0, r * n)) : (this.times = t, this.values = e), this
        },
        clone: function() {
            var t = Eo.arraySlice(this.times, 0),
                e = Eo.arraySlice(this.values, 0),
                n = new(0, this.constructor)(this.name, t, e);
            return n.createInterpolant = this.createInterpolant, n
        }
    }), Oo.prototype = Object.assign(Object.create(Co.prototype), {
        constructor: Oo,
        ValueTypeName: "bool",
        ValueBufferType: Array,
        DefaultInterpolation: 2300,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    }), Do.prototype = Object.assign(Object.create(Co.prototype), {
        constructor: Do,
        ValueTypeName: "color"
    }), No.prototype = Object.assign(Object.create(Co.prototype), {
        constructor: No,
        ValueTypeName: "number"
    }), Io.prototype = Object.assign(Object.create(Ao.prototype), {
        constructor: Io,
        interpolate_: function(t, e, n, i) {
            for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = (n - e) / (i - e), l = s + o; s !== l; s += 4) g.slerpFlat(r, 0, a, s - o, a, s, c);
            return r
        }
    }), zo.prototype = Object.assign(Object.create(Co.prototype), {
        constructor: zo,
        ValueTypeName: "quaternion",
        DefaultInterpolation: 2301,
        InterpolantFactoryMethodLinear: function(t) {
            return new Io(this.times, this.values, this.getValueSize(), t)
        },
        InterpolantFactoryMethodSmooth: void 0
    }), Uo.prototype = Object.assign(Object.create(Co.prototype), {
        constructor: Uo,
        ValueTypeName: "string",
        ValueBufferType: Array,
        DefaultInterpolation: 2300,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    }), Bo.prototype = Object.assign(Object.create(Co.prototype), {
        constructor: Bo,
        ValueTypeName: "vector"
    }), Object.assign(Fo, {
        parse: function(t) {
            for (var e = [], n = t.tracks, i = 1 / (t.fps || 1), r = 0, a = n.length; r !== a; ++r) e.push(Go(n[r]).scale(i));
            return new Fo(t.name, t.duration, e)
        },
        toJSON: function(t) {
            for (var e = [], n = t.tracks, i = {
                    name: t.name,
                    duration: t.duration,
                    tracks: e,
                    uuid: t.uuid
                }, r = 0, a = n.length; r !== a; ++r) e.push(Co.toJSON(n[r]));
            return i
        },
        CreateFromMorphTargetSequence: function(t, e, n, i) {
            for (var r = e.length, a = [], o = 0; o < r; o++) {
                var s = [],
                    c = [];
                s.push((o + r - 1) % r, o, (o + 1) % r), c.push(0, 1, 0);
                var l = Eo.getKeyframeOrder(s);
                s = Eo.sortedArray(s, 1, l), c = Eo.sortedArray(c, 1, l), i || 0 !== s[0] || (s.push(r), c.push(c[0])), a.push(new No(".morphTargetInfluences[" + e[o].name + "]", s, c).scale(1 / n))
            }
            return new Fo(t, -1, a)
        },
        findByName: function(t, e) {
            var n = t;
            if (!Array.isArray(t)) {
                var i = t;
                n = i.geometry && i.geometry.animations || i.animations
            }
            for (var r = 0; r < n.length; r++)
                if (n[r].name === e) return n[r];
            return null
        },
        CreateClipsFromMorphTargetSequences: function(t, e, n) {
            for (var i = {}, r = /^([\w-]*?)([\d]+)$/, a = 0, o = t.length; a < o; a++) {
                var s = t[a],
                    c = s.name.match(r);
                if (c && c.length > 1) {
                    var l = i[u = c[1]];
                    l || (i[u] = l = []), l.push(s)
                }
            }
            var h = [];
            for (var u in i) h.push(Fo.CreateFromMorphTargetSequence(u, i[u], e, n));
            return h
        },
        parseAnimation: function(t, e) {
            if (!t) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
            for (var n = function(t, e, n, i, r) {
                    if (0 !== n.length) {
                        var a = [],
                            o = [];
                        Eo.flattenJSON(n, a, o, i), 0 !== a.length && r.push(new t(e, a, o))
                    }
                }, i = [], r = t.name || "default", a = t.length || -1, o = t.fps || 30, s = t.hierarchy || [], c = 0; c < s.length; c++) {
                var l = s[c].keys;
                if (l && 0 !== l.length)
                    if (l[0].morphTargets) {
                        for (var h = {}, u = 0; u < l.length; u++)
                            if (l[u].morphTargets)
                                for (var p = 0; p < l[u].morphTargets.length; p++) h[l[u].morphTargets[p]] = -1;
                        for (var d in h) {
                            var f = [],
                                m = [];
                            for (p = 0; p !== l[u].morphTargets.length; ++p) {
                                var g = l[u];
                                f.push(g.time), m.push(g.morphTarget === d ? 1 : 0)
                            }
                            i.push(new No(".morphTargetInfluence[" + d + "]", f, m))
                        }
                        a = h.length * (o || 1)
                    } else {
                        var v = ".bones[" + e[c].name + "]";
                        n(Bo, v + ".position", l, "pos", i), n(zo, v + ".quaternion", l, "rot", i), n(Bo, v + ".scale", l, "scl", i)
                    }
            }
            return 0 === i.length ? null : new Fo(r, a, i)
        }
    }), Object.assign(Fo.prototype, {
        resetDuration: function() {
            for (var t = 0, e = 0, n = this.tracks.length; e !== n; ++e) {
                var i = this.tracks[e];
                t = Math.max(t, i.times[i.times.length - 1])
            }
            return this.duration = t, this
        },
        trim: function() {
            for (var t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration);
            return this
        },
        validate: function() {
            for (var t = !0, e = 0; e < this.tracks.length; e++) t = t && this.tracks[e].validate();
            return t
        },
        optimize: function() {
            for (var t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
            return this
        },
        clone: function() {
            for (var t = [], e = 0; e < this.tracks.length; e++) t.push(this.tracks[e].clone());
            return new Fo(this.name, this.duration, t)
        }
    });
    var Ho = {
        enabled: !1,
        files: {},
        add: function(t, e) {
            !1 !== this.enabled && (this.files[t] = e)
        },
        get: function(t) {
            if (!1 !== this.enabled) return this.files[t]
        },
        remove: function(t) {
            delete this.files[t]
        },
        clear: function() {
            this.files = {}
        }
    };

    function Vo(t, e, n) {
        var i = this,
            r = !1,
            a = 0,
            o = 0,
            s = void 0,
            c = [];
        this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function(t) {
            o++, !1 === r && void 0 !== i.onStart && i.onStart(t, a, o), r = !0
        }, this.itemEnd = function(t) {
            a++, void 0 !== i.onProgress && i.onProgress(t, a, o), a === o && (r = !1, void 0 !== i.onLoad && i.onLoad())
        }, this.itemError = function(t) {
            void 0 !== i.onError && i.onError(t)
        }, this.resolveURL = function(t) {
            return s ? s(t) : t
        }, this.setURLModifier = function(t) {
            return s = t, this
        }, this.addHandler = function(t, e) {
            return c.push(t, e), this
        }, this.removeHandler = function(t) {
            var e = c.indexOf(t);
            return -1 !== e && c.splice(e, 2), this
        }, this.getHandler = function(t) {
            for (var e = 0, n = c.length; e < n; e += 2) {
                var i = c[e],
                    r = c[e + 1];
                if (i.global && (i.lastIndex = 0), i.test(t)) return r
            }
            return null
        }
    }
    var ko = new Vo;

    function jo(t) {
        this.manager = void 0 !== t ? t : ko, this.crossOrigin = "anonymous", this.path = "", this.resourcePath = ""
    }
    Object.assign(jo.prototype, {
        load: function() {},
        parse: function() {},
        setCrossOrigin: function(t) {
            return this.crossOrigin = t, this
        },
        setPath: function(t) {
            return this.path = t, this
        },
        setResourcePath: function(t) {
            return this.resourcePath = t, this
        }
    });
    var Wo = {};

    function qo(t) {
        jo.call(this, t)
    }

    function Xo(t) {
        jo.call(this, t)
    }

    function Yo(t) {
        jo.call(this, t)
    }

    function Zo(t) {
        jo.call(this, t)
    }

    function Jo(t) {
        jo.call(this, t)
    }

    function Qo(t) {
        jo.call(this, t)
    }

    function Ko(t) {
        jo.call(this, t)
    }

    function $o() {
        this.type = "Curve", this.arcLengthDivisions = 200
    }

    function ts(t, e, n, i, r, a, o, s) {
        $o.call(this), this.type = "EllipseCurve", this.aX = t || 0, this.aY = e || 0, this.xRadius = n || 1, this.yRadius = i || 1, this.aStartAngle = r || 0, this.aEndAngle = a || 2 * Math.PI, this.aClockwise = o || !1, this.aRotation = s || 0
    }

    function es(t, e, n, i, r, a) {
        ts.call(this, t, e, n, n, i, r, a), this.type = "ArcCurve"
    }

    function ns() {
        var t = 0,
            e = 0,
            n = 0,
            i = 0;

        function r(r, a, o, s) {
            t = r, e = o, n = -3 * r + 3 * a - 2 * o - s, i = 2 * r - 2 * a + o + s
        }
        return {
            initCatmullRom: function(t, e, n, i, a) {
                r(e, n, a * (n - t), a * (i - e))
            },
            initNonuniformCatmullRom: function(t, e, n, i, a, o, s) {
                var c = (e - t) / a - (n - t) / (a + o) + (n - e) / o,
                    l = (n - e) / o - (i - e) / (o + s) + (i - n) / s;
                r(e, n, c *= o, l *= o)
            },
            calc: function(r) {
                var a = r * r;
                return t + e * r + n * a + i * (a * r)
            }
        }
    }
    qo.prototype = Object.assign(Object.create(jo.prototype), {
        constructor: qo,
        load: function(t, e, n, i) {
            void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
            var r = this,
                a = Ho.get(t);
            if (void 0 !== a) return r.manager.itemStart(t), setTimeout((function() {
                e && e(a), r.manager.itemEnd(t)
            }), 0), a;
            if (void 0 === Wo[t]) {
                var o = t.match(/^data:(.*?)(;base64)?,(.*)$/);
                if (o) {
                    var s = o[1],
                        c = !!o[2],
                        l = o[3];
                    l = decodeURIComponent(l), c && (l = atob(l));
                    try {
                        var h, u = (this.responseType || "").toLowerCase();
                        switch (u) {
                            case "arraybuffer":
                            case "blob":
                                for (var p = new Uint8Array(l.length), d = 0; d < l.length; d++) p[d] = l.charCodeAt(d);
                                h = "blob" === u ? new Blob([p.buffer], {
                                    type: s
                                }) : p.buffer;
                                break;
                            case "document":
                                var f = new DOMParser;
                                h = f.parseFromString(l, s);
                                break;
                            case "json":
                                h = JSON.parse(l);
                                break;
                            default:
                                h = l
                        }
                        setTimeout((function() {
                            e && e(h), r.manager.itemEnd(t)
                        }), 0)
                    } catch (e) {
                        setTimeout((function() {
                            i && i(e), r.manager.itemError(t), r.manager.itemEnd(t)
                        }), 0)
                    }
                } else {
                    Wo[t] = [], Wo[t].push({
                        onLoad: e,
                        onProgress: n,
                        onError: i
                    });
                    var m = new XMLHttpRequest;
                    for (var g in m.open("GET", t, !0), m.addEventListener("load", (function(e) {
                            var n = this.response,
                                i = Wo[t];
                            if (delete Wo[t], 200 === this.status || 0 === this.status) {
                                0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received."), Ho.add(t, n);
                                for (var a = 0, o = i.length; a < o; a++) {
                                    (s = i[a]).onLoad && s.onLoad(n)
                                }
                                r.manager.itemEnd(t)
                            } else {
                                for (a = 0, o = i.length; a < o; a++) {
                                    var s;
                                    (s = i[a]).onError && s.onError(e)
                                }
                                r.manager.itemError(t), r.manager.itemEnd(t)
                            }
                        }), !1), m.addEventListener("progress", (function(e) {
                            for (var n = Wo[t], i = 0, r = n.length; i < r; i++) {
                                var a = n[i];
                                a.onProgress && a.onProgress(e)
                            }
                        }), !1), m.addEventListener("error", (function(e) {
                            var n = Wo[t];
                            delete Wo[t];
                            for (var i = 0, a = n.length; i < a; i++) {
                                var o = n[i];
                                o.onError && o.onError(e)
                            }
                            r.manager.itemError(t), r.manager.itemEnd(t)
                        }), !1), m.addEventListener("abort", (function(e) {
                            var n = Wo[t];
                            delete Wo[t];
                            for (var i = 0, a = n.length; i < a; i++) {
                                var o = n[i];
                                o.onError && o.onError(e)
                            }
                            r.manager.itemError(t), r.manager.itemEnd(t)
                        }), !1), void 0 !== this.responseType && (m.responseType = this.responseType), void 0 !== this.withCredentials && (m.withCredentials = this.withCredentials), m.overrideMimeType && m.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain"), this.requestHeader) m.setRequestHeader(g, this.requestHeader[g]);
                    m.send(null)
                }
                return r.manager.itemStart(t), m
            }
            Wo[t].push({
                onLoad: e,
                onProgress: n,
                onError: i
            })
        },
        setResponseType: function(t) {
            return this.responseType = t, this
        },
        setWithCredentials: function(t) {
            return this.withCredentials = t, this
        },
        setMimeType: function(t) {
            return this.mimeType = t, this
        },
        setRequestHeader: function(t) {
            return this.requestHeader = t, this
        }
    }), Xo.prototype = Object.assign(Object.create(jo.prototype), {
        constructor: Xo,
        load: function(t, e, n, i) {
            var r = this,
                a = new qo(r.manager);
            a.setPath(r.path), a.load(t, (function(t) {
                e(r.parse(JSON.parse(t)))
            }), n, i)
        },
        parse: function(t) {
            for (var e = [], n = 0; n < t.length; n++) {
                var i = Fo.parse(t[n]);
                e.push(i)
            }
            return e
        }
    }), Yo.prototype = Object.assign(Object.create(jo.prototype), {
        constructor: Yo,
        load: function(t, e, n, i) {
            var r = this,
                a = [],
                o = new Kr;
            o.image = a;
            var s = new qo(this.manager);

            function c(c) {
                s.load(t[c], (function(t) {
                    var n = r.parse(t, !0);
                    a[c] = {
                        width: n.width,
                        height: n.height,
                        format: n.format,
                        mipmaps: n.mipmaps
                    }, 6 === (l += 1) && (1 === n.mipmapCount && (o.minFilter = 1006), o.format = n.format, o.needsUpdate = !0, e && e(o))
                }), n, i)
            }
            if (s.setPath(this.path), s.setResponseType("arraybuffer"), Array.isArray(t))
                for (var l = 0, h = 0, u = t.length; h < u; ++h) c(h);
            else s.load(t, (function(t) {
                var n = r.parse(t, !0);
                if (n.isCubemap)
                    for (var i = n.mipmaps.length / n.mipmapCount, s = 0; s < i; s++) {
                        a[s] = {
                            mipmaps: []
                        };
                        for (var c = 0; c < n.mipmapCount; c++) a[s].mipmaps.push(n.mipmaps[s * n.mipmapCount + c]), a[s].format = n.format, a[s].width = n.width, a[s].height = n.height
                    } else o.image.width = n.width, o.image.height = n.height, o.mipmaps = n.mipmaps;
                1 === n.mipmapCount && (o.minFilter = 1006), o.format = n.format, o.needsUpdate = !0, e && e(o)
            }), n, i);
            return o
        }
    }), Zo.prototype = Object.assign(Object.create(jo.prototype), {
        constructor: Zo,
        load: function(t, e, n, i) {
            var r = this,
                a = new We,
                o = new qo(this.manager);
            return o.setResponseType("arraybuffer"), o.setPath(this.path), o.load(t, (function(t) {
                var n = r.parse(t);
                n && (void 0 !== n.image ? a.image = n.image : void 0 !== n.data && (a.image.width = n.width, a.image.height = n.height, a.image.data = n.data), a.wrapS = void 0 !== n.wrapS ? n.wrapS : 1001, a.wrapT = void 0 !== n.wrapT ? n.wrapT : 1001, a.magFilter = void 0 !== n.magFilter ? n.magFilter : 1006, a.minFilter = void 0 !== n.minFilter ? n.minFilter : 1006, a.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1, void 0 !== n.format && (a.format = n.format), void 0 !== n.type && (a.type = n.type), void 0 !== n.mipmaps && (a.mipmaps = n.mipmaps, a.minFilter = 1008), 1 === n.mipmapCount && (a.minFilter = 1006), a.needsUpdate = !0, e && e(a, n))
            }), n, i), a
        }
    }), Jo.prototype = Object.assign(Object.create(jo.prototype), {
        constructor: Jo,
        load: function(t, e, n, i) {
            void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
            var r = this,
                a = Ho.get(t);
            if (void 0 !== a) return r.manager.itemStart(t), setTimeout((function() {
                e && e(a), r.manager.itemEnd(t)
            }), 0), a;
            var o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");

            function s() {
                o.removeEventListener("load", s, !1), o.removeEventListener("error", c, !1), Ho.add(t, this), e && e(this), r.manager.itemEnd(t)
            }

            function c(e) {
                o.removeEventListener("load", s, !1), o.removeEventListener("error", c, !1), i && i(e), r.manager.itemError(t), r.manager.itemEnd(t)
            }
            return o.addEventListener("load", s, !1), o.addEventListener("error", c, !1), "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (o.crossOrigin = this.crossOrigin), r.manager.itemStart(t), o.src = t, o
        }
    }), Qo.prototype = Object.assign(Object.create(jo.prototype), {
        constructor: Qo,
        load: function(t, e, n, i) {
            var r = new fn,
                a = new Jo(this.manager);
            a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
            var o = 0;

            function s(n) {
                a.load(t[n], (function(t) {
                    r.images[n] = t, 6 === ++o && (r.needsUpdate = !0, e && e(r))
                }), void 0, i)
            }
            for (var c = 0; c < t.length; ++c) s(c);
            return r
        }
    }), Ko.prototype = Object.assign(Object.create(jo.prototype), {
        constructor: Ko,
        load: function(t, e, n, i) {
            var r = new p,
                a = new Jo(this.manager);
            return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(t, (function(n) {
                r.image = n;
                var i = t.search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/);
                r.format = i ? 1022 : 1023, r.needsUpdate = !0, void 0 !== e && e(r)
            }), n, i), r
        }
    }), Object.assign($o.prototype, {
        getPoint: function() {
            return console.warn("THREE.Curve: .getPoint() not implemented."), null
        },
        getPointAt: function(t, e) {
            var n = this.getUtoTmapping(t);
            return this.getPoint(n, e)
        },
        getPoints: function(t) {
            void 0 === t && (t = 5);
            for (var e = [], n = 0; n <= t; n++) e.push(this.getPoint(n / t));
            return e
        },
        getSpacedPoints: function(t) {
            void 0 === t && (t = 5);
            for (var e = [], n = 0; n <= t; n++) e.push(this.getPointAt(n / t));
            return e
        },
        getLength: function() {
            var t = this.getLengths();
            return t[t.length - 1]
        },
        getLengths: function(t) {
            if (void 0 === t && (t = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
            this.needsUpdate = !1;
            var e, n, i = [],
                r = this.getPoint(0),
                a = 0;
            for (i.push(0), n = 1; n <= t; n++) a += (e = this.getPoint(n / t)).distanceTo(r), i.push(a), r = e;
            return this.cacheArcLengths = i, i
        },
        updateArcLengths: function() {
            this.needsUpdate = !0, this.getLengths()
        },
        getUtoTmapping: function(t, e) {
            var n, i = this.getLengths(),
                r = 0,
                a = i.length;
            n = e || t * i[a - 1];
            for (var o, s = 0, c = a - 1; s <= c;)
                if ((o = i[r = Math.floor(s + (c - s) / 2)] - n) < 0) s = r + 1;
                else {
                    if (!(o > 0)) {
                        c = r;
                        break
                    }
                    c = r - 1
                } if (i[r = c] === n) return r / (a - 1);
            var l = i[r];
            return (r + (n - l) / (i[r + 1] - l)) / (a - 1)
        },
        getTangent: function(t) {
            var e = t - 1e-4,
                n = t + 1e-4;
            e < 0 && (e = 0), n > 1 && (n = 1);
            var i = this.getPoint(e);
            return this.getPoint(n).clone().sub(i).normalize()
        },
        getTangentAt: function(t) {
            var e = this.getUtoTmapping(t);
            return this.getTangent(e)
        },
        computeFrenetFrames: function(t, e) {
            var n, i, r, a = new x,
                o = [],
                c = [],
                l = [],
                h = new x,
                u = new A;
            for (n = 0; n <= t; n++) i = n / t, o[n] = this.getTangentAt(i), o[n].normalize();
            c[0] = new x, l[0] = new x;
            var p = Number.MAX_VALUE,
                d = Math.abs(o[0].x),
                f = Math.abs(o[0].y),
                m = Math.abs(o[0].z);
            for (d <= p && (p = d, a.set(1, 0, 0)), f <= p && (p = f, a.set(0, 1, 0)), m <= p && a.set(0, 0, 1), h.crossVectors(o[0], a).normalize(), c[0].crossVectors(o[0], h), l[0].crossVectors(o[0], c[0]), n = 1; n <= t; n++) c[n] = c[n - 1].clone(), l[n] = l[n - 1].clone(), h.crossVectors(o[n - 1], o[n]), h.length() > Number.EPSILON && (h.normalize(), r = Math.acos(s.clamp(o[n - 1].dot(o[n]), -1, 1)), c[n].applyMatrix4(u.makeRotationAxis(h, r))), l[n].crossVectors(o[n], c[n]);
            if (!0 === e)
                for (r = Math.acos(s.clamp(c[0].dot(c[t]), -1, 1)), r /= t, o[0].dot(h.crossVectors(c[0], c[t])) > 0 && (r = -r), n = 1; n <= t; n++) c[n].applyMatrix4(u.makeRotationAxis(o[n], r * n)), l[n].crossVectors(o[n], c[n]);
            return {
                tangents: o,
                normals: c,
                binormals: l
            }
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.arcLengthDivisions = t.arcLengthDivisions, this
        },
        toJSON: function() {
            var t = {
                metadata: {
                    version: 4.5,
                    type: "Curve",
                    generator: "Curve.toJSON"
                }
            };
            return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t
        },
        fromJSON: function(t) {
            return this.arcLengthDivisions = t.arcLengthDivisions, this
        }
    }), ts.prototype = Object.create($o.prototype), ts.prototype.constructor = ts, ts.prototype.isEllipseCurve = !0, ts.prototype.getPoint = function(t, e) {
        for (var n = e || new c, i = 2 * Math.PI, r = this.aEndAngle - this.aStartAngle, a = Math.abs(r) < Number.EPSILON; r < 0;) r += i;
        for (; r > i;) r -= i;
        r < Number.EPSILON && (r = a ? 0 : i), !0 !== this.aClockwise || a || (r === i ? r = -i : r -= i);
        var o = this.aStartAngle + t * r,
            s = this.aX + this.xRadius * Math.cos(o),
            l = this.aY + this.yRadius * Math.sin(o);
        if (0 !== this.aRotation) {
            var h = Math.cos(this.aRotation),
                u = Math.sin(this.aRotation),
                p = s - this.aX,
                d = l - this.aY;
            s = p * h - d * u + this.aX, l = p * u + d * h + this.aY
        }
        return n.set(s, l)
    }, ts.prototype.copy = function(t) {
        return $o.prototype.copy.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
    }, ts.prototype.toJSON = function() {
        var t = $o.prototype.toJSON.call(this);
        return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t
    }, ts.prototype.fromJSON = function(t) {
        return $o.prototype.fromJSON.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
    }, es.prototype = Object.create(ts.prototype), es.prototype.constructor = es, es.prototype.isArcCurve = !0;
    var is = new x,
        rs = new ns,
        as = new ns,
        os = new ns;

    function ss(t, e, n, i) {
        $o.call(this), this.type = "CatmullRomCurve3", this.points = t || [], this.closed = e || !1, this.curveType = n || "centripetal", this.tension = i || .5
    }

    function cs(t, e, n, i, r) {
        var a = .5 * (i - e),
            o = .5 * (r - n),
            s = t * t;
        return (2 * n - 2 * i + a + o) * (t * s) + (-3 * n + 3 * i - 2 * a - o) * s + a * t + n
    }

    function ls(t, e, n, i) {
        return function(t, e) {
            var n = 1 - t;
            return n * n * e
        }(t, e) + function(t, e) {
            return 2 * (1 - t) * t * e
        }(t, n) + function(t, e) {
            return t * t * e
        }(t, i)
    }

    function hs(t, e, n, i, r) {
        return function(t, e) {
            var n = 1 - t;
            return n * n * n * e
        }(t, e) + function(t, e) {
            var n = 1 - t;
            return 3 * n * n * t * e
        }(t, n) + function(t, e) {
            return 3 * (1 - t) * t * t * e
        }(t, i) + function(t, e) {
            return t * t * t * e
        }(t, r)
    }

    function us(t, e, n, i) {
        $o.call(this), this.type = "CubicBezierCurve", this.v0 = t || new c, this.v1 = e || new c, this.v2 = n || new c, this.v3 = i || new c
    }

    function ps(t, e, n, i) {
        $o.call(this), this.type = "CubicBezierCurve3", this.v0 = t || new x, this.v1 = e || new x, this.v2 = n || new x, this.v3 = i || new x
    }

    function ds(t, e) {
        $o.call(this), this.type = "LineCurve", this.v1 = t || new c, this.v2 = e || new c
    }

    function fs(t, e) {
        $o.call(this), this.type = "LineCurve3", this.v1 = t || new x, this.v2 = e || new x
    }

    function ms(t, e, n) {
        $o.call(this), this.type = "QuadraticBezierCurve", this.v0 = t || new c, this.v1 = e || new c, this.v2 = n || new c
    }

    function gs(t, e, n) {
        $o.call(this), this.type = "QuadraticBezierCurve3", this.v0 = t || new x, this.v1 = e || new x, this.v2 = n || new x
    }

    function vs(t) {
        $o.call(this), this.type = "SplineCurve", this.points = t || []
    }
    ss.prototype = Object.create($o.prototype), ss.prototype.constructor = ss, ss.prototype.isCatmullRomCurve3 = !0, ss.prototype.getPoint = function(t, e) {
        var n, i, r, a, o = e || new x,
            s = this.points,
            c = s.length,
            l = (c - (this.closed ? 0 : 1)) * t,
            h = Math.floor(l),
            u = l - h;
        if (this.closed ? h += h > 0 ? 0 : (Math.floor(Math.abs(h) / c) + 1) * c : 0 === u && h === c - 1 && (h = c - 2, u = 1), this.closed || h > 0 ? n = s[(h - 1) % c] : (is.subVectors(s[0], s[1]).add(s[0]), n = is), i = s[h % c], r = s[(h + 1) % c], this.closed || h + 2 < c ? a = s[(h + 2) % c] : (is.subVectors(s[c - 1], s[c - 2]).add(s[c - 1]), a = is), "centripetal" === this.curveType || "chordal" === this.curveType) {
            var p = "chordal" === this.curveType ? .5 : .25,
                d = Math.pow(n.distanceToSquared(i), p),
                f = Math.pow(i.distanceToSquared(r), p),
                m = Math.pow(r.distanceToSquared(a), p);
            f < 1e-4 && (f = 1), d < 1e-4 && (d = f), m < 1e-4 && (m = f), rs.initNonuniformCatmullRom(n.x, i.x, r.x, a.x, d, f, m), as.initNonuniformCatmullRom(n.y, i.y, r.y, a.y, d, f, m), os.initNonuniformCatmullRom(n.z, i.z, r.z, a.z, d, f, m)
        } else "catmullrom" === this.curveType && (rs.initCatmullRom(n.x, i.x, r.x, a.x, this.tension), as.initCatmullRom(n.y, i.y, r.y, a.y, this.tension), os.initCatmullRom(n.z, i.z, r.z, a.z, this.tension));
        return o.set(rs.calc(u), as.calc(u), os.calc(u)), o
    }, ss.prototype.copy = function(t) {
        $o.prototype.copy.call(this, t), this.points = [];
        for (var e = 0, n = t.points.length; e < n; e++) {
            var i = t.points[e];
            this.points.push(i.clone())
        }
        return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
    }, ss.prototype.toJSON = function() {
        var t = $o.prototype.toJSON.call(this);
        t.points = [];
        for (var e = 0, n = this.points.length; e < n; e++) {
            var i = this.points[e];
            t.points.push(i.toArray())
        }
        return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t
    }, ss.prototype.fromJSON = function(t) {
        $o.prototype.fromJSON.call(this, t), this.points = [];
        for (var e = 0, n = t.points.length; e < n; e++) {
            var i = t.points[e];
            this.points.push((new x).fromArray(i))
        }
        return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
    }, us.prototype = Object.create($o.prototype), us.prototype.constructor = us, us.prototype.isCubicBezierCurve = !0, us.prototype.getPoint = function(t, e) {
        var n = e || new c,
            i = this.v0,
            r = this.v1,
            a = this.v2,
            o = this.v3;
        return n.set(hs(t, i.x, r.x, a.x, o.x), hs(t, i.y, r.y, a.y, o.y)), n
    }, us.prototype.copy = function(t) {
        return $o.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
    }, us.prototype.toJSON = function() {
        var t = $o.prototype.toJSON.call(this);
        return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
    }, us.prototype.fromJSON = function(t) {
        return $o.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
    }, ps.prototype = Object.create($o.prototype), ps.prototype.constructor = ps, ps.prototype.isCubicBezierCurve3 = !0, ps.prototype.getPoint = function(t, e) {
        var n = e || new x,
            i = this.v0,
            r = this.v1,
            a = this.v2,
            o = this.v3;
        return n.set(hs(t, i.x, r.x, a.x, o.x), hs(t, i.y, r.y, a.y, o.y), hs(t, i.z, r.z, a.z, o.z)), n
    }, ps.prototype.copy = function(t) {
        return $o.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
    }, ps.prototype.toJSON = function() {
        var t = $o.prototype.toJSON.call(this);
        return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
    }, ps.prototype.fromJSON = function(t) {
        return $o.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
    }, ds.prototype = Object.create($o.prototype), ds.prototype.constructor = ds, ds.prototype.isLineCurve = !0, ds.prototype.getPoint = function(t, e) {
        var n = e || new c;
        return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n
    }, ds.prototype.getPointAt = function(t, e) {
        return this.getPoint(t, e)
    }, ds.prototype.getTangent = function() {
        return this.v2.clone().sub(this.v1).normalize()
    }, ds.prototype.copy = function(t) {
        return $o.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
    }, ds.prototype.toJSON = function() {
        var t = $o.prototype.toJSON.call(this);
        return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
    }, ds.prototype.fromJSON = function(t) {
        return $o.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
    }, fs.prototype = Object.create($o.prototype), fs.prototype.constructor = fs, fs.prototype.isLineCurve3 = !0, fs.prototype.getPoint = function(t, e) {
        var n = e || new x;
        return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n
    }, fs.prototype.getPointAt = function(t, e) {
        return this.getPoint(t, e)
    }, fs.prototype.copy = function(t) {
        return $o.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
    }, fs.prototype.toJSON = function() {
        var t = $o.prototype.toJSON.call(this);
        return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
    }, fs.prototype.fromJSON = function(t) {
        return $o.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
    }, ms.prototype = Object.create($o.prototype), ms.prototype.constructor = ms, ms.prototype.isQuadraticBezierCurve = !0, ms.prototype.getPoint = function(t, e) {
        var n = e || new c,
            i = this.v0,
            r = this.v1,
            a = this.v2;
        return n.set(ls(t, i.x, r.x, a.x), ls(t, i.y, r.y, a.y)), n
    }, ms.prototype.copy = function(t) {
        return $o.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
    }, ms.prototype.toJSON = function() {
        var t = $o.prototype.toJSON.call(this);
        return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
    }, ms.prototype.fromJSON = function(t) {
        return $o.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
    }, gs.prototype = Object.create($o.prototype), gs.prototype.constructor = gs, gs.prototype.isQuadraticBezierCurve3 = !0, gs.prototype.getPoint = function(t, e) {
        var n = e || new x,
            i = this.v0,
            r = this.v1,
            a = this.v2;
        return n.set(ls(t, i.x, r.x, a.x), ls(t, i.y, r.y, a.y), ls(t, i.z, r.z, a.z)), n
    }, gs.prototype.copy = function(t) {
        return $o.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
    }, gs.prototype.toJSON = function() {
        var t = $o.prototype.toJSON.call(this);
        return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
    }, gs.prototype.fromJSON = function(t) {
        return $o.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
    }, vs.prototype = Object.create($o.prototype), vs.prototype.constructor = vs, vs.prototype.isSplineCurve = !0, vs.prototype.getPoint = function(t, e) {
        var n = e || new c,
            i = this.points,
            r = (i.length - 1) * t,
            a = Math.floor(r),
            o = r - a,
            s = i[0 === a ? a : a - 1],
            l = i[a],
            h = i[a > i.length - 2 ? i.length - 1 : a + 1],
            u = i[a > i.length - 3 ? i.length - 1 : a + 2];
        return n.set(cs(o, s.x, l.x, h.x, u.x), cs(o, s.y, l.y, h.y, u.y)), n
    }, vs.prototype.copy = function(t) {
        $o.prototype.copy.call(this, t), this.points = [];
        for (var e = 0, n = t.points.length; e < n; e++) {
            var i = t.points[e];
            this.points.push(i.clone())
        }
        return this
    }, vs.prototype.toJSON = function() {
        var t = $o.prototype.toJSON.call(this);
        t.points = [];
        for (var e = 0, n = this.points.length; e < n; e++) {
            var i = this.points[e];
            t.points.push(i.toArray())
        }
        return t
    }, vs.prototype.fromJSON = function(t) {
        $o.prototype.fromJSON.call(this, t), this.points = [];
        for (var e = 0, n = t.points.length; e < n; e++) {
            var i = t.points[e];
            this.points.push((new c).fromArray(i))
        }
        return this
    };
    var ys = Object.freeze({
        __proto__: null,
        ArcCurve: es,
        CatmullRomCurve3: ss,
        CubicBezierCurve: us,
        CubicBezierCurve3: ps,
        EllipseCurve: ts,
        LineCurve: ds,
        LineCurve3: fs,
        QuadraticBezierCurve: ms,
        QuadraticBezierCurve3: gs,
        SplineCurve: vs
    });

    function xs() {
        $o.call(this), this.type = "CurvePath", this.curves = [], this.autoClose = !1
    }

    function bs(t) {
        xs.call(this), this.type = "Path", this.currentPoint = new c, t && this.setFromPoints(t)
    }

    function _s(t) {
        bs.call(this, t), this.uuid = s.generateUUID(), this.type = "Shape", this.holes = []
    }

    function ws(t, e) {
        W.call(this), this.type = "Light", this.color = new zt(t), this.intensity = void 0 !== e ? e : 1, this.receiveShadow = void 0
    }

    function Ms(t, e, n) {
        ws.call(this, t, n), this.type = "HemisphereLight", this.castShadow = void 0, this.position.copy(W.DefaultUp), this.updateMatrix(), this.groundColor = new zt(e)
    }

    function Ss(t) {
        this.camera = t, this.bias = 0, this.radius = 1, this.mapSize = new c(512, 512), this.map = null, this.mapPass = null, this.matrix = new A, this._frustum = new Ye, this._frameExtents = new c(1, 1), this._viewportCount = 1, this._viewports = [new d(0, 0, 1, 1)]
    }

    function Ts() {
        Ss.call(this, new Ve(50, 1, .5, 500))
    }

    function Es(t, e, n, i, r, a) {
        ws.call(this, t, e), this.type = "SpotLight", this.position.copy(W.DefaultUp), this.updateMatrix(), this.target = new W, Object.defineProperty(this, "power", {
            get: function() {
                return this.intensity * Math.PI
            },
            set: function(t) {
                this.intensity = t / Math.PI
            }
        }), this.distance = void 0 !== n ? n : 0, this.angle = void 0 !== i ? i : Math.PI / 3, this.penumbra = void 0 !== r ? r : 0, this.decay = void 0 !== a ? a : 1, this.shadow = new Ts
    }

    function As() {
        Ss.call(this, new Ve(90, 1, .5, 500)), this._frameExtents = new c(4, 2), this._viewportCount = 6, this._viewports = [new d(2, 1, 1, 1), new d(0, 1, 1, 1), new d(3, 1, 1, 1), new d(1, 1, 1, 1), new d(3, 0, 1, 1), new d(1, 0, 1, 1)], this._cubeDirections = [new x(1, 0, 0), new x(-1, 0, 0), new x(0, 0, 1), new x(0, 0, -1), new x(0, 1, 0), new x(0, -1, 0)], this._cubeUps = [new x(0, 1, 0), new x(0, 1, 0), new x(0, 1, 0), new x(0, 1, 0), new x(0, 0, 1), new x(0, 0, -1)]
    }

    function Ls(t, e, n, i) {
        ws.call(this, t, e), this.type = "PointLight", Object.defineProperty(this, "power", {
            get: function() {
                return 4 * this.intensity * Math.PI
            },
            set: function(t) {
                this.intensity = t / (4 * Math.PI)
            }
        }), this.distance = void 0 !== n ? n : 0, this.decay = void 0 !== i ? i : 1, this.shadow = new As
    }

    function Rs(t, e, n, i, r, a) {
        He.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = void 0 !== t ? t : -1, this.right = void 0 !== e ? e : 1, this.top = void 0 !== n ? n : 1, this.bottom = void 0 !== i ? i : -1, this.near = void 0 !== r ? r : .1, this.far = void 0 !== a ? a : 2e3, this.updateProjectionMatrix()
    }

    function Ps() {
        Ss.call(this, new Rs(-5, 5, 5, -5, .5, 500))
    }

    function Cs(t, e) {
        ws.call(this, t, e), this.type = "DirectionalLight", this.position.copy(W.DefaultUp), this.updateMatrix(), this.target = new W, this.shadow = new Ps
    }

    function Os(t, e) {
        ws.call(this, t, e), this.type = "AmbientLight", this.castShadow = void 0
    }

    function Ds(t, e, n, i) {
        ws.call(this, t, e), this.type = "RectAreaLight", this.width = void 0 !== n ? n : 10, this.height = void 0 !== i ? i : 10
    }

    function Ns(t) {
        jo.call(this, t), this.textures = {}
    }
    xs.prototype = Object.assign(Object.create($o.prototype), {
        constructor: xs,
        add: function(t) {
            this.curves.push(t)
        },
        closePath: function() {
            var t = this.curves[0].getPoint(0),
                e = this.curves[this.curves.length - 1].getPoint(1);
            t.equals(e) || this.curves.push(new ds(e, t))
        },
        getPoint: function(t) {
            for (var e = t * this.getLength(), n = this.getCurveLengths(), i = 0; i < n.length;) {
                if (n[i] >= e) {
                    var r = n[i] - e,
                        a = this.curves[i],
                        o = a.getLength(),
                        s = 0 === o ? 0 : 1 - r / o;
                    return a.getPointAt(s)
                }
                i++
            }
            return null
        },
        getLength: function() {
            var t = this.getCurveLengths();
            return t[t.length - 1]
        },
        updateArcLengths: function() {
            this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
        },
        getCurveLengths: function() {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
            for (var t = [], e = 0, n = 0, i = this.curves.length; n < i; n++) e += this.curves[n].getLength(), t.push(e);
            return this.cacheLengths = t, t
        },
        getSpacedPoints: function(t) {
            void 0 === t && (t = 40);
            for (var e = [], n = 0; n <= t; n++) e.push(this.getPoint(n / t));
            return this.autoClose && e.push(e[0]), e
        },
        getPoints: function(t) {
            t = t || 12;
            for (var e, n = [], i = 0, r = this.curves; i < r.length; i++)
                for (var a = r[i], o = a && a.isEllipseCurve ? 2 * t : a && (a.isLineCurve || a.isLineCurve3) ? 1 : a && a.isSplineCurve ? t * a.points.length : t, s = a.getPoints(o), c = 0; c < s.length; c++) {
                    var l = s[c];
                    e && e.equals(l) || (n.push(l), e = l)
                }
            return this.autoClose && n.length > 1 && !n[n.length - 1].equals(n[0]) && n.push(n[0]), n
        },
        copy: function(t) {
            $o.prototype.copy.call(this, t), this.curves = [];
            for (var e = 0, n = t.curves.length; e < n; e++) {
                var i = t.curves[e];
                this.curves.push(i.clone())
            }
            return this.autoClose = t.autoClose, this
        },
        toJSON: function() {
            var t = $o.prototype.toJSON.call(this);
            t.autoClose = this.autoClose, t.curves = [];
            for (var e = 0, n = this.curves.length; e < n; e++) {
                var i = this.curves[e];
                t.curves.push(i.toJSON())
            }
            return t
        },
        fromJSON: function(t) {
            $o.prototype.fromJSON.call(this, t), this.autoClose = t.autoClose, this.curves = [];
            for (var e = 0, n = t.curves.length; e < n; e++) {
                var i = t.curves[e];
                this.curves.push((new ys[i.type]).fromJSON(i))
            }
            return this
        }
    }), bs.prototype = Object.assign(Object.create(xs.prototype), {
        constructor: bs,
        setFromPoints: function(t) {
            this.moveTo(t[0].x, t[0].y);
            for (var e = 1, n = t.length; e < n; e++) this.lineTo(t[e].x, t[e].y);
            return this
        },
        moveTo: function(t, e) {
            return this.currentPoint.set(t, e), this
        },
        lineTo: function(t, e) {
            var n = new ds(this.currentPoint.clone(), new c(t, e));
            return this.curves.push(n), this.currentPoint.set(t, e), this
        },
        quadraticCurveTo: function(t, e, n, i) {
            var r = new ms(this.currentPoint.clone(), new c(t, e), new c(n, i));
            return this.curves.push(r), this.currentPoint.set(n, i), this
        },
        bezierCurveTo: function(t, e, n, i, r, a) {
            var o = new us(this.currentPoint.clone(), new c(t, e), new c(n, i), new c(r, a));
            return this.curves.push(o), this.currentPoint.set(r, a), this
        },
        splineThru: function(t) {
            var e = new vs([this.currentPoint.clone()].concat(t));
            return this.curves.push(e), this.currentPoint.copy(t[t.length - 1]), this
        },
        arc: function(t, e, n, i, r, a) {
            var o = this.currentPoint.x,
                s = this.currentPoint.y;
            return this.absarc(t + o, e + s, n, i, r, a), this
        },
        absarc: function(t, e, n, i, r, a) {
            return this.absellipse(t, e, n, n, i, r, a), this
        },
        ellipse: function(t, e, n, i, r, a, o, s) {
            var c = this.currentPoint.x,
                l = this.currentPoint.y;
            return this.absellipse(t + c, e + l, n, i, r, a, o, s), this
        },
        absellipse: function(t, e, n, i, r, a, o, s) {
            var c = new ts(t, e, n, i, r, a, o, s);
            if (this.curves.length > 0) {
                var l = c.getPoint(0);
                l.equals(this.currentPoint) || this.lineTo(l.x, l.y)
            }
            this.curves.push(c);
            var h = c.getPoint(1);
            return this.currentPoint.copy(h), this
        },
        copy: function(t) {
            return xs.prototype.copy.call(this, t), this.currentPoint.copy(t.currentPoint), this
        },
        toJSON: function() {
            var t = xs.prototype.toJSON.call(this);
            return t.currentPoint = this.currentPoint.toArray(), t
        },
        fromJSON: function(t) {
            return xs.prototype.fromJSON.call(this, t), this.currentPoint.fromArray(t.currentPoint), this
        }
    }), _s.prototype = Object.assign(Object.create(bs.prototype), {
        constructor: _s,
        getPointsHoles: function(t) {
            for (var e = [], n = 0, i = this.holes.length; n < i; n++) e[n] = this.holes[n].getPoints(t);
            return e
        },
        extractPoints: function(t) {
            return {
                shape: this.getPoints(t),
                holes: this.getPointsHoles(t)
            }
        },
        copy: function(t) {
            bs.prototype.copy.call(this, t), this.holes = [];
            for (var e = 0, n = t.holes.length; e < n; e++) {
                var i = t.holes[e];
                this.holes.push(i.clone())
            }
            return this
        },
        toJSON: function() {
            var t = bs.prototype.toJSON.call(this);
            t.uuid = this.uuid, t.holes = [];
            for (var e = 0, n = this.holes.length; e < n; e++) {
                var i = this.holes[e];
                t.holes.push(i.toJSON())
            }
            return t
        },
        fromJSON: function(t) {
            bs.prototype.fromJSON.call(this, t), this.uuid = t.uuid, this.holes = [];
            for (var e = 0, n = t.holes.length; e < n; e++) {
                var i = t.holes[e];
                this.holes.push((new bs).fromJSON(i))
            }
            return this
        }
    }), ws.prototype = Object.assign(Object.create(W.prototype), {
        constructor: ws,
        isLight: !0,
        copy: function(t) {
            return W.prototype.copy.call(this, t), this.color.copy(t.color), this.intensity = t.intensity, this
        },
        toJSON: function(t) {
            var e = W.prototype.toJSON.call(this, t);
            return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e
        }
    }), Ms.prototype = Object.assign(Object.create(ws.prototype), {
        constructor: Ms,
        isHemisphereLight: !0,
        copy: function(t) {
            return ws.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this
        }
    }), Object.assign(Ss.prototype, {
        _projScreenMatrix: new A,
        _lightPositionWorld: new x,
        _lookTarget: new x,
        getViewportCount: function() {
            return this._viewportCount
        },
        getFrustum: function() {
            return this._frustum
        },
        updateMatrices: function(t) {
            var e = this.camera,
                n = this.matrix,
                i = this._projScreenMatrix,
                r = this._lookTarget,
                a = this._lightPositionWorld;
            a.setFromMatrixPosition(t.matrixWorld), e.position.copy(a), r.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(r), e.updateMatrixWorld(), i.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(i), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(e.projectionMatrix), n.multiply(e.matrixWorldInverse)
        },
        getViewport: function(t) {
            return this._viewports[t]
        },
        getFrameExtents: function() {
            return this._frameExtents
        },
        copy: function(t) {
            return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        toJSON: function() {
            var t = {};
            return 0 !== this.bias && (t.bias = this.bias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t
        }
    }), Ts.prototype = Object.assign(Object.create(Ss.prototype), {
        constructor: Ts,
        isSpotLightShadow: !0,
        updateMatrices: function(t) {
            var e = this.camera,
                n = 2 * s.RAD2DEG * t.angle,
                i = this.mapSize.width / this.mapSize.height,
                r = t.distance || e.far;
            n === e.fov && i === e.aspect && r === e.far || (e.fov = n, e.aspect = i, e.far = r, e.updateProjectionMatrix()), Ss.prototype.updateMatrices.call(this, t)
        }
    }), Es.prototype = Object.assign(Object.create(ws.prototype), {
        constructor: Es,
        isSpotLight: !0,
        copy: function(t) {
            return ws.prototype.copy.call(this, t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
        }
    }), As.prototype = Object.assign(Object.create(Ss.prototype), {
        constructor: As,
        isPointLightShadow: !0,
        updateMatrices: function(t, e) {
            void 0 === e && (e = 0);
            var n = this.camera,
                i = this.matrix,
                r = this._lightPositionWorld,
                a = this._lookTarget,
                o = this._projScreenMatrix;
            r.setFromMatrixPosition(t.matrixWorld), n.position.copy(r), a.copy(n.position), a.add(this._cubeDirections[e]), n.up.copy(this._cubeUps[e]), n.lookAt(a), n.updateMatrixWorld(), i.makeTranslation(-r.x, -r.y, -r.z), o.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(o)
        }
    }), Ls.prototype = Object.assign(Object.create(ws.prototype), {
        constructor: Ls,
        isPointLight: !0,
        copy: function(t) {
            return ws.prototype.copy.call(this, t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this
        }
    }), Rs.prototype = Object.assign(Object.create(He.prototype), {
        constructor: Rs,
        isOrthographicCamera: !0,
        copy: function(t, e) {
            return He.prototype.copy.call(this, t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this
        },
        setViewOffset: function(t, e, n, i, r, a) {
            null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            var t = (this.right - this.left) / (2 * this.zoom),
                e = (this.top - this.bottom) / (2 * this.zoom),
                n = (this.right + this.left) / 2,
                i = (this.top + this.bottom) / 2,
                r = n - t,
                a = n + t,
                o = i + e,
                s = i - e;
            if (null !== this.view && this.view.enabled) {
                var c = (this.right - this.left) / this.view.fullWidth / this.zoom,
                    l = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
                a = (r += c * this.view.offsetX) + c * this.view.width, s = (o -= l * this.view.offsetY) - l * this.view.height
            }
            this.projectionMatrix.makeOrthographic(r, a, o, s, this.near, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix)
        },
        toJSON: function(t) {
            var e = W.prototype.toJSON.call(this, t);
            return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e
        }
    }), Ps.prototype = Object.assign(Object.create(Ss.prototype), {
        constructor: Ps,
        isDirectionalLightShadow: !0,
        updateMatrices: function(t) {
            Ss.prototype.updateMatrices.call(this, t)
        }
    }), Cs.prototype = Object.assign(Object.create(ws.prototype), {
        constructor: Cs,
        isDirectionalLight: !0,
        copy: function(t) {
            return ws.prototype.copy.call(this, t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
        }
    }), Os.prototype = Object.assign(Object.create(ws.prototype), {
        constructor: Os,
        isAmbientLight: !0
    }), Ds.prototype = Object.assign(Object.create(ws.prototype), {
        constructor: Ds,
        isRectAreaLight: !0,
        copy: function(t) {
            return ws.prototype.copy.call(this, t), this.width = t.width, this.height = t.height, this
        },
        toJSON: function(t) {
            var e = ws.prototype.toJSON.call(this, t);
            return e.object.width = this.width, e.object.height = this.height, e
        }
    }), Ns.prototype = Object.assign(Object.create(jo.prototype), {
        constructor: Ns,
        load: function(t, e, n, i) {
            var r = this,
                a = new qo(r.manager);
            a.setPath(r.path), a.load(t, (function(t) {
                e(r.parse(JSON.parse(t)))
            }), n, i)
        },
        parse: function(t) {
            var e = this.textures;

            function n(t) {
                return void 0 === e[t] && console.warn("THREE.MaterialLoader: Undefined texture", t), e[t]
            }
            var i = new To[t.type];
            if (void 0 !== t.uuid && (i.uuid = t.uuid), void 0 !== t.name && (i.name = t.name), void 0 !== t.color && i.color.setHex(t.color), void 0 !== t.roughness && (i.roughness = t.roughness), void 0 !== t.metalness && (i.metalness = t.metalness), void 0 !== t.sheen && (i.sheen = (new zt).setHex(t.sheen)), void 0 !== t.emissive && i.emissive.setHex(t.emissive), void 0 !== t.specular && i.specular.setHex(t.specular), void 0 !== t.shininess && (i.shininess = t.shininess), void 0 !== t.clearcoat && (i.clearcoat = t.clearcoat), void 0 !== t.clearcoatRoughness && (i.clearcoatRoughness = t.clearcoatRoughness), void 0 !== t.fog && (i.fog = t.fog), void 0 !== t.flatShading && (i.flatShading = t.flatShading), void 0 !== t.blending && (i.blending = t.blending), void 0 !== t.combine && (i.combine = t.combine), void 0 !== t.side && (i.side = t.side), void 0 !== t.opacity && (i.opacity = t.opacity), void 0 !== t.transparent && (i.transparent = t.transparent), void 0 !== t.alphaTest && (i.alphaTest = t.alphaTest), void 0 !== t.depthTest && (i.depthTest = t.depthTest), void 0 !== t.depthWrite && (i.depthWrite = t.depthWrite), void 0 !== t.colorWrite && (i.colorWrite = t.colorWrite), void 0 !== t.stencilWrite && (i.stencilWrite = t.stencilWrite), void 0 !== t.stencilWriteMask && (i.stencilWriteMask = t.stencilWriteMask), void 0 !== t.stencilFunc && (i.stencilFunc = t.stencilFunc), void 0 !== t.stencilRef && (i.stencilRef = t.stencilRef), void 0 !== t.stencilFuncMask && (i.stencilFuncMask = t.stencilFuncMask), void 0 !== t.stencilFail && (i.stencilFail = t.stencilFail), void 0 !== t.stencilZFail && (i.stencilZFail = t.stencilZFail), void 0 !== t.stencilZPass && (i.stencilZPass = t.stencilZPass), void 0 !== t.wireframe && (i.wireframe = t.wireframe), void 0 !== t.wireframeLinewidth && (i.wireframeLinewidth = t.wireframeLinewidth), void 0 !== t.wireframeLinecap && (i.wireframeLinecap = t.wireframeLinecap), void 0 !== t.wireframeLinejoin && (i.wireframeLinejoin = t.wireframeLinejoin), void 0 !== t.rotation && (i.rotation = t.rotation), 1 !== t.linewidth && (i.linewidth = t.linewidth), void 0 !== t.dashSize && (i.dashSize = t.dashSize), void 0 !== t.gapSize && (i.gapSize = t.gapSize), void 0 !== t.scale && (i.scale = t.scale), void 0 !== t.polygonOffset && (i.polygonOffset = t.polygonOffset), void 0 !== t.polygonOffsetFactor && (i.polygonOffsetFactor = t.polygonOffsetFactor), void 0 !== t.polygonOffsetUnits && (i.polygonOffsetUnits = t.polygonOffsetUnits), void 0 !== t.skinning && (i.skinning = t.skinning), void 0 !== t.morphTargets && (i.morphTargets = t.morphTargets), void 0 !== t.morphNormals && (i.morphNormals = t.morphNormals), void 0 !== t.dithering && (i.dithering = t.dithering), void 0 !== t.vertexTangents && (i.vertexTangents = t.vertexTangents), void 0 !== t.visible && (i.visible = t.visible), void 0 !== t.toneMapped && (i.toneMapped = t.toneMapped), void 0 !== t.userData && (i.userData = t.userData), void 0 !== t.vertexColors && ("number" == typeof t.vertexColors ? i.vertexColors = t.vertexColors > 0 : i.vertexColors = t.vertexColors), void 0 !== t.uniforms)
                for (var r in t.uniforms) {
                    var a = t.uniforms[r];
                    switch (i.uniforms[r] = {}, a.type) {
                        case "t":
                            i.uniforms[r].value = n(a.value);
                            break;
                        case "c":
                            i.uniforms[r].value = (new zt).setHex(a.value);
                            break;
                        case "v2":
                            i.uniforms[r].value = (new c).fromArray(a.value);
                            break;
                        case "v3":
                            i.uniforms[r].value = (new x).fromArray(a.value);
                            break;
                        case "v4":
                            i.uniforms[r].value = (new d).fromArray(a.value);
                            break;
                        case "m3":
                            i.uniforms[r].value = (new l).fromArray(a.value);
                        case "m4":
                            i.uniforms[r].value = (new A).fromArray(a.value);
                            break;
                        default:
                            i.uniforms[r].value = a.value
                    }
                }
            if (void 0 !== t.defines && (i.defines = t.defines), void 0 !== t.vertexShader && (i.vertexShader = t.vertexShader), void 0 !== t.fragmentShader && (i.fragmentShader = t.fragmentShader), void 0 !== t.extensions)
                for (var o in t.extensions) i.extensions[o] = t.extensions[o];
            if (void 0 !== t.shading && (i.flatShading = 1 === t.shading), void 0 !== t.size && (i.size = t.size), void 0 !== t.sizeAttenuation && (i.sizeAttenuation = t.sizeAttenuation), void 0 !== t.map && (i.map = n(t.map)), void 0 !== t.matcap && (i.matcap = n(t.matcap)), void 0 !== t.alphaMap && (i.alphaMap = n(t.alphaMap)), void 0 !== t.bumpMap && (i.bumpMap = n(t.bumpMap)), void 0 !== t.bumpScale && (i.bumpScale = t.bumpScale), void 0 !== t.normalMap && (i.normalMap = n(t.normalMap)), void 0 !== t.normalMapType && (i.normalMapType = t.normalMapType), void 0 !== t.normalScale) {
                var s = t.normalScale;
                !1 === Array.isArray(s) && (s = [s, s]), i.normalScale = (new c).fromArray(s)
            }
            return void 0 !== t.displacementMap && (i.displacementMap = n(t.displacementMap)), void 0 !== t.displacementScale && (i.displacementScale = t.displacementScale), void 0 !== t.displacementBias && (i.displacementBias = t.displacementBias), void 0 !== t.roughnessMap && (i.roughnessMap = n(t.roughnessMap)), void 0 !== t.metalnessMap && (i.metalnessMap = n(t.metalnessMap)), void 0 !== t.emissiveMap && (i.emissiveMap = n(t.emissiveMap)), void 0 !== t.emissiveIntensity && (i.emissiveIntensity = t.emissiveIntensity), void 0 !== t.specularMap && (i.specularMap = n(t.specularMap)), void 0 !== t.envMap && (i.envMap = n(t.envMap)), void 0 !== t.envMapIntensity && (i.envMapIntensity = t.envMapIntensity), void 0 !== t.reflectivity && (i.reflectivity = t.reflectivity), void 0 !== t.refractionRatio && (i.refractionRatio = t.refractionRatio), void 0 !== t.lightMap && (i.lightMap = n(t.lightMap)), void 0 !== t.lightMapIntensity && (i.lightMapIntensity = t.lightMapIntensity), void 0 !== t.aoMap && (i.aoMap = n(t.aoMap)), void 0 !== t.aoMapIntensity && (i.aoMapIntensity = t.aoMapIntensity), void 0 !== t.gradientMap && (i.gradientMap = n(t.gradientMap)), void 0 !== t.clearcoatMap && (i.clearcoatMap = n(t.clearcoatMap)), void 0 !== t.clearcoatRoughnessMap && (i.clearcoatRoughnessMap = n(t.clearcoatRoughnessMap)), void 0 !== t.clearcoatNormalMap && (i.clearcoatNormalMap = n(t.clearcoatNormalMap)), void 0 !== t.clearcoatNormalScale && (i.clearcoatNormalScale = (new c).fromArray(t.clearcoatNormalScale)), i
        },
        setTextures: function(t) {
            return this.textures = t, this
        }
    });
    var Is = function(t) {
        var e = t.lastIndexOf("/");
        return -1 === e ? "./" : t.substr(0, e + 1)
    };

    function zs() {
        he.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
    }

    function Us(t, e, n, i) {
        "number" == typeof n && (i = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), Wt.call(this, t, e, n), this.meshPerAttribute = i || 1
    }

    function Bs(t) {
        jo.call(this, t)
    }
    zs.prototype = Object.assign(Object.create(he.prototype), {
        constructor: zs,
        isInstancedBufferGeometry: !0,
        copy: function(t) {
            return he.prototype.copy.call(this, t), this.maxInstancedCount = t.maxInstancedCount, this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        toJSON: function() {
            var t = he.prototype.toJSON.call(this);
            return t.maxInstancedCount = this.maxInstancedCount, t.isInstancedBufferGeometry = !0, t
        }
    }), Us.prototype = Object.assign(Object.create(Wt.prototype), {
        constructor: Us,
        isInstancedBufferAttribute: !0,
        copy: function(t) {
            return Wt.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
        },
        toJSON: function() {
            var t = Wt.prototype.toJSON.call(this);
            return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = !0, t
        }
    }), Bs.prototype = Object.assign(Object.create(jo.prototype), {
        constructor: Bs,
        load: function(t, e, n, i) {
            var r = this,
                a = new qo(r.manager);
            a.setPath(r.path), a.load(t, (function(t) {
                e(r.parse(JSON.parse(t)))
            }), n, i)
        },
        parse: function(t) {
            var e = t.isInstancedBufferGeometry ? new zs : new he,
                n = t.data.index;
            if (void 0 !== n) {
                var i = new Fs[n.type](n.array);
                e.setIndex(new Wt(i, 1))
            }
            var r = t.data.attributes;
            for (var a in r) {
                var o = r[a],
                    s = (i = new Fs[o.type](o.array), new(o.isInstancedBufferAttribute ? Us : Wt)(i, o.itemSize, o.normalized));
                void 0 !== o.name && (s.name = o.name), e.setAttribute(a, s)
            }
            var c = t.data.morphAttributes;
            if (c)
                for (var a in c) {
                    for (var l = c[a], h = [], u = 0, p = l.length; u < p; u++) {
                        o = l[u], s = new Wt(i = new Fs[o.type](o.array), o.itemSize, o.normalized);
                        void 0 !== o.name && (s.name = o.name), h.push(s)
                    }
                    e.morphAttributes[a] = h
                }
            t.data.morphTargetsRelative && (e.morphTargetsRelative = !0);
            var d = t.data.groups || t.data.drawcalls || t.data.offsets;
            if (void 0 !== d) {
                u = 0;
                for (var f = d.length; u !== f; ++u) {
                    var m = d[u];
                    e.addGroup(m.start, m.count, m.materialIndex)
                }
            }
            var g = t.data.boundingSphere;
            if (void 0 !== g) {
                var v = new x;
                void 0 !== g.center && v.fromArray(g.center), e.boundingSphere = new lt(v, g.radius)
            }
            return t.name && (e.name = t.name), t.userData && (e.userData = t.userData), e
        }
    });
    var Fs = {
        Int8Array: Int8Array,
        Uint8Array: Uint8Array,
        Uint8ClampedArray: "undefined" != typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
        Int16Array: Int16Array,
        Uint16Array: Uint16Array,
        Int32Array: Int32Array,
        Uint32Array: Uint32Array,
        Float32Array: Float32Array,
        Float64Array: Float64Array
    };

    function Gs(t) {
        jo.call(this, t)
    }
    Gs.prototype = Object.assign(Object.create(jo.prototype), {
        constructor: Gs,
        load: function(t, e, n, i) {
            var r = this,
                a = "" === this.path ? Is(t) : this.path;
            this.resourcePath = this.resourcePath || a;
            var o = new qo(r.manager);
            o.setPath(this.path), o.load(t, (function(n) {
                var a = null;
                try {
                    a = JSON.parse(n)
                } catch (e) {
                    return void 0 !== i && i(e), void console.error("THREE:ObjectLoader: Can't parse " + t + ".", e.message)
                }
                var o = a.metadata;
                void 0 !== o && void 0 !== o.type && "geometry" !== o.type.toLowerCase() ? r.parse(a, e) : console.error("THREE.ObjectLoader: Can't load " + t)
            }), n, i)
        },
        parse: function(t, e) {
            var n = this.parseShape(t.shapes),
                i = this.parseGeometries(t.geometries, n),
                r = this.parseImages(t.images, (function() {
                    void 0 !== e && e(s)
                })),
                a = this.parseTextures(t.textures, r),
                o = this.parseMaterials(t.materials, a),
                s = this.parseObject(t.object, i, o);
            return t.animations && (s.animations = this.parseAnimations(t.animations)), void 0 !== t.images && 0 !== t.images.length || void 0 !== e && e(s), s
        },
        parseShape: function(t) {
            var e = {};
            if (void 0 !== t)
                for (var n = 0, i = t.length; n < i; n++) {
                    var r = (new _s).fromJSON(t[n]);
                    e[r.uuid] = r
                }
            return e
        },
        parseGeometries: function(t, e) {
            var n = {};
            if (void 0 !== t)
                for (var i = new Bs, r = 0, a = t.length; r < a; r++) {
                    var o, s = t[r];
                    switch (s.type) {
                        case "PlaneGeometry":
                        case "PlaneBufferGeometry":
                            o = new fo[s.type](s.width, s.height, s.widthSegments, s.heightSegments);
                            break;
                        case "BoxGeometry":
                        case "BoxBufferGeometry":
                        case "CubeGeometry":
                            o = new fo[s.type](s.width, s.height, s.depth, s.widthSegments, s.heightSegments, s.depthSegments);
                            break;
                        case "CircleGeometry":
                        case "CircleBufferGeometry":
                            o = new fo[s.type](s.radius, s.segments, s.thetaStart, s.thetaLength);
                            break;
                        case "CylinderGeometry":
                        case "CylinderBufferGeometry":
                            o = new fo[s.type](s.radiusTop, s.radiusBottom, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
                            break;
                        case "ConeGeometry":
                        case "ConeBufferGeometry":
                            o = new fo[s.type](s.radius, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
                            break;
                        case "SphereGeometry":
                        case "SphereBufferGeometry":
                            o = new fo[s.type](s.radius, s.widthSegments, s.heightSegments, s.phiStart, s.phiLength, s.thetaStart, s.thetaLength);
                            break;
                        case "DodecahedronGeometry":
                        case "DodecahedronBufferGeometry":
                        case "IcosahedronGeometry":
                        case "IcosahedronBufferGeometry":
                        case "OctahedronGeometry":
                        case "OctahedronBufferGeometry":
                        case "TetrahedronGeometry":
                        case "TetrahedronBufferGeometry":
                            o = new fo[s.type](s.radius, s.detail);
                            break;
                        case "RingGeometry":
                        case "RingBufferGeometry":
                            o = new fo[s.type](s.innerRadius, s.outerRadius, s.thetaSegments, s.phiSegments, s.thetaStart, s.thetaLength);
                            break;
                        case "TorusGeometry":
                        case "TorusBufferGeometry":
                            o = new fo[s.type](s.radius, s.tube, s.radialSegments, s.tubularSegments, s.arc);
                            break;
                        case "TorusKnotGeometry":
                        case "TorusKnotBufferGeometry":
                            o = new fo[s.type](s.radius, s.tube, s.tubularSegments, s.radialSegments, s.p, s.q);
                            break;
                        case "TubeGeometry":
                        case "TubeBufferGeometry":
                            o = new fo[s.type]((new ys[s.path.type]).fromJSON(s.path), s.tubularSegments, s.radius, s.radialSegments, s.closed);
                            break;
                        case "LatheGeometry":
                        case "LatheBufferGeometry":
                            o = new fo[s.type](s.points, s.segments, s.phiStart, s.phiLength);
                            break;
                        case "PolyhedronGeometry":
                        case "PolyhedronBufferGeometry":
                            o = new fo[s.type](s.vertices, s.indices, s.radius, s.details);
                            break;
                        case "ShapeGeometry":
                        case "ShapeBufferGeometry":
                            for (var c = [], l = 0, h = s.shapes.length; l < h; l++) {
                                var u = e[s.shapes[l]];
                                c.push(u)
                            }
                            o = new fo[s.type](c, s.curveSegments);
                            break;
                        case "ExtrudeGeometry":
                        case "ExtrudeBufferGeometry":
                            for (c = [], l = 0, h = s.shapes.length; l < h; l++) {
                                u = e[s.shapes[l]];
                                c.push(u)
                            }
                            var p = s.options.extrudePath;
                            void 0 !== p && (s.options.extrudePath = (new ys[p.type]).fromJSON(p)), o = new fo[s.type](c, s.options);
                            break;
                        case "BufferGeometry":
                        case "InstancedBufferGeometry":
                            o = i.parse(s);
                            break;
                        case "Geometry":
                            console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');
                            break;
                        default:
                            console.warn('THREE.ObjectLoader: Unsupported geometry type "' + s.type + '"');
                            continue
                    }
                    o.uuid = s.uuid, void 0 !== s.name && (o.name = s.name), !0 === o.isBufferGeometry && void 0 !== s.userData && (o.userData = s.userData), n[s.uuid] = o
                }
            return n
        },
        parseMaterials: function(t, e) {
            var n = {},
                i = {};
            if (void 0 !== t) {
                var r = new Ns;
                r.setTextures(e);
                for (var a = 0, o = t.length; a < o; a++) {
                    var s = t[a];
                    if ("MultiMaterial" === s.type) {
                        for (var c = [], l = 0; l < s.materials.length; l++) {
                            var h = s.materials[l];
                            void 0 === n[h.uuid] && (n[h.uuid] = r.parse(h)), c.push(n[h.uuid])
                        }
                        i[s.uuid] = c
                    } else void 0 === n[s.uuid] && (n[s.uuid] = r.parse(s)), i[s.uuid] = n[s.uuid]
                }
            }
            return i
        },
        parseAnimations: function(t) {
            for (var e = [], n = 0; n < t.length; n++) {
                var i = t[n],
                    r = Fo.parse(i);
                void 0 !== i.uuid && (r.uuid = i.uuid), e.push(r)
            }
            return e
        },
        parseImages: function(t, e) {
            var n = this,
                i = {};

            function r(t) {
                return n.manager.itemStart(t), a.load(t, (function() {
                    n.manager.itemEnd(t)
                }), void 0, (function() {
                    n.manager.itemError(t), n.manager.itemEnd(t)
                }))
            }
            if (void 0 !== t && t.length > 0) {
                var a = new Jo(new Vo(e));
                a.setCrossOrigin(this.crossOrigin);
                for (var o = 0, s = t.length; o < s; o++) {
                    var c = t[o],
                        l = c.url;
                    if (Array.isArray(l)) {
                        i[c.uuid] = [];
                        for (var h = 0, u = l.length; h < u; h++) {
                            var p = l[h],
                                d = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(p) ? p : n.resourcePath + p;
                            i[c.uuid].push(r(d))
                        }
                    } else {
                        d = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(c.url) ? c.url : n.resourcePath + c.url;
                        i[c.uuid] = r(d)
                    }
                }
            }
            return i
        },
        parseTextures: function(t, e) {
            function n(t, e) {
                return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t), e[t])
            }
            var i = {};
            if (void 0 !== t)
                for (var r = 0, a = t.length; r < a; r++) {
                    var o, s = t[r];
                    void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid), void 0 === e[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image), (o = Array.isArray(e[s.image]) ? new fn(e[s.image]) : new p(e[s.image])).needsUpdate = !0, o.uuid = s.uuid, void 0 !== s.name && (o.name = s.name), void 0 !== s.mapping && (o.mapping = n(s.mapping, Vs)), void 0 !== s.offset && o.offset.fromArray(s.offset), void 0 !== s.repeat && o.repeat.fromArray(s.repeat), void 0 !== s.center && o.center.fromArray(s.center), void 0 !== s.rotation && (o.rotation = s.rotation), void 0 !== s.wrap && (o.wrapS = n(s.wrap[0], ks), o.wrapT = n(s.wrap[1], ks)), void 0 !== s.format && (o.format = s.format), void 0 !== s.type && (o.type = s.type), void 0 !== s.encoding && (o.encoding = s.encoding), void 0 !== s.minFilter && (o.minFilter = n(s.minFilter, js)), void 0 !== s.magFilter && (o.magFilter = n(s.magFilter, js)), void 0 !== s.anisotropy && (o.anisotropy = s.anisotropy), void 0 !== s.flipY && (o.flipY = s.flipY), void 0 !== s.premultiplyAlpha && (o.premultiplyAlpha = s.premultiplyAlpha), void 0 !== s.unpackAlignment && (o.unpackAlignment = s.unpackAlignment), i[s.uuid] = o
                }
            return i
        },
        parseObject: function(t, e, n) {
            var i;

            function r(t) {
                return void 0 === e[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t), e[t]
            }

            function a(t) {
                if (void 0 !== t) {
                    if (Array.isArray(t)) {
                        for (var e = [], i = 0, r = t.length; i < r; i++) {
                            var a = t[i];
                            void 0 === n[a] && console.warn("THREE.ObjectLoader: Undefined material", a), e.push(n[a])
                        }
                        return e
                    }
                    return void 0 === n[t] && console.warn("THREE.ObjectLoader: Undefined material", t), n[t]
                }
            }
            switch (t.type) {
                case "Scene":
                    i = new q, void 0 !== t.background && Number.isInteger(t.background) && (i.background = new zt(t.background)), void 0 !== t.fog && ("Fog" === t.fog.type ? i.fog = new tr(t.fog.color, t.fog.near, t.fog.far) : "FogExp2" === t.fog.type && (i.fog = new $i(t.fog.color, t.fog.density)));
                    break;
                case "PerspectiveCamera":
                    i = new Ve(t.fov, t.aspect, t.near, t.far), void 0 !== t.focus && (i.focus = t.focus), void 0 !== t.zoom && (i.zoom = t.zoom), void 0 !== t.filmGauge && (i.filmGauge = t.filmGauge), void 0 !== t.filmOffset && (i.filmOffset = t.filmOffset), void 0 !== t.view && (i.view = Object.assign({}, t.view));
                    break;
                case "OrthographicCamera":
                    i = new Rs(t.left, t.right, t.top, t.bottom, t.near, t.far), void 0 !== t.zoom && (i.zoom = t.zoom), void 0 !== t.view && (i.view = Object.assign({}, t.view));
                    break;
                case "AmbientLight":
                    i = new Os(t.color, t.intensity);
                    break;
                case "DirectionalLight":
                    i = new Cs(t.color, t.intensity);
                    break;
                case "PointLight":
                    i = new Ls(t.color, t.intensity, t.distance, t.decay);
                    break;
                case "RectAreaLight":
                    i = new Ds(t.color, t.intensity, t.width, t.height);
                    break;
                case "SpotLight":
                    i = new Es(t.color, t.intensity, t.distance, t.angle, t.penumbra, t.decay);
                    break;
                case "HemisphereLight":
                    i = new Ms(t.color, t.groundColor, t.intensity);
                    break;
                case "SkinnedMesh":
                    console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
                case "Mesh":
                    i = new Le(o = r(t.geometry), s = a(t.material));
                    break;
                case "InstancedMesh":
                    var o = r(t.geometry),
                        s = a(t.material),
                        c = t.count,
                        l = t.instanceMatrix;
                    (i = new Or(o, s, c)).instanceMatrix = new Wt(new Float32Array(l.array), 16);
                    break;
                case "LOD":
                    i = new wr;
                    break;
                case "Line":
                    i = new Fr(r(t.geometry), a(t.material), t.mode);
                    break;
                case "LineLoop":
                    i = new kr(r(t.geometry), a(t.material));
                    break;
                case "LineSegments":
                    i = new Vr(r(t.geometry), a(t.material));
                    break;
                case "PointCloud":
                case "Points":
                    i = new Zr(r(t.geometry), a(t.material));
                    break;
                case "Sprite":
                    i = new yr(a(t.material));
                    break;
                case "Group":
                    i = new Ji;
                    break;
                default:
                    i = new W
            }
            if (i.uuid = t.uuid, void 0 !== t.name && (i.name = t.name), void 0 !== t.matrix ? (i.matrix.fromArray(t.matrix), void 0 !== t.matrixAutoUpdate && (i.matrixAutoUpdate = t.matrixAutoUpdate), i.matrixAutoUpdate && i.matrix.decompose(i.position, i.quaternion, i.scale)) : (void 0 !== t.position && i.position.fromArray(t.position), void 0 !== t.rotation && i.rotation.fromArray(t.rotation), void 0 !== t.quaternion && i.quaternion.fromArray(t.quaternion), void 0 !== t.scale && i.scale.fromArray(t.scale)), void 0 !== t.castShadow && (i.castShadow = t.castShadow), void 0 !== t.receiveShadow && (i.receiveShadow = t.receiveShadow), t.shadow && (void 0 !== t.shadow.bias && (i.shadow.bias = t.shadow.bias), void 0 !== t.shadow.radius && (i.shadow.radius = t.shadow.radius), void 0 !== t.shadow.mapSize && i.shadow.mapSize.fromArray(t.shadow.mapSize), void 0 !== t.shadow.camera && (i.shadow.camera = this.parseObject(t.shadow.camera))), void 0 !== t.visible && (i.visible = t.visible), void 0 !== t.frustumCulled && (i.frustumCulled = t.frustumCulled), void 0 !== t.renderOrder && (i.renderOrder = t.renderOrder), void 0 !== t.userData && (i.userData = t.userData), void 0 !== t.layers && (i.layers.mask = t.layers), void 0 !== t.children)
                for (var h = t.children, u = 0; u < h.length; u++) i.add(this.parseObject(h[u], e, n));
            if ("LOD" === t.type) {
                void 0 !== t.autoUpdate && (i.autoUpdate = t.autoUpdate);
                for (var p = t.levels, d = 0; d < p.length; d++) {
                    var f = p[d],
                        m = i.getObjectByProperty("uuid", f.object);
                    void 0 !== m && i.addLevel(m, f.distance)
                }
            }
            return i
        }
    });
    var Hs, Vs = {
            UVMapping: 300,
            CubeReflectionMapping: 301,
            CubeRefractionMapping: 302,
            EquirectangularReflectionMapping: 303,
            EquirectangularRefractionMapping: 304,
            SphericalReflectionMapping: 305,
            CubeUVReflectionMapping: 306,
            CubeUVRefractionMapping: 307
        },
        ks = {
            RepeatWrapping: 1e3,
            ClampToEdgeWrapping: 1001,
            MirroredRepeatWrapping: 1002
        },
        js = {
            NearestFilter: 1003,
            NearestMipmapNearestFilter: 1004,
            NearestMipmapLinearFilter: 1005,
            LinearFilter: 1006,
            LinearMipmapNearestFilter: 1007,
            LinearMipmapLinearFilter: 1008
        };

    function Ws(t) {
        "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), jo.call(this, t), this.options = void 0
    }

    function qs() {
        this.type = "ShapePath", this.color = new zt, this.subPaths = [], this.currentPath = null
    }

    function Xs(t) {
        this.type = "Font", this.data = t
    }

    function Ys(t, e, n, i, r) {
        var a = r.glyphs[t] || r.glyphs["?"];
        if (a) {
            var o, s, c, l, h, u, p, d, f = new qs;
            if (a.o)
                for (var m = a._cachedOutline || (a._cachedOutline = a.o.split(" ")), g = 0, v = m.length; g < v;) {
                    switch (m[g++]) {
                        case "m":
                            o = m[g++] * e + n, s = m[g++] * e + i, f.moveTo(o, s);
                            break;
                        case "l":
                            o = m[g++] * e + n, s = m[g++] * e + i, f.lineTo(o, s);
                            break;
                        case "q":
                            c = m[g++] * e + n, l = m[g++] * e + i, h = m[g++] * e + n, u = m[g++] * e + i, f.quadraticCurveTo(h, u, c, l);
                            break;
                        case "b":
                            c = m[g++] * e + n, l = m[g++] * e + i, h = m[g++] * e + n, u = m[g++] * e + i, p = m[g++] * e + n, d = m[g++] * e + i, f.bezierCurveTo(h, u, p, d, c, l)
                    }
                }
            return {
                offsetX: a.ha * e,
                path: f
            }
        }
        console.error('THREE.Font: character "' + t + '" does not exists in font family ' + r.familyName + ".")
    }

    function Zs(t) {
        jo.call(this, t)
    }
    Ws.prototype = Object.assign(Object.create(jo.prototype), {
        constructor: Ws,
        setOptions: function(t) {
            return this.options = t, this
        },
        load: function(t, e, n, i) {
            void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
            var r = this,
                a = Ho.get(t);
            if (void 0 !== a) return r.manager.itemStart(t), setTimeout((function() {
                e && e(a), r.manager.itemEnd(t)
            }), 0), a;
            fetch(t).then((function(t) {
                return t.blob()
            })).then((function(t) {
                return void 0 === r.options ? createImageBitmap(t) : createImageBitmap(t, r.options)
            })).then((function(n) {
                Ho.add(t, n), e && e(n), r.manager.itemEnd(t)
            })).catch((function(e) {
                i && i(e), r.manager.itemError(t), r.manager.itemEnd(t)
            })), r.manager.itemStart(t)
        }
    }), Object.assign(qs.prototype, {
        moveTo: function(t, e) {
            return this.currentPath = new bs, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e), this
        },
        lineTo: function(t, e) {
            return this.currentPath.lineTo(t, e), this
        },
        quadraticCurveTo: function(t, e, n, i) {
            return this.currentPath.quadraticCurveTo(t, e, n, i), this
        },
        bezierCurveTo: function(t, e, n, i, r, a) {
            return this.currentPath.bezierCurveTo(t, e, n, i, r, a), this
        },
        splineThru: function(t) {
            return this.currentPath.splineThru(t), this
        },
        toShapes: function(t, e) {
            function n(t) {
                for (var e = [], n = 0, i = t.length; n < i; n++) {
                    var r = t[n],
                        a = new _s;
                    a.curves = r.curves, e.push(a)
                }
                return e
            }

            function i(t, e) {
                for (var n = e.length, i = !1, r = n - 1, a = 0; a < n; r = a++) {
                    var o = e[r],
                        s = e[a],
                        c = s.x - o.x,
                        l = s.y - o.y;
                    if (Math.abs(l) > Number.EPSILON) {
                        if (l < 0 && (o = e[a], c = -c, s = e[r], l = -l), t.y < o.y || t.y > s.y) continue;
                        if (t.y === o.y) {
                            if (t.x === o.x) return !0
                        } else {
                            var h = l * (t.x - o.x) - c * (t.y - o.y);
                            if (0 === h) return !0;
                            if (h < 0) continue;
                            i = !i
                        }
                    } else {
                        if (t.y !== o.y) continue;
                        if (s.x <= t.x && t.x <= o.x || o.x <= t.x && t.x <= s.x) return !0
                    }
                }
                return i
            }
            var r = Va.isClockWise,
                a = this.subPaths;
            if (0 === a.length) return [];
            if (!0 === e) return n(a);
            var o, s, c, l = [];
            if (1 === a.length) return s = a[0], (c = new _s).curves = s.curves, l.push(c), l;
            var h = !r(a[0].getPoints());
            h = t ? !h : h;
            var u, p, d = [],
                f = [],
                m = [],
                g = 0;
            f[g] = void 0, m[g] = [];
            for (var v = 0, y = a.length; v < y; v++) o = r(u = (s = a[v]).getPoints()), (o = t ? !o : o) ? (!h && f[g] && g++, f[g] = {
                s: new _s,
                p: u
            }, f[g].s.curves = s.curves, h && g++, m[g] = []) : m[g].push({
                h: s,
                p: u[0]
            });
            if (!f[0]) return n(a);
            if (f.length > 1) {
                for (var x = !1, b = [], _ = 0, w = f.length; _ < w; _++) d[_] = [];
                for (_ = 0, w = f.length; _ < w; _++)
                    for (var M = m[_], S = 0; S < M.length; S++) {
                        for (var T = M[S], E = !0, A = 0; A < f.length; A++) i(T.p, f[A].p) && (_ !== A && b.push({
                            froms: _,
                            tos: A,
                            hole: S
                        }), E ? (E = !1, d[A].push(T)) : x = !0);
                        E && d[_].push(T)
                    }
                b.length > 0 && (x || (m = d))
            }
            v = 0;
            for (var L = f.length; v < L; v++) {
                c = f[v].s, l.push(c);
                for (var R = 0, P = (p = m[v]).length; R < P; R++) c.holes.push(p[R].h)
            }
            return l
        }
    }), Object.assign(Xs.prototype, {
        isFont: !0,
        generateShapes: function(t, e) {
            void 0 === e && (e = 100);
            for (var n = [], i = function(t, e, n) {
                    for (var i = Array.from ? Array.from(t) : String(t).split(""), r = e / n.resolution, a = (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) * r, o = [], s = 0, c = 0, l = 0; l < i.length; l++) {
                        var h = i[l];
                        if ("\n" === h) s = 0, c -= a;
                        else {
                            var u = Ys(h, r, s, c, n);
                            s += u.offsetX, o.push(u.path)
                        }
                    }
                    return o
                }(t, e, this.data), r = 0, a = i.length; r < a; r++) Array.prototype.push.apply(n, i[r].toShapes());
            return n
        }
    }), Zs.prototype = Object.assign(Object.create(jo.prototype), {
        constructor: Zs,
        load: function(t, e, n, i) {
            var r = this,
                a = new qo(this.manager);
            a.setPath(this.path), a.load(t, (function(t) {
                var n;
                try {
                    n = JSON.parse(t)
                } catch (e) {
                    console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), n = JSON.parse(t.substring(65, t.length - 2))
                }
                var i = r.parse(n);
                e && e(i)
            }), n, i)
        },
        parse: function(t) {
            return new Xs(t)
        }
    });
    var Js = function() {
        return void 0 === Hs && (Hs = new(window.AudioContext || window.webkitAudioContext)), Hs
    };

    function Qs(t) {
        jo.call(this, t)
    }

    function Ks() {
        this.coefficients = [];
        for (var t = 0; t < 9; t++) this.coefficients.push(new x)
    }

    function $s(t, e) {
        ws.call(this, void 0, e), this.sh = void 0 !== t ? t : new Ks
    }

    function tc(t, e, n) {
        $s.call(this, void 0, n);
        var i = (new zt).set(t),
            r = (new zt).set(e),
            a = new x(i.r, i.g, i.b),
            o = new x(r.r, r.g, r.b),
            s = Math.sqrt(Math.PI),
            c = s * Math.sqrt(.75);
        this.sh.coefficients[0].copy(a).add(o).multiplyScalar(s), this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)
    }

    function ec(t, e) {
        $s.call(this, void 0, e);
        var n = (new zt).set(t);
        this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI))
    }
    Qs.prototype = Object.assign(Object.create(jo.prototype), {
        constructor: Qs,
        load: function(t, e, n, i) {
            var r = new qo(this.manager);
            r.setResponseType("arraybuffer"), r.setPath(this.path), r.load(t, (function(t) {
                var n = t.slice(0);
                Js().decodeAudioData(n, (function(t) {
                    e(t)
                }))
            }), n, i)
        }
    }), Object.assign(Ks.prototype, {
        isSphericalHarmonics3: !0,
        set: function(t) {
            for (var e = 0; e < 9; e++) this.coefficients[e].copy(t[e]);
            return this
        },
        zero: function() {
            for (var t = 0; t < 9; t++) this.coefficients[t].set(0, 0, 0);
            return this
        },
        getAt: function(t, e) {
            var n = t.x,
                i = t.y,
                r = t.z,
                a = this.coefficients;
            return e.copy(a[0]).multiplyScalar(.282095), e.addScaledVector(a[1], .488603 * i), e.addScaledVector(a[2], .488603 * r), e.addScaledVector(a[3], .488603 * n), e.addScaledVector(a[4], n * i * 1.092548), e.addScaledVector(a[5], i * r * 1.092548), e.addScaledVector(a[6], .315392 * (3 * r * r - 1)), e.addScaledVector(a[7], n * r * 1.092548), e.addScaledVector(a[8], .546274 * (n * n - i * i)), e
        },
        getIrradianceAt: function(t, e) {
            var n = t.x,
                i = t.y,
                r = t.z,
                a = this.coefficients;
            return e.copy(a[0]).multiplyScalar(.886227), e.addScaledVector(a[1], 1.023328 * i), e.addScaledVector(a[2], 1.023328 * r), e.addScaledVector(a[3], 1.023328 * n), e.addScaledVector(a[4], .858086 * n * i), e.addScaledVector(a[5], .858086 * i * r), e.addScaledVector(a[6], .743125 * r * r - .247708), e.addScaledVector(a[7], .858086 * n * r), e.addScaledVector(a[8], .429043 * (n * n - i * i)), e
        },
        add: function(t) {
            for (var e = 0; e < 9; e++) this.coefficients[e].add(t.coefficients[e]);
            return this
        },
        addScaledSH: function(t, e) {
            for (var n = 0; n < 9; n++) this.coefficients[n].addScaledVector(t.coefficients[n], e);
            return this
        },
        scale: function(t) {
            for (var e = 0; e < 9; e++) this.coefficients[e].multiplyScalar(t);
            return this
        },
        lerp: function(t, e) {
            for (var n = 0; n < 9; n++) this.coefficients[n].lerp(t.coefficients[n], e);
            return this
        },
        equals: function(t) {
            for (var e = 0; e < 9; e++)
                if (!this.coefficients[e].equals(t.coefficients[e])) return !1;
            return !0
        },
        copy: function(t) {
            return this.set(t.coefficients)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        fromArray: function(t, e) {
            void 0 === e && (e = 0);
            for (var n = this.coefficients, i = 0; i < 9; i++) n[i].fromArray(t, e + 3 * i);
            return this
        },
        toArray: function(t, e) {
            void 0 === t && (t = []), void 0 === e && (e = 0);
            for (var n = this.coefficients, i = 0; i < 9; i++) n[i].toArray(t, e + 3 * i);
            return t
        }
    }), Object.assign(Ks, {
        getBasisAt: function(t, e) {
            var n = t.x,
                i = t.y,
                r = t.z;
            e[0] = .282095, e[1] = .488603 * i, e[2] = .488603 * r, e[3] = .488603 * n, e[4] = 1.092548 * n * i, e[5] = 1.092548 * i * r, e[6] = .315392 * (3 * r * r - 1), e[7] = 1.092548 * n * r, e[8] = .546274 * (n * n - i * i)
        }
    }), $s.prototype = Object.assign(Object.create(ws.prototype), {
        constructor: $s,
        isLightProbe: !0,
        copy: function(t) {
            return ws.prototype.copy.call(this, t), this.sh.copy(t.sh), this.intensity = t.intensity, this
        },
        toJSON: function(t) {
            return ws.prototype.toJSON.call(this, t)
        }
    }), tc.prototype = Object.assign(Object.create($s.prototype), {
        constructor: tc,
        isHemisphereLightProbe: !0,
        copy: function(t) {
            return $s.prototype.copy.call(this, t), this
        },
        toJSON: function(t) {
            return $s.prototype.toJSON.call(this, t)
        }
    }), ec.prototype = Object.assign(Object.create($s.prototype), {
        constructor: ec,
        isAmbientLightProbe: !0,
        copy: function(t) {
            return $s.prototype.copy.call(this, t), this
        },
        toJSON: function(t) {
            return $s.prototype.toJSON.call(this, t)
        }
    });
    var nc = new A,
        ic = new A;

    function rc(t) {
        this.autoStart = void 0 === t || t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
    }
    Object.assign(function() {
        this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new Ve, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new Ve, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
            focus: null,
            fov: null,
            aspect: null,
            near: null,
            far: null,
            zoom: null,
            eyeSep: null
        }
    }.prototype, {
        update: function(t) {
            var e = this._cache;
            if (e.focus !== t.focus || e.fov !== t.fov || e.aspect !== t.aspect * this.aspect || e.near !== t.near || e.far !== t.far || e.zoom !== t.zoom || e.eyeSep !== this.eyeSep) {
                e.focus = t.focus, e.fov = t.fov, e.aspect = t.aspect * this.aspect, e.near = t.near, e.far = t.far, e.zoom = t.zoom, e.eyeSep = this.eyeSep;
                var n, i, r = t.projectionMatrix.clone(),
                    a = e.eyeSep / 2,
                    o = a * e.near / e.focus,
                    c = e.near * Math.tan(s.DEG2RAD * e.fov * .5) / e.zoom;
                ic.elements[12] = -a, nc.elements[12] = a, n = -c * e.aspect + o, i = c * e.aspect + o, r.elements[0] = 2 * e.near / (i - n), r.elements[8] = (i + n) / (i - n), this.cameraL.projectionMatrix.copy(r), n = -c * e.aspect - o, i = c * e.aspect - o, r.elements[0] = 2 * e.near / (i - n), r.elements[8] = (i + n) / (i - n), this.cameraR.projectionMatrix.copy(r)
            }
            this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(ic), this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(nc)
        }
    }), Object.assign(rc.prototype, {
        start: function() {
            this.startTime = ("undefined" == typeof performance ? Date : performance).now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
        },
        stop: function() {
            this.getElapsedTime(), this.running = !1, this.autoStart = !1
        },
        getElapsedTime: function() {
            return this.getDelta(), this.elapsedTime
        },
        getDelta: function() {
            var t = 0;
            if (this.autoStart && !this.running) return this.start(), 0;
            if (this.running) {
                var e = ("undefined" == typeof performance ? Date : performance).now();
                t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t
            }
            return t
        }
    });
    var ac = new x,
        oc = new g,
        sc = new x,
        cc = new x;

    function lc() {
        W.call(this), this.type = "AudioListener", this.context = Js(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new rc
    }

    function hc(t) {
        W.call(this), this.type = "Audio", this.listener = t, this.context = t.context, this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this._startedAt = 0, this._pausedAt = 0, this.filters = []
    }
    lc.prototype = Object.assign(Object.create(W.prototype), {
        constructor: lc,
        getInput: function() {
            return this.gain
        },
        removeFilter: function() {
            return null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this
        },
        getFilter: function() {
            return this.filter
        },
        setFilter: function(t) {
            return null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this
        },
        getMasterVolume: function() {
            return this.gain.gain.value
        },
        setMasterVolume: function(t) {
            return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this
        },
        updateMatrixWorld: function(t) {
            W.prototype.updateMatrixWorld.call(this, t);
            var e = this.context.listener,
                n = this.up;
            if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(ac, oc, sc), cc.set(0, 0, -1).applyQuaternion(oc), e.positionX) {
                var i = this.context.currentTime + this.timeDelta;
                e.positionX.linearRampToValueAtTime(ac.x, i), e.positionY.linearRampToValueAtTime(ac.y, i), e.positionZ.linearRampToValueAtTime(ac.z, i), e.forwardX.linearRampToValueAtTime(cc.x, i), e.forwardY.linearRampToValueAtTime(cc.y, i), e.forwardZ.linearRampToValueAtTime(cc.z, i), e.upX.linearRampToValueAtTime(n.x, i), e.upY.linearRampToValueAtTime(n.y, i), e.upZ.linearRampToValueAtTime(n.z, i)
            } else e.setPosition(ac.x, ac.y, ac.z), e.setOrientation(cc.x, cc.y, cc.z, n.x, n.y, n.z)
        }
    }), hc.prototype = Object.assign(Object.create(W.prototype), {
        constructor: hc,
        getOutput: function() {
            return this.gain
        },
        setNodeSource: function(t) {
            return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this
        },
        setMediaElementSource: function(t) {
            return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t), this.connect(), this
        },
        setMediaStreamSource: function(t) {
            return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(t), this.connect(), this
        },
        setBuffer: function(t) {
            return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this
        },
        play: function(t) {
            if (void 0 === t && (t = 0), !0 !== this.isPlaying) {
                if (!1 !== this.hasPlaybackControl) {
                    this._startedAt = this.context.currentTime + t;
                    var e = this.context.createBufferSource();
                    return e.buffer = this.buffer, e.loop = this.loop, e.loopStart = this.loopStart, e.loopEnd = this.loopEnd, e.onended = this.onEnded.bind(this), e.start(this._startedAt, this._pausedAt + this.offset, this.duration), this.isPlaying = !0, this.source = e, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect()
                }
                console.warn("THREE.Audio: this Audio has no playback control.")
            } else console.warn("THREE.Audio: Audio is already playing.")
        },
        pause: function() {
            if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this._pausedAt += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        },
        stop: function() {
            if (!1 !== this.hasPlaybackControl) return this._pausedAt = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        },
        connect: function() {
            if (this.filters.length > 0) {
                this.source.connect(this.filters[0]);
                for (var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].connect(this.filters[t]);
                this.filters[this.filters.length - 1].connect(this.getOutput())
            } else this.source.connect(this.getOutput());
            return this
        },
        disconnect: function() {
            if (this.filters.length > 0) {
                this.source.disconnect(this.filters[0]);
                for (var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].disconnect(this.filters[t]);
                this.filters[this.filters.length - 1].disconnect(this.getOutput())
            } else this.source.disconnect(this.getOutput());
            return this
        },
        getFilters: function() {
            return this.filters
        },
        setFilters: function(t) {
            return t || (t = []), !0 === this.isPlaying ? (this.disconnect(), this.filters = t, this.connect()) : this.filters = t, this
        },
        setDetune: function(t) {
            if (this.detune = t, void 0 !== this.source.detune) return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this
        },
        getDetune: function() {
            return this.detune
        },
        getFilter: function() {
            return this.getFilters()[0]
        },
        setFilter: function(t) {
            return this.setFilters(t ? [t] : [])
        },
        setPlaybackRate: function(t) {
            if (!1 !== this.hasPlaybackControl) return this.playbackRate = t, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        },
        getPlaybackRate: function() {
            return this.playbackRate
        },
        onEnded: function() {
            this.isPlaying = !1
        },
        getLoop: function() {
            return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop
        },
        setLoop: function(t) {
            if (!1 !== this.hasPlaybackControl) return this.loop = t, !0 === this.isPlaying && (this.source.loop = this.loop), this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        },
        setLoopStart: function(t) {
            return this.loopStart = t, this
        },
        setLoopEnd: function(t) {
            return this.loopEnd = t, this
        },
        getVolume: function() {
            return this.gain.gain.value
        },
        setVolume: function(t) {
            return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this
        }
    });
    var uc = new x,
        pc = new g,
        dc = new x,
        fc = new x;

    function mc(t) {
        hc.call(this, t), this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain)
    }

    function gc(t, e) {
        this.analyser = t.context.createAnalyser(), this.analyser.fftSize = void 0 !== e ? e : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), t.getOutput().connect(this.analyser)
    }

    function vc(t, e, n) {
        this.binding = t, this.valueSize = n;
        var i, r = Float64Array;
        switch (e) {
            case "quaternion":
                i = this._slerp;
                break;
            case "string":
            case "bool":
                r = Array, i = this._select;
                break;
            default:
                i = this._lerp
        }
        this.buffer = new r(4 * n), this._mixBufferRegion = i, this.cumulativeWeight = 0, this.useCount = 0, this.referenceCount = 0
    }
    mc.prototype = Object.assign(Object.create(hc.prototype), {
        constructor: mc,
        getOutput: function() {
            return this.panner
        },
        getRefDistance: function() {
            return this.panner.refDistance
        },
        setRefDistance: function(t) {
            return this.panner.refDistance = t, this
        },
        getRolloffFactor: function() {
            return this.panner.rolloffFactor
        },
        setRolloffFactor: function(t) {
            return this.panner.rolloffFactor = t, this
        },
        getDistanceModel: function() {
            return this.panner.distanceModel
        },
        setDistanceModel: function(t) {
            return this.panner.distanceModel = t, this
        },
        getMaxDistance: function() {
            return this.panner.maxDistance
        },
        setMaxDistance: function(t) {
            return this.panner.maxDistance = t, this
        },
        setDirectionalCone: function(t, e, n) {
            return this.panner.coneInnerAngle = t, this.panner.coneOuterAngle = e, this.panner.coneOuterGain = n, this
        },
        updateMatrixWorld: function(t) {
            if (W.prototype.updateMatrixWorld.call(this, t), !0 !== this.hasPlaybackControl || !1 !== this.isPlaying) {
                this.matrixWorld.decompose(uc, pc, dc), fc.set(0, 0, 1).applyQuaternion(pc);
                var e = this.panner;
                if (e.positionX) {
                    var n = this.context.currentTime + this.listener.timeDelta;
                    e.positionX.linearRampToValueAtTime(uc.x, n), e.positionY.linearRampToValueAtTime(uc.y, n), e.positionZ.linearRampToValueAtTime(uc.z, n), e.orientationX.linearRampToValueAtTime(fc.x, n), e.orientationY.linearRampToValueAtTime(fc.y, n), e.orientationZ.linearRampToValueAtTime(fc.z, n)
                } else e.setPosition(uc.x, uc.y, uc.z), e.setOrientation(fc.x, fc.y, fc.z)
            }
        }
    }), Object.assign(gc.prototype, {
        getFrequencyData: function() {
            return this.analyser.getByteFrequencyData(this.data), this.data
        },
        getAverageFrequency: function() {
            for (var t = 0, e = this.getFrequencyData(), n = 0; n < e.length; n++) t += e[n];
            return t / e.length
        }
    }), Object.assign(vc.prototype, {
        accumulate: function(t, e) {
            var n = this.buffer,
                i = this.valueSize,
                r = t * i + i,
                a = this.cumulativeWeight;
            if (0 === a) {
                for (var o = 0; o !== i; ++o) n[r + o] = n[o];
                a = e
            } else {
                var s = e / (a += e);
                this._mixBufferRegion(n, r, 0, s, i)
            }
            this.cumulativeWeight = a
        },
        apply: function(t) {
            var e = this.valueSize,
                n = this.buffer,
                i = t * e + e,
                r = this.cumulativeWeight,
                a = this.binding;
            if (this.cumulativeWeight = 0, r < 1) {
                var o = 3 * e;
                this._mixBufferRegion(n, i, o, 1 - r, e)
            }
            for (var s = e, c = e + e; s !== c; ++s)
                if (n[s] !== n[s + e]) {
                    a.setValue(n, i);
                    break
                }
        },
        saveOriginalState: function() {
            var t = this.binding,
                e = this.buffer,
                n = this.valueSize,
                i = 3 * n;
            t.getValue(e, i);
            for (var r = n, a = i; r !== a; ++r) e[r] = e[i + r % n];
            this.cumulativeWeight = 0
        },
        restoreOriginalState: function() {
            var t = 3 * this.valueSize;
            this.binding.setValue(this.buffer, t)
        },
        _select: function(t, e, n, i, r) {
            if (i >= .5)
                for (var a = 0; a !== r; ++a) t[e + a] = t[n + a]
        },
        _slerp: function(t, e, n, i) {
            g.slerpFlat(t, e, t, e, t, n, i)
        },
        _lerp: function(t, e, n, i, r) {
            for (var a = 1 - i, o = 0; o !== r; ++o) {
                var s = e + o;
                t[s] = t[s] * a + t[n + o] * i
            }
        }
    });
    var yc = new RegExp("[\\[\\]\\.:\\/]", "g"),
        xc = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]",
        bc = /((?:WC+[\/:])*)/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
        _c = /(WCOD+)?/.source.replace("WCOD", xc),
        wc = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
        Mc = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
        Sc = new RegExp("^" + bc + _c + wc + Mc + "$"),
        Tc = ["material", "materials", "bones"];

    function Ec(t, e, n) {
        var i = n || Ac.parseTrackName(e);
        this._targetGroup = t, this._bindings = t.subscribe_(e, i)
    }

    function Ac(t, e, n) {
        this.path = e, this.parsedPath = n || Ac.parseTrackName(e), this.node = Ac.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t
    }

    function Lc(t, e, n) {
        this._mixer = t, this._clip = e, this._localRoot = n || null;
        for (var i = e.tracks, r = i.length, a = new Array(r), o = {
                endingStart: 2400,
                endingEnd: 2400
            }, s = 0; s !== r; ++s) {
            var c = i[s].createInterpolant(null);
            a[s] = c, c.settings = o
        }
        this._interpolantSettings = o, this._interpolants = a, this._propertyBindings = new Array(r), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
    }

    function Rc(t) {
        this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
    }

    function Pc(t) {
        "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."), t = arguments[1]), this.value = t
    }

    function Cc(t, e, n) {
        er.call(this, t, e), this.meshPerAttribute = n || 1
    }

    function Oc(t, e, n, i) {
        this.ray = new vt(t, e), this.near = n || 0, this.far = i || 1 / 0, this.camera = null, this.layers = new C, this.params = {
            Mesh: {},
            Line: {
                threshold: 1
            },
            LOD: {},
            Points: {
                threshold: 1
            },
            Sprite: {}
        }, Object.defineProperties(this.params, {
            PointCloud: {
                get: function() {
                    return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points
                }
            }
        })
    }

    function Dc(t, e) {
        return t.distance - e.distance
    }

    function Nc(t, e, n, i) {
        if (t.layers.test(e.layers) && t.raycast(e, n), !0 === i)
            for (var r = t.children, a = 0, o = r.length; a < o; a++) Nc(r[a], e, n, !0)
    }
    Object.assign(Ec.prototype, {
        getValue: function(t, e) {
            this.bind();
            var n = this._targetGroup.nCachedObjects_,
                i = this._bindings[n];
            void 0 !== i && i.getValue(t, e)
        },
        setValue: function(t, e) {
            for (var n = this._bindings, i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(t, e)
        },
        bind: function() {
            for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].bind()
        },
        unbind: function() {
            for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].unbind()
        }
    }), Object.assign(Ac, {
        Composite: Ec,
        create: function(t, e, n) {
            return t && t.isAnimationObjectGroup ? new Ac.Composite(t, e, n) : new Ac(t, e, n)
        },
        sanitizeNodeName: function(t) {
            return t.replace(/\s/g, "_").replace(yc, "")
        },
        parseTrackName: function(t) {
            var e = Sc.exec(t);
            if (!e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
            var n = {
                    nodeName: e[2],
                    objectName: e[3],
                    objectIndex: e[4],
                    propertyName: e[5],
                    propertyIndex: e[6]
                },
                i = n.nodeName && n.nodeName.lastIndexOf(".");
            if (void 0 !== i && -1 !== i) {
                var r = n.nodeName.substring(i + 1); - 1 !== Tc.indexOf(r) && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r)
            }
            if (null === n.propertyName || 0 === n.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
            return n
        },
        findNode: function(t, e) {
            if (!e || "" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t;
            if (t.skeleton) {
                var n = t.skeleton.getBoneByName(e);
                if (void 0 !== n) return n
            }
            if (t.children) {
                var i = function(t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            if (r.name === e || r.uuid === e) return r;
                            var a = i(r.children);
                            if (a) return a
                        }
                        return null
                    },
                    r = i(t.children);
                if (r) return r
            }
            return null
        }
    }), Object.assign(Ac.prototype, {
        _getValue_unavailable: function() {},
        _setValue_unavailable: function() {},
        BindingType: {
            Direct: 0,
            EntireArray: 1,
            ArrayElement: 2,
            HasFromToArray: 3
        },
        Versioning: {
            None: 0,
            NeedsUpdate: 1,
            MatrixWorldNeedsUpdate: 2
        },
        GetterByBindingType: [function(t, e) {
            t[e] = this.node[this.propertyName]
        }, function(t, e) {
            for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i) t[e++] = n[i]
        }, function(t, e) {
            t[e] = this.resolvedProperty[this.propertyIndex]
        }, function(t, e) {
            this.resolvedProperty.toArray(t, e)
        }],
        SetterByBindingTypeAndVersioning: [
            [function(t, e) {
                this.targetObject[this.propertyName] = t[e]
            }, function(t, e) {
                this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0
            }, function(t, e) {
                this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
            }],
            [function(t, e) {
                for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i) n[i] = t[e++]
            }, function(t, e) {
                for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
                this.targetObject.needsUpdate = !0
            }, function(t, e) {
                for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
                this.targetObject.matrixWorldNeedsUpdate = !0
            }],
            [function(t, e) {
                this.resolvedProperty[this.propertyIndex] = t[e]
            }, function(t, e) {
                this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0
            }, function(t, e) {
                this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
            }],
            [function(t, e) {
                this.resolvedProperty.fromArray(t, e)
            }, function(t, e) {
                this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0
            }, function(t, e) {
                this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0
            }]
        ],
        getValue: function(t, e) {
            this.bind(), this.getValue(t, e)
        },
        setValue: function(t, e) {
            this.bind(), this.setValue(t, e)
        },
        bind: function() {
            var t = this.node,
                e = this.parsedPath,
                n = e.objectName,
                i = e.propertyName,
                r = e.propertyIndex;
            if (t || (t = Ac.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, t) {
                if (n) {
                    var a = e.objectIndex;
                    switch (n) {
                        case "materials":
                            if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                            if (!t.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                            t = t.material.materials;
                            break;
                        case "bones":
                            if (!t.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                            t = t.skeleton.bones;
                            for (var o = 0; o < t.length; o++)
                                if (t[o].name === a) {
                                    a = o;
                                    break
                                } break;
                        default:
                            if (void 0 === t[n]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                            t = t[n]
                    }
                    if (void 0 !== a) {
                        if (void 0 === t[a]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
                        t = t[a]
                    }
                }
                var s = t[i];
                if (void 0 !== s) {
                    var c = this.Versioning.None;
                    this.targetObject = t, void 0 !== t.needsUpdate ? c = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (c = this.Versioning.MatrixWorldNeedsUpdate);
                    var l = this.BindingType.Direct;
                    if (void 0 !== r) {
                        if ("morphTargetInfluences" === i) {
                            if (!t.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                            if (t.geometry.isBufferGeometry) {
                                if (!t.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                                for (o = 0; o < this.node.geometry.morphAttributes.position.length; o++)
                                    if (t.geometry.morphAttributes.position[o].name === r) {
                                        r = o;
                                        break
                                    }
                            } else {
                                if (!t.geometry.morphTargets) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.", this);
                                for (o = 0; o < this.node.geometry.morphTargets.length; o++)
                                    if (t.geometry.morphTargets[o].name === r) {
                                        r = o;
                                        break
                                    }
                            }
                        }
                        l = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r
                    } else void 0 !== s.fromArray && void 0 !== s.toArray ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (l = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = i;
                    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][c]
                } else {
                    var h = e.nodeName;
                    console.error("THREE.PropertyBinding: Trying to update property for track: " + h + "." + i + " but it wasn't found.", t)
                }
            } else console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.")
        },
        unbind: function() {
            this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
        }
    }), Object.assign(Ac.prototype, {
        _getValue_unbound: Ac.prototype.getValue,
        _setValue_unbound: Ac.prototype.setValue
    }), Object.assign(function() {
        this.uuid = s.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
        var t = {};
        this._indicesByUUID = t;
        for (var e = 0, n = arguments.length; e !== n; ++e) t[arguments[e].uuid] = e;
        this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
        var i = this;
        this.stats = {
            objects: {
                get total() {
                    return i._objects.length
                },
                get inUse() {
                    return this.total - i.nCachedObjects_
                }
            },
            get bindingsPerObject() {
                return i._bindings.length
            }
        }
    }.prototype, {
        isAnimationObjectGroup: !0,
        add: function() {
            for (var t = this._objects, e = t.length, n = this.nCachedObjects_, i = this._indicesByUUID, r = this._paths, a = this._parsedPaths, o = this._bindings, s = o.length, c = void 0, l = 0, h = arguments.length; l !== h; ++l) {
                var u = arguments[l],
                    p = u.uuid,
                    d = i[p];
                if (void 0 === d) {
                    d = e++, i[p] = d, t.push(u);
                    for (var f = 0, m = s; f !== m; ++f) o[f].push(new Ac(u, r[f], a[f]))
                } else if (d < n) {
                    c = t[d];
                    var g = --n,
                        v = t[g];
                    i[v.uuid] = d, t[d] = v, i[p] = g, t[g] = u;
                    for (f = 0, m = s; f !== m; ++f) {
                        var y = o[f],
                            x = y[g],
                            b = y[d];
                        y[d] = x, void 0 === b && (b = new Ac(u, r[f], a[f])), y[g] = b
                    }
                } else t[d] !== c && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")
            }
            this.nCachedObjects_ = n
        },
        remove: function() {
            for (var t = this._objects, e = this.nCachedObjects_, n = this._indicesByUUID, i = this._bindings, r = i.length, a = 0, o = arguments.length; a !== o; ++a) {
                var s = arguments[a],
                    c = s.uuid,
                    l = n[c];
                if (void 0 !== l && l >= e) {
                    var h = e++,
                        u = t[h];
                    n[u.uuid] = l, t[l] = u, n[c] = h, t[h] = s;
                    for (var p = 0, d = r; p !== d; ++p) {
                        var f = i[p],
                            m = f[h],
                            g = f[l];
                        f[l] = m, f[h] = g
                    }
                }
            }
            this.nCachedObjects_ = e
        },
        uncache: function() {
            for (var t = this._objects, e = t.length, n = this.nCachedObjects_, i = this._indicesByUUID, r = this._bindings, a = r.length, o = 0, s = arguments.length; o !== s; ++o) {
                var c = arguments[o],
                    l = c.uuid,
                    h = i[l];
                if (void 0 !== h)
                    if (delete i[l], h < n) {
                        var u = --n,
                            p = t[u],
                            d = t[y = --e];
                        i[p.uuid] = h, t[h] = p, i[d.uuid] = u, t[u] = d, t.pop();
                        for (var f = 0, m = a; f !== m; ++f) {
                            var g = (x = r[f])[u],
                                v = x[y];
                            x[h] = g, x[u] = v, x.pop()
                        }
                    } else {
                        var y;
                        i[(d = t[y = --e]).uuid] = h, t[h] = d, t.pop();
                        for (f = 0, m = a; f !== m; ++f) {
                            var x;
                            (x = r[f])[h] = x[y], x.pop()
                        }
                    }
            }
            this.nCachedObjects_ = n
        },
        subscribe_: function(t, e) {
            var n = this._bindingsIndicesByPath,
                i = n[t],
                r = this._bindings;
            if (void 0 !== i) return r[i];
            var a = this._paths,
                o = this._parsedPaths,
                s = this._objects,
                c = s.length,
                l = this.nCachedObjects_,
                h = new Array(c);
            i = r.length, n[t] = i, a.push(t), o.push(e), r.push(h);
            for (var u = l, p = s.length; u !== p; ++u) {
                var d = s[u];
                h[u] = new Ac(d, t, e)
            }
            return h
        },
        unsubscribe_: function(t) {
            var e = this._bindingsIndicesByPath,
                n = e[t];
            if (void 0 !== n) {
                var i = this._paths,
                    r = this._parsedPaths,
                    a = this._bindings,
                    o = a.length - 1,
                    s = a[o];
                e[t[o]] = n, a[n] = s, a.pop(), r[n] = r[o], r.pop(), i[n] = i[o], i.pop()
            }
        }
    }), Object.assign(Lc.prototype, {
        play: function() {
            return this._mixer._activateAction(this), this
        },
        stop: function() {
            return this._mixer._deactivateAction(this), this.reset()
        },
        reset: function() {
            return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
        },
        isRunning: function() {
            return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
        },
        isScheduled: function() {
            return this._mixer._isActiveAction(this)
        },
        startAt: function(t) {
            return this._startTime = t, this
        },
        setLoop: function(t, e) {
            return this.loop = t, this.repetitions = e, this
        },
        setEffectiveWeight: function(t) {
            return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading()
        },
        getEffectiveWeight: function() {
            return this._effectiveWeight
        },
        fadeIn: function(t) {
            return this._scheduleFading(t, 0, 1)
        },
        fadeOut: function(t) {
            return this._scheduleFading(t, 1, 0)
        },
        crossFadeFrom: function(t, e, n) {
            if (t.fadeOut(e), this.fadeIn(e), n) {
                var i = this._clip.duration,
                    r = t._clip.duration,
                    a = r / i,
                    o = i / r;
                t.warp(1, a, e), this.warp(o, 1, e)
            }
            return this
        },
        crossFadeTo: function(t, e, n) {
            return t.crossFadeFrom(this, e, n)
        },
        stopFading: function() {
            var t = this._weightInterpolant;
            return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
        },
        setEffectiveTimeScale: function(t) {
            return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping()
        },
        getEffectiveTimeScale: function() {
            return this._effectiveTimeScale
        },
        setDuration: function(t) {
            return this.timeScale = this._clip.duration / t, this.stopWarping()
        },
        syncWith: function(t) {
            return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping()
        },
        halt: function(t) {
            return this.warp(this._effectiveTimeScale, 0, t)
        },
        warp: function(t, e, n) {
            var i = this._mixer,
                r = i.time,
                a = this._timeScaleInterpolant,
                o = this.timeScale;
            null === a && (a = i._lendControlInterpolant(), this._timeScaleInterpolant = a);
            var s = a.parameterPositions,
                c = a.sampleValues;
            return s[0] = r, s[1] = r + n, c[0] = t / o, c[1] = e / o, this
        },
        stopWarping: function() {
            var t = this._timeScaleInterpolant;
            return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
        },
        getMixer: function() {
            return this._mixer
        },
        getClip: function() {
            return this._clip
        },
        getRoot: function() {
            return this._localRoot || this._mixer._root
        },
        _update: function(t, e, n, i) {
            if (this.enabled) {
                var r = this._startTime;
                if (null !== r) {
                    var a = (t - r) * n;
                    if (a < 0 || 0 === n) return;
                    this._startTime = null, e = n * a
                }
                e *= this._updateTimeScale(t);
                var o = this._updateTime(e),
                    s = this._updateWeight(t);
                if (s > 0)
                    for (var c = this._interpolants, l = this._propertyBindings, h = 0, u = c.length; h !== u; ++h) c[h].evaluate(o), l[h].accumulate(i, s)
            } else this._updateWeight(t)
        },
        _updateWeight: function(t) {
            var e = 0;
            if (this.enabled) {
                e = this.weight;
                var n = this._weightInterpolant;
                if (null !== n) {
                    var i = n.evaluate(t)[0];
                    e *= i, t > n.parameterPositions[1] && (this.stopFading(), 0 === i && (this.enabled = !1))
                }
            }
            return this._effectiveWeight = e, e
        },
        _updateTimeScale: function(t) {
            var e = 0;
            if (!this.paused) {
                e = this.timeScale;
                var n = this._timeScaleInterpolant;
                if (null !== n) e *= n.evaluate(t)[0], t > n.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e)
            }
            return this._effectiveTimeScale = e, e
        },
        _updateTime: function(t) {
            var e = this.time + t,
                n = this._clip.duration,
                i = this.loop,
                r = this._loopCount,
                a = 2202 === i;
            if (0 === t) return -1 === r ? e : a && 1 == (1 & r) ? n - e : e;
            if (2200 === i) {
                -1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
                t: {
                    if (e >= n) e = n;
                    else {
                        if (!(e < 0)) {
                            this.time = e;
                            break t
                        }
                        e = 0
                    }
                    this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                    this.time = e,
                    this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: t < 0 ? -1 : 1
                    })
                }
            } else {
                if (-1 === r && (t >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, a)) : this._setEndings(0 === this.repetitions, !0, a)), e >= n || e < 0) {
                    var o = Math.floor(e / n);
                    e -= n * o, r += Math.abs(o);
                    var s = this.repetitions - r;
                    if (s <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, e = t > 0 ? n : 0, this.time = e, this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: t > 0 ? 1 : -1
                    });
                    else {
                        if (1 === s) {
                            var c = t < 0;
                            this._setEndings(c, !c, a)
                        } else this._setEndings(!1, !1, a);
                        this._loopCount = r, this.time = e, this._mixer.dispatchEvent({
                            type: "loop",
                            action: this,
                            loopDelta: o
                        })
                    }
                } else this.time = e;
                if (a && 1 == (1 & r)) return n - e
            }
            return e
        },
        _setEndings: function(t, e, n) {
            var i = this._interpolantSettings;
            n ? (i.endingStart = 2401, i.endingEnd = 2401) : (i.endingStart = t ? this.zeroSlopeAtStart ? 2401 : 2400 : 2402, i.endingEnd = e ? this.zeroSlopeAtEnd ? 2401 : 2400 : 2402)
        },
        _scheduleFading: function(t, e, n) {
            var i = this._mixer,
                r = i.time,
                a = this._weightInterpolant;
            null === a && (a = i._lendControlInterpolant(), this._weightInterpolant = a);
            var o = a.parameterPositions,
                s = a.sampleValues;
            return o[0] = r, s[0] = e, o[1] = r + t, s[1] = n, this
        }
    }), Rc.prototype = Object.assign(Object.create(i.prototype), {
        constructor: Rc,
        _bindAction: function(t, e) {
            var n = t._localRoot || this._root,
                i = t._clip.tracks,
                r = i.length,
                a = t._propertyBindings,
                o = t._interpolants,
                s = n.uuid,
                c = this._bindingsByRootAndName,
                l = c[s];
            void 0 === l && (l = {}, c[s] = l);
            for (var h = 0; h !== r; ++h) {
                var u = i[h],
                    p = u.name,
                    d = l[p];
                if (void 0 !== d) a[h] = d;
                else {
                    if (void 0 !== (d = a[h])) {
                        null === d._cacheIndex && (++d.referenceCount, this._addInactiveBinding(d, s, p));
                        continue
                    }
                    var f = e && e._propertyBindings[h].binding.parsedPath;
                    ++(d = new vc(Ac.create(n, p, f), u.ValueTypeName, u.getValueSize())).referenceCount, this._addInactiveBinding(d, s, p), a[h] = d
                }
                o[h].resultBuffer = d.buffer
            }
        },
        _activateAction: function(t) {
            if (!this._isActiveAction(t)) {
                if (null === t._cacheIndex) {
                    var e = (t._localRoot || this._root).uuid,
                        n = t._clip.uuid,
                        i = this._actionsByClip[n];
                    this._bindAction(t, i && i.knownActions[0]), this._addInactiveAction(t, n, e)
                }
                for (var r = t._propertyBindings, a = 0, o = r.length; a !== o; ++a) {
                    var s = r[a];
                    0 == s.useCount++ && (this._lendBinding(s), s.saveOriginalState())
                }
                this._lendAction(t)
            }
        },
        _deactivateAction: function(t) {
            if (this._isActiveAction(t)) {
                for (var e = t._propertyBindings, n = 0, i = e.length; n !== i; ++n) {
                    var r = e[n];
                    0 == --r.useCount && (r.restoreOriginalState(), this._takeBackBinding(r))
                }
                this._takeBackAction(t)
            }
        },
        _initMemoryManager: function() {
            this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
            var t = this;
            this.stats = {
                actions: {
                    get total() {
                        return t._actions.length
                    },
                    get inUse() {
                        return t._nActiveActions
                    }
                },
                bindings: {
                    get total() {
                        return t._bindings.length
                    },
                    get inUse() {
                        return t._nActiveBindings
                    }
                },
                controlInterpolants: {
                    get total() {
                        return t._controlInterpolants.length
                    },
                    get inUse() {
                        return t._nActiveControlInterpolants
                    }
                }
            }
        },
        _isActiveAction: function(t) {
            var e = t._cacheIndex;
            return null !== e && e < this._nActiveActions
        },
        _addInactiveAction: function(t, e, n) {
            var i = this._actions,
                r = this._actionsByClip,
                a = r[e];
            if (void 0 === a) a = {
                knownActions: [t],
                actionByRoot: {}
            }, t._byClipCacheIndex = 0, r[e] = a;
            else {
                var o = a.knownActions;
                t._byClipCacheIndex = o.length, o.push(t)
            }
            t._cacheIndex = i.length, i.push(t), a.actionByRoot[n] = t
        },
        _removeInactiveAction: function(t) {
            var e = this._actions,
                n = e[e.length - 1],
                i = t._cacheIndex;
            n._cacheIndex = i, e[i] = n, e.pop(), t._cacheIndex = null;
            var r = t._clip.uuid,
                a = this._actionsByClip,
                o = a[r],
                s = o.knownActions,
                c = s[s.length - 1],
                l = t._byClipCacheIndex;
            c._byClipCacheIndex = l, s[l] = c, s.pop(), t._byClipCacheIndex = null, delete o.actionByRoot[(t._localRoot || this._root).uuid], 0 === s.length && delete a[r], this._removeInactiveBindingsForAction(t)
        },
        _removeInactiveBindingsForAction: function(t) {
            for (var e = t._propertyBindings, n = 0, i = e.length; n !== i; ++n) {
                var r = e[n];
                0 == --r.referenceCount && this._removeInactiveBinding(r)
            }
        },
        _lendAction: function(t) {
            var e = this._actions,
                n = t._cacheIndex,
                i = this._nActiveActions++,
                r = e[i];
            t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r
        },
        _takeBackAction: function(t) {
            var e = this._actions,
                n = t._cacheIndex,
                i = --this._nActiveActions,
                r = e[i];
            t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r
        },
        _addInactiveBinding: function(t, e, n) {
            var i = this._bindingsByRootAndName,
                r = i[e],
                a = this._bindings;
            void 0 === r && (r = {}, i[e] = r), r[n] = t, t._cacheIndex = a.length, a.push(t)
        },
        _removeInactiveBinding: function(t) {
            var e = this._bindings,
                n = t.binding,
                i = n.rootNode.uuid,
                r = n.path,
                a = this._bindingsByRootAndName,
                o = a[i],
                s = e[e.length - 1],
                c = t._cacheIndex;
            s._cacheIndex = c, e[c] = s, e.pop(), delete o[r], 0 === Object.keys(o).length && delete a[i]
        },
        _lendBinding: function(t) {
            var e = this._bindings,
                n = t._cacheIndex,
                i = this._nActiveBindings++,
                r = e[i];
            t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r
        },
        _takeBackBinding: function(t) {
            var e = this._bindings,
                n = t._cacheIndex,
                i = --this._nActiveBindings,
                r = e[i];
            t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r
        },
        _lendControlInterpolant: function() {
            var t = this._controlInterpolants,
                e = this._nActiveControlInterpolants++,
                n = t[e];
            return void 0 === n && ((n = new Ro(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer)).__cacheIndex = e, t[e] = n), n
        },
        _takeBackControlInterpolant: function(t) {
            var e = this._controlInterpolants,
                n = t.__cacheIndex,
                i = --this._nActiveControlInterpolants,
                r = e[i];
            t.__cacheIndex = i, e[i] = t, r.__cacheIndex = n, e[n] = r
        },
        _controlInterpolantsResultBuffer: new Float32Array(1),
        clipAction: function(t, e) {
            var n = e || this._root,
                i = n.uuid,
                r = "string" == typeof t ? Fo.findByName(n, t) : t,
                a = null !== r ? r.uuid : t,
                o = this._actionsByClip[a],
                s = null;
            if (void 0 !== o) {
                var c = o.actionByRoot[i];
                if (void 0 !== c) return c;
                s = o.knownActions[0], null === r && (r = s._clip)
            }
            if (null === r) return null;
            var l = new Lc(this, r, e);
            return this._bindAction(l, s), this._addInactiveAction(l, a, i), l
        },
        existingAction: function(t, e) {
            var n = e || this._root,
                i = n.uuid,
                r = "string" == typeof t ? Fo.findByName(n, t) : t,
                a = r ? r.uuid : t,
                o = this._actionsByClip[a];
            return void 0 !== o && o.actionByRoot[i] || null
        },
        stopAllAction: function() {
            var t = this._actions,
                e = this._nActiveActions,
                n = this._bindings,
                i = this._nActiveBindings;
            this._nActiveActions = 0, this._nActiveBindings = 0;
            for (var r = 0; r !== e; ++r) t[r].reset();
            for (r = 0; r !== i; ++r) n[r].useCount = 0;
            return this
        },
        update: function(t) {
            t *= this.timeScale;
            for (var e = this._actions, n = this._nActiveActions, i = this.time += t, r = Math.sign(t), a = this._accuIndex ^= 1, o = 0; o !== n; ++o) {
                e[o]._update(i, t, r, a)
            }
            var s = this._bindings,
                c = this._nActiveBindings;
            for (o = 0; o !== c; ++o) s[o].apply(a);
            return this
        },
        setTime: function(t) {
            this.time = 0;
            for (var e = 0; e < this._actions.length; e++) this._actions[e].time = 0;
            return this.update(t)
        },
        getRoot: function() {
            return this._root
        },
        uncacheClip: function(t) {
            var e = this._actions,
                n = t.uuid,
                i = this._actionsByClip,
                r = i[n];
            if (void 0 !== r) {
                for (var a = r.knownActions, o = 0, s = a.length; o !== s; ++o) {
                    var c = a[o];
                    this._deactivateAction(c);
                    var l = c._cacheIndex,
                        h = e[e.length - 1];
                    c._cacheIndex = null, c._byClipCacheIndex = null, h._cacheIndex = l, e[l] = h, e.pop(), this._removeInactiveBindingsForAction(c)
                }
                delete i[n]
            }
        },
        uncacheRoot: function(t) {
            var e = t.uuid,
                n = this._actionsByClip;
            for (var i in n) {
                var r = n[i].actionByRoot[e];
                void 0 !== r && (this._deactivateAction(r), this._removeInactiveAction(r))
            }
            var a = this._bindingsByRootAndName[e];
            if (void 0 !== a)
                for (var o in a) {
                    var s = a[o];
                    s.restoreOriginalState(), this._removeInactiveBinding(s)
                }
        },
        uncacheAction: function(t, e) {
            var n = this.existingAction(t, e);
            null !== n && (this._deactivateAction(n), this._removeInactiveAction(n))
        }
    }), Pc.prototype.clone = function() {
        return new Pc(void 0 === this.value.clone ? this.value : this.value.clone())
    }, Cc.prototype = Object.assign(Object.create(er.prototype), {
        constructor: Cc,
        isInstancedInterleavedBuffer: !0,
        copy: function(t) {
            return er.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
        }
    }), Object.assign(Oc.prototype, {
        set: function(t, e) {
            this.ray.set(t, e)
        },
        setFromCamera: function(t, e) {
            e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e && e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type.")
        },
        intersectObject: function(t, e, n) {
            var i = n || [];
            return Nc(t, this, i, e), i.sort(Dc), i
        },
        intersectObjects: function(t, e, n) {
            var i = n || [];
            if (!1 === Array.isArray(t)) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), i;
            for (var r = 0, a = t.length; r < a; r++) Nc(t[r], this, i, e);
            return i.sort(Dc), i
        }
    }), Object.assign(function(t, e, n) {
        return this.radius = void 0 !== t ? t : 1, this.phi = void 0 !== e ? e : 0, this.theta = void 0 !== n ? n : 0, this
    }.prototype, {
        set: function(t, e, n) {
            return this.radius = t, this.phi = e, this.theta = n, this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this
        },
        makeSafe: function() {
            return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this
        },
        setFromVector3: function(t) {
            return this.setFromCartesianCoords(t.x, t.y, t.z)
        },
        setFromCartesianCoords: function(t, e, n) {
            return this.radius = Math.sqrt(t * t + e * e + n * n), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(s.clamp(e / this.radius, -1, 1))), this
        }
    }), Object.assign(function(t, e, n) {
        return this.radius = void 0 !== t ? t : 1, this.theta = void 0 !== e ? e : 0, this.y = void 0 !== n ? n : 0, this
    }.prototype, {
        set: function(t, e, n) {
            return this.radius = t, this.theta = e, this.y = n, this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.radius = t.radius, this.theta = t.theta, this.y = t.y, this
        },
        setFromVector3: function(t) {
            return this.setFromCartesianCoords(t.x, t.y, t.z)
        },
        setFromCartesianCoords: function(t, e, n) {
            return this.radius = Math.sqrt(t * t + n * n), this.theta = Math.atan2(t, n), this.y = e, this
        }
    });
    var Ic = new c;

    function zc(t, e) {
        this.min = void 0 !== t ? t : new c(1 / 0, 1 / 0), this.max = void 0 !== e ? e : new c(-1 / 0, -1 / 0)
    }
    Object.assign(zc.prototype, {
        set: function(t, e) {
            return this.min.copy(t), this.max.copy(e), this
        },
        setFromPoints: function(t) {
            this.makeEmpty();
            for (var e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
            return this
        },
        setFromCenterAndSize: function(t, e) {
            var n = Ic.copy(e).multiplyScalar(.5);
            return this.min.copy(t).sub(n), this.max.copy(t).add(n), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.min.copy(t.min), this.max.copy(t.max), this
        },
        makeEmpty: function() {
            return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this
        },
        isEmpty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y
        },
        getCenter: function(t) {
            return void 0 === t && (console.warn("THREE.Box2: .getCenter() target is now required"), t = new c), this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        getSize: function(t) {
            return void 0 === t && (console.warn("THREE.Box2: .getSize() target is now required"), t = new c), this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min)
        },
        expandByPoint: function(t) {
            return this.min.min(t), this.max.max(t), this
        },
        expandByVector: function(t) {
            return this.min.sub(t), this.max.add(t), this
        },
        expandByScalar: function(t) {
            return this.min.addScalar(-t), this.max.addScalar(t), this
        },
        containsPoint: function(t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
        },
        containsBox: function(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
        },
        getParameter: function(t, e) {
            return void 0 === e && (console.warn("THREE.Box2: .getParameter() target is now required"), e = new c), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
        },
        intersectsBox: function(t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
        },
        clampPoint: function(t, e) {
            return void 0 === e && (console.warn("THREE.Box2: .clampPoint() target is now required"), e = new c), e.copy(t).clamp(this.min, this.max)
        },
        distanceToPoint: function(t) {
            return Ic.copy(t).clamp(this.min, this.max).sub(t).length()
        },
        intersect: function(t) {
            return this.min.max(t.min), this.max.min(t.max), this
        },
        union: function(t) {
            return this.min.min(t.min), this.max.max(t.max), this
        },
        translate: function(t) {
            return this.min.add(t), this.max.add(t), this
        },
        equals: function(t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
        }
    });
    var Uc = new x,
        Bc = new x;

    function Fc(t, e) {
        this.start = void 0 !== t ? t : new x, this.end = void 0 !== e ? e : new x
    }

    function Gc(t) {
        W.call(this), this.material = t, this.render = function() {}
    }
    Object.assign(Fc.prototype, {
        set: function(t, e) {
            return this.start.copy(t), this.end.copy(e), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.start.copy(t.start), this.end.copy(t.end), this
        },
        getCenter: function(t) {
            return void 0 === t && (console.warn("THREE.Line3: .getCenter() target is now required"), t = new x), t.addVectors(this.start, this.end).multiplyScalar(.5)
        },
        delta: function(t) {
            return void 0 === t && (console.warn("THREE.Line3: .delta() target is now required"), t = new x), t.subVectors(this.end, this.start)
        },
        distanceSq: function() {
            return this.start.distanceToSquared(this.end)
        },
        distance: function() {
            return this.start.distanceTo(this.end)
        },
        at: function(t, e) {
            return void 0 === e && (console.warn("THREE.Line3: .at() target is now required"), e = new x), this.delta(e).multiplyScalar(t).add(this.start)
        },
        closestPointToPointParameter: function(t, e) {
            Uc.subVectors(t, this.start), Bc.subVectors(this.end, this.start);
            var n = Bc.dot(Bc),
                i = Bc.dot(Uc) / n;
            return e && (i = s.clamp(i, 0, 1)), i
        },
        closestPointToPoint: function(t, e, n) {
            var i = this.closestPointToPointParameter(t, e);
            return void 0 === n && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"), n = new x), this.delta(n).multiplyScalar(i).add(this.start)
        },
        applyMatrix4: function(t) {
            return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this
        },
        equals: function(t) {
            return t.start.equals(this.start) && t.end.equals(this.end)
        }
    }), Gc.prototype = Object.create(W.prototype), Gc.prototype.constructor = Gc, Gc.prototype.isImmediateRenderObject = !0;
    var Hc = new x;

    function Vc(t, e) {
        W.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e;
        for (var n = new he, i = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], r = 0, a = 1; r < 32; r++, a++) {
            var o = r / 32 * Math.PI * 2,
                s = a / 32 * Math.PI * 2;
            i.push(Math.cos(o), Math.sin(o), 1, Math.cos(s), Math.sin(s), 1)
        }
        n.setAttribute("position", new $t(i, 3));
        var c = new Dr({
            fog: !1,
            toneMapped: !1
        });
        this.cone = new Vr(n, c), this.add(this.cone), this.update()
    }
    Vc.prototype = Object.create(W.prototype), Vc.prototype.constructor = Vc, Vc.prototype.dispose = function() {
        this.cone.geometry.dispose(), this.cone.material.dispose()
    }, Vc.prototype.update = function() {
        this.light.updateMatrixWorld();
        var t = this.light.distance ? this.light.distance : 1e3,
            e = t * Math.tan(this.light.angle);
        this.cone.scale.set(e, e, t), Hc.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(Hc), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color)
    };
    var kc = new x,
        jc = new A,
        Wc = new A;

    function qc(t) {
        for (var e = function t(e) {
                var n = [];
                e && e.isBone && n.push(e);
                for (var i = 0; i < e.children.length; i++) n.push.apply(n, t(e.children[i]));
                return n
            }(t), n = new he, i = [], r = [], a = new zt(0, 0, 1), o = new zt(0, 1, 0), s = 0; s < e.length; s++) {
            var c = e[s];
            c.parent && c.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), r.push(a.r, a.g, a.b), r.push(o.r, o.g, o.b))
        }
        n.setAttribute("position", new $t(i, 3)), n.setAttribute("color", new $t(r, 3));
        var l = new Dr({
            vertexColors: !0,
            depthTest: !1,
            depthWrite: !1,
            toneMapped: !1,
            transparent: !0
        });
        Vr.call(this, n, l), this.root = t, this.bones = e, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1
    }

    function Xc(t, e, n) {
        this.light = t, this.light.updateMatrixWorld(), this.color = n;
        var i = new Ka(e, 4, 2),
            r = new kt({
                wireframe: !0,
                fog: !1,
                toneMapped: !1
            });
        Le.call(this, i, r), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update()
    }
    qc.prototype = Object.create(Vr.prototype), qc.prototype.constructor = qc, qc.prototype.isSkeletonHelper = !0, qc.prototype.updateMatrixWorld = function(t) {
        var e = this.bones,
            n = this.geometry,
            i = n.getAttribute("position");
        Wc.getInverse(this.root.matrixWorld);
        for (var r = 0, a = 0; r < e.length; r++) {
            var o = e[r];
            o.parent && o.parent.isBone && (jc.multiplyMatrices(Wc, o.matrixWorld), kc.setFromMatrixPosition(jc), i.setXYZ(a, kc.x, kc.y, kc.z), jc.multiplyMatrices(Wc, o.parent.matrixWorld), kc.setFromMatrixPosition(jc), i.setXYZ(a + 1, kc.x, kc.y, kc.z), a += 2)
        }
        n.getAttribute("position").needsUpdate = !0, W.prototype.updateMatrixWorld.call(this, t)
    }, Xc.prototype = Object.create(Le.prototype), Xc.prototype.constructor = Xc, Xc.prototype.dispose = function() {
        this.geometry.dispose(), this.material.dispose()
    }, Xc.prototype.update = function() {
        void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color)
    };
    var Yc = new x,
        Zc = new zt,
        Jc = new zt;

    function Qc(t, e, n) {
        W.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = n;
        var i = new la(e);
        i.rotateY(.5 * Math.PI), this.material = new kt({
            wireframe: !0,
            fog: !1,
            toneMapped: !1
        }), void 0 === this.color && (this.material.vertexColors = !0);
        var r = i.getAttribute("position"),
            a = new Float32Array(3 * r.count);
        i.setAttribute("color", new Wt(a, 3)), this.add(new Le(i, this.material)), this.update()
    }

    function Kc(t, e, n, i) {
        t = t || 10, e = e || 10, n = new zt(void 0 !== n ? n : 4473924), i = new zt(void 0 !== i ? i : 8947848);
        for (var r = e / 2, a = t / e, o = t / 2, s = [], c = [], l = 0, h = 0, u = -o; l <= e; l++, u += a) {
            s.push(-o, 0, u, o, 0, u), s.push(u, 0, -o, u, 0, o);
            var p = l === r ? n : i;
            p.toArray(c, h), h += 3, p.toArray(c, h), h += 3, p.toArray(c, h), h += 3, p.toArray(c, h), h += 3
        }
        var d = new he;
        d.setAttribute("position", new $t(s, 3)), d.setAttribute("color", new $t(c, 3));
        var f = new Dr({
            vertexColors: !0,
            toneMapped: !1
        });
        Vr.call(this, d, f)
    }

    function $c(t, e, n, i, r, a) {
        t = t || 10, e = e || 16, n = n || 8, i = i || 64, r = new zt(void 0 !== r ? r : 4473924), a = new zt(void 0 !== a ? a : 8947848);
        var o, s, c, l, h, u, p, d = [],
            f = [];
        for (l = 0; l <= e; l++) c = l / e * (2 * Math.PI), o = Math.sin(c) * t, s = Math.cos(c) * t, d.push(0, 0, 0), d.push(o, 0, s), p = 1 & l ? r : a, f.push(p.r, p.g, p.b), f.push(p.r, p.g, p.b);
        for (l = 0; l <= n; l++)
            for (p = 1 & l ? r : a, u = t - t / n * l, h = 0; h < i; h++) c = h / i * (2 * Math.PI), o = Math.sin(c) * u, s = Math.cos(c) * u, d.push(o, 0, s), f.push(p.r, p.g, p.b), c = (h + 1) / i * (2 * Math.PI), o = Math.sin(c) * u, s = Math.cos(c) * u, d.push(o, 0, s), f.push(p.r, p.g, p.b);
        var m = new he;
        m.setAttribute("position", new $t(d, 3)), m.setAttribute("color", new $t(f, 3));
        var g = new Dr({
            vertexColors: !0,
            toneMapped: !1
        });
        Vr.call(this, m, g)
    }
    Qc.prototype = Object.create(W.prototype), Qc.prototype.constructor = Qc, Qc.prototype.dispose = function() {
        this.children[0].geometry.dispose(), this.children[0].material.dispose()
    }, Qc.prototype.update = function() {
        var t = this.children[0];
        if (void 0 !== this.color) this.material.color.set(this.color);
        else {
            var e = t.geometry.getAttribute("color");
            Zc.copy(this.light.color), Jc.copy(this.light.groundColor);
            for (var n = 0, i = e.count; n < i; n++) {
                var r = n < i / 2 ? Zc : Jc;
                e.setXYZ(n, r.r, r.g, r.b)
            }
            e.needsUpdate = !0
        }
        t.lookAt(Yc.setFromMatrixPosition(this.light.matrixWorld).negate())
    }, Kc.prototype = Object.assign(Object.create(Vr.prototype), {
        constructor: Kc,
        copy: function(t) {
            return Vr.prototype.copy.call(this, t), this.geometry.copy(t.geometry), this.material.copy(t.material), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        }
    }), $c.prototype = Object.create(Vr.prototype), $c.prototype.constructor = $c;
    var tl = new x,
        el = new x,
        nl = new x;

    function il(t, e, n) {
        W.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, void 0 === e && (e = 1);
        var i = new he;
        i.setAttribute("position", new $t([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0], 3));
        var r = new Dr({
            fog: !1,
            toneMapped: !1
        });
        this.lightPlane = new Fr(i, r), this.add(this.lightPlane), (i = new he).setAttribute("position", new $t([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new Fr(i, r), this.add(this.targetLine), this.update()
    }
    il.prototype = Object.create(W.prototype), il.prototype.constructor = il, il.prototype.dispose = function() {
        this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
    }, il.prototype.update = function() {
        tl.setFromMatrixPosition(this.light.matrixWorld), el.setFromMatrixPosition(this.light.target.matrixWorld), nl.subVectors(el, tl), this.lightPlane.lookAt(el), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(el), this.targetLine.scale.z = nl.length()
    };
    var rl = new x,
        al = new He;

    function ol(t) {
        var e = new he,
            n = new Dr({
                color: 16777215,
                vertexColors: !0,
                toneMapped: !1
            }),
            i = [],
            r = [],
            a = {},
            o = new zt(16755200),
            s = new zt(16711680),
            c = new zt(43775),
            l = new zt(16777215),
            h = new zt(3355443);

        function u(t, e, n) {
            p(t, n), p(e, n)
        }

        function p(t, e) {
            i.push(0, 0, 0), r.push(e.r, e.g, e.b), void 0 === a[t] && (a[t] = []), a[t].push(i.length / 3 - 1)
        }
        u("n1", "n2", o), u("n2", "n4", o), u("n4", "n3", o), u("n3", "n1", o), u("f1", "f2", o), u("f2", "f4", o), u("f4", "f3", o), u("f3", "f1", o), u("n1", "f1", o), u("n2", "f2", o), u("n3", "f3", o), u("n4", "f4", o), u("p", "n1", s), u("p", "n2", s), u("p", "n3", s), u("p", "n4", s), u("u1", "u2", c), u("u2", "u3", c), u("u3", "u1", c), u("c", "t", l), u("p", "c", h), u("cn1", "cn2", h), u("cn3", "cn4", h), u("cf1", "cf2", h), u("cf3", "cf4", h), e.setAttribute("position", new $t(i, 3)), e.setAttribute("color", new $t(r, 3)), Vr.call(this, e, n), this.camera = t, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = a, this.update()
    }

    function sl(t, e, n, i, r, a, o) {
        rl.set(r, a, o).unproject(i);
        var s = e[t];
        if (void 0 !== s)
            for (var c = n.getAttribute("position"), l = 0, h = s.length; l < h; l++) c.setXYZ(s[l], rl.x, rl.y, rl.z)
    }
    ol.prototype = Object.create(Vr.prototype), ol.prototype.constructor = ol, ol.prototype.update = function() {
        var t = this.geometry,
            e = this.pointMap;
        al.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), sl("c", e, t, al, 0, 0, -1), sl("t", e, t, al, 0, 0, 1), sl("n1", e, t, al, -1, -1, -1), sl("n2", e, t, al, 1, -1, -1), sl("n3", e, t, al, -1, 1, -1), sl("n4", e, t, al, 1, 1, -1), sl("f1", e, t, al, -1, -1, 1), sl("f2", e, t, al, 1, -1, 1), sl("f3", e, t, al, -1, 1, 1), sl("f4", e, t, al, 1, 1, 1), sl("u1", e, t, al, .7, 1.1, -1), sl("u2", e, t, al, -.7, 1.1, -1), sl("u3", e, t, al, 0, 2, -1), sl("cf1", e, t, al, -1, 0, 1), sl("cf2", e, t, al, 1, 0, 1), sl("cf3", e, t, al, 0, -1, 1), sl("cf4", e, t, al, 0, 1, 1), sl("cn1", e, t, al, -1, 0, -1), sl("cn2", e, t, al, 1, 0, -1), sl("cn3", e, t, al, 0, -1, -1), sl("cn4", e, t, al, 0, 1, -1), t.getAttribute("position").needsUpdate = !0
    };
    var cl = new ot;

    function ll(t, e) {
        this.object = t, void 0 === e && (e = 16776960);
        var n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
            i = new Float32Array(24),
            r = new he;
        r.setIndex(new Wt(n, 1)), r.setAttribute("position", new Wt(i, 3)), Vr.call(this, r, new Dr({
            color: e,
            toneMapped: !1
        })), this.matrixAutoUpdate = !1, this.update()
    }

    function hl(t, e) {
        this.type = "Box3Helper", this.box = t, e = e || 16776960;
        var n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
            i = new he;
        i.setIndex(new Wt(n, 1)), i.setAttribute("position", new $t([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3)), Vr.call(this, i, new Dr({
            color: e,
            toneMapped: !1
        })), this.geometry.computeBoundingSphere()
    }

    function ul(t, e, n) {
        this.type = "PlaneHelper", this.plane = t, this.size = void 0 === e ? 1 : e;
        var i = void 0 !== n ? n : 16776960,
            r = new he;
        r.setAttribute("position", new $t([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], 3)), r.computeBoundingSphere(), Fr.call(this, r, new Dr({
            color: i,
            toneMapped: !1
        }));
        var a = new he;
        a.setAttribute("position", new $t([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3)), a.computeBoundingSphere(), this.add(new Le(a, new kt({
            color: i,
            opacity: .2,
            transparent: !0,
            depthWrite: !1,
            toneMapped: !1
        })))
    }
    ll.prototype = Object.create(Vr.prototype), ll.prototype.constructor = ll, ll.prototype.update = function(t) {
        if (void 0 !== t && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && cl.setFromObject(this.object), !cl.isEmpty()) {
            var e = cl.min,
                n = cl.max,
                i = this.geometry.attributes.position,
                r = i.array;
            r[0] = n.x, r[1] = n.y, r[2] = n.z, r[3] = e.x, r[4] = n.y, r[5] = n.z, r[6] = e.x, r[7] = e.y, r[8] = n.z, r[9] = n.x, r[10] = e.y, r[11] = n.z, r[12] = n.x, r[13] = n.y, r[14] = e.z, r[15] = e.x, r[16] = n.y, r[17] = e.z, r[18] = e.x, r[19] = e.y, r[20] = e.z, r[21] = n.x, r[22] = e.y, r[23] = e.z, i.needsUpdate = !0, this.geometry.computeBoundingSphere()
        }
    }, ll.prototype.setFromObject = function(t) {
        return this.object = t, this.update(), this
    }, ll.prototype.copy = function(t) {
        return Vr.prototype.copy.call(this, t), this.object = t.object, this
    }, ll.prototype.clone = function() {
        return (new this.constructor).copy(this)
    }, hl.prototype = Object.create(Vr.prototype), hl.prototype.constructor = hl, hl.prototype.updateMatrixWorld = function(t) {
        var e = this.box;
        e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(.5), W.prototype.updateMatrixWorld.call(this, t))
    }, ul.prototype = Object.create(Fr.prototype), ul.prototype.constructor = ul, ul.prototype.updateMatrixWorld = function(t) {
        var e = -this.plane.constant;
        Math.abs(e) < 1e-8 && (e = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, e), this.children[0].material.side = e < 0 ? 1 : 0, this.lookAt(this.plane.normal), W.prototype.updateMatrixWorld.call(this, t)
    };
    var pl, dl, fl = new x;

    function ml(t, e, n, i, r, a) {
        W.call(this), void 0 === t && (t = new x(0, 0, 1)), void 0 === e && (e = new x(0, 0, 0)), void 0 === n && (n = 1), void 0 === i && (i = 16776960), void 0 === r && (r = .2 * n), void 0 === a && (a = .2 * r), void 0 === pl && ((pl = new he).setAttribute("position", new $t([0, 0, 0, 0, 1, 0], 3)), (dl = new co(0, .5, 1, 5, 1)).translate(0, -.5, 0)), this.position.copy(e), this.line = new Fr(pl, new Dr({
            color: i,
            toneMapped: !1
        })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new Le(dl, new kt({
            color: i,
            toneMapped: !1
        })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t), this.setLength(n, r, a)
    }

    function gl(t) {
        var e = [0, 0, 0, t = t || 1, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t],
            n = new he;
        n.setAttribute("position", new $t(e, 3)), n.setAttribute("color", new $t([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], 3));
        var i = new Dr({
            vertexColors: !0,
            toneMapped: !1
        });
        Vr.call(this, n, i)
    }
    ml.prototype = Object.create(W.prototype), ml.prototype.constructor = ml, ml.prototype.setDirection = function(t) {
        if (t.y > .99999) this.quaternion.set(0, 0, 0, 1);
        else if (t.y < -.99999) this.quaternion.set(1, 0, 0, 0);
        else {
            fl.set(t.z, 0, -t.x).normalize();
            var e = Math.acos(t.y);
            this.quaternion.setFromAxisAngle(fl, e)
        }
    }, ml.prototype.setLength = function(t, e, n) {
        void 0 === e && (e = .2 * t), void 0 === n && (n = .2 * e), this.line.scale.set(1, Math.max(1e-4, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(n, e, n), this.cone.position.y = t, this.cone.updateMatrix()
    }, ml.prototype.setColor = function(t) {
        this.line.material.color.set(t), this.cone.material.color.set(t)
    }, ml.prototype.copy = function(t) {
        return W.prototype.copy.call(this, t, !1), this.line.copy(t.line), this.cone.copy(t.cone), this
    }, ml.prototype.clone = function() {
        return (new this.constructor).copy(this)
    }, gl.prototype = Object.create(Vr.prototype), gl.prototype.constructor = gl;
    var vl, yl, xl, bl, _l = Math.pow(2, 8),
        wl = [.125, .215, .35, .446, .526, .582],
        Ml = 5 + wl.length,
        Sl = {
            3e3: 0,
            3001: 1,
            3002: 2,
            3004: 3,
            3005: 4,
            3006: 5,
            3007: 6
        },
        Tl = new Rs,
        El = (vl = 20, yl = new Float32Array(vl), xl = new x(0, 1, 0), (bl = new go({
            defines: {
                n: vl
            },
            uniforms: {
                envMap: {
                    value: null
                },
                samples: {
                    value: 1
                },
                weights: {
                    value: yl
                },
                latitudinal: {
                    value: !1
                },
                dTheta: {
                    value: 0
                },
                mipInt: {
                    value: 0
                },
                poleAxis: {
                    value: xl
                },
                inputEncoding: {
                    value: Sl[3e3]
                },
                outputEncoding: {
                    value: Sl[3e3]
                }
            },
            vertexShader: Zl(),
            fragmentShader: `\nprecision mediump float;\nprecision mediump int;\nvarying vec3 vOutputDirection;\nuniform sampler2D envMap;\nuniform int samples;\nuniform float weights[n];\nuniform bool latitudinal;\nuniform float dTheta;\nuniform float mipInt;\nuniform vec3 poleAxis;\n\n${Jl()}\n\n#define ENVMAP_TYPE_CUBE_UV\n#include <cube_uv_reflection_fragment>\n\nvec3 getSample(float theta, vec3 axis) {\n\tfloat cosTheta = cos(theta);\n\t// Rodrigues' axis-angle rotation\n\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t+ cross(axis, vOutputDirection) * sin(theta)\n\t\t+ axis * dot(axis, vOutputDirection) * (1.0 - cosTheta);\n\treturn bilinearCubeUV(envMap, sampleDirection, mipInt);\n}\n\nvoid main() {\n\tvec3 axis = latitudinal ? poleAxis : cross(poleAxis, vOutputDirection);\n\tif (all(equal(axis, vec3(0.0))))\n\t\taxis = vec3(vOutputDirection.z, 0.0, - vOutputDirection.x);\n\taxis = normalize(axis);\n\tgl_FragColor = vec4(0.0);\n\tgl_FragColor.rgb += weights[0] * getSample(0.0, axis);\n\tfor (int i = 1; i < n; i++) {\n\t\tif (i >= samples)\n\t\t\tbreak;\n\t\tfloat theta = dTheta * float(i);\n\t\tgl_FragColor.rgb += weights[i] * getSample(-1.0 * theta, axis);\n\t\tgl_FragColor.rgb += weights[i] * getSample(theta, axis);\n\t}\n\tgl_FragColor = linearToOutputTexel(gl_FragColor);\n}\n\t\t`,
            blending: 0,
            depthTest: !1,
            depthWrite: !1
        })).type = "SphericalGaussianBlur", bl),
        Al = null,
        Ll = null,
        {
            _lodPlanes: Rl,
            _sizeLods: Pl,
            _sigmas: Cl
        } = function() {
            for (var t = [], e = [], n = [], i = 8, r = 0; r < Ml; r++) {
                var a = Math.pow(2, i);
                e.push(a);
                var o = 1 / a;
                r > 4 ? o = wl[r - 8 + 4 - 1] : 0 == r && (o = 0), n.push(o);
                for (var s = 1 / (a - 1), c = -s / 2, l = 1 + s / 2, h = [c, c, l, c, l, l, c, c, l, l, c, l], u = new Float32Array(108), p = new Float32Array(72), d = new Float32Array(36), f = 0; f < 6; f++) {
                    var m = f % 3 * 2 / 3 - 1,
                        g = f > 2 ? 0 : -1,
                        v = [m, g, 0, m + 2 / 3, g, 0, m + 2 / 3, g + 1, 0, m, g, 0, m + 2 / 3, g + 1, 0, m, g + 1, 0];
                    u.set(v, 18 * f), p.set(h, 12 * f);
                    var y = [f, f, f, f, f, f];
                    d.set(y, 6 * f)
                }
                var x = new he;
                x.setAttribute("position", new Wt(u, 3)), x.setAttribute("uv", new Wt(p, 2)), x.setAttribute("faceIndex", new Wt(d, 1)), t.push(x), i > 4 && i--
            }
            return {
                _lodPlanes: t,
                _sizeLods: e,
                _sigmas: n
            }
        }(),
        Ol = null,
        Dl = null,
        Nl = null,
        Il = (1 + Math.sqrt(5)) / 2,
        zl = 1 / Il,
        Ul = [new x(1, 1, 1), new x(-1, 1, 1), new x(1, 1, -1), new x(-1, 1, -1), new x(0, Il, zl), new x(0, Il, -zl), new x(zl, 0, Il), new x(-zl, 0, Il), new x(Il, zl, 0), new x(-Il, zl, 0)];

    function Bl(t) {
        Dl = t, Hl(El)
    }

    function Fl(t) {
        var e = {
                magFilter: 1003,
                minFilter: 1003,
                generateMipmaps: !1,
                type: t ? t.type : 1009,
                format: t ? t.format : 1023,
                encoding: t ? t.encoding : 3002,
                depthBuffer: !1,
                stencilBuffer: !1
            },
            n = Vl(e);
        return n.depthBuffer = !t, Ol = Vl(e), n
    }

    function Gl(t) {
        Ol.dispose(), Dl.setRenderTarget(Nl), t.scissorTest = !1, t.setSize(t.width, t.height)
    }

    function Hl(t) {
        var e = new q;
        e.add(new Le(Rl[0], t)), Dl.compile(e, Tl)
    }

    function Vl(t) {
        var e = new f(3 * _l, 3 * _l, t);
        return e.texture.mapping = 306, e.texture.name = "PMREM.cubeUv", e.scissorTest = !0, e
    }

    function kl(t, e, n, i, r) {
        t.viewport.set(e, n, i, r), t.scissor.set(e, n, i, r)
    }

    function jl(t) {
        var e = Dl.autoClear;
        Dl.autoClear = !1;
        for (var n = 1; n < Ml; n++) {
            Wl(t, n - 1, n, Math.sqrt(Cl[n] * Cl[n] - Cl[n - 1] * Cl[n - 1]), Ul[(n - 1) % Ul.length])
        }
        Dl.autoClear = e
    }

    function Wl(t, e, n, i, r) {
        ql(t, Ol, e, n, i, "latitudinal", r), ql(Ol, t, n, n, i, "longitudinal", r)
    }

    function ql(t, e, n, i, r, a, o) {
        "latitudinal" !== a && "longitudinal" !== a && console.error("blur direction must be either latitudinal or longitudinal!");
        var s = new q;
        s.add(new Le(Rl[i], El));
        var c = El.uniforms,
            l = Pl[n] - 1,
            h = isFinite(r) ? Math.PI / (2 * l) : 2 * Math.PI / 39,
            u = r / h,
            p = isFinite(r) ? 1 + Math.floor(3 * u) : 20;
        p > 20 && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to 20`);
        for (var d = [], f = 0, m = 0; m < 20; ++m) {
            var g = m / u,
                v = Math.exp(-g * g / 2);
            d.push(v), 0 == m ? f += v : m < p && (f += 2 * v)
        }
        for (m = 0; m < d.length; m++) d[m] = d[m] / f;
        c.envMap.value = t.texture, c.samples.value = p, c.weights.value = d, c.latitudinal.value = "latitudinal" === a, o && (c.poleAxis.value = o), c.dTheta.value = h, c.mipInt.value = 8 - n, c.inputEncoding.value = Sl[t.texture.encoding], c.outputEncoding.value = Sl[t.texture.encoding];
        var y = Pl[i];
        kl(e, g = 3 * Math.max(0, _l - 2 * y), (0 === i ? 0 : 2 * _l) + 2 * y * (i > 4 ? i - 8 + 4 : 0), 3 * y, 2 * y), Dl.setRenderTarget(e), Dl.render(s, Tl)
    }

    function Xl() {
        var t = new go({
            uniforms: {
                envMap: {
                    value: null
                },
                texelSize: {
                    value: new c(1, 1)
                },
                inputEncoding: {
                    value: Sl[3e3]
                },
                outputEncoding: {
                    value: Sl[3e3]
                }
            },
            vertexShader: Zl(),
            fragmentShader: `\nprecision mediump float;\nprecision mediump int;\nvarying vec3 vOutputDirection;\nuniform sampler2D envMap;\nuniform vec2 texelSize;\n\n${Jl()}\n\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n\nvoid main() {\n\tgl_FragColor = vec4(0.0);\n\tvec3 outputDirection = normalize(vOutputDirection);\n\tvec2 uv;\n\tuv.y = asin(clamp(outputDirection.y, -1.0, 1.0)) * RECIPROCAL_PI + 0.5;\n\tuv.x = atan(outputDirection.z, outputDirection.x) * RECIPROCAL_PI2 + 0.5;\n\tvec2 f = fract(uv / texelSize - 0.5);\n\tuv -= f * texelSize;\n\tvec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tuv.x += texelSize.x;\n\tvec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tuv.y += texelSize.y;\n\tvec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tuv.x -= texelSize.x;\n\tvec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tvec3 tm = mix(tl, tr, f.x);\n\tvec3 bm = mix(bl, br, f.x);\n\tgl_FragColor.rgb = mix(tm, bm, f.y);\n\tgl_FragColor = linearToOutputTexel(gl_FragColor);\n}\n\t\t`,
            blending: 0,
            depthTest: !1,
            depthWrite: !1
        });
        return t.type = "EquirectangularToCubeUV", t
    }

    function Yl() {
        var t = new go({
            uniforms: {
                envMap: {
                    value: null
                },
                inputEncoding: {
                    value: Sl[3e3]
                },
                outputEncoding: {
                    value: Sl[3e3]
                }
            },
            vertexShader: Zl(),
            fragmentShader: `\nprecision mediump float;\nprecision mediump int;\nvarying vec3 vOutputDirection;\nuniform samplerCube envMap;\n\n${Jl()}\n\nvoid main() {\n\tgl_FragColor = vec4(0.0);\n\tgl_FragColor.rgb = envMapTexelToLinear(textureCube(envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ))).rgb;\n\tgl_FragColor = linearToOutputTexel(gl_FragColor);\n}\n\t\t`,
            blending: 0,
            depthTest: !1,
            depthWrite: !1
        });
        return t.type = "CubemapToCubeUV", t
    }

    function Zl() {
        return "\nprecision mediump float;\nprecision mediump int;\nattribute vec3 position;\nattribute vec2 uv;\nattribute float faceIndex;\nvarying vec3 vOutputDirection;\nvec3 getDirection(vec2 uv, float face) {\n\tuv = 2.0 * uv - 1.0;\n\tvec3 direction = vec3(uv, 1.0);\n\tif (face == 0.0) {\n\t\tdirection = direction.zyx;\n\t\tdirection.z *= -1.0;\n\t} else if (face == 1.0) {\n\t\tdirection = direction.xzy;\n\t\tdirection.z *= -1.0;\n\t} else if (face == 3.0) {\n\t\tdirection = direction.zyx;\n\t\tdirection.x *= -1.0;\n\t} else if (face == 4.0) {\n\t\tdirection = direction.xzy;\n\t\tdirection.y *= -1.0;\n\t} else if (face == 5.0) {\n\t\tdirection.xz *= -1.0;\n\t}\n\treturn direction;\n}\nvoid main() {\n\tvOutputDirection = getDirection(uv, faceIndex);\n\tgl_Position = vec4( position, 1.0 );\n}\n\t"
    }

    function Jl() {
        return "\nuniform int inputEncoding;\nuniform int outputEncoding;\n\n#include <encodings_pars_fragment>\n\nvec4 inputTexelToLinear(vec4 value){\n\tif(inputEncoding == 0){\n\t\treturn value;\n\t}else if(inputEncoding == 1){\n\t\treturn sRGBToLinear(value);\n\t}else if(inputEncoding == 2){\n\t\treturn RGBEToLinear(value);\n\t}else if(inputEncoding == 3){\n\t\treturn RGBMToLinear(value, 7.0);\n\t}else if(inputEncoding == 4){\n\t\treturn RGBMToLinear(value, 16.0);\n\t}else if(inputEncoding == 5){\n\t\treturn RGBDToLinear(value, 256.0);\n\t}else{\n\t\treturn GammaToLinear(value, 2.2);\n\t}\n}\n\nvec4 linearToOutputTexel(vec4 value){\n\tif(outputEncoding == 0){\n\t\treturn value;\n\t}else if(outputEncoding == 1){\n\t\treturn LinearTosRGB(value);\n\t}else if(outputEncoding == 2){\n\t\treturn LinearToRGBE(value);\n\t}else if(outputEncoding == 3){\n\t\treturn LinearToRGBM(value, 7.0);\n\t}else if(outputEncoding == 4){\n\t\treturn LinearToRGBM(value, 16.0);\n\t}else if(outputEncoding == 5){\n\t\treturn LinearToRGBD(value, 256.0);\n\t}else{\n\t\treturn LinearToGamma(value, 2.2);\n\t}\n}\n\nvec4 envMapTexelToLinear(vec4 color) {\n\treturn inputTexelToLinear(color);\n}\n\t"
    }
    Bl.prototype = {
        constructor: Bl,
        fromScene: function(t, e = 0, n = .1, i = 100) {
            Nl = Dl.getRenderTarget();
            var r = Fl();
            return function(t, e, n, i) {
                var r = new Ve(90, 1, e, n),
                    a = [1, 1, 1, 1, -1, 1],
                    o = [1, 1, -1, -1, -1, 1],
                    s = Dl.outputEncoding,
                    c = Dl.toneMapping,
                    l = Dl.toneMappingExposure,
                    h = Dl.getClearColor(),
                    u = Dl.getClearAlpha();
                Dl.toneMapping = 1, Dl.toneMappingExposure = 1, Dl.outputEncoding = 3e3, t.scale.z *= -1;
                var p = t.background;
                if (p && p.isColor) {
                    p.convertSRGBToLinear();
                    var d = Math.max(p.r, p.g, p.b),
                        f = Math.min(Math.max(Math.ceil(Math.log2(d)), -128), 127);
                    p = p.multiplyScalar(Math.pow(2, -f));
                    var m = (f + 128) / 255;
                    Dl.setClearColor(p, m), t.background = null
                }
                for (var g = 0; g < 6; g++) {
                    var v = g % 3;
                    0 == v ? (r.up.set(0, a[g], 0), r.lookAt(o[g], 0, 0)) : 1 == v ? (r.up.set(0, 0, a[g]), r.lookAt(0, o[g], 0)) : (r.up.set(0, a[g], 0), r.lookAt(0, 0, o[g])), kl(i, v * _l, g > 2 ? _l : 0, _l, _l), Dl.setRenderTarget(i), Dl.render(t, r)
                }
                Dl.toneMapping = c, Dl.toneMappingExposure = l, Dl.outputEncoding = s, Dl.setClearColor(h, u), t.scale.z *= -1
            }(t, n, i, r), e > 0 && Wl(r, 0, 0, e), jl(r), Gl(r), r
        },
        fromEquirectangular: function(t) {
            return t.magFilter = 1003, t.minFilter = 1003, t.generateMipmaps = !1, this.fromCubemap(t)
        },
        fromCubemap: function(t) {
            Nl = Dl.getRenderTarget();
            var e = Fl(t);
            return function(t, e) {
                var n = new q;
                t.isCubeTexture ? null == Ll && (Ll = Yl()) : null == Al && (Al = Xl());
                var i = t.isCubeTexture ? Ll : Al;
                n.add(new Le(Rl[0], i));
                var r = i.uniforms;
                r.envMap.value = t, t.isCubeTexture || r.texelSize.value.set(1 / t.image.width, 1 / t.image.height);
                r.inputEncoding.value = Sl[t.encoding], r.outputEncoding.value = Sl[t.encoding], kl(e, 0, 0, 3 * _l, 2 * _l), Dl.setRenderTarget(e), Dl.render(n, Tl)
            }(t, e), jl(e), Gl(e), e
        },
        compileCubemapShader: function() {
            null == Ll && Hl(Ll = Yl())
        },
        compileEquirectangularShader: function() {
            null == Al && Hl(Al = Xl())
        },
        dispose: function() {
            El.dispose(), null != Ll && Ll.dispose(), null != Al && Al.dispose();
            for (var t = 0; t < Rl.length; t++) Rl[t].dispose()
        }
    };

    function Ql(t) {
        console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."), ss.call(this, t), this.type = "catmullrom"
    }
    $o.create = function(t, e) {
        return console.log("THREE.Curve.create() has been deprecated"), t.prototype = Object.create($o.prototype), t.prototype.constructor = t, t.prototype.getPoint = e, t
    }, Object.assign(xs.prototype, {
        createPointsGeometry: function(t) {
            console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
            var e = this.getPoints(t);
            return this.createGeometry(e)
        },
        createSpacedPointsGeometry: function(t) {
            console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
            var e = this.getSpacedPoints(t);
            return this.createGeometry(e)
        },
        createGeometry: function(t) {
            console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
            for (var e = new Ie, n = 0, i = t.length; n < i; n++) {
                var r = t[n];
                e.vertices.push(new x(r.x, r.y, r.z || 0))
            }
            return e
        }
    }), Object.assign(bs.prototype, {
        fromPoints: function(t) {
            return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(t)
        }
    }), Object.create(ss.prototype), Object.create(ss.prototype), Ql.prototype = Object.create(ss.prototype), Object.assign(Ql.prototype, {
        initFromArray: function() {
            console.error("THREE.Spline: .initFromArray() has been removed.")
        },
        getControlPointsArray: function() {
            console.error("THREE.Spline: .getControlPointsArray() has been removed.")
        },
        reparametrizeByArcLength: function() {
            console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")
        }
    }), Kc.prototype.setColors = function() {
        console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
    }, qc.prototype.update = function() {
        console.error("THREE.SkeletonHelper: update() no longer needs to be called.")
    }, Object.assign(jo.prototype, {
        extractUrlBase: function(t) {
            return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), Is(t)
        }
    }), jo.Handlers = {
        add: function() {
            console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")
        },
        get: function() {
            console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")
        }
    }, Object.assign(Gs.prototype, {
        setTexturePath: function(t) {
            return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."), this.setResourcePath(t)
        }
    }), Object.assign(zc.prototype, {
        center: function(t) {
            return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(t)
        },
        empty: function() {
            return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty()
        },
        isIntersectionBox: function(t) {
            return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
        },
        size: function(t) {
            return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(t)
        }
    }), Object.assign(ot.prototype, {
        center: function(t) {
            return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(t)
        },
        empty: function() {
            return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty()
        },
        isIntersectionBox: function(t) {
            return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
        },
        isIntersectionSphere: function(t) {
            return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t)
        },
        size: function(t) {
            return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(t)
        }
    }), Ye.prototype.setFromMatrix = function(t) {
        return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(t)
    }, Fc.prototype.center = function(t) {
        return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(t)
    }, Object.assign(s, {
        random16: function() {
            return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."), Math.random()
        },
        nearestPowerOfTwo: function(t) {
            return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."), s.floorPowerOfTwo(t)
        },
        nextPowerOfTwo: function(t) {
            return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."), s.ceilPowerOfTwo(t)
        }
    }), Object.assign(l.prototype, {
        flattenToArrayOffset: function(t, e) {
            return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e)
        },
        multiplyVector3: function(t) {
            return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), t.applyMatrix3(this)
        },
        multiplyVector3Array: function() {
            console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
        },
        applyToBufferAttribute: function(t) {
            return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), t.applyMatrix3(this)
        },
        applyToVector3Array: function() {
            console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
        }
    }), Object.assign(A.prototype, {
        extractPosition: function(t) {
            return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(t)
        },
        flattenToArrayOffset: function(t, e) {
            return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e)
        },
        getPosition: function() {
            return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), (new x).setFromMatrixColumn(this, 3)
        },
        setRotationFromQuaternion: function(t) {
            return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(t)
        },
        multiplyToArray: function() {
            console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
        },
        multiplyVector3: function(t) {
            return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
        },
        multiplyVector4: function(t) {
            return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
        },
        multiplyVector3Array: function() {
            console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
        },
        rotateAxis: function(t) {
            console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), t.transformDirection(this)
        },
        crossVector: function(t) {
            return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
        },
        translate: function() {
            console.error("THREE.Matrix4: .translate() has been removed.")
        },
        rotateX: function() {
            console.error("THREE.Matrix4: .rotateX() has been removed.")
        },
        rotateY: function() {
            console.error("THREE.Matrix4: .rotateY() has been removed.")
        },
        rotateZ: function() {
            console.error("THREE.Matrix4: .rotateZ() has been removed.")
        },
        rotateByAxis: function() {
            console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
        },
        applyToBufferAttribute: function(t) {
            return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
        },
        applyToVector3Array: function() {
            console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
        },
        makeFrustum: function(t, e, n, i, r, a) {
            return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(t, e, i, n, r, a)
        }
    }), _t.prototype.isIntersectionLine = function(t) {
        return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(t)
    }, g.prototype.multiplyVector3 = function(t) {
        return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), t.applyQuaternion(this)
    }, Object.assign(vt.prototype, {
        isIntersectionBox: function(t) {
            return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
        },
        isIntersectionPlane: function(t) {
            return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(t)
        },
        isIntersectionSphere: function(t) {
            return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t)
        }
    }), Object.assign(Ot.prototype, {
        area: function() {
            return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea()
        },
        barycoordFromPoint: function(t, e) {
            return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(t, e)
        },
        midpoint: function(t) {
            return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(t)
        },
        normal: function(t) {
            return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(t)
        },
        plane: function(t) {
            return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(t)
        }
    }), Object.assign(Ot, {
        barycoordFromPoint: function(t, e, n, i, r) {
            return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), Ot.getBarycoord(t, e, n, i, r)
        },
        normal: function(t, e, n, i) {
            return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), Ot.getNormal(t, e, n, i)
        }
    }), Object.assign(_s.prototype, {
        extractAllPoints: function(t) {
            return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(t)
        },
        extrude: function(t) {
            return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new Wa(this, t)
        },
        makeGeometry: function(t) {
            return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new io(this, t)
        }
    }), Object.assign(c.prototype, {
        fromAttribute: function(t, e, n) {
            return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n)
        },
        distanceToManhattan: function(t) {
            return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t)
        },
        lengthManhattan: function() {
            return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
        }
    }), Object.assign(x.prototype, {
        setEulerFromRotationMatrix: function() {
            console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
        },
        setEulerFromQuaternion: function() {
            console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
        },
        getPositionFromMatrix: function(t) {
            return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(t)
        },
        getScaleFromMatrix: function(t) {
            return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(t)
        },
        getColumnFromMatrix: function(t, e) {
            return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t)
        },
        applyProjection: function(t) {
            return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(t)
        },
        fromAttribute: function(t, e, n) {
            return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n)
        },
        distanceToManhattan: function(t) {
            return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t)
        },
        lengthManhattan: function() {
            return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
        }
    }), Object.assign(d.prototype, {
        fromAttribute: function(t, e, n) {
            return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n)
        },
        lengthManhattan: function() {
            return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
        }
    }), Object.assign(Ie.prototype, {
        computeTangents: function() {
            console.error("THREE.Geometry: .computeTangents() has been removed.")
        },
        computeLineDistances: function() {
            console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")
        },
        applyMatrix: function(t) {
            return console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t)
        }
    }), Object.assign(W.prototype, {
        getChildByName: function(t) {
            return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(t)
        },
        renderDepth: function() {
            console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
        },
        translate: function(t, e) {
            return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, t)
        },
        getWorldRotation: function() {
            console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")
        },
        applyMatrix: function(t) {
            return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t)
        }
    }), Object.defineProperties(W.prototype, {
        eulerOrder: {
            get: function() {
                return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
            },
            set: function(t) {
                console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = t
            }
        },
        useQuaternion: {
            get: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            },
            set: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            }
        }
    }), Object.assign(Le.prototype, {
        setDrawMode: function() {
            console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
        }
    }), Object.defineProperties(Le.prototype, {
        drawMode: {
            get: function() {
                return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), 0
            },
            set: function() {
                console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
            }
        }
    }), Object.defineProperties(wr.prototype, {
        objects: {
            get: function() {
                return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels
            }
        }
    }), Object.defineProperty(Er.prototype, "useVertexTexture", {
        get: function() {
            console.warn("THREE.Skeleton: useVertexTexture has been removed.")
        },
        set: function() {
            console.warn("THREE.Skeleton: useVertexTexture has been removed.")
        }
    }), Mr.prototype.initBones = function() {
        console.error("THREE.SkinnedMesh: initBones() has been removed.")
    }, Object.defineProperty($o.prototype, "__arcLengthDivisions", {
        get: function() {
            return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions
        },
        set: function(t) {
            console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions = t
        }
    }), Ve.prototype.setLens = function(t, e) {
        console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== e && (this.filmGauge = e), this.setFocalLength(t)
    }, Object.defineProperties(ws.prototype, {
        onlyShadow: {
            set: function() {
                console.warn("THREE.Light: .onlyShadow has been removed.")
            }
        },
        shadowCameraFov: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = t
            }
        },
        shadowCameraLeft: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = t
            }
        },
        shadowCameraRight: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = t
            }
        },
        shadowCameraTop: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = t
            }
        },
        shadowCameraBottom: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = t
            }
        },
        shadowCameraNear: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = t
            }
        },
        shadowCameraFar: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = t
            }
        },
        shadowCameraVisible: {
            set: function() {
                console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
            }
        },
        shadowBias: {
            set: function(t) {
                console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = t
            }
        },
        shadowDarkness: {
            set: function() {
                console.warn("THREE.Light: .shadowDarkness has been removed.")
            }
        },
        shadowMapWidth: {
            set: function(t) {
                console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = t
            }
        },
        shadowMapHeight: {
            set: function(t) {
                console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = t
            }
        }
    }), Object.defineProperties(Wt.prototype, {
        length: {
            get: function() {
                return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length
            }
        },
        dynamic: {
            get: function() {
                return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), 35048 === this.usage
            },
            set: function() {
                console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(35048)
            }
        }
    }), Object.assign(Wt.prototype, {
        setDynamic: function(t) {
            return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === t ? 35048 : 35044), this
        },
        copyIndicesArray: function() {
            console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")
        },
        setArray: function() {
            console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
        }
    }), Object.assign(he.prototype, {
        addIndex: function(t) {
            console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(t)
        },
        addAttribute: function(t, e) {
            return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : this.setAttribute(t, e) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(t, new Wt(arguments[1], arguments[2])))
        },
        addDrawCall: function(t, e, n) {
            void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(t, e)
        },
        clearDrawCalls: function() {
            console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
        },
        computeTangents: function() {
            console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
        },
        computeOffsets: function() {
            console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
        },
        removeAttribute: function(t) {
            return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(t)
        },
        applyMatrix: function(t) {
            return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t)
        }
    }), Object.defineProperties(he.prototype, {
        drawcalls: {
            get: function() {
                return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
            }
        },
        offsets: {
            get: function() {
                return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
            }
        }
    }), Object.defineProperties(Oc.prototype, {
        linePrecision: {
            get: function() {
                return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."), this.params.Line.threshold
            },
            set: function(t) {
                console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."), this.params.Line.threshold = t
            }
        }
    }), Object.defineProperties(er.prototype, {
        dynamic: {
            get: function() {
                return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."), 35048 === this.usage
            },
            set: function(t) {
                console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."), this.setUsage(t)
            }
        }
    }), Object.assign(er.prototype, {
        setDynamic: function(t) {
            return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === t ? 35048 : 35044), this
        },
        setArray: function() {
            console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
        }
    }), Object.assign(qa.prototype, {
        getArrays: function() {
            console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")
        },
        addShapeList: function() {
            console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")
        },
        addShape: function() {
            console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")
        }
    }), Object.defineProperties(Pc.prototype, {
        dynamic: {
            set: function() {
                console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")
            }
        },
        onUpdate: {
            value: function() {
                return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this
            }
        }
    }), Object.defineProperties(Vt.prototype, {
        wrapAround: {
            get: function() {
                console.warn("THREE.Material: .wrapAround has been removed.")
            },
            set: function() {
                console.warn("THREE.Material: .wrapAround has been removed.")
            }
        },
        overdraw: {
            get: function() {
                console.warn("THREE.Material: .overdraw has been removed.")
            },
            set: function() {
                console.warn("THREE.Material: .overdraw has been removed.")
            }
        },
        wrapRGB: {
            get: function() {
                return console.warn("THREE.Material: .wrapRGB has been removed."), new zt
            }
        },
        shading: {
            get: function() {
                console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
            },
            set: function(t) {
                console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === t
            }
        },
        stencilMask: {
            get: function() {
                return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask
            },
            set: function(t) {
                console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = t
            }
        }
    }), Object.defineProperties(xo.prototype, {
        metal: {
            get: function() {
                return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1
            },
            set: function() {
                console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
            }
        }
    }), Object.defineProperties(Ge.prototype, {
        derivatives: {
            get: function() {
                return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives
            },
            set: function(t) {
                console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = t
            }
        }
    }), Object.assign(Ki.prototype, {
        clearTarget: function(t, e, n, i) {
            console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(t), this.clear(e, n, i)
        },
        animate: function(t) {
            console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(t)
        },
        getCurrentRenderTarget: function() {
            return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget()
        },
        getMaxAnisotropy: function() {
            return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy()
        },
        getPrecision: function() {
            return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision
        },
        resetGLState: function() {
            return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset()
        },
        supportsFloatTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float")
        },
        supportsHalfFloatTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float")
        },
        supportsStandardDerivatives: function() {
            return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives")
        },
        supportsCompressedTextureS3TC: function() {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc")
        },
        supportsCompressedTexturePVRTC: function() {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc")
        },
        supportsBlendMinMax: function() {
            return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax")
        },
        supportsVertexTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures
        },
        supportsInstancedArrays: function() {
            return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays")
        },
        enableScissorTest: function(t) {
            console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(t)
        },
        initMaterial: function() {
            console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
        },
        addPrePlugin: function() {
            console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
        },
        addPostPlugin: function() {
            console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
        },
        updateShadowMap: function() {
            console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
        },
        setFaceCulling: function() {
            console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")
        },
        allocTextureUnit: function() {
            console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")
        },
        setTexture: function() {
            console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")
        },
        setTexture2D: function() {
            console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")
        },
        setTextureCube: function() {
            console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")
        },
        getActiveMipMapLevel: function() {
            return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel()
        }
    }), Object.defineProperties(Ki.prototype, {
        shadowMapEnabled: {
            get: function() {
                return this.shadowMap.enabled
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = t
            }
        },
        shadowMapType: {
            get: function() {
                return this.shadowMap.type
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = t
            }
        },
        shadowMapCullFace: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
            }
        },
        context: {
            get: function() {
                return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext()
            }
        },
        vr: {
            get: function() {
                return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr
            }
        },
        gammaInput: {
            get: function() {
                return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")
            }
        },
        gammaOutput: {
            get: function() {
                return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = !0 === t ? 3001 : 3e3
            }
        }
    }), Object.defineProperties(Wi.prototype, {
        cullFace: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
            }
        },
        renderReverseSided: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
            }
        },
        renderSingleSided: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
            }
        }
    }), Object.defineProperties(f.prototype, {
        wrapS: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = t
            }
        },
        wrapT: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = t
            }
        },
        magFilter: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = t
            }
        },
        minFilter: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = t
            }
        },
        anisotropy: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = t
            }
        },
        offset: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = t
            }
        },
        repeat: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = t
            }
        },
        format: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = t
            }
        },
        type: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = t
            }
        },
        generateMipmaps: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = t
            }
        }
    }), Object.defineProperties(hc.prototype, {
        load: {
            value: function(t) {
                console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
                var e = this;
                return (new Qs).load(t, (function(t) {
                    e.setBuffer(t)
                })), this
            }
        },
        startTime: {
            set: function() {
                console.warn("THREE.Audio: .startTime is now .play( delay ).")
            }
        }
    }), gc.prototype.getData = function() {
        return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData()
    }, ke.prototype.updateCubeMap = function(t, e) {
        return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(t, e)
    };
    h.crossOrigin = void 0, h.loadTexture = function(t, e, n, i) {
        console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
        var r = new Ko;
        r.setCrossOrigin(this.crossOrigin);
        var a = r.load(t, n, void 0, i);
        return e && (a.mapping = e), a
    }, h.loadTextureCube = function(t, e, n, i) {
        console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
        var r = new Qo;
        r.setCrossOrigin(this.crossOrigin);
        var a = r.load(t, n, void 0, i);
        return e && (a.mapping = e), a
    }, h.loadCompressedTexture = function() {
        console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
    }, h.loadCompressedTextureCube = function() {
        console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
    };
    "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
        detail: {
            revision: "115"
        }
    }));
    var Kl = n(0);
    n(1);
    if (Kl.WEBGL.isWebGLAvailable()) {
        var $l, th, eh, nh, ih, rh, ah, oh, sh, ch, lh = !1,
            hh = [];

        function uh() {
            $l.aspect = window.innerWidth / window.innerHeight, $l.updateProjectionMatrix(), eh.setSize(window.innerWidth, window.innerHeight)
        }

        function ph(t) {
            ih.set(t.clientX / window.innerWidth * 2 - 1, -t.clientY / window.innerHeight * 2 + 1), rh.setFromCamera(ih, $l);
            var e = rh.intersectObjects(hh);
            if (e.length > 0) {
                var n = e[0];
                ah.position.copy(n.point).add(n.face.normal), ah.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25)
            }
            gh()
        }

        function dh(t) {
            ih.set(t.clientX / window.innerWidth * 2 - 1, -t.clientY / window.innerHeight * 2 + 1), rh.setFromCamera(ih, $l);
            var e = rh.intersectObjects(hh);
            if (e.length > 0) {
                var n = e[0];
                if (lh) n.object !== nh && (th.remove(n.object), hh.splice(hh.indexOf(n.object), 1));
                else {
                    var i = new Le(sh, ch);
                    i.position.copy(n.point).add(n.face.normal), i.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25), th.add(i), hh.push(i)
                }
                gh()
            }
        }

        function fh(t) {
            switch (t.keyCode) {
                case 16:
                    lh = !0
            }
        }

        function mh(t) {
            switch (t.keyCode) {
                case 16:
                    lh = !1
            }
        }

        function gh() {
            eh.render(th, $l)
        }! function() {
            ($l = new Ve(45, window.innerWidth / window.innerHeight, 1, 1e4)).position.set(500, 800, 1300), $l.lookAt(0, 0, 0), (th = new q).background = new zt(15790320);
            var t = new ze(50, 50, 50);
            oh = new kt({
                color: 16711680,
                opacity: .5,
                transparent: !0
            }), ah = new Le(t, oh), th.add(ah), sh = new ze(50, 50, 50), ch = new wo({
                color: 16693068,
                map: (new Ko).load("static/textures/square.png")
            });
            var e = new Kc(1e3, 20);
            th.add(e), rh = new Oc, ih = new c;
            var n = new $e(1e3, 1e3);
            n.rotateX(-Math.PI / 2), nh = new Le(n, new kt({
                visible: !1
            })), th.add(nh), hh.push(nh);
            var i = new Os(6316128);
            th.add(i);
            var r = new Cs(16777215);
            r.position.set(1, .75, .5).normalize(), th.add(r), (eh = new Ki({
                antialias: !0
            })).setPixelRatio(window.devicePixelRatio), eh.setSize(window.innerWidth, window.innerHeight), document.body.appendChild(eh.domElement), document.addEventListener("mousemove", ph, !1), document.addEventListener("mousedown", dh, !1), document.addEventListener("keydown", fh, !1), document.addEventListener("keyup", mh, !1), window.addEventListener("resize", uh, !1)
        }(), gh()
    } else {
        var vh = Kl.WEBGL.getWebGLErrorMessage();
        document.body.appendChild(vh)
    }
}]);