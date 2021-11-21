<?php include 'inc/header.php' ?>

<body>

  <nav class="navbar text-center">
    <div class="container">
    <ul class="list-group list-group-horizontal justify-content-center">
      <a href="#intro" id="inicio" title="Inicio" data-bs-toggle="tooltip" data-bs-placement="bottom">
        <li class="list-group-item navbar-item border border-5">
          <i class="far fa-arrow-alt-circle-up"></i>
        </li>
      </a>
      <a href="#perfil" title="Perfil" data-bs-toggle="tooltip" data-bs-placement="bottom">
        <li class="list-group-item navbar-item border border-5">
          <i class="fas fa-user-tie"></i>
        </li>
      </a>
      <a href="#proyectos" title="Proyectos" data-bs-toggle="tooltip" data-bs-placement="bottom">
        <li class="list-group-item navbar-item border border-5">
          <i class="fas fa-briefcase"></i>
        </li>
      </a>
      <a href="#contacto" title="Contacto" data-bs-toggle="tooltip" data-bs-placement="bottom">
        <li class="list-group-item navbar-item border border-5">
          <i class="fas fa-at"></i>
        </li>
      </a>
    </ul>
    </div>
  </nav>

  <header class="intro" id="intro">
    <div class="container">
      <div class="position-absolute top-50 start-50 translate-middle">
        <picture>
          <img src="public/img/logo.png" alt="Cristian Dizeo">
        </picture>
        <h1 class="display-1">Cristian Dizeo</h1>
        <h4>- Portfolio -</h4>
      </div>
    </div>
  </header>

  <!-- Perfil -->
  <section id="perfil">
    <div class="container">
      <div class="row">
        <h1 class="text-center section-title">Perfil</h1>
      </div>
      <div class="row">
        <p class="text-center section-subtitle">Analista de sistemas👨‍💻 Programador trainee⌨️ Papá de Luisina &#129392;
        </h4>
      </div>
    </div>

    <div class="row">
      <div class="col text-center">
        <img class="foto-circle" src="public/img/face.jpg" alt="">
        <h3>Cristian Dizeo</h3>
        <hr>
        <ul class="list-group list-group-horizontal justify-content-center">
          <a target="_blank" href="https://www.github.com/cristiandizeo">

            <li class="list-group-item btn btn-outline-dark"> <i class="fab fa-github"></i>
            </li>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/cristian-dizeo">

            <li class="list-group-item btn btn-outline-primary"> <i class="fab fa-linkedin"></i>
            </li>
          </a>
          <a target="_blank" href="https://www.instagram.com/dizeo_">
            <li class="list-group-item btn btn-outline-warning">
              <i class="fab fa-instagram"></i>
            </li>
          </a>
          <a target="_blank" href="https://www.facebook.com/cdizeo">
            <li class="list-group-item btn btn-outline-primary">
              <i class="fab fa-facebook-f"></i>
            </li>
          </a>
        </ul>

      </div>

      <div class="col">
        <h4>Skills / Habilidades</h1>
          <hr>
          <div class="skills">
            <div class="bar front expert" data-skill="HTML5"></div>
            <div class="bar front advanced" data-skill="CSS3"></div>
            <div class="bar back intermediate" data-skill="PHP"></div>
            <div class="bar back intermediate" data-skill="JavaScript"></div>
            <div class="bar back basic" data-skill="Laravel"></div>
            <div class="bar learning" data-skill="GIT"></div>
          </div>

          <div class="container text-center p-5">
            <h4><a href="#"> Descargar mi CV</a></h4>
          </div>
      </div>
    </div>

  </section>

  <section id="proyectos">
    <div class="container">
      <div class="row">
        <h1 class="text-center section-title">Proyectos</h1>
      </div>
      <div class="row">
        <p class="text-center section-subtitle">Trabajos realizados &#128188;</h4>
      </div>

    </div>
    <div class="card-group">
      <div class="card">
        <img src="public\img\img-ejemplo.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div class="card">
        <img src="public\img\img-ejemplo.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div class="card">
        <img src="public\img\img-ejemplo.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
    <div class="card-group">
      <div class="card">
        <img src="public\img\img-ejemplo.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div class="card">
        <img src="public\img\img-ejemplo.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div class="card">
        <img src="public\img\img-ejemplo.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </section>

  <section id="contacto">
    <div class="container">
      <div class="row">
        <h1 class="text-center section-title">Contacto</h1>
      </div>
      <div class="row">
        <p class="text-center section-subtitle">Enviame tu propuesta o consulta &#128172;</p>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="mb-3">
            <label for="nombre" class="form-label">Tu nombre</label>
            <input type="text" class="form-control" id="nombre" placeholder="Nombre">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Tu email</label>
            <input type="text" class="form-control" id="email" placeholder="Email">
          </div>
          <div class="mb-3">
            <label for="mensaje" class="form-label">Tu consulta</label>
            <textarea type="text" class="form-control" id="mensaje" placeholder="Mensaje">
</textarea>
          </div>
          <button class="btn btn-danger">¡Enviar!</button>
        </div>
        <div class="col text-center">
          <h4> 🌎 Soy de Santa Rosa, La Pampa (Argentina)</h4>
          <iframe id="mapita" title="Mi lugar en el mundo" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102473.33141371551!2d-64.3712757016435!3d-36.61936685462427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c2cd07f7558a33%3A0x7bda8c2a7b70fd81!2sSanta%20Rosa%2C%20La%20Pampa!5e0!3m2!1ses-419!2sar!4v1637509348112!5m2!1ses-419!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  </section>

</body>

<?php include 'inc/footer.php' ?>