function darkMode() {
    const toggleIcon = document.querySelector(".toogle-icon");
    toggleIcon.addEventListener("click", () => {
        toggleIcon.classList.toggle('bxs-sun');
        document.body.classList.toggle('dark-mode');
    })

}
darkMode();

function getAddMoneyMenu() {
    var addMoneyMenu = document.getElementById("addMoneyMenu");
    if(addMoneyMenu.style.display==="none") {
        addMoneyMenu.style.display="block"
    } else {
        addMoneyMenu.style.display="none"
    }

}

function exitAddMoneyMenu() {
    var addMoneyMenu = document.getElementById("addMoneyMenu");
    addMoneyMenu.style.display="none"
}

function getBalance() {
    var balance = document.getElementById("balance");
    var toggleIcon = document.querySelector(".total_balance .toggle-icon")
    if(balance.style.display==="none") {
        balance.style.display="block";
        toggleIcon.style.display="none"
    } else {
        balance.style.display="none"
        toggleIcon.style.display=""
    }
}

const getTransferMenu = () => {
    var transferMenu = document.getElementById("transferMenu");
    if(transferMenu.style.display==="none") {
        transferMenu.style.display="block"
    } else {
        transferMenu.style.display="none"
    }
}

const exitTransferMenu = () => {
    var transferMenu = document.getElementById("transferMenu");
    transferMenu.style.display="none";
}

const getWithdrawMenu = () => {
    var withdrawMenu = document.getElementById("withdrawMenu");
    if (withdrawMenu.style.display==="none") {
        withdrawMenu.style.display="block"
    } else {
        withdrawMenu.style.display="none"
    }
}

const exitWithdrawMenu = () => {
    var withdrawMenu = document.getElementById("withdrawMenu");
    withdrawMenu.style.display="none";
}

const getMeMenu = () => {
    var meMenu = document.getElementById("meMenu");
    var homeBtn = document.querySelector(".bottom_bar ul li:first-child i");
    var homeIcon = document.querySelector(".bottom_bar ul li:first-child p");

    if (meMenu.style.display==="none") {
        meMenu.style.display="block";
    } else {
        meMenu.style.display="none";
    }
};

const exitMeMenu = () => {
    var meMenu = document.getElementById("meMenu");
    meMenu.style.display="none"
}