---
templateKey: article-page
title: Accessing LocalStorage In NextJS
slug: accessing-localStorage-in-nextJS
date: 2020-10-05T20:28:56.995Z
cover: /img/undraw_secure_login_pdn4.png
tags:
  - nextjs
  - localstorage
  - react
meta_title: How to access the window localstorage in nextjs
meta_description: This is a description of how to access the window localstorage in nextjs
---
I recently migrated a Content Management System from Create React App to NextJS in order to score some SEO points. 
One of the challenges I faced was seeing these errors at compile time. 

`window is undefined` or `document is undefined`

![No Access](/img/undraw_authentication_fsn5.png "Can't be accessed")

`Window`, and `document` are not available on the server. This is why you'll run into these types of errors if you are trying to access `window` properties or `document`. 
In my case, I was persisting my authentication token to localStorage on the previous application. \
\
To avoid running into these undefined errors at compile and build time, you can run a simple check.

```
if (typeof window !== "undefined") {

localStorage.setItem(key, value)

}
```

This basically tells your piece of code only to run when it's in the client environment where it can access `window`.

Keep hacking.

Originally published at [dev.to](https://dev.to/dendekky/handling-authentication-in-nextjs-5gd0)