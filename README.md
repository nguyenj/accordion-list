Accordion List
======
A plugin that creates an accordion effect for list items. Typically, this is used as a way to present a lot of information in a limited space. The idea is to collapse (hide) the extended information and only present something useful such as a title.

## General Information
This plugin will support jQuery 1.10+ for now. 

To initialize the plugin, `$('.accordion-list').accordionList();`.

A typical markup:
```
<ul class="accordion-list">
    <li>
        <div class="title">Item Title</div>
        <div class="content">
            <p>Item content</p>
            <img src="optional-image.jpg" />
        </div>
    </li>
</ul>
```

## Options
Default options that are avabile for configuring:
```
          title:  '.title',             // the title class
    description:  '.description',       // the description class
   currentClass:  'current',            // the current class
     slideSpeed:  400,                  // the animation speed of sliding up and down
        onAfter:  function (el) {}      // callback function after the sliding has completed
```