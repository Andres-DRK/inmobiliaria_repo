const propiedades_venta = [
    {
      titulo: "Apartamento de lujo en zona exclusiva",
      descripcion:
        "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
      direccion: "123 Luxury Lane, Prestige Suburb, CA 45678",
      habitaciones: 4,
      banos: 4,
      precio: 5000,
      fumar: false,
      mascotas: false,
      imagen:
        "https://www.phillyaptrentals.com/wp-content/uploads/2020/09/luxury-apartment-scaled.jpg",
    },
    {
      titulo: "Casa acogedora en zona rural",
      descripcion:
        "Esta casa acogedora está situado en lo alto de una montaña con impresionantes vistas",
      direccion: "789 Mountain Road, Summit Peaks, CA 23456",
      habitaciones: 2,
      banos: 1,
      precio: 1200,
      fumar: true,
      mascotas: true,
      imagen:
        "https://media3.clubrural.com/imgmarcao/asturias/apartamentos-rurales-la-torre/142282_apartamentos-rurales-la-torre_1391113751_o.jpg",
    },
    {
      titulo: "Penthouse de lujo con terraza panorámica",
      descripcion:
        "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
      direccion: "567 Skyline Avenue, Skyview City, CA 56789",
      habitaciones: 3,
      banos: 3,
      precio: 4500,
      fumar: false,
      mascotas: true,
      imagen:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    },
    {
      titulo: "Casona Blu Acqua",
      descripcion: "Este lujoso departamento cuenta con vista al mar",
      direccion: "332 Miami Beach, Miami, FL 33101",
      habitaciones: 2,
      banos: 2,
      precio: 4300,
      fumar: false,
      mascotas: true,
      imagen:
        "https://th.bing.com/th/id/R.470c283b6c3f86d6e17fdc41508bad0b?rik=tz5vkZsecgAUkg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-SSv1BZ5Uh9Q%2fU8Q6sbOxAlI%2fAAAAAAAACCo%2f0XpzHemw4A4%2fs1600%2fArquitectura-Casa-de-playa-isla-Creta.jpg&ehk=07423ySdgy7MFt3caU5X7jZtoD0deh6htXczw05VKqo%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      titulo: "Casa en zona residencial",
      descripcion:
        "Este hermosa casa con estilo vintage se encuentra en un vecindario muy tranquilo de la ciudad",
      direccion: "2232 Quiet Road, Quiet City, CA 74231",
      habitaciones: 3,
      banos: 2,
      precio: 4000,
      fumar: true,
      mascotas: true,
      imagen:
        "https://th.bing.com/th/id/R.4152e644fdc971b1e6c0533305ca81a1?rik=e2WGk8qSpm8h4w&riu=http%3a%2f%2fwww.proyectosdecasas.es%2ffiles%2fimages%2fcasas-modernas-zx98.jpg&ehk=IN8WmySAqIlXLvV5FjThfwv4DEbinwqHnRekTSuZo7w%3d&risl=&pid=ImgRaw&r=0",
    },
  ];
  const propiedades_alquiler = [
    {
      titulo: "Apartamento en el centro de la ciudad",
      descripcion:
        "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
      direccion: "123 Main Street, Anytown, CA 91234",
      habitaciones: 2,
      banos: 2,
      precio: 2000,
      fumar: false,
      mascotas: true,
      imagen:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    },
    {
      titulo: "Apartamento luminoso con vista al mar",
      descripcion:
        "Este hermoso apartamento ofrece una vista impresionante al mar",
      direccion: "456 Ocean Avenue, Seaside Town, CA 56789",
      habitaciones: 3,
      banos: 3,
      precio: 2500,
      fumar: true,
      mascotas: true,
      imagen:
        "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      titulo: "Condominio moderno en zona residencial",
      descripcion:
        "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
      direccion: "123 Main Street, Anytown, CA 91234",
      habitaciones: 2,
      banos: 2,
      precio: 2200,
      fumar: false,
      mascotas: false,
      imagen:
        "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    },
    {
      titulo: "Hermoso departamento en zona turistica",
      descripcion:
        "Excelente departamento cuenta con la mejor ubicación cercano a los lugares turisticos",
      direccion: "123 Quentin Street, City of Quentin, CA 31231",
      habitaciones: 2,
      banos: 1,
      precio: 1800,
      fumar: true,
      mascotas: false,
      imagen:
        "https://www.mintyhost.com/wp-content/uploads/2023/10/Captura-de-pantalla-2020-08-06-a-las-11.23.50.png",
    },
    {
      titulo: "HomeStudio para estudiante",
      descripcion:
        "Amplio Home Studio perfecto para estudiante, cercano a las mejores universidades",
      direccion: "123 Main Street, Anytown, CA 91234",
      habitaciones: 1,
      banos: 1,
      precio: 1200,
      fumar: true,
      mascotas: false,
      imagen:
        "https://th.bing.com/th/id/OIP.UeWRjbfbVvA4GIfsscub5gHaEC?rs=1&pid=ImgDetMain",
    },
  ];
  
  function mostrarPropiedades() {
    const paginaActual = window.location.pathname;
    const seccionVenta = document.querySelector(".venta .row");
    const seccionAlquiler = document.querySelector(".alquiler .row");
    if (seccionVenta) {
      let cont = 0;
      propiedades_venta.forEach((enVenta) => {
        const propiedadVentaHtml = `
          <div class="col-md-4 mb-4">
              <div class="card">
                <img
                  src="${enVenta.imagen}"
                  class="card-img-top"
                  alt="Imagen del departamento"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    ${enVenta.titulo}
                  </h5>
                  <p class="card-text">
                    ${enVenta.descripcion}
                  </p>
                  <p>
                    <i class="fas fa-map-marker-alt"></i> 
                    ${enVenta.direccion}
                  </p>
                  <p>
                    <i class="fas fa-bed"></i> ${enVenta.habitaciones} |
                    <i class="fas fa-bath"></i> ${enVenta.banos}
                  </p>
                  <p><i class="fas fa-dollar-sign"></i>${enVenta.precio}</p>
                  <p class="${enVenta.fumar ? "permitido" : "no-permitido"}">
                  <i class="fas fa-smoking-ban"></i> ${
                    enVenta.fumar ? "Permitido fumar" : "No se permite fumar"
                  }
                </p>
                <p class="${enVenta.mascotas ? "permitido" : "no-permitido"}">
                  <i class="fa-solid fa-ban"></i> ${
                    enVenta.mascotas
                      ? "Mascotas permitidas"
                      : "No se permiten mascotas"
                  }
                </p>
                </div>
              </div>
            </div>
          `;
        if (paginaActual.includes("propiedades_venta.html")) {
          seccionVenta.innerHTML += propiedadVentaHtml;
        } else if (paginaActual.includes("index.html") && cont < 3) {
          seccionVenta.innerHTML += propiedadVentaHtml;
        }
        cont++;
      });
    }
  
    if (seccionAlquiler) {
      let cont = 0;
      propiedades_alquiler.forEach((enAlquiler) => {
        const propiedadAlquilerHtml = `
        <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${enAlquiler.imagen}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${enAlquiler.titulo}
                </h5>
                <p class="card-text">
                  ${enAlquiler.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> 
                  ${enAlquiler.direccion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${enAlquiler.habitaciones} |
                  <i class="fas fa-bath"></i> ${enAlquiler.banos}
                </p>
                <p><i class="fas fa-dollar-sign"></i>${enAlquiler.precio}</p>
                <p class="${enAlquiler.fumar ? "permitido" : "no-permitido"}">
                <i class="fas fa-smoking-ban"></i> ${
                  enAlquiler.fumar ? "Permitido fumar" : "No se permite fumar"
                }
                </p>
                <p class="${enAlquiler.mascotas ? "permitido" : "no-permitido"}">
                  <i class="fa-solid fa-ban"></i> ${
                    enAlquiler.mascotas
                      ? "Mascotas permitidas"
                      : "No se permiten mascotas"
                  }
                </p>
              </div>
            </div>
          </div>
        `;
        if (paginaActual.includes("propiedades_alquiler.html")) {
          seccionAlquiler.innerHTML += propiedadAlquilerHtml;
        } else if (paginaActual.includes("index.html") && cont < 3) {
          seccionAlquiler.innerHTML += propiedadAlquilerHtml;
        }
        cont++;
      });
    }
  }
  
  document.addEventListener("DOMContentLoaded", mostrarPropiedades);