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
var import_react7 = require("@chakra-ui/react");
var import_react8 = require("@emotion/react");
var import_ssr = require("@clerk/remix/ssr.server");
var import_remix = require("@clerk/remix");

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
  default: () => Index
});
var import_remix4 = require("@clerk/remix");
var import_react12 = require("@chakra-ui/react");
var import_react13 = require("@remix-run/react");

// app/components/logo-banner.tsx
var import_react11 = require("@chakra-ui/react");
function LogoBanner() {
  return /* @__PURE__ */ React.createElement(import_react11.Center, {
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

// route:/Users/marcelcruz/Developer/clerk/remix-bossa-nova-stack/app/routes/index.tsx
function Index() {
  const { user } = (0, import_remix4.useUser)();
  const { signOut } = (0, import_remix4.useAuth)();
  return /* @__PURE__ */ React.createElement(import_react12.Stack, {
    justify: "center",
    textAlign: "center",
    h: "100vh",
    flex: 1,
    color: "white",
    gap: 20
  }, /* @__PURE__ */ React.createElement(import_react12.Stack, {
    gap: 4
  }, /* @__PURE__ */ React.createElement(import_react12.Heading, {
    as: "h1",
    size: "4xl",
    textTransform: "uppercase",
    color: "green.400"
  }, "Bossa Nova Stack"), /* @__PURE__ */ React.createElement(import_react12.Text, {
    size: "lg"
  }, "Check the README file for instructions on how to get this project deployed.")), /* @__PURE__ */ React.createElement(import_remix4.SignedOut, null, /* @__PURE__ */ React.createElement(import_react12.Flex, {
    justify: "center",
    gap: 4
  }, /* @__PURE__ */ React.createElement(import_react12.Button, {
    as: import_react13.Link,
    to: "/sign-in",
    bg: "gray.500"
  }, "Sign in"), /* @__PURE__ */ React.createElement(import_react12.Button, {
    as: import_react13.Link,
    to: "/sign-up"
  }, "Sign up"))), /* @__PURE__ */ React.createElement(import_remix4.SignedIn, null, /* @__PURE__ */ React.createElement(import_react12.Stack, {
    align: "center",
    gap: 4
  }, /* @__PURE__ */ React.createElement(import_react12.Heading, null, user && `Hi there, ${user.firstName}.`), /* @__PURE__ */ React.createElement(import_react12.Button, {
    onClick: () => signOut()
  }, "Sign out"))), /* @__PURE__ */ React.createElement(LogoBanner, null));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "faf53d17", "entry": { "module": "/build/entry.client-ZGM5CEHM.js", "imports": ["/build/_shared/chunk-YUJEHUNW.js", "/build/_shared/chunk-VMGFVQCX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-COCTO2NK.js", "imports": ["/build/_shared/chunk-VNB43UN3.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-QN7SWIL3.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/sign-in": { "id": "routes/sign-in", "parentId": "root", "path": "sign-in", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/sign-in-H7BK2OSS.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/sign-up": { "id": "routes/sign-up", "parentId": "root", "path": "sign-up", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/sign-up-3HBJ2OUI.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-FAF53D17.js" };

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
