this.resetVideoStreams = function(streams) {
    if (streams && !(streams instanceof Array)) {
        streams = [streams];
    }

    resetVideoStreams(streams);
};

function resetVideoStreams(streams) {
    videos = [];
    streams = streams || arrayOfMediaStreams;

    // via: @adrian-ber
    streams.forEach(function(stream) {
        if (!stream.getVideoTracks().length) {
            return;
        }

        var video = getVideo(stream);
        video.stream = stream;
        videos.push(video);
    });
}
