# AndroidRichEditor

## Android 多媒体 WYSAWYG 编辑器

效果预览(实际项目中的应用截图)

![](https://github.com/HsiangLeekwok/AndroidRichEditor/blob/master/art/Screenshot_2017-10-14-17-56-30.png)
![](https://github.com/HsiangLeekwok/AndroidRichEditor/blob/master/art/Screenshot_2017-10-14-17-56-41.png)
![](https://github.com/HsiangLeekwok/AndroidRichEditor/blob/master/art/QQ20171014204853.png)

### 更改

在 [wasabeef/richeditor-android](https://github.com/wasabeef/richeditor-android) 项目的基础上增加了以下内容：

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

#### 5. 增加 replaceText 方法

插入图片、视频、音频、其他类型的附件时，可以先插入本地路径占用编辑位，等上传完毕之后，再用上传之后得到的网络路径来替换掉本地路径
```Java
mEditor.replaceText(localUrl, remoteUrl);
```

------
### 使用

1. clone后自己编译得到aar或直接 [这里下载](https://github.com/HsiangLeekwok/AndroidRichEditor/blob/master/release/richeditor-release.aar?raw=true) 已编译好的aar
2. 将aar放入项目中的libs目录
3. 加入引用到项目中
```gradle
compile(name: 'richeditor-release', ext: 'aar')
```
4. 其他实际使用方式，参见 [wasabeef/richeditor-android](https://github.com/wasabeef/richeditor-android) 的说明即可
------
### 引用和感谢：

感谢这些先驱付出者！

[wasabeef/richeditor-android](https://github.com/wasabeef/richeditor-android)

[domchristie/to-markdown](https://github.com/domchristie/to-markdown)
