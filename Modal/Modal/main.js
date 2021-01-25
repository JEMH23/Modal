if(document.getElementById("btnmodal")){
    console.log("toto");
    var modal = document.getElementById("voirmodal");
    var btn = document.getElementById("btnmodal");
    var span = document.getElementById("fermer");
    var body = document.body;

    btn.onclick = function(){
        console.log("btn click");
        modal.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function(){
        console.log("span click");
        modal.style.display = "none";

        body.style.position = "inherit";
		body.style.height = "auto";
		body.style.overflow = "visible";

        
    }

    window.onclick = function(event){
        if (event.target == modal) {
            modal.style.display = "none";

            body.style.position = "inherit";
			body.style.height = "auto";
			body.style.overflow = "visible";
        }
    }
}