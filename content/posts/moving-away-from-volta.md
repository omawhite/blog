---
title: Moviing Away from Volta
publishedAt: 2026-03-22
summary: About how I moved from Volta to Mise for managing my node versions
---

Once upon a time I used [nvm](https://github.com/nvm-sh/nvm) as my node version management tool of choice. That served me well for years, but when I started working at CVS Health back in 2023 I decided to try something different while setting up my new work laptop and switched to using volta. I had heard that volta was faster than nvm and a few colleagues recommended it to me.

In retrospect I probably didn’t gain that much from switching to volta, I think I may have just fallen victim to shiny object syndrome. I never really noticed any slowness with nvm, which fit pretty nicely into my existing setup with zsh and oh my zsh. That said volta was a pretty great alternative and has served me well for the past few years, unfortunately it’s no longer going to be maintained so i felt the need to find an alternative. Rather than go back to nvm I figured I would give [Mise](https://mise.jdx.dev) a try(am i falling for shinny object syndrom again 🤔). I ran into a few hiccups during setup, but after getting through those it’s been smooth sailing.

Here’s how I got setup:

1. First I uninstalled volta following these [instructions](https://docs.volta.sh/advanced/uninstall).
2. Next I installed Mise by following their [getting started guide](https://mise.jdx.dev/getting-started.html#installing-mise-cli).
3. I set up Mise in my `.zshrc` based on [this part of the guide](https://mise.jdx.dev/getting-started.html#activate-mise).
4. To make node 24 my default node version I ran: `mise use -g node@24`. After than I used corepack to install pnpm: `corepack enabled pnpm`
5. Profit.....or atleast thats what I thought,until I started having issues.

I'm not sure what I did wrong here, I could have sworn things were working at first, but after coming back to my laptop a few days after doing all this setup I started seeing issues when creating a new terminal.

![Terminal showing errors after misconfiguring Mise in zshrc](/media/mise-oh-no.png)

It took longer than I care to admit for me to notice this, but somehow in my `.zshrc` I had `mise active zsh` instead of `mise activate zsh`. For the life of me I'm not sure how this happened. Once I corrected that I ran through step 4 again and was good to go. Since then it's been smooth sailing on both my personal and work laptops. I probably could have just switched back to nvm, but the possibility for using Mise as a tool for other stacks outside the node ecosystem seemed interesting to me so for now I'm sticking with Mise.
