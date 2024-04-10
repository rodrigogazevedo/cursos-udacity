var ViewModel = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.childDevelopment = ko.pureComputed(function() {
    var clickCount = this.clickCount();
    
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
  }, this);
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttribution = ko.observable('https://www.flickr.com/photos/deerwooduk/779074040/in/photostream/')

  this.incrementCounter = function () {
    this.clickCount(this.clickCount() + 1);
  };
}

ko.applyBindings(new ViewModel())