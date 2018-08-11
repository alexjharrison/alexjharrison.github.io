//document ready function
var projects;
$.getJSON("projects.json",json=>projects=json);


$(()=>{
    M.AutoInit();
    var elem = document.querySelector('.scrollspy');
    var instance = M.ScrollSpy.getInstance(elem,{scrollOffset:500});

    insertProjects("",6);

})

function getActiveElement(id) {
    return 'a[href="#' + id + '"]';
}

function insertProjects(descr,num){
    var newList = projects;
    if(descr){
        newList = newList.filter(project=>project.tech.includes(descr));
    }
    newList.sort((a,b)=>{return b.rating - a.rating});
    var block1 = newList.slice(0,num);
    var block2 = newList.slice(num);

    console.log(block1,block2);
    var projectInfo = $("#project-info");
    var shownProj = $("<div>").addClass("shown");
    var hidProj = $("<div>").addClass("hidden");
    block1.forEach(project => {
        
    });
    block2.forEach(project => {
        
    });
    hidProj.hide();
    projectInfo.append(shownProj).append(hidProj);
    
}