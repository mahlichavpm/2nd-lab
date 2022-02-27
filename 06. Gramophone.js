function gramophone(band,album,song) {

    let timeSum = (band.length*album.length) * song.length /2;
    let rotations = Math.ceil(timeSum / 2.5);
     console.log(`The plate was rotated ${rotations} times.`);
}