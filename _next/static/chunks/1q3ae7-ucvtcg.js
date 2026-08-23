(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,16203,e=>{"use strict";var t=e.i(47760),r=e.i(95627);class a extends r.TextureSource{constructor(e){super(e),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(e){return globalThis.HTMLImageElement&&e instanceof HTMLImageElement||"u">typeof ImageBitmap&&e instanceof ImageBitmap||globalThis.VideoFrame&&e instanceof VideoFrame}}a.extension=t.ExtensionType.TextureSource,e.s(["ImageSource",0,a])},61805,77718,e=>{"use strict";let t;var r=e.i(57471),a=e.i(27402),i=e.i(56881);function n(e){let t=a.DOMAdapter.get().createCanvas(6,1),r=t.getContext("2d");return r.fillStyle=e,r.fillRect(0,0,6,1),t}function s(){if(void 0!==t)return t;try{let e=n("#ff00ff"),r=n("#ffff00"),i=a.DOMAdapter.get().createCanvas(6,1).getContext("2d");i.globalCompositeOperation="multiply",i.drawImage(e,0,0),i.drawImage(r,2,0);let s=i.getImageData(2,0,1,1);if(s){let e=s.data;t=255===e[0]&&0===e[1]&&0===e[2]}else t=!1}catch(e){t=!1}return t}e.s(["canUseNewCanvasBlendModes",0,s],77718);let o={canvas:null,convertTintToImage:!1,cacheStepsPerColorChannel:8,canUseMultiply:s(),tintMethod:null,_canvasSourceCache:new WeakMap,_unpremultipliedCache:new WeakMap,getCanvasSource:e=>{let t=e.source,r=t?.resource;if(!r)return null;let i="premultiplied-alpha"===t.alphaMode,n=t.resourceWidth??t.pixelWidth,s=t.resourceHeight??t.pixelHeight,u=n!==t.pixelWidth||s!==t.pixelHeight;if(i){if((r instanceof HTMLCanvasElement||"u">typeof OffscreenCanvas&&r instanceof OffscreenCanvas)&&!u)return r;let e=o._unpremultipliedCache.get(t);if(e?.resourceId===t._resourceId)return e.canvas}if(r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||r instanceof Uint16Array||r instanceof Int16Array||r instanceof Uint32Array||r instanceof Int32Array||r instanceof Float32Array||r instanceof ArrayBuffer){let e=o._canvasSourceCache.get(t);if(e?.resourceId===t._resourceId)return e.canvas;let i=a.DOMAdapter.get().createCanvas(t.pixelWidth,t.pixelHeight),n=i.getContext("2d"),s=n.createImageData(t.pixelWidth,t.pixelHeight),u=s.data,l=r instanceof ArrayBuffer?new Uint8Array(r):new Uint8Array(r.buffer,r.byteOffset,r.byteLength);if("bgra8unorm"===t.format)for(let e=0;e<u.length&&e+3<l.length;e+=4)u[e]=l[e+2],u[e+1]=l[e+1],u[e+2]=l[e],u[e+3]=l[e+3];else u.set(l.subarray(0,u.length));return n.putImageData(s,0,0),o._canvasSourceCache.set(t,{canvas:i,resourceId:t._resourceId}),i}if(i){let e=a.DOMAdapter.get().createCanvas(t.pixelWidth,t.pixelHeight),i=e.getContext("2d",{willReadFrequently:!0});e.width=t.pixelWidth,e.height=t.pixelHeight,i.drawImage(r,0,0);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let e=0;e<s.length;e+=4){let t=s[e+3];if(t>0){let r=255/t;s[e]=Math.min(255,s[e]*r+.5),s[e+1]=Math.min(255,s[e+1]*r+.5),s[e+2]=Math.min(255,s[e+2]*r+.5)}}return i.putImageData(n,0,0),o._unpremultipliedCache.set(t,{canvas:e,resourceId:t._resourceId}),e}if(u){let e=o._canvasSourceCache.get(t);if(e?.resourceId===t._resourceId)return e.canvas;let i=a.DOMAdapter.get().createCanvas(t.pixelWidth,t.pixelHeight),n=i.getContext("2d");return i.width=t.pixelWidth,i.height=t.pixelHeight,n.drawImage(r,0,0),o._canvasSourceCache.set(t,{canvas:i,resourceId:t._resourceId}),i}return r},getTintedCanvas:(e,t)=>{let i=e.texture,n=r.Color.shared.setValue(t).toHex(),s=i.tintCache||(i.tintCache={}),u=s[n],l=i.source._resourceId;if(u?.tintId===l)return u;let f=u&&"getContext"in u?u:a.DOMAdapter.get().createCanvas();if(o.tintMethod(i,t,f),f.tintId=l,o.convertTintToImage&&void 0!==f.toDataURL){let e=a.DOMAdapter.get().createImage();e.src=f.toDataURL(),e.tintId=l,s[n]=e}else s[n]=f;return s[n]},getTintedPattern:(e,t)=>{let i=r.Color.shared.setValue(t).toHex(),n=e.patternCache||(e.patternCache={}),s=e.source._resourceId,u=n[i];return u?.tintId===s||(o.canvas||(o.canvas=a.DOMAdapter.get().createCanvas()),o.tintMethod(e,t,o.canvas),(u=o.canvas.getContext("2d").createPattern(o.canvas,"repeat")).tintId=s,n[i]=u),u},applyPatternTransform:(e,t,r=!0)=>{if(!t||!e.setTransform)return;let a=globalThis.DOMMatrix;if(!a)return;let i=new a([t.a,t.b,t.c,t.d,t.tx,t.ty]);e.setTransform(r?i.inverse():i)},tintWithMultiply:(e,t,a)=>{let n=a.getContext("2d"),s=e.frame.clone(),u=e.source._resolution??e.source.resolution??1,l=e.rotate;s.x*=u,s.y*=u,s.width*=u,s.height*=u;let f=i.groupD8.isVertical(l),c=f?s.height:s.width,h=f?s.width:s.height;a.width=Math.ceil(c),a.height=Math.ceil(h),n.save(),n.fillStyle=r.Color.shared.setValue(t).toHex(),n.fillRect(0,0,c,h),n.globalCompositeOperation="multiply";let d=o.getCanvasSource(e);d&&(l&&o._applyInverseRotation(n,l,s.width,s.height),n.drawImage(d,s.x,s.y,s.width,s.height,0,0,s.width,s.height),n.globalCompositeOperation="destination-atop",n.drawImage(d,s.x,s.y,s.width,s.height,0,0,s.width,s.height)),n.restore()},tintWithOverlay:(e,t,a)=>{let n=a.getContext("2d"),s=e.frame.clone(),u=e.source._resolution??e.source.resolution??1,l=e.rotate;s.x*=u,s.y*=u,s.width*=u,s.height*=u;let f=i.groupD8.isVertical(l),c=f?s.height:s.width,h=f?s.width:s.height;a.width=Math.ceil(c),a.height=Math.ceil(h),n.save(),n.globalCompositeOperation="copy",n.fillStyle=r.Color.shared.setValue(t).toHex(),n.fillRect(0,0,c,h),n.globalCompositeOperation="destination-atop";let d=o.getCanvasSource(e);d&&(l&&o._applyInverseRotation(n,l,s.width,s.height),n.drawImage(d,s.x,s.y,s.width,s.height,0,0,s.width,s.height)),n.restore()},tintWithPerPixel:(e,t,r)=>{let a=r.getContext("2d"),n=e.frame.clone(),s=e.source._resolution??e.source.resolution??1,u=e.rotate;n.x*=s,n.y*=s,n.width*=s,n.height*=s;let l=i.groupD8.isVertical(u),f=l?n.height:n.width,c=l?n.width:n.height;r.width=Math.ceil(f),r.height=Math.ceil(c),a.save(),a.globalCompositeOperation="copy";let h=o.getCanvasSource(e);if(!h)return void a.restore();u&&o._applyInverseRotation(a,u,n.width,n.height),a.drawImage(h,n.x,n.y,n.width,n.height,0,0,n.width,n.height),a.restore();let d=t>>16&255,v=t>>8&255,m=255&t,p=a.getImageData(0,0,f,c),x=p.data;for(let e=0;e<x.length;e+=4)x[e]=x[e]*d/255,x[e+1]=x[e+1]*v/255,x[e+2]=x[e+2]*m/255;a.putImageData(p,0,0)},_applyInverseRotation:(e,t,r,a)=>{let n=i.groupD8.inv(t),s=i.groupD8.uX(n),o=i.groupD8.uY(n),u=i.groupD8.vX(n),l=i.groupD8.vY(n),f=-Math.min(0,s*r,u*a,s*r+u*a),c=-Math.min(0,o*r,l*a,o*r+l*a);e.transform(s,o,u,l,f,c)}};o.tintMethod=o.canUseMultiply?o.tintWithMultiply:o.tintWithPerPixel,e.s(["canvasUtils",0,o],61805)},81735,e=>{"use strict";var t=e.i(27402),r=e.i(61411),a=e.i(48446);class i{constructor(e){this._canvasPool=Object.create(null),this.canvasOptions=e||{},this.enableFullScreen=!1}_createCanvasAndContext(e,r){let a=t.DOMAdapter.get().createCanvas();a.width=e,a.height=r;let i=a.getContext("2d");return{canvas:a,context:i}}getOptimalCanvasAndContext(e,t,a=1){e=Math.ceil(e*a-1e-6),t=Math.ceil(t*a-1e-6),e=(0,r.nextPow2)(e),t=(0,r.nextPow2)(t);let i=(e<<17)+(t<<1);this._canvasPool[i]||(this._canvasPool[i]=[]);let n=this._canvasPool[i].pop();return n||(n=this._createCanvasAndContext(e,t)),n}returnCanvasAndContext(e){let{width:t,height:r}=e.canvas,a=(t<<17)+(r<<1);e.context.resetTransform(),e.context.clearRect(0,0,t,r),this._canvasPool[a].push(e)}clear(){this._canvasPool={}}}let n=new i;a.GlobalResourceRegistry.register(n),e.s(["CanvasPool",0,n,"CanvasPoolClass",0,i])},92206,89698,e=>{"use strict";var t=e.i(85830);let r=(e,t,r=!1)=>(Array.isArray(e)||(e=[e]),t)?e.map(e=>"string"==typeof e||r?t(e):e):e;e.s(["convertToList",0,r],89698);let a=new class{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(e){return this._cache.has(e)}get(e){let r=this._cache.get(e);return r||(0,t.warn)(`[Assets] Asset id ${e} was not found in the Cache`),r}set(e,a){let i,n=r(e);for(let e=0;e<this.parsers.length;e++){let t=this.parsers[e];if(t.test(a)){i=t.getCacheableAssets(n,a);break}}let s=new Map(Object.entries(i||{}));i||n.forEach(e=>{s.set(e,a)});let o=[...s.keys()],u={cacheKeys:o,keys:n};n.forEach(e=>{this._cacheMap.set(e,u)}),o.forEach(e=>{let r=i?i[e]:a;this._cache.has(e)&&this._cache.get(e)!==r&&(0,t.warn)("[Cache] already has key:",e),this._cache.set(e,s.get(e))})}remove(e){if(!this._cacheMap.has(e))return void(0,t.warn)(`[Assets] Asset id ${e} was not found in the Cache`);let r=this._cacheMap.get(e);r.cacheKeys.forEach(e=>{this._cache.delete(e)}),r.keys.forEach(e=>{this._cacheMap.delete(e)})}get parsers(){return this._parsers}};e.s(["Cache",0,a],92206)},87323,37024,18102,96108,60728,28028,94433,40940,45284,e=>{"use strict";var t,r=e.i(24314);class a{constructor(e){"number"==typeof e?this.rawBinaryData=new ArrayBuffer(e):e instanceof Uint8Array?this.rawBinaryData=e.buffer:this.rawBinaryData=e,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(e){return this[`${e}View`]}destroy(){this.rawBinaryData=null,this.uint32View=null,this.float32View=null,this.uint16View=null,this._int8View=null,this._uint8View=null,this._int16View=null,this._int32View=null,this._float64Array=null,this._bigUint64Array=null}static sizeOf(e){switch(e){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw Error(`${e} isn't a valid view type`)}}}e.s(["ViewableBuffer",0,a],37024);var i=e.i(49864),n=e.i(48446);function s(e,t,r,a){if(r??(r=0),a??(a=Math.min(e.byteLength-r,t.byteLength)),7&r||7&a)if(3&r||3&a)new Uint8Array(t).set(new Uint8Array(e,r,a));else{let i=a/4;new Float32Array(t,0,i).set(new Float32Array(e,r,i))}else{let i=a/8;new Float64Array(t,0,i).set(new Float64Array(e,r,i))}}e.s(["fastCopy",0,s],18102);let o={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var u=((t=u||{})[t.DISABLED=0]="DISABLED",t[t.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",t[t.MASK_ACTIVE=2]="MASK_ACTIVE",t[t.INVERSE_MASK_ACTIVE=3]="INVERSE_MASK_ACTIVE",t[t.RENDERING_MASK_REMOVE=4]="RENDERING_MASK_REMOVE",t[t.NONE=5]="NONE",t);function l(e,t){return"no-premultiply-alpha"===t.alphaMode&&o[e]||e}e.s(["BLEND_TO_NPM",0,o,"STENCIL_MODES",0,u],96108),e.s(["getAdjustedBlendModeBlend",0,l],60728);var f=e.i(29281);function c(e,t){if(0===e)throw Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");let r=t.createShader(t.FRAGMENT_SHADER);try{for(;;){let a="precision mediump float;\nvoid main(void){\nfloat test = 0.1;\n%forloop%\ngl_FragColor = vec4(0.0);\n}".replace(/%forloop%/gi,function(e){let t="";for(let r=0;r<e;++r)r>0&&(t+="\nelse "),r<e-1&&(t+=`if(test == ${r}.0){}`);return t}(e));if(t.shaderSource(r,a),t.compileShader(r),t.getShaderParameter(r,t.COMPILE_STATUS))break;e=e/2|0}}finally{t.deleteShader(r)}return e}e.s(["checkMaxIfStatementsInShader",0,c],28028);let h=null;function d(){if(h)return h;let e=(0,f.getTestContext)();return h=c(h=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),e),e.getExtension("WEBGL_lose_context")?.loseContext(),h}e.s(["getMaxTexturesPerBatch",0,d],94433);class v{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let e=0;e<this.count;e++){let t=this.textures[e];this.textures[e]=null,this.ids[t.uid]=null}this.count=0}}e.s(["BatchTextureArray",0,v],40940);class m{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.textures=new v,this.blendMode="normal",this.topology="triangle-strip",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null,this.elements=null}}let p=[],x=0;function g(){return x>0?p[--x]:new m}function b(e){e.elements=null,p[x++]=e}n.GlobalResourceRegistry.register({clear:()=>{if(p.length>0)for(let e of p)e&&e.destroy();p.length=0,x=0}});let _=0,y=class e{constructor(t){this.uid=(0,r.uid)("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._elements=[],(t={...e.defaultOptions,...t}).maxTextures||((0,i.deprecation)("v8.8.0","maxTextures is a required option for Batcher now, please pass it in the options"),t.maxTextures=d());const{maxTextures:n,attributesInitialSize:s,indicesInitialSize:o}=t;this.attributeBuffer=new a(4*s),this.indexBuffer=new Uint16Array(o),this.maxTextures=n}begin(){this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0;for(let e=0;e<this.batchIndex;e++)b(this.batches[e]);this.batchIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(e){this._elements[this.elementSize++]=e,e._indexStart=this.indexSize,e._attributeStart=this.attributeSize,e._batcher=this,this.indexSize+=e.indexSize,this.attributeSize+=e.attributeSize*this.vertexSize}checkAndUpdateTexture(e,t){let r=e._batch.textures.ids[t._source.uid];return(!!r||0===r)&&(e._textureId=r,e.texture=t,!0)}updateElement(e){this.dirty=!0;let t=this.attributeBuffer;e.packAsQuad?this.packQuadAttributes(e,t.float32View,t.uint32View,e._attributeStart,e._textureId):this.packAttributes(e,t.float32View,t.uint32View,e._attributeStart,e._textureId)}break(e){let t=this._elements;if(!t[this.elementStart])return;let r=g(),a=r.textures;a.clear();let i=t[this.elementStart],n=l(i.blendMode,i.texture._source),s=i.topology;4*this.attributeSize>this.attributeBuffer.size&&this._resizeAttributeBuffer(4*this.attributeSize),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);let o=this.attributeBuffer.float32View,u=this.attributeBuffer.uint32View,f=this.indexBuffer,c=this._batchIndexSize,h=this._batchIndexStart,d="startBatch",v=[],m=this.maxTextures;for(let i=this.elementStart;i<this.elementSize;++i){let p=t[i];t[i]=null;let x=p.texture._source,b=l(p.blendMode,x),y=n!==b||s!==p.topology;if(x._batchTick===_&&!y){p._textureId=x._textureBindLocation,c+=p.indexSize,p.packAsQuad?(this.packQuadAttributes(p,o,u,p._attributeStart,p._textureId),this.packQuadIndex(f,p._indexStart,p._attributeStart/this.vertexSize)):(this.packAttributes(p,o,u,p._attributeStart,p._textureId),this.packIndex(p,f,p._indexStart,p._attributeStart/this.vertexSize)),p._batch=r,v.push(p);continue}x._batchTick=_,(a.count>=m||y)&&(this._finishBatch(r,h,c-h,a,n,s,e,d,v),d="renderBatch",h=c,n=b,s=p.topology,(a=(r=g()).textures).clear(),v=[],++_),p._textureId=x._textureBindLocation=a.count,a.ids[x.uid]=a.count,a.textures[a.count++]=x,p._batch=r,v.push(p),c+=p.indexSize,p.packAsQuad?(this.packQuadAttributes(p,o,u,p._attributeStart,p._textureId),this.packQuadIndex(f,p._indexStart,p._attributeStart/this.vertexSize)):(this.packAttributes(p,o,u,p._attributeStart,p._textureId),this.packIndex(p,f,p._indexStart,p._attributeStart/this.vertexSize))}a.count>0&&(this._finishBatch(r,h,c-h,a,n,s,e,d,v),h=c,++_),this.elementStart=this.elementSize,this._batchIndexStart=h,this._batchIndexSize=c}_finishBatch(e,t,r,a,i,n,s,o,u){e.gpuBindGroup=null,e.bindGroup=null,e.action=o,e.batcher=this,e.textures=a,e.blendMode=i,e.topology=n,e.start=t,e.size=r,e.elements=u,++_,this.batches[this.batchIndex++]=e,s.add(e)}finish(e){this.break(e)}ensureAttributeBuffer(e){4*e<=this.attributeBuffer.size||this._resizeAttributeBuffer(4*e)}ensureIndexBuffer(e){e<=this.indexBuffer.length||this._resizeIndexBuffer(e)}_resizeAttributeBuffer(e){let t=new a(Math.max(e,2*this.attributeBuffer.size));s(this.attributeBuffer.rawBinaryData,t.rawBinaryData),this.attributeBuffer=t}_resizeIndexBuffer(e){let t=this.indexBuffer,r=Math.max(e,1.5*t.length);r+=r%2;let a=r>65535?new Uint32Array(r):new Uint16Array(r);if(a.BYTES_PER_ELEMENT!==t.BYTES_PER_ELEMENT)for(let e=0;e<t.length;e++)a[e]=t[e];else s(t.buffer,a.buffer);this.indexBuffer=a}packQuadIndex(e,t,r){e[t]=r+0,e[t+1]=r+1,e[t+2]=r+2,e[t+3]=r+0,e[t+4]=r+2,e[t+5]=r+3}packIndex(e,t,r,a){let i=e.indices,n=e.indexSize,s=e.indexOffset,o=e.attributeOffset;for(let e=0;e<n;e++)t[r++]=a+i[e+s]-o}destroy(e={}){if(null!==this.batches){for(let e=0;e<this.batchIndex;e++)b(this.batches[e]);this.batches=null,this.geometry.destroy(!0),this.geometry=null,e.shader&&(this.shader?.destroy(),this.shader=null);for(let e=0;e<this._elements.length;e++)this._elements[e]&&(this._elements[e]._batch=null);this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}}};y.defaultOptions={maxTextures:null,attributesInitialSize:4,indicesInitialSize:6},e.s(["Batch",0,m,"Batcher",0,y],87323);var S=e.i(85465),w=e.i(64957),I=e.i(60406);let C=new Float32Array(1),A=new Uint32Array(1);class M extends I.Geometry{constructor(){const e=new S.Buffer({data:C,label:"attribute-batch-buffer",usage:w.BufferUsage.VERTEX|w.BufferUsage.COPY_DST,shrinkToFit:!1});super({attributes:{aPosition:{buffer:e,format:"float32x2",stride:24,offset:0},aUV:{buffer:e,format:"float32x2",stride:24,offset:8},aColor:{buffer:e,format:"unorm8x4",stride:24,offset:16},aTextureIdAndRound:{buffer:e,format:"uint16x2",stride:24,offset:20}},indexBuffer:new S.Buffer({data:A,label:"index-batch-buffer",usage:w.BufferUsage.INDEX|w.BufferUsage.COPY_DST,shrinkToFit:!1})})}}e.s(["BatchGeometry",0,M],45284)},81491,94571,19273,49008,38939,58313,41183,83438,1560,68372,94111,55443,e=>{"use strict";var t=e.i(81107),r=e.i(27076),a=e.i(85830);function i(e,t,r){if(e)for(let i in e){let n=t[i.toLocaleLowerCase()];if(n){let t=e[i];"header"===i&&(t=t.replace(/@in\s+[^;]+;\s*/g,"").replace(/@out\s+[^;]+;\s*/g,"")),r&&n.push(`//----${r}----//`),n.push(t)}else(0,a.warn)(`${i} placement hook does not exist in shader`)}}e.s(["addBits",0,i],94571);let n=/\{\{(.*?)\}\}/g;function s(e){let t={};return(e.match(n)?.map(e=>e.replace(/[{()}]/g,""))??[]).forEach(e=>{t[e]=[]}),t}function o(e,t){let r,a=/@in\s+([^;]+);/g;for(;null!==(r=a.exec(e));)t.push(r[1])}function u(e,t,r=!1){let a=[];o(t,a),e.forEach(e=>{e.header&&o(e.header,a)}),r&&a.sort();let i=a.map((e,t)=>`       @location(${t}) ${e},`).join("\n"),n=t.replace(/@in\s+[^;]+;\s*/g,"");return n.replace("{{in}}",`
${i}
`)}function l(e,t){let r,a=/@out\s+([^;]+);/g;for(;null!==(r=a.exec(e));)t.push(r[1])}function f(e,t){let r=[];l(t,r),e.forEach(e=>{e.header&&l(e.header,r)});let a=0,i=r.sort().map(e=>e.indexOf("builtin")>-1?e:`@location(${a++}) ${e}`).join(",\n"),n=r.sort().map(e=>`       var ${e.replace(/@.*?\s+/g,"")};`).join("\n"),s=`return VSOutput(
            ${r.sort().map(e=>{let t;return` ${(t=/\b(\w+)\s*:/g.exec(e))?t[1]:""}`}).join(",\n")});`,o=t.replace(/@out\s+[^;]+;\s*/g,"");return(o=(o=o.replace("{{struct}}",`
${i}
`)).replace("{{start}}",`
${n}
`)).replace("{{return}}",`
${s}
`)}function c(e,t){let r=e;for(let e in t){let a=t[e];r=a.join("\n").length?r.replace(`{{${e}}}`,`//-----${e} START-----//
${a.join("\n")}
//----${e} FINISH----//`):r.replace(`{{${e}}}`,"")}return r}e.s(["compileHooks",0,s],19273),e.s(["compileInputs",0,u],49008),e.s(["compileOutputs",0,f],38939),e.s(["injectBits",0,c],58313);let h=Object.create(null),d=new Map,v=0;function m({template:e,bits:t}){var r,a;let i,n,s,o=x(e,t);if(h[o])return h[o];let{vertex:l,fragment:c}=(r=e,i=(a=t).map(e=>e.vertex).filter(e=>!!e),n=a.map(e=>e.fragment).filter(e=>!!e),s=u(i,r.vertex,!0),{vertex:s=f(i,s),fragment:u(n,r.fragment,!0)});return h[o]=g(l,c,t),h[o]}function p({template:e,bits:t}){let r=x(e,t);return h[r]||(h[r]=g(e.vertex,e.fragment,t)),h[r]}function x(e,t){return t.map(e=>(d.has(e)||d.set(e,v++),d.get(e))).sort((e,t)=>e-t).join("-")+e.vertex+e.fragment}function g(e,t,r){let a=s(e),n=s(t);return r.forEach(e=>{i(e.vertex,a,e.name),i(e.fragment,n,e.name)}),{vertex:c(e,a),fragment:c(t,n)}}e.s(["compileHighShader",0,m,"compileHighShaderGl",0,p],41183);let b=`
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}

        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);

        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`,_=`
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;

    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {

        {{start}}

        var outColor:vec4<f32>;

        {{main}}

        var finalColor:vec4<f32> = outColor * vColor;

        {{end}}

        return finalColor;
      };
`,y=`
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;

        {{start}}

        vColor = vec4(1.);

        {{main}}

        vUV = uv;

        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`,S=`

    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {

        {{start}}

        vec4 outColor;

        {{main}}

        finalColor = outColor * vColor;

        {{end}}
    }
`;e.s(["fragmentGPUTemplate",0,_,"fragmentGlTemplate",0,S,"vertexGPUTemplate",0,b,"vertexGlTemplate",0,y],83438);let w={name:"global-uniforms-bit",vertex:{header:`
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `}},I={name:"global-uniforms-ubo-bit",vertex:{header:`
          uniform globalUniforms {
            mat3 uProjectionMatrix;
            mat3 uWorldTransformMatrix;
            vec4 uWorldColorAlpha;
            vec2 uResolution;
          };
        `}},C={name:"global-uniforms-bit",vertex:{header:`
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `}};e.s(["globalUniformsBit",0,w,"globalUniformsBitGl",0,C,"globalUniformsUBOBitGl",0,I],1560),e.s(["compileHighShaderGlProgram",0,function({bits:e,name:r}){return new t.GlProgram({name:r,...p({template:{vertex:y,fragment:S},bits:[C,...e]})})},"compileHighShaderGpuProgram",0,function({bits:e,name:t}){let a=m({template:{fragment:_,vertex:b},bits:[w,...e]});return r.GpuProgram.from({name:t,vertex:{source:a.vertex,entryPoint:"main"},fragment:{source:a.fragment,entryPoint:"main"}})}],81491);let A={name:"color-bit",vertex:{header:`
            @in aColor: vec4<f32>;
        `,main:`
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `}},M={name:"color-bit",vertex:{header:`
            in vec4 aColor;
        `,main:`
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `}};e.s(["colorBit",0,A,"colorBitGl",0,M],68372);let B={},T={};e.s(["generateTextureBatchBit",0,function(e){return B[e]||(B[e]={name:"texture-batch-bit",vertex:{header:`
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `},fragment:{header:`
                @in @interpolate(flat) vTextureId: u32;

                ${function(e){let t=[];if(1===e)t.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"),t.push("@group(1) @binding(1) var textureSampler1: sampler;");else{let r=0;for(let a=0;a<e;a++)t.push(`@group(1) @binding(${r++}) var textureSource${a+1}: texture_2d<f32>;`),t.push(`@group(1) @binding(${r++}) var textureSampler${a+1}: sampler;`)}return t.join("\n")}(e)}
            `,main:`
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);

                ${function(e){let t=[];if(1===e)t.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");else{t.push("switch vTextureId {");for(let r=0;r<e;r++)r===e-1?t.push("  default:{"):t.push(`  case ${r}:{`),t.push(`      outColor = textureSampleGrad(textureSource${r+1}, textureSampler${r+1}, vUV, uvDx, uvDy);`),t.push("      break;}");t.push("}")}return t.join("\n")}(e)}
            `}}),B[e]},"generateTextureBatchBitGl",0,function(e){return T[e]||(T[e]={name:"texture-batch-bit",vertex:{header:`
                in vec2 aTextureIdAndRound;
                out float vTextureId;

            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `},fragment:{header:`
                in float vTextureId;

                uniform sampler2D uTextures[${e}];

            `,main:`

                ${function(e){let t=[];for(let r=0;r<e;r++)r>0&&t.push("else"),r<e-1&&t.push(`if(vTextureId < ${r}.5)`),t.push("{"),t.push(`	outColor = texture(uTextures[${r}], vUV);`),t.push("}");return t.join("\n")}(e)}
            `}}),T[e]}],94111);let U={name:"round-pixels-bit",vertex:{header:`
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32>
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},E={name:"round-pixels-bit",vertex:{header:`
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}};e.s(["roundPixelsBit",0,U,"roundPixelsBitGl",0,E],55443)},77953,e=>{"use strict";var t=e.i(32543);let r={};e.s(["getBatchSamplersUniformGroup",0,function(e){let a=r[e];if(a)return a;let i=new Int32Array(e);for(let t=0;t<e;t++)i[t]=t;return r[e]=new t.UniformGroup({uTextures:{value:i,type:"i32",size:e}},{isStatic:!0})}])},97828,75392,33219,e=>{"use strict";var t=e.i(47760),r=e.i(87323),a=e.i(45284),i=e.i(81491),n=e.i(68372),s=e.i(94111),o=e.i(55443),u=e.i(77953),l=e.i(65654);class f extends l.Shader{constructor(e){super({glProgram:(0,i.compileHighShaderGlProgram)({name:"batch",bits:[n.colorBitGl,(0,s.generateTextureBatchBitGl)(e),o.roundPixelsBitGl]}),gpuProgram:(0,i.compileHighShaderGpuProgram)({name:"batch",bits:[n.colorBit,(0,s.generateTextureBatchBit)(e),o.roundPixelsBit]}),resources:{batchSamplers:(0,u.getBatchSamplersUniformGroup)(e)}}),this.maxTextures=e}}e.s(["DefaultShader",0,f],75392);let c=null,h=class e extends r.Batcher{constructor(t){super(t),this.geometry=new a.BatchGeometry,this.name=e.extension.name,this.vertexSize=6,c??(c=new f(t.maxTextures)),this.shader=c}packAttributes(e,t,r,a,i){let n=i<<16|65535&e.roundPixels,s=e.transform,o=s.a,u=s.b,l=s.c,f=s.d,c=s.tx,h=s.ty,{positions:d,uvs:v}=e,m=e.color,p=e.attributeOffset,x=p+e.attributeSize;for(let e=p;e<x;e++){let i=2*e,s=d[i],p=d[i+1];t[a++]=o*s+l*p+c,t[a++]=f*p+u*s+h,t[a++]=v[i],t[a++]=v[i+1],r[a++]=m,r[a++]=n}}packQuadAttributes(e,t,r,a,i){let n=e.texture,s=e.transform,o=s.a,u=s.b,l=s.c,f=s.d,c=s.tx,h=s.ty,d=e.bounds,v=d.maxX,m=d.minX,p=d.maxY,x=d.minY,g=n.uvs,b=e.color,_=i<<16|65535&e.roundPixels;t[a+0]=o*m+l*x+c,t[a+1]=f*x+u*m+h,t[a+2]=g.x0,t[a+3]=g.y0,r[a+4]=b,r[a+5]=_,t[a+6]=o*v+l*x+c,t[a+7]=f*x+u*v+h,t[a+8]=g.x1,t[a+9]=g.y1,r[a+10]=b,r[a+11]=_,t[a+12]=o*v+l*p+c,t[a+13]=f*p+u*v+h,t[a+14]=g.x2,t[a+15]=g.y2,r[a+16]=b,r[a+17]=_,t[a+18]=o*m+l*p+c,t[a+19]=f*p+u*m+h,t[a+20]=g.x3,t[a+21]=g.y3,r[a+22]=b,r[a+23]=_}_updateMaxTextures(e){this.shader.maxTextures!==e&&(c=new f(e),this.shader=c)}destroy(){this.shader=null,super.destroy()}};h.extension={type:[t.ExtensionType.Batcher],name:"default"},e.s(["DefaultBatcher",0,h],97828),e.s(["GCManagedHash",0,class{constructor(e){this.items=Object.create(null);const{renderer:t,type:r,onUnload:a,priority:i,name:n}=e;this._renderer=t,t.gc.addResourceHash(this,"items",r,i??0),this._onUnload=a,this.name=n}add(e){return!this.items[e.uid]&&(this.items[e.uid]=e,e.once("unload",this.remove,this),e._gcLastUsed=this._renderer.gc.now,!0)}remove(e,...t){if(!this.items[e.uid])return;let r=e._gpuData[this._renderer.uid];r&&(this._onUnload?.(e,...t),r.destroy(),e._gpuData[this._renderer.uid]=null,this.items[e.uid]=null)}removeAll(...e){Object.values(this.items).forEach(t=>t&&this.remove(t,...e))}destroy(...e){this.removeAll(...e),this.items=Object.create(null),this._renderer=null,this._onUnload=null}}],33219)},68750,e=>{"use strict";var t=e.i(94359),r=e.i(31320);let a={};e.s(["getTextureBatchBindGroup",0,function(e,i,n){let s=0x811c9dc5;for(let t=0;t<i;t++)s^=e[t].uid,s=Math.imul(s,0x1000193)>>>0;return a[s]||function(e,i,n,s){let o={},u=0;for(let t=0;t<s;t++){let a=t<i?e[t]:r.Texture.EMPTY.source;o[u++]=a.source,o[u++]=a.style}let l=new t.BindGroup(o);return a[n]=l,l}(e,i,s,n)}])},35066,90532,e=>{"use strict";let t={name:"local-uniform-bit",vertex:{header:`

            struct LocalUniforms {
                uTransformMatrix:mat3x3<f32>,
                uColor:vec4<f32>,
                uRound:f32,
            }

            @group(1) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,main:`
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,end:`
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `}},r={...t,vertex:{...t.vertex,header:t.vertex.header.replace("group(1)","group(2)")}},a={name:"local-uniform-bit",vertex:{header:`

            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,main:`
            vColor *= uColor;
            modelMatrix = uTransformMatrix;
        `,end:`
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `}};e.s(["localUniformBit",0,t,"localUniformBitGl",0,a,"localUniformBitGroup2",0,r],35066);let i={name:"texture-bit",vertex:{header:`

        struct TextureUniforms {
            uTextureMatrix:mat3x3<f32>,
        }

        @group(2) @binding(2) var<uniform> textureUniforms : TextureUniforms;
        `,main:`
            uv = (textureUniforms.uTextureMatrix * vec3(uv, 1.0)).xy;
        `},fragment:{header:`
            @group(2) @binding(0) var uTexture: texture_2d<f32>;
            @group(2) @binding(1) var uSampler: sampler;


        `,main:`
            outColor = textureSample(uTexture, uSampler, vUV);
        `}},n={name:"texture-bit",vertex:{header:`
            uniform mat3 uTextureMatrix;
        `,main:`
            uv = (uTextureMatrix * vec3(uv, 1.0)).xy;
        `},fragment:{header:`
        uniform sampler2D uTexture;


        `,main:`
            outColor = texture(uTexture, vUV);
        `}};e.s(["textureBit",0,i,"textureBitGl",0,n],90532)},35656,39391,e=>{"use strict";var t=e.i(85830),r=e.i(46820);e.s(["ensureAttributes",0,function(e,a){for(let r in e.attributes){let i=e.attributes[r],n=a[r];n?(i.format??(i.format=n.format),i.offset??(i.offset=n.offset),i.instance??(i.instance=n.instance)):(0,t.warn)(`Attribute ${r} is not present in the shader, but is present in the geometry. Unable to infer attribute details.`)}!function(e){let{buffers:t,attributes:a}=e,i={},n={};for(let e in t){let r=t[e];i[r.uid]=0,n[r.uid]=0}for(let e in a){let t=a[e];i[t.buffer.uid]+=(0,r.getAttributeInfoFromFormat)(t.format).stride}for(let e in a){let t=a[e];t.stride??(t.stride=i[t.buffer.uid]),t.start??(t.start=n[t.buffer.uid]),n[t.buffer.uid]+=(0,r.getAttributeInfoFromFormat)(t.format).stride}}(e)}],35656);var a=e.i(96108);let i=[];i[a.STENCIL_MODES.NONE]=void 0,i[a.STENCIL_MODES.DISABLED]={stencilWriteMask:0,stencilReadMask:0},i[a.STENCIL_MODES.RENDERING_MASK_ADD]={stencilFront:{compare:"equal",passOp:"increment-clamp"},stencilBack:{compare:"equal",passOp:"increment-clamp"}},i[a.STENCIL_MODES.RENDERING_MASK_REMOVE]={stencilFront:{compare:"equal",passOp:"decrement-clamp"},stencilBack:{compare:"equal",passOp:"decrement-clamp"}},i[a.STENCIL_MODES.MASK_ACTIVE]={stencilWriteMask:0,stencilFront:{compare:"equal",passOp:"keep"},stencilBack:{compare:"equal",passOp:"keep"}},i[a.STENCIL_MODES.INVERSE_MASK_ACTIVE]={stencilWriteMask:0,stencilFront:{compare:"not-equal",passOp:"keep"},stencilBack:{compare:"not-equal",passOp:"keep"}},e.s(["GpuStencilModesToPixi",0,i],39391)},28353,92715,31873,33156,87784,e=>{"use strict";var t=e.i(55364),r=e.i(85465),a=e.i(64957);e.s(["UboSystem",0,class{constructor(e){this._syncFunctionHash=Object.create(null),this._adaptor=e,this._systemCheck()}_systemCheck(){if(!(0,t.unsafeEvalSupported)())throw Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}ensureUniformGroup(e){let t=this.getUniformGroupData(e);e.buffer||(e.buffer=new r.Buffer({data:new Float32Array(t.layout.size/4),usage:a.BufferUsage.UNIFORM|a.BufferUsage.COPY_DST}))}getUniformGroupData(e){return this._syncFunctionHash[e._signature]||this._initUniformGroup(e)}_initUniformGroup(e){let t=e._signature,r=this._syncFunctionHash[t];if(!r){let a=Object.keys(e.uniformStructures).map(t=>e.uniformStructures[t]),i=this._adaptor.createUboElements(a),n=this._generateUboSync(i.uboElements);r=this._syncFunctionHash[t]={layout:i,syncFunction:n}}return this._syncFunctionHash[t]}_generateUboSync(e){return this._adaptor.generateUboSync(e)}syncUniformGroup(e,t,i){let n=this.getUniformGroupData(e);e.buffer||(e.buffer=new r.Buffer({data:new Float32Array(n.layout.size/4),usage:a.BufferUsage.UNIFORM|a.BufferUsage.COPY_DST}));let s=null;return t||(t=e.buffer.data,s=e.buffer.dataInt32),i||(i=0),n.syncFunction(e.uniforms,t,s,i),!0}updateUniformGroup(e){if(e.isStatic&&!e._dirtyId)return!1;e._dirtyId=0;let t=this.syncUniformGroup(e);return e.buffer.update(),t}destroy(){this._syncFunctionHash=null}}],28353);let i=[{type:"mat3x3<f32>",test:e=>void 0!==e.value.a,ubo:`
            var matrix = uv[name].toArray(true);
            data[offset] = matrix[0];
            data[offset + 1] = matrix[1];
            data[offset + 2] = matrix[2];
            data[offset + 4] = matrix[3];
            data[offset + 5] = matrix[4];
            data[offset + 6] = matrix[5];
            data[offset + 8] = matrix[6];
            data[offset + 9] = matrix[7];
            data[offset + 10] = matrix[8];
        `,uniform:`
            gl.uniformMatrix3fv(ud[name].location, false, uv[name].toArray(true));
        `},{type:"vec4<f32>",test:e=>"vec4<f32>"===e.type&&1===e.size&&void 0!==e.value.width,ubo:`
            v = uv[name];
            data[offset] = v.x;
            data[offset + 1] = v.y;
            data[offset + 2] = v.width;
            data[offset + 3] = v.height;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height) {
                cv[0] = v.x;
                cv[1] = v.y;
                cv[2] = v.width;
                cv[3] = v.height;
                gl.uniform4f(ud[name].location, v.x, v.y, v.width, v.height);
            }
        `},{type:"vec2<f32>",test:e=>"vec2<f32>"===e.type&&1===e.size&&void 0!==e.value.x,ubo:`
            v = uv[name];
            data[offset] = v.x;
            data[offset + 1] = v.y;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.x || cv[1] !== v.y) {
                cv[0] = v.x;
                cv[1] = v.y;
                gl.uniform2f(ud[name].location, v.x, v.y);
            }
        `},{type:"vec4<f32>",test:e=>"vec4<f32>"===e.type&&1===e.size&&void 0!==e.value.red,ubo:`
            v = uv[name];
            data[offset] = v.red;
            data[offset + 1] = v.green;
            data[offset + 2] = v.blue;
            data[offset + 3] = v.alpha;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha) {
                cv[0] = v.red;
                cv[1] = v.green;
                cv[2] = v.blue;
                cv[3] = v.alpha;
                gl.uniform4f(ud[name].location, v.red, v.green, v.blue, v.alpha);
            }
        `},{type:"vec3<f32>",test:e=>"vec3<f32>"===e.type&&1===e.size&&void 0!==e.value.red,ubo:`
            v = uv[name];
            data[offset] = v.red;
            data[offset + 1] = v.green;
            data[offset + 2] = v.blue;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue) {
                cv[0] = v.red;
                cv[1] = v.green;
                cv[2] = v.blue;
                gl.uniform3f(ud[name].location, v.red, v.green, v.blue);
            }
        `}];function n(e,t){return`
        for (let i = 0; i < ${e*t}; i++) {
            data[offset + (((i / ${e})|0) * 4) + (i % ${e})] = v[i];
        }
    `}e.s(["uniformParsers",0,i],92715),e.s(["createUboSyncFunction",0,function(e,t,r,a){let n=[`
        var v = null;
        var v2 = null;
        var t = 0;
        var index = 0;
        var name = null;
        var arrayOffset = null;
    `],s=0;for(let o=0;o<e.length;o++){let u=e[o],l=u.data.name,f=!1,c=0;for(let e=0;e<i.length;e++)if(i[e].test(u.data)){c=u.offset/4,n.push(`name = "${l}";`,`offset += ${c-s};`,i[e][t]||i[e].ubo),f=!0;break}if(!f)if(u.data.size>1)c=u.offset/4,n.push(r(u,c-s));else{let e=a[u.data.type];c=u.offset/4,n.push(`
                    v = uv.${l};
                    offset += ${c-s};
                    ${e};
                `)}s=c}return Function("uv","data","dataInt32","offset",n.join("\n"))}],31873);let s={f32:`
        data[offset] = v;`,i32:`
        dataInt32[offset] = v;`,"vec2<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];`,"vec3<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];`,"vec4<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 3] = v[3];`,"vec2<i32>":`
        dataInt32[offset] = v[0];
        dataInt32[offset + 1] = v[1];`,"vec3<i32>":`
        dataInt32[offset] = v[0];
        dataInt32[offset + 1] = v[1];
        dataInt32[offset + 2] = v[2];`,"vec4<i32>":`
        dataInt32[offset] = v[0];
        dataInt32[offset + 1] = v[1];
        dataInt32[offset + 2] = v[2];
        dataInt32[offset + 3] = v[3];`,"mat2x2<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 4] = v[2];
        data[offset + 5] = v[3];`,"mat3x3<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];
        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];`,"mat4x4<f32>":`
        for (let i = 0; i < 16; i++) {
            data[offset + i] = v[i];
        }`,"mat3x2<f32>":n(3,2),"mat4x2<f32>":n(4,2),"mat2x3<f32>":n(2,3),"mat4x3<f32>":n(4,3),"mat2x4<f32>":n(2,4),"mat3x4<f32>":n(3,4)},o={...s,"mat2x2<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 3] = v[3];
    `};e.s(["uboSyncFunctionsSTD40",0,s,"uboSyncFunctionsWGSL",0,o],33156);var u=e.i(95932),l=e.i(24314);class f extends u.default{constructor({buffer:e,offset:t,size:r}){super(),this.uid=(0,l.uid)("buffer"),this._resourceType="bufferResource",this._touched=0,this._resourceId=(0,l.uid)("resource"),this._bufferResource=!0,this.destroyed=!1,this.buffer=e,this.offset=0|t,this.size=r,this.buffer.on("change",this.onBufferChange,this)}onBufferChange(){this._resourceId=(0,l.uid)("resource"),this.emit("change",this)}destroy(e=!1){this.destroyed=!0,e&&this.buffer.destroy(),this.emit("change",this),this.buffer=null,this.removeAllListeners()}}e.s(["BufferResource",0,f],87784)},86043,e=>{e.v(t=>Promise.all(["static/chunks/33ua3xlb0jtkk.js"].map(t=>e.l(t))).then(()=>t(70003)))},62925,e=>{e.v(t=>Promise.all(["static/chunks/0a3m6yzviiwp0.js"].map(t=>e.l(t))).then(()=>t(54608)))},35640,e=>{e.v(e=>Promise.resolve().then(()=>e(46377)))},99331,e=>{e.v(e=>Promise.resolve().then(()=>e(984)))},53088,e=>{e.v(e=>Promise.resolve().then(()=>e(50703)))},72891,e=>{e.v(e=>Promise.resolve().then(()=>e(91678)))}]);