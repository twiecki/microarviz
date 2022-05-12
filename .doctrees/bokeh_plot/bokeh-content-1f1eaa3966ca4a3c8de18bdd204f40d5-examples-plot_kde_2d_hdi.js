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
    
      
      
    
      const element = document.getElementById("4e469bd3-22d4-4620-90a6-65b881f9b995");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '4e469bd3-22d4-4620-90a6-65b881f9b995' but no matching script tag was found.")
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
                    
                  const docs_json = '{"cdf9eff2-9dc0-465f-9d02-615c5f10a4ff":{"defs":[],"roots":{"references":[{"attributes":{},"id":"23872","type":"BasicTicker"},{"attributes":{"coordinates":null,"data_source":{"id":"23894"},"glyph":{"id":"23895"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23897"},"nonselection_glyph":{"id":"23896"},"view":{"id":"23899"}},"id":"23898","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[524]},"y":{"__ndarray__":"+LhonSoV6T/ks1qy9y7rP9CuTMfESO0/D/r5PdT87T+4qT7ckWLvP1JSmHgvvvA/yE8RAxbL8T8+TYqN/NfyP7JKAxjj5PM/KEh8osnx9D+eRfUssP71PxNDbreWC/c/XMBaV+Yv9z+KQOdBfRj4P/49YMxjJfk/dDvZVkoy+j98JIzneif7P+o4UuEwP/s/YDbLaxdM/D/VM0T2/Vj9P1oDYSy3SP4/TDG9gORl/j/ALjYLy3L/PxqW18rYPwBA1hQUEEzGAEDMvP+HjkYBQJCTUFW/TAFATBKNmjLTAUBgBNuL6wUCQAaRyd+lWQJAQ2YF8YTcAkDADwYlGeACQHyOQmqMZgNANg1/r//sA0DbTNa5mfoDQPKLu/RycwRArAr4Oeb5BEBKlaI0dQ8FQGaJNH9ZgAVAWa1J643pBUAiCHHEzAYGQNyGrQlAjQZAYEN/3rDNBkCWBepOsxMHQOD3KZahegdAUoQmlCaaB0ALA2PZmSAIQM8VJi+OMAhAyIGfHg2nCECn8J4gTfYIQIIA3GOALQlA2OVe+JaWCUA8fxip87MJQK2oi2nuLQpA+P1U7mY6CkBOR5JDecAKQLJ8kTPawApAbvvNeE1HC0CwMxwBbnULQCh6Cr7AzQtA5YHPBEo4DEDi+EYDNFQMQA0FhtXszQxAnneDSKfaDEBCXnBDi0QNQFj2v40aYQ1AsRS6kBetDUAUdfzSjecNQOA0qmrkGQ5AzvM4GAFuDkBe4bPn8KsOQIhydV109A5ASpi6XzNPD0BE8bGi53oPQEqE3oDfuA9AADj3c60AEEAkgf+U8wkQQGUcIxxPQBBAXXeVFudDEEC6tjO5IIcQQKLa0gDxixBAFvbRW1rKEED1sVWp580QQBSOXQmU9RBAdTVw/pMNEUA6mL3vnA0RQG6F3yjnJBFAU6YvZwBCEUDSdA6hzVARQCt057/xaRFAL7SsQweUEUCDbDpTwpURQMmpFKXuxhFAjfNK5kDXEUDPTGQnQPARQDhzZcE/ERJA6jLpiHoaEkA4fA0ALywSQChsIqPcQBJAC5bQAnZQEkBIcocrtF0SQN4MkXHcYxJAIANYCAKDEkClsSXO7aASQJnZ4GgJoRJAZtAv/qu7EkAwT/kixswSQNP6fTuh4BJAAvHDcCfkEkCG9shyqvwSQGotY1ciDxNAGqiNZEUJE0C/RLwhlQATQC4NmBffBxNANxzDMmAYE0CzEPq60CQTQC64jLYGFRNAJYPQnSf0EkAC8cNwJ+QSQCgCTCbs1xJAQLml8BPJEkBg7xTWXrUSQKWxJc7toBJA0dqTNUCfEkB98u9sZJgSQKzhn++VkRJAPkFClTp1EkBIcocrtF0SQM+P5OKDLhJA6jLpiHoaEkC8VJzp/P4RQI3zSuZA1xFAeWoD5ufKEUAvtKxDB5QRQL4aw9xEdxFA0nQOoc1QEUAvwBEyIxURQHU1cP6TDRFAF/bRW1rKEEDD66HQrqMQQLq2M7kghxBAnmiLmLBmEEBdd5UW50MQQP8393OtABBARPGxoud6D0BMCPNklUkPQIhydV109A5AzvM4GAFuDkD2ljCc7xIOQBR1/NKN5w1AWPa/jRphDUCed4NIp9oMQOL4RgM0VAxAKHoKvsDNC0Bu+814TUcLQLJ8kTPawApAVt4p4ug/CkD4/VTuZjoKQKfzAyNlwglAPH8YqfOzCUCCANxjgC0JQMiBnx4NpwhARlJBf891CEAMA2PZmSAIQFGEJpQmmgdA/MsqiSeSB0CWBepOsxMHQNyGrQlAjQZAIghxxMwGBkCh1Npppt4FQGaJNH9ZgAVArAr4Oeb5BEDyi7v0cnMEQDYNf6//7ANAfI5CaoxmA0DADwYlGeACQAjZmh0HzAJABpHJ36VZAkBMEo2aMtMBQB5XAPjRfgFAkJNQVb9MAUDWFBQQTMYAQBqW18rYPwBActk+Qy0dAEDALjYLy3L/P0wxvYDkZf4/+qJEiFkI/j/UM0T2/Vj9P2A2y2sXTPw/lrH1iuEJ/D/qOFLhMD/7P3Q72VZKMvo/atjl9DIB+j/+PWDMYyX5PxwxYbwQj/g/ikDnQX0Y+D8UQ263lgv3P2/jTsQnRvY/nkX1LLD+9T8oSHyiyfH0P4PWlqsAYfQ/skoDGOPk8z8+TYqN/NfyPw+FqC0Yy/I/yE8RAxbL8T/ONgfTbETxP1JSmHgvvvA/vNr4xFSA7z+4qT7ckWLvP9CuTMfESO0/sDzHJn1p7D/ks1qy9y7rPzZDXxmeBeo/+LhonSoV6T92i7aebrTnPwy+dohd++Y/EjxhIbv/5D8gw4RzkOHkPzjIkl7Dx+I/UuEhu3L54T9MzaBJ9q3gP5AQZN2N+94/wKRdaVIo3T+imEopkAbbP+iueT+49Ng/EuliFDih1z8QuZUVHsHUPwLO6MX+/tM/QMOx64ON0D/B8GjcLPjOP9Cam4PTs8g/SFD3rPjBxT8gr9Mvn0zAP859gxI0rLw/wA0vcKuVrz9WxN7vkypevwAGhfcuOXC/KADKgDN8sb/AJwiX+9GxvzRvZY9mvby/kP9LHzJQwb807v6OoyfDvwYBMI1GZMa/CZWUb5zKyL9A6xNzZrfJvw2nel9ocsy/B6OhbgPB0L90621jTQ/Rv9XMib11w9O/TOFRjedC1b/5QlJ1BmPWv3rUVL5NdNi/INc1t4F22b8uYtFGIvnZv5jrYvUfYdu/Bqs2L5v93L/4zBnhG6rdv+Ifd+jCit+/YMWVu0Xs4L9m4X4F2+7gv+puiQrt2OG/cLsFfrlx4r83B+Ch4cfiv93tfsp+wOK/hnspCfK44r+4IGDhzefiv1LccBqoCOO/RYok1C5D47+Ye5DO7u/jvwx3R0/G3uS/PNdiL3Ui5b+JBrAZAdblvwXFQ5kRGua/IugUzWPt5b8Xx+MDpLvlv5InDrtVz+W/SsxjUiu+5b8812IvdSLlvxyzdRoKeeS/UtxwGqgI478xvdiL/AXjv5SizOtMXOK/mb4WpKYb4b9m4X4F2+7gv+hAZ6gtSuC/E4ZyzQ3Y37/8lBm6LNPev/jMGeEbqt2/tSSqen6c3L8g1zW3gXbZv4zA2hdUONi/TOFRjedC1b8eJlXlFmPSv3TrbWNND9G/ZcLZ1DJEz79A6xNzZrfJvyF2j3/tmci/kP9LHzJQwb9bW+KAOQe4v8AnCJf70bG/AAaF9y45cL/ADS9wq5WvP9y2Rw7v4rY/IK/TL59MwD/QmpuD07PIP0DDseuDjdA/ELmVFR7B1D/Z8jTY3YLXP+iueT+49Ng/wKRdaVIo3T9MzaBJ9q3gPzjIkl7Dx+I/IMOEc5Dh5D8MvnaIXfvmP0B4lGlGzOc/+LhonSoV6T80AThMvIbxP1JSmHgvvvA/uak+3JFi7z/QrkzHxEjtP+SzWrL3Lus/+LhonSoV6T/wwa1ahc/oPwy+dohd++Y/IMOEc5Dh5D8+zycsB2/kP9vNeKd6yeI/OciSXsPH4j9MzaBJ9q3gP/S0LsJIMOA/wKRdaVIo3T98SzHWRaHbP+iueT+49Ng/MWHn5Nvk1z+s43fI6B7VPxC5lRUewdQ/pmGNjmW70j9x70hHMwvRP0DDseuDjdA/QXVonVD0zz/IGOmL9p3OPwtPnVxzE84/tRkw2Udizj+u6e2NgUvPP0omQiGIH9A/tsfspnlg0D9Aw7Hrg43QPy4S/wIjktA/YBb1MlAj0T+CtwGEpTLSP2jPNW+fk9M/ELmVFR7B1D/xF9zXL/HUPzqpr7ZrbtY/Jh7knGlp2D/ornk/uPTYP8rXZ2hNx9o/wKRdaVIo3T8gkmbd4m/dP9IRnURo0N8/TM2gSfat4D/qogo0qjHhP6s0lIhhkuI/OMiSXsPH4j+cchlt/e7jPyDDhHOQ4eQ/38xqWLhC5T9OFrJIRJDmPwy+dohd++Y/HN09LHMM6D/4uGidKhXpP2T0JJHvvOk/47Nasvcu6z89HLd7MJjrP8+uTMfESO0/FvAXzje37T+4qT7ckWLvP6zcfb+dEPA/UlKYeC++8D8ySrDGPk3xP8hPEQMWy/E/vUBZrRds8j8+TYqN/NfyPzDyboSHgPM/skoDGOPk8z8wDBrrX9X0PyhIfKLJ8fQ/nkX1LLD+9T/6MUAEupj2PxRDbreWC/c/ikDnQX0Y+D8DvRSVyUP4P/49YMxjJfk/TnvtjV/f+T90O9lWSjL6P+o4UuEwP/s/XszHIL2q+z9gNstrF0z8P9QzRPb9WP0/W7kC91Ju/T9MMb2A5GX+P8AuNgvLcv8/aK8Ccwjv/z8altfK2D8AQNYUFBBMxgBAkJNQVb9MAUAHZKiB/KQBQEwSjZoy0wFABpHJ36VZAkDADwYlGeACQH2OQmqMZgNAAIfutSGgA0A2DX+v/+wDQPKLu/RycwRArAr4Oeb5BEBmiTR/WYAFQCIIccTMBgZA3IatCUCNBkCWBepOsxMHQFKEJpQmmgdADANj2ZkgCEDIgZ8eDacIQIIA3GOALQlACI0H/jJsCUA8fxip87MJQPj9VO5mOgpAsnyRM9rACkArlEEdIOYKQG77zXhNRwtAcPbmt2W8C0Anegq+wM0LQOL4RgM0VAxA4q7QRNFmDECed4NIp9oMQChD+pC/LQ1AWPa/jRphDUCqLes+t5kNQBR1/NKN5w1AYqZlN+nrDUBot9q4kRoOQAQSvEkXNA5AzX7yiLBNDkB8tSgzKWMOQPJJwkhsaw5AzvM4GAFuDkCNGRmmJHMOQPoquCaUiA5AiENYN6KdDkAeZwwpFJ0OQB0hEz94gw5AzvM4GAFuDkAZN8ZC9FsOQJWSKdxiNQ5A2jIw0ecNDkAUdfzSjecNQG1RMwus4Q1AT57ncl2vDUCDF07EbXcNQFj2v40aYQ1ARW6k9RZCDUBpSkQ5QwsNQJ53g0in2gxAv+QFWh/WDECSJqct2Y0MQOL4RgM0VAxAGG+USYE1DEAoegq+wM0LQL/01CoQbwtAbvvNeE1HC0AoGGXDkhALQLJ8kTPawApAFiTo82ClCkD4/VTuZjoKQKGjxiKLKgpAPH8YqfOzCUD9oiSaY64JQDtNzUAwPAlAggDcY4AtCUA907s0IMYIQMiBnx4NpwhAYGaeZEc6CEAMA2PZmSAIQFKEJpQmmgdAH4SLTbWWB0CWBepOsxMHQPJSaUm08QZA3IatCUCNBkAnV+GnBEsGQCIIccTMBgZAMffo7pmNBUBmiTR/WYAFQKwK+Dnm+QRAqojVqTm0BEDyi7v0cnMEQDYNf6//7ANALYb08Bq6A0B8jkJqjGYDQMAPBiUZ4AJAw98UfOq9AkAGkcnfpVkCQBbkAGfs3AFATBKNmjLTAUCQk1BVv0wBQNYUFBBMxgBAQrVu+qG+AEAaltfK2D8AQMAuNgvLcv8/gpK+pHwb/z9MMb2A5GX+P9QzRPb9WP0/6oREw6l//D9gNstrF0z8P+o4UuEwP/s/dDvZVkoy+j/+PWDMYyX5P4pA50F9GPg/6Oe6agci9z8UQ263lgv3P55F9Syw/vU/KEh8osnx9D+ySgMY4+TzPz5Nio381/I/yE8RAxbL8T80AThMvIbxPw==","dtype":"float64","order":"little","shape":[524]}},"selected":{"id":"23921"},"selection_policy":{"id":"23920"}},"id":"23894","type":"ColumnDataSource"},{"attributes":{},"id":"23925","type":"Selection"},{"attributes":{},"id":"23875","type":"ResetTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1764ab","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23908","type":"Patch"},{"attributes":{"fill_alpha":0.1,"fill_color":"#4a98c9","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23902","type":"Patch"},{"attributes":{"coordinates":null,"group":null},"id":"23912","type":"Title"},{"attributes":{"source":{"id":"23900"}},"id":"23905","type":"CDSView"},{"attributes":{"source":{"id":"23894"}},"id":"23899","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"23900"},"glyph":{"id":"23901"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23903"},"nonselection_glyph":{"id":"23902"},"view":{"id":"23905"}},"id":"23904","type":"GlyphRenderer"},{"attributes":{"tools":[{"id":"23875"},{"id":"23876"},{"id":"23877"},{"id":"23878"},{"id":"23879"},{"id":"23880"},{"id":"23881"},{"id":"23882"}]},"id":"23885","type":"Toolbar"},{"attributes":{"below":[{"id":"23867"}],"center":[{"id":"23870"},{"id":"23874"}],"height":500,"left":[{"id":"23871"}],"output_backend":"webgl","renderers":[{"id":"23898"},{"id":"23904"},{"id":"23910"}],"title":{"id":"23912"},"toolbar":{"id":"23885"},"toolbar_location":null,"width":500,"x_range":{"id":"23859"},"x_scale":{"id":"23863"},"y_range":{"id":"23861"},"y_scale":{"id":"23865"}},"id":"23858","subtype":"Figure","type":"Plot"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"23884","type":"PolyAnnotation"},{"attributes":{"children":[[{"id":"23858"},0,0]]},"id":"23929","type":"GridBox"},{"attributes":{"fill_alpha":0.1,"fill_color":"#94c4df","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23896","type":"Patch"},{"attributes":{},"id":"23865","type":"LinearScale"},{"attributes":{"fill_alpha":0.2,"fill_color":"#4a98c9","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23903","type":"Patch"},{"attributes":{},"id":"23920","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"23930"},"toolbar_location":"above"},"id":"23931","type":"ToolbarBox"},{"attributes":{},"id":"23922","type":"UnionRenderers"},{"attributes":{},"id":"23921","type":"Selection"},{"attributes":{"toolbars":[{"id":"23885"}],"tools":[{"id":"23875"},{"id":"23876"},{"id":"23877"},{"id":"23878"},{"id":"23879"},{"id":"23880"},{"id":"23881"},{"id":"23882"}]},"id":"23930","type":"ProxyToolbar"},{"attributes":{},"id":"23923","type":"Selection"},{"attributes":{"fill_alpha":0.2,"fill_color":"#1764ab","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23909","type":"Patch"},{"attributes":{"overlay":{"id":"23884"}},"id":"23879","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"formatter":{"id":"23918"},"group":null,"major_label_policy":{"id":"23919"},"ticker":{"id":"23868"}},"id":"23867","type":"LinearAxis"},{"attributes":{"children":[{"id":"23931"},{"id":"23929"}]},"id":"23932","type":"Column"},{"attributes":{"callback":null},"id":"23882","type":"HoverTool"},{"attributes":{"fill_color":"#4a98c9","line_alpha":0.25,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23901","type":"Patch"},{"attributes":{},"id":"23863","type":"LinearScale"},{"attributes":{"fill_color":"#1764ab","line_alpha":0.25,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23907","type":"Patch"},{"attributes":{},"id":"23861","type":"DataRange1d"},{"attributes":{"data":{"x":{"__ndarray__":"h39ZiubB8D+yzFeqOmzwPwy5I9rzJ/A/9IGUh+YB8D+l+bR5o/HvP4k/OhtpEfA/tfh+xw1F8D/Sp0IflpPwPzTVT+HUBvE/bHr0MDwJ8T/72dWV95fxPwklfVL3HPI/yCd3N5pY8j9uCiV8sLXyP5iqBQsEhPM/V3qejV+q8z9fpJFiA3b0P+jMxeMk/PQ/mdZPUr9v9T94H+056k32Pzii9uKRdPY/2qvCYW6H9z8IchSQr5/3P5yTKkfYovg/nMQ75nTx+D8gudLPWdD5PywXYzw6Q/o/jvzjQs0g+z+8aYqS/5T7PzykutUaxPw/TLyx6MTm/D/gDtk+ijj+P+aXx+9kSP8/cGEAlU+K/z8A2pN1Cm4AQEiDpyDtFgFAOxN+WjqtAUCQLLvLz78BQNrVznayaAJAIn/iIZURA0BqKPbMd7oDQLLRCXhaYwRA/HodIz0MBUAqtGIjC2IFQEQkMc4ftQVAjc1EeQJeBkDeO7O2u3wGQNR2WCTlBgdAW8MVPX8xB0AyiJ373IcHQBwgbM/HrwdAtoTaHHawB0B27EQ9qNkHQJALftdy9wdATNuQkvQACECC/mbQivcHQFgxv5U/2gdAKP1P3NKzB0AcIGzPx68HQFAtBcNbkQdAmJj9pzZjB0BZpBTNNxwHQNR2WCTlBgdA1qfGLHvCBkCelzNtMWgGQIzNRHkCXgZAiOvktdkIBkBEJDHOH7UFQA48XqXVmgVAuZM+0+kiBUD9eh0jPQwFQIDBxvLTtARAstEJeFpjBEAJzW+R2D8EQGoo9sx3ugNAIn/iIZURA0BjGHuBkxADQNrVznayaAJAWG/gUWFBAkCQLLvLz78BQAlSWxtvXgFASIOnIO0WAUAA2pN1Cm4AQLLE8PzrPwBAcGEAlU+K/z/gDtk+ijj+PzwJHYOoWP0/Tbyx6MTm/D+8aYqS/5T7PywXYzw6Q/o/nMQ75nTx+D8IchSQr5/3P3gf7TnqTfY/6MzF4yT89D9MV2JUu3j0P1h6no1fqvM/Pr6D9wfg8j/IJ3c3mljyPy1ntoeM4PE/OgCIUEg88T801U/h1AbxP4d/WYrmwfA/","dtype":"float64","order":"little","shape":[102]},"y":{"__ndarray__":"FENut5YL9z+KQOdBfRj4P/49YMxjJfk/dDvZVkoy+j/qOFLhMD/7P2A2y2sXTPw/1DNE9v1Y/T9MMb2A5GX+P5G1n8qKbf8/wC42C8ty/z8altfK2D8AQNYUFBBMxgBArrT4Msr8AECQk1BVv0wBQEwSjZoy0wFAcou2mSboAUAGkcnfpVkCQJiU+GR0oQJAwA8GJRngAkD94f7W+VIDQHyOQmqMZgNANg1/r//sA0BOjz674/gDQPKLu/RycwRA+Qik00aXBECsCvg55vkEQBGdoURZKgVAZok0f1mABUC+0+G34qkFQCIIccTMBgZAZmVmh4AQBkAxXr3VTloGQNyGrQlAjQZAs98t7NCYBkBKQnYuecoGQKBTXLMx9gZAlgXqTrMTB0Ccmjh1chcHQCHMc3a6LgdAlh4fdwQ/B0DuOHhgKkQHQFm96DlJOwdAFLgYHzkoB0CWBepOsxMHQPiwAfHJ/AZAcJ8PHReiBkDchq0JQI0GQJ/+h9+VLQZAIghxxMwGBkBmiTR/WYAFQCbRYGI2/ARArAr4Oeb5BEDyi7v0cnMEQDYNf6//7ANAfI5CaoxmA0DADwYlGeACQAaRyd+lWQJATBKNmjLTAUA5QMAia8MBQJCTUFW/TAFA1hQUEEzGAEAaltfK2D8AQKLLckXTHgBAwC42C8ty/z9MMb2A5GX+PxJXjFrmRv4/1DNE9v1Y/T9nQafMjIb8P2A2y2sXTPw/6jhS4TA/+z+a2ZS1ZQr7P3Q72VZKMvo/zt9fPvh6+T/+PWDMYyX5P4pA50F9GPg/6eWj6BIN9z8UQ263lgv3P3M+9HFML/Y/nkX1LLD+9T8GuZafy131PyhIfKLJ8fQ/f/oVoK+k9D//FoZplQr0P7JKAxjj5PM/FC4TlOeG8z+6FSWhVhXzPz5Nio381/I//tsQAPq38j+QKGSdvXPyP1Jwp6ugRPI/RHquZp4x8j8dFVTDjDfyP+yYwUQzVPI/SK5VRsOc8j8+TYqN/NfyPzCvHfO6TfM/skoDGOPk8z+cjoQm+mb0PyhIfKLJ8fQ/nkX1LLD+9T80YS2YUmn2PxRDbreWC/c/","dtype":"float64","order":"little","shape":[102]}},"selected":{"id":"23925"},"selection_policy":{"id":"23924"}},"id":"23906","type":"ColumnDataSource"},{"attributes":{"fill_color":"#94c4df","line_alpha":0.25,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23895","type":"Patch"},{"attributes":{"source":{"id":"23906"}},"id":"23911","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"47EaJCCThr8dZblIkXGYvzRNgDASl6O/t2T5nk3go7+O0cwCHpibvyivXwdxKoO/ABOuVz8YgL86lKrj9u99Py5UZri2npU/P62aLmTNoD8nb/8AgemnPwnNVCOGjbE/wGZ/d00Zsz/VFGcxeyy5Pyy4uVA/7MA/4Ef6bNEaxD/cAv5ruYPFPzYLp5CW/ck/YNw0Hvyozj9Nk/A6vOnOP7RI30ZArNE/ibUKBoJd1D94uLdnk5vUPyAz2zd6Y9c/uAJVwKji2T/Fk2eLB6jaPwbwQUfOct0/AE3yGL4p3z8mZgq1ShHgP2I7DdLZdOE/oMvHuGk44j9zygd+iwXjP74RH7rmr+Q/xHAWZfTb5D9uRaoyCm/mP+QVZRF/f+c/pJK8EQZ46D8Iu7O9CSPqP4AsVSoaqeo/KGACapTG7D/oSjSp49TsP+ZAvg9A++4/SAVRFh9q7z+oUnJ4jrXwPzTVT+HUBvE/FyOPND4r8j/IJ3c3mljyP1h6no1fqvM/CFa3DHe58z/ozMXjJPz0Pz7YDYwaKPU/eB/tOepN9j8OhS4EfqT2PwhyFJCvn/c/MIYMPIBn+D+cxDvmdPH4PywXYzw6Q/o/vGmKkv+U+z8L+3iM/Qj8P0y8sejE5vw/4A7ZPoo4/j/8nBLlfVT+P3BhAJVPiv8/ANqTdQpuAEC03+L+0M8AQEiDpyDtFgFAkCy7y8+/AUDa1c52smgCQFLJZlELgQJAIn/iIZURA0BqKPbMd7oDQLLRCXhaYwRAWpsb8Ji1BED8eh0jPQwFQEQkMc4ftQVAjM1EeQJeBkDUdlgk5QYHQBsgbM/HrwdA9FVYfS4ZCEBmyX96qlgIQK5ykyWNAQlA9hun0G+qCUA+xbp7UlMKQIhuziY1/ApA0Bfi0RelC0DXBNB4Bq8LQBjB9Xz6TQxASIh1mZG0DEBgagko3fYMQJFiHdljRg1AqBMd07+fDUA+X+vyF64NQI7pomcaOQ5A8rwwfqJIDkACFglLzK0OQDpmRCmF8Q5A9AHX1iULD0CGjDkOIU0PQFCQmPgnew9Agg9Y1GeaD0C4zBgkKLUPQNDMTPb42Q9A8JlmCv3hD0DrHp0Yt+sPQO1haB9jABBAXlSSUFUGEECYe6IbGAUQQHbYiUgFAhBAL79ROtz5D0CyUoH1TOQPQEQ+B11Rug9Agg9Y1GeaD0CcZgUzeIUPQDCohZtBVw9AZELvXBQtD0BFno6mqgIPQDpmRCmF8Q5A9qEREA3TDkA6X/tR6ZwOQBQepqUnZw5A8rwwfqJIDkDIlC7x4C4OQEOmYgag6g1AqBMd07+fDUBKNf8DeJkNQI4WDN2ZNw1AYGoJKN32DEDGCRxD+88MQE5o/7Z0bgxAGMH1fPpNDECmHsrbuggMQNAX4tEXpQtAqXLvlTGTC0CrMp8C8yYLQIhuziY1/ApArTyMzRTGCkC8tdYY9V8KQD7FuntSUwpAxt3u59jiCUD2G6fQb6oJQNpiDbJgRQlArnKTJY0BCUBSbQ+O6Z4IQGbJf3qqWAhAgZoQCBEKCEAcIGzPx68HQJvl7b+qfAdA1HZYJOUGB0CE1iXZDOYGQIzNRHkCXgZAmE+4tu04BkBEJDHOH7UFQNXUDbE3dAVA/HodIz0MBUBmYDTlIZUEQLLRCXhaYwRAaij2zHe6A0AEzkcJlIcDQCJ/4iGVEQNAAvXO/UaAAkDa1c52smgCQJAsu8vPvwFAiil8omZ5AUBIg6cg7RYBQADak3UKbgBAYwjCBJ9ZAEBwYQCVT4r/P5w/wRP4gf4/4A7ZPoo4/j9MvLHoxOb8P7xpipL/lPs/gqktZmtn+z8sF2M8OkP6P5zEO+Z08fg/CHIUkK+f9z94H+056k32P8cukHskK/Y/58zF4yT89D9Zep6NX6rzP8gndzeaWPI/NNVP4dQG8T9IBVEWH2rvPydgAmqUxuw/CLuzvQkj6j+wtlMMx6zoP+QVZRF/f+c/xHAWZfTb5D/4yoDyvJ/iP6DLx7hpOOI/AE3yGL4p3z+TMdCb4ordP7gCVcCo4tk/96EPX+L71z94uLdnk5vUPwMMNko0tdM/1bN8x8Gyzj9g3DQe/KjOP+BH+mzRGsQ/DjxvKgIswj8Nqc5w7sq5P8Bmf3dNGbM/QTHqErcdsj9NfA6ag1inPwCcM2e9DaE/Js9CH4Pukj+oYOTsLjtCPwATrlc/GIC/47EaJCCThr801U/h1AbxPzoAiFBIPPE/Lme2h4zg8T/IJ3c3mljyPz6+g/cH4PI/WHqejV+q8z9MV2JUu3j0P+jMxeMk/PQ/eB/tOepN9j8IchSQr5/3P5zEO+Z08fg/LBdjPDpD+j+8aYqS/5T7P0y8sejE5vw/PAkdg6hY/T/gDtk+ijj+P3BhAJVPiv8/ssTw/Os/AEAA2pN1Cm4AQEiDpyDtFgFACFJbG29eAUCQLLvLz78BQFhv4FFhQQJA2tXOdrJoAkBjGHuBkxADQCJ/4iGVEQNAaij2zHe6A0AJzW+R2D8EQLLRCXhaYwRAgMHG8tO0BED8eh0jPQwFQLmTPtPpIgVADzxepdWaBUBEJDHOH7UFQIjr5LXZCAZAjM1EeQJeBkCelzNtMWgGQNanxix7wgZA1HZYJOUGB0BZpBTNNxwHQJiY/ac2YwdAUC0Fw1uRB0AcIGzPx68HQCj9T9zSswdAWDG/lT/aB0CC/mbQivcHQEzbkJL0AAhAkAt+13L3B0B27EQ9qNkHQLaE2hx2sAdAHCBsz8evB0AyiJ373IcHQFvDFT1/MQdA1HZYJOUGB0DeO7O2u3wGQIzNRHkCXgZARCQxzh+1BUAqtGIjC2IFQPx6HSM9DAVAstEJeFpjBEBqKPbMd7oDQCJ/4iGVEQNA2tXOdrJoAkCQLLvLz78BQDsTflo6rQFASIOnIO0WAUAA2pN1Cm4AQHBhAJVPiv8/5pfH72RI/z/gDtk+ijj+P0y8sejE5vw/O6S61RrE/D+8aYqS/5T7P47840LNIPs/LBdjPDpD+j8gudLPWdD5P5zEO+Z08fg/nZMqR9ii+D8IchSQr5/3P9urwmFuh/c/OKL24pF09j94H+056k32P5jWT1K/b/U/6MzF4yT89D9fpJFiA3b0P1h6no1fqvM/mKoFCwSE8z9uCiV8sLXyP8gndzeaWPI/CSV9Uvcc8j/72dWV95fxP2169DA8CfE/NNVP4dQG8T/Sp0IflpPwP7X4fscNRfA/iT86G2kR8D+l+bR5o/HvP/SBlIfmAfA/DLkj2vMn8D+zzFeqOmzwP4d/WYrmwfA/NNVP4dQG8T8=","dtype":"float64","order":"little","shape":[310]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[310]}},"selected":{"id":"23923"},"selection_policy":{"id":"23922"}},"id":"23900","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"23867"},"coordinates":null,"grid_line_color":null,"group":null,"ticker":null},"id":"23870","type":"Grid"},{"attributes":{"axis":{"id":"23871"},"coordinates":null,"dimension":1,"grid_line_color":null,"group":null,"ticker":null},"id":"23874","type":"Grid"},{"attributes":{},"id":"23868","type":"BasicTicker"},{"attributes":{},"id":"23881","type":"SaveTool"},{"attributes":{},"id":"23880","type":"UndoTool"},{"attributes":{},"id":"23918","type":"BasicTickFormatter"},{"attributes":{},"id":"23876","type":"PanTool"},{"attributes":{},"id":"23919","type":"AllLabels"},{"attributes":{"overlay":{"id":"23883"}},"id":"23877","type":"BoxZoomTool"},{"attributes":{},"id":"23859","type":"DataRange1d"},{"attributes":{},"id":"23878","type":"WheelZoomTool"},{"attributes":{},"id":"23924","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.2,"fill_color":"#94c4df","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23897","type":"Patch"},{"attributes":{"coordinates":null,"formatter":{"id":"23915"},"group":null,"major_label_policy":{"id":"23916"},"ticker":{"id":"23872"}},"id":"23871","type":"LinearAxis"},{"attributes":{},"id":"23916","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"23906"},"glyph":{"id":"23907"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23909"},"nonselection_glyph":{"id":"23908"},"view":{"id":"23911"}},"id":"23910","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"23883","type":"BoxAnnotation"},{"attributes":{},"id":"23915","type":"BasicTickFormatter"}],"root_ids":["23932"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"cdf9eff2-9dc0-465f-9d02-615c5f10a4ff","root_ids":["23932"],"roots":{"23932":"4e469bd3-22d4-4620-90a6-65b881f9b995"}}];
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