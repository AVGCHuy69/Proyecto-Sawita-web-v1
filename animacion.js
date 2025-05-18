 const interactiveCards = document.querySelectorAll('.producto');

  const MAX_ROTATION = 12;
  const LIFT_Y_AMOUNT = -15;
  const LIFT_Z_AMOUNT = 40;

  // Iterar sobre cada tarjeta y aplicar los listeners
  interactiveCards.forEach(cardElement => {
    cardElement.addEventListener('mousemove', (event) => {
      // 'cardElement' es la tarjeta específica sobre la que está el mouse
      const rect = cardElement.getBoundingClientRect();
      const mouseX = event.clientX - rect.left - rect.width / 2;
      const mouseY = event.clientY - rect.top - rect.height / 2;

      const rotateY = (mouseX / (rect.width / 2)) * MAX_ROTATION;
      const rotateX = -(mouseY / (rect.height / 2)) * MAX_ROTATION;

      cardElement.style.transform = `translateY(${LIFT_Y_AMOUNT}px) translateZ(${LIFT_Z_AMOUNT}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      const relativeMouseX = event.clientX - rect.left;
      const relativeMouseY = event.clientY - rect.top;
      cardElement.style.setProperty('--mouse-x', `${relativeMouseX}px`);
      cardElement.style.setProperty('--mouse-y', `${relativeMouseY}px`);
    });

    cardElement.addEventListener('mouseleave', (event) => {
      // 'cardElement' es la tarjeta específica de la que salió el mouse
      cardElement.style.transform = 'translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg)';
    });
  });
