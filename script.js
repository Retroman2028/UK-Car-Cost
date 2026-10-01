function calculateCost() {

    const mileage = Number(document.getElementById("mileage").value);
    const mpg = Number(document.getElementById("mpg").value);
    const fuelPrice = Number(document.getElementById("fuelPrice").value);

    const insurance = Number(document.getElementById("insurance").value);
    const tax = Number(document.getElementById("tax").value);
    const mot = Number(document.getElementById("mot").value);
    const service = Number(document.getElementById("service").value);
    const repairs = Number(document.getElementById("repairs").value);

    if (mileage <= 0 || mpg <= 0 || fuelPrice < 0) {
        alert("Please enter valid mileage, MPG and fuel price.");
        return;
    }

    const litresUsed = (mileage / mpg) * 4.54609;
    const fuelCost = litresUsed * fuelPrice;

    const fixedCosts =
        insurance +
        tax +
        mot +
        service +
        repairs;

    const yearlyCost = fuelCost + fixedCosts;
    const monthlyCost = yearlyCost / 12;
    const costPerMile = yearlyCost / mileage;

    const result = document.getElementById("result");

    result.style.display = "block";

    result.innerHTML = `
        <h2>Estimated running cost</h2>

        <div class="big-result">
            £${monthlyCost.toFixed(2)} / month
        </div>

        <div class="secondary-result">
            £${yearlyCost.toFixed(2)} / year
            ·
            ${(costPerMile * 100).toFixed(1)}p / mile
        </div>

        <div class="breakdown">

            <h3>Annual breakdown</h3>

            <p>⛽ Fuel: £${fuelCost.toFixed(2)}</p>
            <p>🛡️ Insurance: £${insurance.toFixed(2)}</p>
            <p>🚘 Road tax: £${tax.toFixed(2)}</p>
            <p>🔧 MOT: £${mot.toFixed(2)}</p>
            <p>🧰 Servicing: £${service.toFixed(2)}</p>
            <p>⚙️ Repairs: £${repairs.toFixed(2)}</p>

        </div>
    `;
}
