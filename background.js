// Set options for the button
var UIItemProperties = {
  disabled: false,
  title: 'Opera Extension',
  icon: 'button.png',
  onclick: function(){
  	var curURL = opera.extension.tabs.getFocused().url;
    button.popup.href = 'http://twitter.com/share?_=1282903267354&count=none&original_referer=r&text=Shared from Opera&url='+ curURL;
  },
  popup: {}
};

// Create the button and add it to the toolbar
var button = opera.contexts.toolbar.createItem(UIItemProperties);
opera.contexts.toolbar.addItem(button);