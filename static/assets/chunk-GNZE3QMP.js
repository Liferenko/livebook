import{Fl as h,Gl as _}from"./chunk-XDVUM6M6.js";import{e as m,j as n}from"./chunk-3X664NSF.js";function a(){return import("./tsMode-ENUE6W7A.js")}var L,y,E,x,u,C,D,o,l,c,g,p,b,v,S,f,d,O,j,w,N=m(()=>{_();_();L=Object.defineProperty,y=Object.getOwnPropertyDescriptor,E=Object.getOwnPropertyNames,x=Object.prototype.hasOwnProperty,u=(e,i,t,s)=>{if(i&&typeof i=="object"||typeof i=="function")for(let r of E(i))!x.call(e,r)&&r!==t&&L(e,r,{get:()=>i[r],enumerable:!(s=y(i,r))||s.enumerable});return e},C=(e,i,t)=>(u(e,i,"default"),t&&u(t,i,"default")),D="5.0.2",o={};C(o,h);l=(e=>(e[e.None=0]="None",e[e.CommonJS=1]="CommonJS",e[e.AMD=2]="AMD",e[e.UMD=3]="UMD",e[e.System=4]="System",e[e.ES2015=5]="ES2015",e[e.ESNext=99]="ESNext",e))(l||{}),c=(e=>(e[e.None=0]="None",e[e.Preserve=1]="Preserve",e[e.React=2]="React",e[e.ReactNative=3]="ReactNative",e[e.ReactJSX=4]="ReactJSX",e[e.ReactJSXDev=5]="ReactJSXDev",e))(c||{}),g=(e=>(e[e.CarriageReturnLineFeed=0]="CarriageReturnLineFeed",e[e.LineFeed=1]="LineFeed",e))(g||{}),p=(e=>(e[e.ES3=0]="ES3",e[e.ES5=1]="ES5",e[e.ES2015=2]="ES2015",e[e.ES2016=3]="ES2016",e[e.ES2017=4]="ES2017",e[e.ES2018=5]="ES2018",e[e.ES2019=6]="ES2019",e[e.ES2020=7]="ES2020",e[e.ESNext=99]="ESNext",e[e.JSON=100]="JSON",e[e.Latest=99]="Latest",e))(p||{}),b=(e=>(e[e.Classic=1]="Classic",e[e.NodeJs=2]="NodeJs",e))(b||{}),v=class{constructor(e,i,t,s,r){n(this,"_onDidChange",new o.Emitter);n(this,"_onDidExtraLibsChange",new o.Emitter);n(this,"_extraLibs");n(this,"_removedExtraLibs");n(this,"_eagerModelSync");n(this,"_compilerOptions");n(this,"_diagnosticsOptions");n(this,"_workerOptions");n(this,"_onDidExtraLibsChangeTimeout");n(this,"_inlayHintsOptions");n(this,"_modeConfiguration");this._extraLibs=Object.create(null),this._removedExtraLibs=Object.create(null),this._eagerModelSync=!1,this.setCompilerOptions(e),this.setDiagnosticsOptions(i),this.setWorkerOptions(t),this.setInlayHintsOptions(s),this.setModeConfiguration(r),this._onDidExtraLibsChangeTimeout=-1}get onDidChange(){return this._onDidChange.event}get onDidExtraLibsChange(){return this._onDidExtraLibsChange.event}get modeConfiguration(){return this._modeConfiguration}get workerOptions(){return this._workerOptions}get inlayHintsOptions(){return this._inlayHintsOptions}getExtraLibs(){return this._extraLibs}addExtraLib(e,i){let t;if(typeof i=="undefined"?t=`ts:extralib-${Math.random().toString(36).substring(2,15)}`:t=i,this._extraLibs[t]&&this._extraLibs[t].content===e)return{dispose:()=>{}};let s=1;return this._removedExtraLibs[t]&&(s=this._removedExtraLibs[t]+1),this._extraLibs[t]&&(s=this._extraLibs[t].version+1),this._extraLibs[t]={content:e,version:s},this._fireOnDidExtraLibsChangeSoon(),{dispose:()=>{let r=this._extraLibs[t];r&&r.version===s&&(delete this._extraLibs[t],this._removedExtraLibs[t]=s,this._fireOnDidExtraLibsChangeSoon())}}}setExtraLibs(e){for(let i in this._extraLibs)this._removedExtraLibs[i]=this._extraLibs[i].version;if(this._extraLibs=Object.create(null),e&&e.length>0)for(let i of e){let t=i.filePath||`ts:extralib-${Math.random().toString(36).substring(2,15)}`,s=i.content,r=1;this._removedExtraLibs[t]&&(r=this._removedExtraLibs[t]+1),this._extraLibs[t]={content:s,version:r}}this._fireOnDidExtraLibsChangeSoon()}_fireOnDidExtraLibsChangeSoon(){this._onDidExtraLibsChangeTimeout===-1&&(this._onDidExtraLibsChangeTimeout=window.setTimeout(()=>{this._onDidExtraLibsChangeTimeout=-1,this._onDidExtraLibsChange.fire(void 0)},0))}getCompilerOptions(){return this._compilerOptions}setCompilerOptions(e){this._compilerOptions=e||Object.create(null),this._onDidChange.fire(void 0)}getDiagnosticsOptions(){return this._diagnosticsOptions}setDiagnosticsOptions(e){this._diagnosticsOptions=e||Object.create(null),this._onDidChange.fire(void 0)}setWorkerOptions(e){this._workerOptions=e||Object.create(null),this._onDidChange.fire(void 0)}setInlayHintsOptions(e){this._inlayHintsOptions=e||Object.create(null),this._onDidChange.fire(void 0)}setMaximumWorkerIdleTime(e){}setEagerModelSync(e){this._eagerModelSync=e}getEagerModelSync(){return this._eagerModelSync}setModeConfiguration(e){this._modeConfiguration=e||Object.create(null),this._onDidChange.fire(void 0)}},S=D,f={completionItems:!0,hovers:!0,documentSymbols:!0,definitions:!0,references:!0,documentHighlights:!0,rename:!0,diagnostics:!0,documentRangeFormattingEdits:!0,signatureHelp:!0,onTypeFormattingEdits:!0,codeActions:!0,inlayHints:!0},d=new v({allowNonTsExtensions:!0,target:99},{noSemanticValidation:!1,noSyntaxValidation:!1,onlyVisible:!1},{},{},f),O=new v({allowNonTsExtensions:!0,allowJs:!0,target:99},{noSemanticValidation:!0,noSyntaxValidation:!1,onlyVisible:!1},{},{},f),j=()=>a().then(e=>e.getTypeScriptWorker()),w=()=>a().then(e=>e.getJavaScriptWorker());o.languages.typescript={ModuleKind:l,JsxEmit:c,NewLineKind:g,ScriptTarget:p,ModuleResolutionKind:b,typescriptVersion:S,typescriptDefaults:d,javascriptDefaults:O,getTypeScriptWorker:j,getJavaScriptWorker:w};o.languages.onLanguage("typescript",()=>a().then(e=>e.setupTypeScript(d)));o.languages.onLanguage("javascript",()=>a().then(e=>e.setupJavaScript(O)))});export{d as a,N as b};
/*! Bundled license information:

monaco-editor/esm/vs/language/typescript/monaco.contribution.js:
  (*!-----------------------------------------------------------------------------
   * Copyright (c) Microsoft Corporation. All rights reserved.
   * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
   * Released under the MIT license
   * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
   *-----------------------------------------------------------------------------*)
*/