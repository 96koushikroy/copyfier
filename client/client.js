/**
 * Created by koushik_softtask on 3/20/15.
 */
Template.mytexts.helpers({
    'texts':function(){
        return data.find();

    }


});


Template.copy.helpers({
    'id':function(){
        var s = "";
        while(s.length<7&&7>0){
            var r = Math.random();
            s+= (r<0.1?Math.floor(r*100):String.fromCharCode(Math.floor(r*26) + (r>0.5?97:65)));
        }
        Session.set('key',s);
        return s;
    }


});

Template.copy.events({

    'submit form': function(){

        event.preventDefault();

        var keyy = Session.get('key');

        var dataa = event.target.txtdata.value;

        if (dataa){

            Meteor.call('updata',keyy,dataa);
            event.target.txtdata.value="";
            alert('Text Saved! ^_^');
        }
        else{
            alert("Enter Information");
        }


    }


});

Template.read.events({
    'submit form':function(){
        event.preventDefault();
        var search = event.target.tken.value;
        Session.set('search',search);
        Router.go('/mytexts');

    }


});
