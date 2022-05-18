"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[1007],{4137:function(t,e,a){a.d(e,{Zo:function(){return h},kt:function(){return d}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),p=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},h=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,h=s(t,["components","mdxType","originalType","parentName"]),m=p(a),d=n,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return a?r.createElement(g,i(i({ref:e},h),{},{components:a})):r.createElement(g,i({ref:e},h))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7923:function(t,e,a){a.r(e),a.d(e,{assets:function(){return h},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=a(7462),n=a(3366),o=(a(7294),a(4137)),i=["components"],s={slug:"devtools-playwright",title:"#16: Test Automation with Playwright",authors:["nitya","debbie"],tags:["swa","30days","dev-tools","playwright"],draft:!1},l=void 0,p={permalink:"/blog/devtools-playwright",editUrl:"https://github.com/staticwebdev/30DaysOfSWA/tree/main/www/blog/2021-05-17.md",source:"@site/blog/2021-05-17.md",title:"#16: Test Automation with Playwright",description:"Welcome to Week 3, Day 2 of #30DaysOfSWA!!",date:"2021-05-17T00:00:00.000Z",formattedDate:"May 17, 2021",tags:[{label:"swa",permalink:"/blog/tags/swa"},{label:"30days",permalink:"/blog/tags/30-days"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"},{label:"playwright",permalink:"/blog/tags/playwright"}],readingTime:6.16,truncated:!1,authors:[{name:"Nitya Narasimhan",title:"Senior Cloud Advocate @Microsoft",url:"https://twitter.com/nitya",imageURL:"https://github.com/nitya.png",key:"nitya"},{name:"Debbie O'Brien",title:"Senior PM @Microsoft @Playwright",url:"https://github.com/debs-obrien",imageURL:"https://github.com/debs-obrien.png",key:"debbie"}],frontMatter:{slug:"devtools-playwright",title:"#16: Test Automation with Playwright",authors:["nitya","debbie"],tags:["swa","30days","dev-tools","playwright"],draft:!1},nextItem:{title:"#15: Develop with Azure Tools",permalink:"/blog/devtools-azure"}},h={authorsImageUrls:[void 0,void 0]},u=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Test Automation",id:"test-automation",level:2},{value:"Playwright Overview",id:"playwright-overview",level:2},{value:"Playwright Quickstart",id:"playwright-quickstart",level:2},{value:"Playwright Tooling",id:"playwright-tooling",level:2},{value:"What&#39;s Next",id:"whats-next",level:2},{value:"Exercise",id:"exercise",level:2}],m={toc:u};function d(t){var e=t.components,s=(0,n.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,s,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to ",(0,o.kt)("inlineCode",{parentName:"p"},"Week 3, Day 2")," of ",(0,o.kt)("strong",{parentName:"p"},"#30DaysOfSWA"),"!! "),(0,o.kt)("p",null,'Yesterday we kicked off "Developer Tools" week by talking about the end-to-end developer experience associated with building modern web applications. Today we focus on a key segment - ',(0,o.kt)("strong",{parentName:"p"},"testing"),". Let's look at what test automation means for modern web applications, and how ",(0,o.kt)("a",{parentName:"p",href:"https://www.playwright.dev"},"Playwright")," can help you automate end-to-end testing of your Azure Static Web App."),(0,o.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Test Automation for Modern Web Apps"),(0,o.kt)("li",{parentName:"ul"},"What is Playwright?"),(0,o.kt)("li",{parentName:"ul"},"Get Started With Playwright"),(0,o.kt)("li",{parentName:"ul"},"Explore Playwright Tools"),(0,o.kt)("li",{parentName:"ul"},"Use Playwright with SWA"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Exercise"),": Try the Tutorial with ",(0,o.kt)("strong",{parentName:"li"},"your")," deployed app.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(9407).Z,width:"1000",height:"420"})),(0,o.kt)("h2",{id:"test-automation"},"Test Automation"),(0,o.kt)("p",null,"Modern mobile web applications have to work correctly and consistently across all modern browsers (like Chromium, Firefox or WebKit) and the device platforms they run on (with varying screen sizes, orientations). Testing your application UI/UX ",(0,o.kt)("strong",{parentName:"p"},"manually")," becomes difficult when we think about the granularity of tests across these combinations. Testing manually becomes impossible when we factor in the frequency at which testing needs to be done to validate these on every code commit or pull request. This is where test automation shines!"),(0,o.kt)("p",null,"Test Automation is about executing tests ",(0,o.kt)("strong",{parentName:"p"},"automatically")," to validate software specs, then using the reported insights to improve software quality iteratively. For web apps, this requires tools that can ",(0,o.kt)("em",{parentName:"p"},"automate test actions in the browser")," (web automation) and support this consistently ",(0,o.kt)("em",{parentName:"p"},"across browsers"),". ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.playwright.dev"},"This is where Playwright shines!"))),(0,o.kt)("h2",{id:"playwright-overview"},"Playwright Overview"),(0,o.kt)("p",null,"Playwright is an open-source framework for ",(0,o.kt)("strong",{parentName:"p"},"reliable")," end-to-end testing of modern web apps. It features a built-in ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/1.21/intro"},"Playwright Test Runner")," for automating test execution, and supports a ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/1.21/library"},"Playwright Library")," to simplify integration into third-party solutions."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Visual Guide to Playwright",src:a(6047).Z,width:"3840",height:"2160"})),(0,o.kt)("p",null,"This visual guide shows the key features of the framework (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SketchTheDocs/cloud-skills/blob/main/gallery/Playwright-03-Overview.png"},"downloadable hi-res version here"),") with these useful features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Unified API")," - you write tests once, they run on all browsers and devices."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Mobile Web Testing")," - rich set of device profiles, usable with native emulators."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Multi-Language Support")," -  write tests in Java, JS/TS, Python or C#."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Reliable Testing")," - no flaky tests thanks to auto-waiting and web-first assertions"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Powerful Tooling")," - get help authoring, debugging, profiling, and reporting, tests."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Full Isolation")," - browser contexts (in just ms), options to parallelize tests")),(0,o.kt)("p",null,"Check out the Playwright ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/1.21/intro"},"documentation")," and ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/1.21/api/class-playwright"},"API")," for more details. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What kinds of things can we test with Playwright?")," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Test if UI component behaviors work as expected (events)"),(0,o.kt)("li",{parentName:"ul"},"Test if UI workflows are correct (navigation, inputs)"),(0,o.kt)("li",{parentName:"ul"},"Test UX behaviors in different contexts (with fixtures)"),(0,o.kt)("li",{parentName:"ul"},"Modify network traffic (auth, proxy etc.) for testing"),(0,o.kt)("li",{parentName:"ul"},"Validate behaviors under network conditions (modified)"),(0,o.kt)("li",{parentName:"ul"},"Validate behaviors for device contexts (emulated profiles)"),(0,o.kt)("li",{parentName:"ul"},"Automate capture of evidence (videos, screenshots) in tests")),(0,o.kt)("p",null,"Explore the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://playwright.dev/docs/1.21/library"},"Guides"))," and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/MarcusFelling/Demo.Playwright#run-playwright-example-tests"},"Demo.Playwright"))," for usage examples. And check out ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://dev.to/debs_obrien/series/17445"},"Debbie's playwright-testing"))," series for more examples of Playwright in action."),(0,o.kt)("h2",{id:"playwright-quickstart"},"Playwright Quickstart"),(0,o.kt)("p",null,"It's time to get some hands-on experience with Playwright. Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/1.21/intro"},"Getting Started")," guide on their site for reference. "),(0,o.kt)("p",null,"However, we'd like to walkthrough it with a real-world example in mind and figure out how to go from the boilerplate setup to the start of a basic script and configuration that sets us up to do more for testing our Azure Static App."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"#30DaysOfSWA Website Example: Step-by-Step Tutorial"),": "),(0,o.kt)("p",null,"Check out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fearlessly-dev/30daysofSWA-testing"},"this repository")," that I setup today, to use the quickstart guide as a basis for setting up end-to-end testing for the ",(0,o.kt)("a",{parentName:"p",href:"https://aka.ms/30DaysOfSWA"},"#30DaysOfSWA")," website! The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fearlessly-dev/30daysofSWA-testing"},"README")," documents the following steps in detail:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fearlessly-dev/30daysofSWA-testing#2-where-should-my-tests-be"},"Setup Testing Repo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fearlessly-dev/30daysofSWA-testing#3-how-do-i-install-playwright"},"Install Playwright")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fearlessly-dev/30daysofSWA-testing#4-what-did-the-installation-do"},"Explore Boilerplate (setup)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fearlessly-dev/30daysofSWA-testing#5-what-can-i-do-with-this"},"Run Default Test")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fearlessly-dev/30daysofSWA-testing#6-what-does-the-report-show"},"View Generated Test Report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fearlessly-dev/30daysofSWA-testing#7-what-about-those-github-actions"},"Automate Tests with GitHub Actions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fearlessly-dev/30daysofSWA-testing#8-viewing-actions-generated-reports"},"View Actions-Generated Report Assets")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fearlessly-dev/30daysofSWA-testing/blob/main/README.md#9-lets-customize-the-script"},"Customize Default Script/Config for ",(0,o.kt)("em",{parentName:"a"},"My")," App")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fearlessly-dev/30daysofSWA-testing/blob/main/README.md#the-joys-of-trace-logs"},"The Joy Of Trace Logs!!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"You Did It!"))),(0,o.kt)("p",null,"By the end of this tutorial you should have:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A starter test script customized for ",(0,o.kt)("strong",{parentName:"li"},"your")," application"),(0,o.kt)("li",{parentName:"ul"},"A test configuration file ",(0,o.kt)("strong",{parentName:"li"},"with tracing on")," to capture detailed profiling data"),(0,o.kt)("li",{parentName:"ul"},"A GitHub Actions workflow that ",(0,o.kt)("strong",{parentName:"li"},"automates test runs")," with each codebase change.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/fearlessly-dev/30daysofSWA-testing/raw/main/my-report-detail.png",alt:"Test Run Report"})),(0,o.kt)("p",null,"At this point, you are now ready to build on this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"add more tests to your ",(0,o.kt)("inlineCode",{parentName:"li"},"example.spec.js")," file => ",(0,o.kt)("strong",{parentName:"li"},"see: ",(0,o.kt)("a",{parentName:"strong",href:"https://playwright.dev/docs/test-annotations"},"Playwright Test API"))),(0,o.kt)("li",{parentName:"ul"},"configure your test run in ",(0,o.kt)("inlineCode",{parentName:"li"},"playwright.config.js"),". => ",(0,o.kt)("strong",{parentName:"li"},"see:",(0,o.kt)("a",{parentName:"strong",href:"https://playwright.dev/docs/test-configuration"},"Configuration Object")))),(0,o.kt)("h2",{id:"playwright-tooling"},"Playwright Tooling"),(0,o.kt)("p",null,"In the tutorial above, we mentioned some Playwright tools (CLI, TraceViewer, HTML Reporter, Codegen) in passing. Playwright has a really powerful set of tools that can streamline your end-to-end testing experience from ",(0,o.kt)("em",{parentName:"p"},"authoring")," to ",(0,o.kt)("em",{parentName:"p"},"reporting"),". "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Start by familiarizing yourself with the ",(0,o.kt)("a",{parentName:"strong",href:"https://playwright.dev/docs/cli"},"Playwright CLI")),". "),(0,o.kt)("p",null,"It's the main launching pad for all other command-line utilities. Using the CLI you can navigate to pages (",(0,o.kt)("em",{parentName:"p"},'"open"'),"), install browser dependencies (",(0,o.kt)("em",{parentName:"p"},'"install"'),"), take screenshots (",(0,o.kt)("em",{parentName:"p"},' "screenshot"'),"), launch the test runner (",(0,o.kt)("em",{parentName:"p"},'"test"'),"), author tests (",(0,o.kt)("em",{parentName:"p"},'"codegen"'),"), view traces (",(0,o.kt)("em",{parentName:"p"},'"show-trace"'),") and more. "),(0,o.kt)("p",null,"Launch the CLI as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npx playwright <command> [options]\n")),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"npx playwright --help")," for details on commands and options supported in your installed CLI version. Want a deeper dive?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check out Nitya's ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://dev.to/azure/005-tool-talk-hello-command-line-faj"},"Tool Talk Post"))," for detailed coverage."),(0,o.kt)("li",{parentName:"ul"},"Download this handy ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://cloud-skills.dev/gallery/Playwright-01-CommandLine.png"},"hi-res visual guide"))," as a cheatsheet")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage Example"),": "),(0,o.kt)("p",null,"Let's use the ",(0,o.kt)("inlineCode",{parentName:"p"},"screenshot"),' command to capture an image of the kickoff post from the #30DaysOfSWA website for an "iPhone 6" device profile. You can see the ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright/blob/f1307f4a4d92490d7d0e7ee5a6a7fe9a22804e86/packages/playwright-core/src/server/deviceDescriptorsSource.json"},"named device profiles")," currently supported for reference."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'npx playwright screenshot --device "iPhone 6" https://www.azurestaticwebapps.dev/blog/kickoff 30Days.png\n\nNavigating to https://www.azurestaticwebapps.dev/blog/kickoff\nCapturing screenshot into 30Days.png\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"th"},"Result:")," This is what the saved image looks like."))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("img",{alt:"Screenshot",src:a(1619).Z,width:"750",height:"1334"}))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Then start exploring these tools"),": "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/docs/inspector"},"Inspector")," - a GUI-based tool for debugging test execution"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/docs/trace-viewer"},"TraceViewer")," - a GUI-based tool to explore recorded test traces"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/docs/codegen"},"Codegen")," - an authoring tool to generate tests based on user interactions"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/docs/debug"},"Debugging")," - additional tools to support runtime debugging"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/docs/test-reporters"},"Reporters")," - built-in reporters of different types")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"whats-next"},"What's Next"),(0,o.kt)("p",null,"We covered a lot today. "),(0,o.kt)("p",null,"At this point, you should know what Playwright its, and why it's useful for automating tests for  modern web applications. You should have a sense of the powerful developer tools it has, and understand how to setup and configure it for use with your Azure Static Web App. And you should have a clean basis for building up your test suite."),(0,o.kt)("p",null,"So where can we go next to skill up? We have you covered:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/fearlessly-dev/30daysofSWA-testing"},"Watch this repository"))," I setup today. I hope to continue adding more tests that can walk through various Playwright features with a deployed SWA,, and use that to explore both the Playwright capabilities and SWA-specific features or usage.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Join us tomorrow"),' when we explore a "Multi-Stage Deployment with Azure DevOps" demo that shows you a full-stack application with Playwright tests integrated. Learn interesting aspects - like using SWA environment variables to define test parameters - that highlight best practices for test setup in SWA.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Last but not least"),", check out this talk from last year for more insights into End-to-End Testing for Playwright from the Azure Static Web Apps Team."),(0,o.kt)("iframe",{width:"560",height:"315",frameborder:"0",src:"https://aka.ms/docs/player?ev=learn-tv-static-web-apps-code-to-scale&session=end-to-end-testing-with-playwright"}))),(0,o.kt)("h2",{id:"exercise"},"Exercise"),(0,o.kt)("p",null,"Pick one of the apps you've built (or use) - preferably one that is currently deployed to Azure Static Web Apps so you can explore other scenarios later."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/fearlessly-dev/30daysofSWA-testing"},"Walk through the same steps")," with ",(0,o.kt)("strong",{parentName:"p"},"your")," deployed app - then try adding one new test script that goes beyond the starter test case. Look at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MarcusFelling/Demo.Playwright"},"demo")," project for inspiration!"))}d.isMDXComponent=!0},9407:function(t,e,a){e.Z=a.p+"assets/images/16-banner-4b5207bc5611f5472bf29b8cca5a60af.png"},6047:function(t,e,a){e.Z=a.p+"assets/images/16-playwright-564feddda5d05dfe978b479e64bed2f2.jpg"},1619:function(t,e,a){e.Z=a.p+"assets/images/30Days-35c58c6fb6d68f4828961abf4865a1b9.png"}}]);