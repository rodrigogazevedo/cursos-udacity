var Cat = function() {
  var self = this;
  self.clickCount = ko.observable(0);
  self.name = ko.observable('Tabby');
  self.childDevelopment = ko.pureComputed(function() {
      var clickCount = self.clickCount();
      
      if (clickCount >= 0 && clickCount <= 10) {
          return 'Newborn';
      } else if (clickCount >= 11 && clickCount <= 20) {
          return 'Infantil';
      } else if (clickCount >= 21 && clickCount <= 30) {
          return 'Toddler';
      } else if(clickCount >= 31 && clickCount <= 40) {
          return 'Preschooler ';
      } else if (clickCount >= 41 && clickCount <= 50){
          return 'School-aged child';
      } else if (clickCount >= 51 && clickCount <= 60){
          return 'Teen';
      } else {
          return 'Adult';
      }
  });
  self.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  // self.imgAttribution = ko.observable('https://www.flickr.com/photos/deerwooduk/779074040/in/photostream/');

  self.nicknames = ko.observable('Nicknames:')

  self.items = ko.observableArray(['Tabtab', 'T-Bone', 'Mr. T', 'Tabitha Tab Tabby Catty Cat']);
}

var ViewModel = function() {
  var self = this;
  self.currentCat = ko.observable(new Cat());

  self.incrementCounter = function () {
      self.clickCount(self.clickCount() + 1);
  };

  self.addNewItem = function() {
      var newItem = 'Novo Item ' + (self.items().length + 1);
      self.items.push(newItem);
  };
}

ko.applyBindings(new ViewModel());