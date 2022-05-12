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
    
      
      
    
      const element = document.getElementById("8f847b5c-1cef-4e64-a228-780d0ba2f771");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '8f847b5c-1cef-4e64-a228-780d0ba2f771' but no matching script tag was found.")
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
                    
                  const docs_json = '{"0349df82-95d4-44d0-a9b0-2717b252209e":{"defs":[],"roots":{"references":[{"attributes":{"toolbars":[{"id":"20984"}],"tools":[{"id":"20974"},{"id":"20975"},{"id":"20976"},{"id":"20977"},{"id":"20978"},{"id":"20979"},{"id":"20980"},{"id":"20981"}]},"id":"21042","type":"ProxyToolbar"},{"attributes":{},"id":"20975","type":"PanTool"},{"attributes":{"axis_label":"Total number of draws","coordinates":null,"formatter":{"id":"21028"},"group":null,"major_label_policy":{"id":"21029"},"ticker":{"id":"20967"}},"id":"20966","type":"LinearAxis"},{"attributes":{"above":[{"id":"21018"}],"below":[{"id":"20966"}],"center":[{"id":"20969"},{"id":"20973"}],"height":500,"left":[{"id":"20970"}],"output_backend":"webgl","renderers":[{"id":"20997"},{"id":"21003"},{"id":"21009"},{"id":"21015"},{"id":"21017"}],"title":{"id":"21021"},"toolbar":{"id":"20984"},"toolbar_location":null,"width":500,"x_range":{"id":"20958"},"x_scale":{"id":"20962"},"y_range":{"id":"20960"},"y_scale":{"id":"20964"}},"id":"20957","subtype":"Figure","type":"Plot"},{"attributes":{"children":[{"id":"21043"},{"id":"21041"}]},"id":"21044","type":"Column"},{"attributes":{"axis_label":"ESS","coordinates":null,"formatter":{"id":"21025"},"group":null,"major_label_policy":{"id":"21026"},"ticker":{"id":"20971"}},"id":"20970","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"orange"},"hatch_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21012","type":"Circle"},{"attributes":{},"id":"21036","type":"UnionRenderers"},{"attributes":{},"id":"20980","type":"SaveTool"},{"attributes":{},"id":"21028","type":"BasicTickFormatter"},{"attributes":{},"id":"21025","type":"BasicTickFormatter"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"21000","type":"Line"},{"attributes":{"overlay":{"id":"20982"}},"id":"20976","type":"BoxZoomTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21037"},"selection_policy":{"id":"21036"}},"id":"21011","type":"ColumnDataSource"},{"attributes":{},"id":"21029","type":"AllLabels"},{"attributes":{},"id":"21031","type":"Selection"},{"attributes":{},"id":"21032","type":"UnionRenderers"},{"attributes":{},"id":"20974","type":"ResetTool"},{"attributes":{},"id":"20958","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20994","type":"Circle"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"21006","type":"Line"},{"attributes":{},"id":"20979","type":"UndoTool"},{"attributes":{"coordinates":null,"data_source":{"id":"21011"},"glyph":{"id":"21012"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21014"},"nonselection_glyph":{"id":"21013"},"view":{"id":"21016"}},"id":"21015","type":"GlyphRenderer"},{"attributes":{},"id":"20971","type":"BasicTicker"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21031"},"selection_policy":{"id":"21030"}},"id":"20993","type":"ColumnDataSource"},{"attributes":{"source":{"id":"20999"}},"id":"21004","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"21001","type":"Line"},{"attributes":{},"id":"20967","type":"BasicTicker"},{"attributes":{"source":{"id":"21005"}},"id":"21010","type":"CDSView"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20983","type":"PolyAnnotation"},{"attributes":{"toolbar":{"id":"21042"},"toolbar_location":"above"},"id":"21043","type":"ToolbarBox"},{"attributes":{},"id":"20977","type":"WheelZoomTool"},{"attributes":{},"id":"20960","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20982","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.2,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"21008","type":"Line"},{"attributes":{},"id":"21035","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"20993"},"glyph":{"id":"20994"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20996"},"nonselection_glyph":{"id":"20995"},"view":{"id":"20998"}},"id":"20997","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"20983"}},"id":"20978","type":"LassoSelectTool"},{"attributes":{},"id":"21037","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"21005"},"glyph":{"id":"21006"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21008"},"nonselection_glyph":{"id":"21007"},"view":{"id":"21010"}},"id":"21009","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"20966"},"coordinates":null,"group":null,"ticker":null},"id":"20969","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.2},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21014","type":"Circle"},{"attributes":{},"id":"20962","type":"LinearScale"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"20997"},{"id":"21003"}]},"id":"21019","type":"LegendItem"},{"attributes":{"click_policy":"hide","coordinates":null,"group":null,"items":[{"id":"21019"},{"id":"21020"}],"location":"center_right","orientation":"horizontal"},"id":"21018","type":"Legend"},{"attributes":{},"id":"20964","type":"LinearScale"},{"attributes":{"callback":null},"id":"20981","type":"HoverTool"},{"attributes":{"coordinates":null,"data_source":{"id":"20999"},"glyph":{"id":"21000"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21002"},"nonselection_glyph":{"id":"21001"},"view":{"id":"21004"}},"id":"21003","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"20957"},0,0]]},"id":"21041","type":"GridBox"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21013","type":"Circle"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"21002","type":"Line"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21017","type":"Span"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20995","type":"Circle"},{"attributes":{},"id":"21033","type":"Selection"},{"attributes":{"axis":{"id":"20970"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20973","type":"Grid"},{"attributes":{"coordinates":null,"group":null,"text":"b"},"id":"21021","type":"Title"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"21015"},{"id":"21009"}]},"id":"21020","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"21007","type":"Line"},{"attributes":{},"id":"21026","type":"AllLabels"},{"attributes":{"tools":[{"id":"20974"},{"id":"20975"},{"id":"20976"},{"id":"20977"},{"id":"20978"},{"id":"20979"},{"id":"20980"},{"id":"20981"}]},"id":"20984","type":"Toolbar"},{"attributes":{"source":{"id":"21011"}},"id":"21016","type":"CDSView"},{"attributes":{"source":{"id":"20993"}},"id":"20998","type":"CDSView"},{"attributes":{},"id":"21034","type":"UnionRenderers"},{"attributes":{},"id":"21030","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21035"},"selection_policy":{"id":"21034"}},"id":"21005","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20996","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21033"},"selection_policy":{"id":"21032"}},"id":"20999","type":"ColumnDataSource"}],"root_ids":["21044"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"0349df82-95d4-44d0-a9b0-2717b252209e","root_ids":["21044"],"roots":{"21044":"8f847b5c-1cef-4e64-a228-780d0ba2f771"}}];
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