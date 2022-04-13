(() => {
  const playcound = (e) =>{
   const coundclip = document.querySelector(`audio[data-key="${e.keyCode}"]`)
   const keyelement = document.querySelector(`.key[data-key="${e.keyCode}"]`)
   
   if(!coundclip) return undefined;
   keyelement.classList.add('playing')
   coundclip.currentTime = 0;
   coundclip.play();
  }
  const removeTransition = (e) => {
  if(e.propertyName !== 'transform') return undefined;
  e.target.classList.remove('playing');
  }
  const keys = document.querySelectorAll('.key');
  keys.forEach(key =>key.addEventListener('transitionend',(e) => removeTransition(e,key)
  ));
  window.addEventListener('keydown',playcound)
  
})();