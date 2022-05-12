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
    
      
      
    
      const element = document.getElementById("1c399f8f-c4c0-42d9-8ebe-74b6e4264f52");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1c399f8f-c4c0-42d9-8ebe-74b6e4264f52' but no matching script tag was found.")
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
                    
                  const docs_json = '{"93cc13e8-03d7-48df-96c5-28dd5db6353e":{"defs":[],"roots":{"references":[{"attributes":{"children":[{"id":"18248"},{"id":"18246"}]},"id":"18249","type":"Column"},{"attributes":{"coordinates":null,"data_source":{"id":"18207"},"glyph":{"id":"18208"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18210"},"nonselection_glyph":{"id":"18209"},"view":{"id":"18212"}},"id":"18211","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"dimension":"height","group":null,"line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.68796724389903},"id":"18225","type":"Span"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18197","type":"Scatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18209","type":"Circle"},{"attributes":{"below":[{"id":"18166"}],"center":[{"id":"18169"},{"id":"18173"}],"height":500,"left":[{"id":"18170"}],"output_backend":"webgl","renderers":[{"id":"18199"},{"id":"18205"},{"id":"18211"},{"id":"18217"},{"id":"18223"},{"id":"18225"}],"title":{"id":"18226"},"toolbar":{"id":"18184"},"toolbar_location":null,"width":500,"x_range":{"id":"18158"},"x_scale":{"id":"18162"},"y_range":{"id":"18160"},"y_scale":{"id":"18164"}},"id":"18157","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":{"value":0.2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18216","type":"MultiLine"},{"attributes":{},"id":"18234","type":"Selection"},{"attributes":{"end":0.5,"start":-1.5},"id":"18160","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":null},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18210","type":"Circle"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18214","type":"MultiLine"},{"attributes":{},"id":"18174","type":"ResetTool"},{"attributes":{},"id":"18236","type":"Selection"},{"attributes":{},"id":"18240","type":"Selection"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18215","type":"MultiLine"},{"attributes":{"toolbar":{"id":"18247"},"toolbar_location":"above"},"id":"18248","type":"ToolbarBox"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18203","type":"MultiLine"},{"attributes":{"axis_label":"Log","coordinates":null,"formatter":{"id":"18231"},"group":null,"major_label_policy":{"id":"18232"},"ticker":{"id":"18167"}},"id":"18166","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18198","type":"Scatter"},{"attributes":{"data":{"xs":[[-32.05318232491158,-29.32275216288648],[-32.237685546932575,-29.38343126345932]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"18240"},"selection_policy":{"id":"18239"}},"id":"18213","type":"ColumnDataSource"},{"attributes":{"data":{"xs":[[-30.896720059785245,-30.72439675060665]],"ys":[[-0.75,-0.75]]},"selected":{"id":"18236"},"selection_policy":{"id":"18235"}},"id":"18201","type":"ColumnDataSource"},{"attributes":{"tools":[{"id":"18174"},{"id":"18175"},{"id":"18176"},{"id":"18177"},{"id":"18178"},{"id":"18179"},{"id":"18180"},{"id":"18181"}]},"id":"18184","type":"Toolbar"},{"attributes":{"source":{"id":"18195"}},"id":"18200","type":"CDSView"},{"attributes":{},"id":"18228","type":"BasicTickFormatter"},{"attributes":{},"id":"18235","type":"UnionRenderers"},{"attributes":{},"id":"18233","type":"UnionRenderers"},{"attributes":{},"id":"18167","type":"BasicTicker"},{"attributes":{"source":{"id":"18201"}},"id":"18206","type":"CDSView"},{"attributes":{},"id":"18158","type":"DataRange1d"},{"attributes":{"axis":{"id":"18170"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"18173","type":"Grid"},{"attributes":{"source":{"id":"18213"}},"id":"18218","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18221","type":"Circle"},{"attributes":{},"id":"18231","type":"BasicTickFormatter"},{"attributes":{},"id":"18239","type":"UnionRenderers"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"18193","type":"FixedTicker"},{"attributes":{"data":{"x":{"__ndarray__":"hNBxwYDPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"18234"},"selection_policy":{"id":"18233"}},"id":"18195","type":"ColumnDataSource"},{"attributes":{},"id":"18241","type":"UnionRenderers"},{"attributes":{},"id":"18162","type":"LinearScale"},{"attributes":{"coordinates":null,"data_source":{"id":"18213"},"glyph":{"id":"18214"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18216"},"nonselection_glyph":{"id":"18215"},"view":{"id":"18218"}},"id":"18217","type":"GlyphRenderer"},{"attributes":{},"id":"18177","type":"WheelZoomTool"},{"attributes":{"children":[[{"id":"18157"},0,0]]},"id":"18246","type":"GridBox"},{"attributes":{"coordinates":null,"formatter":{"id":"18228"},"group":null,"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"18229"},"ticker":{"id":"18193"}},"id":"18170","type":"LinearAxis"},{"attributes":{},"id":"18232","type":"AllLabels"},{"attributes":{},"id":"18175","type":"PanTool"},{"attributes":{},"id":"18242","type":"Selection"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18196","type":"Scatter"},{"attributes":{"overlay":{"id":"18183"}},"id":"18178","type":"LassoSelectTool"},{"attributes":{},"id":"18164","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"/kMNnx6wPsCE0HHBgM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18238"},"selection_policy":{"id":"18237"}},"id":"18207","type":"ColumnDataSource"},{"attributes":{},"id":"18237","type":"UnionRenderers"},{"attributes":{"source":{"id":"18207"}},"id":"18212","type":"CDSView"},{"attributes":{"toolbars":[{"id":"18184"}],"tools":[{"id":"18174"},{"id":"18175"},{"id":"18176"},{"id":"18177"},{"id":"18178"},{"id":"18179"},{"id":"18180"},{"id":"18181"}]},"id":"18247","type":"ProxyToolbar"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18183","type":"PolyAnnotation"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18202","type":"MultiLine"},{"attributes":{"source":{"id":"18219"}},"id":"18224","type":"CDSView"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18182","type":"BoxAnnotation"},{"attributes":{"coordinates":null,"data_source":{"id":"18195"},"glyph":{"id":"18196"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18198"},"nonselection_glyph":{"id":"18197"},"view":{"id":"18200"}},"id":"18199","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18222","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"18219"},"glyph":{"id":"18220"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18222"},"nonselection_glyph":{"id":"18221"},"view":{"id":"18224"}},"id":"18223","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18208","type":"Circle"},{"attributes":{},"id":"18229","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"18201"},"glyph":{"id":"18202"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18204"},"nonselection_glyph":{"id":"18203"},"view":{"id":"18206"}},"id":"18205","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18204","type":"MultiLine"},{"attributes":{},"id":"18180","type":"SaveTool"},{"attributes":{"overlay":{"id":"18182"}},"id":"18176","type":"BoxZoomTool"},{"attributes":{},"id":"18179","type":"UndoTool"},{"attributes":{"coordinates":null,"group":null},"id":"18226","type":"Title"},{"attributes":{"callback":null},"id":"18181","type":"HoverTool"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18242"},"selection_policy":{"id":"18241"}},"id":"18219","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18220","type":"Circle"},{"attributes":{},"id":"18238","type":"Selection"},{"attributes":{"axis":{"id":"18166"},"coordinates":null,"group":null,"ticker":null},"id":"18169","type":"Grid"}],"root_ids":["18249"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"93cc13e8-03d7-48df-96c5-28dd5db6353e","root_ids":["18249"],"roots":{"18249":"1c399f8f-c4c0-42d9-8ebe-74b6e4264f52"}}];
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