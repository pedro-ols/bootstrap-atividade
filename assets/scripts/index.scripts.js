function teste() {
    const nome = document.getElementById("nome").value;
    alert(nome);
}

function enviarEmail() {

    const public_key = "i9a8adgcZLrqFTbuW";
    const secret_key = "YCDCCIv-4wg44_Y6zau-2";

    (function () {
        emailjs.init(public_key);
    })();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos.");
        return;
    };

    const params = {
        nome: nome,
        email: email,
        mensagem: mensagem,
    };

    const serviceID = "service_9q0azum";
    const templateID = "template_f9dbzij";

    emailjs.send(serviceID, templateID, params).then((res) => {
        document.getElementById("nome") = "";
        document.getElementById("email") = "";
        document.getElementById("mensagem") = "";
        console.log(res);
        alert("Sua mensagem foi enviada para a PonteShop!");
    })
        .catch((err) => console.log(err));    
};