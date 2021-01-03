---
slug: "/writing/programming/general/Regex"
date: "2021-02-01"
---

# Regular expressions

### Resources
* https://refrf.shreyasminocha.me/
* https://github.com/aloisdg/awesome-regex
* https://www.rexegg.com/
* https://regexcrossword.com/
--------------------------------------------------------------------------------

### Introduction
* A regular expression is a sequence of characters that define a search pattern

### The basics
* Regular expressions are case-sensitive by default

### Character classes
* [absd]: matches a set of characters. 
* p[ap]p: matches pap and ppp. 
* [a-z]: matches a range of characters, specifically a through z. 
* use '^' to negate all of the rules within the bracket. So [^abs] will match everything except a, b, or s. 

### Character escapes
* \d: matches any digit and is equivalent to the character class [0-9]
* most engines look for non-overlapping matches from left to right. 
* \D: negation of \d and is [^0-9]
* \w: word characters and is equal to [a-zA-Z0-9_].
* \W: the negation of \w 
* \s: matches white space characters: space, tab, carriage return, new line, form feed.
* \S: of course, matches the negation of \s. 
* .: matches any character except new line. 

### Groups
* Capturing groups are denoted with '()'. 
* Using these capturing groups, you can *extract* parts of matches. 
	* /\{([^{}]*)\}/ would match {nested} of something like { {nested} }. 
* Often times they are used to group logically similar parts of the regex for readability. 
* Back references: allow for referring to previously captured substrings. 
	* the match from the first group is \1, the second is \2, etc. 
	* ex) /([ab])=\1=\1/ would match a=a=a and b=b=b. 
* Non-capturing groups: will not 'capture' or extract the part that they match but can still be used for matching. Let's say you have some numbers 1st, 2nd, 3rd and you want the number part 1,2,3 but not the st, nd, rd, then you can use  a non-capturing group (\d+)(?:st|nd|rd|th)?

### Repetition
* Make parts of regex optional with the '?'. 
	* ex: /a?/ matches anything and also aaaaa...
	* ex: /https?/ matchs http and https 
* the '\*' operator matches zero or more of a token
* the '+' operator matches one or more
* the '{ number }' matches an operator number of times
* { min,max } for min and max matches (note make sure no space after the comma)
	* can do no max for just setting a minimum number of times. 
* You can suffix a repetition operator with '?' to make it lazy instead of greedy.
	* /".\*"/ matches "quote"quote"
	* /".\*?"/ matches just "quote"
* Lazy: stop as soon as the condition is satisfied 
* Greedy: stop only once the condition cannot be satisfied anymore

### Alternation
* Allows for matching exactly one of several phrases. 
* use '|': (foo|bar|baz) matches either foo or bar or baz. 
* Regex engines try alternatives from left to right. 

### Flags
* /g: when global flag isn't enabled, regex doesn't match anything beyond the first match.
* /i: case-insensitive regex
* /m: allows for multi line matches like strings in multi line strings
* /x: ignores whitespace, also any characters following the '#' are ignored. 

### Anchors
* Don't match anything by themselves, just place restrictions on where matches my appear. 
* ^: makes it necessary for the rest of the regex to match from the beginning of the string. I.e., the string must start with the character. 
* $: same as the above but for end of the string instead. 
* Used in conduction, will make sure the regex matches the entirety of the string instead of just a part of it. 
* \b: word boundary, a position between a word character and a non-word character. I.e., space, hyphens, etc. 
* \B: the opposite of \b. 

### Lookarounds 
* Uses to verify some conditions, without matching any text. 
* lookahead: positive - ?=, negative - ?!
* lookbehind: positive - ?<=, negative - ?<!

### Advanced Examples
* [\s\S]: a hack to match any character including newlines. 
