---
title: Automating My Crate Digging with youtube-dl
date: 2023-11-20
lastUpdated:
description: How I automated my sampling workflow with a custom YouTube downloader script
---

Many producers already know this, but for those unaware, Youtube is an amazing
place to discover new songs to sample. Over the past few years I've tailored
my feed to frequently surface great sampling candidates. The one downside is
that actually capturing those samples from Youtube can be tedious. The main
options are:

1. Install a browser extension to record a clip of the video.
2. Manually record the audio from Youtube into a sampler or audio interface.
3. Use a Youtube to MP3 site to download the full audio.

I tended to use option 3 since it integrated easily into my workflow. However, I wondered - could this be automated? As a developer, I figured building a script to handle this would not be too complex.

It turns out there is already a utility called [youtube-dl](https://github.com/ytdl-org/youtube-dl) that downloads Youtube videos. I could have used it directly, but wanted to simplify the interface by wrapping it in a Node script. My goal was to easily download samples from specified playlists without worrying about command line options.

In an afternoon's work, I had a functioning script. It mostly meets my needs, but there are areas for improvement:

- Streamline installation requirements (Node, FFmpeg, etc)
- Run periodically to check for new videos
- Integrate with Dropbox for simplified file management

Since starting this project, I discovered [youtube-dl-gui](https://github.com/StefanLobbenmeier/youtube-dl-gui), an excellent cross-platform UI for youtube-dl. For my use case, its only missing feature is something similar to the `download-archive` option that the cli has, which ensures the utility only downloads videos that haven't already been downloaded. Still, for most people, I would recommend this app over questionable Youtube converter sites.

For other ideas to extend this project, see the [GitHub issues](https://github.com/omawhite/node-youtube-crate-digger/issues). Contributions are also welcome! Please let me know in the comments if you have experience with youtube-dl or similar tools, or if you've built any custom automation for your creative workflow.
