var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://resourceful-bear-7t8a8z-dev-ed.trailblaze.my.salesforce-sites.com/testescristianofilho/embeddedService/sidebarApp.app?aura.format=JSON');
xhr.onload = function() {
  if (xhr.status === 200) {
    // do something with the response data  
  }
};
xhr.send();