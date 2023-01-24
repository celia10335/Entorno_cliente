function newFondo() {
    let cuerpo = document.getElementsByTagName("body")[0];
    document.addEventListener("keydown", function (ev1) {
        document.addEventListener("keypress", function (ev2) {
            if ((ev2.code == "KeyR") && (ev1.code == "Space")) {
                let random = parseInt(Math.random() * 9);

                cuerpo.style.backgroundImage = `url('fondo${random}.jpg')`;
                cuerpo.style.backgroundSize = "cover";
            }

        })

    })


}

/*
        document.addEventListener("keypress", function (ev2) {
            if ((ev2.code == "KeyR") && (ev1.ctrlKey == true)) {
                cuerpo.style.backgroundColor = "purple";
            }

        })
    document.addEventListener("keypress", (ev3) => {
        console.log(ev3.code);
    }) */

//this.location = "https://images.unsplash.com/photo-1670922657788-d92272b59c95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NDU5NTE4NQ&ixlib=rb-4.0.3&q=80&w=1080";