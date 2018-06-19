/**
 * Copyright (C) 2017 Hsiang Leekwok
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

$(document).ready(function () {
    $("img").bind("error", function () {
        var obj = $(this);
        setTimeout(function () {
            var src = $(obj).attr("src");
            var index = src.indexOf("#");
            if (index >= 0) {
                src = src.substring(0, index);
            }
            src += "#" + (new Date().getTime());
            $(obj).attr("src", src);
        }, 5000);
    });
});