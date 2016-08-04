# Minimalist Responsive Personal Landing Page

My minimalist **responsive** personal landing page with cover background image and social media links.

#### It works on all devices in landscape and portrait orientations.

It uses _fluid sizing_ and _spacing_, _tailored background image selection_ through media queries, and _enhanced SVG_ and _link accessibility_ through _ARIA attributes_.

### Check it out **[here](http://jorypestorious.com)**

---

#### Issues
* **IE 11** - CSS fill transition does not work for SVG elements
 * So I removed the transition on the SVG fill, but it feels a bit more harsh
* **IE 10** and below does not support CSS transforms on SVG elements (though SVG transform attributes do work)
 * So the subtle scaling-in on hover and focus might not work on older versions of IE
* ~~**Change Background button** does not have keyboard accessibility~~
 * Fixed
* ~~**Change Background button** is not working on the default Android browser~~
  * Fixed
