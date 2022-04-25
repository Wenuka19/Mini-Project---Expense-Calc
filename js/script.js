document.addEventListener("keyup", check);
let expense = document.querySelector('#expense-name');
let date = document.querySelector('#date');
let expensetype = document.querySelector('#type');
let amount = document.querySelector('#amount');
let total = 0;

function deleteExpense(item) {
    let v = item.parentElement.parentElement.cells[2].innerHTML;
    total -= parseFloat(v);
    document.querySelector(".total-expense").innerHTML = total;
    item.parentElement.parentElement.remove();
}

function check() {
    if (((expense.value).trim() != 0) && ((date.value).trim() != 0) && ((amount.value).trim() != 0)) {
        document.getElementById("add-expense").classList.remove("not-active");
    }
    else {
        document.getElementById("add-expense").classList.add("not-active");
    }
}

function addExpense() {
    let regex = /^ (?: (?: 31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/g;
    if (regex.test(date.value)) {
        if (!isNaN(amount.value)) {
            let row = ""
            total += parseFloat(amount.value)
            if (expensetype.value === "Personal") {
                row = "<tr class='table-primary'><td>" + expense.value + "</td><td>" + date.value + "</td><td>" + amount.value + "</td><td>" + expensetype.value + "</td><td><button type='button' class='btn btn-danger' onclick='deleteExpense(this)'><i class='fa fa-times' aria-hidden='true'></i></button></td></tr>";
            }
            else {
                row = row = "<tr><td>" + expense.value + "</td><td>" + date.value + "</td><td>" + amount.value + "</td><td>" + expensetype.value + "</td><td><button type='button' class='btn btn-danger' onclick='deleteExpense(this)'><i class='fa fa-times' aria-hidden='true'></i></button></td></tr>";
            }
            document.querySelector(".table-body").innerHTML += row;
            document.querySelector(".total-expense").innerHTML = total;
            expense.value = "";
            date.value = "";
            expensetype.selectedIndex = 0;
            amount.value = "";
            check();
            return;
        }
        else {
            alert("Please enter a valid amount");
        }
    }
    else {
        alert("Please enter a valid date");
    }

}


