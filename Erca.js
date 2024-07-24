  <script>
        document.addEventListener("DOMContentLoaded", function () {
            var imagenes = ["img/imagen (12).jpeg", "img/imagen (7).jpeg","img/imagen (11).jpeg", "img/imagen (10).jpeg", "img/imagen (6).jpeg", "img/exp 1.png", "img/exp 2.png", "img/exp 3.jpeg", "img/exp 4.jpeg", "img/exp 6.jpeg", "img/exp 5.jpeg", "img/exp 7.png", "img/exp 8.jpeg"];
            var index = 0;
    
            function cambiarImagen() {
                document.getElementById("imagenPrincipal").src = imagenes[index];
                index = (index + 1) % imagenes.length;
                setTimeout(cambiarImagen, 5000);
            }
    
            cambiarImagen();
        });
    </script>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            // Configura el carrusel de imágenes
            const carruselContainer = document.querySelector('.carrusel-container');
            const carruselImagenes = document.querySelector('.carrusel-imagenes');

            let currentIndex = 0;

            // Cambia automáticamente las imágenes cada 4 segundos
            setInterval(() => {
                currentIndex = (currentIndex + 1) % carruselImagenes.children.length;
                actualizarCarrusel();
            }, 4000);

            function actualizarCarrusel() {
                const nuevaTransformacion = -currentIndex * 100 + '%';
                carruselImagenes.style.transform = `translateX(${nuevaTransformacion})`;
            }
        });
    </script>