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

#### 4. Editor 页面增加 meta 设置，以便在插入图片时自动缩放视图
```HTML
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
```


#### 5. 增加 replace 方法
```
插入图片、视频、音频、其他类型的附件时，可以先插入本地路径，等上传完毕之后，再用上传之后得到的网络路径来替换掉本地路径
```

-------
### 引用和感谢：

![wasabeef/richeditor-android](https://github.com/wasabeef/richeditor-android)

![domchristie/to-markdown](https://github.com/domchristie/to-markdown)
