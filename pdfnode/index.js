var pdf = require("html-pdf");
var ejs = require("ejs");

var coisa = "né";
var bah = "bah";

ejs.renderFile("./htmlPDF.ejs",{coisa: coisa, bah: bah}, (error, html) =>{
    if (error) {
        console.log("Erro")
    } else {
        pdf.create(html,{}).toFile("./texte.pdf", (error, res) => {
            if (error){
                console.log("Erro")
            } else {
                console.log(res)
            }
        });
    }
});