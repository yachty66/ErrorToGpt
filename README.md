# ErrorToGpt

## Post

Traceback to GPT

VSC is the ultimate platform for me. I use it for everything - writing code, writing notes, project management (all of my projects are on Github, VSC is the interface to it). I always liked the "SEARCH STACKOVERFLOW" button from Google Colabs (altough its a bit outdated). When programming, I frequently transfer the pure traceback into chatGPT. I thought a lazy VSC addon could automate this procedure.

My first attempt resulted in opening an [issue](https://github.com/microsoft/vscode-extension-samples/issues/837) at the Github page of the Microsoft VSC extensions repository. 

My plan was to directly get the logging information from the integrated terminal of the user. Every time the traceback would have been `Traceback (most recent call last):` (Python specific VSC extension) I wanted to preserve the logs at this point and then give the user access to a button that, when pressed, would send the logs straight to chatGPT. I'll put that on hold for the time being as I wait to hear back from my opened issue.


 I wanted to save the logs from this point and than i wanted to to provide the user with an button which when it got clicked would forward the logs directly into chatGPT. For now I will pause on that and will see what the feedback on my issue which I opened will be.

From my current know


VSC extension which provides directly after stacktrace a button in terminal which forwards the whole stacktrace as input into ChatGPT like the "SEARCH STACK OVERFLOW" button in a Colab.




Goal is to get the trace

- [x] get the standard extension running so that a new window is opening up
- [ ] log a message if the terminal closed  
- [ ] instead of hello world display the content from the terminal from the last run
- [ ] add in settings possibility for the user to add keywords for the traceback 

