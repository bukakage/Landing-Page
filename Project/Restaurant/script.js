// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Add a hover effect to menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
      item.addEventListener('mouseover', function() {
        this.classList.add('hovered');
      });
  
      item.addEventListener('mouseout', function() {
        this.classList.remove('hovered');
      });
    });
  
    // Update the current year in the footer
    document.getElementById("year").innerHTML = new Date().getFullYear();
  });
  