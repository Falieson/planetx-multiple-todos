// #[Isolation Techniques](http://guide.meteor.com/testing.html#isolation-techniques)
// Testing publications
// Using the johanbrook:publication-collector package, you’re able to test individual publication’s output without needing to create a traditional subscription:
// describe('lists.public', function () {
//   it('sends all public lists', function (done) {
//     // Set a user id that will be provided to the publish function as `this.userId`,
//     // in case you want to test authentication.
//     const collector = new PublicationCollector({userId: 'some-id'});
//
//     // Collect the data published from the `lists.public` publication.
//     collector.collect('lists.public', (collections) => {
//       // `collections` is a dictionary with collection names as keys,
//       // and their published documents as values in an array.
//       // Here, documents from the collection 'Lists' are published.
//       chai.assert.typeOf(collections.Lists, 'array');
//       chai.assert.equal(collections.Lists.length, 3);
//       done();
//     });
//   });
// });
// Note that user documents – ones that you would normally query with Meteor.users.find() – will be available as the key users on the dictionary passed from a PublicationCollector.collect() call. See the tests in the package for more details.
