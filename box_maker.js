function drawRectangle(width, height, x, y){
    addLine(x, y, x, y + height);
    addLine(x, y, x + width, y);
    addLine(x + width, y, x + width, y + height);
    addLine(x, y + height, x + width, y + height);
}

function makeBox(width, height, depth, thickness) {
    
    var bottomOriginX = 0;
    var bottomOriginY = Math.floor(height + thickness) + 1;

    var sideOriginX = Math.floor(width + thickness) + 1;
    var sideOriginY = 0;

    // draw face
    drawRectangle(width, height, 0, 0);

    // draw bottom
    drawRectangle(width, depth, bottomOriginX, bottomOriginY);

    // draw side
    drawRectangle(depth, height, sideOriginX, sideOriginY);


}

makeBox(5, 2, 3, .75);