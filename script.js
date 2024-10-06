    <script>
        const stations = [];
        function createStation() {
            const name = document.getElementById('stationName').value.trim();
            const maxCapacity = parseInt(document.getElementById('maxCapacity').value);

            if (name && !isNaN(maxCapacity) && maxCapacity > 0) {
                const station = {
                    name,
                    maxCapacity,
                    currentTrains: 0
                };

                stations.push(station);
                updateStationList();
                clearInputs('stationName', 'maxCapacity');
            } else {
                alert("Invalid input. Please try again.");
            }
        }

        function addTrains() {
            const stationName = document.getElementById('addStationName').value.trim();
            const number = parseInt(document.getElementById('addTrainsCount').value);

            if (number && !isNaN(number) && number > 0) {
                const station = findStation(stationName);

                if (!station) {
                    alert(`Station ${stationName} not found.`);
                    return;
                }

                station.currentTrains += number;

                if (station.currentTrains > station.maxCapacity) {
                    alert(`${station.name} has exceeded its capacity! Current trains: ${station.currentTrains}, Max capacity: ${station.maxCapacity}`);
                    station.currentTrains = station.maxCapacity; // Set to max capacity
                }

                updateStationList();
                clearInputs('addStationName', 'addTrainsCount');
            } else {
                alert("Invalid input. Please try again.");
            }
        }


        function removeTrains() {
            const stationName = document.getElementById('removeStationName').value.trim();
            const number = parseInt(document.getElementById('removeTrainsCount').value);

            if (number && !isNaN(number) && number > 0) {
                const station = findStation(stationName);

                if (!station) {
                    alert(`Station ${stationName} not found.`);
                    return;
                }

                station.currentTrains -= number;

                if (station.currentTrains < 0) {
                    station.currentTrains = 0;
                }

                updateStationList();
                clearInputs('removeStationName', 'removeTrainsCount');
            } else {
                alert("Invalid input. Please try again.");
            }
        }


        function findStation(name) {
            return stations.find(station => station.name === name);
        }


        function updateStationList() {
            const listElement = document.getElementById('stationList');

            listElement.textContent = stations.map(station =>
                `${station.name}: Current Trains - ${station.currentTrains}, Max Capacity - ${station.maxCapacity}`
            ).join('\n') || "No stations created yet.";
        }


        function clearInputs(...ids) {
            ids.forEach(id => document.getElementById(id).value = '');
        }

    </script>
