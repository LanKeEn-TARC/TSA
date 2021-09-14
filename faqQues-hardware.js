//to display ques and ans div onclick
var active = document.querySelectorAll('.expand');

for (var i = 0; i < active.length; i++) {
    active[i].addEventListener('click', function() {
        this.classList.toggle('.active');

        var showDes = this.nextElementSibling;

        if (showDes.style.display === 'block') {
            showDes.style.display = 'none';
        } else {
            showDes.style.display = 'block';
        }

    })
}