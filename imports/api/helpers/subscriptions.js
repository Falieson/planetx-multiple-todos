export const collectionsSubscribe = (title, options)=> {
  if(Meteor.isClient){
    Meteor.subscribe(title, options);
  }
};
