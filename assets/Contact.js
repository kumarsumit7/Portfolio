
import { r as n, j as e, M as h, q as p, s as g } from "./index.js";

const f = () => {
  const d = n.useRef(null),
    [s, m] = n.useState({
      name: "",
      email: "",
      message: "",
    }),
    [l, c] = n.useState(!1),
    [i, a] = n.useState({
      type: null,
      message: "",
    });

  const o = (r) => {
    m({ ...s, [r.target.name]: r.target.value });
  };

  const x = async (r) => {
    r.preventDefault();
    c(!0);
    a({ type: null, message: "" });

    try {
      const t = await fetch(
        "https://formspree.io/f/xpppznnb",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(s),
        }
      );

      const u = await t.json();

      if (!t.ok) {
        throw new Error(
          u.errors?.[0]?.message ||
          u.error ||
          "Failed to send message."
        );
      }

      a({
        type: "success",
        message:
          "Message sent successfully! I will get back to you soon.",
      });

      m({ name: "", email: "", message: "" });
    } catch (t) {
      console.error("FAILED...", t);

      a({
        type: "error",
        message:
          t.message ||
          "Something went wrong. Please try again.",
      });
    } finally {
      c(!1);
      setTimeout(() => a({ type: null, message: "" }), 6000);
    }
  };

  return e.jsxs("section", {
    id: "contact",
    className: "pt-8 pb-12 relative overflow-hidden",
    children: [
      e.jsx("div", {
        className:
          "absolute bottom-0 right-0 w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-red-500/10 rounded-full blur-[50px] md:blur-[120px] pointer-events-none",
      }),

      e.jsxs("div", {
        className: "container mx-auto px-6",
        children: [
          e.jsxs("div", {
            className: "text-center mb-8 md:mb-16",
            children: [
              e.jsxs("h2", {
                className:
                  "text-3xl md:text-4xl font-bold text-white mb-4",
                children: [
                  "Let's ",
                  e.jsx("span", {
                    className: "text-primary",
                    children: "Talk",
                  }),
                ],
              }),

              e.jsx("p", {
                className: "text-gray-400 max-w-xl mx-auto",
                children:
                  "Have a project or opportunity? Let’s connect and turn your ideas into impactful results in cybersecurity, networking, video editing and graphic design.",
              }),
            ],
          }),

          e.jsxs("div", {
            className:
              "grid lg:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto",
            children: [
              e.jsx("div", {
                className: "space-y-8",
                children: e.jsxs("div", {
                  className:
                    "glass-panel p-4 sm:p-6 md:p-8 rounded-2xl",
                  children: [
                    e.jsx("h3", {
                      className:
                        "text-xl sm:text-2xl font-bold text-white mb-4 md:mb-6",
                      children: "Contact Information",
                    }),

                    e.jsxs("div", {
                      className: "space-y-6",
                      children: [
                        e.jsxs("div", {
                          className:
                            "flex items-start space-x-4",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary shrink-0",
                              children: e.jsx(h, { size: 24 }),
                            }),

                            e.jsxs("div", {
                              children: [
                                e.jsx("h4", {
                                  className:
                                    "text-white font-medium mb-1",
                                  children: "Email",
                                }),

                                e.jsx("a", {
                                  href:
                                    "mailto:kumarsumit14355@gmail.com",
                                  className:
                                    "text-gray-400 hover:text-white transition-colors",
                                  children:
                                    "kumarsumit14355@gmail.com",
                                }),
                              ],
                            }),
                          ],
                        }),

                        e.jsxs("div", {
                          className:
                            "flex items-start space-x-4",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary shrink-0",
                              children: e.jsx(p, { size: 24 }),
                            }),

                            e.jsxs("div", {
                              children: [
                                e.jsx("h4", {
                                  className:
                                    "text-white font-medium mb-1",
                                  children: "Location",
                                }),

                                e.jsx("p", {
                                  className: "text-gray-400",
                                  children: "Noida",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),

              e.jsx("div", {
                className:
                  "glass-panel p-4 sm:p-6 md:p-10 rounded-2xl border border-white/10",

                children: e.jsxs("form", {
                  ref: d,
                  onSubmit: x,
                  className: "space-y-6",

                  children: [
                    e.jsxs("div", {
                      className: "grid md:grid-cols-2 gap-6",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx("label", {
                              htmlFor: "name",
                              className:
                                "block text-sm font-medium text-gray-400 mb-2",
                              children: "Name",
                            }),

                            e.jsx("input", {
                              type: "text",
                              id: "name",
                              name: "name",
                              value: s.name,
                              onChange: o,
                              required: !0,
                              className:
                                "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors",
                              placeholder: "Your Name",
                            }),
                          ],
                        }),

                        e.jsxs("div", {
                          children: [
                            e.jsx("label", {
                              htmlFor: "email",
                              className:
                                "block text-sm font-medium text-gray-400 mb-2",
                              children: "Email",
                            }),

                            e.jsx("input", {
                              type: "email",
                              id: "email",
                              name: "email",
                              value: s.email,
                              onChange: o,
                              required: !0,
                              className:
                                "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors",
                              placeholder: "name@company.com",
                            }),
                          ],
                        }),
                      ],
                    }),

                    e.jsxs("div", {
                      children: [
                        e.jsx("label", {
                          htmlFor: "message",
                          className:
                            "block text-sm font-medium text-gray-400 mb-2",
                          children: "Message",
                        }),

                        e.jsx("textarea", {
                          id: "message",
                          name: "message",
                          value: s.message,
                          onChange: o,
                          required: !0,
                          rows: 4,
                          className:
                            "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none",
                          placeholder: "Tell me about your project...",
                        }),
                      ],
                    }),

                    i.message &&
                      e.jsx("div", {
                        className:
                          `px-4 py-2 rounded-lg text-sm ${
                            i.type === "success"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-red-500/20 text-red-400"
                          }`,
                        children: i.message,
                      }),

                    e.jsx("button", {
                      type: "submit",
                      disabled: l,
                      className:
                        "aurora-button w-full disabled:opacity-50 disabled:cursor-not-allowed",

                      children: e.jsxs("span", {
                        className: "btn-content justify-center",
                        children: [
                          l ? "Sending..." : "Send Message",
                          !l &&
                            e.jsx(g, {
                              size: 18,
                              className: "btn-icon",
                            }),
                        ],
                      }),
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
          "absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black pointer-events-none",
      }),
    ],
  });
};

export { f as default };
