/* eslint-disable */

// Configuration
const socket = io();
const client = feathers();
client.configure(feathers.socketio(socket));

const loadData = async () => {
  const div = document.querySelector("#app");

  const hospitals = await client.service("hospitals").find();
  div.innerHTML = `<ol>${hospitals.data
    .map(h => `<li>${h.name} - ${h.owner}</li>`)
    .join("")}</ol>`;
};

client.service("hospitals").on("created", loadData);

loadData();
