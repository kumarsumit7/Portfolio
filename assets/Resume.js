import {
  c as o,
  r as d,
  j as e,
  A as p,
  m as s,
  D as u,
  X as b,
  E as w,
} from "./index.js";
const v = [
    ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
    [
      "rect",
      { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" },
    ],
  ],
  g = o("briefcase", v);
const y = [
    [
      "path",
      {
        d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
        key: "j76jl0",
      },
    ],
    ["path", { d: "M22 10v6", key: "1lu8f3" }],
    ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }],
  ],
  j = o("graduation-cap", y);
const f = [
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
    ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
    ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }],
  ],
  N = o("zoom-in", f);
const k = [
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
    ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }],
  ],
  z = o("zoom-out", k),
  M = ({ isOpen: a, onClose: i }) => {
    const [r, l] = d.useState(1);
    d.useEffect(() => {
      if (!a) return;
      const t = (h) => {
        h.key === "Escape" && i();
      };
      return (
        window.addEventListener("keydown", t),
        () => window.removeEventListener("keydown", t)
      );
    }, [a, i]);
    const n = () => l((t) => Math.min(t + 0.25, 2)),
      c = () => l((t) => Math.max(t - 0.25, 0.5)),
      x = () =>
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        ),
      m = () => {
        if (x()) window.open("/assets/Sumit_Kumar.pdf", "_blank");
        else {
          const t = document.createElement("a");
          ((t.href = "/assets/Sumit_Kumar.pdf"),
            (t.download = "Sumit_Kumar.pdf"),
            t.click());
        }
      };
    return e.jsx(p, {
      children:
        a &&
        e.jsxs(e.Fragment, {
          children: [
            e.jsx(s.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              onClick: i,
              className: "fixed inset-0 bg-black/80 backdrop-blur-md z-[100]",
            }),
            e.jsxs(s.div, {
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.9 },
              transition: { type: "spring", damping: 25, stiffness: 300 },
              className:
                "fixed inset-4 md:inset-8 lg:inset-16 z-[100] flex flex-col",
              children: [
                e.jsxs("div", {
                  className:
                    "flex items-center justify-between bg-neutral-900/95 backdrop-blur-xl rounded-t-2xl border border-white/10 border-b-0 px-4 md:px-6 py-4",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-4",
                      children: [
                        e.jsx("h3", {
                          className: "text-lg md:text-xl font-bold text-white",
                          children: "Resume Preview",
                        }),
                        e.jsx("span", {
                          className:
                            "hidden sm:inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium",
                          children: "PDF",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        e.jsxs("div", {
                          className:
                            "hidden sm:flex items-center gap-1 bg-white/5 rounded-lg p-1",
                          children: [
                            e.jsx("button", {
                              onClick: c,
                              className:
                                "p-2 rounded-md hover:bg-white/10 transition-colors text-gray-400 hover:text-white",
                              title: "Zoom Out",
                              children: e.jsx(z, { className: "w-4 h-4" }),
                            }),
                            e.jsxs("span", {
                              className:
                                "px-2 text-sm text-gray-400 min-w-[50px] text-center",
                              children: [Math.round(r * 100), "%"],
                            }),
                            e.jsx("button", {
                              onClick: n,
                              className:
                                "p-2 rounded-md hover:bg-white/10 transition-colors text-gray-400 hover:text-white",
                              title: "Zoom In",
                              children: e.jsx(N, { className: "w-4 h-4" }),
                            }),
                          ],
                        }),
                        e.jsxs("button", {
                          onClick: m,
                          className:
                            "flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-white text-sm font-medium transition-colors",
                          children: [
                            e.jsx(u, { className: "w-4 h-4" }),
                            e.jsx("span", {
                              className: "hidden sm:inline",
                              children: "Download",
                            }),
                          ],
                        }),
                        e.jsx("button", {
                          onClick: i,
                          className:
                            "p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white",
                          children: e.jsx(b, { className: "w-5 h-5" }),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("div", {
                  className:
                    "flex-1 bg-neutral-800/50 backdrop-blur-xl rounded-b-2xl border border-white/10 border-t-0 overflow-hidden",
                  children: e.jsx("div", {
                    className:
                      "w-full h-full overflow-auto flex items-center justify-center p-4 md:p-8",
                    children: e.jsx(s.div, {
                      animate: { scale: r },
                      transition: {
                        type: "spring",
                        damping: 20,
                        stiffness: 200,
                      },
                      className: "origin-center",
                      children: e.jsx("div", {
                        className:
                          "bg-white rounded-lg shadow-2xl overflow-hidden",
                        children: e.jsx("iframe", {
                          src: "/assets/Sumit_Kumar.pdf#toolbar=0&navpanes=0&scrollbar=0",
                          className:
                            "w-[595px] h-[842px] max-w-[90vw] max-h-[70vh] md:max-h-[75vh]",
                          title: "Resume Preview",
                        }),
                      }),
                    }),
                  }),
                }),
                e.jsx("div", {
                  className:
                    "absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none",
                  children: e.jsx(s.p, {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.5 },
                    className:
                      "text-gray-500 text-xs text-center bg-neutral-900/80 backdrop-blur-sm px-4 py-2 rounded-full",
                    children: "Press ESC or click outside to close",
                  }),
                }),
              ],
            }),
          ],
        }),
    });
  },
  P = () => {
    const [a, i] = d.useState(!1);
    return e.jsxs("section", {
      id: "resume",
      className: "py-20 relative",
      children: [
        e.jsx("div", {
          className:
            "absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none",
        }),
        e.jsxs("div", {
          className: "container mx-auto px-6 max-w-4xl relative z-10",
          children: [
            e.jsxs(s.div, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              className: "text-center mb-12",
              children: [
                e.jsxs("h2", {
                  className: "text-3xl md:text-4xl font-bold text-white mb-4",
                  children: [
                    "My ",
                    e.jsx("span", {
                      className: "text-primary",
                      children: "Journey",
                    }),
                  ],
                }),
                e.jsx("p", {
                  className: "text-gray-400",
                  children: "Milestones that define my professional path.",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "relative",
              children: [
                e.jsx("div", {
                  className:
                    "hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none items-center justify-center",
                  children: e.jsxs("svg", {
                    width: "140",
                    height: "60",
                    viewBox: "0 0 140 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      e.jsx("path", {
                        d: "M15 40 C40 10, 100 10, 120 35",
                        stroke: "rgba(255,255,255,0.5)",
                        strokeWidth: "2.5",
                        strokeDasharray: "8 6",
                        fill: "none",
                        strokeLinecap: "round",
                      }),
                      e.jsx("path", {
                        d: "M120 30 L130 37 L120 44",
                        stroke: "rgba(255,255,255,0.6)",
                        strokeWidth: "2.5",
                        fill: "none",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                    ],
                  }),
                }),
                e.jsxs("div", {
                  className: "grid md:grid-cols-2 gap-12 md:gap-20 mb-12",
                  children: [
                    e.jsxs(s.div, {
                      initial: { opacity: 0, x: -20 },
                      whileInView: { opacity: 1, x: 0 },
                      viewport: { once: !0 },
                      whileHover: {
                        scale: 1.02,
                        boxShadow: "0 25px 50px -12px rgba(220, 38, 38, 0.25)",
                      },
                      transition: { duration: 0.3 },
                      className:
                        "relative p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-xl overflow-hidden group cursor-pointer",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none",
                        }),
                        e.jsx("div", {
                          className:
                            "absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/30 transition-all duration-500 pointer-events-none",
                        }),
                        e.jsx("div", {
                          className:
                            "absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent",
                        }),
                        e.jsxs("div", {
                          className: "relative z-10",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center mb-4",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors duration-300",
                                  children: e.jsx(j, {
                                    className: "text-primary",
                                    size: 20,
                                  }),
                                }),
                                e.jsx("h3", {
                                  className: "text-xl font-bold text-white",
                                  children: "Education",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "mb-4",
                              children: [
                                e.jsx("h4", {
                                  className: "text-white font-medium",
                                  children: "BCA",
                                }),
                                e.jsx("span", {
                                  className:
                                    "text-primary text-sm font-semibold mb-2 block",
                                  children: "2025 Graduate",
                                }),
                              ],
                            }),
                            e.jsx("p", {
                              className: "text-gray-400 text-sm",
                              children:
                                "Transitioned from a BCA background into cybersecurity, driven by curiosity, discipline, and a passion for digital security.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs(s.div, {
                      initial: { opacity: 0, x: 20 },
                      whileInView: { opacity: 1, x: 0 },
                      viewport: { once: !0 },
                      whileHover: {
                        scale: 1.02,
                        boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.25)",
                      },
                      transition: { duration: 0.3 },
                      className:
                        "relative p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-xl overflow-hidden group cursor-pointer",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none",
                        }),
                        e.jsx("div", {
                          className:
                            "absolute inset-0 rounded-2xl border border-secondary/0 group-hover:border-secondary/30 transition-all duration-500 pointer-events-none",
                        }),
                        e.jsx("div", {
                          className:
                            "absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent",
                        }),
                        e.jsxs("div", {
                          className: "relative z-10",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center mb-4",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors duration-300",
                                  children: e.jsx(g, {
                                    className: "text-primary",
                                    size: 20,
                                  }),
                                }),
                                e.jsx("h3", {
                                  className: "text-xl font-bold text-white",
                                  children: "Training",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "mb-4",
                              children: [
                                e.jsx("h4", {
                                  className: "text-white font-medium",
                                  children: "Cyber Security & Network Engineer",
                                }),
                                e.jsx("span", {
                                  className:
                                    "text-primary text-sm font-semibold mb-2 block",
                                  children: "Oct 2025 - May 2026",
                                }),
                              ],
                            }),
                            e.jsx("p", {
                              className: "text-gray-400 text-sm",
                              children:
                                "Gained hands-on experience in cybersecurity and network engineering, focusing on threat detection, network security, system administration, and vulnerability assessment through practical labs and technical projects.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "flex flex-col sm:flex-row justify-center items-center gap-4",
              children: [
                e.jsxs(s.button, {
                  whileHover: { scale: 1.02 },
                  whileTap: { scale: 0.98 },
                  onClick: () => i(!0),
                  className:
                    "group flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300",
                  children: [
                    e.jsx(w, { className: "w-5 h-5 text-primary" }),
                    e.jsx("span", {
                      className: "text-white font-medium",
                      children: "Preview Resume",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "download-btn-wrapper",
                  children: e.jsxs("label", {
                    className: "download-label",
                    children: [
                      e.jsx("a", {
                        href: "/assets/Sumit_Kumar.pdf",
                        download: "Sumit_Kumar.pdf",
                        style: { display: "none" },
                        id: "download-link",
                      }),
                      e.jsx("input", {
                        type: "checkbox",
                        className: "download-input",
                        onChange: (r) => {
                          r.target.checked &&
                            setTimeout(() => {
                              if (
                                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                                  navigator.userAgent,
                                )
                              )
                                window.open("/assets/Sumit_Kumar.pdf", "_blank");
                              else {
                                const n =
                                  document.getElementById("download-link");
                                n && n.click();
                              }
                            }, 3500);
                        },
                      }),
                      e.jsxs("span", {
                        className: "download-circle",
                        children: [
                          e.jsx("svg", {
                            className: "download-icon",
                            "aria-hidden": "true",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            children: e.jsx("path", {
                              stroke: "currentColor",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "1.5",
                              d: "M12 19V5m0 14-4-4m4 4 4-4",
                            }),
                          }),
                          e.jsx("div", { className: "download-square" }),
                        ],
                      }),
                      e.jsx("p", {
                        className: "download-title",
                        children: "Download CV",
                      }),
                      e.jsx("p", {
                        className: "download-title",
                        children: "Opening...",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
        e.jsx("div", {
          className:
            "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none",
        }),
        e.jsx(M, { isOpen: a, onClose: () => i(!1) }),
      ],
    });
  };
export { P as default };
