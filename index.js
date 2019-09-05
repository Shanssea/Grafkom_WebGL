(function() {

    var canvas = document.getElementById("glcanvas");
    var gl = glUtils.checkWebGL(canvas);
    
    //bersihkan layar jadi hitam
    gl.clearColor(0.0,0.0,1.0,1.0);

    //bersihkan canvas
    gl.clear(gl.COLOR_BUFFER_BIT);
})();
