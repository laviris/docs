(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{170:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("Want to build a Flarum extension? You've come to the right place! This document will take you through some essential concepts, after which you'll build your first Flarum extension from scratch.")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("In order to understand how to extend Flarum, first we need to understand a bit about how Flarum is built.")]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("Flarum is made up of three layers:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("First, there is the "),s("strong",[t._v("backend")]),t._v(". This is written in "),s("a",{attrs:{href:"https://laracasts.com/series/object-oriented-bootcamp-in-php",target:"_blank",rel:"noopener noreferrer"}},[t._v("object-oriented PHP"),s("OutboundLink")],1),t._v(", and makes use of a wide array of "),s("a",{attrs:{href:"https://laravel.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel"),s("OutboundLink")],1),t._v(" components and other packages via "),s("a",{attrs:{href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Composer"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("Second, the backend exposes a "),s("strong",[t._v("public API")]),t._v(" which allows frontend clients to interface with your forum's data. This is built according to the "),s("a",{attrs:{href:"https://jsonapi.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON:API specification"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("Finally, there is the default web interface which we call the "),s("strong",[t._v("frontend")]),t._v(". This is a "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Single-page_application",target:"_blank",rel:"noopener noreferrer"}},[t._v("single-page application"),s("OutboundLink")],1),t._v(" which consumes the API. It's built with a simple React-like framework called "),s("a",{attrs:{href:"https://mithril.js.org/archive/v0.2.5/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mithril.js"),s("OutboundLink")],1),t._v(".")])])]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("So... how do we extend these layers?")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("Every extender is different. However, they will always look somewhat similar to this:")]),t._v(" "),t._m(6),s("p",[t._v("You first create an instance of the extender, and then call methods on it for further configuration. All of these methods return the extender itself, so that you can achieve your entire configuration just by chaining method calls.")]),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("All of the extenders currently available to you from Flarum's core can be found in the "),s("a",{attrs:{href:"https://github.com/flarum/core/blob/master/src/Extend",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("Extend")]),t._v(" namespace"),s("OutboundLink")],1),t._v(". Extensions may also offer their own extenders.")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),s("p",[t._v("Now pay your forum a visit for a pleasant (albeit extremely obtrusive) greeting. 👋")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),s("p",[s("a",{attrs:{href:"https://getcomposer.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Composer"),s("OutboundLink")],1),t._v(" is a dependency manager for PHP. It allows applications to easily pull in external code libraries and makes it easy to keep them up-to-date so that security and bug fixes are propagated rapidly.")]),t._v(" "),s("p",[t._v('As it turns out, every Flarum extension is also a Composer package. That means someone\'s Flarum installation can "require" a certain extension and Composer will pull it in and keep it up-to-date. Nice!')]),t._v(" "),s("p",[t._v("During development, you can work on your extensions locally and set up a "),s("a",{attrs:{href:"https://getcomposer.org/doc/05-repositories.md#path",target:"_blank",rel:"noopener noreferrer"}},[t._v("Composer path repository"),s("OutboundLink")],1),t._v(" to install your local copy. Create a new "),s("code",[t._v("packages")]),t._v(" folder in the root of your Flarum installation, and then run this command to tell Composer that it can find packages in here:")]),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),s("ul",[t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),s("li",[t._m(25),t._v(" "),s("ul",[t._m(26),t._v(" "),s("li",[s("strong",[t._v("icon")]),t._v(" is an object which defines your extension's icon. The "),s("strong",[t._v("name")]),t._v(" property is a "),s("a",{attrs:{href:"https://fontawesome.com/icons",target:"_blank",rel:"noopener noreferrer"}},[t._v("Font Awesome icon class name"),s("OutboundLink")],1),t._v(". All other properties are used as the "),s("code",[t._v("style")]),t._v(" attribute for your extension's icon.")])])])]),t._v(" "),s("p",[t._v("See "),s("a",{attrs:{href:"https://getcomposer.org/doc/04-schema.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("the composer.json schema"),s("OutboundLink")],1),t._v(" documentation for information about other properties you can add to "),s("code",[t._v("composer.json")]),t._v(".")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Use the "),s("a",{attrs:{href:"https://github.com/ReFlar/extension-generator",target:"_blank",rel:"noopener noreferrer"}},[t._v("ReFlar extension generator"),s("OutboundLink")],1),t._v(" to automatically create your extension's scaffolding.")])]),t._v(" "),t._m(27),t._v(" "),s("p",[t._v("The final thing we need to do to get up and running is to install your extension. Navigate to the root directory of your Flarum install and run the following command:")]),t._v(" "),t._m(28),s("p",[t._v("Once that's done, go ahead and fire 'er up on your forum's Administration page, then navigate back to your forum.")]),t._v(" "),t._m(29),t._v(" "),s("p",[t._v("Woop! Hello to you too, extension!")]),t._v(" "),s("p",[t._v("We're making good progress. We've learned how to set up our extension and use extenders, which opens up a lot of doors. Read on to learn how to extend Flarum's frontend.")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"getting-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting Started")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"architecture"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#architecture","aria-hidden":"true"}},[this._v("#")]),this._v(" Architecture")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Be aware that Flarum uses some "),e("em",[this._v("modern")]),this._v(" languages and tools. If you've only ever built WordPress plugins before, you might feel a bit out of your depth! That's OK — this is a great time to learn cool new things and extend your skillset. However, we would advise that you become somewhat familiar with the technologies described below before proceeding.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Extensions will often need to interact with all three of these layers to make things happen. For example, if you wanted to build an extension that adds custom fields to user profiles, you would need to add the appropriate database structures in the "),e("strong",[this._v("backend")]),this._v(", expose that data in the "),e("strong",[this._v("public API")]),this._v(", and then display it and allow users to edit it on the "),e("strong",[this._v("frontend")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"extenders"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extenders","aria-hidden":"true"}},[this._v("#")]),this._v(" Extenders")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In order to extend Flarum, we will be using a concept called "),e("strong",[this._v("extenders")]),this._v(". Extenders are "),e("em",[this._v("declarative")]),this._v(" objects that describe in plain terms the goals you are trying to achieve (such as adding a new route to your forum, or executing some code when a new discussion was created).")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// Register a JavaScript and a CSS file to be delivered with the forum frontend")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Extend"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Frontend")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'forum'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("js")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token constant"}},[t._v("__DIR__")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'/forum-scripts.js'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("css")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token constant"}},[t._v("__DIR__")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'/forum-styles.css'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To keep things consistent, we use this concept of extenders in both the backend (in PHP land) and the frontend (in JavaScript land). "),e("em",[this._v("Everything")]),this._v(" you do in your extension should be done via extenders, because they are a "),e("strong",[this._v("guarantee")]),this._v(" we are giving to you that a future minor release of Flarum won't break your extension.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"hello-world"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hello-world","aria-hidden":"true"}},[this._v("#")]),this._v(" Hello World")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Want to see an extender in action? The "),e("code",[this._v("extend.php")]),this._v(" file in the root of your Flarum installation is the easiest way to register extenders just for your site. It should return an array of extender objects. Pop it open and add the following:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token php language-php"}},[s("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{attrs:{class:"token package"}},[t._v("Flarum"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Extend")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{attrs:{class:"token package"}},[t._v("Flarum"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Frontend"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Document")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Extend"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Frontend")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'forum'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("content")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Document "),s("span",{attrs:{class:"token variable"}},[t._v("$document")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{attrs:{class:"token variable"}},[t._v("$document")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token property"}},[t._v("head")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'<script>alert(\"Hello, world!\")<\/script>'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("For simple site-specific customizations – like adding a bit of custom CSS/JavaScript, or integrating wth your site's authentication system – the "),e("code",[this._v("extend.php")]),this._v(" file in your forum's root is great. But at some point, your customization might outgrow it. Or maybe you have wanted to build an extension to share with the community from the get-go. Time to build an extension!")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"extension-packaging"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extension-packaging","aria-hidden":"true"}},[this._v("#")]),this._v(" Extension Packaging")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("composer config repositories.0 path "),e("span",{attrs:{class:"token string"}},[this._v('"packages/*"')]),this._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Now let's start building our first extension. Make a new folder inside "),s("code",[t._v("packages")]),t._v(" for your extension called "),s("code",[t._v("hello-world")]),t._v(". We'll put two files in it: "),s("code",[t._v("extend.php")]),t._v(" and "),s("code",[t._v("composer.json")]),t._v(". These files serve as the heart and soul of the extension.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"extend-php"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extend-php","aria-hidden":"true"}},[this._v("#")]),this._v(" extend.php")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("extend.php")]),this._v(" file is just like the one in the root of your site. It will return an array of extender objects that tell Flarum what you want to do. For now, just move over the "),e("code",[this._v("Frontend")]),this._v(" extender that you had earlier.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"composer-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#composer-json","aria-hidden":"true"}},[this._v("#")]),this._v(" composer.json")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("We need to tell Composer a bit about our package, and we can do this by creating a "),e("code",[this._v("composer.json")]),this._v(" file:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"name"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"acme/flarum-hello-world"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"description"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Say hello to the world!"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"type"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"flarum-extension"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"require"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token property"}},[t._v('"flarum/core"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"0.1.0-beta.8"')]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"autoload"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token property"}},[t._v('"psr-4"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token property"}},[t._v('"Acme\\\\HelloWorld\\\\"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"src/"')]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"extra"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token property"}},[t._v('"flarum-extension"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{attrs:{class:"token property"}},[t._v('"title"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Hello World"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{attrs:{class:"token property"}},[t._v('"icon"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{attrs:{class:"token property"}},[t._v('"name"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"fas fa-smile"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{attrs:{class:"token property"}},[t._v('"backgroundColor"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"#238c59"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{attrs:{class:"token property"}},[t._v('"color"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"#fff"')]),t._v("\n            "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("p",[s("strong",[t._v("name")]),t._v(" is the name of the Composer package in the format "),s("code",[t._v("vendor/package")]),t._v(".")]),t._v(" "),s("ul",[s("li",[t._v("You should choose a vendor name that’s unique to you — your GitHub username, for example. For the purposes of this tutorial, we’ll assume you’re using "),s("code",[t._v("acme")]),t._v(" as your vendor name.")]),t._v(" "),s("li",[t._v("You should prefix the "),s("code",[t._v("package")]),t._v(" part with "),s("code",[t._v("flarum-")]),t._v(" to indicate that it’s a package specifically intended for use with Flarum.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[e("strong",[this._v("description")]),this._v(" is a short one-sentence description of what the extension does.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[e("strong",[this._v("type")]),this._v(" MUST be set to "),e("code",[this._v("flarum-extension")]),this._v('. This ensures that when someone "requires" your extension, it will be identified as such.')])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("p",[s("strong",[t._v("require")]),t._v(" contains a list of your extension's own dependencies.")]),t._v(" "),s("ul",[s("li",[t._v("You'll want to specify the version of Flarum that your extension is compatible with here.")]),t._v(" "),s("li",[t._v("Since Flarum is still in beta, do "),s("strong",[t._v("not")]),t._v(" specify a version range or prefix for the Flarum version, otherwise your extension may become installable on future incompatible beta versions.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[e("strong",[this._v("autoload")]),this._v(" tells Composer where to find your extension's classes. The namespace in here should reflect your extensions' vendor and package name in CamelCase.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("extra.flarum-extension")]),this._v(" contains some Flarum-specific information, like your extension's display name and how its icon should look.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("title")]),this._v(" is the display name of your extension.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"installing-your-extension"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-your-extension","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing Your Extension")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("composer require acme/flarum-hello-world *@dev\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("whizzing, whirring, metal clunking")])])}],!1,null,null,null);n.options.__file="start.md";e.default=n.exports}}]);