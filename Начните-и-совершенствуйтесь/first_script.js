const BANK_ACC = 1300;
const TAX_RATE = 0.08;
const PHONE_PRICE = 100;
const ACC_PRICE = 10;
const BUY_ACC_LIMIT = 600;

var bank_acc = BANK_ACC

function tax (current_buy) {
    buy_plus_tax = current_buy + current_buy * TAX_RATE;
    return buy_plus_tax
}

function format (number) {
    formatted_number = String(number) + "$"
    return formatted_number
}

while (bank_acc > 0) {
    console.log(format(bank_acc));
    
    buy_phone = tax(PHONE_PRICE);
    if ((bank_acc - buy_phone) < 0) {
        console.log('Я больше не могу покупать телефоны');
        break;
    }
    
    bank_acc = bank_acc - buy_phone;
    console.log('Купил телефон');

    buy_acc = tax(ACC_PRICE)
    if (bank_acc - buy_acc > BUY_ACC_LIMIT) {
        bank_acc = bank_acc - ACC_PRICE;
        console.log('Купил к нему акссесуар');
    }

}