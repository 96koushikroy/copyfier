Router.configure({
    loadingTemplate: 'loading'
});

Router.map(function(){

    this.route('home',{
        path:'/'
    });
    this.route('read',{
        path:'/read'
    });
    this.route('copy',{
        path:'/copy'
    });
    this.route('mytexts',{
        'path':'/mytexts',
        waitOn:function(){
            var searchh = Session.get('search');
            return Meteor.subscribe('text',searchh);
        }

    });
});