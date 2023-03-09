const headerContainer = document.getElementById("header-container");
const emergencyTasks = document.getElementsByClassName("emergency-tasks");
const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks');
const footerContainer = document.getElementById('footer-container');
const changingH3 = document.querySelectorAll('h3');

const changeColors = () => {
    headerContainer.style.backgroundColor = 'green';
    emergencyTasks[0].style.backgroundColor = '#ff9f84';
    noEmergencyTasks[0].style.backgroundColor = '#f9db5e';
    changingH3[0].style.backgroundColor = 'purple';
    changingH3[1].style.backgroundColor = 'purple';
    changingH3[2].style.backgroundColor = 'black';
    changingH3[3].style.backgroundColor = 'black';
    footerContainer.style.backgroundColor = '#003533';
    footerContainer.style.marginBottom = 0;
}

changeColors()