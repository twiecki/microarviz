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
    
      
      
    
      const element = document.getElementById("b2f03f9d-f929-4107-bf43-556d80cb0d59");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b2f03f9d-f929-4107-bf43-556d80cb0d59' but no matching script tag was found.")
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
                    
                  const docs_json = '{"13dd0038-5029-44a5-a731-38040a8cfb51":{"defs":[],"roots":{"references":[{"attributes":{},"id":"21234","type":"DataRange1d"},{"attributes":{},"id":"21238","type":"LinearScale"},{"attributes":{"tools":[{"id":"21250"},{"id":"21251"},{"id":"21252"},{"id":"21253"},{"id":"21254"},{"id":"21255"},{"id":"21256"},{"id":"21257"}]},"id":"21260","type":"Toolbar"},{"attributes":{"coordinates":null,"group":null,"text":"sigma"},"id":"21276","type":"Title"},{"attributes":{},"id":"21253","type":"WheelZoomTool"},{"attributes":{"toolbar":{"id":"21291"},"toolbar_location":"above"},"id":"21292","type":"ToolbarBox"},{"attributes":{},"id":"21286","type":"Selection"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21258","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21272","type":"Circle"},{"attributes":{},"id":"21247","type":"BasicTicker"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21275","type":"Span"},{"attributes":{},"id":"21281","type":"AllLabels"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21259","type":"PolyAnnotation"},{"attributes":{"children":[[{"id":"21233"},0,0]]},"id":"21290","type":"GridBox"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21270","type":"Circle"},{"attributes":{},"id":"21284","type":"AllLabels"},{"attributes":{"children":[{"id":"21292"},{"id":"21290"}]},"id":"21293","type":"Column"},{"attributes":{"axis":{"id":"21246"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"21249","type":"Grid"},{"attributes":{"axis":{"id":"21242"},"coordinates":null,"group":null,"ticker":null},"id":"21245","type":"Grid"},{"attributes":{},"id":"21251","type":"PanTool"},{"attributes":{},"id":"21256","type":"SaveTool"},{"attributes":{"coordinates":null,"data_source":{"id":"21269"},"glyph":{"id":"21270"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21272"},"nonselection_glyph":{"id":"21271"},"view":{"id":"21274"}},"id":"21273","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"21259"}},"id":"21254","type":"LassoSelectTool"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21286"},"selection_policy":{"id":"21285"}},"id":"21269","type":"ColumnDataSource"},{"attributes":{},"id":"21250","type":"ResetTool"},{"attributes":{},"id":"21285","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"21258"}},"id":"21252","type":"BoxZoomTool"},{"attributes":{},"id":"21283","type":"BasicTickFormatter"},{"attributes":{},"id":"21243","type":"BasicTicker"},{"attributes":{"below":[{"id":"21242"}],"center":[{"id":"21245"},{"id":"21249"}],"height":500,"left":[{"id":"21246"}],"output_backend":"webgl","renderers":[{"id":"21273"},{"id":"21275"}],"title":{"id":"21276"},"toolbar":{"id":"21260"},"toolbar_location":null,"width":500,"x_range":{"id":"21234"},"x_scale":{"id":"21238"},"y_range":{"id":"21236"},"y_scale":{"id":"21240"}},"id":"21233","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"21280","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"21269"}},"id":"21274","type":"CDSView"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"21283"},"group":null,"major_label_policy":{"id":"21284"},"ticker":{"id":"21243"}},"id":"21242","type":"LinearAxis"},{"attributes":{"toolbars":[{"id":"21260"}],"tools":[{"id":"21250"},{"id":"21251"},{"id":"21252"},{"id":"21253"},{"id":"21254"},{"id":"21255"},{"id":"21256"},{"id":"21257"}]},"id":"21291","type":"ProxyToolbar"},{"attributes":{"axis_label":"ESS for quantiles","coordinates":null,"formatter":{"id":"21280"},"group":null,"major_label_policy":{"id":"21281"},"ticker":{"id":"21247"}},"id":"21246","type":"LinearAxis"},{"attributes":{},"id":"21255","type":"UndoTool"},{"attributes":{},"id":"21240","type":"LinearScale"},{"attributes":{},"id":"21236","type":"DataRange1d"},{"attributes":{"callback":null},"id":"21257","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21271","type":"Circle"}],"root_ids":["21293"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"13dd0038-5029-44a5-a731-38040a8cfb51","root_ids":["21293"],"roots":{"21293":"b2f03f9d-f929-4107-bf43-556d80cb0d59"}}];
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