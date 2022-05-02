"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[362],{6222:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"introducing-swa","metadata":{"permalink":"/30DaysOfSWA/blog/introducing-swa","editUrl":"https://github.com/staticwebdev/30DaysOfSWA/tree/main/www/blog/2021-05-02.md","source":"@site/blog/2021-05-02.md","title":"#01: Introducing SWA","description":"Welcome to Week 1, Day 1 of #30DaysOfSWA!!","date":"2021-05-02T00:00:00.000Z","formattedDate":"May 2, 2021","tags":[{"label":"swa","permalink":"/30DaysOfSWA/blog/tags/swa"},{"label":"30days","permalink":"/30DaysOfSWA/blog/tags/30-days"},{"label":"core-concepts","permalink":"/30DaysOfSWA/blog/tags/core-concepts"}],"readingTime":3.685,"truncated":false,"authors":[{"name":"Simona Cotin","title":"Principal PM @Microsoft","url":"https://github.com/simonaco","imageURL":"https://github.com/simonaco.png","key":"simona"},{"name":"Nitya Narasimhan","title":"Senior Cloud Advocate @Microsoft","url":"https://twitter.com/nitya","imageURL":"https://github.com/nitya.png","key":"nitya"}],"frontMatter":{"slug":"introducing-swa","title":"#01: Introducing SWA","authors":["simona","nitya"],"tags":["swa","30days","core-concepts"],"draft":false},"nextItem":{"title":"Kickoff #30DaysOfSWA!","permalink":"/30DaysOfSWA/blog/kickoff"}},"content":"Welcome to `Week 1, Day 1` of **#30DaysOfSWA**!! \\n\\nThis week, we\'ll focus on the **Core Concepts** behind Azure Static Web Apps, starting with an introduction to SWA and continuing on to building, enhancing, and deploying, your SWA for users to experience. Let\'s get started today by _Introducing Static Web Apps_.\\n\\n\\n## What We\'ll Cover\\n * What is Azure Static Web Apps?\\n * How is it architected?\\n * Where can I use it?\\n * 10 Key Features to know\\n * **Exercise:** Explore SWA Examples!\\n * **Resource:** [Static Web Apps Overview](https://docs.microsoft.com/en-us/azure/static-web-apps/overview)\\n\\n![](../static/img/series/01-banner.png)\\n\\n## What is Azure SWA?\\n\\n[Azure Static Web Apps](https://docs.microsoft.com/en-us/azure/static-web-apps/overview) is a cloud-based service that **automatically** builds and deploys full-stack web apps to Azure **directly from your code repository**. The service works with popular code sources like GitHub, GitLab and BitBucket by default. Look for the _Deploying SWA_ post later this week where we walk through the details here.\\n\\nThe benefit to you as a developer is that it **simplifies your developer experience**. Just commit changes to your application source code into the repository and step back. The SWA service monitors the codebase for changes, automatically rebuilding and redeploying your app to the hosted endpoint. Look for a _Previewing SWA_ post later this week where we\'ll talk about built-in support for previewing apps in non-main branches, or in pull requests, that make it easier to manage apps with multiple contributors.\\n\\nPrefer a 5-minute video overview? We have you covered!\\n\\n<iframe width=\\"560\\" height=\\"315\\" src=\\"https://aka.ms/docs/player?show=azure-tips-and-tricks-static-web-apps&ep=what-is-azure-static-web-apps-and-what-can-it-be-used-for-1-of-16--azure-tips-and-tricks-static-web-\\"  frameborder=\\"0\\" ></iframe>\\n\\n## How is it Architected?\\n\\nStatic Web Apps can be built using popular front-end frameworks including React, Angular, Vue, Svelte, or Blazor. These apps typically consist of a collection of **static content assets** (HTML, JS, CSS and media files) coupled with a **dynamic API endpoint** to handle client interactions in real time.\\n\\nTraditional web application deployments use a _single web server_ to serve both the static assets and the API endpoint. This can make scaling these services sub-optimal in terms of global availability and runtime costs.\\n\\nWith Static Web Apps, we **separate static assets from API endpoints**, allowing each to be scaled using the technology best equipped to do this in a cost-effective manner.\\n * Static assets get served from geographically-distributed content servers worldwide, distributing the load and speeding up access to users nearby.\\n * API endpoints are hosted using a [serverless architecture](https://docs.microsoft.com/en-us/azure/azure-functions/functions-overview), spinning up compute resources (to execute functions) only as needed, in response to trigger events.\\n\\nThis architecture - with static content servers, serverless backends, and automated CI/CD workflows - simplifies your development workflow **allowing you to focus your attention on the application logic and user experience** components of your modern web application.\\n\\n\\n![](../static/img/series/01-swa-overview.png)\\n\\n## Where can I use it?\\n\\nThat\'s a great question!! You can use Static Web Apps to:\\n * Build modern web apps with front-end frameworks (like Angular, React, Vue etc.)\\n * Publish static web sites (using Gatsby, Hugo, Astro, Docusaurus, VuePress etc.)\\n * Deploy web apps with frameworks like Next.js and Nuxt.js.\\n\\nYou can [**configure your existing application**](https://docs.microsoft.com/en-us/azure/static-web-apps/front-end-frameworks) to use Azure Static Web Apps using an IDE like VS Code, or using Command-line tools (like Azure CLI and SWA CLI), or through the browser (using the Azure Portal). Look for two posts later this week that dive into this in detail:\\n * _Building SWA_ (tomorrow) on getting started with using SWA in your app.\\n * _Configuring SWA_ (later) on customizing app behaviors and build process.\\n\\nBut wait - there\'s one more thing. \\n\\n**Keep an eye out for an announcement later in the series** where we\'ll be debuting a new [Community Showcase](/showcase) page - here\'s a sneak preview. You can filter it to see examples from popular front-end technologies, select \\"open source\\" to see the repository for inspiration - **and consider adding your own project** at the end of your journey!\\n\\n![](../static/img/swa-showcase.png)\\n\\n\\n## 10 Things To Know!\\n\\nWe\'ve talked about what SWA is, how it\'s architected, and where you can use it. But what are the key features that make it powerful? [**Read the Documentation**](https://docs.microsoft.com/en-us/azure/static-web-apps/overview#key-features) for the detailed list - or scan the visual guide below for a summary!\\n\\n![](../static/img/series/roadmap.png)\\n\\n\\n\\n## Exercise:\\n\\nThat was a lot to digest right?  It helps to see some of these ideas in action. So here\'s two things you can do before we dive into the quickstart tomorrow:\\n\\n * Visit the [Showcase Gallery](https://github.com/microsoft/static-web-apps-gallery-code-samples) repository to see some examples of SWA in Action.\\n * Follow the [#staticwebapps](https://dev.to/t/staticwebapps) tag to see community-posted articles on usage."},{"id":"kickoff","metadata":{"permalink":"/30DaysOfSWA/blog/kickoff","editUrl":"https://github.com/staticwebdev/30DaysOfSWA/tree/main/www/blog/2021-05-01.md","source":"@site/blog/2021-05-01.md","title":"Kickoff #30DaysOfSWA!","description":"Welcome to the first day of #30DaysOfSWA!!","date":"2021-05-01T00:00:00.000Z","formattedDate":"May 1, 2021","tags":[{"label":"swa","permalink":"/30DaysOfSWA/blog/tags/swa"},{"label":"30days","permalink":"/30DaysOfSWA/blog/tags/30-days"}],"readingTime":3.54,"truncated":false,"authors":[{"name":"Nitya Narasimhan","title":"Senior Cloud Advocate @Microsoft","url":"https://twitter.com/nitya","imageURL":"https://github.com/nitya.png","key":"nitya"},{"name":"Reshmi Sriram","title":"PM, Static Web Apps @Microsoft","url":"https://twitter.com/reshsriram","imageURL":"https://github.com/Reshmi-Sriram.png\\\\","key":"reshmi"},{"name":"Simona Cotin","title":"Principal PM @Microsoft","url":"https://github.com/simonaco","imageURL":"https://github.com/simonaco.png","key":"simona"},{"name":"Glaucia Llemos","title":"Cloud Advocate @Microsoft","url":"https://github.com/glaucia86","imageURL":"https://github.com/glaucia86.png","key":"glaucia"},{"name":"Anthony Chu","title":"Senior PM @Microsoft","url":"https://github.com/anthonychu","imageURL":"https://github.com/anthonychu.png","key":"anthony"},{"name":"Joseph Lin","title":"Software Engineer @Microsoft","url":"https://github.com/joslinmicrosoft","imageURL":"https://github.com/joslinmicrosoft.png","key":"joseph"},{"name":"Mitali Karmarkar","title":"Software Engineer @Microsoft","url":"https://twitter.com/KarmarkarMitali","imageURL":"https://pbs.twimg.com/profile_images/1292880690237718529/yFXe2D99_400x400.jpg","key":"mitali"},{"name":"Michail Shaposhnikov","title":"Software Engineer @Microsoft","url":"https://github.com/mishapos","imageURL":"https://github.com/mishapos.png","key":"michail"}],"frontMatter":{"slug":"kickoff","title":"Kickoff #30DaysOfSWA!","authors":["nitya","reshmi","simona","glaucia","anthony","joseph","mitali","michail"],"tags":["swa","30days"],"draft":false},"prevItem":{"title":"#01: Introducing SWA","permalink":"/30DaysOfSWA/blog/introducing-swa"},"nextItem":{"title":"It\'s the SWA-anniversary!!","permalink":"/30DaysOfSWA/blog/swanniversary"}},"content":"Welcome to the first day of **#30DaysOfSWA**!!\\n\\nThank you for joining us on this fun and functional tour of **Azure Static Web Apps**. Whether you\'re new to the technology, or an experienced user, we hope there\'s something that interests and motivates you to keep going.\\n\\n![](../static/img/series/banner-kickoff.png)\\n\\n## Hello #30DaysOfSWA\\n\\nSimply put, it\'s a month-long series of blog posts that provides you a curated and structured tour through the universe of  [Azure Static Web Apps](https://docs.microsoft.com/en-us/azure/static-web-apps/overview?WT.mc_id=30daysofswa-61155-cxall). \\n\\n * Each article will be 5 mins or less in reading time\\n * Each ends with an activity to help reinforce the learning\\n * Articles will follow a structured roadmap over 4 weeks\\n\\nWe\'ve organized the journey into four stages, each building on the previous one in a way that mimics the developer experience with any new technology:\\n * **Week 1:** Focus on Core Concepts, learning terminology and getting setup.\\n * **Week 2:** Focus on Usage Examples with quickstarts & front-end technologies.\\n * **Week 3:** Focus on Dev Tools to develop, debug, test, and deploy, the SWA!\\n * **Week 4:** Focus on Best Practices, from services to end-to-end experiences.\\n\\n## Week 1 Roadmap\\n\\nWe are kicking off week 1 with a focus on **Core Concepts** to get you familiar with the high-level architecture, fundamental components and basic terminology for Azure Static Web Apps. Want a sneak peek at the topics? Here\'s a visual guide to help you!\\n\\n![Visual sketchnote of roadmap](../static/img/series/week1-roadmap.png)\\n\\n**By the end of week 1 you should know**:\\n * What Azure Static Web Apps is, and its benefits\\n * How to get started building SWA or using it for your existing apps\\n * How to go serverless, adding API capability with Azure Functions\\n * How to configure SWA - from app behavior to build process\\n * How to secure SWA - from user authentication to role-based authorization\\n * How to preview SWA - on pull requests or test branches\\n * How to deploy SWA - using different code sources, or CI/CD options\\n\\nBy the end of the week you should be familiar with SWA terminology and developer workflows - and be ready to explore usage scenarios with various front-end frameworks or static site generators!\\n\\n## Take The Journey\\n\\nThey say it takes 30 days to make a habit. It\'s our hope that doing short bursts of reading and activity with Azure Static Web Apps on a daily basis, will lead to better learning and development habits in general.\\n\\nWe want to make it easy for you to participate - here are options to follow along:\\n * Bookmark [this site](https://aka.ms/30DaysofSWA) and visit daily\\n * Subscribe to the [RSS Feed](https://lively-tree-0c3a7d80f.1.azurestaticapps.net/blog/rss.xml) in your favorite Feed Reader\\n * Visit the [dev.to Series Page](https://dev.to/nitya/series/17901) and like, comment on, or bookmark, the posts.\\n\\nWant to really get the most from this? Try the exercises each day, and take a moment on a weekly basis, to write a blog post or capture your own notes on what your main takeaways were. As a fan of [visual storytelling](https://twitter.com/sketchthedocs) I know that writing things down helps improve your understanding and recall of the material!\\n\\n## Provide Us Feedback\\n\\n**We want to make this useful and beginner-friendly!** So if you have comments or questions that can help us improve this content, please drop us a note in our [Discussions](https://github.com/orgs/staticwebdev/discussions/categories/-30daysofswa) board!\\n\\n\\n## Meet The Authors\\n\\nArticles are written by a multi-disciplinary team of contributors from across Microsoft and the community - including members of the Static Web Apps product group and Microsoft Developer Relations. \\n\\n![Banner with people](../static/img/series/series-people.png)\\n\\nWe\'ll keep this page updated on a daily basis, to reflect the latest author whose post was published. We\'ll kick things off with the authors of this post.\\n * **Nitya Narasimhan**, Senior Cloud Advocate @Microsoft\\n * **Reshmi Sriram**, Static Web Apps PM @Microsoft\\n * _to be updated daily ..._\\n\\nEach post will identify the authors by name, and link to a relevant online profile. This series is a labor of love, so if you like a post - show that author some love by providing feedback or saying hello on their identified profile!\\n\\n---\\n\\n## Let\'s Get Started!\\n\\nI think that\'s all you need to know for now! Hope your\'re as excited as we are. Check back for the next post and ... **#LetsDoThis** !!\\n\\n![](../static/img/logo.svg)"},{"id":"swanniversary","metadata":{"permalink":"/30DaysOfSWA/blog/swanniversary","editUrl":"https://github.com/staticwebdev/30DaysOfSWA/tree/main/www/blog/2021-04-30.md","source":"@site/blog/2021-04-30.md","title":"It\'s the SWA-anniversary!!","description":"View Schedule & Speaker Lineup//aka.ms/swaanniversary","date":"2021-04-30T00:00:00.000Z","formattedDate":"April 30, 2021","tags":[{"label":"swa","permalink":"/30DaysOfSWA/blog/tags/swa"},{"label":"30days","permalink":"/30DaysOfSWA/blog/tags/30-days"},{"label":"event","permalink":"/30DaysOfSWA/blog/tags/event"}],"readingTime":2.37,"truncated":false,"authors":[{"name":"Reshmi Sriram","title":"PM, Static Web Apps @Microsoft","url":"https://twitter.com/reshsriram","imageURL":"https://github.com/Reshmi-Sriram.png\\\\","key":"reshmi"},{"name":"Nitya Narasimhan","title":"Senior Cloud Advocate @Microsoft","url":"https://twitter.com/nitya","imageURL":"https://github.com/nitya.png","key":"nitya"}],"frontMatter":{"slug":"swanniversary","title":"It\'s the SWA-anniversary!!","authors":["reshmi","nitya"],"tags":["swa","30days","event"],"draft":false},"prevItem":{"title":"Kickoff #30DaysOfSWA!","permalink":"/30DaysOfSWA/blog/kickoff"}},"content":"![](../static/img/swanniversary.png)\\n\\n#### View Schedule & Speaker Lineup: [https://aka.ms/swaanniversary](https://aka.ms/swaanniv[ersary)\\n\\n---\\n\\nOn May 12, 2021, the [Azure Static Web Apps](https://docs.microsoft.com/en-us/azure/static-web-apps/overview?WT.mc_id=30daysofswa-61155-cxall) service hit a significant milestone - [becoming generally available](https://azure.microsoft.com/en-us/updates/azure-static-web-apps-is-now-generally-available/?WT.mc_id=30daysofswa-61155-cxall) with support for many of the popular [front-end frameworks and static site generators](https://docs.microsoft.com/en-us/azure/static-web-apps/front-end-frameworks) used for modern web app development.\\n\\nOn May 12, 2022, Azure Static Web Apps will make the first-year anniversary of that milestone - making this the perfect time to look back on all the progress made, and look ahead to what\'s in store next.\\n\\n\\n## Celebrate with #SWAanniversary\\n\\nOn May 19, 2022, join us live on [Learn TV](https://docs.microsoft.com/en-us/learn/tv/?WT.mc_id=30daysofswa-61155-cxall) for a 2-hour celebration with some of our favorite speakers and guests from both Microsoft and the larger developer community. Can you tell we\'re excited for this birthday?\\n\\n<iframe width=\\"560\\" height=\\"315\\" src=\\"https://www.youtube.com/embed/OGlM5CgCwwc\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\\" allowfullscreen></iframe>\\n\\nCheck out [the Event page](https://docs.microsoft.com/en-us/events/learntv/swa-anniversary-may-2022/?WT.mc_id=30daysofswa-61155-cxall) to learn more about the speakers and topics on the agenda. Add the event to your calendar, and join us live - or bookmark this page and revisit it for links to relevant resources and video replays.\\n\\n\\n## Learn with #30DaysOfSWA\\n\\nBut there\'s more! _Are you new to Azure Static Web Apps?_ Do you want to get a beginner-friendly tour of the core concepts, usage examples, developer tools, and best practices involved in building and deploy modern web applications with this service?\\n\\n**You\'re in luck!**\\n\\nWatch this space for an update on a new content series that will help you jumpstart that learning journey! Throughout the month of May, we\'ll bring together a diverse group of technologists to share short articles with resources and insights on a curated tour of Static Web Apps - taking you from **code to scale**.\\n\\n![The #30DaysOfSWA logo](../static/img/logo-light.png)\\n\\n\\n## How Can You Participate?\\n\\nSome actions you can take today to get ready for a fun month of learning:\\n \\n  * Bookmark this Series page or [**Subscribe to the RSS feed**](https://lively-tree-0c3a7d80f.1.azurestaticapps.net/blog/rss.xml)\\n  * Follow the [**#staticwebapps tag on dev.to**](https://dev.to/t/staticwebapps) - and consider making a post there!\\n  * Introduce yourself on [**our Discussions Forum**](https://github.com/orgs/staticwebdev/discussions/categories/-30daysofswa) - tell us what you hope to learn!\\n\\n\\n## Self-Study Resources\\n\\nOur goal is to help make this a beginner-friendly learning journey into Azure Static Web Apps. We hope we inspire you to keep going beyond #30Days - and wanted to share resources to motivate you to keep going. Here are three links to bookmark:\\n\\n * The [**Resources**](/resources) page - will be updated with links related to each article in the series, all through May! Use this to explore detours and deep dives.\\n * The [**Microsoft Learn Path**](https://docs.microsoft.com/en-us/learn/paths/azure-static-web-apps/?WT.mc_id=30daysofswa-61155-cxall) - teaches you how to build your first Static Web Apps powered experience - with React, Angular, Vue and Blazor coding options.\\n * The [**#30DaysOfSWA Collection**](https://docs.microsoft.com/en-us/users/nityan/collections/7d2ws6zd1mxmp6?WT.mc_id=30daysofswa-61155-cxall) - a Microsoft-specific collection of resources (from documentation to videos and code samples) that I will continue to update."}]}')}}]);