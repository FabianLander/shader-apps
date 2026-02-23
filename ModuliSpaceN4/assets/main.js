(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('*{margin:0;padding:0;box-sizing:border-box}html,body{width:100%;height:100%;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}body{background:var(--bg-primary);color:var(--text-primary);transition:background-color .2s ease,color .2s ease}#app{width:100%;height:100%}canvas{display:block}:root,[data-theme=light]{--bg-primary: #f5f5f5;--bg-secondary: #ffffff;--bg-tertiary: #f8f8f8;--bg-canvas: #000000;--text-primary: #000000;--text-secondary: #333333;--text-muted: #666666;--text-disabled: #999999;--border-primary: #e0e0e0;--border-secondary: #cccccc;--accent-primary: #4a9eff;--accent-primary-hover: #3a8eef;--accent-primary-active: #2a7edf;--accent-secondary: #7c4dff;--error-bg: #fff0f0;--error-text: #cc0000;--error-border: #ffcccc;--success-bg: #e8f5e9;--success-text: #4caf50;--success-border: #4caf50;--overlay-bg: rgba(0, 0, 0, .75);--overlay-backdrop: rgba(0, 0, 0, .95);--shadow-sm: 0 2px 8px rgba(0, 0, 0, .1);--shadow-md: 0 10px 30px rgba(0, 0, 0, .2);--shadow-lg: 0 20px 60px rgba(0, 0, 0, .25);--code-bg: #ffffff;--code-text: #000000;--code-line-number: #999999;--code-line-border: #e0e0e0;--code-selection: rgba(173, 214, 255, .4);--syntax-comment: #6a9955;--syntax-keyword: #0000ff;--syntax-string: #a31515;--syntax-number: #098658;--syntax-operator: #000000;--syntax-function: #795e26;--syntax-class: #267f99;--syntax-punctuation: #000000;--tab-bg: #f8f8f8;--tab-text: #666666;--tab-text-hover: #333333;--tab-text-active: #000000;--tab-border-active: #4a9eff;--button-bg: transparent;--button-border: #cccccc;--button-text: #666666;--button-bg-hover: #f0f0f0;--button-border-hover: #999999;--button-text-hover: #333333;--recompile-bg: #e8e8e8;--recompile-text: #333333;--recompile-bg-hover: #d8d8d8;--recompile-bg-active: #c8c8c8;--image-viewer-bg: #f5f5f5;--pane-radius: 8px;--pane-shadow: var(--shadow-lg), var(--shadow-sm)}[data-theme=dark]{--bg-primary: #1a1a1a;--bg-secondary: #252525;--bg-tertiary: #2a2a2a;--bg-canvas: #000000;--text-primary: #ffffff;--text-secondary: #e0e0e0;--text-muted: #a0a0a0;--text-disabled: #666666;--border-primary: #3a3a3a;--border-secondary: #4a4a4a;--accent-primary: #4a9eff;--accent-primary-hover: #5aadff;--accent-primary-active: #3a8eef;--accent-secondary: #9c7cff;--error-bg: #3a1a1a;--error-text: #ff6b6b;--error-border: #5a2a2a;--success-bg: #1a3a1a;--success-text: #6bcf6b;--success-border: #2a5a2a;--overlay-bg: rgba(0, 0, 0, .85);--overlay-backdrop: rgba(0, 0, 0, .98);--shadow-sm: 0 2px 8px rgba(0, 0, 0, .3);--shadow-md: 0 10px 30px rgba(0, 0, 0, .4);--shadow-lg: 0 20px 60px rgba(0, 0, 0, .5);--code-bg: #1e1e1e;--code-text: #d4d4d4;--code-line-number: #858585;--code-line-border: #3a3a3a;--code-selection: rgba(38, 79, 120, .6);--syntax-comment: #6a9955;--syntax-keyword: #569cd6;--syntax-string: #ce9178;--syntax-number: #b5cea8;--syntax-operator: #d4d4d4;--syntax-function: #dcdcaa;--syntax-class: #4ec9b0;--syntax-punctuation: #d4d4d4;--tab-bg: #2a2a2a;--tab-text: #a0a0a0;--tab-text-hover: #d0d0d0;--tab-text-active: #ffffff;--tab-border-active: #4a9eff;--button-bg: transparent;--button-border: #4a4a4a;--button-text: #a0a0a0;--button-bg-hover: #3a3a3a;--button-border-hover: #5a5a5a;--button-text-hover: #e0e0e0;--recompile-bg: #3a3a3a;--recompile-text: #e0e0e0;--recompile-bg-hover: #4a4a4a;--recompile-bg-active: #5a5a5a;--image-viewer-bg: #2a2a2a;--pane-radius: 8px;--pane-shadow: var(--shadow-lg), var(--shadow-sm)}[data-theme=system]{--bg-primary: #f5f5f5;--bg-secondary: #ffffff;--bg-tertiary: #f8f8f8;--bg-canvas: #000000;--text-primary: #000000;--text-secondary: #333333;--text-muted: #666666;--text-disabled: #999999;--border-primary: #e0e0e0;--border-secondary: #cccccc;--accent-primary: #4a9eff;--accent-primary-hover: #3a8eef;--accent-primary-active: #2a7edf;--accent-secondary: #7c4dff;--error-bg: #fff0f0;--error-text: #cc0000;--error-border: #ffcccc;--success-bg: #e8f5e9;--success-text: #4caf50;--success-border: #4caf50;--overlay-bg: rgba(0, 0, 0, .75);--overlay-backdrop: rgba(0, 0, 0, .95);--shadow-sm: 0 2px 8px rgba(0, 0, 0, .1);--shadow-md: 0 10px 30px rgba(0, 0, 0, .2);--shadow-lg: 0 20px 60px rgba(0, 0, 0, .25);--code-bg: #ffffff;--code-text: #000000;--code-line-number: #999999;--code-line-border: #e0e0e0;--code-selection: rgba(173, 214, 255, .4);--syntax-comment: #6a9955;--syntax-keyword: #0000ff;--syntax-string: #a31515;--syntax-number: #098658;--syntax-operator: #000000;--syntax-function: #795e26;--syntax-class: #267f99;--syntax-punctuation: #000000;--tab-bg: #f8f8f8;--tab-text: #666666;--tab-text-hover: #333333;--tab-text-active: #000000;--tab-border-active: #4a9eff;--button-bg: transparent;--button-border: #cccccc;--button-text: #666666;--button-bg-hover: #f0f0f0;--button-border-hover: #999999;--button-text-hover: #333333;--recompile-bg: #e8e8e8;--recompile-text: #333333;--recompile-bg-hover: #d8d8d8;--recompile-bg-active: #c8c8c8;--image-viewer-bg: #f5f5f5;--pane-radius: 8px;--pane-shadow: var(--shadow-lg), var(--shadow-sm)}@media (prefers-color-scheme: dark){[data-theme=system]{--bg-primary: #1a1a1a;--bg-secondary: #252525;--bg-tertiary: #2a2a2a;--bg-canvas: #000000;--text-primary: #ffffff;--text-secondary: #e0e0e0;--text-muted: #a0a0a0;--text-disabled: #666666;--border-primary: #3a3a3a;--border-secondary: #4a4a4a;--accent-primary: #4a9eff;--accent-primary-hover: #5aadff;--accent-primary-active: #3a8eef;--accent-secondary: #9c7cff;--error-bg: #3a1a1a;--error-text: #ff6b6b;--error-border: #5a2a2a;--success-bg: #1a3a1a;--success-text: #6bcf6b;--success-border: #2a5a2a;--overlay-bg: rgba(0, 0, 0, .85);--overlay-backdrop: rgba(0, 0, 0, .98);--shadow-sm: 0 2px 8px rgba(0, 0, 0, .3);--shadow-md: 0 10px 30px rgba(0, 0, 0, .4);--shadow-lg: 0 20px 60px rgba(0, 0, 0, .5);--code-bg: #1e1e1e;--code-text: #d4d4d4;--code-line-number: #858585;--code-line-border: #3a3a3a;--code-selection: rgba(38, 79, 120, .6);--syntax-comment: #6a9955;--syntax-keyword: #569cd6;--syntax-string: #ce9178;--syntax-number: #b5cea8;--syntax-operator: #d4d4d4;--syntax-function: #dcdcaa;--syntax-class: #4ec9b0;--syntax-punctuation: #d4d4d4;--tab-bg: #2a2a2a;--tab-text: #a0a0a0;--tab-text-hover: #d0d0d0;--tab-text-active: #ffffff;--tab-border-active: #4a9eff;--button-bg: transparent;--button-border: #4a4a4a;--button-text: #a0a0a0;--button-bg-hover: #3a3a3a;--button-border-hover: #5a5a5a;--button-text-hover: #e0e0e0;--recompile-bg: #3a3a3a;--recompile-text: #e0e0e0;--recompile-bg-hover: #4a4a4a;--recompile-bg-active: #5a5a5a;--image-viewer-bg: #2a2a2a;--pane-radius: 8px;--pane-shadow: var(--shadow-lg), var(--shadow-sm)}}.unstyled{--pane-radius: 0 !important;--pane-shadow: none !important}:root{--glass-bg: rgba(30, 30, 35, .65);--glass-bg-hover: rgba(30, 30, 35, .8);--glass-border: 1px solid rgba(255, 255, 255, .1);--glass-shadow: 0 4px 16px rgba(0, 0, 0, .25), 0 2px 4px rgba(0, 0, 0, .15), inset 0 1px 0 rgba(255, 255, 255, .1);--glass-shadow-sm: 0 2px 8px rgba(0, 0, 0, .25), inset 0 1px 0 rgba(255, 255, 255, .08);--glass-blur: blur(20px);--glass-radius: 6px;--glass-radius-sm: 6px;--glass-text: rgba(255, 255, 255, .9);--glass-text-muted: rgba(255, 255, 255, .6)}.stats-container{position:absolute;bottom:12px;left:12px;z-index:1000;display:flex;flex-direction:column;align-items:flex-start;gap:6px}.fps-counter{padding:6px 10px;background:var(--glass-bg);color:var(--glass-text);font-family:Monaco,Menlo,Courier New,monospace;font-size:11px;font-weight:500;border-radius:var(--glass-radius-sm);border:var(--glass-border);cursor:pointer;-webkit-user-select:none;user-select:none;backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);box-shadow:var(--glass-shadow-sm);transition:all .2s ease}.fps-counter:hover{background:var(--glass-bg-hover)}.stats-grid{display:flex;flex-direction:row;gap:6px;opacity:0;visibility:hidden;transform:translateY(8px);transition:opacity .2s ease,transform .2s ease,visibility .2s;pointer-events:none}.stats-grid.open{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto}.stat-item{padding:6px 10px;background:var(--glass-bg);border-radius:var(--glass-radius-sm);border:var(--glass-border);backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);box-shadow:var(--glass-shadow-sm);display:flex;flex-direction:column;align-items:center;gap:2px;min-width:48px}.stat-value{color:var(--glass-text);font-family:Monaco,Menlo,Courier New,monospace;font-size:11px;font-weight:600;white-space:nowrap}.stat-label{color:var(--glass-text-muted);font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;font-size:9px;font-weight:500;text-transform:uppercase;letter-spacing:.5px}.playback-controls{position:absolute;bottom:12px;right:12px;z-index:1000}.controls-menu-button{padding:6px 8px;background:var(--glass-bg);color:var(--glass-text);border:var(--glass-border);border-radius:var(--glass-radius-sm);cursor:pointer;backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);box-shadow:var(--glass-shadow-sm);transition:all .2s ease;display:flex;align-items:center;justify-content:center;width:44px;height:44px;font-size:20px;font-weight:300;line-height:1}.controls-menu-button:hover{background:var(--glass-bg-hover);transform:scale(1.05)}.controls-menu-button:active{transform:scale(.95)}.controls-grid{position:absolute;bottom:0;right:0;display:grid;grid-template-columns:44px 44px 44px 44px;grid-template-rows:44px 44px;gap:6px;opacity:0;visibility:hidden;transform:scale(.8);transform-origin:bottom right;transition:opacity .2s ease,transform .2s ease,visibility .2s;pointer-events:none}.controls-grid.open{opacity:1;visibility:visible;transform:scale(1);pointer-events:auto}.control-button{padding:6px 8px;background:var(--glass-bg);color:var(--glass-text);border:var(--glass-border);border-radius:var(--glass-radius-sm);cursor:pointer;backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);box-shadow:var(--glass-shadow-sm);transition:all .2s ease;display:flex;align-items:center;justify-content:center;width:44px;height:44px}.control-button:hover{background:var(--glass-bg-hover);transform:scale(1.05)}.control-button:active{transform:scale(.95)}.control-button svg{width:16px;height:16px;fill:currentColor}.playback-controls .controls-menu-button{position:relative;z-index:1}.playback-controls.open>.controls-menu-button{opacity:0;pointer-events:none}.shader-error-overlay{position:absolute;top:0;left:0;right:0;bottom:0;background:#000000f2;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:2000;padding:60px;overflow-y:auto}.error-overlay-content{background:#1a1a1a;border-radius:6px;max-width:900px;width:100%;display:flex;flex-direction:column;box-shadow:0 20px 60px #000c,0 0 1px #ffffff1a;border:1px solid #2a2a2a;max-height:calc(100vh - 120px)}.error-header{display:flex;align-items:center;justify-content:space-between;padding:18px 24px;background:linear-gradient(135deg,#c62828,#b71c1c);color:#fff;border-radius:6px 6px 0 0;border-bottom:1px solid rgba(0,0,0,.3);box-shadow:0 2px 8px #0003}.error-title{font-size:15px;font-weight:600;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;display:flex;align-items:center;gap:8px;letter-spacing:-.01em}.error-close{background:transparent;border:none;color:#ffffffe6;font-size:24px;line-height:1;cursor:pointer;padding:0;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:4px;transition:all .2s ease;opacity:.8}.error-close:hover{background:#ffffff26;opacity:1;transform:scale(1.05)}.error-body{padding:24px;overflow-y:auto;flex:1}.error-section{margin-bottom:24px}.error-section:last-child{margin-bottom:0}.error-pass-name{font-size:13px;font-weight:600;color:#ffa726;font-family:Monaco,Menlo,Courier New,monospace;margin-bottom:10px;padding-bottom:6px;border-bottom:1px solid #2a2a2a;letter-spacing:.02em}.error-content{margin:0;padding:14px 16px;background:#0f0f0f;border-radius:4px;color:#ff6b6b;font-size:13px;font-family:Monaco,Menlo,Courier New,monospace;line-height:1.6;overflow-x:auto;border:1px solid #2a2a2a;white-space:pre-wrap;word-break:break-word}.error-code-context{margin:12px 0 0;padding:14px 16px;background:#0d0d0d;border-radius:4px;color:#b0b0b0;font-size:12px;font-family:Monaco,Menlo,Courier New,monospace;line-height:1.6;overflow-x:auto;border:1px solid #2a2a2a;white-space:pre}.error-code-context .context-line{color:#666;display:block}.error-code-context .error-line-highlight{color:#fff;background:#c6282840;display:block;font-weight:600;border-left:3px solid #c62828;margin-left:-16px;padding-left:13px}.context-lost-overlay{position:absolute;top:0;left:0;right:0;bottom:0;background:#000000e6;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:3000}.context-lost-content{text-align:center;color:#fff;padding:40px}.context-lost-icon{margin-bottom:16px;opacity:.8}.context-lost-spinner{width:48px;height:48px;border:3px solid rgba(255,255,255,.2);border-top-color:#fff;border-radius:50%;margin:0 auto 16px;animation:context-lost-spin 1s linear infinite}@keyframes context-lost-spin{to{transform:rotate(360deg)}}.context-lost-title{font-size:18px;font-weight:600;margin-bottom:8px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif}.context-lost-message{font-size:14px;opacity:.7;margin-bottom:20px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif}.context-lost-reload{background:#fff;color:#000;border:none;padding:10px 24px;border-radius:6px;font-size:14px;font-weight:500;cursor:pointer;transition:transform .2s,box-shadow .2s;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif}.context-lost-reload:hover{transform:scale(1.02);box-shadow:0 4px 12px #fff3}.context-lost-reload:active{transform:scale(.98)}.recording-indicator{position:absolute;top:12px;right:12px;z-index:1000;display:flex;align-items:center;gap:6px;padding:6px 10px;background:#dc2626d9;border-radius:var(--glass-radius-sm);border:1px solid rgba(255,100,100,.3);backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);box-shadow:var(--glass-shadow-sm)}.recording-dot{width:8px;height:8px;background:#fff;border-radius:50%;animation:recording-pulse 1s ease-in-out infinite}@keyframes recording-pulse{0%,to{opacity:1}50%{opacity:.4}}.recording-text{color:#fff;font-family:Monaco,Menlo,Courier New,monospace;font-size:11px;font-weight:600;letter-spacing:.5px}.control-button.recording{background:#dc2626b3;border-color:#ff64644d}.control-button.recording:hover{background:#dc2626d9}.control-button.recording svg{fill:#fff}.media-permission-banner{position:absolute;bottom:48px;left:50%;transform:translate(-50%);background:var(--glass-bg);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:var(--glass-border);box-shadow:var(--glass-shadow);color:#ffffffe6;padding:8px 16px;border-radius:6px;font-size:13px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;display:flex;align-items:center;gap:12px;z-index:100;white-space:nowrap}.media-banner-button{background:#4a9effcc;color:#fff;border:none;padding:4px 12px;border-radius:4px;cursor:pointer;font-size:13px;font-family:inherit}.media-banner-button:hover{background:#4a9eff}.script-error-overlay{position:absolute;bottom:48px;left:12px;right:12px;z-index:1500;pointer-events:auto}.script-error-content{background:#1a1a1a;border-radius:6px;box-shadow:0 8px 32px #0009,0 0 1px #ffffff1a;border:1px solid #2a2a2a;overflow:hidden}.script-error-header{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:linear-gradient(135deg,#e65100,#bf360c);color:#fff;border-bottom:1px solid rgba(0,0,0,.3)}.script-error-header.disabled{background:linear-gradient(135deg,#6d4c41,#4e342e)}.script-error-header.warning{background:linear-gradient(135deg,#f9a825,#f57f17);color:#1a1a1a}.script-error-header.warning .script-error-close{color:#000000b3}.script-error-header.warning .script-error-close:hover{background:#00000026;color:#000000e6}.script-error-title{font-size:13px;font-weight:600;font-family:Monaco,Menlo,Courier New,monospace;display:flex;align-items:center;gap:6px}.script-error-close{background:transparent;border:none;color:#ffffffe6;font-size:20px;line-height:1;cursor:pointer;padding:0;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:4px;opacity:.8;transition:all .2s ease}.script-error-close:hover{background:#ffffff26;opacity:1}.script-error-message{margin:0;padding:10px 14px;color:#ffab91;font-size:12px;font-family:Monaco,Menlo,Courier New,monospace;line-height:1.5;white-space:pre-wrap;word-break:break-word;max-height:80px;overflow-y:auto}.script-error-stack{margin:0;padding:6px 14px 10px;color:#888;font-size:11px;font-family:Monaco,Menlo,Courier New,monospace;line-height:1.4;white-space:pre-wrap;word-break:break-word;max-height:60px;overflow-y:auto;border-top:1px solid #2a2a2a}.script-overlay{position:absolute;z-index:500;padding:6px 10px;background:var(--glass-bg);color:var(--glass-text);font-family:Monaco,Menlo,Courier New,monospace;font-size:11px;border-radius:var(--glass-radius-sm);border:var(--glass-border);backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);box-shadow:var(--glass-shadow-sm);pointer-events:none;white-space:pre;max-width:calc(100% - 24px);overflow:hidden;text-overflow:ellipsis}.script-overlay.hidden{display:none}.script-overlay.top-left{top:12px;left:12px}.script-overlay.top-right{top:12px;right:12px}.script-overlay.bottom-left{bottom:12px;left:12px}.script-overlay.bottom-right{bottom:12px;right:12px}@media (prefers-reduced-motion: reduce){*,*:before,*:after{transition-duration:.01ms!important;animation-duration:.01ms!important;animation-iteration-count:1!important}}@media (max-width: 428px){.stats-container{bottom:8px;left:8px}.playback-controls{bottom:8px;right:8px}.script-error-overlay{left:8px;right:8px;bottom:40px}.script-overlay.top-left{top:8px;left:8px}.script-overlay.top-right{top:8px;right:8px}.script-overlay.bottom-left{bottom:8px;left:8px}.script-overlay.bottom-right{bottom:8px;right:8px}}.uniforms-panel-wrapper{position:absolute;top:16px;right:16px;z-index:100;display:flex;flex-direction:column;align-items:flex-end}.uniforms-toggle-button{width:44px;height:44px;padding:6px;background:var(--glass-bg);border:var(--glass-border);border-radius:var(--glass-radius-sm);color:var(--glass-text);cursor:pointer;backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);box-shadow:var(--glass-shadow-sm);transition:all .2s ease,opacity .15s ease;display:flex;align-items:center;justify-content:center}.uniforms-toggle-button:hover{background:var(--glass-bg-hover);transform:scale(1.05)}.uniforms-toggle-button:active{transform:scale(.95)}.uniforms-toggle-button svg{width:16px;height:16px}.uniforms-toggle-button.hidden{opacity:0;transform:scale(.8);pointer-events:none;position:absolute}.uniforms-panel{width:175px;max-height:calc(100vh - 100px);background:var(--glass-bg);backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);border-radius:var(--glass-radius);border:var(--glass-border);box-shadow:var(--glass-shadow);overflow:hidden;display:flex;flex-direction:column;transform-origin:top right;transition:opacity .2s ease,transform .2s ease,max-height .2s ease}.uniforms-panel.closed{opacity:0;transform:scale(.25) translate(0);transform-origin:top right;pointer-events:none;max-height:0;padding:0}.uniforms-panel-header{padding:10px 14px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--glass-text-muted);background:#ffffff08;border-bottom:1px solid rgba(255,255,255,.06);flex-shrink:0;display:flex;justify-content:space-between;align-items:center}.uniforms-panel-close{background:transparent;border:none;color:var(--glass-text-muted);font-size:18px;line-height:1;cursor:pointer;padding:0;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:4px;transition:all .15s ease}.uniforms-panel-close:hover{background:#ffffff1a;color:var(--glass-text)}.uniforms-panel-content{flex:1;overflow-y:auto;overflow-x:hidden}.uniforms-panel .uniform-controls{padding:12px;gap:12px;background:transparent}.uniforms-panel .uniform-controls-header{display:none}.uniforms-panel .uniform-controls-list{gap:14px}.uniforms-panel .uniform-control{gap:6px}.uniforms-panel .uniform-control-label{font-size:11px;color:var(--glass-text)}.uniforms-panel .uniform-control-value{font-size:10px;padding:1px 4px;min-width:40px;color:var(--glass-text-muted);background:#0003;border-radius:3px}.uniforms-panel .uniform-control-slider{height:4px;background:#ffffff26}.uniforms-panel .uniform-control-slider::-webkit-slider-runnable-track{height:4px;background:#ffffff26}.uniforms-panel .uniform-control-slider::-webkit-slider-thumb{width:12px;height:12px;margin-top:-4px;background:#ffffffe6;box-shadow:0 1px 4px #0000004d}.uniforms-panel .uniform-control-slider::-moz-range-track{height:4px;background:#ffffff26}.uniforms-panel .uniform-control-slider::-moz-range-thumb{width:12px;height:12px;background:#ffffffe6;box-shadow:0 1px 4px #0000004d}.uniforms-panel .uniform-control-toggle{width:34px;height:18px}.uniforms-panel .uniform-control-toggle-slider{border-radius:18px}.uniforms-panel .uniform-control-toggle-slider:before{width:12px;height:12px;left:3px;bottom:3px}.uniforms-panel .uniform-control-toggle input:checked+.uniform-control-toggle-slider:before{transform:translate(16px)}.uniforms-panel .uniform-control-xy-pad{height:100px}.uniforms-panel .uniform-control-xy-handle{width:12px;height:12px}.uniforms-panel .uniform-control-color-swatch{height:28px}.uniforms-panel .uniform-control-vec-slider-row{gap:6px}.uniforms-panel .uniform-control-vec-component{font-size:9px;width:12px;color:var(--glass-text-muted)}.uniforms-panel .uniform-control-vec-value{font-size:9px;min-width:32px;color:var(--glass-text-muted);background:#0003;border-radius:3px}.uniforms-panel .uniform-control-xy-pad{background:#00000040;border:1px solid rgba(255,255,255,.1)}.uniforms-panel .uniform-control-xy-handle{background:#ffffffe6;box-shadow:0 1px 4px #0006}.uniforms-panel-content::-webkit-scrollbar{width:6px}.uniforms-panel-content::-webkit-scrollbar-track{background:transparent}.uniforms-panel-content::-webkit-scrollbar-thumb{background:#fff3;border-radius:3px}.uniforms-panel-content::-webkit-scrollbar-thumb:hover{background:#ffffff59}.uniform-controls{display:flex;flex-direction:column;gap:16px;padding:16px;height:100%;overflow-y:auto;background:var(--bg-secondary)}.uniform-controls-empty{color:var(--text-muted);font-size:13px;text-align:center;padding:20px}.uniform-controls-header{display:flex;justify-content:flex-end;padding-bottom:8px;border-bottom:1px solid var(--border-primary);margin-bottom:8px}.uniform-controls-reset{font-family:inherit;font-size:11px;padding:4px 10px;background:var(--bg-tertiary);color:var(--text-secondary);border:1px solid var(--border-primary);border-radius:4px;cursor:pointer;transition:background .15s ease,color .15s ease}.uniform-controls-reset:hover{background:var(--border-primary);color:var(--text-primary)}.uniform-controls-reset:active{transform:translateY(1px)}.uniform-controls-list{display:flex;flex-direction:column;gap:16px}.uniform-control{display:flex;flex-direction:column;gap:8px}.uniform-control-label-row{display:flex;justify-content:space-between;align-items:center}.uniform-control-label{font-family:Monaco,Menlo,Courier New,monospace;font-size:12px;font-weight:500;color:var(--text-primary)}.uniform-control-value{font-family:Monaco,Menlo,Courier New,monospace;font-size:11px;color:var(--text-muted);background:var(--bg-tertiary);padding:2px 6px;border-radius:3px;min-width:50px;text-align:right}.uniform-control-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;height:6px;background:var(--border-primary);border-radius:3px;outline:none;cursor:pointer}.uniform-control-slider::-webkit-slider-runnable-track{height:6px;background:var(--border-primary);border-radius:3px}.uniform-control-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:14px;height:14px;background:var(--accent-primary);border-radius:50%;cursor:pointer;margin-top:-4px;transition:transform .15s ease,box-shadow .15s ease}.uniform-control-slider::-webkit-slider-thumb:hover{transform:scale(1.1);box-shadow:0 2px 6px #0003}.uniform-control-slider::-webkit-slider-thumb:active{transform:scale(.95)}.uniform-control-slider::-moz-range-track{height:6px;background:var(--border-primary);border-radius:3px}.uniform-control-slider::-moz-range-thumb{width:14px;height:14px;background:var(--accent-primary);border:none;border-radius:50%;cursor:pointer;transition:transform .15s ease,box-shadow .15s ease}.uniform-control-slider::-moz-range-thumb:hover{transform:scale(1.1);box-shadow:0 2px 6px #0003}.uniform-control-slider::-moz-range-thumb:active{transform:scale(.95)}.uniform-control-slider:focus{outline:none}.uniform-control-slider:focus::-webkit-slider-thumb{box-shadow:0 0 0 3px var(--code-selection)}.uniform-control-slider:focus::-moz-range-thumb{box-shadow:0 0 0 3px var(--code-selection)}.uniform-control-toggle{position:relative;display:inline-block;width:40px;height:22px;cursor:pointer}.uniform-control-toggle input{opacity:0;width:0;height:0}.uniform-control-toggle-slider{position:absolute;top:0;left:0;right:0;bottom:0;background:var(--border-primary);border-radius:22px;transition:background .2s ease}.uniform-control-toggle-slider:before{content:"";position:absolute;width:16px;height:16px;left:3px;bottom:3px;background:var(--text-muted);border-radius:50%;transition:transform .2s ease,background .2s ease}.uniform-control-toggle input:checked+.uniform-control-toggle-slider{background:var(--accent-primary)}.uniform-control-toggle input:checked+.uniform-control-toggle-slider:before{transform:translate(18px);background:#fff}.uniform-control-toggle input:focus+.uniform-control-toggle-slider{box-shadow:0 0 0 2px var(--code-selection)}.uniform-control-xy-pad{position:relative;width:100%;height:120px;background:var(--bg-tertiary);border:1px solid var(--border-primary);border-radius:4px;cursor:crosshair;overflow:hidden}.uniform-control-xy-pad:before,.uniform-control-xy-pad:after{content:"";position:absolute;background:var(--border-primary);opacity:.5}.uniform-control-xy-pad:before{left:50%;top:0;bottom:0;width:1px}.uniform-control-xy-pad:after{top:50%;left:0;right:0;height:1px}.uniform-control-xy-handle{position:absolute;width:14px;height:14px;background:var(--accent-primary);border:2px solid white;border-radius:50%;transform:translate(-50%,-50%);box-shadow:0 2px 4px #0000004d;pointer-events:none;z-index:1}.uniform-control-color-wrapper{display:flex;align-items:center;gap:8px}.uniform-control-color-swatch{width:100%;height:32px;border-radius:4px;border:1px solid var(--border-primary);cursor:pointer;transition:box-shadow .15s ease}.uniform-control-color-swatch:hover{box-shadow:0 0 0 2px var(--accent-primary)}.uniform-control-color-input{position:absolute;width:0;height:0;opacity:0;pointer-events:none}.uniform-control-vec3{gap:6px}.uniform-control-vec-slider-row{display:flex;align-items:center;gap:8px}.uniform-control-vec-component{font-family:Monaco,Menlo,Courier New,monospace;font-size:10px;font-weight:600;color:var(--text-muted);width:14px;text-align:center}.uniform-control-vec-slider{flex:1}.uniform-control-vec-value{min-width:40px;font-size:10px}.render-dialog-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;background:#000000b3;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;z-index:4000}.render-dialog{background:#1a1a1f;border:1px solid rgba(255,255,255,.1);border-radius:10px;box-shadow:0 20px 60px #0009;width:360px;max-width:calc(100% - 32px);overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;color:#e0e0e0}.render-dialog-header{display:flex;align-items:center;justify-content:space-between;padding:14px 18px;background:linear-gradient(135deg,#1565c0,#0d47a1);color:#fff;border-bottom:1px solid rgba(0,0,0,.3)}.render-dialog-title{font-size:14px;font-weight:600;display:flex;align-items:center;gap:8px}.render-dialog-close{background:transparent;border:none;color:#fffc;font-size:20px;line-height:1;cursor:pointer;padding:0;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:4px;transition:all .15s ease}.render-dialog-close:hover{background:#ffffff26;color:#fff}.render-dialog-body{padding:18px;display:flex;flex-direction:column;gap:14px}.render-field{display:flex;flex-direction:column;gap:5px}.render-field-label{font-size:12px;font-weight:500;color:#fff9;text-transform:uppercase;letter-spacing:.5px}.render-field-row{display:flex;gap:8px;align-items:center}.render-field-row span{color:#fff6;font-size:13px}.render-input{flex:1;background:#0f0f14;border:1px solid rgba(255,255,255,.1);border-radius:5px;color:#e0e0e0;font-family:Monaco,Menlo,monospace;font-size:13px;padding:7px 10px;outline:none;transition:border-color .15s}.render-input:focus{border-color:#648cff80}.render-input[type=number]{-moz-appearance:textfield}.render-input[type=number]::-webkit-inner-spin-button,.render-input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.render-format-group{display:flex;gap:8px}.render-format-option{flex:1;position:relative}.render-format-option input[type=radio]{position:absolute;opacity:0;pointer-events:none}.render-format-option label{display:block;text-align:center;padding:8px 12px;background:#0f0f14;border:1px solid rgba(255,255,255,.1);border-radius:5px;font-size:12px;font-weight:500;cursor:pointer;transition:all .15s}.render-format-option input[type=radio]:checked+label{background:#648cff26;border-color:#648cff80;color:#8ab4ff}.render-format-option label:hover{border-color:#fff3}.render-estimate{font-size:11px;color:#fff6;font-family:Monaco,Menlo,monospace;text-align:center;padding:4px 0}.render-dialog-actions{display:flex;gap:8px;padding:0 18px 18px}.render-btn{flex:1;padding:9px 16px;border-radius:6px;font-size:13px;font-weight:500;cursor:pointer;border:none;transition:all .15s;font-family:inherit}.render-btn-primary{background:linear-gradient(135deg,#1565c0,#0d47a1);color:#fff}.render-btn-primary:hover{filter:brightness(1.1)}.render-btn-primary:disabled{opacity:.5;cursor:not-allowed;filter:none}.render-btn-cancel{background:#ffffff14;color:#ffffffb3;border:1px solid rgba(255,255,255,.1)}.render-btn-cancel:hover{background:#ffffff1f}.render-progress{display:none;flex-direction:column;gap:8px;padding:18px}.render-progress.active{display:flex}.render-progress-bar-bg{height:6px;background:#0f0f14;border-radius:3px;overflow:hidden}.render-progress-bar{height:100%;background:linear-gradient(90deg,#1565c0,#42a5f5);border-radius:3px;width:0%;transition:width .1s ease}.render-progress-text{font-size:12px;color:#ffffff80;font-family:Monaco,Menlo,monospace;text-align:center}.multi-view-controls-wrapper{position:absolute;top:16px;right:16px;z-index:100;display:flex;flex-direction:column;align-items:flex-end}.multi-view-controls-toggle{width:44px;height:44px;padding:6px;background:var(--glass-bg);border:var(--glass-border);border-radius:var(--glass-radius-sm);color:var(--glass-text);cursor:pointer;backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);box-shadow:var(--glass-shadow-sm);transition:all .2s ease,opacity .15s ease;display:flex;align-items:center;justify-content:center}.multi-view-controls-toggle:hover{background:var(--glass-bg-hover);transform:scale(1.05)}.multi-view-controls-toggle:active{transform:scale(.95)}.multi-view-controls-toggle svg{width:16px;height:16px}.multi-view-controls-toggle.hidden{opacity:0;transform:scale(.8);pointer-events:none;position:absolute}.multi-view-controls-panel{width:175px;max-height:calc(100vh - 100px);background:var(--glass-bg);backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);border-radius:var(--glass-radius);border:var(--glass-border);box-shadow:var(--glass-shadow);overflow:hidden;display:flex;flex-direction:column;transform-origin:top right;transition:opacity .2s ease,transform .2s ease,max-height .2s ease}.multi-view-controls-panel.closed{opacity:0;transform:scale(.25) translate(0);transform-origin:top right;pointer-events:none;max-height:0;padding:0}.multi-view-controls-header{padding:10px 14px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--glass-text-muted);background:#ffffff08;border-bottom:1px solid rgba(255,255,255,.06);flex-shrink:0;display:flex;justify-content:space-between;align-items:center}.multi-view-controls-close{background:transparent;border:none;color:var(--glass-text-muted);font-size:18px;line-height:1;cursor:pointer;padding:0;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:4px;transition:all .15s ease}.multi-view-controls-close:hover{background:#ffffff1a;color:var(--glass-text)}.controls-section{display:flex;flex-direction:column;gap:8px;padding:12px}.controls-section+.controls-section{padding-top:0}.section-label{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--glass-text-muted);padding-bottom:6px;border-bottom:1px solid rgba(255,255,255,.06);margin-bottom:4px}.playback-controls{flex-direction:row;gap:8px;padding:12px}.control-btn{width:44px;height:44px;border:none;border-radius:var(--glass-radius-sm);background:#ffffff1a;color:var(--glass-text);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .15s ease}.control-btn:hover{background:#fff3}.control-btn:active{transform:scale(.95)}.control-btn svg{width:16px;height:16px}.uniforms-section{border-top:1px solid rgba(255,255,255,.06)}.uniforms-container{display:flex;flex-direction:column;gap:8px}.multi-view-controls-panel .uniform-controls{padding:0;gap:12px;background:transparent}.multi-view-controls-panel .uniform-controls-header{display:none}.multi-view-controls-panel .uniform-controls-list{gap:14px}.multi-view-controls-panel .uniform-control{gap:6px}.multi-view-controls-panel .uniform-control-label{font-size:11px;color:var(--glass-text)}.multi-view-controls-panel .uniform-control-value{font-size:10px;padding:1px 4px;min-width:40px;color:var(--glass-text-muted);background:#0003;border-radius:3px}.multi-view-controls-panel .uniform-control-slider{height:4px;background:#ffffff26}.multi-view-controls-panel .uniform-control-slider::-webkit-slider-runnable-track{height:4px;background:#ffffff26}.multi-view-controls-panel .uniform-control-slider::-webkit-slider-thumb{width:12px;height:12px;margin-top:-4px;background:#ffffffe6;box-shadow:0 1px 4px #0000004d}.multi-view-controls-panel .uniform-control-slider::-moz-range-track{height:4px;background:#ffffff26}.multi-view-controls-panel .uniform-control-slider::-moz-range-thumb{width:12px;height:12px;background:#ffffffe6;box-shadow:0 1px 4px #0000004d}.multi-view-controls-panel .uniform-control-toggle{width:34px;height:18px}.multi-view-controls-panel .uniform-control-toggle-slider{border-radius:18px}.multi-view-controls-panel .uniform-control-toggle-slider:before{width:12px;height:12px;left:3px;bottom:3px}.multi-view-controls-panel .uniform-control-toggle input:checked+.uniform-control-toggle-slider:before{transform:translate(16px)}.layout-fullscreen{width:100%;height:100%}.layout-fullscreen .canvas-container{position:relative;width:100%;height:100%;background:#000}.layout-default{width:100%;height:100%}.layout-default .canvas-container{position:relative;width:100%;height:100%;background:var(--bg-canvas);border-radius:var(--pane-radius);box-shadow:var(--pane-shadow);overflow:hidden}.layout-split{width:100%;height:100%;display:flex;gap:24px}.layout-split .canvas-container{position:relative;flex:1;background:var(--bg-canvas);border-radius:var(--pane-radius);box-shadow:var(--pane-shadow);overflow:hidden}.layout-split .code-panel{position:relative;flex:1;display:flex;flex-direction:column;background:var(--bg-secondary);border-radius:var(--pane-radius);box-shadow:var(--pane-shadow);overflow:hidden}.tab-bar{display:flex;background:var(--tab-bg);border-bottom:1px solid var(--border-primary);padding:8px 8px 0;gap:4px}.tab-button{padding:8px 16px;background:transparent;border:none;border-radius:6px 6px 0 0;font-size:13px;font-family:Monaco,Menlo,Courier New,monospace;cursor:pointer;transition:background .2s,color .2s;color:var(--tab-text)}.tab-button:hover{background:var(--button-bg-hover);color:var(--tab-text-hover)}.tab-button.active{background:var(--bg-secondary);color:var(--tab-text-active);font-weight:500}.copy-button{position:absolute;top:12px;right:12px;padding:6px;background:var(--button-bg);border:none;border-radius:4px;color:var(--button-text);cursor:pointer;transition:all .2s;z-index:10;display:flex;align-items:center;justify-content:center}.copy-button:hover{background:var(--button-bg-hover);color:var(--button-text-hover)}.copy-button:active{transform:scale(.9)}.copy-button.copied{color:var(--success-text)}.code-viewer{flex:1;min-height:0;overflow:auto;position:relative;background:var(--code-bg)}.code-viewer pre{margin:0;padding:16px;font-size:13px;line-height:1.5;font-family:Monaco,Menlo,Courier New,monospace;background:var(--code-bg);color:var(--code-text)}.code-viewer code{font-family:inherit;font-size:inherit}.token.comment{color:var(--syntax-comment)}.token.keyword{color:var(--syntax-keyword)}.token.string{color:var(--syntax-string)}.token.number{color:var(--syntax-number)}.token.operator{color:var(--syntax-operator)}.token.function{color:var(--syntax-function)}.token.class-name{color:var(--syntax-class)}.token.punctuation{color:var(--syntax-punctuation)}.tab-button.image-tab,.tab-button.image-tab.active{color:var(--accent-secondary)}.image-viewer{display:flex;align-items:center;justify-content:center;height:100%;padding:16px;background:var(--image-viewer-bg)}.image-viewer img{max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;box-shadow:var(--shadow-sm)}@media (max-width: 800px){.layout-split{flex-direction:column}}.layout-tabbed{width:100%;height:100%;display:flex;flex-direction:column;box-sizing:border-box}.tabbed-wrapper{display:flex;flex-direction:column;width:100%;height:100%;border-radius:var(--pane-radius);box-shadow:var(--pane-shadow);overflow:hidden}.tabbed-toolbar{display:flex;align-items:center;flex-shrink:0;background:var(--tab-bg);border-bottom:1px solid var(--border-primary);padding-right:8px}.tabbed-tab-bar{display:flex;flex:1;gap:4px;overflow-x:auto;overflow-y:hidden;scrollbar-width:thin}.tabbed-tab-bar::-webkit-scrollbar{height:4px}.tabbed-tab-bar::-webkit-scrollbar-thumb{background:var(--border-secondary);border-radius:2px}.tabbed-tab-button{padding:10px 16px;background:transparent;border:none;border-bottom:2px solid transparent;font-size:12px;font-family:Monaco,Menlo,Courier New,monospace;cursor:pointer;transition:color .15s,border-color .15s;color:var(--tab-text);white-space:nowrap;flex-shrink:0}.tabbed-tab-button:hover{color:var(--tab-text-hover)}.tabbed-tab-button.active{color:var(--tab-text-active);border-bottom-color:var(--tab-border-active)}.tabbed-tab-button.shader-tab{font-family:system-ui,-apple-system,sans-serif}.tabbed-tab-button.image-tab{color:var(--accent-secondary)}.tabbed-tab-button.image-tab.active{color:var(--accent-secondary);border-bottom-color:var(--accent-secondary)}.tabbed-tab-button.uniforms-tab{color:var(--accent-tertiary, var(--accent-primary));padding:8px 12px}.tabbed-tab-button.uniforms-tab.active{color:var(--accent-tertiary, var(--accent-primary));border-bottom-color:var(--accent-tertiary, var(--accent-primary))}.tabbed-tab-button .uniforms-icon{width:18px;height:18px;display:block}.tabbed-content{flex:1;min-height:0;position:relative;background:var(--bg-canvas);overflow:hidden}.tabbed-canvas-container{position:absolute;top:0;left:0;width:100%;height:100%}.tabbed-code-viewer{position:absolute;top:0;left:0;width:100%;height:100%;overflow:auto;background:var(--code-bg)}.tabbed-code-viewer pre{margin:0;padding:16px 16px 16px 0;font-size:13px;line-height:1.6;font-family:Monaco,Menlo,Courier New,monospace;background:var(--code-bg);color:var(--code-text);display:flex}.tabbed-code-viewer code{font-family:inherit;font-size:inherit}.tabbed-line-numbers{text-align:right;padding-right:16px;margin-right:16px;border-right:1px solid var(--code-line-border);color:var(--code-line-number);-webkit-user-select:none;user-select:none;flex-shrink:0;padding-left:16px}.tabbed-code-content{flex:1;overflow-x:auto}.tabbed-image-viewer{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--image-viewer-bg);padding:20px;box-sizing:border-box}.tabbed-image-viewer img{max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;box-shadow:var(--shadow-sm)}.tabbed-code-viewer .token.comment{color:var(--syntax-comment)}.tabbed-code-viewer .token.keyword{color:var(--syntax-keyword)}.tabbed-code-viewer .token.string{color:var(--syntax-string)}.tabbed-code-viewer .token.number{color:var(--syntax-number)}.tabbed-code-viewer .token.operator{color:var(--syntax-operator)}.tabbed-code-viewer .token.function{color:var(--syntax-function)}.tabbed-code-viewer .token.class-name{color:var(--syntax-class)}.tabbed-code-viewer .token.punctuation{color:var(--syntax-punctuation)}@media (max-width: 600px){.tabbed-tab-button{padding:8px 12px;font-size:12px}}.tabbed-editor-container{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;background:var(--code-bg)}.tabbed-button-container{display:flex;align-items:center;gap:6px;flex-shrink:0}.tabbed-copy-button{display:flex;align-items:center;justify-content:center;background:var(--button-bg);border:1px solid var(--button-border);color:var(--button-text);width:44px;height:44px;border-radius:4px;cursor:pointer;transition:background .15s,border-color .15s,color .15s}.tabbed-copy-button:hover{background:var(--button-bg-hover);border-color:var(--button-border-hover);color:var(--button-text-hover)}.tabbed-copy-button:active{background:var(--button-bg-hover)}.tabbed-copy-button.copied{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}.tabbed-recompile-button{display:flex;align-items:center;gap:6px;background:var(--recompile-bg);border:none;color:var(--recompile-text);padding:6px 12px;border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;transition:background .15s,color .15s}.tabbed-recompile-button:hover{background:var(--recompile-bg-hover)}.tabbed-recompile-button:active{background:var(--recompile-bg-active)}.tabbed-recompile-button svg{flex-shrink:0}.tabbed-error-display{position:absolute;bottom:0;left:0;right:0;background:var(--error-bg);color:var(--error-text);padding:10px 14px;font-family:Monaco,Menlo,Courier New,monospace;font-size:12px;white-space:pre-wrap;overflow:auto;max-height:120px;border-top:1px solid var(--error-border);z-index:10}.tabbed-fallback-textarea{width:100%;height:100%;background:var(--code-bg);color:var(--code-text);border:none;padding:12px;font-family:Monaco,Menlo,Courier New,monospace;font-size:13px;resize:none;outline:none}.tabbed-uniforms-container{position:absolute;top:0;left:0;width:100%;height:100%;overflow-y:auto;background:#00000080;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:flex;justify-content:center;padding:20px;box-sizing:border-box}.tabbed-uniforms-container .uniform-controls{max-width:400px;width:100%;background:#1e1e23f2;border-radius:12px;padding:20px;box-shadow:0 4px 20px #0006;height:fit-content}.tabbed-uniforms-container .uniform-control-label{color:#e0e0e0}.tabbed-uniforms-container .uniform-control-value{color:#a0a0a0;background:#0000004d}.tabbed-uniforms-container .uniform-controls-header{color:#909090;border-bottom-color:#ffffff1a}.tabbed-uniforms-container .uniform-control-slider{background:#ffffff1a}.tabbed-uniforms-container .uniform-control-slider::-webkit-slider-thumb{background:#fff}.tabbed-uniforms-container .uniform-control-slider::-moz-range-thumb{background:#fff}.tabbed-uniforms-container .uniform-control-vec-component{color:#909090}.tabbed-uniforms-container .uniform-control-vec-value{color:#a0a0a0;background:#0000004d}.layout-ui{width:100%;height:100%;display:flex;gap:24px}.layout-ui .ui-canvas-container{position:relative;flex:1;background:var(--bg-canvas);border-radius:var(--pane-radius);box-shadow:var(--pane-shadow);overflow:hidden}.layout-ui .ui-panel{width:200px;flex-shrink:0;display:flex;flex-direction:column;background:var(--bg-secondary);border-radius:var(--pane-radius);box-shadow:var(--pane-shadow);overflow:hidden}.layout-ui .ui-uniforms-container{flex:1;min-height:0;overflow-y:auto;overflow-x:hidden;display:flex;flex-direction:column;justify-content:center}.layout-ui .ui-empty-state{text-align:center;color:var(--text-muted);font-size:13px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;padding:20px}.layout-ui .uniform-controls{padding:20px;gap:16px;background:transparent}.layout-ui .uniform-controls-header{display:none}.layout-ui .uniform-controls-list{gap:20px}.layout-ui .uniform-control{gap:8px}.layout-ui .uniform-control-label{font-size:12px;font-weight:500;color:var(--text-primary)}.layout-ui .uniform-control-value{font-size:11px;padding:3px 8px;min-width:44px;color:var(--text-muted);background:var(--bg-tertiary);border-radius:4px}.layout-ui .uniform-control-slider{height:4px;background:var(--border-primary)}.layout-ui .uniform-control-slider::-webkit-slider-runnable-track{height:4px;background:var(--border-primary)}.layout-ui .uniform-control-slider::-webkit-slider-thumb{width:14px;height:14px;margin-top:-5px;background:var(--accent-primary);border:2px solid var(--bg-secondary);box-shadow:var(--shadow-sm)}.layout-ui .uniform-control-slider::-moz-range-track{height:4px;background:var(--border-primary)}.layout-ui .uniform-control-slider::-moz-range-thumb{width:14px;height:14px;background:var(--accent-primary);border:2px solid var(--bg-secondary);box-shadow:var(--shadow-sm)}.layout-ui .uniform-control-xy-pad{height:100px;background:var(--bg-tertiary);border:1px solid var(--border-primary);border-radius:4px}.layout-ui .uniform-control-xy-handle{width:12px;height:12px;background:var(--accent-primary);border:2px solid var(--bg-secondary);box-shadow:var(--shadow-sm)}.layout-ui .uniform-control-color-swatch{height:28px;border-radius:4px;border:1px solid var(--border-primary)}.layout-ui .uniform-control-toggle{width:36px;height:20px}.layout-ui .uniform-control-toggle-slider{background:var(--border-primary);border-radius:20px}.layout-ui .uniform-control-toggle-slider:before{width:14px;height:14px;left:3px;bottom:3px;background:var(--bg-primary);box-shadow:var(--shadow-sm)}.layout-ui .uniform-control-toggle input:checked+.uniform-control-toggle-slider{background:var(--accent-primary)}.layout-ui .uniform-control-toggle input:checked+.uniform-control-toggle-slider:before{transform:translate(16px)}.layout-ui .uniform-control-vec-component{font-size:10px;width:14px;color:var(--text-muted);font-weight:500}.layout-ui .uniform-control-vec-value{font-size:10px;min-width:36px;padding:2px 6px;color:var(--text-muted);background:var(--bg-tertiary);border-radius:4px}.layout-ui .ui-uniforms-container::-webkit-scrollbar{width:6px}.layout-ui .ui-uniforms-container::-webkit-scrollbar-track{background:transparent}.layout-ui .ui-uniforms-container::-webkit-scrollbar-thumb{background:var(--border-primary);border-radius:3px}.layout-ui .ui-uniforms-container::-webkit-scrollbar-thumb:hover{background:var(--text-muted)}.layout-ui .ui-playback-container{display:flex;justify-content:center;gap:12px;padding:16px 20px;border-top:1px solid var(--border-primary);background:var(--bg-tertiary)}.layout-ui .ui-control-button{width:44px;height:44px;display:flex;align-items:center;justify-content:center;background:var(--button-bg);border:1px solid var(--border-primary);border-radius:8px;color:var(--text-primary);cursor:pointer;transition:all .15s ease}.layout-ui .ui-control-button:hover{background:var(--button-bg-hover);color:var(--text-primary)}.layout-ui .ui-control-button:active{transform:scale(.95)}.layout-ui .ui-control-button svg{width:18px;height:18px;fill:currentColor}@media (max-width: 600px){.layout-ui{flex-direction:column;gap:16px}.layout-ui .ui-canvas-container{flex:none;aspect-ratio:16 / 9}.layout-ui .ui-panel{width:100%;max-height:300px}}.layout-multi-view{position:relative;width:100%;height:100%;box-sizing:border-box;background:var(--bg-primary)}.multi-view-canvas{position:relative;background:var(--bg-canvas);border-radius:var(--pane-radius);box-shadow:var(--pane-shadow);overflow:hidden}.multi-view-label{position:absolute;top:12px;left:12px;padding:4px 10px;background:#0009;color:#fff;font-family:var(--font-mono);font-size:12px;font-weight:500;border-radius:4px;text-transform:capitalize;z-index:5;pointer-events:none}.multi-view-info{position:absolute;bottom:12px;left:12px;padding:6px 10px;background:#0009;color:#fff;font-family:var(--font-mono);font-size:11px;border-radius:4px;z-index:5;pointer-events:none}.layout-split-view{display:flex;gap:16px}.layout-split-view.split-horizontal{flex-direction:row}.layout-split-view.split-horizontal .multi-view-canvas{flex:1;height:100%}.layout-split-view.split-vertical{flex-direction:column}.layout-split-view.split-vertical .multi-view-canvas{flex:1;width:100%}.layout-quad-view{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:16px}.layout-quad-view .multi-view-canvas{min-height:0}.layout-inset-view .multi-view-canvas.inset-main{width:100%;height:100%}.layout-inset-view .multi-view-canvas.inset-overlay{position:absolute;bottom:40px;right:40px;width:25%;min-width:200px;aspect-ratio:16 / 9;z-index:10;transition:all .2s ease}.layout-inset-view .multi-view-canvas.inset-overlay.minimized{width:48px;height:48px;min-width:unset;aspect-ratio:unset;cursor:pointer;opacity:.8}.layout-inset-view .multi-view-canvas.inset-overlay.minimized:hover{opacity:1}.inset-minimize-btn{position:absolute;top:8px;right:8px;width:24px;height:24px;border:none;border-radius:4px;background:#00000080;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:14px;z-index:11;transition:background .2s}.inset-minimize-btn:hover{background:#000000b3}.editor-toolbar{display:flex;align-items:center;background:var(--tab-bg);border-bottom:1px solid var(--border-primary);padding-right:8px}.editor-tab-bar{display:flex;flex:1;overflow-x:auto;scrollbar-width:thin}.editor-tab-button{background:transparent;border:none;color:var(--tab-text);padding:10px 16px;cursor:pointer;font-family:Monaco,Menlo,Courier New,monospace;font-size:12px;white-space:nowrap;border-bottom:2px solid transparent;transition:color .15s,border-color .15s}.editor-tab-button:hover{color:var(--tab-text-hover)}.editor-tab-button.active{color:var(--tab-text-active);border-bottom-color:var(--tab-border-active)}.editor-tab-button.image-tab{color:var(--accent-secondary)}.editor-tab-button.image-tab.active{color:var(--accent-secondary);border-bottom-color:var(--accent-secondary)}.editor-tab-button.uniforms-tab{color:var(--accent-tertiary, var(--accent-primary));padding:8px 12px}.editor-tab-button.uniforms-tab.active{color:var(--accent-tertiary, var(--accent-primary));border-bottom-color:var(--accent-tertiary, var(--accent-primary))}.editor-tab-button .uniforms-icon{width:18px;height:18px;display:block}.editor-copy-button{display:flex;align-items:center;justify-content:center;background:var(--button-bg);border:1px solid var(--button-border);color:var(--button-text);width:32px;height:32px;border-radius:4px;cursor:pointer;transition:background .15s,border-color .15s,color .15s;flex-shrink:0;margin-right:6px}.editor-copy-button:hover{background:var(--button-bg-hover);border-color:var(--button-border-hover);color:var(--button-text-hover)}.editor-copy-button:active{background:var(--button-bg-hover)}.editor-copy-button.copied{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}.editor-copy-button svg{flex-shrink:0}.editor-recompile-button{display:flex;align-items:center;gap:6px;background:var(--recompile-bg);border:none;color:var(--recompile-text);padding:6px 12px;border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;transition:background .15s,color .15s;flex-shrink:0}.editor-recompile-button:hover{background:var(--recompile-bg-hover)}.editor-recompile-button:active{background:var(--recompile-bg-active)}.editor-recompile-button svg{flex-shrink:0}.editor-content-area{flex:1;overflow:hidden;position:relative;background:var(--code-bg)}.editor-prism-container{height:100%;width:100%}.editor-fallback-textarea{width:100%;height:100%;background:var(--code-bg);color:var(--code-text);border:none;padding:12px;font-family:Monaco,Menlo,Courier New,monospace;font-size:13px;resize:none;outline:none}.editor-image-viewer{display:flex;align-items:center;justify-content:center;height:100%;background:var(--image-viewer-bg);padding:20px}.editor-uniforms-container{height:100%;overflow-y:auto;background:var(--bg-secondary)}.editor-image-viewer img{max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;box-shadow:var(--shadow-sm)}.editor-error-display{background:var(--error-bg);color:var(--error-text);padding:10px 14px;font-family:Monaco,Menlo,Courier New,monospace;font-size:12px;white-space:pre-wrap;overflow:auto;max-height:120px;border-top:1px solid var(--error-border)}.prism-editor-wrapper{display:flex;height:100%;background:var(--code-bg);font-family:Monaco,Menlo,Courier New,monospace;font-size:13px;line-height:1.6}.prism-editor-line-numbers{flex-shrink:0;padding:16px 12px 16px 16px;text-align:right;color:var(--code-line-number);border-right:1px solid var(--code-line-border);-webkit-user-select:none;user-select:none;overflow:hidden}.prism-editor-line-numbers span{display:block}.prism-editor-area{flex:1;position:relative;overflow:hidden}.prism-editor-textarea,.prism-editor-highlight{position:absolute;top:0;left:0;width:100%;height:100%;padding:16px;margin:0;border:none;outline:none;font-family:inherit;font-size:inherit;line-height:inherit;white-space:pre-wrap;word-wrap:break-word;overflow:auto;box-sizing:border-box}.prism-editor-textarea{background:transparent;color:transparent;caret-color:var(--code-text);resize:none;z-index:1;-webkit-text-fill-color:transparent}.prism-editor-textarea::selection{background:var(--code-selection)}.prism-editor-textarea::-moz-selection{background:var(--code-selection)}.prism-editor-highlight{background:var(--code-bg);color:var(--code-text);pointer-events:none;z-index:0}.prism-editor-highlight code{font-family:inherit;font-size:inherit;background:none;padding:0}.prism-editor-highlight .token.comment{color:var(--syntax-comment)}.prism-editor-highlight .token.keyword{color:var(--syntax-keyword)}.prism-editor-highlight .token.string{color:var(--syntax-string)}.prism-editor-highlight .token.number{color:var(--syntax-number)}.prism-editor-highlight .token.operator{color:var(--syntax-operator)}.prism-editor-highlight .token.function{color:var(--syntax-function)}.prism-editor-highlight .token.class-name{color:var(--syntax-class)}.prism-editor-highlight .token.punctuation{color:var(--syntax-punctuation)}')),document.head.appendChild(o)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const Kn="modulepreload",Yn=function(n){return"/shader-apps/ModuliSpaceN4/"+n},Ue={},w=function(e,t,i){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(t.map(c=>{if(c=Yn(c),c in Ue)return;Ue[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":Kn,l||(d.as="script"),d.crossOrigin="",d.href=c,a&&d.setAttribute("nonce",a),document.head.appendChild(d),l)return new Promise((p,_)=>{d.addEventListener("load",p),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return o.then(s=>{for(const a of s||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};function A(n){return"count"in n&&typeof n.count=="number"}function Pe(n){return!A(n)&&!n.hidden}function Wn(n){return"views"in n&&Array.isArray(n.views)}function Be(n){return"views"in n&&Array.isArray(n.views)}function Ne(n,e,t){const i=n.createShader(e);if(!i)throw new Error("Failed to create shader object");if(n.shaderSource(i,t),n.compileShader(i),!n.getShaderParameter(i,n.COMPILE_STATUS)){const r=n.getShaderInfoLog(i);throw n.deleteShader(i),new Error(`Shader compilation failed:
${r}`)}return i}function $e(n,e,t){const i=Ne(n,n.VERTEX_SHADER,e),o=Ne(n,n.FRAGMENT_SHADER,t),r=n.createProgram();if(!r)throw new Error("Failed to create program object");if(n.attachShader(r,i),n.attachShader(r,o),n.linkProgram(r),!n.getProgramParameter(r,n.LINK_STATUS)){const a=n.getProgramInfoLog(r);throw n.deleteProgram(r),n.deleteShader(i),n.deleteShader(o),new Error(`Program linking failed:
${a}`)}return n.detachShader(r,i),n.detachShader(r,o),n.deleteShader(i),n.deleteShader(o),r}function qn(n){const e=n.createVertexArray();if(!e)throw new Error("Failed to create VAO");n.bindVertexArray(e);const t=new Float32Array([-1,-1,3,-1,-1,3]),i=n.createBuffer();if(!i)throw new Error("Failed to create VBO");return n.bindBuffer(n.ARRAY_BUFFER,i),n.bufferData(n.ARRAY_BUFFER,t,n.STATIC_DRAW),n.enableVertexAttribArray(0),n.vertexAttribPointer(0,2,n.FLOAT,!1,0,0),n.bindVertexArray(null),n.bindBuffer(n.ARRAY_BUFFER,null),e}function ne(n,e,t){const i=n.createTexture();if(!i)throw new Error("Failed to create texture");return n.bindTexture(n.TEXTURE_2D,i),n.texImage2D(n.TEXTURE_2D,0,n.RGBA32F,e,t,0,n.RGBA,n.FLOAT,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.bindTexture(n.TEXTURE_2D,null),i}function ze(n,e){const t=n.createFramebuffer();if(!t)throw new Error("Failed to create framebuffer");n.bindFramebuffer(n.FRAMEBUFFER,t),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0);const i=n.checkFramebufferStatus(n.FRAMEBUFFER);if(i!==n.FRAMEBUFFER_COMPLETE)throw n.deleteFramebuffer(t),new Error(`Framebuffer incomplete: ${oi(n,i)}`);return n.bindFramebuffer(n.FRAMEBUFFER,null),t}function Zn(n){const e=n.createTexture();if(!e)throw new Error("Failed to create black texture");n.bindTexture(n.TEXTURE_2D,e);const t=new Float32Array([0,0,0,1]);return n.texImage2D(n.TEXTURE_2D,0,n.RGBA32F,1,1,0,n.RGBA,n.FLOAT,t),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.bindTexture(n.TEXTURE_2D,null),e}function Jn(n){const e=n.createTexture();if(!e)throw new Error("Failed to create keyboard texture");n.bindTexture(n.TEXTURE_2D,e);const t=256,i=3,o=new Float32Array(t*i*4);return n.texImage2D(n.TEXTURE_2D,0,n.RGBA32F,t,i,0,n.RGBA,n.FLOAT,o),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.bindTexture(n.TEXTURE_2D,null),e}function Qn(n,e,t,i){const s=new Float32Array(3072);for(let a=0;a<256;a++){const c=t.get(a)||!1,l=i.get(a)||0,u=(0*256+a)*4;s[u+0]=c?1:0,s[u+1]=c?1:0,s[u+2]=c?1:0,s[u+3]=1;const d=(2*256+a)*4;s[d+0]=l,s[d+1]=l,s[d+2]=l,s[d+3]=1}n.bindTexture(n.TEXTURE_2D,e),n.texSubImage2D(n.TEXTURE_2D,0,0,0,256,3,n.RGBA,n.FLOAT,s),n.bindTexture(n.TEXTURE_2D,null)}function ei(n){const e=n.createTexture();if(!e)throw new Error("Failed to create audio texture");n.bindTexture(n.TEXTURE_2D,e);const t=512,i=2,o=new Uint8Array(t*i);return n.texImage2D(n.TEXTURE_2D,0,n.R8,t,i,0,n.RED,n.UNSIGNED_BYTE,o),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.bindTexture(n.TEXTURE_2D,null),e}function ti(n,e,t,i){n.bindTexture(n.TEXTURE_2D,e),n.texSubImage2D(n.TEXTURE_2D,0,0,0,512,1,n.RED,n.UNSIGNED_BYTE,t),n.texSubImage2D(n.TEXTURE_2D,0,0,1,512,1,n.RED,n.UNSIGNED_BYTE,i),n.bindTexture(n.TEXTURE_2D,null)}function je(n){const e=n.createTexture();if(!e)throw new Error("Failed to create video texture");return n.bindTexture(n.TEXTURE_2D,e),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.bindTexture(n.TEXTURE_2D,null),e}function ni(n,e,t){n.bindTexture(n.TEXTURE_2D,e),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.bindTexture(n.TEXTURE_2D,null)}function ii(n,e,t,i,o){const r=e??n.createTexture();if(!r)throw new Error("Failed to create script texture");return n.bindTexture(n.TEXTURE_2D,r),o instanceof Float32Array?n.texImage2D(n.TEXTURE_2D,0,n.RGBA32F,t,i,0,n.RGBA,n.FLOAT,o):n.texImage2D(n.TEXTURE_2D,0,n.RGBA,t,i,0,n.RGBA,n.UNSIGNED_BYTE,o),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.bindTexture(n.TEXTURE_2D,null),r}function oi(n,e){switch(e){case n.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case n.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";case n.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE:return"FRAMEBUFFER_INCOMPLETE_MULTISAMPLE";default:return`Unknown status: ${e}`}}const xt={float:1,vec2:2,vec3:3,vec4:4,mat3:9,mat4:16},Ae={float:4,vec2:4,vec3:4,vec4:4,mat3:12,mat4:16};function W(n,e){return xt[n]*e}function ri(n,e){return Ae[n]*e*4}function si(n,e){return Ae[n]*e}function ai(n,e,t,i){const o=xt[n],r=Ae[n];if(o===r)return t;const s=r*e,a=i&&i.length>=s?i:new Float32Array(s);if(n==="mat3")for(let c=0;c<e;c++){const l=c*9,u=c*12;a[u+0]=t[l+0],a[u+1]=t[l+1],a[u+2]=t[l+2],a[u+3]=0,a[u+4]=t[l+3],a[u+5]=t[l+4],a[u+6]=t[l+5],a[u+7]=0,a[u+8]=t[l+6],a[u+9]=t[l+7],a[u+10]=t[l+8],a[u+11]=0}else for(let c=0;c<e;c++){const l=c*o,u=c*4;for(let d=0;d<o;d++)a[u+d]=t[l+d];for(let d=o;d<4;d++)a[u+d]=0}return a}const Ve=`#version 300 es
precision highp float;

layout(location = 0) in vec2 position;

void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,ci=`#version 300 es
precision highp float;

// Shadertoy compatibility: equirectangular texture sampling
const float ST_PI = 3.14159265359;
const float ST_TWOPI = 6.28318530718;
vec2 _st_dirToEquirect(vec3 dir) {
  float phi = atan(dir.z, dir.x);
  float theta = asin(dir.y);
  return vec2(phi / ST_TWOPI + 0.5, theta / ST_PI + 0.5);
}
`,li=`// --- Keyboard helpers (auto-injected) ---
// Letter keys
const int KEY_A = 65; const int KEY_B = 66; const int KEY_C = 67; const int KEY_D = 68;
const int KEY_E = 69; const int KEY_F = 70; const int KEY_G = 71; const int KEY_H = 72;
const int KEY_I = 73; const int KEY_J = 74; const int KEY_K = 75; const int KEY_L = 76;
const int KEY_M = 77; const int KEY_N = 78; const int KEY_O = 79; const int KEY_P = 80;
const int KEY_Q = 81; const int KEY_R = 82; const int KEY_S = 83; const int KEY_T = 84;
const int KEY_U = 85; const int KEY_V = 86; const int KEY_W = 87; const int KEY_X = 88;
const int KEY_Y = 89; const int KEY_Z = 90;

// Digit keys
const int KEY_0 = 48; const int KEY_1 = 49; const int KEY_2 = 50; const int KEY_3 = 51;
const int KEY_4 = 52; const int KEY_5 = 53; const int KEY_6 = 54; const int KEY_7 = 55;
const int KEY_8 = 56; const int KEY_9 = 57;

// Arrow keys
const int KEY_LEFT = 37; const int KEY_UP = 38; const int KEY_RIGHT = 39; const int KEY_DOWN = 40;

// Special keys
const int KEY_SPACE = 32;
const int KEY_ENTER = 13;
const int KEY_TAB = 9;
const int KEY_ESC = 27;
const int KEY_BACKSPACE = 8;
const int KEY_DELETE = 46;
const int KEY_SHIFT = 16;
const int KEY_CTRL = 17;
const int KEY_ALT = 18;

// Function keys
const int KEY_F1 = 112; const int KEY_F2 = 113; const int KEY_F3 = 114; const int KEY_F4 = 115;
const int KEY_F5 = 116; const int KEY_F6 = 117; const int KEY_F7 = 118; const int KEY_F8 = 119;
const int KEY_F9 = 120; const int KEY_F10 = 121; const int KEY_F11 = 122; const int KEY_F12 = 123;

// Returns 1.0 if key is held down, 0.0 otherwise
float keyDown(int key) {
  return textureLod(keyboard, vec2((float(key) + 0.5) / 256.0, 0.25), 0.0).x;
}

// Returns 1.0/0.0, toggling each time the key is pressed
float keyToggle(int key) {
  return textureLod(keyboard, vec2((float(key) + 0.5) / 256.0, 0.75), 0.0).x;
}

// Boolean convenience helpers
bool isKeyDown(int key) { return keyDown(key) > 0.5; }
bool isKeyToggled(int key) { return keyToggle(key) > 0.5; }
`;function ui(n,e,t){const i=[ci];if(t.commonSource&&(i.push("// Common code"),i.push(t.commonSource),i.push("")),t.namedSamplers&&t.namedSamplers.size>0){if(i.push(`// Core uniforms
uniform vec3  iResolution;
uniform float iTime;
uniform float iTimeDelta;
uniform int   iFrame;
uniform vec4  iMouse;
uniform bool  iMousePressed;
uniform vec4  iDate;
uniform float iFrameRate;

// Shader Sandbox touch extensions
uniform int   iTouchCount;
uniform vec4  iTouch0;
uniform vec4  iTouch1;
uniform vec4  iTouch2;
uniform float iPinch;
uniform float iPinchDelta;
uniform vec2  iPinchCenter;
`),t.viewNames&&t.viewNames.length>1){i.push("// Cross-view uniforms (multi-view project)");for(const d of t.viewNames)i.push(`uniform vec4  iMouse_${d};`),i.push(`uniform vec3  iResolution_${d};`),i.push(`uniform bool  iMousePressed_${d};`);i.push("")}i.push("// Named samplers");for(const[d]of t.namedSamplers)i.push(`uniform sampler2D ${d};`),i.push(`uniform vec3 ${d}_resolution;`);i.push(""),t.namedSamplers.has("keyboard")&&(i.push(li),i.push(""))}else if(i.push(`// Shadertoy built-in uniforms
uniform vec3  iResolution;
uniform float iTime;
uniform float iTimeDelta;
uniform int   iFrame;
uniform vec4  iMouse;
uniform bool  iMousePressed;
uniform vec4  iDate;
uniform float iFrameRate;
uniform vec3  iChannelResolution[4];
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform sampler2D iChannel2;
uniform sampler2D iChannel3;

// Shader Sandbox touch extensions (not in Shadertoy)
uniform int   iTouchCount;          // Number of active touches (0-10)
uniform vec4  iTouch0;              // Primary touch: (x, y, startX, startY)
uniform vec4  iTouch1;              // Second touch
uniform vec4  iTouch2;              // Third touch
uniform float iPinch;               // Pinch scale factor (1.0 = no pinch)
uniform float iPinchDelta;          // Pinch change since last frame
uniform vec2  iPinchCenter;         // Center point of pinch gesture
`),t.viewNames&&t.viewNames.length>1){i.push("// Cross-view uniforms (multi-view project)");for(const d of t.viewNames)i.push(`uniform vec4  iMouse_${d};`),i.push(`uniform vec3  iResolution_${d};`),i.push(`uniform bool  iMousePressed_${d};`);i.push("")}for(const d of t.ubos)i.push(`// Array uniform: ${d.name} (max ${d.count})`),i.push(`layout(std140) uniform _ub_${d.name} {`),i.push(`  ${d.def.type} ${d.name}[${d.count}];`),i.push("};"),i.push(`uniform int ${d.name}_count;`),i.push("");const o=Object.entries(t.uniforms).filter(([,d])=>!A(d));if(o.length>0){i.push("// Custom uniforms");for(const[d,p]of o){const _=p.type==="bool"?"bool":p.type;i.push(`uniform ${_} ${d};`)}i.push("")}const r=di(n,e);i.push("// User shader code"),i.push(r),i.push(""),i.push(`// Main wrapper
out vec4 fragColor;

void main() {
  mainImage(fragColor, gl_FragCoord.xy);
}`);const s=i.join(`
`),a=s.split(`
`);let c=0,l=0,u=0;for(let d=0;d<a.length;d++)a[d]==="// Common code"&&(c=d+2,l=t.commonSource?t.commonSource.split(`
`).length:0),a[d]==="// User shader code"&&(u=d+2);return{source:s,lineMapping:{commonStartLine:c,commonLines:l,userCodeStartLine:u}}}function di(n,e){const t=new Set;if(e.forEach((o,r)=>{o.kind==="texture"&&o.cubemap&&t.add(`iChannel${r}`)}),t.size===0)return n;const i=/texture\s*\(\s*(iChannel[0-3])\s*,\s*([^)]+)\)/g;return n.replace(i,(o,r,s)=>t.has(r)?`texture(${r}, _st_dirToEquirect(${s}))`:o)}class hi{constructor(e,t){this._audioTexture=null,this._needsAudio=!1,this._videoTextures=[];const i=this.getAllChannelSources(t);i.some(o=>o.kind==="audio")&&(this._needsAudio=!0,this._audioTexture={texture:ei(e),audioContext:null,analyser:null,stream:null,frequencyData:new Uint8Array(512),waveformData:new Uint8Array(512),width:512,height:2,initialized:!1});for(const o of i)o.kind==="webcam"?this._videoTextures.find(s=>s.kind==="webcam")||this._videoTextures.push({texture:je(e),video:null,stream:null,width:1,height:1,ready:!1,kind:"webcam"}):o.kind==="video"&&(this._videoTextures.find(s=>s.kind==="video"&&s.src===o.src)||this._videoTextures.push({texture:je(e),video:null,stream:null,width:1,height:1,ready:!1,kind:"video",src:o.src}))}get needsAudio(){return this._needsAudio}get needsWebcam(){return this._videoTextures.some(e=>e.kind==="webcam")}get videoSources(){return this._videoTextures.filter(e=>e.kind==="video"&&!e.ready&&e.src).map(e=>e.src)}get audioTexture(){return this._audioTexture}get videoTextures(){return this._videoTextures}async initAudio(){if(!(!this._audioTexture||this._audioTexture.initialized))try{const e=await navigator.mediaDevices.getUserMedia({audio:!0}),t=new AudioContext,i=t.createMediaStreamSource(e),o=t.createAnalyser();o.fftSize=1024,o.smoothingTimeConstant=.8,i.connect(o),this._audioTexture.audioContext=t,this._audioTexture.analyser=o,this._audioTexture.stream=e,this._audioTexture.initialized=!0}catch(e){console.warn("Failed to initialize audio input:",e)}}async initWebcam(){const e=this._videoTextures.find(t=>t.kind==="webcam"&&!t.ready);if(e)try{const t=await navigator.mediaDevices.getUserMedia({video:!0}),i=document.createElement("video");i.srcObject=t,i.muted=!0,i.playsInline=!0,await i.play(),e.video=i,e.stream=t,e.width=i.videoWidth,e.height=i.videoHeight,i.addEventListener("loadedmetadata",()=>{e.width=i.videoWidth,e.height=i.videoHeight}),e.ready=!0}catch(t){console.warn("Failed to initialize webcam:",t)}}async initVideo(e){const t=this._videoTextures.find(o=>o.kind==="video"&&o.src===e&&!o.ready);if(!t)return;const i=document.createElement("video");i.src=e,i.muted=!0,i.loop=!0,i.playsInline=!0,i.crossOrigin="anonymous",i.addEventListener("loadedmetadata",()=>{t.width=i.videoWidth,t.height=i.videoHeight});try{await i.play(),t.video=i,t.ready=!0}catch(o){console.warn(`Failed to play video '${e}':`,o)}}updateAudioTexture(e){var t;(t=this._audioTexture)!=null&&t.analyser&&(this._audioTexture.analyser.getByteFrequencyData(this._audioTexture.frequencyData),this._audioTexture.analyser.getByteTimeDomainData(this._audioTexture.waveformData),ti(e,this._audioTexture.texture,this._audioTexture.frequencyData,this._audioTexture.waveformData))}updateVideoTextures(e){for(const t of this._videoTextures)!t.ready||!t.video||t.video.readyState<HTMLMediaElement.HAVE_CURRENT_DATA||(ni(e,t.texture,t.video),t.video.videoWidth>0&&(t.width=t.video.videoWidth,t.height=t.video.videoHeight))}dispose(e){var t,i,o,r;this._audioTexture&&((t=this._audioTexture.stream)==null||t.getTracks().forEach(s=>s.stop()),(i=this._audioTexture.audioContext)==null||i.close(),e.deleteTexture(this._audioTexture.texture));for(const s of this._videoTextures)(o=s.stream)==null||o.getTracks().forEach(a=>a.stop()),(r=s.video)==null||r.pause(),e.deleteTexture(s.texture);this._audioTexture=null,this._videoTextures=[]}getAllChannelSources(e){const t=[],i=e.passes;for(const o of[i.Image,i.BufferA,i.BufferB,i.BufferC,i.BufferD])o&&(t.push(...o.channels),o.namedSamplers&&t.push(...o.namedSamplers.values()));return t}}class mi{constructor(e){this.values={},this.definitions=e,this.initializeDefaults()}initializeDefaults(){for(const[e,t]of Object.entries(this.definitions))A(t)?this.values[e]=new Float32Array(W(t.type,t.count)):this.values[e]=this.cloneValue(t.value)}cloneValue(e){return e instanceof Float32Array?e.slice():Array.isArray(e)?[...e]:e}getDefinition(e){return this.definitions[e]}getDefinitions(){return this.definitions}has(e){return e in this.definitions}get(e){return this.values[e]}getAll(){const e={};for(const[t,i]of Object.entries(this.values))e[t]=this.cloneValue(i);return e}set(e,t){return this.has(e)?(this.values[e]=this.cloneValue(t),!0):!1}setAll(e){for(const[t,i]of Object.entries(e))i!==void 0&&this.set(t,i)}reset(e){const t=this.definitions[e];return t?(A(t)?this.values[e]=new Float32Array(W(t.type,t.count)):this.values[e]=this.cloneValue(t.value),!0):!1}resetAll(){this.initializeDefaults()}getDefault(e){const t=this.definitions[e];if(t)return A(t)?new Float32Array(W(t.type,t.count)):this.cloneValue(t.value)}*entries(){for(const[e,t]of Object.entries(this.definitions))yield[e,t,this.values[e]]}get size(){return Object.keys(this.definitions).length}get isEmpty(){return this.size===0}}class fi{constructor(e,t){this._ubos=[],this._dirtyScalars=new Set,this._uniforms=t,this._store=new mi(t),this.initUBOs(e);for(const[i,o]of Object.entries(t))A(o)||this._dirtyScalars.add(i)}get ubos(){return this._ubos}get store(){return this._store}get(e){return this._store.get(e)}getAll(){return this._store.getAll()}set(e,t){const i=this._uniforms[e];if(!i){console.warn(`setUniformValue('${e}'): uniform not defined in config`);return}if(!A(i)){const o=i.type;if((o==="float"||o==="int")&&typeof t!="number"){console.warn(`setUniformValue('${e}'): expected number for ${o}, got ${typeof t}`);return}if(o==="bool"&&typeof t!="boolean"){console.warn(`setUniformValue('${e}'): expected boolean, got ${typeof t}`);return}if(o==="vec2"||o==="vec3"||o==="vec4"){if(!Array.isArray(t)){console.warn(`setUniformValue('${e}'): expected array for ${o}, got ${typeof t}`);return}const r=o==="vec2"?2:o==="vec3"?3:4;if(t.length!==r){console.warn(`setUniformValue('${e}'): expected array of length ${r} for ${o}, got ${t.length}`);return}}}if(this._store.set(e,t),A(i)){const o=this._ubos.find(r=>r.name===e);if(o){const r=t,s=W(i.type,i.count),a=W(i.type,1);if(r.length>s){console.warn(`setUniformValue('${e}'): Float32Array length ${r.length} exceeds max ${s} (${i.count} × ${i.type})`);return}if(r.length%a!==0){console.warn(`setUniformValue('${e}'): Float32Array length ${r.length} is not a multiple of ${a} (components per ${i.type})`);return}const c=r.length/a,l=ai(i.type,c,r,o.paddedData);l!==o.paddedData&&o.paddedData.set(l);const u=si(i.type,c),d=o.paddedData.length;u<d&&o.paddedData.fill(0,u),o.activeCount=c,o.dirty=!0}}else this._dirtyScalars.add(e)}setMultiple(e){for(const[t,i]of Object.entries(e))i!==void 0&&this.set(t,i)}bindToProgram(e,t){for(const i of this._ubos){i.dirty&&(e.bindBuffer(e.UNIFORM_BUFFER,i.buffer),e.bufferSubData(e.UNIFORM_BUFFER,0,i.paddedData),i.dirty=!1);const o=t.custom.get(`${i.name}_count`);o&&e.uniform1i(o,i.activeCount)}for(const i of this._dirtyScalars){const o=this._uniforms[i];if(!o||A(o))continue;const r=this._store.get(i);if(r===void 0)continue;const s=t.custom.get(i);if(s)switch(o.type){case"float":e.uniform1f(s,r);break;case"int":e.uniform1i(s,r);break;case"bool":e.uniform1i(s,r?1:0);break;case"vec2":{const a=r;e.uniform2f(s,a[0],a[1]);break}case"vec3":{const a=r;e.uniform3f(s,a[0],a[1],a[2]);break}case"vec4":{const a=r;e.uniform4f(s,a[0],a[1],a[2],a[3]);break}}}}clearDirty(){this._dirtyScalars.clear()}markAllScalarsDirty(){for(const[e,t]of Object.entries(this._uniforms))A(t)||this._dirtyScalars.add(e)}bindUBOsToProgram(e,t,i){for(const o of this._ubos){const r=e.getUniformBlockIndex(t,`_ub_${o.name}`);r!==e.INVALID_INDEX&&e.uniformBlockBinding(t,r,o.bindingPoint),i.set(`${o.name}_count`,e.getUniformLocation(t,`${o.name}_count`))}}dispose(e){for(const t of this._ubos)e.deleteBuffer(t.buffer);this._ubos=[]}initUBOs(e){const t=e.getParameter(e.MAX_UNIFORM_BLOCK_SIZE),i=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);let o=0;for(const[r,s]of Object.entries(this._uniforms)){if(!A(s))continue;const a=ri(s.type,s.count);if(a>t)throw new Error(`Array uniform '${r}' requires ${a} bytes but GL MAX_UNIFORM_BLOCK_SIZE is ${t}`);const c=e.createBuffer();if(!c)throw new Error(`Failed to create UBO buffer for '${r}'`);if(e.bindBuffer(e.UNIFORM_BUFFER,c),e.bufferData(e.UNIFORM_BUFFER,a,e.DYNAMIC_DRAW),e.bindBuffer(e.UNIFORM_BUFFER,null),o>=i)throw new Error(`Too many array uniforms: binding point ${o} exceeds GL MAX_UNIFORM_BUFFER_BINDINGS (${i})`);e.bindBufferBase(e.UNIFORM_BUFFER,o,c);const l=new Float32Array(a/4);this._ubos.push({name:r,def:s,buffer:c,bindingPoint:o,byteSize:a,dirty:!1,paddedData:l,activeCount:0}),o++}}}class He{constructor(e){this._frame=0,this._time=0,this._lastStepTime=null,this._passes=[],this._textures=[],this._keyboardTexture=null,this._blackTexture=null,this._keyStates=new Map,this._toggleStates=new Map,this._compilationErrors=[],this._scriptTextures=new Map,this._viewNames=[],this.gl=e.gl,this.project=e.project,this._onAssetError=e.onAssetError,this._width=this.gl.drawingBufferWidth,this._height=this.gl.drawingBufferHeight,this.initExtensions(),this._blackTexture=Zn(this.gl);const t=Jn(this.gl);this._keyboardTexture={texture:t,width:256,height:3},this.initProjectTextures(),this._media=new hi(this.gl,e.project),this._uniformMgr=new fi(this.gl,e.project.uniforms),e.viewNames&&e.viewNames.length>1&&(this._viewNames=e.viewNames),this.initRuntimePasses()}async initAudio(){return this._media.initAudio()}updateAudioTexture(){this._media.updateAudioTexture(this.gl)}async initWebcam(){return this._media.initWebcam()}async initVideo(e){return this._media.initVideo(e)}updateVideoTextures(){this._media.updateVideoTextures(this.gl)}get needsAudio(){return this._media.needsAudio}get needsWebcam(){return this._media.needsWebcam}get videoSources(){return this._media.videoSources}updateTexture(e,t,i,o){const r=this._scriptTextures.get(e),s=o instanceof Float32Array;if(r&&r.width===t&&r.height===i&&r.isFloat===s){const a=this.gl;a.bindTexture(a.TEXTURE_2D,r.texture),s?a.texSubImage2D(a.TEXTURE_2D,0,0,0,t,i,a.RGBA,a.FLOAT,o):a.texSubImage2D(a.TEXTURE_2D,0,0,0,t,i,a.RGBA,a.UNSIGNED_BYTE,o),a.bindTexture(a.TEXTURE_2D,null)}else{const a=ii(this.gl,(r==null?void 0:r.texture)??null,t,i,o);this._scriptTextures.set(e,{texture:a,width:t,height:i,isFloat:s})}}readPixels(e,t,i,o,r){const s=this._passes.find(l=>l.name===e);if(!s)return console.warn(`readPixels: pass '${e}' not found`),new Uint8Array(o*r*4);const a=this.gl;a.bindFramebuffer(a.FRAMEBUFFER,s.framebuffer),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,s.previousTexture,0);const c=new Uint8Array(o*r*4);return a.readPixels(t,i,o,r,a.RGBA,a.UNSIGNED_BYTE,c),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,s.currentTexture,0),a.bindFramebuffer(a.FRAMEBUFFER,null),c}get width(){return this._width}get height(){return this._height}get stats(){const e=this._lastStepTime===null?0:this._time-this._lastStepTime;return{frame:this._frame,time:this._time,deltaTime:e,width:this._width,height:this._height}}getCompilationErrors(){return this._compilationErrors}hasErrors(){return this._compilationErrors.length>0}getUniformStore(){return this._uniformMgr.store}getUniformValue(e){return this._uniformMgr.get(e)}getUniformValues(){return this._uniformMgr.getAll()}setUniformValue(e,t){this._uniformMgr.set(e,t)}setUniformValues(e){this._uniformMgr.setMultiple(e)}getUBOExportData(){return this._uniformMgr.ubos.map(e=>({name:e.name,type:e.def.type,count:e.def.count,bindingPoint:e.bindingPoint,paddedData:new Float32Array(e.paddedData)}))}getImageFramebuffer(){const e=this._passes.find(t=>t.name==="Image");return(e==null?void 0:e.framebuffer)??null}bindImageForRead(){const e=this.gl,t=this._passes.find(i=>i.name==="Image");return t?(e.bindFramebuffer(e.READ_FRAMEBUFFER,t.framebuffer),e.framebufferTexture2D(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t.previousTexture,0),!0):!1}unbindImageForRead(){const e=this.gl,t=this._passes.find(i=>i.name==="Image");t&&(e.framebufferTexture2D(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t.currentTexture,0),e.bindFramebuffer(e.READ_FRAMEBUFFER,null))}step(e,t,i,o,r){const s=this.gl,a=this._lastStepTime===null?0:e-this._lastStepTime;this._lastStepTime=e,this._time=e;const c=new Date,l=o??{count:0,touches:[[0,0,0,0],[0,0,0,0],[0,0,0,0]],pinch:1,pinchDelta:0,pinchCenter:[0,0]},u={iResolution:[this._width,this._height,1],iTime:this._time,iTimeDelta:a,iFrame:this._frame,iMouse:t,iMousePressed:i,iDate:[c.getFullYear(),c.getMonth(),c.getDate(),c.getHours()*3600+c.getMinutes()*60+c.getSeconds()+c.getMilliseconds()/1e3],iFrameRate:a>0?1/a:60,iTouchCount:l.count,iTouch:l.touches,iPinch:l.pinch,iPinchDelta:l.pinchDelta,iPinchCenter:l.pinchCenter,crossViewStates:r};s.viewport(0,0,this._width,this._height);const d=["BufferA","BufferB","BufferC","BufferD","Image"];for(const p of d){const _=this._passes.find(b=>b.name===p);_&&(this.executePass(_,u),this.swapPassTextures(_))}this._uniformMgr.clearDirty(),this._frame+=1}resize(e,t){this._width=e,this._height=t;const i=this.gl;for(const o of this._passes)i.deleteTexture(o.currentTexture),i.deleteTexture(o.previousTexture),i.deleteFramebuffer(o.framebuffer),o.currentTexture=ne(i,e,t),o.previousTexture=ne(i,e,t),o.framebuffer=ze(i,o.currentTexture)}reset(){this._frame=0;const e=this.gl;for(const t of this._passes)e.bindFramebuffer(e.FRAMEBUFFER,t.framebuffer),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t.previousTexture,0),e.clear(e.COLOR_BUFFER_BIT),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t.currentTexture,0);e.bindFramebuffer(e.FRAMEBUFFER,null)}updateKeyState(e,t){const i=this._keyStates.get(e)||!1;if(this._keyStates.set(e,t),t&&!i){const o=this._toggleStates.get(e)||0;this._toggleStates.set(e,o===0?1:0)}}updateKeyboardTexture(){this._keyboardTexture&&Qn(this.gl,this._keyboardTexture.texture,this._keyStates,this._toggleStates)}recompilePass(e,t){const i=this.gl,o=this._passes.find(a=>a.name===e);if(!o)return{success:!1,error:`Pass '${e}' not found`};const r=this.project.passes[e];if(!r)return{success:!1,error:`Project pass '${e}' not found`};const{source:s}=this.buildFragmentShader(t,r.channels,r.namedSamplers);try{const a=$e(i,Ve,s);return i.deleteProgram(o.uniforms.program),o.uniforms=this.cacheUniformLocations(a,r.namedSamplers),r.glslSource=t,this._compilationErrors=this._compilationErrors.filter(c=>c.passName!==e),this._uniformMgr.markAllScalarsDirty(),{success:!0}}catch(a){return{success:!1,error:a instanceof Error?a.message:String(a)}}}recompileCommon(e){const t=this.project.commonSource;this.project.commonSource=e;const i=[],o=["BufferA","BufferB","BufferC","BufferD","Image"];for(const r of o){const s=this.project.passes[r];if(!s)continue;const a=this.recompilePass(r,s.glslSource);a.success||i.push({passName:r,error:a.error||"Unknown error"})}if(i.length>0){this.project.commonSource=t;for(const r of o){const s=this.project.passes[r];if(!s||i.some(c=>c.passName===r))continue;const a=this.recompilePass(r,s.glslSource);a.success||(console.error(`Failed to revert ${r} to old common source:`,a.error),i.push({passName:r,error:`Revert failed: ${a.error}`}))}return{success:!1,errors:i}}return{success:!0,errors:[]}}dispose(){const e=this.gl;for(const t of this._passes)e.deleteProgram(t.uniforms.program),e.deleteVertexArray(t.vao),e.deleteFramebuffer(t.framebuffer),e.deleteTexture(t.currentTexture),e.deleteTexture(t.previousTexture);for(const t of this._textures)e.deleteTexture(t.texture);this._keyboardTexture&&e.deleteTexture(this._keyboardTexture.texture),this._blackTexture&&e.deleteTexture(this._blackTexture),this._uniformMgr.dispose(e),this._media.dispose(e),this._passes=[],this._textures=[],this._keyboardTexture=null,this._blackTexture=null}initExtensions(){const e=this.gl;if(!e.getExtension("EXT_color_buffer_float"))throw new Error("EXT_color_buffer_float not supported. WebGL2 with float rendering is required.");e.getExtension("OES_texture_float_linear")}cacheUniformLocations(e,t){const i=this.gl,o=new Map;for(const[r,s]of Object.entries(this.project.uniforms))A(s)||o.set(r,i.getUniformLocation(e,r));return this._uniformMgr.bindUBOsToProgram(i,e,o),{program:e,iResolution:i.getUniformLocation(e,"iResolution"),iTime:i.getUniformLocation(e,"iTime"),iTimeDelta:i.getUniformLocation(e,"iTimeDelta"),iFrame:i.getUniformLocation(e,"iFrame"),iMouse:i.getUniformLocation(e,"iMouse"),iMousePressed:i.getUniformLocation(e,"iMousePressed"),iDate:i.getUniformLocation(e,"iDate"),iFrameRate:i.getUniformLocation(e,"iFrameRate"),iChannel:[i.getUniformLocation(e,"iChannel0"),i.getUniformLocation(e,"iChannel1"),i.getUniformLocation(e,"iChannel2"),i.getUniformLocation(e,"iChannel3")],iChannelResolution:[i.getUniformLocation(e,"iChannelResolution[0]"),i.getUniformLocation(e,"iChannelResolution[1]"),i.getUniformLocation(e,"iChannelResolution[2]"),i.getUniformLocation(e,"iChannelResolution[3]")],iTouchCount:i.getUniformLocation(e,"iTouchCount"),iTouch:[i.getUniformLocation(e,"iTouch0"),i.getUniformLocation(e,"iTouch1"),i.getUniformLocation(e,"iTouch2")],iPinch:i.getUniformLocation(e,"iPinch"),iPinchDelta:i.getUniformLocation(e,"iPinchDelta"),iPinchCenter:i.getUniformLocation(e,"iPinchCenter"),custom:o,namedSamplers:(()=>{const r=new Map;if(t)for(const[s]of t)r.set(s,i.getUniformLocation(e,s));return r})(),namedSamplerResolutions:(()=>{const r=new Map;if(t)for(const[s]of t)r.set(s,i.getUniformLocation(e,`${s}_resolution`));return r})(),crossViewMouse:(()=>{const r=new Map;if(this._viewNames.length>1)for(const s of this._viewNames)r.set(s,i.getUniformLocation(e,`iMouse_${s}`));return r})(),crossViewResolution:(()=>{const r=new Map;if(this._viewNames.length>1)for(const s of this._viewNames)r.set(s,i.getUniformLocation(e,`iResolution_${s}`));return r})(),crossViewMousePressed:(()=>{const r=new Map;if(this._viewNames.length>1)for(const s of this._viewNames)r.set(s,i.getUniformLocation(e,`iMousePressed_${s}`));return r})()}}initProjectTextures(){const e=this.gl;this._textures=[];for(const t of this.project.textures){const i=e.createTexture();if(!i)throw new Error("Failed to create texture");e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255]));const o={name:t.name,texture:i,width:1,height:1};this._textures.push(o);const r=new Image;r.crossOrigin="anonymous",r.onload=()=>{e.bindTexture(e.TEXTURE_2D,i),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,r),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1);const s=t.filter==="nearest"?e.NEAREST:e.LINEAR;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,s),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,s);const a=t.wrap==="clamp"?e.CLAMP_TO_EDGE:e.REPEAT;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,a),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,a),t.filter==="linear"&&e.generateMipmap(e.TEXTURE_2D),o.width=r.width,o.height=r.height,console.log(`Loaded texture '${t.name}': ${r.width}x${r.height}`)},r.onerror=()=>{var s;console.error(`Failed to load texture '${t.name}' from ${t.source}`),(s=this._onAssetError)==null||s.call(this,{type:"texture",name:t.name,detail:t.source})},r.src=t.source}}initRuntimePasses(){const e=this.gl,t=this.project,i=qn(e),o=["BufferA","BufferB","BufferC","BufferD","Image"];for(const r of o){const s=t.passes[r];if(!s)continue;const{source:a,lineMapping:c}=this.buildFragmentShader(s.glslSource,s.channels,s.namedSamplers);try{const l=$e(e,Ve,a),u=this.cacheUniformLocations(l,s.namedSamplers),d=ne(e,this._width,this._height),p=ne(e,this._width,this._height),_=ze(e,d),b={name:r,projectChannels:s.channels,vao:i,uniforms:u,framebuffer:_,currentTexture:d,previousTexture:p,namedSamplers:s.namedSamplers};this._passes.push(b)}catch(l){const u=l instanceof Error?l.message:String(l),d=u.match(/ERROR:\s*\d+:(\d+):/);let p=!1,_=null;if(d){const b=parseInt(d[1],10);if(c.commonStartLine>0&&c.commonLines>0){const E=c.commonStartLine+c.commonLines-1;b>=c.commonStartLine&&b<=E&&(p=!0,_=b-c.commonStartLine+1)}!p&&c.userCodeStartLine>0&&b>=c.userCodeStartLine&&(_=b-c.userCodeStartLine+1)}this._compilationErrors.push({passName:r,error:u,source:a,isFromCommon:p,originalLine:_,lineMapping:c}),console.error(`Failed to compile ${r}:`,u)}}}buildFragmentShader(e,t,i){return ui(e,t,{commonSource:this.project.commonSource??"",ubos:this._uniformMgr.ubos.map(o=>({name:o.name,def:o.def,count:o.def.count})),uniforms:this.project.uniforms,namedSamplers:i,viewNames:this._viewNames.length>1?this._viewNames:void 0})}setViewNames(e){this._viewNames=e}executePass(e,t){const i=this.gl;i.bindFramebuffer(i.FRAMEBUFFER,e.framebuffer),i.useProgram(e.uniforms.program),i.bindVertexArray(e.vao),this.bindBuiltinUniforms(e.uniforms,t),this._uniformMgr.bindToProgram(i,e.uniforms),e.namedSamplers&&e.namedSamplers.size>0?this.bindNamedSamplers(e):this.bindChannelTextures(e),i.drawArrays(i.TRIANGLES,0,3),i.bindVertexArray(null),i.useProgram(null),i.bindFramebuffer(i.FRAMEBUFFER,null)}bindBuiltinUniforms(e,t){const i=this.gl;e.iResolution&&i.uniform3f(e.iResolution,t.iResolution[0],t.iResolution[1],t.iResolution[2]),e.iTime&&i.uniform1f(e.iTime,t.iTime),e.iTimeDelta&&i.uniform1f(e.iTimeDelta,t.iTimeDelta),e.iFrame&&i.uniform1i(e.iFrame,t.iFrame),e.iMouse&&i.uniform4f(e.iMouse,t.iMouse[0],t.iMouse[1],t.iMouse[2],t.iMouse[3]),e.iMousePressed&&i.uniform1i(e.iMousePressed,t.iMousePressed?1:0),e.iDate&&i.uniform4f(e.iDate,t.iDate[0],t.iDate[1],t.iDate[2],t.iDate[3]),e.iFrameRate&&i.uniform1f(e.iFrameRate,t.iFrameRate),e.iTouchCount&&i.uniform1i(e.iTouchCount,t.iTouchCount);for(let o=0;o<3;o++){const r=e.iTouch[o];if(r){const s=t.iTouch[o];i.uniform4f(r,s[0],s[1],s[2],s[3])}}if(e.iPinch&&i.uniform1f(e.iPinch,t.iPinch),e.iPinchDelta&&i.uniform1f(e.iPinchDelta,t.iPinchDelta),e.iPinchCenter&&i.uniform2f(e.iPinchCenter,t.iPinchCenter[0],t.iPinchCenter[1]),t.crossViewStates)for(const[o,r]of t.crossViewStates){const s=e.crossViewMouse.get(o);s&&i.uniform4f(s,r.mouse[0],r.mouse[1],r.mouse[2],r.mouse[3]);const a=e.crossViewResolution.get(o);a&&i.uniform3f(a,r.resolution[0],r.resolution[1],r.resolution[2]);const c=e.crossViewMousePressed.get(o);c&&i.uniform1i(c,r.mousePressed?1:0)}}bindChannelTextures(e){const t=this.gl;for(let i=0;i<4;i++){const o=e.projectChannels[i],r=this.resolveChannelTexture(o),s=this.resolveChannelResolution(o);t.activeTexture(t.TEXTURE0+i),t.bindTexture(t.TEXTURE_2D,r);const a=e.uniforms.iChannel[i];a&&t.uniform1i(a,i);const c=e.uniforms.iChannelResolution[i];c&&t.uniform3f(c,s[0],s[1],1)}}bindNamedSamplers(e){const t=this.gl;let i=0;for(const[o,r]of e.namedSamplers){const s=this.resolveChannelTexture(r),a=this.resolveChannelResolution(r);t.activeTexture(t.TEXTURE0+i),t.bindTexture(t.TEXTURE_2D,s);const c=e.uniforms.namedSamplers.get(o);c&&t.uniform1i(c,i);const l=e.uniforms.namedSamplerResolutions.get(o);l&&t.uniform3f(l,a[0],a[1],1),i++}}resolveChannelTexture(e){switch(e.kind){case"none":if(!this._blackTexture)throw new Error("Black texture not initialized");return this._blackTexture;case"buffer":{const t=this._passes.find(i=>i.name===e.buffer);if(!t)throw new Error(`Buffer '${e.buffer}' not found`);return e.current?t.currentTexture:t.previousTexture}case"texture":{const t=this._textures.find(i=>i.name===e.name);if(!t)throw new Error(`Texture '${e.name}' not found`);return t.texture}case"keyboard":if(!this._keyboardTexture)throw new Error("Internal error: keyboard texture not initialized");return this._keyboardTexture.texture;case"audio":return this._media.audioTexture?this._media.audioTexture.texture:this._blackTexture;case"webcam":{const t=this._media.videoTextures.find(i=>i.kind==="webcam");return(t==null?void 0:t.texture)??this._blackTexture}case"video":{const t=this._media.videoTextures.find(i=>i.kind==="video"&&i.src===e.src);return(t==null?void 0:t.texture)??this._blackTexture}case"script":{const t=this._scriptTextures.get(e.name);return(t==null?void 0:t.texture)??this._blackTexture}}}resolveChannelResolution(e){switch(e.kind){case"none":return[0,0];case"buffer":return[this._width,this._height];case"texture":{const t=this._textures.find(i=>i.name===e.name);return t?[t.width,t.height]:[0,0]}case"keyboard":return[256,3];case"audio":return this._media.audioTexture?[this._media.audioTexture.width,this._media.audioTexture.height]:[0,0];case"webcam":{const t=this._media.videoTextures.find(i=>i.kind==="webcam");return t?[t.width,t.height]:[0,0]}case"video":{const t=this._media.videoTextures.find(i=>i.kind==="video"&&i.src===e.src);return t?[t.width,t.height]:[0,0]}case"script":{const t=this._scriptTextures.get(e.name);return t?[t.width,t.height]:[0,0]}}}swapPassTextures(e){const t=this.gl,i=e.currentTexture;e.currentTexture=e.previousTexture,e.previousTexture=i,t.bindFramebuffer(t.FRAMEBUFFER,e.framebuffer),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e.currentTexture,0),t.bindFramebuffer(t.FRAMEBUFFER,null)}}class pi{constructor(e){this.overlay=null,this.container=e}show(e,t){this.overlay||(this.overlay=document.createElement("div"),this.overlay.className="shader-error-overlay",this.container.appendChild(this.overlay));const i=e.filter(u=>u.isFromCommon),o=e.filter(u=>!u.isFromCommon),c=[...i.length>0?[i[0]]:[],...o].map(({passName:u,error:d,isFromCommon:p,originalLine:_,lineMapping:b})=>{const E=d.replace(`Shader compilation failed:
`,""),T=_;let C=E;T!==null&&(C=E.replace(/ERROR:\s*\d+:(\d+):/g,`ERROR: 0:${T}:`));let m=null;if(p)m=t.commonSource;else{const h=t.passes[u];m=(h==null?void 0:h.glslSource)??null}return{passName:p?"common.glsl":u,error:gi(C,b,p),codeContext:T!==null&&m?Ei(m,T):null}}).map(({passName:u,error:d,codeContext:p})=>`
      <div class="error-section">
        <div class="error-pass-name">${u}</div>
        <pre class="error-content">${wt(d)}</pre>
        ${p?`<pre class="error-code-context">${p}</pre>`:""}
      </div>
    `).join("");this.overlay.innerHTML=`
      <div class="error-overlay-content">
        <div class="error-header">
          <span class="error-title">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style="vertical-align: text-bottom;">
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM3.5 7.5a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9z"/>
            </svg>
            Shader Compilation Failed
          </span>
          <button class="error-close" title="Dismiss">×</button>
        </div>
        <div class="error-body">
          ${c}
        </div>
      </div>
    `;const l=this.overlay.querySelector(".error-close");l&&l.addEventListener("click",()=>this.hide())}hide(){this.overlay&&(this.overlay.remove(),this.overlay=null)}dispose(){this.hide()}}function gi(n,e,t){return n.split(`
`).map(i=>{const o=i.match(/^ERROR:\s*(\d+):(\d+):\s*(.+)$/);if(o){const[,,r,s]=o,a=parseInt(r,10);let c=a;return t&&e.commonStartLine>0?c=a-e.commonStartLine+1:e.userCodeStartLine>0&&a>=e.userCodeStartLine&&(c=a-e.userCodeStartLine+1),`Line ${c}: ${vi(s)}`}return i}).join(`
`)}function vi(n){return n.includes("no matching overloaded function found")?n+" (check function name spelling and argument types)":n.includes("undeclared identifier")?n+" (variable not declared — check spelling)":n.includes("syntax error")?n+" (check for missing semicolons, brackets, or commas)":n.includes("is not a function")?n+" (identifier exists but is not callable)":n.includes("wrong operand types")?n+" (type mismatch — check vec/float/int types)":n}function Ei(n,e){const t=n.split(`
`);if(e<1||e>t.length)return null;const i=3,o=Math.max(0,e-i-1),r=Math.min(t.length,e+i);return t.slice(o,r).map((a,c)=>{const l=o+c+1,u=l===e,d=String(l).padStart(4," "),p=wt(a);return u?`<span class="error-line-highlight">${d} │ ${p}</span>`:`<span class="context-line">${d} │ ${p}</span>`}).join("")}function wt(n){const e=document.createElement("div");return e.textContent=n,e.innerHTML}class X{constructor(e){this.overlay=null,this.autoHideTimer=null,this.container=e}showError(e,t){this.clearAutoHide(),this.ensureOverlay();const i=t instanceof Error?t.message:String(t),o=t instanceof Error&&t.stack?t.stack.split(`
`).slice(1,4).join(`
`):"";this.overlay.innerHTML=`
      <div class="script-error-content">
        <div class="script-error-header">
          <span class="script-error-title">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" style="vertical-align: text-bottom;">
              <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm9 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-.25-6.25a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0v-3.5z"/>
            </svg>
            script.js ${e}() error
          </span>
          <button class="script-error-close" title="Dismiss">×</button>
        </div>
        <pre class="script-error-message">${ie(i)}</pre>
        ${o?`<pre class="script-error-stack">${ie(o)}</pre>`:""}
      </div>
    `,this.wireClose(),this.autoHideTimer=setTimeout(()=>this.hide(),X.AUTO_HIDE_MS)}showDisabled(){this.clearAutoHide(),this.ensureOverlay(),this.overlay.innerHTML=`
      <div class="script-error-content">
        <div class="script-error-header disabled">
          <span class="script-error-title">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" style="vertical-align: text-bottom;">
              <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm9 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-.25-6.25a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0v-3.5z"/>
            </svg>
            script.js onFrame() disabled
          </span>
          <button class="script-error-close" title="Dismiss">×</button>
        </div>
        <pre class="script-error-message">Too many consecutive errors. Reload to retry.</pre>
      </div>
    `,this.wireClose()}showWarning(e,t){this.clearAutoHide(),this.ensureOverlay(),this.overlay.innerHTML=`
      <div class="script-error-content">
        <div class="script-error-header warning">
          <span class="script-error-title">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" style="vertical-align: text-bottom;">
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            ${ie(e)}
          </span>
          <button class="script-error-close" title="Dismiss">×</button>
        </div>
        <pre class="script-error-message">${ie(t)}</pre>
      </div>
    `,this.wireClose(),this.autoHideTimer=setTimeout(()=>this.hide(),X.AUTO_HIDE_MS)}hide(){this.clearAutoHide(),this.overlay&&(this.overlay.remove(),this.overlay=null)}dispose(){this.hide()}ensureOverlay(){this.overlay||(this.overlay=document.createElement("div"),this.overlay.className="script-error-overlay",this.container.appendChild(this.overlay))}wireClose(){var t;const e=(t=this.overlay)==null?void 0:t.querySelector(".script-error-close");e&&e.addEventListener("click",()=>this.hide())}clearAutoHide(){this.autoHideTimer!==null&&(clearTimeout(this.autoHideTimer),this.autoHideTimer=null)}}X.AUTO_HIDE_MS=5e3;function ie(n){const e=document.createElement("div");return e.textContent=n,e.innerHTML}class Oe{constructor(e){var t;this.values={},this.updaters=new Map,this.documentListeners=[],this.container=e.container,this.uniforms=e.uniforms,this.onChange=e.onChange;for(const[i,o]of Object.entries(this.uniforms))A(o)||o.hidden||(this.values[i]=((t=e.initialValues)==null?void 0:t[i])??o.value);this.render()}render(){this.container.innerHTML="",this.container.className="uniform-controls";const e=Object.entries(this.uniforms);if(e.length===0){const r=document.createElement("div");r.className="uniform-controls-empty",r.textContent="No uniforms defined",this.container.appendChild(r);return}const t=document.createElement("div");t.className="uniform-controls-header";const i=document.createElement("button");i.className="uniform-controls-reset",i.textContent="Reset",i.title="Reset all uniforms to defaults",i.addEventListener("click",()=>this.resetToDefaults()),t.appendChild(i),this.container.appendChild(t);const o=document.createElement("div");o.className="uniform-controls-list";for(const[r,s]of e){if(A(s)||s.hidden)continue;const a=this.createControl(r,s);a&&(this.updaters.set(r,a.update),o.appendChild(a.element))}this.container.appendChild(o)}createControl(e,t){if(A(t)||t.hidden)return null;switch(t.type){case"float":return this.createFloatSlider(e,t);case"int":return this.createIntSlider(e,t);case"bool":return this.createBoolToggle(e,t);case"vec2":return this.createVec2Pad(e,t);case"vec3":return t.color?this.createColorPicker(e,t):this.createVecSliders(e,t,3);case"vec4":return t.color?this.createColorPicker4(e,t):this.createVecSliders(e,t,4);default:return console.warn(`Uniform '${e}': unknown type '${t.type}'`),null}}createSliderRow(e){const t=document.createElement("div");t.className="uniform-control-label-row";const i=document.createElement("label");i.className="uniform-control-label",i.textContent=e.label;const o=document.createElement("span");o.className="uniform-control-value",o.textContent=e.format(e.value),t.appendChild(i),t.appendChild(o);const r=document.createElement("input");r.type="range",r.className="uniform-control-slider",r.min=String(e.min),r.max=String(e.max),r.step=String(e.step),r.value=String(e.value),r.addEventListener("input",()=>{const c=parseFloat(r.value);e.onInput(c),o.textContent=e.format(c)});const s=document.createElement("div");return s.appendChild(t),s.appendChild(r),{element:s,update:c=>{r.value=String(c),o.textContent=e.format(c)}}}createFloatSlider(e,t){const i=t.step??.01,{element:o,update:r}=this.createSliderRow({label:t.label??e,min:t.min??0,max:t.max??1,step:i,value:this.values[e],format:a=>this.formatNumber(a,i),onInput:a=>{this.values[e]=a,this.onChange(e,a)}}),s=document.createElement("div");return s.className="uniform-control uniform-control-float",s.appendChild(o),{element:s,update:a=>r(a)}}createIntSlider(e,t){const{element:i,update:o}=this.createSliderRow({label:t.label??e,min:t.min??0,max:t.max??10,step:t.step??1,value:this.values[e],format:s=>String(Math.round(s)),onInput:s=>{const a=Math.round(s);this.values[e]=a,this.onChange(e,a)}}),r=document.createElement("div");return r.className="uniform-control uniform-control-int",r.appendChild(i),{element:r,update:s=>o(s)}}createBoolToggle(e,t){const i=this.values[e],o=t.label??e,r=document.createElement("div");r.className="uniform-control uniform-control-bool";const s=document.createElement("div");s.className="uniform-control-label-row";const a=document.createElement("label");a.className="uniform-control-label",a.textContent=o;const c=document.createElement("label");c.className="uniform-control-toggle";const l=document.createElement("input");l.type="checkbox",l.checked=i;const u=document.createElement("span");return u.className="uniform-control-toggle-slider",l.addEventListener("change",()=>{const d=l.checked;this.values[e]=d,this.onChange(e,d)}),c.appendChild(l),c.appendChild(u),s.appendChild(a),s.appendChild(c),r.appendChild(s),{element:r,update:d=>{l.checked=d}}}createVec2Pad(e,t){const i=this.values[e],o=t.min??[0,0],r=t.max??[1,1],s=t.label??e,a=document.createElement("div");a.className="uniform-control uniform-control-vec2";const c=document.createElement("div");c.className="uniform-control-label-row";const l=document.createElement("label");l.className="uniform-control-label",l.textContent=s;const u=document.createElement("span");u.className="uniform-control-value",u.textContent=this.formatVec2(i),c.appendChild(l),c.appendChild(u);const d=document.createElement("div");d.className="uniform-control-xy-pad";const p=document.createElement("div");p.className="uniform-control-xy-handle",d.appendChild(p);const _=f=>{const v=(f[0]-o[0])/(r[0]-o[0])*100,x=(1-(f[1]-o[1])/(r[1]-o[1]))*100;p.style.left=`${v}%`,p.style.top=`${x}%`};_(i);let b=!1;const E=f=>{const v=d.getBoundingClientRect(),x="touches"in f?f.touches[0].clientX:f.clientX,S="touches"in f?f.touches[0].clientY:f.clientY;let y=Math.max(0,Math.min(1,(x-v.left)/v.width)),R=Math.max(0,Math.min(1,(S-v.top)/v.height));const P=o[0]+y*(r[0]-o[0]),L=o[1]+(1-R)*(r[1]-o[1]),V=[P,L];this.values[e]=V,p.style.left=`${y*100}%`,p.style.top=`${R*100}%`,u.textContent=this.formatVec2(V),this.onChange(e,V)},T=f=>{b=!0,E(f),f.preventDefault()},C=f=>{b&&E(f)},m=()=>{b=!1};d.addEventListener("mousedown",T),document.addEventListener("mousemove",C),document.addEventListener("mouseup",m),this.documentListeners.push({type:"mousemove",handler:C}),this.documentListeners.push({type:"mouseup",handler:m});const h=f=>{b=!0,E(f),f.preventDefault()},g=f=>{b&&E(f)};return d.addEventListener("touchstart",h),document.addEventListener("touchmove",g),document.addEventListener("touchend",m),this.documentListeners.push({type:"touchmove",handler:g}),this.documentListeners.push({type:"touchend",handler:m}),a.appendChild(c),a.appendChild(d),{element:a,update:f=>{const v=f;_(v),u.textContent=this.formatVec2(v)}}}createColorPicker(e,t){const i=this.values[e],o=t.label??e,r=document.createElement("div");r.className="uniform-control uniform-control-color";const s=document.createElement("div");s.className="uniform-control-label-row";const a=document.createElement("label");a.className="uniform-control-label",a.textContent=o;const c=document.createElement("span");c.className="uniform-control-value",c.textContent=this.rgbToHex(i),s.appendChild(a),s.appendChild(c);const l=document.createElement("div");l.className="uniform-control-color-wrapper";const u=document.createElement("input");u.type="color",u.className="uniform-control-color-input",u.value=this.rgbToHex(i);const d=document.createElement("div");return d.className="uniform-control-color-swatch",d.style.backgroundColor=this.rgbToHex(i),u.addEventListener("input",()=>{const p=this.hexToRgb(u.value);this.values[e]=p,c.textContent=u.value,d.style.backgroundColor=u.value,this.onChange(e,p)}),d.addEventListener("click",()=>u.click()),l.appendChild(d),l.appendChild(u),r.appendChild(s),r.appendChild(l),{element:r,update:p=>{const _=this.rgbToHex(p);u.value=_,d.style.backgroundColor=_,c.textContent=_}}}createColorPicker4(e,t){var E,T,C;const i=this.values[e],o=t.label??e,r=document.createElement("div");r.className="uniform-control uniform-control-color";const s=document.createElement("div");s.className="uniform-control-label-row";const a=document.createElement("label");a.className="uniform-control-label",a.textContent=o;const c=document.createElement("span");c.className="uniform-control-value",c.textContent=this.rgbToHex(i),s.appendChild(a),s.appendChild(c);const l=document.createElement("div");l.className="uniform-control-color-wrapper";const u=document.createElement("input");u.type="color",u.className="uniform-control-color-input",u.value=this.rgbToHex(i);const d=document.createElement("div");d.className="uniform-control-color-swatch",d.style.backgroundColor=this.rgbToHex(i),u.addEventListener("input",()=>{const m=this.hexToRgb(u.value),h=this.values[e];h[0]=m[0],h[1]=m[1],h[2]=m[2],c.textContent=u.value,d.style.backgroundColor=u.value,this.onChange(e,[...h])}),d.addEventListener("click",()=>u.click()),l.appendChild(d),l.appendChild(u);const p=((E=t.step)==null?void 0:E[3])??.01,{element:_,update:b}=this.createSliderRow({label:"Alpha",min:((T=t.min)==null?void 0:T[3])??0,max:((C=t.max)==null?void 0:C[3])??1,step:p,value:i[3],format:m=>this.formatNumber(m,p),onInput:m=>{const h=this.values[e];h[3]=m,this.onChange(e,[...h])}});return r.appendChild(s),r.appendChild(l),r.appendChild(_),{element:r,update:m=>{const h=m,g=this.rgbToHex(h);u.value=g,d.style.backgroundColor=g,c.textContent=g,b(h[3])}}}createVecSliders(e,t,i){const o=this.values[e],r=t.label??e,s=i===3?["X","Y","Z"]:["X","Y","Z","W"],a=document.createElement("div");a.className=`uniform-control uniform-control-vec${i}`;const c=document.createElement("div");c.className="uniform-control-label",c.textContent=r,a.appendChild(c);const l=[];return s.forEach((u,d)=>{var C,m,h;const p=((C=t.step)==null?void 0:C[d])??.01,{element:_,update:b}=this.createSliderRow({label:u,min:((m=t.min)==null?void 0:m[d])??0,max:((h=t.max)==null?void 0:h[d])??1,step:p,value:o[d],format:g=>this.formatNumber(g,p),onInput:g=>{const f=this.values[e];f[d]=g,this.onChange(e,[...f])}}),E=_.querySelector(".uniform-control-label-row");if(E){E.classList.add("uniform-control-vec-slider-row");const g=E.querySelector(".uniform-control-label");g&&g.classList.add("uniform-control-vec-component");const f=E.querySelector(".uniform-control-value");f&&f.classList.add("uniform-control-vec-value")}const T=_.querySelector(".uniform-control-slider");T&&T.classList.add("uniform-control-vec-slider"),l.push(b),a.appendChild(_)}),{element:a,update:u=>{const d=u;l.forEach((p,_)=>p(d[_]))}}}formatNumber(e,t){const i=String(t),o=i.indexOf("."),r=o===-1?0:i.length-o-1;return e.toFixed(r)}formatVec2(e){return`(${e[0].toFixed(2)}, ${e[1].toFixed(2)})`}rgbToHex(e){const t=Math.round(e[0]*255),i=Math.round(e[1]*255),o=Math.round(e[2]*255);return`#${t.toString(16).padStart(2,"0")}${i.toString(16).padStart(2,"0")}${o.toString(16).padStart(2,"0")}`}hexToRgb(e){const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:[0,0,0]}setValue(e,t){var i;e in this.uniforms&&(this.values[e]=t,(i=this.updaters.get(e))==null||i(t))}resetToDefaults(){for(const[e,t]of Object.entries(this.uniforms))A(t)||t.hidden||(this.setValue(e,t.value),this.onChange(e,t.value))}destroy(){for(const{type:e,handler:t}of this.documentListeners)document.removeEventListener(e,t);this.documentListeners=[],this.container.innerHTML="",this.updaters.clear()}}const bi=Object.freeze(Object.defineProperty({__proto__:null,UniformControls:Oe},Symbol.toStringTag,{value:"Module"}));class yi{constructor(e){if(this.controls=null,this.isOpen=e.startOpen??!1,this.wrapper=document.createElement("div"),this.wrapper.className="uniforms-panel-wrapper",this.toggleButton=document.createElement("button"),this.toggleButton.className="uniforms-toggle-button",this.toggleButton.title="Toggle Uniforms Panel",this.toggleButton.innerHTML=`
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="4" y1="21" x2="4" y2="14"></line>
        <line x1="4" y1="10" x2="4" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12" y2="3"></line>
        <line x1="20" y1="21" x2="20" y2="16"></line>
        <line x1="20" y1="12" x2="20" y2="3"></line>
        <line x1="1" y1="14" x2="7" y2="14"></line>
        <line x1="9" y1="8" x2="15" y2="8"></line>
        <line x1="17" y1="16" x2="23" y2="16"></line>
      </svg>
    `,this.toggleButton.addEventListener("click",()=>this.toggle()),this.wrapper.appendChild(this.toggleButton),this.panel=document.createElement("div"),this.panel.className="uniforms-panel",!Object.values(e.uniforms).some(a=>Pe(a))){this.wrapper.style.display="none",e.container.appendChild(this.wrapper);return}const i=document.createElement("div");i.className="uniforms-panel-header";const o=document.createElement("span");o.textContent="Uniforms",i.appendChild(o);const r=document.createElement("button");r.className="uniforms-panel-close",r.innerHTML="&times;",r.title="Close",r.addEventListener("click",()=>this.hide()),i.appendChild(r),this.panel.appendChild(i);const s=document.createElement("div");s.className="uniforms-panel-content",this.panel.appendChild(s),this.controls=new Oe({container:s,uniforms:e.uniforms,initialValues:e.initialValues,onChange:e.onChange}),this.wrapper.appendChild(this.panel),this.isOpen||this.panel.classList.add("closed"),e.container.appendChild(this.wrapper)}setValue(e,t){var i;(i=this.controls)==null||i.setValue(e,t)}show(){this.isOpen=!0,this.toggleButton.classList.add("hidden"),this.panel.classList.remove("closed")}hide(){this.isOpen=!1,this.panel.classList.add("closed"),this.toggleButton.classList.remove("hidden")}toggle(){this.isOpen?this.hide():this.show()}isVisible(){return this.isOpen}destroy(){var e;(e=this.controls)==null||e.destroy(),this.wrapper.remove()}}const Ee=n=>n.replace(/\\/g,"\\\\").replace(/`/g,"\\`").replace(/\$/g,"\\$");function _i(n,e){const t=Ti(n,e),i=new Blob([t],{type:"text/html"}),r=`${n.root.split("/").pop()||"shader"}.html`,s=URL.createObjectURL(i),a=document.createElement("a");a.href=s,a.download=r,a.click(),URL.revokeObjectURL(s),console.log(`Exported: ${r}`)}function Ti(n,e){var f,v,x,S;const t=n.meta.title,i=n.commonSource??"",o=e.getUniformValues(),r=e.getUBOExportData(),s=["BufferA","BufferB","BufferC","BufferD","Image"],a=[];let c=!1,l=!1;for(const y of s){const R=n.passes[y];if(!R)continue;const P=R.channels.map(L=>L.kind==="buffer"?`buffer:${L.buffer}`:L.kind==="texture"?"procedural":L.kind==="keyboard"?(c=!0,"keyboard"):L.kind==="script"?(l=!0,`script:${L.name}`):L.kind==="audio"||L.kind==="webcam"||L.kind==="video"?"black":"none");a.push({name:y,source:R.glslSource,channels:R.channels,channelTypes:P})}const u=!!((f=n.script)!=null&&f.setup||(v=n.script)!=null&&v.onFrame),d=Object.entries(n.uniforms).filter(([,y])=>!A(y)),p=[];for(const[y,R]of d){if(A(R))continue;const P=o[y]??R.value;if(R.type==="float"||R.type==="int")p.push(`  '${y}': ${P}`);else if(R.type==="bool")p.push(`  '${y}': ${P?1:0}`);else if(R.type==="vec2"){const L=P;p.push(`  '${y}': [${L[0]}, ${L[1]}]`)}else if(R.type==="vec3"){const L=P;p.push(`  '${y}': [${L[0]}, ${L[1]}, ${L[2]}]`)}else if(R.type==="vec4"){const L=P;p.push(`  '${y}': [${L[0]}, ${L[1]}, ${L[2]}, ${L[3]}]`)}}const _=d.map(([y,R])=>`uniform ${R.type==="bool"?"bool":R.type} ${y};`).join(`
`),b=r.map(y=>`// Array uniform: ${y.name} (max ${y.count})
layout(std140) uniform _ub_${y.name} {
  ${y.type} ${y.name}[${y.count}];
};
uniform int ${y.name}_count;`).join(`

`),E=r.map(y=>{const R=Array.from(y.paddedData).map(P=>P.toFixed(6)).join(", ");return`  { name: '${y.name}', type: '${y.type}', count: ${y.count}, binding: ${y.bindingPoint}, data: new Float32Array([${R}]) }`}).join(`,
`);let T="",C="";u&&((x=n.script)!=null&&x.setup&&(T=n.script.setup.toString()),(S=n.script)!=null&&S.onFrame&&(C=n.script.onFrame.toString()));const m=c?`
// --- Keyboard helpers ---
const int KEY_A = 65; const int KEY_B = 66; const int KEY_C = 67; const int KEY_D = 68;
const int KEY_E = 69; const int KEY_F = 70; const int KEY_G = 71; const int KEY_H = 72;
const int KEY_I = 73; const int KEY_J = 74; const int KEY_K = 75; const int KEY_L = 76;
const int KEY_M = 77; const int KEY_N = 78; const int KEY_O = 79; const int KEY_P = 80;
const int KEY_Q = 81; const int KEY_R = 82; const int KEY_S = 83; const int KEY_T = 84;
const int KEY_U = 85; const int KEY_V = 86; const int KEY_W = 87; const int KEY_X = 88;
const int KEY_Y = 89; const int KEY_Z = 90;
const int KEY_0 = 48; const int KEY_1 = 49; const int KEY_2 = 50; const int KEY_3 = 51;
const int KEY_4 = 52; const int KEY_5 = 53; const int KEY_6 = 54; const int KEY_7 = 55;
const int KEY_8 = 56; const int KEY_9 = 57;
const int KEY_LEFT = 37; const int KEY_UP = 38; const int KEY_RIGHT = 39; const int KEY_DOWN = 40;
const int KEY_SPACE = 32; const int KEY_ENTER = 13; const int KEY_TAB = 9; const int KEY_ESC = 27;
const int KEY_BACKSPACE = 8; const int KEY_DELETE = 46; const int KEY_SHIFT = 16;
const int KEY_CTRL = 17; const int KEY_ALT = 18;
const int KEY_F1 = 112; const int KEY_F2 = 113; const int KEY_F3 = 114; const int KEY_F4 = 115;
const int KEY_F5 = 116; const int KEY_F6 = 117; const int KEY_F7 = 118; const int KEY_F8 = 119;
const int KEY_F9 = 120; const int KEY_F10 = 121; const int KEY_F11 = 122; const int KEY_F12 = 123;
float keyDown(int key) { return textureLod(iChannel0, vec2((float(key) + 0.5) / 256.0, 0.25), 0.0).x; }
float keyToggle(int key) { return textureLod(iChannel0, vec2((float(key) + 0.5) / 256.0, 0.75), 0.0).x; }
bool isKeyDown(int key) { return keyDown(key) > 0.5; }
bool isKeyToggled(int key) { return keyToggle(key) > 0.5; }
`:"",h=a.map(y=>`  { name: '${y.name}', source: \`${Ee(y.source)}\`, channels: ${JSON.stringify(y.channelTypes)} }`).join(`,
`),g=`#version 300 es
precision highp float;

const float ST_PI = 3.14159265359;
const float ST_TWOPI = 6.28318530718;
vec2 _st_dirToEquirect(vec3 dir) {
  float phi = atan(dir.z, dir.x);
  float theta = asin(dir.y);
  return vec2(phi / ST_TWOPI + 0.5, theta / ST_PI + 0.5);
}

uniform vec3  iResolution;
uniform float iTime;
uniform float iTimeDelta;
uniform int   iFrame;
uniform vec4  iMouse;
uniform bool  iMousePressed;
uniform vec4  iDate;
uniform float iFrameRate;
uniform vec3  iChannelResolution[4];
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform sampler2D iChannel2;
uniform sampler2D iChannel3;

${b}
${_}
${m}`;return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 100%; height: 100%; background: #fff; }
    body { display: flex; align-items: center; justify-content: center; }
    .container {
      width: 90vw;
      max-width: 1200px;
      aspect-ratio: 16 / 9;
      background: #000;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 24px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.1);
    }
    canvas { display: block; width: 100%; height: 100%; }
  </style>
</head>
<body>
  <div class="container">
    <canvas id="canvas"></canvas>
  </div>
  <script>
// Shader Sandbox Export - ${t}
// Generated ${new Date().toISOString()}

// ── Constants ──

const VERTEX_SHADER = \`#version 300 es
precision highp float;
layout(location = 0) in vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }
\`;

const FRAGMENT_PREAMBLE = \`${Ee(g)}\`;

const FRAGMENT_SUFFIX = \`
out vec4 fragColor;
void main() { mainImage(fragColor, gl_FragCoord.xy); }
\`;

const COMMON_SOURCE = \`${Ee(i)}\`;

const PASSES = [
${h}
];

const UNIFORM_VALUES = {
${p.join(`,
`)}
};

const UBO_DATA = [
${E}
];

// ── WebGL Setup ──

const canvas = document.getElementById('canvas');
const gl = canvas.getContext('webgl2', { alpha: false, antialias: false, preserveDrawingBuffer: true });
if (!gl) { alert('WebGL2 not supported'); throw new Error('WebGL2 not supported'); }

const floatExt = gl.getExtension('EXT_color_buffer_float');
if (!floatExt) console.warn('EXT_color_buffer_float not supported');

// Fullscreen triangle
const vao = gl.createVertexArray();
gl.bindVertexArray(vao);
const vbo = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 3,-1, -1,3]), gl.STATIC_DRAW);
gl.enableVertexAttribArray(0);
gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

// ── Helper Textures ──

function createProceduralTexture() {
  const tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  const data = new Uint8Array(8 * 8 * 4);
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      const i = (y * 8 + x) * 4;
      const c = (x + y) % 2;
      data[i] = c ? 204 : 51; data[i+1] = c ? 26 : 51;
      data[i+2] = c ? 204 : 51; data[i+3] = 255;
    }
  }
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 8, 8, 0, gl.RGBA, gl.UNSIGNED_BYTE, data);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
  return tex;
}

function createBlackTexture() {
  const tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0,0,0,255]));
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  return tex;
}

const proceduralTex = createProceduralTexture();
const blackTex = createBlackTexture();
${c?`
// ── Keyboard Texture (256x3) ──
// Row 0: current key state, Row 1: key down events, Row 2: toggle state
const keyboardTex = gl.createTexture();
const keyboardData = new Uint8Array(256 * 3);
gl.bindTexture(gl.TEXTURE_2D, keyboardTex);
gl.texImage2D(gl.TEXTURE_2D, 0, gl.R8, 256, 3, 0, gl.RED, gl.UNSIGNED_BYTE, keyboardData);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

const keyStates = new Uint8Array(256);     // row 0: held
const keyDown_ev = new Uint8Array(256);    // row 1: down this frame
const keyToggle_st = new Uint8Array(256);  // row 2: toggle

document.addEventListener('keydown', e => {
  const k = e.keyCode;
  if (k < 256) {
    if (!keyStates[k]) {
      keyDown_ev[k] = 255;
      keyToggle_st[k] = keyToggle_st[k] ? 0 : 255;
    }
    keyStates[k] = 255;
  }
});
document.addEventListener('keyup', e => {
  const k = e.keyCode;
  if (k < 256) keyStates[k] = 0;
});

function updateKeyboardTexture() {
  keyboardData.set(keyStates, 0);
  keyboardData.set(keyDown_ev, 256);
  keyboardData.set(keyToggle_st, 512);
  gl.bindTexture(gl.TEXTURE_2D, keyboardTex);
  gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, 256, 3, gl.RED, gl.UNSIGNED_BYTE, keyboardData);
  keyDown_ev.fill(0);
}
`:""}
${l||u?`
// ── Script Textures ──
const scriptTextures = new Map();

function updateScriptTexture(name, w, h, data) {
  const existing = scriptTextures.get(name);
  const isFloat = data instanceof Float32Array;
  const internalFormat = isFloat ? gl.RGBA32F : gl.RGBA;
  const type = isFloat ? gl.FLOAT : gl.UNSIGNED_BYTE;
  if (existing && existing.width === w && existing.height === h) {
    gl.bindTexture(gl.TEXTURE_2D, existing.texture);
    gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, w, h, gl.RGBA, type, data);
  } else {
    const tex = existing ? existing.texture : gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, gl.RGBA, type, data);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    scriptTextures.set(name, { texture: tex, width: w, height: h });
  }
}
`:""}
// ── Shader Compilation ──

function compileShader(type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader));
    console.error(source.split('\\n').map((l,i) => (i+1) + ': ' + l).join('\\n'));
    throw new Error('Shader compile failed');
  }
  return shader;
}

function createProgram(fragSource) {
  const vs = compileShader(gl.VERTEX_SHADER, VERTEX_SHADER);
  const fs = compileShader(gl.FRAGMENT_SHADER, fragSource);
  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error('Program link failed: ' + gl.getProgramInfoLog(program));
  }
  return program;
}

function createRenderTexture(w, h) {
  const tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, w, h, 0, gl.RGBA, gl.FLOAT, null);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  return tex;
}

function createFramebuffer(tex) {
  const fb = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
  return fb;
}

// ── Initialize Passes ──

const container = canvas.parentElement;
let width = canvas.width = container.clientWidth * devicePixelRatio;
let height = canvas.height = container.clientHeight * devicePixelRatio;

const runtimePasses = PASSES.map(pass => {
  const fragSource = FRAGMENT_PREAMBLE +
    (COMMON_SOURCE ? '\\n// Common\\n' + COMMON_SOURCE + '\\n' : '') +
    '\\n// User code\\n' + pass.source + FRAGMENT_SUFFIX;
  const program = createProgram(fragSource);
  const currentTexture = createRenderTexture(width, height);
  const previousTexture = createRenderTexture(width, height);
  const framebuffer = createFramebuffer(currentTexture);

  // Cache uniform locations
  const uniforms = {
    iResolution: gl.getUniformLocation(program, 'iResolution'),
    iTime: gl.getUniformLocation(program, 'iTime'),
    iTimeDelta: gl.getUniformLocation(program, 'iTimeDelta'),
    iFrame: gl.getUniformLocation(program, 'iFrame'),
    iMouse: gl.getUniformLocation(program, 'iMouse'),
    iMousePressed: gl.getUniformLocation(program, 'iMousePressed'),
    iDate: gl.getUniformLocation(program, 'iDate'),
    iFrameRate: gl.getUniformLocation(program, 'iFrameRate'),
    iChannel: [0,1,2,3].map(i => gl.getUniformLocation(program, 'iChannel' + i)),
    iChannelResolution: gl.getUniformLocation(program, 'iChannelResolution'),
    custom: {},
    uboCountLocs: {},
  };

  // Scalar uniform locations
  for (const name of Object.keys(UNIFORM_VALUES)) {
    uniforms.custom[name] = gl.getUniformLocation(program, name);
  }

  // UBO block bindings and count locations
  for (const ubo of UBO_DATA) {
    const blockIndex = gl.getUniformBlockIndex(program, '_ub_' + ubo.name);
    if (blockIndex !== gl.INVALID_INDEX) {
      gl.uniformBlockBinding(program, blockIndex, ubo.binding);
    }
    uniforms.uboCountLocs[ubo.name] = gl.getUniformLocation(program, ubo.name + '_count');
  }

  return { name: pass.name, channels: pass.channels, program, framebuffer, currentTexture, previousTexture, uniforms };
});

// ── UBO Buffers ──

const uboBuffers = UBO_DATA.map(ubo => {
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.UNIFORM_BUFFER, buffer);
  gl.bufferData(gl.UNIFORM_BUFFER, ubo.data, gl.DYNAMIC_DRAW);
  gl.bindBufferBase(gl.UNIFORM_BUFFER, ubo.binding, buffer);
  return { name: ubo.name, buffer, count: ubo.count, data: ubo.data };
});

const findPass = name => runtimePasses.find(p => p.name === name);
${u?`
// ── Script Setup ──

const scriptSetup = ${T||"null"};
const scriptOnFrame = ${C||"null"};

const scriptEngine = {
  setUniformValue(name, value) {
    // Check if this is an array uniform (Float32Array)
    if (value instanceof Float32Array) {
      const ubo = uboBuffers.find(u => u.name === name);
      if (ubo) {
        // Pack to std140: user provides tight data, we need to pad
        // For simplicity, copy directly (assume already padded or vec4/mat4)
        const len = Math.min(value.length, ubo.data.length);
        ubo.data.set(value.subarray(0, len));
        gl.bindBuffer(gl.UNIFORM_BUFFER, ubo.buffer);
        gl.bufferSubData(gl.UNIFORM_BUFFER, 0, ubo.data);
      }
    } else {
      UNIFORM_VALUES[name] = value;
    }
  },
  getUniformValue(name) {
    return UNIFORM_VALUES[name];
  },
  updateTexture(name, w, h, data) {
    updateScriptTexture(name, w, h, data);
  },
  readPixels(passName, x, y, w, h) {
    const pass = findPass(passName);
    if (!pass) return new Uint8Array(w * h * 4);
    gl.bindFramebuffer(gl.FRAMEBUFFER, pass.framebuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, pass.previousTexture, 0);
    const pixels = new Uint8Array(w * h * 4);
    gl.readPixels(x, y, w, h, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, pass.currentTexture, 0);
    return pixels;
  },
  get width() { return width; },
  get height() { return height; },
  setOverlay() {},
};

try {
  if (scriptSetup) scriptSetup(scriptEngine);
} catch(e) { console.error('script setup error:', e); }
`:""}
// ── Mouse ──

let mouse = [0, 0, 0, 0];
let mouseDown = false;
canvas.addEventListener('mousedown', e => {
  mouseDown = true;
  const rect = canvas.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width * width;
  const y = (1 - (e.clientY - rect.top) / rect.height) * height;
  mouse[0] = x; mouse[1] = y;
  mouse[2] = x; mouse[3] = y;
});
canvas.addEventListener('mousemove', e => {
  if (!mouseDown) return;
  const rect = canvas.getBoundingClientRect();
  mouse[0] = (e.clientX - rect.left) / rect.width * width;
  mouse[1] = (1 - (e.clientY - rect.top) / rect.height) * height;
});
canvas.addEventListener('mouseup', () => {
  mouseDown = false;
  mouse[2] = -Math.abs(mouse[2]);
  mouse[3] = -Math.abs(mouse[3]);
});

// ── Resize ──

let resizeTimer = null;
new ResizeObserver(() => {
  const newW = container.clientWidth * devicePixelRatio;
  const newH = container.clientHeight * devicePixelRatio;
  canvas.width = newW;
  canvas.height = newH;
  if (resizeTimer) clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    width = newW;
    height = newH;
    runtimePasses.forEach(p => {
      [p.currentTexture, p.previousTexture].forEach(tex => {
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, width, height, 0, gl.RGBA, gl.FLOAT, null);
      });
      gl.bindFramebuffer(gl.FRAMEBUFFER, p.framebuffer);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, p.currentTexture, 0);
    });
    frame = 0;
    startTime = performance.now() / 1000;
    lastTime = 0;
  }, 150);
}).observe(container);

// ── Animation Loop ──

let frame = 0;
let startTime = performance.now() / 1000;
let lastTime = 0;

function render(now) {
  requestAnimationFrame(render);

  const time = now / 1000 - startTime;
  const deltaTime = Math.max(0.001, time - lastTime);
  lastTime = time;

  const date = new Date();
  const iDate = [date.getFullYear(), date.getMonth(), date.getDate(),
    date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds() + date.getMilliseconds() / 1000];
${c?`
  updateKeyboardTexture();`:""}
${u?`
  // Run script onFrame
  try {
    if (scriptOnFrame) scriptOnFrame(scriptEngine, time, deltaTime, frame);
  } catch(e) { console.error('script onFrame error:', e); }
`:""}
  gl.bindVertexArray(vao);

  runtimePasses.forEach(pass => {
    gl.useProgram(pass.program);
    gl.bindFramebuffer(gl.FRAMEBUFFER, pass.framebuffer);
    gl.viewport(0, 0, width, height);

    // Built-in uniforms
    gl.uniform3f(pass.uniforms.iResolution, width, height, 1);
    gl.uniform1f(pass.uniforms.iTime, time);
    gl.uniform1f(pass.uniforms.iTimeDelta, deltaTime);
    gl.uniform1i(pass.uniforms.iFrame, frame);
    gl.uniform4fv(pass.uniforms.iMouse, mouse);
    gl.uniform1i(pass.uniforms.iMousePressed, mouseDown ? 1 : 0);
    gl.uniform4fv(pass.uniforms.iDate, iDate);
    gl.uniform1f(pass.uniforms.iFrameRate, 1 / deltaTime);

    // Scalar custom uniforms
    for (const [name, value] of Object.entries(UNIFORM_VALUES)) {
      const loc = pass.uniforms.custom[name];
      if (!loc) continue;
      if (Array.isArray(value)) {
        if (value.length === 2) gl.uniform2fv(loc, value);
        else if (value.length === 3) gl.uniform3fv(loc, value);
        else if (value.length === 4) gl.uniform4fv(loc, value);
      } else if (typeof value === 'number') {
        gl.uniform1f(loc, value);
      }
    }

    // UBO count uniforms
    for (const ubo of UBO_DATA) {
      const countLoc = pass.uniforms.uboCountLocs[ubo.name];
      if (countLoc) gl.uniform1i(countLoc, ubo.count);
    }

    // Bind channels
    const channelRes = new Float32Array(12); // iChannelResolution[4] × vec3
    pass.channels.forEach((ch, i) => {
      gl.activeTexture(gl.TEXTURE0 + i);
      if (ch === 'none') {
        gl.bindTexture(gl.TEXTURE_2D, blackTex);
      } else if (ch === 'procedural') {
        gl.bindTexture(gl.TEXTURE_2D, proceduralTex);
        channelRes[i*3] = 8; channelRes[i*3+1] = 8; channelRes[i*3+2] = 1;
      } else if (ch === 'keyboard') {
        gl.bindTexture(gl.TEXTURE_2D, ${c?"keyboardTex":"blackTex"});
        channelRes[i*3] = 256; channelRes[i*3+1] = 3; channelRes[i*3+2] = 1;
      } else if (ch === 'black') {
        gl.bindTexture(gl.TEXTURE_2D, blackTex);
      } else if (ch.startsWith('buffer:')) {
        const srcPass = findPass(ch.slice(7));
        gl.bindTexture(gl.TEXTURE_2D, srcPass ? srcPass.previousTexture : blackTex);
        channelRes[i*3] = width; channelRes[i*3+1] = height; channelRes[i*3+2] = 1;
      } else if (ch.startsWith('script:')) {
        const stex = scriptTextures?.get(ch.slice(7));
        gl.bindTexture(gl.TEXTURE_2D, stex ? stex.texture : blackTex);
        if (stex) { channelRes[i*3] = stex.width; channelRes[i*3+1] = stex.height; channelRes[i*3+2] = 1; }
      } else {
        gl.bindTexture(gl.TEXTURE_2D, blackTex);
      }
      gl.uniform1i(pass.uniforms.iChannel[i], i);
    });

    if (pass.uniforms.iChannelResolution) {
      gl.uniform3fv(pass.uniforms.iChannelResolution, channelRes);
    }

    gl.drawArrays(gl.TRIANGLES, 0, 3);

    // Swap textures
    const temp = pass.currentTexture;
    pass.currentTexture = pass.previousTexture;
    pass.previousTexture = temp;
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, pass.currentTexture, 0);
  });

  // Blit Image pass to screen
  const imagePass = findPass('Image');
  if (imagePass) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, imagePass.framebuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, imagePass.previousTexture, 0);
    gl.bindFramebuffer(gl.READ_FRAMEBUFFER, imagePass.framebuffer);
    gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, null);
    gl.blitFramebuffer(0, 0, width, height, 0, 0, width, height, gl.COLOR_BUFFER_BIT, gl.NEAREST);
    gl.bindFramebuffer(gl.FRAMEBUFFER, imagePass.framebuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, imagePass.currentTexture, 0);
  }

  frame++;
}

requestAnimationFrame(render);
  <\/script>
</body>
</html>`}class xi{constructor(e,t,i){this.isRecording=!1,this.mediaRecorder=null,this.recordedChunks=[],this.recordingIndicator=null,this.canvas=e,this.container=t,this.projectRoot=i}toggle(e,t){this.isRecording?this.stop():this.start(e,t)}start(e,t){if(!MediaRecorder.isTypeSupported("video/webm")){console.error("WebM recording not supported in this browser");return}e&&t();const i=this.canvas.captureStream(60);this.mediaRecorder=new MediaRecorder(i,{mimeType:"video/webm;codecs=vp9",videoBitsPerSecond:8e6}),this.recordedChunks=[],this.mediaRecorder.ondataavailable=o=>{o.data.size>0&&this.recordedChunks.push(o.data)},this.mediaRecorder.onstop=()=>{const o=new Blob(this.recordedChunks,{type:"video/webm"}),r=this.projectRoot.split("/").pop()||"shader",s=new Date,a=s.getFullYear().toString()+(s.getMonth()+1).toString().padStart(2,"0")+s.getDate().toString().padStart(2,"0")+"-"+s.getHours().toString().padStart(2,"0")+s.getMinutes().toString().padStart(2,"0")+s.getSeconds().toString().padStart(2,"0"),c=`shadertoy-${r}-${a}.webm`,l=URL.createObjectURL(o),u=document.createElement("a");u.href=l,u.download=c,u.click(),URL.revokeObjectURL(l),console.log(`Recording saved: ${c}`)},this.mediaRecorder.start(),this.isRecording=!0,this.showRecordingIndicator(),console.log("Recording started")}stop(){this.mediaRecorder&&this.mediaRecorder.state!=="inactive"&&this.mediaRecorder.stop(),this.isRecording=!1,this.mediaRecorder=null,this.hideRecordingIndicator(),console.log("Recording stopped")}dispose(){this.isRecording&&this.stop(),this.hideRecordingIndicator()}showRecordingIndicator(){this.recordingIndicator||(this.recordingIndicator=document.createElement("div"),this.recordingIndicator.className="recording-indicator",this.recordingIndicator.innerHTML=`
      <span class="recording-dot"></span>
      <span class="recording-text">REC</span>
    `,this.container.appendChild(this.recordingIndicator))}hideRecordingIndicator(){this.recordingIndicator&&(this.recordingIndicator.remove(),this.recordingIndicator=null)}}class wi{constructor(e){this.frameCount=0,this.totalFrameCount=0,this.lastFpsUpdate=0,this.currentFps=0,this.isStatsOpen=!1,this.container=e,this.statsContainer=document.createElement("div"),this.statsContainer.className="stats-container",this.fpsDisplay=document.createElement("button"),this.fpsDisplay.className="fps-counter",this.fpsDisplay.textContent="0 FPS",this.fpsDisplay.title="Click to show stats",this.fpsDisplay.addEventListener("click",()=>this.toggle()),this.statsGrid=document.createElement("div"),this.statsGrid.className="stats-grid",this.timeDisplay=document.createElement("div"),this.timeDisplay.className="stat-item",this.timeDisplay.innerHTML='<span class="stat-value">0:00</span><span class="stat-label">time</span>',this.statsGrid.appendChild(this.timeDisplay),this.frameDisplay=document.createElement("div"),this.frameDisplay.className="stat-item",this.frameDisplay.innerHTML='<span class="stat-value">0</span><span class="stat-label">frame</span>',this.statsGrid.appendChild(this.frameDisplay),this.resolutionDisplay=document.createElement("div"),this.resolutionDisplay.className="stat-item",this.resolutionDisplay.innerHTML='<span class="stat-value">0×0</span><span class="stat-label">res</span>',this.statsGrid.appendChild(this.resolutionDisplay),this.statsContainer.appendChild(this.statsGrid),this.statsContainer.appendChild(this.fpsDisplay),this.container.appendChild(this.statsContainer)}update(e,t){this.frameCount++,this.totalFrameCount++,this.isStatsOpen&&this.updateFrameDisplay(),e-this.lastFpsUpdate>=1&&(this.currentFps=this.frameCount/(e-this.lastFpsUpdate),this.fpsDisplay.textContent=`${Math.round(this.currentFps)} FPS`,this.frameCount=0,this.lastFpsUpdate=e,this.isStatsOpen&&(this.updateTimeDisplay(t),this.updateResolutionDisplay()))}reset(){this.frameCount=0,this.totalFrameCount=0,this.lastFpsUpdate=0,this.isStatsOpen&&(this.updateTimeDisplay(0),this.updateFrameDisplay(),this.updateResolutionDisplay())}updateResolution(e,t){this.resolutionDisplay.querySelector(".stat-value").textContent=`${e}×${t}`}dispose(){this.statsContainer.remove()}toggle(){this.isStatsOpen=!this.isStatsOpen,this.statsGrid.classList.toggle("open",this.isStatsOpen),this.statsContainer.classList.toggle("open",this.isStatsOpen),this.isStatsOpen&&(this.updateFrameDisplay(),this.updateResolutionDisplay())}updateFrameDisplay(){let e;this.totalFrameCount>=1e6?e=(this.totalFrameCount/1e6).toFixed(1)+"M":this.totalFrameCount>=1e3?e=(this.totalFrameCount/1e3).toFixed(1)+"K":e=this.totalFrameCount.toString(),this.frameDisplay.querySelector(".stat-value").textContent=e}updateTimeDisplay(e){const t=Math.floor(e),i=Math.floor(t/3600),o=Math.floor(t%3600/60),r=t%60;let s;i>0?s=`${i}:${o.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`:s=`${o}:${r.toString().padStart(2,"0")}`,this.timeDisplay.querySelector(".stat-value").textContent=s}updateResolutionDisplay(){this.resolutionDisplay.querySelector(".stat-value").textContent||(this.resolutionDisplay.querySelector(".stat-value").textContent="0×0")}}const Z={};for(let n=0;n<26;n++)Z[`Key${String.fromCharCode(65+n)}`]=65+n;for(let n=0;n<10;n++)Z[`Digit${n}`]=48+n;for(let n=1;n<=12;n++)Z[`F${n}`]=111+n;Object.assign(Z,{Backspace:8,Tab:9,Enter:13,ShiftLeft:16,ShiftRight:16,ControlLeft:17,ControlRight:17,AltLeft:18,AltRight:18,Pause:19,CapsLock:20,Escape:27,Space:32,PageUp:33,PageDown:34,End:35,Home:36,ArrowLeft:37,ArrowUp:38,ArrowRight:39,ArrowDown:40,Insert:45,Delete:46,NumLock:144,ScrollLock:145,Semicolon:186,Equal:187,Comma:188,Minus:189,Period:190,Slash:191,Backquote:192,BracketLeft:219,Backslash:220,BracketRight:221,Quote:222});function Ge(n){const e=Z[n.code];return e!==void 0&&e>=0&&e<256?e:null}class Ci{constructor(e,t){this.mouse=[0,0,0,0],this.isMouseDown=!1,this.touchState={count:0,touches:[[0,0,0,0],[0,0,0,0],[0,0,0,0]],pinch:1,pinchDelta:0,pinchCenter:[0,0]},this.onFirstGesture=null,this.activePointers=new Map,this.gestureTriggered=!1,this.keyEvents=[],this.canvas=e,this.pixelRatio=t,this.setupMouseTracking(),this.setupTouchTracking(),this.keydownHandler=i=>{const o=Ge(i);o!==null&&this.keyEvents.push({keycode:o,down:!0})},this.keyupHandler=i=>{const o=Ge(i);o!==null&&this.keyEvents.push({keycode:o,down:!1})},document.addEventListener("keydown",this.keydownHandler),document.addEventListener("keyup",this.keyupHandler)}getAndClearKeyEvents(){const e=this.keyEvents;return this.keyEvents=[],e}dispose(){document.removeEventListener("keydown",this.keydownHandler),document.removeEventListener("keyup",this.keyupHandler)}triggerGesture(){var e;this.gestureTriggered||(this.gestureTriggered=!0,(e=this.onFirstGesture)==null||e.call(this))}setupMouseTracking(){const e=t=>{const i=this.canvas.getBoundingClientRect(),o=(t.clientX-i.left)*this.pixelRatio,r=(i.height-(t.clientY-i.top))*this.pixelRatio;return[o,r]};this.canvas.addEventListener("mousedown",t=>{const[i,o]=e(t);this.isMouseDown=!0,this.mouse[0]=i,this.mouse[1]=o,this.mouse[2]=i,this.mouse[3]=o,this.triggerGesture()}),this.canvas.addEventListener("mousemove",t=>{if(!this.isMouseDown)return;const[i,o]=e(t);this.mouse[0]=i,this.mouse[1]=o}),this.canvas.addEventListener("mouseup",()=>{this.isMouseDown=!1,this.mouse[2]=-Math.abs(this.mouse[2]),this.mouse[3]=-Math.abs(this.mouse[3])})}setupTouchTracking(){this.canvas.style.touchAction="none";const e=(s,a)=>{const c=this.canvas.getBoundingClientRect(),l=(s-c.left)*this.pixelRatio,u=(c.height-(a-c.top))*this.pixelRatio;return[l,u]},t=s=>{if(s.pointerType==="mouse")return;const[a,c]=e(s.clientX,s.clientY);this.activePointers.set(s.pointerId,{id:s.pointerId,x:a,y:c,startX:a,startY:c}),this.canvas.setPointerCapture(s.pointerId),this.updateTouchState(),this.activePointers.size===1&&(this.isMouseDown=!0,this.mouse[0]=a,this.mouse[1]=c,this.mouse[2]=a,this.mouse[3]=c),s.preventDefault()},i=s=>{if(s.pointerType==="mouse")return;const a=this.activePointers.get(s.pointerId);if(!a)return;const[c,l]=e(s.clientX,s.clientY);a.x=c,a.y=l,this.updateTouchState(),this.activePointers.size===1&&(this.mouse[0]=c,this.mouse[1]=l),s.preventDefault()},o=s=>{s.pointerType!=="mouse"&&(this.activePointers.delete(s.pointerId),this.canvas.releasePointerCapture(s.pointerId),this.activePointers.size===0&&(this.isMouseDown=!1,this.mouse[2]=-Math.abs(this.mouse[2]),this.mouse[3]=-Math.abs(this.mouse[3])),this.updateTouchState(),s.preventDefault())},r=s=>{o(s)};this.canvas.addEventListener("pointerdown",t),this.canvas.addEventListener("pointermove",i),this.canvas.addEventListener("pointerup",o),this.canvas.addEventListener("pointercancel",r)}updateTouchState(){const e=Array.from(this.activePointers.values()),t=e.length;this.touchState.count=t;for(let i=0;i<3;i++)if(i<e.length){const o=e[i];this.touchState.touches[i]=[o.x,o.y,o.startX,o.startY]}else this.touchState.touches[i]=[0,0,0,0];if(t>=2){const i=e[0],o=e[1],r=o.x-i.x,s=o.y-i.y,a=Math.sqrt(r*r+s*s),c=o.startX-i.startX,l=o.startY-i.startY,u=Math.sqrt(c*c+l*l);if(u>0){const d=a/u;this.touchState.pinchDelta=d-this.touchState.pinch,this.touchState.pinch=d}this.touchState.pinchCenter=[(i.x+o.x)/2,(i.y+o.y)/2]}else this.touchState.pinchDelta=0,t===0&&(this.touchState.pinch=1,this.touchState.pinchCenter=[0,0])}}class Ri{constructor(e,t){this.isMenuOpen=!1,this.container=e,this.controlsContainer=document.createElement("div"),this.controlsContainer.className="playback-controls",this.menuButton=document.createElement("button"),this.menuButton.className="controls-menu-button",this.menuButton.title="Controls",this.menuButton.textContent="+",this.menuButton.addEventListener("click",()=>this.toggleMenu()),this.controlsGrid=document.createElement("div"),this.controlsGrid.className="controls-grid",this.playPauseButton=document.createElement("button"),this.playPauseButton.className="control-button",this.playPauseButton.title="Play/Pause (Space)",this.playPauseButton.innerHTML=`
      <svg viewBox="0 0 16 16">
        <path d="M5 3h2v10H5V3zm4 0h2v10H9V3z"/>
      </svg>
    `,this.playPauseButton.addEventListener("click",()=>t.onTogglePlayPause());const i=document.createElement("button");i.className="control-button",i.title="Reset (R)",i.innerHTML=`
      <svg viewBox="0 0 16 16">
        <path d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
      </svg>
    `,i.addEventListener("click",()=>t.onReset());const o=document.createElement("button");o.className="control-button",o.title="Screenshot (S)",o.innerHTML=`
      <svg viewBox="0 0 16 16">
        <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
        <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
      </svg>
    `,o.addEventListener("click",()=>t.onScreenshot());const r=document.createElement("button");r.className="control-button",r.title="Record Video",r.innerHTML=`
      <svg viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="5"/>
      </svg>
    `,r.addEventListener("click",()=>t.onToggleRecording());const s=document.createElement("button");s.className="control-button",s.title="Export HTML",s.innerHTML=`
      <svg viewBox="0 0 16 16">
        <path d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
        <path d="M2 14.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
      </svg>
    `,s.addEventListener("click",()=>t.onExportHTML());const a=document.createElement("button");a.className="control-button",a.title="Render",a.innerHTML=`
      <svg viewBox="0 0 16 16">
        <path d="M2 3h12v2H2V3zm0 4h12v2H2V7zm0 4h12v2H2v-2z"/>
      </svg>
    `,a.addEventListener("click",()=>t.onRender());const c=document.createElement("button");c.className="control-button",c.title="Close",c.textContent="−",c.style.fontSize="20px",c.style.fontWeight="300",c.addEventListener("click",()=>this.toggleMenu()),this.controlsGrid.appendChild(this.playPauseButton),this.controlsGrid.appendChild(i),this.controlsGrid.appendChild(s),this.controlsGrid.appendChild(a),this.controlsGrid.appendChild(o),this.controlsGrid.appendChild(r);const l=document.createElement("div");this.controlsGrid.appendChild(l),this.controlsGrid.appendChild(c),this.controlsContainer.appendChild(this.controlsGrid),this.controlsContainer.appendChild(this.menuButton),this.container.appendChild(this.controlsContainer)}setPaused(e){e?this.playPauseButton.innerHTML=`
        <svg viewBox="0 0 16 16">
          <path d="M4 3v10l8-5-8-5z"/>
        </svg>
      `:this.playPauseButton.innerHTML=`
        <svg viewBox="0 0 16 16">
          <path d="M5 3h2v10H5V3zm4 0h2v10H9V3z"/>
        </svg>
      `}dispose(){this.controlsContainer.remove()}toggleMenu(){this.isMenuOpen=!this.isMenuOpen,this.menuButton.textContent=this.isMenuOpen?"−":"+",this.controlsGrid.classList.toggle("open",this.isMenuOpen),this.controlsContainer.classList.toggle("open",this.isMenuOpen)}}class Si{constructor(e,t,i,o){this.parentContainer=e,this.canvasWidth=t,this.canvasHeight=i,this.onStartRender=o,this.cancelRenderFn=null,this.backdrop=document.createElement("div"),this.backdrop.className="render-dialog-backdrop",this.backdrop.addEventListener("click",x=>{x.target===this.backdrop&&this.close()});const r=document.createElement("div");r.className="render-dialog";const s=document.createElement("div");s.className="render-dialog-header",s.innerHTML=`
      <div class="render-dialog-title">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
          <path d="M2 14.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
        </svg>
        Render
      </div>
    `;const a=document.createElement("button");a.className="render-dialog-close",a.textContent="×",a.addEventListener("click",()=>this.close()),s.appendChild(a),this.bodyEl=document.createElement("div"),this.bodyEl.className="render-dialog-body";const c=this.createField("Resolution"),l=document.createElement("div");l.className="render-field-row",this.widthInput=this.createNumberInput(t,1,7680),this.heightInput=this.createNumberInput(i,1,4320);const u=document.createElement("span");u.textContent="×",l.appendChild(this.widthInput),l.appendChild(u),l.appendChild(this.heightInput),c.appendChild(l);const d=this.createField("FPS");this.fpsInput=this.createNumberInput(60,1,120),d.appendChild(this.fpsInput);const p=this.createField("Duration (seconds)");this.durationInput=this.createNumberInput(10,1,3600),p.appendChild(this.durationInput);const _=this.createField("Format"),b=document.createElement("div");b.className="render-format-group",this.formatFrames=document.createElement("input"),this.formatFrames.type="radio",this.formatFrames.name="render-format",this.formatFrames.id="render-fmt-frames",this.formatFrames.value="frames",this.formatVideo=document.createElement("input"),this.formatVideo.type="radio",this.formatVideo.name="render-format",this.formatVideo.id="render-fmt-video",this.formatVideo.value="video",this.formatVideo.checked=!0;const E=document.createElement("div");E.className="render-format-option";const T=document.createElement("label");T.htmlFor="render-fmt-frames",T.textContent="PNG Frames",E.appendChild(this.formatFrames),E.appendChild(T);const C=document.createElement("div");C.className="render-format-option";const m=document.createElement("label");m.htmlFor="render-fmt-video",m.textContent="Video (WebM)",C.appendChild(this.formatVideo),C.appendChild(m),b.appendChild(C),b.appendChild(E),_.appendChild(b),this.estimateEl=document.createElement("div"),this.estimateEl.className="render-estimate",this.bodyEl.appendChild(c),this.bodyEl.appendChild(d),this.bodyEl.appendChild(p),this.bodyEl.appendChild(_),this.bodyEl.appendChild(this.estimateEl),this.actionsEl=document.createElement("div"),this.actionsEl.className="render-dialog-actions";const h=document.createElement("button");h.className="render-btn render-btn-cancel",h.textContent="Cancel",h.addEventListener("click",()=>this.close());const g=document.createElement("button");g.className="render-btn render-btn-primary",g.textContent="Start Render",g.addEventListener("click",()=>this.startRender()),this.actionsEl.appendChild(h),this.actionsEl.appendChild(g),this.progressEl=document.createElement("div"),this.progressEl.className="render-progress",this.progressEl.innerHTML=`
      <div class="render-progress-bar-bg"><div class="render-progress-bar"></div></div>
      <div class="render-progress-text">Preparing...</div>
    `,this.progressBar=this.progressEl.querySelector(".render-progress-bar"),this.progressText=this.progressEl.querySelector(".render-progress-text");const f=document.createElement("button");f.className="render-btn render-btn-cancel",f.textContent="Cancel Render",f.style.marginTop="4px",f.addEventListener("click",()=>this.cancelRender()),this.progressEl.appendChild(f),r.appendChild(s),r.appendChild(this.bodyEl),r.appendChild(this.actionsEl),r.appendChild(this.progressEl),this.backdrop.appendChild(r);const v=()=>this.updateEstimate();this.widthInput.addEventListener("input",v),this.heightInput.addEventListener("input",v),this.fpsInput.addEventListener("input",v),this.durationInput.addEventListener("input",v),this.formatFrames.addEventListener("change",v),this.formatVideo.addEventListener("change",v),this.updateEstimate()}open(){this.parentContainer.appendChild(this.backdrop)}close(){var e;(e=this.cancelRenderFn)==null||e.call(this),this.cancelRenderFn=null,this.backdrop.remove()}createField(e){const t=document.createElement("div");t.className="render-field";const i=document.createElement("div");return i.className="render-field-label",i.textContent=e,t.appendChild(i),t}createNumberInput(e,t,i){const o=document.createElement("input");return o.type="number",o.className="render-input",o.value=String(Math.round(e)),o.min=String(t),o.max=String(i),o}updateEstimate(){const e=parseInt(this.widthInput.value)||0,t=parseInt(this.heightInput.value)||0,i=parseInt(this.fpsInput.value)||0,o=parseFloat(this.durationInput.value)||0,r=Math.ceil(i*o);if(this.formatFrames.checked){const a=e*t*4/1048576*r;this.estimateEl.textContent=`${r} frames, ~${a<1024?Math.round(a)+" MB":(a/1024).toFixed(1)+" GB"} raw`}else this.estimateEl.textContent=`${r} frames, ${o}s at ${i} fps`}startRender(){const e=parseInt(this.widthInput.value)||this.canvasWidth,t=parseInt(this.heightInput.value)||this.canvasHeight,i=parseInt(this.fpsInput.value)||60,o=parseFloat(this.durationInput.value)||10,r=this.formatFrames.checked?"frames":"video";this.bodyEl.style.display="none",this.actionsEl.style.display="none",this.progressEl.classList.add("active"),this.progressBar.style.width="0%",this.progressText.textContent="Preparing...",this.cancelRenderFn=this.onStartRender({width:e,height:t,fps:i,duration:o,format:r,onProgress:(s,a)=>{const c=s/a*100;this.progressBar.style.width=`${c}%`,this.progressText.textContent=`Frame ${s} / ${a} (${Math.round(c)}%)`},onComplete:()=>{this.progressText.textContent="Done!",this.progressBar.style.width="100%",setTimeout(()=>this.close(),1500)},onError:s=>{this.progressText.textContent=`Error: ${s.message}`,this.progressBar.style.background="#c62828"}})}cancelRender(){var e;(e=this.cancelRenderFn)==null||e.call(this),this.cancelRenderFn=null,this.bodyEl.style.display="",this.actionsEl.style.display="",this.progressEl.classList.remove("active")}}class F{constructor(e){var i;this.animationId=null,this.startTime=0,this.disposed=!1,this.playbackControls=null,this.isPaused=!1,this.mediaBanner=null,this._resizeDebounceTimer=null,this.isVisible=!0,this.contextLostOverlay=null,this.isContextLost=!1,this.uniformsPanel=null,this.scriptAPI=null,this.scriptErrorCount=0,this._lastOnFrameTime=null,this.mediaInitialized=!1,this.globalKeyHandler=null,this.controlsKeyHandler=null,this._externalAnimationLoop=!1,this.overlays=new Map,this.animate=o=>{var a;if(this.disposed||(this.animationId=requestAnimationFrame(this.animate),this.isPaused||!this.isVisible||this.isContextLost))return;const r=o/1e3,s=r-this.startTime;this.statsPanel.update(r,s);for(const c of this.input.getAndClearKeyEvents())this.engine.updateKeyState(c.keycode,c.down);if(this.engine.updateKeyboardTexture(),this.engine.updateAudioTexture(),this.engine.updateVideoTextures(),this.scriptAPI&&((a=this.project.script)!=null&&a.onFrame)&&this.scriptErrorCount<F.MAX_SCRIPT_ERRORS){const c=this._lastOnFrameTime!==null?s-this._lastOnFrameTime:0;try{this.project.script.onFrame(this.scriptAPI,s,c,this.statsPanel.totalFrameCount),this.scriptErrorCount=0}catch(l){this.scriptErrorCount++,console.error(`script.js onFrame() threw (${this.scriptErrorCount}/${F.MAX_SCRIPT_ERRORS}):`,l),this.runtimeErrorOverlay.showError("onFrame",l),this.scriptErrorCount>=F.MAX_SCRIPT_ERRORS&&(console.warn("script.js onFrame() disabled after too many errors"),this.runtimeErrorOverlay.showDisabled())}this._lastOnFrameTime=s}this.engine.step(s,this.input.mouse,this.input.isMouseDown,{count:this.input.touchState.count,touches:this.input.touchState.touches,pinch:this.input.touchState.pinch,pinchDelta:this.input.touchState.pinchDelta,pinchCenter:this.input.touchState.pinchCenter}),this.input.touchState.pinchDelta=0,this.presentToScreen()},this.container=e.container,this.project=e.project,this.pixelRatio=e.pixelRatio??e.project.pixelRatio??window.devicePixelRatio,this.canvas=document.createElement("canvas"),this.canvas.style.width="100%",this.canvas.style.height="100%",this.canvas.style.display="block",this.container.appendChild(this.canvas),this.recorder=new xi(this.canvas,this.container,e.project.root),this.errorOverlay=new pi(this.container),this.runtimeErrorOverlay=new X(this.container),this.statsPanel=new wi(this.container),e.project.controls&&!e.skipPlaybackControls&&(this.playbackControls=new Ri(this.container,{onTogglePlayPause:()=>this.togglePlayPause(),onReset:()=>this.reset(),onScreenshot:()=>this.screenshot(),onToggleRecording:()=>this.toggleRecording(),onExportHTML:()=>this.exportHTML(),onRender:()=>this.openRenderDialog()})),e.project.startPaused&&(this.isPaused=!0,(i=this.playbackControls)==null||i.setPaused(!0));const t=this.canvas.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});if(!t)throw new Error("WebGL2 not supported");if(this.gl=t,this.setupContextLossHandling(),this.updateCanvasSize(),this.statsPanel.updateResolution(this.canvas.width,this.canvas.height),this._externalAnimationLoop=e.externalAnimationLoop??!1,this._viewNames=e.viewNames,this.engine=new He({gl:this.gl,project:e.project,viewNames:e.viewNames,onAssetError:o=>{const r=o.type==="texture"?`Texture '${o.name}' failed to load`:`Framebuffer '${o.name}' error`;this.runtimeErrorOverlay.showWarning(r,o.detail)}}),this.engine.hasErrors()&&this.errorOverlay.show(this.engine.getCompilationErrors(),this.project),(this.engine.needsAudio||this.engine.needsWebcam)&&this.showMediaBanner(),this.project.script){const o=this;if(this.scriptAPI={setUniformValue:(r,s)=>o.engine.setUniformValue(r,s),getUniformValue:r=>o.engine.getUniformValue(r),updateTexture:(r,s,a,c)=>o.engine.updateTexture(r,s,a,c),readPixels:(r,s,a,c,l)=>o.engine.readPixels(r,s,a,c,l),get width(){return o.engine.width},get height(){return o.engine.height},setOverlay:(r,s)=>o.setOverlay(r,s)},this.project.script.setup)try{this.project.script.setup(this.scriptAPI)}catch(r){console.error("script.js setup() threw:",r),this.runtimeErrorOverlay.showError("setup",r)}}!e.skipUniformsPanel&&e.project.uniforms&&Object.values(e.project.uniforms).some(o=>Pe(o))&&(this.uniformsPanel=new yi({container:this.container,uniforms:e.project.uniforms,onChange:(o,r)=>{this.engine.setUniformValue(o,r)}})),this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasSize(),this._resizeDebounceTimer!==null&&clearTimeout(this._resizeDebounceTimer),this._resizeDebounceTimer=setTimeout(()=>{this._resizeDebounceTimer=null,this.engine.resize(this.canvas.width,this.canvas.height),this.statsPanel.updateResolution(this.canvas.width,this.canvas.height),this.startTime=performance.now()/1e3,this.engine.reset()},150)}),this.resizeObserver.observe(this.container),this.intersectionObserver=new IntersectionObserver(o=>{const r=o[0];this.isVisible=r.isIntersecting},{threshold:.1}),this.intersectionObserver.observe(this.container),this.input=new Ci(this.canvas,this.pixelRatio),this.input.onFirstGesture=()=>this.initMediaOnGesture(),this.initVideoFiles(),this.setupGlobalShortcuts(),e.project.controls&&this.setupKeyboardShortcuts()}initMediaOnGesture(){this.mediaInitialized||(this.mediaInitialized=!0,this.hideMediaBanner(),this.engine.needsAudio&&this.engine.initAudio(),this.engine.needsWebcam&&this.engine.initWebcam())}initVideoFiles(){for(const e of this.engine.videoSources)this.engine.initVideo(e)}hasErrors(){return this.engine.hasErrors()}getEngine(){return this.engine}start(){this._externalAnimationLoop||this.animationId===null&&(this.startTime=performance.now()/1e3,this.animate(this.startTime))}stop(){this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null)}getMouseState(){return[...this.input.mouse]}getResolution(){return[this.canvas.width,this.canvas.height,1]}getMousePressed(){return this.input.isMouseDown}stepExternal(e,t,i){var r;if(this.disposed||this.isContextLost)return;const o=performance.now()/1e3;this.statsPanel.update(o,e);for(const s of this.input.getAndClearKeyEvents())this.engine.updateKeyState(s.keycode,s.down);if(this.engine.updateKeyboardTexture(),this.engine.updateAudioTexture(),this.engine.updateVideoTextures(),this.scriptAPI&&((r=this.project.script)!=null&&r.onFrame)&&this.scriptErrorCount<F.MAX_SCRIPT_ERRORS){const s=this._lastOnFrameTime!==null?e-this._lastOnFrameTime:0;try{this.project.script.onFrame(this.scriptAPI,e,s,t),this.scriptErrorCount=0}catch(a){this.scriptErrorCount++,console.error(`script.js onFrame() threw (${this.scriptErrorCount}/${F.MAX_SCRIPT_ERRORS}):`,a),this.runtimeErrorOverlay.showError("onFrame",a),this.scriptErrorCount>=F.MAX_SCRIPT_ERRORS&&(console.warn("script.js onFrame() disabled after too many errors"),this.runtimeErrorOverlay.showDisabled())}this._lastOnFrameTime=e}this.engine.step(e,this.input.mouse,this.input.isMouseDown,{count:this.input.touchState.count,touches:this.input.touchState.touches,pinch:this.input.touchState.pinch,pinchDelta:this.input.touchState.pinchDelta,pinchCenter:this.input.touchState.pinchCenter},i),this.input.touchState.pinchDelta=0,this.presentToScreen()}setOverlay(e,t){let i=this.overlays.get(e);if(t===null){i&&i.classList.add("hidden");return}i||(i=document.createElement("div"),i.className=`script-overlay ${e}`,this.container.appendChild(i),this.overlays.set(e,i)),i.textContent=t,i.classList.remove("hidden")}dispose(){var e,t;this.disposed=!0,this.stop(),this.input.dispose(),this.recorder.dispose(),(e=this.playbackControls)==null||e.dispose(),this.resizeObserver.disconnect(),this._resizeDebounceTimer!==null&&clearTimeout(this._resizeDebounceTimer),this.intersectionObserver.disconnect(),this.globalKeyHandler&&document.removeEventListener("keydown",this.globalKeyHandler),this.controlsKeyHandler&&document.removeEventListener("keydown",this.controlsKeyHandler),(t=this.uniformsPanel)==null||t.destroy(),this.engine.dispose(),this.container.removeChild(this.canvas),this.statsPanel.dispose(),this.hideContextLostOverlay(),this.errorOverlay.hide(),this.runtimeErrorOverlay.dispose(),this.hideMediaBanner();for(const i of this.overlays.values())i.remove();this.overlays.clear()}presentToScreen(){const e=this.gl;if(!this.engine.bindImageForRead()){console.warn("No Image pass found");return}e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.blitFramebuffer(0,0,this.canvas.width,this.canvas.height,0,0,this.canvas.width,this.canvas.height,e.COLOR_BUFFER_BIT,e.NEAREST),this.engine.unbindImageForRead()}updateCanvasSize(){const e=this.container.getBoundingClientRect(),t=Math.floor(e.width*this.pixelRatio),i=Math.floor(e.height*this.pixelRatio);(this.canvas.width!==t||this.canvas.height!==i)&&(this.canvas.width=t,this.canvas.height=i)}static isTextInput(e){const t=e.target;if(!t)return!1;const i=t.tagName;return i==="INPUT"||i==="TEXTAREA"||t.isContentEditable}setupGlobalShortcuts(){this.globalKeyHandler=e=>{F.isTextInput(e)||e.code==="KeyS"&&!e.repeat&&(e.preventDefault(),this.screenshot())},document.addEventListener("keydown",this.globalKeyHandler)}setupKeyboardShortcuts(){this.controlsKeyHandler=e=>{F.isTextInput(e)||(e.code==="Space"&&!e.repeat&&(e.preventDefault(),this.togglePlayPause()),e.code==="KeyR"&&!e.repeat&&(e.preventDefault(),this.reset()))},document.addEventListener("keydown",this.controlsKeyHandler)}setupContextLossHandling(){this.canvas.addEventListener("webglcontextlost",e=>{e.preventDefault(),this.handleContextLost()}),this.canvas.addEventListener("webglcontextrestored",()=>{this.handleContextRestored()})}handleContextLost(){this.isContextLost=!0,this.stop(),this.showContextLostOverlay(),console.warn("WebGL context lost. Waiting for restoration...")}handleContextRestored(){var e;console.log("WebGL context restored. Reinitializing...");try{if(this.engine.dispose(),this.engine=new He({gl:this.gl,project:this.project,viewNames:this._viewNames,onAssetError:t=>{const i=t.type==="texture"?`Texture '${t.name}' failed to load`:`Framebuffer '${t.name}' error`;this.runtimeErrorOverlay.showWarning(i,t.detail)}}),this.engine.hasErrors()&&this.errorOverlay.show(this.engine.getCompilationErrors(),this.project),this.engine.resize(this.canvas.width,this.canvas.height),this.scriptAPI&&((e=this.project.script)!=null&&e.setup))try{this.project.script.setup(this.scriptAPI)}catch(t){console.error("script.js setup() threw during context restore:",t),this.runtimeErrorOverlay.showError("setup",t)}this.hideContextLostOverlay(),this.isContextLost=!1,this.reset(),this.start(),console.log("WebGL context successfully restored")}catch(t){console.error("Failed to restore WebGL context:",t),this.showContextLostOverlay(!0)}}showContextLostOverlay(e=!1){this.contextLostOverlay||(this.contextLostOverlay=document.createElement("div"),this.contextLostOverlay.className="context-lost-overlay",this.container.appendChild(this.contextLostOverlay)),e?this.contextLostOverlay.innerHTML=`
        <div class="context-lost-content">
          <div class="context-lost-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div class="context-lost-title">WebGL Context Lost</div>
          <div class="context-lost-message">Unable to restore automatically.</div>
          <button class="context-lost-reload" onclick="location.reload()">Reload Page</button>
        </div>
      `:this.contextLostOverlay.innerHTML=`
        <div class="context-lost-content">
          <div class="context-lost-spinner"></div>
          <div class="context-lost-title">WebGL Context Lost</div>
          <div class="context-lost-message">Attempting to restore...</div>
        </div>
      `}hideContextLostOverlay(){this.contextLostOverlay&&(this.contextLostOverlay.remove(),this.contextLostOverlay=null)}togglePlayPause(){var e;this.isPaused=!this.isPaused,(e=this.playbackControls)==null||e.setPaused(this.isPaused)}getPaused(){return this.isPaused}reset(){this.startTime=performance.now()/1e3,this._lastOnFrameTime=null,this.statsPanel.reset(),this.engine.reset()}screenshot(){const e=this.project.root.split("/").pop()||"shader",t=new Date,i=t.getFullYear().toString()+(t.getMonth()+1).toString().padStart(2,"0")+t.getDate().toString().padStart(2,"0")+"-"+t.getHours().toString().padStart(2,"0")+t.getMinutes().toString().padStart(2,"0")+t.getSeconds().toString().padStart(2,"0"),o=`shadertoy-${e}-${i}.png`;this.canvas.toBlob(r=>{if(!r){console.error("Failed to create screenshot blob");return}const s=URL.createObjectURL(r),a=document.createElement("a");a.href=s,a.download=o,a.click(),URL.revokeObjectURL(s),console.log(`Screenshot saved: ${o}`)},"image/png")}toggleRecording(){this.recorder.toggle(this.isPaused,()=>this.togglePlayPause())}exportHTML(){_i(this.project,this.engine)}openRenderDialog(){new Si(this.container,this.canvas.width,this.canvas.height,t=>this.renderOffline(t)).open()}renderOffline(e){let t=!1;const i=()=>{t=!0};return(async()=>{var c,l;const r=this.canvas.width,s=this.canvas.height,a=this.isPaused;try{this.isPaused=!0,this.canvas.width=e.width,this.canvas.height=e.height,this.engine.resize(e.width,e.height),this.engine.reset(),this.scriptAPI&&((c=this.project.script)!=null&&c.setup)&&this.project.script.setup(this.scriptAPI);const u=Math.ceil(e.fps*e.duration);e.format==="video"?await this.renderVideoFrames(u,e.fps,t,()=>t,e.onProgress):await this.renderPngFrames(u,e.fps,t,()=>t,e.onProgress),t||e.onComplete()}catch(u){t||e.onError(u instanceof Error?u:new Error(String(u)))}finally{if(this.canvas.width=r,this.canvas.height=s,this.engine.resize(r,s),this.engine.reset(),this.scriptAPI&&((l=this.project.script)!=null&&l.setup))try{this.project.script.setup(this.scriptAPI)}catch{}this.isPaused=a}})(),i}async renderPngFrames(e,t,i,o,r){let s=null;if("showDirectoryPicker"in window)try{s=await window.showDirectoryPicker({mode:"readwrite"})}catch{}for(let a=0;a<e;a++){if(o())return;this.stepForRender(a,t),this.presentToScreen();const c=await new Promise((u,d)=>{this.canvas.toBlob(p=>p?u(p):d(new Error("Failed to capture frame")),"image/png")}),l=`frame_${String(a).padStart(5,"0")}.png`;if(s){const d=await(await s.getFileHandle(l,{create:!0})).createWritable();await d.write(c),await d.close()}else{const u=URL.createObjectURL(c),d=document.createElement("a");d.href=u,d.download=l,d.click(),URL.revokeObjectURL(u)}r(a+1,e),a%10===0&&await new Promise(u=>setTimeout(u,0))}}async renderVideoFrames(e,t,i,o,r){const s=document.createElement("canvas");s.width=this.canvas.width,s.height=this.canvas.height;const a=s.getContext("2d"),c=s.captureStream(0),l=new MediaRecorder(c,{mimeType:"video/webm;codecs=vp9",videoBitsPerSecond:8e6}),u=[];l.ondataavailable=E=>{E.data.size>0&&u.push(E.data)};const d=new Promise(E=>{l.onstop=()=>E()});l.start();for(let E=0;E<e;E++){if(o()){l.stop(),await d;return}this.stepForRender(E,t),this.presentToScreen(),a.drawImage(this.canvas,0,0);const T=c.getVideoTracks()[0];T!=null&&T.requestFrame&&T.requestFrame(),r(E+1,e),E%10===0&&await new Promise(C=>setTimeout(C,0))}l.stop(),await d;const p=new Blob(u,{type:"video/webm"}),_=URL.createObjectURL(p),b=document.createElement("a");b.href=_,b.download=`render_${this.canvas.width}x${this.canvas.height}_${t}fps.webm`,b.click(),URL.revokeObjectURL(_)}stepForRender(e,t){var r;const i=e/t,o=1/t;if(this.scriptAPI&&((r=this.project.script)!=null&&r.onFrame))try{this.project.script.onFrame(this.scriptAPI,i,o,e)}catch{}this.engine.step(i,[0,0,0,0],!1)}showMediaBanner(){this.mediaBanner=document.createElement("div"),this.mediaBanner.className="media-permission-banner";const e=[];this.engine.needsAudio&&e.push("microphone"),this.engine.needsWebcam&&e.push("webcam"),this.mediaBanner.innerHTML=`
      <span class="media-banner-text">This shader uses ${e.join(" and ")}</span>
      <button class="media-banner-button">Click to enable</button>
    `,this.mediaBanner.querySelector(".media-banner-button").addEventListener("click",()=>{this.initMediaOnGesture()}),this.container.appendChild(this.mediaBanner)}hideMediaBanner(){this.mediaBanner&&(this.mediaBanner.remove(),this.mediaBanner=null)}}F.MAX_SCRIPT_ERRORS=10;class G{constructor(e){var t;this.apps=new Map,this.animationId=null,this.startTime=0,this.isPaused=!1,this.frame=0,this.pausedElapsedTime=0,this.script=null,this.scriptAPI=null,this.runtimeErrorOverlay=null,this.lastOnFrameTime=null,this.scriptErrorCount=0,this.animate=i=>{var a,c,l;if(this.animationId=requestAnimationFrame(this.animate),this.isPaused)return;const r=i/1e3-this.startTime,s=new Map;for(const[u,d]of this.apps)s.set(u,{mouse:d.getMouseState(),resolution:d.getResolution(),mousePressed:d.getMousePressed()});if((a=this.script)!=null&&a.onFrame&&this.scriptAPI&&this.scriptErrorCount<G.MAX_SCRIPT_ERRORS){const u=this.lastOnFrameTime!==null?r-this.lastOnFrameTime:0;try{this.script.onFrame(this.scriptAPI,r,u,this.frame),this.scriptErrorCount=0}catch(d){this.scriptErrorCount++,console.error(`script.js onFrame() threw (${this.scriptErrorCount}/${G.MAX_SCRIPT_ERRORS}):`,d),(c=this.runtimeErrorOverlay)==null||c.showError("onFrame",d),this.scriptErrorCount>=G.MAX_SCRIPT_ERRORS&&(console.warn("script.js onFrame() disabled after too many errors"),(l=this.runtimeErrorOverlay)==null||l.showDisabled())}this.lastOnFrameTime=r}for(const u of this.apps.values())u.stepExternal(r,this.frame,s);this.frame++},this.project=e.project,this.viewNames=e.project.views.map(i=>i.name);for(const i of e.project.views){const o=e.containers.get(i.name);if(!o)throw new Error(`No container provided for view "${i.name}"`);const r=this.createViewProject(i),s=new F({container:o,project:r,pixelRatio:e.pixelRatio??window.devicePixelRatio,skipUniformsPanel:!0,skipPlaybackControls:!0,externalAnimationLoop:!0,viewNames:this.viewNames});this.apps.set(i.name,s)}if(this.isPaused=e.project.startPaused,this.script=e.project.script,this.script){const i=e.containers.values().next().value;if(i&&(this.runtimeErrorOverlay=new X(i)),this.initScriptAPI(),this.script.setup&&this.scriptAPI)try{this.script.setup(this.scriptAPI)}catch(o){console.error("script.js setup() threw:",o),(t=this.runtimeErrorOverlay)==null||t.showError("setup",o)}}}initScriptAPI(){const e=this,t=this.apps.values().next().value;this.scriptAPI={setUniformValue:(i,o)=>e.setUniformValue(i,o),getUniformValue:i=>e.getUniformValue(i),updateTexture:(i,o,r,s)=>{var a;return(a=t==null?void 0:t.getEngine())==null?void 0:a.updateTexture(i,o,r,s)},readPixels:(i,o,r,s,a)=>{var c;return((c=t==null?void 0:t.getEngine())==null?void 0:c.readPixels(i,o,r,s,a))??new Uint8Array(s*a*4)},get width(){var i;return((i=t==null?void 0:t.getEngine())==null?void 0:i.width)??0},get height(){var i;return((i=t==null?void 0:t.getEngine())==null?void 0:i.height)??0},setOverlay:(i,o,r)=>{const s=r??e.viewNames[0],a=e.apps.get(s);a&&a.setOverlay(i,o)},getCrossViewState:i=>e.getCrossViewState(i),viewNames:e.viewNames}}createViewProject(e){return{mode:this.project.mode,root:this.project.root,meta:{...this.project.meta,title:`${this.project.meta.title} - ${e.name}`},layout:"fullscreen",theme:this.project.theme,controls:!1,startPaused:this.project.startPaused,pixelRatio:this.project.pixelRatio,commonSource:this.project.commonSource,passes:e.passes,textures:this.project.textures,uniforms:this.project.uniforms,script:null}}start(){this.animationId===null&&(this.startTime=performance.now()/1e3,this.animate(performance.now()))}stop(){this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null)}togglePlayPause(){this.isPaused?(this.startTime=performance.now()/1e3-this.pausedElapsedTime,this.animationId===null&&this.animate(performance.now())):this.pausedElapsedTime=performance.now()/1e3-this.startTime,this.isPaused=!this.isPaused}getPaused(){return this.isPaused}reset(){var e;this.frame=0,this.startTime=performance.now()/1e3,this.lastOnFrameTime=null;for(const t of this.apps.values())(e=t.getEngine())==null||e.reset()}setUniformValue(e,t){var i;for(const o of this.apps.values())(i=o.getEngine())==null||i.setUniformValue(e,t)}getUniformValue(e){var i;const t=this.apps.values().next().value;return(i=t==null?void 0:t.getEngine())==null?void 0:i.getUniformValue(e)}hasErrors(){for(const e of this.apps.values())if(e.hasErrors())return!0;return!1}getApps(){return this.apps}getCrossViewState(e){const t=this.apps.get(e);if(t)return{mouse:t.getMouseState(),resolution:t.getResolution(),mousePressed:t.getMousePressed()}}getViewNames(){return this.viewNames}getApp(e){return this.apps.get(e)}dispose(){var e;this.stop(),(e=this.runtimeErrorOverlay)==null||e.dispose();for(const t of this.apps.values())t.dispose();this.apps.clear()}}G.MAX_SCRIPT_ERRORS=10;class Li{constructor(e){this.panel=null,this.controls=null,this.isOpen=!1,this.isPaused=!1,this.wrapper=e.wrapper,this.appGroup=e.appGroup,this.isPaused=e.appGroup.getPaused(),this.controlsWrapper=document.createElement("div"),this.controlsWrapper.className="multi-view-controls-wrapper",this.toggleButton=document.createElement("button"),this.toggleButton.className="multi-view-controls-toggle",this.toggleButton.title="Toggle Controls",this.toggleButton.innerHTML=`
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="4" y1="21" x2="4" y2="14"></line>
        <line x1="4" y1="10" x2="4" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12" y2="3"></line>
        <line x1="20" y1="21" x2="20" y2="16"></line>
        <line x1="20" y1="12" x2="20" y2="3"></line>
        <line x1="1" y1="14" x2="7" y2="14"></line>
        <line x1="9" y1="8" x2="15" y2="8"></line>
        <line x1="17" y1="16" x2="23" y2="16"></line>
      </svg>
    `,this.toggleButton.addEventListener("click",()=>this.toggle()),this.controlsWrapper.appendChild(this.toggleButton),this.createPanel(e.uniforms),this.wrapper.appendChild(this.controlsWrapper)}createPanel(e){this.panel=document.createElement("div"),this.panel.className="multi-view-controls-panel";const t=document.createElement("div");t.className="multi-view-controls-header";const i=document.createElement("span");i.textContent="Controls",t.appendChild(i);const o=document.createElement("button");o.className="multi-view-controls-close",o.innerHTML="&times;",o.title="Close",o.addEventListener("click",()=>this.toggle()),t.appendChild(o),this.panel.appendChild(t);const r=document.createElement("div");r.className="controls-section playback-controls";const s=document.createElement("button");s.className="control-btn play-pause-btn",s.title="Play/Pause",this.updatePlayPauseIcon(s),s.addEventListener("click",()=>{this.appGroup.togglePlayPause(),this.isPaused=this.appGroup.getPaused(),this.updatePlayPauseIcon(s)}),r.appendChild(s);const a=document.createElement("button");if(a.className="control-btn reset-btn",a.title="Reset",a.innerHTML=`
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
        <path d="M3 3v5h5"></path>
      </svg>
    `,a.addEventListener("click",()=>{this.appGroup.reset()}),r.appendChild(a),this.panel.appendChild(r),e&&Object.values(e).some(c=>Pe(c))){const c=document.createElement("div");c.className="controls-section uniforms-section";const l=document.createElement("div");l.className="section-label",l.textContent="Uniforms",c.appendChild(l);const u=document.createElement("div");u.className="uniforms-container",this.controls=new Oe({container:u,uniforms:e,onChange:(d,p)=>{this.appGroup.setUniformValue(d,p)}}),c.appendChild(u),this.panel.appendChild(c)}this.panel.classList.add("closed"),this.controlsWrapper.appendChild(this.panel)}updatePlayPauseIcon(e){this.isPaused?e.innerHTML=`
        <svg viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      `:e.innerHTML=`
        <svg viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
      `}toggle(){var e,t;this.isOpen=!this.isOpen,this.isOpen?((e=this.panel)==null||e.classList.remove("closed"),this.toggleButton.classList.add("hidden")):((t=this.panel)==null||t.classList.add("closed"),this.toggleButton.classList.remove("hidden"))}dispose(){var e;(e=this.controls)==null||e.destroy(),this.wrapper.removeChild(this.controlsWrapper)}}class Pi{constructor(e){this.container=e.container,this.root=document.createElement("div"),this.root.className="layout-fullscreen",this.canvasContainer=document.createElement("div"),this.canvasContainer.className="canvas-container",this.root.appendChild(this.canvasContainer),this.container.appendChild(this.root)}getCanvasContainer(){return this.canvasContainer}dispose(){this.container.innerHTML=""}}class Ai{constructor(e){this.container=e.container,this.root=document.createElement("div"),this.root.className="layout-default",this.canvasContainer=document.createElement("div"),this.canvasContainer.className="canvas-container",this.root.appendChild(this.canvasContainer),this.container.appendChild(this.root)}getCanvasContainer(){return this.canvasContainer}dispose(){this.container.innerHTML=""}}class Oi{constructor(e){this.editorPanel=null,this.recompileHandler=null,this.container=e.container,this.project=e.project,this.root=document.createElement("div"),this.root.className="layout-split",this.canvasContainer=document.createElement("div"),this.canvasContainer.className="canvas-container",this.codePanel=document.createElement("div"),this.codePanel.className="code-panel",this.buildEditorPanel(),this.root.appendChild(this.canvasContainer),this.root.appendChild(this.codePanel),this.container.appendChild(this.root)}getCanvasContainer(){return this.canvasContainer}setRecompileHandler(e){this.recompileHandler=e,this.editorPanel&&this.editorPanel.setRecompileHandler(e)}setUniformHandler(e){}dispose(){this.editorPanel&&(this.editorPanel.dispose(),this.editorPanel=null),this.container.innerHTML=""}async buildEditorPanel(){try{const{EditorPanel:e}=await w(async()=>{const{EditorPanel:t}=await Promise.resolve().then(()=>ho);return{EditorPanel:t}},void 0);this.editorPanel=new e(this.codePanel,this.project),this.recompileHandler&&this.editorPanel.setRecompileHandler(this.recompileHandler)}catch(e){console.error("Failed to load editor panel:",e)}}}class Fi{constructor(e){this.editorInstance=null,this.recompileHandler=null,this.modifiedSources=new Map,this.tabs=[],this.activeTabIndex=0,this.container=e.container,this.project=e.project,this.root=document.createElement("div"),this.root.className="layout-tabbed";const t=document.createElement("div");t.className="tabbed-wrapper",this.contentArea=document.createElement("div"),this.contentArea.className="tabbed-content",this.canvasContainer=document.createElement("div"),this.canvasContainer.className="tabbed-canvas-container",this.imageViewer=document.createElement("div"),this.imageViewer.className="tabbed-image-viewer",this.imageViewer.style.visibility="hidden",this.contentArea.appendChild(this.canvasContainer),this.contentArea.appendChild(this.imageViewer),this.editorContainer=document.createElement("div"),this.editorContainer.className="tabbed-editor-container",this.editorContainer.style.visibility="hidden",this.contentArea.appendChild(this.editorContainer),this.buttonContainer=document.createElement("div"),this.buttonContainer.className="tabbed-button-container",this.buttonContainer.style.display="none",this.copyButton=document.createElement("button"),this.copyButton.className="tabbed-copy-button",this.copyButton.innerHTML=`
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2z" opacity="0.4"/>
        <path d="M2 5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H2zm0 1h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"/>
      </svg>
    `,this.copyButton.title="Copy code to clipboard",this.copyButton.addEventListener("click",()=>this.copyToClipboard()),this.buttonContainer.appendChild(this.copyButton),this.recompileButton=document.createElement("button"),this.recompileButton.className="tabbed-recompile-button",this.recompileButton.innerHTML=`
      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
        <path d="M4 3v10l8-5-8-5z"/>
      </svg>
      Recompile
    `,this.recompileButton.title="Recompile shader (Ctrl+Enter)",this.recompileButton.addEventListener("click",()=>this.recompile()),this.buttonContainer.appendChild(this.recompileButton),this.errorDisplay=document.createElement("div"),this.errorDisplay.className="tabbed-error-display",this.errorDisplay.style.display="none",this.contentArea.appendChild(this.errorDisplay),this.setupKeyboardShortcut();const i=this.buildTabBar();t.appendChild(i),t.appendChild(this.contentArea),this.root.appendChild(t),this.container.appendChild(this.root)}getCanvasContainer(){return this.canvasContainer}setRecompileHandler(e){this.recompileHandler=e}dispose(){this.editorInstance&&(this.editorInstance.destroy(),this.editorInstance=null),this.container.innerHTML=""}setupKeyboardShortcut(){document.addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey)&&e.key==="Enter"&&this.tabs[this.activeTabIndex].kind==="code"&&(e.preventDefault(),this.recompile())})}saveCurrentEditorContent(){if(this.editorInstance){const e=this.tabs[this.activeTabIndex];if(e.kind==="code"){const t=this.editorInstance.getSource();this.modifiedSources.set(e.passName,t)}}}recompile(){if(!this.recompileHandler){console.warn("No recompile handler set");return}this.saveCurrentEditorContent();const e=this.tabs[this.activeTabIndex];if(e.kind!=="code")return;const t=this.modifiedSources.get(e.passName)??e.source,i=this.recompileHandler(e.passName,t);i.success?(this.hideError(),e.source=t):this.showError(i.error||"Compilation failed")}showError(e){this.errorDisplay&&(this.errorDisplay.textContent=e,this.errorDisplay.style.display="block")}hideError(){this.errorDisplay&&(this.errorDisplay.style.display="none")}async copyToClipboard(){const e=this.tabs[this.activeTabIndex];if(e.kind!=="code")return;const t=this.editorInstance?this.editorInstance.getSource():this.modifiedSources.get(e.passName)??e.source;try{await navigator.clipboard.writeText(t);const i=this.copyButton.innerHTML;this.copyButton.innerHTML=`
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/>
        </svg>
      `,this.copyButton.classList.add("copied"),setTimeout(()=>{this.copyButton.innerHTML=i,this.copyButton.classList.remove("copied")},1500)}catch(i){console.error("Failed to copy:",i)}}buildTabBar(){const e=document.createElement("div");e.className="tabbed-toolbar";const t=document.createElement("div");t.className="tabbed-tab-bar",this.tabs=[],this.tabs.push({kind:"shader",name:"Shader"}),this.project.commonSource&&this.tabs.push({kind:"code",name:"common.glsl",passName:"common",source:this.project.commonSource});const i=["BufferA","BufferB","BufferC","BufferD"];for(const s of i){const a=this.project.passes[s];a&&this.tabs.push({kind:"code",name:`${s.toLowerCase()}.glsl`,passName:s,source:a.glslSource})}const o=this.project.passes.Image;this.tabs.push({kind:"code",name:"image.glsl",passName:"Image",source:o.glslSource});for(const s of this.project.textures)this.tabs.push({kind:"image",name:s.filename||s.name,url:s.source});const r=async s=>{this.saveCurrentEditorContent();const a=this.tabs[s];if(this.activeTabIndex=s,t.querySelectorAll(".tabbed-tab-button").forEach((c,l)=>{c.classList.toggle("active",l===s)}),this.canvasContainer.style.visibility="hidden",this.imageViewer.style.visibility="hidden",this.editorContainer.style.visibility="hidden",this.buttonContainer.style.display="none",this.editorInstance&&(this.editorInstance.destroy(),this.editorInstance=null),a.kind==="shader")this.canvasContainer.style.visibility="visible";else if(a.kind==="code"){this.editorContainer.style.visibility="visible",this.buttonContainer.style.display="flex";const c=this.modifiedSources.get(a.passName)??a.source;this.editorContainer.innerHTML="";try{const{createEditor:l}=await w(async()=>{const{createEditor:u}=await Promise.resolve().then(()=>Dt);return{createEditor:u}},void 0);this.editorInstance=l(this.editorContainer,c,u=>{this.modifiedSources.set(a.passName,u)})}catch(l){console.error("Failed to load editor:",l);const u=document.createElement("textarea");u.className="tabbed-fallback-textarea",u.value=c,u.addEventListener("input",()=>{this.modifiedSources.set(a.passName,u.value)}),this.editorContainer.appendChild(u)}}else{this.imageViewer.style.visibility="visible";const c=document.createElement("img");c.src=a.url,c.alt=a.name,this.imageViewer.innerHTML="",this.imageViewer.appendChild(c)}};return this.tabs.forEach((s,a)=>{const c=document.createElement("button");c.className="tabbed-tab-button",s.kind==="shader"?c.classList.add("shader-tab"):s.kind==="image"&&c.classList.add("image-tab"),c.textContent=s.name,a===0&&c.classList.add("active"),c.addEventListener("click",()=>r(a)),t.appendChild(c)}),e.appendChild(t),e.appendChild(this.buttonContainer),e}}class xe{constructor(e){this.uniformControls=null,this.playPauseButton=null,this.onPlayPause=null,this.onReset=null,this.onScreenshot=null,this.onUniformChange=null,this.container=e.container,this.project=e.project,this.root=document.createElement("div"),this.root.className="layout-ui",this.canvasContainer=document.createElement("div"),this.canvasContainer.className="ui-canvas-container",this.uiPanel=document.createElement("div"),this.uiPanel.className="ui-panel",this.uniformsContainer=document.createElement("div"),this.uniformsContainer.className="ui-uniforms-container",this.uiPanel.appendChild(this.uniformsContainer),this.playbackContainer=document.createElement("div"),this.playbackContainer.className="ui-playback-container",this.buildPlaybackControls(),this.uiPanel.appendChild(this.playbackContainer),this.loadUniformControls(),this.root.appendChild(this.canvasContainer),this.root.appendChild(this.uiPanel),this.container.appendChild(this.root)}getCanvasContainer(){return this.canvasContainer}setPlaybackCallbacks(e){this.onPlayPause=e.onPlayPause,this.onReset=e.onReset,this.onScreenshot=e.onScreenshot}setUniformCallback(e){this.onUniformChange=e}setPaused(e){this.playPauseButton&&(this.playPauseButton.innerHTML=e?'<svg viewBox="0 0 16 16"><path d="M4 3v10l8-5-8-5z"/></svg>':'<svg viewBox="0 0 16 16"><path d="M5 3h2v10H5V3zm4 0h2v10H9V3z"/></svg>',this.playPauseButton.title=e?"Play":"Pause")}dispose(){this.uniformControls&&(this.uniformControls.destroy(),this.uniformControls=null),this.container.innerHTML=""}buildPlaybackControls(){this.playPauseButton=document.createElement("button"),this.playPauseButton.className="ui-control-button",this.playPauseButton.title="Pause",this.playPauseButton.innerHTML='<svg viewBox="0 0 16 16"><path d="M5 3h2v10H5V3zm4 0h2v10H9V3z"/></svg>',this.playPauseButton.addEventListener("click",()=>{this.onPlayPause&&this.onPlayPause()});const e=document.createElement("button");e.className="ui-control-button",e.title="Reset",e.innerHTML='<svg viewBox="0 0 16 16"><path d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/><path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/></svg>',e.addEventListener("click",()=>{this.onReset&&this.onReset()});const t=document.createElement("button");t.className="ui-control-button",t.title="Screenshot",t.innerHTML='<svg viewBox="0 0 16 16"><path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/><path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/></svg>',t.addEventListener("click",()=>{this.onScreenshot&&this.onScreenshot()}),this.playbackContainer.appendChild(this.playPauseButton),this.playbackContainer.appendChild(e),this.playbackContainer.appendChild(t)}async loadUniformControls(){const e=this.project.uniforms;if(!e||Object.keys(e).length===0){const t=document.createElement("div");t.className="ui-empty-state",t.textContent="No uniforms",this.uniformsContainer.appendChild(t);return}try{const{UniformControls:t}=await w(async()=>{const{UniformControls:i}=await Promise.resolve().then(()=>bi);return{UniformControls:i}},void 0);this.uniformControls=new t({container:this.uniformsContainer,uniforms:e,onChange:(i,o)=>{this.onUniformChange&&this.onUniformChange(i,o)}})}catch(t){console.error("Failed to load uniform controls:",t),this.uniformsContainer.textContent="Failed to load controls"}}}class Xe{constructor(e){this.canvasContainers=new Map,this.container=e.container,this.wrapper=document.createElement("div"),this.wrapper.className="layout-multi-view layout-split-view";for(const o of e.viewNames){const r=document.createElement("div");r.className="multi-view-canvas",r.setAttribute("data-view-name",o);const s=document.createElement("div");s.className="multi-view-label",s.textContent=o,r.appendChild(s),this.canvasContainers.set(o,r),this.wrapper.appendChild(r)}this.container.appendChild(this.wrapper),this.resizeObserver=new ResizeObserver(o=>{for(const r of o){const{width:s,height:a}=r.contentRect,c=s>a;this.wrapper.classList.toggle("split-horizontal",c),this.wrapper.classList.toggle("split-vertical",!c)}}),this.resizeObserver.observe(this.wrapper);const t=this.wrapper.getBoundingClientRect(),i=t.width>t.height;this.wrapper.classList.add(i?"split-horizontal":"split-vertical")}getCanvasContainers(){return this.canvasContainers}getWrapperElement(){return this.wrapper}dispose(){this.resizeObserver.disconnect(),this.container.innerHTML=""}}class Mi{constructor(e){this.canvasContainers=new Map,this.container=e.container,this.wrapper=document.createElement("div"),this.wrapper.className="layout-multi-view layout-quad-view";for(const t of e.viewNames){const i=document.createElement("div");i.className="multi-view-canvas",i.setAttribute("data-view-name",t),this.canvasContainers.set(t,i),this.wrapper.appendChild(i)}this.container.appendChild(this.wrapper)}getCanvasContainers(){return this.canvasContainers}getWrapperElement(){return this.wrapper}dispose(){this.container.innerHTML=""}}class Di{constructor(e){if(this.canvasContainers=new Map,this.insetContainer=null,this.minimizeBtn=null,this.isMinimized=!1,this.toggleMinimize=()=>{this.isMinimized=!this.isMinimized,this.insetContainer&&this.insetContainer.classList.toggle("minimized",this.isMinimized),this.minimizeBtn&&(this.isMinimized?(this.minimizeBtn.innerHTML="&#x25A1;",this.minimizeBtn.title="Restore",this.minimizeBtn.style.display="none"):(this.minimizeBtn.innerHTML="&#x2212;",this.minimizeBtn.title="Minimize",this.minimizeBtn.style.display=""))},this.container=e.container,e.viewNames.length<2)throw new Error("InsetViewLayout requires at least 2 views");this.wrapper=document.createElement("div"),this.wrapper.className="layout-multi-view layout-inset-view";const t=e.viewNames[0],i=document.createElement("div");i.className="multi-view-canvas inset-main",i.setAttribute("data-view-name",t),this.canvasContainers.set(t,i),this.wrapper.appendChild(i);const o=e.viewNames[1];this.insetContainer=document.createElement("div"),this.insetContainer.className="multi-view-canvas inset-overlay",this.insetContainer.setAttribute("data-view-name",o),this.canvasContainers.set(o,this.insetContainer),this.minimizeBtn=document.createElement("button"),this.minimizeBtn.className="inset-minimize-btn",this.minimizeBtn.innerHTML="&#x2212;",this.minimizeBtn.title="Minimize",this.minimizeBtn.addEventListener("click",this.toggleMinimize),this.insetContainer.appendChild(this.minimizeBtn),this.wrapper.appendChild(this.insetContainer),this.insetContainer.addEventListener("click",r=>{this.isMinimized&&r.target===this.insetContainer&&this.toggleMinimize()}),this.container.appendChild(this.wrapper)}getCanvasContainers(){return this.canvasContainers}getWrapperElement(){return this.wrapper}dispose(){this.minimizeBtn&&this.minimizeBtn.removeEventListener("click",this.toggleMinimize),this.container.innerHTML=""}}function Fe(n){document.documentElement.setAttribute("data-theme",n)}function Ii(n,e){switch(Fe(e.project.theme),n){case"fullscreen":return new Pi(e);case"default":return new Ai(e);case"split":return new Oi(e);case"tabbed":return new Fi(e);case"ui":return new xe(e)}}function ki(n,e){switch(Fe(e.project.theme),n){case"split":return new Xe(e);case"quad":return new Mi(e);case"inset":return new Di(e);default:return new Xe(e)}}async function Ui(n,e){const{project:t,styled:i=!0,pixelRatio:o=window.devicePixelRatio}=e;return i||n.classList.add("unstyled"),Fe((Be(t),t.theme)),Be(t)?Ni(n,t,o):Bi(n,t,o)}function Bi(n,e,t){const i=Ii(e.layout,{container:n,project:e}),o=i instanceof xe,r=new F({container:i.getCanvasContainer(),project:e,pixelRatio:t,skipUniformsPanel:o,skipPlaybackControls:o});return i.setRecompileHandler&&i.setRecompileHandler((s,a)=>{const c=r.getEngine();if(!c)return{success:!1,error:"Engine not initialized"};if(s==="common"){const l=c.recompileCommon(a);if(l.success)return{success:!0};const u=l.errors[0];return{success:!1,error:u?`${u.passName}: ${u.error}`:"Unknown error"}}return c.recompilePass(s,a)}),i.setUniformHandler&&i.setUniformHandler((s,a)=>{const c=r.getEngine();c&&c.setUniformValue(s,a)}),i instanceof xe&&(i.setPlaybackCallbacks({onPlayPause:()=>{r.togglePlayPause(),i.setPaused(r.getPaused())},onReset:()=>r.reset(),onScreenshot:()=>r.screenshot()}),i.setUniformCallback((s,a)=>{const c=r.getEngine();c&&c.setUniformValue(s,a)}),i.setPaused(r.getPaused())),r.hasErrors()||r.start(),{app:r,destroy:()=>{r.dispose(),i.dispose()}}}function Ni(n,e,t){const i=e.views.map(a=>a.name),o=ki(e.viewLayout,{container:n,project:e,viewNames:i}),r=new G({containers:o.getCanvasContainers(),project:e,pixelRatio:t}),s=new Li({wrapper:o.getWrapperElement(),appGroup:r,uniforms:e.uniforms});return r.hasErrors()||r.start(),{appGroup:r,destroy:()=>{s.dispose(),r.dispose(),o.dispose()}}}function Me(n){return n==="Image"||n==="BufferA"||n==="BufferB"||n==="BufferC"||n==="BufferD"}function $i(n){switch(n){case"Image":return"image.glsl";case"BufferA":return"bufferA.glsl";case"BufferB":return"bufferB.glsl";case"BufferC":return"bufferC.glsl";case"BufferD":return"bufferD.glsl"}}function Ct(n){return typeof n=="string"?Me(n)?{buffer:n}:n==="keyboard"?{keyboard:!0}:n==="audio"?{audio:!0}:n==="webcam"?{webcam:!0}:{texture:n}:n}const we=["Image","BufferA","BufferB","BufferC","BufferD"],zi=["BufferA","BufferB","BufferC","BufferD"],Rt=["iChannel0","iChannel1","iChannel2","iChannel3"],ji="default",Vi=!1,Hi="light",St=new Set(["iResolution","iTime","iTimeDelta","iFrame","iMouse","iDate","iFrameRate","iChannelResolution","iChannel0","iChannel1","iChannel2","iChannel3","iTouchCount","iTouch0","iTouch1","iTouch2","iPinch","iPinchDelta","iPinchCenter"]),Gi=/^[a-zA-Z_][a-zA-Z0-9_]*$/,Xi=new Set(["attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler2D","samplerCube","struct","precision","highp","mediump","lowp","layout","centroid","flat","smooth","noperspective","switch","case","default"]);function Y(n){return Gi.test(n)&&!Xi.has(n)}const Ke=new Set(["fullscreen","default","split","tabbed"]),he=new Set(["light","dark","system"]),Ki=new Set(["mode","title","author","description","layout","theme","controls","common","startPaused","pixelRatio","uniforms","buffers","textures","Image","BufferA","BufferB","BufferC","BufferD","views"]),Yi=new Set(["source","iChannel0","iChannel1","iChannel2","iChannel3"]),Ye=new Set(["keyboard","audio","webcam"]);function Wi(n,e){const t=[],i=[];for(const r of Object.keys(n))Ki.has(r)||t.push(`Unknown config key '${r}'`);if(n.layout!==void 0&&!Ke.has(n.layout)&&i.push(`Invalid layout '${n.layout}'. Expected one of: ${[...Ke].join(", ")}`),n.theme!==void 0&&!he.has(n.theme)&&i.push(`Invalid theme '${n.theme}'. Expected one of: ${[...he].join(", ")}`),n.uniforms&&typeof n.uniforms=="object")for(const r of Object.keys(n.uniforms))St.has(r)&&i.push(`Uniform name '${r}' is reserved (built-in uniform)`),Y(r)||i.push(`Uniform name '${r}' is not a valid GLSL identifier`);const o=new Set;if(n.buffers){const r=Object.keys(n.buffers);for(const s of r){if(typeof s!="string"){i.push(`Buffer name must be a string, got ${typeof s}`);continue}Y(s)||i.push(`Buffer name '${s}' is not a valid GLSL identifier`),o.add(s)}}if(n.textures&&typeof n.textures=="object")for(const[r,s]of Object.entries(n.textures))Y(r)||i.push(`Texture name '${r}' is not a valid GLSL identifier`),o.has(r)&&i.push(`Texture name '${r}' collides with a buffer name`),typeof s!="string"?i.push(`Texture source for '${r}' must be a string`):!Ye.has(s)&&!/\.\w+$/.test(s)&&!Y(s)&&i.push(`Invalid texture source '${s}' for '${r}'. Expected a file path with extension, a script texture name, or one of: ${[...Ye].join(", ")}`);for(const r of we){const s=n[r];if(!(!s||typeof s!="object")){for(const a of Object.keys(s))Yi.has(a)||t.push(`Unknown key '${a}' in pass '${r}'`);for(const a of Rt){const c=s[a];c&&typeof c=="string"&&Me(c)&&c!=="Image"&&!n[c]&&t.push(`${r}.${a} references '${c}' but no ${c} pass is configured`)}}}for(const r of t)console.warn(`[config] ${e}: ${r}`);if(i.length>0)throw new Error(`Config validation failed for '${e}':
${i.map(r=>`  - ${r}`).join(`
`)}`)}const We=new Set(["split","quad","inset"]);function qi(n,e){const t=[];if(!Array.isArray(n.views)||n.views.length<2)t.push("'views' must be an array with at least 2 entries");else{for(const o of n.views)(typeof o!="string"||!o)&&t.push(`Each view name must be a non-empty string, got '${o}'`);new Set(n.views).size!==n.views.length&&t.push("Duplicate view names found")}if(n.layout!==void 0&&!We.has(n.layout)&&t.push(`Invalid multi-view layout '${n.layout}'. Expected one of: ${[...We].join(", ")}`),n.theme!==void 0&&!he.has(n.theme)&&t.push(`Invalid theme '${n.theme}'. Expected one of: ${[...he].join(", ")}`),n.uniforms&&typeof n.uniforms=="object")for(const i of Object.keys(n.uniforms))St.has(i)&&t.push(`Uniform name '${i}' is reserved (built-in uniform)`),Y(i)||t.push(`Uniform name '${i}' is not a valid GLSL identifier`);if(t.length>0)throw new Error(`Multi-view config validation failed for '${e}':
${t.map(i=>`  - ${i}`).join(`
`)}`)}function fe(n){return{mode:n.mode,root:n.root,meta:{title:n.title??n.root.split("/").pop()??"Untitled",author:n.author??null,description:n.description??null},layout:n.layout??ji,theme:n.theme??Hi,controls:n.controls??Vi,startPaused:n.startPaused??!1,pixelRatio:n.pixelRatio??null,commonSource:n.commonSource,passes:n.passes,textures:n.textures??[],uniforms:n.uniforms??{},script:n.script??null}}const qe=new Set(["float","int","bool","vec2","vec3","vec4"]),Ze=new Set(["float","vec2","vec3","vec4","mat3","mat4"]),Zi={vec2:2,vec3:3,vec4:4};function Ji(n,e){for(const[t,i]of Object.entries(n)){const o=`Uniform '${t}' in '${e}'`;if(!i.type)throw new Error(`${o}: missing 'type' field`);if(A(i)){if(!Ze.has(i.type))throw new Error(`${o}: invalid array type '${i.type}'. Expected one of: ${[...Ze].join(", ")}`);if(typeof i.count!="number"||i.count<1||!Number.isInteger(i.count))throw new Error(`${o}: 'count' must be a positive integer, got ${i.count}`);continue}const r=i;if(!qe.has(r.type))throw new Error(`${o}: invalid type '${r.type}'. Expected one of: ${[...qe].join(", ")}`);switch(r.type){case"float":case"int":if(typeof r.value!="number")throw new Error(`${o}: 'value' must be a number for type '${r.type}', got ${typeof r.value}`);if(r.min!==void 0&&typeof r.min!="number")throw new Error(`${o}: 'min' must be a number`);if(r.max!==void 0&&typeof r.max!="number")throw new Error(`${o}: 'max' must be a number`);if(r.step!==void 0&&typeof r.step!="number")throw new Error(`${o}: 'step' must be a number`);break;case"bool":if(typeof r.value!="boolean")throw new Error(`${o}: 'value' must be a boolean for type 'bool', got ${typeof r.value}`);break;case"vec2":case"vec3":case"vec4":{const s=Zi[r.type];if(!Array.isArray(r.value)||r.value.length!==s)throw new Error(`${o}: 'value' must be an array of ${s} numbers for type '${r.type}'`);if(r.value.some(c=>typeof c!="number"))throw new Error(`${o}: all components of 'value' must be numbers`);const a=r;for(const c of["min","max","step"]){const l=a[c];if(l!==void 0&&(!Array.isArray(l)||l.length!==s))throw new Error(`${o}: '${c}' must be an array of ${s} numbers for type '${r.type}'`)}break}}}}async function Lt(n,e,t){if(t){const o=n.joinPath(e,t);if(!await n.exists(o))throw new Error(`Common GLSL file '${t}' not found in '${e}'.`);return await n.readText(o)}const i=n.joinPath(e,"common.glsl");return await n.exists(i)?await n.readText(i):null}class Pt{constructor(){this.map=new Map}register(e,t="linear",i="repeat",o){const r=`${e}|${t}|${i}`,s=this.map.get(r);if(s)return s.name;const a=`tex${this.map.size}`;return this.map.set(r,{name:a,filename:o,source:e,filter:t,wrap:i}),a}toArray(){return Array.from(this.map.values())}}function Qi(n,e,t,i,o,r){if("buffer"in n){const s=n.buffer;if(!Me(s))throw new Error(`Invalid buffer name '${s}' for ${t} in pass '${e}' at '${i}'.`);return{kind:"buffer",buffer:s,current:!!n.current}}if("texture"in n)return{kind:"texture",name:(r==null?void 0:r.get(n.texture))??o.register(n.texture,n.filter,n.wrap),cubemap:n.type==="cubemap"};if("keyboard"in n)return{kind:"keyboard"};if("audio"in n)return{kind:"audio"};if("webcam"in n)return{kind:"webcam"};if("video"in n)return{kind:"video",src:n.video};if("script"in n)return{kind:"script",name:n.script};throw new Error(`Invalid channel object for ${t} in pass '${e}' at '${i}'.`)}function oe(n,e,t,i,o,r){if(!n)return{kind:"none"};const s=Ct(n);return s?Qi(s,e,t,i,o,r):{kind:"none"}}async function eo(n,e,t){let i=t==null?void 0:t.config;if(i===void 0){const o=n.joinPath(e,"config.json");if(await n.exists(o)){const r=await n.readText(o);try{i=JSON.parse(r)}catch(s){throw new Error(`Invalid JSON in config.json at '${e}': ${(s==null?void 0:s.message)??String(s)}`)}}}return i?(Wi(i,e),i.mode==="shadertoy"?no(n,e,i,t):io(n,e,i,t)):to(n,e,t)}async function to(n,e,t){const i=n.joinPath(e,"image.glsl");if(!await n.exists(i))throw new Error(`Single-pass project at '${e}' requires 'image.glsl'.`);const o=await n.listGlslFiles(e);if(o.length>0&&o.filter(l=>l!=="image.glsl").length>0)throw new Error(`Project at '${e}' contains multiple GLSL files (${o.join(", ")}) but no 'config.json'. Add a config file to use multiple passes.`);if(await n.hasFiles(n.joinPath(e,"textures")))throw new Error(`Project at '${e}' uses textures (in 'textures/' folder) but has no 'config.json'. Add a config file to define texture bindings.`);const s=await n.readText(i);return fe({mode:"standard",root:e,commonSource:null,passes:{Image:{name:"Image",glslSource:s,channels:[{kind:"none"},{kind:"none"},{kind:"none"},{kind:"none"}]}},script:t==null?void 0:t.script})}async function no(n,e,t,i){const o={Image:t.Image,BufferA:t.BufferA,BufferB:t.BufferB,BufferC:t.BufferC,BufferD:t.BufferD};o.Image||o.BufferA||o.BufferB||o.BufferC||o.BufferD||(o.Image={});const s=await Lt(n,e,t.common),a=new Pt,c=new Map;if(i!=null&&i.textureUrlResolver)for(const u of we){const d=o[u];if(d)for(const p of Rt){const _=d[p];if(!_)continue;const b=Ct(_);if(b&&"texture"in b&&!c.has(b.texture)){const E=await i.textureUrlResolver(b.texture),T=b.texture.split("/").pop(),C=a.register(E,b.filter,b.wrap,T);c.set(b.texture,C)}}}const l={};for(const u of we){const d=o[u];if(!d)continue;const p=d.source??$i(u),_=n.joinPath(e,p);if(!await n.exists(_))throw new Error(`Source GLSL file for pass '${u}' not found at '${p}' in '${e}'.`);const b=await n.readText(_),E=[oe(d.iChannel0,u,"iChannel0",e,a,c),oe(d.iChannel1,u,"iChannel1",e,a,c),oe(d.iChannel2,u,"iChannel2",e,a,c),oe(d.iChannel3,u,"iChannel3",e,a,c)];l[u]={name:u,glslSource:b,channels:E}}if(!l.Image)throw new Error(`config.json at '${e}' must define an Image pass.`);return fe({mode:"shadertoy",root:e,title:t.title,author:t.author,description:t.description,layout:t.layout,theme:t.theme,controls:t.controls,startPaused:t.startPaused,pixelRatio:t.pixelRatio,commonSource:s,passes:l,textures:a.toArray(),script:i==null?void 0:i.script})}async function io(n,e,t,i){t.uniforms&&Ji(t.uniforms,e);const o=await Lt(n,e,t.common),r=t.buffers??{};if(Object.keys(r).length>0||t.textures&&Object.keys(t.textures).length>0)return ro(n,e,t,o,i);const s=n.joinPath(e,"image.glsl");if(!await n.exists(s))throw new Error(`Standard mode project at '${e}' requires 'image.glsl'.`);const a=await n.readText(s),c=[{kind:"none"},{kind:"none"},{kind:"none"},{kind:"none"}];return fe({mode:"standard",root:e,title:t.title,author:t.author,description:t.description,layout:t.layout,theme:t.theme,controls:t.controls,startPaused:t.startPaused,pixelRatio:t.pixelRatio,commonSource:o,passes:{Image:{name:"Image",glslSource:a,channels:c}},uniforms:t.uniforms,script:i==null?void 0:i.script})}const oo=new Set(["keyboard","audio","webcam"]);async function ro(n,e,t,i,o){const r=t.buffers??{},s=Object.keys(r);if(s.length>4)throw new Error(`Standard mode at '${e}' supports max 4 buffers, got ${s.length}: ${s.join(", ")}`);const a=new Map;for(let b=0;b<s.length;b++)a.set(s[b],zi[b]);const c=new Pt,l=new Map;for(const[b,E]of a)l.set(b,{kind:"buffer",buffer:E,current:!1});for(const[b,E]of Object.entries(t.textures??{}))if(E==="keyboard")l.set(b,{kind:"keyboard"});else if(E==="audio")l.set(b,{kind:"audio"});else if(E==="webcam")l.set(b,{kind:"webcam"});else if(/\.\w+$/.test(E)){let T;o!=null&&o.textureUrlResolver?T=await o.textureUrlResolver(E):T=E;const C=c.register(T);l.set(b,{kind:"texture",name:C,cubemap:!1})}else oo.has(E)||l.set(b,{kind:"script",name:E});const u=[{kind:"none"},{kind:"none"},{kind:"none"},{kind:"none"}],d=n.joinPath(e,"image.glsl");if(!await n.exists(d))throw new Error(`Standard mode project at '${e}' requires 'image.glsl'.`);const _={Image:{name:"Image",glslSource:await n.readText(d),channels:u,namedSamplers:new Map(l)}};for(const[b,E]of a){const T=n.joinPath(e,`${b}.glsl`);if(!await n.exists(T))throw new Error(`Buffer '${b}' requires '${b}.glsl' in '${e}'.`);const C=await n.readText(T);_[E]={name:E,glslSource:C,channels:u,namedSamplers:new Map(l)}}return fe({mode:"standard",root:e,title:t.title,author:t.author,description:t.description,layout:t.layout,theme:t.theme,controls:t.controls,startPaused:t.startPaused,pixelRatio:t.pixelRatio,commonSource:i,passes:_,textures:c.toArray(),uniforms:t.uniforms,script:o==null?void 0:o.script})}function $(n,e){if(e in n)return e;const t=e.toLowerCase();for(const i of Object.keys(n))if(i.toLowerCase()===t)return i;return null}async function At(n,e){if(!e)return null;const t=`${n}/script.js`,i=$(e,t);if(!i)return null;const o=await e[i](),r={};return typeof o.setup=="function"&&(r.setup=o.setup),typeof o.onFrame=="function"&&(r.onFrame=o.onFrame),r.setup||r.onFrame?r:null}function Ot(n,e){return{async exists(t){return $(n,t)!==null||$(e,t)!==null},async readText(t){const i=$(n,t);if(!i)throw new Error(`File not found: ${t}`);return n[i]()},async resolveImageUrl(t){const i=$(e,t);if(!i)throw new Error(`Image not found: ${t}`);return e[i]()},async listGlslFiles(){return[]},async hasFiles(){return!1},joinPath(...t){return t.map((i,o)=>o===0?i:i.replace(/^\/+/,"")).join("/").replace(/\/+/g,"/")},baseName(t){return t.split("/").pop()||t}}}function Ft(n){return(n.split("/").pop()||n).split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}async function so(n,e,t,i,o){const r=n.startsWith("./")?n:`./${n}`,s=`${r}/config.json`;let a;if(s in t&&(a=await t[s]()),a&&Wn(a))return qi(a,r),ao(r,a,e,i,o);const c=await At(r,o),l=Ot(e,i),d=await eo(l,r,{config:a,script:c,textureUrlResolver:async p=>{const _=`${r}/${p.replace(/^\.\//,"")}`;return l.resolveImageUrl(_)}});return a!=null&&a.title||(d.meta.title=Ft(r)),d}async function ao(n,e,t,i,o){const r=Ot(t,i),s=await At(n,o);let a=null;const c=`${n}/common.glsl`;$(t,c)&&(a=await r.readText(c));const l=[],u=[{kind:"none"},{kind:"none"},{kind:"none"},{kind:"none"}];for(const d of e.views){const p=`${n}/${d}.glsl`,_=`${n}/${d}/image.glsl`;let b;if($(t,p))b=await r.readText(p);else if($(t,_))b=await r.readText(_);else throw new Error(`Multi-view: No shader found for view "${d}". Expected ${d}.glsl or ${d}/image.glsl`);const E={name:"Image",glslSource:b,channels:u,namedSamplers:new Map};l.push({name:d,passes:{Image:E}})}return{mode:"standard",root:n,meta:{title:e.title??Ft(n),author:e.author??null,description:e.description??null},theme:e.theme??"light",controls:e.controls??!0,startPaused:e.startPaused??!1,pixelRatio:e.pixelRatio??null,commonSource:a,uniforms:e.uniforms??{},textures:[],script:s,views:l,viewLayout:e.layout??"split"}}function co(){const e=new URLSearchParams(window.location.search).get("shader");return e||"ModuliSpaceN4"}async function Je(){try{const n=co();if(n==="__gallery__"){await lo();return}console.log(`Loading shader: ${n}`);const e=Object.assign({"./shaders/ModuliSpaceN4-split/hyperbolic.glsl":()=>w(()=>Promise.resolve().then(()=>go),void 0).then(c=>c.default),"./shaders/ModuliSpaceN4-split/triangle.glsl":()=>w(()=>Promise.resolve().then(()=>Eo),void 0).then(c=>c.default),"./shaders/ModuliSpaceN4/image.glsl":()=>w(()=>Promise.resolve().then(()=>yo),void 0).then(c=>c.default),"./shaders/example-buffer/bufferA.glsl":()=>w(()=>Promise.resolve().then(()=>To),void 0).then(c=>c.default),"./shaders/example-buffer/image.glsl":()=>w(()=>Promise.resolve().then(()=>wo),void 0).then(c=>c.default),"./shaders/example-gradient/image.glsl":()=>w(()=>Promise.resolve().then(()=>Ro),void 0).then(c=>c.default),"./shaders/geodesic/common.glsl":()=>w(()=>Promise.resolve().then(()=>Lo),void 0).then(c=>c.default),"./shaders/geodesic/disc.glsl":()=>w(()=>Promise.resolve().then(()=>Ao),void 0).then(c=>c.default),"./shaders/geodesic/uhp.glsl":()=>w(()=>Promise.resolve().then(()=>Fo),void 0).then(c=>c.default),"./shaders/input-test/image.glsl":()=>w(()=>Promise.resolve().then(()=>Do),void 0).then(c=>c.default),"./shaders/inversion/common.glsl":()=>w(()=>Promise.resolve().then(()=>ko),void 0).then(c=>c.default),"./shaders/inversion/inverted.glsl":()=>w(()=>Promise.resolve().then(()=>Bo),void 0).then(c=>c.default),"./shaders/inversion/plane.glsl":()=>w(()=>Promise.resolve().then(()=>$o),void 0).then(c=>c.default),"./shaders/inversion/sphere.glsl":()=>w(()=>Promise.resolve().then(()=>jo),void 0).then(c=>c.default),"./shaders/mandelbrot-julia/julia.glsl":()=>w(()=>Promise.resolve().then(()=>Ho),void 0).then(c=>c.default),"./shaders/mandelbrot-julia/mandelbrot.glsl":()=>w(()=>Promise.resolve().then(()=>Xo),void 0).then(c=>c.default),"./shaders/projective-reflections/image.glsl":()=>w(()=>Promise.resolve().then(()=>Yo),void 0).then(c=>c.default),"./shaders/quad-3/blue.glsl":()=>w(()=>Promise.resolve().then(()=>qo),void 0).then(c=>c.default),"./shaders/quad-3/green.glsl":()=>w(()=>Promise.resolve().then(()=>Jo),void 0).then(c=>c.default),"./shaders/quad-3/red.glsl":()=>w(()=>Promise.resolve().then(()=>er),void 0).then(c=>c.default),"./shaders/quad-4/bl.glsl":()=>w(()=>Promise.resolve().then(()=>nr),void 0).then(c=>c.default),"./shaders/quad-4/br.glsl":()=>w(()=>Promise.resolve().then(()=>or),void 0).then(c=>c.default),"./shaders/quad-4/tl.glsl":()=>w(()=>Promise.resolve().then(()=>sr),void 0).then(c=>c.default),"./shaders/quad-4/tr.glsl":()=>w(()=>Promise.resolve().then(()=>cr),void 0).then(c=>c.default)}),t=Object.assign({"./shaders/ModuliSpaceN4-split/config.json":()=>w(()=>Promise.resolve().then(()=>$t),void 0).then(c=>c.default),"./shaders/ModuliSpaceN4/config.json":()=>w(()=>Promise.resolve().then(()=>Xt),void 0).then(c=>c.default),"./shaders/example-buffer/config.json":()=>w(()=>Promise.resolve().then(()=>Zt),void 0).then(c=>c.default),"./shaders/example-gradient/config.json":()=>w(()=>Promise.resolve().then(()=>en),void 0).then(c=>c.default),"./shaders/geodesic/config.json":()=>w(()=>Promise.resolve().then(()=>an),void 0).then(c=>c.default),"./shaders/input-test/config.json":()=>w(()=>Promise.resolve().then(()=>hn),void 0).then(c=>c.default),"./shaders/inversion/config.json":()=>w(()=>Promise.resolve().then(()=>En),void 0).then(c=>c.default),"./shaders/mandelbrot-julia/config.json":()=>w(()=>Promise.resolve().then(()=>wn),void 0).then(c=>c.default),"./shaders/projective-reflections/config.json":()=>w(()=>Promise.resolve().then(()=>An),void 0).then(c=>c.default),"./shaders/quad-3/config.json":()=>w(()=>Promise.resolve().then(()=>In),void 0).then(c=>c.default),"./shaders/quad-4/config.json":()=>w(()=>Promise.resolve().then(()=>$n),void 0).then(c=>c.default)}),i=Object.assign({}),o=Object.assign({"./shaders/ModuliSpaceN4-split/script.js":()=>w(()=>Promise.resolve().then(()=>Fr),void 0),"./shaders/ModuliSpaceN4/script.js":()=>w(()=>Promise.resolve().then(()=>Nr),void 0),"./shaders/geodesic/script.js":()=>w(()=>Promise.resolve().then(()=>Xr),void 0),"./shaders/inversion/script.js":()=>w(()=>Promise.resolve().then(()=>es),void 0),"./shaders/mandelbrot-julia/script.js":()=>w(()=>Promise.resolve().then(()=>os),void 0),"./shaders/projective-reflections/script.js":()=>w(()=>Promise.resolve().then(()=>ds),void 0)}),r=await so(`shaders/${n}`,e,t,i,o),s=document.getElementById("app");if(!s)throw new Error("Container element #app not found");const a=await Ui(s,{project:r});window.app=a.app,window.appGroup=a.appGroup}catch(n){console.error("Failed to initialize:",n);const e=document.getElementById("app");e&&(e.innerHTML=`
        <div style="color: red; padding: 20px; font-family: monospace;">
          <h2>Error</h2>
          <pre>${n instanceof Error?n.message:String(n)}</pre>
        </div>
      `)}}async function lo(){const n=Object.assign({"./shaders/ModuliSpaceN4-split/config.json":()=>w(()=>Promise.resolve().then(()=>$t),void 0).then(i=>i.default),"./shaders/ModuliSpaceN4/config.json":()=>w(()=>Promise.resolve().then(()=>Xt),void 0).then(i=>i.default),"./shaders/example-buffer/config.json":()=>w(()=>Promise.resolve().then(()=>Zt),void 0).then(i=>i.default),"./shaders/example-gradient/config.json":()=>w(()=>Promise.resolve().then(()=>en),void 0).then(i=>i.default),"./shaders/geodesic/config.json":()=>w(()=>Promise.resolve().then(()=>an),void 0).then(i=>i.default),"./shaders/input-test/config.json":()=>w(()=>Promise.resolve().then(()=>hn),void 0).then(i=>i.default),"./shaders/inversion/config.json":()=>w(()=>Promise.resolve().then(()=>En),void 0).then(i=>i.default),"./shaders/mandelbrot-julia/config.json":()=>w(()=>Promise.resolve().then(()=>wn),void 0).then(i=>i.default),"./shaders/projective-reflections/config.json":()=>w(()=>Promise.resolve().then(()=>An),void 0).then(i=>i.default),"./shaders/quad-3/config.json":()=>w(()=>Promise.resolve().then(()=>In),void 0).then(i=>i.default),"./shaders/quad-4/config.json":()=>w(()=>Promise.resolve().then(()=>$n),void 0).then(i=>i.default)}),e=document.getElementById("app");if(!e)return;const t=[];for(const[i,o]of Object.entries(n)){const r=i.match(/\.\/shaders\/([^/]+)\/config\.json$/);if(!r)continue;const s=r[1];let a=s,c="";try{const l=await o();l!=null&&l.title&&(a=l.title),l!=null&&l.description&&(c=l.description)}catch{}t.push({name:s,title:a,description:c})}t.sort((i,o)=>i.name.localeCompare(o.name)),e.innerHTML=`
    <style>
      body { background: #0a0a0f; margin: 0; }
      .gallery-container {
        min-height: 100vh;
        padding: 60px 40px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        color: #e0e0e0;
      }
      .gallery-title {
        text-align: center;
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 40px;
        color: #fff;
        letter-spacing: -0.5px;
      }
      .gallery-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
      }
      .gallery-card {
        background: rgba(30, 30, 40, 0.8);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 10px;
        padding: 24px;
        text-decoration: none;
        color: inherit;
        transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
        backdrop-filter: blur(12px);
        cursor: pointer;
      }
      .gallery-card:hover {
        transform: translateY(-2px);
        border-color: rgba(100, 140, 255, 0.3);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      }
      .gallery-card-title {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 6px;
        color: #fff;
      }
      .gallery-card-name {
        font-size: 12px;
        font-family: 'Monaco', 'Menlo', monospace;
        color: rgba(255, 255, 255, 0.4);
        margin-bottom: 8px;
      }
      .gallery-card-desc {
        font-size: 13px;
        color: rgba(255, 255, 255, 0.6);
        line-height: 1.5;
      }
    </style>
    <div class="gallery-container">
      <h1 class="gallery-title">Shader Gallery</h1>
      <div class="gallery-grid">
        ${t.map(i=>`
          <a class="gallery-card" href="?shader=${i.name}">
            <div class="gallery-card-title">${i.title}</div>
            ${i.title!==i.name?`<div class="gallery-card-name">${i.name}</div>`:""}
            ${i.description?`<div class="gallery-card-desc">${i.description}</div>`:""}
          </a>
        `).join("")}
      </div>
    </div>
  `}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Je):Je();class uo{constructor(e,t){this.recompileHandler=null,this.tabs=[],this.activeTabIndex=0,this.editorInstance=null,this.modifiedSources=new Map,this.container=e,this.project=t,this.buildTabs(),this.tabBar=document.createElement("div"),this.tabBar.className="editor-tab-bar",this.buildTabBar(),this.contentArea=document.createElement("div"),this.contentArea.className="editor-content-area",this.copyButton=document.createElement("button"),this.copyButton.className="editor-copy-button",this.copyButton.innerHTML=`
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2z" opacity="0.4"/>
        <path d="M2 5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H2zm0 1h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"/>
      </svg>
    `,this.copyButton.title="Copy code to clipboard",this.copyButton.addEventListener("click",()=>this.copyToClipboard()),this.recompileButton=document.createElement("button"),this.recompileButton.className="editor-recompile-button",this.recompileButton.innerHTML=`
      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
        <path d="M4 3v10l8-5-8-5z"/>
      </svg>
      Recompile
    `,this.recompileButton.title="Recompile shader (Ctrl+Enter)",this.recompileButton.addEventListener("click",()=>this.recompile()),this.errorDisplay=document.createElement("div"),this.errorDisplay.className="editor-error-display",this.errorDisplay.style.display="none";const i=document.createElement("div");i.className="editor-toolbar",i.appendChild(this.tabBar),i.appendChild(this.copyButton),i.appendChild(this.recompileButton),this.container.appendChild(i),this.container.appendChild(this.contentArea),this.container.appendChild(this.errorDisplay),this.setupKeyboardShortcut(),this.showTab(0)}setRecompileHandler(e){this.recompileHandler=e}dispose(){this.editorInstance&&(this.editorInstance.destroy(),this.editorInstance=null),this.container.innerHTML=""}buildTabs(){this.tabs=[],this.project.commonSource&&this.tabs.push({kind:"code",name:"common.glsl",passName:"common",source:this.project.commonSource});const e=["BufferA","BufferB","BufferC","BufferD"];for(const i of e){const o=this.project.passes[i];o&&this.tabs.push({kind:"code",name:`${i.toLowerCase()}.glsl`,passName:i,source:o.glslSource})}const t=this.project.passes.Image;this.tabs.push({kind:"code",name:"image.glsl",passName:"Image",source:t.glslSource});for(const i of this.project.textures)this.tabs.push({kind:"image",name:i.filename||i.name,url:i.source})}buildTabBar(){this.tabBar.innerHTML="",this.tabs.forEach((e,t)=>{const i=document.createElement("button");i.className="editor-tab-button",e.kind==="image"&&i.classList.add("image-tab"),i.textContent=e.name,t===this.activeTabIndex&&i.classList.add("active"),i.addEventListener("click",()=>this.showTab(t)),this.tabBar.appendChild(i)})}async showTab(e){this.saveCurrentEditorContent(),this.activeTabIndex=e;const t=this.tabs[e];if(this.tabBar.querySelectorAll(".editor-tab-button").forEach((i,o)=>{i.classList.toggle("active",o===e)}),this.contentArea.innerHTML="",this.editorInstance&&(this.editorInstance.destroy(),this.editorInstance=null),t.kind==="code"){this.copyButton.style.display="",this.recompileButton.style.display="";const i=this.modifiedSources.get(t.passName)??t.source,o=document.createElement("div");o.className="editor-prism-container",this.contentArea.appendChild(o);try{const{createEditor:r}=await w(async()=>{const{createEditor:s}=await Promise.resolve().then(()=>Dt);return{createEditor:s}},void 0);this.editorInstance=r(o,i,s=>{this.modifiedSources.set(t.passName,s)})}catch(r){console.error("Failed to load editor:",r);const s=document.createElement("textarea");s.className="editor-fallback-textarea",s.value=i,s.addEventListener("input",()=>{this.modifiedSources.set(t.passName,s.value)}),o.appendChild(s)}}else{this.copyButton.style.display="none",this.recompileButton.style.display="none";const i=document.createElement("div");i.className="editor-image-viewer";const o=document.createElement("img");o.src=t.url,o.alt=t.name,i.appendChild(o),this.contentArea.appendChild(i)}}saveCurrentEditorContent(){if(this.editorInstance){const e=this.tabs[this.activeTabIndex];if(e.kind==="code"){const t=this.editorInstance.getSource();this.modifiedSources.set(e.passName,t)}}}recompile(){if(!this.recompileHandler){console.warn("No recompile handler set");return}this.saveCurrentEditorContent();const e=this.tabs[this.activeTabIndex];if(e.kind!=="code")return;const t=this.modifiedSources.get(e.passName)??e.source,i=this.recompileHandler(e.passName,t);i.success?(this.hideError(),e.source=t):this.showError(i.error||"Compilation failed")}showError(e){this.errorDisplay.textContent=e,this.errorDisplay.style.display="block"}hideError(){this.errorDisplay.style.display="none"}async copyToClipboard(){const e=this.tabs[this.activeTabIndex];if(e.kind!=="code")return;const t=this.editorInstance?this.editorInstance.getSource():this.modifiedSources.get(e.passName)??e.source;try{await navigator.clipboard.writeText(t);const i=this.copyButton.innerHTML;this.copyButton.innerHTML=`
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/>
        </svg>
      `,this.copyButton.classList.add("copied"),setTimeout(()=>{this.copyButton.innerHTML=i,this.copyButton.classList.remove("copied")},1500)}catch(i){console.error("Failed to copy:",i)}}setupKeyboardShortcut(){this.container.addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey)&&e.key==="Enter"&&(e.preventDefault(),this.recompile())})}}const ho=Object.freeze(Object.defineProperty({__proto__:null,EditorPanel:uo},Symbol.toStringTag,{value:"Module"}));var Qe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Mt={exports:{}};(function(n){var e=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(i){var o=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,r=0,s={},a={manual:i.Prism&&i.Prism.manual,disableWorkerMessageHandler:i.Prism&&i.Prism.disableWorkerMessageHandler,util:{encode:function m(h){return h instanceof c?new c(h.type,m(h.content),h.alias):Array.isArray(h)?h.map(m):h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(m){return Object.prototype.toString.call(m).slice(8,-1)},objId:function(m){return m.__id||Object.defineProperty(m,"__id",{value:++r}),m.__id},clone:function m(h,g){g=g||{};var f,v;switch(a.util.type(h)){case"Object":if(v=a.util.objId(h),g[v])return g[v];f={},g[v]=f;for(var x in h)h.hasOwnProperty(x)&&(f[x]=m(h[x],g));return f;case"Array":return v=a.util.objId(h),g[v]?g[v]:(f=[],g[v]=f,h.forEach(function(S,y){f[y]=m(S,g)}),f);default:return h}},getLanguage:function(m){for(;m;){var h=o.exec(m.className);if(h)return h[1].toLowerCase();m=m.parentElement}return"none"},setLanguage:function(m,h){m.className=m.className.replace(RegExp(o,"gi"),""),m.classList.add("language-"+h)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(f){var m=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(f.stack)||[])[1];if(m){var h=document.getElementsByTagName("script");for(var g in h)if(h[g].src==m)return h[g]}return null}},isActive:function(m,h,g){for(var f="no-"+h;m;){var v=m.classList;if(v.contains(h))return!0;if(v.contains(f))return!1;m=m.parentElement}return!!g}},languages:{plain:s,plaintext:s,text:s,txt:s,extend:function(m,h){var g=a.util.clone(a.languages[m]);for(var f in h)g[f]=h[f];return g},insertBefore:function(m,h,g,f){f=f||a.languages;var v=f[m],x={};for(var S in v)if(v.hasOwnProperty(S)){if(S==h)for(var y in g)g.hasOwnProperty(y)&&(x[y]=g[y]);g.hasOwnProperty(S)||(x[S]=v[S])}var R=f[m];return f[m]=x,a.languages.DFS(a.languages,function(P,L){L===R&&P!=m&&(this[P]=x)}),x},DFS:function m(h,g,f,v){v=v||{};var x=a.util.objId;for(var S in h)if(h.hasOwnProperty(S)){g.call(h,S,h[S],f||S);var y=h[S],R=a.util.type(y);R==="Object"&&!v[x(y)]?(v[x(y)]=!0,m(y,g,null,v)):R==="Array"&&!v[x(y)]&&(v[x(y)]=!0,m(y,g,S,v))}}},plugins:{},highlightAll:function(m,h){a.highlightAllUnder(document,m,h)},highlightAllUnder:function(m,h,g){var f={callback:g,container:m,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",f),f.elements=Array.prototype.slice.apply(f.container.querySelectorAll(f.selector)),a.hooks.run("before-all-elements-highlight",f);for(var v=0,x;x=f.elements[v++];)a.highlightElement(x,h===!0,f.callback)},highlightElement:function(m,h,g){var f=a.util.getLanguage(m),v=a.languages[f];a.util.setLanguage(m,f);var x=m.parentElement;x&&x.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(x,f);var S=m.textContent,y={element:m,language:f,grammar:v,code:S};function R(L){y.highlightedCode=L,a.hooks.run("before-insert",y),y.element.innerHTML=y.highlightedCode,a.hooks.run("after-highlight",y),a.hooks.run("complete",y),g&&g.call(y.element)}if(a.hooks.run("before-sanity-check",y),x=y.element.parentElement,x&&x.nodeName.toLowerCase()==="pre"&&!x.hasAttribute("tabindex")&&x.setAttribute("tabindex","0"),!y.code){a.hooks.run("complete",y),g&&g.call(y.element);return}if(a.hooks.run("before-highlight",y),!y.grammar){R(a.util.encode(y.code));return}if(h&&i.Worker){var P=new Worker(a.filename);P.onmessage=function(L){R(L.data)},P.postMessage(JSON.stringify({language:y.language,code:y.code,immediateClose:!0}))}else R(a.highlight(y.code,y.grammar,y.language))},highlight:function(m,h,g){var f={code:m,grammar:h,language:g};if(a.hooks.run("before-tokenize",f),!f.grammar)throw new Error('The language "'+f.language+'" has no grammar.');return f.tokens=a.tokenize(f.code,f.grammar),a.hooks.run("after-tokenize",f),c.stringify(a.util.encode(f.tokens),f.language)},tokenize:function(m,h){var g=h.rest;if(g){for(var f in g)h[f]=g[f];delete h.rest}var v=new d;return p(v,v.head,m),u(m,v,h,v.head,0),b(v)},hooks:{all:{},add:function(m,h){var g=a.hooks.all;g[m]=g[m]||[],g[m].push(h)},run:function(m,h){var g=a.hooks.all[m];if(!(!g||!g.length))for(var f=0,v;v=g[f++];)v(h)}},Token:c};i.Prism=a;function c(m,h,g,f){this.type=m,this.content=h,this.alias=g,this.length=(f||"").length|0}c.stringify=function m(h,g){if(typeof h=="string")return h;if(Array.isArray(h)){var f="";return h.forEach(function(R){f+=m(R,g)}),f}var v={type:h.type,content:m(h.content,g),tag:"span",classes:["token",h.type],attributes:{},language:g},x=h.alias;x&&(Array.isArray(x)?Array.prototype.push.apply(v.classes,x):v.classes.push(x)),a.hooks.run("wrap",v);var S="";for(var y in v.attributes)S+=" "+y+'="'+(v.attributes[y]||"").replace(/"/g,"&quot;")+'"';return"<"+v.tag+' class="'+v.classes.join(" ")+'"'+S+">"+v.content+"</"+v.tag+">"};function l(m,h,g,f){m.lastIndex=h;var v=m.exec(g);if(v&&f&&v[1]){var x=v[1].length;v.index+=x,v[0]=v[0].slice(x)}return v}function u(m,h,g,f,v,x){for(var S in g)if(!(!g.hasOwnProperty(S)||!g[S])){var y=g[S];y=Array.isArray(y)?y:[y];for(var R=0;R<y.length;++R){if(x&&x.cause==S+","+R)return;var P=y[R],L=P.inside,V=!!P.lookbehind,De=!!P.greedy,Vn=P.alias;if(De&&!P.pattern.global){var Hn=P.pattern.toString().match(/[imsuy]*$/)[0];P.pattern=RegExp(P.pattern.source,Hn+"g")}for(var Ie=P.pattern||P,O=f.next,I=v;O!==h.tail&&!(x&&I>=x.reach);I+=O.value.length,O=O.next){var H=O.value;if(h.length>m.length)return;if(!(H instanceof c)){var J=1,D;if(De){if(D=l(Ie,I,m,V),!D||D.index>=m.length)break;var Q=D.index,Gn=D.index+D[0].length,B=I;for(B+=O.value.length;Q>=B;)O=O.next,B+=O.value.length;if(B-=O.value.length,I=B,O.value instanceof c)continue;for(var K=O;K!==h.tail&&(B<Gn||typeof K.value=="string");K=K.next)J++,B+=K.value.length;J--,H=m.slice(I,B),D.index-=I}else if(D=l(Ie,0,H,V),!D)continue;var Q=D.index,ee=D[0],pe=H.slice(0,Q),ke=H.slice(Q+ee.length),ge=I+H.length;x&&ge>x.reach&&(x.reach=ge);var te=O.prev;pe&&(te=p(h,te,pe),I+=pe.length),_(h,te,J);var Xn=new c(S,L?a.tokenize(ee,L):ee,Vn,ee);if(O=p(h,te,Xn),ke&&p(h,O,ke),J>1){var ve={cause:S+","+R,reach:ge};u(m,h,g,O.prev,I,ve),x&&ve.reach>x.reach&&(x.reach=ve.reach)}}}}}}function d(){var m={value:null,prev:null,next:null},h={value:null,prev:m,next:null};m.next=h,this.head=m,this.tail=h,this.length=0}function p(m,h,g){var f=h.next,v={value:g,prev:h,next:f};return h.next=v,f.prev=v,m.length++,v}function _(m,h,g){for(var f=h.next,v=0;v<g&&f!==m.tail;v++)f=f.next;h.next=f,f.prev=h,m.length-=v}function b(m){for(var h=[],g=m.head.next;g!==m.tail;)h.push(g.value),g=g.next;return h}if(!i.document)return i.addEventListener&&(a.disableWorkerMessageHandler||i.addEventListener("message",function(m){var h=JSON.parse(m.data),g=h.language,f=h.code,v=h.immediateClose;i.postMessage(a.highlight(f,a.languages[g],g)),v&&i.close()},!1)),a;var E=a.util.currentScript();E&&(a.filename=E.src,E.hasAttribute("data-manual")&&(a.manual=!0));function T(){a.manual||a.highlightAll()}if(!a.manual){var C=document.readyState;C==="loading"||C==="interactive"&&E&&E.defer?document.addEventListener("DOMContentLoaded",T):window.requestAnimationFrame?window.requestAnimationFrame(T):window.setTimeout(T,16)}return a}(e);n.exports&&(n.exports=t),typeof Qe<"u"&&(Qe.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(i){i.type==="entity"&&(i.attributes.title=i.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(o,r){var s={};s["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[r]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};a["language-"+r]={pattern:/[\s\S]+/,inside:t.languages[r]};var c={};c[o]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return o}),"i"),lookbehind:!0,greedy:!0,inside:a},t.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(i,o){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+i+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[o,"language-"+o],inside:t.languages[o]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(i){var o=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;i.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+o.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+o.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+o.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+o.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:o,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},i.languages.css.atrule.inside.rest=i.languages.css;var r=i.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var i="Loading…",o=function(E,T){return"✖ Error "+E+" while fetching file: "+T},r="✖ Error: File does not exist or is empty",s={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",c="loading",l="loaded",u="failed",d="pre[data-src]:not(["+a+'="'+l+'"]):not(['+a+'="'+c+'"])';function p(E,T,C){var m=new XMLHttpRequest;m.open("GET",E,!0),m.onreadystatechange=function(){m.readyState==4&&(m.status<400&&m.responseText?T(m.responseText):m.status>=400?C(o(m.status,m.statusText)):C(r))},m.send(null)}function _(E){var T=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(E||"");if(T){var C=Number(T[1]),m=T[2],h=T[3];return m?h?[C,Number(h)]:[C,void 0]:[C,C]}}t.hooks.add("before-highlightall",function(E){E.selector+=", "+d}),t.hooks.add("before-sanity-check",function(E){var T=E.element;if(T.matches(d)){E.code="",T.setAttribute(a,c);var C=T.appendChild(document.createElement("CODE"));C.textContent=i;var m=T.getAttribute("data-src"),h=E.language;if(h==="none"){var g=(/\.(\w+)$/.exec(m)||[,"none"])[1];h=s[g]||g}t.util.setLanguage(C,h),t.util.setLanguage(T,h);var f=t.plugins.autoloader;f&&f.loadLanguages(h),p(m,function(v){T.setAttribute(a,l);var x=_(T.getAttribute("data-range"));if(x){var S=v.split(/\r\n?|\n/g),y=x[0],R=x[1]==null?S.length:x[1];y<0&&(y+=S.length),y=Math.max(0,Math.min(y-1,S.length)),R<0&&(R+=S.length),R=Math.max(0,Math.min(R,S.length)),v=S.slice(y,R).join(`
`),T.hasAttribute("data-start")||T.setAttribute("data-start",String(y+1))}C.textContent=v,t.highlightElement(C)},function(v){T.setAttribute(a,u),C.textContent=v})}}),t.plugins.fileHighlight={highlight:function(T){for(var C=(T||document).querySelectorAll(d),m=0,h;h=C[m++];)t.highlightElement(h)}};var b=!1;t.fileHighlight=function(){b||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),b=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Mt);var mo=Mt.exports;Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/});Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}});Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}});Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/});delete Prism.languages.c.boolean;(function(n){var e=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,t=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return e.source});n.languages.cpp=n.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return e.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:e,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),n.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return t})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),n.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:n.languages.cpp}}}}),n.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),n.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:n.languages.extend("cpp",{})}}),n.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},n.languages.cpp["base-clause"])})(Prism);function fo(n,e,t){const i=document.createElement("div");i.className="prism-editor-wrapper";const o=document.createElement("div");o.className="prism-editor-line-numbers";const r=document.createElement("div");r.className="prism-editor-area";const s=document.createElement("textarea");s.className="prism-editor-textarea",s.value=e,s.spellcheck=!1,s.autocapitalize="off",s.autocomplete="off";const a=document.createElement("pre");a.className="prism-editor-highlight";const c=document.createElement("code");c.className="language-cpp",a.appendChild(c),r.appendChild(s),r.appendChild(a),i.appendChild(o),i.appendChild(r),n.appendChild(i);function l(){const p=s.value;c.textContent=p+`
`,mo.highlightElement(c);const _=p.split(`
`);o.innerHTML=_.map((b,E)=>`<span>${E+1}</span>`).join(""),t&&t(p)}function u(){a.scrollTop=s.scrollTop,a.scrollLeft=s.scrollLeft,o.scrollTop=s.scrollTop}function d(p){if(p.key==="Tab"){p.preventDefault();const _=s.selectionStart,b=s.selectionEnd,E=s.value;s.value=E.substring(0,_)+"  "+E.substring(b),s.selectionStart=s.selectionEnd=_+2,l()}}return s.addEventListener("input",l),s.addEventListener("scroll",u),s.addEventListener("keydown",d),l(),{getSource:()=>s.value,setSource:p=>{s.value=p,l()},destroy:()=>{s.removeEventListener("input",l),s.removeEventListener("scroll",u),s.removeEventListener("keydown",d),n.removeChild(i)}}}const Dt=Object.freeze(Object.defineProperty({__proto__:null,createEditor:fo},Symbol.toStringTag,{value:"Module"})),po=`// Hyperbolic view — Poincaré disk with Dirichlet domain and orbit
// Center point is controlled by uCenter uniform (draggable)

// Color palette
const vec3 WHITE = vec3(1.0, 1.0, 1.0);
const vec3 BLACK = vec3(0.0, 0.0, 0.0);

const vec3 DISC_COMPLEMENT_COLOR = WHITE;
const vec3 DISC_INTERIOR_COLOR   = WHITE;
const vec3 GEODESIC_COLOR  = BLACK;
const vec3 FUNDAMENTAL_DOMAIN_COLOR = WHITE;
const vec3 ORBIT_POINT_COLOR = BLACK;
const vec3 DRAGGABLE_POINT_COLOR = vec3(0.9, 0.3, 0.3);

vec2 cmul(vec2 a, vec2 b) {
    return vec2(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
}

vec2 cdiv(vec2 a, vec2 b) {
    float denom = dot(b, b);
    return vec2(a.x * b.x + a.y * b.y, a.y * b.x - a.x * b.y) / denom;
}

float minkowskiDot(vec3 a, vec3 b) {
    return a.x * b.x + a.y * b.y - a.z * b.z;
}

float distanceMinkowski(vec3 p, vec3 q) {
    return acosh(-minkowskiDot(p, q));
}

mat3 PSL2_to_Lorentz(float a, float b, float c, float d) {
    float a2 = a * a;
    float b2 = b * b;
    float c2 = c * c;
    float d2 = d * d;

    return mat3(
        // Column 0
        a*d + b*c,
        a*c - b*d,
        a*c + b*d,
        // Column 1
        a*b - c*d,
        (a2 + d2 - b2 - c2) * 0.5,
        (a2 - d2 - c2 + b2) * 0.5,
        // Column 2
        a*b + c*d,
        (a2 - d2 + c2 - b2) * 0.5,
        (a2 + d2 + b2 + c2) * 0.5
    );
}

mat3 lorentzInverse(mat3 L) {
    mat3 J = mat3(
        vec3( 1.0, 0.0, 0.0),
        vec3( 0.0, 1.0, 0.0),
        vec3( 0.0, 0.0,-1.0)
    );
    return J * transpose(L) * J;
}

vec3 diskToHyperboloid(vec2 u) {
    float r2 = dot(u, u);
    return vec3(2.0 * u.x / (1.0 - r2), 2.0 * u.y / (1.0 - r2), (1.0 + r2) / (1.0 - r2));
}

vec2 hyperboloidToDisk(vec3 x) {
    return vec2(x.x / (1.0 + x.z), x.y / (1.0 + x.z));
}

float distToGeodesic(vec3 n, vec3 p) {
    float nn = minkowskiDot(n, n);
    float s  = minkowskiDot(n, p) / sqrt(nn);
    return asinh(abs(s));
}

vec3 bisector(vec3 a, vec3 b) {
    vec3 n = a - b;
    float nn = minkowskiDot(n, n);
    if (nn < 0.0) {
        n = -n;
        nn = -nn;
    }
    n = n / sqrt(nn);
    return n;
}

vec2 normalize_coord(vec2 fragCoord) {
    vec2 u = fragCoord / iResolution.xy;
    u -= vec2(0.5);
    u.x *= iResolution.x / iResolution.y;
    float zoom = 1.0;
    u = (2.0 / zoom) * u;
    return u;
}

bool insideHalfplane(vec3 n, vec3 p) {
    return minkowskiDot(n, p) > 0.0;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 u = normalize_coord(fragCoord);

    // Outside disk
    if (dot(u, u) >= 1.0) {
        fragColor = vec4(DISC_COMPLEMENT_COLOR, 1.0);
        return;
    }

    // Boundary of disk
    if (abs(dot(u, u) - 1.0) < 0.01) {
        fragColor = vec4(GEODESIC_COLOR, 1.0);
        return;
    }

    // Center point from uniform (draggable in this view)
    vec3 p0 = diskToHyperboloid(uCenter);
    vec3 z  = diskToHyperboloid(u);

    // PSL(2,R) generators
    float s1 = sqrt(rhoa * rhoc);
    float a1 = s1;
    float b1 = (rhoc + 1.0) / s1;
    float c1 = 0.0;
    float d1 = 1.0 / s1;

    float s2 = sqrt(rhoa * rhob);
    float a2 = 1.0 / s2;
    float b2 = 0.0;
    float c2 = -(rhoa * (1.0 + rhob)) / s2;
    float d2 = s2;

    // Lorentz matrices
    mat3 LA  = PSL2_to_Lorentz(a1, b1, c1, d1);
    mat3 LB  = PSL2_to_Lorentz(a2, b2, c2, d2);
    mat3 LAi = lorentzInverse(LA);
    mat3 LBi = lorentzInverse(LB);

    // Orbit points under generators
    vec3 pA  = LA  * p0;
    vec3 pAi = LAi * p0;
    vec3 pB  = LB  * p0;
    vec3 pBi = LBi * p0;

    float pointRadius = 0.1;
    vec3 color = DISC_INTERIOR_COLOR;

    // Bisectors
    vec3 bisector0A  = bisector(p0, pA);
    vec3 bisector0B  = bisector(p0, pB);
    vec3 bisector0Ai = bisector(p0, pAi);
    vec3 bisector0Bi = bisector(p0, pBi);

    // Fundamental domain
    if (insideHalfplane(bisector0A, z) &&
        insideHalfplane(bisector0B, z) &&
        insideHalfplane(bisector0Ai, z) &&
        insideHalfplane(bisector0Bi, z)) {
        color = FUNDAMENTAL_DOMAIN_COLOR;
    }

    // All translates by group elements (from UBO)
    for (int i = 0; i < 128; i++) {
        if (distToGeodesic(matrices[i] * bisector0A, z) < pointRadius) color = GEODESIC_COLOR;
        if (distToGeodesic(matrices[i] * bisector0B, z) < pointRadius) color = GEODESIC_COLOR;
        if (distToGeodesic(matrices[i] * bisector0Ai, z) < pointRadius) color = GEODESIC_COLOR;
        if (distToGeodesic(matrices[i] * bisector0Bi, z) < pointRadius) color = GEODESIC_COLOR;
        if (distanceMinkowski(matrices[i] * p0, z) < pointRadius) color = ORBIT_POINT_COLOR;
    }

    // Draggable center point
    if (distanceMinkowski(p0, z) < pointRadius) color = DRAGGABLE_POINT_COLOR;

    fragColor = vec4(color, 1.0);
}
`,go=Object.freeze(Object.defineProperty({__proto__:null,default:po},Symbol.toStringTag,{value:"Module"})),vo=`// Triangle view — parameter space for the moduli of dilation surfaces
// Three slider dots on the edges control rhoa, rhob, rhoc

const float TRI_VIEW_SCALE = 1.8;

// Triangle vertices (must match script.js)
const vec2 TRI_A = vec2(0.0, 1.0);
const vec2 TRI_B = vec2(-0.866025, -0.5);
const vec2 TRI_C = vec2(0.866025, -0.5);

// Colors
const vec3 BG_COLOR    = vec3(0.97);
const vec3 EDGE_COLOR  = vec3(0.0);
const vec3 SLIDER_A_COLOR = vec3(0.9, 0.3, 0.3);  // rhoa on edge AB
const vec3 SLIDER_B_COLOR = vec3(0.3, 0.3, 0.9);  // rhob on edge BC
const vec3 SLIDER_C_COLOR = vec3(0.3, 0.8, 0.3);  // rhoc on edge CA
const vec3 VERTEX_COLOR   = vec3(0.4);

float sdfSegment(vec2 p, vec2 a, vec2 b) {
    vec2 ab = b - a;
    float t = clamp(dot(p - a, ab) / dot(ab, ab), 0.0, 1.0);
    return length(p - a - t * ab);
}

float sdfTriangleOutline(vec2 p, vec2 a, vec2 b, vec2 c) {
    return min(min(sdfSegment(p, a, b), sdfSegment(p, b, c)), sdfSegment(p, c, a));
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = (fragCoord - 0.5 * iResolution.xy) / min(iResolution.x, iResolution.y);
    vec2 p = uv * TRI_VIEW_SCALE;

    float pixel = TRI_VIEW_SCALE / min(iResolution.x, iResolution.y);

    vec3 color = BG_COLOR;

    // Triangle outline
    float d = sdfTriangleOutline(p, TRI_A, TRI_B, TRI_C);
    color = mix(color, EDGE_COLOR, smoothstep(pixel * 3.0, pixel * 1.0, d));

    // Slider positions on edges
    float tab = rhoa / (1.0 + rhoa);
    float tbc = rhob / (1.0 + rhob);
    float tca = rhoc / (1.0 + rhoc);

    vec2 sliderAB = TRI_A + tab * (TRI_B - TRI_A);
    vec2 sliderBC = TRI_B + tbc * (TRI_C - TRI_B);
    vec2 sliderCA = TRI_C + tca * (TRI_A - TRI_C);

    // Draw slider dots (anti-aliased)
    float dotRadius = 0.06;

    float dAB = length(p - sliderAB);
    color = mix(color, SLIDER_A_COLOR, smoothstep(dotRadius + pixel * 2.0, dotRadius - pixel * 2.0, dAB));

    float dBC = length(p - sliderBC);
    color = mix(color, SLIDER_B_COLOR, smoothstep(dotRadius + pixel * 2.0, dotRadius - pixel * 2.0, dBC));

    float dCA = length(p - sliderCA);
    color = mix(color, SLIDER_C_COLOR, smoothstep(dotRadius + pixel * 2.0, dotRadius - pixel * 2.0, dCA));

    // Vertex dots (small, gray)
    float vr = 0.03;
    color = mix(color, VERTEX_COLOR, smoothstep(vr + pixel, vr - pixel, length(p - TRI_A)));
    color = mix(color, VERTEX_COLOR, smoothstep(vr + pixel, vr - pixel, length(p - TRI_B)));
    color = mix(color, VERTEX_COLOR, smoothstep(vr + pixel, vr - pixel, length(p - TRI_C)));

    fragColor = vec4(color, 1.0);
}
`,Eo=Object.freeze(Object.defineProperty({__proto__:null,default:vo},Symbol.toStringTag,{value:"Module"})),bo=`// Color palette
const vec3 CREAM = vec3(0.85, 0.8, 0.75);
const vec3 SLATE = vec3(0.35, 0.4, 0.45);
const vec3 SOFT_RED  = vec3(0.9, 0.3, 0.3);
const vec3 SOFT_BLUE = vec3(0.3, 0.3, 0.9);
const vec3 BLUE = vec3(0.0, 0.0, 1.0);
const vec3 WHITE = vec3(1.0, 1.0, 1.0);
const vec3 BLACK = vec3(0.0, 0.0, 0.0);

const vec3 DISC_COMPLEMENT_COLOR = WHITE;
const vec3 DISC_INTERIOR_COLOR   = WHITE;
const vec3 DISC_BOUNDARY_COLOR   = BLACK;
const vec3 GEODESIC_COLOR  = BLACK;
const vec3 FUNDAMENTAL_DOMAIN_COLOR = WHITE;
const vec3 ORBIT_POINT_COLOR = GEODESIC_COLOR;
const vec3 DRAGGABLE_POINT_COLOR = BLACK;

// Generator encoding:
// 0 = A, 1 = Ai, 2 = B, 3 = Bi
int invGen(int g) { return g ^ 1; } // 0<->1, 2<->3

mat3 genMat(int g, mat3 LA, mat3 LAi, mat3 LB, mat3 LBi) {
    if (g == 0) return LA;
    if (g == 1) return LAi;
    if (g == 2) return LB;
    return LBi;
}

struct Node {
    mat3 M;      // matrix for current word
    int  last;   // last generator used, -1 for identity
    int  len;    // word length
};

#define MAXLEN 4
#define MAX_WORDS_4 161

// Builds identity + all reduced words of length <= 4.
// Returns number of matrices written (should be 161 when maxLen=4).
int buildReducedWordMats4(
    out mat3 outMats[MAX_WORDS_4],
    int maxLen,               // pass 4
    mat3 LA, mat3 LAi, mat3 LB, mat3 LBi
){
    // Explicit stack for DFS
    Node stack[MAX_WORDS_4];
    int sp = 0;

    // Push identity (empty word)
    stack[sp].M    = mat3(1.0);
    stack[sp].last = -1;
    stack[sp].len  = 0;
    sp++;

    int count = 0;

    while (sp > 0) {
        // Pop
        sp--;
        Node cur = stack[sp];

        // Record matrix for this word
        outMats[count] = cur.M;
        count++;

        // Stop if reached requested length
        if (cur.len >= maxLen) continue;

        // Append each generator unless it immediately cancels the last one
        for (int g = 0; g < 4; g++) {
            if (cur.last >= 0 && g == invGen(cur.last)) continue;

            Node nxt;
            // Convention: left-multiply when appending a letter
            // Word g1 g2 ... gk corresponds to M = G(g1)*G(g2)*...*G(gk)
            nxt.M    = genMat(g, LA, LAi, LB, LBi) * cur.M;
            nxt.last = g;
            nxt.len  = cur.len + 1;

            stack[sp] = nxt;
            sp++;
        }
    }

    return count;
}


vec2 cmul(vec2 a, vec2 b) {
    return vec2(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
}

vec2 cdiv(vec2 a, vec2 b) {
    float denom = dot(b, b);
    return vec2(a.x * b.x + a.y * b.y, a.y * b.x - a.x * b.y) / denom;
}

float minkowskiDot(vec3 a, vec3 b) {
    return a.x * b.x + a.y * b.y - a.z * b.z;
}

float distanceMinkowski(vec3 p, vec3 q) {
    return acosh(-minkowskiDot(p, q));
}

vec3 midPointMinkowski(vec3 p, vec3 q) {
    // Midpoint in hyperboloid model
    vec3 sum = p + q;
    float mdot = minkowskiDot(sum, sum);
    return sum / sqrt(-mdot);
}

vec3 euclideanCross(vec3 a, vec3 b) {
    return vec3(
        a.y * b.z - a.z * b.y,
        a.z * b.x - a.x * b.z,
        a.x * b.y - a.y * b.x
    );
}

// vec3 minkowskiCross(vec3 u, vec3 v){
//     return vec3(0.0);
// }

// Minkowski metric J = diag(1,1,-1)
// Returns L in SO^+(2,1) corresponding to g in SL(2,R) (or PSL(2,R)).
// mat3 PSL2_to_Lorentz(float a, float b, float c, float d)
// Maps SL(2,R) to SO(2,1) via the irreducible representation on
// homogeneous quadratics, conjugated to preserve x² + y² - z²
mat3 PSL2_to_Lorentz(float a, float b, float c, float d) {
    // Extract entries (GLSL is column-major)
    // float a = A[0][0];  // α (top-left)
    // float b = A[1][0];  // β (top-right)
    // float c = A[0][1];  // γ (bottom-left)
    // float d = A[1][1];  // δ (bottom-right)

    // Precompute squares
    float a2 = a * a;
    float b2 = b * b;
    float c2 = c * c;
    float d2 = d * d;

    // Build matrix column by column (GLSL mat3 is column-major)
    return mat3(
        // Column 0
        a*d + b*c,
        a*c - b*d,
        a*c + b*d,
        // Column 1
        a*b - c*d,
        (a2 + d2 - b2 - c2) * 0.5,
        (a2 - d2 - c2 + b2) * 0.5,
        // Column 2
        a*b + c*d,
        (a2 - d2 + c2 - b2) * 0.5,
        (a2 + d2 + b2 + c2) * 0.5
    );
}

mat3 lorentzInverse(mat3 L)
{
    // For J=diag(1,1,-1): L^{-1} = J * L^T * J
    mat3 J = mat3(
        vec3( 1.0, 0.0, 0.0),
        vec3( 0.0, 1.0, 0.0),
        vec3( 0.0, 0.0,-1.0)
    );
    return J * transpose(L) * J;
}

vec3 diskToHyperboloid(vec2 u) {
    // Map from Poincare disk to hyperboloid model
    // let u = (u_1, u_2) be a point in the disk model and r = ||u||
    // then the corresponding point in the hyperboloid model is
    // x_1 = 2 u_1 / (1 - r^2)
    // x_2 = 2 u_2 / (1 - r^2)
    // x_3 = (1 + r^2) / (1 - r^2)
    float r2 = dot(u, u);
    return vec3(2.0 * u.x / (1.0 - r2), 2.0 * u.y / (1.0 - r2), (1.0 + r2) / (1.0 - r2));
}

vec2 hyperboloidToDisk(vec3 x) {
    // Map from hyperboloid model to Poincare disk
    // let x = (x_1, x_2, x_3) be a point in the hyperboloid model
    // then the corresponding point in the disk model is
    // u_1 = x_1 / (1 + x_3)
    // u_2 = x_2 / (1 + x_3)
    return vec2(x.x / (1.0 + x.z), x.y / (1.0 + x.z));
}

float distToGeodesic(vec3 n, vec3 p){
    // n is the normal vector to the geodesic plane in Minkowski space
    // p is the point we want the distance to
    // The distance from p to the geodesic is given by
    float nn = minkowskiDot(n,n);              // should be > 0 for spacelike
    float s  = minkowskiDot(n,p) / sqrt(nn);   // normalize implicitly
    return asinh(abs(s));
}

vec3 bisector(vec3 a, vec3 b) {
    // The level set of points equidistant from a and b is given by
    // all the points x such that <x, a - b> = 0 in the Minkowski metric.
    vec3 n = a - b; // normal vector to bisector plane
    float nn = minkowskiDot(n, n);
    if (nn < 0.0) {
        // n is timelike, negate to make spacelike
        n = -n;
        nn = -nn;
    }
    // Normalize n to be unit spacelike vector
    n = n / sqrt(nn);
    return n;
}

vec2 normalize_coord(vec2 fragCoord) {
    vec2 u = fragCoord / iResolution.xy;
    u -= vec2(0.5);
    u.x *= iResolution.x / iResolution.y;

    float zoom = 1.0;   // zoom > 1.0 zooms IN (shows more detail near center)
    u = (2.0 / zoom) * u;

    return u;           // this u is the actual Poincaré disk coordinate
}


bool insideHalfplane(vec3 n, vec3 p) {
    // Returns true if point p is in the half-plane defined by normal n
    // (i.e. <n, p>_Minkowski > 0)
    float s = minkowskiDot(n, p);
    return s > 0.0;
}

float sdfTriangleOutline(vec2 p, vec2 a, vec2 b, vec2 c) {
    // Distance to edge a-b
    vec2 e0 = b - a;
    vec2 v0 = p - a;
    float d0 = length(v0 - e0 * clamp(dot(v0, e0) / dot(e0, e0), 0.0, 1.0));
    
    // Distance to edge b-c
    vec2 e1 = c - b;
    vec2 v1 = p - b;
    float d1 = length(v1 - e1 * clamp(dot(v1, e1) / dot(e1, e1), 0.0, 1.0));
    
    // Distance to edge c-a
    vec2 e2 = a - c;
    vec2 v2 = p - c;
    float d2 = length(v2 - e2 * clamp(dot(v2, e2) / dot(e2, e2), 0.0, 1.0));
    
    return min(min(d0, d1), d2);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 u = normalize_coord(fragCoord);

    // Outside disk
    if (dot(u,u) >= 1.0) {
        fragColor = vec4(DISC_COMPLEMENT_COLOR,1.0);
        return;
    }

    // Boundary of disk 
    if (abs(dot(u,u) - 1.0) < 0.01) {
        fragColor = vec4(GEODESIC_COLOR,1.0);
        return;
    }
    vec2 mouse = normalize_coord(iMouse.xy);
    vec3 mouseHyperboloid = diskToHyperboloid(mouse);
    // Hyperboloid point for this pixel
    vec3 z = diskToHyperboloid(u);

    // PSL(2,R) generators
    float s1 = sqrt(rhoa*rhoc);
    float a1 = s1;
    float b1 = (rhoc + 1.0) / s1;
    float c1 = 0.0;
    float d1 = 1.0 / s1;

    float s2 = sqrt(rhoa*rhob);
    float a2 = 1.0 / s2;
    float b2 = 0.0;
    float c2 = -(rhoa*(1.0 + rhob)) / s2;
    float d2 = s2;

    // Lorentz matrices
    mat3 LA  = PSL2_to_Lorentz(a1,b1,c1,d1);
    mat3 LB  = PSL2_to_Lorentz(a2,b2,c2,d2);
    mat3 LAi = lorentzInverse(LA);
    mat3 LBi = lorentzInverse(LB);

    // Basepoint
    vec3 x0 = vec3(0.22, -0.5, 1.0);
    // project to hyperboloid
    float mdot = minkowskiDot(x0, x0);
    x0 = x0 / sqrt(-mdot);

    // Orbit points
    vec3 p0  = mouseHyperboloid;
    vec3 pA  = LA  * p0;
    vec3 pAi = LAi * p0;
    vec3 pB  = LB  * p0;
    vec3 pBi = LBi * p0;

    float eps = 0.0001;  
    // Hyperbolic radius for drawing points
    float pointRadius = 0.1;

    vec3 color = DISC_INTERIOR_COLOR;


    // All translates of pA and pB by words of length at most N
    int N = 2;
    vec3 current = p0;

    // Bisectors
    vec3 bisector0A =  bisector(p0, pA);
    vec3 bisector0B =  bisector(p0, pB);
    vec3 bisector0Ai = bisector(p0, pAi);
    vec3 bisector0Bi = bisector(p0, pBi);


    // Fundamental domain
    if (insideHalfplane(bisector0A, z) &&
        insideHalfplane(bisector0B, z) &&
        insideHalfplane(bisector0Ai, z) &&
        insideHalfplane(bisector0Bi, z)) {
        color = FUNDAMENTAL_DOMAIN_COLOR;
    }

        // Render a small triangle at the origin
    float scale = 10.5;
    vec2 a = scale * vec2(0.0,     0.02);
    vec2 b = scale * vec2(-0.01732, -0.01);
    vec2 c = scale * vec2(0.01732, -0.01);
    vec2 p0_disk = hyperboloidToDisk(p0);

    float tab = rhoa/(1.0 + rhoa);
    float tbc = rhob/(1.0 + rhob);
    float tca = rhoc/(1.0 + rhoc);

    if (length(u - (a + tab*(b - a)) - p0_disk) < 0.02) color = BLACK;
    if (length(u - (b + tbc*(c - b)) - p0_disk) < 0.02) color = BLACK;
    if (length(u - (c + tca*(a - c)) - p0_disk) < 0.02) color = BLACK;

    if(sdfTriangleOutline(u - p0_disk, a, b, c) < 0.005) {
        color = BLACK;
    }

    for (int i = 0; i < 128; i++) {
        // Translates of bisector geodesics
        if(distToGeodesic(matrices[i] * bisector0A, z) < pointRadius) color = GEODESIC_COLOR;
        if(distToGeodesic(matrices[i] * bisector0B, z) < pointRadius) color = GEODESIC_COLOR;
        if(distToGeodesic(matrices[i] * bisector0Ai, z) < pointRadius) color = GEODESIC_COLOR;
        if(distToGeodesic(matrices[i] * bisector0Bi, z) < pointRadius) color = GEODESIC_COLOR;
        // Point orbit of p0
        if (distanceMinkowski(matrices[i] * p0, z) < pointRadius) color = ORBIT_POINT_COLOR;
    }

    // Reference points
    if (distanceMinkowski(p0,  z) < pointRadius) color = DRAGGABLE_POINT_COLOR; // white




    fragColor = vec4(color,1.0);
}

`,yo=Object.freeze(Object.defineProperty({__proto__:null,default:bo},Symbol.toStringTag,{value:"Module"})),_o=`void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 uv = fragCoord / iResolution.xy;
    vec4 prev = texelFetch(iChannel0, ivec2(fragCoord), 0);

    // Animated pattern
    float t = iTime;
    vec3 col = 0.5 + 0.5 * cos(t + uv.xyx * 3.0 + vec3(0, 2, 4));

    // Trail effect
    col = mix(prev.rgb, col, 0.05);

    fragColor = vec4(col, 1.0);
}
`,To=Object.freeze(Object.defineProperty({__proto__:null,default:_o},Symbol.toStringTag,{value:"Module"})),xo=`void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec4 data = texelFetch(iChannel0, ivec2(fragCoord), 0);
    fragColor = vec4(data.rgb, 1.0);
}
`,wo=Object.freeze(Object.defineProperty({__proto__:null,default:xo},Symbol.toStringTag,{value:"Module"})),Co=`void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 uv = fragCoord / iResolution.xy;
    float t = iTime * 0.5;
    vec3 col = 0.5 + 0.5 * cos(t + uv.xyx + vec3(0, 2, 4));
    fragColor = vec4(col, 1.0);
}
`,Ro=Object.freeze(Object.defineProperty({__proto__:null,default:Co},Symbol.toStringTag,{value:"Module"})),So=`#define PI 3.14159265358979
#define TAU 6.28318530717959

// ─── Viewport constants (must match script.js) ──────────────────────────────
const float UHP_SCALE = 4.0;
const float UHP_YOFF  = 1.5;
const float DISC_SCALE = 2.5;

// ─── Colors ──────────────────────────────────────────────────────────────────
const vec3 BG_COLOR       = vec3(1.0, 1.0, 0.98);
const vec3 EXTERIOR_COLOR = vec3(0.88, 0.88, 0.86);
const vec3 BOUNDARY_COLOR = vec3(0.15, 0.15, 0.2);
const vec3 GEODESIC_COLOR = vec3(0.1, 0.3, 0.7);
const vec3 POINT_A_COLOR  = vec3(0.85, 0.2, 0.2);
const vec3 POINT_B_COLOR  = vec3(0.15, 0.6, 0.3);

// ─── Cayley transform ───────────────────────────────────────────────────────
// Complex division helper: (a + ib) / (c + id)
vec2 cdiv(vec2 num, vec2 den) {
    float d = dot(den, den);
    return vec2(dot(num, den), num.y * den.x - num.x * den.y) / d;
}

// UHP → Poincaré disc:  w = (z − i) / (z + i)
vec2 uhpToDisc(vec2 z) {
    return cdiv(vec2(z.x, z.y - 1.0), vec2(z.x, z.y + 1.0));
}

// Poincaré disc → UHP:  z = i(1 + w) / (1 − w)
vec2 discToUHP(vec2 w) {
    return cdiv(vec2(-w.y, 1.0 + w.x), vec2(1.0 - w.x, -w.y));
}

// ─── SDF helpers ─────────────────────────────────────────────────────────────

// SDF to a line segment a→b
float sdfSegment(vec2 p, vec2 a, vec2 b) {
    vec2 ab = b - a;
    float t = clamp(dot(p - a, ab) / dot(ab, ab), 0.0, 1.0);
    return length(p - a - t * ab);
}

// SDF to a circular arc going CCW from aStart for arcSpan radians
// on circle centered at C with radius R.
float sdfArc(vec2 p, vec2 C, float R, float aStart, float arcSpan) {
    float ap = atan(p.y - C.y, p.x - C.x);
    float da = mod(ap - aStart, TAU);       // angle of p relative to arc start [0, TAU)
    float t;
    if (da <= arcSpan) {
        t = da;                              // on the arc
    } else {
        // Outside: snap to whichever endpoint is closer
        t = (TAU - da < da - arcSpan) ? 0.0 : arcSpan;
    }
    vec2 closest = C + R * vec2(cos(aStart + t), sin(aStart + t));
    return length(p - closest);
}

// ─── Geodesic SDF in Upper Half-Plane ────────────────────────────────────────
float geodesicSDF_UHP(vec2 p, vec2 z1, vec2 z2) {
    // Vertical geodesic (degenerate semicircle)
    if (abs(z1.x - z2.x) < 0.001) {
        float yc = clamp(p.y, min(z1.y, z2.y), max(z1.y, z2.y));
        return length(p - vec2(0.5 * (z1.x + z2.x), yc));
    }

    // Semicircle centered on x-axis
    float cx = (dot(z1, z1) - dot(z2, z2)) / (2.0 * (z1.x - z2.x));
    float R  = length(z1 - vec2(cx, 0.0));
    vec2  C  = vec2(cx, 0.0);

    // Both endpoint angles are in (0, π) since y > 0
    float a1 = atan(z1.y, z1.x - cx);
    float a2 = atan(z2.y, z2.x - cx);

    // CCW arc from smaller to larger angle (always valid in upper half-plane)
    return sdfArc(p, C, R, min(a1, a2), abs(a2 - a1));
}

// ─── Geodesic SDF in Poincaré Disc ──────────────────────────────────────────
float geodesicSDF_Disc(vec2 p, vec2 w1, vec2 w2) {
    // Diameter case (w1, w2, origin are collinear)
    float cv = w1.x * w2.y - w1.y * w2.x;
    if (abs(cv) < 0.0001) {
        return sdfSegment(p, w1, w2);
    }

    // Circle orthogonal to unit circle through w1 and w2
    float r1sq = dot(w1, w1), r2sq = dot(w2, w2);
    float det  = 2.0 * cv;
    vec2  C = vec2(
        (w2.y * (r1sq + 1.0) - w1.y * (r2sq + 1.0)) / det,
        (w1.x * (r2sq + 1.0) - w2.x * (r1sq + 1.0)) / det
    );
    float R = sqrt(max(dot(C, C) - 1.0, 0.0001));

    float a1 = atan(w1.y - C.y, w1.x - C.x);
    float a2 = atan(w2.y - C.y, w2.x - C.x);

    // Pick the arc that lies inside the unit disc
    float span = mod(a2 - a1, TAU);
    vec2 mid = C + R * vec2(cos(a1 + span * 0.5), sin(a1 + span * 0.5));

    if (dot(mid, mid) < 1.0) {
        return sdfArc(p, C, R, a1, span);
    } else {
        return sdfArc(p, C, R, a2, TAU - span);
    }
}
`,Lo=Object.freeze(Object.defineProperty({__proto__:null,default:So},Symbol.toStringTag,{value:"Module"})),Po=`void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    // Map pixel → disc coordinates
    vec2 uv = (fragCoord - 0.5 * iResolution.xy) / min(iResolution.x, iResolution.y);
    vec2 p  = uv * DISC_SCALE;

    float pixel = DISC_SCALE / min(iResolution.x, iResolution.y);
    float aa    = 1.5 * pixel;
    float r2    = dot(p, p);

    // Outside disc → exterior + boundary ring
    if (r2 > 1.0) {
        float bdist = abs(length(p) - 1.0);
        vec3 c = mix(BOUNDARY_COLOR, EXTERIOR_COLOR, smoothstep(pixel * 0.5, pixel * 2.0, bdist));
        fragColor = vec4(c, 1.0);
        return;
    }

    vec3 col = BG_COLOR;

    // Boundary circle (inside edge)
    float bdist = 1.0 - length(p);
    col = mix(BOUNDARY_COLOR, col, smoothstep(pixel * 0.5, pixel * 2.0, bdist));

    // Convert UHP endpoints to disc
    vec2 w1 = uhpToDisc(uP1);
    vec2 w2 = uhpToDisc(uP2);

    // Geodesic segment with correct hyperbolic width
    float geoDist  = geodesicSDF_Disc(p, w1, w2);
    float conformal = max((1.0 - r2) * 0.5, 0.0);          // (1 − |z|²)/2
    float hypThick  = uLineWidth * conformal;
    float geoLine   = smoothstep(hypThick + aa, max(hypThick - aa, 0.0), geoDist);
    col = mix(col, GEODESIC_COLOR, geoLine);

    // Endpoint A
    float ptR  = 0.1;
    float c1   = max((1.0 - dot(w1, w1)) * 0.5, 0.001);
    float d1   = length(p - w1);
    float er1  = ptR * c1;
    col = mix(col, POINT_A_COLOR, smoothstep(er1 + aa, max(er1 - aa, 0.0), d1));

    // Endpoint B
    float c2   = max((1.0 - dot(w2, w2)) * 0.5, 0.001);
    float d2   = length(p - w2);
    float er2  = ptR * c2;
    col = mix(col, POINT_B_COLOR, smoothstep(er2 + aa, max(er2 - aa, 0.0), d2));

    fragColor = vec4(col, 1.0);
}
`,Ao=Object.freeze(Object.defineProperty({__proto__:null,default:Po},Symbol.toStringTag,{value:"Module"})),Oo=`void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    // Map pixel → UHP coordinates
    vec2 uv = (fragCoord - 0.5 * iResolution.xy) / min(iResolution.x, iResolution.y);
    vec2 p  = vec2(uv.x * UHP_SCALE, uv.y * UHP_SCALE + UHP_YOFF);

    float pixel = UHP_SCALE / min(iResolution.x, iResolution.y);
    float aa    = 1.5 * pixel;

    // Below x-axis → exterior
    if (p.y < 0.0) {
        // Draw x-axis boundary line
        float axD = abs(p.y);
        vec3 c = mix(BOUNDARY_COLOR, EXTERIOR_COLOR, smoothstep(pixel * 0.5, pixel * 2.0, axD));
        fragColor = vec4(c, 1.0);
        return;
    }

    vec3 col = BG_COLOR;

    // X-axis boundary
    col = mix(BOUNDARY_COLOR, col, smoothstep(pixel * 0.5, pixel * 2.0, p.y));

    // Geodesic segment with correct hyperbolic width
    float geoDist     = geodesicSDF_UHP(p, uP1, uP2);
    float hypThick    = uLineWidth * max(p.y, 0.001);   // Euclidean half-width = hyp_width × y
    float geoLine     = smoothstep(hypThick + aa, max(hypThick - aa, 0.0), geoDist);
    col = mix(col, GEODESIC_COLOR, geoLine);

    // Endpoint A (constant hyperbolic radius)
    float ptR   = 0.1;
    float eucR1 = ptR * uP1.y;
    float d1    = length(p - uP1);
    col = mix(col, POINT_A_COLOR, smoothstep(eucR1 + aa, max(eucR1 - aa, 0.0), d1));

    // Endpoint B
    float eucR2 = ptR * uP2.y;
    float d2    = length(p - uP2);
    col = mix(col, POINT_B_COLOR, smoothstep(eucR2 + aa, max(eucR2 - aa, 0.0), d2));

    fragColor = vec4(col, 1.0);
}
`,Fo=Object.freeze(Object.defineProperty({__proto__:null,default:Oo},Symbol.toStringTag,{value:"Module"})),Mo=`void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    vec3 col = vec3(0.05);

    // Mouse: circle at cursor position
    vec2 mouse = iMouse.xy / iResolution.xy;
    float d = length(uv - mouse);
    col += vec3(0.8) * smoothstep(0.02, 0.005, d);

    // Click: border flash
    if (iMousePressed) {
        float border = min(min(uv.x, 1.0 - uv.x), min(uv.y, 1.0 - uv.y));
        col += vec3(1.0, 0.4, 0.2) * smoothstep(0.02, 0.005, border);
    }

    // Keyboard: WASD lights up quadrants
    float hw = step(0.5, uv.x);  // 0=left, 1=right
    float hh = step(0.5, uv.y);  // 0=bottom, 1=top

    if (isKeyDown(KEY_J)) col += vec3(0.3, 0.05, 0.05) * (1.0 - hw) * hh;        // top-left
    if (isKeyDown(KEY_L)) col += vec3(0.05, 0.3, 0.05) * hw * hh;                 // top-right
    if (isKeyDown(KEY_K)) col += vec3(0.05, 0.05, 0.3) * (1.0 - hw) * (1.0 - hh); // bottom-left
    if (isKeyDown(KEY_I)) col += vec3(0.3, 0.3, 0.05) * hw * (1.0 - hh);          // bottom-right

    // Space: flash entire screen
    if (isKeyDown(KEY_SPACE)) col += vec3(0.15);

    // Grid lines at midpoint
    float gridX = smoothstep(0.003, 0.001, abs(uv.x - 0.5));
    float gridY = smoothstep(0.003, 0.001, abs(uv.y - 0.5));
    col += vec3(0.1) * max(gridX, gridY);

    fragColor = vec4(col, 1.0);
}
`,Do=Object.freeze(Object.defineProperty({__proto__:null,default:Mo},Symbol.toStringTag,{value:"Module"})),Io=`#define PI 3.14159265358979
#define TAU 6.28318530717959

const float PLANE_SCALE = 4.0;

// ─── Palette ─────────────────────────────────────────────────────────────────
const vec3 BG_COLOR     = vec3(0.94, 0.94, 0.92);
const vec3 GRID_A       = vec3(0.95, 0.91, 0.87);
const vec3 GRID_B       = vec3(0.40, 0.58, 0.75);
const vec3 GRID_LINE    = vec3(0.25, 0.25, 0.31);
const vec3 POLE_COLOR = vec3(0.85, 0.19, 0.13);

// ─── Complex arithmetic ─────────────────────────────────────────────────────
vec2 cinv(vec2 z) {
    float r2 = dot(z, z);
    if (r2 < 1e-8) return vec2(1e6);
    return vec2(z.x, -z.y) / r2;            // 1/z = z̄ / |z|²
}

// ─── Möbius transformation f(z) = 1/(z − p) ────────────────────────────────
// Pole at p (maps p → ∞, ∞ → 0).
vec2 mobius(vec2 z, vec2 p) {
    return cinv(z - p);
}

// ─── Stereographic projection (north pole = (0,0,1) → ∞) ───────────────────
vec2 stereoProject(vec3 s) {
    float denom = 1.0 - s.z;
    if (abs(denom) < 1e-6) return vec2(1e6); // north pole → ∞
    return s.xy / denom;
}

vec3 stereoInverse(vec2 p) {
    float r2 = dot(p, p);
    return vec3(2.0 * p, r2 - 1.0) / (r2 + 1.0);
}

// ─── Ray-sphere intersection (sphere at origin, returns t or −1) ────────────
float raySphere(vec3 ro, vec3 rd, float radius) {
    float b = dot(ro, rd);
    float c = dot(ro, ro) - radius * radius;
    float h = b * b - c;
    if (h < 0.0) return -1.0;
    return -b - sqrt(h);
}

// ─── Grid / checkerboard with fwidth anti-aliasing ──────────────────────────
vec3 gridColor(vec2 p) {
    vec2 fw  = fwidth(p);
    float mf = max(fw.x, fw.y);
    vec3 avg = mix(GRID_A, GRID_B, 0.5);

    // Too dense (near poles / singularities) → solid average
    if (mf > 0.5 || dot(p, p) > 1e4) return avg;

    // Gradual blend toward average at moderate density
    float blend = smoothstep(0.15, 0.5, mf);

    // Checkerboard
    bool check = mod(floor(p.x) + floor(p.y), 2.0) == 0.0;
    vec3 col = check ? GRID_A : GRID_B;
    col = mix(col, avg, blend);

    // Grid lines
    vec2 f    = fract(p);
    float gd  = min(min(f.x, 1.0 - f.x), min(f.y, 1.0 - f.y));
    float lw  = 0.03;
    col = mix(GRID_LINE, col, smoothstep(lw, lw + mf * 2.0, gd));

    return col;
}
`,ko=Object.freeze(Object.defineProperty({__proto__:null,default:Io},Symbol.toStringTag,{value:"Module"})),Uo=`void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = (fragCoord - 0.5 * iResolution.xy) / min(iResolution.x, iResolution.y);
    float scale = PLANE_SCALE / uInvZoom;
    vec2 p  = uv * scale + uInvCenter;

    float pixel = scale / min(iResolution.x, iResolution.y);

    // Apply Möbius transformation: w = 1/(z − pole)
    vec2 w = mobius(p, uPole);

    // Grid at the transformed coordinate
    // (fwidth handles the singularity near the pole gracefully)
    vec3 col = gridColor(w);

    // Mark the origin (image of ∞)
    float od = length(p);
    col = mix(col, vec3(0.15, 0.6, 0.3), smoothstep(pixel * 6.0, pixel * 2.0, od));

    fragColor = vec4(col, 1.0);
}
`,Bo=Object.freeze(Object.defineProperty({__proto__:null,default:Uo},Symbol.toStringTag,{value:"Module"})),No=`void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = (fragCoord - 0.5 * iResolution.xy) / min(iResolution.x, iResolution.y);
    float scale = PLANE_SCALE / uPlaneZoom;
    vec2 p  = uv * scale + uPlaneCenter;

    float pixel = scale / min(iResolution.x, iResolution.y);

    // Checkerboard grid
    vec3 col = gridColor(p);

    // Pole marker
    float pd = length(p - uPole);
    col = mix(col, POLE_COLOR, smoothstep(pixel * 6.0, pixel * 2.0, pd));

    fragColor = vec4(col, 1.0);
}
`,$o=Object.freeze(Object.defineProperty({__proto__:null,default:No},Symbol.toStringTag,{value:"Module"})),zo=`void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = (fragCoord - 0.5 * iResolution.xy) / min(iResolution.x, iResolution.y);

    // ── Camera: slow orbit, Z-up ─────────────────────────────────────────────
    float angle = iTime * 0.15;
    vec3 ro     = vec3(4.0 * cos(angle), 4.0 * sin(angle), 1.8);
    vec3 target = vec3(0.0);
    vec3 up     = vec3(0.0, 0.0, 1.0);

    vec3 fwd   = normalize(target - ro);
    vec3 right = normalize(cross(fwd, up));
    vec3 camUp = cross(right, fwd);
    vec3 rd    = normalize(uv.x * right + uv.y * camUp + 2.0 * fwd);

    // ── Ray-sphere intersection ──────────────────────────────────────────────
    float t = raySphere(ro, rd, 1.0);

    if (t < 0.0) {
        fragColor = vec4(BG_COLOR, 1.0);
        return;
    }

    vec3 hit = ro + t * rd;
    vec3 N   = normalize(hit);

    // ── Texture via stereographic projection ─────────────────────────────────
    vec2 planeCoord = stereoProject(hit);
    vec3 col = gridColor(planeCoord);

    // ── Mark the pole on the sphere ──────────────────────────────────────────
    vec3 poleSphere = stereoInverse(uPole);
    float poleDist  = acos(clamp(dot(N, poleSphere), -1.0, 1.0)); // geodesic dist
    col = mix(col, POLE_COLOR, smoothstep(0.08, 0.03, poleDist));

    // ── Mark the image of ∞ (the origin) on the sphere ──────────────────────
    vec3 zeroSphere = stereoInverse(vec2(0.0));      // south pole
    float zeroDist  = acos(clamp(dot(N, zeroSphere), -1.0, 1.0));
    col = mix(col, vec3(0.15, 0.6, 0.3), smoothstep(0.08, 0.03, zeroDist));

    // ── Lighting ─────────────────────────────────────────────────────────────
    vec3 lightDir = normalize(vec3(1.0, -2.0, 3.0));
    float diff    = max(dot(N, lightDir), 0.0);
    col *= 0.35 + 0.65 * diff;

    // Rim light
    float rim = pow(1.0 - max(dot(N, -rd), 0.0), 4.0);
    col += rim * 0.12;

    fragColor = vec4(col, 1.0);
}
`,jo=Object.freeze(Object.defineProperty({__proto__:null,default:zo},Symbol.toStringTag,{value:"Module"})),Vo=`// Julia Set Viewer — with zoom via uCenterJ / uZoomJ
// Julia parameter c is taken from Mandelbrot view's mouse position.

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 0.5);
    vec3 d = vec3(0.8, 0.9, 0.3);
    return a + b * cos(6.28318 * (c * t + d));
}

vec2 pixelToComplex(vec2 fragCoord, vec2 res, vec2 center, float zoom) {
    vec2 uv = (fragCoord - 0.5 * res) / min(res.x, res.y);
    return center + uv * 3.0 / zoom;
}

// Map mandelbrot mouse to complex plane (accounting for mandelbrot zoom)
vec2 mandelbrotMouseToComplex() {
    vec2 uv = (iMouse_mandelbrot.xy - 0.5 * iResolution_mandelbrot.xy) / min(iResolution_mandelbrot.x, iResolution_mandelbrot.y);
    return uCenterM + uv * 3.0 / uZoomM;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 z = pixelToComplex(fragCoord, iResolution.xy, uCenterJ, uZoomJ);

    // Julia parameter from mandelbrot view's mouse (zoom-aware)
    vec2 c;
    if (iMouse_mandelbrot.x == 0.0 && iMouse_mandelbrot.y == 0.0) {
        c = vec2(-0.7, 0.27015);
    } else {
        c = mandelbrotMouseToComplex();
    }

    int iter = 0;
    for (int i = 0; i < 1000; i++) {
        if (i >= uMaxIter) break;
        if (dot(z, z) > 4.0) break;
        z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + c;
        iter++;
    }

    if (iter >= uMaxIter) {
        fragColor = vec4(0, 0, 0, 1);
    } else {
        float log_zn = log(dot(z, z)) / 2.0;
        float nu = log(log_zn / log(2.0)) / log(2.0);
        float t = (float(iter) + 1.0 - nu) / float(uMaxIter);
        fragColor = vec4(palette(t), 1.0);
    }
}
`,Ho=Object.freeze(Object.defineProperty({__proto__:null,default:Vo},Symbol.toStringTag,{value:"Module"})),Go=`// Mandelbrot Set Viewer — with zoom via uCenterM / uZoomM

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.0, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}

vec2 pixelToComplex(vec2 fragCoord, vec2 res, vec2 center, float zoom) {
    vec2 uv = (fragCoord - 0.5 * res) / min(res.x, res.y);
    return center + uv * 3.0 / zoom;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 c = pixelToComplex(fragCoord, iResolution.xy, uCenterM, uZoomM);

    vec2 z = vec2(0.0);
    int iter = 0;
    for (int i = 0; i < 1000; i++) {
        if (i >= uMaxIter) break;
        if (dot(z, z) > 4.0) break;
        z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + c;
        iter++;
    }

    if (iter >= uMaxIter) {
        fragColor = vec4(0, 0, 0, 1);
    } else {
        float log_zn = log(dot(z, z)) / 2.0;
        float nu = log(log_zn / log(2.0)) / log(2.0);
        float t = (float(iter) + 1.0 - nu) / float(uMaxIter);
        fragColor = vec4(palette(t), 1.0);
    }

    // Crosshair at Julia parameter (mandelbrot mouse position)
    vec2 mouseC = pixelToComplex(iMouse.xy, iResolution.xy, uCenterM, uZoomM);
    float px = 3.0 / (min(iResolution.x, iResolution.y) * uZoomM);
    float dx = abs(c.x - mouseC.x);
    float dy = abs(c.y - mouseC.y);
    if ((dx < px && dy < px * 10.0) || (dy < px && dx < px * 10.0)) {
        fragColor = mix(fragColor, vec4(1), 0.6);
    }
}
`,Xo=Object.freeze(Object.defineProperty({__proto__:null,default:Go},Symbol.toStringTag,{value:"Module"})),Ko=`// Projective reflection group orbit visualizer
// Draws a circle at mouse position and its orbit under all group elements

vec3 hsv2rgb(vec3 c) {
    vec3 p = abs(fract(c.xxx + vec3(0.0, 2.0/3.0, 1.0/3.0)) * 6.0 - 3.0);
    return c.z * mix(vec3(1.0), clamp(p - 1.0, 0.0, 1.0), c.y);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    // Coordinates centered at origin, roughly [-4, 4] vertically
    vec2 p = (fragCoord - 0.5 * iResolution.xy) / iResolution.y * 2.0;

    vec3 col = vec3(0.02);

    // Use last click position (iMouse.zw stores click coords, stays after release)
    // Before first click, default to a point inside the domain
    vec2 click = iMouse.z > 0.5 ? iMouse.zw : vec2(0.5 * iResolution.xy + vec2(30.0, 20.0));
    vec2 mouse = (click - 0.5 * iResolution.xy) / iResolution.y * 2.0;

    // Draw orbit
    for (int i = 0; i < 128; i++) {
        if (i >= matrixCount) break;

        // Apply matrix projectively: (x, y, 1) -> M * (x, y, 1), then divide by z
        vec3 mp = matrices[i] * vec3(mouse, 1.0);
        vec2 tp = mp.xy / mp.z;

        float dist = length(p - tp);
        float circle = smoothstep(uRadius + 0.005, uRadius - 0.005, dist);

        // Color by index: identity is white, then cycle through hues
        vec3 circleCol;
        if (i == 0) {
            circleCol = vec3(1.0);  // identity: white
        } else {
            float hue = float(i - 1) / float(max(matrixCount - 1, 1));
            circleCol = hsv2rgb(vec3(hue, 0.7, 1.0));
        }

        col += circle * circleCol;
    }

    fragColor = vec4(col, 1.0);
}
`,Yo=Object.freeze(Object.defineProperty({__proto__:null,default:Ko},Symbol.toStringTag,{value:"Module"})),Wo=`void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;

    // Background: wave pattern
    float wave = 0.5 + 0.5 * sin((uv.x + uv.y) * 6.0 + iTime);
    vec3 col = vec3(0.05, 0.05, wave * 0.4);

    // Mouse cursor: bright circle at iMouse.xy
    vec2 mouse = iMouse.xy / iResolution.xy;
    float d = length(uv - mouse);
    col += vec3(0.2, 0.2, 0.8) * smoothstep(0.03, 0.01, d);

    // Pressed state: border flash
    if (iMousePressed) {
        float border = min(min(uv.x, 1.0 - uv.x), min(uv.y, 1.0 - uv.y));
        col += vec3(0.3, 0.3, 1.0) * smoothstep(0.03, 0.01, border);
    }

    fragColor = vec4(col, 1.0);
}
`,qo=Object.freeze(Object.defineProperty({__proto__:null,default:Wo},Symbol.toStringTag,{value:"Module"})),Zo=`void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;

    // Background: wave pattern
    float wave = 0.5 + 0.5 * sin(uv.y * 6.0 + iTime);
    vec3 col = vec3(0.05, wave * 0.4, 0.05);

    // Mouse cursor: bright circle at iMouse.xy
    vec2 mouse = iMouse.xy / iResolution.xy;
    float d = length(uv - mouse);
    col += vec3(0.2, 0.8, 0.2) * smoothstep(0.03, 0.01, d);

    // Pressed state: border flash
    if (iMousePressed) {
        float border = min(min(uv.x, 1.0 - uv.x), min(uv.y, 1.0 - uv.y));
        col += vec3(0.3, 1.0, 0.3) * smoothstep(0.03, 0.01, border);
    }

    fragColor = vec4(col, 1.0);
}
`,Jo=Object.freeze(Object.defineProperty({__proto__:null,default:Zo},Symbol.toStringTag,{value:"Module"})),Qo=`void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;

    // Background: wave pattern
    float wave = 0.5 + 0.5 * sin(uv.x * 6.0 + iTime);
    vec3 col = vec3(wave * 0.4, 0.05, 0.05);

    // Mouse cursor: bright circle at iMouse.xy
    vec2 mouse = iMouse.xy / iResolution.xy;
    float d = length(uv - mouse);
    col += vec3(0.8, 0.2, 0.2) * smoothstep(0.03, 0.01, d);

    // Pressed state: border flash
    if (iMousePressed) {
        float border = min(min(uv.x, 1.0 - uv.x), min(uv.y, 1.0 - uv.y));
        col += vec3(1.0, 0.3, 0.3) * smoothstep(0.03, 0.01, border);
    }

    fragColor = vec4(col, 1.0);
}
`,er=Object.freeze(Object.defineProperty({__proto__:null,default:Qo},Symbol.toStringTag,{value:"Module"})),tr=`void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    float checker = mod(floor(uv.x * 8.0) + floor(uv.y * 8.0 + iTime), 2.0);
    fragColor = vec4(vec3(checker * 0.3 + 0.1, 0.1, checker * 0.6 + 0.2), 1.0);
}
`,nr=Object.freeze(Object.defineProperty({__proto__:null,default:tr},Symbol.toStringTag,{value:"Module"})),ir=`void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    float stripes = 0.5 + 0.5 * sin(uv.x * 20.0 + iTime * 3.0);
    float gradient = uv.y;
    fragColor = vec4(0.1, stripes * gradient, gradient, 1.0);
}
`,or=Object.freeze(Object.defineProperty({__proto__:null,default:ir},Symbol.toStringTag,{value:"Module"})),rr=`void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    vec3 col = 0.5 + 0.5 * cos(iTime + uv.xyx + vec3(0, 2, 4));
    fragColor = vec4(col, 1.0);
}
`,sr=Object.freeze(Object.defineProperty({__proto__:null,default:rr},Symbol.toStringTag,{value:"Module"})),ar=`void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    float d = length(uv - 0.5);
    float ring = smoothstep(0.01, 0.0, abs(d - 0.3 - 0.1 * sin(iTime)));
    fragColor = vec4(ring, ring * 0.5, 0.2, 1.0);
}
`,cr=Object.freeze(Object.defineProperty({__proto__:null,default:ar},Symbol.toStringTag,{value:"Module"})),It="Moduli Space N=4 (Split View)",kt=["triangle","hyperbolic"],Ut="split",Bt=!0,Nt={rhoa:{type:"float",value:2,min:0,max:10,step:.001,label:"rho a"},rhob:{type:"float",value:2.5,min:0,max:10,step:.001,label:"rho b"},rhoc:{type:"float",value:1.5,min:0,max:10,step:.001,label:"rho c"},uCenter:{type:"vec2",value:[0,0],hidden:!0},matrixCount:{type:"int",value:1,hidden:!0},matrices:{type:"mat3",count:128}},lr={title:It,views:kt,layout:Ut,controls:Bt,uniforms:Nt},$t=Object.freeze(Object.defineProperty({__proto__:null,controls:Bt,default:lr,layout:Ut,title:It,uniforms:Nt,views:kt},Symbol.toStringTag,{value:"Module"})),zt="Fundamental Domain for Moduli Space of dilation surfaces modelled on a four punctured sphere",jt="fullscreen",Vt=!0,Ht={rhoa:{type:"float",value:2,min:0,max:10,step:.001,label:"rho a"},rhob:{type:"float",value:2.5,min:0,max:10,step:.001,label:"rho b"},rhoc:{type:"float",value:1.5,min:0,max:10,step:.001,label:"rho c"},matrixCount:{type:"int",value:1,hidden:!0},matrices:{type:"mat3",count:128}},Gt={iChannel1:"keyboard"},ur={title:zt,public:!0,layout:jt,controls:Vt,uniforms:Ht,Image:Gt},Xt=Object.freeze(Object.defineProperty({__proto__:null,Image:Gt,controls:Vt,default:ur,layout:jt,title:zt,uniforms:Ht},Symbol.toStringTag,{value:"Module"})),Kt="default",Yt=!0,Wt={iChannel0:"BufferA"},qt={iChannel0:"BufferA"},dr={layout:Kt,controls:Yt,Image:Wt,BufferA:qt},Zt=Object.freeze(Object.defineProperty({__proto__:null,BufferA:qt,Image:Wt,controls:Yt,default:dr,layout:Kt},Symbol.toStringTag,{value:"Module"})),Jt="default",Qt=!0,hr={layout:Jt,controls:Qt},en=Object.freeze(Object.defineProperty({__proto__:null,controls:Qt,default:hr,layout:Jt},Symbol.toStringTag,{value:"Module"})),tn="Hyperbolic Geodesic",nn=["uhp","disc"],on="split",rn=!0,sn={uP1:{type:"vec2",value:[-.5,1.2],hidden:!0},uP2:{type:"vec2",value:[.8,.6],hidden:!0},uLineWidth:{type:"float",value:.05,min:.005,max:.3,step:.005,label:"Hyperbolic Width"}},mr={title:tn,views:nn,layout:on,controls:rn,uniforms:sn},an=Object.freeze(Object.defineProperty({__proto__:null,controls:rn,default:mr,layout:on,title:tn,uniforms:sn,views:nn},Symbol.toStringTag,{value:"Module"})),cn="Input Test",ln="fullscreen",un=!0,dn={keyboard:"keyboard"},fr={title:cn,layout:ln,controls:un,textures:dn},hn=Object.freeze(Object.defineProperty({__proto__:null,controls:un,default:fr,layout:ln,textures:dn,title:cn},Symbol.toStringTag,{value:"Module"})),mn="Möbius Inversion 1/(z − p)",fn=["plane","inverted"],pn="quad",gn=!0,vn={uPole:{type:"vec2",value:[1,0],hidden:!0},uPlaneZoom:{type:"float",value:1,hidden:!0},uPlaneCenter:{type:"vec2",value:[0,0],hidden:!0},uInvZoom:{type:"float",value:1,hidden:!0},uInvCenter:{type:"vec2",value:[0,0],hidden:!0}},pr={title:mn,views:fn,layout:pn,controls:gn,uniforms:vn},En=Object.freeze(Object.defineProperty({__proto__:null,controls:gn,default:pr,layout:pn,title:mn,uniforms:vn,views:fn},Symbol.toStringTag,{value:"Module"})),bn="Mandelbrot & Julia — Independent Zoom",yn=["mandelbrot","julia"],_n="split",Tn=!0,xn={uMaxIter:{type:"int",value:200,min:10,max:1e3,step:10,label:"Max Iterations"},uCenterM:{type:"vec2",value:[-.75,0],hidden:!0},uZoomM:{type:"float",value:1,hidden:!0},uCenterJ:{type:"vec2",value:[0,0],hidden:!0},uZoomJ:{type:"float",value:1,hidden:!0}},gr={title:bn,views:yn,layout:_n,controls:Tn,uniforms:xn},wn=Object.freeze(Object.defineProperty({__proto__:null,controls:Tn,default:gr,layout:_n,title:bn,uniforms:xn,views:yn},Symbol.toStringTag,{value:"Module"})),Cn="Projective Reflection Group",Rn="default",Sn=!0,Ln={d:{type:"float",value:.89,min:0,max:2,step:.001,label:"d"},uRadius:{type:"float",value:.03,min:.005,max:.1,step:.001,label:"Circle Radius"},matrixCount:{type:"int",value:1,hidden:!0},matrices:{type:"mat3",count:128}},Pn={},vr={title:Cn,layout:Rn,controls:Sn,uniforms:Ln,Image:Pn},An=Object.freeze(Object.defineProperty({__proto__:null,Image:Pn,controls:Sn,default:vr,layout:Rn,title:Cn,uniforms:Ln},Symbol.toStringTag,{value:"Module"})),On="Three Views — Input Test",Fn=["red","green","blue"],Mn="quad",Dn=!0,Er={title:On,views:Fn,layout:Mn,controls:Dn},In=Object.freeze(Object.defineProperty({__proto__:null,controls:Dn,default:Er,layout:Mn,title:On,views:Fn},Symbol.toStringTag,{value:"Module"})),kn="Four Views",Un=["tl","tr","bl","br"],Bn="quad",Nn=!0,br={title:kn,views:Un,layout:Bn,controls:Nn},$n=Object.freeze(Object.defineProperty({__proto__:null,controls:Nn,default:br,layout:Bn,title:kn,views:Un},Symbol.toStringTag,{value:"Module"})),yr=128,et=1.8,re=[0,1],se=[-.866025,-.5],ae=[.866025,-.5];let Ce=[0,0],z=-1,ce=!1,be=!1;function _r(n,e,t,i){const o=Math.min(t,i);return[(n-t*.5)/o*et,(e-i*.5)/o*et]}function Tr(n,e,t,i){return[(n/t-.5)*(t/i)*2,(e/i-.5)*2]}function ye(n,e){const t=n[0]-e[0],i=n[1]-e[1];return t*t+i*i}function _e(n){return n/(1+n)}function xr(n){return n=Math.max(.01,Math.min(.99,n)),Math.max(0,Math.min(10,n/(1-n)))}function Te(n,e,t){return[e[0]+n*(t[0]-e[0]),e[1]+n*(t[1]-e[1])]}function wr(n,e,t){const i=[t[0]-e[0],t[1]-e[1]],o=[n[0]-e[0],n[1]-e[1]],r=i[0]*i[0]+i[1]*i[1];return(o[0]*i[0]+o[1]*i[1])/r}function Cr(n,e){return[n[0]*e[0]+n[3]*e[1]+n[6]*e[2],n[1]*e[0]+n[4]*e[1]+n[7]*e[2],n[2]*e[0]+n[5]*e[1]+n[8]*e[2],n[0]*e[3]+n[3]*e[4]+n[6]*e[5],n[1]*e[3]+n[4]*e[4]+n[7]*e[5],n[2]*e[3]+n[5]*e[4]+n[8]*e[5],n[0]*e[6]+n[3]*e[7]+n[6]*e[8],n[1]*e[6]+n[4]*e[7]+n[7]*e[8],n[2]*e[6]+n[5]*e[7]+n[8]*e[8]]}const Rr=[1,0,0,0,1,0,0,0,1];function tt(n,e,t,i){const o=n*n,r=e*e,s=t*t,a=i*i;return new Float32Array([n*i+e*t,n*t-e*i,n*t+e*i,n*e-t*i,(o+a-r-s)*.5,(o-a-s+r)*.5,n*e+t*i,(o-a+s-r)*.5,(o+a+r+s)*.5])}function Sr(n,e,t){const i=Math.sqrt(n*t),o=i,r=(t+1)/i,s=0,a=1/i,c=Math.sqrt(n*e),l=1/c,u=0,d=-(n*(1+e))/c,p=c;return[tt(o,r,s,a),tt(l,u,d,p)]}function nt(n){return new Float32Array([n[0],n[3],-n[6],n[1],n[4],-n[7],-n[2],-n[5],n[8]])}function Lr(n,e){const[t,i]=n,o=nt(t),r=nt(i),s=[t,o,i,r],a=u=>[1,0,3,2][u],c=[{word:[],matrix:Rr}],l=[];for(let u=0;u<4;u++)c.push({word:[u],matrix:s[u]}),l.push({word:[u],matrix:s[u],lastGenerator:u});for(;l.length>0;){const{word:u,matrix:d,lastGenerator:p}=l.shift();if(!(u.length>=e))for(let _=0;_<4;_++){if(_===a(p))continue;const b=[...u,_],E=Cr(d,s[_]);c.push({word:b,matrix:E}),l.push({word:b,matrix:E,lastGenerator:_})}}return c}function Pr(n){const e=new Float32Array(yr*9);for(let t=0;t<n.length;t++)e.set(n[t],t*9);return e}let it=-1,ot=-1,rt=-1;function Ar(n){n.setUniformValue("uCenter",Ce)}function Or(n){if(!n.getCrossViewState)return;const e=n.getUniformValue("rhoa"),t=n.getUniformValue("rhob"),i=n.getUniformValue("rhoc");if(e!==it||t!==ot||i!==rt){it=e,ot=t,rt=i;const a=Sr(e,t,i),c=Lr(a,3).map(l=>l.matrix);n.setUniformValue("matrices",Pr(c)),n.setUniformValue("matrixCount",c.length)}const o=n.getCrossViewState("triangle"),r=n.getCrossViewState("hyperbolic");let s=!1;if(o&&o.mousePressed){s=!0;const[a,c]=o.resolution,l=_r(o.mouse[0],o.mouse[1],a,c);if(!be){z=-1,ce=!1;const u=_e(e),d=_e(t),p=_e(i),_=Te(u,re,se),b=Te(d,se,ae),E=Te(p,ae,re),T=[ye(l,_),ye(l,b),ye(l,E)],C=Math.min(...T);z=T.indexOf(C)}if(z>=0){const u=[[re,se],[se,ae],[ae,re]],d=["rhoa","rhob","rhoc"],[p,_]=u[z],b=wr(l,p,_);n.setUniformValue(d[z],xr(b))}}else if(r&&r.mousePressed){s=!0;const[a,c]=r.resolution,l=Tr(r.mouse[0],r.mouse[1],a,c);be||(ce=!0,z=-1),ce&&l[0]*l[0]+l[1]*l[1]<.95&&(Ce=l,n.setUniformValue("uCenter",[...Ce]))}s||(z=-1,ce=!1),be=s}const Fr=Object.freeze(Object.defineProperty({__proto__:null,onFrame:Or,setup:Ar},Symbol.toStringTag,{value:"Module"})),zn=128;function Mr(n){window.addEventListener("keydown",e=>{e.code}),window.addEventListener("keyup",e=>{e.code})}function st(n,e){return[n[0]*e[0]+n[3]*e[1]+n[6]*e[2],n[1]*e[0]+n[4]*e[1]+n[7]*e[2],n[2]*e[0]+n[5]*e[1]+n[8]*e[2],n[0]*e[3]+n[3]*e[4]+n[6]*e[5],n[1]*e[3]+n[4]*e[4]+n[7]*e[5],n[2]*e[3]+n[5]*e[4]+n[8]*e[5],n[0]*e[6]+n[3]*e[7]+n[6]*e[8],n[1]*e[6]+n[4]*e[7]+n[7]*e[8],n[2]*e[6]+n[5]*e[7]+n[8]*e[8]]}const Dr=[1,0,0,0,1,0,0,0,1];function at(n,e,t,i){const o=n*n,r=e*e,s=t*t,a=i*i;return new Float32Array([n*i+e*t,n*t-e*i,n*t+e*i,n*e-t*i,(o+a-r-s)*.5,(o-a-s+r)*.5,n*e+t*i,(o-a+s-r)*.5,(o+a+r+s)*.5])}function Ir(n,e,t){const i=Math.sqrt(n*t),o=i,r=(t+1)/i,s=0,a=1/i,c=Math.sqrt(n*e),l=1/c,u=0,d=-(n*(1+e))/c,p=c,_=at(o,r,s,a),b=at(l,u,d,p);return[_,b]}function ct(n){return new Float32Array([n[0],n[3],-n[6],n[1],n[4],-n[7],-n[2],-n[5],n[8]])}function kr(n,e=zn){const[t,i]=n,o=ct(t),r=ct(i);console.log("Should be Identity:",st(i,r));const s=[t,o,i,r],a=u=>[1,0,3,2][u],c=[{word:[],matrix:Dr}],l=[];for(let u=0;u<4;u++)c.push({word:[u],matrix:s[u]}),l.push({word:[u],matrix:s[u],lastGenerator:u});for(;l.length>0;){const{word:u,matrix:d,lastGenerator:p}=l.shift();if(!(u.length>=e))for(let _=0;_<4;_++){if(_===a(p))continue;const b=[...u,_],E=st(d,s[_]);c.push({word:b,matrix:E}),l.push({word:b,matrix:E,lastGenerator:_})}}return console.log("Generated words:",c.map(u=>u.word.map(d=>["A","Ainv","B","Binv"][d]).join(""))),c}function Ur(n){const e=new Float32Array(zn*9);for(let t=0;t<n.length;t++)e.set(n[t],t*9);return e}let lt=-1,ut=-1,dt=-1;function Br(n){const e=n.getUniformValue("rhoa"),t=n.getUniformValue("rhob"),i=n.getUniformValue("rhoc");if(e===lt&&t===ut&&i===dt)return;lt=e,ut=t,dt=i;const o=Ir(e,t,i),r=kr(o,3).map(s=>s.matrix);console.log(`Generated ${r.length} matrices for rhoa=${e}, rhob=${t}, rhoc=${i}`),n.setUniformValue("matrices",Ur(r)),n.setUniformValue("matrixCount",r.length)}const Nr=Object.freeze(Object.defineProperty({__proto__:null,onFrame:Br,setup:Mr},Symbol.toStringTag,{value:"Module"})),ht=4,$r=1.5,mt=2.5,N=[[-.5,1.2],[.8,.6]];let le=-1,ft=!1;function zr(n,e,t,i){const o=Math.min(t,i);return[(n-t*.5)/o*ht,(e-i*.5)/o*ht+$r]}function jr(n,e,t,i){const o=Math.min(t,i);return[(n-t*.5)/o*mt,(e-i*.5)/o*mt]}function Vr(n,e){const t=-e,i=1+n,o=1-n,r=-e,s=o*o+r*r;return s<1e-8?[0,1]:[(t*o+i*r)/s,(i*o-t*r)/s]}function pt(n,e){const t=n[0]-e[0],i=n[1]-e[1];return t*t+i*i}function Hr(n){n.setUniformValue("uP1",N[0]),n.setUniformValue("uP2",N[1])}function Gr(n){if(!n.getCrossViewState)return;const e=n.getCrossViewState("uhp"),t=n.getCrossViewState("disc");let i=!1,o=null;if(e&&e.mousePressed){i=!0;const[r,s]=e.resolution;o=zr(e.mouse[0],e.mouse[1],r,s)}else if(t&&t.mousePressed){i=!0;const[r,s]=t.resolution,[a,c]=jr(t.mouse[0],t.mouse[1],r,s);a*a+c*c<1&&(o=Vr(a,c))}if(i&&o&&o[1]>.01){if(!ft){const r=pt(o,N[0]),s=pt(o,N[1]);le=r<s?0:1}N[le][0]=o[0],N[le][1]=Math.max(o[1],.01),n.setUniformValue("uP1",[...N[0]]),n.setUniformValue("uP2",[...N[1]])}i||(le=-1),ft=i}const Xr=Object.freeze(Object.defineProperty({__proto__:null,onFrame:Gr,setup:Hr},Symbol.toStringTag,{value:"Module"})),q=4,gt=1.01,Kr=.02;let Re=[1,0],jn="plane";const j=new Set,k={plane:{zoom:1,cx:0,cy:0},inverted:{zoom:1,cx:0,cy:0}},vt=["plane","inverted"];function Yr(n,e,t,i,o){const r=Math.min(t,i);return[(n-t*.5)/r*q/o.zoom+o.cx,(e-i*.5)/r*q/o.zoom+o.cy]}function Wr(n,e,t){const i=t.width,o=t.height,r=Math.min(i,o);return[(n-t.left-i*.5)/r,-(e-t.top-o*.5)/r]}function qr(n,e,t,i){const o=i.zoom,r=n<0?o*gt:o/gt;i.cx+=e*q*(1/o-1/r),i.cy+=t*q*(1/o-1/r),i.zoom=r}function Zr(n){n.zoom=1,n.cx=0,n.cy=0}let U=null;function Et(){if(U)return;const n=document.querySelectorAll("canvas");n.length!==0&&(U=new Map,n.length>=2?n.forEach((e,t)=>{t<vt.length&&U.set(e,vt[t])}):U.set(n[0],"__single__"))}function bt(n){let e=n;for(;e&&e.tagName!=="CANVAS";)e=e.parentElement;return e}function Jr(n){n.setUniformValue("uPole",Re),window.addEventListener("wheel",e=>{if(Et(),!U)return;const t=bt(e.target);if(!t||!U.has(t))return;e.preventDefault();let i=U.get(t),o;if(i==="__single__"){const a=t.getBoundingClientRect(),c=a.left+a.width/2;i=e.clientX<c?"plane":"inverted";const l=a.width/2;o={left:i==="plane"?a.left:c,top:a.top,width:l,height:a.height}}else o=t.getBoundingClientRect();jn=i;const[r,s]=Wr(e.clientX,e.clientY,o);qr(e.deltaY,r,s,k[i])},{passive:!1}),window.addEventListener("dblclick",e=>{if(Et(),!U)return;const t=bt(e.target);if(!t||!U.has(t))return;let i=U.get(t);if(i==="__single__"){const o=t.getBoundingClientRect();i=e.clientX<o.left+o.width/2?"plane":"inverted"}Zr(k[i])}),window.addEventListener("keydown",e=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)&&(e.preventDefault(),j.add(e.key))}),window.addEventListener("keyup",e=>j.delete(e.key))}function Qr(n){if(j.size>0){const t=k[jn],i=Kr*q/t.zoom;j.has("ArrowLeft")&&(t.cx-=i),j.has("ArrowRight")&&(t.cx+=i),j.has("ArrowDown")&&(t.cy-=i),j.has("ArrowUp")&&(t.cy+=i)}if(n.setUniformValue("uPlaneZoom",k.plane.zoom),n.setUniformValue("uPlaneCenter",[k.plane.cx,k.plane.cy]),n.setUniformValue("uInvZoom",k.inverted.zoom),n.setUniformValue("uInvCenter",[k.inverted.cx,k.inverted.cy]),!n.getCrossViewState)return;const e=n.getCrossViewState("plane");if(e&&e.mousePressed){const[t,i]=e.resolution;Re=Yr(e.mouse[0],e.mouse[1],t,i,k.plane),n.setUniformValue("uPole",[...Re])}}const es=Object.freeze(Object.defineProperty({__proto__:null,onFrame:Qr,setup:Jr},Symbol.toStringTag,{value:"Module"})),M={mandelbrot:{cx:-.75,cy:0,zoom:1},julia:{cx:0,cy:0,zoom:1}};let ue=0,Se=null,me={x:0,y:0},yt=!1;function Le(n,e,t,i,o,r,s){const a=(n-t*.5)/Math.min(t,i),c=(e-i*.5)/Math.min(t,i);return[o+a*3/s,r+c*3/s]}function ts(){if(yt)return;const n=document.querySelectorAll("canvas");n.forEach(e=>{e.addEventListener("wheel",t=>{t.preventDefault(),Se=[...document.querySelectorAll("canvas")].indexOf(e)===0?"mandelbrot":"julia",ue+=t.deltaY;const r=e.getBoundingClientRect();me.x=(t.clientX-r.left)*(e.width/r.width),me.y=e.height-(t.clientY-r.top)*(e.height/r.height)},{passive:!1})}),yt=n.length>0}function _t(n,e,t,i){if(Se!==e||ue===0)return;const o=n.getCrossViewState(e);if(!o)return;const r=M[e],[s,a]=o.resolution,c=me.x,l=me.y,[u,d]=Le(c,l,s,a,r.cx,r.cy,r.zoom),p=ue>0?1/1.08:1.08;r.zoom*=p,r.zoom=Math.max(.1,Math.min(r.zoom,1e12));const[_,b]=Le(c,l,s,a,r.cx,r.cy,r.zoom);r.cx+=u-_,r.cy+=d-b,n.setUniformValue(t,[r.cx,r.cy]),n.setUniformValue(i,r.zoom),ue=0,Se=null}function ns(n){n.setUniformValue("uCenterM",[M.mandelbrot.cx,M.mandelbrot.cy]),n.setUniformValue("uZoomM",M.mandelbrot.zoom),n.setUniformValue("uCenterJ",[M.julia.cx,M.julia.cy]),n.setUniformValue("uZoomJ",M.julia.zoom)}function is(n,e,t,i){ts(),_t(n,"mandelbrot","uCenterM","uZoomM"),_t(n,"julia","uCenterJ","uZoomJ");const o=n.getCrossViewState("mandelbrot");if(!o)return;const[r,s]=o.mouse,[a,c]=o.resolution;if(r===0&&s===0)n.setOverlay("top-left","c = -0.70 + 0.27i [default]","julia");else{const[l,u]=Le(r,s,a,c,M.mandelbrot.cx,M.mandelbrot.cy,M.mandelbrot.zoom),d=u>=0?"+":"-";n.setOverlay("top-left",`c = ${l.toFixed(4)} ${d} ${Math.abs(u).toFixed(4)}i`,"julia")}n.setOverlay("bottom-left",`zoom: ${M.mandelbrot.zoom.toFixed(1)}x`,"mandelbrot"),n.setOverlay("bottom-left",`zoom: ${M.julia.zoom.toFixed(1)}x`,"julia")}const os=Object.freeze(Object.defineProperty({__proto__:null,onFrame:is,setup:ns},Symbol.toStringTag,{value:"Module"})),de=128;function rs(n,e){return[n[0]*e[0]+n[3]*e[1]+n[6]*e[2],n[1]*e[0]+n[4]*e[1]+n[7]*e[2],n[2]*e[0]+n[5]*e[1]+n[8]*e[2],n[0]*e[3]+n[3]*e[4]+n[6]*e[5],n[1]*e[3]+n[4]*e[4]+n[7]*e[5],n[2]*e[3]+n[5]*e[4]+n[8]*e[5],n[0]*e[6]+n[3]*e[7]+n[6]*e[8],n[1]*e[6]+n[4]*e[7]+n[7]*e[8],n[2]*e[6]+n[5]*e[7]+n[8]*e[8]]}const ss=[1,0,0,0,1,0,0,0,1];function as(n){const e=Math.sqrt(3),t=[1,0,0,0,-1,0,0,0,1],i=[-.5,e/2,0,e/2,.5,0,0,0,1],o=[1+1/(2-4*n)+2/(n-2),(7*n-2)/(2*e*(n-2)),n*(2-7*n)/(4-10*n+4*n*n),e/(2-4*n),.5,e*n/(4*n-2),1/(1-2*n)+1/(n-2)+1/n,(2+n*(3*n-4))/(e*n*(n-2)),-n*(1+n)/(2-5*n+2*n*n)];return[t,i,o]}function cs(n){const e=[ss],t=[];for(let i=0;i<n.length;i++)if(e.push(n[i]),t.push({matrix:n[i],lastGenerator:i}),e.length>=de)return e;for(;t.length>0&&e.length<de;){const{matrix:i,lastGenerator:o}=t.shift();for(let r=0;r<n.length;r++){if(r===o)continue;const s=rs(i,n[r]);if(e.push(s),t.push({matrix:s,lastGenerator:r}),e.length>=de)return e}}return e}function ls(n){const e=new Float32Array(de*9);for(let t=0;t<n.length;t++)e.set(n[t],t*9);return e}let Tt=-1;function us(n){const e=n.getUniformValue("d");if(e===Tt)return;Tt=e;const t=as(e),i=cs(t);n.setUniformValue("matrices",ls(i)),n.setUniformValue("matrixCount",i.length)}const ds=Object.freeze(Object.defineProperty({__proto__:null,onFrame:us},Symbol.toStringTag,{value:"Module"}));
