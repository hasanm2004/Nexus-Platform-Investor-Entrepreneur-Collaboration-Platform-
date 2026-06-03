let meetings = JSON.parse(localStorage.getItem("meetings")) || [];

const table = document.getElementById("meetingTable");
const addBtn = document.getElementById("addMeetingBtn");

function renderMeetings() {

    table.innerHTML = "";

    meetings.forEach((m, index) => {

        table.innerHTML += `
        <tr>
            <td>${m.name}</td>
            <td>${m.date}</td>
            <td>
                <span id="status-${index}" style="color:${m.statusColor}">
                    ${m.status}
                </span>
            </td>
            <td>
                <button class="btn btn-success btn-sm" onclick="accept(${index})">Accept</button>
                <button class="btn btn-danger btn-sm" onclick="reject(${index})">Reject</button>
                <button class="btn btn-secondary btn-sm" onclick="removeMeeting(${index})">Delete</button>
            </td>
        </tr>
        `;

    });

    localStorage.setItem("meetings", JSON.stringify(meetings));
}

addBtn.addEventListener("click", () => {

    const name = document.getElementById("meetingName").value;
    const date = document.getElementById("meetingDate").value;

    if (!name || !date) {
        alert("Please fill all fields");
        return;
    }

    meetings.push({
        name,
        date,
        status: "Pending",
        statusColor: "orange"
    });

    renderMeetings();

});

window.accept = function(index) {
    meetings[index].status = "Accepted";
    meetings[index].statusColor = "green";
    renderMeetings();
}

window.reject = function(index) {
    meetings[index].status = "Rejected";
    meetings[index].statusColor = "red";
    renderMeetings();
}

window.removeMeeting = function(index) {
    meetings.splice(index, 1);
    renderMeetings();
}

// load first time
renderMeetings();