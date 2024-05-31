  document.addEventListener('DOMContentLoaded', function() {
            const urlParams = new URLSearchParams(window.location.search);
            const totalUnits = urlParams.get('totalUnits');
            document.getElementById('totalUnits').textContent = `Total Units: ${totalUnits}`;

            window.goBack = function() {
                window.history.back();
            };
        });