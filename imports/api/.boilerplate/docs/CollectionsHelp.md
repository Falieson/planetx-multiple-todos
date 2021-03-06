# Join
[NoSQL Join: Associations between Collections - Link (Viewed 20160604)](http://guide.meteor.com/collections.html#association-helpers)


NOTE: I couldn't get  [dburles:collection-helpers](https://github.com/dburles/meteor-collection-helpers) working so went with passing the parentId and recording childIds, later I should update this commit with either transform or the collection helpers.   ~Falieson:20160605

## Collection Helpers
* [Associations between collections](http://guide.meteor.com/collections.html#associations)

## Transform
[Attach Behavior To Collections - Link (Viewed 20160604)](http://stackoverflow.com/a/21546609/5596582)

You can use the transform parameter in the Collection to overload the object with custom functions
```
var Dogs = new Meteor.Collection("dogs",
{
  transform:function(entry)
  {
      entry.bark = function(){ console.log(this.barkSound);};
      return entry;
  }
});
```
Then:
```
var aDogID = new Dogs.insert({barkSound: "ruff"})
Dogs.find(aDogID).bark(); //"ruff"
```


Bonus: If for any reason you would like to use a similar concept as proposed by Andrew Ferk, just use the
```
_.defaults(object, *defaults) function.
//
var defaults = {
          barkSound: "ruff",
          bark: function() {
                     console.log(this.barkSound);
                 }
         }
//
Dogs = new Meteor.Collection("dogs",
     {
         transform: function(object) {
             return _.defaults(object, defaults);
         }
     });
```
