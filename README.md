# The "Why" pop-up Brave Extension

<i> <b>Purpose</b> : To add a moment of pause -- before you start doom scrolling :) </i>

![demo img](/assets/demo.png)

Once you submit the response a clock starts on the upper-righthand side corner.

The `Export Logs` button lets you download a `.csv` file with all the previous inputs (or logs) you have submitted with date, start time and time spent for each log.

## Usage: Brave

- Clone this repo; go to terminal and run --> `git clone https://github.com/Schefflera-Arboricola/the-why-pop-up.git`
- To support more sites, edit the [`manifest.json`](manifest.json) file and add additional URLs to the `matches` list inside the `content_scripts` section.
- Open Brave, go to `brave://extensions/`
- Turn on Developer mode
- Click "Load unpacked"
- Select your cloned folder (`the-why-pop-up`) containing the extension files.

Thank you :)

PS: Developed with the help of an LLM — mostly through iterative prompting, debugging and tweaking.
