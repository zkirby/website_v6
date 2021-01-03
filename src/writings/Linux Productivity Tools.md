---
slug: "/writing/productivity/Linux Productivity Tools"
date: "2021-02-01"
---

# Linux Productivity Tools
reference: https://www.usenix.org/sites/default/files/conference/protected-files/lisa19_maheshwari.pdf
Utilizing linux as a productivity environment. Linux is the preferred 'general state of existence' in between command line operations, so knowing it well is important. 

### Basics
* which <cmdname>: allows you to verify if a command exists.
* help/info <cmd>: best ways to get help or learn about a command.
* diff: best way to compare text files
* lynx <url>: serf the web but only text based.
* curl -o <url>: download things form the web.
* ?: expands to exactly one character
* !: used for negation ls -ld [!0-9]\*
* !!: repeats the last command
* !$: change command keep last argument.
	* touch notes.md; v !$; will create a file and then open it in vim.
* !\*: change command keep all arguments.
* alt-.: paste last argument of previous command
* alt-<n>-alt-.: paste nth argument of previous command
* <cmd> #tag: tags a hard to remember command

### Streams, pipe, and redirection
* &: used to write into a stream. e.g., &1 to write into stdout.
* To disregard output, just stream into /dev/null. e.g., &> /dev/null
* read from stdin as out of a command:
	* diff <(ls dirA) <(ls dirB)
* xargs: used when you actually need arguments. Converts standard input to commands into literal args. 
	* for example: xargs touch < somelist.txt will make files for every name listed in somelist.txt. 
* Gnu parallel can be used for running parallel jobs in case you have a large list of things you need to do. 

### Classic Tools: fing, grep, awk, sed
* find: searches files based on some criteria.
	* ex) find /opt -name "README*" -exec wc -l {} +
						[path] [  critera   ] [   action    ]
	* can have multiple paths just spaced apart.
* grep: used to fetch lines from a text that have a specific pattern. 
	* you can tag commands with '#[something]' and then search for them later with grep, e.g. history | grep #[something]
* you can use find in grep in combination to look for some text over some set of files. 
* awk: extract and manipulate data. A programmable filter that reads and processes input line by line. 
* sed: parse and transform text
	* ex: sed 's/New/old/g' state.txt
						[command][regex][replace][modifier]  [input]
	* modifier: apply to nth occurrence (g = all occurrences) 

### Bash Tools 
* || and && operators work logically.
	* A || B = run B iff A fails
	* A && B = run B iff A succeeds
* .bashrc: runs in each new shell that is spawned
* .bash_profile: a file that runs only in a "login shell" (e.g. not sub shells)
* use '\' to bypass an alias. e.g. \cat
* can use $(cmd | cmd) to save commands to variables. 

### Miscellaneous Utilities
* at: executes a command on a specific day and time 
* cron: executes a desired command periodically. 
* python3: can run one line small programs with python
	* python3 -c "print('hello')"

