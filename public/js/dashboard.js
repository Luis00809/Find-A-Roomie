const createRoom = document.querySelector('#roomBTN');
const roommateData = document.querySelector('#roommateBTN');


const createRoomHandler = async (event) => {
    event.preventDefault();

    const address = document.querySelector('#address').value;
    const description = document.querySelector('#description').value;
    const creditScore = document.querySelector('#creditScore').value;
    const rent = document.querySelector('#rent').value;
    const smoking = document.querySelector('#smoking').value;
    const gender = document.querySelector('#gender').value;
    const room_id = 2;
    // route works need to set foreign keys to user id after a user logs in
    // may get value issues from model

    // console.log(address);
    // console.log(description);
    // console.log(creditScore);
    // console.log(rent);
    // console.log(smoking);
    // console.log(gender);
    // console.log(room_id);


    if (address && description && creditScore && rent && smoking && gender && room_id) {
        const response = await fetch('/api/dashboard/room', {
            method: 'POST',
            body: JSON.stringify({ address, description, creditScore, rent, smoking, gender, room_id }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard/userPage');
        } else {
            alert('Failed to Post!')

        };
    };
};


const createRoommateHandler =  async (event) => {
    event.preventDefault();

    const bio = document.querySelector('#bio').value;
    const budget = document.querySelector('#budget').value;
    const prefferedGender = document.querySelector('#prefferedGender').value;
    const smoke = document.querySelector('#tolerateSmoking').value;
    // const roomate_id = 23;
    // route works need to set foreign keys to user id after a user logs in

    // console.log(bio);
    // console.log(budget);
    // console.log(prefferedGender);
    // console.log(smoke);
    // console.log(roomate_id);


    if (bio && budget && prefferedGender && smoke && roomate_id) {
        const roommateBio = await fetch('/api/dashboard/form', {
            method: 'POST',
            body: JSON.stringify({bio, budget, prefferedGender, smoke, roomate_id}),
            headers: { 'Content-Type': 'application/json'}
        });

        if (roommateBio.ok) {
            document.location.replace('/dashboard/userPage')
        } else {
            alert('Failed to Post!')
        };
    };
};
createRoom.addEventListener('click', createRoomHandler);
roommateData.addEventListener('click', createRoommateHandler);