import {
  c as o,
  j as e,
  m as r,
  R as s,
  C as i,
  V as n,
} from "./index.js";

// =====================================================
// CUSTOM ICON DEFINITIONS
// =====================================================

const socIcon = [
  ["path", {
    d: "M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z",
    key: "shield"
  }],
  ["path", {
    d: "m9 12 2 2 4-4",
    key: "check"
  }],
  ["path", {
    d: "M22 12h-3M22 17h-3M22 7h-3",
    key: "list"
  }],
];

const hackerIcon = [
  ["path", {
    d: "M12 3a7 7 0 0 0-7 7c0 2 1 4 3 5l-2 3h12l-2-3c2-1 3-3 3-5a7 7 0 0 0-7-7z",
    key: "hood"
  }],
  ["path", {
    d: "M9 11h6M12 11v3",
    key: "face"
  }],
  ["path", {
    d: "M5 18c-2 1-3 3-3 5h20c0-2-1-4-3-5",
    key: "body"
  }],
  ["path", {
    d: "M10 18v3M14 18v3",
    key: "details"
  }],
];

const networkIcon = [
  ["rect", {
    width: "8",
    height: "6",
    x: "8",
    y: "2",
    rx: "1",
    key: "top"
  }],
  ["rect", {
    width: "8",
    height: "6",
    x: "1",
    y: "16",
    rx: "1",
    key: "left"
  }],
  ["rect", {
    width: "8",
    height: "6",
    x: "15",
    y: "16",
    rx: "1",
    key: "right"
  }],
  ["path", {
    d: "M12 8v4M5 16v-4h14v4",
    key: "connections"
  }],
];

const creativeIcon = [
  ["path", {
    d: "M3 6h14a2 2 0 0 1 2 2v11H5a2 2 0 0 1-2-2z",
    key: "video"
  }],
  ["path", {
    d: "m9 10 5 3-5 3z",
    key: "play"
  }],
  ["path", {
    d: "M5 6 3 3h15l2 3M8 3l2 3M13 3l2 3",
    key: "clapper"
  }],
  ["rect", {
    width: "10",
    height: "9",
    x: "13",
    y: "14",
    rx: "1",
    key: "image"
  }],
  ["circle", {
    cx: "16",
    cy: "17",
    r: "1",
    key: "sun"
  }],
  ["path", {
    d: "m14 23 3-3 2 2 2-2",
    key: "mountains"
  }],
];

const soc = o("shield-check", socIcon);
const hacker = o("user-round", hackerIcon);
const network = o("network", networkIcon);
const creative = o("clapperboard", creativeIcon);

// =====================================================
// SKILLS DATA
// (tools = the small tool-name chips shown inside each card)
// =====================================================

const x = [
  {
    name: "SOC Analyst",
    icon: e.jsx(soc, {}),
    category: "Security Operations",
    description:
      "I monitor, analyze, and respond to security events using SIEM tools, identify threats, and help keep systems and networks safe and secure.",
    tools: ["SIEM", "Splunk", "Wazuh", "Log Analysis", "Incident Response", "Threat Intelligence", "MITRE ATT&CK Freamwork"],
    gradient: "from-red-500 via-red-400 to-red-600",
  },
  {
    name: "Ethical Hacker",
    icon: e.jsx(hacker, {}),
    category: "Penetration Testing",
    description:
      "I find and fix security weaknesses using tools like Kali Linux, Metasploit, Burp Suite and other techniques to make systems stronger and safer.",
    tools: ["Kali Linux", "Nmap", "Metasploit", "Burp Suite", "OSINT Freamwork"],
    gradient: "from-red-400 via-rose-500 to-red-600",
  },
  {
    name: "Network Engineer",
    icon: e.jsx(network, {}),
    category: "Networking",
    description:
      "I design, configure and troubleshoot networks, work with routers, switches, firewalls and protocols to ensure smooth, secure and reliable connectivity.",
    tools: ["Wireshark", "TCP/IP", "Troubleshooting", "Switching", "Routing", "IDS/IPS", "Cisco Packet Tracer"],
    gradient: "from-red-600 via-red-500 to-rose-500",
  },
  {
    name: e.jsxs(e.Fragment, {
      children: ["Video Editing &", e.jsx("br", {}), "Graphic Designer"],
    }),
    icon: e.jsx(creative, {}),
    category: "Creative Design",
    description:
      "I create engaging videos and eye-catching designs using tools like Adobe Premiere Pro and Canva, turning ideas into visuals that communicate and inspire.",
    tools: ["Premiere Pro","Photoshop", "Canva", "Capcut", "Content Creation"],
    gradient: "from-rose-500 via-red-500 to-red-700",
  },
];

// =====================================================
// SKILLS SECTION
// =====================================================

const u = () =>
  e.jsxs("section", {
    id: "skills",
    className: "py-16 md:py-24 relative overflow-hidden",

    children: [
      // Background glow
      e.jsx("div", {
        className:
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[800px] h-[200px] md:h-[600px] bg-primary/5 rounded-full blur-[60px] md:blur-[150px] pointer-events-none",
      }),

      e.jsxs("div", {
        className:
          "container mx-auto px-4 sm:px-6 relative z-10",

        children: [
          // Heading
          e.jsxs(r.div, {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "text-center mb-12 md:mb-20",

            children: [
              e.jsxs("h2", {
                className:
                  "text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4",

                children: [
                  "My ",
                  e.jsx("span", {
                    className: "text-primary",
                    children: "Skills",
                  }),
                ],
              }),

              e.jsx("p", {
                className:
                  "text-gray-400 max-w-xl mx-auto text-sm sm:text-base md:text-lg px-2",

                children:
                  "The tools and technologies I use to secure networks, solve problems, and create impactful digital experiences.",
              }),
            ],
          }),

          // Cards grid
          e.jsx("div", {
            className:
              "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto",

            children: x.map((t, a) =>
              e.jsx(
                r.div,
                {
                  initial: {
                    opacity: 0,
                    y: 40,
                    scale: 0.9,
                  },

                  whileInView: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  },

                  viewport: { once: true },

                  transition: {
                    delay: a * 0.1,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 80,
                  },

                  className: "group",

                  children: e.jsxs("div", {
                    className:
                      "premium-skill-card relative p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl h-full overflow-hidden transition-all duration-500 cursor-pointer",

                    children: [
                      // Card highlight
                      e.jsx("div", {
                        className:
                          "absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                      }),

                      // Card background
                      e.jsx("div", {
                        className:
                          "absolute inset-[1px] rounded-2xl sm:rounded-3xl bg-neutral-900/90 backdrop-blur-xl",
                      }),

                      // Hover glow
                      e.jsx("div", {
                        className:
                          `absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${t.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`,
                      }),

                      // Content
                      e.jsxs("div", {
                        className:
                          "relative z-10 flex flex-col items-center text-center h-full",

                        children: [
                          // RED BORDER + ICON PADDING
                          e.jsx("div", {
                            className:
                              "w-[88px] h-[88px] sm:w-[100px] sm:h-[100px] lg:w-[118px] lg:h-[118px] rounded-[28px] border-2 border-red-600 bg-neutral-900 p-3 mb-4 sm:mb-6 flex-shrink-0 group-hover:scale-105 transition-all duration-300",

                            children: e.jsx("div", {
                              className:
                                "w-full h-full rounded-[20px] bg-neutral-900 flex items-center justify-center",

                              children: s.cloneElement(t.icon, {
                                size: 48,
                                className:
                                  "text-white group-hover:text-primary transition-colors duration-300",
                                strokeWidth: 1.6,
                              }),
                            }),
                          }),

                          // Title
                          e.jsx("h3", {
                            className:
                              "text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300",

                            children: t.name,
                          }),

                          // Category
                          e.jsx("span", {
                            className:
                              `text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${t.gradient} bg-opacity-10 text-gray-300 mb-4 border border-white/10`,

                            children: t.category,
                          }),

                          // Description
                          e.jsx("p", {
                            className:
                              "text-sm text-gray-400 leading-relaxed flex-grow",

                            children: t.description,
                          }),

                          // Tool name chips (NEW)
                          e.jsx("div", {
                            className:
                              "flex flex-wrap justify-center gap-2 mt-4",

                            children: t.tools.map((tool, k) =>
                              e.jsx(
                                "span",
                                {
                                  className:
                                    "text-xs font-medium px-3 py-1 rounded-full border border-white/10 bg-black/40 text-gray-200 group-hover:border-primary/40 transition-colors duration-300",

                                  children: tool,
                                },
                                k
                              )
                            ),
                          }),

                          // Bottom accent
                          e.jsx("div", {
                            className:
                              `w-0 h-0.5 rounded-full bg-gradient-to-r ${t.gradient} mt-6 group-hover:w-16 transition-all duration-500`,
                          }),
                        ],
                      }),
                    ],
                  }),
                },
                a
              )
            ),
          }),
        ],
      }),

      // Bottom fade
      e.jsx("div", {
        className:
          "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none",
      }),
    ],
  });

export { u as default };