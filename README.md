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
      firstItem: true,            // to show the first item of the list
      listItems: 'li',            // the element that contains the title and description
      itemTitle: '.title',        // the item title
itemDescription: '.description'   // the item description
```