(function() {
  const fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      const element = document.getElementById("bf5bd1d5-55a4-4138-9bbc-81bca2255352");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bf5bd1d5-55a4-4138-9bbc-81bca2255352' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.2.min.js"];
      const css_urls = [];
      
    
      const inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  const docs_json = '{"55bb1ec1-d86e-475c-b443-5c0f891db96c":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17388","type":"PolyAnnotation"},{"attributes":{"toolbars":[{"id":"17389"}],"tools":[{"id":"17379"},{"id":"17380"},{"id":"17381"},{"id":"17382"},{"id":"17383"},{"id":"17384"},{"id":"17385"},{"id":"17386"}]},"id":"17417","type":"ProxyToolbar"},{"attributes":{},"id":"17372","type":"BasicTicker"},{"attributes":{},"id":"17382","type":"WheelZoomTool"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17398","type":"Scatter"},{"attributes":{},"id":"17411","type":"UnionRenderers"},{"attributes":{"source":{"id":"17399"}},"id":"17401","type":"CDSView"},{"attributes":{},"id":"17367","type":"LinearScale"},{"attributes":{},"id":"17406","type":"BasicTickFormatter"},{"attributes":{},"id":"17412","type":"Selection"},{"attributes":{},"id":"17380","type":"PanTool"},{"attributes":{"coordinates":null,"formatter":{"id":"17409"},"group":null,"major_label_policy":{"id":"17410"},"ticker":{"id":"17372"}},"id":"17371","type":"LinearAxis"},{"attributes":{},"id":"17384","type":"UndoTool"},{"attributes":{},"id":"17369","type":"LinearScale"},{"attributes":{},"id":"17379","type":"ResetTool"},{"attributes":{"coordinates":null,"data_source":{"id":"17399"},"glyph":{"id":"17398"},"group":null,"hover_glyph":null,"view":{"id":"17401"}},"id":"17400","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"17388"}},"id":"17383","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"group":null,"text":"centered model - non centered model"},"id":"17402","type":"Title"},{"attributes":{"axis":{"id":"17375"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"17378","type":"Grid"},{"attributes":{},"id":"17385","type":"SaveTool"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"17406"},"group":null,"major_label_policy":{"id":"17407"},"ticker":{"id":"17376"}},"id":"17375","type":"LinearAxis"},{"attributes":{},"id":"17363","type":"DataRange1d"},{"attributes":{},"id":"17409","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"17418"},{"id":"17416"}]},"id":"17419","type":"Column"},{"attributes":{"axis":{"id":"17371"},"coordinates":null,"group":null,"ticker":null},"id":"17374","type":"Grid"},{"attributes":{"callback":null},"id":"17386","type":"HoverTool"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"AB6QFygcqb8AlPbM2OqMvwCgPZTAZEQ/ABRdkUAak78AFo4kwaykPwDAu3qf/FM/wBB6xSIVsb8AE7uac6iQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17412"},"selection_policy":{"id":"17411"}},"id":"17399","type":"ColumnDataSource"},{"attributes":{"toolbar":{"id":"17417"},"toolbar_location":"above"},"id":"17418","type":"ToolbarBox"},{"attributes":{},"id":"17365","type":"DataRange1d"},{"attributes":{},"id":"17376","type":"BasicTicker"},{"attributes":{"children":[[{"id":"17362"},0,0]]},"id":"17416","type":"GridBox"},{"attributes":{"below":[{"id":"17371"}],"center":[{"id":"17374"},{"id":"17378"}],"height":288,"left":[{"id":"17375"}],"output_backend":"webgl","renderers":[{"id":"17400"}],"title":{"id":"17402"},"toolbar":{"id":"17389"},"toolbar_location":null,"width":432,"x_range":{"id":"17363"},"x_scale":{"id":"17367"},"y_range":{"id":"17365"},"y_scale":{"id":"17369"}},"id":"17362","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17410","type":"AllLabels"},{"attributes":{"overlay":{"id":"17387"}},"id":"17381","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17387","type":"BoxAnnotation"},{"attributes":{"tools":[{"id":"17379"},{"id":"17380"},{"id":"17381"},{"id":"17382"},{"id":"17383"},{"id":"17384"},{"id":"17385"},{"id":"17386"}]},"id":"17389","type":"Toolbar"},{"attributes":{},"id":"17407","type":"AllLabels"}],"root_ids":["17419"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"55bb1ec1-d86e-475c-b443-5c0f891db96c","root_ids":["17419"],"roots":{"17419":"bf5bd1d5-55a4-4138-9bbc-81bca2255352"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();