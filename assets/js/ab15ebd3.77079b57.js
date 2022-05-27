"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[8084],{4137:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var o=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,i=function(e,t){if(null==e)return{};var a,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=i,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||r;return a?o.createElement(m,n(n({ref:t},p),{},{components:a})):o.createElement(m,n({ref:t},p))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,n=new Array(r);n[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,n[1]=s;for(var c=2;c<r;c++)n[c]=a[c];return o.createElement.apply(null,n)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6473:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return h}});var o=a(7462),i=a(3366),r=(a(7294),a(4137)),n=["components"],s={slug:"practices-case-study",title:"#25: KlipTok & SWA: Case Study",authors:["jeff"],tags:["swa","30days","best-practices"],draft:!1},l=void 0,c={permalink:"/blog/practices-case-study",editUrl:"https://github.com/staticwebdev/30DaysOfSWA/tree/main/www/blog/2022-05-26.md",source:"@site/blog/2022-05-26.md",title:"#25: KlipTok & SWA: Case Study",description:"Welcome to Week 4, Day 4 of #30DaysOfSWA!!",date:"2022-05-26T00:00:00.000Z",formattedDate:"May 26, 2022",tags:[{label:"swa",permalink:"/blog/tags/swa"},{label:"30days",permalink:"/blog/tags/30-days"},{label:"best-practices",permalink:"/blog/tags/best-practices"}],readingTime:6.64,truncated:!1,authors:[{name:"Jeff Fritz",title:"Program Manager @Microsoft",url:"https://github.com/csharpfritz",imageURL:"https://github.com/csharpfritz.png",key:"jeff"}],frontMatter:{slug:"practices-case-study",title:"#25: KlipTok & SWA: Case Study",authors:["jeff"],tags:["swa","30days","best-practices"],draft:!1},prevItem:{title:"#26: Azure Functions & SWA",permalink:"/blog/practices-byo-functions"},nextItem:{title:"#24: Cognitive Services & SWA",permalink:"/blog/practices-cognitive-services"}},p={authorsImageUrls:[void 0]},h=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"KlipTok Makes Twitch Videos Searchable",id:"kliptok-makes-twitch-videos-searchable",level:2},{value:"How does KlipTok Work?",id:"how-does-kliptok-work",level:2},{value:"KlipTok Chooses Azure Static Apps",id:"kliptok-chooses-azure-static-apps",level:2},{value:"The KlipTok Architecture",id:"the-kliptok-architecture",level:2},{value:"Why Azure Static Web Apps?",id:"why-azure-static-web-apps",level:2},{value:"SWA &amp; Blazor: Made for each other",id:"swa--blazor-made-for-each-other",level:2},{value:"Summary",id:"summary",level:2},{value:"Exercise",id:"exercise",level:2}],u={toc:h};function d(e){var t=e.components,s=(0,i.Z)(e,n);return(0,r.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:url",content:"https://www.azurestaticwebapps.dev/blog/practices-case-study"}),(0,r.kt)("meta",{name:"twitter:title",content:"#25: KlipTok.com: A SWA Case Study"}),(0,r.kt)("meta",{name:"twitter:description",content:"Join @csharpfritz on #30DaysOfSWA and learn how he built Kliptok.com with @AzureStaticApps to make Twitch clips searchable!"}),(0,r.kt)("meta",{name:"twitter:image",content:"https://www.azurestaticwebapps.dev/assets/images/25-banner.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:creator",content:"@nitya"}),(0,r.kt)("meta",{name:"twitter:site",content:"@AzureStaticApps"}),(0,r.kt)("link",{rel:"canonical",href:"https://www.azurestaticwebapps.dev/blog/practices-case-study"})),(0,r.kt)("p",null,"Welcome to ",(0,r.kt)("inlineCode",{parentName:"p"},"Week 4, Day 4")," of ",(0,r.kt)("strong",{parentName:"p"},"#30DaysOfSWA"),"!! "),(0,r.kt)("p",null,"Week 4 focuses on Best Practices for Azure Static Web Apps. In the last two posts we explored Azure Services integrations that enhance and extend the capabilities of your deployed static website. Today, we take things in a different direction with our first ",(0,r.kt)("strong",{parentName:"p"},"Case Study")," - featuring  ",(0,r.kt)("a",{parentName:"p",href:"https://kliptok.com"},"KlipTok"),", a ",(0,r.kt)("a",{parentName:"p",href:"https://twitch.tv"},"Twitch")," clip search and indexing service built by Jeff Fritz, and hosted on Azure Static Web Apps!"),(0,r.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What is KlipTok?"),(0,r.kt)("li",{parentName:"ul"},"Why did KlipTok choose Azure Static Apps?"),(0,r.kt)("li",{parentName:"ul"},"How do Azure Static Apps and Blazor work together?"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Exercise"),": Check out the ",(0,r.kt)("a",{parentName:"li",href:"https://kliptok.com"},"KlipTok")," website and see it in action.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(9442).Z,width:"1000",height:"420"})),(0,r.kt)("h2",{id:"kliptok-makes-twitch-videos-searchable"},"KlipTok Makes Twitch Videos Searchable"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kliptok.com"},"KlipTok")," is a website that I started building while streaming live on Twitch in November 2019.  At the time, I wanted to build a website that would allow folks to discover Twitch clips from their favorite creators in the same way that they navigate and interact with TikTok. "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://twitch.tv"},"Twitch")," is a live-streaming service that many people use to watch folks play video games.  When something interesting happens on Twitch, viewers can isolate a clip (up to 60 seconds long) from the stream and share it with their friends.  These clips are often fun and interesting, but typically they are not discoverable.  This is ",(0,r.kt)("strong",{parentName:"p"},"KlipTok's goal - index and make those clips more available to everyone"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of the KlipTok Website",src:a(1397).Z,width:"1143",height:"783"})),(0,r.kt)("h2",{id:"how-does-kliptok-work"},"How does KlipTok Work?"),(0,r.kt)("p",null,"Behind the scenes, KlipTok monitors Twitch for new clips from streamers that are signed up with the site and indexes them.  The clips are then transcribed and searchable on the site.  Visitors can view, like, and comment on clips.  Additionally, anyone can create playlists of clips to share with their friends."),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/6uMCAHEM8Es",title:"YouTube video player",frameborder:"0",allowfullscreen:!0}),(0,r.kt)("p",null,"You can read the full story behind my decision process ",(0,r.kt)("a",{parentName:"p",href:"https://jeffreyfritz.com/2021/04/introducing-kliptok/"},"on my blog")," or watch me build a subset of its features on a livestream in Nov 2020, in the video above."),(0,r.kt)("p",null,"After the first 18 months of running KlipTok, the ",(0,r.kt)("strong",{parentName:"p"},"application currently manages almost 12 million clips, totalling nearly 60 GB of data in the index"),".  You can view the live dashboard at ",(0,r.kt)("a",{parentName:"p",href:"https://kliptok.com/status"},"kliptok.com/status")," to see the current status of the application."),(0,r.kt)("p",null," ",(0,r.kt)("img",{alt:"Screenshot of the KlipTok dashboard showing almost 12 million clips",src:a(6886).Z,width:"690",height:"231"})),(0,r.kt)("h2",{id:"kliptok-chooses-azure-static-apps"},"KlipTok Chooses Azure Static Apps"),(0,r.kt)("p",null," I chose ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/overview"},"Azure Static Apps")," to build and deploy the KlipTok application, and to help demonstrate ",(0,r.kt)("a",{parentName:"p",href:"https://blazor.net"},"Blazor")," running at scale in a large application.  This allows the application to ",(0,r.kt)("strong",{parentName:"p"},"scale the HTTP services to deliver content")," into the browser while delivering a high-performance experience with the Blazor application running in the browser on top of WebAssembly. "),(0,r.kt)("p",null," KlipTok also operates a second ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-overview"},"Azure Functions")," service called the 'BackOffice' that performs the ",(0,r.kt)("strong",{parentName:"p"},"synchronization of Twitch clips")," and other data aggregation tasks.  When new channels are added to KlipTok for monitoring, the BackOffice service is triggered with a message on ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview"},"Azure Service Bus")," to add the channel and begin processing their clips for the index.  "),(0,r.kt)("p",null," We also use this Backoffice functions app to create an ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/machine-learning/"},"ML.NET")," model that is used to ",(0,r.kt)("strong",{parentName:"p"},"recommend streamers to the user"),".  The model is trained on the collection of channels that KlipTok users follow and recommends channels to users based on other users who follow the same channels.\tThe model is updated every day with new data to help make more accurate recommendations to logged in KlipTok users. "),(0,r.kt)("p",null," By Twitch's terms of service, no videos are allowed to be shipped off of their platform for the first 24 hours after they are recorded.  This means that the clips should be referenced and embedded from Twitch using their own clip player, saving KlipTok from having to download and store the content. KlipTok can now deliver appropriate SEO-optimized content as well as render open-graph cards appropriate for Twitter, Facebook, LinkedIn and other sites."),(0,r.kt)("h2",{id:"the-kliptok-architecture"},"The KlipTok Architecture"),(0,r.kt)("p",null,"We do have one small problem when using Blazor Web Assembly and Azure Static Websites -- search engines and social media sites do not know ",(0,r.kt)("strong",{parentName:"p"},"how to crawl and present web assembly generated content"),".  "),(0,r.kt)("p",null,"To solve this, I added ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/frontdoor/front-door-overview"},"Azure Front Door")," to the site with an Azure App Service we ironically call the 'Static Site'. Azure Front Door is Microsoft\u2019s modern cloud Content Delivery Network (CDN) - allowing us to take advantage of a globally-distributed edge network to make our content delivery faster and more efficient."),(0,r.kt)("p",null,"With a few rules added to Azure Frontdoor (to detect bots), users can now be redirected to the static site and KlipTok can deliver appropriate SEO optimized content along with the ",(0,r.kt)("a",{parentName:"p",href:"https://ogp.me/"},"open-graph")," cards for Twitter, Facebook, LinkedIn and other social sharing sites."),(0,r.kt)("p",null," ",(0,r.kt)("img",{alt:"Simplified Diagram of the KlipTok System Architecture",src:a(969).Z,width:"632",height:"485"})),(0,r.kt)("h2",{id:"why-azure-static-web-apps"},"Why Azure Static Web Apps?"),(0,r.kt)("p",null,"When KlipTok was originally conceived, I wanted to ",(0,r.kt)("strong",{parentName:"p"},"spend very little money and allow the site to scale easily")," with new traffic as it grows.  As a C# and Blazor developer, this gave me the perfect intersection of my favorite technologies, keep costs low, and start to develop an application that demonstrates the capabilities of Blazor with a ",(0,r.kt)("strong",{parentName:"p"},"VERY")," large dataset."),(0,r.kt)("p",null,"Over time, the system components of KlipTok have matured and been swapped out.  Azure Table Storage gave way to MySQL and has been since replaced by RavenDb.  The Azure Functions were originally communicating using Azure Queues, and many of them are now using Azure Service Bus."),(0,r.kt)("p",null,"This maturing of the system components has allowed me to build and understand how other customers are using Azure and how we can improve the product to make developers of systems like KlipTok more productive. "),(0,r.kt)("p",null,"Using Azure Static Web Apps makes it easier for developers to integrate other Azure services - which then makes it possible for me to evolve KlipTok's architecture and capabilities quickly, to reflect changing needs."),(0,r.kt)("h2",{id:"swa--blazor-made-for-each-other"},"SWA & Blazor: Made for each other"),(0,r.kt)("p",null,"As a developer, I've been very happy with the combination of Blazor and Azure Static Web Apps.  The ability to build a Blazor application and know that I will always have APIs scaling to meet my customers needs is a huge plus."),(0,r.kt)("p",null,"Blazor Web Assembly uses an HttpClient to communicate with web servers;in the case of an Azure Static Web App it communicated with an HTTP triggered function.  This allows me to dramatically simplify the definition and interaction of front-end code and the back-end code."),(0,r.kt)("p",null,"For example: when a user clicks the ",(0,r.kt)("strong",{parentName:"p"},"Like")," button on a clip, the Blazor application can post a message to the hosted function to increment the like count.  This function then updates the like count in RavenDb, then updates the UI with the new like count.  The Blazor application needn't wait for the function to complete before updating the UI - it can just add or subtract one from the like count."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"KlipTok has been an absolute joy to build and the journey to deliver it has been a great success.  I'm very excited to continue working on KlipTok and continue to grow the application while discovering and demonstrating more cool Blazor and Azure features. Have questions or comments? Find me on Twitch "),(0,r.kt)("h2",{id:"exercise"},"Exercise"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Want to see this Azure Static Web App in action"),"? Click over to ",(0,r.kt)("a",{parentName:"li",href:"https://kliptok.com"},"KlipTok")," and login with your Twitch account! Then browse the site  to have KlipTok start showing you clips from your favorite creators. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Want to explore building your own Azure Static Web App with Blazor?")," Check out my ",(0,r.kt)("a",{parentName:"li",href:"/blog/build-with-blazor#exercise-remix-fritzs-hats"},"earlier blog post")," for a great exercise where you'll start with my open-source project - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/csharpfritz/Fritz.HatCollection"},"Fritz's Really Cool Hats")," - to customize, build and deploy a Blazor-powered app to Azure Static Web Apps.")))}d.isMDXComponent=!0},9442:function(e,t,a){t.Z=a.p+"assets/images/25-banner-cc7ac88ea8ec3a509d9e466aa991ce50.png"},969:function(e,t,a){t.Z=a.p+"assets/images/kliptok-architecture-simplified-36827cbae5acd8f594b589288919d468.png"},6886:function(e,t,a){t.Z=a.p+"assets/images/kliptok-dashboard-7e7559d51f8308b612ef84568c0269ca.png"},1397:function(e,t,a){t.Z=a.p+"assets/images/kliptok-site-b225ffed0aaa079117dbfd68b1ec4419.png"}}]);