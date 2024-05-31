const form = document.getElementById('energy-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    if (validateForm()) {
        calculateTotalUnits();
    }
});

function validateForm() {
    const requiredFields = [
        'householdSize', 'houseSize', 'location', 
        'applianceAge', 'lightingType', 'lightingUsage', 
        'averageBill', 'energyEfficiencyInterest'
    ];
    
    for (const field of requiredFields) {
        const input = document.getElementById(field);
        if (!input.value.trim()) {
            alert(`Please fill in ${input.previousElementSibling.textContent}`);
            input.focus();
            return false;
        }
    }
    
    return true;
}

function calculateTotalUnits() {
    const applianceUnitValues = {
        refrigeratorQuantity: 10,
        washingMachineQuantity: 5,
        microwaveQuantity: 3,
        geyserQuantity: 5,
        acQuantity: 8,
        tvQuantity: 2,
        computerQuantity: 4
    };

    let totalUnits = 0;

    for (const appliance in applianceUnitValues) {
        const quantityInput = document.getElementById(appliance);
        const usageInput = document.getElementById(appliance.replace('Quantity', 'Usage'));
        const quantity = parseInt(quantityInput.value, 10) || 0;
        const usage = parseInt(usageInput.value, 10) || 0;
        totalUnits += applianceUnitValues[appliance] * quantity * usage;
    }

    window.location.href = `total_units.html?totalUnits=${totalUnits.toFixed(2)}`;
}
