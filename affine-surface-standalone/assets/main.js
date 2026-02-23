var Ie=Object.defineProperty;var Le=(n,e,t)=>e in n?Ie(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var d=(n,e,t)=>Le(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function ee(n,e,t){const r=n.createShader(e);if(!r)throw new Error("Failed to create shader object");if(n.shaderSource(r,t),n.compileShader(r),!n.getShaderParameter(r,n.COMPILE_STATUS)){const i=n.getShaderInfoLog(r);throw n.deleteShader(r),new Error(`Shader compilation failed:
${i}`)}return r}function te(n,e,t){const r=ee(n,n.VERTEX_SHADER,e),o=ee(n,n.FRAGMENT_SHADER,t),i=n.createProgram();if(!i)throw new Error("Failed to create program object");if(n.attachShader(i,r),n.attachShader(i,o),n.linkProgram(i),!n.getProgramParameter(i,n.LINK_STATUS)){const a=n.getProgramInfoLog(i);throw n.deleteProgram(i),n.deleteShader(r),n.deleteShader(o),new Error(`Program linking failed:
${a}`)}return n.detachShader(i,r),n.detachShader(i,o),n.deleteShader(r),n.deleteShader(o),i}function Me(n){const e=n.createVertexArray();if(!e)throw new Error("Failed to create VAO");n.bindVertexArray(e);const t=new Float32Array([-1,-1,3,-1,-1,3]),r=n.createBuffer();if(!r)throw new Error("Failed to create VBO");return n.bindBuffer(n.ARRAY_BUFFER,r),n.bufferData(n.ARRAY_BUFFER,t,n.STATIC_DRAW),n.enableVertexAttribArray(0),n.vertexAttribPointer(0,2,n.FLOAT,!1,0,0),n.bindVertexArray(null),n.bindBuffer(n.ARRAY_BUFFER,null),e}function H(n,e,t){const r=n.createTexture();if(!r)throw new Error("Failed to create texture");return n.bindTexture(n.TEXTURE_2D,r),n.texImage2D(n.TEXTURE_2D,0,n.RGBA32F,e,t,0,n.RGBA,n.FLOAT,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.bindTexture(n.TEXTURE_2D,null),r}function ne(n,e){const t=n.createFramebuffer();if(!t)throw new Error("Failed to create framebuffer");n.bindFramebuffer(n.FRAMEBUFFER,t),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0);const r=n.checkFramebufferStatus(n.FRAMEBUFFER);if(r!==n.FRAMEBUFFER_COMPLETE)throw n.deleteFramebuffer(t),new Error(`Framebuffer incomplete: ${Ue(n,r)}`);return n.bindFramebuffer(n.FRAMEBUFFER,null),t}function Be(n){const e=n.createTexture();if(!e)throw new Error("Failed to create black texture");n.bindTexture(n.TEXTURE_2D,e);const t=new Float32Array([0,0,0,1]);return n.texImage2D(n.TEXTURE_2D,0,n.RGBA32F,1,1,0,n.RGBA,n.FLOAT,t),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.bindTexture(n.TEXTURE_2D,null),e}function Fe(n){const e=n.createTexture();if(!e)throw new Error("Failed to create keyboard texture");n.bindTexture(n.TEXTURE_2D,e);const t=256,r=3,o=new Float32Array(t*r*4);return n.texImage2D(n.TEXTURE_2D,0,n.RGBA32F,t,r,0,n.RGBA,n.FLOAT,o),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.bindTexture(n.TEXTURE_2D,null),e}function Oe(n,e,t,r){const s=new Float32Array(3072);for(let a=0;a<256;a++){const c=t.get(a)||!1,l=r.get(a)||0,u=(0*256+a)*4;s[u+0]=c?1:0,s[u+1]=c?1:0,s[u+2]=c?1:0,s[u+3]=1;const h=(2*256+a)*4;s[h+0]=l,s[h+1]=l,s[h+2]=l,s[h+3]=1}n.bindTexture(n.TEXTURE_2D,e),n.texSubImage2D(n.TEXTURE_2D,0,0,0,256,3,n.RGBA,n.FLOAT,s),n.bindTexture(n.TEXTURE_2D,null)}function Ue(n,e){switch(e){case n.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case n.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";case n.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE:return"FRAMEBUFFER_INCOMPLETE_MULTISAMPLE";default:return`Unknown status: ${e}`}}const re=`#version 300 es
precision highp float;

layout(location = 0) in vec2 position;

void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,se=`#version 300 es
precision highp float;

// Shadertoy compatibility: equirectangular texture sampling
const float ST_PI = 3.14159265359;
const float ST_TWOPI = 6.28318530718;
vec2 _st_dirToEquirect(vec3 dir) {
  float phi = atan(dir.z, dir.x);
  float theta = asin(dir.y);
  return vec2(phi / ST_TWOPI + 0.5, theta / ST_PI + 0.5);
}
`,Ne=se.split(`
`).length-1;class Ve{constructor(e){d(this,"project");d(this,"gl");d(this,"_width");d(this,"_height");d(this,"_frame",0);d(this,"_time",0);d(this,"_lastStepTime",null);d(this,"_passes",[]);d(this,"_textures",[]);d(this,"_keyboardTexture",null);d(this,"_blackTexture",null);d(this,"_keyStates",new Map);d(this,"_toggleStates",new Map);d(this,"_compilationErrors",[]);this.gl=e.gl,this.project=e.project,this._width=this.gl.drawingBufferWidth,this._height=this.gl.drawingBufferHeight,this.initExtensions(),this._blackTexture=Be(this.gl);const t=Fe(this.gl);this._keyboardTexture={texture:t,width:256,height:3},this.initProjectTextures(),this.initRuntimePasses()}get width(){return this._width}get height(){return this._height}get stats(){const e=this._lastStepTime===null?0:this._time-this._lastStepTime;return{frame:this._frame,time:this._time,deltaTime:e,width:this._width,height:this._height}}getCompilationErrors(){return this._compilationErrors}hasErrors(){return this._compilationErrors.length>0}getImageFramebuffer(){const e=this._passes.find(t=>t.name==="Image");return(e==null?void 0:e.framebuffer)??null}step(e,t,r,o){const i=this.gl,s=this._lastStepTime===null?0:e-this._lastStepTime;this._lastStepTime=e,this._time=e;const a=[this._width,this._height,1],c=this._time,l=s,u=this._frame,h=t;i.viewport(0,0,this._width,this._height);const m=["BufferA","BufferB","BufferC","BufferD","Image"];for(const g of m){const v=this._passes.find(f=>f.name===g);v&&(this.executePass(v,{iResolution:a,iTime:c,iTimeDelta:l,iFrame:u,iMouse:h,camera:r,polygonVertices:o}),this.swapPassTextures(v))}this._frame+=1}resize(e,t){this._width=e,this._height=t;const r=this.gl;for(const o of this._passes)r.deleteTexture(o.currentTexture),r.deleteTexture(o.previousTexture),r.deleteFramebuffer(o.framebuffer),o.currentTexture=H(r,e,t),o.previousTexture=H(r,e,t),o.framebuffer=ne(r,o.currentTexture)}reset(){this._frame=0;const e=this.gl;for(const t of this._passes)e.bindFramebuffer(e.FRAMEBUFFER,t.framebuffer),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t.previousTexture,0),e.clear(e.COLOR_BUFFER_BIT),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t.currentTexture,0);e.bindFramebuffer(e.FRAMEBUFFER,null)}updateKeyState(e,t){const r=this._keyStates.get(e)||!1;if(this._keyStates.set(e,t),t&&!r){const o=this._toggleStates.get(e)||0;this._toggleStates.set(e,o===0?1:0)}}updateKeyboardTexture(){this._keyboardTexture&&Oe(this.gl,this._keyboardTexture.texture,this._keyStates,this._toggleStates)}recompilePass(e,t){const r=this.gl,o=this._passes.find(a=>a.name===e);if(!o)return{success:!1,error:`Pass '${e}' not found`};const i=this.project.passes[e];if(!i)return{success:!1,error:`Project pass '${e}' not found`};const s=this.buildFragmentShader(t,i.channels);try{const a=te(r,re,s);r.deleteProgram(o.uniforms.program);const c={program:a,iResolution:r.getUniformLocation(a,"iResolution"),iTime:r.getUniformLocation(a,"iTime"),iTimeDelta:r.getUniformLocation(a,"iTimeDelta"),iFrame:r.getUniformLocation(a,"iFrame"),iMouse:r.getUniformLocation(a,"iMouse"),iCameraPos:r.getUniformLocation(a,"iCameraPos"),iCameraYawPitch:r.getUniformLocation(a,"iCameraYawPitch"),iWorldScale:r.getUniformLocation(a,"iWorldScale"),iPolygonVertices:r.getUniformLocation(a,"iPolygonVertices"),iNumVertices:r.getUniformLocation(a,"iNumVertices"),iChannel:[r.getUniformLocation(a,"iChannel0"),r.getUniformLocation(a,"iChannel1"),r.getUniformLocation(a,"iChannel2"),r.getUniformLocation(a,"iChannel3")]};return o.uniforms=c,i.glslSource=t,this._compilationErrors=this._compilationErrors.filter(l=>l.passName!==e),{success:!0}}catch(a){return{success:!1,error:a instanceof Error?a.message:String(a)}}}recompileCommon(e){const t=this.project.commonSource;this.project.commonSource=e;const r=[],o=["BufferA","BufferB","BufferC","BufferD","Image"];for(const i of o){const s=this.project.passes[i];if(!s)continue;const a=this.recompilePass(i,s.glslSource);a.success||r.push({passName:i,error:a.error||"Unknown error"})}if(r.length>0){this.project.commonSource=t;for(const i of o){const s=this.project.passes[i];s&&(r.some(a=>a.passName===i)||this.recompilePass(i,s.glslSource))}return{success:!1,errors:r}}return{success:!0,errors:[]}}dispose(){const e=this.gl;for(const t of this._passes)e.deleteProgram(t.uniforms.program),e.deleteVertexArray(t.vao),e.deleteFramebuffer(t.framebuffer),e.deleteTexture(t.currentTexture),e.deleteTexture(t.previousTexture);for(const t of this._textures)e.deleteTexture(t.texture);this._keyboardTexture&&e.deleteTexture(this._keyboardTexture.texture),this._blackTexture&&e.deleteTexture(this._blackTexture),this._passes=[],this._textures=[],this._keyboardTexture=null,this._blackTexture=null}initExtensions(){const e=this.gl;if(!e.getExtension("EXT_color_buffer_float"))throw new Error("EXT_color_buffer_float not supported. WebGL2 with float rendering is required.");e.getExtension("OES_texture_float_linear")}initProjectTextures(){const e=this.gl;this._textures=[];for(const t of this.project.textures){const r=e.createTexture();if(!r)throw new Error("Failed to create texture");e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255]));const o={name:t.name,texture:r,width:1,height:1};this._textures.push(o);const i=new Image;i.crossOrigin="anonymous",i.onload=()=>{e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,i);const s=t.filter==="nearest"?e.NEAREST:e.LINEAR;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,s),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,s);const a=t.wrap==="clamp"?e.CLAMP_TO_EDGE:e.REPEAT;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,a),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,a),t.filter==="linear"&&e.generateMipmap(e.TEXTURE_2D),o.width=i.width,o.height=i.height,console.log(`Loaded texture '${t.name}': ${i.width}x${i.height}`)},i.onerror=()=>{console.error(`Failed to load texture '${t.name}' from ${t.source}`)},i.src=t.source}}initRuntimePasses(){const e=this.gl,t=this.project,r=Me(e),o=["BufferA","BufferB","BufferC","BufferD","Image"];for(const i of o){const s=t.passes[i];if(!s)continue;const a=this.buildFragmentShader(s.glslSource,s.channels);try{const c=te(e,re,a),l={program:c,iResolution:e.getUniformLocation(c,"iResolution"),iTime:e.getUniformLocation(c,"iTime"),iTimeDelta:e.getUniformLocation(c,"iTimeDelta"),iFrame:e.getUniformLocation(c,"iFrame"),iMouse:e.getUniformLocation(c,"iMouse"),iCameraPos:e.getUniformLocation(c,"iCameraPos"),iCameraYawPitch:e.getUniformLocation(c,"iCameraYawPitch"),iWorldScale:e.getUniformLocation(c,"iWorldScale"),iPolygonVertices:e.getUniformLocation(c,"iPolygonVertices"),iNumVertices:e.getUniformLocation(c,"iNumVertices"),iChannel:[e.getUniformLocation(c,"iChannel0"),e.getUniformLocation(c,"iChannel1"),e.getUniformLocation(c,"iChannel2"),e.getUniformLocation(c,"iChannel3")]},u=H(e,this._width,this._height),h=H(e,this._width,this._height),m=ne(e,u),g={name:i,projectChannels:s.channels,vao:r,uniforms:l,framebuffer:m,currentTexture:u,previousTexture:h};this._passes.push(g)}catch(c){const l=c instanceof Error?c.message:String(c),u=this.getLineMapping(),h=l.match(/ERROR:\s*\d+:(\d+):/);let m=!1,g=null;if(h&&this.project.commonSource){const v=parseInt(h[1],10),f=u.boilerplateLinesBeforeCommon+2,T=f+u.commonLineCount-1;v>=f&&v<=T&&(m=!0,g=v-f+1)}this._compilationErrors.push({passName:i,error:l,source:a,isFromCommon:m,originalLine:g}),console.error(`Failed to compile ${i}:`,l)}}}getLineMapping(){const e=Ne+1,t=this.project.commonSource?this.project.commonSource.split(`
`).length:0;return{boilerplateLinesBeforeCommon:e,commonLineCount:t}}buildFragmentShader(e,t){const r=[se];this.project.commonSource&&(r.push("// Common code"),r.push(this.project.commonSource),r.push("")),r.push(`// Shadertoy built-in uniforms
uniform vec3  iResolution;
uniform float iTime;
uniform float iTimeDelta;
uniform int   iFrame;
uniform vec4  iMouse;
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform sampler2D iChannel2;
uniform sampler2D iChannel3;

// Camera uniforms (custom extension)
uniform vec3 iCameraPos;
uniform vec2 iCameraYawPitch;
uniform float iWorldScale;
`);const o=this.preprocessCubemapTextures(e,t);return r.push("// User shader code"),r.push(o),r.push(""),r.push(`// Main wrapper
out vec4 fragColor;

void main() {
  mainImage(fragColor, gl_FragCoord.xy);
}`),r.join(`
`)}preprocessCubemapTextures(e,t){const r=new Set;if(t.forEach((i,s)=>{i.kind==="texture"&&i.cubemap&&r.add(`iChannel${s}`)}),r.size===0)return e;const o=/texture\s*\(\s*(iChannel[0-3])\s*,\s*([^)]+)\)/g;return e.replace(o,(i,s,a)=>r.has(s)?`texture(${s}, _st_dirToEquirect(${a}))`:i)}executePass(e,t){const r=this.gl;r.bindFramebuffer(r.FRAMEBUFFER,e.framebuffer),r.useProgram(e.uniforms.program),r.bindVertexArray(e.vao),this.bindBuiltinUniforms(e.uniforms,t),this.bindChannelTextures(e),r.drawArrays(r.TRIANGLES,0,3),r.bindVertexArray(null),r.useProgram(null),r.bindFramebuffer(r.FRAMEBUFFER,null)}bindBuiltinUniforms(e,t){const r=this.gl;if(e.iResolution&&r.uniform3f(e.iResolution,t.iResolution[0],t.iResolution[1],t.iResolution[2]),e.iTime&&r.uniform1f(e.iTime,t.iTime),e.iTimeDelta&&r.uniform1f(e.iTimeDelta,t.iTimeDelta),e.iFrame&&r.uniform1i(e.iFrame,t.iFrame),e.iMouse&&r.uniform4f(e.iMouse,t.iMouse[0],t.iMouse[1],t.iMouse[2],t.iMouse[3]),t.camera&&(e.iCameraPos&&r.uniform3f(e.iCameraPos,t.camera.position[0],t.camera.position[1],t.camera.position[2]),e.iCameraYawPitch&&r.uniform2f(e.iCameraYawPitch,t.camera.yaw,t.camera.pitch),e.iWorldScale&&r.uniform1f(e.iWorldScale,t.camera.scale)),t.polygonVertices&&t.polygonVertices.length>0){if(e.iPolygonVertices){const o=new Float32Array(t.polygonVertices.flat());r.uniform2fv(e.iPolygonVertices,o)}e.iNumVertices&&r.uniform1i(e.iNumVertices,t.polygonVertices.length)}}bindChannelTextures(e){const t=this.gl;for(let r=0;r<4;r++){const o=e.projectChannels[r],i=this.resolveChannelTexture(o);t.activeTexture(t.TEXTURE0+r),t.bindTexture(t.TEXTURE_2D,i);const s=e.uniforms.iChannel[r];s&&t.uniform1i(s,r)}}resolveChannelTexture(e){switch(e.kind){case"none":if(!this._blackTexture)throw new Error("Black texture not initialized");return this._blackTexture;case"buffer":{const r=this._passes.find(o=>o.name===e.buffer);if(!r)throw new Error(`Buffer '${e.buffer}' not found`);return e.current?r.currentTexture:r.previousTexture}case"texture":{const r=this._textures.find(o=>o.name===e.name);if(!r)throw new Error(`Texture '${e.name}' not found`);return r.texture}case"keyboard":if(!this._keyboardTexture)throw new Error("Internal error: keyboard texture not initialized");return this._keyboardTexture.texture;default:const t=e;throw new Error(`Unknown channel source: ${JSON.stringify(t)}`)}}swapPassTextures(e){const t=this.gl,r=e.currentTexture;e.currentTexture=e.previousTexture,e.previousTexture=r,t.bindFramebuffer(t.FRAMEBUFFER,e.framebuffer),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e.currentTexture,0),t.bindFramebuffer(t.FRAMEBUFFER,null)}}const ke="modulepreload",He=function(n){return"/shader-apps/affine-surface-standalone/"+n},oe={},B=function(e,t,r){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(t.map(c=>{if(c=He(c),c in oe)return;oe[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":ke,l||(h.as="script"),h.crossOrigin="",h.href=c,a&&h.setAttribute("nonce",a),document.head.appendChild(h),l)return new Promise((m,g)=>{h.addEventListener("load",m),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return o.then(s=>{for(const a of s||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};function U(n,e){if(e in n)return e;const t=e.toLowerCase();for(const r of Object.keys(n))if(r.toLowerCase()===t)return r;return null}function Xe(n){return n==="Image"||n==="BufferA"||n==="BufferB"||n==="BufferC"||n==="BufferD"}function ce(n){return typeof n=="string"?Xe(n)?{buffer:n}:n==="keyboard"?{keyboard:!0}:{texture:n}:n}async function q(n,e,t,r){const o=n,i=`${o}/config.json`;if(i in t){const a=await t[i]();return a.Image||a.BufferA||a.BufferB||a.BufferC||a.BufferD?ze(o,a,e,r):ie(o,e,a)}else return ie(o,e)}async function ie(n,e,t){const r=`${n}/image.glsl`,o=U(e,r);if(!o)throw new Error(`Demo '${n}' not found. Expected ${r}`);const i=await e[o](),s=(t==null?void 0:t.layout)||"fullscreen",a=(t==null?void 0:t.controls)??!0,c=n.split("/").pop()||n,l=(t==null?void 0:t.title)||c.split("-").map(u=>u.charAt(0).toUpperCase()+u.slice(1)).join(" ");return{root:n,meta:{title:l,author:(t==null?void 0:t.author)||null,description:(t==null?void 0:t.description)||null},layout:s,controls:a,commonSource:null,surface:t==null?void 0:t.surface,passes:{Image:{name:"Image",glslSource:i,channels:[{kind:"none"},{kind:"none"},{kind:"none"},{kind:"none"}]}},textures:[]}}async function ze(n,e,t,r){const o={Image:e.Image,BufferA:e.BufferA,BufferB:e.BufferB,BufferC:e.BufferC,BufferD:e.BufferD};let i=null;if(e.common){const E=`${n}/${e.common}`,p=U(t,E);p&&(i=await t[p]())}else{const E=`${n}/common.glsl`,p=U(t,E);p&&(i=await t[p]())}const s=new Set,a=["Image","BufferA","BufferB","BufferC","BufferD"];for(const E of a){const p=o[E];if(p)for(const w of["iChannel0","iChannel1","iChannel2","iChannel3"]){const C=p[w];if(!C)continue;const S=ce(C);S&&"texture"in S&&s.add(S.texture)}}const c=[],l=new Map;for(const E of s){const p=`${n}/${E.replace(/^\.\//,"")}`,w=U(r,p);if(!w)throw new Error(`Texture not found: ${E} (expected at ${p})`);const C=await r[w](),S=E.split("/").pop(),_=S.replace(/\.[^.]+$/,"");c.push({name:_,filename:S,source:C,filter:"linear",wrap:"repeat"}),l.set(E,_)}const u={};for(const E of a){const p=o[E];if(!p)continue;const w={Image:"image.glsl",BufferA:"bufferA.glsl",BufferB:"bufferB.glsl",BufferC:"bufferC.glsl",BufferD:"bufferD.glsl"},C=p.source||w[E],S=`${n}/${C}`,_=U(t,S);if(!_)throw new Error(`Missing shader file: ${S}`);const I=await t[_](),L=[X(p.iChannel0,l),X(p.iChannel1,l),X(p.iChannel2,l),X(p.iChannel3,l)];u[E]={name:E,glslSource:I,channels:L}}if(!u.Image)throw new Error(`Demo '${n}' must have an Image pass`);const h=n.split("/").pop()||n,m=e.title||h.split("-").map(E=>E.charAt(0).toUpperCase()+E.slice(1)).join(" "),g=e.author||null,v=e.description||null,f=e.layout||"fullscreen",T=e.controls??!0;return{root:n,meta:{title:m,author:g,description:v},layout:f,controls:T,commonSource:i,surface:e.surface,passes:u,textures:c}}function X(n,e){if(!n)return{kind:"none"};const t=ce(n);return t?"buffer"in t?{kind:"buffer",buffer:t.buffer,current:!!t.current}:"texture"in t?{kind:"texture",name:(e==null?void 0:e.get(t.texture))||t.texture,cubemap:t.type==="cubemap"}:"keyboard"in t?{kind:"keyboard"}:{kind:"none"}:{kind:"none"}}const le="affine-surface-last-demo",je=[{name:"trapezoid",title:"Trapezoid",description:"Default demo with rotation + dilation gluings"},{name:"l-shape",title:"L-Shape",description:"L-shaped translation surface"},{name:"editor",title:"Editor",description:"Interactive floor plan editor with draggable vertices"}],$e=Object.assign({"/demo/image.glsl":()=>B(()=>Promise.resolve().then(()=>at),void 0).then(n=>n.default)}),Ge=Object.assign({"/demo/config.json":()=>B(()=>Promise.resolve().then(()=>ct),void 0).then(n=>n.default)}),We=Object.assign({}),Ye=Object.assign({"/demo-l-shape/image.glsl":()=>B(()=>Promise.resolve().then(()=>dt),void 0).then(n=>n.default)}),qe=Object.assign({"/demo-l-shape/config.json":()=>B(()=>Promise.resolve().then(()=>ht),void 0).then(n=>n.default)}),Ze=Object.assign({}),Ke=Object.assign({"/demo-editor/image.glsl":()=>B(()=>Promise.resolve().then(()=>mt),void 0).then(n=>n.default)}),Je=Object.assign({"/demo-editor/config.json":()=>B(()=>Promise.resolve().then(()=>pt),void 0).then(n=>n.default)}),Qe=Object.assign({});async function et(n="trapezoid"){return n==="l-shape"?q("/demo-l-shape",Ye,qe,Ze):n==="editor"?q("/demo-editor",Ke,Je,Qe):q("/demo",$e,Ge,We)}function de(){const e=new URLSearchParams(window.location.search).get("demo");if(e==="l-shape")return"l-shape";if(e==="editor")return"editor";if(e==="trapezoid")return"trapezoid";const t=localStorage.getItem(le);return t==="l-shape"||t==="editor"||t==="trapezoid"?t:"trapezoid"}function ue(n){localStorage.setItem(le,n)}function tt(n){ue(n),window.location.href=`?demo=${n}`}class nt{constructor(e){d(this,"state");d(this,"vertices");d(this,"toCanvas",null);d(this,"toWorld",null);d(this,"HIT_RADIUS",10);d(this,"onVerticesChanged",null);this.vertices=e,this.state={hoveredVertex:-1,selectedVertex:-1,isDragging:!1}}setTransforms(e,t){this.toCanvas=e,this.toWorld=t}setOnVerticesChanged(e){this.onVerticesChanged=e}setVertices(e){this.vertices=e}onMouseDown(e,t){const r=this.findVertexNear(e,t);return r>=0?(this.state.selectedVertex=r,this.state.isDragging=!0,!0):!1}onMouseMove(e,t){if(this.state.isDragging&&this.state.selectedVertex>=0&&this.toWorld){const[i,s]=this.toWorld(e,t);return this.vertices[this.state.selectedVertex]=[i,s],this.onVerticesChanged&&this.onVerticesChanged(this.vertices),!0}const r=this.findVertexNear(e,t),o=this.state.hoveredVertex>=0;return this.state.hoveredVertex=r,r>=0||o}onMouseUp(){const e=this.state.isDragging;return this.state.selectedVertex=-1,this.state.isDragging=!1,e}onMouseLeave(){this.state.hoveredVertex=-1,this.onMouseUp()}getState(){return{...this.state}}getVertices(){return this.vertices}findVertexNear(e,t){if(!this.toCanvas)return-1;for(let r=0;r<this.vertices.length;r++){const[o,i]=this.vertices[r],[s,a]=this.toCanvas(o,i),c=e-s,l=t-a;if(Math.sqrt(c*c+l*l)<this.HIT_RADIUS)return r}return-1}}const P=class P{constructor(e){d(this,"container");d(this,"canvas");d(this,"gl");d(this,"engine");d(this,"project");d(this,"pixelRatio");d(this,"animationId",null);d(this,"startTime",0);d(this,"mouse",[0,0,-1,-1]);d(this,"camera",{position:[0,1,0],yaw:Math.PI,pitch:0,scale:1});d(this,"keysDown",new Set);d(this,"isMouseDragging",!1);d(this,"lastMouseX",0);d(this,"lastMouseY",0);d(this,"fpsDisplay");d(this,"frameCount",0);d(this,"lastFpsUpdate",0);d(this,"currentFps",0);d(this,"controlsContainer",null);d(this,"playPauseButton",null);d(this,"isPaused",!1);d(this,"errorOverlay",null);d(this,"galleryOverlay",null);d(this,"minimapContainer");d(this,"minimapCanvas");d(this,"minimapCtx");d(this,"floorPlanInteraction",null);d(this,"polygonVertices");d(this,"edgePairings");d(this,"TELEPORT_EPSILON");d(this,"resizeObserver");d(this,"intersectionObserver");d(this,"isVisible",!0);d(this,"animate",e=>{if(this.animationId=requestAnimationFrame(this.animate),this.isPaused||!this.isVisible)return;const t=e/1e3,r=t-this.startTime;this.updateFps(t),this.updateCameraMovement(),this.engine.updateKeyboardTexture(),this.engine.step(r,this.mouse,this.camera,this.polygonVertices),this.presentToScreen(),this.drawMinimap()});this.container=e.container,this.project=e.project,this.pixelRatio=e.pixelRatio??window.devicePixelRatio,e.project.surface?(this.polygonVertices=e.project.surface.vertices,this.edgePairings=e.project.surface.pairings,this.TELEPORT_EPSILON=e.project.surface.epsilon??P.DEFAULT_EPSILON):(this.polygonVertices=P.DEFAULT_VERTICES,this.edgePairings=P.DEFAULT_PAIRINGS,this.TELEPORT_EPSILON=P.DEFAULT_EPSILON);const t=this.computePolygonCentroid();this.camera.position[0]=t[0],this.camera.position[2]=t[1],this.canvas=document.createElement("canvas"),this.canvas.style.width="100%",this.canvas.style.height="100%",this.canvas.style.display="block",this.container.appendChild(this.canvas),this.fpsDisplay=document.createElement("div"),this.fpsDisplay.className="fps-counter",this.fpsDisplay.textContent="0 FPS",this.container.appendChild(this.fpsDisplay),e.project.controls&&this.createControls(),this.createMinimap();const r=this.canvas.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});if(!r)throw new Error("WebGL2 not supported");this.gl=r,this.updateCanvasSize(),this.engine=new Ve({gl:this.gl,project:e.project}),this.engine.hasErrors()&&this.showErrorOverlay(this.engine.getCompilationErrors()),this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasSize(),this.engine.resize(this.canvas.width,this.canvas.height),this.startTime=performance.now()/1e3,this.engine.reset()}),this.resizeObserver.observe(this.container),this.intersectionObserver=new IntersectionObserver(o=>{const i=o[0];this.isVisible=i.isIntersecting},{threshold:.1}),this.intersectionObserver.observe(this.container),this.setupMouseTracking(),this.setupKeyboardTracking(),this.setupGlobalShortcuts(),e.project.controls&&this.setupKeyboardShortcuts()}hasErrors(){return this.engine.hasErrors()}getEngine(){return this.engine}start(){this.animationId===null&&(this.startTime=performance.now()/1e3,this.animate(this.startTime))}stop(){this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null)}dispose(){this.stop(),this.resizeObserver.disconnect(),this.intersectionObserver.disconnect(),this.engine.dispose(),this.container.removeChild(this.canvas),this.container.removeChild(this.fpsDisplay)}updateCameraMovement(){const t=Math.sin(this.camera.yaw),r=Math.cos(this.camera.yaw),o=Math.cos(this.camera.yaw),i=-Math.sin(this.camera.yaw);let s=0,a=0;this.keysDown.has("KeyW")&&(s+=t,a+=r),this.keysDown.has("KeyS")&&(s-=t,a-=r),this.keysDown.has("KeyA")&&(s-=o,a-=i),this.keysDown.has("KeyD")&&(s+=o,a+=i);const c=Math.sqrt(s*s+a*a);if(c>0){s=s/c*.05,a=a/c*.05;const l=this.camera.position[0],u=this.camera.position[2];let h=l+s,m=u+a;for(let g=0;g<4;g++){const v=this.findEdgeCrossing(l,u,h,m);if(v===null)break;const{edgeId:f,t:T}=v;if(this.edgePairings[f]<0)break;const p=l+T*(h-l),w=u+T*(m-u),C=this.teleportPosition(p,w,f),S=this.computeGluingRotation(f);this.camera.yaw-=S;const _=this.computeGluingScale(f);this.camera.scale*=_;const I=1-T;let L=I*(h-l),D=I*(m-u);const A=Math.cos(S),F=Math.sin(S),M=A*L-F*D,N=F*L+A*D;h=C.x+M,m=C.z+N}this.camera.position[0]=h,this.camera.position[2]=m}}computePolygonCentroid(){let e=0,t=0;for(const[o,i]of this.polygonVertices)e+=o,t+=i;const r=this.polygonVertices.length;return[e/r,t/r]}getEdge(e){const t=this.polygonVertices.length,r=this.polygonVertices[e%t],o=this.polygonVertices[(e+1)%t];return{A:r,B:o}}getEdgeNormal(e){const{A:t,B:r}=this.getEdge(e),o=r[0]-t[0],i=r[1]-t[1],s=Math.sqrt(o*o+i*i);return[-i/s,o/s]}edgeParameter(e,t,r,o){const i=o[0]-r[0],s=o[1]-r[1],a=e-r[0],c=t-r[1],l=a*i+c*s,u=i*i+s*s;return l/u}findEdgeCrossing(e,t,r,o){const i=r-e,s=o-t;let a=1/0,c=-1;for(let l=0;l<this.polygonVertices.length;l++){const{A:u,B:h}=this.getEdge(l),m=h[0]-u[0],g=h[1]-u[1],v=e-u[0],f=t-u[1],T=i*g-s*m;if(Math.abs(T)<1e-10)continue;const E=(m*f-g*v)/T,p=(i*f-s*v)/T;E>.001&&E<=1&&p>=0&&p<=1&&E<a&&(a=E,c=l)}return c>=0?{edgeId:c,t:a}:null}computeGluingRotation(e){const{A:t,B:r}=this.getEdge(e),o=r[0]-t[0],i=r[1]-t[1],s=this.edgePairings[e],{A:a,B:c}=this.getEdge(s),l=a[0]-c[0],u=a[1]-c[1],h=Math.atan2(i,o);return Math.atan2(u,l)-h}computeGluingScale(e){const{A:t,B:r}=this.getEdge(e),o=r[0]-t[0],i=r[1]-t[1],s=Math.sqrt(o*o+i*i),a=this.edgePairings[e],{A:c,B:l}=this.getEdge(a),u=c[0]-l[0],h=c[1]-l[1];return Math.sqrt(u*u+h*h)/s}teleportPosition(e,t,r){const{A:o,B:i}=this.getEdge(r),s=this.edgeParameter(e,t,o,i),a=this.edgePairings[r],{A:c,B:l}=this.getEdge(a),u=1-s,h=c[0]+u*(l[0]-c[0]),m=c[1]+u*(l[1]-c[1]),g=this.getEdgeNormal(a),v=h+g[0]*this.TELEPORT_EPSILON,f=m+g[1]*this.TELEPORT_EPSILON;return{x:v,z:f}}updateFps(e){this.frameCount++,e-this.lastFpsUpdate>=1&&(this.currentFps=this.frameCount/(e-this.lastFpsUpdate),this.fpsDisplay.textContent=`${Math.round(this.currentFps)} FPS`,this.frameCount=0,this.lastFpsUpdate=e)}presentToScreen(){const e=this.gl,t=this.engine.getImageFramebuffer();if(!t){console.warn("No Image pass found");return}e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.bindFramebuffer(e.READ_FRAMEBUFFER,t),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.blitFramebuffer(0,0,this.canvas.width,this.canvas.height,0,0,this.canvas.width,this.canvas.height,e.COLOR_BUFFER_BIT,e.NEAREST),e.bindFramebuffer(e.READ_FRAMEBUFFER,null)}updateCanvasSize(){const e=this.container.getBoundingClientRect(),t=Math.floor(e.width*this.pixelRatio),r=Math.floor(e.height*this.pixelRatio);(this.canvas.width!==t||this.canvas.height!==r)&&(this.canvas.width=t,this.canvas.height=r)}setupMouseTracking(){const e=o=>{const i=this.canvas.getBoundingClientRect(),s=(o.clientX-i.left)*this.pixelRatio,a=(i.height-(o.clientY-i.top))*this.pixelRatio;if(this.mouse[0]=s,this.mouse[1]=a,this.isMouseDragging){const c=o.clientX-this.lastMouseX,l=o.clientY-this.lastMouseY,u=.003;this.camera.yaw-=c*u,this.camera.pitch-=l*u,this.camera.pitch=Math.max(-Math.PI/2+.1,Math.min(Math.PI/2-.1,this.camera.pitch)),this.lastMouseX=o.clientX,this.lastMouseY=o.clientY}},t=o=>{this.isMouseDragging=!0,this.lastMouseX=o.clientX,this.lastMouseY=o.clientY;const i=this.canvas.getBoundingClientRect(),s=(o.clientX-i.left)*this.pixelRatio,a=(i.height-(o.clientY-i.top))*this.pixelRatio;this.mouse[2]=s,this.mouse[3]=a},r=()=>{this.isMouseDragging=!1};this.canvas.addEventListener("mousemove",e),this.canvas.addEventListener("mousedown",t),this.canvas.addEventListener("mouseup",r),this.canvas.addEventListener("mouseleave",r)}createControls(){this.controlsContainer=document.createElement("div"),this.controlsContainer.className="playback-controls",this.playPauseButton=document.createElement("button"),this.playPauseButton.className="control-button",this.playPauseButton.title="Play/Pause (Space)",this.playPauseButton.innerHTML=`
      <svg viewBox="0 0 16 16">
        <path d="M5 3h2v10H5V3zm4 0h2v10H9V3z"/>
      </svg>
    `,this.playPauseButton.addEventListener("click",()=>this.togglePlayPause());const e=document.createElement("button");e.className="control-button",e.title="Reset (R)",e.innerHTML=`
      <svg viewBox="0 0 16 16">
        <path d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
      </svg>
    `,e.addEventListener("click",()=>this.reset());const t=document.createElement("button");t.className="control-button",t.title="Screenshot (S)",t.innerHTML=`
      <svg viewBox="0 0 16 16">
        <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
        <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
      </svg>
    `,t.addEventListener("click",()=>this.screenshot());const r=document.createElement("button");r.className="control-button",r.title="Demo Gallery (G)",r.innerHTML=`
      <svg viewBox="0 0 16 16">
        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/>
      </svg>
    `,r.addEventListener("click",()=>this.showGallery()),this.controlsContainer.appendChild(this.playPauseButton),this.controlsContainer.appendChild(e),this.controlsContainer.appendChild(t),this.controlsContainer.appendChild(r),this.container.appendChild(this.controlsContainer),this.createGalleryOverlay()}createGalleryOverlay(){this.galleryOverlay=document.createElement("div"),this.galleryOverlay.className="gallery-overlay",this.galleryOverlay.style.display="none";const e=document.createElement("div");e.className="gallery-content";const t=document.createElement("h2");t.textContent="Demo Gallery",t.className="gallery-title",e.appendChild(t);const r=document.createElement("div");r.className="gallery-cards";const o=de();for(const s of je){const a=document.createElement("div");a.className="gallery-card",s.name===o&&a.classList.add("gallery-card-active");const c=document.createElement("h3");c.textContent=s.title;const l=document.createElement("p");l.textContent=s.description,a.appendChild(c),a.appendChild(l),a.addEventListener("click",()=>{s.name!==o?tt(s.name):this.hideGallery()}),r.appendChild(a)}e.appendChild(r);const i=document.createElement("button");i.className="gallery-close",i.textContent="Close",i.addEventListener("click",()=>this.hideGallery()),e.appendChild(i),this.galleryOverlay.appendChild(e),this.galleryOverlay.addEventListener("click",s=>{s.target===this.galleryOverlay&&this.hideGallery()}),this.container.appendChild(this.galleryOverlay),ue(o)}showGallery(){this.galleryOverlay&&(this.galleryOverlay.style.display="flex")}hideGallery(){this.galleryOverlay&&(this.galleryOverlay.style.display="none")}createMinimap(){this.minimapContainer=document.createElement("div"),this.minimapContainer.className="minimap-container",this.minimapCanvas=document.createElement("canvas"),this.minimapCanvas.className="minimap-canvas",this.minimapCanvas.width=150,this.minimapCanvas.height=150;const e=this.minimapCanvas.getContext("2d");if(!e)throw new Error("Could not get 2D context for minimap");this.minimapCtx=e,this.minimapContainer.appendChild(this.minimapCanvas),this.container.appendChild(this.minimapContainer),this.floorPlanInteraction=new nt(this.polygonVertices),this.setupMinimapInteraction()}setupMinimapInteraction(){if(!this.floorPlanInteraction)return;const e=this.minimapCanvas;e.style.pointerEvents="auto",e.style.cursor="default",e.addEventListener("mousedown",t=>{t.stopPropagation();const r=e.getBoundingClientRect(),o=t.clientX-r.left,i=t.clientY-r.top;this.floorPlanInteraction.onMouseDown(o,i)&&(e.style.cursor="grabbing")}),e.addEventListener("mousemove",t=>{const r=e.getBoundingClientRect(),o=t.clientX-r.left,i=t.clientY-r.top;this.floorPlanInteraction.onMouseMove(o,i);const s=this.floorPlanInteraction.getState();s.isDragging?e.style.cursor="grabbing":s.hoveredVertex>=0?e.style.cursor="grab":e.style.cursor="default"}),e.addEventListener("mouseup",()=>{this.floorPlanInteraction.onMouseUp(),e.style.cursor="default"}),e.addEventListener("mouseleave",()=>{this.floorPlanInteraction.onMouseLeave(),e.style.cursor="default"})}drawMinimap(){const e=this.minimapCtx,t=this.minimapCanvas,r=t.width,o=t.height;e.clearRect(0,0,r,o),e.fillStyle="rgba(0, 0, 0, 0.75)",e.beginPath(),e.roundRect(0,0,r,o,8),e.fill();let i=1/0,s=-1/0,a=1/0,c=-1/0;for(const[y,x]of this.polygonVertices)i=Math.min(i,y),s=Math.max(s,y),a=Math.min(a,x),c=Math.max(c,x);const l=.5;i-=l,s+=l,a-=l,c+=l;const u=20,h=s-i,m=c-a,g=(r-2*u)/h,v=(o-2*u)/m,f=Math.min(g,v),T=(r-h*f)/2,E=(o-m*f)/2,p=(y,x)=>{const R=T+(y-i)*f,b=o-E-(x-a)*f;return[R,b]},w=(y,x)=>{const R=i+(y-T)/f,b=a+(o-E-x)/f;return[R,b]};this.floorPlanInteraction&&this.floorPlanInteraction.setTransforms(p,w),e.strokeStyle="rgba(255, 255, 255, 0.6)",e.lineWidth=2,e.beginPath();const[C,S]=p(this.polygonVertices[0][0],this.polygonVertices[0][1]);e.moveTo(C,S);for(let y=1;y<this.polygonVertices.length;y++){const[x,R]=p(this.polygonVertices[y][0],this.polygonVertices[y][1]);e.lineTo(x,R)}e.closePath(),e.stroke(),e.fillStyle="rgba(255, 255, 255, 0.08)",e.fill();const _=this.generateEdgeColors();for(let y=0;y<this.polygonVertices.length;y++){const x=this.polygonVertices[y],R=this.polygonVertices[(y+1)%this.polygonVertices.length],b=(x[0]+R[0])/2,$=(x[1]+R[1])/2,[G,O]=p(b,$);e.fillStyle=_[y],e.beginPath(),e.arc(G,O,3,0,Math.PI*2),e.fill()}const I=this.camera.position[0],L=this.camera.position[2],[D,A]=p(I,L),F=this.camera.yaw,M=12,N=6,Ae=Math.sin(F),be=Math.cos(F),z=Ae*f,j=-be*f,K=Math.sqrt(z*z+j*j),V=z/K*M,k=j/K*M,J=-k/M*N,Q=V/M*N;if(e.fillStyle="#ffd700",e.beginPath(),e.moveTo(D+V,A+k),e.lineTo(D-V*.3+J,A-k*.3+Q),e.lineTo(D-V*.3-J,A-k*.3-Q),e.closePath(),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.arc(D,A,3,0,Math.PI*2),e.fill(),this.floorPlanInteraction){const y=this.floorPlanInteraction.getState();for(let x=0;x<this.polygonVertices.length;x++){const[R,b]=this.polygonVertices[x],[$,G]=p(R,b);let O="rgba(255, 255, 255, 0.8)",W="rgba(255, 255, 255, 0.4)",Y=5;x===y.selectedVertex?(O="#00ff88",W="#ffffff",Y=7):x===y.hoveredVertex&&(O="#ffff00",W="#ffffff",Y=6),e.fillStyle=O,e.strokeStyle=W,e.lineWidth=2,e.beginPath(),e.arc($,G,Y,0,Math.PI*2),e.fill(),e.stroke()}}}generateEdgeColors(){const e=this.polygonVertices.length,t=new Array(e).fill("#888888"),r=["#ff6b6b","#4ecdc4","#ffe66d","#95e1d3","#f38181","#aa96da","#fcbad3","#a8d8ea"];let o=0;const i=new Set;for(let s=0;s<e;s++){if(i.has(s))continue;const a=this.edgePairings[s];if(a>=0&&a<e){const c=r[o%r.length];t[s]=c,t[a]=c,i.add(s),i.add(a),o++}}return t}setupKeyboardTracking(){document.addEventListener("keydown",e=>{this.keysDown.add(e.code);const t=e.keyCode;t>=0&&t<256&&this.engine.updateKeyState(t,!0)}),document.addEventListener("keyup",e=>{this.keysDown.delete(e.code);const t=e.keyCode;t>=0&&t<256&&this.engine.updateKeyState(t,!1)})}setupGlobalShortcuts(){document.addEventListener("keydown",e=>{})}setupKeyboardShortcuts(){document.addEventListener("keydown",e=>{var t;e.code==="Space"&&!e.repeat&&(e.preventDefault(),this.togglePlayPause()),e.code==="KeyG"&&!e.repeat&&(e.preventDefault(),((t=this.galleryOverlay)==null?void 0:t.style.display)==="none"?this.showGallery():this.hideGallery()),e.code==="Escape"&&this.hideGallery()})}togglePlayPause(){this.isPaused=!this.isPaused,this.updatePlayPauseButton()}reset(){this.startTime=performance.now()/1e3,this.frameCount=0,this.lastFpsUpdate=0,this.engine.reset()}screenshot(){const e=this.project.root.split("/").pop()||"shader",t=new Date,r=t.getFullYear().toString()+(t.getMonth()+1).toString().padStart(2,"0")+t.getDate().toString().padStart(2,"0")+"-"+t.getHours().toString().padStart(2,"0")+t.getMinutes().toString().padStart(2,"0")+t.getSeconds().toString().padStart(2,"0"),o=`affine-surface-${e}-${r}.png`;this.canvas.toBlob(i=>{if(!i){console.error("Failed to create screenshot blob");return}const s=URL.createObjectURL(i),a=document.createElement("a");a.href=s,a.download=o,a.click(),URL.revokeObjectURL(s),console.log(`Screenshot saved: ${o}`)},"image/png")}updatePlayPauseButton(){this.playPauseButton&&(this.isPaused?this.playPauseButton.innerHTML=`
        <svg viewBox="0 0 16 16">
          <path d="M4 3v10l8-5-8-5z"/>
        </svg>
      `:this.playPauseButton.innerHTML=`
        <svg viewBox="0 0 16 16">
          <path d="M5 3h2v10H5V3zm4 0h2v10H9V3z"/>
        </svg>
      `)}showErrorOverlay(e){this.errorOverlay||(this.errorOverlay=document.createElement("div"),this.errorOverlay.className="shader-error-overlay",this.container.appendChild(this.errorOverlay));const t=e.filter(l=>l.isFromCommon),r=e.filter(l=>!l.isFromCommon),a=[...t.length>0?[t[0]]:[],...r].map(({passName:l,error:u,source:h,isFromCommon:m,originalLine:g})=>{const v=u.replace(`Shader compilation failed:
`,"");let f=v;return m&&g!==null&&(f=v.replace(/Line \d+:/,`Line ${g}:`),f=f.replace(/ERROR:\s*\d+:(\d+):/,`ERROR: 0:${g}:`)),{passName:m?"common.glsl":l,error:this.parseShaderError(f),codeContext:m?this.extractCodeContextFromCommon(g):this.extractCodeContext(f,h)}}).map(({passName:l,error:u,codeContext:h})=>`
      <div class="error-section">
        <div class="error-pass-name">${l}</div>
        <pre class="error-content">${this.escapeHTML(u)}</pre>
        ${h?`<pre class="error-code-context">${h}</pre>`:""}
      </div>
    `).join("");this.errorOverlay.innerHTML=`
      <div class="error-overlay-content">
        <div class="error-header">
          <span class="error-title">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style="vertical-align: text-bottom;">
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM3.5 7.5a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9z"/>
            </svg>
            Shader Compilation Failed
          </span>
          <button class="error-close" title="Dismiss">x</button>
        </div>
        <div class="error-body">
          ${a}
        </div>
      </div>
    `;const c=this.errorOverlay.querySelector(".error-close");c&&c.addEventListener("click",()=>this.hideErrorOverlay())}parseShaderError(e){return e.split(`
`).map(t=>{const r=t.match(/^ERROR:\s*(\d+):(\d+):\s*(.+)$/);if(r){const[,,o,i]=r;return`Line ${o}: ${i}`}return t}).join(`
`)}extractCodeContext(e,t){const r=e.match(/ERROR:\s*\d+:(\d+):/);if(!r)return null;const o=parseInt(r[1],10),i=t.split(`
`),s=3,a=Math.max(0,o-s-1),c=Math.min(i.length,o+s);return i.slice(a,c).map((h,m)=>{const g=a+m+1,v=g===o,f=String(g).padStart(4," "),T=this.escapeHTML(h);return v?`<span class="error-line-highlight">${f} | ${T}</span>`:`<span class="context-line">${f} | ${T}</span>`}).join("")}extractCodeContextFromCommon(e){const t=this.engine.project.commonSource;if(!t)return null;const r=t.split(`
`),o=3,i=Math.max(0,e-o-1),s=Math.min(r.length,e+o);return r.slice(i,s).map((l,u)=>{const h=i+u+1,m=h===e,g=String(h).padStart(4," "),v=this.escapeHTML(l);return m?`<span class="error-line-highlight">${g} | ${v}</span>`:`<span class="context-line">${g} | ${v}</span>`}).join("")}escapeHTML(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}hideErrorOverlay(){this.errorOverlay&&(this.errorOverlay.remove(),this.errorOverlay=null)}};d(P,"DEFAULT_VERTICES",[[-4,-3],[4,-3],[2,3],[-2,3]]),d(P,"DEFAULT_PAIRINGS",[2,3,0,1]),d(P,"DEFAULT_EPSILON",.02);let Z=P;class rt{constructor(e){d(this,"container");d(this,"root");d(this,"canvasContainer");this.container=e.container,this.root=document.createElement("div"),this.root.className="layout-fullscreen",this.canvasContainer=document.createElement("div"),this.canvasContainer.className="canvas-container",this.root.appendChild(this.canvasContainer),this.container.appendChild(this.root)}getCanvasContainer(){return this.canvasContainer}dispose(){this.container.innerHTML=""}}function ot(n,e){return new rt(e)}async function ae(){try{const n=de();console.log(`Loading demo: ${n}`);const e=await et(n);console.log(`Loaded project: ${e.meta.title}`),console.log("Passes:",Object.keys(e.passes).filter(s=>e.passes[s]));const t=document.getElementById("app");if(!t)throw new Error("Container element #app not found");const r=ot(e.layout,{container:t,project:e}),o=r.getCanvasContainer(),i=new Z({container:o,project:e,pixelRatio:window.devicePixelRatio});i.hasErrors()?console.warn("App not started due to shader compilation errors"):(i.start(),console.log("App started!"),console.log("Controls: WASD to move, mouse drag to look around")),window.app=i,window.layout=r}catch(n){console.error("Failed to initialize:",n);const e=document.getElementById("app");e&&(e.innerHTML=`
        <div style="color: red; padding: 20px; font-family: monospace;">
          <h2>Error</h2>
          <pre>${n instanceof Error?n.message:String(n)}</pre>
        </div>
      `)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ae):ae();const it=`// ============================================
// Affine Surface Shader with WASD Camera
// ============================================
//
// A generalized translation/affine surface defined by:
//   - A polygon with vertices v0, v1, ..., v(n-1) in counterclockwise order
//   - Edge i connects v[i] to v[(i+1) mod n]
//   - A pairing function: edge i <-> edge pairings[i]
//
// Controls:
//   - WASD: Move forward/back/strafe left/right
//   - Mouse drag: Look around
//
// Uses custom uniforms: iCameraPos (vec3), iCameraYawPitch (vec2)
//

// ============================================
// SECTION 1: Constants
// ============================================

const float MAX_DIST = 100.0;
const float HIT_THRESHOLD = 0.001;
const int MAX_STEPS = 256;
const float EPSILON = 0.02;

// ============================================
// SECTION 2: Polygon Definition
// ============================================
//
// Trapezoid example:
//
//       v3 -------- v2
//      /              \\
//     /                \\
//    v0 -------------- v1
//
// Edges:
//   0: v0 -> v1  (bottom)
//   1: v1 -> v2  (right slant)
//   2: v2 -> v3  (top)
//   3: v3 -> v0  (left slant)
//
// Pairings:
//   edge 0 <-> edge 2  (bottom <-> top)
//   edge 1 <-> edge 3  (right slant <-> left slant)
//

#define NUM_VERTICES 4

// Vertices in xz-plane (counterclockwise)
const vec2 polygon[NUM_VERTICES] = vec2[](
    vec2(-4.0, -3.0),   // v0: bottom-left
    vec2(4.0, -3.0),    // v1: bottom-right
    vec2(2.0, 3.0),     // v2: top-right
    vec2(-2.0, 3.0)     // v3: top-left
);

// pairings[i] = j means edge i is glued to edge j
// pairings[i] = -1 means edge i is a solid wall (no teleportation)
const int pairings[NUM_VERTICES] = int[](
    2,   // edge 0 (bottom) <-> edge 2 (top)
    3,   // edge 1 (right)  <-> edge 3 (left)
    0,   // edge 2 (top)    <-> edge 0 (bottom)
    1    // edge 3 (left)   <-> edge 1 (right)
);

// Helper to check if edge is solid
bool isSolidWall(int edgeId) {
    return pairings[edgeId] < 0;
}

// ============================================
// SECTION 3: Polygon Geometry
// ============================================

// Get vertex i (with wraparound)
vec2 getVertex(int i) {
    return polygon[i % NUM_VERTICES];
}

// Get start and end of edge i
void getEdge(int i, out vec2 A, out vec2 B) {
    A = getVertex(i);
    B = getVertex(i + 1);
}

// Inward-pointing normal for edge i (perpendicular, pointing left of edge direction)
vec2 getEdgeNormal(int i) {
    vec2 A, B;
    getEdge(i, A, B);
    vec2 edge = B - A;
    // Rotate 90 deg counterclockwise: (x, y) -> (-y, x)
    return normalize(vec2(-edge.y, edge.x));
}

// Parameter t in [0,1] of point P along edge A->B
float edgeParameter(vec2 P, vec2 A, vec2 B) {
    vec2 edge = B - A;
    return dot(P - A, edge) / dot(edge, edge);
}

// Point at parameter t along edge A->B
vec2 pointOnEdge(float t, vec2 A, vec2 B) {
    return A + t * (B - A);
}

// ============================================
// SECTION 4: Ray-Edge Intersection (Analytical)
// ============================================

// 2D ray-segment intersection
// Ray: P = ro.xz + t * rd.xz
// Segment: A to B
// Returns t (distance along ray), or -1 if no hit
float rayEdge2D(vec2 ro, vec2 rd, vec2 A, vec2 B) {
    vec2 v = B - A;         // edge direction
    vec2 w = ro - A;        // ray origin relative to A

    float denom = rd.x * v.y - rd.y * v.x;  // cross product
    if (abs(denom) < 1e-8) return -1.0;     // parallel

    float t = (v.x * w.y - v.y * w.x) / denom;  // ray parameter
    float s = (rd.x * w.y - rd.y * w.x) / denom; // edge parameter

    // Check if intersection is within segment [0,1] and in front of ray
    if (t > EPSILON && s >= 0.0 && s <= 1.0) {
        return t;
    }
    return -1.0;
}

// Result of wall intersection
struct WallHit {
    float t;          // distance along ray
    int edgeId;       // which edge was hit
    vec2 point2D;     // hit point in xz-plane
    vec3 point3D;     // hit point in 3D
    vec3 normal;      // inward-pointing normal (3D)
};

// Find nearest wall intersection
WallHit findNearestWall(vec3 ro, vec3 rd) {
    WallHit result;
    result.t = MAX_DIST;
    result.edgeId = -1;

    vec2 ro2D = ro.xz;
    vec2 rd2D = rd.xz;

    for (int i = 0; i < NUM_VERTICES; i++) {
        vec2 A, B;
        getEdge(i, A, B);

        float t = rayEdge2D(ro2D, rd2D, A, B);
        if (t > 0.0 && t < result.t) {
            result.t = t;
            result.edgeId = i;
            result.point2D = ro2D + t * rd2D;
            result.point3D = ro + t * rd;

            // Normal in xz-plane, extended to 3D
            vec2 n2D = getEdgeNormal(i);
            result.normal = vec3(n2D.x, 0.0, n2D.y);
        }
    }

    return result;
}

// ============================================
// SECTION 5: Teleportation (Affine Gluing)
// ============================================
//
// Convention: When gluing edge a→b to edge c→d, the affine map φ satisfies:
//   φ(a) = d  and  φ(b) = c
//
// The linear part L of φ maps the source edge vector to the reversed target:
//   L(b - a) = c - d
//
// For equal-length edges: L is a rotation
// For parallel edges of different lengths: L is a scaling (dilation)
// For general edges: L is a rotation composed with scaling
//

// Compute the linear part (2x2 matrix) of the affine gluing map for an edge.
// This matrix transforms ray directions when teleporting through the edge.
//
// The unique orientation-preserving linear map L that takes vector u to vector v is:
//   L = (|v|/|u|) * R(θ)  where θ = angle(v) - angle(u)
//
mat2 computeGluingMatrix(int sourceEdge) {
    // Get source edge vector: B - A
    vec2 A, B;
    getEdge(sourceEdge, A, B);
    vec2 srcVec = B - A;

    // Get target edge
    int targetEdge = pairings[sourceEdge];
    vec2 C, D;
    getEdge(targetEdge, C, D);

    // Target vector is C - D (reversed due to orientation flip t → 1-t)
    // This is because: a→d, b→c means L(b-a) = c-d
    vec2 tgtVec = C - D;

    // Compute rotation angle: θ = angle(tgtVec) - angle(srcVec)
    float srcAngle = atan(srcVec.y, srcVec.x);
    float tgtAngle = atan(tgtVec.y, tgtVec.x);
    float theta = tgtAngle - srcAngle;

    // Compute scale factor: λ = |tgtVec| / |srcVec|
    float srcLen = length(srcVec);
    float tgtLen = length(tgtVec);
    float scale = tgtLen / srcLen;

    // Build scaled rotation matrix: L = scale * R(θ)
    // R(θ) = | cos θ  -sin θ |
    //        | sin θ   cos θ |
    float c = cos(theta) * scale;
    float s = sin(theta) * scale;

    // GLSL mat2 is column-major: mat2(col0, col1)
    // We want: | c  -s |  which is mat2(vec2(c, s), vec2(-s, c))
    //          | s   c |
    return mat2(c, s, -s, c);
}

// Teleport from edge i to its paired edge
// Uses parameterized position: t on edge i -> (1-t) on paired edge
vec3 teleport(vec3 p, int edgeId) {
    // Get source edge
    vec2 A, B;
    getEdge(edgeId, A, B);

    // Compute parameter along source edge
    float t = edgeParameter(p.xz, A, B);

    // Get target edge
    int pairedEdge = pairings[edgeId];
    vec2 C, D;
    getEdge(pairedEdge, C, D);

    // Position (1-t) on target edge (orientation flip)
    vec2 newPos2D = pointOnEdge(1.0 - t, C, D);

    // Offset slightly inward (into the polygon)
    vec2 inwardNormal = getEdgeNormal(pairedEdge);
    newPos2D += inwardNormal * EPSILON;

    // Preserve y-coordinate
    return vec3(newPos2D.x, p.y, newPos2D.y);
}

// ============================================
// SECTION 6: SDF Primitives
// ============================================

float sdSphere(vec3 p, vec3 center, float radius) {
    return length(p - center) - radius;
}

float sdBox(vec3 p, vec3 center, vec3 size) {
    vec3 q = abs(p - center) - size;
    return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0);
}

float sdTorus(vec3 p, vec3 center, vec2 t) {
    vec3 q = p - center;
    vec2 r = vec2(length(q.xz) - t.x, q.y);
    return length(r) - t.y;
}

// ============================================
// SECTION 7: Scene Definition
// ============================================

#define SPHERE_POS vec3(0.0, 0.0, 0.0)
#define SPHERE_RAD 0.8

#define BOX_POS vec3(-1.5, -0.3, 1.0)
#define BOX_SIZE vec3(0.4)

#define TORUS_POS vec3(1.5, 0.0, -1.0)
#define TORUS_PARAMS vec2(0.5, 0.15)

float map(vec3 p) {
    float d = MAX_DIST;

    d = min(d, sdSphere(p, SPHERE_POS, SPHERE_RAD));
    d = min(d, sdBox(p, BOX_POS, BOX_SIZE));
    d = min(d, sdTorus(p, TORUS_POS, TORUS_PARAMS));

    return d;
}

vec3 calcNormal(vec3 p) {
    const float h = 0.0001;
    const vec2 k = vec2(1.0, -1.0);
    return normalize(
        k.xyy * map(p + k.xyy * h) +
        k.yyx * map(p + k.yyx * h) +
        k.yxy * map(p + k.yxy * h) +
        k.xxx * map(p + k.xxx * h)
    );
}

// ============================================
// SECTION 8: Hybrid Raymarcher
// ============================================
//
// Algorithm:
//   1. Find nearest wall analytically (raytracing)
//   2. Raymarch SDF objects up to wall distance
//   3. If SDF hit first -> shade object
//   4. If wall hit first -> teleport, repeat from step 1
//

struct HitInfo {
    bool hit;
    vec3 position;
    vec3 normal;
    float distance;
    int materialId;    // 1 = SDF object, 2 = wall
    int teleportCount;
};

// Raymarch SDF up to maximum distance
float raymarchSDF(vec3 ro, vec3 rd, float maxT, out vec3 hitPos) {
    float t = 0.0;

    for (int i = 0; i < MAX_STEPS; i++) {
        vec3 p = ro + rd * t;
        float d = map(p);

        if (d < HIT_THRESHOLD) {
            hitPos = p;
            return t;
        }

        t += d;
        if (t >= maxT) break;
    }

    return maxT + 1.0;  // no hit
}

HitInfo trace(vec3 ro, vec3 rd) {
    HitInfo result;
    result.hit = false;
    result.teleportCount = 0;
    result.materialId = 0;

    vec3 currentRo = ro;
    vec3 currentRd = rd;  // Mutable copy - will be transformed at each teleport
    float totalDist = 0.0;

    for (int iter = 0; iter < 64; iter++) {  // max teleport iterations
        // 1. Find nearest wall (analytical raytracing)
        WallHit wallHit = findNearestWall(currentRo, currentRd);

        if (wallHit.edgeId < 0) {
            // No wall found (shouldn't happen if inside polygon)
            break;
        }

        // Clamp to remaining distance budget
        float remainingDist = MAX_DIST - totalDist;
        float marchLimit = min(wallHit.t, remainingDist);

        // 2. Raymarch SDF objects up to wall distance
        vec3 sdfHitPos;
        float sdfT = raymarchSDF(currentRo, currentRd, marchLimit, sdfHitPos);

        // 3. Did we hit an SDF object before the wall?
        if (sdfT < marchLimit) {
            result.hit = true;
            result.position = sdfHitPos;
            result.normal = calcNormal(sdfHitPos);
            result.distance = totalDist + sdfT;
            result.materialId = 1;
            return result;
        }

        // 4. Update distance traveled
        totalDist += marchLimit;

        // 5. Check distance budget
        if (totalDist >= MAX_DIST) {
            break;
        }

        // 6. Hit wall -> check if solid or teleport
        if (isSolidWall(wallHit.edgeId)) {
            // Solid wall: render it
            result.hit = true;
            result.position = wallHit.point3D;
            result.normal = wallHit.normal;
            result.distance = totalDist;
            result.materialId = 2;  // wall
            return result;
        }

        // 7. Teleport position
        currentRo = teleport(wallHit.point3D, wallHit.edgeId);

        // 8. Transform ray direction by the linear part of the affine map
        //    The gluing matrix L acts on the xz-plane; y is unchanged
        mat2 L = computeGluingMatrix(wallHit.edgeId);
        vec2 newRd_xz = L * currentRd.xz;
        currentRd = normalize(vec3(newRd_xz.x, currentRd.y, newRd_xz.y));

        result.teleportCount++;
    }

    return result;
}

// ============================================
// SECTION 9: Shading
// ============================================

vec3 getObjectColor(vec3 p) {
    float d1 = sdSphere(p, SPHERE_POS, SPHERE_RAD);
    float d2 = sdBox(p, BOX_POS, BOX_SIZE);
    float d3 = sdTorus(p, TORUS_POS, TORUS_PARAMS);

    if (d1 < 0.01) return vec3(0.9, 0.25, 0.2);   // red sphere
    if (d2 < 0.01) return vec3(0.2, 0.6, 0.9);    // blue box
    if (d3 < 0.01) return vec3(0.9, 0.75, 0.1);   // yellow torus

    return vec3(0.7);
}

vec3 shade(HitInfo hit, vec3 rd) {
    if (!hit.hit) {
        // Background gradient
        float t = 0.5 * (rd.y + 1.0);
        return mix(vec3(0.08, 0.08, 0.12), vec3(0.2, 0.2, 0.3), t);
    }

    vec3 lightDir = normalize(vec3(1.0, 1.0, -0.5));
    vec3 lightDir2 = normalize(vec3(-0.5, 0.5, 1.0));

    float diff = max(dot(hit.normal, lightDir), 0.0);
    float diff2 = max(dot(hit.normal, lightDir2), 0.0) * 0.3;
    float amb = 0.15;

    vec3 baseColor;

    if (hit.materialId == 2) {
        // Solid wall: checkerboard pattern
        vec2 wallUV = hit.position.xy * 0.5 + hit.position.zx * 0.5;
        float checker = mod(floor(wallUV.x) + floor(wallUV.y), 2.0);
        baseColor = mix(vec3(0.15, 0.15, 0.2), vec3(0.3, 0.3, 0.35), checker);
    } else {
        // SDF object
        baseColor = getObjectColor(hit.position);
    }

    // Distance-based atmospheric tint
    float distTint = hit.distance / MAX_DIST;
    baseColor = mix(baseColor, baseColor * vec3(0.7, 0.8, 1.0), distTint * 0.3);

    // Fresnel rim
    float fresnel = pow(1.0 - max(dot(hit.normal, -rd), 0.0), 3.0);

    vec3 col = baseColor * (amb + diff * 0.7 + diff2);
    col += fresnel * 0.1;

    // Subtle fog
    float fog = 1.0 - exp(-hit.distance * 0.008);
    col = mix(col, vec3(0.2, 0.2, 0.25), fog);

    return col;
}

// ============================================
// SECTION 10: Camera (WASD + Mouse)
// ============================================

mat3 setCamera(vec3 ro, vec3 ta, float roll) {
    vec3 cw = normalize(ta - ro);
    vec3 cp = vec3(sin(roll), cos(roll), 0.0);
    vec3 cu = normalize(cross(cp, cw));  // cross(up, forward) = right
    vec3 cv = cross(cw, cu);              // cross(forward, right) = up
    return mat3(cu, cv, cw);
}


void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = (2.0 * fragCoord - iResolution.xy) / iResolution.y;
    // Scale the iResolution.x by iWorldScale
    // uv.y *= 1.0/iWorldScale;


    vec3 camPos = iCameraPos;
    float yaw = iCameraYawPitch.x;
    float pitch = iCameraYawPitch.y;

    // Compute view direction from yaw and pitch
    vec3 viewDir = vec3(
        sin(yaw) * cos(pitch),
        sin(pitch),
        cos(yaw) * cos(pitch)
    );

    // Camera setup
    vec3 ro = camPos;
    vec3 ta = ro + viewDir;

    mat3 cam = setCamera(ro, ta, 0.0);
    // uv.y *= 1.0/iWorldScale;

    vec3 rd = cam * normalize(vec3(uv, 1.5));
    rd.y *= 1.0/iWorldScale;
    rd = normalize(rd);
    // Trace and shade
    HitInfo hit = trace(ro, rd);
    vec3 col = shade(hit, rd);

    // Gamma correction
    col = pow(col, vec3(0.4545));

    fragColor = vec4(col, 1.0);
}
`,at=Object.freeze(Object.defineProperty({__proto__:null,default:it},Symbol.toStringTag,{value:"Module"})),he="Affine Surface Explorer",fe="WASD + mouse camera controls for exploring affine surfaces with teleporting walls",me="fullscreen",ge=!0,pe={},st={title:he,description:fe,layout:me,controls:ge,Image:pe},ct=Object.freeze(Object.defineProperty({__proto__:null,Image:pe,controls:ge,default:st,description:fe,layout:me,title:he},Symbol.toStringTag,{value:"Module"})),lt=`// ============================================
// L-Shape Translation Surface Shader
// ============================================
//
// An 8-vertex "staircase" L-shape that forms a valid translation surface.
// All edge gluings are pure translations (L = Identity matrix).
//
// This demonstrates that the affine surface framework correctly handles
// translation surfaces as a special case where no rotation occurs.
//
// Controls:
//   - WASD: Move forward/back/strafe left/right
//   - Mouse drag: Look around
//
// Uses custom uniforms: iCameraPos (vec3), iCameraYawPitch (vec2)
//

// ============================================
// SECTION 1: Constants
// ============================================

const float MAX_DIST = 100.0;
const float HIT_THRESHOLD = 0.001;
const int MAX_STEPS = 256;
const float EPSILON = 0.02;

// ============================================
// SECTION 2: Polygon Definition
// ============================================
//
// 8-vertex staircase L-shape:
//
//     v7=(0,4)----v6=(2,4)
//         |           |
//         |       v5=(2,2)----v4=(4,2)
//         |                       |
//     v0=(0,2)                    |
//         |                       |
//     v1=(0,0)----v2=(2,0)----v3=(4,0)
//
// Edges (counterclockwise):
//   0: v0→v1  (0,-2)   left side lower, going down
//   1: v1→v2  (2,0)    bottom left, going right
//   2: v2→v3  (2,0)    bottom right, going right
//   3: v3→v4  (0,2)    right side lower, going up
//   4: v4→v5  (-2,0)   middle, going left
//   5: v5→v6  (0,2)    middle, going up
//   6: v6→v7  (-2,0)   top, going left
//   7: v7→v0  (0,-2)   left side upper, going down
//
// For a translation surface, we pair edges with opposite direction vectors:
//   Edge 0 (0,-2) ↔ Edge 3 (0,2)   - vertical pair
//   Edge 7 (0,-2) ↔ Edge 5 (0,2)   - vertical pair
//   Edge 1 (2,0)  ↔ Edge 6 (-2,0)  - horizontal pair
//   Edge 2 (2,0)  ↔ Edge 4 (-2,0)  - horizontal pair
//
// Verification that L = I (identity) for all gluings:
//   For gluing a→b to c→d: L(b-a) = c-d
//   Edge 0→3: L(0,-2) = (0,-2) ✓  (since c-d for edge 3 = v3-v4 = (0,-2))
//   Edge 1→6: L(2,0) = (2,0) ✓
//   Edge 2→4: L(2,0) = (2,0) ✓
//   Edge 7→5: L(0,-2) = (0,-2) ✓
//

#define NUM_VERTICES 8

// Vertices in xz-plane (counterclockwise, interior to the left)
const vec2 polygon[NUM_VERTICES] = vec2[](
    vec2(0.0, 2.0),    // v0: left side, middle height
    vec2(0.0, 0.0),    // v1: bottom-left corner
    vec2(2.0, 0.0),    // v2: bottom, middle
    vec2(4.0, 0.0),    // v3: bottom-right corner
    vec2(4.0, 2.0),    // v4: right side, middle height
    vec2(2.0, 2.0),    // v5: inner corner (notch)
    vec2(2.0, 4.0),    // v6: top-right of upper part
    vec2(0.0, 4.0)     // v7: top-left corner
);

// Edge pairings for translation surface
// Each edge pairs with the edge having opposite direction vector
const int pairings[NUM_VERTICES] = int[](
    3,   // edge 0 (0,-2)  ↔ edge 3 (0,2)
    6,   // edge 1 (2,0)   ↔ edge 6 (-2,0)
    4,   // edge 2 (2,0)   ↔ edge 4 (-2,0)
    0,   // edge 3 (0,2)   ↔ edge 0 (0,-2)
    2,   // edge 4 (-2,0)  ↔ edge 2 (2,0)
    7,   // edge 5 (0,2)   ↔ edge 7 (0,-2)
    1,   // edge 6 (-2,0)  ↔ edge 1 (2,0)
    5    // edge 7 (0,-2)  ↔ edge 5 (0,2)
);

// Helper to check if edge is solid
bool isSolidWall(int edgeId) {
    return pairings[edgeId] < 0;
}

// ============================================
// SECTION 3: Polygon Geometry
// ============================================

// Get vertex i (with wraparound)
vec2 getVertex(int i) {
    return polygon[i % NUM_VERTICES];
}

// Get start and end of edge i
void getEdge(int i, out vec2 A, out vec2 B) {
    A = getVertex(i);
    B = getVertex(i + 1);
}

// Inward-pointing normal for edge i (perpendicular, pointing left of edge direction)
vec2 getEdgeNormal(int i) {
    vec2 A, B;
    getEdge(i, A, B);
    vec2 edge = B - A;
    // Rotate 90 deg counterclockwise: (x, y) -> (-y, x)
    return normalize(vec2(-edge.y, edge.x));
}

// Parameter t in [0,1] of point P along edge A->B
float edgeParameter(vec2 P, vec2 A, vec2 B) {
    vec2 edge = B - A;
    return dot(P - A, edge) / dot(edge, edge);
}

// Point at parameter t along edge A->B
vec2 pointOnEdge(float t, vec2 A, vec2 B) {
    return A + t * (B - A);
}

// ============================================
// SECTION 4: Ray-Edge Intersection (Analytical)
// ============================================

// 2D ray-segment intersection
float rayEdge2D(vec2 ro, vec2 rd, vec2 A, vec2 B) {
    vec2 v = B - A;
    vec2 w = ro - A;

    float denom = rd.x * v.y - rd.y * v.x;
    if (abs(denom) < 1e-8) return -1.0;

    float t = (v.x * w.y - v.y * w.x) / denom;
    float s = (rd.x * w.y - rd.y * w.x) / denom;

    if (t > EPSILON && s >= 0.0 && s <= 1.0) {
        return t;
    }
    return -1.0;
}

// Result of wall intersection
struct WallHit {
    float t;
    int edgeId;
    vec2 point2D;
    vec3 point3D;
    vec3 normal;
};

// Find nearest wall intersection
WallHit findNearestWall(vec3 ro, vec3 rd) {
    WallHit result;
    result.t = MAX_DIST;
    result.edgeId = -1;

    vec2 ro2D = ro.xz;
    vec2 rd2D = rd.xz;

    for (int i = 0; i < NUM_VERTICES; i++) {
        vec2 A, B;
        getEdge(i, A, B);

        float t = rayEdge2D(ro2D, rd2D, A, B);
        if (t > 0.0 && t < result.t) {
            result.t = t;
            result.edgeId = i;
            result.point2D = ro2D + t * rd2D;
            result.point3D = ro + t * rd;

            vec2 n2D = getEdgeNormal(i);
            result.normal = vec3(n2D.x, 0.0, n2D.y);
        }
    }

    return result;
}

// ============================================
// SECTION 5: Teleportation (Affine Gluing)
// ============================================
//
// For this translation surface, all gluings have L = I (identity).
// The rotation angle θ = 0 for all edges, so ray directions are unchanged.
//

// Compute the linear part (2x2 matrix) of the affine gluing map
mat2 computeGluingMatrix(int sourceEdge) {
    vec2 A, B;
    getEdge(sourceEdge, A, B);
    vec2 srcVec = B - A;

    int targetEdge = pairings[sourceEdge];
    vec2 C, D;
    getEdge(targetEdge, C, D);
    vec2 tgtVec = C - D;

    float srcAngle = atan(srcVec.y, srcVec.x);
    float tgtAngle = atan(tgtVec.y, tgtVec.x);
    float theta = tgtAngle - srcAngle;

    float srcLen = length(srcVec);
    float tgtLen = length(tgtVec);
    float scale = tgtLen / srcLen;

    float c = cos(theta) * scale;
    float s = sin(theta) * scale;

    return mat2(c, s, -s, c);
}

// Teleport from edge i to its paired edge
vec3 teleport(vec3 p, int edgeId) {
    vec2 A, B;
    getEdge(edgeId, A, B);

    float t = edgeParameter(p.xz, A, B);

    int pairedEdge = pairings[edgeId];
    vec2 C, D;
    getEdge(pairedEdge, C, D);

    vec2 newPos2D = pointOnEdge(1.0 - t, C, D);

    vec2 inwardNormal = getEdgeNormal(pairedEdge);
    newPos2D += inwardNormal * EPSILON;

    return vec3(newPos2D.x, p.y, newPos2D.y);
}

// ============================================
// SECTION 6: SDF Primitives
// ============================================

float sdSphere(vec3 p, vec3 center, float radius) {
    return length(p - center) - radius;
}

float sdBox(vec3 p, vec3 center, vec3 size) {
    vec3 q = abs(p - center) - size;
    return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0);
}

float sdTorus(vec3 p, vec3 center, vec2 t) {
    vec3 q = p - center;
    vec2 r = vec2(length(q.xz) - t.x, q.y);
    return length(r) - t.y;
}

float sdCylinder(vec3 p, vec3 center, float radius, float height) {
    vec3 q = p - center;
    vec2 d = abs(vec2(length(q.xz), q.y)) - vec2(radius, height);
    return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));
}

// ============================================
// SECTION 7: Scene Definition
// ============================================

// Objects placed to demonstrate the L-shape and teleportation
#define SPHERE_POS vec3(1.0, 0.0, 1.0)
#define SPHERE_RAD 0.4

#define BOX_POS vec3(3.0, -0.2, 1.0)
#define BOX_SIZE vec3(0.3)

#define TORUS_POS vec3(1.0, 0.0, 3.0)
#define TORUS_PARAMS vec2(0.35, 0.1)

#define CYLINDER_POS vec3(3.0, 0.0, 3.0)
#define CYLINDER_RAD 0.25
#define CYLINDER_HEIGHT 0.6

float map(vec3 p) {
    float d = MAX_DIST;

    d = min(d, sdSphere(p, SPHERE_POS, SPHERE_RAD));
    d = min(d, sdBox(p, BOX_POS, BOX_SIZE));
    d = min(d, sdTorus(p, TORUS_POS, TORUS_PARAMS));
    d = min(d, sdCylinder(p, CYLINDER_POS, CYLINDER_RAD, CYLINDER_HEIGHT));

    return d;
}

vec3 calcNormal(vec3 p) {
    const float h = 0.0001;
    const vec2 k = vec2(1.0, -1.0);
    return normalize(
        k.xyy * map(p + k.xyy * h) +
        k.yyx * map(p + k.yyx * h) +
        k.yxy * map(p + k.yxy * h) +
        k.xxx * map(p + k.xxx * h)
    );
}

// ============================================
// SECTION 8: Hybrid Raymarcher
// ============================================

struct HitInfo {
    bool hit;
    vec3 position;
    vec3 normal;
    float distance;
    int materialId;
    int teleportCount;
};

float raymarchSDF(vec3 ro, vec3 rd, float maxT, out vec3 hitPos) {
    float t = 0.0;

    for (int i = 0; i < MAX_STEPS; i++) {
        vec3 p = ro + rd * t;
        float d = map(p);

        if (d < HIT_THRESHOLD) {
            hitPos = p;
            return t;
        }

        t += d;
        if (t >= maxT) break;
    }

    return maxT + 1.0;
}

HitInfo trace(vec3 ro, vec3 rd) {
    HitInfo result;
    result.hit = false;
    result.teleportCount = 0;
    result.materialId = 0;

    vec3 currentRo = ro;
    vec3 currentRd = rd;
    float totalDist = 0.0;

    for (int iter = 0; iter < 64; iter++) {
        WallHit wallHit = findNearestWall(currentRo, currentRd);

        if (wallHit.edgeId < 0) {
            break;
        }

        float remainingDist = MAX_DIST - totalDist;
        float marchLimit = min(wallHit.t, remainingDist);

        vec3 sdfHitPos;
        float sdfT = raymarchSDF(currentRo, currentRd, marchLimit, sdfHitPos);

        if (sdfT < marchLimit) {
            result.hit = true;
            result.position = sdfHitPos;
            result.normal = calcNormal(sdfHitPos);
            result.distance = totalDist + sdfT;
            result.materialId = 1;
            return result;
        }

        totalDist += marchLimit;

        if (totalDist >= MAX_DIST) {
            break;
        }

        if (isSolidWall(wallHit.edgeId)) {
            result.hit = true;
            result.position = wallHit.point3D;
            result.normal = wallHit.normal;
            result.distance = totalDist;
            result.materialId = 2;
            return result;
        }

        // Teleport position
        currentRo = teleport(wallHit.point3D, wallHit.edgeId);

        // Transform ray direction by the linear part of the affine map
        // For this translation surface, L = I, so theta = 0 and direction is unchanged
        // But we compute it anyway to demonstrate the general case works
        mat2 L = computeGluingMatrix(wallHit.edgeId);
        vec2 newRd_xz = L * currentRd.xz;
        currentRd = normalize(vec3(newRd_xz.x, currentRd.y, newRd_xz.y));

        result.teleportCount++;
    }

    return result;
}

// ============================================
// SECTION 9: Shading
// ============================================

vec3 getObjectColor(vec3 p) {
    float d1 = sdSphere(p, SPHERE_POS, SPHERE_RAD);
    float d2 = sdBox(p, BOX_POS, BOX_SIZE);
    float d3 = sdTorus(p, TORUS_POS, TORUS_PARAMS);
    float d4 = sdCylinder(p, CYLINDER_POS, CYLINDER_RAD, CYLINDER_HEIGHT);

    if (d1 < 0.01) return vec3(0.9, 0.3, 0.2);    // red sphere
    if (d2 < 0.01) return vec3(0.2, 0.7, 0.3);    // green box
    if (d3 < 0.01) return vec3(0.9, 0.7, 0.1);    // yellow torus
    if (d4 < 0.01) return vec3(0.3, 0.5, 0.9);    // blue cylinder

    return vec3(0.7);
}

vec3 shade(HitInfo hit, vec3 rd) {
    if (!hit.hit) {
        float t = 0.5 * (rd.y + 1.0);
        return mix(vec3(0.05, 0.07, 0.1), vec3(0.15, 0.18, 0.25), t);
    }

    vec3 lightDir = normalize(vec3(1.0, 1.0, -0.5));
    vec3 lightDir2 = normalize(vec3(-0.5, 0.5, 1.0));

    float diff = max(dot(hit.normal, lightDir), 0.0);
    float diff2 = max(dot(hit.normal, lightDir2), 0.0) * 0.3;
    float amb = 0.15;

    vec3 baseColor;

    if (hit.materialId == 2) {
        vec2 wallUV = hit.position.xy * 0.5 + hit.position.zx * 0.5;
        float checker = mod(floor(wallUV.x) + floor(wallUV.y), 2.0);
        baseColor = mix(vec3(0.12, 0.14, 0.18), vec3(0.25, 0.28, 0.32), checker);
    } else {
        baseColor = getObjectColor(hit.position);
    }

    float distTint = hit.distance / MAX_DIST;
    baseColor = mix(baseColor, baseColor * vec3(0.7, 0.8, 1.0), distTint * 0.3);

    float fresnel = pow(1.0 - max(dot(hit.normal, -rd), 0.0), 3.0);

    vec3 col = baseColor * (amb + diff * 0.7 + diff2);
    col += fresnel * 0.1;

    float fog = 1.0 - exp(-hit.distance * 0.01);
    col = mix(col, vec3(0.15, 0.18, 0.22), fog);

    return col;
}

// ============================================
// SECTION 10: Camera (WASD + Mouse)
// ============================================

mat3 setCamera(vec3 ro, vec3 ta, float roll) {
    vec3 cw = normalize(ta - ro);
    vec3 cp = vec3(sin(roll), cos(roll), 0.0);
    vec3 cu = normalize(cross(cp, cw));
    vec3 cv = cross(cw, cu);
    return mat3(cu, cv, cw);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = (2.0 * fragCoord - iResolution.xy) / iResolution.y;

    vec3 camPos = iCameraPos;
    float yaw = iCameraYawPitch.x;
    float pitch = iCameraYawPitch.y;

    vec3 viewDir = vec3(
        sin(yaw) * cos(pitch),
        sin(pitch),
        cos(yaw) * cos(pitch)
    );

    vec3 ro = camPos;
    vec3 ta = ro + viewDir;

    mat3 cam = setCamera(ro, ta, 0.0);
    vec3 rd = cam * normalize(vec3(uv, 1.5));

    HitInfo hit = trace(ro, rd);
    vec3 col = shade(hit, rd);

    col = pow(col, vec3(0.4545));

    fragColor = vec4(col, 1.0);
}
`,dt=Object.freeze(Object.defineProperty({__proto__:null,default:lt},Symbol.toStringTag,{value:"Module"})),ve="L-Shape Translation Surface",Ee="An 8-vertex staircase L-shape that forms a valid translation surface. All edge gluings are pure translations (L = Identity).",ye="fullscreen",Te=!0,xe={vertices:[[0,2],[0,0],[2,0],[4,0],[4,2],[2,2],[2,4],[0,4]],pairings:[3,6,4,0,2,7,1,5],epsilon:.02},Se={},ut={title:ve,description:Ee,layout:ye,controls:Te,surface:xe,Image:Se},ht=Object.freeze(Object.defineProperty({__proto__:null,Image:Se,controls:Te,default:ut,description:Ee,layout:ye,surface:xe,title:ve},Symbol.toStringTag,{value:"Module"})),ft=`// ============================================
// Floor Plan Editor
// ============================================
//
// Interactive floor plan editor with draggable vertices.
// Polygon vertices are passed via uniforms from JavaScript.
//

// ============================================
// SECTION 1: Constants
// ============================================

const float MAX_DIST = 100.0;
const float HIT_THRESHOLD = 0.001;
const int MAX_STEPS = 256;
const float EPSILON = 0.02;

// Maximum vertices supported (GLSL requires fixed array sizes)
#define MAX_VERTICES 16

// ============================================
// SECTION 2: Polygon Definition (Via Uniforms)
// ============================================

// Polygon vertices passed from JavaScript
uniform vec2 iPolygonVertices[MAX_VERTICES];
uniform int iNumVertices;

// Pairings: for now, use simple opposite-edge pairing
// pairings[i] = (i + numVertices/2) % numVertices
// This creates a torus-like topology for even-sided polygons
int getPairing(int edgeId) {
    int n = iNumVertices;
    if (n <= 0) return -1;
    // Opposite edge pairing: edge i pairs with edge (i + n/2) % n
    return (edgeId + n / 2) % n;
}

bool isSolidWall(int edgeId) {
    return getPairing(edgeId) < 0;
}

// ============================================
// SECTION 3: Polygon Geometry
// ============================================

vec2 getVertex(int i) {
    int n = iNumVertices;
    if (n <= 0) return vec2(0.0);
    int idx = i % n;
    if (idx < 0) idx += n;
    return iPolygonVertices[idx];
}

void getEdge(int i, out vec2 A, out vec2 B) {
    A = getVertex(i);
    B = getVertex(i + 1);
}

vec2 getEdgeNormal(int i) {
    vec2 A, B;
    getEdge(i, A, B);
    vec2 edge = B - A;
    return normalize(vec2(-edge.y, edge.x));
}

float edgeParameter(vec2 P, vec2 A, vec2 B) {
    vec2 edge = B - A;
    return dot(P - A, edge) / dot(edge, edge);
}

vec2 pointOnEdge(float t, vec2 A, vec2 B) {
    return A + t * (B - A);
}

// ============================================
// SECTION 4: Ray-Edge Intersection
// ============================================

float rayEdge2D(vec2 ro, vec2 rd, vec2 A, vec2 B) {
    vec2 v = B - A;
    vec2 w = ro - A;

    float denom = rd.x * v.y - rd.y * v.x;
    if (abs(denom) < 1e-8) return -1.0;

    float t = (v.x * w.y - v.y * w.x) / denom;
    float s = (rd.x * w.y - rd.y * w.x) / denom;

    if (t > EPSILON && s >= 0.0 && s <= 1.0) {
        return t;
    }
    return -1.0;
}

struct WallHit {
    float t;
    int edgeId;
    vec2 point2D;
    vec3 point3D;
    vec3 normal;
};

WallHit findNearestWall(vec3 ro, vec3 rd) {
    WallHit result;
    result.t = MAX_DIST;
    result.edgeId = -1;

    vec2 ro2D = ro.xz;
    vec2 rd2D = rd.xz;

    int n = iNumVertices;
    for (int i = 0; i < MAX_VERTICES; i++) {
        if (i >= n) break;

        vec2 A, B;
        getEdge(i, A, B);

        float t = rayEdge2D(ro2D, rd2D, A, B);
        if (t > 0.0 && t < result.t) {
            result.t = t;
            result.edgeId = i;
            result.point2D = ro2D + t * rd2D;
            result.point3D = ro + t * rd;

            vec2 n2D = getEdgeNormal(i);
            result.normal = vec3(n2D.x, 0.0, n2D.y);
        }
    }

    return result;
}

// ============================================
// SECTION 5: Teleportation
// ============================================

mat2 computeGluingMatrix(int sourceEdge) {
    vec2 A, B;
    getEdge(sourceEdge, A, B);
    vec2 srcVec = B - A;

    int targetEdge = getPairing(sourceEdge);
    vec2 C, D;
    getEdge(targetEdge, C, D);
    vec2 tgtVec = C - D;

    float srcAngle = atan(srcVec.y, srcVec.x);
    float tgtAngle = atan(tgtVec.y, tgtVec.x);
    float theta = tgtAngle - srcAngle;

    float srcLen = length(srcVec);
    float tgtLen = length(tgtVec);
    float scale = tgtLen / srcLen;

    float c = cos(theta) * scale;
    float s = sin(theta) * scale;

    return mat2(c, s, -s, c);
}

vec3 teleport(vec3 p, int edgeId) {
    vec2 A, B;
    getEdge(edgeId, A, B);

    float t = edgeParameter(p.xz, A, B);

    int pairedEdge = getPairing(edgeId);
    vec2 C, D;
    getEdge(pairedEdge, C, D);

    vec2 newPos2D = pointOnEdge(1.0 - t, C, D);

    vec2 inwardNormal = getEdgeNormal(pairedEdge);
    newPos2D += inwardNormal * EPSILON;

    return vec3(newPos2D.x, p.y, newPos2D.y);
}

// ============================================
// SECTION 6: SDF Primitives
// ============================================

float sdSphere(vec3 p, vec3 center, float radius) {
    return length(p - center) - radius;
}

// ============================================
// SECTION 7: Scene Definition
// ============================================

float map(vec3 p) {
    return sdSphere(p, vec3(0.0), 0.8);
}

vec3 calcNormal(vec3 p) {
    const float h = 0.0001;
    const vec2 k = vec2(1.0, -1.0);
    return normalize(
        k.xyy * map(p + k.xyy * h) +
        k.yyx * map(p + k.yyx * h) +
        k.yxy * map(p + k.yxy * h) +
        k.xxx * map(p + k.xxx * h)
    );
}

// ============================================
// SECTION 8: Hybrid Raymarcher
// ============================================

struct HitInfo {
    bool hit;
    vec3 position;
    vec3 normal;
    float distance;
    int materialId;
    int teleportCount;
};

float raymarchSDF(vec3 ro, vec3 rd, float maxT, out vec3 hitPos) {
    float t = 0.0;

    for (int i = 0; i < MAX_STEPS; i++) {
        vec3 p = ro + rd * t;
        float d = map(p);

        if (d < HIT_THRESHOLD) {
            hitPos = p;
            return t;
        }

        t += d;
        if (t >= maxT) break;
    }

    return maxT + 1.0;
}

HitInfo trace(vec3 ro, vec3 rd) {
    HitInfo result;
    result.hit = false;
    result.teleportCount = 0;
    result.materialId = 0;

    vec3 currentRo = ro;
    vec3 currentRd = rd;
    float totalDist = 0.0;

    for (int iter = 0; iter < 64; iter++) {
        WallHit wallHit = findNearestWall(currentRo, currentRd);

        if (wallHit.edgeId < 0) break;

        float remainingDist = MAX_DIST - totalDist;
        float marchLimit = min(wallHit.t, remainingDist);

        vec3 sdfHitPos;
        float sdfT = raymarchSDF(currentRo, currentRd, marchLimit, sdfHitPos);

        if (sdfT < marchLimit) {
            result.hit = true;
            result.position = sdfHitPos;
            result.normal = calcNormal(sdfHitPos);
            result.distance = totalDist + sdfT;
            result.materialId = 1;
            return result;
        }

        totalDist += marchLimit;

        if (totalDist >= MAX_DIST) break;

        if (isSolidWall(wallHit.edgeId)) {
            result.hit = true;
            result.position = wallHit.point3D;
            result.normal = wallHit.normal;
            result.distance = totalDist;
            result.materialId = 2;
            return result;
        }

        currentRo = teleport(wallHit.point3D, wallHit.edgeId);

        mat2 L = computeGluingMatrix(wallHit.edgeId);
        vec2 newRd_xz = L * currentRd.xz;
        currentRd = normalize(vec3(newRd_xz.x, currentRd.y, newRd_xz.y));

        result.teleportCount++;
    }

    return result;
}

// ============================================
// SECTION 9: Shading
// ============================================

vec3 shade(HitInfo hit, vec3 rd) {
    if (!hit.hit) {
        float t = 0.5 * (rd.y + 1.0);
        return mix(vec3(0.08, 0.08, 0.12), vec3(0.2, 0.2, 0.3), t);
    }

    vec3 lightDir = normalize(vec3(1.0, 1.0, -0.5));
    float diff = max(dot(hit.normal, lightDir), 0.0);
    float amb = 0.15;

    vec3 baseColor;

    if (hit.materialId == 2) {
        vec2 wallUV = hit.position.xy * 0.5 + hit.position.zx * 0.5;
        float checker = mod(floor(wallUV.x) + floor(wallUV.y), 2.0);
        baseColor = mix(vec3(0.15, 0.15, 0.2), vec3(0.3, 0.3, 0.35), checker);
    } else {
        baseColor = vec3(0.9, 0.25, 0.2);
    }

    vec3 col = baseColor * (amb + diff * 0.7);

    float fog = 1.0 - exp(-hit.distance * 0.008);
    col = mix(col, vec3(0.2, 0.2, 0.25), fog);

    return col;
}

// ============================================
// SECTION 10: Camera
// ============================================

mat3 setCamera(vec3 ro, vec3 ta, float roll) {
    vec3 cw = normalize(ta - ro);
    vec3 cp = vec3(sin(roll), cos(roll), 0.0);
    vec3 cu = normalize(cross(cp, cw));
    vec3 cv = cross(cw, cu);
    return mat3(cu, cv, cw);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = (2.0 * fragCoord - iResolution.xy) / iResolution.y;

    vec3 camPos = iCameraPos;
    float yaw = iCameraYawPitch.x;
    float pitch = iCameraYawPitch.y;

    vec3 viewDir = vec3(
        sin(yaw) * cos(pitch),
        sin(pitch),
        cos(yaw) * cos(pitch)
    );

    vec3 ro = camPos;
    vec3 ta = ro + viewDir;

    mat3 cam = setCamera(ro, ta, 0.0);
    vec3 rd = cam * normalize(vec3(uv, 1.5));
    rd.y *= 1.0/iWorldScale;
    rd = normalize(rd);

    HitInfo hit = trace(ro, rd);
    vec3 col = shade(hit, rd);

    col = pow(col, vec3(0.4545));

    fragColor = vec4(col, 1.0);
}
`,mt=Object.freeze(Object.defineProperty({__proto__:null,default:ft},Symbol.toStringTag,{value:"Module"})),Ce="Floor Plan Editor",we="Interactive floor plan editor with draggable vertices",Re="fullscreen",_e=!0,Pe={vertices:[[-4,-3],[4,-3],[2,3],[-2,3]],pairings:[2,3,0,1]},De={},gt={title:Ce,description:we,layout:Re,controls:_e,surface:Pe,Image:De},pt=Object.freeze(Object.defineProperty({__proto__:null,Image:De,controls:_e,default:gt,description:we,layout:Re,surface:Pe,title:Ce},Symbol.toStringTag,{value:"Module"}));
