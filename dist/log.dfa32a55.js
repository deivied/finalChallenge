// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7dhmc":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "f1fbd618dfa32a55";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"73Bq8":[function(require,module,exports) {
//Importation de module
const functionModule = require('./lib/funcApi');
//Affectations
const TransactionDate = document.querySelector("#datLog");
const TransactionObjet = document.querySelector("#transLog");
const code1 = document.querySelector("#codeLog");
const debit1 = document.querySelector("#debitLog");
const credit1 = document.querySelector("#creditLog");
const code2 = document.querySelector("#codeLogDeux");
const debit2 = document.querySelector("#debitLogDeux");
const credit2 = document.querySelector("#creditLogDeux");
const table = document.querySelector("#tbl");
const tbody = document.querySelector("#tbody");
const button = document.querySelector("#btn");
const inputCodeUn = document.querySelector("#codeUn");
const inputCodeDue = document.querySelector("#codeDue");
const p1 = document.querySelector('#somme1');
const p2 = document.querySelector('#somme2');
let trsDate;
let trsObjet;
let codeUn;
let codeDue;
let creshUn;
let creshDue, cresh;
let debUn;
let debDue, deb;
let sumDeb;
let sumCresh;
let entree = [];
let sumTime = [];
let dataList = [];
let id, idSum, idEntre;
let data = localStorage.listeCompte;
let dataSum = localStorage.credeb;
let dataLog = localStorage.listeLog;
let cress = 0;
let debs = 0;
console.log(dataLog);
functionModule.getLogValue();
functionModule.pushDataList();
//Verifier si le localStorage contient des donnees et
//Chargement des données sur une Table de la page
//écoute des événements sur chaque élément
TransactionDate.addEventListener('change', (a)=>{
    trsDate = a.target.value;
    console.log(trsDate);
});
TransactionObjet.addEventListener('change', (b)=>{
    trsObjet = b.target.value;
    console.log(trsObjet);
});
inputCodeUn.addEventListener('change', (c)=>{
    codeUn = c.target.value;
    console.log(codeUn);
});
inputCodeDue.addEventListener('change', (d)=>{
    codeDue = d.target.value;
    console.log(codeDue);
});
credit1.addEventListener('change', (e)=>{
    if (e.target.value) {
        debit1.disabled = true;
        credit2.disabled = true;
        cresh = e.target.value;
        console.log(cresh);
    } else {
        deb = null;
        debit1.disabled = false;
        credit2.disabled = false;
    }
});
credit2.addEventListener('change', (f)=>{
    if (f.target.value) {
        debit2.disabled = true;
        credit1.disabled = true;
        cresh = f.target.value;
        console.log(cresh);
    } else {
        deb = null;
        debit2.disabled = false;
        credit1.disabled = false;
    }
});
debit1.addEventListener('change', (g)=>{
    if (g.target.value) {
        credit1.disabled = true;
        debit2.disabled = true;
        deb = g.target.value;
        console.log(deb);
    } else {
        deb = null;
        credit1.disabled = false;
        debit2.disabled = false;
    }
});
debit2.addEventListener('change', (h)=>{
    if (h.target.value) {
        credit2.disabled = true;
        debit1.disabled = true;
        deb = h.target.value;
        console.log(deb);
    } else {
        deb = null;
        credit2.disabled = false;
        debit1.disabled = false;
    }
});
button.addEventListener('click', ()=>{
    if (TransactionDate.value && TransactionObjet.value && inputCodeDue.value && inputCodeUn.value) {
        functionModule.addLogDataToTable(trsDate, codeUn, codeDue, trsObjet, deb, cresh);
        functionModule.addSumTable(deb, cresh);
        sumTime.push({
            id: idSum,
            debit: deb,
            credit: cresh
        });
        entree.push({
            id: idEntre,
            date: trsDate,
            ObjetTraansac: trsObjet,
            code1: codeUn,
            code2: codeDue,
            debit: deb,
            credit: cresh
        });
        localStorage.setItem("listeLog", JSON.stringify(entree));
        localStorage.setItem("listeSum", JSON.stringify(sumTime));
        idEntre++;
        idSum++;
        functionModule.pushDataList();
    } else {
        alert('Veuiller remplir tous les champs');
        functionModule.clearInput();
    }
});

},{"./lib/funcApi":"2MjM1"}],"2MjM1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pushDataList", ()=>pushDataList
);
parcelHelpers.export(exports, "loadDataToList", ()=>loadDataToList
);
parcelHelpers.export(exports, "addDataToList", ()=>addDataToList
);
//Fin partie DataList
//F pour les somme credit et debit dans le tableau
parcelHelpers.export(exports, "addSumTable", ()=>addSumTable
);
parcelHelpers.export(exports, "credebSum", ()=>credebSum
);
//fin  somme credit et debit dans le tableau
//Fonction D'ajout de donnes storage dans la table de la page
parcelHelpers.export(exports, "tableEntree", ()=>tableEntree
);
parcelHelpers.export(exports, "addLogDataToTable", ()=>addLogDataToTable
);
parcelHelpers.export(exports, "clearInput", ()=>clearInput
);
parcelHelpers.export(exports, "getLogValue", ()=>getLogValue
);
//Partie concernant comment link la page1.input a la page2.datalist:
//Le datalist
let data = localStorage.listeCompte;
let dataSum = localStorage.credeb;
let dataLog = localStorage.listeLog;
function pushDataList() {
    if (data) {
        dataList = JSON.parse(data);
        // console.log(dataList)
        loadDataToList(dataList);
    } else {
        dataList = [];
        id = 0;
    }
}
function loadDataToList(array) {
    array.forEach(function(itemLog) {
        addDataToList(itemLog.code);
    });
}
function addDataToList(code) {
    code1.innerHTML += `<option value="${code}"/>`;
    code2.innerHTML += `<option value="${code}"/>`;
    return console.log(`<option value="${code}">${code}</option>`);
}
function addSumTable(debit, credit) {
    cress = parseInt(cress) + parseInt(credit);
    debs = parseInt(debs) + parseInt(debit);
    p1.textContent = debs;
    p2.textContent = cress;
}
function credebSum(array) {
    array.forEach((itemSum)=>{
        addSumTable(itemSum.debit, itemSum.credit);
    });
}
function tableEntree(array) {
    array.forEach(function(logItem) {
        addLogDataToTable(logItem.date, logItem.code1, logItem.code2, logItem.ObjetTraansac, logItem.debit, logItem.credit);
    });
}
function addLogDataToTable(date, codeUn, codeDue, ObjetTraansac, debit, credit) {
    const row = tbody.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);
    //isertion des valeurs à un index donné dans les cellules
    cell1.textContent = date;
    cell2.textContent = codeUn;
    cell3.textContent = codeDue;
    cell4.textContent = ObjetTraansac;
    cell5.textContent = debit;
    cell6.textContent = credit;
}
function clearInput() {
    TransactionDate.value = "";
    TransactionObjet.value = "";
    inputCodeUn.value = "";
    inputCodeDue.value = "";
    code1.value = "";
    code2.value = "";
    debit1.disabled = false;
    debit2.disabled = false;
    credit1.disabled = false;
    credit2.disabled = false;
    debit1.value = "";
    debit2.value = "";
    credit1.value = "";
    credit2.value = "";
}
function getLogValue() {
    if (dataLog) {
        entree = JSON.parse(dataLog);
        sumTime = JSON.parse(dataSum);
        idEntre = entree.length;
        idSum = sumTime.length;
        tableEntree(entree);
        credebSum(sumTime);
    } else {
        entree = [];
        sumTime = [];
        idEntre = 0;
        idSum = 0;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gOImj"}],"gOImj":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["7dhmc","73Bq8"], "73Bq8", "parcelRequire94c2")

//# sourceMappingURL=log.dfa32a55.js.map
