import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';
import { c as buildAssetsDir } from './server.mjs';
import 'unenv/runtime/polyfill/fetch.node';
import 'http';
import 'https';
import 'destr';
import 'ohmyfetch';
import 'unenv/runtime/fetch/index';
import 'defu';

const assets = {
  "/_nuxt/bootstrap-6162a612.mjs": {
    "type": "application/javascript",
    "etag": "\"1a61c-yZwPSYWHqpvftQVHIZ7/PUyH3sY\"",
    "mtime": "2022-02-08T10:17:46.545Z",
    "path": "../public/_nuxt/bootstrap-6162a612.mjs"
  },
  "/_nuxt/bootstrap.8fd81345.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"12bf-uLRHCXQBUQu72xTq4E3u6AOdWyI\"",
    "mtime": "2022-02-08T10:17:46.544Z",
    "path": "../public/_nuxt/bootstrap.8fd81345.css"
  },
  "/_nuxt/entry-f5283ad3.mjs": {
    "type": "application/javascript",
    "etag": "\"65-U9C+2ApmDk9PRu4HHeZJCh3sRbo\"",
    "mtime": "2022-02-08T10:17:46.544Z",
    "path": "../public/_nuxt/entry-f5283ad3.mjs"
  },
  "/_nuxt/index-42d4101c.mjs": {
    "type": "application/javascript",
    "etag": "\"63e-xGiPuRkJFXIjKbRfwBECA/OdR+Y\"",
    "mtime": "2022-02-08T10:17:46.543Z",
    "path": "../public/_nuxt/index-42d4101c.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"25b-glc0HEHFs8Xn+XUsYNW1Wb0cZYo\"",
    "mtime": "2022-02-08T10:17:46.543Z",
    "path": "../public/_nuxt/manifest.json"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "/_nuxt/Users/tim/projects/timvandaatselaar.github.io/dist" + "/" + "1644315464";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  const isBuildAsset = id.startsWith(buildAssetsDir());
  if (!asset) {
    if (isBuildAsset && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (isBuildAsset) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
