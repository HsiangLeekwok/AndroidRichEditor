# AndroidRichEditor

## Android 多媒体 WYSAWYG 编辑器

在 ![wasabeef/richeditor-android](https://github.com/wasabeef/richeditor-android) 项目的基础上增加了以下内容：

#### 1. 插入视频

```Java
mEditor.insertVideo(videoCover, videoUrl);
```
```JavaScript
RE.insertVideo = function (poster, src) {
    var html = '<br/> <video id="video" controls="controls" preload="none" poster="' + poster + '"> ' +
        '<source id="mp4" src="' + src + '" type="video/mp4"> ' +
        'Your user agent does not support the HTML5 Video element.' +
        '</video><br/> ';
    RE.insertHTML(html);
}
```

#### 2. 插入音频

```Java
mEditor.insertAudio(musicUrl);
```
```JavaScript
RE.insertAudio = function (src) {
    var html = '<br/> <audio id="audio" controls="controls" preload="none"> ' +
        '<source id="mp3" src="' + src + '" type="audio/mp3"> ' +
        'Your user agent does not support the HTML5 Audio element. ' +
        '</video><br/> ';
    RE.insertHTML(html);
}
```

#### 3. HTML to Markdown
```Java
mEditor.getMarkdown();
```
-------
### 引用和感谢：

![wasabeef/richeditor-android](https://github.com/wasabeef/richeditor-android)

![domchristie/to-markdown](https://github.com/domchristie/to-markdown)
