$(function() {
    
    var coursesRef = new Firebase('https://bytelight.firebaseio.com/courses');
    
    var context = BL.getContext();
    
    var saveCourse = function(context) {
        var thisCourse = coursesRef.child(context.lightGroupId);
        thisCourse.set(JSON.stringify(context));  
    }
    
    $('#save-button').click(function (e) {
        saveCourse(context);
        
        var content = {
            course: "King of the Hill",
            setBy: context.userId  
        };
        
        BL.createContent(JSON.stringify(content));
    });
});