---
title: So I broke my website
publishedAt: 2023-12-10
lastUpdatedAt: ""
summary: A story about how I broke my website and what I did to prevent that
  from happening in the future.
---
A few weeks ago I was out at the library working on some side projects to kill time before heading to a movie at my favorite local [popup theater](https://cicadacinema.com), when I noticed I couldn't reach my blog. When I tried to navigate to my site I was met with the a "Connection timed out" in my browser indicating that Cloudflare was having trouble reaching my site.

![A "Connection timed out" status page from cloudflare](/media/screenshot-2023-11-19-at-4.23.32-pm.png)

I had recently moved my DNS from [Namecheap](https://www.namecheap.com/) over to [Cloudflare](https://www.cloudflare.com/application-services/products/dns/) so that I could setup domain names with proper SSL certs for my homelab(if you want to learn more about that check out this [video](https://youtu.be/qlcVx-k-02E?si=rhqwsCoctZ_VYObw)). When I setup DNS for my site I thought it would be a good idea to take advantage of Cloudflare's ability to [proxy dns records](https://developers.cloudflare.com/dns/manage-dns-records/reference/proxied-dns-records/). This feature is great in some contexts, it can speed up your DNS requests due to Cloudflare's caching, hides your IP address from bad actors, and makes you less vulnerable to DDOS attacks, but had unintended consequences in my situation.

## A Rookie mistake

In retrospect I should have realized proxying the DNS I use for my sites hosted on netlify didn't make much sense. Netlify already handles caching so I don't need Cloudflare to do it for me, there's no need for me to be concerned about protecting netlify's IP addresses, and they already have measures in place to handle their own [security](https://www.netlify.com/security/) and prevent DDOS attacks. However I didn't realize this until I came across this [article](https://stevepolito.design/blog/configure-cloudflare-dns-to-work-with-netlify) which helped me realize you need to turn off the proxying option when pointing your DNS towards netlify. Further research brought me to this [form post](https://answers.netlify.com/t/support-guide-what-problems-could-occur-when-using-cloudflare-in-front-of-netlify/138) as well a [blog post](https://www.netlify.com/blog/2017/03/28/why-you-dont-need-cloudflare-with-netlify/) by netlify where they explain in further detail why their services don't play well with proxied dns through Cloudflare. Once I stopped proxying the domains for my site and re-setup the domains in netlify I was good to go, but I wanted assurances that another silly mistake like this wouldn't take down my site without me knowing.

## Enter Upptime

A quick google search on open source uptime monitoring tools brought me to [upptime](https://upptime.js.org). Upptime uses a combination of github actions to run checks against your site and then builds you a status page using github pages. It's a really great free way to have some basic monitoring for side projects, assuming you run it in a public github repo. It took me all of 10 minutes to get it up and running for my site, you can see my repo [here](https://github.com/omawhite/portfolio-uptime-monitor) and the status page [here](https://upptime.louiswhite.me).

## Future improvements

Upptime makes it really easy to get up and running quickly with the basics and the status page they provide to you out of the box is great however a status page only does you any good if you check it regularly. Because of this Upptime also lets you setup [notifications](https://upptime.js.org/docs/notifications) so that you can be aware of any outages. They support a good handful of providers including Slack and Microsoft teams, which is great for teams already invested in those tools, as well as email and sms. Since I'm just a single person running a website mostly for fun I don't have any kind of infrastructure already in place to do alerting and don't feel like setting up Slack, Discord, or Teams(I've used teams before at work I hate it with a passion) just for this, so I'm leaning towards using [Telegram to create myself an alerts bot](https://core.telegram.org/bots#6-botfather).
