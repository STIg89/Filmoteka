let queueAddBtn = document.querySelector('.add-queue-btn');
let queueBtn = document.querySelector('.queue-btn');
let moviesQueue = [];

queueAddBtn.addEventListener('click', OnAddQueueClick);

async function getQueue() {

}

async function OnAddQueueClick(event) {
    event.preventDefault();
    queueAddBtn.disabled = true;

}