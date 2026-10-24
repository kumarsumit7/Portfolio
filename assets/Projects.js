import { c as s, j as e, R as r } from "./index.js";

/* ---------- Icons (same createLucideIcon pattern as before) ---------- */
const bot = s("bot", [
    ["path", { d: "M12 8V4H8", key: "hb8ula" }],
    ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
    ["path", { d: "M2 14h2", key: "vft8re" }],
    ["path", { d: "M20 14h2", key: "4cs60a" }],
    ["path", { d: "M15 13v2", key: "1xurst" }],
    ["path", { d: "M9 13v2", key: "rq6x2g" }],
  ]),
  shield = s("shield", [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
  ]),
  globe = s("globe", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
    ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ]),
  monitor = s("monitor", [
    ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
    ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
    ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }],
  ]),
  eye = s("eye", [
    [
      "path",
      {
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
        key: "1nclc0",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ]),
  github = s("github", [
    [
      "path",
      {
        d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
        key: "tonef",
      },
    ],
    ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
  ]),
  star = s("star", [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s",
      },
    ],
  ]),
  /* ---------- Project data ----------
     image : path to a screenshot (e.g. "/assets/projects/malware-scanner.png"). Leave "" for a placeholder.
     demo / code : your links. Leave "" and the button shows as disabled. */
  d = [
    {
      title: "Cyber Security AI Toolkit",
      category: "AI & Security",
      status: "Under Development",
      description:
        "A toolkit that applies AI to security analysis, helping spot and understand threats faster.",
      features: [
        "AI-assisted threat analysis",
        "Security log review",
        "Faster incident triage",
      ],
      tech: ["Python", "AI", "Security"],
      icon: e.jsx(bot, {}),
      image: "",
      demo: "",
      code: "",
    },
    {
      title: "Malware Detection Engine",
      category: "Python",
      status: "Completed",
      description:
        "A Python-based scanner built to detect malicious files and suspicious behaviour.",
      features: [
        "File scanning and detection",
        "Suspicious behaviour checks",
        "Simple command-line workflow",
      ],
      tech: ["Python", "Security"],
      icon: e.jsx(shield, {}),
      image: "/assets/Project2.png",
      demo: "",
      code: "https://github.com/kumarsumit7/Malware-Detection-Engine",
    },
    {
      title: "Network Vulnerability Scanner",
      category: "Network Security",
      status: "Completed",
      description:
        "Scans networks to identify open ports, exposed services and potential vulnerabilities.",
      features: [
        "Port and service discovery",
        "Vulnerability identification",
        "Scan result reporting",
      ],
      tech: ["Python", "Nmap", "Networking"],
      icon: e.jsx(globe, {}),
      image: "/assets/Project3.png",
      demo: "",
      code: "https://github.com/kumarsumit7/Network-Vulnerability-Scanner",
    },
    {
      title: "Subnet Optimizer",
      category: "Network Planning",
      status: "Completed",
      description:
        "Supports efficient network planning by calculating and optimizing subnet allocation.",
      features: [
        "Subnet calculation",
        "Efficient address allocation",
        "Network planning support",
      ],
      tech: ["HTML",  "CSS",  "Java Script", "Networking", "TCP/IP"],
      icon: e.jsx(monitor, {}),
      image: "/assets/Project4.png",
      demo: "https://kumarsumit7.github.io/Subnet-Optimizer/",
      code: "https://github.com/kumarsumit7/Subnet-Optimizer",
    },
  ],
  /* ---------- Small helper for the two buttons ---------- */
  btn = (href, label, Icon, primary) => {
    const base =
      "flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ";
    const look = primary
      ? "bg-gradient-to-b from-red-600 to-red-700 border border-red-500/50 text-white shadow-[0px_4px_20px_0_rgba(220,38,38,.45)] "
      : "bg-black/60 border border-white/10 text-white hover:border-primary/50 ";
    return href
      ? e.jsxs("a", {
          href,
          target: "_blank",
          rel: "noopener noreferrer",
          className: base + look + "hover:-translate-y-0.5",
          children: [e.jsx(Icon, { size: 16 }), label],
        })
      : e.jsxs("span", {
          "aria-disabled": "true",
          title: "Link coming soon",
          className: base + look + "opacity-40 cursor-not-allowed",
          children: [e.jsx(Icon, { size: 16 }), label],
        });
  },
  m = () =>
    e.jsxs("section", {
      id: "projects",
      className: "py-20 relative overflow-hidden",
      children: [
        e.jsx("div", {
          className:
            "absolute top-1/2 left-0 w-40 md:w-64 h-40 md:h-64 bg-primary/5 rounded-full blur-[50px] md:blur-[100px] -translate-y-1/2",
        }),
        e.jsxs("div", {
          className: "container mx-auto px-6 relative z-10 max-w-6xl",
          children: [
            e.jsxs("div", {
              className: "text-center mb-16",
              children: [
                e.jsxs("h2", {
                  className: "text-3xl md:text-4xl font-bold text-white mb-4",
                  children: [
                    "My ",
                    e.jsx("span", {
                      className: "text-primary",
                      children: "Projects",
                    }),
                  ],
                }),
                e.jsx("p", {
                  className: "text-gray-400 max-w-xl mx-auto",
                  children:
                    "Hands-on projects applying security analysis, network scanning and network planning.",
                }),
              ],
            }),
            e.jsx("div", {
              className: "grid md:grid-cols-2 gap-8",
              children: d.map((t, i) =>
                e.jsx(
                  "div",
                  {
                    className:
                      "rotating-border-card hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(220,38,38,0.2)] transition-all duration-300",
                    children: e.jsxs("div", {
                      className:
                        "h-full flex flex-col group relative z-10 overflow-hidden rounded-[inherit]",
                      children: [
                        /* ---- Screenshot area with badges ---- */
                        e.jsxs("div", {
                          className:
                            "relative h-48 w-full overflow-hidden bg-gradient-to-br from-red-950/50 via-neutral-900 to-black",
                          children: [
                            t.image
                              ? e.jsx("img", {
                                  src: t.image,
                                  alt: t.title + " screenshot",
                                  loading: "lazy",
                                  className:
                                    "w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500",
                                })
                              : e.jsx("div", {
                                  className:
                                    "w-full h-full flex items-center justify-center text-primary/60",
                                  children: r.cloneElement(t.icon, { size: 64, strokeWidth: 1.25 }),
                                }),
                            e.jsx("span", {
                              className:
                                "absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-primary bg-black/70 backdrop-blur-md border border-primary/40",
                              children: t.category,
                            }),
                            e.jsx("span", {
                              className:
                                "absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold text-emerald-300 bg-emerald-500/15 backdrop-blur-md border border-emerald-400/30",
                              children: t.status,
                            }),
                          ],
                        }),
                        /* ---- Body ---- */
                        e.jsxs("div", {
                          className: "p-6 flex flex-col flex-grow",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-start justify-between gap-3 mb-3",
                              children: [
                                e.jsx("h3", {
                                  className: "text-xl font-bold text-white",
                                  children: t.title,
                                }),
                                e.jsxs("span", {
                                  className:
                                    "shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium text-amber-400 bg-amber-500/10 border border-amber-500/30",
                                  children: [
                                    e.jsx(star, { size: 12, fill: "currentColor" }),
                                    "Featured",
                                  ],
                                }),
                              ],
                            }),
                            e.jsx("p", {
                              className: "text-gray-400 text-sm leading-relaxed mb-4",
                              children: t.description,
                            }),
                            e.jsx("ul", {
                              className: "space-y-2 mb-5 flex-grow",
                              children: t.features.map((f, k) =>
                                e.jsxs(
                                  "li",
                                  {
                                    className: "flex items-center gap-3 text-sm text-gray-300",
                                    children: [
                                      e.jsx("span", {
                                        className: "w-1.5 h-1.5 rounded-full bg-primary shrink-0",
                                      }),
                                      f,
                                    ],
                                  },
                                  k,
                                ),
                              ),
                            }),
                            e.jsx("div", {
                              className: "flex flex-wrap gap-2 mb-6",
                              children: t.tech.map((x, k) =>
                                e.jsx(
                                  "span",
                                  {
                                    className:
                                      "px-3 py-1 rounded-lg text-xs font-medium text-red-300 bg-primary/10 border border-primary/20",
                                    children: x,
                                  },
                                  k,
                                ),
                              ),
                            }),
                            e.jsxs("div", {
                              className: "pt-6 border-t border-white/10 mt-auto flex gap-3",
                              children: [
                                btn(t.demo, "Live Demo", eye, !0),
                                btn(t.code, "Code", github, !1),
                              ],
                            }),
                          ],
                        }),
                        /* ---- Bottom accent bar ---- */
                        e.jsx("div", {
                          className:
                            "h-1 w-full bg-gradient-to-r from-red-700 via-red-500 to-rose-500",
                        }),
                      ],
                    }),
                  },
                  i,
                ),
              ),
            }),
          ],
        }),
        e.jsx("div", {
          className:
            "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none",
        }),
      ],
    });
export { m as default };