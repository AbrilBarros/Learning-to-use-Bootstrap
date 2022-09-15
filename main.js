let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .typeString('La Capital del Sol')
  .pauseFor(200)
  .deleteChars(10)
  .start();