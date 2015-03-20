/**
 * Created by koushik_softtask on 3/20/15.
 */
Meteor.publish('text',function(a){
    Meteor._sleepForMs(500);
    return (data.find({key:a}));

});
var clear = function() {
    var min = new Date(new Date() - 1.8e+6);
    data.remove({
        createdat: {$lt: min}
    });
};
Meteor.startup(function() {
    clear();
    Meteor.setInterval(clear, 120000);
    Kadira.connect('g3bXGfDuuWGuT4XBX', '4b021187-f9bc-4534-83fd-61f20c547091')
});

Meteor.methods({
    'updata':function(keyy,dataa){
        data.insert({
            key:keyy,text:dataa,createdat:new Date
        });

    }


});
