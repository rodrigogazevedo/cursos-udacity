var initialCats = [
    {
        clickCount : 0,
        name : 'Tabby',
        imgSrc : 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
        nicknames: ['Tabtab', 'T-Bone', 'Mr. T', 'Tabitha Tab Tabby Catty Cat']
    },
    {
        clickCount : 0,
        name : 'Tiger',
        imgSrc : 'img/4154543904_6e2428c421_z.jpg',
        imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904',
        nicknames : ['Tigger']
    },
    {
        clickCount : 0,
        name : 'Scaredy',
        imgSrc : 'img/22252709_010df3379e_z.jpg',
        imgAttribution : 'https://www.flickr.com/photos/kpjas/4154543904',
        nicknames : ['Casper']
    },
    {
        clickCount : 0,
        name : 'Shadow',
        imgSrc : 'img/1413379559_412a540d29_z.jpg',
        imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559',
        nicknames : ['Shooby']
    },
    {
        clickCount : 0,
        name : 'Sleepy',
        imgSrc : 'img/9648464288_2516b35537_z.jpg',
        imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288',
        nicknames : ['Zzzzz']
    }
];

var Cat = function(data) {
    var self = this;
    self.clickCount = ko.observable(data.clickCount);
    self.name = ko.observable(data.name);
    self.childDevelopment = ko.pureComputed(function() {
        var clickCount = self.clickCount();
        
        if (clickCount < 10) {
            return 'Newborn';
        } else if (clickCount < 50) {
            return 'Infantil';
        } else if (clickCount < 100) {
            return 'Child';
        } else if(clickCount < 200) {
            return 'Teen';
        } else if (clickCount < 500){
            return 'Adult';
        } else {
            return 'Ninja';
        }
    });
    self.imgSrc = ko.observable(data.imgSrc);
    self.imgAttribution = ko.observable(data.imgAttribution);
    
    self.titleNickname = ko.observable('Nicknames:')
    self.nicknames = ko.observableArray(data.nicknames || []);
  }
  
  var ViewModel = function() {
    var self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem) {
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.setCurrentCat = function(cat) {
        self.currentCat(cat);
    };

    this.incrementCounter = () => {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };    
  };
  
  ko.applyBindings(new ViewModel());
  