document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const passengerId = urlParams.get('id');

    fetch(`/api/passengers/${passengerId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('passenger_id').value = data.passenger_id;
            document.getElementById('name').value = data.name;
            document.getElementById('identity_number').value = data.identity_number;
            document.getElementById('email').value = data.email;
            document.getElementById('phone_number').value = data.phone_number;
            document.getElementById('address').value = data.address;
            document.getElementById('age').value = data.age;
            document.getElementById('gender').value = data.gender;
        });

    document.getElementById('editForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        fetch(`/api/passengers/${passengerId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert('passenger Updated Successfully');
            window.location.href = `/passenger.html?id=${passengerId}`;
        });
    });
});
