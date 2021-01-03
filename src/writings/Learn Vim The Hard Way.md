---
slug: "/writing/programming/general/Learn Vim The Hard Way"
date: "2021-02-01"
---

# Learn Vimscript the Hard Way

*Persistent echoing*
- commands:
	- echom [string] = persistent echo
  - messages = shows all persistent messages
- notes:
  - used for debugging

*Options*
- boolean options
	- all boolean options work by having a `set <name>` and a `set no<name>` option
  - can toggle a boolean option with `set <name>!`
  - running `set <name>?` tells you what the option is currently set to
- non-boolean options
	- set the same way except now it's `set <name>=<value>`
   can also check with `set <name>?`

*Basic Mappings*
- use <keyname> to map special characters
  - <space>
  - <c-d> = Ctrl+d




-------------------------------------
*Other Notes and Snippets*
- Visual Mode
	- U = turns everything to uppercase

