---
templateKey: article-page
title: Handling Authentication In NextJS
slug: Handling-Authentication-In-NextJS
date: 2020-10-05T19:31:34.420Z
cover: /img/undraw_authentication_fsn5.png
tags:
  - NextJS
  - React
  - Authentication
meta_title: How to authenticate in NextJS
meta_description: This is a description of how to handle authentication in NextJS
---
I recently migrated a Content Management System from Create React App to NextJS in order to score some SEO points. 
One of the challenges I faced was seeing these errors at compile time. 

`window is undefined` or `document is undefined`

Window, and document are not available on the server. This is why you'll run into these types of errors if you are trying to access window properties or document. 
In my case, I had to persist my