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
    
      
      
    
      const element = document.getElementById("7feb470c-21e5-42e3-b6e1-12b2f662556d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '7feb470c-21e5-42e3-b6e1-12b2f662556d' but no matching script tag was found.")
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
                    
                  const docs_json = '{"93e5f200-031f-491b-b7b1-5a7d1a379d7e":{"defs":[],"roots":{"references":[{"attributes":{},"id":"20672","type":"BasicTicker"},{"attributes":{},"id":"20702","type":"BasicTickFormatter"},{"attributes":{},"id":"20680","type":"UndoTool"},{"attributes":{},"id":"20661","type":"DataRange1d"},{"attributes":{},"id":"20708","type":"Selection"},{"attributes":{},"id":"20676","type":"PanTool"},{"attributes":{"children":[[{"id":"20658"},0,0]]},"id":"20712","type":"GridBox"},{"attributes":{},"id":"20706","type":"AllLabels"},{"attributes":{"toolbars":[{"id":"20685"}],"tools":[{"id":"20675"},{"id":"20676"},{"id":"20677"},{"id":"20678"},{"id":"20679"},{"id":"20680"},{"id":"20681"},{"id":"20682"}]},"id":"20713","type":"ProxyToolbar"},{"attributes":{},"id":"20707","type":"UnionRenderers"},{"attributes":{"coordinates":null,"formatter":{"id":"20705"},"group":null,"major_label_policy":{"id":"20706"},"ticker":{"id":"20668"}},"id":"20667","type":"LinearAxis"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20684","type":"PolyAnnotation"},{"attributes":{"tools":[{"id":"20675"},{"id":"20676"},{"id":"20677"},{"id":"20678"},{"id":"20679"},{"id":"20680"},{"id":"20681"},{"id":"20682"}]},"id":"20685","type":"Toolbar"},{"attributes":{},"id":"20678","type":"WheelZoomTool"},{"attributes":{"children":[{"id":"20714"},{"id":"20712"}]},"id":"20715","type":"Column"},{"attributes":{},"id":"20703","type":"AllLabels"},{"attributes":{"axis":{"id":"20667"},"coordinates":null,"group":null,"ticker":null},"id":"20670","type":"Grid"},{"attributes":{},"id":"20705","type":"BasicTickFormatter"},{"attributes":{},"id":"20663","type":"LinearScale"},{"attributes":{"overlay":{"id":"20683"}},"id":"20677","type":"BoxZoomTool"},{"attributes":{},"id":"20659","type":"DataRange1d"},{"attributes":{"callback":null},"id":"20682","type":"HoverTool"},{"attributes":{"overlay":{"id":"20684"}},"id":"20679","type":"LassoSelectTool"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"AB6QFygcqb8AlPbM2OqMvwCgPZTAZEQ/ABRdkUAak78AFo4kwaykPwDAu3qf/FM/wBB6xSIVsb8AE7uac6iQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"20708"},"selection_policy":{"id":"20707"}},"id":"20695","type":"ColumnDataSource"},{"attributes":{},"id":"20675","type":"ResetTool"},{"attributes":{},"id":"20665","type":"LinearScale"},{"attributes":{"source":{"id":"20695"}},"id":"20697","type":"CDSView"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"20702"},"group":null,"major_label_policy":{"id":"20703"},"ticker":{"id":"20672"}},"id":"20671","type":"LinearAxis"},{"attributes":{},"id":"20681","type":"SaveTool"},{"attributes":{"toolbar":{"id":"20713"},"toolbar_location":"above"},"id":"20714","type":"ToolbarBox"},{"attributes":{"coordinates":null,"data_source":{"id":"20695"},"glyph":{"id":"20694"},"group":null,"hover_glyph":null,"view":{"id":"20697"}},"id":"20696","type":"GlyphRenderer"},{"attributes":{},"id":"20668","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20683","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"20671"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20674","type":"Grid"},{"attributes":{"below":[{"id":"20667"}],"center":[{"id":"20670"},{"id":"20674"}],"height":288,"left":[{"id":"20671"}],"output_backend":"webgl","renderers":[{"id":"20696"}],"title":{"id":"20698"},"toolbar":{"id":"20685"},"toolbar_location":null,"width":432,"x_range":{"id":"20659"},"x_scale":{"id":"20663"},"y_range":{"id":"20661"},"y_scale":{"id":"20665"}},"id":"20658","subtype":"Figure","type":"Plot"},{"attributes":{"coordinates":null,"group":null,"text":"Centered eight - Non centered eight"},"id":"20698","type":"Title"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"20694","type":"Scatter"}],"root_ids":["20715"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"93e5f200-031f-491b-b7b1-5a7d1a379d7e","root_ids":["20715"],"roots":{"20715":"7feb470c-21e5-42e3-b6e1-12b2f662556d"}}];
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