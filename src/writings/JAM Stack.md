---
slug: "/writing/programming/frontend/JAM Stack"
date: "2021-02-01"
---

# JAM Stack 

### Resources
* https://jamstack.org/examples/
* https://www.youtube.com/watch?v=J-M11cC_NL4
* https://jamstack.wtf/
--------------------------------------------------------------------------------

### Notes
* Javascript, APIs, Markdown
* Basically just serving the same content over and over again from a CDN like an s3. Basically just statically generated sites on CDNs.
* to convert can use:
	* micro frontends: leaving small spaces on your website for only the parts that need to change based on API requests and then changing everything else.
	* edge side includes: a server inbetween the s3 and the customer that will inject some new content before it reaches the customer. 
* Very secure since there isn't a web server to hack. 
* Mostly only for websites that are pretty much just static but with maybe a few variable changes (like a price, etc). 
* Instead of dynamically rendering the webpages, you are literally pre rendering them, sticking them on a CDN and then occasionally injecting some new logic into them. 
* This is actually just what gastby does. It statically builds the site already. * Don't use JAM stack if your site requires tight coupling between client and server. I.e., A site built with a server side CMS, any monolithic server-run web app that relies on Ruby, Node, or another backend. 
* Typical workflow: Develop -> git push -> automatic build -> static assets -> atomic deploy -> pre-render and invalidate cache -> push to CDN 
