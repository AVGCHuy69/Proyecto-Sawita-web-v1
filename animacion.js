const interactiveCards = document.querySelectorAll('.producto');

  // Valores de Rotación
  const DESKTOP_MAX_ROTATION = 12; // Grados para escritorio
  const MOBILE_MAX_ROTATION = 6;   // Grados para móvil (más sutil)

  // Valores de Levantamiento
  const DESKTOP_LIFT_Y = -15; // px
  const DESKTOP_LIFT_Z = 40;  // px
  const MOBILE_LIFT_Y = -5;  // px
  const MOBILE_LIFT_Z = 15; // px

  // Breakpoint para móviles
  const mobileBreakpoint = 768; // px

  interactiveCards.forEach(cardElement => {
    cardElement.addEventListener('mousemove', (event) => {
      const rect = cardElement.getBoundingClientRect();
      const mouseX = event.clientX - rect.left - rect.width / 2;
      const mouseY = event.clientY - rect.top - rect.height / 2;

      // Determinar valores actuales basados en el tamaño de pantalla
      let currentMaxRotation = DESKTOP_MAX_ROTATION;
      let currentLiftY = DESKTOP_LIFT_Y;
      let currentLiftZ = DESKTOP_LIFT_Z;

      const mediaQuery = window.matchMedia(`(max-width: ${mobileBreakpoint}px)`);
      if (mediaQuery.matches) { // Estamos en vista móvil
        currentMaxRotation = MOBILE_MAX_ROTATION;
        currentLiftY = MOBILE_LIFT_Y;
        currentLiftZ = MOBILE_LIFT_Z;
      }

      // Calcular rotación con el valor adaptado
      const rotateY = (mouseX / (rect.width / 2)) * currentMaxRotation;
      const rotateX = -(mouseY / (rect.height / 2)) * currentMaxRotation;

      // Aplicar transformaciones
      cardElement.style.transform = `translateY(${currentLiftY}px) translateZ(${currentLiftZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      cardElement.classList.add('glow-active');

      const relativeMouseX = event.clientX - rect.left;
      const relativeMouseY = event.clientY - rect.top;
      cardElement.style.setProperty('--mouse-x', `${relativeMouseX}px`);
      cardElement.style.setProperty('--mouse-y', `${relativeMouseY}px`);
    });

    cardElement.addEventListener('mouseleave', (event) => {
      cardElement.style.transform = 'translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg)';
      cardElement.classList.remove('glow-active');
    });
  });
  
