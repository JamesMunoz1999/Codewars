// // Using function getSize, return the surface area and volume in the form of [area, volume] in an array.

function getSize(width, height, depth) {
    return [(width * height + width * depth + height * depth) * 2, width * height * depth]

}

console.log(getSize(40, 3, 3))

