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
    
      
      
    
      const element = document.getElementById("18183ab9-300a-4c9d-bea1-8e1a7a9f9b09");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '18183ab9-300a-4c9d-bea1-8e1a7a9f9b09' but no matching script tag was found.")
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
                    
                  const docs_json = '{"5de42b08-b1a0-455c-8fb8-529c5e7c2f40":{"defs":[],"roots":{"references":[{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"41919"},"group":null,"major_label_policy":{"id":"41920"},"ticker":{"id":"41851"}},"id":"41850","type":"LinearAxis"},{"attributes":{},"id":"41913","type":"Selection"},{"attributes":{"toolbar":{"id":"41932"},"toolbar_location":"above"},"id":"41933","type":"ToolbarBox"},{"attributes":{"callback":null},"id":"41861","type":"HoverTool"},{"attributes":{"axis":{"id":"41850"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41853","type":"Grid"},{"attributes":{},"id":"41919","type":"BasicTickFormatter"},{"attributes":{},"id":"41851","type":"BasicTicker"},{"attributes":{"source":{"id":"41873"}},"id":"41878","type":"CDSView"},{"attributes":{"overlay":{"id":"41862"}},"id":"41856","type":"BoxZoomTool"},{"attributes":{},"id":"41920","type":"AllLabels"},{"attributes":{},"id":"41855","type":"PanTool"},{"attributes":{},"id":"41854","type":"ResetTool"},{"attributes":{},"id":"41860","type":"SaveTool"},{"attributes":{},"id":"41922","type":"BasicTickFormatter"},{"attributes":{},"id":"41857","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"41863"}},"id":"41858","type":"LassoSelectTool"},{"attributes":{},"id":"41859","type":"UndoTool"},{"attributes":{},"id":"41923","type":"AllLabels"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"41894","type":"Span"},{"attributes":{},"id":"41811","type":"BasicTicker"},{"attributes":{"children":[{"id":"41933"},{"id":"41931"}]},"id":"41934","type":"Column"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41908"},"group":null,"major_label_policy":{"id":"41909"},"ticker":{"id":"41811"}},"id":"41810","type":"LinearAxis"},{"attributes":{"callback":null},"id":"41825","type":"HoverTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41862","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"41810"},"coordinates":null,"group":null,"ticker":null},"id":"41813","type":"Grid"},{"attributes":{"children":[[{"id":"41801"},0,0],[{"id":"41837"},0,1]]},"id":"41931","type":"GridBox"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"41879","type":"Span"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"41905"},"group":null,"major_label_policy":{"id":"41906"},"ticker":{"id":"41815"}},"id":"41814","type":"LinearAxis"},{"attributes":{},"id":"41815","type":"BasicTicker"},{"attributes":{"axis":{"id":"41814"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41817","type":"Grid"},{"attributes":{},"id":"41924","type":"UnionRenderers"},{"attributes":{},"id":"41823","type":"UndoTool"},{"attributes":{},"id":"41925","type":"Selection"},{"attributes":{"overlay":{"id":"41826"}},"id":"41820","type":"BoxZoomTool"},{"attributes":{},"id":"41819","type":"PanTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41863","type":"PolyAnnotation"},{"attributes":{},"id":"41818","type":"ResetTool"},{"attributes":{"coordinates":null,"data_source":{"id":"41888"},"glyph":{"id":"41889"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41891"},"nonselection_glyph":{"id":"41890"},"view":{"id":"41893"}},"id":"41892","type":"GlyphRenderer"},{"attributes":{},"id":"41824","type":"SaveTool"},{"attributes":{},"id":"41802","type":"DataRange1d"},{"attributes":{},"id":"41821","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"41827"}},"id":"41822","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41891","type":"Circle"},{"attributes":{},"id":"41838","type":"DataRange1d"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41896","type":"Span"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41826","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"41846"},"coordinates":null,"group":null,"ticker":null},"id":"41849","type":"Grid"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41897","type":"Scatter"},{"attributes":{},"id":"41905","type":"BasicTickFormatter"},{"attributes":{"end":1,"start":-0.05},"id":"41840","type":"DataRange1d"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"41886","type":"Title"},{"attributes":{},"id":"41906","type":"AllLabels"},{"attributes":{"tools":[{"id":"41818"},{"id":"41819"},{"id":"41820"},{"id":"41821"},{"id":"41822"},{"id":"41823"},{"id":"41824"},{"id":"41825"}]},"id":"41828","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41890","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"41898"},"glyph":{"id":"41897"},"group":null,"hover_glyph":null,"view":{"id":"41900"}},"id":"41899","type":"GlyphRenderer"},{"attributes":{},"id":"41908","type":"BasicTickFormatter"},{"attributes":{},"id":"41926","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"41828"},{"id":"41864"}],"tools":[{"id":"41818"},{"id":"41819"},{"id":"41820"},{"id":"41821"},{"id":"41822"},{"id":"41823"},{"id":"41824"},{"id":"41825"},{"id":"41854"},{"id":"41855"},{"id":"41856"},{"id":"41857"},{"id":"41858"},{"id":"41859"},{"id":"41860"},{"id":"41861"}]},"id":"41932","type":"ProxyToolbar"},{"attributes":{"below":[{"id":"41810"}],"center":[{"id":"41813"},{"id":"41817"}],"height":500,"left":[{"id":"41814"}],"output_backend":"webgl","renderers":[{"id":"41877"},{"id":"41879"},{"id":"41880"},{"id":"41881"},{"id":"41884"}],"title":{"id":"41886"},"toolbar":{"id":"41828"},"toolbar_location":null,"width":500,"x_range":{"id":"41802"},"x_scale":{"id":"41806"},"y_range":{"id":"41804"},"y_scale":{"id":"41808"}},"id":"41801","subtype":"Figure","type":"Plot"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"41901","type":"Title"},{"attributes":{},"id":"41847","type":"BasicTicker"},{"attributes":{},"id":"41909","type":"AllLabels"},{"attributes":{"source":{"id":"41898"}},"id":"41900","type":"CDSView"},{"attributes":{},"id":"41927","type":"Selection"},{"attributes":{"source":{"id":"41883"}},"id":"41885","type":"CDSView"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41882","type":"Scatter"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"41927"},"selection_policy":{"id":"41926"}},"id":"41898","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41925"},"selection_policy":{"id":"41924"}},"id":"41888","type":"ColumnDataSource"},{"attributes":{},"id":"41808","type":"LinearScale"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41881","type":"Span"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"41895","type":"Span"},{"attributes":{},"id":"41842","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41889","type":"Circle"},{"attributes":{"tools":[{"id":"41854"},{"id":"41855"},{"id":"41856"},{"id":"41857"},{"id":"41858"},{"id":"41859"},{"id":"41860"},{"id":"41861"}]},"id":"41864","type":"Toolbar"},{"attributes":{},"id":"41910","type":"UnionRenderers"},{"attributes":{},"id":"41844","type":"LinearScale"},{"attributes":{"below":[{"id":"41846"}],"center":[{"id":"41849"},{"id":"41853"}],"height":500,"left":[{"id":"41850"}],"output_backend":"webgl","renderers":[{"id":"41892"},{"id":"41894"},{"id":"41895"},{"id":"41896"},{"id":"41899"}],"title":{"id":"41901"},"toolbar":{"id":"41864"},"toolbar_location":null,"width":500,"x_range":{"id":"41838"},"x_scale":{"id":"41842"},"y_range":{"id":"41840"},"y_scale":{"id":"41844"}},"id":"41837","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"41911","type":"Selection"},{"attributes":{"end":1,"start":-0.05},"id":"41804","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41874","type":"Circle"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41922"},"group":null,"major_label_policy":{"id":"41923"},"ticker":{"id":"41847"}},"id":"41846","type":"LinearAxis"},{"attributes":{"coordinates":null,"data_source":{"id":"41883"},"glyph":{"id":"41882"},"group":null,"hover_glyph":null,"view":{"id":"41885"}},"id":"41884","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41875","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41876","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"41873"},"glyph":{"id":"41874"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41876"},"nonselection_glyph":{"id":"41875"},"view":{"id":"41878"}},"id":"41877","type":"GlyphRenderer"},{"attributes":{},"id":"41806","type":"LinearScale"},{"attributes":{"source":{"id":"41888"}},"id":"41893","type":"CDSView"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"41880","type":"Span"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41827","type":"PolyAnnotation"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"41913"},"selection_policy":{"id":"41912"}},"id":"41883","type":"ColumnDataSource"},{"attributes":{},"id":"41912","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41911"},"selection_policy":{"id":"41910"}},"id":"41873","type":"ColumnDataSource"}],"root_ids":["41934"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"5de42b08-b1a0-455c-8fb8-529c5e7c2f40","root_ids":["41934"],"roots":{"41934":"18183ab9-300a-4c9d-bea1-8e1a7a9f9b09"}}];
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