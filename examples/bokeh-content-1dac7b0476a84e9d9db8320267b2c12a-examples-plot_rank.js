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
    
      
      
    
      const element = document.getElementById("8fd4d283-35b9-45fd-a39a-b9a0d39a5088");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '8fd4d283-35b9-45fd-a39a-b9a0d39a5088' but no matching script tag was found.")
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
                    
                  const docs_json = '{"fd247aa6-5f90-4c8f-a1f9-9332e9af1eb1":{"defs":[],"roots":{"references":[{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48458","type":"VBar"},{"attributes":{"overlay":{"id":"48365"}},"id":"48360","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"data_source":{"id":"48455"},"glyph":{"id":"48456"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48458"},"nonselection_glyph":{"id":"48457"},"view":{"id":"48460"}},"id":"48459","type":"GlyphRenderer"},{"attributes":{},"id":"48361","type":"UndoTool"},{"attributes":{"source":{"id":"48455"}},"id":"48460","type":"CDSView"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.480769230769231},"id":"48461","type":"Span"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48463","type":"VBar"},{"attributes":{},"id":"48502","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"48363","type":"HoverTool"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48465","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.480769230769231},"id":"48468","type":"Span"},{"attributes":{},"id":"48503","type":"Selection"},{"attributes":{},"id":"48362","type":"SaveTool"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48503"},"selection_policy":{"id":"48502"}},"id":"48462","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"48462"},"glyph":{"id":"48463"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48465"},"nonselection_glyph":{"id":"48464"},"view":{"id":"48467"}},"id":"48466","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"48382"},"coordinates":null,"group":null,"ticker":null},"id":"48385","type":"Grid"},{"attributes":{},"id":"48344","type":"LinearScale"},{"attributes":{"source":{"id":"48462"}},"id":"48467","type":"CDSView"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"48364","type":"BoxAnnotation"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48464","type":"VBar"},{"attributes":{"toolbars":[{"id":"48366"},{"id":"48400"}],"tools":[{"id":"48356"},{"id":"48357"},{"id":"48358"},{"id":"48359"},{"id":"48360"},{"id":"48361"},{"id":"48362"},{"id":"48363"},{"id":"48390"},{"id":"48391"},{"id":"48392"},{"id":"48393"},{"id":"48394"},{"id":"48395"},{"id":"48396"},{"id":"48397"}]},"id":"48508","type":"ProxyToolbar"},{"attributes":{"below":[{"id":"48382"}],"center":[{"id":"48385"},{"id":"48389"},{"id":"48447"},{"id":"48454"},{"id":"48461"},{"id":"48468"}],"height":331,"left":[{"id":"48386"}],"output_backend":"webgl","renderers":[{"id":"48445"},{"id":"48452"},{"id":"48459"},{"id":"48466"}],"title":{"id":"48471"},"toolbar":{"id":"48400"},"toolbar_location":null,"width":496,"x_range":{"id":"48340"},"x_scale":{"id":"48378"},"y_range":{"id":"48342"},"y_scale":{"id":"48380"}},"id":"48375","subtype":"Figure","type":"Plot"},{"attributes":{"toolbar":{"id":"48508"},"toolbar_location":"above"},"id":"48509","type":"ToolbarBox"},{"attributes":{"source":{"id":"48448"}},"id":"48453","type":"CDSView"},{"attributes":{},"id":"48481","type":"UnionRenderers"},{"attributes":{},"id":"48349","type":"BasicTicker"},{"attributes":{"axis":{"id":"48352"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"48355","type":"Grid"},{"attributes":{},"id":"48482","type":"Selection"},{"attributes":{"overlay":{"id":"48364"}},"id":"48358","type":"BoxZoomTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"48365","type":"PolyAnnotation"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48494"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48495"},"ticker":{"id":"48383"}},"id":"48382","type":"LinearAxis"},{"attributes":{},"id":"48380","type":"LinearScale"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48451","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.48076923076923067},"id":"48447","type":"Span"},{"attributes":{"coordinates":null,"data_source":{"id":"48448"},"glyph":{"id":"48449"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48451"},"nonselection_glyph":{"id":"48450"},"view":{"id":"48453"}},"id":"48452","type":"GlyphRenderer"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48499"},"selection_policy":{"id":"48498"}},"id":"48448","type":"ColumnDataSource"},{"attributes":{},"id":"48483","type":"UnionRenderers"},{"attributes":{},"id":"48484","type":"Selection"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48491"},"group":null,"major_label_policy":{"id":"48492"},"ticker":{"id":"48469"}},"id":"48386","type":"LinearAxis"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48501"},"selection_policy":{"id":"48500"}},"id":"48455","type":"ColumnDataSource"},{"attributes":{},"id":"48346","type":"LinearScale"},{"attributes":{"axis":{"id":"48348"},"coordinates":null,"group":null,"ticker":null},"id":"48351","type":"Grid"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48456","type":"VBar"},{"attributes":{},"id":"48474","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48474"},"group":null,"major_label_policy":{"id":"48475"},"ticker":{"id":"48437"}},"id":"48352","type":"LinearAxis"},{"attributes":{"children":[[{"id":"48339"},0,0],[{"id":"48375"},0,1]]},"id":"48507","type":"GridBox"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"48439","type":"Title"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4807692307692308},"id":"48454","type":"Span"},{"attributes":{},"id":"48475","type":"AllLabels"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48477"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48478"},"ticker":{"id":"48349"}},"id":"48348","type":"LinearAxis"},{"attributes":{},"id":"48477","type":"BasicTickFormatter"},{"attributes":{},"id":"48378","type":"LinearScale"},{"attributes":{},"id":"48478","type":"AllLabels"},{"attributes":{},"id":"48383","type":"BasicTicker"},{"attributes":{"tools":[{"id":"48356"},{"id":"48357"},{"id":"48358"},{"id":"48359"},{"id":"48360"},{"id":"48361"},{"id":"48362"},{"id":"48363"}]},"id":"48366","type":"Toolbar"},{"attributes":{},"id":"48359","type":"WheelZoomTool"},{"attributes":{},"id":"48485","type":"UnionRenderers"},{"attributes":{},"id":"48342","type":"DataRange1d"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48449","type":"VBar"},{"attributes":{},"id":"48486","type":"Selection"},{"attributes":{},"id":"48340","type":"DataRange1d"},{"attributes":{"children":[{"id":"48509"},{"id":"48507"}]},"id":"48510","type":"Column"},{"attributes":{"ticks":[0,1,2,3]},"id":"48437","type":"FixedTicker"},{"attributes":{"below":[{"id":"48348"}],"center":[{"id":"48351"},{"id":"48355"},{"id":"48415"},{"id":"48422"},{"id":"48429"},{"id":"48436"}],"height":331,"left":[{"id":"48352"}],"output_backend":"webgl","renderers":[{"id":"48413"},{"id":"48420"},{"id":"48427"},{"id":"48434"}],"title":{"id":"48439"},"toolbar":{"id":"48366"},"toolbar_location":null,"width":496,"x_range":{"id":"48340"},"x_scale":{"id":"48344"},"y_range":{"id":"48342"},"y_scale":{"id":"48346"}},"id":"48339","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"48395","type":"UndoTool"},{"attributes":{"overlay":{"id":"48399"}},"id":"48394","type":"LassoSelectTool"},{"attributes":{},"id":"48356","type":"ResetTool"},{"attributes":{},"id":"48393","type":"WheelZoomTool"},{"attributes":{},"id":"48396","type":"SaveTool"},{"attributes":{},"id":"48390","type":"ResetTool"},{"attributes":{},"id":"48391","type":"PanTool"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48450","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48457","type":"VBar"},{"attributes":{"axis":{"id":"48386"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"48389","type":"Grid"},{"attributes":{"overlay":{"id":"48398"}},"id":"48392","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48410","type":"VBar"},{"attributes":{},"id":"48479","type":"UnionRenderers"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"48471","type":"Title"},{"attributes":{"callback":null},"id":"48397","type":"HoverTool"},{"attributes":{},"id":"48357","type":"PanTool"},{"attributes":{},"id":"48480","type":"Selection"},{"attributes":{},"id":"48494","type":"BasicTickFormatter"},{"attributes":{},"id":"48495","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48412","type":"VBar"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"48398","type":"BoxAnnotation"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4166666666666665},"id":"48422","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48480"},"selection_policy":{"id":"48479"}},"id":"48409","type":"ColumnDataSource"},{"attributes":{},"id":"48496","type":"UnionRenderers"},{"attributes":{"tools":[{"id":"48390"},{"id":"48391"},{"id":"48392"},{"id":"48393"},{"id":"48394"},{"id":"48395"},{"id":"48396"},{"id":"48397"}]},"id":"48400","type":"Toolbar"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48417","type":"VBar"},{"attributes":{},"id":"48497","type":"Selection"},{"attributes":{"source":{"id":"48409"}},"id":"48414","type":"CDSView"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"48399","type":"PolyAnnotation"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48424","type":"VBar"},{"attributes":{"source":{"id":"48416"}},"id":"48421","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48418","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48426","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48409"},"glyph":{"id":"48410"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48412"},"nonselection_glyph":{"id":"48411"},"view":{"id":"48414"}},"id":"48413","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48411","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48419","type":"VBar"},{"attributes":{"source":{"id":"48441"}},"id":"48446","type":"CDSView"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.41666666666666663},"id":"48415","type":"Span"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.4166666666666665},"id":"48429","type":"Span"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48432","type":"VBar"},{"attributes":{},"id":"48498","type":"UnionRenderers"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48482"},"selection_policy":{"id":"48481"}},"id":"48416","type":"ColumnDataSource"},{"attributes":{"ticks":[0,1,2,3]},"id":"48469","type":"FixedTicker"},{"attributes":{"coordinates":null,"data_source":{"id":"48416"},"glyph":{"id":"48417"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48419"},"nonselection_glyph":{"id":"48418"},"view":{"id":"48421"}},"id":"48420","type":"GlyphRenderer"},{"attributes":{},"id":"48499","type":"Selection"},{"attributes":{"source":{"id":"48430"}},"id":"48435","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48497"},"selection_policy":{"id":"48496"}},"id":"48441","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"48441"},"glyph":{"id":"48442"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48444"},"nonselection_glyph":{"id":"48443"},"view":{"id":"48446"}},"id":"48445","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"data_source":{"id":"48430"},"glyph":{"id":"48431"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48433"},"nonselection_glyph":{"id":"48432"},"view":{"id":"48435"}},"id":"48434","type":"GlyphRenderer"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48486"},"selection_policy":{"id":"48485"}},"id":"48430","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48433","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48425","type":"VBar"},{"attributes":{},"id":"48500","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48444","type":"VBar"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48442","type":"VBar"},{"attributes":{},"id":"48501","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48443","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.4166666666666665},"id":"48436","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48484"},"selection_policy":{"id":"48483"}},"id":"48423","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"48423"},"glyph":{"id":"48424"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48426"},"nonselection_glyph":{"id":"48425"},"view":{"id":"48428"}},"id":"48427","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48431","type":"VBar"},{"attributes":{"source":{"id":"48423"}},"id":"48428","type":"CDSView"},{"attributes":{},"id":"48491","type":"BasicTickFormatter"},{"attributes":{},"id":"48492","type":"AllLabels"}],"root_ids":["48510"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"fd247aa6-5f90-4c8f-a1f9-9332e9af1eb1","root_ids":["48510"],"roots":{"48510":"8fd4d283-35b9-45fd-a39a-b9a0d39a5088"}}];
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