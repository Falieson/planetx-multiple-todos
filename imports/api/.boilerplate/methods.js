// Typical methods are to CRUD a collection item

// # Validated Methods
// * [Advanced Method boilerplate](http://guide.meteor.com/methods.html#advanced-boilerplate)
// * [Validated Method](http://guide.meteor.com/methods.html#validated-method)
// * [MDG guide - Pub & Sub](https://www.meteor.com/tutorials/react/publish-and-subscribe)
//
//
// import ValidatedMethod from 'meteor/validated-method';
//
// export const updateText = new ValidatedMethod({
//   name: 'todos.updateText',
//   validate: new SimpleSchema({
//     todoId: { type: String },
//     newText: { type: String }
//   }).validator(),
//   run({ todoId, newText }) {
//     const todo = Todos.findOne(todoId);
//
//     if (!todo.editableBy(this.userId)) {
//       throw new Meteor.Error('todos.updateText.unauthorized',
//         'Cannot edit todos in a private list that is not yours');
//     }
//
//     Todos.update(todoId, {
//       $set: { text: newText }
//     });
//   }
// });
// // Call the validation only
// updateText.validate({ wrong: 'args'});
//
// // Call the Method with custom userId in a test
// updateText.run.call({ userId: 'abcd' }, {
//   todoId: '12345',
//   newText: 'This is a todo item.'
// });


// # Rate Limit DB changes
// import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
// Get list of all method names on Tasks
// const TASKS_METHODS = _.pluck([
//   insert,
// ], 'name');
//
// if (Meteor.isServer) {
//   // Only allow 5 todos operations per connection per second
//   DDPRateLimiter.addRule({
//     name(name) {
//       return _.contains(TASKS_METHODS, name);
//     },
//
//     // Rate limit per connection ID
//     connectionId() { return true; },
//   }, 5, 1000);
// }
