# The "Why" pop-up Brave Extension

<i> <b>Purpose</b> : To add a moment of pause -- before you start doom scrolling :) </i>

The `Submit` button enables after some minutes (default: 3-mins):

![demo1 img](/assets/demo1.png)

The `Export Logs` button (just below the "Submit") lets you download a `.csv` file with all the previous inputs (or logs) you have submitted with date, start time and time spent for each log.

Once you submit the response a clock starts on the upper-righthand side corner.

![demo2 img](/assets/demo2.png)

By default, every 15 minute the webpage automatically reloads and the initial black screen with the prompt reappears.

## Usage: Brave

- Clone this repo; go to terminal and run --> `git clone https://github.com/Schefflera-Arboricola/the-why-pop-up.git`
- [Optional] To support more sites, edit the [`manifest.json`](manifest.json) file and add additional URLs to the `matches` list inside the `content_scripts` section.
- [Optional] Updating variables in the `content.js` file:
    - `ENABLE_SUBMIT_MS`: To increase or decrease the time it takes for the `Submit` button to get enabled (default: 3-mins)
    - `RELOAD_INTERVAL_MS`: To increase or decrease the time after which the webpage automatically reloads (default: 15-mins)
- Open Brave, go to `brave://extensions/`
- Turn on Developer mode
- Click "Load unpacked"
- Select your cloned folder (`the-why-pop-up`) containing the extension files.

Thank you :)

PS: Developed with the help of an LLM — mostly through iterative prompting, debugging and tweaking.

PPS: To completely block a site (from your mobile or desktop), you can use "Content Filtering" on Brave browser.

How? : Navigate to `Settings` > `Shields & Privacy` > `Content Filtering` > `Custom Filters` (or `Create Custom Filters` on Android). Add rules like `||youtube.com^` or `||www.youtube.com^` on new lines, then save. This prevents the site from loading, blocking access across subdomains. 

References: 
- https://mspoweruser.com/block-website-brave-browser/ 
- https://support.brave.app/hc/en-us/articles/6449369961741-How-do-I-manage-adblock-filters-in-Brave
