---
slug: "/writing/programming/frontend/CSS Basics"
date: "2021-02-01"
---

# CSS Building Blocks

### Cascade and Inheritance
* Not ever CSS property is inherited, for example width, margin, padding, and border. You can find what is and what isn't on the property reference page.
* CSS provides four special universal property values for controlling inheritance that are accepted by every CSS property:
	* inherit: 'turns on inheritance', i.e. sets the property to that of the parent. 
	* initial: sets the property value to the initial value (default value)
	* unset: reset the property to its natural value so if it is inherited, the inherited value if not then the initial value.
	* revert: also exists but with limited support.
* You can use a shortcut 'all' to set all the properties at once (i.e. to inherit, or initial, etc).
* There are three 'rule' sets by which the browser decided what CSS rule should be applied to a given element. The order of importance goes: Importance > Specificity > Source Order.
	* Source order: Where in the source code the line of CSS is. Later ones overrule earlier ones.
	* Specificity: *, +, >, ~, etc and negation pseudo-class (not) have no effect on specificity. Specificity is simply an equation your browser uses, it is the equation: `specificity = (inline style) * 1000 + (each id selector) * 100 + (each class, attribute, and pseudo-class selector) * 10 + (element selector) * 1. That is the specificity of a single selector of CSS. 
		* If you need to overrule all the above calculations for whatever reason, you can use `!important`. It is strongly recommended that you never use it unless you absolutely have to. 

### Selectors
* Element(s) that are selected by a given selector are called the 'subject of the selector' 
* Best place to find supported selectors is here: https://www.w3.org/TR/selectors-3/
* The types of selectors: Type, Universal, Class, Id, Attribute, Pseudo-class, Pseudo-element, Descendant, Child, Adjacent, General sibling.

### The Box Model
* Two types of outer boxes: Inline and Block boxes.
	* Block: Box will extend in the inline direction to fill the space available in its container. In most cases this means that the box will become as wide as its container, filling goop 100% of the space available. Width and height are respected. Padding, margin, border will push other elements away from the box. * Inline: width and height do not apply. Vertical padding, margins, and borders will apply but not cause other inline boxes to move away from them. 
* Inner display types: Normal and Flex (also grid) 
	* Normal: Just like block and inline
	* Flex: Outer display type becomes block and inner is flex. Can also set to inline-flex to have the outer display become inline. 
* Setting the width and height in the standard box model, only sets it on the content box. 
	* Box-sizing: border-box makes it so that padding and border are also included in this calculation.
* Use negative margin to get things to overlap on the page.
* Margin collapsing: If two margins overlap then they collapse into one. I.e. if a margin of say 50 is touching that of a 30 then the total margin between the two elements is 50, not 80. If one is negative it subtracts from the total.
* There is no such thing as negative padding. 
* Display: Inline-block 
	* Allows for inline to respect width and height. 

### Backgrounds and Borders
* Background color extends underneath both padding and content.
* Background-attachment: Allows you to specify how a background scrolls when the content scrolls. 
	* fixed: causes an elements background to be fixed to the view port, so that it doesn't scroll when the page or element content is scrolled. 
* You can pass in two values to border radius, one for the horizontal radius and one for the vertical radius.

### Handling 
* Block orientation is tied to the writing mode of the screen not the layout. The inline dimension is always the direction a sentence flows. If you change the writing mode then you will also change the orientation of block and inline. 
* Physical properties vs logical properties. Physical things like width, height, etc are agnostic of the block orientation and are tied to their physical direction, logical will respect the orientation and are called inline-size and block-size
* MDN predicts that most people will eventual transition to using logical properties. 

### Overflow
* `overflow: auto` allows you to let the browser decide to use scroll or not
* When you use a value of overflow like scroll or auto you create a Block Formatting Context (BFC).   

### Values and units
* Number data types: integer, number, dimension (a number + a unit), and percentage. 
* Absolute length units: cm (96px/2.54), mm, Q (1/40th of a cm), in, pc (picas 1/6th of in), pt (points 1/72th of 1in), px (1/96th of 1in)
* Relative length units: em (font size of the parent), ex (x-height of the elements font), ch, rem (font size of root element), lh (line height), vmin (1% of the viewports smaller dimension), vmax (1% of the viewports larger dimension). 
* RBGA vs opacity: Opacity makes the element opaque *and* everything in it whereas RGBA only make the color opaque.

### Sizing items in CSS
* When you use margin and padding set in percentages, the values is calculated from the inline size - therefor the width when working in a horizontal language. This allows for equal-size margins and padding all around the box.
* Max-width very useful for images. max-width: 100% = image is able to become smaller than its intrinsic size, but will stop at 100% of its size. 

### Images, Media, and Form elements
* Images and videos are called replaced elements. Replaced elements are elements whose representation is outside the scope of CSS. 
* letterboxing: when the image doesn't have the same aspect ratio as the container so when you scale it down, it looks like a movies screen.
* In some browsers, form elements do not inherit font styling by default.
* Most people typically use this reset when dealing with forms:
```
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  box-sizing: border-box;
  padding: 0; margin: 0;
}

textarea {
  overflow: auto;
}
```

### Styling Tables
* You can select only even children with the selector: elem:nth-child(even) {}, same for odd.
* Generally you want border-collapse: collapse for border that are touching, like in the case of a table.

### Debugging CSS
* General debugging tip: take a step back and work on something else or go for a walk for a second. 

### Organizing Your CSS
* MDN style guide https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Code_guidelines/CSS
* Use a string that won't be used in the code to delineate sections so that you can easily jump between them. 

# Styling Text 

### Fundamental text and font styling 
* The five default fonts: serif, sans-serif, mono space, cursive, fantasy.
* Web safe fonts (fonts guaranteed to be on every computer): Arial, Courier New, Georgia, Times New Roman, Verdana. 
	* all web safe fonts here: https://www.cssfontstack.com/
* font-family: first font, second font, default, etc
* Best practice: Give you root element a font size of 10 and then use rem to size all of your other fonts. 
* you can auto add hyphens to your CSS word breaks with the hyphen property. 
* font-variant: can be used for all sorts of things like making zeros slashed, making all caps, etc
* text-rendering: the browser renders the text faster or cleaner depending on this setting.
* text-indent: sets the length of empty space (indentation) that is put before lines of text in a block.

### Styling lists
* list-style-type: sets the type of bullets to use for the list, for example square or circle bullets, etc 
* list-style-position: sets whether the bullets appear inside the list items, or outside them before the start of each item.
* Several list specifications can be made such as starting from a number other than 1 (start) or reversing the list. 
* You can set the exact value for the list item with the `value` attribute set on the <li> items themselves.

### Styling links
* Order of the pseudo selectors for links maters because the styling will cascade into one another. 
	* The order is :link, :visited, :focus, :hover, :active. 
* You can easily add icons to your links instead of adding another div or something by using this CSS: a { background: url(....) no-repeat 100% 0 }. 

# CSS Layout

### Introduction to CSS layout 
* Normal Flow: how the browser lays out HTML pages by default when you do nothing to control page layout. 
* Flexbox is designed for one dimensional layout, whereas grid layout is designed for two dimensions (lining things up as rows and columns). 
* Multi-column layout exists that works pretty much the same way that bootstrap columns work. 

### Normal Flow 
* The flow of the document with no CSS positioning. 
* By default a block level element's content is 100% of the width of its parent element, and as tall as it's content. Vice versa for inline elements. 

### Flexbox
* Flex items are laid out along two axis. The main axis is the axis running in the direction the flex items are being laid out in (either rows or cols). Cross axis is the perpendicular axis. 
* flex: allows you to size a flex item in relation to other flex items. A value of 1 on all of them and then 2 on a specific on would make that item twice as big. You can also defined a minimum size as a second unit.

### Grid Layout
* Explicit grid: the one you specify with grid-template-columns, etc. 
* Implicit grid: the grid that gets created when content is placed outside of that grid. 
* these concepts are similar to main and cross flexbox axis. 
* you can use the minmax function with grids to specify both a min and max columns layout.

### Floats
* A floated element is taken out of the normal flow, and boxes of following items actually run behind the float. 
* Use `clear` to force the other floated content from creeping up. 
* You can use display: flow-root for adding a BFC to any block which can help in the case of clearing floats. 

### Positioning 
* margin collapsing doesn't effect positioned elements.
* Initial containing block: the html element. 
* <dt> element is used to describe a term in a definitions list.

### Multiple Column layout
* Works very similar to bootstrap cols. Just add column-count and the browser automatically creates that many columns.
* Have a div span through all of the columns by giving it the `column-span: all` property. 

### Responsive Design
* Fun fact, back in the day developers often had two sites, a regular web one and a mobile one (often with a url of m.example or exmaple.mobi).
* Mobile first: have a single column and then when you test on web, add columns as need be.
* You should never set text using viewport units alone as it prevents the user from being able to zoom in. To fix this, use calc( non-vw + vw ).

### Media Queries
* Can detect orientation, media type (print, etc), width/height.

### Supporting older browsers
* You should be able to ask yourself: "If I remove my stylesheet, does my website still make sense?"
* flexbox has better support than grid.

# Transitions 

### Using CSS Transitions
* Allow you to define the transition between two states of an element. 
	* the states are defined by pseudo-classes (hover, active, etc). 
* Implicit transitions: transitions that take place between two states. 
* Not every property can be animated. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties
* If you want to transition all properties, you can use `all` for the property name. 
* You should be careful about using transitions immediately after removing an elements display: none. You can use setTimeout before using the transition to fix it. 
