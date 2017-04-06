# kickoff-grid.css
> A simple, fully responsive, grid framework that can help you build complex layouts very easily.
> Works in combination with Sass or standard CSS


[![npm version](https://badge.fury.io/js/kickoff-grid.css.svg)](https://badge.fury.io/js/kickoff-grid.css)

[![NPM](https://nodei.co/npm/kickoff-grid.css.png)](https://nodei.co/npm/kickoff-grid.css/)

## Install

```
npm install kickoff-grid.css --save
```

## Importing into your styles

The simplest – and recommended – way to import the Kickoff Grid is to use [Eyeglass](https://github.com/sass-eyeglass/eyeglass).  Eyeglass let’s you import the grid as a named module in your Sass, by specifying:

```scss
@import "kickoff-grid"
```

This is similar to how you would import modules in JavaScript using NPM.

Alternatively, you can download the source files from Github and include them as you would normally.  If you would like to do this, you will also need to download and include the [Kickoff Utils](https://github.com/TryKickoff/kickoff-utils.scss), as the grid relies on some of the functions it provides.

Finally, if you just want some straight up CSS, you can either grab a copy of the [generated CSS file – index.css](https://github.com/TryKickoff/kickoff-grid.css/blob/master/index.css) which is based off our standard variables, or you can generate your own by downloading the repo, changing the variables in `scss/_grid-variables.scss` file and recompiling the code using Sass.

## Custom Grid Variables

Here is a list of the grid variables that you can override.  Simply copy the variable and change the value as required.

```
/**
 * Grid Variables
 * =================================
 * These are defined here so that the grid can run as a standalone module (outside of Kickoff),
 * as well as allowing these files to be generated into standard CSS.
 *
 * When importing the grid into your own project, copy the variables from this file into your own variables.scss
 * They will then override the values specified here (as long as the grid is imported below where your own variables are defined).
 */

$breakpoints: ko-map-to-em((
    narrow                  : 400px,
    mid                     : 750px,
    wide                    : 1000px,
    huge                    : 1250px
), 16) !default;


// Setup layout max-width
$layout-max-width           : 1000 !default; // [in pixels]

// Grid specific variables
$grid-column-count          : 12    !default; // Total column count
$grid-gutter-width          : 20    !default; // [in pixels]

//Settings here override & affect the grid classes output
$responsive-grid-sizes      : true  !default; // Disable this if you don't want grid sizes for each breakpoint
$use-legacy-grid            : true  !default; // Disable this if you don’t want to output .no-flexbox classes for older browsers to use
```


## Usage

For details on how to use the grid’s features once imported, [see our documentation](http://trykickoff.com/learn/grid):

* Documentation:  http://trykickoff.com/learn/grid
* Demo: http://trykickoff.com/demos/grids

