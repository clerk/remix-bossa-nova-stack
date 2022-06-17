var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server");
var import_react2 = require("@emotion/react");
var import_create_instance = __toESM(require("@emotion/server/create-instance"));
var import_react3 = require("@remix-run/react");

// app/context.ts
var import_react = require("react");
var ServerStyleContext = (0, import_react.createContext)(null);
var ClientStyleContext = (0, import_react.createContext)(null);

// app/createEmotionCache.ts
var import_cache = __toESM(require("@emotion/cache"));
function createEmotionCache() {
  return (0, import_cache.default)({ key: "css" });
}

// app/entry.server.tsx
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = (0, import_create_instance.default)(cache);
  const html = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(ServerStyleContext.Provider, {
    value: null
  }, /* @__PURE__ */ React.createElement(import_react2.CacheProvider, {
    value: cache
  }, /* @__PURE__ */ React.createElement(import_react3.RemixServer, {
    context: remixContext,
    url: request.url
  }))));
  const chunks = extractCriticalToChunks(html);
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(ServerStyleContext.Provider, {
    value: chunks.styles
  }, /* @__PURE__ */ React.createElement(import_react2.CacheProvider, {
    value: cache
  }, /* @__PURE__ */ React.createElement(import_react3.RemixServer, {
    context: remixContext,
    url: request.url
  }))));
  responseHeaders.set("Content-Type", "text/html");
  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/marcelcruz/Developer/clerk/remix-bossa-nova-stack/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => root_default,
  loader: () => loader
});
var import_react5 = __toESM(require("react"));
var import_react6 = require("@remix-run/react");
var import_ssr = require("@clerk/remix/ssr.server");
var import_remix = require("@clerk/remix");
var import_react7 = require("@chakra-ui/react");
var import_react8 = require("@emotion/react");

// app/theme/theme.ts
var import_react4 = require("@chakra-ui/react");

// app/theme/components/button.ts
var baseStyle = {
  rounded: "lg"
};
var defaultProps = {
  colorScheme: "green"
};
var sizes = {
  md: {
    px: 8
  }
};
var variants = {};
var Button = {
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
    "50": "#B0B5C0",
    "100": "#A5ABB6",
    "200": "#8E96A4",
    "300": "#788192",
    "400": "#646D7D",
    "500": "#525966",
    "600": "#393E47",
    "700": "#202328",
    "800": "#070809",
    "900": "#000000"
  },
  green: {
    "50": "#50FF95",
    "100": "#3BFF89",
    "200": "#12FF70",
    "300": "#00E95C",
    "400": "#00C04C",
    "500": "#00973C",
    "600": "#005F26",
    "700": "#00270F",
    "800": "#000000",
    "900": "#000000"
  }
};

// app/theme/theme.ts
var theme = (0, import_react4.extendTheme)({
  colors,
  components
});

// route:/Users/marcelcruz/Developer/clerk/remix-bossa-nova-stack/app/root.tsx
var import_focus_visible = require("focus-visible");
var loader = (args) => (0, import_ssr.rootAuthLoader)(args);
var CatchBoundary = (0, import_remix.ClerkCatchBoundary)();
function App() {
  return /* @__PURE__ */ import_react5.default.createElement(Document, null, /* @__PURE__ */ import_react5.default.createElement(import_react7.ChakraProvider, {
    theme
  }, /* @__PURE__ */ import_react5.default.createElement(import_react7.Box, {
    as: "main",
    minH: "100vh",
    pos: "relative"
  }, /* @__PURE__ */ import_react5.default.createElement(import_react6.Outlet, null), /* @__PURE__ */ import_react5.default.createElement(import_react7.Image, {
    src: "images/cover.png",
    alt: "Bossa Nova Stack cover",
    boxSize: "full",
    objectFit: "cover",
    pos: "absolute",
    top: 0,
    zIndex: -1
  }))));
}
var root_default = (0, import_remix.ClerkApp)(App);
var Document = (0, import_react8.withEmotionCache)(({ children }, emotionCache) => {
  const serverSyleData = import_react5.default.useContext(ServerStyleContext);
  const clientStyleData = import_react5.default.useContext(ClientStyleContext);
  import_react5.default.useEffect(() => {
    emotionCache.sheet.container = document.head;
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      ;
      emotionCache.sheet._insertTag(tag);
    });
    clientStyleData == null ? void 0 : clientStyleData.reset();
  }, []);
  return /* @__PURE__ */ import_react5.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react5.default.createElement("head", null, /* @__PURE__ */ import_react5.default.createElement("title", null, "Bossa Nova Stack"), /* @__PURE__ */ import_react5.default.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ import_react5.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ import_react5.default.createElement(import_react6.Meta, null), /* @__PURE__ */ import_react5.default.createElement(import_react6.Links, null), serverSyleData == null ? void 0 : serverSyleData.map(({ key, ids, css }) => /* @__PURE__ */ import_react5.default.createElement("style", {
    key,
    "data-emotion": `${key} ${ids.join(" ")}`,
    dangerouslySetInnerHTML: { __html: css }
  }))), /* @__PURE__ */ import_react5.default.createElement("body", null, children, /* @__PURE__ */ import_react5.default.createElement(import_react6.ScrollRestoration, null), /* @__PURE__ */ import_react5.default.createElement(import_react6.Scripts, null), true ? /* @__PURE__ */ import_react5.default.createElement(import_react6.LiveReload, null) : null));
});

// route:/Users/marcelcruz/Developer/clerk/remix-bossa-nova-stack/app/routes/sign-in.tsx
var sign_in_exports = {};
__export(sign_in_exports, {
  default: () => SignInRoute
});
var import_react9 = require("@chakra-ui/react");
var import_remix2 = require("@clerk/remix");
function SignInRoute() {
  return /* @__PURE__ */ React.createElement(import_react9.Center, {
    height: "100vh",
    p: 10
  }, /* @__PURE__ */ React.createElement(import_remix2.SignIn, {
    routing: "path",
    path: "/sign-in",
    signUpUrl: "/sign-up"
  }));
}

// route:/Users/marcelcruz/Developer/clerk/remix-bossa-nova-stack/app/routes/sign-up.tsx
var sign_up_exports = {};
__export(sign_up_exports, {
  default: () => SignUpRoute
});
var import_react10 = require("@chakra-ui/react");
var import_remix3 = require("@clerk/remix");
function SignUpRoute() {
  return /* @__PURE__ */ React.createElement(import_react10.Center, {
    height: "100vh",
    p: 10
  }, /* @__PURE__ */ React.createElement(import_remix3.SignUp, {
    routing: "path",
    path: "/sign-up",
    signInUrl: "/sign-in"
  }));
}

// route:/Users/marcelcruz/Developer/clerk/remix-bossa-nova-stack/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action,
  default: () => Index,
  loader: () => loader2
});
var import_react15 = require("@remix-run/react");
var import_node = require("@remix-run/node");
var import_react16 = require("@remix-run/react");
var import_remix5 = require("@clerk/remix");
var import_ssr3 = require("@clerk/remix/ssr.server");
var import_react17 = require("@chakra-ui/react");

// app/components/logo-banner.tsx
var import_react11 = require("@chakra-ui/react");
function LogoBanner() {
  return /* @__PURE__ */ React.createElement(import_react11.Flex, {
    direction: { base: "column", md: "row" },
    align: "center",
    justify: "center",
    bg: "white",
    gap: 8,
    py: 4
  }, /* @__PURE__ */ React.createElement(import_react11.Image, {
    h: 6,
    src: "images/remix.svg"
  }), /* @__PURE__ */ React.createElement(import_react11.Image, {
    h: 8,
    src: "images/clerk.svg"
  }), /* @__PURE__ */ React.createElement(import_react11.Image, {
    h: 8,
    src: "images/supabase.svg"
  }), /* @__PURE__ */ React.createElement(import_react11.Image, {
    h: 8,
    src: "images/chakra.png"
  }), /* @__PURE__ */ React.createElement(import_react11.Image, {
    h: 8,
    src: "images/vercel.svg"
  }));
}

// app/components/songs-list.tsx
var import_react12 = __toESM(require("react"));
var import_remix4 = require("@clerk/remix");
var import_react13 = require("@chakra-ui/react");
var import_react14 = require("@remix-run/react");
function SongsList({ songs }) {
  var _a;
  const { user } = (0, import_remix4.useUser)();
  const transition = (0, import_react14.useTransition)();
  const headingSize = (0, import_react13.useBreakpointValue)({ base: "sm", md: "md" });
  const formRef = import_react12.default.useRef(null);
  const addSongRef = import_react12.default.useRef(null);
  const isAdding = transition.state === "submitting" && transition.submission.formData.get("_action") === "create";
  import_react12.default.useEffect(() => {
    var _a2, _b;
    if (!isAdding) {
      (_a2 = formRef.current) == null ? void 0 : _a2.reset();
      (_b = addSongRef.current) == null ? void 0 : _b.focus();
    }
  }, [isAdding]);
  if (!user)
    return null;
  return /* @__PURE__ */ import_react12.default.createElement(import_react13.Stack, {
    align: "stretch",
    bg: "white",
    color: "black",
    gap: 4,
    px: { base: 8, sm: 10 },
    py: 6,
    rounded: "xl",
    shadow: "xl"
  }, /* @__PURE__ */ import_react12.default.createElement(import_react13.Heading, {
    size: headingSize
  }, user && `Hey ${user.firstName || ((_a = user.primaryEmailAddress) == null ? void 0 : _a.emailAddress)}, here are your favorite songs:`), /* @__PURE__ */ import_react12.default.createElement(import_react13.UnorderedList, {
    textAlign: "left"
  }, songs.map((song) => /* @__PURE__ */ import_react12.default.createElement(import_react13.ListItem, {
    key: song.id
  }, song.body))), /* @__PURE__ */ import_react12.default.createElement(import_react14.Form, {
    ref: formRef,
    method: "post"
  }, /* @__PURE__ */ import_react12.default.createElement(import_react13.Flex, {
    direction: { base: "column", md: "row" },
    gap: 2,
    w: "full"
  }, /* @__PURE__ */ import_react12.default.createElement(import_react13.Input, {
    name: "add-song",
    ref: addSongRef,
    type: "text",
    placeholder: "Add song"
  }), /* @__PURE__ */ import_react12.default.createElement(import_react13.Button, {
    type: "submit",
    name: "_action",
    value: "create",
    disabled: transition.state === "submitting"
  }, "Add"))));
}

// app/utils/db.server.ts
var import_ssr2 = require("@clerk/remix/ssr.server");
var import_supabase_js = require("@supabase/supabase-js");
var getDB = async (request) => {
  try {
    const { userId, getToken } = await (0, import_ssr2.getAuth)(request);
    if (!userId)
      return null;
    const secret = await getToken({ template: "supabase" });
    if (!secret)
      return null;
    const supabaseUrl = process.env.SUPABASE_URL || "";
    const supabaseKey = process.env.SUPABASE_ANON_KEY || "";
    const client = (0, import_supabase_js.createClient)(supabaseUrl, supabaseKey);
    client.auth.setAuth(secret);
    return client;
  } catch (error) {
    return null;
  }
};

// route:/Users/marcelcruz/Developer/clerk/remix-bossa-nova-stack/app/routes/index.tsx
var dbErrorMessage = 'Something is missing.<br/>Did you set up Supabase yet?<br/>You can find the <a href="https://github.com/clerkinc/remix-bossa-nova-stack#configuring-the-database" target="_blank">instructions in the README file</a>.';
var loader2 = async ({ request }) => {
  const { userId } = await (0, import_ssr3.getAuth)(request);
  if (!userId)
    return null;
  const db = await getDB(request);
  if (!db) {
    return (0, import_node.json)({ error: dbErrorMessage });
  }
  const { data } = await db.from("songs").select();
  if (!data) {
    return (0, import_node.json)({ error: dbErrorMessage });
  }
  return (0, import_node.json)({ songs: data });
};
var action = async ({ request }) => {
  const formData = await request.formData();
  const { userId } = await (0, import_ssr3.getAuth)(request);
  const song = formData.get("add-song");
  const db = await getDB(request);
  if (!db)
    return null;
  await db.from("songs").insert({ body: song, user_id: userId });
  return null;
};
function Index() {
  const { signOut } = (0, import_remix5.useAuth)();
  const data = (0, import_react15.useLoaderData)();
  const headingSize = (0, import_react17.useBreakpointValue)({ base: "lg", sm: "2xl", lg: "4xl" });
  return /* @__PURE__ */ React.createElement(import_react17.Stack, {
    justify: "center",
    textAlign: "center",
    h: "100vh",
    flex: 1,
    color: "white",
    gap: 20
  }, /* @__PURE__ */ React.createElement(import_react17.Stack, {
    gap: 4,
    p: { base: 4, md: 8 }
  }, /* @__PURE__ */ React.createElement(import_react17.Heading, {
    as: "h1",
    size: headingSize,
    textTransform: "uppercase",
    color: "green.400"
  }, "Bossa Nova Stack"), /* @__PURE__ */ React.createElement(import_react17.Text, {
    size: "lg"
  }, "Check the README file for instructions on how to get this project deployed."), /* @__PURE__ */ React.createElement(import_remix5.SignedOut, null, /* @__PURE__ */ React.createElement(import_react17.Flex, {
    justify: "center",
    gap: 4
  }, /* @__PURE__ */ React.createElement(import_react17.Button, {
    as: import_react16.Link,
    to: "/sign-in",
    bg: "gray.500"
  }, "Sign in"), /* @__PURE__ */ React.createElement(import_react17.Button, {
    as: import_react16.Link,
    to: "/sign-up"
  }, "Sign up"))), /* @__PURE__ */ React.createElement(import_remix5.SignedIn, null, /* @__PURE__ */ React.createElement(import_react17.Stack, {
    align: "center",
    gap: 4
  }, /* @__PURE__ */ React.createElement(SongsList, {
    songs: (data == null ? void 0 : data.songs) || []
  }), (data == null ? void 0 : data.error) && /* @__PURE__ */ React.createElement(import_react17.Text, {
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
  }), /* @__PURE__ */ React.createElement(import_react17.Button, {
    onClick: () => signOut(),
    bg: "gray.500"
  }, "Sign out")))), /* @__PURE__ */ React.createElement(LogoBanner, null));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "89fe0afb", "entry": { "module": "/build/entry.client-TWBCX3ET.js", "imports": ["/build/_shared/chunk-IOMVH2XD.js", "/build/_shared/chunk-EWCRA4YU.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-AB4LEOHB.js", "imports": ["/build/_shared/chunk-2R2M4TBS.js", "/build/_shared/chunk-OJTP3DI7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-DBGFDIGG.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/sign-in": { "id": "routes/sign-in", "parentId": "root", "path": "sign-in", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/sign-in-MCOUATHJ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/sign-up": { "id": "routes/sign-up", "parentId": "root", "path": "sign-up", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/sign-up-6SWQKAWZ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-89FE0AFB.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/sign-in": {
    id: "routes/sign-in",
    parentId: "root",
    path: "sign-in",
    index: void 0,
    caseSensitive: void 0,
    module: sign_in_exports
  },
  "routes/sign-up": {
    id: "routes/sign-up",
    parentId: "root",
    path: "sign-up",
    index: void 0,
    caseSensitive: void 0,
    module: sign_up_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
