<script setup>
  let drag = false;
  let [offsetX, offsetY, coordX, coordY] = [0, 0, 0, 0];
  function startDrag(e) {

    // get element target or window event
    if (!e) {
      const e = window.event;
    }

    const mytarg = e.target;

    if (mytarg.className != 'dragme') {
      return
    };
    
    // boilerplate window coordinates
    offsetX = e.clientX;
    offsetY = e.clientY;

    if (!mytarg.style.left) {
      mytarg.style.left = '0px'
    };
    if (!mytarg.style.top) {
      mytarg.style.top = '0px'
    };

    coordX = parseInt(mytarg.style.left);
    coordY = parseInt(mytarg.style.top);
    drag = true;

    document.onmousemove = dragDiv;
    return false;
  }

  function dragDiv(e) {
    if (!drag) {
      return
    };
    if (!e) {
      const e = window.event
    };
    const mytarg = e.target;

    mytarg.style.left = coordX + e.clientX - offsetX + 'px';
    mytarg.style.top = coordY + e.clientY - offsetY + 'px';
    return false;
  }

  function stopDrag() {
    drag = false;
  }
  
  window.onload = function() {
    document.onmousedown = startDrag;
    document.onmouseup = stopDrag;
  }
</script>

<template>
  <div class="wrapper">
      <header>
        <nav>
          <ul>
            <li><a href="./index.html">Home</a></li>
            <li><a href="./why-cs601.html">CS 601</a></li>
            <li><a href="./whats-next.html">What's Next?</a></li>
          </ul>
        </nav>
      </header>
      <div class="content" role="main">
        <!-- This is the start of content for our page -->
        <h1 class="title">Photos!!</h1>

        <div class="main row">
          <h2 class="row">Check out a few photos.  Hint: I'm using some JavaScript here.</h2>
          <img src="../images/IMG_4627.jpg" alt="me and kiddo" title="mekid" class="dragme">
          <img src="../images/IMG_7058.png" alt="me as bear" title="halloween" class="dragme">
          <img src="../images/IMG_7714.jpg" alt="my new guitar" title="newguitar" class="dragme">
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="links">
      <a href="https://www.instagram.com/4m1r/?hl=en" class="fa fa-instagram"></a>
      <!-- <a href="#" class="fa fa-twitter"></a> -->
      </div>      
    </footer>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
img {
  width : 20em;
  height: auto;
  will-change: filter;
}
img:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.main.row{
  margin:auto;
  display:block;
}
/* Style all font awesome icons */
.fa {
  padding: 20px;
  font-size: 30px;
  width: 70px;
  text-align: center;
  text-decoration: none;
  border-radius: 50%;
  margin-right: 10px;
}

/* Add a hover effect if you want */
.fa:hover {
  opacity: 0.7;
}

/* Set a specific color for each brand */

/* Facebook */
.fa-instagram {
  background: orange;
  color: white;
}

/* Twitter */
.fa-twitter {
  background: #55ACEE;
  color: white;
}
</style>
