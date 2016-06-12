export const collectionsSubscribe = (title, filter, options)=> {
  if(Meteor.isClient){
    // console.log("OPTIONS> ", options);
    return Meteor.subscribe(title, filter, options);
  }
};
