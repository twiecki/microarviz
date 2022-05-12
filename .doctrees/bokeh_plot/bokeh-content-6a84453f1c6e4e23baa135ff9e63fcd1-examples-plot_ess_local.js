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
    
      
      
    
      const element = document.getElementById("9776fbfe-1340-4cb6-9380-0702bfbe3011");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '9776fbfe-1340-4cb6-9380-0702bfbe3011' but no matching script tag was found.")
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
                    
                  const docs_json = '{"826eb83c-8e48-4ecf-8a1b-17e531a73a06":{"defs":[],"roots":{"references":[{"attributes":{},"id":"21130","type":"ResetTool"},{"attributes":{"children":[[{"id":"21113"},0,0]]},"id":"21177","type":"GridBox"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"21155","type":"Scatter"},{"attributes":{},"id":"21169","type":"AllLabels"},{"attributes":{"children":[{"id":"21179"},{"id":"21177"}]},"id":"21180","type":"Column"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21152","type":"Circle"},{"attributes":{"tools":[{"id":"21130"},{"id":"21131"},{"id":"21132"},{"id":"21133"},{"id":"21134"},{"id":"21135"},{"id":"21136"},{"id":"21137"}]},"id":"21140","type":"Toolbar"},{"attributes":{},"id":"21116","type":"DataRange1d"},{"attributes":{"axis":{"id":"21126"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"21129","type":"Grid"},{"attributes":{},"id":"21170","type":"UnionRenderers"},{"attributes":{"axis_label":"ESS for small intervals","coordinates":null,"formatter":{"id":"21165"},"group":null,"major_label_policy":{"id":"21166"},"ticker":{"id":"21127"}},"id":"21126","type":"LinearAxis"},{"attributes":{"below":[{"id":"21122"}],"center":[{"id":"21125"},{"id":"21129"}],"height":500,"left":[{"id":"21126"}],"output_backend":"webgl","renderers":[{"id":"21153"},{"id":"21157"},{"id":"21159"},{"id":"21160"}],"title":{"id":"21161"},"toolbar":{"id":"21140"},"toolbar_location":null,"width":500,"x_range":{"id":"21114"},"x_scale":{"id":"21118"},"y_range":{"id":"21116"},"y_scale":{"id":"21120"}},"id":"21113","subtype":"Figure","type":"Plot"},{"attributes":{"coordinates":null,"data_source":{"id":"21149"},"glyph":{"id":"21150"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21152"},"nonselection_glyph":{"id":"21151"},"view":{"id":"21154"}},"id":"21153","type":"GlyphRenderer"},{"attributes":{"source":{"id":"21156"}},"id":"21158","type":"CDSView"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"21159","type":"Span"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21150","type":"Circle"},{"attributes":{"toolbars":[{"id":"21140"}],"tools":[{"id":"21130"},{"id":"21131"},{"id":"21132"},{"id":"21133"},{"id":"21134"},{"id":"21135"},{"id":"21136"},{"id":"21137"}]},"id":"21178","type":"ProxyToolbar"},{"attributes":{"source":{"id":"21149"}},"id":"21154","type":"CDSView"},{"attributes":{},"id":"21120","type":"LinearScale"},{"attributes":{"callback":null},"id":"21137","type":"HoverTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21138","type":"BoxAnnotation"},{"attributes":{},"id":"21165","type":"BasicTickFormatter"},{"attributes":{},"id":"21135","type":"UndoTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21151","type":"Circle"},{"attributes":{},"id":"21123","type":"BasicTicker"},{"attributes":{},"id":"21173","type":"Selection"},{"attributes":{"axis":{"id":"21122"},"coordinates":null,"group":null,"ticker":null},"id":"21125","type":"Grid"},{"attributes":{"overlay":{"id":"21139"}},"id":"21134","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"21161","type":"Title"},{"attributes":{},"id":"21118","type":"LinearScale"},{"attributes":{},"id":"21133","type":"WheelZoomTool"},{"attributes":{},"id":"21166","type":"AllLabels"},{"attributes":{"overlay":{"id":"21138"}},"id":"21132","type":"BoxZoomTool"},{"attributes":{"coordinates":null,"data_source":{"id":"21156"},"glyph":{"id":"21155"},"group":null,"hover_glyph":null,"view":{"id":"21158"}},"id":"21157","type":"GlyphRenderer"},{"attributes":{},"id":"21136","type":"SaveTool"},{"attributes":{},"id":"21171","type":"Selection"},{"attributes":{},"id":"21168","type":"BasicTickFormatter"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"21173"},"selection_policy":{"id":"21172"}},"id":"21156","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21139","type":"PolyAnnotation"},{"attributes":{},"id":"21114","type":"DataRange1d"},{"attributes":{},"id":"21131","type":"PanTool"},{"attributes":{"toolbar":{"id":"21178"},"toolbar_location":"above"},"id":"21179","type":"ToolbarBox"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"21168"},"group":null,"major_label_policy":{"id":"21169"},"ticker":{"id":"21123"}},"id":"21122","type":"LinearAxis"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21160","type":"Span"},{"attributes":{},"id":"21172","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21171"},"selection_policy":{"id":"21170"}},"id":"21149","type":"ColumnDataSource"},{"attributes":{},"id":"21127","type":"BasicTicker"}],"root_ids":["21180"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"826eb83c-8e48-4ecf-8a1b-17e531a73a06","root_ids":["21180"],"roots":{"21180":"9776fbfe-1340-4cb6-9380-0702bfbe3011"}}];
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