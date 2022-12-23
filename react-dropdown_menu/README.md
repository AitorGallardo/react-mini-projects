## LACKS
- Animations on change menu to slide left and right.
- Amimation to make the menu bigger
- Arrow at the start of the element if its a back element


## LEARNT

- Using the right element in ech case for the Navbar: 
 ```html

NAVBAR
<nav>
    <ul>{props.children}</ul>
</nav>

NAVITEM
<li>
    <a></a>
</li>
 ```

- Set an element to the left or right using margin-left/right: auto.
- Using SVG importing them as React components
- Using filter css property to apply effects like brighness
- Display dropdown inside of navItems to make dropdown sticked to navitems.
- Render left or right icon on dropdown menu items by passying it or not in props

```html
<a href="#">
    <span className="icon-button">{props.leftIcon}</span>
    <span className="icon-right">{props.rightIcon}</span>
</a>

<DropdownItem leftIcon={<CogIcon/>} rightIcon={<ChevronIcon/> }/ >
```
- Showing animations by toggling classes to a class with a transition effect.

