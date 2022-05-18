"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[5266],{4137:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=n(e,["components","mdxType","originalType","parentName"]),m=p(a),h=o,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||i;return a?r.createElement(d,s(s({ref:t},u),{},{components:a})):r.createElement(d,s({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,s=new Array(i);s[0]=m;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n.mdxType="string"==typeof e?e:o,s[1]=n;for(var p=2;p<i;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6898:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return n},metadata:function(){return p},toc:function(){return c}});var r=a(7462),o=a(3366),i=(a(7294),a(4137)),s=["components"],n={slug:"build-with-astro",title:"#08: Build A Blog - with Astro",authors:["glaucia"],tags:["swa","30days","usage-examples","astro"],draft:!1},l=void 0,p={permalink:"/30DaysOfSWA/blog/build-with-astro",editUrl:"https://github.com/staticwebdev/30DaysOfSWA/tree/main/www/blog/2021-05-09.md",source:"@site/blog/2021-05-09.md",title:"#08: Build A Blog - with Astro",description:"Welcome to Week 2, Day 1 of #30DaysOfSWA!!",date:"2021-05-09T00:00:00.000Z",formattedDate:"May 9, 2021",tags:[{label:"swa",permalink:"/30DaysOfSWA/blog/tags/swa"},{label:"30days",permalink:"/30DaysOfSWA/blog/tags/30-days"},{label:"usage-examples",permalink:"/30DaysOfSWA/blog/tags/usage-examples"},{label:"astro",permalink:"/30DaysOfSWA/blog/tags/astro"}],readingTime:2.92,truncated:!1,authors:[{name:"Glaucia Llemos",title:"Cloud Advocate @Microsoft",url:"https://github.com/glaucia86",imageURL:"https://github.com/glaucia86.png",key:"glaucia"}],frontMatter:{slug:"build-with-astro",title:"#08: Build A Blog - with Astro",authors:["glaucia"],tags:["swa","30days","usage-examples","astro"],draft:!1},prevItem:{title:"#09: Manage Inventory - with React",permalink:"/30DaysOfSWA/blog/build-with-react"},nextItem:{title:"#07: Deploying SWA",permalink:"/30DaysOfSWA/blog/deploying-swa"}},u={authorsImageUrls:[void 0]},c=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Static Site Generators",id:"static-site-generators",level:2},{value:"Hello, Astro!",id:"hello-astro",level:2},{value:"Astro + SWA",id:"astro--swa",level:2},{value:"Exercise",id:"exercise",level:2},{value:"Resources",id:"resources",level:2}],m={toc:c};function h(e){var t,n=e.components,l=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome to ",(0,i.kt)("inlineCode",{parentName:"p"},"Week 2, Day 1")," of ",(0,i.kt)("strong",{parentName:"p"},"#30DaysOfSWA"),"!! "),(0,i.kt)("p",null,"In Week 1 we covered core concepts for Azure Static Web Apps - from development to API-enablement, security, configuraton and deployment."),(0,i.kt)("p",null,"Today, we kick off Week 2 with a focus on seeing SWA in action - using popular web development frameworks and static site generators to build and deploy different kinds of applications. We kick things off with a look at ",(0,i.kt)("a",{parentName:"p",href:"https://astro.build"},"Astro"),' - a modern static site generator with a BYOF ("Bring your own framework") approach.'),(0,i.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What is a static site generator?"),(0,i.kt)("li",{parentName:"ul"},"What is Astro?"),(0,i.kt)("li",{parentName:"ul"},"Build & Deploy a Personal Blog with Astro"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Exercise:")," Try the tutorial to deploy ",(0,i.kt)("strong",{parentName:"li"},"your")," personal blog!")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Build a Blog with Astro + SWA",src:a(2950).Z,width:"1000",height:"420"})),(0,i.kt)("h2",{id:"static-site-generators"},"Static Site Generators"),(0,i.kt)("p",null,'The term "static site generators" (SSG) refers to tools that automatically build static webpages for you, populating a chosen template with your custom content or data. The code generation is transparent to you, making it possible for even non-developers to setup custom static websites quickly. '),(0,i.kt)("p",null,"Static site generation is a growing trend for fast, flexible website creation. But it requires an external service to handle hosting and build/deploy workflows. ",(0,i.kt)("strong",{parentName:"p"},"This is where Azure Static Web Apps comes in!")," Check out the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/publish-gatsby"},"SWA documentation")," for tutorials featuring popular SSGs like Hugo, Jekyll and Gatsby. We'll explore some other examples later this week."),(0,i.kt)("h2",{id:"hello-astro"},"Hello, Astro!"),(0,i.kt)("p",null,"Today's post will however focus on ",(0,i.kt)("a",{parentName:"p",href:"https://astro.build/blog/introducing-astro"},"Astro"),", one of the ",(0,i.kt)("a",{parentName:"p",href:"https://risingstars.js.org/2021/en#section-ssg"},"rising stars of JavaScript")," in the ",(0,i.kt)("em",{parentName:"p"},"Static Sites")," category. Astro is a static site builder that works ",(0,i.kt)("em",{parentName:"p"},"like an SSG")," but with some ",(0,i.kt)("a",{parentName:"p",href:"https://astro.build/blog/introducing-astro"},"novel features")," that set it apart. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bring your own framework (React, Vue, Svelte, web components)"),(0,i.kt)("li",{parentName:"ul"},"Compose your website using that framework's UI components"),(0,i.kt)("li",{parentName:"ul"},"Astro now renders a fully-static (all HTML, no JavaScript) website")),(0,i.kt)("p",null,"Astro emphasizes ",(0,i.kt)("strong",{parentName:"p"},"fast performance")," with ",(0,i.kt)("strong",{parentName:"p"},"less JavaScript")," - and takes a ",(0,i.kt)("a",{parentName:"p",href:"https://www.patterns.dev/posts/progressive-hydration/"},"partial hydration")," approach that allows it to load the minimal required amount of JavaScript, if and when absolutely necessary. Here's a quick overview of Astro."),(0,i.kt)("iframe",((t={width:"560",height:"315",frameborder:"0",allowfullscreen:!0,src:"https://www.youtube.com/embed/dsTXcSeAZq8",title:"YouTube video player"}).frameborder="0",t.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",t)),(0,i.kt)("h2",{id:"astro--swa"},"Astro + SWA"),(0,i.kt)("p",null,"In ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://dev.to/azure/building-applications-with-astro-build-azure-static-web-apps-cli-a20"},"today's tutorial")),", we walk through the steps required to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create an astro-powered blog (using ",(0,i.kt)("a",{parentName:"li",href:"tttps://github.com/glaucia86/astro-swa-demo"},"this template"),")"),(0,i.kt)("li",{parentName:"ul"},"test it locally using the Azure Static Web Apps CLI (",(0,i.kt)("inlineCode",{parentName:"li"},"swa"),")"),(0,i.kt)("li",{parentName:"ul"},"deploy it using the ",(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestaticwebapps"},"Visual Studio Code Extenstion for SWA")," ")),(0,i.kt)("p",null,"The end result will look like this.\n",(0,i.kt)("img",{alt:"Personal Blog with Astro",src:a(242).Z,width:"880",height:"527"})),(0,i.kt)("p",null,"Here are the key links to know:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Visit ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://dev.to/azure/building-applications-with-astro-build-azure-static-web-apps-cli-a20"},"this page"))," for the step-by-step tutorial."),(0,i.kt)("li",{parentName:"ul"},"Check ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"tttps://github.com/glaucia86/astro-swa-demo"},"this repository"))," for the source code (demo app template)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://yellow-grass-008f2c710.azurestaticapps.net/"},"See this site"))," for the deployed version of the app.")),(0,i.kt)("p",null,"Then check back tomorrow for a new usage example and tutorial - this time, with a focus on React - as we continue to explore Azure Static Web Apps in action!"),(0,i.kt)("h2",{id:"exercise"},"Exercise"),(0,i.kt)("p",null,"Here are a couple of options to try, to get more hands-on experience:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clone the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/glaucia86/astro-swa-demo.git"},"template project")," and follow the ",(0,i.kt)("a",{parentName:"li",href:"https://dev.to/azure/building-applications-with-astro-build-azure-static-web-apps-cli-a20"},"tutorial")," to build and deploy ",(0,i.kt)("strong",{parentName:"li"},"your")," personal blog."),(0,i.kt)("li",{parentName:"ul"},"Visit the ",(0,i.kt)("a",{parentName:"li",href:"https://astro.build/themes/"},"Astro Themes")," page and try using a different starter project, then deploying it to Azure Static Web Apps.")),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("p",null,"Check out these other tutorials using more traditional static site generators:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Publish a ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/publish-gatsby"},"Gatsby site")," to Azure Static Web Apps"),(0,i.kt)("li",{parentName:"ul"},"Publish a ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/publish-hugo"},"Hugo site")," to Azure Static Web Apps"),(0,i.kt)("li",{parentName:"ul"},"Publish a ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/publish-jekyll"},"Jekyll site")," to Azure Static Web Apps"),(0,i.kt)("li",{parentName:"ul"},"Publish a ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/publish-vuepress"},"VuePress site")," to Azure Static Web Apps")))}h.isMDXComponent=!0},242:function(e,t,a){t.Z=a.p+"assets/images/08-astro-c5c53e6fc34418cb8f77b158c61b8488.jpeg"},2950:function(e,t,a){t.Z=a.p+"assets/images/08-banner-d7850c9ddfc28d46cb657d7cecd62a98.png"}}]);