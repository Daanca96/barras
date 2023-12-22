document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('preview');

    // Configuración de QuaggaJS
    Quagga.init({
        inputStream: {
            name: "Live",
            type: "LiveStream",
            target: video
        },
        decoder: {
            readers: ['ean_reader'] // Puedes ajustar según el tipo de código de barras que esperas
        }
    });

    // Inicia QuaggaJS y configura la devolución de llamada
    Quagga.start();

    Quagga.onDetected(function (result) {
        console.log('Código de barras detectado:', result.codeResult.code);
        // Puedes realizar acciones adicionales aquí, como enviar el código a tu servidor, etc.
    });
});
