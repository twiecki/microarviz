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
    
      
      
    
      const element = document.getElementById("13698a5e-284b-4b5a-80d8-5e4a01a1c5ec");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '13698a5e-284b-4b5a-80d8-5e4a01a1c5ec' but no matching script tag was found.")
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
                    
                  const docs_json = '{"0734d466-6c7e-4828-befb-7b81333879f8":{"defs":[],"roots":{"references":[{"attributes":{"overlay":{"id":"22216"}},"id":"22211","type":"LassoSelectTool"},{"attributes":{},"id":"22244","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"formatter":{"id":"22241"},"group":null,"major_label_policy":{"id":"22242"},"ticker":{"id":"22204"}},"id":"22203","type":"LinearAxis"},{"attributes":{},"id":"22204","type":"BasicTicker"},{"attributes":{},"id":"22195","type":"LinearScale"},{"attributes":{},"id":"22191","type":"DataRange1d"},{"attributes":{},"id":"22212","type":"UndoTool"},{"attributes":{"source":{"id":"22226"}},"id":"22231","type":"CDSView"},{"attributes":{},"id":"22249","type":"Selection"},{"attributes":{},"id":"22208","type":"PanTool"},{"attributes":{"data":{"x":{"__ndarray__":"3JPc7MdPB8B0VvQqxjQHwKbbI6fC/gbA2GBTI7/IBsAJ5oKfu5IGwDprshu4XAbAbPDhl7QmBsCedREUsfAFwM/6QJCtugXAAIBwDKqEBcAyBaCIpk4FwGSKzwSjGAXAlQ//gJ/iBMDGlC79m6wEwPgZXnmYdgTAKp+N9ZRABMBbJL1xkQoEwIyp7O2N1APAvi4caoqeA8Dws0vmhmgDwCE5e2KDMgPAUr6q3n/8AsCEQ9pafMYCwLbICdd4kALA5005U3VaAsAY02jPcSQCwEpYmEtu7gHAfN3Hx2q4AcCtYvdDZ4IBwN7nJsBjTAHAEG1WPGAWAcBC8oW4XOAAwHN3tTRZqgDApPzksFV0AMDWgRQtUj4AwAgHRKlOCADAchjnSpak/7/VIkZDjzj/vzgtpTuIzP6/mzcENIFg/r/+QWMsevT9v2FMwiRziP2/xFYhHWwc/b8nYYAVZbD8v4pr3w1eRPy/7XU+BlfY+79QgJ3+T2z7v7OK/PZIAPu/FpVb70GU+r95n7rnOij6v9ypGeAzvPm/P7R42CxQ+b+ivtfQJeT4vwXJNskeePi/aNOVwRcM+L/L3fS5EKD3vy7oU7IJNPe/kfKyqgLI9r/0/BGj+1v2v1cHcZv07/W/uhHQk+2D9b8dHC+M5hf1v4AmjoTfq/S/4zDtfNg/9L9GO0x10dPzv6lFq23KZ/O/DFAKZsP78r9vWmlevI/yv9JkyFa1I/K/NW8nT6638b+YeYZHp0vxv/uD5T+g3/C/Xo5EOJlz8L/BmKMwkgfwv0hGBVIWN++/DlvDQghf7r/Ub4Ez+obtv5yEPyTsruy/YJn9FN7W678krrsF0P7qv+zCefbBJuq/tNc357NO6b947PXXpXbovzwBtMiXnue/BBZyuYnG5r/MKjCqe+7lv5A/7pptFuW/VFSsi18+5L8caWp8UWbjv+R9KG1DjuK/qJLmXTW24b9sp6ROJ97gvzS8Yj8ZBuC/+KFBYBZc3r+Ay71B+qvcvwj1OSPe+9q/mB62BMJL2b8oSDLmpZvXv7BxrseJ69W/OJsqqW071L/IxKaKUYvSv1juImw129C/wC8+mzJWzr/QgjZe+vXKv/DVLiHClce/ECkn5Ik1xL8gfB+nUdXAv2CeL9Qy6rq/oEQgWsIptL/A1SHAo9KqvwBEBpiFo5q/AODIDRSPNz+AinQ4/l+bP8D4WBDgMKs/QNY7guBYtD8gMEv8UBm7P/BELbvg7MA/0PE0+BhNxD/Anjw1Ua3HP7BLRHKJDcs/kPhLr8Ftzj+40in2/ObQPzCprRQZl9I/qH8xMzVH1D8YVrVRUffVP4gsOXBtp9c/AAO9jolX2T942UCtpQfbP+ivxMvBt9w/WIZI6t1n3j9oLmYE/QvgP6QZqBML5OA/3ATqIhm84T8U8CsyJ5TiP1DbbUE1bOM/jMavUENE5D/EsfFfURzlP/ycM29f9OU/OIh1fm3M5j90c7eNe6TnP6xe+ZyJfOg/5Ek7rJdU6T8gNX27pSzqP1wgv8qzBOs/lAsB2sHc6z/M9kLpz7TsPwjihPjdjO0/RM3GB+xk7j98uAgX+jzvP9pRJROECvA/eEfGGot28D8WPWcikuLwP7IyCCqZTvE/TiipMaC68T/qHUo5pybyP4oT60CukvI/JgmMSLX+8j/C/ixQvGrzP2L0zVfD1vM//uluX8pC9D+a3w9n0a70PzbVsG7YGvU/0spRdt+G9T9ywPJ95vL1Pw62k4XtXvY/qqs0jfTK9j9KodWU+zb3P+aWdpwCo/c/gowXpAkP+D8egrirEHv4P7p3WbMX5/g/Wm36uh5T+T/2YpvCJb/5P5JYPMosK/o/Mk7d0TOX+j/OQ37ZOgP7P2o5H+FBb/s/Bi/A6Ejb+z+iJGHwT0f8P0IaAvhWs/w/3g+j/10f/T96BUQHZYv9Pxr75A5s9/0/tvCFFnNj/j9S5iYees/+P+7bxyWBO/8/itFoLYin/z+V44SaxwkAQGNeVR7LPwBAMdklos51AEABVPYl0qsAQM/OxqnV4QBAnUmXLdkXAUBrxGex3E0BQDk/ODXggwFACboIueO5AUDXNNk85+8BQKWvqcDqJQJAdSp6RO5bAkBDpUrI8ZECQEOlSsjxkQJAdSp6RO5bAkClr6nA6iUCQNc02Tzn7wFACboIueO5AUA5Pzg14IMBQGvEZ7HcTQFAnUmXLdkXAUDPzsap1eEAQAFU9iXSqwBAMdklos51AEBjXlUeyz8AQJXjhJrHCQBAitFoLYin/z/u28clgTv/P1LmJh56z/4/tvCFFnNj/j8a++QObPf9P3oFRAdli/0/3g+j/10f/T9CGgL4VrP8P6IkYfBPR/w/Bi/A6Ejb+z9qOR/hQW/7P85Dftk6A/s/Mk7d0TOX+j+SWDzKLCv6P/Zim8Ilv/k/Wm36uh5T+T+6d1mzF+f4Px6CuKsQe/g/gowXpAkP+D/mlnacAqP3P0qh1ZT7Nvc/qqs0jfTK9j8OtpOF7V72P3LA8n3m8vU/0spRdt+G9T821bBu2Br1P5rfD2fRrvQ//uluX8pC9D9i9M1Xw9bzP8L+LFC8avM/JgmMSLX+8j+KE+tArpLyP+odSjmnJvI/TiipMaC68T+yMggqmU7xPxY9ZyKS4vA/eEfGGot28D/aUSUThArwP3y4CBf6PO8/RM3GB+xk7j8I4oT43YztP8z2QunPtOw/lAsB2sHc6z9cIL/KswTrPyA1fbulLOo/5Ek7rJdU6T+sXvmciXzoP3Rzt417pOc/OIh1fm3M5j/8nDNvX/TlP8Sx8V9RHOU/jMavUENE5D9Q221BNWzjPxTwKzInlOI/3ATqIhm84T+kGagTC+TgP2guZgT9C+A/WIZI6t1n3j/or8TLwbfcP3jZQK2lB9s/AAO9jolX2T+ILDlwbafXPxhWtVFR99U/qH8xMzVH1D8wqa0UGZfSP7jSKfb85tA/kPhLr8Ftzj+wS0RyiQ3LP8CePDVRrcc/0PE0+BhNxD/wRC274OzAPyAwS/xQGbs/QNY7guBYtD/A+FgQ4DCrP4CKdDj+X5s/AODIDRSPNz8ARAaYhaOav8DVIcCj0qq/oEQgWsIptL9gni/UMuq6vyB8H6dR1cC/ECkn5Ik1xL/w1S4hwpXHv9CCNl769cq/wC8+mzJWzr9Y7iJsNdvQv8jEpopRi9K/OJsqqW071L+wca7HievVvyhIMualm9e/mB62BMJL2b8I9Tkj3vvav4DLvUH6q9y/+KFBYBZc3r80vGI/GQbgv2ynpE4n3uC/qJLmXTW24b/kfShtQ47ivxxpanxRZuO/VFSsi18+5L+QP+6abRblv8wqMKp77uW/BBZyuYnG5r88AbTIl57nv3js9deldui/tNc357NO6b/swnn2wSbqvySuuwXQ/uq/YJn9FN7W67+chD8k7K7sv9RvgTP6hu2/DlvDQghf7r9IRgVSFjfvv8GYozCSB/C/Xo5EOJlz8L/7g+U/oN/wv5h5hkenS/G/NW8nT6638b/SZMhWtSPyv29aaV68j/K/DFAKZsP78r+pRattymfzv0Y7THXR0/O/4zDtfNg/9L+AJo6E36v0vx0cL4zmF/W/uhHQk+2D9b9XB3Gb9O/1v/T8EaP7W/a/kfKyqgLI9r8u6FOyCTT3v8vd9LkQoPe/aNOVwRcM+L8FyTbJHnj4v6K+19Al5Pi/P7R42CxQ+b/cqRngM7z5v3mfuuc6KPq/FpVb70GU+r+zivz2SAD7v1CAnf5PbPu/7XU+BlfY+7+Ka98NXkT8vydhgBVlsPy/xFYhHWwc/b9hTMIkc4j9v/5BYyx69P2/mzcENIFg/r84LaU7iMz+v9UiRkOPOP+/chjnSpak/78IB0SpTggAwNaBFC1SPgDApPzksFV0AMBzd7U0WaoAwELyhbhc4ADAEG1WPGAWAcDe5ybAY0wBwK1i90NnggHAfN3Hx2q4AcBKWJhLbu4BwBjTaM9xJALA5005U3VaAsC2yAnXeJACwIRD2lp8xgLAUr6q3n/8AsAhOXtigzIDwPCzS+aGaAPAvi4caoqeA8CMqeztjdQDwFskvXGRCgTAKp+N9ZRABMD4GV55mHYEwMaULv2brATAlQ//gJ/iBMBkis8EoxgFwDIFoIimTgXAAIBwDKqEBcDP+kCQrboFwJ51ERSx8AXAbPDhl7QmBsA6a7IbuFwGwAnmgp+7kgbA2GBTI7/IBsCm2yOnwv4GwHRW9CrGNAfA3JPc7MdPB8A=","dtype":"float64","order":"little","shape":[400]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]}},"selected":{"id":"22247"},"selection_policy":{"id":"22246"}},"id":"22226","type":"ColumnDataSource"},{"attributes":{"source":{"id":"22232"}},"id":"22237","type":"CDSView"},{"attributes":{"axis":{"id":"22203"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"22206","type":"Grid"},{"attributes":{},"id":"22247","type":"Selection"},{"attributes":{},"id":"22200","type":"BasicTicker"},{"attributes":{"coordinates":null,"group":null},"id":"22238","type":"Title"},{"attributes":{"coordinates":null,"data_source":{"id":"22232"},"glyph":{"id":"22233"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"22235"},"nonselection_glyph":{"id":"22234"},"view":{"id":"22237"}},"id":"22236","type":"GlyphRenderer"},{"attributes":{},"id":"22248","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"#ff0000","line_alpha":0,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"22227","type":"Patch"},{"attributes":{"fill_alpha":0.1,"fill_color":"#ff0000","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"22228","type":"Patch"},{"attributes":{},"id":"22241","type":"BasicTickFormatter"},{"attributes":{"data":{"x":{"__ndarray__":"Q9HErslqB8ARnBp34RMGwEVEd1DDUATAau5a29fbA8B9bg6OHwEAwInvVbdyofu/zxnuuwS0+L8p/zDON9L3v0VY1/yDh/a/0rWZ1a8H9L+PMryWl+/yv+9ZKshglvK/JEIAf9008r/h+rhoxhvxv703/EF93/C/oC2fFJxs8L8w+ycGOojtv0d0ANKSVOu/7a+a7eND67/XYdQhltTqv9RdCOycDOq/kv7xaJZo6L9M7UBFrQbov1/fs1qTVea/Zo7NedDe5b+F64+qm7blv48DamySYeW/qSMb3Vod5b9jMwUuNBbkv8geuieYueO/98hUArWa478c+Jnl8RnhvykEYT9/FeG/QinpweLM4L+SWGJA8PPdvxVJcA70Pt2/mQ5DP3pM2b/pvggdaJDWvwv7XFJySNW/zTI5jRyO1L8Ln6q5uYHUv94f9lN2HdK/TnCT8G3o0b9bKD66xcbRv5yZuuf3vNG/IB0nJIWL0L9JLOnvXbDFv4jnhfml77+/olTsWLhHj78/PYwwwguSPwCcUf+m47w/9Sv3ZA77wD+xglipvIvBP+C9wRKTJ84/EkuIJihvzj+xKkZmwKzQPz82MqhVPdE/t4EOIJwx0j9T14psmbXTP3JE3j2uvdc/t+DUOUHD2D8ao3uLyJfbP6TqiLMld94/XvTvyyOy3j8VmATHSU/hP8o4EsqXUOI/9gor9rMe5T9+cvAhWdHmPz760kqtBuc/hq+3kGKa5z9I7gclAf/oP7czyseYX+k/6qLmtSah6j+A2/Rf987qP6pgtC+FDes/3lGzS1sP6z/aYB+69a7rPy7z/Taj9+s/weVjO8ck7D8sl6jqw5LuP8sa4QMliO8/de3S+sTI8T8AHS7B+8byP/BfIggxEfQ/0sfQbT8+9D8Wuwx0aoj0P/0Q+bJr1/Y/k1UoT4fE9z/dq6IvqY34P2j3JAr6u/g/O62A9ImW+z/k6M8vwdH8P6jK1RkXuf0/2Sn6W3cX/j+PJbtL2jX+P9Pxa5zYgv4/3I/Evlje/j+QIw8IFgn/P9iintsBKwBAQ6VKyPGRAkA=","dtype":"float64","order":"little","shape":[100]},"y":{"__ndarray__":"el12omwq4T/ex8oRPdjjP3Z3EV95Xuc/LCNKSVBI6D8GI+PjwP3vPzwIVaRGL/I/GPMIov2l8z9sgOcY5Bb0P95TlAE+vPQ/FyUzFSj89T+45qE0NIj2PwjT6pvPtPY/7t5/QJHl9j+QgqPLHHL3PyLkAV9BkPc/MGmw9bHJ9z80AXZ+8Z34P+7if0vbKvk/BVSZBAcv+T+K54p32kr5P4vo/cTYfPk/XIDDZdrl+T+txK+uVP75PygIUymbavo/ZpyM4UuI+j8fBVwVWZL6Pxx/5WSbp/o/Fje5SKm4+j8ns370cvr6P054EfaZEfs/ws1qv1IZ+z/5gZmGg7n7P/a+JzCguvs/sLWFT8fM+z/utPP3gUH8P932MX4hWPw/LZ4XuHDW/D8j6F788i39P59gtLXxVv0/ptlYbjxu/T8frMrIyG/9PwQ8gTVRvP0/9pHtQfLC/T/1OrhIJ8f9P8ysCANhyP0/XBx7W4/u/T87bQEh+qT+P8TQM9CCAP8/qxOnR7jg/z89jDDCCxIAQHBG/ZuOcwBAYLknc9iHAEAWxErlXYwAQO8Nlpg88QBAWUI0QXnzAECrYmQGzAoBQGQjg1rVEwFAG+gAwhkjAUB1rciWWTsBQEfk3ePaewFAC06dEzSMAUAyureIfLkBQKqOOFty5wFARv++PCLrAUADk+A46SkCQBlHQvkSSgJAX2HFftajAkBQDj4kK9oCQEhfWqnV4AJA8fUWUkzzAkDJ/aAk4B8DQHdG+RjzKwNAXdS81iRUA0Bwm/7r3lkDQBWM9qWwYQNAPGp2aethA0Ab7EO33nUDQGa+32b0fgNAuHxs55iEA0DmElV9WNIDQFkjfKAE8QNAXbu0PjFyBEBAh0vwvrEEQPyXCEJMBAVA9DF0248PBUDGLgOdGiIFQD9EvuzatQVAZRXK0yHxBUD3quhLaiMGQNo9iYL+LgZATysgfaLlBkA5+vNLcDQHQKpydcZFbgdAdor+1t2FB0Bkye6Sdo0HQHX8Gie2oAdA9yOxL5a3B0DkyAOCRcIHQGxRz+2AFQhAolIl5PhICUA=","dtype":"float64","order":"little","shape":[100]}},"selected":{"id":"22249"},"selection_policy":{"id":"22248"}},"id":"22232","type":"ColumnDataSource"},{"attributes":{"tools":[{"id":"22207"},{"id":"22208"},{"id":"22209"},{"id":"22210"},{"id":"22211"},{"id":"22212"},{"id":"22213"},{"id":"22214"}]},"id":"22217","type":"Toolbar"},{"attributes":{},"id":"22246","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"22226"},"glyph":{"id":"22227"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"22229"},"nonselection_glyph":{"id":"22228"},"view":{"id":"22231"}},"id":"22230","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"22215","type":"BoxAnnotation"},{"attributes":{"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"22233","type":"Line"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"22216","type":"PolyAnnotation"},{"attributes":{"coordinates":null,"formatter":{"id":"22244"},"group":null,"major_label_policy":{"id":"22245"},"ticker":{"id":"22200"}},"id":"22199","type":"LinearAxis"},{"attributes":{},"id":"22245","type":"AllLabels"},{"attributes":{},"id":"22197","type":"LinearScale"},{"attributes":{"fill_alpha":0.2,"fill_color":"#ff0000","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"22229","type":"Patch"},{"attributes":{"axis":{"id":"22199"},"coordinates":null,"group":null,"ticker":null},"id":"22202","type":"Grid"},{"attributes":{},"id":"22242","type":"AllLabels"},{"attributes":{"callback":null},"id":"22214","type":"HoverTool"},{"attributes":{"below":[{"id":"22199"}],"center":[{"id":"22202"},{"id":"22206"}],"height":500,"left":[{"id":"22203"}],"output_backend":"webgl","renderers":[{"id":"22230"},{"id":"22236"}],"title":{"id":"22238"},"toolbar":{"id":"22217"},"toolbar_location":"above","width":500,"x_range":{"id":"22191"},"x_scale":{"id":"22195"},"y_range":{"id":"22193"},"y_scale":{"id":"22197"}},"id":"22190","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"22193","type":"DataRange1d"},{"attributes":{"line_alpha":0.2,"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"22235","type":"Line"},{"attributes":{"overlay":{"id":"22215"}},"id":"22209","type":"BoxZoomTool"},{"attributes":{},"id":"22207","type":"ResetTool"},{"attributes":{},"id":"22213","type":"SaveTool"},{"attributes":{"line_alpha":0.1,"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"22234","type":"Line"},{"attributes":{},"id":"22210","type":"WheelZoomTool"}],"root_ids":["22190"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"0734d466-6c7e-4828-befb-7b81333879f8","root_ids":["22190"],"roots":{"22190":"13698a5e-284b-4b5a-80d8-5e4a01a1c5ec"}}];
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