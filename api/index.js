var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_react2 = require("@emotion/react"), import_create_instance = __toESM(require("@emotion/server/create-instance")), import_react3 = require("@remix-run/react");

// app/context.ts
var import_react = require("react"), ServerStyleContext = (0, import_react.createContext)(null), ClientStyleContext = (0, import_react.createContext)(
  null
);

// app/createEmotionCache.ts
var import_cache = __toESM(require("@emotion/cache"));
function createEmotionCache() {
  return (0, import_cache.default)({ key: "css" });
}

// app/entry.server.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let cache = createEmotionCache(), { extractCriticalToChunks } = (0, import_create_instance.default)(cache), html = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ServerStyleContext.Provider, { value: null, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CacheProvider, { value: cache, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 22,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 21,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this)
  ), chunks = extractCriticalToChunks(html), markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ServerStyleContext.Provider, { value: chunks.styles, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CacheProvider, { value: cache, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 32,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => root_default,
  loader: () => loader
});
var import_react5 = __toESM(require("react")), import_react6 = require("@remix-run/react"), import_ssr = require("@clerk/remix/ssr.server"), import_remix = require("@clerk/remix"), import_react7 = require("@chakra-ui/react"), import_react8 = require("@emotion/react");

// app/theme/theme.ts
var import_react4 = require("@chakra-ui/react");

// app/theme/components/button.ts
var baseStyle = {
  rounded: "lg"
}, defaultProps = {
  colorScheme: "green"
}, sizes = {
  md: {
    px: 8
  }
}, variants = {}, Button = {
  baseStyle,
  defaultProps,
  sizes,
  variants
};

// app/theme/components/index.ts
var components = {
  Button
};

// app/theme/foundations/colors.ts
var colors = {
  gray: {
    50: "#B0B5C0",
    100: "#A5ABB6",
    200: "#8E96A4",
    300: "#788192",
    400: "#646D7D",
    500: "#525966",
    600: "#393E47",
    700: "#202328",
    800: "#070809",
    900: "#000000"
  },
  green: {
    50: "#50FF95",
    100: "#3BFF89",
    200: "#12FF70",
    300: "#00E95C",
    400: "#00C04C",
    500: "#00973C",
    600: "#005F26",
    700: "#00270F",
    800: "#000000",
    900: "#000000"
  }
};

// app/theme/theme.ts
var theme = (0, import_react4.extendTheme)({
  colors,
  components
});

// app/root.tsx
var import_focus_visible = require("focus-visible"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), loader = (args) => (0, import_ssr.rootAuthLoader)(args), CatchBoundary = (0, import_remix.ClerkCatchBoundary)();
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react7.ChakraProvider, { theme, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react7.Box, { as: "main", minH: "100vh", pos: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react6.Outlet, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 27,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react7.Image,
      {
        src: "images/cover.png",
        alt: "Bossa Nova Stack cover",
        boxSize: "full",
        objectFit: "cover",
        pos: "absolute",
        top: 0,
        zIndex: -1
      },
      void 0,
      !1,
      {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 21
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 26,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 25,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this);
}
var root_default = (0, import_remix.ClerkApp)(App), Document = (0, import_react8.withEmotionCache)(
  ({ children }, emotionCache) => {
    let serverSyleData = import_react5.default.useContext(ServerStyleContext), clientStyleData = import_react5.default.useContext(ClientStyleContext);
    return import_react5.default.useEffect(() => {
      emotionCache.sheet.container = document.head;
      let tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush(), tags.forEach((tag) => {
        emotionCache.sheet._insertTag(tag);
      }), clientStyleData == null || clientStyleData.reset();
    }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: "Bossa Nova Stack" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 73,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 74,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "meta",
          {
            name: "viewport",
            content: "width=device-width,initial-scale=1"
          },
          void 0,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 75,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react6.Meta, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 79,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react6.Links, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 80,
          columnNumber: 21
        }, this),
        serverSyleData == null ? void 0 : serverSyleData.map(({ key, ids, css }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "style",
          {
            "data-emotion": `${key} ${ids.join(" ")}`,
            dangerouslySetInnerHTML: { __html: css }
          },
          key,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 82,
            columnNumber: 25
          },
          this
        ))
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 72,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
        children,
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react6.ScrollRestoration, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 92,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react6.Scripts, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 93,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react6.LiveReload, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 95,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 90,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 71,
      columnNumber: 13
    }, this);
  }
);

// app/routes/sign-in/$.tsx
var __exports = {};
__export(__exports, {
  default: () => SignInRoute
});
var import_react9 = require("@chakra-ui/react"), import_remix2 = require("@clerk/remix"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function SignInRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react9.Center, { height: "100vh", p: 10, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_remix2.SignIn, { routing: "path", path: "/sign-in", signUpUrl: "/sign-up" }, void 0, !1, {
    fileName: "app/routes/sign-in/$.tsx",
    lineNumber: 7,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/sign-in/$.tsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

// app/routes/sign-up/$.tsx
var __exports2 = {};
__export(__exports2, {
  default: () => SignUpRoute
});
var import_react10 = require("@chakra-ui/react"), import_remix3 = require("@clerk/remix"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function SignUpRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react10.Center, { height: "100vh", p: 10, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_remix3.SignUp, { routing: "path", path: "/sign-up", signInUrl: "/sign-in" }, void 0, !1, {
    fileName: "app/routes/sign-up/$.tsx",
    lineNumber: 7,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/sign-up/$.tsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action,
  default: () => Index,
  loader: () => loader2
});
var import_react15 = require("@remix-run/react"), import_node = require("@remix-run/node"), import_react16 = require("@remix-run/react"), import_remix5 = require("@clerk/remix"), import_ssr3 = require("@clerk/remix/ssr.server"), import_react17 = require("@chakra-ui/react");

// app/components/logo-banner.tsx
var import_react11 = require("@chakra-ui/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function LogoBanner() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    import_react11.Flex,
    {
      direction: { base: "column", md: "row" },
      align: "center",
      justify: "center",
      bg: "white",
      gap: 8,
      py: 4,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react11.Image, { h: 6, src: "images/remix.svg" }, void 0, !1, {
          fileName: "app/components/logo-banner.tsx",
          lineNumber: 13,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react11.Image, { h: 8, src: "images/clerk.svg" }, void 0, !1, {
          fileName: "app/components/logo-banner.tsx",
          lineNumber: 14,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react11.Image, { h: 8, src: "images/supabase.svg" }, void 0, !1, {
          fileName: "app/components/logo-banner.tsx",
          lineNumber: 15,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react11.Image, { h: 8, src: "images/chakra.png" }, void 0, !1, {
          fileName: "app/components/logo-banner.tsx",
          lineNumber: 16,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react11.Image, { h: 8, src: "images/vercel.svg" }, void 0, !1, {
          fileName: "app/components/logo-banner.tsx",
          lineNumber: 17,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/logo-banner.tsx",
      lineNumber: 5,
      columnNumber: 9
    },
    this
  );
}

// app/components/songs-list.tsx
var import_react12 = __toESM(require("react")), import_remix4 = require("@clerk/remix"), import_react13 = require("@chakra-ui/react"), import_react14 = require("@remix-run/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function SongsList({ songs }) {
  var _a;
  let { user } = (0, import_remix4.useUser)(), transition = (0, import_react14.useTransition)(), headingSize = (0, import_react13.useBreakpointValue)({ base: "sm", md: "md" }), formRef = import_react12.default.useRef(null), addSongRef = import_react12.default.useRef(null), isAdding = transition.state === "submitting" && transition.submission.formData.get("_action") === "create";
  return import_react12.default.useEffect(() => {
    var _a2, _b;
    isAdding || ((_a2 = formRef.current) == null || _a2.reset(), (_b = addSongRef.current) == null || _b.focus());
  }, [isAdding]), user ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    import_react13.Stack,
    {
      align: "stretch",
      bg: "white",
      color: "black",
      gap: 4,
      px: { base: 8, sm: 10 },
      py: 6,
      rounded: "xl",
      shadow: "xl",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react13.Heading, { size: headingSize, children: user && `Hey ${user.firstName || ((_a = user.primaryEmailAddress) == null ? void 0 : _a.emailAddress)}, here are your favorite songs:` }, void 0, !1, {
          fileName: "app/components/songs-list.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react13.UnorderedList, { textAlign: "left", children: songs.map((song) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react13.ListItem, { children: song.body }, song.id, !1, {
          fileName: "app/components/songs-list.tsx",
          lineNumber: 65,
          columnNumber: 21
        }, this)) }, void 0, !1, {
          fileName: "app/components/songs-list.tsx",
          lineNumber: 63,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react14.Form, { ref: formRef, method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          import_react13.Flex,
          {
            direction: { base: "column", md: "row" },
            gap: 2,
            w: "full",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                import_react13.Input,
                {
                  name: "add-song",
                  ref: addSongRef,
                  type: "text",
                  placeholder: "Add song"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/songs-list.tsx",
                  lineNumber: 75,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                import_react13.Button,
                {
                  type: "submit",
                  name: "_action",
                  value: "create",
                  disabled: transition.state === "submitting",
                  children: "Add"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/songs-list.tsx",
                  lineNumber: 81,
                  columnNumber: 21
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/songs-list.tsx",
            lineNumber: 70,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/songs-list.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/songs-list.tsx",
      lineNumber: 46,
      columnNumber: 9
    },
    this
  ) : null;
}

// app/utils/db.server.ts
var import_ssr2 = require("@clerk/remix/ssr.server"), import_supabase_js = require("@supabase/supabase-js"), getDB = async (request) => {
  try {
    console.log(request);
    let { userId, getToken } = await (0, import_ssr2.getAuth)(request);
    if (!userId)
      return null;
    let secret = await getToken({ template: "supabase" });
    if (!secret)
      return null;
    let supabaseUrl = process.env.SUPABASE_URL || "", supabaseKey = process.env.SUPABASE_ANON_KEY || "";
    return (0, import_supabase_js.createClient)(supabaseUrl, supabaseKey, {
      global: {
        headers: {
          Authorization: `Bearer ${secret}`
        }
      }
    });
  } catch {
    return null;
  }
};

// app/routes/index.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), dbErrorMessage = 'Something is missing.<br/>Did you set up Supabase yet?<br/>You can find the <a href="https://github.com/clerkinc/remix-bossa-nova-stack#configuring-the-database" target="_blank">instructions in the README file</a>.', loader2 = async (request) => {
  let { userId } = await (0, import_ssr3.getAuth)(request);
  if (!userId)
    return null;
  let db = await getDB(request);
  if (!db)
    return (0, import_node.json)({ error: dbErrorMessage });
  let { data } = await db.from("bossa_nova_songs").select();
  return data ? (0, import_node.json)({ songs: data }) : (0, import_node.json)({ error: dbErrorMessage });
}, action = async (req) => {
  let formData = await req.request.formData(), { userId } = await (0, import_ssr3.getAuth)(req), song = formData.get("add-song"), db = await getDB(req);
  return db && await db.from("bossa_nova_songs").insert({ body: song, user_id: userId }), null;
};
function Index() {
  let { signOut } = (0, import_remix5.useAuth)(), data = (0, import_react15.useLoaderData)(), headingSize = (0, import_react17.useBreakpointValue)({ base: "lg", sm: "2xl", lg: "4xl" });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    import_react17.Stack,
    {
      justify: "center",
      textAlign: "center",
      h: "100vh",
      flex: 1,
      color: "white",
      gap: 20,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react17.Stack, { gap: 4, p: { base: 4, md: 8 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            import_react17.Heading,
            {
              as: "h1",
              size: headingSize,
              textTransform: "uppercase",
              color: "green.400",
              children: "Bossa Nova Stack"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 67,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react17.Text, { size: "lg", children: [
            "Check the",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              import_react17.Link,
              {
                href: "https://github.com/clerkinc/remix-bossa-nova-stack/blob/main/README.md",
                isExternal: !0,
                textDecoration: "underline",
                color: "white",
                _visited: {
                  color: "white"
                },
                children: "README"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/index.tsx",
                lineNumber: 78,
                columnNumber: 11
              },
              this
            ),
            " ",
            "file for instructions on how to get this project deployed."
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 76,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_remix5.SignedOut, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react17.Flex, { justify: "center", gap: 4, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react17.Button, { as: import_react16.Link, to: "/sign-in", bg: "gray.500", children: "Sign in" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 94,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react17.Button, { as: import_react16.Link, to: "/sign-up", children: "Sign up" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 98,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 93,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 92,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_remix5.SignedIn, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react17.Stack, { align: "center", gap: 4, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SongsList, { songs: (data == null ? void 0 : data.songs) || [] }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 106,
              columnNumber: 13
            }, this),
            (data == null ? void 0 : data.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              import_react17.Text,
              {
                color: "red.500",
                fontWeight: "bold",
                sx: {
                  "& a": {
                    textDecoration: "underline"
                  }
                },
                dangerouslySetInnerHTML: {
                  __html: data.error
                }
              },
              void 0,
              !1,
              {
                fileName: "app/routes/index.tsx",
                lineNumber: 109,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react17.Button, { onClick: () => signOut(), bg: "gray.500", children: "Sign out" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 122,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 105,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 104,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 66,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(LogoBanner, {}, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 129,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/index.tsx",
      lineNumber: 58,
      columnNumber: 5
    },
    this
  );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-2Q53L5GT.js", imports: ["/build/_shared/chunk-3T32X233.js", "/build/_shared/chunk-KPXKGDWT.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-VHOMN33A.js", imports: ["/build/_shared/chunk-YDC2MZUD.js", "/build/_shared/chunk-LORDSE64.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-DL4PEUPC.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in/$": { id: "routes/sign-in/$", parentId: "root", path: "sign-in/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in/$-UHD7PX2C.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-up/$": { id: "routes/sign-up/$", parentId: "root", path: "sign-up/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up/$-PNX4X6CR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, version: "594e2aae", hmr: void 0, url: "/build/manifest-594E2AAE.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/sign-in/$": {
    id: "routes/sign-in/$",
    parentId: "root",
    path: "sign-in/*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  },
  "routes/sign-up/$": {
    id: "routes/sign-up/$",
    parentId: "root",
    path: "sign-up/*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
