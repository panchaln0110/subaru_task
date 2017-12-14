function hideShow(header1, arrowup, header2, arrowdown){
    var header11 = document.getElementById(header1);
    var header22 = document.getElementById(header2);
    var arrowup1 = document.getElementById(arrowup);
    var arrowdown1 = document.getElementById(arrowdown);
    if(header11.style.display === "none"){
        header11.style.display = "block";
        header22.style.display = "none";
        arrowup1.classList.add('fa-angle-down');
        arrowup1.classList.remove('fa-angle-up');
        arrowdown1.classList.add('fa-angle-up');
        arrowdown1.classList.remove('fa-angle-down');    
    }
    else{
        header11.style.display = "none";
        header22.style.display = "block";
        arrowup1.classList.add('fa-angle-up');
        arrowup1.classList.remove('fa-angle-down');
        arrowdown1.classList.add('fa-angle-down');
        arrowdown1.classList.remove('fa-angle-up');
    }
}