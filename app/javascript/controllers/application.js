import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

window.addEventListener("turbolinks:load", () => {
    hideNotice();
  });
  
  function hideNotice() {
    const notification = document.querySelector('.notification')
    if (notification) {
      setInterval(function() {
        notification.classList.add('fade');
      }, 5000);
    }
  }
  
  console.log("test")
export { application }
