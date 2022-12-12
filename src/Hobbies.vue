<script setup>
  
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
        <h1 class="title">Hobbies!!</h1>

        <div class="main row">
          <h2 class="row">I'm into 3D Printing and DIY Repair</h2>
          <p class="row">
            I got into 3D printing about 8 years ago, when I was working at Autodesk, which is a huge drafting software company.
            One day I found a humble little PrintrBot at a Maker garage sale.  I brought it home and tinkered with it tirelessly, until
            it was printing on par with machines which were hundreds of dollars more expensive.  I'm still tinkering today, and one of my favorite
            things to do is build new machines.  Here's some pics of some parts I'm working on lately.  I also print parts to repair things around the house or in the garage.
          </p>
          <img src="../images/IMG_9243.jpg" alt="part for cnc" title="cnc" class="column">
          <img src="../images/IMG_9351.jpg" alt="new printrbot" title="newbot" class="column">
        </div>
      </div>
    </div>
  
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
.column {
  float: left;
  width: 49%;
}

.row::after {
  content: "";
  clear: both;
  display: table;
}

</style>
