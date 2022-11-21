<template>
    <div class="footer">
      <div class="container row">
        <h1>This was made by:</h1>

        <div class="socials socials-left">
          <ul class="footer_list">
            <li class="footer_item">
              <a
                href="https://github.com/purplehippo911"
                target="_blank"
                class="footer_link"
              > 
              <strong>Purplehippo911 
                <i class="socials-icon"></i>
              </strong>
            </a>
            </li>
            <li class="list_item"></li>
            <li class="list_item"></li>
          </ul>
        </div>
        
        <div class="socials socials-right">
          <ul class="footer_list">
            <li class="list_item"></li>
            <li class="list_item"></li>
            <li class="list_item"></li>
          </ul>
        </div>

      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MainFooter",
    props: {
    },
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  